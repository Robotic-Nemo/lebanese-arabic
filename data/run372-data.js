// Run #372 — Lebanese Holidays, Traditions & Seasonal Celebrations
// Categories: christian-holidays | islamic-holidays | national-days | seasonal | phrases

const HOL_WORDS = [
  // christian-holidays
  { ar: 'عيد الميلاد', tr: '3iid il-milaad', en: 'Christmas', cat: 'christian-holidays' },
  { ar: 'رأس السنة', tr: 'raas is-sine', en: 'New Year\'s Day / New Year\'s Eve', cat: 'christian-holidays' },
  { ar: 'عيد الفصح', tr: '3iid il-fas7', en: 'Easter', cat: 'christian-holidays' },
  { ar: 'الجمعة الحزينة', tr: 'il-jum3a il-7aziine', en: 'Good Friday', cat: 'christian-holidays' },
  { ar: 'عيد مار مارون', tr: '3iid maar maaroon', en: 'Feast of Saint Maron (Feb 9 — Maronite national saint)', cat: 'christian-holidays' },
  { ar: 'عيد الشعانين', tr: '3iid ish-sha3aaniin', en: 'Palm Sunday', cat: 'christian-holidays' },
  { ar: 'صوم', tr: 'Sowm', en: 'fasting / Lent', cat: 'christian-holidays' },
  { ar: 'ميلاد مجيد', tr: 'milaad majiid', en: 'Merry Christmas (greeting)', cat: 'christian-holidays' },
  // islamic-holidays
  { ar: 'عيد الفطر', tr: '3iid il-fiTr', en: 'Eid al-Fitr (end of Ramadan)', cat: 'islamic-holidays' },
  { ar: 'عيد الأضحى', tr: '3iid il-aD7a', en: 'Eid al-Adha (feast of sacrifice)', cat: 'islamic-holidays' },
  { ar: 'رمضان', tr: 'ramaDaan', en: 'Ramadan (holy month of fasting)', cat: 'islamic-holidays' },
  { ar: 'إفطار', tr: 'iftaar', en: 'iftar (breaking the fast at sunset)', cat: 'islamic-holidays' },
  { ar: 'سحور', tr: 'su7uur', en: 'suhoor (pre-dawn meal in Ramadan)', cat: 'islamic-holidays' },
  { ar: 'عيد مبارك', tr: '3iid mbaarak', en: 'blessed Eid / Happy Eid (greeting)', cat: 'islamic-holidays' },
  { ar: 'رمضان كريم', tr: 'ramaDaan kariim', en: 'generous Ramadan (common Ramadan greeting)', cat: 'islamic-holidays' },
  { ar: 'عاشوراء', tr: '3aashoora', en: 'Ashura (10th of Muharram, observed by Shia)', cat: 'islamic-holidays' },
  // national-days
  { ar: 'عيد الاستقلال', tr: '3iid il-isti2laal', en: 'Independence Day (Nov 22)', cat: 'national-days' },
  { ar: 'عيد المقاومة', tr: '3iid il-mu2aawame', en: 'Resistance Day / Liberation Day (May 25)', cat: 'national-days' },
  { ar: 'يوم العمال', tr: 'yoom il-3ummaal', en: 'Labor Day (May 1)', cat: 'national-days' },
  { ar: 'إحتفال', tr: 'i7tifaal', en: 'celebration / festivity', cat: 'national-days' },
  { ar: 'عرض عسكري', tr: '3arD 3askari', en: 'military parade', cat: 'national-days' },
  { ar: 'علم', tr: '3alam', en: 'flag', cat: 'national-days' },
  // seasonal
  { ar: 'شتوية', tr: 'shtawiyye', en: 'winter (seasonal/informal)', cat: 'seasonal' },
  { ar: 'صيفية', tr: 'Seifiyye', en: 'summer (seasonal/informal)', cat: 'seasonal' },
  { ar: 'موسم', tr: 'mawsem', en: 'season / festive season', cat: 'seasonal' },
  { ar: 'عروسة', tr: '3aruuse', en: 'bride / decorated Christmas tree (colloquial)', cat: 'seasonal' },
  { ar: 'زينة', tr: 'ziine', en: 'decorations / lights', cat: 'seasonal' },
  { ar: 'تهنئة', tr: 'tah2ni2e', en: 'congratulations / holiday greeting', cat: 'seasonal' },
  { ar: 'سنة جديدة', tr: 'sine jdiide', en: 'new year', cat: 'seasonal' },
  { ar: 'كل سنة وإنتو بخير', tr: 'kell sine w intu b-khair', en: 'wishing you well every year (holiday greeting)', cat: 'seasonal' },
  // phrases
  { ar: 'ميلاد مجيد وسنة جديدة سعيدة', tr: 'milaad majiid w sine jdiide sa3iide', en: 'Merry Christmas and Happy New Year', cat: 'phrases' },
  { ar: 'كل عام وأنتم بخير', tr: 'kell 3aam w antum b-khair', en: 'may you be well every year (generic holiday greeting)', cat: 'phrases' },
  { ar: 'عقبال عندك', tr: '3u2baal 3andak', en: 'may you celebrate it too / next time at your place', cat: 'phrases' },
  { ar: 'الله يديم الأفراح', tr: 'alla ydiim il-afraa7', en: 'may God keep the joy / may happiness last', cat: 'phrases' },
  { ar: 'بمناسبة العيد', tr: 'b-munaasabet il-3iid', en: 'on the occasion of the holiday', cat: 'phrases' },
  { ar: 'تقبّل الله طاعتك', tr: 'ti2abbal alla Taa3tak', en: 'may God accept your worship (Eid/Ramadan response)', cat: 'phrases' },
  { ar: 'صيام مقبول', tr: 'Siyaam ma2buul', en: 'may your fast be accepted (said during Ramadan)', cat: 'phrases' },
  { ar: 'من العايدين والفايزين', tr: 'min il-3aydiin wil-fayziin', en: 'may you be among those who celebrate and succeed (Eid greeting)', cat: 'phrases' },
  { ar: 'فطورنا عندك', tr: 'fTuurna 3andak', en: 'we\'ll break our fast at your place (Ramadan invitation)', cat: 'phrases' },
  { ar: 'مبروك العيد', tr: 'mabruuk il-3iid', en: 'congratulations on the holiday / Eid mubarak', cat: 'phrases' },
];

