// Run #111 — Sentence-Order drill (NEW FEATURE)
// User clicks shuffled word-tokens in correct order to rebuild a Lebanese sentence.
// Data: hand-curated short sentences (3-6 words) from everyday Lebanese registers.
// Runtime splits `ar` by whitespace; displayed tokens are the split result verbatim.

const SOR_CATS = [
  { id: 'greet', label: '👋 Greetings' },
  { id: 'food',  label: '🍽 Food & drink' },
  { id: 'ask',   label: '❓ Asking & directions' },
  { id: 'daily', label: '🏠 Daily life' },
  { id: 'feel',  label: '💬 Feelings' }
];

const SOR_SENTENCES = [
  // greet
  { id:'g1', cat:'greet', ar:'مرحبا كيفك اليوم', tr:'mar7aba kifak lyom',           en:'Hi, how are you today?', note:'Basic greeting — lyom = el-yom (today).' },
  { id:'g2', cat:'greet', ar:'كل سنة وانت سالم', tr:'kel sene w-inta salem',          en:'Happy birthday / many happy returns.', note:'Used for any recurring occasion (birthday, holiday).' },
  { id:'g3', cat:'greet', ar:'تشرفنا بلقاك', tr:'tsharrafna b-l2ak',                  en:'Nice to meet you.', note:'Lit. "we were honored by meeting you."' },
  { id:'g4', cat:'greet', ar:'الله يعطيك العافية', tr:'allah ya3Tik l-3afye',          en:'God give you health (thanks for your work).', note:'Said to someone doing work — shopkeeper, waiter.' },

  // food
  { id:'f1', cat:'food',  ar:'بدي قهوة مع حليب', tr:'baddi 2ahwe ma3 7alib',          en:'I want coffee with milk.', note:'baddi = "I want" (lit. "want-of-me").' },
  { id:'f2', cat:'food',  ar:'الحساب لو سمحت', tr:'l-7seb law sama7t',                en:'The bill, please.', note:'Restaurant standard.' },
  { id:'f3', cat:'food',  ar:'الاكل كتير طيب هون', tr:'l-2akel ktir Tayyeb hon',       en:'The food is very good here.', note:'Tayyeb = good/tasty.' },
  { id:'f4', cat:'food',  ar:'ما بحب البصل', tr:'ma b7eb l-baSal',                    en:"I don't like onions.", note:'Negative present: ma + verb.' },

  // ask
  { id:'a1', cat:'ask',   ar:'وين الحمام', tr:'wen l-7ammem',                         en:'Where is the bathroom?', note:'wen = where. 3-word sentences common.' },
  { id:'a2', cat:'ask',   ar:'كيف بوصل عالمطار', tr:'kif bwaSel 3al-maTar',           en:'How do I get to the airport?', note:'3al = 3a + el (to the).' },
  { id:'a3', cat:'ask',   ar:'قديش الساعة', tr:'2addesh s-se3a',                      en:'What time is it?', note:'2addesh = how much/how many.' },
  { id:'a4', cat:'ask',   ar:'بتعرف تحكي انكليزي', tr:'bta3ref te7ki ingleezi',       en:'Do you know how to speak English?', note:'bta3ref = "you know" (2nd-person pres).' },

  // daily
  { id:'d1', cat:'daily', ar:'انا رايح عالشغل', tr:'ana raye7 3a-sh-shoghol',         en:"I'm going to work.", note:'raye7 = active participle "going."' },
  { id:'d2', cat:'daily', ar:'لازم نروح البيت', tr:'lezem nroo7 l-bet',               en:'We have to go home.', note:'lezem = must, nroo7 = we go.' },
  { id:'d3', cat:'daily', ar:'الجو حلو اليوم', tr:'l-jaw 7elo lyom',                  en:'The weather is nice today.', note:'jaw = weather, 7elo = nice/sweet.' },
  { id:'d4', cat:'daily', ar:'بكرا عندي موعد', tr:'bukra 3indi maw3ad',               en:'Tomorrow I have an appointment.', note:'3indi = "I have" (lit. "at-me").' },

  // feel
  { id:'e1', cat:'feel',  ar:'انا تعبان كتير', tr:'ana ta3ben ktir',                  en:"I'm very tired.", note:'ta3ben = tired (masc.); fem = ta3bene.' },
  { id:'e2', cat:'feel',  ar:'مبسوط انك جيت', tr:'mabsuT innak jit',                   en:"I'm happy you came.", note:'mabsuT = happy (masc.); innak = that-you.' },
  { id:'e3', cat:'feel',  ar:'ما بقدر احتمل', tr:'ma ba2der e7tamel',                  en:"I can't stand it.", note:'ba2der = I can; e7tamel = endure/bear.' },
  { id:'e4', cat:'feel',  ar:'بحبك كتير', tr:'b7ebbak ktir',                           en:'I love you a lot.', note:'b7eb + -ak (2msg suffix) = I love you (to a man).' }
];

const SOR_TIPS = [
  'Lebanese sentences often start with the verb (VSO), unlike English (SVO) — but topic-fronting (SVO) is also common in casual speech.',
  'Definite article is "l-" (or "el-" before clusters). Attached to the next word: l-bet = "the house," 3al-maTar = "to the airport."',
  'Negation: "ma" before present-tense verbs (ma b7eb = I don\'t like). Past tense negation also uses "ma" (ma ruht = I didn\'t go).',
  '"baddi / baddak / baddo" = "I/you/he want" — structurally a preposition+suffix, not a verb. No conjugation shift.',
  'Possession / "to have" uses "3ind" (at) + suffix: 3indi (I have), 3indak (you-m have), 3inda (she has).',
  'Fronting for emphasis: "anā ruḥt" (I went — emphasizes "I"). Without the pronoun, "ruḥt" alone already means "I went."',
  'Short answers lean elliptic: "akīd" (sure), "ma3lūm" (of course), "la2" (no). Full sentences feel formal.',
  'Word stress is usually on the penultimate syllable unless the last syllable is long — practice by humming the rhythm before saying the words.',
  'Question words come at the start: wen (where), ēmta (when), kif (how), lesh (why), 2addesh (how much). Position matches English.',
  'Small words carry meaning: "w-" = and, "bass" = but/only, "ya3ni" = you know/that is, "halla2" = now. Listen for these connective particles.'
];
