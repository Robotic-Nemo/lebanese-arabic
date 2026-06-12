// R1058 — BUG FIX: Register missing speak flags (early + mid era audio runs)
// Root cause: early audio runs (r454-r712) + mid-era (r715-r895) used non-standard
// flag naming; not covered by R1055 audioRuns array. Also missing legacy flags
// r433TrExtended, r442MedAudio, r445AllWords, r448VocabIndex, r488AudioFix,
// r617cSpeakFix, r737AudioFix, and window.__r539AudioFlagConsolidate.
