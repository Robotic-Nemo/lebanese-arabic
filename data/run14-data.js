// Run #14 data — Common Mistakes, Sentence Transformation, Tech Vocab
// Prefixes: cm-, st-, tc-

// ============ COMMON MISTAKES / FALSE FRIENDS ============
// Each item: a wrong sentence learners produce + correct version + why
const COMMON_MISTAKES = [
  {
    cat: 'gender',
    wrong: 'el bayt 7ilwe',
    right: 'el bayt 7ilo',
    en: 'The house is nice',
    why: '"bayt" is masculine — adjective takes masculine 7ilo, not feminine 7ilwe.'
  },
  {
    cat: 'gender',
    wrong: 'el sayyara kbir',
    right: 'el sayyara kbire',
    en: 'The car is big',
    why: '"sayyara" is feminine (ends in -a) — adjective needs feminine -e ending.'
  },
  {
    cat: 'pronoun',
    wrong: 'ana raye7',
    right: 'ana raye7 (m) / ana ray7a (f)',
    en: 'I am going',
    why: 'Active participle agrees w/ speaker gender. Female speaker uses ray7a, not raye7.'
  },
  {
    cat: 'verb',
    wrong: 'ana bishrab',
    right: 'ana bishrab',
    en: 'I drink',
    why: 'TRICK question — this is correct! "ana" + b- prefix is right. Common doubt: people add "ba" thinking of MSA.'
  },
  {
    cat: 'verb',
    wrong: 'inta katab',
    right: 'inta katabt',
    en: 'You wrote (m)',
    why: '2nd person past needs -t suffix: katab+t. "katab" alone = he wrote (3rd m).'
  },
  {
    cat: 'negation',
    wrong: 'ma ana raye7',
    right: 'ana mish raye7',
    en: 'I am not going',
    why: 'For nominal/active-participle sentences use "mish" before predicate, not "ma" (which negates verbs).'
  },
  {
    cat: 'negation',
    wrong: 'mish bishrab',
    right: 'ma bishrab',
    en: "I don't drink",
    why: 'Verbs negate w/ "ma" + verb. "mish" = nominal negator (mish kbir = not big).'
  },
  {
    cat: 'definite',
    wrong: 'el bayt el kbir',
    right: 'el bayt el kbir',
    en: 'The big house',
    why: 'CORRECT — both noun + adj take "el" when definite. Common error: omitting "el" on the adjective.'
  },
  {
    cat: 'idafa',
    wrong: 'el bayt el rajul',
    right: 'bayt el rajul',
    en: "The man's house",
    why: 'In idafa (possessive), the FIRST noun drops "el" even though it\'s definite. Only the last noun keeps "el".'
  },
  {
    cat: 'pronoun-suffix',
    wrong: 'el sayyara taba3i',
    right: 'sayyarti / el sayyara taba3i',
    en: 'My car',
    why: 'Suffix attaches directly: sayyara → sayyarti. "taba3i" works as alt but drop "el" then.'
  },
  {
    cat: 'q-word',
    wrong: 'wayn inta?',
    right: 'wayn inta? / wayn-ak?',
    en: 'Where are you?',
    why: 'Both correct, but "waynak" (with suffix) is more colloquial. Beginners overuse pronoun.'
  },
  {
    cat: 'preposition',
    wrong: 'ana b sayyara',
    right: 'ana bil sayyara',
    en: "I'm in the car",
    why: '"b" + "el" = "bil". Don\'t leave them separate.'
  },
  {
    cat: 'false-friend',
    wrong: 'haram = haram (forbidden, English borrowed)',
    right: '7aram = forbidden / pity!',
    en: 'context matters',
    why: '"7aram" w/ ح means BOTH "forbidden" AND "what a pity" depending on tone. Not the same as English "harem" (= 7arim, women\'s quarters).'
  },
  {
    cat: 'false-friend',
    wrong: 'salam = salami',
    right: 'salam = peace, salami = greetings (plural)',
    en: 'salam vs salami',
    why: 'Don\'t confuse: salam = peace (sg). salami = my greetings (w/ poss suffix). The food salami is dakhile (foreign loan).'
  },
  {
    cat: 'false-friend',
    wrong: 'kteer = quite/very (use anywhere)',
    right: 'kteer = a lot — usually after the thing',
    en: 'a lot / very',
    why: '"kteer 7ilo" or "7ilo kteer" both work but order matters in speech. "kteer kteer" = very very.'
  },
  {
    cat: 'pronunciation',
    wrong: 'ahla bik (al-ah-la)',
    right: 'ahla / ahlein',
    en: 'welcome',
    why: '"ahla" alone is the casual welcome. "ahla wa-sahla" full form. "ahlein" = response. "bik" suffix optional.'
  },
  {
    cat: 'word-order',
    wrong: 'kteer ana ta3ben',
    right: 'ana kteer ta3ben / ana ta3ben kteer',
    en: "I'm very tired",
    why: 'Don\'t front "kteer". It comes after subject or after the adjective.'
  },
  {
    cat: 'gender',
    wrong: 'inta jeya?',
    right: 'inta jeye? (m) / inti jeye? (f)',
    en: 'Are you coming?',
    why: 'The active participle for "coming" is jeye (m) / jeye (f) — same form here actually, but "jeya" is wrong.'
  }
];

