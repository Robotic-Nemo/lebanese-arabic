// R953 — BUG FIX: DrillState reset missing in blk/tnk/arv openX functions
// openBlk, openTnk, openArv call setXTab('vocab') without resetting DrillIdx/DrillScore/PickedIdx/DrillAnswered
// Symptom: score accumulates across sessions; reopened coach shows stale score + wrong question index
