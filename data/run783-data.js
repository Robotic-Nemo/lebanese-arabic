// R783 — NEW FEATURE: Lebanese Arabic Eid & Religious Holidays (eid)

const EID_CATS = ['greetings','rituals','food','phrases'];

const EID_WORDS = [
  // greetings
  { ar: 'عيد مبارك', tr: '3id mubarak', en: 'blessed Eid / happy Eid', cat: 'greetings' },
  { ar: 'كل سنة وأنت بخير', tr: 'kell sene w inta bkhir', en: 'may every year find you well', cat: 'greetings' },
  { ar: 'مبروك', tr: 'mabruk', en: 'congratulations / blessings', cat: 'greetings' },
  { ar: 'الله يسلّمك', tr: 'alla ysallmak', en: 'God keep you safe (response to greetings)', cat: 'greetings' },
  { ar: 'صحة وسلامة', tr: 'Se77a w salame', en: 'health and safety / good wishes', cat: 'greetings' },
  { ar: 'تقبّل الله', tr: 'ta2abbal alla', en: 'may God accept (your deeds)', cat: 'greetings' },
  { ar: 'منّك وفيك', tr: 'minnak w fiik', en: 'same to you (polite reply)', cat: 'greetings' },
  // rituals
  { ar: 'صلاة العيد', tr: 'Salat l-3id', en: 'Eid prayer', cat: 'rituals' },
  { ar: 'زكاة الفطر', tr: 'zakat l-fiTr', en: 'Eid charity (fitrana)', cat: 'rituals' },
  { ar: 'صيام', tr: 'Siyam', en: 'fasting', cat: 'rituals' },
  { ar: 'رمضان', tr: 'rmaDan', en: 'Ramadan', cat: 'rituals' },
  { ar: 'سحور', tr: 'su7ur', en: 'pre-dawn meal (suhoor)', cat: 'rituals' },
  { ar: 'إفطار', tr: '2ifTar', en: 'breaking fast / iftar', cat: 'rituals' },
  { ar: 'تكبير', tr: 'takbiir', en: 'saying Allahu Akbar', cat: 'rituals' },
  // food
  { ar: 'معمول', tr: 'ma3mul', en: 'Eid cookie (date/nut filled)', cat: 'food' },
  { ar: 'كعك العيد', tr: 'ka3k l-3id', en: 'Eid ring cake', cat: 'food' },
  { ar: 'قطايف', tr: '2aTayef', en: 'Ramadan stuffed pancakes', cat: 'food' },
  { ar: 'سمبوسك', tr: 'sambusak', en: 'filled pastry pockets', cat: 'food' },
  { ar: 'حلاوة', tr: '7alawi', en: 'sweets / candy', cat: 'food' },
  { ar: 'لحمة', tr: 'la7me', en: 'meat (Eid al-Adha sacrifice)', cat: 'food' },
  { ar: 'ربح العيد', tr: 'rba7 l-3id', en: 'Eid gift money (given to kids)', cat: 'food' },
  // phrases
  { ar: 'عيد الفطر', tr: '3id l-fiTr', en: 'Eid al-Fitr (end of Ramadan)', cat: 'phrases' },
  { ar: 'عيد الأضحى', tr: '3id l-2aDHa', en: 'Eid al-Adha (feast of sacrifice)', cat: 'phrases' },
  { ar: 'رح نصلي', tr: 'ra7 nSalli', en: "we're going to pray", cat: 'phrases' },
  { ar: 'رمضان كريم', tr: 'rmaDan kariim', en: 'Ramadan is generous (greeting)', cat: 'phrases' },
  { ar: 'الله أكبر', tr: 'alla 2akbar', en: 'God is great (takbeer)', cat: 'phrases' },
  { ar: 'أهل وسهل', tr: '2ahlen w sahlen', en: 'welcome (during Ramadan/Eid visits)', cat: 'phrases' },
  { ar: 'برمضان', tr: 'bi rmaDan', en: 'during Ramadan', cat: 'phrases' },
];

const EID_DRILLS = [
  { q: 'How do you say "happy Eid" in Lebanese?', opts: ['kell sene w inta bkhir','3id mubarak','ta2abbal alla','mabruk ktir'], a: 1 },
  { q: 'كل سنة وأنت بخير means:', opts: ['happy fasting','may every year find you well','God keep you safe','blessings'], a: 1 },
  { q: 'What is the pre-dawn Ramadan meal called?', opts: ['2ifTar','su7ur','Salat l-3id','Siyam'], a: 1 },
  { q: 'إفطار refers to:', opts: ['fasting','suhoor','breaking fast/iftar','Eid prayer'], a: 2 },
  { q: 'معمول is:', opts: ['Ramadan pancakes','Eid cookie filled with dates/nuts','ring cake','stuffed pastry'], a: 1 },
  { q: 'قطايف are:', opts: ['Eid cookies','ring cakes','Ramadan stuffed pancakes','meat dishes'], a: 2 },
  { q: 'عيد الفطر is:', opts: ['Eid al-Adha','end-of-Ramadan Eid','feast of sacrifice','Ramadan night'], a: 1 },
  { q: 'What does تقبّل الله mean?', opts: ['God is great','may God accept your deeds','same to you','blessings'], a: 1 },
  { q: 'زكاة الفطر is:', opts: ['Eid prayer','fasting','Eid charity (fitrana)','takbeer'], a: 2 },
  { q: 'How do you say "we\'re going to pray" in Lebanese?', opts: ['ra7 nSalli','3id mubarak','bi rmaDan','alla 2akbar'], a: 0 },
  { q: 'ربح العيد refers to:', opts: ['sacrifice meat','Eid sweets','Eid gift money for kids','charity'], a: 2 },
  { q: 'What is تكبير?', opts: ['fasting','saying Allahu Akbar','Eid prayer','ring cake'], a: 1 },
  { q: 'الله يسلّمك means:', opts: ['happy Eid','God keep you safe','may every year...','same to you'], a: 1 },
  { q: 'رمضان كريم translates to:', opts: ['Ramadan is generous','Ramadan fasting','happy Ramadan','end of Ramadan'], a: 0 },
  { q: 'منّك وفيك is used to say:', opts: ['happy Eid','same to you (polite reply)','God accept','blessings'], a: 1 },
];

const EID_TIPS = [
  '🌙 In Lebanon both Eid al-Fitr and Eid al-Adha are public holidays regardless of religion — Christian neighbors often visit and share ma3mul cookies.',
  '🍪 Ma3mul (معمول) come in three types: with dates (bil tamr), walnuts (bil joz), or pistachios (bil fiste2) — each family has a secret recipe.',
  '💰 "Rba7 l-3id" (ربح العيد) literally means "Eid profit" — it\'s the cash gift adults give children on Eid morning.',
  '🕌 Lebanese say "rmaDan kariim" (generous Ramadan) while Gulf Arabs say "rmaDan mubarak" — both greetings are understood.',
  '🎉 The standard reply to "3id mubarak" is "alla ysallmak" (ألله يسلّمك) or "minnak w fiik" (منّك وفيك).',
  '🍽️ Iftar in Lebanon always starts with dates and water (tradition), then soup, fattoush, and eventually the main meal — the table fills up slowly.',
];
