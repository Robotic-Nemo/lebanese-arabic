// Run #24 — Cars & Driving, Music & Songs, Weddings & Celebrations
// Prefixes: cr-, mu-, wd-

// ============ CARS & DRIVING ============
const CAR_VOCAB = [
  { tr: 'sayyara',     ar: 'سيارة',      en: 'car' },
  { tr: 'mufta7',      ar: 'مفتاح',      en: 'key' },
  { tr: 'maktab',      ar: 'مكتب',       en: 'office (rental)' },
  { tr: 'banzin',      ar: 'بنزين',      en: 'gasoline / petrol' },
  { tr: 'mazout',      ar: 'مازوت',      en: 'diesel' },
  { tr: 'tank',        ar: 'تنك',        en: 'tank (fuel)' },
  { tr: 'doulab',      ar: 'دولاب',      en: 'tire / wheel' },
  { tr: 'mou7arrek',   ar: 'محرك',       en: 'engine' },
  { tr: 'fraym',       ar: 'فريم',       en: 'brake' },
  { tr: 'gear',        ar: 'غيار',       en: 'gear' },
  { tr: 'volant',      ar: 'فولان',      en: 'steering wheel' },
  { tr: 'shemal',      ar: 'شمال',       en: 'left' },
  { tr: 'yamin',       ar: 'يمين',       en: 'right' },
  { tr: 'doghre',      ar: 'دغري',       en: 'straight ahead' },
  { tr: 'eshara',      ar: 'إشارة',      en: 'traffic light' },
  { tr: 'a7mar',       ar: 'أحمر',       en: 'red (light)' },
  { tr: 'akhDar',      ar: 'أخضر',       en: 'green (light)' },
  { tr: 'aSfar',       ar: 'أصفر',       en: 'yellow (light)' },
  { tr: 'parking',     ar: 'باركينغ',    en: 'parking' },
  { tr: 'maw2af',      ar: 'موقف',       en: 'parking spot / station' },
  { tr: 'baTaqa',      ar: 'بطاقة',      en: 'license / card' },
  { tr: 'rekhSe',      ar: 'رخصة',       en: 'license (driver)' },
  { tr: '7adis',       ar: 'حادث',       en: 'accident' },
  { tr: 'shorTa',      ar: 'شرطة',       en: 'police' },
  { tr: 'mukhalafe',   ar: 'مخالفة',     en: 'traffic ticket / fine' },
  { tr: 'sere3',       ar: 'سريع',       en: 'fast' },
  { tr: '3a mehlak',   ar: 'ع مهلك',     en: 'slow down (lit: at your pace)' },
  { tr: 'zhme',        ar: 'زحمة',       en: 'traffic jam' },
  { tr: 'TareeQ',      ar: 'طريق',       en: 'road' },
  { tr: 'auto-strad',  ar: 'أوتوستراد',  en: 'highway' }
];

const DRIVING_PHRASES = [
  { tr: 'biddi e2jor sayyara',         ar:'بدي إأجر سيارة',         en:'I want to rent a car' },
  { tr: 'bi 2adesh el yom?',           ar:'بقديش اليوم؟',            en:'how much per day?' },
  { tr: 'fi tameen?',                   ar:'في تأمين؟',               en:'is there insurance?' },
  { tr: 'fii il-mat3em fi parking?',   ar:'في باركينغ هون؟',         en:'is there parking here?' },
  { tr: 'wein a2rab maHaTTa?',         ar:'وين أقرب محطة؟',          en:'where is the nearest gas station?' },
  { tr: 'fawwel banzin',                ar:'فول بنزين',               en:'fill it up (gasoline)' },
  { tr: '20 dollar banzin',            ar:'٢٠ دولار بنزين',          en:'$20 of gas' },
  { tr: 'el sayyara kharbaneh',        ar:'السيارة خربانة',          en:'the car is broken down' },
  { tr: 'el battariyye fadyeh',        ar:'البطارية فاضية',          en:'the battery is dead' },
  { tr: 'el doulab manfoukh',           ar:'الدولاب منفوخ',           en:'the tire is flat' },
  { tr: 'biddi mekanik',               ar:'بدي ميكانيك',             en:'I need a mechanic' },
  { tr: 'lef yamin / shemal',          ar:'لف يمين / شمال',          en:'turn right / left' },
  { tr: 'rou7 doghre',                 ar:'روح دغري',                 en:'go straight' },
  { tr: 'wa2ef hon',                   ar:'وقّف هون',                en:'stop here' },
  { tr: 'el zhme ekteer',               ar:'الزحمة كتير',             en:'traffic is heavy' },
  { tr: 'el TareeQ ms-akkar',           ar:'الطريق مسكّر',            en:'the road is closed' },
  { tr: 'kayyef ennak ma 2akhadet mukhalafe?', ar:'كيف ما أخدت مخالفة؟', en:'how did you not get a ticket?' },
  { tr: 'sa2et bi 7azer',              ar:'سقت بحذر',                en:'drive carefully' }
];