const CM_DRILL = [
  { sent: 'el bayt 7ilwe', correct: false, fix: 'el bayt 7ilo', why: 'masc noun → masc adj' },
  { sent: 'el sayyara kbire', correct: true, why: 'fem noun w/ fem adj — correct' },
  { sent: 'ana mish raye7', correct: true, why: 'mish negates participle — correct' },
  { sent: 'mish bishrab 2ahwe', correct: false, fix: 'ma bishrab 2ahwe', why: 'verbs negate w/ ma' },
  { sent: 'el bayt el rajul', correct: false, fix: 'bayt el rajul', why: 'idafa — first noun drops el' },
  { sent: 'sayyarti jdide', correct: true, why: 'poss suffix attaches directly — correct' },
  { sent: 'ana b sayyara', correct: false, fix: 'ana bil sayyara', why: 'b + el → bil' },
  { sent: 'kteer ana ta3ben', correct: false, fix: 'ana ta3ben kteer', why: 'kteer goes after, not fronted' },
  { sent: 'inta katab maktoub', correct: false, fix: 'inta katabt maktoub', why: '2nd person past needs -t' },
  { sent: 'wayn-ak?', correct: true, why: 'colloquial — correct' }
];

// ============ SENTENCE TRANSFORMATION ============
// Each item: source sentence + 1+ transformations
const ST_TRANSFORMS = [
  // pos → neg
  { src: 'ana b7ib el 2ahwe', srcEn: 'I love coffee', op: 'negate', target: 'ana ma b7ib el 2ahwe', targetEn: "I don't love coffee" },
  { src: 'inta jeye', srcEn: 'You are coming', op: 'negate', target: 'inta mish jeye', targetEn: "You are not coming" },
  { src: 'el bayt kbir', srcEn: 'The house is big', op: 'negate', target: 'el bayt mish kbir', targetEn: "The house is not big" },
  { src: 'huwwe akal', srcEn: 'He ate', op: 'negate', target: 'huwwe ma akal', targetEn: "He didn't eat" },
  { src: 'fi 7adan honi', srcEn: 'There is someone here', op: 'negate', target: 'ma fi 7adan honi', targetEn: "There is no one here" },
  // statement → question
  { src: 'inta jeye bukra', srcEn: 'You are coming tomorrow', op: 'question', target: 'inta jeye bukra?', targetEn: "Are you coming tomorrow?" },
  { src: 'fi shi yejri', srcEn: 'Something is happening', op: 'question', target: 'shu fi yejri?', targetEn: "What is happening?" },
  { src: 'huwwe rey7 3al beit', srcEn: 'He is going home', op: 'question', target: 'wayn huwwe rey7?', targetEn: "Where is he going?" },
  { src: '3indi tlet ekhwet', srcEn: 'I have three siblings', op: 'question', target: 'kam ekht/akh 3indak?', targetEn: "How many siblings do you have?" },
  { src: 'el film tawil', srcEn: 'The film is long', op: 'question', target: 'el film tawil?', targetEn: "Is the film long?" },
  // pres → past
  { src: 'ana beshrab may', srcEn: 'I drink water', op: 'past', target: 'ana shribt may', targetEn: "I drank water" },
  { src: 'huwwe byiktob', srcEn: 'He writes', op: 'past', target: 'huwwe katab', targetEn: "He wrote" },
  { src: 'n7na bin3ish', srcEn: 'We live', op: 'past', target: 'n7na 3ishna', targetEn: "We lived" },
  // pres → future
  { src: 'huwwe beshtighel', srcEn: 'He works', op: 'future', target: 'huwwe ra7 yeshteghel', targetEn: "He will work" },
  { src: 'ana bemshi', srcEn: 'I walk', op: 'future', target: 'ana ra7 emshi', targetEn: "I will walk" },
  { src: 'inta btedros', srcEn: 'You study', op: 'future', target: 'inta ra7 tedros', targetEn: "You will study" }
];

