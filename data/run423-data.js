// R423 — Lebanese Village Life (vlg)
const VLG_WORDS = [
  // places
  { ar: 'ضيعة', tr: 'Daye3a', en: 'village', cat: 'places' },
  { ar: 'بيدر', tr: 'beidar', en: 'threshing floor', cat: 'places' },
  { ar: 'بستان', tr: 'bustaan', en: 'orchard / garden', cat: 'places' },
  { ar: 'مزرعة', tr: 'mazra3a', en: 'farm', cat: 'places' },
  { ar: 'ساحة', tr: 'saa7a', en: 'village square', cat: 'places' },
  { ar: 'دير', tr: 'deir', en: 'monastery', cat: 'places' },
  { ar: 'نبع', tr: 'nab3', en: 'spring / water source', cat: 'places' },
  { ar: 'وادي', tr: 'waadi', en: 'valley', cat: 'places' },
  { ar: 'قيعة', tr: '2ee3a', en: 'valley floor', cat: 'places' },
  { ar: 'مضيفة', tr: 'madyafe', en: 'guesthouse', cat: 'places' },
  // nature
  { ar: 'جرن', tr: 'jrin', en: 'stone mortar', cat: 'nature' },
  { ar: 'سنديانة', tr: 'sandiyaneh', en: 'oak tree', cat: 'nature' },
  { ar: 'صنوبر', tr: 'Snobar', en: 'pine tree', cat: 'nature' },
  { ar: 'كرمة', tr: 'karma', en: 'grapevine', cat: 'nature' },
  { ar: 'تينة', tr: 'teine', en: 'fig tree', cat: 'nature' },
  { ar: 'زيتونة', tr: 'zeitoune', en: 'olive tree', cat: 'nature' },
  { ar: 'خروبة', tr: 'kharroube', en: 'carob tree', cat: 'nature' },
  { ar: 'ثلج', tr: 'thalj', en: 'snow', cat: 'nature' },
  { ar: 'شلال', tr: 'shalaal', en: 'waterfall', cat: 'nature' },
  { ar: 'صخرة', tr: 'Sakhra', en: 'rock / boulder', cat: 'nature' },
  // traditions
  { ar: 'معصرة', tr: 'ma3Sara', en: 'olive press', cat: 'traditions' },
  { ar: 'دبس', tr: 'dibs', en: 'grape/carob molasses', cat: 'traditions' },
  { ar: 'مونة', tr: 'moune', en: 'food provisions / preserves', cat: 'traditions' },
  { ar: 'مشاع', tr: 'mushaa3', en: 'common land', cat: 'traditions' },
  { ar: 'سهرة', tr: 'sahre', en: 'evening gathering', cat: 'traditions' },
  { ar: 'دحيه', tr: 'da77iye', en: 'traditional dance gathering', cat: 'traditions' },
  { ar: 'عتابا', tr: '3ataaba', en: 'traditional folk poetry', cat: 'traditions' },
  { ar: 'مجوز', tr: 'mijwiz', en: 'double-reed flute', cat: 'traditions' },
  { ar: 'دف', tr: 'deff', en: 'frame drum', cat: 'traditions' },
  { ar: 'ضيافة', tr: 'Diyaafe', en: 'hospitality / hosting', cat: 'traditions' },
  // activities
  { ar: 'قطاف', tr: '2Taaf', en: 'harvest (fruit picking)', cat: 'activities' },
  { ar: 'حرث', tr: '7arth', en: 'plowing', cat: 'activities' },
  { ar: 'رعي', tr: 'ra3y', en: 'grazing / herding', cat: 'activities' },
  { ar: 'حلب', tr: '7alab', en: 'milking', cat: 'activities' },
  { ar: 'غرس', tr: 'ghars', en: 'planting seedlings', cat: 'activities' },
  { ar: 'حصاد', tr: '7Saad', en: 'harvest (grain)', cat: 'activities' },
  { ar: 'عجن', tr: '3ajn', en: 'kneading dough', cat: 'activities' },
  { ar: 'فرن', tr: 'furn', en: 'communal bread oven', cat: 'activities' },
  { ar: 'تعهيد', tr: 'ta3hiid', en: 'tending / maintaining (trees)', cat: 'activities' },
  { ar: 'خيط', tr: 'khayT', en: 'sewing / needlework', cat: 'activities' },
];

