// R1164 — NEW FEATURE: Lebanese Manakeesh & Morning Culture (mnk)

const MNK_WORDS = [
  { ar: 'مناقيش', tr: 'manaqeesh', en: 'manakeesh (flatbread with toppings)' },
  { ar: 'منقوشة', tr: 'man2oushah', en: 'a single manakeesh' },
  { ar: 'زعتر', tr: 'za3tar', en: 'wild thyme topping (thyme+olive oil+sumac)' },
  { ar: 'جبنة عكاوية', tr: 'jebneh 3akkawiyyeh', en: 'Akka-style white cheese topping' },
  { ar: 'سجق', tr: 'soujouk', en: 'spicy sausage topping' },
  { ar: 'كشك', tr: 'kishk', en: 'dried fermented yogurt & wheat topping' },
  { ar: 'فرن', tr: 'forn', en: 'local bakery / oven' },
  { ar: 'عجينة', tr: '3ajineh', en: 'dough' },
  { ar: 'تاوة', tr: 'taweh', en: 'round baking pan / griddle' },
  { ar: 'زيت زيتون', tr: 'zet zzetoun', en: 'olive oil' },
  { ar: 'طحينة', tr: 'ta7ineh', en: 'tahini' },
  { ar: 'دبس', tr: 'dibs', en: 'carob or grape molasses' },
  { ar: 'لبنة', tr: 'labneh', en: 'strained yogurt (spread)' },
  { ar: 'زيتون', tr: 'zaytoun', en: 'olives' },
  { ar: 'كعكة بسمسم', tr: 'ka3keh b-smsem', en: 'sesame ring bread' },
  { ar: 'فطور', tr: 'ftoor', en: 'breakfast' },
  { ar: 'بيض', tr: 'beid', en: 'egg (on manakeesh)' },
  { ar: 'فلفل أحمر', tr: 'flafle a7mar', en: 'red chili / pepper' },
  { ar: 'جبنة بيضا', tr: 'jebneh bayda', en: 'plain white cheese' },
  { ar: 'صحن مشترك', tr: 'sa7en mshtarak', en: 'shared plate (of morning spread)' },
];

const MNK_DRILLS = [
  {
    q: 'What is "manaqeesh"?',
    opts: ['grilled skewers', 'flatbread with toppings', 'stuffed grape leaves', 'sesame candy'],
    ans: 1
  },
  {
    q: 'How do you say "local bakery"?',
    opts: ['ftoor', 'taweh', 'forn', '3ajineh'],
    ans: 2
  },
  {
    q: '"Za3tar" topping contains:',
    opts: ['minced meat + onion', 'eggs + cheese', 'thyme + olive oil + sumac', 'tahini + honey'],
    ans: 2
  },
  {
    q: 'What is "kishk"?',
    opts: ['fresh mint', 'dried fermented yogurt & wheat', 'sweet jam', 'spicy sausage'],
    ans: 1
  },
  {
    q: 'How do you say "dough"?',
    opts: ['taweh', 'dibs', 'zaytoun', '3ajineh'],
    ans: 3
  },
  {
    q: '"Soujouk" is:',
    opts: ['white cheese', 'olive oil', 'spicy sausage topping', 'strained yogurt'],
    ans: 2
  },
  {
    q: 'How do you say "strained yogurt"?',
    opts: ['labneh', 'ta7ineh', 'jebneh bayda', 'dibs'],
    ans: 0
  },
  {
    q: '"Taweh" is:',
    opts: ['the baker\'s apron', 'round baking pan', 'sesame ring bread', 'a cheese variety'],
    ans: 1
  },
];

const MNK_TIPS = [
  'The forn (local bakery) is the social hub of Lebanese mornings. By 7am, a queue forms — men in pajamas, women in house slippers — everyone waiting for their order fresh off the taweh (baking pan). The baker flattens dough by hand, tops it, and slides it into the wood-fire oven. Manakeesh are eaten standing at the counter, folded in half and wrapped in paper, or taken home in stacks for the family ftoor (breakfast). The smell of za3tar and olive oil defines Lebanese morning.',
  'Za3tar is the king of manakeesh toppings — a precise blend of dried wild thyme, ground sumac, sesame seeds, and olive oil. Every forn has its own secret ratio, and regulars will travel across neighborhoods for their preferred za3tar blend. Jebneh 3akkawiyyeh (Akka white cheese) is the second classic — stretchy, mild, and slightly salty, often paired with tomato and mint. Kishk (dried fermented grain-yogurt) is the old-school country topping — earthy, tart, and uniquely Lebanese.',
  'The Lebanese morning spread (ftoor) around manakeesh is an art form: zaytoun (olives), labneh drizzled with olive oil, ka3keh b-smsem (sesame rings), cucumbers, tomatoes, fresh mint, and dips arranged across the table. Families argue over za3tar vs. jebneh vs. "mix" (half-half). The dibs (carob molasses) and ta7ineh dip is a distinct Lebanese tradition — drizzle together, scoop with bread, eat hot. Condensed-milk nescafe or tea completes the morning.',
  'Manakeesh vocabulary encodes Lebanese social class and geography: a "man2oushah 3a taweh" (on the pan) is the rustic village version — thick bread baked on a clay griddle over coals. "Man2oushah min el-forn" (from the bakery oven) is the city version. In mountain villages, grandmothers still make maryouk (paper-thin flatbread) on a saj dome at home. The soujouk (spicy sausage) manakeesh is the indulgent Friday treat. And no matter the topping, the ritual of fetching manakeesh for the family is an act of love.',
];

const MNK_ABOUT = 'Lebanese manakeesh culture is the daily morning ritual of fresh flatbread from the forn — za3tar, jebneh, or kishk — eaten hot with olives and labneh, defining the Lebanese breakfast table from village to city.';
