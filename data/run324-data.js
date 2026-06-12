// Run #324 — Lebanese Celebrations & Occasions Coach (occ)
// 40 words across 5 categories: weddings / greetings / religious / family / expressions
// 10 MCQ drills, 5 tips, about text

const OCC_WORDS = [
  // weddings
  { tr: '3aras', ar: 'عرس', en: 'wedding', cat: 'weddings' },
  { tr: '3ariis', ar: 'عريس', en: 'groom', cat: 'weddings' },
  { tr: '3aruus', ar: 'عروس', en: 'bride', cat: 'weddings' },
  { tr: 'khaTiibe', ar: 'خطيبة', en: 'fiancée', cat: 'weddings' },
  { tr: 'mbaarak', ar: 'مبارك', en: 'congratulations / blessed', cat: 'weddings' },
  { tr: 'mabrook', ar: 'مبروك', en: 'congratulations (colloquial)', cat: 'weddings' },
  { tr: 'ma3 el-3aruusin', ar: 'مع العروسين', en: 'with the couple (toast)', cat: 'weddings' },
  { tr: '3ala baalkun', ar: 'على بالكن', en: 'may it be your turn (next)', cat: 'weddings' },
  // greetings
  { tr: 'mabruuk', ar: 'مبروك', en: 'congratulations', cat: 'greetings' },
  { tr: 'kull 3aam w inta bkheir', ar: 'كل عام وأنت بخير', en: 'happy every year (holiday greeting)', cat: 'greetings' },
  { tr: 'allah yHfaDak', ar: 'الله يحفظك', en: 'may God protect you', cat: 'greetings' },
  { tr: 'bi l-3aafye', ar: 'بالعافية', en: 'get well / enjoy (versatile blessing)', cat: 'greetings' },
  { tr: 'ta3ishuu', ar: 'تعيشوا', en: 'may you live long', cat: 'greetings' },
  { tr: 'alf mabrook', ar: 'ألف مبروك', en: 'a thousand congratulations', cat: 'greetings' },
  { tr: 'yislamu ideikun', ar: 'يسلموا إيديكن', en: 'bless your hands (compliment)', cat: 'greetings' },
  // religious
  { tr: '3iid', ar: 'عيد', en: 'holiday / celebration', cat: 'religious' },
  { tr: '3iid il-fiTr', ar: 'عيد الفطر', en: 'Eid al-Fitr', cat: 'religious' },
  { tr: '3iid il-aDHa', ar: 'عيد الأضحى', en: 'Eid al-Adha', cat: 'religious' },
  { tr: 'eid saeed', ar: 'عيد سعيد', en: 'happy holiday', cat: 'religious' },
  { tr: 'ramaDaan kariim', ar: 'رمضان كريم', en: 'Ramadan is generous (greeting)', cat: 'religious' },
  { tr: 'miilaad majiid', ar: 'ميلاد مجيد', en: 'Merry Christmas (lit. glorious birth)', cat: 'religious' },
  { tr: 'kull sine w intu l-3a2ile', ar: 'كل سنة وأنتو العيلة', en: 'happy every year, family', cat: 'religious' },
  // family occasions
  { tr: 'mawliid', ar: 'مولد', en: 'birth / birthday celebration', cat: 'family' },
  { tr: '3iid milaad', ar: 'عيد ميلاد', en: 'birthday', cat: 'family' },
  { tr: 'khiTbe', ar: 'خطبة', en: 'engagement', cat: 'family' },
  { tr: 'ma2taam', ar: 'مأتم', en: 'funeral / mourning', cat: 'family' },
  { tr: '3aza', ar: 'عزاء', en: 'condolences gathering', cat: 'family' },
  { tr: 'allah yir7amu', ar: 'الله يرحمه', en: 'may God have mercy on him', cat: 'family' },
  { tr: 'ta3azzaina biikun', ar: 'تعزّينا بيكن', en: 'we find comfort in you (condolence reply)', cat: 'family' },
  // expressions
  { tr: 'yalla na7tifil', ar: 'يلا نحتفل', en: 'let\'s celebrate', cat: 'expressions' },
  { tr: '3al-baal', ar: 'عالبال', en: 'on our mind / we\'re thinking of you', cat: 'expressions' },
  { tr: 'nshaallah tafraa', ar: 'إنشالله تفرح', en: 'may you be happy / rejoice', cat: 'expressions' },
  { tr: 'feere', ar: 'فيرة', en: 'joy / celebration feeling', cat: 'expressions' },
  { tr: 'da77ayna', ar: 'دحّينا', en: 'we celebrated / had a blast', cat: 'expressions' },
  { tr: 'ma7atta zghiire', ar: 'محطة صغيرة', en: 'small gathering / intimate occasion', cat: 'expressions' },
  { tr: 'bkheer inshallah', ar: 'بخير إنشالله', en: 'all good, God willing', cat: 'expressions' },
  { tr: 'farHa kbiire', ar: 'فرحة كبيرة', en: 'big joy / big celebration', cat: 'expressions' },
  { tr: 'allah yitmim 3a kheir', ar: 'الله يتمّم عالخير', en: 'may God complete it with good', cat: 'expressions' },
  { tr: 'ma3 s-salaame', ar: 'مع السلامة', en: 'goodbye / safe travels', cat: 'expressions' },
  { tr: 'tislam', ar: 'تسلم', en: 'God bless you / thank you', cat: 'expressions' },
];

