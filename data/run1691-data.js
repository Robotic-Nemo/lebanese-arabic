// Run #1691 — BUG FIX: extend R1685/R1688 init-shuffle to FJR/BAL/DWN/AYN.
// Audited 13xx-16xx coaches: FJR (R1317), BAL (R1320), DWN (R1323), AYN (R1329)
// all have all-a:1 hardcoded drills (8 each) AND no render-side shuffle guard
// (no _fjrLastOpts/_balLastOpts/_dwnLastOpts/_aynLastOpts vars). So they
// currently leak the answer (always option B). Apply Fisher-Yates init-shuffle
// + a-index remap. Idempotent via __r1691Guard.

const R1691_BUGFIX = {
  scope: ['FJR_DRILLS', 'BAL_DRILLS', 'DWN_DRILLS', 'AYN_DRILLS'],
  expectedDrillsAffected: 32,
  pattern: 'Fisher-Yates shuffle opts + remap a-index (extends R1685/R1688)'
};
