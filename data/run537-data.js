// R537 — NEW FEATURE: Lebanese Proverbs & Sayings coach (prefix: prv)

const PRV_WORDS = [
  // cat: wisdom
  { ar: 'إللي بتزرعو بتحصدو', tr: 'illi btzra3o bt7SuDo', en: 'What you plant, you harvest (reap what you sow)', cat: 'wisdom' },
  { ar: 'الوقت من ذهب', tr: 'el-wa2t min Dahab', en: 'Time is gold', cat: 'wisdom' },
  { ar: 'اللي ما عندو رأس عندو رجلين', tr: 'illi ma 3indo raas 3indo rejleen', en: 'Who has no head has legs (must run for others)', cat: 'wisdom' },
  { ar: 'الغايب حجتو معو', tr: 'el-ghayib 7ujjto ma3o', en: 'The absent has his excuse with him (don\'t judge the absent)', cat: 'wisdom' },
  { ar: 'خوك بالزلة وما خوك بالزلة', tr: 'khuuk bel-zalle w-ma khuuk bel-zalle', en: 'Your brother in hardship — and not your brother in hardship (true friendship shown in crisis)', cat: 'wisdom' },
  { ar: 'القرد بعين أمو غزال', tr: 'el-2erd b-3ein immo ghazaal', en: 'The monkey is a gazelle in his mother\'s eyes (all parents think their child is perfect)', cat: 'wisdom' },
  { ar: 'كل شي ومزيانتو', tr: 'kull shi w-mzayyanto', en: 'Everything has its right way/measure (all in moderation)', cat: 'wisdom' },

  // cat: patience
  { ar: 'الصبر مفتاح الفرج', tr: 'el-Sabr miftaa7 el-faraj', en: 'Patience is the key to relief', cat: 'patience' },
  { ar: 'إللي بيجي بدري بيروح بدري', tr: 'illi biiji badri biiru7 badri', en: 'What comes early leaves early (easy come easy go)', cat: 'patience' },
  { ar: 'بعد الضيق فرج', tr: 'ba3d el-Dii2 faraj', en: 'After hardship comes relief', cat: 'patience' },
  { ar: 'مع الوقت يلين القضيب', tr: 'ma3 el-wa2t yiliin el-2aDiib', en: 'With time, the stick softens (patience changes everything)', cat: 'patience' },
  { ar: 'إجا دور الكلب', tr: 'ija door el-kalb', en: 'The dog\'s turn came (even the lowest get their moment)', cat: 'patience' },

  // cat: warning
  { ar: 'اللي ما يعرف الصقر يشويه', tr: 'illi ma ya3rif el-Sa2r yshawwio', en: 'Whoever doesn\'t know the falcon roasts it (don\'t misjudge value)', cat: 'warning' },
  { ar: 'اللسان بلا عظم', tr: 'el-lisaan bala 3aDem', en: 'The tongue has no bone (words are easy and cheap)', cat: 'warning' },
  { ar: 'من حفر حفرة وقع فيها', tr: 'min 7afar 7ufra wa2a3 fiiha', en: 'Whoever digs a pit falls into it (traps backfire)', cat: 'warning' },
  { ar: 'الباب إللي بيجي منو الريح سكرو', tr: 'el-baab illi biiji minno el-rii7 sakkirro', en: 'The door that brings wind — close it (eliminate sources of trouble)', cat: 'warning' },
  { ar: 'ما بتعرف وجعي وتداوي', tr: 'ma bta3rif waja3i w-tdaawi', en: 'You don\'t know my pain yet you treat me (don\'t give advice on what you don\'t understand)', cat: 'warning' },

  // cat: people
  { ar: 'الناس معادن', tr: 'el-naas ma3aadem', en: 'People are metals/ores (each person has their own character and quality)', cat: 'people' },
  { ar: 'قرب ولا تحب', tr: '2arrib w-la t7abb', en: 'Be close but not attached (keep healthy distance)', cat: 'people' },
  { ar: 'كل إناء بيترشح بما فيه', tr: 'kull inaa2 bitirsha7 bma fiih', en: 'Every vessel drips what is inside it (people reveal their true nature)', cat: 'people' },
  { ar: 'الجار قبل الدار', tr: 'el-jaar 2abl el-daar', en: 'The neighbor before the house (choose neighbors over location)', cat: 'people' },
  { ar: 'حدا بشيل حدا', tr: '7ada bshiil 7ada', en: 'Someone carries someone (we all need each other)', cat: 'people' },

  // cat: action
  { ar: 'إللي بيتأخر بيخسر', tr: 'illi byta2akhar bykhsar', en: 'Who delays loses (act promptly)', cat: 'action' },
  { ar: 'ما في شي بالدني بلا مقابل', tr: 'ma fii shi bel-dinya bala mu2abil', en: 'Nothing in this world is free (everything has a price)', cat: 'action' },
  { ar: 'اليد إللي ما تقدر تعضها بوسها', tr: 'el-yad illi ma ti2dar ta3DDha buwwissha', en: 'The hand you can\'t bite — kiss it (deal practically with power)', cat: 'action' },
  { ar: 'الحركة بركة', tr: 'el-7arake barake', en: 'Movement is a blessing (staying active brings good things)', cat: 'action' },
  { ar: 'كل قفة ولها حدا يشيلها', tr: 'kull 2uffe w-ilha 7ada yshiilha', en: 'Every basket has someone to carry it (everyone finds their match)', cat: 'action' },

  // cat: fate
  { ar: 'مكتوب', tr: 'maktub', en: 'It is written (fate/destiny — used to accept what cannot be changed)', cat: 'fate' },
  { ar: 'شو ما كان في النصيب ما بيتعدى', tr: 'shu ma kaan fil-naSiib ma byta3adda', en: 'Whatever is in one\'s destiny cannot be surpassed (fate is set)', cat: 'fate' },
  { ar: 'رب ضارة نافعة', tr: 'rabb Darra naafi3a', en: 'Many a harm is a benefit (blessings in disguise)', cat: 'fate' },
  { ar: 'إذا كان ربك معك مين عليك', tr: 'iza kaan rabbak ma3ak miin 3aleek', en: 'If God is with you, who is against you', cat: 'fate' },
];

