// R1675b retry — looser filename match for failed words.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');
const https = require('https');

const ROOT = path.resolve(__dirname, '..');
const AUDIO_DIR = path.join(ROOT, 'lebanese-audio');
const MAP_PATH = path.join(ROOT, 'data', 'audio-map.js');

const FAILS = [
  'اغتيال', 'وصاية', 'معارضة', 'اعتصام', 'شهداء', 'انسحاب',
  'مظاهرة', 'مظاهرات', 'حر', 'مستقل', 'استقلالية',
  'برلمان', 'نائب', 'تصويت', 'قاضي',
];

const UA = 'LebaneseArabicLearningApp/1.0 (https://github.com/fcnemr/lebanese-arabic-v2; fcnemr@gmail.com) Node.js/22 R1675b';

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': UA, 'Accept': 'application/json,*/*' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const next = new URL(res.headers.location, url).toString();
        res.resume();
        return resolve(httpsGet(next));
      }
      if (res.statusCode === 429 || res.statusCode === 503) {
        const retryAfter = parseInt(res.headers['retry-after'] || '5', 10);
        res.resume();
        return reject({ throttled: true, retryAfter, status: res.statusCode });
      }
      if (res.statusCode !== 200) { res.resume(); return reject(new Error(`HTTP ${res.statusCode}`)); }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(30000, () => req.destroy(new Error('timeout')));
  });
}

async function backoffGet(url, maxTries = 4) {
  let wait = 2000;
  for (let i = 0; i < maxTries; i++) {
    try { return await httpsGet(url); }
    catch (e) {
      if (e.throttled) {
        await new Promise(r => setTimeout(r, Math.max(wait, (e.retryAfter || 1) * 1000)));
        wait = Math.min(60000, wait * 2);
        continue;
      }
      if (i === maxTries - 1) throw e;
      await new Promise(r => setTimeout(r, wait));
      wait = Math.min(30000, wait * 2);
    }
  }
  throw new Error('max retries');
}

function stripDia(s) { return s.replace(/[\u064B-\u0652\u0670\u0640]/g, ''); }

async function searchFiles(qid, word) {
  const stripped = stripDia(word);
  const srsearch = encodeURIComponent(`${stripped} prefix:File:LL-Q${qid}_`);
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${srsearch}&srnamespace=6&srlimit=20&format=json`;
  const buf = await backoffGet(url);
  let data; try { data = JSON.parse(buf.toString('utf8')); } catch { return []; }
  return (data.query?.search || []).map(h => h.title);
}

async function downloadFile(title) {
  const fname = title.replace(/^File:/, '');
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fname)}`;
  return await backoffGet(url);
}

function sha1(s) { return crypto.createHash('sha1').update(s).digest('hex').slice(0, 10); }

function wavToMp3(buf, prefix, key) {
  const tmpWav = path.join('/tmp', `r1675b_${Date.now()}_${Math.random().toString(36).slice(2)}.wav`);
  fs.writeFileSync(tmpWav, buf);
  const hash = sha1(prefix + ':' + key);
  const out = path.join(AUDIO_DIR, `${hash}.mp3`);
  try {
    execFileSync('ffmpeg', ['-y', '-i', tmpWav, '-codec:a', 'libmp3lame', '-b:a', '96k', '-ac', '1', '-ar', '22050', out],
      { stdio: ['ignore', 'ignore', 'ignore'] });
  } finally { try { fs.unlinkSync(tmpWav); } catch {} }
  return path.basename(out);
}

async function tryWord(word) {
  for (const [qid, tag] of [['36464', 'apc'], ['35932', 'ajp'], ['13955', 'ara']]) {
    const titles = await searchFiles(qid, word);
    const stripped = stripDia(word);
    // looser: any title whose stripped tail contains stripped word
    let match = titles.find(t => {
      const tail = t.replace(/\.(wav|ogg|flac)$/i, '').split('-').slice(-2).join('-');
      return stripDia(tail).includes(stripped);
    });
    if (!match && titles.length) match = titles[0];
    if (!match) continue;
    try {
      const buf = await downloadFile(match);
      const mp3 = wavToMp3(buf, tag, word);
      return { tag, word, file: `./lebanese-audio/${mp3}`, src: match };
    } catch (e) { console.log(`  ${tag} fail "${word}":`, e.message); }
    await new Promise(r => setTimeout(r, 250));
  }
  return null;
}

(async () => {
  const results = []; const stillFail = [];
  for (let i = 0; i < FAILS.length; i++) {
    const w = FAILS[i];
    process.stdout.write(`[${i+1}/${FAILS.length}] ${w} ... `);
    const r = await tryWord(w);
    if (r) { results.push(r); console.log(`ok ${r.tag} → ${r.src}`); }
    else { stillFail.push(w); console.log('NONE'); }
    await new Promise(r => setTimeout(r, 300));
  }
  console.log(`\nR1675b: ${results.length} ok / ${stillFail.length} fail`);
  if (stillFail.length) console.log('Still fail:', stillFail.join(', '));
  if (results.length) {
    let map = fs.readFileSync(MAP_PATH, 'utf8');
    const lines = results.map(r => `  "${r.word}": "${r.file}", // R1675b ${r.tag}`).join('\n');
    map = map.replace(/};\s*$/, lines + '\n};\n');
    fs.writeFileSync(MAP_PATH, map);
    console.log(`Wrote ${results.length} entries.`);
  }
})().catch(e => { console.error(e); process.exit(1); });
