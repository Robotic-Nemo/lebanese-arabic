// Run #1684 — AUDIO: extend __r1573Map with JEZ_WORDS w→t + ex sentence synthesis.
// R1683 added JEZ_WORDS (Lebanese Jezzine — south Lebanon Maronite mountain town) —
// 20 words + ex sentences in Latin transliteration.
// Without this extension ex sentences fall back to TTS reading transliterated Latin.
// Pattern follows R1591/R1597/R1606/R1609/R1612/R1618/R1621/R1627/R1648/R1678/R1681.

const R1684_AUDIO = {
  source: 'JEZ_WORDS',
  expectedAdd: 20,
  pattern: 'longest-match token table + el-/l-/3al-/b-/la-/w- prefix-strip; require >=2 hits AND >=50% coverage'
};
