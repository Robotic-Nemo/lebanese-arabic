// R1179 — NEW FEATURE: Lebanese Protest & Revolution Vocabulary (rvl)

const RVL_WORDS = [
  { ar: 'ثورة', tr: 'thawra', en: 'revolution / uprising' },
  { ar: 'متظاهرين', tr: 'metzahrin', en: 'protesters / demonstrators' },
  { ar: 'ساحة', tr: 'sa7a', en: 'public square / plaza' },
  { ar: 'مطالب', tr: 'matalib', en: 'demands' },
  { ar: 'استقالة', tr: 'esti2ala', en: 'resignation' },
  { ar: 'فساد', tr: 'fasad', en: 'corruption' },
  { ar: 'زعران', tr: 'zu3ran', en: 'troublemakers / thugs (pejorative for regime loyalists)' },
  { ar: 'إجا دورك', tr: 'ija dawrak', en: 'your turn has come (protest chant)' },
  { ar: 'كلن يعني كلن', tr: 'killen ya3ni killen', en: 'all of them means all of them (iconic slogan)' },
  { ar: 'يسقط', tr: 'yis2ot', en: 'down with (lit. may he fall)' },
  { ar: 'هيبة الدولة', tr: 'haybet el-dawle', en: 'state authority / prestige of the state' },
  { ar: 'طائفية', tr: 'ta2ifiyye', en: 'sectarianism' },
  { ar: 'محاسبة', tr: 'mu7asabe', en: 'accountability' },
  { ar: 'تغيير', tr: 'taghyir', en: 'change' },
  { ar: 'طلعت ريحتكن', tr: 'tele3et ri7etkon', en: 'your stench has risen (protest anthem title)' },
  { ar: 'قنبلة مسيلة للدموع', tr: '2anbalet msileh la-dumu3', en: 'tear gas canister' },
  { ar: 'خيمة', tr: 'khayma', en: 'tent (protest camp)' },
  { ar: 'طبول', tr: 'tabul', en: 'drums (used in protests)' },
  { ar: 'حرية', tr: '7orriyye', en: 'freedom' },
  { ar: 'شارع', tr: 'share3', en: 'street (as in taking to the streets)' },
];

const RVL_DRILLS = [
  { q: 'What does "killen ya3ni killen" mean?', opts: ['all of them means all of them', 'some of them are corrupt', 'the people demand', 'down with everyone'], ans: 0 },
  { q: 'How do you say "corruption" in Lebanese?', opts: ['fasad', 'thawra', '7orriyye', 'taghyir'], ans: 0 },
  { q: '"Yis2ot" means:', opts: ['down with / may he fall', 'rise up', 'resign', 'change'], ans: 0 },
  { q: 'What is a "sa7a" in protest context?', opts: ['public square / plaza', 'a tent camp', 'a chant', 'a demand'], ans: 0 },
  { q: '"Esti2ala" means:', opts: ['resignation', 'accountability', 'freedom', 'state authority'], ans: 0 },
  { q: 'What does "metzahrin" mean?', opts: ['protesters / demonstrators', 'riot police', 'journalists', 'politicians'], ans: 0 },
  { q: '"7orriyye" translates to:', opts: ['freedom', 'corruption', 'sectarianism', 'uprising'], ans: 0 },
  { q: 'What are "matalib"?', opts: ['demands', 'drums', 'tents', 'streets'], ans: 0 },
];

const RVL_TIPS = [
  {
    title: 'October 17 (Tishreen) 2019',
    body: 'The Lebanese revolution started Oct 17, 2019 — triggered by a WhatsApp tax. "Tishreen" became a generation\'s identity. Protesters flooded sa7at Riad el-Solh and Martyrs\' Square in Beirut for months.',
  },
  {
    title: 'Killen ya3ni killen',
    body: '"Killen ya3ni killen" (all of them means all of them) became the defining slogan — a rejection of the entire political class across all sects. You\'ll still hear it in daily speech when criticizing politicians.',
  },
  {
    title: 'Sectarianism & Ta2ifiyye',
    body: 'Lebanese politics runs on ta2ifiyye (sectarianism) — power-sharing between sects enshrined since 1943. The thawra explicitly targeted this system. Calling something "ta2ifi" is a strong criticism in Lebanese Arabic.',
  },
  {
    title: 'Protest Culture Phrases',
    body: '"Ija dawrak" (your turn has come) and "yis2ot" (down with) are common chant roots. "Tele3et ri7etkon" was a protest anthem. These phrases appear in memes, social media, and casual political conversation today.',
  },
];
