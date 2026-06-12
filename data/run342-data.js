// Run #342 — Lebanese Religion & Spirituality Coach (rsp)
// 40 words across 5 categories: blessings / prayers / gratitude / occasions / interfaith
// 10 MCQ drills, 5 tips, about text

const RSP_WORDS = [
  // blessings & protection
  { tr: 'inshalla', ar: 'إن شاء الله', en: 'God willing / hopefully (universal)', cat: 'blessings' },
  { tr: 'mashallah', ar: 'ما شاء الله', en: 'what God wills — expressing admiration / protection from evil eye', cat: 'blessings' },
  { tr: 'bismillah', ar: 'بسم الله', en: 'in the name of God — said before any action', cat: 'blessings' },
  { tr: 'il-7amdilla', ar: 'الحمد لله', en: 'praise be to God — expressing gratitude / contentment', cat: 'blessings' },
  { tr: 'allahu akbar', ar: 'الله أكبر', en: 'God is great — awe, surprise, praise', cat: 'blessings' },
  { tr: 'la 7awla wala 2uwwata', ar: 'لا حول ولا قوة', en: 'no power except God — said in difficulty or shock', cat: 'blessings' },
  { tr: 'ya 2ilahi', ar: 'يا إلهي', en: 'oh my God / dear God (emotional exclamation)', cat: 'blessings' },
  { tr: 'ta3awwaz', ar: 'تعوذ', en: 'seek refuge in God (said when something bad is mentioned)', cat: 'blessings' },
  // prayers & worship
  { tr: 'Salat', ar: 'صلاة', en: 'prayer / Muslim daily prayer', cat: 'prayers' },
  { tr: 'kniise', ar: 'كنيسة', en: 'church', cat: 'prayers' },
  { tr: 'masjid', ar: 'مسجد', en: 'mosque', cat: 'prayers' },
  { tr: 'Sawm', ar: 'صوم', en: 'fasting (Islamic Ramadan / Christian Lent)', cat: 'prayers' },
  { tr: '3iid', ar: 'عيد', en: 'religious holiday / feast day', cat: 'prayers' },
  { tr: 'msalli', ar: 'مصلي', en: 'praying person / one who prays', cat: 'prayers' },
  { tr: 'barkaat', ar: 'بركات', en: 'blessings (plural)', cat: 'prayers' },
  { tr: '2ikliirusiiye', ar: 'إكليروسية', en: 'clergy / clerical (formal)', cat: 'prayers' },
  // gratitude & acceptance
  { tr: 'shukran', ar: 'شكراً', en: 'thank you', cat: 'gratitude' },
  { tr: 'alla yisallmak', ar: 'الله يسلمك', en: 'may God keep you safe — response to thank you', cat: 'gratitude' },
  { tr: 'alla y3tiik il-3aafye', ar: 'الله يعطيك العافية', en: 'may God give you health — said to someone working', cat: 'gratitude' },
  { tr: 'alla yibaarik', ar: 'الله يبارك', en: 'may God bless — general blessing', cat: 'gratitude' },
  { tr: 'yisalmuu ideik', ar: 'يسلمو إيديك', en: 'may God preserve your hands — said for a gift or meal', cat: 'gratitude' },
  { tr: 'alla yiHmiik', ar: 'الله يحميك', en: 'may God protect you', cat: 'gratitude' },
  { tr: 'alla ma3ak', ar: 'الله معك', en: 'God be with you — farewell blessing', cat: 'gratitude' },
  { tr: 'yen3am 3aleik', ar: 'ينعم عليك', en: 'blessings on you — informal thank you / appreciation', cat: 'gratitude' },
  // occasions & condolences
  { tr: '3aza', ar: 'عزاء', en: 'condolences / mourning visit', cat: 'occasions' },
  { tr: 'alla yirhamo', ar: 'الله يرحمه', en: 'may God have mercy on him — said when someone dies (m)', cat: 'occasions' },
  { tr: 'alla yirHamha', ar: 'الله يرحمها', en: 'may God have mercy on her (f)', cat: 'occasions' },
  { tr: 'il-ba2iyye bi 7ayaatkon', ar: 'الباقية بحياتكم', en: 'may the remaining years be yours — condolence response', cat: 'occasions' },
  { tr: '3iiD saciid', ar: 'عيد سعيد', en: 'happy holiday — Eid / Christmas / any feast', cat: 'occasions' },
  { tr: 'kull 3aam wanta bisalaam', ar: 'كل عام وأنت بسلام', en: 'every year may you be well — holiday greeting', cat: 'occasions' },
  { tr: 'miilaad saciid', ar: 'ميلاد سعيد', en: 'Merry Christmas (lit. happy birth)', cat: 'occasions' },
  { tr: 'ramaDaan kariim', ar: 'رمضان كريم', en: 'generous Ramadan — Ramadan greeting', cat: 'occasions' },
  // interfaith Lebanon
  { tr: 'masiHii', ar: 'مسيحي', en: 'Christian', cat: 'interfaith' },
  { tr: 'muslum', ar: 'مسلم', en: 'Muslim', cat: 'interfaith' },
  { tr: 'druzii', ar: 'درزي', en: 'Druze', cat: 'interfaith' },
  { tr: 'ta3aayush', ar: 'تعايش', en: 'coexistence — Lebanon\'s interfaith ideal', cat: 'interfaith' },
  { tr: '3alam mitta7id', ar: 'عالم متحد', en: 'united world / interfaith unity', cat: 'interfaith' },
  { tr: 'waTan', ar: 'وطن', en: 'homeland / fatherland', cat: 'interfaith' },
  { tr: 'muwaaTin', ar: 'مواطن', en: 'citizen', cat: 'interfaith' },
  { tr: 'saliim', ar: 'سليم', en: 'safe / sound / wholesome (both name and adjective)', cat: 'interfaith' },
];

