// Run #1687 — AUDIO: extend __r1573Map with CHR_WORDS w→t + ex sentence synth.
// R1686 added CHR_WORDS (Mar Charbel & Annaya pilgrimage) — 22 words + ex
// sentences in Latin transliteration. Without this extension ex sentences fall
// back to TTS reading transliterated Latin.
// Pattern follows R1591/R1597/R1606/R1609/R1612/R1618/R1621/R1627/R1648/R1678/
// R1681/R1684.

const R1687_AUDIO = {
  source: 'CHR_WORDS',
  expectedAdd: 22,
  pattern: 'longest-match token table + el-/l-/3al-/b-/la-/w- prefix-strip; require >=2 hits AND >=50% coverage'
};
