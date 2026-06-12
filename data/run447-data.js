// R447 — Lebanese Nature & Geography (geo)
const GEO_WORDS = [
  // mountains & highlands
  { ar: 'جبل', tr: 'jabal', en: 'mountain', cat: 'terrain' },
  { ar: 'جبل لبنان', tr: 'jabal lubnaan', en: 'Mount Lebanon (the mountain range)', cat: 'terrain' },
  { ar: 'قمة', tr: '2imme', en: 'summit / peak', cat: 'terrain' },
  { ar: 'وادي', tr: 'waadi', en: 'valley / wadi', cat: 'terrain' },
  { ar: 'حرش', tr: '7arash', en: 'forest / woodland', cat: 'terrain' },
  { ar: 'ثلج', tr: 'talj', en: 'snow', cat: 'terrain' },
  { ar: 'عرز', tr: '2arz', en: 'cedar tree (national symbol)', cat: 'terrain' },
  { ar: 'غابة الأرز', tr: 'ghaabit el 2arz', en: 'Cedar Forest (Bcharre)', cat: 'terrain' },
  { ar: 'تل', tr: 'tall', en: 'hill / mound', cat: 'terrain' },
  { ar: 'منحدر', tr: 'mun7adar', en: 'slope / hillside', cat: 'terrain' },
  // coast & sea
  { ar: 'بحر', tr: 'ba7ar', en: 'sea / ocean', cat: 'coast' },
  { ar: 'شاطئ', tr: 'shaaTi2', en: 'beach / shore', cat: 'coast' },
  { ar: 'صخرة', tr: 'Sakhre', en: 'rock / cliff', cat: 'coast' },
  { ar: 'موج', tr: 'mawj', en: 'waves', cat: 'coast' },
  { ar: 'ميناء', tr: 'miinaa2', en: 'port / harbor', cat: 'coast' },
  { ar: 'خليج', tr: 'khaliij', en: 'bay / gulf', cat: 'coast' },
  { ar: 'رأس', tr: 'raas', en: 'cape / headland (also: head)', cat: 'coast' },
  // rivers & water
  { ar: 'نهر', tr: 'nahr', en: 'river', cat: 'water' },
  { ar: 'نبع', tr: 'nab3', en: 'spring / natural water source', cat: 'water' },
  { ar: 'شلال', tr: 'shallaal', en: 'waterfall', cat: 'water' },
  { ar: 'بحيرة', tr: 'bu7ayra', en: 'lake', cat: 'water' },
  { ar: 'ينبوع', tr: 'yinbuug', en: 'natural spring / fountain', cat: 'water' },
  // Lebanese geographic regions
  { ar: 'البقاع', tr: 'el bi2aa3', en: 'the Bekaa Valley (inland agricultural plain)', cat: 'regions' },
  { ar: 'الجنوب', tr: 'el januub', en: 'the South (southern Lebanon)', cat: 'regions' },
  { ar: 'الشمال', tr: 'el shimaal', en: 'the North (northern Lebanon)', cat: 'regions' },
  { ar: 'جبل لبنان', tr: 'jabal lubnaan', en: 'Mount Lebanon (central district)', cat: 'regions' },
  { ar: 'الساحل', tr: 'el saa7il', en: 'the Coast / the coastal strip', cat: 'regions' },
  { ar: 'الضيعة', tr: 'el Day3a', en: 'the village (Lebanese affection for hometown)', cat: 'regions' },
  // weather & seasons
  { ar: 'صيف', tr: 'Sayf', en: 'summer', cat: 'seasons' },
  { ar: 'شتا', tr: 'shita', en: 'winter (colloquial)', cat: 'seasons' },
  { ar: 'ربيع', tr: 'rabiig', en: 'spring', cat: 'seasons' },
  { ar: 'خريف', tr: 'khariif', en: 'autumn / fall', cat: 'seasons' },
  { ar: 'مطر', tr: 'maTar', en: 'rain', cat: 'seasons' },
  { ar: 'عاصفة', tr: '3aaSife', en: 'storm', cat: 'seasons' },
  { ar: 'ضباب', tr: 'Dabaab', en: 'fog / mist', cat: 'seasons' },
  // activities & culture
  { ar: 'تسلق جبال', tr: 'tasalla2 jibaal', en: 'mountain climbing / hiking', cat: 'activities' },
  { ar: 'تزلج', tr: 'tazalluj', en: 'skiing', cat: 'activities' },
  { ar: 'سباحة', tr: 'sibaa7a', en: 'swimming', cat: 'activities' },
  { ar: 'مشي تريل', tr: 'mashi triil', en: 'trail hiking', cat: 'activities' },
  { ar: 'رحلة', tr: 'ri7le', en: 'trip / excursion', cat: 'activities' },
  { ar: 'طريق اللبنانيين', tr: 'Tariiq el lubnaaiyyiin', en: 'Lebanon Mountain Trail (LMT)', cat: 'activities' },
];

