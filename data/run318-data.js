// Run #318 — Lebanese Weather & Seasons Coach (wth)
// 40 words across 5 categories: conditions / temperature / seasons / nature / expressions
// 10 MCQ drills, 5 tips, about text

const WTH_WORDS = [
  // conditions
  { tr: 'shams', ar: 'شمس', en: 'sun / sunshine', cat: 'conditions' },
  { tr: 'matar', ar: 'مطر', en: 'rain', cat: 'conditions' },
  { tr: 'talj', ar: 'ثلج', en: 'snow', cat: 'conditions' },
  { tr: 'riya7', ar: 'رياح', en: 'wind', cat: 'conditions' },
  { tr: 'dabaab', ar: 'ضباب', en: 'fog', cat: 'conditions' },
  { tr: '3asfe', ar: 'عاصفة', en: 'storm', cat: 'conditions' },
  { tr: 'ra3d', ar: 'رعد', en: 'thunder', cat: 'conditions' },
  { tr: 'bar2', ar: 'برق', en: 'lightning', cat: 'conditions' },
  { tr: 'sa7ab', ar: 'سحاب', en: 'clouds', cat: 'conditions' },
  // temperature
  { tr: '7arr', ar: 'حر', en: 'hot', cat: 'temperature' },
  { tr: 'bared', ar: 'بارد', en: 'cold', cat: 'temperature' },
  { tr: 'da7esh', ar: 'داحش', en: 'stuffy / muggy', cat: 'temperature' },
  { tr: 'muHtamil', ar: 'محتمل', en: 'bearable (weather)', cat: 'temperature' },
  { tr: 'laTiif', ar: 'لطيف', en: 'pleasant / mild', cat: 'temperature' },
  { tr: 'raTb', ar: 'رطب', en: 'humid', cat: 'temperature' },
  { tr: 'naashef', ar: 'ناشف', en: 'dry', cat: 'temperature' },
  { tr: 'baar7a 7arr ktiir', ar: 'بارحة حر كتير', en: 'yesterday was very hot', cat: 'temperature' },
  // seasons
  { tr: 'rabii3', ar: 'ربيع', en: 'spring', cat: 'seasons' },
  { tr: 'seif', ar: 'صيف', en: 'summer', cat: 'seasons' },
  { tr: 'khariif', ar: 'خريف', en: 'autumn / fall', cat: 'seasons' },
  { tr: 'shite', ar: 'شتي', en: 'winter', cat: 'seasons' },
  { tr: 'mawsam', ar: 'موسم', en: 'season', cat: 'seasons' },
  { tr: 'bidaayit il-seif', ar: 'بداية الصيف', en: 'beginning of summer', cat: 'seasons' },
  // nature
  { tr: 'jabal', ar: 'جبل', en: 'mountain', cat: 'nature' },
  { tr: 'ba7ar', ar: 'بحر', en: 'sea', cat: 'nature' },
  { tr: 'naher', ar: 'نهر', en: 'river', cat: 'nature' },
  { tr: 'ghabe', ar: 'غابة', en: 'forest', cat: 'nature' },
  { tr: 'sahl', ar: 'سهل', en: 'plain / flat land', cat: 'nature' },
  { tr: 'wadi', ar: 'وادي', en: 'valley', cat: 'nature' },
  { tr: 'talle', ar: 'تلة', en: 'hill', cat: 'nature' },
  // expressions
  { tr: 'shu l-jaw?', ar: 'شو الجو؟', en: 'What\'s the weather like?', cat: 'expressions' },
  { tr: 'il-jaw mnii7', ar: 'الجو منيح', en: 'The weather is nice', cat: 'expressions' },
  { tr: 'il-jaw bared ktiir', ar: 'الجو بارد كتير', en: 'The weather is very cold', cat: 'expressions' },
  { tr: 'raH yishta', ar: 'رح يشتي', en: 'It\'s going to rain', cat: 'expressions' },
  { tr: 'mnaazil 3al-jabal', ar: 'منازل عالجبل', en: 'We\'re going to the mountain', cat: 'expressions' },
  { tr: 'jab il-matar', ar: 'جاب المطر', en: 'It rained (lit. the rain came)', cat: 'expressions' },
  { tr: 'jaw il-seif 7elwe', ar: 'جو الصيف حلوة', en: 'Summer weather is beautiful', cat: 'expressions' },
  { tr: 'shate3 willa jabal?', ar: 'شاطئ ولا جبل؟', en: 'Beach or mountain?', cat: 'expressions' },
  { tr: 'laazim naakhod jakit', ar: 'لازم ناخد جاكيت', en: 'We need to take a jacket', cat: 'expressions' },
  { tr: 'il-talj nziil 3al-jabal', ar: 'الثلج نزيل عالجبل', en: 'Snow fell on the mountain', cat: 'expressions' },
];

