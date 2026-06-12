// R980 — BUG FIX: Add missing progress tracking to bkq/tet/mdc pickOpt functions
// bkqPickOpt, tetPickOpt, mdcPickOpt (added R972/R975/R978) were missing:
//   sfx('correct'/'wrong'), addXp(5), recordActivity, incDailyCount
// Fix: append IIFE that replaces each pickOpt with the correct version.
