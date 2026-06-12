// R575 — BUG FIX: PHON/LPD/PRS/CLT drill completion state
// PHON + LPD used modulo in both render AND next functions — loops forever.
// PRS + CLT used modulo only in render function.
// Fix via IIFE redefining all affected functions.
