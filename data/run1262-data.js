// R1262 — BUG FIX: hkwPickOpt wrong XP (correct=3/wrong=1 → correct=10/wrong=2)
// hkwPickOpt adds addXp(correct?3:1) — should be addXp(correct?10:2)
// Fix: wrap to detect correct/wrong, add delta (+7 correct / +1 wrong) after orig call
