// Run #18 data — Religious/Cultural Phrases, Months/Holidays, Emotions
// Prefixes: rc-, mh-, ev-

// ============ RELIGIOUS / CULTURAL PHRASES ============
// Universally used by Muslims, Christians, secular Lebanese alike — they are cultural staples
const RELIGIOUS_PHRASES = [
  {
    ar: 'إن شاء الله',
    tr: 'inshallah',
    en: 'God willing / hopefully',
    use: 'Said when discussing the future. Polite hedge — softens promises and plans. Universal.',
    examples: ['bukra inshallah = tomorrow, God willing','inshallah kheir = hopefully good']
  },
  {
    ar: 'ما شاء الله',
    tr: 'mashallah',
    en: 'what God has willed (= wow / impressive)',
    use: 'Praise that wards off the evil eye. Said when admiring a child, beauty, achievement, or anything good.',
    examples: ['mashallah 3aleiki = wow on you','el walad mashallah kbir = the kid, mashallah, has grown']
  },
  {
    ar: 'الحمد لله',
    tr: 'el 7amdellah',
    en: 'praise be to God',
    use: 'Reply to "kifak?" (= I\'m well). Said after meals, after recovery, after good news. Default positive marker.',
    examples: ['kifak? — el 7amdellah = how are you? — fine','akalt el 7amdellah = I\'ve eaten, thank God']
  },
  {
    ar: 'والله',
    tr: 'wallah',
    en: 'I swear / really / by God',
    use: 'Emphasis or surprise. Like "honestly!" or "for real?". Casual, used by all.',
    examples: ['wallah ma ba3ref = I really don\'t know','wallah?! = really?!']
  },
  {
    ar: 'يا الله',
    tr: 'yalla',
    en: 'come on / let\'s go',
    use: 'From "ya allah" — universal urge/imperative. Used to start, hurry, or wrap up.',
    examples: ['yalla bina = let\'s go','yalla bye = bye']
  },
  {
    ar: 'الله يبارك',
    tr: 'allah ybarek',
    en: 'God bless',
    use: 'Said back when someone congratulates you, or to bless an event/object/person.',
    examples: ['mabrouk! — allah ybarek fik = congrats! — God bless you','allah ybarek bil 7ayet = bless this life']
  },
  {
    ar: 'الله يرحمو',
    tr: 'allah yer7amo / yer7amha',
    en: 'God have mercy on him/her',
    use: 'Said immediately after mentioning a deceased person\'s name. Both Muslims and Christians use this.',
    examples: ['jeddi allah yer7amo = my late grandfather','setti allah yer7amha = my late grandmother']
  },
  {
    ar: 'الله معك',
    tr: 'allah ma3ak',
    en: 'God be with you',
    use: 'Farewell or encouragement. Said before a journey, exam, or hard task.',
    examples: ['allah ma3ak bil sefar = God with you on the trip','rou7 allah ma3ak = go, God with you']
  },
  {
    ar: 'الله يخليلك',
    tr: 'allah ykhallilak',
    en: 'may God preserve [him/her] for you',
    use: 'Said about a loved one, child, or spouse. Wishes their continued life as your blessing.',
    examples: ['allah ykhallilak ibnak = God preserve your son','allah ykhallilik 3ayltik = God keep your family']
  },
  {
    ar: 'بسم الله',
    tr: 'bism allah',
    en: 'in the name of God',
    use: 'Said before starting anything: a meal, a journey, work, or anything risky. Brief blessing.',
    examples: ['bism allah, bada\' nokol = in God\'s name, let\'s start eating','bism allah el ra7man = in the name of God the merciful']
  },
  {
    ar: 'لا حول ولا قوة إلا بالله',
    tr: 'la 7awla wa la quwwata illa billah',
    en: 'no power except through God',
    use: 'Said in frustration or shock. Like "good grief" or "for crying out loud" — venting.',
    examples: ['ma 3am yefham — la 7awla = he doesn\'t understand — for goodness sake','la 7awla shu hal jaw! = good grief, what weather!']
  },
  {
    ar: 'يعطيك العافية',
    tr: 'ya3tik el 3afye',
    en: 'may [God] give you strength',
    use: 'Said to someone working — clerks, drivers, anyone exerting effort. The standard appreciation.',
    examples: ['ya3tik el 3afye 3al shoghol = god give you strength for your work','reply: allah ya3afik = god strengthen you back']
  },
  {
    ar: 'صحتين',
    tr: 'sa7tein',
    en: 'two healths (= bless your meal)',
    use: 'Said when someone is eating or has finished. Reply: 3a 2albak = "to your heart".',
    examples: ['kelt? sa7tein = you ate? blessings','sa7tein wa 3afye = bless and strengthen']
  },
  {
    ar: 'ربنا يوفقك',
    tr: 'rabbna ywaffi2ak',
    en: 'may our Lord grant you success',
    use: 'Said to encourage, before exam, interview, big endeavor. Warmer than "good luck".',
    examples: ['ra7 yiji bil imti7an? rabbna ywaffi2ak = exam coming? God grant you success']
  },
  {
    ar: 'الحمد لله عالسلامة',
    tr: 'el 7amdellah 3al salame',
    en: 'praise God for [your] safety',
    use: 'Said when someone returns from a trip, recovers from illness, or escapes danger.',
    examples: ['rja3et men el sefar — el 7amdellah 3al salame = back from trip — welcome home safe']
  }
];

