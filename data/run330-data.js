// Run #330 — Lebanese Cities & Neighborhoods Coach (cty)
// 40 words across 5 categories: beirut / cities / regions / landmarks / phrases
// 10 MCQ drills, 5 tips, about text

const CTY_WORDS = [
  // beirut neighborhoods
  { tr: 'Hamra', ar: 'حمرا', en: 'Hamra (cultural hub, west Beirut)', cat: 'beirut' },
  { tr: 'Jmiize', ar: 'جميزة', en: 'Gemmayzeh (arts & nightlife district)', cat: 'beirut' },
  { tr: 'Ashrafiiye', ar: 'الأشرفية', en: 'Ashrafieh (east Beirut, historic Christian quarter)', cat: 'beirut' },
  { tr: 'Mar Mikhayil', ar: 'مار مخايل', en: 'Mar Mikhael (hipster neighborhood, street art)', cat: 'beirut' },
  { tr: 'Wist il-Balad', ar: 'وسط البلد', en: 'Downtown Beirut (city center)', cat: 'beirut' },
  { tr: 'Rawshe', ar: 'الروشة', en: 'Rawche (Pigeon Rock landmark, west Beirut)', cat: 'beirut' },
  { tr: 'l-Bourj', ar: 'البرج', en: 'Bourj (Martyrs\' Square, city center)', cat: 'beirut' },
  { tr: 'Dahye', ar: 'الضاحية', en: 'Dahiyeh (southern suburbs of Beirut)', cat: 'beirut' },
  // major cities
  { tr: 'Trabel', ar: 'طرابلس', en: 'Tripoli (second city, north Lebanon)', cat: 'cities' },
  { tr: 'Saida', ar: 'صيدا', en: 'Sidon (ancient port city, south Lebanon)', cat: 'cities' },
  { tr: 'Suur', ar: 'صور', en: 'Tyre / Sour (southernmost major city)', cat: 'cities' },
  { tr: 'Zahleh', ar: 'زحلة', en: 'Zahleh (Bekaa valley capital, arak & wine)', cat: 'cities' },
  { tr: 'Jounieh', ar: 'جونيه', en: 'Jounieh (coastal resort north of Beirut)', cat: 'cities' },
  { tr: 'Jbeil', ar: 'جبيل', en: 'Byblos / Jbeil (ancient Phoenician city)', cat: 'cities' },
  { tr: 'Baalbek', ar: 'بعلبك', en: 'Baalbek (Bekaa city, Roman temple ruins)', cat: 'cities' },
  { tr: 'Bsharri', ar: 'بشري', en: 'Bsharri (Gibran\'s village, cedar forest)', cat: 'cities' },
  // regions
  { tr: 'Jabal Libnan', ar: 'جبل لبنان', en: 'Mount Lebanon (central mountain region)', cat: 'regions' },
  { tr: 'l-Janub', ar: 'الجنوب', en: 'The South (southern Lebanon)', cat: 'regions' },
  { tr: 'sh-Shimal', ar: 'الشمال', en: 'The North (northern Lebanon)', cat: 'regions' },
  { tr: 'l-Bqaa3', ar: 'البقاع', en: 'The Bekaa Valley (agricultural heartland)', cat: 'regions' },
  { tr: 'l-Jabal', ar: 'الجبل', en: 'The Mountain (shorthand for Mount Lebanon)', cat: 'regions' },
  { tr: 'l-Saa7el', ar: 'الساحل', en: 'The Coast (coastal strip)', cat: 'regions' },
  { tr: 'l-Gharbiye', ar: 'الغربية', en: 'The West (west Beirut / western region)', cat: 'regions' },
  { tr: 'sh-Shar2iye', ar: 'الشرقية', en: 'The East (east Beirut / eastern region)', cat: 'regions' },
  // landmarks
  { tr: 'il-Arz', ar: 'الأرز', en: 'The Cedars (cedar forest & ski resort)', cat: 'landmarks' },
  { tr: 'wadi 2adisha', ar: 'وادي قاديشا', en: 'Qadisha Valley (UNESCO sacred valley)', cat: 'landmarks' },
  { tr: 'Nahr il-Kalb', ar: 'نهر الكلب', en: 'Dog River / Nahr el-Kalb (ancient carvings)', cat: 'landmarks' },
  { tr: 'Jsr il-Basha', ar: 'جسر الباشا', en: 'Jisr el-Basha (bridge/area, east Beirut)', cat: 'landmarks' },
  { tr: 'il-Hamam', ar: 'الحمام', en: 'The Corniche (Beirut seafront promenade)', cat: 'landmarks' },
  { tr: 'Marto2', ar: 'مارتق', en: 'Martyrs\' Square (symbolic Beirut square)', cat: 'landmarks' },
  { tr: 'Jeita', ar: 'جعيتا', en: 'Jeita Grotto (famous stalactite caves)', cat: 'landmarks' },
  { tr: 'Beaufort', ar: 'بوفور', en: 'Beaufort Castle (crusader castle, south)', cat: 'landmarks' },
  // place phrases
  { tr: 'min wein inta?', ar: 'من وين إنت؟', en: 'where are you from? (m)', cat: 'phrases' },
  { tr: 'ana min Beirut', ar: 'أنا من بيروت', en: 'I\'m from Beirut', cat: 'phrases' },
  { tr: 'min ay manTa2a?', ar: 'من أي منطقة؟', en: 'from which area / region?', cat: 'phrases' },
  { tr: 'ibn/bint il-balad', ar: 'ابن/بنت البلد', en: 'son/daughter of the land (local person)', cat: 'phrases' },
  { tr: 'min 3indon', ar: 'من عندن', en: 'from their area / from that side', cat: 'phrases' },
  { tr: 'wein 3aamil?', ar: 'وين عامل؟', en: 'where are you based? / where do you work?', cat: 'phrases' },
  { tr: 'ruu7 3al-Hamra', ar: 'روح عالحمرا', en: 'go to Hamra / head toward Hamra', cat: 'phrases' },
  { tr: 'ta3a 3ala Beirut', ar: 'تعا عالبيروت', en: 'come to Beirut / head to Beirut', cat: 'phrases' },
];