const RSP_DRILLS = [
  {
    q: 'What does "inshalla" (إن شاء الله) mean and how is it really used in Lebanese?',
    opts: ['Only said by religious people', 'God willing — used universally by all Lebanese, means anything from "definitely" to "maybe never"', 'A rude dismissal', 'Only used in formal settings'],
    correct: 1,
    note: '"Inshalla" (إن شاء الله) = God willing. Used by Lebanese of all religions, and even non-religious Lebanese. Tone matters: enthusiastic "inshalla!" = yes, probably. Flat "inshalla..." = polite no. "Inshalla bikra" = hopefully tomorrow (might never happen). "Inshalla inshalla" = definitely not happening. One of the most used phrases in Lebanese Arabic — knowing its tones is essential.'
  },
  {
    q: 'What does "mashallah" (ما شاء الله) do in Lebanese culture?',
    opts: ['It\'s only a religious prayer', 'Expresses admiration and protects against the evil eye (3ein)', 'It means "goodbye"', 'Used only for death and tragedy'],
    correct: 1,
    note: '"Mashallah" (ما شاء الله) = what God has willed. Said when admiring something — a beautiful baby, a great achievement, good health — to protect against the evil eye (3ein). Failure to say mashallah when admiring something is considered risky. "Mashallah 3aleik" = how amazing you are. "Mashallah la yinaam" = so beautiful (lit. "mashallah, may it not be harmed").'
  },
  {
    q: 'What does "alla y3tiik il-3aafye" mean and when is it used?',
    opts: ['God give you money', 'May God give you health — said to someone who is working or has done something for you', 'A funeral blessing', 'Said at mealtimes only'],
    correct: 1,
    note: '"Alla y3tiik il-3aafye" (الله يعطيك العافية) = may God give you health/vigor. Said when you see someone working hard, after someone helps you, or passing a laborer. Reply: "alla ya3tiik il-3aafye" (same back) or "alla yisallmak" (may God keep you safe). One of the most common everyday blessings — expresses appreciation and care simultaneously.'
  },
  {
    q: 'What is "alla yirhamo" (الله يرحمه) and when do you say it?',
    opts: ['A birthday blessing', 'Said when someone who died is mentioned — may God have mercy on him', 'A wedding toast', 'Said when someone sneezes'],
    correct: 1,
    note: '"Alla yirhamo" (الله يرحمه) = may God have mercy on him. Said whenever a deceased person is mentioned, regardless of religion. "Alla yirHamha" for a woman. This is universal across Lebanese religious communities. The condolence visit itself is "3aza" (عزاء). Proper response to someone\'s loss: "il-ba2iyye bi 7ayaatkon" = may the remaining years be yours (to the living).'
  },
  {
    q: 'What is "la 7awla wala 2uwwata" used for?',
    opts: ['A morning greeting', 'Expressing shock, difficulty, or distress — no power except God', 'A dinner blessing', 'Said when entering a mosque'],
    correct: 1,
    note: '"La 7awla wala 2uwwata" (لا حول ولا قوة) = there is no power or strength except through God. Said when hearing bad news, in moments of stress, or when confronting something shocking or wrong. Shortened to just "la 7awla" in everyday speech. Like a verbal surrender to the situation combined with trust in God. Common across all Lebanese communities.'
  },
  {
    q: 'What makes Lebanon\'s religious culture unique for "3iiD saciid" (عيد سعيد)?',
    opts: ['Only Muslims celebrate Eid', 'Lebanese of all religions exchange holiday greetings across faiths — Christian and Muslim holidays are both national', 'Eid is celebrated only in private', 'The phrase is considered offensive to non-Muslims'],
    correct: 1,
    note: '"3iiD saciid" (عيد سعيد) = happy holiday. In Lebanon, both Eid al-Fitr and Christmas are official public holidays for everyone. Lebanese Christians congratulate Muslims on Eid; Lebanese Muslims congratulate Christians on Christmas. This cross-religious greeting exchange is a Lebanese cultural institution called "ta3aayush" (تعايش = coexistence). "Kull 3aam wanta bisalaam" = may every year find you in peace — the universal holiday wish.'
  },
  {
    q: 'What does "yisalmuu ideik" (يسلمو إيديك) mean?',
    opts: ['Wash your hands', 'May God preserve your hands — said in gratitude for food, a gift, or help', 'A warning about danger', 'A blessing for workers only'],
    correct: 1,
    note: '"Yisalmuu ideik" (يسلمو إيديك) = may your hands be safe — said to thank someone for cooking, giving a gift, or making something with their hands. The hands that made/gave the thing are the focus. "Yisalmuu 2ideiki" (to a woman). One of Lebanon\'s most warm and specific expressions of gratitude. Heard constantly after meals and gift-giving.'
  },
  {
    q: 'What is "ta3aayush" (تعايش) and why is it so important to Lebanese identity?',
    opts: ['A dish made of beans', 'Coexistence — Lebanon\'s ideal of different religions living peacefully together', 'A government policy only', 'A type of folk music'],
    correct: 1,
    note: '"Ta3aayush" (تعايش) = coexistence — the ideal that Lebanon\'s 18+ religious communities can live together. Lebanon has Sunni, Shia, Maronite, Greek Orthodox, Druze, Armenian, Alawi, and other communities. Ta3aayush is a core element of Lebanese national identity, celebrated in mixed neighborhoods and cross-faith friendships. "Lubnaaniyye ya3iishu bi ta3aayush" = Lebanese live in coexistence.'
  },
  {
    q: 'What does "bismillah" (بسم الله) signal when someone says it?',
    opts: ['They are ending a conversation', 'They are about to begin something — eating, driving, starting work — invoking God\'s blessing', 'A declaration of war', 'Only said in mosques'],
    correct: 1,
    note: '"Bismillah" (بسم الله) = in the name of God. Said before eating, before driving, before starting any important task. Heard constantly in Lebanese daily life — "bismillah, yalla nkol" = in God\'s name, let\'s eat. Used by Lebanese Muslims and many Lebanese Christians. Not considered exclusively religious — it\'s part of everyday Lebanese speech rhythm.'
  },
  {
    q: 'How do you respond when someone says "il-7amdilla" (الحمد لله)?',
    opts: ['Say nothing — it\'s a solo phrase', '"Wanta/winti salaam" — and you too are well / "alla yiHmiik" — may God protect you', '"Inshalla" always', '"Mashallah" always'],
    correct: 1,
    note: '"Il-7amdilla" (الحمد لله) = praise be to God / thank God. The standard answer to "how are you?" in Lebanese: "il-7amdilla, mnii7" = thank God, well. Reply: "wanta/winti salaam" (may you also be well) or "alla yiHmiik" (may God protect you) or simply reciprocate "il-7amdilla". This phrase covers everything from minor relief ("passed the test — il-7amdilla") to surviving something serious.'
  },
];