const CR_DRILL = [
  { en: 'car',                opts: ['sayyara','sayyad','sa3a','soubai3'], correct: 0 },
  { en: 'gas / petrol',       opts: ['mazout','banzin','zet','may'], correct: 1 },
  { en: 'turn left',          opts: ['lef yamin','lef shemal','rou7 doghre','wa2ef'], correct: 1 },
  { en: 'red light',          opts: ['aSfar','akhDar','a7mar','azra2'], correct: 2 },
  { en: 'I want to rent a car',opts: ['biddi sayyara','biddi e2jor sayyara','biddi banzin','biddi parking'], correct: 1 },
  { en: 'fill it up',         opts: ['fawwel banzin','wa2ef hon','rou7 doghre','3a mehlak'], correct: 0 },
  { en: 'traffic jam',        opts: ['7adis','zhme','rekhSe','shorTa'], correct: 1 },
  { en: 'flat tire',          opts: ['el battariyye fadyeh','el doulab manfoukh','el mou7arrek kharban','el gear na2eS'], correct: 1 },
  { en: 'highway',            opts: ['TareeQ','auto-strad','maw2af','eshara'], correct: 1 },
  { en: 'driver license',     opts: ['rekhSe','huwiye','baTaqa','jawaz'], correct: 0 },
  { en: 'slow down',          opts: ['sere3','3a mehlak','doghre','wa2ef'], correct: 1 },
  { en: 'I need a mechanic',  opts: ['biddi banzin','biddi parking','biddi mekanik','biddi sayyara'], correct: 2 }
];

// ============ MUSIC & SONGS ============
const MUSIC_VOCAB = [
  { tr: 'mousiqa',     ar: 'موسيقى',     en: 'music' },
  { tr: 'oghniye',     ar: 'أغنية',      en: 'song' },
  { tr: 'mughanne',    ar: 'مغني',       en: 'singer (m)' },
  { tr: 'mughaniye',   ar: 'مغنية',      en: 'singer (f)' },
  { tr: 'firqa',       ar: 'فرقة',       en: 'band' },
  { tr: '7afle',       ar: 'حفلة',       en: 'concert / party' },
  { tr: 'lahne',       ar: 'لحن',        en: 'melody / tune' },
  { tr: 'kalimat',     ar: 'كلمات',      en: 'lyrics (lit: words)' },
  { tr: '2alat',       ar: 'آلات',       en: 'instruments' },
  { tr: 'sout',        ar: 'صوت',        en: 'voice' },
  { tr: 'ra2eS',       ar: 'رقص',        en: 'dance' },
  { tr: 'dabke',       ar: 'دبكة',       en: 'dabke (Levantine line dance)' },
  { tr: 'Tarab',       ar: 'طرب',        en: 'tarab (musical ecstasy)' },
  { tr: 'maqam',       ar: 'مقام',       en: 'maqam (modal scale)' },
  { tr: 'jaw',         ar: 'جو',         en: 'vibe / atmosphere' }
];