const OCC_DRILLS = [
  {
    q: 'What does "mabrook" (مبروك) mean?',
    opts: ['Happy birthday', 'Congratulations', 'Good morning', 'Get well soon'],
    correct: 1,
    note: '"Mabrook" (مبروك) = congratulations. From "baraka" (blessing). Used for any happy event: wedding, baby, new job, graduation. Reply: "allah ybaarak fiik" (may God bless you).'
  },
  {
    q: 'What does "3ala baalkun" mean at a Lebanese wedding?',
    opts: ['Congratulations to the couple', 'May it be your turn next', 'Welcome to our home', 'Enjoy the party'],
    correct: 1,
    note: '"3ala baalkun" (على بالكن) — said to unmarried guests at a wedding, wishing they\'ll be next. Can feel like pressure but meant affectionately! Often said with a wink.'
  },
  {
    q: 'How do you wish someone a happy holiday in Lebanese Arabic?',
    opts: ['eid saeed', 'kull 3aam', 'miilaad majiid', 'allah yHfaDak'],
    correct: 0,
    note: '"Eid saeed" (عيد سعيد) = happy holiday. Works for both Muslim and Christian celebrations. "Kull 3aam w inta bkheir" (happy every year) is also very common for all occasions.'
  },
  {
    q: 'What is "khiTbe" in Lebanese Arabic?',
    opts: ['Wedding', 'Engagement', 'Birthday', 'Funeral'],
    correct: 1,
    note: '"KhiTbe" (خطبة) = engagement. Lebanese engagements are major social events — often a large party with both families. The engagement ring ceremony ("dabke l-khatiib") is celebrated separately from the wedding.'
  },
  {
    q: 'What does "yislamu ideikun" mean?',
    opts: ['Welcome to our home', 'May God protect you', 'Bless your hands', 'Happy new year'],
    correct: 2,
    note: '"Yislamu ideikun" (يسلموا إيديكن) — literally "may your hands be safe/blessed". Said to compliment someone\'s handiwork — cooking, gift, anything made. One of the most common Lebanese compliments.'
  },
  {
    q: 'What is the appropriate response when visiting a family in mourning ("3aza")?',
    opts: ['Alf mabrook', 'Allah yir7amu', 'Eid saeed', 'Yalla na7tifil'],
    correct: 1,
    note: '"Allah yir7amu" (الله يرحمه) — may God have mercy on him. For a woman: "allah yir7amha". Essential phrase for condolence visits. Lebanese mourning gatherings (3aza) are communal — showing up matters enormously.'
  },
  {
    q: 'What does "ramaDaan kariim" mean?',
    opts: ['Happy Eid', 'Ramadan is generous (greeting)', 'Ramadan is holy', 'Fasting is good'],
    correct: 1,
    note: '"RamaDaan kariim" (رمضان كريم) — said during Ramadan. The reply is "allah akram" (God is more generous). Both Muslims and many Lebanese Christians exchange this greeting — Lebanon\'s interfaith culture is unique.'
  },
  {
    q: 'How do you say "let\'s celebrate" in Lebanese Arabic?',
    opts: ['ta3ishuu', 'yalla na7tifil', 'feere kbiire', 'bkheer inshallah'],
    correct: 1,
    note: '"Yalla na7tifil" (يلا نحتفل) — yalla (let\'s go) + na7tifil (we celebrate). Lebanese love celebrating any occasion, big or small. "7afle" (party) and "feere" (joy) are heard at every gathering.'
  },
  {
    q: 'What does "3aza" (عزاء) refer to?',
    opts: ['A wedding celebration', 'A condolences gathering', 'An engagement party', 'A birthday party'],
    correct: 1,
    note: '"3aza" (عزاء) = condolences gathering held at the deceased\'s family home, usually for 3 days. Community members visit to pay respects. Not going to a neighbor\'s 3aza is considered a serious social misstep in Lebanon.'
  },
  {
    q: 'What does "miilaad majiid" mean?',
    opts: ['Happy Eid', 'Merry Christmas', 'Happy Birthday', 'New Year Greetings'],
    correct: 1,
    note: '"Miilaad majiid" (ميلاد مجيد) = Merry Christmas (lit. "glorious birth"). Lebanon is one of the few Arab countries with Christmas as a national holiday. Christians make up ~40% of the population, and celebrations are shared across communities.'
  },
];

