// Run #285 — Lebanese Home & House Coach (hom)
// Rooms, furniture, household tasks, home phrases — 40 items, MCQ drill, 5 tips

const HOM_WORDS = [
  // rooms
  { tr: 'beit',           ar: 'بيت',           en: 'house / home',                    cat: 'rooms' },
  { tr: 'ghurfet noom',   ar: 'غرفة نوم',       en: 'bedroom',                         cat: 'rooms' },
  { tr: 'Saalon',         ar: 'صالون',          en: 'living room / salon',             cat: 'rooms' },
  { tr: 'maTbakh',        ar: 'مطبخ',           en: 'kitchen',                         cat: 'rooms' },
  { tr: 'Hammaam',        ar: 'حمام',           en: 'bathroom',                        cat: 'rooms' },
  { tr: 'balkon',         ar: 'بلكون',          en: 'balcony',                         cat: 'rooms' },
  { tr: 'Tabe2',          ar: 'طابق',           en: 'floor / storey',                  cat: 'rooms' },
  { tr: 'drij',           ar: 'درج',            en: 'stairs / drawer',                 cat: 'rooms' },
  // furniture
  { tr: 'kariiye',        ar: 'كريي',           en: 'chair',                           cat: 'furniture' },
  { tr: 'Taawle',         ar: 'طاولة',          en: 'table',                           cat: 'furniture' },
  { tr: 'takht',          ar: 'تخت',            en: 'bed',                             cat: 'furniture' },
  { tr: 'khazaane',       ar: 'خزانة',          en: 'wardrobe / cupboard',             cat: 'furniture' },
  { tr: 'tele',           ar: 'تلي',            en: 'TV / television',                 cat: 'furniture' },
  { tr: 'kanabe',         ar: 'كنبة',           en: 'sofa / couch',                    cat: 'furniture' },
  { tr: 'miraayi',        ar: 'مراية',          en: 'mirror',                          cat: 'furniture' },
  { tr: 'sariir',         ar: 'سرير',           en: 'bed (formal)',                    cat: 'furniture' },
  // household tasks
  { tr: 'nasaf',          ar: 'نشف',            en: 'to dry / hang laundry',           cat: 'tasks' },
  { tr: 'maSsal',         ar: 'مصّل',            en: 'to iron (clothes)',               cat: 'tasks' },
  { tr: 'farashe',        ar: 'فرشاة',          en: 'brush / broom',                   cat: 'tasks' },
  { tr: 'nasaf l-ardiyye',ar: 'نشف الأرضية',    en: 'mop the floor',                   cat: 'tasks' },
  { tr: 'ghsil l-Sahoune',ar: 'غسيل الصحون',    en: 'wash the dishes',                 cat: 'tasks' },
  { tr: 'ratlab',         ar: 'رتّب',            en: 'to tidy up / organize',           cat: 'tasks' },
  { tr: 'naDHDHaf',       ar: 'نظّف',            en: 'to clean',                        cat: 'tasks' },
  { tr: 'Tabakh',         ar: 'طبخ',            en: 'to cook',                         cat: 'tasks' },
  // utilities & objects
  { tr: 'kahrabaa',       ar: 'كهربا',          en: 'electricity',                     cat: 'utilities' },
  { tr: 'mai',            ar: 'ماي',            en: 'water',                           cat: 'utilities' },
  { tr: 'Taayir l-kaww',  ar: 'طاير الكو',      en: 'the power went out (lit: flew)',  cat: 'utilities' },
  { tr: 'generator',      ar: 'جنراتور',        en: 'generator',                       cat: 'utilities' },
  { tr: 'baTTaariyye',    ar: 'بطارية',         en: 'battery / UPS',                   cat: 'utilities' },
  { tr: 'miftaaH',        ar: 'مفتاح',          en: 'key / switch',                    cat: 'utilities' },
  // home phrases
  { tr: 'ana bil-beit',   ar: 'أنا بالبيت',     en: 'I\'m at home',                    cat: 'phrases' },
  { tr: 'ruu7 3al-beit',  ar: 'روح عالبيت',     en: 'go home',                         cat: 'phrases' },
  { tr: 'beit kbiir',     ar: 'بيت كبير',       en: 'big house',                       cat: 'phrases' },
  { tr: 'ijar',           ar: 'إيجار',          en: 'rent',                            cat: 'phrases' },
  { tr: 'jiiraan',        ar: 'جيران',          en: 'neighbors',                       cat: 'phrases' },
  { tr: 'Dayyafi',        ar: 'ضيافي',          en: 'my guest / hospitality',          cat: 'phrases' },
  { tr: '3and-na sehra',  ar: 'عندنا سهرة',     en: 'we have a gathering tonight',     cat: 'phrases' },
  { tr: 'tfaDDal/tfaDDali', ar: 'تفضل/تفضلي',  en: 'come in / please (m/f)',          cat: 'phrases' },
  { tr: 'beitkon beitna', ar: 'بيتكن بيتنا',    en: 'your home is our home (welcome)', cat: 'phrases' },
  { tr: 'sarrab l-beb',   ar: 'سرب الباب',      en: 'lock the door',                   cat: 'phrases' },
];

