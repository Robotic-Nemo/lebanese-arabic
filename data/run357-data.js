// Run #357 — Lebanese Mountain & Village Life Coach (mlv)
// 40 words across 5 categories: geography / village-life / nature / activities / phrases
// 10 MCQ drills, 5 tips, about text

const MLV_WORDS = [
  // geography
  { tr: 'jabal', ar: 'جبل', en: 'mountain', cat: 'geography' },
  { tr: 'Jabal Lubnaen', ar: 'جبل لبنان', en: 'Mount Lebanon — the mountain range and historic district', cat: 'geography' },
  { tr: 'waadi', ar: 'وادي', en: 'valley', cat: 'geography' },
  { tr: 'Beqa3', ar: 'البقاع', en: 'the Bekaa Valley — Lebanon\'s wine and farming region', cat: 'geography' },
  { tr: 'talj', ar: 'ثلج', en: 'snow', cat: 'geography' },
  { tr: '3ain', ar: 'عين', en: 'natural spring / water source — common in village names', cat: 'geography' },
  { tr: '2aHraash', ar: 'أحراش', en: 'forests / woods', cat: 'geography' },
  { tr: 'shaTT', ar: 'شطّ', en: 'coast / shore — contrast to the mountain', cat: 'geography' },
  // village life
  { tr: 'day3a', ar: 'ضيعة', en: 'village — every Lebanese family has an ancestral village', cat: 'village-life' },
  { tr: 'beit 3atii2', ar: 'بيت عتيق', en: 'old stone house — traditional Lebanese architecture', cat: 'village-life' },
  { tr: 'mukhtar', ar: 'مختار', en: 'village headman / elected local leader', cat: 'village-life' },
  { tr: 'jiiraen', ar: 'جيران', en: 'neighbors', cat: 'village-life' },
  { tr: '2ibn il-day3a', ar: 'ابن الضيعة', en: 'son of the village — someone who knows their roots', cat: 'village-life' },
  { tr: 'turraas', ar: 'تراس', en: 'agricultural terrace — terraced hillside farming', cat: 'village-life' },
  { tr: 'beit il-3eele', ar: 'بيت العيلة', en: 'the family ancestral home (in the village)', cat: 'village-life' },
  { tr: '2ard', ar: 'أرض', en: 'land — family land passed through generations', cat: 'village-life' },
  // nature
  { tr: '2arz', ar: 'أرز', en: 'cedar tree — Lebanon\'s national symbol', cat: 'nature' },
  { tr: 'sanawbaar', ar: 'صنوبر', en: 'pine tree — fills Lebanese mountain forests', cat: 'nature' },
  { tr: '3asal', ar: 'عسل', en: 'honey — Lebanese mountain honey is famous', cat: 'nature' },
  { tr: 'naHl', ar: 'نحل', en: 'bees', cat: 'nature' },
  { tr: 'warad barriyye', ar: 'ورد بري', en: 'wildflowers — abundant in spring mountains', cat: 'nature' },
  { tr: 'niisim', ar: 'نسيم', en: 'breeze — the cool mountain breeze (nisim il-jabal)', cat: 'nature' },
  { tr: 'Dubbaan', ar: 'ضبّاب', en: 'mist / fog — mountain mist', cat: 'nature' },
  { tr: 'bard', ar: 'برد', en: 'cold — mountain cold', cat: 'nature' },
  // activities
  { tr: 'tazalluj', ar: 'تزلّج', en: 'skiing — Lebanon has several mountain ski resorts', cat: 'activities' },
  { tr: '2iSTiyaaf', ar: 'اصطياف', en: 'summering — spending the summer in mountain villages', cat: 'activities' },
  { tr: 'riHle', ar: 'رحلة', en: 'excursion / trip (to the mountains)', cat: 'activities' },
  { tr: 'mashwiyye', ar: 'مشوية', en: 'outdoor barbecue / grill — Lebanese mountain tradition', cat: 'activities' },
  { tr: 'trekking', ar: 'تريكينغ', en: 'hiking / trekking — Lebanon Trail runs the country\'s length', cat: 'activities' },
  { tr: 'Tayyaaran', ar: 'طيران', en: 'paragliding — popular in the Lebanese mountains', cat: 'activities' },
  { tr: 'mashiyye', ar: 'مشية', en: 'walk / stroll — evening village walk', cat: 'activities' },
  { tr: '7aflat naare', ar: 'حفلة نار', en: 'bonfire party — mountain gathering tradition', cat: 'activities' },
  // phrases
  { tr: 'min wein day3itak', ar: 'من وين ضيعتك', en: 'where is your village? — the most Lebanese question', cat: 'phrases' },
  { tr: 'biHinn 3al-day3a', ar: 'بحنّ عالضيعة', en: 'I miss the village — nostalgic longing', cat: 'phrases' },
  { tr: 'yalla 3a l-jabal', ar: 'يلا عالجبل', en: 'let\'s go to the mountains — summer invitation', cat: 'phrases' },
  { tr: 'beitak bbeiti', ar: 'بيتك ببيتي', en: 'your home is my home — village hospitality', cat: 'phrases' },
  { tr: 'hawa l-jabal', ar: 'هوا الجبل', en: 'the mountain air — said when praising mountain freshness', cat: 'phrases' },
  { tr: 'raH nishwi', ar: 'رح نشوي', en: 'we\'ll grill / we\'ll barbecue — the mountain weekend plan', cat: 'phrases' },
  { tr: '3and il-3eele fil-day3a', ar: 'عند العيلة في الضيعة', en: 'at the family\'s in the village — summer address', cat: 'phrases' },
  { tr: 'il-Haawa mniiH', ar: 'الهوا منيح', en: 'the air is good / the weather is nice — mountain weather', cat: 'phrases' },
];

