// R1055 — BUG FIX: Register missing speak.__rNAudio flags
// Root cause: restoration IIFEs set speak.__rNAudioFix but checks test speak.__rNAudio (no Fix suffix)
// Also missing: speak.__r884InternalsOk, speak.__r439VtmExt, speak.__r430Fixed, TrFix flags
