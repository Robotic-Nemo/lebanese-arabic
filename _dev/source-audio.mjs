#!/usr/bin/env node
// Online audio sourcing for the missing VOCAB words.
// Queries Wikimedia Commons (Lingua Libre + community uploads) for a recording of
// each missing Arabic word, scores results with the SAME logic the app's
// fetchCommonsAudio uses (Levantine apc/ajp >> MSA ara/arb), and INGESTS only
// matches whose recorded word EXACTLY equals the query (precision gate — never
// ingest a wrong-word clip). Outputs:
//   data/sourced-audio.js            const SOURCED_AUDIO = { "<ar>": {u:url,d:dialect,iso} }
//   _dev/sourced-audio-report.json   full run report (hits, by-dialect, misses count)
//
// Usage: node _dev/source-audio.mjs [limit] [offset]
//   limit  = how many missing words to process (default: all)
//   offset = skip this many (for resuming)   concurrency=6, polite stagger.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const UA = 'LebaneseArabicLearningApp/1.0 audio-coverage sourcing (educational, non-commercial)';
const stripDia = s => String(s || '').replace(/[ً-ٰٟـ]/g, '').trim();

const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, '_dev/audio-missing.json'), 'utf8'));
let words = manifest.missingSingleWords.map(w => w.ar);
const limit = parseInt(process.argv[2] || '0', 10);
const offset = parseInt(process.argv[3] || '0', 10);
if (offset) words = words.slice(offset);
if (limit) words = words.slice(0, limit);

function parseLL(rawTitle) {
  let t = rawTitle.replace(/^File:/i, '').replace(/\.(ogg|wav|mp3|flac|opus|webm|m4a)$/i, '');
  let langId = null, isoCode = null, word = t;
  const ll = /^LL-Q(\d+)\s*\(([^)]+)\)\s*-\s*([^-]+?)(?:\s*\([^)]+\))?\s*-\s*(.+)$/.exec(t);
  if (ll) { langId = ll[1]; isoCode = ll[2].toLowerCase(); word = ll[4].trim(); }
  else { const m = /^Ar-(.+)$/i.exec(t); if (m) word = m[1].trim(); }
  return { langId, isoCode, word, raw: rawTitle };
}
function dialectFor(it) {
  const iso = it.isoCode || '', raw = it.raw.toLowerCase();
  if (iso === 'apc' || iso === 'ajp' || it.langId === '31427' || raw.includes('leban') || raw.includes('beirut')) return '🌍 Levantine';
  if (raw.includes('syria') || raw.includes('damascus')) return '🌍 Levantine';
  if (iso === 'arb' || iso === 'ara') return '📚 MSA';
  return null; // other dialects (Maghrebi/Egyptian) or unknown — skip for precision
}