const MLV_DRILLS = [
  {
    q: 'What is "day3a" (ضيعة) and why is it so central to Lebanese identity?',
    opts: ['A type of mountain food', 'The ancestral village — every Lebanese family traces their identity through their original village', 'A mountain ski resort', 'A valley settlement'],
    correct: 1,
    note: '"Day3a" (ضيعة) = village. For Lebanese people, the ancestral village is a defining part of identity. The first question Lebanese ask each other: "min wein day3itak?" (where is your village?). Even 4th-generation Lebanese in Brazil or Australia know which day3a their family came from — Bcharre, Deir el-Ahmar, Beit Mery, Zghorta. The summer return to the day3a is a cultural institution. "2ibn il-day3a" (son of the village) means someone authentic, connected to roots.'
  },
  {
    q: 'What is "2iSTiyaaf" (اصطياف) and what does it reveal about Lebanese culture?',
    opts: ['Winter skiing in Lebanon', 'Summering — the Lebanese tradition of spending summers in mountain villages', 'A spring festival', 'Farming season'],
    correct: 1,
    note: '"2iSTiyaaf" (اصطياف) = summering — the practice of moving from hot cities to mountain villages for the summer months (June-September). Lebanese families have been doing this for generations: "nishti" in Beirut (winter) and "niSTaaf" in the jabal (mountain). The mountain air, cooler temperatures, and village life are the draw. "RaH niSTaaf hal-sane wein?" = where are we summering this year? Whole Beirut neighborhoods empty out in August as families head to their day3a.'
  },
  {
    q: 'What is Lebanon\'s "2arz" (أرز) and why is it on the flag?',
    opts: ['A mountain lake', 'The cedar tree — Lebanon\'s national symbol, featured on the flag and mentioned in ancient texts', 'A type of mountain herb', 'The highest mountain peak'],
    correct: 1,
    note: '"2arz" (أرز) = cedar. Lebanon\'s cedar forests (jabal il-2arz) were famous in antiquity — the Phoenicians used cedar to build ships, and the Cedars of God (2arz il-Rabbb) in Bcharre are among the oldest trees on earth (some over 1000 years). The cedar on Lebanon\'s flag represents eternity and resilience. "Taalii ki l-2arz" = standing tall like the cedar — a Lebanese expression of dignity. UNESCO World Heritage site.'
  },
  {
    q: 'What does "min wein day3itak" (من وين ضيعتك) actually ask?',
    opts: ['Which city do you live in?', 'Where is your ancestral village? — the defining Lebanese social question about family origin', 'Where were you born?', 'Where are you going on vacation?'],
    correct: 1,
    note: '"Min wein day3itak?" (من وين ضيعتك) = where is your village from? This is THE defining Lebanese social question — more important than what city you live in. Your village tells people your religious community, family clan, and political affiliation. "Ana min Bsharri" (I\'m from Bcharre), "Ana min Zghorta", "Ana min Beit Meri". Lebanese diaspora answer this even if they\'ve never visited the village. The day3a is identity.'
  },
  {
    q: 'What is a "mashwiyye" (مشوية) in the Lebanese mountain context?',
    opts: ['A mountain hiking trail', 'An outdoor barbecue / grill gathering — the quintessential Lebanese mountain weekend activity', 'A mountain village festival', 'A type of stone house'],
    correct: 1,
    note: '"Mashwiyye" (مشوية) = grilling/barbecue outing. The Lebanese mountain weekend formula: drive up to the jabal, find a spot with a view, set up the mashwiyye (grill), cook kafta, shish tawook, and lahm mishwi (grilled meat), with mezze, 3araq, and family conversation. "Yalla nsawwi mashwiyye 3al-jabal?" = shall we do a mountain BBQ? This is so common it\'s practically a national sport. The smell of charcoal on a mountain terrace is quintessentially Lebanese.'
  },
  {
    q: 'What is "turraas" (تراس) in the Lebanese mountain landscape?',
    opts: ['A mountain café terrace', 'Agricultural terraces — the stepped hillside farming that shaped Lebanon\'s mountain landscape', 'A mountain fortress', 'A type of stone wall'],
    correct: 1,
    note: '"Turraas" (تراس) = terrace — specifically the agricultural terraces cut into Lebanese mountainsides for farming. Thousands of years of terracing created Lebanon\'s distinctive stepped mountain landscape. These terraces hold olive trees, grape vines, fig trees, and fruit orchards. Abandoned terraces speak of emigration and depopulation. The turraas is both a farming technique and a cultural artifact — restoring old terraces has become a conservation movement. Same word as café terrace (from French terrasse) but different meaning.'
  },
  {
    q: 'What does "hawa l-jabal" (هوا الجبل) express?',
    opts: ['Mountain weather forecast', 'The mountain air — an expression of the freshness, purity, and health of mountain air versus city air', 'A mountain wind storm', 'The altitude of Lebanon\'s mountains'],
    correct: 1,
    note: '"Hawa l-jabal" (هوا الجبل) = the mountain air. Lebanese mountain air is considered therapeutic — "il-Haawa mniiH" (the air is good). After summer heat in Beirut, going to the jabal for "hawa" is a genuine health prescription, not just a figure of speech. Lebanese mountain towns like Broummana, Beiteddine, Deir el-Qamar market themselves on their air quality. "BiHtaaj hawa l-jabal" = I need the mountain air. The contrast between city smog and mountain freshness is a constant Lebanese theme.'
  },
  {
    q: 'What is "beit 3atii2" (بيت عتيق) and what makes it significant?',
    opts: ['A cheap rental house', 'An old stone house — traditional Lebanese architecture built from local limestone, symbol of heritage', 'A government building', 'A mountain chalet'],
    correct: 1,
    note: '"Beit 3atii2" (بيت عتيق) = old house (lit. "ancient/vintage house"). Traditional Lebanese mountain houses are built from local limestone (7ajar) with triple-arched facades, red-tiled roofs, and stone courtyards. These are symbols of Lebanese heritage. Restoring a "beit 3atii2" is a major life project for diaspora Lebanese returning to their village. "3indna beit 3atii2 fil-day3a" = we have an old stone house in the village (said with pride). Real estate gold in today\'s market.'
  },
  {
    q: 'What does "biHinn 3al-day3a" (بحنّ عالضيعة) mean?',
    opts: ['I am going to the village', 'I miss the village — the nostalgic longing for the ancestral village felt by diaspora Lebanese', 'The village is beautiful', 'I grew up in the village'],
    correct: 1,
    note: '"BiHinn 3al-day3a" (بحنّ عالضيعة) = I\'m longing for/missing the village. "Haniin" (حنين = nostalgia/longing) for the day3a is one of Lebanese culture\'s deepest emotions — separate from just missing a place, it\'s the ache for a specific identity and belonging. Lebanese diaspora in Melbourne or São Paulo feel this especially in summer, when Instagram fills with mountain views and everyone is back at the village. "Il-day3a btista2ilna" = the village calls us back.'
  },
  {
    q: 'What can Lebanon do that very few countries can — related to "talj" (ثلج) and "shaTT" (شطّ)?',
    opts: ['Grow both cedar and pine trees in the same area', 'Ski in the mountains and swim at the coast on the same day — the unique Lebanese geographic miracle', 'Fish in mountain lakes', 'Export both snow and sea products'],
    correct: 1,
    note: '"Talj" (snow) + "shaTT" (coast) = Lebanon\'s famous geographic miracle. "Ti3allaj wa-tnaTbaH bi-nafs il-youm" = ski and swim on the same day. In February-March, Lebanese literally drive an hour from Faraya ski resort to Beirut beaches. This "ski and sea" combination is one of Lebanon\'s great tourist selling points and a source of Lebanese pride. "Blad il-2arz wal-yakhoot" = land of cedar and [ski and sail]. No other Mediterranean country offers this so compactly.'
  },
];

