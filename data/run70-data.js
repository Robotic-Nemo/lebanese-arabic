// Run #70 — Finer Lebanese-proximity voice priority for speechSynthesis fallback.
// Addresses bugs.rtf "sentence audio is often not Lebanese arabic".
//
// The original TTS_VOICE_PRIORITY (data/run25-data.js) had 5 tiers. When a
// user has multiple Arabic voices installed, all Levantine variants collapsed
// to one score (80), so the browser's arbitrary voice ordering decided which
// specific Levantine voice won. This expanded list discriminates within
// Levantine (Syrian closest, then Palestinian/Jordanian) and distinguishes
// Iraqi/Gulf/Maghrebi more precisely. Higher = closer to Lebanese dialect.
//
// Matched top-to-bottom; first-match wins (same semantics as _scoreVoice).

const TTS_VOICE_PRIORITY_LB = [
  // Lebanese itself — the target
  { match: /\bar-LB\b|\bLebanese\b|\bLebanon\b/i,                                     label: '🇱🇧 Lebanese',       score: 100 },
  // Syrian — same Levantine cluster, phonetically nearest to Lebanese
  { match: /\bar-SY\b|\bSyrian\b|\bSyria\b/i,                                         label: '🇸🇾 Syrian',         score: 95 },
  // Palestinian + Jordanian — same Levantine continuum, slightly different register
  { match: /\bar-PS\b|\bar-JO\b|\bPalestinian\b|\bJordanian\b|\bLevantine\b/i,        label: '🌍 Levantine',       score: 90 },
  // Iraqi — Mesopotamian; shares more cognates with Lebanese than Gulf/MSA
  { match: /\bar-IQ\b|\bIraqi\b|\bIraq\b/i,                                           label: '🇮🇶 Iraqi',          score: 70 },
  // Egyptian — widely understood, many cognates, but distinct prosody
  { match: /\bar-EG\b|\bEgyptian\b|\bEgypt\b/i,                                       label: '🇪🇬 Egyptian',       score: 60 },
  // Gulf — Saudi/Emirati/Kuwaiti/Qatari/Omani/Bahraini
  { match: /\bar-SA\b|\bar-AE\b|\bar-KW\b|\bar-QA\b|\bar-OM\b|\bar-BH\b|\bar-YE\b|\bSaudi\b|\bEmirati\b|\bGulf\b|\bKuwaiti\b|\bQatari\b|\bOmani\b|\bYemeni\b/i, label: '🇸🇦 Gulf', score: 50 },
  // MSA / generic Arabic — phonetically conservative but grammatically distant
  { match: /\bar-(ARAB|001)\b|\bMSA\b|\bModern Standard\b|\bFusha\b|\bClassical\b/i,  label: '📚 MSA',             score: 42 },
  // Maghrebi — furthest dialect group; intelligibility often low for Lebanese learners
  { match: /\bar-MA\b|\bar-DZ\b|\bar-TN\b|\bar-LY\b|\bMoroccan\b|\bAlgerian\b|\bTunisian\b|\bLibyan\b|\bMaghrebi\b|\bMaghreb\b/i, label: '🇲🇦 Maghrebi', score: 20 },
  // Any remaining Arabic tag — catches unlabeled generic `ar` voices last
  { match: /\bar\b|^ar[-_]|\bArabic\b/i,                                              label: '🔊 Arabic',          score: 40 },
];

// Quality bonus applied on top of dialect score. Premium/Neural/Natural voices
// are dramatically better in prosody; a +10 bonus lets a high-quality Egyptian
// voice beat a basic Levantine one if the learner has both (common on macOS
// where `ar` ships with a single eSpeak-style voice and `ar-EG` has a neural
// Polly/Azure voice).
const TTS_VOICE_QUALITY_BONUS = [
  { match: /\bNeural\b|\bPremium\b|\bEnhanced\b|\bNatural\b|\bWavenet\b|\bPolly\b|\bAzure\b|\bOnline\b|\bStudio\b/i, bonus: 10 },
  { match: /\beSpeak\b|\bRobotic\b|\bCompact\b/i, bonus: -15 },
];
