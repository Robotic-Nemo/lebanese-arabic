// R582 — NEW FEATURE: Lebanese Construction & Home Life coach (prefix: cnx)

const CNX_WORDS = [
  // people
  { ar: 'المعلم', tr: 'el-ma3allim', en: 'the master craftsman / contractor', cat: 'people' },
  { ar: 'العمّال', tr: 'el-3ammaal', en: 'the workers / laborers', cat: 'people' },
  { ar: 'المهندس', tr: 'el-mouhandis', en: 'the engineer / architect', cat: 'people' },
  { ar: 'صاحب البيت', tr: 'Saa7ib el-beit', en: 'the homeowner / landlord', cat: 'people' },
  { ar: 'الجار', tr: 'ej-jaar', en: 'the neighbor', cat: 'people' },
  // materials & problems
  { ar: 'بلاط', tr: 'blaaTT', en: 'tiles / flooring', cat: 'material' },
  { ar: 'إسمنت', tr: 'ismant', en: 'cement', cat: 'material' },
  { ar: 'حديد', tr: '7adiid', en: 'iron / steel (rebar)', cat: 'material' },
  { ar: 'رطوبة', tr: 'ruTuube', en: 'dampness / moisture', cat: 'material' },
  { ar: 'تسريب', tr: 'tasriib', en: 'a leak (water/pipe)', cat: 'material' },
  { ar: 'شقوق', tr: 'shu2uu2', en: 'cracks (in walls/ceiling)', cat: 'material' },
  { ar: 'صبّ', tr: 'Sabb', en: 'concrete pour / casting', cat: 'material' },
  // rooms & spaces
  { ar: 'الشقة', tr: 'esh-sha2a', en: 'the apartment / flat', cat: 'spaces' },
  { ar: 'الأوضة', tr: 'el-ooDE', en: 'the room', cat: 'spaces' },
  { ar: 'السطح', tr: 'es-saTa7', en: 'the rooftop / roof terrace', cat: 'spaces' },
  { ar: 'الملجأ', tr: 'el-malija', en: 'the shelter / basement bunker', cat: 'spaces' },
  { ar: 'المصعد', tr: 'el-maSʕad', en: 'the elevator / lift', cat: 'spaces' },
  { ar: 'الجنريتور', tr: 'ej-jinereetor', en: 'the generator (private power)', cat: 'spaces' },
  // Lebanese-specific expressions
  { ar: 'كشف', tr: 'kashf', en: 'inspection / assessment quote', cat: 'expr' },
  { ar: 'شو الأضرار؟', tr: 'shu el-aDraar?', en: 'what are the damages?', cat: 'expr' },
  { ar: 'لازم تصليح', tr: 'laazim taSliH', en: 'it needs repair', cat: 'expr' },
  { ar: 'مرمّة', tr: 'marmame', en: 'renovation / restoration', cat: 'expr' },
  { ar: 'بكرا بكرا', tr: 'bukra bukra', en: 'tomorrow tomorrow (never on time — builder delay)', cat: 'expr' },
  { ar: 'عاد وعود', tr: '3aad w-3uud', en: 'promises promises (unreliable contractor)', cat: 'expr' },
  { ar: 'مصيبة', tr: 'muSiibe', en: 'a disaster / catastrophe (for bad renovations)', cat: 'expr' },
  { ar: 'بدنا نهدم ونبني', tr: 'bidna nhaddem w-nibni', en: 'we need to tear down and rebuild', cat: 'expr' },
  { ar: 'في انتربريز؟', tr: 'fi intirpriiz?', en: 'is there a contractor quote? (enterprise)', cat: 'expr' },
  { ar: 'الكهربا مقطوعة', tr: 'el-kahrabaa ma2Tuu3a', en: 'the electricity is cut', cat: 'expr' },
];