const ST_OPS = {
  negate: { label: '➖ Negate', desc: 'Make negative — use "ma" w/ verbs, "mish" w/ nouns/participles' },
  question: { label: '❓ Question', desc: 'Turn into a question — add ?, or use shu/wayn/kam etc.' },
  past: { label: '⏮ Past', desc: 'Convert present tense → past' },
  future: { label: '⏭ Future', desc: 'Convert present → future (add ra7 + bare imperfect)' }
};

// ============ TECH & COMPUTER VOCAB ============
const TECH_VOCAB = [
  // hardware
  { ar: 'كمبيوتر', tr: 'computer', en: 'computer', cat: 'device' },
  { ar: 'لابتوب', tr: 'laptop', en: 'laptop', cat: 'device' },
  { ar: 'تلفون', tr: 'telefon', en: 'phone', cat: 'device' },
  { ar: 'موبايل', tr: 'mobile', en: 'mobile / cell', cat: 'device' },
  { ar: 'تابلت', tr: 'tablet', en: 'tablet', cat: 'device' },
  { ar: 'شاشة', tr: 'shesha', en: 'screen', cat: 'device' },
  { ar: 'كيبورد', tr: 'keyboard', en: 'keyboard', cat: 'device' },
  { ar: 'فأرة', tr: 'fa2ra / mouse', en: 'mouse', cat: 'device' },
  { ar: 'سماعات', tr: 'sammé3et', en: 'headphones', cat: 'device' },
  { ar: 'كاميرا', tr: 'kamira', en: 'camera', cat: 'device' },
  // internet
  { ar: 'إنترنت', tr: 'internet', en: 'internet', cat: 'net' },
  { ar: 'واي فاي', tr: 'wi-fi', en: 'wi-fi', cat: 'net' },
  { ar: 'شبكة', tr: 'shabake', en: 'network', cat: 'net' },
  { ar: 'موقع', tr: 'maw2e3', en: 'website', cat: 'net' },
  { ar: 'إيميل', tr: 'email', en: 'email', cat: 'net' },
  { ar: 'باسوورد', tr: 'password', en: 'password', cat: 'net' },
  { ar: 'حساب', tr: '7sab', en: 'account', cat: 'net' },
  { ar: 'تطبيق', tr: 'tatbi2 / app', en: 'app', cat: 'net' },
  { ar: 'تحديث', tr: 'tahdis', en: 'update', cat: 'net' },
  { ar: 'تحميل', tr: 'tahmil', en: 'download', cat: 'net' },
  // social/actions
  { ar: 'فيسبوك', tr: 'Facebook', en: 'Facebook', cat: 'social' },
  { ar: 'واتساب', tr: 'WhatsApp', en: 'WhatsApp', cat: 'social' },
  { ar: 'إنستا', tr: 'Insta', en: 'Instagram', cat: 'social' },
  { ar: 'رسالة', tr: 'risele', en: 'message', cat: 'social' },
  { ar: 'مكالمة', tr: 'mukelame', en: 'call', cat: 'social' },
  { ar: 'فيديو', tr: 'video', en: 'video', cat: 'social' },
  { ar: 'صورة', tr: 'soura', en: 'photo', cat: 'social' },
  // verbs
  { ar: 'يرسل', tr: 'yebe3et', en: 'to send', cat: 'verb' },
  { ar: 'يحمّل', tr: 'yhammel', en: 'to download', cat: 'verb' },
  { ar: 'يضغط', tr: 'yedghot', en: 'to click / press', cat: 'verb' },
  { ar: 'يفتح', tr: 'yefta7', en: 'to open', cat: 'verb' },
  { ar: 'يطفي', tr: 'yetfi', en: 'to turn off', cat: 'verb' },
  { ar: 'يشغّل', tr: 'yshaghel', en: 'to turn on / run', cat: 'verb' },
  { ar: 'يطبع', tr: 'yetba3', en: 'to print / type', cat: 'verb' }
];

