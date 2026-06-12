// R1155 — NEW FEATURE: Lebanese Butcher & Meat Culture (lhm)

const LHM_WORDS = [
  { ar: 'لحمة', tr: 'la7me', en: 'meat' },
  { ar: 'جزّار', tr: 'jazzar', en: 'butcher' },
  { ar: 'محل الجزارة', tr: 'ma7all el-jzere', en: 'butcher shop' },
  { ar: 'دجاج', tr: 'djej', en: 'chicken' },
  { ar: 'خروف', tr: 'kharoof', en: 'lamb' },
  { ar: 'بقر', tr: 'ba2ar', en: 'beef' },
  { ar: 'كفتة', tr: 'kafta', en: 'kafta (minced meat mix)' },
  { ar: 'مفروم', tr: 'mafroomeh', en: 'minced / ground meat' },
  { ar: 'قصبة', tr: '2asabe', en: 'ribs' },
  { ar: 'فيليه', tr: 'filee', en: 'fillet / tenderloin' },
  { ar: 'شيش طاووق', tr: 'shish taouk', en: 'chicken skewer' },
  { ar: 'كباب', tr: 'kebab', en: 'kebab' },
  { ar: 'سجق', tr: 'sou2ou2', en: 'sausage / soujouk' },
  { ar: 'ورق عريش', tr: 'wara2 3arish', en: 'stuffed vine leaves (with meat)' },
  { ar: 'مشوي', tr: 'meshwi', en: 'grilled' },
  { ar: 'مدبّل', tr: 'mdabbal', en: 'marinated / seasoned' },
  { ar: 'طازج', tr: 'taze', en: 'fresh' },
  { ar: 'طحال', tr: 'ta7al', en: 'spleen (offal)' },
  { ar: 'كبدة', tr: 'kibde', en: 'liver' },
  { ar: 'نيّ', tr: 'neyye', en: 'raw (meat) / kibbeh nayyeh' },
];

const LHM_DRILLS = [
  {
    q: 'What does "jazzar" mean?',
    opts: ['meat', 'butcher', 'chicken', 'grilled'],
    ans: 1
  },
  {
    q: 'How do you say "minced meat"?',
    opts: ['kafta', 'mafroomeh', 'taze', 'filee'],
    ans: 1
  },
  {
    q: '"Kafta" is:',
    opts: ['chicken skewer', 'liver', 'minced meat mix', 'beef ribs'],
    ans: 2
  },
  {
    q: 'How do you say "grilled"?',
    opts: ['neyye', 'mdabbal', 'meshwi', 'taze'],
    ans: 2
  },
  {
    q: '"Kibde" means:',
    opts: ['sausage', 'fillet', 'liver', 'lamb'],
    ans: 2
  },
  {
    q: 'How do you say "fresh"?',
    opts: ['taze', 'meshwi', 'neyye', 'mafroomeh'],
    ans: 0
  },
  {
    q: 'What is "shish taouk"?',
    opts: ['beef kebab', 'lamb ribs', 'chicken skewer', 'minced sausage'],
    ans: 2
  },
  {
    q: '"Neyye" means:',
    opts: ['marinated', 'raw', 'grilled', 'fresh'],
    ans: 1
  },
];

const LHM_TIPS = [
  'The Lebanese butcher (jazzar — جزّار) is a neighborhood institution — locals visit the same shop for decades, and the jazzar knows each family\'s preferences. Kafta (كفتة) is typically a personal mix of minced lamb, onion, parsley, and spices — every jazzar has his own recipe.',
  'Kibbeh nayyeh (neyye — نيّ) is raw lamb or beef mixed with cracked wheat and spices — a delicacy served at meze. It requires absolute freshness and trust in your butcher; a good jazzar guarantees same-day lamb.',
  'Lebanese butchers prep meat for specific dishes: mafroomeh (مفروم) can be ordered for kafta or stuffed vegetables, shish taouk skewers come pre-marinated, and whole chickens (djej) are often butterflied for grilling.',
  'The Beirut expression "rouh 3a-l-jazzar" (go to the butcher) implies solving a problem at the source — Lebanese culture prizes the specialist who knows their craft. Soujouk (سجق) is spiced Armenian-influenced sausage, a common addition to Lebanese breakfast.',
];

const LHM_ABOUT = 'Lebanese butcher shops blend Levantine, Armenian, and French culinary traditions. From daily kafta to special-occasion whole lamb, the jazzar is central to Lebanese food culture.';
