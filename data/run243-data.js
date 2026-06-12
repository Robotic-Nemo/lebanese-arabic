// Run #243 — Lebanese Greetings & Social Phrases Coach (soc)
// Hellos, farewells, pleasantries, responses, blessings — 40 items, MCQ drill, 5 tips

const SOC_WORDS = [
  // greetings
  { tr: 'marhaba',        ar: 'مرحبا',         en: 'hello / hi',                    cat: 'greetings' },
  { tr: 'marhabten',      ar: 'مرحبتين',        en: 'hello back (reply to marhaba)', cat: 'greetings' },
  { tr: 'ahlan',          ar: 'أهلاً',          en: 'welcome / hello (warm)',        cat: 'greetings' },
  { tr: 'ahlan wa sahlan', ar: 'أهلاً وسهلاً',  en: 'welcome (formal/warm)',         cat: 'greetings' },
  { tr: 'saba7 el-kheir', ar: 'صباح الخير',     en: 'good morning',                  cat: 'greetings' },
  { tr: 'saba7 el-nuur',  ar: 'صباح النور',     en: 'good morning (reply)',          cat: 'greetings' },
  { tr: 'masa el-kheir',  ar: 'مسا الخير',      en: 'good evening',                  cat: 'greetings' },
  { tr: 'masa el-nuur',   ar: 'مسا النور',      en: 'good evening (reply)',          cat: 'greetings' },
  { tr: 'tSba7 3al-kheir', ar: 'تصبح على خير',  en: 'good night (to someone going)', cat: 'greetings' },
  { tr: 'w inta/inti min ahl el-kheir', ar: 'وأنت من أهل الخير', en: 'good night (reply)', cat: 'greetings' },
  // how are you
  { tr: 'kifak?',         ar: 'كيفك؟',          en: 'how are you? (m)',              cat: 'how-are-you' },
  { tr: 'kifik?',         ar: 'كيفك؟',          en: 'how are you? (f)',              cat: 'how-are-you' },
  { tr: 'mni7',           ar: 'منيح',            en: 'fine / good (reply)',           cat: 'how-are-you' },
  { tr: 'mni7a',          ar: 'منيحة',           en: 'fine / good (f reply)',         cat: 'how-are-you' },
  { tr: '3a2beelak',      ar: 'عقبالك',          en: 'same to you (m) / may you too', cat: 'how-are-you' },
  { tr: 'tamem',          ar: 'تمام',            en: 'all good / perfect',            cat: 'how-are-you' },
  { tr: 'shu akhbarak?',  ar: 'شو أخبارك؟',     en: 'what\'s your news? / how are things?', cat: 'how-are-you' },
  { tr: 'el-7amdilla',    ar: 'الحمدلله',        en: 'praise God / all is well',      cat: 'how-are-you' },
  // farewells
  { tr: 'yalla bye',      ar: 'يلا باي',         en: 'bye bye / see ya',              cat: 'farewells' },
  { tr: 'ma3 el-slaame',  ar: 'مع السلامة',      en: 'goodbye (go safely)',           cat: 'farewells' },
  { tr: 'alla ysallmak',  ar: 'الله يسلمك',      en: 'goodbye reply (God keep you)',  cat: 'farewells' },
  { tr: 'tshrafna',       ar: 'تشرفنا',          en: 'nice to meet you / honored',    cat: 'farewells' },
  { tr: 'la2eena',        ar: 'لاقينا',          en: 'see you around',                cat: 'farewells' },
  { tr: 'truu7 w tirja3 bissalaame', ar: 'تروح وتيرجع بسلامة', en: 'go and come back safely', cat: 'farewells' },
  // blessings & wishes
  { tr: 'mabrouk',        ar: 'مبروك',           en: 'congratulations',               cat: 'blessings' },
  { tr: 'alla ybaarak',   ar: 'الله يبارك',      en: 'God bless / thank you (reply)', cat: 'blessings' },
  { tr: 'in shalla',      ar: 'إن شالله',        en: 'God willing / hopefully',       cat: 'blessings' },
  { tr: 'ma shalla',      ar: 'ما شالله',        en: 'what God wills / wow (admiring)', cat: 'blessings' },
  { tr: 'yis3id sabaa7ak', ar: 'يسعد صباحك',    en: 'may your morning be happy',     cat: 'blessings' },
  { tr: 'alla ma3ak',     ar: 'الله معك',        en: 'God be with you',               cat: 'blessings' },
  // politeness & etiquette
  { tr: 'min faD-lak',    ar: 'من فضلك',         en: 'please (m)',                    cat: 'etiquette' },
  { tr: 'shukran',        ar: 'شكراً',           en: 'thank you',                     cat: 'etiquette' },
  { tr: '3afwan',         ar: 'عفواً',           en: 'you\'re welcome / excuse me',   cat: 'etiquette' },
  { tr: 'yislamu',        ar: 'يسلمو',           en: 'thank you / bless your hands',  cat: 'etiquette' },
  { tr: 'iza bte7ki',     ar: 'إذا بتحكي',       en: 'if you\'ll allow me / may I',   cat: 'etiquette' },
  { tr: 'ma3 el-izin',    ar: 'مع الإذن',        en: 'with your permission / excuse me', cat: 'etiquette' },
  { tr: 'sahtein',        ar: 'صحتين',           en: 'cheers / bon appétit (x2 health)', cat: 'etiquette' },
  { tr: '3a 2albak',      ar: 'عقلبك',           en: 'on your heart / you\'re welcome (warm)', cat: 'etiquette' },
  { tr: 'la heik w la heik', ar: 'لا هيك ولا هيك', en: 'neither this nor that / no way', cat: 'etiquette' },
  { tr: 'hay-da 2ismo',   ar: 'هيدا إسمو',       en: 'that\'s what it\'s called / that\'s it', cat: 'etiquette' },
];