const GEO_DRILLS = [
  {
    q: 'What is "el bi2aa3" (البقاع) and what is it famous for?',
    opts: ['the Lebanese coast', 'the Bekaa Valley — Lebanon\'s main agricultural plain, also known for wine', 'the northern mountains', 'Beirut\'s eastern suburbs'],
    correct: 1,
    note: '"El bi2aa3" (the Bekaa Valley) is Lebanon\'s interior agricultural heartland, running north-south between the Lebanon and Anti-Lebanon mountain ranges. It produces most of Lebanon\'s fruits, vegetables, and wine. The Bekaa\'s wineries (Ksara, Musar, Massaya) are internationally recognized. "Roo7 3a l bi2aa3" = going to the Bekaa, often meaning a day trip for fresh produce, a winery visit, or visiting Baalbek\'s Roman temples.'
  },
  {
    q: 'What is "el Day3a" (الضيعة) and what does it mean culturally to Lebanese?',
    opts: ['a village (with deep emotional attachment — the ancestral hometown)', 'a type of Lebanese house', 'an agricultural field', 'a mountain pass'],
    correct: 0,
    note: '"El Day3a" (the village) is one of the most emotionally charged words in Lebanese culture. Every Lebanese family has a "Day3a" — an ancestral village they identify with, even if they\'ve lived in Beirut or abroad for generations. "Shu Day3tak?" (what\'s your village?) is one of the first questions Lebanese ask each other — it defines regional identity, religion, and family networks. Going "3a l Day3a" in summer is a Lebanese institution: cooler weather, family gatherings, fresh air.'
  },
  {
    q: 'What is "el 2arz" (العرز) and why is it Lebanon\'s national symbol?',
    opts: ['the cedar tree — on the Lebanese flag, ancient symbol of endurance', 'a type of Lebanese mountain food', 'the national bird', 'a Lebanese landmark tower'],
    correct: 0,
    note: '"El 2arz" (the cedar) is Lebanon\'s oldest symbol. The Cedar of Lebanon appears on the national flag and has been a symbol of the country since biblical times — cedar wood built Solomon\'s Temple and Egyptian pharaoh\'s ships. The "Ghaabit el 2arz" (Cedar Forest) near Bcharre in North Lebanon contains some of the oldest trees in the world, some over 1,000 years old. "Ard el 2arz" (Land of the Cedars) is a poetic name for Lebanon.'
  },
  {
    q: 'What does "nab3" (نبع) mean and what role do springs play in Lebanese geography?',
    opts: ['a type of cedar wood', 'a natural spring — essential to Lebanese villages and agriculture', 'a river tributary', 'a well / water pump'],
    correct: 1,
    note: '"Nab3" (natural spring) is central to Lebanese geography. Lebanon has hundreds of natural springs — water emerges from the limestone mountains after snow melts or rain percolates. Many Lebanese villages are named after their springs: "Nab3el," "Ain Zhalta," "Ain el Rihaane." The word "ain" (eye/spring) in place names always indicates a natural water source. Lebanese springs feed the Litani and other rivers. With the infrastructure crisis, many still rely on spring water.'
  },
  {
    q: 'What is Lebanon\'s unique geographic feature that allows "skiing in the morning, swimming in the afternoon"?',
    opts: ['a coincidence of seasons', 'the extreme vertical range — mountains close to coast allows skiing at 2000m while beaches are 40 minutes away', 'underground climate systems', 'the Bekaa Valley\'s microclimate'],
    correct: 1,
    note: 'Lebanon\'s geography is extraordinary: the coastal strip is at sea level, the Lebanon mountains reach 3,088m (Qurnat as Sawda\'), and the Bekaa Valley sits at 900m — all within 80km. This creates a "ski and swim" culture unique in the Arab world. Faraya and Mzaar ski resorts are 1.5 hours from Beirut\'s beaches. The phrase "tazalluj w sibaa7a b nafs el youm" (ski and swim the same day) is a source of Lebanese national pride.'
  },
  {
    q: 'What is "el saa7il" (الساحل) in Lebanese geography?',
    opts: ['the inland plains', 'the coastal strip — the narrow Mediterranean coast where most Lebanese cities sit', 'the border region', 'the mountain foothills'],
    correct: 1,
    note: '"El saa7il" (the coast / coastal zone) is the narrow strip along the Mediterranean where most of Lebanon\'s major cities sit: Tripoli, Byblos (Jbeil), Jounieh, Beirut, Sidon (Saida), Tyre (Sour). The coast is only 220km long but houses most of Lebanon\'s 5 million people. "3a l saa7il" = at the sea/coast. Lebanese coastal culture means seafood restaurants, "dbaaych" (beach clubs), and summer traffic jams on the coastal road.'
  },
  {
    q: 'What does "waadi" (وادي) mean and which Lebanese valleys are famous?',
    opts: ['a mountain peak', 'a valley / gorge — Lebanon has dramatic river valleys', 'a coastal inlet', 'a forested plateau'],
    correct: 1,
    note: '"Waadi" (valley / wadi) — Lebanon\'s most famous is "Waadi Qadisha" (Holy Valley) near Bcharre, a UNESCO World Heritage site with ancient cliff-hugging monasteries. "Waadi el Jawz" is a Beirut neighborhood. "Waadi 7mara" (donkey valley) is a joking name. Lebanon\'s dramatic river valleys (nahr) were carved by the Litani, Nahr Ibrahim, and other rivers through limestone mountains — creating stunning gorges used for hiking and adventure tourism.'
  },
  {
    q: 'What does "ri7le" (رحلة) mean and what is a typical Lebanese "ri7le"?',
    opts: ['a religious pilgrimage only', 'a trip / excursion — especially the beloved Lebanese day-trip tradition', 'a long international journey', 'a boat trip'],
    correct: 1,
    note: '"Ri7le" (trip/excursion) describes Lebanon\'s deep culture of day trips. Lebanese organize group "ri7laat" constantly — school trips to Baalbek, family outings to the Bekaa, friends driving to a mountain village for meze and fresh air. "Mniimshi 3a ri7le?" (shall we go on a trip?) is a weekend staple. The Lebanon Mountain Trail (LMT) — a 480km hiking trail across the country — turned "mashi triil" into a national movement.'
  },
  {
    q: 'What is "talj" (ثلج) and why do Lebanese have a unique relationship with snow?',
    opts: ['a hot summer wind', 'snow — a beloved symbol of Lebanese highlands and winter culture', 'fog / mist on the mountain', 'the dry season (no snow)'],
    correct: 1,
    note: '"Talj" (snow) is precious to Lebanese. Snowfall in the mountains (visible from Beirut on clear days) signals the ski season and winter tourism. Lebanese villages at altitude measure their "talj" proudly. "Shu fi talj?" (is there snow?) is a winter Friday question before heading to Faraya. Freshly pressed snow-melted water feeds springs that supply the country. In crisis years, some Lebanese even used snow to cool refrigerators during power cuts — "talj Tab3i" (natural ice).'
  },
  {
    q: 'What does "shallaal" (شلال) mean and which is Lebanon\'s most famous?',
    opts: ['a mountain road / switchback', 'a waterfall — Lebanon has several scenic waterfalls', 'a rocky beach', 'a mountain spring'],
    correct: 1,
    note: '"Shallaal" (waterfall) — Lebanon\'s most famous is "Shallaal Baalaa" (Balaa Sinkhole/Waterfall) near Tannourine, a geological wonder where a river disappears into a natural karst sinkhole. "Shallaal Aafqa" near Afqa is near the legendary Adonis Grotto spring. Lebanon\'s diverse geology (limestone karst) creates sinkholes, caves (Jeita Grotto), and waterfalls throughout the mountains. These are major domestic tourism destinations for Lebanese families seeking nature.'
  },
];