const HOL_DRILLS = [
  {
    q: 'How do you say "Merry Christmas" in Lebanese Arabic?',
    opts: ['3iid mbaarak', 'milaad majiid', 'kell 3aam b-khair', 'sine jdiide sa3iide'],
    correct: 1,
    note: '"milaad majiid" (ميلاد مجيد) — literally "glorious birth." The standard Christmas greeting in Lebanon. Christians and many Muslims exchange this.'
  },
  {
    q: 'What does "3iid il-fiTr" refer to?',
    opts: ['Easter', 'Eid al-Fitr (end of Ramadan)', 'Christmas', 'Independence Day'],
    correct: 1,
    note: '"3iid il-fiTr" (عيد الفطر) — the feast of breaking the fast. Celebrated at the end of Ramadan. In Lebanon, Christians often greet Muslim neighbors "3iid mbaarak" too.'
  },
  {
    q: 'What does "kell sine w intu b-khair" mean?',
    opts: ['happy new year only', 'may you be well every year (generic holiday greeting)', 'may God accept your worship', 'congratulations on the season'],
    correct: 1,
    note: '"kell sine w intu b-khair" (كل سنة وإنتو بخير) — the all-purpose Lebanese holiday greeting, used for Christmas, New Year, Eid, birthdays, and more.'
  },
  {
    q: 'What is "iftaar"?',
    opts: ['suhoor (pre-dawn meal)', 'fasting / abstaining', 'iftar (breaking fast at sunset)', 'Eid morning prayer'],
    correct: 2,
    note: '"iftaar" (إفطار) is the sunset meal breaking the Ramadan fast. Lebanese iftaar tables are legendary — massive spreads with family and guests.'
  },
  {
    q: 'When is Lebanese Independence Day ("3iid il-isti2laal")?',
    opts: ['May 25', 'November 22', 'February 9', 'August 15'],
    correct: 1,
    note: '"3iid il-isti2laal" is November 22 (1943). Features military parades in Beirut. Every Lebanese knows this date — it\'s when France recognized Lebanese independence.'
  },
  {
    q: 'What does "3u2baal 3andak" mean?',
    opts: ['may God keep the joy', 'may you celebrate it too / next time at your place', 'blessed Eid to you', 'wishing you health'],
    correct: 1,
    note: '"3u2baal 3andak" (عقبال عندك) — said in response to any celebration. Means "may the same happy occasion come to you." Used for weddings, babies, holidays.'
  },
  {
    q: 'What is "su7uur"?',
    opts: ['the iftar feast', 'pre-dawn meal in Ramadan', 'Eid morning prayer', 'the fast itself'],
    correct: 1,
    note: '"su7uur" (سحور) — the meal eaten before dawn in Ramadan. Lebanese families often wake at 3-4am to eat together before the fast begins at fajr.'
  },
  {
    q: 'What does "Siyaam ma2buul" mean?',
    opts: ['happy Eid al-Fitr', 'may your fast be accepted (Ramadan)', 'may God bless your home', 'generous Ramadan to you'],
    correct: 1,
    note: '"Siyaam ma2buul" (صيام مقبول) — said to someone who is fasting during Ramadan. Expresses hope that God accepts their worship. A warm, respectful greeting.'
  },
  {
    q: 'What is "3iid il-fas7"?',
    opts: ['Palm Sunday', 'Christmas', 'Easter', 'Good Friday'],
    correct: 2,
    note: '"3iid il-fas7" (عيد الفصح) — Easter. One of the most important holidays for Lebanese Christians. Lebanon has Easter Monday as a public holiday.'
  },
  {
    q: 'How do you invite someone to break fast at your home?',
    opts: ['tah2ni2a b-ramaDaan', 'fTuurna 3andak', '3iid mbaarak 3aleik', 'ramaDaan kariim'],
    correct: 1,
    note: '"fTuurna 3andak" (فطورنا عندك) — "our iftar is at your place!" A spontaneous Ramadan hospitality invite. Refusing is hard — Lebanese hospitality is fierce.'
  },
];

