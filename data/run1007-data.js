// R1007 — BUG FIX: Fix speak(w.tr,'ar') for WHA/FIT/FLT + speak(w.tr) for COF
// WHA/FIT/FLT: passed 'ar' flag with Latin transliteration — skipped by R1001/R1004 slow!=='ar' guard
// COF: plain speak(w.tr) not covered by R1001 or R1004
