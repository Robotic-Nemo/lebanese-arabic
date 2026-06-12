// R1008 — NEW FEATURE: Lebanese Sayfiye & Mountain Escape Culture (syf)

const SYF_WORDS = [
  { ar: 'صيفية', tr: 'Sayfiye', en: 'summer resort village / summer escape', cat: 'places' },
  { ar: 'ضيعة', tr: 'Day3a', en: 'village / small mountain town', cat: 'places' },
  { ar: 'عاليه', tr: '3aley', en: 'Aley — popular mountain resort near Beirut', cat: 'places' },
  { ar: 'برمانا', tr: 'Brummana', en: 'Brummana — upscale mountain resort town', cat: 'places' },
  { ar: 'بحمدون', tr: 'Ba7mdoun', en: 'Bhamdoun — mountain resort town', cat: 'places' },
  { ar: 'زحلة', tr: 'Za7le', en: 'Zahle — city in the Bekaa Valley', cat: 'places' },
  { ar: 'هوا الجبل', tr: 'hawa il-jabal', en: 'mountain air', cat: 'nature' },
  { ar: 'برودة', tr: 'brude', en: 'coolness / cool breeze', cat: 'nature' },
  { ar: 'وادي', tr: 'wadi', en: 'valley', cat: 'nature' },
  { ar: 'نبع', tr: 'nabe3', en: 'natural spring / water source', cat: 'nature' },
  { ar: 'غابة', tr: 'Ghabe', en: 'forest / pine grove', cat: 'nature' },
  { ar: 'يصيّف', tr: 'yeSayyif', en: 'to spend the summer (in the mountains)', cat: 'activities' },
  { ar: 'شواء', tr: 'shwaye', en: 'barbecue / outdoor grilling', cat: 'activities' },
  { ar: 'رحلة', tr: 'ri7le', en: 'excursion / day trip', cat: 'activities' },
  { ar: 'مشي', tr: 'mashi', en: 'walking / hiking', cat: 'activities' },
  { ar: 'بيت الصيف', tr: 'bayt iS-Sayf', en: 'summer house / seasonal home', cat: 'culture' },
  { ar: 'شالة', tr: 'shale', en: 'chalet / bungalow', cat: 'culture' },
  { ar: 'زحمة', tr: 'za7me', en: 'traffic jam — fleeing Beirut\'s summer congestion', cat: 'culture' },
  { ar: 'حر', tr: '7arr', en: 'heat / hot weather (what you\'re escaping)', cat: 'culture' },
  { ar: 'رطوبة', tr: 'routoube', en: 'humidity (Beirut\'s summer curse)', cat: 'culture' },
  { ar: 'جارة', tr: 'jare', en: 'neighbor (village neighbor — closer than city ones)', cat: 'culture' },
  { ar: 'عصير عنب', tr: '3aSir 3anab', en: 'grape juice (fresh from Bekaa villages)', cat: 'culture' },
  { ar: 'كيلو بالطريق', tr: 'kilo biT-Tari2', en: 'roadside produce sold by the kilo', cat: 'culture' },
  { ar: 'مهرجان', tr: 'mahrajane', en: 'summer festival — village cultural events', cat: 'culture' },
  { ar: 'موسم الصيف', tr: 'mawsim iS-Sayf', en: 'summer season (Lebanon\'s social peak)', cat: 'culture' },
];

const SYF_CATS = ['places','nature','activities','culture'];

const SYF_DRILLS = [
  { q: 'What does "Sayfiye" (صيفية) mean?', opts: ['winter festival','summer resort village / summer escape','mountain hike','village festival'], ans: 1 },
  { q: 'How do you say "mountain air" in Lebanese Arabic?', opts: ['brude','hawa il-jabal','Ghabe','wadi'], ans: 1 },
  { q: 'What is "yeSayyif" (يصيّف)?', opts: ['to swim in the sea','to spend the summer in the mountains','to travel abroad','to visit family'], ans: 1 },
  { q: 'What does "za7me" (زحمة) mean?', opts: ['mountain air','village neighbor','traffic jam','humidity'], ans: 2 },
  { q: 'How do you say "summer house" in Lebanese Arabic?', opts: ['shale','bayt iS-Sayf','Day3a','nabe3'], ans: 1 },
  { q: 'What is "routoube" (رطوبة)?', opts: ['coolness','heat','humidity','summer season'], ans: 2 },
  { q: 'How do you say "natural spring / water source"?', opts: ['wadi','Ghabe','nabe3','brude'], ans: 2 },
  { q: 'What does "shwaye" (شواء) mean?', opts: ['hiking','day trip','barbecue / outdoor grilling','valley'], ans: 2 },
  { q: 'Which city is famous in the Bekaa Valley?', opts: ['3aley','Brummana','Ba7mdoun','Za7le'], ans: 3 },
  { q: 'How do you say "forest / pine grove"?', opts: ['wadi','Ghabe','nabe3','Sayfiye'], ans: 1 },
  { q: 'What is "mahrajane" (مهرجان)?', opts: ['traffic jam','roadside produce','summer festival','chalet'], ans: 2 },
  { q: 'What does "kilo biT-Tari2" mean?', opts: ['mountain road','roadside produce sold by the kilo','hiking trail','village trip'], ans: 1 },
];

const SYF_TIPS = [
  { title: '🏔️ The Sayfiye Tradition', body: 'Every summer, thousands of Beirutis flee the coastal heat and humidity to "yeSayyifu" in the mountains. Mountain towns like 3aley, Brummana, and Ba7mdoun swell with Beirutis renting "bayt iS-Sayf" (summer houses) or staying in chalets. The air, the quiet, and the escape are all deeply Lebanese.' },
  { title: '🚗 The Friday Za7me', body: 'Every summer Friday afternoon, the Beirut-mountain road turns into a parking lot as families escape the heat. "il-za7me ktir" (the traffic is terrible) is a summer ritual complaint. The return trip Sunday night is equally brutal. Leaving at 6am is the only solution.' },
  { title: '🍇 Roadside Produce Culture', body: '"Kilo biT-Tari2" — buying fruit and vegetables from farmers who set up stands along mountain roads — is a beloved summer ritual. Cherries from the Chouf, grapes from the Bekaa, apples from Faraya: fresher, cheaper, and infinitely more satisfying than any supermarket.' },
  { title: '🎪 Village Festivals', body: '"Mahrajane" (summer festivals) fill Lebanese mountain villages from July to September: Byblos Festival, Baalbeck International Festival, Ehden Festival. Music, dabke, food stalls — and an excuse for expats visiting from the diaspora to feel Lebanese again for a few weeks.' },
];