const HOM_DRILLS = [
  {
    q: 'How do you say "I\'m at home" in Lebanese Arabic?',
    opts: ['ana bil-maktab', 'ana bil-beit', 'ana bi-barra', 'ana Saalon'],
    correct: 1,
    note: '"ana bil-beit" = I\'m at home (أنا بالبيت). "bil" = in the. "beit" = house/home. Asking someone: "wein inta?" → "ana bil-beit" (where are you? → I\'m home). Texting culture: Lebanese text "bil beit" or just "beit" as a response. "ruu7 3al-beit" = go home. "beit-na" = our home. "beit-i" = my home. Home is central to Lebanese life — the "beit" is where everything happens.'
  },
  {
    q: 'What does "Taayir l-kaww" mean?',
    opts: ['the fan is on', 'someone knocked the door', 'the power went out', 'the water is gone'],
    correct: 2,
    note: '"Taayir l-kaww" = the power went out (lit: "the current flew"). Lebanese electricity crisis — power outages are daily life. Beirut gets ~12-20 hours of state electricity; the rest is covered by "generator" (neighborhood diesel generators) — billed separately. "Kaww" = electric current (from French "courant"). "kaTa3 l-kaww" = power cut. The generator industry became a multi-million dollar mafia post-crisis.'
  },
  {
    q: 'How do you say "come in / please" in Lebanese Arabic?',
    opts: ['yalla', 'ahlan', 'tfaDDal', 'marhaba'],
    correct: 2,
    note: '"tfaDDal" = come in / please / here you go (m). Female: "tfaDDali". Plural: "tfaDDalu". One of Lebanon\'s most versatile hospitality words. Uses: inviting someone in, offering something, gesturing to a seat. "tfaDDal, kol" = please eat. "tfaDDal, u23od" = please sit. Essential Lebanese hospitality ritual — refusing to use "tfaDDal" when someone arrives at your home is considered rude.'
  },
  {
    q: 'What does "beitkon beitna" mean?',
    opts: ['there are two houses here', 'your home is our home', 'whose house is this?', 'the house is large'],
    correct: 1,
    note: '"beitkon beitna" = your home is our home (بيتكن بيتنا). Classic Lebanese hospitality phrase — said to guests meaning "make yourself at home." "-kon" = your (plural), "-na" = our. This phrase signals that guests should feel completely at home. Lebanese hospitality runs deep: guests are offered food repeatedly, refusing is sometimes rude. "Beitkum beitkum" is a formal variant said when leaving someone\'s home to invite them to yours.'
  },
  {
    q: 'How do you say "rent" in Lebanese Arabic?',
    opts: ['beit', 'ijar', 'jiiraan', 'Tabe2'],
    correct: 1,
    note: '"ijar" = rent (إيجار). Lebanese housing crisis: Beirut was one of the most expensive cities in the Arab world pre-crisis. Post-2019: dollar-denominated rents collapsed in lira terms, but with dollarization, rents in "fresh dollars" remain high. "Ijar bi-dollar" = dollar-denominated rent. Old contracts: "ijar amad qadim" (old-law rental) = legacy rent-controlled contracts from the 1960s, extremely low, causing major urban housing issues.'
  },
  {
    q: 'What does "generator" mean in the Lebanese context?',
    opts: ['electricity meter', 'backup power generator', 'power switch', 'electric bill'],
    correct: 1,
    note: '"generator" = backup power generator (جنراتور — borrowed from English). Lebanon\'s second electricity system: neighborhood diesel generators fill power-cut hours. Residents pay monthly "abonman generator" (subscription) on top of state electricity bill. "Shu sa3it generator 3andkon?" = what are your generator hours? Quality varies: some give 20A (enough for basics), others 30A (AC too). The generator industry grew into a monopoly worth hundreds of millions.'
  },
  {
    q: 'How do you say "neighbors" in Lebanese Arabic?',
    opts: ['jiiraan', 'Dayyafi', 'zumalaa', 'ahel'],
    correct: 0,
    note: '"jiiraan" = neighbors (جيران — singular: jaar). Lebanese apartment culture: knowing your neighbors is essential. Buildings are dense; "jiiraan" relationships are close. "El-jaar 2abl el-daar" = the neighbor before the house (proverb: choose your neighbor before your house). Neighbors share food ("traji3 Saahn"), keys, and news. "Jiiraan mniH" = good neighbors = a blessing. In villages ("Day3a"), neighbors are often also extended family.'
  },
  {
    q: 'What does "3and-na sehra" mean?',
    opts: ['we have work tonight', 'we\'re staying up late', 'we have a gathering tonight', 'we have a problem'],
    correct: 2,
    note: '"3and-na sehra" = we have a gathering tonight (عندنا سهرة — sehra = evening gathering). "Sehra" = social gathering at home, typically evening (from سهر = to stay up late). Core of Lebanese social life: "sehra" at someone\'s home with food, drinks, music. "3amalna sehra" = we had a gathering. "Yalla, ta3a 3a l-sehra" = come to the gathering. Distinct from "7affle" (party/formal event). "Sehra" is intimate, "7affle" is bigger.'
  },
  {
    q: 'How do you say "to tidy up / organize" in Lebanese Arabic?',
    opts: ['naDHDHaf', 'ratlab', 'nasaf', 'Tabakh'],
    correct: 1,
    note: '"ratlab" = to tidy up/organize (رتّب). Lebanese household divide: "ratlab l-beit" (tidy the house) and "naDHDHaf l-beit" (clean the house) are distinct. "Ratlab" = arrange, put things in order. "naDHDHaf" = actually scrub/clean. "3am batrab" = I\'m tidying up. Lebanese homes are maintained immaculately for guests — "jiiye 3azaayim" (guests coming) triggers full cleaning + cooking. "Ratlibli ghurfetak!" = tidy your room! (parent to child).'
  },
  {
    q: 'What does "miftaaH" mean?',
    opts: ['window', 'lock', 'key / switch', 'door'],
    correct: 2,
    note: '"miftaaH" = key/switch (مفتاح — from فتح = to open). Dual meaning: physical key AND light switch. "miftaaH l-beb" = house key. "miftaaH l-kahrabaa" = light switch. "faqadt l-miftaaH" = I lost the key. "sarrab l-beb" = lock the door (sarrab = lock — from the verb سرّب meaning to bolt). Lebanese apartment buildings have old key locks and newer electronic ones — always carry your "miftaaH".'
  },
];

