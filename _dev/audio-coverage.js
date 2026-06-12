#!/usr/bin/env node
// Audio-coverage analyzer for the Lebanese Arabic app.
// Measures, per VOCAB word, whether a recording exists — using the SAME
// "self-form" resolution the app applies to VOCAB words post-R1726 (exact +
// punctuation/tashkeel strip + hamza/ya/ta-marbuta normalize; NO clitic/def-
// article strips, which only apply to non-VOCAB inflected input).
//
// Sources, in priority order:
//   youtube  = YOUTUBE_AUDIO / YOUTUBE_AUDIO_CLIPS  (real Lebanese-speaker clips)
//   precached = PRECACHED_AUDIO                      (Commons/Wiktionary, mostly MSA accent)
//   missing  = no recording anywhere                 (must be recorded — highest priority)
//
// Outputs:
//   _dev/audio-coverage-report.md   human-readable summary (by source / category / level)
//   _dev/audio-missing.json         prioritized manifest of words needing a recording
//
// Run: node _dev/audio-coverage.js
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

function loadModule(file, exprReturningObj) {
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8');
  // eslint-disable-next-line no-new-func
  return new Function(src + '\n;return (' + exprReturningObj + ');')();
}

const VOCAB = loadModule('data/vocab.js', 'typeof VOCAB!=="undefined"?VOCAB:[]');
const AM = loadModule('data/audio-map.js',
  '({yt: typeof YOUTUBE_AUDIO!=="undefined"?YOUTUBE_AUDIO:{},' +
  ' clips: typeof YOUTUBE_AUDIO_CLIPS!=="undefined"?YOUTUBE_AUDIO_CLIPS:{},' +
  ' pre: typeof PRECACHED_AUDIO!=="undefined"?PRECACHED_AUDIO:{}})');

const ytKeys = new Set([...Object.keys(AM.yt), ...Object.keys(AM.clips)]);
const preKeys = new Set(Object.keys(AM.pre).filter(k => !k.startsWith('__')));

// ---- self-form normalization (mirrors the app's VOCAB-word resolution) ----
const stripTashkeel = s => s.replace(/[ً-ْٰـ]/g, '');
const normalizeAr = s => s.replace(/[أإآ]/g, 'ا') // أإآ -> ا
  .replace(/ى/g, 'ي')   // ى -> ي
  .replace(/ة/g, 'ه');  // ة -> ه
