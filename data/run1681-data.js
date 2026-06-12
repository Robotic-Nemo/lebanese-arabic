// Run #1681 — AUDIO: extend __r1573Map with LCW_WORDS w→t + ex sentence synthesis.
// R1680 added LCW_WORDS (Lebanese Civil War 1975-1990 coach) — 20 words + 20 ex sentences in Latin transliteration.
// Without this extension, ex sentences fall back to TTS reading transliterated Latin which sounds wrong/garbled.
// Pattern follows R1591/R1597/R1606/R1609/R1612/R1618/R1621/R1627/R1648/R1678.

const R1681_AUDIO = {
  source: 'LCW_WORDS',
  expectedAdd: 20,
  pattern: 'longest-match token table + el-/l-/3al-/b-/la-/w- prefix-strip; require >=2 hits AND >=50% coverage'
};