const RSP_TIPS = [
  {
    title: 'The Five Most Essential Lebanese Spiritual Phrases',
    body: '"Inshalla" (God willing), "mashallah" (admiration + evil eye protection), "il-7amdilla" (gratitude), "alla y3tiik il-3aafye" (blessing for workers), and "alla yirhamo/ha" (for the deceased) are non-negotiable for any Lebanese speaker. These appear dozens of times a day. Learning their tonal nuances — especially "inshalla" which ranges from enthusiastic yes to polite never — is as important as the words themselves.'
  },
  {
    title: 'Lebanon\'s 18 Religious Communities',
    body: 'Lebanon has 18 officially recognized religious communities: Maronite, Sunni, Shia, Greek Orthodox, Druze, Greek Catholic, Armenian Orthodox, Alawi, and others. Political power is distributed by confession (the political system is called "confessionalism" — Ta2ifiiye). Despite this, or because of it, Lebanese people across faiths share a huge amount of daily spiritual vocabulary. Saying "inshalla" and "il-7amdilla" and "mashallah" crosses all religious lines.'
  },
  {
    title: 'Giving Blessings: When and How',
    body: 'Lebanese blessing culture is rich: "alla y3tiik il-3aafye" (God give you health) to someone working, "yisalmuu ideik" (may your hands be safe) after receiving food/gifts, "alla yibaarik" (God bless) as a general blessing, "yen3am 3aleik" (blessings on you) as a warm informal thank-you. These aren\'t formulaic — Lebanese people cycle through them based on situation. Knowing which to use shows real cultural fluency and earns genuine warmth.'
  },
  {
    title: 'The Evil Eye (3ein) and Mashallah',
    body: 'The evil eye ("3ein" = عين) is taken seriously across Lebanese communities — Muslim, Christian, Druze. When admiring anything (a child, someone\'s success, good health), you say "mashallah" to protect them from the envy your attention might carry. Not saying it is considered careless or even ominous. Blue eye amulets (2udaad zar2aa) hang in homes and cars for the same reason. This is not considered superstition — it\'s part of cultural care and social grace.'
  },
  {
    title: 'Cross-Faith Holiday Exchange',
    body: 'Lebanon\'s unique interfaith culture means holiday greetings cross religious lines. On Eid: "3iiD saciid" or "3iiD mubaarik" (blessed Eid) — said by Christians to Muslims freely. On Christmas: "miilaad saciid" — said by Muslims to Christians. "Kull 3aam wanta bisalaam" (every year may you be well) is the universal multi-holiday wish. In Beirut\'s mixed neighborhoods, iftar tables are shared with Christian neighbors during Ramadan and Christmas trees stand beside Muslim homes. This is ta3aayush in practice.'
  },
];

const RSP_ABOUT = 'Lebanon\'s spiritual vocabulary is inseparable from its daily language — phrases like "inshalla", "mashallah", and "il-7amdilla" appear in every conversation regardless of the speaker\'s religion. With 18 official religious communities sharing a tiny country, Lebanon has developed a rich shared vocabulary of blessings, gratitude, and condolence that transcends sectarian boundaries. Understanding this spiritual language isn\'t just religious knowledge — it\'s the key to understanding Lebanese warmth, hospitality, grief, and joy.';