const CNX_DRILLS = [
  {
    q: 'What does المعلم (el-ma3allim) refer to in a Lebanese construction context?',
    opts: ['The building inspector', 'The master craftsman / contractor in charge', 'The architect drawing the plans', 'The property lawyer'],
    ans: 1,
    exp: 'el-ma3allim = the master craftsman or contractor. In Lebanon, calling someone "معلم" is also a respectful address for any skilled tradesman — carpenter, plumber, electrician. Often the only person who actually knows what\'s going on at the site.'
  },
  {
    q: 'A Lebanese homeowner says لازم تصليح (laazim taSliH) — what do they mean?',
    opts: ['Let\'s renovate completely', 'It needs repair / it must be fixed', 'Call the inspector', 'Tear it down and rebuild'],
    ans: 1,
    exp: 'laazim taSliH = "it needs repair." تصليح (taSliH) = fixing/repairing. لازم (laazim) = must/necessary. A phrase every Lebanese homeowner uses constantly given aging infrastructure.'
  },
  {
    q: 'What is the cultural meaning of بكرا بكرا (bukra bukra) in Lebanese construction?',
    opts: ['Everything will be done by tomorrow', 'Two days from now is the deadline', 'A running joke about contractors always postponing — "tomorrow" that never comes', 'A respectful farewell to the workers'],
    ans: 2,
    exp: 'bukra bukra = "tomorrow, tomorrow" — a famous Lebanese cultural reference to perpetual delays. When a contractor says bukra (tomorrow), everyone knows it means "some indeterminate future time." Used with weary humor across all contexts.'
  },
  {
    q: 'What is رطوبة (ruTuube) and why is it a major problem in Lebanese homes?',
    opts: ['Electrical faults from generator overload', 'Dampness / moisture that damages walls and buildings', 'Noise from neighbors', 'Unpermitted construction'],
    ans: 1,
    exp: 'ruTuube = dampness/moisture. A plague in Lebanese apartments — coastal humidity, old construction, and poor waterproofing combine to create chronic ruTuube. One of the most common landlord-tenant disputes.'
  },
  {
    q: 'What is الجنريتور (ej-jinereetor) and why is it essential in Lebanon?',
    opts: ['The building\'s main water pump', 'A private generator providing power during electricity cuts', 'The elevator maintenance company', 'A Lebanese term for the building concierge'],
    ans: 1,
    exp: 'el-jinereetor = the generator. Lebanon has chronic electricity cuts (often 3-12 hours daily), so private building generators are a standard feature. Apartments advertise "generator subscription" as a selling point.'
  },
  {
    q: 'Someone describes their apartment renovation as مصيبة (muSiibe) — what do they mean?',
    opts: ['A beautiful successful renovation', 'A blessing from God', 'A complete disaster / catastrophe', 'A minor inconvenience'],
    ans: 2,
    exp: 'muSiibe = disaster/catastrophe. Used dramatically (and genuinely) when contractors have made things worse, costs spiraled, timelines collapsed. Lebanese people use muSiibe for anything from a truly ruined apartment to a slightly bad haircut.'
  },
  {
    q: 'What does السطح (es-saTa7) refer to in Lebanese housing culture?',
    opts: ['The basement storage area', 'The rooftop / roof terrace — often used for laundry, gatherings, or generators', 'The building entrance lobby', 'The shared parking area'],
    ans: 1,
    exp: 'es-saTa7 = the rooftop. In Lebanese buildings, the rooftop is prime real estate — used for hanging laundry, family gatherings, pigeon keeping, and housing generators. Top-floor apartments often include saTa7 access.'
  },
  {
    q: 'What is مرمّة (marmame) in Lebanese renovation?',
    opts: ['A type of cement for wet areas', 'Full renovation / restoration work', 'An urgent repair to prevent collapse', 'The contractor\'s invoice'],
    ans: 1,
    exp: 'marmame = renovation/restoration — making something look new again. Specifically implies cosmetic restoration (plastering, painting, tiling) rather than structural rebuild. You marmame an old apartment, not a new one.'
  },
  {
    q: 'The contractor says في انتربريز؟ (fi intirpriiz?) — what are they asking?',
    opts: ['Is there a formal legal contract?', 'Is there a lump-sum quote for the whole job?', 'Do you have building permits?', 'Is there a government inspection?'],
    ans: 1,
    exp: 'fi intirpriiz? = is there an enterprise/lump-sum quote? Borrowed from "enterprise." Lebanese contractors often prefer intirpriiz (fixed total price) over per-day rates. Homeowners prefer it too — though the "fixed" price often grows.'
  },
  {
    q: 'What is تسريب (tasriib) and what does it usually mean for Lebanese apartments?',
    opts: ['Information leak between neighbors', 'A water leak — pipe or roof — causing water damage and wall stains', 'Electrical wire damage', 'Noise transmission through walls'],
    ans: 1,
    exp: 'tasriib = leak. Almost always refers to water leaks in the Lebanese context — pipe bursts, roof leaks, or water seeping from upstairs neighbors. A major source of inter-neighbor disputes in old Beirut buildings.'
  },
];

const CNX_TIPS = [
  'Lebanese construction culture is characterized by perpetual delays, informal relationships, and a deep reliance on personal connections (wasta) even for building permits. بكرا بكرا is not just a joke — it\'s a survival strategy.',
  'Generators (جنريتور) are a daily reality in Lebanon. Every neighborhood has a private generator "ampu" (amperage subscription) you pay monthly. Power cuts are announced with a time limit: "3 o\'clock to 7 o\'clock" — which always run over.',
  'The term معلم (ma3allim) extends beyond construction — it\'s how you address any skilled tradesman or respected elder in a trade. Calling your plumber "معلم فلان" is polite and often gets better service.',
  'Beirut\'s 2020 port explosion damaged over 77,000 apartments, making مرمّة (renovation) a mass cultural experience. Entire neighborhoods went through simultaneous reconstruction, creating a shared vocabulary of repair and loss.',
  'رطوبة (moisture/dampness) is one of the most discussed topics in Lebanese apartment life. Buildings from the 1950s-70s construction boom often lack proper insulation, making ruTuube a chronic issue that landlords routinely downplay.',
];

const CNX_ABOUT = 'Lebanese construction culture is one of the most vivid intersections of culture, economics, and resilience. From the معلم who runs every site with informal expertise to the جنريتور that powers homes through endless cuts, home and construction vocabulary is deeply integrated into daily Lebanese conversation. The بكرا بكرا delay culture, chronic رطوبة, and the post-2020 explosion مرمّة of Beirut neighborhoods have made this vocabulary essential — not just for homeowners, but for anyone trying to understand Lebanese daily life.';
