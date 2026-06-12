// R429 — Lebanese Café Culture (cfc)
const CFC_WORDS = [
  // drinks
  { ar: 'قهوة', tr: '2ahwe', en: 'coffee (Lebanese/Arabic)', cat: 'drinks' },
  { ar: 'نسكافيه', tr: 'nescafe', en: 'instant coffee (very common)', cat: 'drinks' },
  { ar: 'إسبريسو', tr: 'espresso', en: 'espresso', cat: 'drinks' },
  { ar: 'أمريكانو', tr: 'americano', en: 'americano', cat: 'drinks' },
  { ar: 'كابوتشينو', tr: 'cappuccino', en: 'cappuccino', cat: 'drinks' },
  { ar: 'لاتيه', tr: 'latte', en: 'latte', cat: 'drinks' },
  { ar: 'شاي', tr: 'shaay', en: 'tea', cat: 'drinks' },
  { ar: 'شاي بالنعناع', tr: 'shaay bil na3na3', en: 'mint tea', cat: 'drinks' },
  { ar: 'عرق سوس', tr: '3ar2 sous', en: 'licorice drink', cat: 'drinks' },
  { ar: 'لموناضة', tr: 'limonaDa', en: 'lemonade / fresh juice', cat: 'drinks' },
  // food
  { ar: 'كنافة', tr: 'knefe', en: 'knafeh (cheese pastry)', cat: 'food' },
  { ar: 'معمول', tr: 'ma3moul', en: 'date/nut cookies', cat: 'food' },
  { ar: 'بقلاوة', tr: 'ba2laawa', en: 'baklava', cat: 'food' },
  { ar: 'كعكة', tr: 'ka3ke', en: 'cake / pastry', cat: 'food' },
  { ar: 'توست', tr: 'toast', en: 'toast (popular Lebanese breakfast)', cat: 'food' },
  { ar: 'كرواسون', tr: 'croissant', en: 'croissant', cat: 'food' },
  { ar: 'سنويش', tr: 'sandweesh', en: 'sandwich', cat: 'food' },
  { ar: 'فطور', tr: 'ftuur', en: 'breakfast', cat: 'food' },
  { ar: 'منقوشة', tr: 'man2ouche', en: 'thyme flatbread (manakeesh)', cat: 'food' },
  { ar: 'بوظة', tr: 'boza', en: 'traditional ice cream', cat: 'food' },
  // ordering phrases
  { ar: 'شو بتحب تشرب', tr: 'shu bte7ibb teshrab', en: 'what would you like to drink?', cat: 'ordering' },
  { ar: 'بدي', tr: 'biddi', en: 'I want / I would like', cat: 'ordering' },
  { ar: 'عالحساب', tr: '3al 7saab', en: 'on the bill / add to tab', cat: 'ordering' },
  { ar: 'الحساب لو سمحت', tr: 'el 7saab law sama7t', en: 'the bill please', cat: 'ordering' },
  { ar: 'تحت سيطرة', tr: 'ta7t seiTra', en: 'it\'s handled / I\'ve got it (paying)', cat: 'ordering' },
  { ar: 'عالبيت', tr: '3al beit', en: 'on the house', cat: 'ordering' },
  { ar: 'واحد متل التاني', tr: 'wa7ad mtel el taani', en: 'another one the same', cat: 'ordering' },
  { ar: 'بدون سكر', tr: 'bidoun sukkar', en: 'without sugar', cat: 'ordering' },
  { ar: 'معلق سكر', tr: 'ma3la2 sukkar', en: 'one spoon of sugar', cat: 'ordering' },
  { ar: 'تيك أواي', tr: 'take away', en: 'takeaway / to go', cat: 'ordering' },
  // café culture
  { ar: 'أرجيلة', tr: 'arjiile', en: 'hookah / shisha', cat: 'culture' },
  { ar: 'طاولة', tr: 'Taawle', en: 'table', cat: 'culture' },
  { ar: 'تراس', tr: 'terrace', en: 'terrace / outdoor seating', cat: 'culture' },
  { ar: 'جلسة', tr: 'jalse', en: 'sitting session / hangout', cat: 'culture' },
  { ar: 'وايفاي', tr: 'wifi', en: 'WiFi (Lebanese cafés are WiFi hubs)', cat: 'culture' },
  { ar: 'كهربا', tr: 'kahraba', en: 'electricity (precious for charging)', cat: 'culture' },
  { ar: 'شاحن', tr: 'shaa7en', en: 'charger', cat: 'culture' },
  { ar: 'رصيد', tr: 'raSiid', en: 'credit / balance (phone top-up at cafés)', cat: 'culture' },
  { ar: 'سهر', tr: 'sahar', en: 'staying up late / nightlife', cat: 'culture' },
  { ar: 'أوضة', tr: 'oDa', en: 'private room (VIP café room)', cat: 'culture' },
];

