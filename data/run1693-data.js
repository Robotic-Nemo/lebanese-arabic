// Run #1693 — AUDIO: extend __r1573Map with BSR_WORDS w→t + ex sentence synth.
// Mirrors R1591/R1597/R1606/R1609/R1612/R1618/R1621/R1627/R1648/R1678/R1681/
// R1684/R1687/R1690 pattern. Adds Bsharri/Gibran word→Arabic entries to the
// audio map + synthesizes ex sentences via longest-match token table (window
// 4..1, requires ≥2 hits AND ≥50% coverage; el-/l-/3al-/3a-/w-/b-/la- prefix-
// strip). Idempotent via __r1693Guard.

const R1693_AUDIO = {
  scope: 'BSR_WORDS',
  pattern: 'extend __r1573Map + ex synth (R1690 clone)',
  expectedAdded: '~18-22 w→t + 3-6 ex'
};
