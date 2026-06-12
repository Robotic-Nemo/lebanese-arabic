// R1197 — NEW FEATURE: Lebanese New Year Traditions (nyr)

const NYR_WORDS = [
  { ar: 'رأس السنة', tr: 'ras el-sene', en: 'New Year\'s Day / New Year' },
  { ar: 'ليلة رأس السنة', tr: 'leylat ras el-sene', en: 'New Year\'s Eve' },
  { ar: 'سنة جديدة', tr: 'sene jdide', en: 'new year' },
  { ar: 'كل عام وأنتم بخير', tr: 'kill 3am w ento bkheyr', en: 'Happy New Year (lit. may every year find you well)' },
  { ar: 'عقبال', tr: '3oubel', en: 'same to you / may you also (response to wishes)' },
  { ar: 'سنة حلوة', tr: 'sene 7elwe', en: 'wishing you a sweet / good year' },
  { ar: 'تمنيات', tr: 'tmaniyyat', en: 'wishes / New Year\'s wishes' },
  { ar: 'قرارات', tr: '2ararat', en: 'resolutions / New Year\'s resolutions' },
  { ar: 'شعبية', tr: 'sha3biyye', en: 'fireworks' },
  { ar: 'مفرقعات', tr: 'mfar2a3at', en: 'firecrackers / noisemakers' },
  { ar: 'نخب', tr: 'nkhab', en: 'toast / cheers (raising a glass)' },
  { ar: 'بالصحة', tr: 'bi-se77a', en: 'to your health (toast response)' },
  { ar: 'ساعة اثنعش', tr: 'sa3et tnash', en: 'midnight / the stroke of 12' },
  { ar: 'العد التنازلي', tr: 'el-3add el-tanazoli', en: 'the countdown' },
  { ar: 'حفلة', tr: '7afle', en: 'party / celebration gathering' },
  { ar: 'عزيمة', tr: '3azime', en: 'dinner party / home gathering invitation' },
  { ar: 'فيروز', tr: 'Fayruz', en: 'Fairouz (listening to her on Jan 1 morning is a Lebanese tradition)' },
  { ar: 'صحيان', tr: 'sa7yan', en: 'good morning (New Year\'s morning greeting)' },
  { ar: 'موسم الأعياد', tr: 'mawsem el-a3yad', en: 'holiday season' },
  { ar: 'أهلاً بالسنة الجديدة', tr: 'ahla bi-l-sene el-jdide', en: 'welcome to the new year' },
];

const NYR_DRILLS = [
  { q: '"Ras el-sene" means:', opts: ['New Year\'s Day', 'New Year\'s Eve party', 'Holiday season', 'The countdown'], ans: 0 },
  { q: '"Kill 3am w ento bkheyr" is:', opts: ['Happy New Year (lit. may every year find you well)', 'Wishing you a sweet year', 'Welcome to the new year', 'To your health'], ans: 0 },
  { q: '"3oubel" is used to:', opts: ['Return New Year\'s wishes ("same to you")', 'Start a toast', 'Wish someone a good morning', 'Welcome the new year'], ans: 0 },
  { q: '"Sha3biyye" means:', opts: ['Fireworks', 'Firecrackers / noisemakers', 'Countdown', 'Party'], ans: 0 },
  { q: '"Nkhab" means:', opts: ['Toast / cheers (raising a glass)', 'To your health', 'Welcome', 'Happy New Year'], ans: 0 },
  { q: '"Sa3et tnash" refers to:', opts: ['Midnight / the stroke of 12', 'The New Year\'s party', 'The countdown on TV', 'New Year\'s morning'], ans: 0 },
  { q: 'The Lebanese tradition on Jan 1 morning is to listen to:', opts: ['Fairouz (Fayruz)', 'The national anthem', 'Zajal poetry', 'Church bells'], ans: 0 },
  { q: '"2ararat" in a New Year\'s context means:', opts: ['Resolutions', 'Invitations', 'Wishes', 'Celebrations'], ans: 0 },
];

const NYR_TIPS = [
  {
    title: 'New Year\'s Eve in Lebanon',
    body: "Lebanese New Year's Eve (leylat ras el-sene) is one of the biggest social nights of the year. Beirut erupts with fireworks (sha3biyye) and firecrackers (mfar2a3at) at midnight — often spontaneous, often illegal, always loud. Families and friends gather for 3azime (dinner parties) or head to hotels and clubs. The countdown (el-3add el-tanazoli) is usually watched on TV. Traffic (el-2aj2a) becomes legendary after midnight.",
  },
  {
    title: 'Greetings & Toasts',
    body: "The classic greeting is \"kill 3am w ento bkheyr\" — literally \"may every year find you well.\" The response is \"w enta/enti bkheyr\" or simply \"3oubel\" (same to you / may you also). At midnight, glasses are raised with \"nkhab\" (cheers) and \"bi-se77a\" (to your health). Friends and family exchange \"sene 7elwe\" (sweet year) wishes. WhatsApp groups flood with voice notes and videos at exactly 12:00.",
  },
  {
    title: 'The Fairouz Morning Tradition',
    body: "Perhaps the most beloved Lebanese New Year tradition: on January 1st morning, Fairouz (فيروز) plays on every radio, TV channel, and in every home. Her songs about Lebanon, love, and morning are inseparable from the new year. Lebanese across the diaspora — in Brazil, Australia, the Gulf — stream her music at dawn. Starting your year without Fairouz is like skipping breakfast. It's a near-sacred cultural ritual.",
  },
  {
    title: 'Resolutions & Superstitions',
    body: "Lebanese make 2ararat (resolutions) like anyone, but with local flavor: quit smoking nargileh, stop complaining about the electricity, leave the country or stay. Superstitions: don't take out the trash on Jan 1 (bad luck), wear red underwear for luck, and eat lentils for money. In mountain villages, some fire guns at midnight — a tradition that has caused real injuries. The phrase \"bukra a7san\" (tomorrow will be better) takes on special weight on January 1st.",
  },
];
