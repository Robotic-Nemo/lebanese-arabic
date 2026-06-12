// R810 — NEW FEATURE: Lebanese Street Food & Vendors (vnd)

const VND_CATS = ['food','vendors','phrases','haggling'];

const VND_WORDS = [
  // food
  { a: 'مناقيش', tr: 'manaayish', en: 'manakish (flatbread with za3tar/cheese)', cat: 'food' },
  { a: 'كعك', tr: 'ka3k', en: 'sesame bread ring (street snack)', cat: 'food' },
  { a: 'فلافل', tr: 'falafel', en: 'falafel (fried chickpea fritters)', cat: 'food' },
  { a: 'شاورما', tr: 'shawarma', en: 'shawarma (meat wrap)', cat: 'food' },
  { a: 'حمص', tr: '7ummus', en: 'hummus', cat: 'food' },
  { a: 'سفيحة', tr: 'sfiia', en: 'meat flatbread (Lebanese pizza)', cat: 'food' },
  { a: 'عصير', tr: '3asiir', en: 'juice / fresh-squeezed juice', cat: 'food' },
  // vendors
  { a: 'كاشو', tr: 'kaashu', en: 'cart vendor / street seller', cat: 'vendors' },
  { a: 'فرن', tr: 'furn', en: 'bakery / oven (street bakery stall)', cat: 'vendors' },
  { a: 'بسطة', tr: 'basta', en: 'street stall / cart', cat: 'vendors' },
  { a: 'سوق', tr: 'suu2', en: 'market / souk', cat: 'vendors' },
  { a: 'صحن', tr: 'Sa7n', en: 'plate / portion', cat: 'vendors' },
  { a: 'مُعلّم', tr: 'mu3allim', en: 'master craftsman / respected vendor (term of address)', cat: 'vendors' },
  { a: 'عربية', tr: '3arabiyye', en: 'cart / food cart', cat: 'vendors' },
  // phrases
  { a: 'بكم هيدا؟', tr: 'bi-2addeeish hayda', en: 'how much is this?', cat: 'phrases' },
  { a: 'عطيني واحدة', tr: '3Tiinii waa7de', en: 'give me one', cat: 'phrases' },
  { a: 'بدي مناقيش', tr: 'baddii manaayish', en: 'I want manakish', cat: 'phrases' },
  { a: 'حار أو بارد؟', tr: '7aar aw baarid', en: 'hot or cold?', cat: 'phrases' },
  { a: 'تكرم', tr: 'tikram', en: 'you\'re welcome / as you wish (vendor response)', cat: 'phrases' },
  { a: 'على طول', tr: '3al tuul', en: 'right away / straight ahead', cat: 'phrases' },
  // haggling
  { a: 'غالي كتير', tr: 'ghaalii kitiir', en: 'very expensive', cat: 'haggling' },
  { a: 'رخّص شوي', tr: 'rakhkhaS shwayy', en: 'lower the price a little', cat: 'haggling' },
  { a: 'آخر سعر', tr: '2aakher si3r', en: 'final price / best price', cat: 'haggling' },
  { a: 'بكفيني', tr: 'biikfiinii', en: 'that\'s enough (portion) / that\'ll do', cat: 'haggling' },
  { a: 'زيدني شوي', tr: 'ziidnii shwayy', en: 'give me a little more', cat: 'haggling' },
  { a: 'ما في أرخص', tr: 'maa fii arkhaS', en: 'nothing cheaper / that\'s the lowest', cat: 'haggling' },
  { a: 'بالعافية', tr: 'bil-3aafye', en: 'enjoy your meal (said to someone eating)', cat: 'haggling' },
  { a: 'ألف هنا', tr: '2alf hana', en: 'a thousand wellbeings (said after eating)', cat: 'haggling' }
];