const INSTRUMENTS = [
  { tr: '3oud',        ar: 'عود',        en: 'oud (lute) — flagship Arabic instrument' },
  { tr: 'qanoun',      ar: 'قانون',      en: 'qanun (zither, plucked strings)' },
  { tr: 'nay',         ar: 'ناي',        en: 'ney (reed flute)' },
  { tr: 'darbouke',    ar: 'دربكة',      en: 'darbouka (goblet drum)' },
  { tr: 'tabl',        ar: 'طبل',        en: 'drum' },
  { tr: 'rabab',       ar: 'رباب',       en: 'rebab (bowed string)' },
  { tr: 'mizmar',      ar: 'مزمار',      en: 'mizmar (folk oboe)' },
  { tr: 'piano',       ar: 'بيانو',      en: 'piano' },
  { tr: 'gitar',       ar: 'غيتار',      en: 'guitar' },
  { tr: 'kamanja',     ar: 'كمنجة',      en: 'violin' }
];

const ARTISTS = [
  { name: 'Fairuz',          ar: 'فيروز',       era: '1950s-present', notes: 'The Lebanese diva. National icon. Morning radio = Fairuz.', famous: 'Habbeitak bi-l-Sayf, Bhebbak ya Lubnan, Aatini-l-Nay' },
  { name: 'Wadih el Safi',   ar: 'وديع الصافي', era: '1940s-2013',   notes: 'King of Lebanese mountain song. Master of mawwal.', famous: 'Allah ma3 ahbabna, Lubnan ya Akhdar Helou' },
  { name: 'Sabah',           ar: 'صباح',        era: '1940s-2014',   notes: 'Diva, actress, ~3000 songs. Larger-than-life persona.', famous: 'Yana yana, Akhadou el Reeh' },
  { name: 'Marcel Khalife',  ar: 'مارسيل خليفة',era: '1970s-present',notes: 'Oud master + protest songs. Set Mahmoud Darwish poems to music.', famous: 'Oummi (Mother), Rita w el Bunduqiyye' },
  { name: 'Najwa Karam',     ar: 'نجوى كرم',    era: '1990s-present',notes: 'Modern pop with strong jabal (mountain) sound.', famous: 'Hayda Haki, Maghroumeh' },
  { name: 'Nancy Ajram',     ar: 'نانسي عجرم',  era: '2000s-present',notes: 'Pop superstar across the Arab world.', famous: 'Akhasmak Ah, Ah w Noss' },
  { name: 'Ragheb Alama',    ar: 'راغب علامة', era: '1980s-present',notes: 'Classic Lebanese pop crooner.', famous: 'Nasini el Donia, Tab w Dab' },
  { name: 'Mashrou3 Leila',  ar: 'مشروع ليلى',  era: '2008-2022',    notes: 'Indie rock, queer themes, controversial — broke ground.', famous: 'Fasateen, Shim el Yasmine, Roman' }
];

const LYRIC_SAMPLES = [
  { song: 'Habbeitak bi-l-Sayf', artist: 'Fairuz',
    line: 'habbeitak bi-l-Sayf, habbeitak bi-l-shitwiyye',
    en: 'I loved you in summer, I loved you in winter',
    note: 'Iconic line — classic example of love-across-seasons trope' },
  { song: 'Aatini-l-Nay', artist: 'Fairuz / Khalil Gibran',
    line: 'aatini-l-nay w-ghanni, fa-l-ghina sirru-l-wujoud',
    en: 'Give me the ney and sing, for song is the secret of existence',
    note: 'Gibran poem set to music — high MSA, not Lebanese dialect' },
  { song: 'Bhebbak ya Lubnan', artist: 'Fairuz',
    line: 'bhebbak ya Lubnan, ya watan-i bhebbak',
    en: 'I love you Lebanon, my homeland I love you',
    note: 'Patriotic anthem' },
  { song: 'Hayda Haki', artist: 'Najwa Karam',
    line: 'hayda haki, hayda haki, mish 7aki',
    en: 'this is talk, this is just talk, not real speech',
    note: 'Wordplay on haki (talk) vs 7aki (meaningful speech)' }
];

