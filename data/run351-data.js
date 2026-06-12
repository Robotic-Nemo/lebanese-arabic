// Run #351 — Lebanese Weddings & Celebrations Coach (wdd)
// 40 words across 5 categories: wedding-party / celebrations / music-dance / food-feast / phrases
// 10 MCQ drills, 5 tips, about text

const WDD_WORDS = [
  // wedding-party
  { tr: '3ariss', ar: 'عريس', en: 'groom', cat: 'wedding-party' },
  { tr: '3aruuse', ar: 'عروسة', en: 'bride', cat: 'wedding-party' },
  { tr: '3urs', ar: 'عرس', en: 'wedding', cat: 'wedding-party' },
  { tr: '7aflit 3irs', ar: 'حفلة عرس', en: 'wedding reception / wedding party', cat: 'wedding-party' },
  { tr: 'da3wa', ar: 'دعوة', en: 'invitation / wedding banquet', cat: 'wedding-party' },
  { tr: '3aqid 2araan', ar: 'عقد قران', en: 'marriage contract / religious ceremony', cat: 'wedding-party' },
  { tr: 'mahr', ar: 'مهر', en: 'bride price / dowry (traditional)', cat: 'wedding-party' },
  { tr: '7aflit Hinna', ar: 'حفلة حنة', en: 'henna party — pre-wedding celebration for bride', cat: 'wedding-party' },
  // celebrations
  { tr: 'mabrook', ar: 'مبروك', en: 'congratulations', cat: 'celebrations' },
  { tr: '2alf mabrook', ar: 'ألف مبروك', en: 'a thousand congratulations — stronger than mabrook', cat: 'celebrations' },
  { tr: 'bil-maweed il-a3la', ar: 'بالموعد الأعلى', en: 'may the next occasion be even greater — said at celebrations', cat: 'celebrations' },
  { tr: 'yikmul 3aleik', ar: 'يكمّل عليك', en: 'may it continue for you — said to parents of bride/groom', cat: 'celebrations' },
  { tr: 'kull sane winta bikheir', ar: 'كل سنة وأنت بخير', en: 'every year may you be well — birthday / anniversary wish', cat: 'celebrations' },
  { tr: 'alla yibaarik feekum', ar: 'الله يبارك فيكم', en: 'may God bless you — said to the couple', cat: 'celebrations' },
  { tr: '3iqbaalak', ar: 'عقبالك', en: 'may you be next — said to unmarried guests at a wedding (m)', cat: 'celebrations' },
  { tr: '3iqbaalek', ar: 'عقبالك', en: 'may you be next — said to unmarried guests at a wedding (f)', cat: 'celebrations' },
  // music-dance
  { tr: 'dabke', ar: 'دبكة', en: 'traditional Lebanese line dance — performed at weddings', cat: 'music-dance' },
  { tr: 'zaffe', ar: 'زفّة', en: 'wedding procession — bride/groom entrance with music', cat: 'music-dance' },
  { tr: 'ma7allem', ar: 'محلّم', en: 'wedding singer / MC — leads the dabke and zaffe', cat: 'music-dance' },
  { tr: 'darbakke', ar: 'دربكة', en: 'goblet drum — key percussion in Lebanese wedding music', cat: 'music-dance' },
  { tr: 'Tabl', ar: 'طبل', en: 'drum / large percussion at outdoor celebrations', cat: 'music-dance' },
  { tr: 'mizmar', ar: 'مزمار', en: 'traditional wind instrument — played at zaffe processions', cat: 'music-dance' },
  { tr: 'mzayyaaniin', ar: 'مزيّنين', en: 'dressed up / looking beautiful — said of the couple or guests', cat: 'music-dance' },
  { tr: '7afle', ar: 'حفلة', en: 'party / celebration / concert', cat: 'music-dance' },
  // food-feast
  { tr: 'ma2iide', ar: 'مائدة', en: 'banquet table / feast spread', cat: 'food-feast' },
  { tr: '7alawiyyaat', ar: 'حلويات', en: 'sweets / pastries — essential at Lebanese celebrations', cat: 'food-feast' },
  { tr: 'mushabbak', ar: 'مشبّك', en: 'fried sweet pastry — traditional wedding sweet', cat: 'food-feast' },
  { tr: 'ma3mul', ar: 'معمول', en: 'date or nut stuffed cookies — made for celebrations', cat: 'food-feast' },
  { tr: 'tarte 3urs', ar: 'تارت عرس', en: 'wedding cake', cat: 'food-feast' },
  { tr: '3araq', ar: 'عرق', en: 'arak — Lebanese anise spirit, served at celebrations', cat: 'food-feast' },
  { tr: 'mezze', ar: 'مزة', en: 'spread of small dishes — how Lebanese celebrations begin', cat: 'food-feast' },
  { tr: 'karaaki', ar: 'كراكي', en: 'fancy sweets / baklava boxes — gift given at weddings', cat: 'food-feast' },
  // phrases
  { tr: 'shu Helwiin', ar: 'شو حلوين', en: 'how beautiful they are — said of the couple', cat: 'phrases' },
  { tr: 'ma7la l-3aruuse', ar: 'محلى العروسة', en: 'how beautiful the bride is', cat: 'phrases' },
  { tr: 'alla ykhalliilek iyyaah', ar: 'الله يخليلك إياه', en: 'may God keep him for you — said to bride about groom', cat: 'phrases' },
  { tr: 'alla ykhalliilek iyyaaha', ar: 'الله يخليلك إياها', en: 'may God keep her for you — said to groom about bride', cat: 'phrases' },
  { tr: 'hall el-waTar', ar: 'حلّ الوتر', en: 'loose the string — signal to start the zaffe/dancing', cat: 'phrases' },
  { tr: '3asharti', ar: 'عشرتي', en: 'my companion / my dear one — affectionate for partner', cat: 'phrases' },
  { tr: '7abb u widd', ar: 'حبّ وودّ', en: 'love and affection — blessing for a couple', cat: 'phrases' },
  { tr: 'tiHmiluu-lkon', ar: 'تحملولكن', en: 'may you carry for each other — toast at weddings', cat: 'phrases' },
];