const VND_DRILLS = [
  { q: 'What is "manaayish"?', opts: ['falafel wrap','manakish flatbread','sesame ring','hummus plate'], ans: 1, exp: 'Manaayish = manakish — Lebanese flatbread topped with za3tar or cheese, the classic street breakfast' },
  { q: '"Basta" means...', opts: ['market price','street stall/cart','bakery','meat wrap'], ans: 1, exp: 'Basta = street stall — the iconic Lebanese sidewalk vendor with a cart of goods' },
  { q: 'What does "furn" mean?', opts: ['vendor','market','bakery/oven stall','portion'], ans: 2, exp: 'Furn = oven/bakery — neighborhood bread bakeries are central to Lebanese street life' },
  { q: '"Bi-2addeeish hayda?" means...', opts: ['give me one','is this fresh?','how much is this?','where is the market?'], ans: 2, exp: 'Bi-2addeeish = how much/for how much — the essential shopping question' },
  { q: 'What is "ka3k"?', opts: ['falafel','hummus','sesame bread ring','shawarma'], ans: 2, exp: 'Ka3k = sesame-crusted bread rings sold by street vendors, often with za3tar or cheese inside' },
  { q: '"Ghaalii kitiir" means...', opts: ['a little cheaper','very expensive','final price','enjoy your meal'], ans: 1, exp: 'Ghaalii = expensive; kitiir = a lot — the opening move in any Lebanese haggling session' },
  { q: 'What does "mu3allim" mean to a vendor?', opts: ['customer','market','master/respected sir','plate'], ans: 2, exp: 'Mu3allim = master — addressing a vendor as mu3allim shows respect and often gets you a better deal' },
  { q: '"2alf hana" is said...', opts: ['while ordering food','to a vendor before buying','after someone finishes eating','when the price is too high'], ans: 2, exp: '2alf hana = a thousand wellbeings — said to someone who just finished eating, similar to "bon appétit" retroactively' },
  { q: 'What is "sfiia"?', opts: ['hummus','meat flatbread/Lebanese pizza','falafel wrap','sesame ring'], ans: 1, exp: 'Sfiia (sfee7a) = meat flatbread — thin dough topped with spiced meat, a Tripoli and street-food specialty' },
  { q: '"Rakhkha9 shwayy" means...', opts: ['give me more','no thank you','lower the price a little','that\'s enough'], ans: 2, exp: 'Rakhkhas = to cheapen; shwayy = a little — polite haggling phrase for any Lebanese market' },
  { q: 'What does "tikram" mean when a vendor says it?', opts: ['the price is final','you\'re welcome / as you wish','we\'re out of stock','come back later'], ans: 1, exp: 'Tikram = you\'re honored/welcome — a gracious vendor response meaning "your wish is my command"' },
  { q: '"3Tiinii waa7de" means...', opts: ['how much?','give me one','I want two','no thank you'], ans: 1, exp: '3Tiinii = give me (imperative); waa7de = one — direct ordering style common at street stalls' },
  { q: 'What is "3arabiyye" in street context?', opts: ['market stall','food cart','bakery','vendor'], ans: 1, exp: '3arabiyye = cart — pushed or parked street food carts are called 3arabiyye across Lebanon' },
  { q: '"2aakher si3r" means...', opts: ['fresh price','final/best price','expensive price','fair price'], ans: 1, exp: '2aakher si3r = last price — when a vendor says this, it means no more negotiation' },
  { q: '"Bil-3aafye" is said...', opts: ['when food arrives','to someone who is eating','when paying','when ordering'], ans: 1, exp: 'Bil-3aafye = enjoy (lit: with health) — said to someone in the middle of their meal as a blessing' }
];

const VND_TIPS = [
  'Lebanese street food culture revolves around the "furn" (bakery) which opens at dawn. Fresh manaayish (za3tar flatbread) for breakfast is a near-sacred ritual in Lebanese neighborhoods.',
  '"Ka3k" sellers patrol Beirut streets with trays on their heads calling "ka3k! ka3k!" — the sesame bread rings are sold with za3tar packets and are the Lebanese equivalent of a street pretzel.',
  'Addressing a vendor as "mu3allim" (master) transforms the interaction — it signals respect for their craft and almost always results in extra portions or slightly better prices.',
  'Lebanese haggling etiquette: always open with "ghaalii kitiir" (very expensive), expect "haada r-ra7as" (this is cheap) back, then meet in the middle. Walking away is the ultimate negotiation tool.',
  'The word "basta" has entered Lebanese culture as a metaphor for any chaotic but vibrant arrangement — a messy desk might be called a "basta" affectionately.',
  '"2alf hana" (a thousand wellbeings) and "bil-3aafye" (enjoy your meal) are part of Lebanese food blessing culture — food is never eaten in silence, and saying these phrases is basic courtesy.'
];