const HOM_TIPS = [
  { title: 'Lebanese home culture — the "beit" as social center', body: 'The home ("beit") is the center of Lebanese social life. "Sehra" (evening gathering) at home is the primary social activity — people visit unannounced or with short notice, guests stay for hours. Essential hospitality: offer coffee ("ahwe"), tea ("shay"), food — refusing hospitality is rude. The phrase "beitkun beitna" (your home is our home) isn\'t just a saying — Lebanese genuinely mean it. Hosting well is a source of family pride. "Beit kbiir" (large house) = social capital. Apartment buildings create tight neighbor communities — floor by floor, everyone knows everyone.' },
  { title: 'Lebanese electricity crisis — the generator culture', body: 'Lebanon\'s electricity crisis is one of the most absurd in the world. State electricity ("EdL" — Electricité du Liban) provides 2-20 hours/day depending on region. The rest is covered by "aboné generator" — neighborhood diesel generators run by local operators. Residents pay two electricity bills. During 2021-2022 peak crisis: some areas got only 2 hours state power/day. Result: "Taayir l-kaww" (power\'s gone) is a constant life event; everyone knows their generator schedule. Some buildings invested in solar panels post-crisis. "Inverter" (battery backup) is now common. "Shu sa3it generator?" = generator schedule = small talk.' },
  { title: 'Lebanese housing vocabulary in daily life', body: '"Ijar" (rent) and "3aqaar" (real estate) are constant conversation topics. Lebanon\'s rent law divide: "ijar amad qadim" (old law) = 1960s rent-controlled contracts, many grandfathered tenants paying $10-50/month for apartments worth millions. "Ijar amad jadid" (new law) = market rate. Most tenants post-2019: "la2iit ijar rakhiiS?" (did you find a cheap rent?). Floors: "Tabe2 awwal" (first floor) = ground floor in Lebanon (European style). "Tabe2 akhiir" = top floor. "Balkon" (balcony) = prized feature — social space in Lebanese apartments.' },
  { title: 'Household chores in Lebanese Arabic', body: '"Kil youm" (every day) chores: "ghsil l-Sahoune" (dishes), "ratlab" (tidying). Weekly: "naDHDHaf" (full cleaning). Laundry: "ghsil l-tyaab" (wash clothes), "nasaf" (hang to dry — Lebanese use clotheslines on balconies, common sight), "maSsal" (iron). Lebanese homes are kept very clean, especially in anticipation of guests. Division of household labor is changing: younger Lebanese couples share chores more equally. "Tabaakhne" = our cook (some middle-class families employ live-in help). Cleaning products: "javel" (bleach — from Javel, France) is used for everything.' },
  { title: 'Lebanese neighborhood and community life', body: '"Jiiraan" (neighbors) in Lebanon are a mini-community. Apartment buildings have "syndic" (building manager). "Mukhtar" = village elder/community leader — still important in Lebanese neighborhoods. Community life: "hay" = neighborhood quarter. Noise culture: Lebanese apartments are loud — music, cooking, conversation from neighbors is normal. Noise complaints are rare (social cost too high). "Jiiraan mniH" = a blessing cited often. Moving to a new neighborhood: visit neighbors with gifts, introduce yourself. "El-3asabiyye" (community solidarity) — neighbors help during power cuts, water shortages, emergencies.' },
];

const HOM_ABOUT = 'Master Lebanese Arabic for home and daily domestic life — rooms, furniture, household tasks, utilities, and home phrases. Essential for navigating Lebanese apartment living, hosting guests, and understanding the unique home culture including the electricity crisis.';