const CTY_DRILLS = [
  {
    q: 'What is "Wist il-Balad" in Beirut?',
    opts: ['A neighborhood in south Beirut', 'Downtown Beirut / city center', 'A mountain village', 'A port area'],
    correct: 1,
    note: '"Wist il-Balad" (وسط البلد) = downtown Beirut. Rebuilt after the civil war, it\'s the historic commercial and political center. The area was heavily damaged in the 2020 Beirut explosion. Before the war, it was the vibrant heart of the city.'
  },
  {
    q: 'Which Lebanese city is known for Roman temple ruins?',
    opts: ['Tripoli', 'Sidon', 'Baalbek', 'Jounieh'],
    correct: 2,
    note: '"Baalbek" (بعلبك) in the Bekaa Valley hosts the largest and best-preserved Roman temple complex in the world — the Temple of Jupiter and Temple of Bacchus. Also known for the annual Baalbek International Festival.'
  },
  {
    q: 'What is "l-Bqaa3" (البقاع)?',
    opts: ['A Beirut neighborhood', 'The Bekaa Valley', 'The southern coast', 'The northern mountains'],
    correct: 1,
    note: '"L-Bqaa3" (البقاع) = the Bekaa Valley — Lebanon\'s agricultural heartland and wine country. Cities like Zahleh and Baalbek are in the Bekaa. Famous for arak production, vineyards, and rich farming culture.'
  },
  {
    q: 'Which neighborhood is known as Beirut\'s hipster and street-art district?',
    opts: ['Hamra', 'Dahiyeh', 'Mar Mikhayil', 'Wist il-Balad'],
    correct: 2,
    note: '"Mar Mikhayil" (مار مخايل) — formerly an industrial area, now Beirut\'s most creative neighborhood. Known for galleries, cafés, street art, and the local craft beer scene. Also heavily affected by the 2020 explosion but rebuilt with community spirit.'
  },
  {
    q: 'What does "min wein inta?" mean?',
    opts: ['How old are you?', 'Where are you going?', 'Where are you from?', 'Where do you live?'],
    correct: 2,
    note: '"Min wein inta?" (من وين إنت؟) = where are you from? In Lebanon, this question is loaded — it\'s often a way of identifying someone\'s religious community and regional background. Lebanese identity is deeply tied to village and family origin, especially "il-Day3a" (home village).'
  },
  {
    q: 'What is "Jbeil" (جبيل) known as internationally?',
    opts: ['Sidon', 'Byblos', 'Tyre', 'Batroun'],
    correct: 1,
    note: '"Jbeil" = Byblos — one of the oldest continuously inhabited cities in the world (~7000 years). The ancient Phoenician port gave us the word "Bible" (through Greek "Byblos"). Today it\'s a charming historic town with Crusader ruins and a lively port.'
  },
  {
    q: 'What is "il-Arz" (الأرز)?',
    opts: ['The Bekaa Valley', 'The Cedars of Lebanon', 'The Corniche seafront', 'The Dog River'],
    correct: 1,
    note: '"Il-Arz" (الأرز) = The Cedars — the famous Cedar of Lebanon forests near Bsharri in north Lebanon. The cedar tree is on the Lebanese flag. The ancient forests are a UNESCO World Heritage site and a national symbol of pride and resilience.'
  },
  {
    q: 'Which Beirut area is known for its cultural hub and bookshops?',
    opts: ['Ashrafieh', 'Hamra', 'Dahiyeh', 'Bourj'],
    correct: 1,
    note: '"Hamra" (حمرا) in west Beirut — historically the intellectual and cultural center of the Arab world in the 1960s-70s. Home to the American University of Beirut (AUB), bookshops, and the lively Hamra Street. Still the bohemian heart of west Beirut.'
  },
  {
    q: 'What is "l-Janub" (الجنوب)?',
    opts: ['The North', 'The Bekaa', 'The South', 'The Mountain'],
    correct: 2,
    note: '"L-Janub" (الجنوب) = The South — southern Lebanon, historically a contested region. Cities include Sidon (Saida) and Tyre (Suur). The south has a strong identity — "ahel l-janub" (people of the south) are known for pride, hospitality, and resilience.'
  },
  {
    q: 'What is "wadi 2adisha"?',
    opts: ['A Bekaa Valley wine region', 'A Beirut waterfront area', 'A UNESCO sacred valley near Bsharri', 'A coastal fishing village'],
    correct: 2,
    note: '"Wadi 2adisha" (وادي قاديشا) = the Holy Valley / Qadisha Valley — a UNESCO World Heritage site in north Lebanon. Ancient Christian monasteries carved into cliffsides, waterfalls, and the Cedars. "Qadisha" means holy in Aramaic — Lebanon\'s deep Christian heritage preserved here for centuries.'
  },
];