const stripPunct = s => s.replace(/[?!.,؟،'’"؛:()«»‌‍]/g, '').replace(/ـ/g, '').trim();
function selfForms(w) {
  const out = new Set();
  for (const base of [w, stripPunct(w)]) {
    if (!base) continue;
    out.add(base);
    out.add(stripTashkeel(base));
    out.add(normalizeAr(base));
    out.add(normalizeAr(stripTashkeel(base)));
  }
  return [...out].filter(Boolean);
}
function classify(ar) {
  const forms = selfForms(ar);
  for (const f of forms) if (ytKeys.has(f)) return 'youtube';
  for (const f of forms) if (preKeys.has(f)) return 'precached';
  return 'missing';
}

// ---- analyze distinct VOCAB words ----
const byAr = new Map(); // ar -> {ar, en, cat, level, src, words:[ids]}
for (const v of VOCAB) {
  if (!v || !v.ar) continue;
  const multi = /\s/.test(v.ar.trim());
  if (!byAr.has(v.ar)) {
    byAr.set(v.ar, { ar: v.ar, en: v.en || '', cat: v.cat || '?', level: (typeof v.level === 'number' ? v.level : null), multi, src: classify(v.ar), ids: [] });
  }
  byAr.get(v.ar).ids.push(v.id);
}
const entries = [...byAr.values()];

const total = entries.length;
const counts = { youtube: 0, precached: 0, missing: 0 };
entries.forEach(e => counts[e.src]++);
const singleMissing = entries.filter(e => e.src === 'missing' && !e.multi);
const multiMissing = entries.filter(e => e.src === 'missing' && e.multi);

function pct(n) { return total ? Math.round(n / total * 1000) / 10 : 0; }

// ---- breakdowns ----
function tally(keyFn) {
  const m = new Map();
  for (const e of entries) {
    const k = keyFn(e);
    if (!m.has(k)) m.set(k, { youtube: 0, precached: 0, missing: 0, total: 0 });
    m.get(k)[e.src]++; m.get(k).total++;
  }
  return m;
}
const byCat = tally(e => e.cat);
const byLevel = tally(e => (e.level == null ? 'none' : 'L' + e.level));

// ---- prioritized missing manifest: single words first, by level asc ----
const priority = singleMissing
  .map(e => ({ ar: e.ar, en: e.en, cat: e.cat, level: e.level, ids: e.ids }))
  .sort((a, b) => (a.level == null ? 99 : a.level) - (b.level == null ? 99 : b.level) || a.cat.localeCompare(b.cat));

// ---- write manifest ----
const manifest = {
  generated: 'run `node _dev/audio-coverage.js`',
  totals: {
    distinctVocabWords: total,
    youtube: counts.youtube, precached: counts.precached, missing: counts.missing,
    coveragePctAnySource: pct(counts.youtube + counts.precached),
    coveragePctLebaneseOnly: pct(counts.youtube),
    singleWordMissing: singleMissing.length, multiWordMissing: multiMissing.length,
  },
  missingSingleWords: priority,
};
fs.writeFileSync(path.join(ROOT, '_dev/audio-missing.json'), JSON.stringify(manifest, null, 1));

// ---- write report ----
function row(name, c) {
  const cov = c.total ? Math.round((c.youtube + c.precached) / c.total * 100) : 0;
  return `| ${name} | ${c.total} | ${c.youtube} | ${c.precached} | ${c.missing} | ${cov}% |`;
}
let md = `# Audio Coverage Report\n\n`;
md += `Distinct VOCAB words: **${total}**\n\n`;
md += `| Source | Count | % |\n|---|---|---|\n`;
md += `| 🎬 YouTube (real Lebanese) | ${counts.youtube} | ${pct(counts.youtube)}% |\n`;
md += `| 📚 Pre-cached (MSA/Commons) | ${counts.precached} | ${pct(counts.precached)}% |\n`;
md += `| ❌ Missing | ${counts.missing} | ${pct(counts.missing)}% |\n\n`;
md += `**Any-source coverage: ${pct(counts.youtube + counts.precached)}%** · **Lebanese-only coverage: ${pct(counts.youtube)}%**\n`;
md += `Missing breakdown: ${singleMissing.length} single words (recordable) + ${multiMissing.length} multi-word phrases.\n\n`;
md += `## By level\n\n| Level | Total | YT | Pre | Missing | Covered |\n|---|---|---|---|---|---|\n`;
[...byLevel.entries()].sort((a, b) => String(a[0]).localeCompare(String(b[0]))).forEach(([k, c]) => md += row(k, c) + '\n');
md += `\n## By category (most-missing first)\n\n| Category | Total | YT | Pre | Missing | Covered |\n|---|---|---|---|---|---|\n`;
[...byCat.entries()].sort((a, b) => b[1].missing - a[1].missing).forEach(([k, c]) => md += row(k, c) + '\n');
md += `\n## Recording priority\n\n`;
md += `${priority.length} single words have NO recording. Top 30 by level (full list in _dev/audio-missing.json):\n\n`;
md += `| Lvl | Arabic | English | Category |\n|---|---|---|---|\n`;
priority.slice(0, 30).forEach(p => md += `| ${p.level == null ? '-' : p.level} | ${p.ar} | ${p.en} | ${p.cat} |\n`);
fs.writeFileSync(path.join(ROOT, '_dev/audio-coverage-report.md'), md);

// ---- console summary ----
console.log(`VOCAB distinct words: ${total}`);
console.log(`  🎬 youtube (Lebanese): ${counts.youtube} (${pct(counts.youtube)}%)`);
console.log(`  📚 precached (MSA):    ${counts.precached} (${pct(counts.precached)}%)`);
console.log(`  ❌ missing:            ${counts.missing} (${pct(counts.missing)}%)  [${singleMissing.length} single + ${multiMissing.length} multi]`);
console.log(`Any-source coverage: ${pct(counts.youtube + counts.precached)}% · Lebanese-only: ${pct(counts.youtube)}%`);
console.log(`Wrote _dev/audio-coverage-report.md and _dev/audio-missing.json (${priority.length} recordable words)`);
