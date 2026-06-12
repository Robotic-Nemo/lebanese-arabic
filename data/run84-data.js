// Run #84 — Question Formation Coach (QFC)
// Lebanese wh-questions land the wh-word differently than English or MSA. Key facts:
//   - "shu ismak?" and "ismak shu?" are BOTH valid (fronting optional)
//   - "addeh" (how much/many) typically precedes the noun
//   - "leish" (why) usually leads
//   - "kif" (how) can lead OR be medial
//   - "meen" (who) can be subject, object, or possessor (meen shuft / shu shuft meen / bayt meen)
// Common learner error: using MSA "matha/madha" for "what" — Lebanese is "shu".
// Common learner error: using MSA "ayna" for "where" — Lebanese is "wen".
// Common learner error: treating wh-word as always-fronted (English calque).

const QFC_WHWORDS = [
  { code:'shu',   ar:'شو',    tr:'shu',   en:'what',        notes:'Lebanese is shu, not MSA ma/matha. Can lead or trail.' },
  { code:'meen',  ar:'مين',   tr:'meen',  en:'who / whom',  notes:'Subject, object, possessor. "bayt meen?" = whose house?' },
  { code:'wen',   ar:'وين',   tr:'wen',   en:'where',       notes:'Lebanese wen, not MSA ayna. "min wen?" = from where.' },
  { code:'emta',  ar:'إمتى',  tr:'emta',  en:'when',        notes:'Almost always fronted. Can take -sh suffix for "until when".' },
  { code:'kif',   ar:'كيف',   tr:'kif',   en:'how',         notes:'Leads most questions. "kifak?" = how are you (m).' },
  { code:'leish', ar:'ليش',   tr:'leish', en:'why',         notes:'Always fronts. Answered with "la2anno" (because).' },
  { code:'addeh', ar:'قدّيش', tr:'addeh', en:'how much/many', notes:'Precedes noun: "addeh kilo?" not "kilo addeh?". Price: "bi2addeh?".' },
  { code:'ayya',  ar:'أيا',   tr:'ayya',  en:'which',       notes:'Agrees with noun: ayya walad (which boy), ayya bint (which girl). Leads phrase.' }
];