const WTH_DRILLS = [
  {
    q: 'How do you say "What\'s the weather like?" in Lebanese Arabic?',
    opts: ['shu l-jaw?', 'kiif l-jaw?', 'shta?', 'wein il-matar?'],
    correct: 0,
    note: '"Shu l-jaw?" — using "shu" (what) + "jaw" (weather/atmosphere). Very common opener for weather chat.'
  },
  {
    q: 'Which word means "snow" in Lebanese Arabic?',
    opts: ['matar', 'ra3d', 'talj', 'bar2'],
    correct: 2,
    note: '"Talj" = snow. Also used for "ice" in everyday speech (e.g. talj fil-nakhe = ice in the drink).'
  },
  {
    q: 'What does "raH yishta" mean?',
    opts: ['It\'s sunny', 'It\'s going to rain', 'The weather is cold', 'It\'s windy'],
    correct: 1,
    note: '"RaH yishta" — raH (future marker) + yishta (to rain, from shita = winter/rain). Lit. "it will rain".'
  },
  {
    q: 'How do you say "the weather is nice" in Lebanese?',
    opts: ['il-jaw ktiir', 'il-jaw mnii7', 'jaw bared', 'shams ktii7'],
    correct: 1,
    note: '"Il-jaw mnii7" — jaw = weather/atmosphere, mnii7 = good/nice. Very natural way to describe pleasant weather.'
  },
  {
    q: 'What is "seif" in Lebanese Arabic?',
    opts: ['spring', 'autumn', 'winter', 'summer'],
    correct: 3,
    note: '"Seif" = summer. Lebanese summers are hot and dry on the coast, cooler in the mountains — the classic escape!'
  },
  {
    q: 'Which word means "humid" in Lebanese Arabic?',
    opts: ['naashef', '7arr', 'raTb', 'laTiif'],
    correct: 2,
    note: '"RaTb" = humid. Beirut\'s coastal humidity in summer is legendary — locals say "il-jaw raTb ktiir" often.'
  },
  {
    q: 'What does "shate3 willa jabal?" mean?',
    opts: ['Sun or rain?', 'Hot or cold?', 'Beach or mountain?', 'Spring or autumn?'],
    correct: 2,
    note: 'Classic Lebanese summer dilemma! "Shate3" = beach, "jabal" = mountain. Many Beirutis debate this every weekend.'
  },
  {
    q: 'How do you say "winter" in Lebanese Arabic?',
    opts: ['rabii3', 'shite', 'khariif', 'seif'],
    correct: 1,
    note: '"Shite" = winter. Note: "yishta" (to rain) and "shite" (winter) share the same root — rain defines the season!'
  },
  {
    q: 'What does "laTiif" describe about weather?',
    opts: ['Very cold', 'Pleasant / mild', 'Stormy', 'Foggy'],
    correct: 1,
    note: '"LaTiif" = pleasant, mild, gentle. "Il-jaw laTiif" is the ideal weather — not too hot, not too cold.'
  },
  {
    q: 'What does "jab il-matar" literally mean?',
    opts: ['The rain stopped', 'The weather is rainy', 'The rain came / it rained', 'I like the rain'],
    correct: 2,
    note: '"Jab il-matar" — jab (brought/came) + il-matar (the rain). Lebanese often personify rain as something that "arrives".'
  },
];

const WTH_TIPS = [
  {
    title: 'Lebanon Has 4 Distinct Seasons',
    body: 'Unlike many Middle Eastern countries, Lebanon has a full 4-season cycle. Spring (rabii3) brings wildflowers, summer (seif) is hot and dry on the coast, autumn (khariif) is harvest time, and winter (shite) brings snow to the mountains. This variety is a source of national pride — "il-arD l-lubnaaniyye fiya kull shi" (Lebanese land has everything).'
  },
  {
    title: 'Mountain vs. Coast: Two Microclimates',
    body: 'Lebanon\'s geography creates dramatic contrasts. The coast (bay Beirut, Tripoli) is Mediterranean — hot summers, mild winters. The mountains (Faraya, The Cedars) get heavy snow and are perfect for skiing. In the same hour, you can drive from beach to ski slope — Lebanese love saying "maniskii w minzba7 bil-ba7ar bil-yom l-wa7ad" (we ski and swim on the same day).'
  },
  {
    title: '"Jaw" = Weather AND Atmosphere',
    body: '"Jaw" (جو) literally means "air/atmosphere" but covers weather in conversation: "shu l-jaw?" = what\'s the weather? BUT "il-jaw mni7" can also mean "the vibe is good" or "the atmosphere is nice" (at a party, event, etc.). Context makes the meaning clear — useful double-duty word!'
  },
  {
    title: 'Talking About Temperature',
    body: 'Lebanese is expressive about heat and cold: "il-jaw 7arr la daraje l-mawt" (the weather is deadly hot), "il-jaw bared la daraje ma 7ada yiTla3 barra" (too cold to go outside). Adding "ktiir" (very) intensifies any weather description. "Da7esh" specifically means the suffocating muggy heat Beirutis know in August.'
  },
  {
    title: 'Rain Is a Big Deal in Lebanon',
    body: 'After dry summers, the first autumn rains are celebrated — "il-matar nziil" (the rain has fallen) is almost an announcement. However, Beirut\'s infrastructure struggles with heavy rain, leading to the saying about flooded streets. "Raayibet" (cloudy/overcast) and "dabaab" (fog) are common in mountain areas in winter.'
  },
];

const WTH_ABOUT = 'Lebanese weather vocabulary reflects the country\'s unique geography — from Mediterranean coast to Alpine peaks. The ability to discuss weather in Lebanese Arabic opens doors to everyday conversation, as "shu l-jaw?" is one of the most common conversation starters. Understanding seasonal expressions also connects to Lebanese culture: mountain retreats in summer, ski season debates, and the beloved first rains after a long dry spell.';
