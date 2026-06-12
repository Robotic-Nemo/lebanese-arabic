// R1277 — BUG FIX: Restore flags on _speakViaBrowser and playAudio lost when R1274 re-wrapped them
// R1274 created new wrapper functions but didn't carry forward flags from runs r266/r740/r899/r947
// Result: 10 probe BADs about missing __r266Fixed/__r899SVBFix/__r947Fixed/playAudio.__r740SlowFix