const MU_DRILL = [
  { en: 'song',                opts: ['oghniye','lahne','sout','jaw'], correct: 0 },
  { en: 'oud (lute)',          opts: ['nay','3oud','tabl','qanoun'], correct: 1 },
  { en: 'darbouka (drum)',     opts: ['rabab','mizmar','darbouke','kamanja'], correct: 2 },
  { en: 'Levantine line dance',opts: ['ra2eS','dabke','Tarab','jaw'], correct: 1 },
  { en: 'concert / party',     opts: ['7afle','firqa','lahne','sout'], correct: 0 },
  { en: 'Lebanese diva, "Habbeitak bi-l-Sayf"', opts: ['Sabah','Fairuz','Najwa Karam','Nancy Ajram'], correct: 1 },
  { en: 'oud master + Darwish poems', opts: ['Wadih el Safi','Marcel Khalife','Ragheb Alama','Mashrou3 Leila'], correct: 1 },
  { en: 'reed flute',          opts: ['nay','mizmar','rabab','3oud'], correct: 0 },
  { en: 'lyrics',              opts: ['lahne','kalimat','sout','maqam'], correct: 1 },
  { en: 'modal scale (Arabic music theory)', opts: ['Tarab','maqam','dabke','firqa'], correct: 1 }
];

// ============ WEDDINGS & CELEBRATIONS ============
const WEDDING_VOCAB = [
  { tr: '3eres',         ar: 'عرس',         en: 'wedding (the event)' },
  { tr: 'jawaz',         ar: 'جواز',        en: 'marriage' },
  { tr: '3aris',         ar: 'عريس',        en: 'groom' },
  { tr: '3arousa',       ar: 'عروسة',       en: 'bride' },
  { tr: 'fasta-n',       ar: 'فستان',       en: 'dress' },
  { tr: 'badle',         ar: 'بدلة',        en: 'suit' },
  { tr: 'kahen / sheikh',ar: 'كاهن / شيخ',  en: 'priest / sheikh' },
  { tr: 'kniseh',        ar: 'كنيسة',       en: 'church' },
  { tr: 'jame3',         ar: 'جامع',        en: 'mosque' },
  { tr: 'mahr',          ar: 'مهر',         en: 'dowry' },
  { tr: 'khaTbeh',       ar: 'خطبة',        en: 'engagement' },
  { tr: 'katb el-ktab',  ar: 'كتب الكتاب',  en: 'signing of the contract' },
  { tr: 'zaffeh',        ar: 'زفّة',        en: 'wedding procession (with drums + sword dancers)' },
  { tr: 'Da7ye',         ar: 'ضحية',        en: 'sacrifice (lamb at celebrations)' },
  { tr: 'mahallabiyye',  ar: 'مهلبية',      en: 'milk pudding (often served)' },
  { tr: 'ma3moul',       ar: 'معمول',       en: 'date-filled cookie (holidays + weddings)' },
  { tr: '3ozoumeh',      ar: 'عزومة',       en: 'invitation' },
  { tr: 'Day-feh',       ar: 'ضيفة',        en: 'guests / hospitality' },
  { tr: 'maZbouT',       ar: 'مظبوط',       en: 'just right (perfectly arranged)' },
  { tr: 'ahla / atyab',  ar: 'أحلى / أطيب', en: 'more beautiful / tastier' }
];

const CONGRATS_PHRASES = [
  { tr: 'mabrouk',                    ar: 'مبروك',                    en: 'congratulations' },
  { tr: 'allah ybarek',               ar: 'الله يبارك',               en: 'may God bless (response to mabrouk)' },
  { tr: '3a2bal 3andak / 3andik',     ar: 'عقبال عندك',               en: 'may your turn come (wished to single people at weddings)' },
  { tr: '3a2bal el mi-2a sene',       ar: 'عقبال المية سنة',         en: 'may you live to a hundred years' },
  { tr: 'b-ne7ebbo / b-ne7ebba',     ar: 'بنحبو / بنحبا',            en: 'we love him / her (said about couple)' },
  { tr: 'bi-l-rafa2 wa-l-banin',     ar: 'بالرفاء والبنين',          en: 'with harmony and children (classical wedding wish)' },
  { tr: 'allah yiHmiya',              ar: 'الله يحميا',               en: 'may God protect them' },
  { tr: 'kell sane w intu salmin',   ar: 'كل سنة وانتو سالمين',     en: 'every year may you be well (holidays/birthday)' },
  { tr: 'kell sane w intu Tayyibin', ar: 'كل سنة وانتو طيبين',     en: 'every year may you be in good spirits (variant)' },
  { tr: 'ramadan kareem',             ar: 'رمضان كريم',               en: 'generous Ramadan (Ramadan greeting)' },
  { tr: 'allah akram',                ar: 'الله أكرم',                en: 'God is more generous (response to ramadan kareem)' },
  { tr: 'eid mubarak',                ar: 'عيد مبارك',                en: 'blessed feast' },
  { tr: 'tu2borne',                   ar: 'تقبرني',                   en: 'may you bury me (term of endearment, often to children)' },
  { tr: 'na3iman',                    ar: 'نعيماً',                   en: 'said after someone showers/shaves — bliss to you' },
  { tr: 'salametak',                  ar: 'سلامتك',                   en: 'get well (to sick) / safe travels (to traveler)' }
];

