// Run #22 — Tongue Twisters, Reflexive Verbs, Body Language
// Prefixes: tw-, rv-, bl-

// ============ TONGUE TWISTERS ============
const TONGUE_TWISTERS = [
  {
    text: 'sham3a sham3a sham3iton',
    ar: 'شمعة شمعة شمعتن',
    en: 'a candle, a candle, their candle',
    target: 'sh + m sequences',
    diff: 1
  },
  {
    text: '7arrak el 7ariri 3a 7aritna',
    ar: 'حرّك الحريري ع حارتنا',
    en: 'Hariri moved on our street',
    target: 'multiple 7 (ح) sounds',
    diff: 3
  },
  {
    text: 'khames khishbet bi khishbet khoukh',
    ar: 'خمس خشبات بخشبة خوخ',
    en: 'five wood pieces in a peach-wood plank',
    target: 'kh (خ) repetition',
    diff: 4
  },
  {
    text: '3am 3ammo 3am bya2lo',
    ar: 'عم عمّو عم بياكلو',
    en: 'his uncle is eating it',
    target: '3 (ع) sound',
    diff: 2
  },
  {
    text: 'qultu lo: qul la 7adan ma qultu',
    ar: 'قلتلو قول لحدا ما قلتو',
    en: 'I told him: tell no one I told it',
    target: 'q (ق) glottal',
    diff: 4
  },
  {
    text: 'el SaHaba SabaT3o eS-Sabe7',
    ar: 'الصحابة صبطعو الصبيح',
    en: 'the friends grabbed the boy in the morning',
    target: 'S (ص) emphatic',
    diff: 3
  },
  {
    text: 'kataba katib el kotob el katoube',
    ar: 'كتب كاتب الكتب الكتوبة',
    en: 'the writer wrote the written books',
    target: 'k + t pattern',
    diff: 2
  },
  {
    text: 'b7ebbak b7ebbik byo7obbik bo7obbo',
    ar: 'بحبّك بحبّك بيحبّك بحبّو',
    en: '(I love you m/f, he loves her, I love him)',
    target: 'gemination + verb endings',
    diff: 5
  },
  {
    text: 'TaTawwer Tabbakh el Ta3am',
    ar: 'تطوّر طبّاخ الطعام',
    en: 'the chef advanced his food',
    target: 'T (ط) emphatic',
    diff: 3
  },
  {
    text: 'mish ma3qoul mish ma3qoul mish ma3qoul',
    ar: 'مش معقول مش معقول مش معقول',
    en: 'unbelievable, unbelievable, unbelievable',
    target: 'speed control',
    diff: 1
  }
];

// ============ REFLEXIVE / RECIPROCAL VERBS (Form V & VI) ============
// Form V: ta- prefix on Form II (3allam → t3allam = "to learn", lit. "be taught")
// Form VI: ta- prefix on Form III (sha2ar → tsha2ar = "to argue with each other")
const REFLEX_VERBS = [
  { base: '3allam (form II) = teach', refl: 't3allam', en_refl: 'to learn (lit: be taught)', ex: 't3allamet 3arabe = I learned Arabic', form: 'V' },
  { base: 'farraj (II) = show',       refl: 'tfarraj',  en_refl: 'to watch', ex: 'tfarrajet 3al film = I watched the movie', form: 'V' },
  { base: 'jawwaz (II) = marry off',  refl: 'tjawwaz',  en_refl: 'to get married', ex: 'tjawwaz embare7 = he got married yesterday', form: 'V' },
  { base: 'kallam (II) = make speak', refl: 'tkallam',  en_refl: 'to speak', ex: 'tkallamet ma3o = I spoke with him', form: 'V' },
  { base: 'ghayyar (II) = change [s.t.]', refl: 'tghayyar', en_refl: 'to be changed / to change (intrans)', ex: 'tghayyar shaklo = his look changed', form: 'V' },
  { base: 'na2al (II) = transfer',    refl: 'tna2al',   en_refl: 'to be transferred / move', ex: 'tna2al la beit jdid = moved to a new house', form: 'V' },
  { base: '3awwad (II) = accustom',   refl: 't3awwad',  en_refl: 'to get used to', ex: 't3awwadet 3al jaw = I got used to the climate', form: 'V' },
  { base: 'wassakh (II) = dirty',     refl: 'twassakh', en_refl: 'to get dirty', ex: 'twassakh el 2amis = the shirt got dirty', form: 'V' },
  // Form VI — reciprocal
  { base: 'sha2ar (III) = quarrel',   refl: 'tsha2ar',  en_refl: 'to argue with each other', ex: 'tsha2aru ekhwet = the brothers argued', form: 'VI' },
  { base: 'kallam (III) = address',   refl: 'tkellamna',en_refl: 'we spoke to one another', ex: 'tkellamna mbare7 = we talked yesterday', form: 'VI' },
  { base: 'la2a (III) = meet',        refl: 'tla2a',    en_refl: 'to meet (one another)', ex: 'tla2yna bil sou2 = we met in the market', form: 'VI' },
  { base: 'sa3ad (III) = help',       refl: 'tsa3ad',   en_refl: 'to help one another', ex: 'mn3am ntsa3ad = we help each other', form: 'VI' },
  { base: 'kateb (III) = exchange letters', refl: 'tkatab', en_refl: 'to correspond', ex: 'tkatabna sneen = we corresponded for years', form: 'VI' },
  { base: '3arrak (III) = quarrel',   refl: 't3arrak',  en_refl: 'to fight one another', ex: 'la t3arrku = don\u2019t fight each other', form: 'VI' }
];