// Drill: given situation, pick the right phrase
const RC_DRILL = [
  { sit: 'Someone tells you they\'re going on a trip', opts: ['inshallah','allah ma3ak','mashallah','sa7tein'], correct: 1, why: 'allah ma3ak = god with you, said for journeys' },
  { sit: 'You see a beautiful baby', opts: ['mashallah','el 7amdellah','wallah','bism allah'], correct: 0, why: 'mashallah praises and wards evil eye' },
  { sit: 'Someone asks "kifak?"', opts: ['yalla','el 7amdellah','allah ybarek','sa7tein'], correct: 1, why: 'el 7amdellah is the standard "I\'m well" reply' },
  { sit: 'Friend says they\'ll meet you tomorrow', opts: ['mashallah','el 7amdellah','inshallah','allah yer7amo'], correct: 2, why: 'inshallah hedges any future plan' },
  { sit: 'Mentioning your late grandfather', opts: ['allah ma3ak','allah yer7amo','mashallah','sa7tein'], correct: 1, why: 'allah yer7amo follows mention of deceased' },
  { sit: 'Starting to eat dinner', opts: ['bism allah','yalla','wallah','allah ybarek'], correct: 0, why: 'bism allah opens any new action' },
  { sit: 'Someone returns from a long trip', opts: ['inshallah','el 7amdellah 3al salame','sa7tein','mashallah'], correct: 1, why: 'standard welcome-back-safe phrase' },
  { sit: 'Friend just got engaged — they say it', opts: ['mashallah! mabrouk! w 3o2belak inshallah','allah ma3ak','sa7tein','la 7awla'], correct: 0, why: 'mabrouk + mashallah is the engagement combo' }
];

// ============ MONTHS & HOLIDAYS ============
const MONTHS = [
  { num: 1,  ar: 'كانون التاني', tr: 'kenoun el teni', en: 'January',  alt: 'yanayer (MSA)' },
  { num: 2,  ar: 'شباط',         tr: 'shbat',          en: 'February', alt: 'febrayer' },
  { num: 3,  ar: 'آذار',         tr: 'azar',           en: 'March',    alt: 'mares' },
  { num: 4,  ar: 'نيسان',        tr: 'nisan',          en: 'April',    alt: 'abril' },
  { num: 5,  ar: 'أيار',         tr: 'ayyar',          en: 'May',      alt: 'mayyo' },
  { num: 6,  ar: 'حزيران',       tr: '7uzayran',       en: 'June',     alt: 'younyo' },
  { num: 7,  ar: 'تموز',         tr: 'tammouz',        en: 'July',     alt: 'youlyo' },
  { num: 8,  ar: 'آب',           tr: 'ab',             en: 'August',   alt: 'aghostos' },
  { num: 9,  ar: 'أيلول',        tr: 'aylul',          en: 'September',alt: 'septemb' },
  { num: 10, ar: 'تشرين الأول',  tr: 'tishrin el awwal', en: 'October',alt: 'oktob' },
  { num: 11, ar: 'تشرين التاني', tr: 'tishrin el teni',  en: 'November',alt: 'nofemb' },
  { num: 12, ar: 'كانون الأول',  tr: 'kenoun el awwal',  en: 'December',alt: 'disemb' }
];