const SOC_DRILLS = [
  {
    q: 'How do you reply to "marhaba" (hello)?',
    opts: ['ahlan', 'marhabten', 'saba7 el-kheir', 'yalla bye'],
    correct: 1,
    note: '"marhabten" = hello back (literally "two hellos" — doubling as courtesy). "ahlan" is also warm but "marhabten" is the direct pair reply to "marhaba".'
  },
  {
    q: 'What does "el-7amdilla" mean?',
    opts: ['good morning', 'God willing', 'praise God / all is well', 'God bless'],
    correct: 2,
    note: '"el-7amdilla" = praise God / alhamdulillah — the standard reply to "how are you?" regardless of actual state. "in shalla" = God willing; "alla ybaarak" = God bless.'
  },
  {
    q: 'How do you say "congratulations" in Lebanese Arabic?',
    opts: ['shukran', 'mabrouk', '3afwan', 'tshrafna'],
    correct: 1,
    note: '"mabrouk" = congratulations (lit: blessed); "shukran" = thank you; "3afwan" = you\'re welcome; "tshrafna" = honored to meet you.'
  },
  {
    q: 'What does "ma3 el-slaame" mean?',
    opts: ['see you around', 'good night', 'goodbye (go safely)', 'nice to meet you'],
    correct: 2,
    note: '"ma3 el-slaame" = goodbye/go safely; "la2eena" = see you around; "tSba7 3al-kheir" = good night; "tshrafna" = nice to meet you.'
  },
  {
    q: 'How do you say "God willing / hopefully" in Lebanese Arabic?',
    opts: ['ma shalla', 'alla ma3ak', 'in shalla', 'alla ybaarak'],
    correct: 2,
    note: '"in shalla" = God willing/hopefully; "ma shalla" = wow/admiring; "alla ma3ak" = God be with you; "alla ybaarak" = God bless.'
  },
  {
    q: 'What does "sahtein" mean?',
    opts: ['good evening', 'cheers / bon appétit', 'thank you', 'please'],
    correct: 1,
    note: '"sahtein" = cheers/bon appétit (lit: two healths); "masa el-kheir" = good evening; "shukran" = thank you; "min faD-lak" = please.'
  },
  {
    q: 'How do you reply to "ma3 el-slaame" (goodbye)?',
    opts: ['marhabten', 'tshrafna', 'alla ysallmak', 'saba7 el-nuur'],
    correct: 2,
    note: '"alla ysallmak" = God keep you (reply to goodbye); "marhabten" = hello reply; "tshrafna" = nice to meet you; "saba7 el-nuur" = good morning reply.'
  },
  {
    q: 'What does "ma shalla" mean?',
    opts: ['God willing', 'thank you', 'what God wills / wow', 'go safely'],
    correct: 2,
    note: '"ma shalla" = what God wills — used admiringly ("wow, mashalla!"); "in shalla" = God willing; "shukran" = thank you; "ma3 el-slaame" = go safely.'
  },
  {
    q: 'How do you say "you\'re welcome / excuse me" in Lebanese Arabic?',
    opts: ['shukran', 'min faD-lak', 'yislamu', '3afwan'],
    correct: 3,
    note: '"3afwan" = you\'re welcome / excuse me (dual use); "shukran" = thank you; "min faD-lak" = please; "yislamu" = bless your hands/thank you.'
  },
  {
    q: 'What does "shu akhbarak?" mean?',
    opts: ['how are you? (m)', 'good morning', 'what\'s your news? / how are things?', 'nice to meet you'],
    correct: 2,
    note: '"shu akhbarak?" = what\'s your news? — casual "how are things?"; "kifak?" = how are you? (direct); "saba7 el-kheir" = good morning; "tshrafna" = nice to meet you.'
  },
];

