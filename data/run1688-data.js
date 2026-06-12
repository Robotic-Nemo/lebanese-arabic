// Run #1688 — BUG FIX: extend R1685 init-shuffle to HAM_DRILLS + ACH_DRILLS.
// Both coaches have all 10 drills hardcoded `a: 1`. They have render-side
// Fisher-Yates (state vars _hamLastOpts/_achLastOpts) so currently safe,
// but defense in depth: shuffle data at init too. Pattern mirrors R1685
// (Fisher-Yates + a-index remap, idempotent via __r1688Guard).

const R1688_BUGFIX = {
  scope: ['HAM_DRILLS', 'ACH_DRILLS'],
  expectedDrillsAffected: 20,
  pattern: 'Fisher-Yates shuffle opts + remap a-index (extends R1685)'
};