const MLV_TIPS = [
  {
    title: 'Every Lebanese Has a Village',
    body: 'Lebanon\'s most defining social institution is the "day3a" (village). Despite being largely urbanized, every Lebanese family traces identity through an ancestral village. "Min wein day3itak?" (where is your village?) tells you someone\'s religious community, family clan, and often their politics. The summer return to the village ("2iSTiyaaf") empties Beirut in August. Village WhatsApp groups, village associations (jam3iyyaat), and summer "3ursha" (gathering) maintain community across generations. Even 4th-generation Lebanese in Brazil or Australia know their family\'s village — "ana min 2asl Bcharre" = I\'m originally from Bcharre.'
  },
  {
    title: 'Lebanon\'s Geographic Miracle',
    body: 'Lebanon packs extraordinary geographic diversity into 10,000 km²: Mediterranean coast (shaTT), fertile Bekaa Valley (Beqa3), Mount Lebanon range (Jabal Lubnaen) reaching 3,088m, and the Anti-Lebanon mountains. The result: ski in the morning, swim in the afternoon (February-March). Bekaa produces wine grapes and cannabis (the latter historically significant). Mountain forests of 2arz (cedar), sanawbaar (pine), and 2aHraash (mixed forest). Natural springs (3ain) give names to hundreds of villages: 3ain il-Rimaneh, 3ain Zhalta, 3ain 3aar. In spring, warad barriyye (wildflowers) cover the mountain slopes.'
  },
  {
    title: 'The Lebanese Mountain House',
    body: 'Traditional Lebanese mountain architecture centers on the "beit 3atii2" (old stone house) — built from local limestone with a characteristic triple-arch facade (3aqd tliit), red terracotta tile roof, and stone courtyard. These houses were built without cement, held by the precision of the stone itself. Post-civil war, many were abandoned as families emigrated; post-2019 crisis, restoration became both fashionable and emotional. Restoring a "beit 3atii2 fil-day3a" is a common diaspora project and a connection to roots. UNESCO and NGOs support traditional stone house preservation.'
  },
  {
    title: 'The Lebanese Mountain Weekend',
    body: 'The Lebanese mountain weekend follows a recognizable script: drive up Friday evening (traffic jams on the mountain roads are their own social event), arrive at the beit il-3eele or a rented villa, Saturday morning means fresh mountain air and a mezze breakfast, afternoon "mashwiyye" (outdoor barbecue) with family, evening "sahra" (gathering), Sunday morning before the drive back. The staples: kafta on the grill, 3araq with ice, meze spread on a stone terrace, and cousins debating politics while overlooking the valley. "Maa bifuutik il-weekend 3al-jabal" = don\'t miss the mountain weekend.'
  },
  {
    title: 'Lebanese Mountain Agriculture',
    body: 'Lebanon\'s mountains have been farmed for millennia using "turraas" (terraced agriculture) cut into hillsides. Mountain products: "3asal" (honey — Lebanese mountain honey is exported globally), olive oil, grape wine (Bekaa Valley), apples, cherries, and "3araq" (the anise spirit distilled from grapes). "2arz il-Lubnaan" (cedar forests) were once the most prized timber in the ancient world — Phoenician ships, Solomon\'s Temple, Egyptian palaces. Today, skiing at Faraya, Mzaar, and the Cedars resort is a major industry. In spring, "warad barriyye" (wildflowers) and "naHl" (bees) carpet the slopes.'
  },
];

const MLV_ABOUT = 'Lebanon is defined by its mountains as much as its coast — the Jabal Lubnaen range shapes everything from the national character to the political system (which organized itself around mountain communities). The ancestral "day3a" (village) is the deepest unit of Lebanese identity: more than citizenship, more than religion, the village tells you who a Lebanese person is and where they came from. In summer, Beirut empties into the mountains for "2iSTiyaaf" (summering) — the Lebanese migration to cooler air, family homes, mashwiyyaat (barbecues), and the deep satisfaction of being back where one belongs. Understanding this mountain vocabulary means understanding Lebanon itself.';