const WDD_DRILLS = [
  {
    q: 'What is the "zaffe" (زفّة) at a Lebanese wedding?',
    opts: ['The wedding cake cutting', 'The bride/groom entrance procession with live drums, mizmar, and dancing', 'The religious ceremony only', 'The henna party'],
    correct: 1,
    note: '"Zaffe" (زفّة) = the wedding procession — the dramatic entrance of the bride and groom, led by a ma7allem (wedding singer), darbakke (drum) players, mizmar (wind instrument), and often fire-breathers and sword dancers in traditional weddings. The zaffe is the emotional peak of a Lebanese wedding. "Yrfa3u-l-zaffe" = raise the zaffe / start the procession. Guests ululate (zagharit) as the couple enters.'
  },
  {
    q: 'What does "3iqbaalak/3iqbaalek" (عقبالك) mean when said at a wedding?',
    opts: ['Congratulations to the couple', 'May you be next — said to an unmarried guest, implying their wedding is coming', 'Enjoy the food', 'Welcome to our family'],
    correct: 1,
    note: '"3iqbaalak" (m) / "3iqbaalek" (f) = may it be your turn next. Said to unmarried people at weddings with a mix of warmth and pressure. The implication: "soon you\'ll be the bride/groom." Single Lebanese people hear this constantly at family weddings. Can feel like genuine blessing or social pressure depending on context. Often accompanied by a wink. "3iqbaalkon killon" = may it happen for all of you.'
  },
  {
    q: 'What is "dabke" (دبكة) and why is it central to Lebanese weddings?',
    opts: ['A type of Lebanese dessert', 'The traditional Lebanese line dance — performed at weddings and celebrations', 'The wedding song genre only', 'A religious blessing'],
    correct: 1,
    note: '"Dabke" (دبكة) = the traditional Levantine line dance. At Lebanese weddings, the dabke is performed in lines, led by a "lawwiH" (leader) who spins and jumps while the line stamps feet in unison. The dabke connects Lebanese to their village roots — each region has its own style. "Yalla ndabkeh!" = let\'s do the dabke! Even diaspora Lebanese in Brazil and Australia perform dabke at weddings. It\'s identity in dance form.'
  },
  {
    q: 'What does "mabrook" (مبروك) mean and when is its stronger form used?',
    opts: ['Goodbye', 'Congratulations — "2alf mabrook" (a thousand congratulations) is used for major occasions like weddings', 'Thank you', 'Blessings for the meal'],
    correct: 1,
    note: '"Mabrook" (مبروك) = congratulations (lit. "blessed"). Used for any good news. "2alf mabrook" = a thousand congratulations — stronger, for major events like weddings, births, graduations. Response: "alla ybaarik fiik" (may God bless you) or "winta/winti mbaarak/mbaarake". "Mabrook 3a l-3aruss!" = congratulations on the bride! Lebanese use mabrook constantly — engagement, pregnancy, promotion, even a new car.'
  },
  {
    q: 'What is the "ma7allem" (محلّم) at a Lebanese wedding?',
    opts: ['The religious officiant', 'The wedding singer / MC who leads the zaffe, dabke, and music — the master of the celebration', 'The best man', 'The chef'],
    correct: 1,
    note: '"Ma7allem" (محلّم) = the master of the wedding — traditionally a singer who knows how to read the crowd, lead the dabke, orchestrate the zaffe, and keep energy high all night. Famous ma7alems can make or break a Lebanese wedding. "Jiibuu ma7allem!" = bring a ma7allem! Classic Lebanese wedding ma7allem names: Abbas Ibrahim, Milhem Barakat. The ma7allem leads call-and-response with guests.'
  },
  {
    q: 'What is "7aflit Hinna" (حفلة حنة) in Lebanese wedding tradition?',
    opts: ['The wedding ceremony itself', 'The pre-wedding henna party — a celebration for the bride with women painting henna on hands', 'The engagement party', 'The day after celebration'],
    correct: 1,
    note: '"7aflit Hinna" (حفلة حنة) = henna party — a pre-wedding celebration, traditionally women-only, where henna is applied to the bride\'s hands and feet in decorative patterns. Also called "laylat il-Hinna" (henna night). It\'s a time for singing, dancing, and giving the bride advice for married life. In modern Lebanon, often mixed and turned into a bigger party. The henna (Hinna) symbolizes beauty, fertility, and protection from evil eye.'
  },
  {
    q: 'What does "bil-maweed il-a3la" (بالموعد الأعلى) mean at celebrations?',
    opts: ['This is the best party ever', 'May the next occasion be even greater — a celebratory blessing looking forward', 'You arrived at the right time', 'May God bless this occasion'],
    correct: 1,
    note: '"Bil-maweed il-a3la" (بالموعد الأعلى) = may the next occasion be even better/higher. Said at weddings, births, graduations — implying "may we meet again for something even more joyful." A forward-looking blessing. At a wedding: "bil-maweed il-a3la" = may we gather again for your children\'s weddings. Lebanese celebrations are always pointing to the next celebration. This phrase perfectly captures that joy-forward orientation.'
  },
  {
    q: 'What is "mushabbak" (مشبّك) and when is it served?',
    opts: ['A wedding dance style', 'A fried sweet pastry — traditional Lebanese wedding sweet, orange/golden and crispy', 'A type of wedding invitation', 'A Lebanese musical instrument'],
    correct: 1,
    note: '"Mushabbak" (مشبّك) = a traditional Lebanese/Levantine fried pastry — latticed orange dough soaked in sugar syrup, crispy outside. Served at weddings, Ramadan, and celebrations. The name means "interlocked/latticed" — like the couple being joined. At street weddings, boxes of mushabbak and ma3mul (nut cookies) are distributed to guests. "3a l-3aruuse ya mushabbak" = a classic wedding song calling for the mushabbak.'
  },
  {
    q: 'What does "yikmul 3aleik" (يكمّل عليك) mean when said to a parent at a wedding?',
    opts: ['May God keep your children safe', 'May it continue for you — said to parents of bride or groom, wishing them to see more joyful occasions', 'Congratulations on the party', 'May God bless your home'],
    correct: 1,
    note: '"Yikmul 3aleik" (يكمّل عليك) = may it continue / may you see more of this. Said to parents at their child\'s wedding — wishing them more celebrations ahead (grandchildren, more weddings). From the root "kammala" (to complete/continue). The full blessing at a wedding: "mabrook, yikmul 3aleik, bil-maweed il-a3la!" = congratulations, may it continue for you, may we gather again for greater occasions! Lebanese pile on the blessings.'
  },
  {
    q: 'What is "3aqid 2araan" (عقد قران) in Lebanese wedding culture?',
    opts: ['The engagement ring ceremony', 'The religious marriage contract — the official religious binding of the couple, separate from the reception', 'The best man speech', 'The honeymoon planning'],
    correct: 1,
    note: '"3aqid 2araan" (عقد قران) = the religious marriage contract / nikah (Islamic) or church ceremony (Christian). In Lebanon, there is no civil marriage — couples must marry through a religious institution (Muslim, Maronite, Orthodox, etc.). The 3aqid 2araan is the legal/religious binding, often held separately before the evening reception (7aflit 3irs). This quirk of Lebanese law means couples seeking civil marriage often go to Cyprus. "In3aqaduu" = they were married (contracted).'
  },
];