const sleep = ms => new Promise(r => setTimeout(r, ms));
async function apiGet(api, retries = 4) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const ctrl = new AbortController();
      const tid = setTimeout(() => ctrl.abort(), 12000);
      const res = await fetch(api, { headers: { 'User-Agent': UA }, signal: ctrl.signal });
      clearTimeout(tid);
      if (res.status === 429 || res.status === 503) {
        const ra = parseInt(res.headers.get('retry-after') || '0', 10);
        await sleep(ra ? ra * 1000 : Math.min(2000 * Math.pow(2, attempt), 16000));
        continue;
      }
      if (!res.ok) return { err: 'http' + res.status };
      return { data: await res.json() };
    } catch (e) { if (attempt === retries) return { err: 'err:' + (e.code || e.name || 'x') }; await sleep(1500 * (attempt + 1)); }
  }
  return { err: 'http429-exhausted' };
}
async function sourceOne(text) {
  const stripped = stripDia(text);
  const api = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(stripped)}+filemime:audio&gsrnamespace=6&gsrlimit=30&prop=imageinfo&iiprop=url|mime&format=json&maxlag=5`;
  const got = await apiGet(api);
  if (got.err) return { miss: got.err };
  const data = got.data;
  const pages = data?.query?.pages;
  if (!pages) return { miss: 'no-audio' };
  const items = Object.values(pages).map(p => {
    const url = p.imageinfo?.[0]?.url, mime = p.imageinfo?.[0]?.mime || '';
    if (!url || !mime.startsWith('audio/')) return null;
    const meta = parseLL(p.title || '');
    meta.wordStripped = stripDia(meta.word);
    return { ...meta, url, mime };
  }).filter(Boolean);
  if (!items.length) return { miss: 'no-audio' };
  // PRECISION GATE: recorded word must EXACTLY equal the query (diacritic-insensitive).
  const exact = items.filter(it => it.wordStripped === stripped);
  if (!exact.length) return { miss: 'no-exact' };
  // score exact matches by dialect proximity (Levantine first)
  const scored = exact.map(it => {
    let s = 0; const iso = it.isoCode || '', raw = it.raw.toLowerCase();
    if (iso === 'apc' || iso === 'ajp') s += 40;
    else if (iso === 'arb' || iso === 'ara') s += 20;
    if (it.langId === '31427') s += 30;
    if (raw.includes('leban') || raw.includes('beirut')) s += 25;
    else if (raw.includes('syria') || raw.includes('damascus')) s += 15;
    if (it.langId) s += 8;
    if (raw.includes('radio') || raw.includes('quran') || raw.includes('سورة') || raw.includes('news')) s -= 30;
    return { ...it, score: s, dialect: dialectFor(it) };
  }).filter(it => it.dialect) // only keep Levantine / MSA tagged
    .sort((a, b) => b.score - a.score);
  if (!scored.length) return { miss: 'no-tagged' };
  const best = scored[0];
  return { hit: { url: best.url, dialect: best.dialect, iso: best.isoCode || '', score: best.score, title: best.raw } };
}

// polite SERIAL run (Wikimedia API etiquette) with throttle + 429 backoff above
const CONC = 1;
const THROTTLE_MS = 1000;  // 1 req/s — very polite, minimizes 429 backoff churn
const out = {};   // ar -> {u,d,iso}
const report = { processed: 0, hits: 0, levantine: 0, msa: 0, missBreakdown: {}, samples: [] };
let idx = 0;
const DEADLINE = Date.now() + 18 * 60 * 1000; // hard 9-min budget so it never hangs
function writeOut() {
  const keys = Object.keys(out).sort();
  let js = '// Auto-generated by _dev/source-audio.mjs — online-sourced audio for words missing a clip.\n';
  js += '// Wikimedia Commons / Lingua Libre recordings, EXACT-word-matched, dialect-tagged.\n';
  js += '// Levantine (apc/ajp) preferred; MSA included + tagged so the app ranks/strict-filters correctly.\n';
  js += 'const SOURCED_AUDIO = {\n';
  js += keys.map(k => `  ${JSON.stringify(k)}: ${JSON.stringify(out[k])}`).join(',\n');
  js += '\n};\n';
  js += 'if (typeof window !== "undefined") window.SOURCED_AUDIO = SOURCED_AUDIO;\n';
  fs.writeFileSync(path.join(ROOT, 'data/sourced-audio.js'), js);
  fs.writeFileSync(path.join(ROOT, '_dev/sourced-audio-report.json'), JSON.stringify(report, null, 1));
}
async function worker(wid) {
  while (true) {
    const i = idx++;
    if (i >= words.length || Date.now() > DEADLINE) return;
    const ar = words[i];
    await new Promise(r => setTimeout(r, THROTTLE_MS));
    const r = await sourceOne(ar);
    report.processed++;
    if (r.hit) {
      out[ar] = { u: r.hit.url, d: r.hit.dialect, iso: r.hit.iso };
      report.hits++;
      if (r.hit.dialect.includes('Levantine')) report.levantine++; else report.msa++;
      if (report.samples.length < 30) report.samples.push({ ar, ...r.hit });
      writeOut(); // CHECKPOINT every hit so results always persist
    } else {
      report.missBreakdown[r.miss] = (report.missBreakdown[r.miss] || 0) + 1;
    }
    if (report.processed % 50 === 0) { writeOut(); process.stderr.write(`  …${report.processed}/${words.length} processed, ${report.hits} hits (${report.levantine} Lev, ${report.msa} MSA)\n`); }
  }
}
await Promise.all(Array.from({ length: CONC }, (_, w) => worker(w)));
writeOut();
console.log(`\nDONE. processed=${report.processed} hits=${report.hits} (Levantine=${report.levantine}, MSA=${report.msa})`);
console.log('miss breakdown:', JSON.stringify(report.missBreakdown));
console.log(`Wrote data/sourced-audio.js (${Object.keys(out).length} entries) + _dev/sourced-audio-report.json`);