const PRV_DRILLS = [
  {
    q: 'Your friend keeps delaying starting their business and losing opportunities. Which proverb fits?',
    opts: [
      'illi byta2akhar bykhsar — Who delays loses',
      'el-Sabr miftaa7 el-faraj — Patience is the key to relief',
      'el-wa2t min Dahab — Time is gold',
      'maktub — It is written'
    ],
    ans: 0,
    exp: '"illi byta2akhar bykhsar" means who delays, loses. Used when someone\'s procrastination is costing them real opportunities. Lebanese directness — they\'ll quote this proverb to your face when you\'re stalling.'
  },
  {
    q: 'Someone gossiped about a friend and now it caused problems. Which proverb do Lebanese people say?',
    opts: [
      'el-lisaan bala 3aDem — The tongue has no bone (words are easy)',
      'el-naas ma3aadem — People are metals',
      'kull inaa2 bitirsha7 bma fiih — Every vessel drips what\'s inside',
      'min 7afar 7ufra wa2a3 fiiha — Whoever digs a pit falls into it'
    ],
    ans: 0,
    exp: '"el-lisaan bala 3aDem" — the tongue has no bone, meaning it moves freely and without resistance. Said when words cause damage because they were spoken thoughtlessly. One of the most common Lebanese proverbs about gossip and careless speech.'
  },
  {
    q: 'A selfish neighbor caused trouble but your parents want you to stay polite. They say:',
    opts: [
      'el-yad illi ma ti2dar ta3DDha buwwissha — Hand you can\'t bite, kiss it',
      'el-jaar 2abl el-daar — The neighbor before the house',
      'min 7afar 7ufra wa2a3 fiiha — Whoever digs a pit falls into it',
      '2arrib w-la t7abb — Be close but not attached'
    ],
    ans: 0,
    exp: '"el-yad illi ma ti2dar ta3DDha buwwissha" — the hand you can\'t bite, kiss it. Raw pragmatism: if you can\'t fight a powerful person, be diplomatic. Lebanese culture values strategic survival, not naive confrontation.'
  },
  {
    q: 'Your Lebanese host shows you her newborn baby. You privately think the baby is plain-looking but she says it\'s beautiful. Which proverb explains her view?',
    opts: [
      'el-2erd b-3ein immo ghazaal — The monkey is a gazelle in his mother\'s eyes',
      'kull shi w-mzayyanto — Everything in moderation',
      'el-naas ma3aadem — People are metals',
      'illi btzra3o bt7SuDo — What you plant, you harvest'
    ],
    ans: 0,
    exp: '"el-2erd b-3ein immo ghazaal" — the monkey in his mother\'s eyes is a gazelle. Universally used (affectionately or humorously) about parents who idealize their children. Never say this directly to the mother!'
  },
  {
    q: 'After a difficult year things are finally improving. Your Lebanese friend says:',
    opts: [
      'ba3d el-Dii2 faraj — After hardship comes relief',
      'el-Sabr miftaa7 el-faraj — Patience is the key to relief',
      'rabb Darra naafi3a — Many a harm is a benefit',
      'maktub — It is written'
    ],
    ans: 0,
    exp: '"ba3d el-Dii2 faraj" — after tightness/hardship comes relief. A cornerstone of Lebanese resilience mindset. Said constantly during Lebanon\'s many crises. Related to the Islamic concept that hardship is followed by ease. Very comforting phrase in Lebanese culture.'
  },
  {
    q: 'Your colleague skipped corners in their work and got caught. Your Lebanese coworker says:',
    opts: [
      'illi btzra3o bt7SuDo — What you plant, you harvest',
      'min 7afar 7ufra wa2a3 fiiha — Whoever digs a pit falls into it',
      'el-ghayib 7ujjto ma3o — The absent has his excuse with him',
      'el-lisaan bala 3aDem — The tongue has no bone'
    ],
    ans: 0,
    exp: '"illi btzra3o bt7SuDo" — what you plant, you harvest. The Lebanese karma proverb. Said with satisfaction when someone gets their comeuppance, or as a warning before someone makes a bad decision. Direct causal accountability.'
  },
  {
    q: 'Someone is judging a friend who isn\'t in the room. The wise elder says:',
    opts: [
      'el-ghayib 7ujjto ma3o — The absent has his excuse with him',
      'el-2erd b-3ein immo ghazaal — Monkey is a gazelle in mother\'s eyes',
      'kull inaa2 bitirsha7 bma fiih — Every vessel drips what\'s inside',
      '2arrib w-la t7abb — Be close but not attached'
    ],
    ans: 0,
    exp: '"el-ghayib 7ujjto ma3o" — the absent person carries their excuse with them. Profound Lebanese courtesy: you cannot judge someone who isn\'t there to explain themselves. Stops gossip and hasty conclusions. Very commonly cited at family gatherings when someone is being criticized behind their back.'
  },
  {
    q: 'After a painful breakup your Lebanese mother says everything happens for a reason. She quotes:',
    opts: [
      'rabb Darra naafi3a — Many a harm is a benefit',
      'maktub — It is written (fate)',
      'ba3d el-Dii2 faraj — After hardship comes relief',
      'el-Sabr miftaa7 el-faraj — Patience is the key'
    ],
    ans: 0,
    exp: '"rabb Darra naafi3a" — many a harm is beneficial. The Lebanese silver lining proverb. Said when something painful leads to something better. Often paired with "maktub" (it was written/fate). Key to understanding Lebanese emotional resilience and how they process loss.'
  },
  {
    q: 'You\'re choosing between a beautiful apartment with terrible neighbors vs. an okay apartment with great neighbors. Your Lebanese aunt says:',
    opts: [
      'el-jaar 2abl el-daar — The neighbor before the house',
      '7ada bshiil 7ada — Someone carries someone',
      'el-wa2t min Dahab — Time is gold',
      'el-7arake barake — Movement is blessing'
    ],
    ans: 0,
    exp: '"el-jaar 2abl el-daar" — the neighbor before the house. Classic Lebanese housing wisdom. Community matters more than the physical space. Lebanon\'s dense urban neighborhoods mean neighbor relationships are unavoidable and crucial. Always consider who lives next to you before signing a lease.'
  },
  {
    q: 'Someone reveals their true greedy character after getting power. Your Lebanese friend says:',
    opts: [
      'kull inaa2 bitirsha7 bma fiih — Every vessel drips what\'s inside',
      'el-naas ma3aadem — People are metals',
      'el-lisaan bala 3aDem — The tongue has no bone',
      'illi btzra3o bt7SuDo — What you plant, you harvest'
    ],
    ans: 0,
    exp: '"kull inaa2 bitirsha7 bma fiih" — every vessel drips what is inside it. Power reveals character. When someone finally shows their true nature (usually negative), Lebanese people quote this. The vessel metaphor: pressure eventually brings what\'s really inside to the surface.'
  },
];

