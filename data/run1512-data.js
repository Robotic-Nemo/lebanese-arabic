// R1512 — NEW FEATURE: Lebanese Winter Rain & Shate Season (sht)

const SHT_WORDS = [
  { w: "shate", tr: "شتي", en: "winter / it's raining", ex: "l yom shate ktir", exEn: "today it's very wintry", notes: "shate = both the season and the act of raining" },
  { w: "matar", tr: "مطر", en: "rain", ex: "matar 3al Beirut", exEn: "rain on Beirut", notes: "also verb: matarit = it rained" },
  { w: "ta2j", tr: "ثلج", en: "snow / ice", ex: "ta2j 3al jbel", exEn: "snow on the mountain", notes: "going up to see ta2j is a Lebanese winter ritual" },
  { w: "bared", tr: "بارد", en: "cold", ex: "l jaw bared l yom", exEn: "the weather is cold today", notes: "bared = adj; brod = noun (coldness)" },
  { w: "ghayme", tr: "غيمة", en: "cloud / cloudy sky", ex: "kella ghaym", exEn: "it's all cloudy", notes: "ghaym = clouds (plural)" },
  { w: "ra3d", tr: "رعد", en: "thunder", ex: "sme3t l ra3d?", exEn: "did you hear the thunder?", notes: "frightens kids and cats alike" },
  { w: "barak", tr: "برق", en: "lightning", ex: "barak w ra3d", exEn: "lightning and thunder", notes: "always paired with ra3d" },
  { w: "dafye", tr: "دفاية", en: "heater / space heater", ex: "sha3el l dafye", exEn: "turn on the heater", notes: "essential item — Lebanon gets genuinely cold" },
  { w: "sahlab", tr: "سحلب", en: "hot orchid milk drink (winter specialty)", ex: "3ajjab-ni l sahlab", exEn: "I love the sahlab", notes: "thick sweet hot drink topped with cinnamon and coconut" },
  { w: "blal", tr: "بلال", en: "soaking wet", ex: "rje3t blal", exEn: "I came back soaking wet", notes: "blal = drenched; very common complaint after rain" },
  { w: "za77ame", tr: "زحمة", en: "traffic jam (worse in rain)", ex: "za77ame jneneh bil matar", exEn: "the traffic is insane in the rain", notes: "Beirut traffic + rain = nightmare" },
  { w: "kahraba maqtu3a", tr: "كهربا مقطوعة", en: "power cut (from storm)", ex: "l kahraba maqtu3a min l imse", exEn: "the electricity has been cut since last night", notes: "rain + wind = guaranteed power outage" },
  { w: "dabesh", tr: "ضبش", en: "humid / misty / foggy", ex: "l jaw dabesh ktir", exEn: "the air is very foggy", notes: "that grey heavy Beirut winter atmosphere" },
  { w: "daffi 7alak", tr: "دفي حالك", en: "keep warm / bundle up", ex: "daffi 7alak, bared barra", exEn: "bundle up, it's cold outside", notes: "what every Lebanese mother says" },
  { w: "sou2 bel matar", tr: "سوق بالمطر", en: "drive in the rain", ex: "ma b7ebb sou2 bel matar", exEn: "I hate driving in the rain", notes: "Lebanese roads flood easily" },
  { w: "3la jbel", tr: "على الجبل", en: "up to the mountain", ex: "yalla 3la jbel nshouf l ta2j", exEn: "let's go up the mountain to see the snow", notes: "weekend winter ritual for Beirutis" },
  { w: "l jaw mesh mni7", tr: "الجو مش منيح", en: "the weather is not good", ex: "l jaw mesh mni7, la ttle3", exEn: "the weather is bad, don't go out", notes: "polite understatement for 'it's a storm'" },
  { w: "shte 7elwe", tr: "شتي حلوة", en: "beautiful winter / lovely rain", ex: "mashallah shte 7elwe l yom", exEn: "what a beautiful rain today", notes: "Lebanese actually love the first rains" }
];

const SHT_DRILLS = [
  { q: "How do you say 'it's raining / winter' in Lebanese?", a: "shate", hint: "one word covers both rain and the season" },
  { q: "What do Lebanese call the thick hot orchid milk drink?", a: "sahlab", hint: "topped with cinnamon, sold in winter" },
  { q: "How do you say 'soaking wet'?", a: "blal", hint: "what you are after forgetting an umbrella" },
  { q: "What is the Lebanese word for 'thunder'?", a: "ra3d", hint: "always paired with barak (lightning)" },
  { q: "How do you say 'bundle up / keep warm'?", a: "daffi 7alak", hint: "every Lebanese mother's winter command" },
  { q: "What does 'kahraba maqtu3a' mean?", a: "power cut", hint: "guaranteed to happen during a storm" },
  { q: "What is 'ta2j' in English?", a: "snow / ice", hint: "found on the mountain in winter" },
  { q: "How do Lebanese say 'the weather is bad'?", a: "l jaw mesh mni7", hint: "polite understatement for a storm" },
  { q: "What is 'dafye'?", a: "heater / space heater", hint: "essential Lebanese winter appliance" },
  { q: "How do you say 'traffic jam (in the rain)'?", a: "za77ame", hint: "Beirut traffic + rain = catastrophe" }
];

const SHT_TIPS = [
  "Lebanese winters are mild on the coast but the mountains get heavy snow. Beirutis treat a snowy mountain day like a holiday — traffic to the cedars triples overnight.",
  "The first rain after summer is celebrated. 'Shte jat!' (the rain came!) is greeted with joy — it washes the summer dust and brings the smell of wet earth (shu 7elo riyy l matar).",
  "Rain in Beirut causes immediate traffic gridlock. What normally takes 20 minutes can take 2 hours. 'Za77ame jneneh bil matar' (the rain traffic is insane) is an understatement.",
  "Power cuts (kahraba maqtu3a) during storms are near-certain. Every Lebanese household has candles, a UPS unit, and knows their generator neighbor's number.",
  "Sahlab is the ultimate Lebanese winter drink — thick hot milk with orchid powder, topped with cinnamon, shredded coconut, and pistachios. Served by street vendors and cafés from November onward."
];
