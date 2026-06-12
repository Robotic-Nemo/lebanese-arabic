// R1241 — BUG FIX: Fix double-wrapped XP for hrm/syd/mfl
// R1217 + R1229 both patched hrmPickOpt/sydPickOpt/mflPickOpt — double XP on each answer
// hrm/syd: correct was 18 XP (2+8+8), wrong was 4 (0+2+2) — fixed to 10/2
// mfl: correct was 18 (2+8+8), wrong was 3 (1+1+1) — fixed to 10/2
// Fix: clean replacement functions bypassing both wrappers
