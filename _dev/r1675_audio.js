// R1675 AUDIO harvester — Lingua Libre native prons for R1674 CVR_WORDS + recent unmapped vocab.
// Strategy: Commons search prefix:File:LL-Q{36464=apc, 35932=ajp, 13955=ara} + diacritic-stripped word.
// Downloads .wav via Special:FilePath, ffmpeg→mp3 96k mono 22050, sha1-hashed name.

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');
const https = require('https');

const ROOT = path.resolve(__dirname, '..');
const AUDIO_DIR = path.join(ROOT, 'lebanese-audio');
const MAP_PATH = path.join(ROOT, 'data', 'audio-map.js');

// --- targets: Arabic forms from R1674 + a few recent runs (simple single-words only) ---
const TARGETS = [
  // R1674 CVR
  'ثورة', 'اغتيال', 'تفجير', 'حرية', 'سيادة', 'استقلال',
  'وصاية', 'مؤيد', 'معارضة', 'احتجاج', 'اعتصام', 'شعار',
  'قرار', 'ساحة', 'شهداء', 'انسحاب', 'جيش', 'شهيد',
  'مظاهرة', 'مظاهرات', 'حر', 'مستقل', 'استقلالية',
  // bonus political/historical
  'حكومة', 'دولة', 'وطن', 'علم', 'رئيس', 'وزير',
  'برلمان', 'نائب', 'حزب', 'انتخابات', 'تصويت',
  'دستور', 'قانون', 'مادة', 'محكمة', 'قاضي',
];

// strip Arabic diacritics for matching (Lingua Libre filenames usually drop them)
function stripDiacritics(s) {
  return s.replace(/[\u064B-\u0652\u0670\u0640]/g, '');
}

const UA = 'LebaneseArabicLearningApp/1.0 (https://github.com/fcnemr/lebanese-arabic-v2; fcnemr@gmail.com) Node.js/22 R1675';

function httpsGet(url, opts = {}) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { 'User-Agent': UA, 'Accept': 'application/json,*/*' },
      ...opts,
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const next = new URL(res.headers.location, url).toString();
        res.resume();
        return resolve(httpsGet(next, opts));
      }
      if (res.statusCode === 429 || res.statusCode === 503) {
        const retryAfter = parseInt(res.headers['retry-after'] || '5', 10);
        res.resume();
        return reject({ throttled: true, retryAfter, status: res.statusCode });
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(new Error('timeout')); });
  });
}

async function backoffGet(url, maxTries = 5) {
  let wait = 2000;
  for (let i = 0; i < maxTries; i++) {
    try { return await httpsGet(url); }
    catch (e) {
      if (e.throttled) {
        const w = Math.max(wait, (e.retryAfter || 1) * 1000);
        console.log(`  throttled ${e.status}, sleep ${w}ms`);
        await new Promise(r => setTimeout(r, w));
        wait = Math.min(60000, wait * 2);
        continue;
      }
      if (i === maxTries - 1) throw e;
      console.log(`  err ${e.message}, retry in ${wait}ms`);
      await new Promise(r => setTimeout(r, wait));
      wait = Math.min(30000, wait * 2);
    }
  }
  throw new Error('max retries');
}

async function searchCommonsForLL(qid, word) {
  // search files with prefix LL-Q{qid} + word (diacritic-stripped)
  const stripped = stripDiacritics(word);
  const srsearch = encodeURIComponent(`${stripped} prefix:File:LL-Q${qid}_`);
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${srsearch}&srnamespace=6&srlimit=10&format=json`;
  const buf = await backoffGet(url);
  let data;
  try { data = JSON.parse(buf.toString('utf8')); } catch { return []; }
  const hits = (data.query && data.query.search) || [];
  return hits.map(h => h.title); // "File:LL-Q36464_(apc)-User-word.wav"
}

async function downloadFile(title) {
  // Special:FilePath redirects to actual file
  const fname = title.replace(/^File:/, '');
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fname)}`;
  return await backoffGet(url);
}

function sha1Hash(s) {
  return crypto.createHash('sha1').update(s).digest('hex').slice(0, 10);
}

function wavToMp3(buf, prefix, key) {
  const tmpWav = path.join('/tmp', `r1675_${Date.now()}_${Math.random().toString(36).slice(2)}.wav`);
  fs.writeFileSync(tmpWav, buf);
  const hash = sha1Hash(prefix + ':' + key);
  const out = path.join(AUDIO_DIR, `${hash}.mp3`);
  try {
    execFileSync('ffmpeg', ['-y', '-i', tmpWav, '-codec:a', 'libmp3lame', '-b:a', '96k', '-ac', '1', '-ar', '22050', out],
      { stdio: ['ignore', 'ignore', 'ignore'] });
  } finally {
    try { fs.unlinkSync(tmpWav); } catch {}
  }
  return path.basename(out);
}

async function tryWord(word) {
  // Levantine apc, then ajp, then MSA ara
  for (const [qid, tag] of [['36464', 'apc'], ['35932', 'ajp'], ['13955', 'ara']]) {
    const titles = await searchCommonsForLL(qid, word);
    const stripped = stripDiacritics(word);
    // pick first title whose filename body ends with the stripped word (case loose)
    const match = titles.find(t => {
      const fnamePart = t.replace(/\.(wav|ogg|flac)$/i, '').split('-').pop();
      return stripDiacritics(fnamePart) === stripped;
    }) || titles[0]; // fallback first
    if (!match) continue;
    try {
      const buf = await downloadFile(match);
      const mp3name = wavToMp3(buf, tag, word);
      return { tag, word, file: `./lebanese-audio/${mp3name}`, src: match };
    } catch (e) {
      console.log(`  ${tag} dl/conv fail "${word}":`, e.message);
    }
    await new Promise(r => setTimeout(r, 250 + Math.random() * 250));
  }
  return null;
}

(async () => {
  const results = [];
  const fails = [];
  console.log(`R1675 harvest: ${TARGETS.length} targets`);
  for (let i = 0; i < TARGETS.length; i++) {
    const w = TARGETS[i];
    process.stdout.write(`[${i+1}/${TARGETS.length}] ${w} ... `);
    const r = await tryWord(w);
    if (r) { results.push(r); console.log(`ok ${r.tag} → ${r.file}`); }
    else { fails.push(w); console.log('NONE'); }
    await new Promise(r => setTimeout(r, 250 + Math.random() * 250));
  }
  console.log(`\nDONE: ${results.length} ok / ${fails.length} fail`);
  if (fails.length) console.log('Failed:', fails.join(', '));
  // write append entries
  if (results.length) {
    let mapSrc = fs.readFileSync(MAP_PATH, 'utf8');
    const lines = results.map(r => `  "${r.word}": "${r.file}", // R1675 ${r.tag}`).join('\n');
    mapSrc = mapSrc.replace(/};\s*$/, lines + '\n};\n');
    fs.writeFileSync(MAP_PATH, mapSrc);
    console.log(`Wrote ${results.length} entries to audio-map.js`);
  }
})().catch(e => { console.error(e); process.exit(1); });