const RV_DRILL = [
  { en: 'I learned Arabic', opts: ['3allamet 3arabe','t3allamet 3arabe','3allamna 3arabe','t3allamne 3arabe'], correct: 1 },
  { en: 'we got used to it', opts: ['t3awwadna 3lei','3awwadna 3lei','t3awwadto 3lei','3awwadne 3lei'], correct: 0 },
  { en: 'we met in the market', opts: ['la2ayna bil sou2','tla2yna bil sou2','tla2ana bil sou2','la2a bil sou2'], correct: 1 },
  { en: 'I watched the movie', opts: ['farrajet 3al film','tfarrajet 3al film','tafarrijet 3al film','farajt el film'], correct: 1 },
  { en: 'they argued (each other)', opts: ['sha2aru','tsha2aru','sha2arna','tsha2arna'], correct: 1 },
  { en: 'his look changed', opts: ['ghayyar shaklo','tghayyar shaklo','tghayyaret shaklo','ghayyret shaklo'], correct: 1 },
  { en: 'we help each other', opts: ['mn3am nsa3ad','mn3am ntsa3ad','mnsa3ad','mntsa3ad halna'], correct: 1 },
  { en: 'I spoke with him', opts: ['kallamto','tkallamet ma3o','tkallamna','kallamna'], correct: 1 }
];

// ============ BODY LANGUAGE & GESTURES ============
const GESTURES = [
  {
    name: 'fingertips pinched together (pulled upward)',
    means: '"wait" / "slow down" / "give me a sec"',
    note: 'Universal Mediterranean gesture. Used while talking or driving — extremely common.',
    paired: 'shway / staNNa / 3a mehlak'
  },
  {
    name: 'head tossed back + tongue click "tsk"',
    means: 'NO',
    note: 'Crucial: this is "no" not annoyance. Often happens with closed eyes. Common across Levant.',
    paired: 'la2'
  },
  {
    name: 'open palm raised + slight wobble side-to-side',
    means: '"so-so" / "kinda" / "meh"',
    note: 'Like English "comme ci, comme ça". Used to soften an opinion.',
    paired: 'mish hek / shway shway'
  },
  {
    name: 'hand to chest + slight bow',
    means: 'thank you / you\u2019re welcome / my pleasure',
    note: 'Sincere. Often replaces "shukran" between close people. Sign of respect.',
    paired: 'el sharaf eli / 3a 3eini'
  },
  {
    name: 'palm flat, brushing dust off the other palm',
    means: '"finished, done with it" / dismissive',
    note: 'Closes a topic or distances the speaker from a problem.',
    paired: 'khalaS / ana ma 3andi 3el2a'
  },
  {
    name: 'finger tap on cheek + slight head tilt',
    means: '"how cute / sweet"',
    note: 'Often paired with "tu2borne" or "ya 7abibi" said about kids.',
    paired: 'tu2borne / 3youne'
  },
  {
    name: 'hand on heart, then to forehead',
    means: 'great respect / "I am yours"',
    note: 'Old-school formal greeting. Not common in casual settings, but understood.',
    paired: 'tshorrafna'
  },
  {
    name: 'palm down, fingers tap downward',
    means: '"come here"',
    note: 'CRITICAL: opposite of Western beckoning. Western "come here" (palm up) is rude/dismissive in Lebanon.',
    paired: 'ta3a / ta3i'
  },
  {
    name: 'thumb-and-index circle moved side to side',
    means: 'OK / good / agreement',
    note: 'Same as Western OK gesture. Generally fine but in some Mediterranean contexts can be rude — Lebanese context: usually safe.',
    paired: 'mni7 / Tab'
  },
  {
    name: 'hand on heart + slight kiss to fingertips',
    means: 'mashallah / wow / beautiful',
    note: 'Often when seeing a child, food, or scenery. Compliments + wards off evil eye.',
    paired: 'mashallah'
  },
  {
    name: 'index finger + thumb rubbing (as if rubbing salt)',
    means: 'money / pay up / it\u2019ll cost you',
    note: 'Universal money gesture. Used in bargaining context to mean "now we talk price".',
    paired: 'masari / khallS el 7seb'
  },
  {
    name: 'palm out + slight push forward',
    means: '"never mind / forget it"',
    note: 'Dismisses a worry or apology. "It\u2019s nothing".',
    paired: 'wala yhemmak / mish meshkleh'
  }
];

const BL_DRILL = [
  { sit: 'You want to say "wait a sec" without speaking', opts: ['head toss + click','palm down beckon','pinched fingertips upward','hand on heart'], correct: 2 },
  { sit: 'A Lebanese person tilts head back + clicks tongue', opts: ['They say yes','They say no','They\u2019re thinking','They\u2019re annoyed'], correct: 1 },
  { sit: 'You want to call a child to come over', opts: ['Western palm-up beckon','Palm-down + finger tap downward','Whistle','Pinched fingertips'], correct: 1 },
  { sit: 'You\u2019ve heard a price too high — bargaining', opts: ['Hand on heart','Thumb + index rubbing','Pinched fingertips','Palm dust-off'], correct: 3 },
  { sit: 'Someone admires your child', opts: ['They mean money','They\u2019re saying mashallah','Asking you to slow down','Saying goodbye'], correct: 1 },
  { sit: 'Open palm + side-to-side wobble means', opts: ['So-so','OK','No','Wait'], correct: 0 },
  { sit: 'Hand on heart + slight bow', opts: ['Money please','Sincere thanks/respect','Wait','Come here'], correct: 1 },
  { sit: 'Palm out + slight push (in apology context)', opts: ['Never mind','Stop it','Goodbye','I\u2019m angry'], correct: 0 }
];