const WDD_TIPS = [
  {
    title: 'The Lebanese Wedding: An Epic Multi-Day Event',
    body: 'A full Lebanese wedding is not one event but a sequence: "7aflit Hinna" (henna night, often Thursday), the "3aqid 2araan" religious ceremony (Friday/Saturday afternoon), and the "7aflit 3irs" (reception, Saturday evening). The reception can have 300-800+ guests, run until 4am, feature live orchestra, a ma7allem (wedding singer), zaffe procession, hours of dabke dancing, and a full mezze then dinner. The phrase "3urs lubnaaani" (Lebanese wedding) is synonymous with excess, joy, and spectacle even in the Arab world.'
  },
  {
    title: 'The Zaffe: Lebanon\'s Ceremonial Wedding Entrance',
    body: 'The "zaffe" (زفّة) is Lebanon\'s defining wedding moment. As the bride and groom enter the hall, a ma7allem sings and leads musicians playing darbakke (goblet drums), Tabl (large drum), and mizmar (wind instrument). Fire-breathers, sword dancers, and flower girls may precede the couple. Guests rise, ululate ("zagharit" — the high trill made by women), and throw rose petals. In some regions, live horses or men on horseback lead the procession. "RayyaH el-waTar" (loose the string) is the signal the zaffe is starting. No Lebanese wedding is complete without it.'
  },
  {
    title: 'Dabke: Dance of Identity',
    body: '"Dabke" (دبكة) is the national folk dance of Lebanon and the Levant. At weddings it is obligatory — families proudly form lines, led by a "lawwiH" (lead dancer) who spins, jumps, and improvises. The line stamps feet together in hypnotic rhythm to dabke music (darbakke drum + mijwiz flute). Lebanese dabke styles vary by region: Bekaa, South, North all have distinct rhythms. For diaspora Lebanese, dancing dabke at a wedding is the most direct connection to their roots. "Nsawwi dabke!" = let\'s do the dabke!'
  },
  {
    title: 'Wedding Blessings: What to Say and When',
    body: 'At a Lebanese wedding, knowing the right phrases earns you deep social credit: "2alf mabrook!" (a thousand congratulations — to the couple), "3iqbaalak/3iqbaalek" (may you be next — to single guests), "yikmul 3aleik" (may it continue — to parents), "bil-maweed il-a3la" (may the next occasion be greater), "shu Helwiin!" (how beautiful they are!), "ma7la l-3aruuse" (how beautiful the bride). Don\'t leave without saying at least three of these. Lebanese weddings run on expressed emotions and verbal blessings — staying quiet is socially noted.'
  },
  {
    title: 'Lebanese Wedding Food: The Feast',
    body: 'Food at a Lebanese wedding is ceremonial and abundant. The evening begins with "mezze" (small dishes: hummus, kebbe nayye, fattoush, kibbe, pastries). Then a full dinner of grilled meats, rice, and salads. The "tarte 3urs" (wedding cake) is cut at midnight with great ceremony. Boxes of "7alawiyyaat" (sweets) — often karaaki (baklava assortments) or mushabbak — are given to guests as they leave. "3araq" (arak, Lebanese anise spirit) flows alongside wine and whiskey. A Lebanese wedding without abundant food is unthinkable — generosity at a wedding reflects family honor.'
  },
];

const WDD_ABOUT = 'A Lebanese wedding is one of the great spectacles of Mediterranean culture — a multi-day celebration combining religious ceremony, ancient folk dance, elaborate zaffe processions, and food served in quantities that would embarrass most banquets. Whether Maronite, Muslim, Druze, or Orthodox, Lebanese weddings share common vocabulary and ritual: the zaffe, the dabke, the ma7allem, the "2alf mabrook" and "3iqbaalak" blessings showered on guests, and the unstated competition over who had the most memorable wedding. Knowing this vocabulary is understanding one of Lebanon\'s deepest cultural expressions.';
