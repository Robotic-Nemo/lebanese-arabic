// R1280 — BUG FIX: Restore __r983SfxFix on lpdPickOpt/idiPickOpt/emfPickOpt clobbered by R1253 _wp re-wrap
// R1253 created new wrapper functions but didn't carry forward __r983SfxFix from R983
// Result: 3 probe BADs (r983_lpdSfx, r983_idiSfx, r983_emfSfx)