const VLG_DRILLS = [
  {
    q: 'What is "Daye3a" in English?',
    opts: ['village', 'farm', 'monastery', 'valley'],
    correct: 0,
    note: '"Daye3a" (ضيعة) is the Lebanese word for village. Lebanese people feel deeply connected to their ancestral village — many families still own land there and return for summers and holidays.'
  },
  {
    q: 'What is "moune" (مونة)?',
    opts: ['hospitality', 'food provisions / preserves', 'olive press', 'common land'],
    correct: 1,
    note: '"Moune" is the Lebanese tradition of preparing seasonal provisions — jams, dried herbs, pickles, tomato paste — to last through winter. Making moune together is a beloved family ritual.'
  },
  {
    q: 'Which word means "olive press"?',
    opts: ['bustaan', 'beidar', 'ma3Sara', 'nab3'],
    correct: 2,
    note: '"Ma3Sara" (معصرة) is the olive press, still a gathering place during harvest season. Pressing olives together is communal — neighbors share the press and split the oil.'
  },
  {
    q: 'What does "2Taaf" mean?',
    opts: ['plowing', 'harvest (fruit picking)', 'milking', 'planting'],
    correct: 1,
    note: '"2Taaf" (قطاف) means picking fruit — especially grapes and olives in autumn. Lebanese villages come alive during 2Taaf season as extended families return to help.'
  },
  {
    q: 'What is "saa7a"?',
    opts: ['threshing floor', 'valley floor', 'village square', 'guesthouse'],
    correct: 2,
    note: '"Saa7a" (ساحة) is the village square — the heart of community life. It\'s where people gather for coffee, news, celebrations, and summer evenings under the stars.'
  },
  {
    q: 'What is "3ataaba" (عتابا)?',
    opts: ['frame drum', 'double-reed flute', 'traditional folk poetry', 'evening gathering'],
    correct: 2,
    note: '"3ataaba" is a form of improvised Lebanese folk poetry, sung in a distinctive meter. Masters of 3ataaba are highly respected and can compose verses on the spot about any topic.'
  },
  {
    q: 'What does "madyafe" (مضيفة) mean?',
    opts: ['guesthouse', 'orchard', 'spring', 'communal oven'],
    correct: 0,
    note: '"Madyafe" is the guesthouse, traditionally the heart of Lebanese village hospitality. Important families kept a madyafe always ready with coffee and food for any visitor.'
  },
  {
    q: 'Which word means "oak tree"?',
    opts: ['teine', 'kharroube', 'sandiyaneh', 'zeitoune'],
    correct: 2,
    note: '"Sandiyaneh" (سنديانة) is the oak tree, sacred in Lebanese tradition. Ancient oaks in mountain villages can be over a thousand years old and are considered protected community treasures.'
  },
  {
    q: 'What is "Diyaafe" (ضيافة)?',
    opts: ['evening gathering', 'hospitality / hosting', 'communal dance', 'harvest'],
    correct: 1,
    note: '"Diyaafe" is the Lebanese concept of hospitality — welcoming guests with generosity regardless of personal cost. Refusing a guest food or shelter is considered deeply shameful.'
  },
  {
    q: 'What does "dibs" (دبس) mean?',
    opts: ['olive oil', 'grape/carob molasses', 'thyme mix', 'dried herbs'],
    correct: 1,
    note: '"Dibs" is a thick, dark molasses made from grapes or carob. Lebanese people pour it on tahini for a classic village breakfast — "dibs w tahini" on fresh bread is a staple.'
  },
];

const VLG_TIPS = [
  {
    title: '🏔️ Village Identity',
    body: 'Lebanese people identify strongly with their ancestral village (Daye3a). When meeting someone, a common question is "min wein inta?" (where are you from?) — meaning which village. This identity is often more specific than saying you\'re from Lebanon itself.'
  },
  {
    title: '🫒 Olive Harvest Season',
    body: 'October-November is "mawsim el zeitoun" (olive season). Families travel to their village land for the 2Taaf (harvest). It\'s hard work but also a social event — everyone picks together, and the ma3Sara (olive press) runs day and night. Fresh olive oil right from the press is a special treat.'
  },
  {
    title: '🍇 Moune: Lebanon\'s Pantry Tradition',
    body: '"Moune" (making provisions) happens late summer when gardens peak. Women traditionally gather to make tomato paste, dry figs, pickle vegetables, make jam, and press grape molasses (dibs). Sharing moune is a way of maintaining village bonds even for diaspora Lebanese.'
  },
  {
    title: '☕ The Madyafe Culture',
    body: 'Traditional Lebanese villages had a madyafe (guesthouse) where the mukhtar (village chief) or notable families would host visitors. Arabic coffee (2ahwe) was always ready. The phrase "ahlan wa sahlan" (welcome) was taken literally — your home was genuinely open to any traveler.'
  },
  {
    title: '🎵 3ataaba & Mijwiz',
    body: 'Lebanese village music centers on the mijwiz (double flute) and 3ataaba (folk poetry duels). At weddings and festivals, poets improvise verses challenging each other — wit and wordplay are prized. The dabke (line dance) is performed to this music, with the lead dancer showing off footwork.'
  },
];

const VLG_ABOUT = 'Lebanese village life (7ayaat el Daye3a) is central to the national identity. Even heavily urbanized Lebanese families typically maintain ties to an ancestral mountain or coastal village. The seasonal rhythms of village life — olive harvest, grape picking, summer gatherings, moune-making — connect generations to the land. Mountain villages like Bcharre, Deir el Ahmar, and Douma preserve ancient traditions: stone houses, terraced fields, ancient churches and monasteries, and communal springs (nab3). Understanding village vocabulary helps decode Lebanese culture, since many idioms, proverbs, and metaphors come from agricultural and pastoral life.';