const CFC_DRILLS = [
  {
    q: 'A Lebanese friend says "biddi 2ahwe ma3 ma3la2 sukkar" — what do they want?',
    opts: ['coffee with no sugar', 'coffee with one spoon of sugar', 'tea with milk', 'coffee with two sugars'],
    correct: 1,
    note: '"Biddi 2ahwe ma3 ma3la2 sukkar" = "I want coffee with one spoon of sugar." Lebanese coffee orders are precise — "ziyeede" (extra sugar), "wasaT" (medium), "ma3la2" (one spoon), "sada" (plain/bitter) are all distinct.'
  },
  {
    q: 'What is "man2ouche" (منقوشة)?',
    opts: ['a type of coffee', 'thyme flatbread', 'baklava', 'a Lebanese cocktail'],
    correct: 1,
    note: '"Man2ouche" (plural: mana2iish) is Lebanon\'s street breakfast — flatbread topped with za3tar (thyme-oil mix), cheese, or kishk. Lebanese café culture often includes a man2ouche with morning coffee from a nearby furn (bakery).'
  },
  {
    q: 'What does "3al beit" (عالبيت) mean in a café context?',
    opts: ['take it home', 'on the house / free', 'bring it to the table', 'bill please'],
    correct: 1,
    note: '"3al beit" (on the house) is Lebanese hospitality in action. A café owner might offer a round of coffee "3al beit" to regulars or when celebrating. It reflects the cultural importance of generosity and relationship-building.'
  },
  {
    q: 'What is "arjiile" (أرجيلة)?',
    opts: ['a type of pastry', 'a coffee blend', 'hookah / shisha', 'outdoor seating'],
    correct: 2,
    note: '"Arjiile" (hookah/shisha) is a staple of Lebanese café culture. Lebanese cafés often have arjiile available, and long sessions over arjiile + coffee are a popular social ritual, especially in the evening. Ordering flavors like "tuffaa7" (apple) or "3inab" (grape) is part of the experience.'
  },
  {
    q: 'Why is "kahraba" (كهربا/electricity) relevant in a Lebanese café?',
    opts: ['cafés sell electricity bills', 'cafés are electricity outage shelters and phone charging spots', 'cafés make coffee with generators only', 'café lights are always on'],
    correct: 1,
    note: 'During Lebanon\'s ongoing electricity crisis (2+ hours state power per day), cafés with generators became essential social hubs. People come not just for coffee but to charge phones, use WiFi, and wait out the "maqTa3" (power cut). Some cafés advertise "kahraba marta7a" (stable electricity).'
  },
  {
    q: 'What does "jalse" (جلسة) mean in Lebanese social context?',
    opts: ['a formal meeting', 'a sitting session / casual hangout', 'a business lunch', 'an evening dinner'],
    correct: 1,
    note: '"Jalse" (session/sitting) is the quintessential Lebanese social activity — sitting together with no fixed agenda, drinking coffee or tea, smoking arjiile, and talking for hours. "Yalla n3amel jalse" (let\'s have a jalse) is an invitation to leisurely hang out.'
  },
  {
    q: 'What does "boza" (بوظة) refer to in a Lebanese café?',
    opts: ['a bitter coffee blend', 'traditional stretchy ice cream', 'a fruit juice', 'a type of cookie'],
    correct: 1,
    note: '"Boza" (بوظة) is Lebanon\'s traditional ice cream, known for its stretchy texture and mastic/rose water flavor. Famous boza shops in Tripoli and Beirut are institutions. Unlike regular ice cream, it\'s pounded and stretched — a spectacle in itself.'
  },
  {
    q: 'How do you say "the bill please" in Lebanese?',
    opts: ['biddi 2ahwe', 'el 7saab law sama7t', '3al beit', 'shu bte7ibb'],
    correct: 1,
    note: '"El 7saab law sama7t" is the standard way to ask for the bill. You can also say "7saab" alone with a gesture. Lebanese café etiquette: arguing over who pays is common and expected — "ta7t seiTra" (I\'ve got it) is the response when you insist on paying.'
  },
  {
    q: 'What is "nescafe" (نسكافيه) in Lebanon?',
    opts: ['fresh-brewed espresso', 'instant coffee, extremely popular', 'a brand of tea', 'cold brew coffee'],
    correct: 1,
    note: '"Nescafe" in Lebanon refers generically to any instant coffee — it\'s so ubiquitous the brand became the word. Many Lebanese homes and smaller cafés serve nescafe as the default option, often made with hot milk. Ordering "2ahwe" usually gets you Arabic/Lebanese coffee (cardamom-spiced), while "nescafe" gets you instant.'
  },
  {
    q: 'What is "knefe" (كنافة) in a Lebanese café?',
    opts: ['a type of coffee', 'a cheese-filled sweet pastry', 'a savory meat pie', 'a fruit dessert'],
    correct: 1,
    note: '"Knefe" (knafeh) is a iconic Lebanese/Levantine sweet: shredded wheat or semolina dough filled with stretchy cheese, soaked in sugar syrup, often topped with pistachios. Tripoli\'s knefe is famous throughout the Arab world. Best eaten warm, fresh from the tray.'
  },
];

