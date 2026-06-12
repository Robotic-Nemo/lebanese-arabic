// R983 — BUG FIX: Add sfx feedback to next batch of pickOpt functions
// Missing sfx: lpd/idi/emf/frw/num/qwd/slg/clr/fod/bdy/dir/emo
// All had addXp+recordActivity but no sfx('correct'/'wrong')
// Fix: append IIFE using _sfxWrap pattern from R905
