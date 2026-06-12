// R1250 — BUG FIX: bzaPickOpt missing incDailyCount + recordActivity on wrong answer
// bzaPickOpt original: only called incDailyCount()/recordActivity() in correct branch
// Fix: add incDailyCount + recordActivity('bza') on wrong-answer path via IIFE wrapper
