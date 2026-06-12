// R633 — NEW FEATURE: Lebanese Mountain & Nature (jbl)

const JBL_CATS = [
  { id: 'mountain', label: '⛰️ Mountain Life' },
  { id: 'nature',   label: '🌿 Nature & Seasons' },
  { id: 'outdoor',  label: '🥾 Outdoor Activities' },
  { id: 'village',  label: '🏡 Village & Countryside' },
];

const JBL_WORDS = [
  // Mountain Life
  { ar: 'الجبل', tr: 'l-jabal',      en: 'the mountain',        cat: 'mountain' },
  { ar: 'الأرز', tr: 'l-arz',        en: 'the cedar (tree)',    cat: 'mountain' },
  { ar: 'الثلج', tr: 'l-talj',       en: 'the snow',            cat: 'mountain' },
  { ar: 'الهوا', tr: 'l-hawa',       en: 'the air / breeze',    cat: 'mountain' },
  { ar: 'بارد',  tr: 'baared',       en: 'cold',                cat: 'mountain' },
  { ar: 'الضبّاب', tr: 'l-dabbab',   en: 'the fog / mist',      cat: 'mountain' },
  { ar: 'منيح الهوا', tr: 'mnee7 l-hawa', en: 'the air is fresh', cat: 'mountain' },
  // Nature & Seasons
  { ar: 'الربيع', tr: 'l-rabi3',     en: 'spring',              cat: 'nature' },
  { ar: 'الصيف',  tr: 'l-Seif',      en: 'summer',              cat: 'nature' },
  { ar: 'الخريف', tr: 'l-khariif',   en: 'autumn / fall',       cat: 'nature' },
  { ar: 'الشتا',  tr: 'l-shita',     en: 'winter',              cat: 'nature' },
  { ar: 'الزهر',  tr: 'l-zaher',     en: 'the flowers / blossoms', cat: 'nature' },
  { ar: 'الوادي', tr: 'l-waadi',     en: 'the valley',          cat: 'nature' },
  { ar: 'النهر',  tr: 'l-nahr',      en: 'the river',           cat: 'nature' },
  // Outdoor Activities
  { ar: 'تمشى',   tr: 'tamasha',     en: 'went for a walk',     cat: 'outdoor' },
  { ar: 'تسلّق',  tr: 'tasalla2',    en: 'climbed / hiked',     cat: 'outdoor' },
  { ar: 'تزلّج',  tr: 'tazallag',    en: 'went skiing',         cat: 'outdoor' },
  { ar: 'شواء',   tr: 'shawwaa',     en: 'barbecue / grilling', cat: 'outdoor' },
  { ar: 'نزهة',   tr: 'nzhe',        en: 'an outing / picnic',  cat: 'outdoor' },
  { ar: 'خيمة',   tr: 'khiime',      en: 'a tent',              cat: 'outdoor' },
  { ar: 'طريق',   tr: 'Taree2',      en: 'a path / trail',      cat: 'outdoor' },
  // Village & Countryside
  { ar: 'الضيعة', tr: 'l-Dey3a',     en: 'the village',         cat: 'village' },
  { ar: 'البيت القديم', tr: 'l-beit l-2adeem', en: 'the old house', cat: 'village' },
  { ar: 'العمّ',  tr: '3amm',        en: 'uncle (informal address)', cat: 'village' },
  { ar: 'الزيتون', tr: 'l-zeitoun',  en: 'the olives',          cat: 'village' },
  { ar: 'الكرم',  tr: 'l-karm',      en: 'the vineyard',        cat: 'village' },
  { ar: 'سكوت',   tr: 'skoot',       en: 'silence / quiet',     cat: 'village' },
  { ar: 'بعيد عن الدوشة', tr: 'b3iid 3an l-dawshe', en: 'away from the noise', cat: 'village' },
];

const JBL_DRILLS = [
  { q: 'How do you say "the mountain" in Lebanese?', opts: ['l-jabal','l-waadi','l-nahr','l-Dey3a'], ans: 0 },
  { q: 'What does "l-arz" mean?', opts: ['the river','the valley','the cedar tree','the fog'], ans: 2 },
  { q: '"l-talj" means?', opts: ['summer','rain','snow','wind'], ans: 2 },
  { q: 'How do you say "the air is fresh" in Lebanese?', opts: ['l-hawa kteer','mnee7 l-hawa','l-hawa baared','skoot'], ans: 1 },
  { q: 'What does "l-rabi3" mean?', opts: ['autumn','summer','winter','spring'], ans: 3 },
  { q: '"l-Seif" means?', opts: ['winter','spring','summer','autumn'], ans: 2 },
  { q: 'How do you say "went skiing" in Lebanese?', opts: ['tamasha','tazallag','tasalla2','shawwaa'], ans: 1 },
  { q: 'What does "l-Dey3a" mean?', opts: ['the mountain','the village','the valley','the river'], ans: 1 },
  { q: '"tazallag" means?', opts: ['hiked','barbecued','went skiing','went for a walk'], ans: 2 },
  { q: 'How do you say "the vineyard"?', opts: ['l-karm','l-zeitoun','l-zaher','l-waadi'], ans: 0 },
  { q: 'What does "nzhe" mean?', opts: ['a tent','a trail','an outing/picnic','a barbecue'], ans: 2 },
  { q: '"skoot" means?', opts: ['cold','silence/quiet','fog','far away'], ans: 1 },
  { q: 'How do you say "the olives"?', opts: ['l-karm','l-zeitoun','l-arz','l-zaher'], ans: 1 },
  { q: 'What does "l-dabbab" mean?', opts: ['the breeze','the snow','the fog/mist','the flowers'], ans: 2 },
  { q: '"b3iid 3an l-dawshe" means?', opts: ['close to the city','away from the noise','on the trail','in the village'], ans: 1 },
];

const JBL_TIPS = [
  { title: 'Jabal vs Jbeil', body: '"l-jabal" = generic mountain. "Jbeil" (Byblos) is a city name. "la-jabal" (with stress on ja) = up in the mountains.' },
  { title: 'Cedar pride', body: 'The cedar "l-arz" is Lebanon\'s national symbol (on the flag). Say "arz Lubnan" (cedar of Lebanon) with pride — it resonates deeply.' },
  { title: 'Summer escape', body: 'Lebanese say "raa7 3a-l-jabal" (went to the mountain) for summer escapes. Mountain towns like Bcharre, Ehden, Faraya are top destinations.' },
  { title: 'Skiing in Lebanon', body: '"Faraya" and "Mzaar" are the main ski resorts. "Raa7 yetzallag" = he went skiing. Skiing season: December–March.' },
  { title: 'Village culture', body: '"l-Dey3a" (village) holds special cultural weight — ancestral home, family summer house. "Shu 3amilto bi-l-Dey3a?" = What did you do in the village?' },
  { title: 'Seasonal phrases', body: 'Spring: "l-rabi3 jay" (spring is coming). Summer: "l-Seif mnee7" (nice summer). Winter: "l-shita kteer" (a lot of winter/rain). Autumn: "l-khariif 7elo" (autumn is beautiful).' },
];
