// Run #216 — Lebanese Household Vocabulary Coach (hld)
// Rooms, furniture, appliances, chores — 40 items, MCQ drill, 5 tips

const HLD_WORDS = [
  // rooms
  { tr: 'bet',          ar: 'بيت',        en: 'house / home',          cat: 'rooms' },
  { tr: '2odde',        ar: 'قدة',         en: 'room',                  cat: 'rooms' },
  { tr: 'salon',        ar: 'صالون',       en: 'living room',           cat: 'rooms' },
  { tr: '2oddet noom',  ar: 'قدة نوم',    en: 'bedroom',               cat: 'rooms' },
  { tr: 'maT7a',        ar: 'مطبخ',        en: 'kitchen',               cat: 'rooms' },
  { tr: '7ammem',       ar: 'حمام',        en: 'bathroom',              cat: 'rooms' },
  { tr: 'balkon',       ar: 'بلكون',       en: 'balcony',               cat: 'rooms' },
  { tr: 'dehliz',       ar: 'دهليز',       en: 'hallway / corridor',    cat: 'rooms' },
  // furniture
  { tr: 'takht',        ar: 'تخت',         en: 'bed',                   cat: 'furniture' },
  { tr: 'kursi',        ar: 'كرسي',        en: 'chair',                 cat: 'furniture' },
  { tr: 'tawle',        ar: 'طاولة',       en: 'table',                 cat: 'furniture' },
  { tr: 'kanabe',       ar: 'كنبة',        en: 'sofa / couch',          cat: 'furniture' },
  { tr: 'khizene',      ar: 'خزانة',       en: 'wardrobe / closet',     cat: 'furniture' },
  { tr: 'raff',         ar: 'رف',          en: 'shelf',                 cat: 'furniture' },
  { tr: 'beb',          ar: 'باب',         en: 'door',                  cat: 'furniture' },
  { tr: 'shubbek',      ar: 'شباك',        en: 'window',                cat: 'furniture' },
  // appliances
  { tr: 'talleje',      ar: 'تلاجة',       en: 'refrigerator / fridge', cat: 'appliances' },
  { tr: 'ghassele',     ar: 'غسالة',       en: 'washing machine',       cat: 'appliances' },
  { tr: 'tilifizyoun',  ar: 'تلفزيون',     en: 'television / TV',       cat: 'appliances' },
  { tr: 'miklefe',      ar: 'مكلفة',       en: 'microwave',             cat: 'appliances' },
  { tr: 'daffaye',      ar: 'دفاية',       en: 'heater',                cat: 'appliances' },
  { tr: 'mrawwe7a',     ar: 'مروّحة',      en: 'fan',                   cat: 'appliances' },
  { tr: 'makinet 2ahwe', ar: 'ماكنة قهوة', en: 'coffee machine',        cat: 'appliances' },
  { tr: 'bo2 el-ghaz',  ar: 'بوق الغاز',  en: 'gas stove',             cat: 'appliances' },
  // chores
  { tr: 'naDDafo',      ar: 'نضّفو',       en: 'clean it (imperative)', cat: 'chores' },
  { tr: 'kasah',        ar: 'كسح',         en: 'sweep / vacuum',        cat: 'chores' },
  { tr: 'mase7',        ar: 'مسح',         en: 'wipe / mop',            cat: 'chores' },
  { tr: 'ghsil',        ar: 'غسل',         en: 'wash (verb)',           cat: 'chores' },
  { tr: 'ratab',        ar: 'رتّب',        en: 'tidy up / arrange',     cat: 'chores' },
  { tr: 'kawyy',        ar: 'كوي',         en: 'iron (clothes)',         cat: 'chores' },
  // general household vocab
  { tr: '7ajr',         ar: 'حجر',         en: 'stone / floor tile',    cat: 'home' },
  { tr: 'sit le-bnet',  ar: 'سطح البيت',  en: 'rooftop / terrace',     cat: 'home' },
  { tr: 'daw2',         ar: 'ضوء',         en: 'light',                 cat: 'home' },
  { tr: 'mifteh',       ar: 'مفتاح',       en: 'key',                   cat: 'home' },
  { tr: 'sekkere',      ar: 'سكّيرة',      en: 'lock',                  cat: 'home' },
  { tr: 'derej',        ar: 'درج',         en: 'drawer',                cat: 'home' },
  { tr: 'mawsim',       ar: 'موسم',        en: 'season (also: socket)', cat: 'home' },
  { tr: 'sherite',      ar: 'شريطة',       en: 'tape / strip',          cat: 'home' },
  { tr: 'far',          ar: 'فار',         en: 'mouse (animal) / also: oven', cat: 'home' },
  { tr: 'jiraneh',      ar: 'جيرانة',      en: 'neighbours (coll.)',    cat: 'home' },
];

