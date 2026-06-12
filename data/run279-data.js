// Run #279 — Lebanese Nature & Weather Coach (ntr)
// Nature, weather, seasons, environment, outdoors — 40 items, MCQ drill, 5 tips

const NTR_WORDS = [
  // weather
  { tr: 'sha2s',          ar: 'شمس',           en: 'sun / sunshine',                  cat: 'weather' },
  { tr: 'maTar',          ar: 'مطر',            en: 'rain',                            cat: 'weather' },
  { tr: 'thalj',          ar: 'ثلج',            en: 'snow / ice',                      cat: 'weather' },
  { tr: 'riyaH',          ar: 'رياح',           en: 'wind',                            cat: 'weather' },
  { tr: 'Dabaab',         ar: 'ضباب',           en: 'fog / mist',                      cat: 'weather' },
  { tr: 'ra3d',           ar: 'رعد',            en: 'thunder',                         cat: 'weather' },
  { tr: 'bar2',           ar: 'برق',            en: 'lightning',                       cat: 'weather' },
  { tr: 'ghaim',          ar: 'غيم',            en: 'clouds',                          cat: 'weather' },
  // seasons
  { tr: 'rabii3',         ar: 'ربيع',           en: 'spring',                          cat: 'seasons' },
  { tr: 'Seif',           ar: 'صيف',            en: 'summer',                          cat: 'seasons' },
  { tr: 'khariif',        ar: 'خريف',           en: 'autumn / fall',                   cat: 'seasons' },
  { tr: 'shte',           ar: 'شتي',            en: 'winter',                          cat: 'seasons' },
  { tr: 'mawsem',         ar: 'موسم',           en: 'season',                          cat: 'seasons' },
  // nature
  { tr: 'bHar',           ar: 'بحر',            en: 'sea / ocean',                     cat: 'nature' },
  { tr: 'nahr',           ar: 'نهر',            en: 'river',                           cat: 'nature' },
  { tr: 'jibal',          ar: 'جبال',           en: 'mountains',                       cat: 'nature' },
  { tr: 'ghaabe',         ar: 'غابة',           en: 'forest / woods',                  cat: 'nature' },
  { tr: 'wadi',           ar: 'وادي',           en: 'valley',                          cat: 'nature' },
  { tr: 'sakhre',         ar: 'صخرة',           en: 'rock / cliff',                    cat: 'nature' },
  { tr: 'trab',           ar: 'تراب',           en: 'soil / earth / dirt',             cat: 'nature' },
  // plants & trees
  { tr: 'shajara',        ar: 'شجرة',           en: 'tree',                            cat: 'plants' },
  { tr: 'arz',            ar: 'أرز',            en: 'cedar (Lebanon\'s symbol)',        cat: 'plants' },
  { tr: 'zaytoun',        ar: 'زيتون',          en: 'olive tree / olives',             cat: 'plants' },
  { tr: 'zhour',          ar: 'زهور',           en: 'flowers',                         cat: 'plants' },
  { tr: 'Hashiish',       ar: 'حشيش',           en: 'grass / herbs',                   cat: 'plants' },
  // animals
  { tr: 'TaT3a',          ar: 'طائر',           en: 'bird',                            cat: 'animals' },
  { tr: '2ouD',           ar: 'عود',            en: 'stick / branch',                  cat: 'animals' },
  { tr: 'kalb',           ar: 'كلب',            en: 'dog',                             cat: 'animals' },
  { tr: '2aTTa',          ar: 'قطة',            en: 'cat',                             cat: 'animals' },
  { tr: 'Hayyeh',         ar: 'حية',            en: 'snake',                           cat: 'animals' },
  // weather phrases
  { tr: 'l-jaw btard',    ar: 'الجو ببرّد',      en: 'the weather is getting cold',     cat: 'phrases' },
  { tr: 'l-jaw sHein',    ar: 'الجو سهل',       en: 'the weather is nice/easy',        cat: 'phrases' },
  { tr: '3am bshatti',    ar: 'عم بشتي',        en: 'it\'s raining',                   cat: 'phrases' },
  { tr: '3am btallij',    ar: 'عم بتلج',        en: 'it\'s snowing',                   cat: 'phrases' },
  { tr: 'Harr ktir',      ar: 'حر كتير',        en: 'very hot',                        cat: 'phrases' },
  { tr: 'bared ktir',     ar: 'بارد كتير',      en: 'very cold',                       cat: 'phrases' },
  { tr: 'byou2bor 3a2l',  ar: 'بيقبر عقل',      en: 'unbearably hot (lit: buries the mind)', cat: 'phrases' },
  { tr: 'mziiyen',        ar: 'مزيّن',           en: 'clear / beautiful (weather)',     cat: 'phrases' },
  { tr: 'wara2 khaziiz',  ar: 'ورق خريز',       en: 'autumn leaves',                   cat: 'phrases' },
  { tr: 'ruu7 la l-jibal',ar: 'روح لالجبال',    en: 'go to the mountains',             cat: 'phrases' },
];

