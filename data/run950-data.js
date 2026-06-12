// R950 — BUG FIX: Complete drill-state reset for gms/kds/vnd/frt/dry/emb/nbq/lbp/dkn/ftn on reopen
// Prior wrappers only reset _xyzDrillAnswered; score, idx, pickedIdx were not reset → score accumulated across sessions