const CFC_TIPS = [
  {
    title: '☕ The Two Coffees of Lebanon',
    body: 'Lebanon has two distinct coffee cultures. "2ahwe 3arabiyye" (Arabic/Lebanese coffee) is cardamom-spiced, served in tiny cups without sugar — a symbol of hospitality. "2ahwe franji" (foreign coffee) covers espresso, cappuccino, and nescafe. When a Lebanese host offers "2ahwe," they mean the Arabic version. In cafés, specifying which you want is important.'
  },
  {
    title: '🏙️ Café as Living Room',
    body: 'Lebanese cafés function as extended living rooms — especially for young people living with family in small apartments. Meeting at a café is the default social option. The phrase "yalla 3a\'l cafe" (let\'s go to the café) implies hours, not a quick stop. WiFi, arjiile, and the jalse culture mean some customers sit for 3-4 hours over one coffee.'
  },
  {
    title: '💡 The Generator Economy',
    body: 'Since Lebanon\'s electricity crisis deepened, cafés with reliable generators (moulad) became premium spots. Some explicitly advertise "kahraba 24/7." Customers charge phones, laptops, and even car batteries. Cafés near universities doubled as study halls with power outlets. The "3al charger" (on the charger) joke — meaning you\'re only there for electricity — is very Lebanese.'
  },
  {
    title: '🤝 Paying the Bill',
    body: 'Bill-paying in Lebanese cafés is a social performance. When the bill arrives, a scramble to pay ensues — each person insisting "ta7t seiTra" (I\'ve got it) or "3al hesaabi" (on my account). Whoever grabs the bill first "wins." Splitting is less common than in Western cultures — the usual expectation is that someone hosts (and the next time, someone else does). Offering "3al beit" (on the house) by the café owner is a gesture of respect to regulars.'
  },
  {
    title: '🌿 Arjiile Etiquette',
    body: '"Arjiile" orders come with coal management — a waiter tends the coals throughout your session. Popular flavors: "tuffaa7" (apple), "3inab" (grape), "na3na3 w toote" (mint & strawberry). It\'s considered rude to bring your own arjiile to a café. At more upscale places, ordering arjiile without also ordering food or drinks is frowned upon. Sessions can last 2+ hours.'
  },
];

const CFC_ABOUT = 'Lebanese café culture (thaqaafet el café) is an institution — arguably the country\'s most beloved social ritual. From traditional ahwe shops in old souks to hipster specialty roasters in Gemmayzeh and Mar Mikhael, cafés serve as Lebanon\'s default social infrastructure. During the economic crisis, their role expanded: with home electricity cuts of 18+ hours daily, cafés with generators became essential lifelines — places to charge phones, use WiFi, work, and simply escape the heat. The cultural hallmarks of Lebanese café culture: long jalsat (hangouts), arjiile smoke, the battle to pay the bill, and the specific art of ordering your coffee exactly right (ziyeede/wasaT/sada/ma3la2).';