const NTR_DRILLS = [
  {
    q: 'How do you say "it\'s raining" in Lebanese Arabic?',
    opts: ['3am btallij', '3am bshatti', 'l-jaw btard', 'Harr ktir'],
    correct: 1,
    note: '"3am bshatti" = it\'s raining (عم بشتي — from شتي/شتاء = winter/rain). Lebanese present continuous: "3am b-" + verb. "3am bshatti" literally "is wintering/raining". Asking about rain: "shu l-jaw?" (how\'s the weather?). Lebanon has distinct wet winters — "shte" (winter) and "maTar" (rain) are closely linked. Beirut winters: mild but rainy; mountain areas: heavy snow.'
  },
  {
    q: 'What is "arz" in Lebanese Arabic?',
    opts: ['olive tree', 'flower', 'cedar', 'mountain'],
    correct: 2,
    note: '"arz" = cedar (أرز — Cedrus libani). Lebanon\'s national symbol — on the flag, national airline (Cedar), currency. "Arz l-Rabb" = Cedars of God (UNESCO site, North Lebanon). Ancient cedars in Bcharre region, some 3000+ years old. Lebanese pride: "ard l-arz" = land of the cedars. The cedar symbolizes resilience, longevity, and Lebanese national identity.'
  },
  {
    q: 'How do you say "very hot" in Lebanese Arabic?',
    opts: ['bared ktir', 'Harr ktir', 'l-jaw btard', 'mziiyen'],
    correct: 1,
    note: '"Harr ktir" = very hot (حر كتير). Extreme heat: "byou2bor 3a2l" = literally "buries the mind" — unbearably hot. Lebanese summer (July-August): coastal Beirut hits 35°C+ with high humidity. Mountains are cooler — "ruu7 la l-jibal" (go to the mountains) is the classic summer escape. "l-jaw Harr bass mziiyen" = the weather is hot but beautiful (sunny).'
  },
  {
    q: 'What does "shte" mean?',
    opts: ['summer', 'spring', 'autumn', 'winter'],
    correct: 3,
    note: '"shte" = winter (شتي — Lebanese/Levantine dialect; MSA: "shitaa\'"). Lebanese seasons: "rabii3" (spring), "Seif" (summer), "khariif" (autumn), "shte" (winter). Lebanon has distinct seasons — one of few Arab countries with snowfall. "Byimshi 3al-thalj" = going to ski (literally "walking on snow"). Ski resorts: Faraya, Mzaar, Laklouk. "3am bshatti" = it\'s raining/winter weather.'
  },
  {
    q: 'How do you say "it\'s snowing" in Lebanese Arabic?',
    opts: ['3am bshatti', '3am btallij', 'bared ktir', 'thalj ktir'],
    correct: 1,
    note: '"3am btallij" = it\'s snowing (عم بتلج — from ثلج = snow). "thalj" = snow/ice. Lebanon is famous for skiing — "fi thalj 3al-jibal" (there\'s snow on the mountains) signals ski season. Unique: you can ski in the morning and swim in the afternoon (30 min between Faraya and Jounieh coast). "3am btallij ktir" = it\'s snowing heavily.'
  },
  {
    q: 'What does "ghaabe" mean?',
    opts: ['valley', 'river', 'forest / woods', 'mountain'],
    correct: 2,
    note: '"ghaabe" = forest/woods (غابة). Lebanon has reduced forest cover — deforestation and fires are ongoing issues. "Ghaabit l-arz" = the cedar forest. Environmental activism: "7arakat l-bi\'a" = environmental movement. "Nahr" = river (Lebanon has many rivers: Litani, Nahr el-Kalb, Nahr Ibrahim). "Wadi" = valley — famous: Wadi Qadisha (Holy Valley, UNESCO).'
  },
  {
    q: 'How do you say "the weather is nice/easy" in Lebanese Arabic?',
    opts: ['l-jaw btard', 'l-jaw sHein', 'mziiyen', 'Harr ktir'],
    correct: 1,
    note: '"l-jaw sHein" = the weather is nice/easy (الجو سهل — sHein from سهل = easy/mild). Lebanese weather expressions: "l-jaw mziiyen" (the weather is beautiful/clear), "l-jaw sHein" (mild and pleasant), "l-jaw 3am btard" (the weather is getting cold). "Jaw" = weather/atmosphere (also used: "l-hawa" = the air/breeze).'
  },
  {
    q: 'What does "bHar" mean?',
    opts: ['river', 'sea / ocean', 'lake', 'spring'],
    correct: 1,
    note: '"bHar" = sea/ocean (بحر). Lebanon has 220km of Mediterranean coastline. "3a l-bHar" = to the sea/beach. Summer essential: "ruu7 3a l-bHar" = go to the beach. Lebanese beach culture: private beach resorts ("plage"), jet skis, late-night seafood. "bHar l-abyaD l-mutawasseT" = the Mediterranean (white middle sea). Sidon, Tyre, Byblos — ancient coastal cities.'
  },
  {
    q: 'How do you say "go to the mountains" in Lebanese Arabic?',
    opts: ['ruu7 la l-jibal', 'ta3a 3a l-bHar', 'rou7 la l-wadi', 'fi jibal hon'],
    correct: 0,
    note: '"ruu7 la l-jibal" = go to the mountains. Lebanon\'s geography: coastal strip → mountain range (Mount Lebanon) → Bekaa Valley → Anti-Lebanon range. "jibal" = mountains (جبال). Summer tradition: families move from Beirut heat to cooler mountain villages ("Day3a"). "Yalla la l-jibal!" = let\'s go to the mountains! Mountain villages: Beit Mery, Broumana, Faraya, Bcharre.'
  },
  {
    q: 'What does "mziiyen" mean as a weather expression?',
    opts: ['cloudy', 'foggy', 'clear / beautiful', 'windy'],
    correct: 2,
    note: '"mziiyen" = clear/beautiful (مزيّن — from زيّن = to decorate/beautify). Weather: "l-jaw mziiyen" = beautiful clear weather. Also used for appearance: "hayda mziiyen" = this looks beautiful/decorated. Lebanese weather pride: clear days offer stunning views of mountains from Beirut coast. Spring and autumn are considered the most "mziiyen" seasons — mild, clear, colorful.'
  },
];

