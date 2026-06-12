// R816 — NEW FEATURE: Lebanese Cheese & Dairy Culture (dry)

const DRY_CATS = ['cheeses','dairy','dishes','expressions'];

const DRY_WORDS = [
  // cheeses
  { a: 'جبنة عكاوي', tr: 'jibne 3akkawi', en: 'Akkawi cheese (mild, salty, stretchy)', cat: 'cheeses' },
  { a: 'حلوم', tr: '7alloum', en: 'halloumi (grillable cheese)', cat: 'cheeses' },
  { a: 'شنكليش', tr: 'shanklish', en: 'aged spiced cheese balls (a Lebanese delicacy)', cat: 'cheeses' },
  { a: 'جبنة بلدي', tr: 'jibne baladi', en: 'local/country cheese (fresh white cheese)', cat: 'cheeses' },
  { a: 'قشطة', tr: '2ishTa', en: 'clotted cream / ashta (thick Lebanese cream)', cat: 'cheeses' },
  { a: 'جبنة مزة', tr: 'jibnet mazza', en: 'meze cheese (soft, served as appetizer)', cat: 'cheeses' },
  // dairy
  { a: 'لبن', tr: 'laban', en: 'yogurt (Lebanese-style plain yogurt)', cat: 'dairy' },
  { a: 'لبنة', tr: 'labneh', en: 'strained yogurt / labneh (thick, spread on bread)', cat: 'dairy' },
  { a: 'سمنة', tr: 'samne', en: 'clarified butter / ghee (Lebanese samne)', cat: 'dairy' },
  { a: 'حليب', tr: '7aliib', en: 'milk', cat: 'dairy' },
  { a: 'شعر', tr: 'sha3r', en: 'kashta threads / stretchy cheese (lit: hair)', cat: 'dairy' },
  { a: 'أيران', tr: '2ayran', en: 'ayran / salted yogurt drink', cat: 'dairy' },
  // dishes
  { a: 'مناقيش جبنة', tr: 'manaayish jibne', en: 'cheese manakish (flatbread with cheese)', cat: 'dishes' },
  { a: 'لبنة بزيت', tr: 'labneh bi-zayt', en: 'labneh with olive oil (classic breakfast)', cat: 'dishes' },
  { a: 'معكرونة بالحليب', tr: 'ma3karoone bil-7aliib', en: 'Lebanese milk pudding / pasta in milk', cat: 'dishes' },
  { a: 'كنافة', tr: 'knefe', en: 'knafeh (cheese pastry with sweet syrup)', cat: 'dishes' },
  { a: 'فطيرة جبنة', tr: 'faTiire jibne', en: 'cheese pie / börek-style pastry', cat: 'dishes' },
  { a: 'حلاوة الجبن', tr: '7alaawet il-jibn', en: 'cheese sweet roll (Tripoli specialty)', cat: 'dishes' },
  // expressions
  { a: 'طازج متل اللبنة', tr: 'Taazij mtel il-labneh', en: 'fresh as labneh (very fresh/pure)', cat: 'expressions' },
  { a: 'بيت بلا لبنة', tr: 'bayt bila labneh', en: 'a house without labneh (something essential missing)', cat: 'expressions' },
  { a: 'اشتري الجبنة من أهلها', tr: 'ishtiri il-jibne min ahilha', en: 'buy cheese from its people (buy local/authentic)', cat: 'expressions' },
  { a: 'كتير دسم', tr: 'kitiir dasam', en: 'very rich/fatty (food or situation)', cat: 'expressions' },
  { a: 'على الريق', tr: '3al riik', en: 'on an empty stomach (how labneh is often recommended)', cat: 'expressions' },
  { a: 'أكل أصابعه', tr: '2akal 2Saabi3o', en: 'he licked his fingers (food was delicious)', cat: 'expressions' },
  { a: 'أكلة كاملة', tr: '2akle kaamle', en: 'a complete meal', cat: 'expressions' },
  { a: 'نظيف متل المرآة', tr: 'naDiif mtel il-mir2aaye', en: 'clean as a mirror (immaculate, said of fresh dairy)', cat: 'expressions' },
  { a: 'تلقيم', tr: 'tal2iim', en: 'hand-feeding (lovingly offering food)', cat: 'expressions' },
  { a: 'دبس الرمان', tr: 'dibs ir-rummaan', en: 'pomegranate molasses (key Lebanese condiment with labneh)', cat: 'expressions' }
];

