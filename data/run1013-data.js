// R1013 — BUG FIX: Fix r1000_ngoAudio BAD
// R1000 IIFE set speak.__r1000Audio but never registered in window.__audioFlagsKnown
// So R1001/R1004/R1007/R1009/R1012 wrappers skipped copying it → flag lost