const GEO_TIPS = [
  {
    title: '🏔️ Lebanon\'s Geographic Miracle',
    body: 'Lebanon is one of the most geographically diverse countries on Earth relative to its size (10,452 km² — smaller than Connecticut). Within 80km you can go from Mediterranean beaches to 3,000m mountain peaks, cross the Bekaa Valley, and reach the Anti-Lebanon range. Four distinct climate zones coexist. The Lebanon Mountains intercept Mediterranean moisture, creating the "green wedge" of the Middle East. This diversity shaped Lebanese culture: mountain vs. coastal identities, seasonal migration patterns, agricultural diversity (citrus on coast, wine in Bekaa, apples in mountains), and the unique "ski and swim" lifestyle.'
  },
  {
    title: '🌲 The Cedar & Lebanese National Identity',
    body: 'The Cedar of Lebanon (arz el lubnaan) has been Lebanon\'s symbol for 3,000 years. Ancient Phoenicians exported cedar to Egypt and Mesopotamia — it built temples and warships. The Bible mentions Lebanese cedar 75 times. The Bcharre cedar forest (Ghaabit el 2arz), now a UNESCO World Heritage Site, contains trees estimated at 1,000-3,000 years old. The cedar appears on the Lebanese flag (white background, two red stripes, green cedar). Despite deforestation over millennia, reforestation projects are slowly restoring cedar forests. "Ard el 2arz" (Land of the Cedars) is Lebanon\'s poetic name.'
  },
  {
    title: '⛷️ Ski Culture & Mountain Life',
    body: 'Lebanon has six ski resorts — unusual for the Arab world. Faraya-Mzaar (1,850-2,465m) is the largest and closest to Beirut (1.5h drive). Cedars near Bcharre is oldest. Skiing culture is class-linked: weekends at ski chalets, après-ski at mountain restaurants, fresh snow from December-March in good years. "Tazalluj" (skiing) is part of Lebanese identity — especially for diaspora who return for ski seasons. Mountain villages like Faqra and Kfardebian have luxury chalets. Water melting from spring snow is vital for agriculture and drinking water.'
  },
  {
    title: '🌊 The Lebanese Coastline',
    body: 'Lebanon\'s 220km Mediterranean coast is packed with personality: ancient Phoenician cities (Byblos/Jbeil, Sidon, Tyre), crusader castles, Roman ruins, and modern beach clubs ("shaTT") packed in summer. The sea is called "ba7artak" (your sea) in Lebanese Arabic — personal, owned. Coastal Lebanese cities have their own identities: Tripoli (Trablus) for sweets, Byblos for tourism and nightlife, Jounieh for entertainment, Beirut for everything, Saida for history, Sour for antiquities. The coastal highway is legendary for summer traffic and roadside corn-on-the-cob vendors.'
  },
  {
    title: '🏞️ The Bekaa Valley',
    body: 'The Bekaa (bi2aa3) is Lebanon\'s breadbasket: 1,200km² of fertile plain at 900m elevation between two mountain ranges. It produces 60% of Lebanon\'s agricultural output: wheat, vegetables, cannabis (illegally but pervasively), and increasingly world-class wine. The Bekaa is also home to Baalbek — Roman temples of Jupiter and Bacchus, among the best-preserved in the world. The Bekaa has its own dialect, cuisine (hearty mountain food), and culture. Zahle is the "Paris of the East" for its riverside café culture. The Bekaa\'s water comes from Mount Lebanon\'s springs and the Litani River.'
  },
];

const GEO_ABOUT = 'Lebanese geography is inseparable from Lebanese identity. "Shu Day3tak?" (what\'s your village?) is the first question between strangers. The mountains shaped Lebanese independence — communities retreated to mountain strongholds to preserve identity across centuries of rule. The sea gave Lebanon the Phoenicians, trade, and diaspora. The Bekaa gave wine and wheat. The cedar gave the national symbol. Even Beirut\'s character comes from its unique position between mountains and sea. Understanding Lebanese geography means understanding why Lebanese people are the way they are: proud of their land, connected to their village, nostalgic for their mountains, and insisting that their small country contains an entire world.';