const HOLIDAYS = [
  {
    ar: 'عيد الميلاد',
    tr: '3id el milad',
    en: 'Christmas',
    when: 'Dec 25 (and Jan 7 for Armenian/Eastern Orthodox)',
    greet: 'milad majid / merry christmas',
    reply: 'wenta b alf kheir = and may you have a thousand goods'
  },
  {
    ar: 'رأس السنة',
    tr: 'ras el sene',
    en: 'New Year',
    when: 'Jan 1',
    greet: 'kel sene wenta salem / kel 3am wenta b kheir',
    reply: 'wenti salme / wenta b alf kheir'
  },
  {
    ar: 'عيد الفصح',
    tr: '3id el fes7',
    en: 'Easter',
    when: 'spring (varies by calendar)',
    greet: 'el masi7 2am! 7a2an 2am',
    reply: '7a2an 2am! = truly he is risen!'
  },
  {
    ar: 'عيد الفطر',
    tr: '3id el fitr',
    en: 'Eid al-Fitr (end of Ramadan)',
    when: 'after Ramadan',
    greet: '3id mubarak / kel sene wenta salem',
    reply: 'wenta salem / mubarak 3aleik'
  },
  {
    ar: 'عيد الأضحى',
    tr: '3id el ad7a',
    en: 'Eid al-Adha (sacrifice)',
    when: 'pilgrimage time',
    greet: '3id mubarak',
    reply: 'allah yqabbal'
  },
  {
    ar: 'رمضان',
    tr: 'ramadan',
    en: 'Ramadan (fasting month)',
    when: '9th Islamic month',
    greet: 'ramadan kareem',
    reply: 'allah akram'
  },
  {
    ar: 'عيد الإستقلال',
    tr: '3id el iste2lel',
    en: 'Independence Day',
    when: 'November 22',
    greet: '3id istiqlel sa3id',
    reply: 'allah y7afez Lebnan'
  },
  {
    ar: 'عيد الأم',
    tr: '3id el imm',
    en: "Mother's Day",
    when: 'March 21',
    greet: '3id imm sa3id',
    reply: 'allah ykhallilik wledik'
  },
  {
    ar: 'عيد الحب',
    tr: '3id el 7obb',
    en: "Valentine's Day",
    when: 'February 14',
    greet: '3id 7obb sa3id',
    reply: 'we la 2albak'
  },
  {
    ar: 'عيد ميلاد',
    tr: '3id milad',
    en: 'Birthday',
    when: 'individual',
    greet: 'kel sene wenta salem / 3id milad sa3id',
    reply: 'wenta salem / merci'
  }
];

const MH_DRILL = [
  { en: 'January', tr: 'kenoun el teni' },
  { en: 'March', tr: 'azar' },
  { en: 'May', tr: 'ayyar' },
  { en: 'July', tr: 'tammouz' },
  { en: 'October', tr: 'tishrin el awwal' },
  { en: 'December', tr: 'kenoun el awwal' },
  { en: 'February', tr: 'shbat' },
  { en: 'April', tr: 'nisan' },
  { en: 'June', tr: '7uzayran' },
  { en: 'September', tr: 'aylul' }
];