const TECH_PHRASES = [
  { ar: 'الواي فاي مش شغال', tr: 'el wi-fi mish shaghel', en: "The wi-fi isn't working" },
  { ar: 'شو الباسوورد؟', tr: 'shu el password?', en: 'What is the password?' },
  { ar: 'بطاريتي خلصت', tr: 'battariyti khilset', en: 'My battery died' },
  { ar: 'شاحنلي تلفوني', tr: 'sha7enli telefoni', en: 'Charge my phone for me' },
  { ar: 'أرسلي إيميل', tr: 'arsel-li email', en: 'Send me an email' },
  { ar: 'بعتلي صورة', tr: 'be3et-li soura', en: 'Send me a photo' },
  { ar: 'ضغطت غلط', tr: 'dghatet ghalat', en: 'I clicked wrong' },
  { ar: 'الموقع ما عم يفتح', tr: 'el maw2e3 ma 3am yefta7', en: "The site won't open" },
  { ar: 'حدّثت التطبيق', tr: 'haddatet el app', en: 'I updated the app' },
  { ar: 'إنطفى الكمبيوتر', tr: 'enttafa el computer', en: 'The computer turned off' },
  { ar: 'فتحت حساب جديد', tr: 'fata7et 7sab jdid', en: 'I opened a new account' },
  { ar: 'بعتلك واتساب', tr: 'be3et-lak WhatsApp', en: 'I sent you a WhatsApp' }
];

const TECH_DIALOG = {
  title: 'Tech help / Wi-Fi trouble',
  turns: [
    { sp: 'A', ar: 'الواي فاي مش شغال!', tr: 'el wi-fi mish shaghel!', en: "Wi-fi isn't working!" },
    { sp: 'B', ar: 'جربي تطفيه وتشغليه', tr: 'jarrbi tetfi w tshaghli', en: 'Try turning it off and on' },
    { sp: 'A', ar: 'جربت، نفس الشي', tr: 'jarrabt, nafs el shi', en: 'I tried, same thing' },
    { sp: 'B', ar: 'شو الباسوورد؟ يمكن بدّل', tr: 'shu el password? yemken bedel', en: 'What is the password? Maybe it changed' },
    { sp: 'A', ar: 'كان نفس الشي من زمان', tr: 'ken nafs el shi men zaman', en: 'It has been the same for ages' },
    { sp: 'B', ar: 'تعا شوف الراوتر', tr: 'ta3a shouf el router', en: 'Come check the router' },
    { sp: 'A', ar: 'الضو أحمر', tr: 'el dou a7mar', en: 'The light is red' },
    { sp: 'B', ar: 'يعني الخدمة قطعت — اتصلي بالشركة', tr: 'ya3ne el khedme 2ata3et — etesli bil sharke', en: 'Service is down — call the company' }
  ]
};
