// R989 — BUG FIX: Add sfx feedback to mpxAnswer (minimal pairs quiz)
// mpxAnswer had addXp/recordActivity but no sfx('correct'/'wrong') calls.
// Fix: IIFE wraps mpxAnswer to fire sfx based on _mpxQuiz.correct vs choice.