const DRY_DRILLS = [
  { q: 'What is "labneh"?', opts: ['fresh milk','clotted cream','strained yogurt/labneh','halloumi'], ans: 2, exp: 'Labneh = strained yogurt — the cornerstone of Lebanese breakfast, eaten with olive oil and za\'atar on bread' },
  { q: '"Jibne 3akkawi" is...', opts: ['aged cheese balls','mild stretchy salty cheese','grillable cheese','country fresh cheese'], ans: 1, exp: '3akkawi = from Akka (Acre) — mild, slightly salty, stretchy when heated; essential in knafeh and cheese manakish' },
  { q: 'What is "7alloum"?', opts: ['yogurt drink','clotted cream','strained yogurt','halloumi (grillable)'], ans: 3, exp: '7alloum = halloumi — originally Cypriot but deeply embedded in Lebanese cuisine; grilled or fried, it squeaks!' },
  { q: '"Shanklish" is...', opts: ['fresh white cheese','stretchy cheese threads','aged spiced cheese balls','clarified butter'], ans: 2, exp: 'Shanklish = aged cheese rolled in dried herbs/chili — a mezze staple, crumbled over tomatoes and onions' },
  { q: 'What does "samne" mean?', opts: ['sour cream','milk','clarified butter/ghee','ayran'], ans: 2, exp: 'Samne = clarified butter — Lebanese samne is richer than regular butter; essential for sweets and traditional cooking' },
  { q: '"Knefe" is...', opts: ['cheese pie','cheese pastry with sweet syrup','cheese manakish','milk pudding'], ans: 1, exp: 'Knefeh = stretchy cheese (usually 3akkawi) baked under shredded pastry with orange blossom syrup — Lebanon\'s most famous sweet' },
  { q: 'What is "2ishTa"?', opts: ['butter','clotted cream/ashta','yogurt','cheese balls'], ans: 1, exp: '2ishTa = clotted cream — thick Lebanese cream from heated milk; eaten with honey and bread or used in sweets' },
  { q: '"Labneh bi-zayt" means...', opts: ['labneh with garlic','labneh with olive oil','labneh with za\'atar','labneh with honey'], ans: 1, exp: 'Bi-zayt = with oil — labneh bi-zayt (labneh + olive oil) is the quintessential Lebanese breakfast combination' },
  { q: 'What is "laban"?', opts: ['butter','cream','yogurt','milk'], ans: 2, exp: 'Laban = plain yogurt (not to be confused with labneh which is strained) — essential in Lebanese cooking and as a drink' },
  { q: '"7alaawet il-jibn" is...', opts: ['cheese manakish','cheese balls','cheese sweet roll (Tripoli)','knafeh'], ans: 2, exp: '7alaawet il-jibn = cheese sweet — a Tripoli specialty of stretchy cheese rolled with ashta and orange blossom, a Lebanese gem' },
  { q: 'What does "tal2iim" mean?', opts: ['eating alone','buying cheese','hand-feeding lovingly','a complete meal'], ans: 2, exp: 'Tal2iim = hand-feeding — the Lebanese act of lovingly putting a piece of food directly in someone\'s mouth; pure hospitality' },
  { q: '"Bayt bila labneh" means...', opts: ['a house with no guests','a house without labneh (something essential missing)','an empty fridge','a breakfast table'], ans: 1, exp: 'Bayt bila labneh = house without labneh — this expression captures how fundamental labneh is to Lebanese domestic life' },
  { q: 'What is "2ayran"?', opts: ['fresh yogurt','sour cream','salted yogurt drink','warm milk'], ans: 2, exp: '2ayran = cold salted yogurt drink — refreshing summer drink; vendors sell it as street food throughout Lebanon' },
  { q: '"2akal 2Saabi3o" means...', opts: ['he was stingy','he ate his fingers (food was amazing)','he was hungry','he shared the food'], ans: 1, exp: '2akal 2Saabi3o = he ate his fingers — highest food compliment in Lebanese culture; equivalent to "finger-licking good"' },
  { q: 'What is "jibne baladi"?', opts: ['Akkawi cheese','aged cheese balls','local fresh white cheese','halloumi'], ans: 2, exp: 'Jibne baladi = country/local cheese — fresh white cheese made locally; "baladi" (local/homemade) is always a quality signal in Lebanon' }
];

const DRY_TIPS = [
  'Lebanese labneh culture is a morning ritual: fresh bread, a bowl of labneh drizzled with olive oil, some olives, tomatoes, and za\'atar. This combination — "labneh bi-zayt" — appears on virtually every Lebanese breakfast table regardless of wealth or region.',
  'Shanklish (aged spiced cheese balls) is a Lebanese mezze essential. The cheese is aged until very pungent, then rolled in dried herbs and crushed red pepper. It\'s crumbled over chopped tomatoes and onions with olive oil — one of the most complex flavors in Lebanese cuisine.',
  'The word "baladi" (local/country) is the Lebanese seal of quality for food. "Jibne baladi," "labneh baladi," "samne baladiye" — anything described as baladi commands a premium and implies traditional, local production versus industrial alternatives.',
  '7alaawet il-jibn from Tripoli is unique globally: fresh cheese (usually akawi or ricotta-style) kneaded while hot, rolled into thin sheets, filled with ashta (clotted cream) and pistachios, then drizzled with orange blossom syrup. A uniquely Lebanese sweet.',
  'Knafeh (knefe in Lebanese) is a religious and cultural institution. In Tripoli — Lebanon\'s knafeh capital — the best shops have been operating for generations. The stretchy cheese (sometimes called "jibn na3im" or soft cheese), orange pastry, and syrup combination has no real substitute.',
  'Lebanese dairy expressions reveal how central food is to the culture. "Baddii 2aakol 2Saabi3ii" (I could eat my own fingers) is used for any transcendently good food. The phrase elevates eating from a necessity to a sensory event worthy of vivid expression.'
];