const WEDDING_CUSTOMS = [
  { custom: 'Zaffeh',       what: 'Wedding procession with darbouka + brass drums + zeneh (sword dancers). Couple enters reception in a parade.', when: 'Start of the reception, after religious ceremony.' },
  { custom: 'Katb el-ktab', what: 'Religious + legal contract signing (Muslim or Christian). Often done weeks before the party.', when: 'Engagement period, before the actual wedding day.' },
  { custom: 'Throwing rice / flowers', what: 'Symbolic blessing for fertility + prosperity.', when: 'As couple exits the church/mosque or enters the hall.' },
  { custom: 'Sword dance',  what: 'Groom holds a ceremonial sword; family/friends dance dabke around him.', when: 'Often during zaffeh.' },
  { custom: '"3a2bal 3andak"', what: 'Wishing single guests their own wedding. Common but can be overdone — younger Lebanese sometimes joke about it.', when: 'Said throughout the celebration to single attendees.' },
  { custom: 'Ma3moul + sweets', what: 'Date-stuffed cookies, baklawa, mahallabiyye served. Often boxes given as favors.', when: 'Throughout reception + take-home favors.' },
  { custom: 'Endless food (3ozoumeh culture)', what: 'Hospitality is a competition — refusing food can offend. Plates keep coming.', when: 'All celebrations: weddings, eid, baptisms, big lunches.' },
  { custom: 'Money pinning', what: 'Cash is pinned to the bride/groom\u2019s clothes during the dance — practical gift.', when: 'During reception dancing.' }
];

const WD_DRILL = [
  { en: 'wedding (event)',  opts: ['3eres','3aris','3arousa','jawaz'], correct: 0 },
  { en: 'bride',            opts: ['3aris','3arousa','3ozoumeh','khaTbeh'], correct: 1 },
  { en: 'groom',            opts: ['3aris','3arousa','3eres','jame3'], correct: 0 },
  { en: 'wedding procession w/ drums', opts: ['katb el-ktab','khaTbeh','zaffeh','3ozoumeh'], correct: 2 },
  { en: 'congratulations',  opts: ['salametak','mabrouk','tu2borne','na3iman'], correct: 1 },
  { en: 'response to "mabrouk"', opts: ['allah ybarek','salametak','allah yiHmik','tu2borne'], correct: 0 },
  { en: '"may your turn come" (wished to singles)', opts: ['mabrouk 3andak','3a2bal 3andak','allah ma3ak','salametak'], correct: 1 },
  { en: 'engagement',       opts: ['katb el-ktab','khaTbeh','zaffeh','3eres'], correct: 1 },
  { en: 'said after someone showers',opts: ['mabrouk','salametak','na3iman','3a2bal'], correct: 2 },
  { en: 'date-filled cookie',opts: ['mahallabiyye','ma3moul','ka3k','knafe'], correct: 1 },
  { en: 'eid greeting',     opts: ['eid mubarak','salametak','mabrouk','3a2bal'], correct: 0 },
  { en: 'classic wedding wish "harmony + children"', opts: ['kell sane w intu salmin','bi-l-rafa2 wa-l-banin','allah yibarek','3a2bal el mi-2a sene'], correct: 1 }
];