const CTY_TIPS = [
  {
    title: 'Lebanon Is Tiny but Incredibly Diverse',
    body: 'Lebanon is about the size of Connecticut (10,452 km²) yet contains mountains with ski resorts, Mediterranean beaches, a fertile valley, and ancient ruins — all within 2 hours of each other. Lebanese people are deeply proud of their village origins ("min ay day3a?" = "which village are you from?"). Even if you live in Beirut for generations, your family\'s ancestral village defines your identity.'
  },
  {
    title: 'Beirut\'s Two Halves',
    body: 'Historically, Beirut was divided into west (predominantly Muslim) and east (predominantly Christian) during the civil war (1975-1990). The green line divided Hamra from Ashrafieh. Today the city is unified and mixed, but the east-west cultural distinction still echoes in neighborhoods. "B-wist il-balad" (downtown) was the neutral meeting point rebuilt after the war — and a painful symbol after the 2020 explosion.'
  },
  {
    title: 'The Bekaa: Wine, Arak & Agriculture',
    body: '"L-Bqaa3" (the Bekaa Valley) is Lebanon\'s food basket. Chateau Ksara, Chateau Kefraya, and Massaya vineyards produce world-class Lebanese wine. Zahleh is famous for its café terraces on the Bardawni river and meze culture. "Arak Zahlawi" (Zahleh arak) is considered the finest. When Lebanese say "raa7na 3a l-bqaa3" (we went to the Bekaa), they often mean for a long wine-and-food lunch.'
  },
  {
    title: 'The Cedar Tree: Lebanon\'s Symbol',
    body: 'The cedar tree on the Lebanese flag is sacred. "Il-Arz" (The Cedars) near Bsharri in north Lebanon are the last surviving ancient cedar forests — some trees over 1,000 years old. "Arzen Libnan" (Cedars of Lebanon) appear in the Bible and ancient Phoenician texts. Lebanese poet Gibran Khalil Gibran, from Bsharri, made the cedar a symbol of Lebanese literary identity. Visiting il-Arz is a pilgrimage for Lebanese.'
  },
  {
    title: 'Giving Directions the Lebanese Way',
    body: 'Lebanese people give directions by landmarks, not street names — streets rarely have obvious signs. "Ruu7 3al Hamra, min 3ind il-Barbar" (go toward Hamra, from near Barbar restaurant) is typical. Rotaries ("duwwar") are key anchors. "3al yimiin" (right), "3al shmal" (left), "duGhri" (straight), "huda" (down here) are direction words. Google Maps exists but "ask someone" remains the Lebanese default. Expect creative, expressive route descriptions.'
  },
];

const CTY_ABOUT = 'Lebanon\'s geography is inseparable from its culture and identity. From the Phoenician port cities of the coast to the ancient cedar forests of the north, from the Roman ruins of Baalbek to the creative streets of Mar Mikhael — every place in Lebanon carries centuries of history and intense local pride. For a Lebanese person, knowing which neighborhood someone is from, or which village their family originates from, is foundational to understanding who they are.';