// ============ EMOTIONS ============
const EMOTIONS = [
  // happy spectrum
  { ar: 'مبسوط', tr: 'mabsout', en: 'happy', cat: 'positive', intensity: 3 },
  { ar: 'فرحان', tr: 'far7an', en: 'joyful', cat: 'positive', intensity: 4 },
  { ar: 'مرتاح', tr: 'merta7', en: 'relaxed', cat: 'positive', intensity: 2 },
  { ar: 'متحمّس', tr: 'met7ammes', en: 'excited', cat: 'positive', intensity: 4 },
  { ar: 'مكيّف', tr: 'mkayyaf', en: 'enjoying / vibing', cat: 'positive', intensity: 3 },
  { ar: 'فخور', tr: 'fakhoor', en: 'proud', cat: 'positive', intensity: 3 },
  { ar: 'ممتنّ', tr: 'momtann', en: 'grateful', cat: 'positive', intensity: 3 },
  // sad spectrum
  { ar: 'حزين', tr: '7azin', en: 'sad', cat: 'negative', intensity: 3 },
  { ar: 'مكتئب', tr: 'moktaib', en: 'depressed', cat: 'negative', intensity: 5 },
  { ar: 'زعلان', tr: 'za3len', en: 'upset / hurt', cat: 'negative', intensity: 3 },
  { ar: 'ملول', tr: 'malloul', en: 'bored', cat: 'negative', intensity: 2 },
  { ar: 'تعبان', tr: 'ta3ben', en: 'tired', cat: 'negative', intensity: 2 },
  { ar: 'منهك', tr: 'monhak', en: 'exhausted', cat: 'negative', intensity: 4 },
  // anger
  { ar: 'غضبان', tr: 'ghadben', en: 'angry', cat: 'negative', intensity: 3 },
  { ar: 'متنرفز', tr: 'metnarvez', en: 'stressed / on edge', cat: 'negative', intensity: 4 },
  { ar: 'مقهور', tr: 'ma2hour', en: 'devastated / wronged', cat: 'negative', intensity: 5 },
  { ar: 'مستفز', tr: 'mostafez', en: 'provoked / annoyed', cat: 'negative', intensity: 3 },
  // fear/worry
  { ar: 'خايف', tr: 'khayef', en: 'afraid', cat: 'negative', intensity: 3 },
  { ar: 'قلقان', tr: '2al2an', en: 'worried', cat: 'negative', intensity: 3 },
  { ar: 'مذعور', tr: 'maz3our', en: 'terrified', cat: 'negative', intensity: 5 },
  // surprise/love
  { ar: 'مصدوم', tr: 'masdoum', en: 'shocked', cat: 'mixed', intensity: 4 },
  { ar: 'مغرم', tr: 'moghram', en: 'in love', cat: 'positive', intensity: 4 },
  { ar: 'محتار', tr: 'mo7tar', en: 'confused', cat: 'mixed', intensity: 3 },
  { ar: 'مرتبك', tr: 'mortabek', en: 'flustered', cat: 'mixed', intensity: 3 }
];

const EMOTION_IDIOMS = [
  { ar: 'قلبي بقلبك', tr: '2albi b 2albak', en: "my heart in your heart (deep empathy)", feel: 'connection' },
  { ar: 'دق قلبي', tr: 'da2 2albi', en: 'my heart pounded (got scared/excited)', feel: 'fear/love' },
  { ar: 'إنفطر قلبي', tr: 'enfatar 2albi', en: 'my heart broke', feel: 'grief' },
  { ar: 'طارت روحي', tr: 'tarit ro7i', en: 'my soul flew (terrified)', feel: 'fear' },
  { ar: 'بطلع روحي', tr: 'btetla3 ro7i', en: 'my soul exits (frustrated)', feel: 'frustration' },
  { ar: 'دمي حامي', tr: 'dammi 7emi', en: 'my blood is hot (angry)', feel: 'anger' },
  { ar: 'منيح كعيد', tr: 'mni7 ka3id', en: 'good as a holiday (great)', feel: 'joy' },
  { ar: 'بكيت من الضحك', tr: 'bkit men el da7ek', en: 'I cried from laughing', feel: 'joy' },
  { ar: 'متل العصفور', tr: 'metl el 3osfour', en: 'like a bird (light/free)', feel: 'joy' },
  { ar: 'صدري ضاق', tr: 'sadri da2', en: 'my chest tightened (anxious)', feel: 'anxiety' }
];

const EV_DRILL = [
  { en: 'happy', tr: 'mabsout' },
  { en: 'sad', tr: '7azin' },
  { en: 'angry', tr: 'ghadben' },
  { en: 'tired', tr: 'ta3ben' },
  { en: 'worried', tr: '2al2an' },
  { en: 'in love', tr: 'moghram' },
  { en: 'shocked', tr: 'masdoum' },
  { en: 'bored', tr: 'malloul' },
  { en: 'exhausted', tr: 'monhak' },
  { en: 'confused', tr: 'mo7tar' }
];