const SOC_TIPS = [
  { title: '"Marhaba" — the universal Lebanese hello', body: '"Marhaba" works at any time of day, formal or casual. The reply is "marhabten" (two hellos — a charming Lebanese habit of doubling the greeting). But Lebanese also use "ahlan" (warm, like "hey there"), "salaam" (casual, from "salaamu 3alaykum"), and "hala" (very casual, hey). In Beirut you\'ll also hear "bonjour" and "coucou" freely. Always reply to a greeting — ignoring one is rude.' },
  { title: '"Kifak?" reply patterns — don\'t just say mni7', body: 'Rich Lebanese "how are you" replies: "mni7, el-7amdilla" (fine, praise God — universal). "Tamem!" (all good, upbeat). "Zaki/zakiye" (great, lit: smart). "3al barakeh" (blessed). "Shu ba3refak?" (what can I say?). "Mish mni7 ktir" (not great, honest). "Bkheir w 3afye" (in health). Lebanese rarely say "tayeb" for this — that\'s more Levantine/Syrian. "El-7amdilla" is the safe default regardless of how you actually feel.' },
  { title: '"In shalla" — three meanings', body: '"In shalla" officially means "God willing" but Lebanese use it three ways: (1) Sincere: "in shalla btiji" = I hope you come. (2) Polite non-commitment: "in shalla" = maybe/we\'ll see (i.e., probably not). (3) Sarcastic: heavy "in shallaaa" = yeah right. Context and tone distinguish them. "Ma shalla" is different — pure admiration/appreciation, no "no" interpretation.' },
  { title: '"Yislamu" and "3a 2albak" — thanking warmly', body: '"Yislamu" (lit: may they be preserved) = thank you, especially for a kind act or gift. "Yislamu ideik" = bless your hands (after being served food or given something handmade). "3a 2albak" (lit: on your heart) = you\'re so kind, warm reply to thanks. "Alla ykhalliilik iyyaak" = may God keep it for you (reply to "yislamu"). These move beyond bare "shukran" into warm Lebanese expressiveness.' },
  { title: 'Morning and evening call-and-response', body: 'Lebanese greetings have mandatory responses. "Saba7 el-kheir" (good morning of goodness) → "saba7 el-nuur" (morning of light). "Masa el-kheir" → "masa el-nuur". "tSba7 3al-kheir" (good night) → "w inta/inti min ahl el-kheir" (and you are of goodness). These responses are automatic — saying just "shukran" to "saba7 el-kheir" sounds flat. Learn the pairs, not just the initiating phrase.' },
];

const SOC_ABOUT = 'Master Lebanese Arabic greetings and social phrases — hellos, farewells, how-are-you exchanges, blessings, and politeness expressions. Lebanese social interaction is rich with ritual phrases, paired call-and-response greetings, and religious expressions woven into daily speech. Essential for making a good impression and building rapport.';