const HLD_DRILLS = [
  {
    q: 'How do you say "kitchen" in Lebanese Arabic?',
    opts: ['salon', 'maT7a', '7ammem', 'dehliz'],
    correct: 1,
    note: '"maT7a" = kitchen; "salon" = living room; "7ammem" = bathroom; "dehliz" = hallway'
  },
  {
    q: 'What does "talleje" mean?',
    opts: ['washing machine', 'oven', 'refrigerator', 'fan'],
    correct: 2,
    note: '"talleje" = refrigerator/fridge; "ghassele" = washing machine; "mrawwe7a" = fan'
  },
  {
    q: 'How do you say "sofa / couch" in Lebanese Arabic?',
    opts: ['takht', 'tawle', 'kanabe', 'kursi'],
    correct: 2,
    note: '"kanabe" = sofa/couch; "takht" = bed; "tawle" = table; "kursi" = chair'
  },
  {
    q: 'What does "beb" mean?',
    opts: ['window', 'door', 'shelf', 'balcony'],
    correct: 1,
    note: '"beb" = door; "shubbek" = window; "raff" = shelf; "balkon" = balcony'
  },
  {
    q: 'How do you say "tidy up / arrange" in Lebanese Arabic?',
    opts: ['kasah', 'ghsil', 'ratab', 'kawyy'],
    correct: 2,
    note: '"ratab" = tidy up; "kasah" = sweep; "ghsil" = wash; "kawyy" = iron clothes'
  },
  {
    q: 'What does "mifteh" mean?',
    opts: ['lock', 'drawer', 'key', 'door'],
    correct: 2,
    note: '"mifteh" = key; "sekkere" = lock; "derej" = drawer; "beb" = door'
  },
  {
    q: 'How do you say "bedroom" in Lebanese Arabic?',
    opts: ['salon', '2odde', '2oddet noom', '7ammem'],
    correct: 2,
    note: '"2oddet noom" = bedroom (lit. sleep room); "2odde" = room; "salon" = living room'
  },
  {
    q: 'What does "ghassele" mean?',
    opts: ['refrigerator', 'coffee machine', 'fan', 'washing machine'],
    correct: 3,
    note: '"ghassele" = washing machine; "talleje" = refrigerator; "makinet 2ahwe" = coffee machine'
  },
  {
    q: 'How do you say "wardrobe / closet" in Lebanese Arabic?',
    opts: ['raff', 'derej', 'khizene', 'takht'],
    correct: 2,
    note: '"khizene" = wardrobe/closet; "raff" = shelf; "derej" = drawer; "takht" = bed'
  },
  {
    q: 'What does "daw2" mean?',
    opts: ['lock', 'key', 'light', 'window'],
    correct: 2,
    note: '"daw2" = light; "mifteh" = key; "sekkere" = lock; "shubbek" = window'
  },
];

const HLD_TIPS = [
  { title: 'Lebanese vs MSA household words', body: 'Lebanese uses many French loanwords at home: "salon" (living room, from French salon), "balkon" (balcony), "miklefe" (microwave). Pure Arabic: "maT7a" (kitchen), "7ammem" (bathroom), "dehliz" (hallway).' },
  { title: '"Bet" — house vs home', body: '"Bet" means both house and home in Lebanese. "Rje3t 3al bet" = I came back home. "Bet kbir" = big house. "2ohdon bet" = they took a house/apartment. Very commonly shortened: "3al bet" (at/to home).' },
  { title: 'Room construction', body: 'Lebanese combines "2odde" (room) + purpose: "2oddet noom" (bedroom), "2oddet jlis" (sitting room). This is the colloquial pattern — more specific than just "2odde" alone.' },
  { title: 'Appliance vocabulary', body: 'Many Lebanese appliance names are direct French/Western borrowings: "tilifizyoun" (TV), "miklefe" (microwave). The humble "talleje" (fridge) and "ghassele" (washing machine) are older Arabic-origin words still widely used.' },
  { title: 'Giving household instructions', body: '"Naddafo!" = Clean it! "Kasah el-bet" = sweep the house. "Ratab ghurftak" = tidy your room. Lebanese imperative for chores is the verb root (naddaf/kasah/ratab) + direct object. Gender agreement: "naddafi" (to a woman), "naddafu" (to a group).' },
];

const HLD_ABOUT = 'Master Lebanese Arabic household vocabulary — rooms, furniture, appliances, and chores. Essential for anyone living in or visiting Lebanon, understanding conversations about home life, and giving or following household instructions.';
