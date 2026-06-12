// R1161 — NEW FEATURE: Lebanese Grill & Mashawi Culture (msw)

const MSW_WORDS = [
  { ar: 'مشاوي', tr: 'mashawi', en: 'grilled meats / the grill spread' },
  { ar: 'كحلة', tr: 'ka7le', en: 'barbecue grill / brazier' },
  { ar: 'فحم', tr: 'fa7em', en: 'charcoal' },
  { ar: 'كفتة', tr: 'kafta', en: 'spiced minced meat on skewers' },
  { ar: 'شيش طاووق', tr: 'shish tawook', en: 'marinated chicken skewers' },
  { ar: 'لحمة مشوية', tr: 'la7me mashwiyye', en: 'grilled meat' },
  { ar: 'عرايس', tr: '3arayes', en: 'meat-stuffed grilled flatbread' },
  { ar: 'عريط', tr: '3areet', en: 'metal skewer' },
  { ar: 'كباب', tr: 'kebab', en: 'kebab' },
  { ar: 'جمرة', tr: 'jamre', en: 'live coal / ember' },
  { ar: 'دخان', tr: 'dkhaan', en: 'smoke (from grill)' },
  { ar: 'مكس مشاوي', tr: 'miks mashawi', en: 'mixed grill platter' },
  { ar: 'خضرة', tr: 'khadreh', en: 'fresh herbs & greens (served alongside)' },
  { ar: 'نعنع', tr: 'na3na3', en: 'mint' },
  { ar: 'بصل', tr: 'basal', en: 'onion (grilled whole or raw with grill)' },
  { ar: 'طماطم مشوية', tr: 'banadoura mashwiyye', en: 'grilled tomatoes' },
  { ar: 'عرق', tr: '3arak', en: 'arak (anise spirit, the grill drink)' },
  { ar: 'تفحيم', tr: 'taf7eem', en: 'getting the charcoal going' },
  { ar: 'جوزة', tr: 'jawzeh', en: 'whole grilled lamb leg / haunch' },
  { ar: 'حمام مشوي', tr: '7amam mashwi', en: 'grilled squab (pigeon)' },
];

const MSW_DRILLS = [
  {
    q: 'What is "kafta"?',
    opts: ['chicken skewers', 'spiced minced meat skewers', 'grilled tomatoes', 'lamb leg'],
    ans: 1
  },
  {
    q: 'How do you say "charcoal"?',
    opts: ['dkhaan', 'jamre', 'fa7em', '3areet'],
    ans: 2
  },
  {
    q: '"3arayes" are:',
    opts: ['metal skewers', 'grilled peppers', 'meat-stuffed grilled flatbread', 'mixed grill'],
    ans: 2
  },
  {
    q: 'How do you say "barbecue grill"?',
    opts: ['mashawi', 'ka7le', 'kebab', 'taf7eem'],
    ans: 1
  },
  {
    q: '"Shish tawook" is:',
    opts: ['grilled lamb', 'arak drink', 'marinated chicken skewers', 'live coal'],
    ans: 2
  },
  {
    q: 'How do you say "smoke" (from grill)?',
    opts: ['jamre', 'dkhaan', 'fa7em', 'basal'],
    ans: 1
  },
  {
    q: '"Taf7eem" means:',
    opts: ['serving the platter', 'getting the charcoal going', 'slicing the meat', 'adding mint'],
    ans: 1
  },
  {
    q: 'What is "miks mashawi"?',
    opts: ['grilled onions only', 'charcoal starter', 'mixed grill platter', 'arak cocktail'],
    ans: 2
  },
];

const MSW_TIPS = [
  'Lebanese mashawi culture is inseparable from social life — a weekend 7afle (gathering) almost always means lighting the ka7le (grill) by noon. The ritual begins with taf7eem: coaxing white ash onto charcoal before the meat touches the grate. Getting the heat right is a point of pride for the designated "grill man" (every group has one). Kafta, shish tawook, and 3arayes are the holy trinity — rarely does a spread omit all three.',
  '3arayes (عرايس) are one of Lebanon\'s great grill contributions: raw kafta mix stuffed into thin flatbread (maryouk or khoubz) and pressed onto the grill until the bread chars and the meat cooks inside. The result is a crispy, juicy pocket eaten immediately. The name literally means "brides" — they\'re considered a delicacy. Eaten with tabboule and toum (garlic paste), they define Lebanese grill identity.',
  'Arak (عرق) — the anise spirit distilled from grapes — is the canonical grill drink. It\'s diluted with water (turns milky white), packed in ice, and poured alongside the first meat. The Lebanese phrase "3al arak wa l-mashawi" (over arak and grills) is shorthand for a perfect afternoon. Non-drinkers get ayran (yogurt drink) or jallab (grape/rose syrup), but arak\'s presence is expected at any serious mashawi.',
  'The miks mashawi platter is the centerpiece of Lebanese grill hospitality — a feast-sized arrangement of kafta, shish tawook, lamb chops, kebab, and 3arayes, surrounded by khadreh (fresh mint, parsley, green onions), raw and grilled basal (onions), banadoura mashwiyye (grilled tomatoes), and warm bread. It arrives at the table on a long wooden board and signals the height of the meal. Ordering one for the table is a statement of generosity.',
];

const MSW_ABOUT = 'Lebanese mashawi culture transforms the backyard grill into a social institution — weekly rituals of charcoal, kafta, arak, and communal eating that define Lebanese summer life from village 7dawsh to Beirut rooftops.';
