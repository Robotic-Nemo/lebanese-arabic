// Run #1682 — BUG FIX: lcw drill correctness (R1680 introduced).
// renderLcw rendered opts in fixed [d.a,d.d1,d.d2] order; lcwPickOpt(i) checked i===0.
// Result: clicking first option always correct → drill broken.
// Same class as R1526 (njr/mkh) and R1677 (bcr) fix.
// Fix: override window.renderLcw + window.lcwPickOpt to use bcr pattern —
// deterministic seeded sort on [d.a,d.d1,d.d2], pass opt string via JSON.stringify,
// compare opt === d.a in pickOpt.

const R1682_BUGFIX = {
  target: 'lcw drill (Lebanese Civil War coach)',
  bug: 'opts always in correct-first order; pickOpt index===0 check',
  pattern: 'override renderLcw+lcwPickOpt with seeded-shuffle + opt-string compare'
};
