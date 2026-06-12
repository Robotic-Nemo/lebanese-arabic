// Run #1685 — BUG FIX: drill opts predictability (all `a: 1` in 8 coaches).
// Audit found WSF/RHB/SAH/ZIA/COU/MRT/FST/RWC each have 10 drills with
// every drill's correct answer hardcoded at index 1. SAH/ZIA/COU/MRT/FST/RWC
// also lack render-side opt shuffle → answer always rendered position-1.
// (WSF/RHB shuffle in render but data still leaks via reload-stable seed.)
//
// Fix pattern: in-place Fisher-Yates shuffle of each drill's opts at init,
// then re-point `a` to the correct option's new index. Idempotent (runs once
// per page load, gated by __r1685Guard). Different bug class than:
//   R1526 (njr/mkh): opts reshuffled per render but `a` not remapped
//   R1677 (bcr):     deterministic seeded shuffle leaked answer
//   R1682 (lcw):     same bcr-pattern fix
// Distinct from those: this is data-side answer-leaks-via-position bug.

const R1685_BUGFIX = {
  scope: ['WSF_DRILLS','RHB_DRILLS','SAH_DRILLS','ZIA_DRILLS','COU_DRILLS','MRT_DRILLS','FST_DRILLS','RWC_DRILLS'],
  expectedDrillsAffected: 80,
  pattern: 'Fisher-Yates shuffle opts + remap a-index'
};