const NTR_TIPS = [
  { title: 'Lebanese geography — a natural paradise in a small country', body: 'Lebanon is 10,452 km² (smaller than Cyprus) but has extraordinary geographic diversity. In one day: swim in the Mediterranean, ski in the mountains, explore the Bekaa Valley. Four geographic zones: coastal plain, Mount Lebanon (peaks 3,088m), Bekaa Valley (fertile plateau, 1,000m altitude), Anti-Lebanon range. This diversity shaped Lebanese culture — "ibn l-jibal" (son of the mountains) vs "ibn l-bHar" (son of the sea) are distinct cultural identities. Key: "jibal Loubnan" (Mount Lebanon), "sahl el-Biqaa3" (Bekaa Valley), "bHar l-mutawasseT" (Mediterranean).' },
  { title: 'Lebanese seasons and weather — what to expect', body: 'Lebanon has true four seasons. Winter ("shte" — Dec-Mar): rainy coast, heavy snow in mountains (ski season). Spring ("rabii3" — Mar-May): wildflowers, mild, perfect hiking. Summer ("Seif" — Jun-Sep): hot humid coast (35°C+), dry, beach season; cool mountains. Autumn ("khariif" — Oct-Nov): harvest, changing leaves, wine season. Bekaa Valley has hotter summers, colder winters. Famous quirk: you can ski in the morning and swim in the afternoon — "btellij w btsba7" (ski and swim same day). Weather chat is universal small talk: "kiif l-jaw?" = how\'s the weather?' },
  { title: 'Lebanese nature vocabulary in context', body: '"3am bshatti" (it\'s raining) — listen for: "3am bshatti bi Beirut, bass 3al-jibal 3am btallij" (raining in Beirut but snowing in the mountains). Fog: "Dabaab ktir 3a l-jibal" = heavy fog on the mountains (common in winter, affects driving). Heat: "byou2bor 3a2l" (unbearably hot, literally buries the mind). The expression connects weather to mentality — extreme heat is seen as affecting cognitive function. Wind: "fi riyaH 2awiye" = there\'s strong wind. Coastal winds: "hawa l-bHar" (sea breeze) = pleasant; "riyaH sharqiyye" (east wind from the desert) = dry, hot, uncomfortable.' },
  { title: 'The cedar — Lebanon\'s national symbol and its story', body: '"Arz l-Rabb" (Cedars of God) near Bcharre is a UNESCO World Heritage Site — one of the last ancient cedar forests in Lebanon. The cedar ("arz") appears on the Lebanese flag (white = snow, red stripes = cedars\' blood/sacrifice). Ancient Phoenicians used cedar wood for ships and trade with Egypt. King Solomon\'s temple used Lebanese cedars. Now protected: Cedars Society was Lebanon\'s first environmental NGO (1876). Ecotourism: hiking the "Qadisha Valley" (Wadi Qadisha = Holy Valley) past ancient cedar trees is a bucket-list Lebanon experience.' },
  { title: 'Talking about nature and outdoors in Lebanese culture', body: 'Outdoor culture is central to Lebanese identity. Mountain hikes: "mashy" (hiking, literally walking) is popular — Liban Trek (NGO) runs group hikes every weekend. "Yalla mashy" = let\'s go hiking. Beach culture: "Yalla 3a l-bHar" every summer weekend. Camping ("tkhyim") growing in Bekaa and Akkar regions. Environmental issues are politically charged — wildfires, water pollution, waste crisis ("azemet l-zbele" = garbage crisis 2015-2016) are all connected to nature vocabulary. "Bi7ibbu l-Tabi3a" = they love nature — common self-description. "Tabi3a" (طبيعة) = nature in general.' },
];

const NTR_ABOUT = 'Master Lebanese Arabic for nature and weather — seasons, landscape, animals, plants, and weather expressions. Essential for describing Lebanon\'s unique geography, making small talk about weather, and navigating outdoor conversations.';