const QFC_EXERCISES = [
  { id:'q1',  target:'object',      wh:'shu',   prompt_ar:'أكلت تفاحة',                prompt_tr:'akalet tefe7a',               prompt_en:'I ate an apple',                 question_ar:'شو أكلت؟',                question_tr:'shu akalet?',            hint:'Ask about the object (what).' },
  { id:'q2',  target:'subject',     wh:'meen',  prompt_ar:'كريم إجا',                   prompt_tr:'Karim eja',                   prompt_en:'Karim came',                     question_ar:'مين إجا؟',                question_tr:'meen eja?',              hint:'Ask about the subject (who).' },
  { id:'q3',  target:'location',    wh:'wen',   prompt_ar:'رحت عالسوق',                 prompt_tr:'re7et 3as-sū2',               prompt_en:'I went to the market',           question_ar:'وين رحت؟',                question_tr:'wen re7et?',             hint:'Ask about the location.' },
  { id:'q4',  target:'time',        wh:'emta',  prompt_ar:'رح نسافر بكرا',              prompt_tr:'ra7 nsāfer bukra',            prompt_en:'we will travel tomorrow',        question_ar:'إمتى رح تسافروا؟',       question_tr:'emta ra7 tsāfru?',       hint:'Ask when.' },
  { id:'q5',  target:'manner',      wh:'kif',   prompt_ar:'أنا منيح',                   prompt_tr:'ana mnī7',                    prompt_en:'I am fine',                      question_ar:'كيفك؟',                    question_tr:'kifak?',                  hint:'Ask how the person is (m).' },
  { id:'q6',  target:'reason',      wh:'leish', prompt_ar:'ما جيت',                     prompt_tr:'ma jīt',                      prompt_en:'I didn\'t come',                 question_ar:'ليش ما جيت؟',             question_tr:'leish ma jīt?',          hint:'Ask why.' },
  { id:'q7',  target:'quantity',    wh:'addeh', prompt_ar:'عندي ثلاث ولاد',             prompt_tr:'3indi tlāt wlād',             prompt_en:'I have three kids',              question_ar:'قدّيش عندك ولاد؟',        question_tr:'addeh 3indak wlād?',     hint:'Ask how many kids.' },
  { id:'q8',  target:'selection',   wh:'ayya',  prompt_ar:'بحب هيدا الكتاب',            prompt_tr:'b7ebb hayda l-ktēb',          prompt_en:'I like this book',               question_ar:'أيا كتاب بتحب؟',          question_tr:'ayya ktēb btheb?',       hint:'Ask which book.' },
  { id:'q9',  target:'object',      wh:'shu',   prompt_ar:'عم بشرب قهوة',               prompt_tr:'3am beshrab 2ahwe',           prompt_en:'I\'m drinking coffee',           question_ar:'شو عم تشرب؟',             question_tr:'shu 3am teshrab?',       hint:'Ask what (m).' },
  { id:'q10', target:'possessor',   wh:'meen',  prompt_ar:'هيدا بيت كريم',              prompt_tr:'hayda bayt Karim',            prompt_en:'this is Karim\'s house',         question_ar:'بيت مين هيدا؟',           question_tr:'bayt meen hayda?',       hint:'Ask whose house (possessor).' },
  { id:'q11', target:'origin',      wh:'wen',   prompt_ar:'أنا من بيروت',               prompt_tr:'ana min bayrūt',              prompt_en:'I\'m from Beirut',               question_ar:'من وين إنت؟',             question_tr:'min wen inta?',          hint:'Ask where from.' },
  { id:'q12', target:'time',        wh:'emta',  prompt_ar:'بشتغل الصبح',                prompt_tr:'beshteghel eS-Sebe7',         prompt_en:'I work in the morning',          question_ar:'إمتى بتشتغل؟',            question_tr:'emta btshteghel?',       hint:'Ask when you work.' },
  { id:'q13', target:'manner',      wh:'kif',   prompt_ar:'وصلت بالباص',                prompt_tr:'weSelet bal-bāS',             prompt_en:'I arrived by bus',               question_ar:'كيف وصلت؟',               question_tr:'kif weSelet?',           hint:'Ask how you arrived.' },
  { id:'q14', target:'reason',      wh:'leish', prompt_ar:'ما بدي روح',                 prompt_tr:'ma beddi rū7',                prompt_en:'I don\'t want to go',            question_ar:'ليش ما بدك تروح؟',        question_tr:'leish ma beddak trū7?',  hint:'Ask why (m).' },
  { id:'q15', target:'quantity',    wh:'addeh', prompt_ar:'حقّه ١٠ دولار',               prompt_tr:'7a22o 10 dolār',              prompt_en:'it costs 10 dollars',            question_ar:'بقدّيش؟',                  question_tr:'bi-addeh?',              hint:'Ask how much it costs (price idiom).' },
  { id:'q16', target:'selection',   wh:'ayya',  prompt_ar:'أخد الباص الأحمر',           prompt_tr:'akhad el-bāS el-a7mar',       prompt_en:'he took the red bus',            question_ar:'أيا باص أخد؟',             question_tr:'ayya bāS akhad?',        hint:'Ask which bus.' },
  { id:'q17', target:'object',      wh:'shu',   prompt_ar:'إسمي كريم',                   prompt_tr:'esmi Karim',                  prompt_en:'my name is Karim',               question_ar:'شو إسمك؟',                question_tr:'shu esmak?',             hint:'Ask what your name is (m).' },
  { id:'q18', target:'subject',     wh:'meen',  prompt_ar:'ماما عم تطبخ',                prompt_tr:'māma 3am teTbekh',            prompt_en:'mom is cooking',                 question_ar:'مين عم يطبخ؟',            question_tr:'meen 3am yeTbekh?',      hint:'Ask who is cooking.' },
  { id:'q19', target:'location',    wh:'wen',   prompt_ar:'المفتاح عالطاولة',           prompt_tr:'el-mefte7 3aT-Tāwle',         prompt_en:'the key is on the table',        question_ar:'وين المفتاح؟',            question_tr:'wen el-mefte7?',         hint:'Ask where the key is.' },
  { id:'q20', target:'time',        wh:'emta',  prompt_ar:'وصلت الساعة عشرة',           prompt_tr:'weSelet es-sē3a 3ashara',     prompt_en:'I arrived at 10',                question_ar:'إمتى وصلت؟',              question_tr:'emta weSelet?',          hint:'Ask when you arrived.' },
  { id:'q21', target:'manner',      wh:'kif',   prompt_ar:'بدي قهوة حلوة',              prompt_tr:'beddi 2ahwe 7elwe',           prompt_en:'I want sweet coffee',            question_ar:'كيف بدك القهوة؟',         question_tr:'kif beddak el-2ahwe?',   hint:'Ask how you want the coffee (m).' },
  { id:'q22', target:'reason',      wh:'leish', prompt_ar:'تأخّرت لأنّو في عجقة',       prompt_tr:'t2akhkharet la2anno fī 3aj2a', prompt_en:'I was late because of traffic', question_ar:'ليش تأخّرت؟',              question_tr:'leish t2akhkharet?',     hint:'Ask why you were late.' },
  { id:'q23', target:'quantity',    wh:'addeh', prompt_ar:'عمرو ٢٥ سنة',                 prompt_tr:'3emro 25 sene',               prompt_en:'he is 25 years old',             question_ar:'قدّيش عمرو؟',              question_tr:'addeh 3emro?',           hint:'Ask how old he is.' },
  { id:'q24', target:'selection',   wh:'ayya',  prompt_ar:'بفضّل الشاي الأخضر',         prompt_tr:'bfaDDel esh-shāi el-akhDar', prompt_en:'I prefer green tea',              question_ar:'أيا شاي بتفضّل؟',          question_tr:'ayya shāi btfaDDel?',    hint:'Ask which tea.' },
  { id:'q25', target:'object',      wh:'shu',   prompt_ar:'طبخت مجدّرة',                 prompt_tr:'Tabakhet mjaddara',           prompt_en:'I cooked mjaddara',               question_ar:'شو طبختي؟',               question_tr:'shu Tabakhti?',          hint:'Ask what you cooked (f).' },
  { id:'q26', target:'possessor',   wh:'meen',  prompt_ar:'هيدي سيّارة بيّي',            prompt_tr:'haydi sayyārit bayyi',        prompt_en:'this is my father\'s car',        question_ar:'سيّارة مين هيدي؟',         question_tr:'sayyārit meen haydi?',   hint:'Ask whose car.' },
  { id:'q27', target:'reason',      wh:'leish', prompt_ar:'ما جاوبني',                   prompt_tr:'ma jāwabne',                  prompt_en:'he didn\'t answer me',            question_ar:'ليش ما جاوبك؟',            question_tr:'leish ma jāwabak?',      hint:'Ask why he didn\'t answer you (m).' },
  { id:'q28', target:'quantity',    wh:'addeh', prompt_ar:'أخدت ساعتين',                prompt_tr:'akhadet sē3tēn',              prompt_en:'it took two hours',               question_ar:'قدّيش أخد؟',                question_tr:'addeh akhad?',           hint:'Ask how long it took.' }
];

const QFC_TIPS = [
  'Default to Lebanese wh-words: shu (not MSA matha), wen (not ayna), meen (not man), emta (not mata).',
  '"shu" can front or trail: "shu ismak?" = "ismak shu?". Both native.',
  '"leish" almost always leads. Answer with "la2anno" (because).',
  '"addeh" precedes the noun: "addeh kilo?" — not kilo-addeh.',
  'Price idiom: "bi-addeh?" = how much is it (literally "at how much").',
  'Possessor pattern: "X meen?" = whose X? ("bayt meen?", "sayyārit meen?")',
  'Origin: "min wen inta?" (m) / "min wen inti?" (f). Subject pronoun required; English drops it.'
];