const PRV_TIPS = [
  '<strong>When to use proverbs:</strong> Lebanese proverbs aren\'t just for the elderly — young Lebanese quote them casually in WhatsApp, during arguments, and at family dinners. Dropping the right proverb at the right moment signals cultural fluency and earns immediate respect.',
  '<strong>Fate vs. responsibility:</strong> Lebanese proverbs balance two worldviews: "maktub" (fate, what is written) and "illi btzra3o bt7SuDo" (you reap what you sow). Both exist simultaneously — Lebanese people accept fate while still believing in personal accountability.',
  '<strong>Family proverbs:</strong> "el-2erd b-3ein immo ghazaal" and "khuuk bel-zalle" are family-specific proverbs used frequently. Lebanese family culture is intense — these proverbs encode obligations, loyalties, and the complexity of family bonds.',
  '<strong>Neighbor culture:</strong> "el-jaar 2abl el-daar" is not just a saying — it\'s a lived reality. Lebanon\'s dense cities (especially Beirut) mean neighbors share walls, stairwells, and daily life. Tenant-neighbor relationships in Lebanon are more like extended family.',
  '<strong>Resilience phrases:</strong> "ba3d el-Dii2 faraj" and "el-Sabr miftaa7 el-faraj" are the backbone of Lebanese emotional culture. Given Lebanon\'s history of wars, economic crises, and political instability, these proverbs aren\'t clichés — they\'re survival tools passed down through trauma.',
];

const PRV_ABOUT = 'Lebanese proverbs (<em>amtaal</em>) are living language — quoted in daily arguments, WhatsApp messages, and family dinners. They encode centuries of Levantine wisdom about fate, community, patience, and pragmatic survival. Unlike formal MSA proverbs, Lebanese dialect versions are informal, rhythmic, and often darkly humorous. Mastering a dozen key proverbs dramatically accelerates your acceptance into Lebanese social circles — it signals that you understand not just the language but the philosophy.';
