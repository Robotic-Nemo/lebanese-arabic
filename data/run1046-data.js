// R1046 — BUG FIX: Fix minimal pairs listen drill — sequence audio via ended event not setTimeout(900ms)
// Root cause: listen tab onclick used setTimeout(900ms) between speak(a) and speak(b);
// if a's audio lookup took >900ms the second speak() fired stopAllAudio() cancelling a mid-play.
// Fix: playMinPairListen() waits for tts-audio 'ended'/'error' event before playing b.
