// Run #60 — Dialect Compare Drill
// Prefix: dlc- (Dialect Compare)
//
// Pairs of MSA (Modern Standard Arabic) ↔ Lebanese colloquial for the same
// meaning. Trains the most common learner gap: distinguishing textbook Arabic
// (what Duolingo / classes teach) from Lebanese dialect (what's actually
// spoken). Each pair has a short "why" note so users learn the pattern, not
// just the swap. Difficulty 1 = common/obvious, 3 = nuanced.

const DLC_CATS = [
  { id: 'question', label: '❓ Question words' },
  { id: 'pronoun',  label: '👥 Pronouns' },
  { id: 'present',  label: '⏱ Present tense' },
  { id: 'negate',   label: '🚫 Negation' },
  { id: 'want',     label: '🙏 Want / need' },
  { id: 'time',     label: '🕒 Time & place' },
  { id: 'every',    label: '💬 Everyday phrases' }
];

const DLC_PAIRS = [
  // Question words
  { id:'q1',  cat:'question', msa:'ماذا',         lb:'شو',         msaTr:'maadha',    lbTr:'shu',        en:'what',     diff:1, note:'"shu" is the Lebanese workhorse for "what" — used constantly.' },
  { id:'q2',  cat:'question', msa:'لماذا',        lb:'ليش',        msaTr:'limaadha',  lbTr:'leesh',      en:'why',      diff:1, note:'"leesh" replaces MSA "limaadha" entirely in speech.' },
  { id:'q3',  cat:'question', msa:'متى',          lb:'إيمتى',       msaTr:'mata',      lbTr:'emta',       en:'when',     diff:1, note:'Lebanese often adds the "e-" prefix; both "emta" and "meen emta" heard.' },
  { id:'q4',  cat:'question', msa:'أين',          lb:'وين',        msaTr:'ayna',      lbTr:'wein',       en:'where',    diff:1, note:'"wein" is unmistakably Levantine/Lebanese.' },
  { id:'q5',  cat:'question', msa:'كم',           lb:'قديش',       msaTr:'kam',       lbTr:'addaysh',    en:'how much', diff:2, note:'"addaysh" (often written قديش) replaces MSA "kam" for quantities/prices.' },
  { id:'q6',  cat:'question', msa:'من',           lb:'مين',        msaTr:'man',       lbTr:'meen',       en:'who',      diff:1, note:'"meen" — one of the most frequent Lebanese words.' },
  // Pronouns
  { id:'p1',  cat:'pronoun',  msa:'نحن',          lb:'نحنا',        msaTr:'na7nu',     lbTr:'ne7na',      en:'we',        diff:1, note:'Lebanese extends MSA "na7nu" to "ne7na" with an added schwa-like vowel.' },
  { id:'p2',  cat:'pronoun',  msa:'أنتم',         lb:'انتو',        msaTr:'antum',     lbTr:'intu',       en:'you (pl.)', diff:1, note:'"intu" — no feminine plural distinction in Lebanese.' },
  { id:'p3',  cat:'pronoun',  msa:'هم',           lb:'هنن',         msaTr:'hum',       lbTr:'hinnen',     en:'they',      diff:2, note:'"hinnen" is the Lebanese form; MSA "hum" feels very formal.' },
  { id:'p4',  cat:'pronoun',  msa:'أنتِ',          lb:'انتي',        msaTr:'anti',      lbTr:'inti',       en:'you (fem.)',diff:1, note:'Short vowel shift "a"→"i" at the start, very common.' },
  // Present tense — MSA lacks the b- prefix
  { id:'pr1', cat:'present',  msa:'أكتب',         lb:'بكتب',        msaTr:'aktub',     lbTr:'biktob',     en:'I write',   diff:2, note:'Lebanese present uses "b-" prefix for habitual/general meaning. MSA has no b-.' },
  { id:'pr2', cat:'present',  msa:'يأكل',         lb:'بياكل',       msaTr:'ya\'kul',   lbTr:'byaakol',    en:'he eats',   diff:2, note:'The b-prefix also shifts to "by-" before vowel-initial verbs.' },
  { id:'pr3', cat:'present',  msa:'نشرب',         lb:'منشرب',       msaTr:'nashrab',   lbTr:'mneshrab',   en:'we drink',  diff:2, note:'1st person plural prefix is "mn-" in Lebanese, derived from n- + b-.' },
  { id:'pr4', cat:'present',  msa:'يذهبون',       lb:'بيروحو',      msaTr:'yadhhaboon',lbTr:'byroo7u',    en:'they go',   diff:3, note:'Lebanese swaps the verb root entirely — "راح/يروح" replaces MSA "ذهب/يذهب".' },
  // Negation
  { id:'n1',  cat:'negate',   msa:'لا أعرف',      lb:'ما بعرف',      msaTr:'laa a3rif', lbTr:'ma ba3rif',  en:"I don't know",diff:1, note:'"la" before verb is MSA; Lebanese uses "ma" + b-prefix verb.' },
  { id:'n2',  cat:'negate',   msa:'ليس',          lb:'مش',           msaTr:'laysa',     lbTr:'mish',       en:'not (+ adj)',diff:1, note:'"mish" negates non-verbs (adjectives, nouns) in Lebanese; MSA "laysa" is rarely spoken.' },
  { id:'n3',  cat:'negate',   msa:'لن يأتي',      lb:'ما رح يجي',    msaTr:'lan ya\'ti',lbTr:'ma ra7 yiji',en:"he won't come",diff:2, note:'Future negation: MSA "lan"; Lebanese "ma ra7 + verb".' },
  { id:'n4',  cat:'negate',   msa:'لم أفعل',      lb:'ما عملت',      msaTr:'lam af3al', lbTr:'ma 3imelt',  en:"I didn't do",diff:2, note:'Past negation: MSA "lam + jussive"; Lebanese "ma + past tense".' },
  // Want / need
  { id:'w1',  cat:'want',     msa:'أريد',         lb:'بدي',         msaTr:'ureed',     lbTr:'biddi',      en:'I want',    diff:1, note:'"biddi" is ubiquitous — the Lebanese "I want". From "bi-wudd-i" = "in my desire".' },
  { id:'w2',  cat:'want',     msa:'يحتاج',        lb:'بدو',         msaTr:'ya7taaj',   lbTr:'biddo',      en:'he needs',  diff:2, note:'Same "bidd-" root; conjugates by pronoun suffix: biddi/biddak/biddo/biddna...' },
  { id:'w3',  cat:'want',     msa:'أحب',          lb:'بحب',         msaTr:'u7ibb',     lbTr:'b7ebb',      en:'I love',    diff:1, note:'Present b-prefix again; "b7ebb" keeps the doubled b (verb) + b (aspect).' },
  { id:'w4',  cat:'want',     msa:'أرجو',         lb:'بترجاك',       msaTr:'arjoo',     lbTr:'btarjaak',   en:'I beg you / please', diff:3, note:'MSA is first-person; Lebanese often flips to 2nd-person address form.' },
  // Time & place
  { id:'t1',  cat:'time',     msa:'الآن',         lb:'هلأ',          msaTr:'al-aan',    lbTr:'halla2',     en:'now',       diff:1, note:'"halla2" (with glottal stop) is the everyday Lebanese "now". MSA "al-aan" sounds book-ish.' },
  { id:'t2',  cat:'time',     msa:'اليوم',        lb:'اليوم',        msaTr:'al-yawm',   lbTr:'el yom',     en:'today',     diff:1, note:'Same word — but pronounced "el yom" in Lebanese vs "al-yawm" in MSA.' },
  { id:'t3',  cat:'time',     msa:'غداً',         lb:'بكرا',         msaTr:'ghadan',    lbTr:'bukra',      en:'tomorrow',  diff:1, note:'"bukra" is universally understood across Arabic dialects; MSA "ghadan" is literary.' },
  { id:'t4',  cat:'time',     msa:'البارحة',       lb:'مبارح',        msaTr:'al-baari7a',lbTr:'mbaare7',    en:'yesterday', diff:2, note:'Same root, shifted pronunciation and dropped article.' },
  { id:'t5',  cat:'time',     msa:'هنا',          lb:'هون',          msaTr:'hunaa',     lbTr:'hon',        en:'here',      diff:1, note:'"hon" is a distinct Lebanese form; "hunaa" feels formal.' },
  { id:'t6',  cat:'time',     msa:'هناك',         lb:'هنيك',         msaTr:'hunaak',    lbTr:'hneek',      en:'there',     diff:2, note:'"hneek" — the "-n-" in the middle is a hallmark of Lebanese deictics.' },
  // Everyday phrases
  { id:'e1',  cat:'every',    msa:'كيف حالك؟',    lb:'كيفك؟',        msaTr:'kayfa 7aaluk',lbTr:'kifak',   en:'how are you?',diff:1, note:'Lebanese drops the "7aal" noun and fuses pronoun suffix directly: kifak (m), kifik (f).' },
  { id:'e2',  cat:'every',    msa:'ما اسمك؟',      lb:'شو اسمك؟',      msaTr:'ma ismuk',  lbTr:'shu ismak', en:'what\'s your name?',diff:1, note:'MSA uses "ma" for "what"; Lebanese uses "shu".' },
  { id:'e3',  cat:'every',    msa:'أهلاً وسهلاً',  lb:'أهلا فيك',      msaTr:'ahlan wa sahlan',lbTr:'ahla feek', en:'welcome',  diff:2, note:'Lebanese keeps only "ahla" + directional "feek" (to you).' },
  { id:'e4',  cat:'every',    msa:'من فضلك',      lb:'إذا بتريد',     msaTr:'min fadlik',lbTr:'iza btreed', en:'please',    diff:2, note:'MSA uses "favor" phrasing; Lebanese uses a conditional "if you would like".' },
  { id:'e5',  cat:'every',    msa:'شكراً جزيلاً',  lb:'مرسي كتير',     msaTr:'shukran jazeelan',lbTr:'merci kteer', en:'thanks a lot', diff:2, note:'Lebanese borrows French "merci" freely — reflects code-switching history.' },
  { id:'e6',  cat:'every',    msa:'نعم',          lb:'أي',            msaTr:'na3am',     lbTr:'ee',         en:'yes',       diff:1, note:'Short "ee" or "eeh" replaces formal "na3am" in speech.' },
  { id:'e7',  cat:'every',    msa:'لا بأس',       lb:'ماشي الحال',    msaTr:'la ba\'s',  lbTr:'maashi el 7aal',en:'not bad / ok',diff:2, note:'Different metaphor: MSA = "no harm"; Lebanese = "the state is walking / fine".' },
  { id:'e8',  cat:'every',    msa:'جميل',         lb:'حلو',            msaTr:'jameel',    lbTr:'7elo',       en:'nice / pretty',diff:1, note:'"7elo" (sweet) is the Lebanese default for "nice/pretty"; "jameel" sounds poetic.' },
  { id:'e9',  cat:'every',    msa:'كثيراً',        lb:'كتير',           msaTr:'katheeran', lbTr:'kteer',      en:'a lot / very',diff:1, note:'Same root كثر, but Lebanese drops the ـاً suffix and shifts vowel: kteer.' },
  { id:'e10', cat:'every',    msa:'قليلاً',        lb:'شوي',           msaTr:'qaleelan',  lbTr:'shway',      en:'a little',  diff:1, note:'"shway" (alt: "shwayy") is the informal quantifier; MSA uses "qaleel" or adverbial form.' },
  { id:'e11', cat:'every',    msa:'لا أفهم',       lb:'ما فهمت',       msaTr:'la afham',  lbTr:'ma fhemt',   en:"I don't understand",diff:2, note:'Lebanese often uses past tense "ma fhemt" ("I did not understand") where MSA uses present.' },
  { id:'e12', cat:'every',    msa:'أنا مسرور',     lb:'مبسوط',          msaTr:'ana masroor',lbTr:'mabsoot',   en:'I\'m happy / glad',diff:2, note:'"mabsoot" literally "spread open" = relaxed/happy. MSA "masroor" is more literary.' },
  { id:'e13', cat:'every',    msa:'قهوة',         lb:'قهوة',           msaTr:'qahwa',     lbTr:'2ahwe',      en:'coffee',    diff:1, note:'Same word but the Lebanese pronunciation swaps ق (q) for glottal stop (2) and -a for -e.' }
];

const DLC_TIPS = [
  'Lebanese verbs often take a "b-" prefix for present tense (biktob, byaakol) — MSA has no equivalent.',
  'Many MSA ق sounds become glottal stops (2) in Lebanese: qahwa → 2ahwe, qalb → 2aleb.',
  'Lebanese has one form for plural "you" and "they" — no feminine distinction.',
  'Short vowels often shift: MSA "a" often becomes "i" or "e" in Lebanese (ana → ana, but antum → intu).',
  'Lebanese freely borrows from French and English (merci, coiffeur, ok, mobile) — MSA does not.',
  '"biddi" is the single most useful Lebanese word you won\'t learn from MSA textbooks.',
  'Use Lebanese with friends/family. MSA is for news broadcasts, formal speeches, and written formal text.'
];
