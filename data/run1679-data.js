// Run #1679 — BUG FIX: polymorphic sfx shim (accept fn OR string).
// Pre-fix: function sfx(fn){ if(sfxEnabled) fn(); } — callable only with a function.
// Bug: 169 call sites pass strings (e.g. sfx('correct'), sfx(correct?'correct':'wrong')) which fail
//      because 'correct'() throws TypeError, swallowed by surrounding try/catch — silent SFX loss.
// Fix: wrap sfx so it routes string keys to sfxCorrect/sfxWrong/sfxFlip/sfxGoal callbacks; keep fn path.

const R1679_FIX = {
  buggyCallsBefore: 169,
  correctCallsBefore: 327,
  stringMap: { correct: 'sfxCorrect', wrong: 'sfxWrong', flip: 'sfxFlip', goal: 'sfxGoal' }
};
