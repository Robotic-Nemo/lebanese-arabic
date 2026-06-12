// R1064 — BUG FIX: Set missing bSpeakFix + Audio flags for off-sequence runs 803/851/895/898/901/904/907
// Root cause: bRuns arrays skip odd numbers (803, 851, 901, 904, 907); audioRuns skips 895 and 898.