const HOL_TIPS = [
  'Lebanon is unique in celebrating BOTH Christian and Muslim holidays as national public holidays. Christmas, Easter, Eid al-Fitr, Eid al-Adha, and Ashura are all official days off. Lebanese of all faiths often greet each other across religious lines.',
  'Universal greeting rule: "kell 3aam w intu b-khair" (كل سنة وإنتو بخير) works for EVERY holiday. When in doubt, use it. The response is "w inta/inti b-khair" (and may you be well).',
  'Ramadan in Lebanon has a special atmosphere. Restaurants are packed before sunset for iftar, and the streets fill at night. Non-Muslims are welcomed at iftar tables. The phrase "ramaDaan kariim" (Generous Ramadan) is widely used.',
  'For Eid responses: when someone says "3iid mbaarak", respond "3iid mbaarak w ana kaman" (blessed Eid to you too) or simply "3alaik" (upon you too). "Taqabbal alla Taa3tak" means "may God accept your worship" — a respectful religious response.',
  'Independence Day (3iid il-isti2laal) on November 22 is important but subdued given Lebanon\'s political situation. More celebratory is the Resistance Day (3iid il-mu2aawame) on May 25, though this is more politically divided in how it\'s observed.',
];

const HOL_ABOUT = 'Lebanon\'s holiday calendar is one of the most diverse in the world, reflecting its unique multi-confessional society. The Lebanese state officially recognizes Christian holidays (Christmas, Easter, Assumption), Islamic holidays (both Eids, Ashura, Mawlid), and national days. This creates a remarkable culture where neighbors of different faiths exchange greetings and often share celebrations. The phrase "kell 3aam w intu b-khair" crosses all religious boundaries. Understanding Lebanese holiday vocabulary helps you navigate the social calendar, show respect across communities, and participate authentically in Lebanon\'s rich tradition of communal celebration.';