const OCC_TIPS = [
  {
    title: 'Lebanese Weddings Are Epic',
    body: 'A Lebanese wedding ("3aras") typically involves: an engagement ("khiTbe") party months earlier, a bridal shower, the wedding ceremony, and a 3-day reception. Hundreds of guests, loud music, traditional dabke dancing, a zaffe (procession with drummers), and fireworks are standard. "Yalla 3aras!" (let\'s go to a wedding!) is a rallying cry. Expect to dance the dabke whether you know the steps or not.'
  },
  {
    title: 'Blessings for Every Occasion',
    body: 'Lebanese culture has specific blessings for every event. Key ones: "Mabrook" (congratulations), "bi l-3aafye" (get well/enjoy), "Allah yir7amu" (condolences), "3ala baalkun" (may it be your turn), "yislamu ideikun" (bless your hands), "kull 3aam w inta bkheir" (happy every year). Learning these formulas is essential — using the right blessing at the right moment shows deep cultural fluency.'
  },
  {
    title: 'Lebanese Christmas: A National Celebration',
    body: 'Lebanon is unique in the Arab world for having both Christmas and Eid as national holidays. Beirut decorates for Christmas in November. Christians say "miilaad majiid", Muslims often exchange greetings too. Similarly, "ramaDaan kariim" is exchanged by all communities. This interfaith holiday-sharing is a treasured part of Lebanese national identity — "3iishiin ma3 ba3D" (we live together).'
  },
  {
    title: 'Condolences Are Sacred',
    body: 'The "3aza" (condolence gathering) is one of the most important social obligations in Lebanon. Not attending when expected is a serious breach. You say "allah yir7amu/ha" (may God have mercy), sit quietly, accept coffee, and your presence is the message. The bereaved reply "ta3azzaina biikun" (we find comfort in you). Never arrive with gifts — just yourself. Duration: 15–30 minutes is respectful.'
  },
  {
    title: 'Holiday Greetings Cross Religious Lines',
    body: 'Lebanese use holiday greetings across religious boundaries: a Muslim might wish a Christian neighbor "miilaad saeed" (Happy Christmas), and a Christian might say "eid saeed" at Eid. "Kull 3aam w inta bkheir" (happy every year) is a universal seasonal greeting. This cultural flexibility is a point of pride in Lebanon. Sharing in each other\'s celebrations — "mniH7ifil ma3 ba3D" (we celebrate together) — is normal.'
  },
];

const OCC_ABOUT = 'Lebanese celebrations reflect the country\'s unique blend of religious communities, Mediterranean warmth, and deep family culture. From epic multi-day weddings to solemn condolence gatherings, knowing the right words for each occasion is essential to navigating Lebanese social life. Greetings, blessings, and expressions of solidarity are the glue of Lebanese community — getting them right shows you truly understand the culture.';
