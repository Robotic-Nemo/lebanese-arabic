// R1274 — BUG FIX: prevent stale async speak() chain from playing previous card's audio
// Root cause: speak() is async; after await fetchWiktionaryAudio / fetchCommonsAudio,
// no _speakGen check exists — so if user advances before fetch completes, old chain
// still calls playAudio() or _speakViaBrowser() with the previous word's text.
// Fix: wrap speak() to track _r1274CurrentSpeakText; wrap playAudio/_speakViaBrowser
// to abort when their text arg doesn't match the latest speak() call.
