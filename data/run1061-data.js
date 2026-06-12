// R1061 — BUG FIX: Restore early/mid-era speak flags after R1060 speak() re-wrap
// Root cause: R1060 IIFE #2 wraps speak → new fn loses flags set by R1058.
// R1060 IIFE #4 audioRuns misses off-sequence run numbers (454,500,625,685,712,715,847,880,892).
