// R603 — NEW FEATURE: Lebanese Arak, Wine & Drinking Culture (prefix: ark)

const ARK_WORDS = [
  // arak
  { ar: 'عرق', tr: '3ara2', en: 'arak (anise-flavored spirit, Lebanon\'s national drink)', cat: 'arak' },
  { ar: 'طرشي', tr: 'Tarshi', en: 'white/cloudy (arak turning white when water added — "louching")', cat: 'arak' },
  { ar: 'مزة', tr: 'meze', en: 'mezze (small dishes served with arak)', cat: 'arak' },
  { ar: 'على الريق', tr: '3ala el-rii2', en: 'on an empty stomach (drinking without food — bad form)', cat: 'arak' },
  { ar: 'صحة وهنا', tr: 'Se77a w hana', en: 'cheers! (health and happiness)', cat: 'arak' },
  { ar: 'كاسات', tr: 'kaasaat', en: 'glasses / rounds of drinks', cat: 'arak' },
  { ar: 'مد المي', tr: 'madd el-mayy', en: 'add the water (to the arak)', cat: 'arak' },
  // wine
  { ar: 'خمرة', tr: 'khamra', en: 'wine / alcohol (classical)', cat: 'wine' },
  { ar: 'نبيذ', tr: 'nabiiz', en: 'wine (colloquial)', cat: 'wine' },
  { ar: 'بكاا', tr: 'bekaa', en: 'Bekaa Valley (Lebanon\'s wine region)', cat: 'wine' },
  { ar: 'كهف ضبية', tr: 'kahf DHbiye', en: 'Ksara Cave (famous Bekaa winery caves)', cat: 'wine' },
  { ar: 'أحمر', tr: 'a7mar', en: 'red (wine)', cat: 'wine' },
  { ar: 'أبيض', tr: 'abyaD', en: 'white (wine)', cat: 'wine' },
  { ar: 'مزروبة', tr: 'mazruube', en: 'rosé', cat: 'wine' },
  // drinking phrases
  { ar: 'على رأسي', tr: '3ala raasi', en: 'with pleasure / on my head (accepting a toast warmly)', cat: 'phrases' },
  { ar: 'مش بيشرب', tr: 'mish bishrab', en: 'doesn\'t drink (saying someone is a non-drinker)', cat: 'phrases' },
  { ar: 'لحبابنا', tr: 'la-7baabna', en: 'to our loved ones (a toast)', cat: 'phrases' },
  { ar: 'دخيلك', tr: 'dkhiilak', en: 'please / I beg you (urging someone to drink up)', cat: 'phrases' },
  // pub & bar culture
  { ar: 'حانة', tr: 'haane', en: 'bar / tavern', cat: 'bar' },
  { ar: 'مسكر', tr: 'msakkir', en: 'drunk / intoxicated', cat: 'bar' },
  { ar: 'نقطة', tr: 'nu2Te', en: 'a drop (small pour — "just a drop more")', cat: 'bar' },
  { ar: 'على حسابي', tr: '3ala 7saabi', en: 'on me / my treat (paying for the round)', cat: 'bar' },
  { ar: 'ميّ معدنية', tr: 'mayy ma3daniyye', en: 'mineral water (chaser / alternative)', cat: 'bar' },
  { ar: 'بيرة', tr: 'biira', en: 'beer', cat: 'bar' },
  { ar: 'الأماكن', tr: 'el-amakin', en: 'the venues / the places (nightlife spots)', cat: 'bar' },
  // food pairings
  { ar: 'كبة', tr: 'kibbe', en: 'kibbeh (classic arak mezze pairing)', cat: 'food' },
  { ar: 'مكدوس', tr: 'makduus', en: 'makdous (pickled stuffed eggplant — perfect with arak)', cat: 'food' },
  { ar: 'حمص', tr: '7ummUS', en: 'hummus (essential mezze with arak)', cat: 'food' },
];

const ARK_DRILLS = [
  {
    q: 'What happens to عرق (3ara2) when you add water, and why is this significant?',
    opts: [
      'It turns darker amber — the tannins in the anise concentrate when diluted',
      'It turns milky white ("louching") — the anethole in anise comes out of solution, creating the signature cloud',
      'It becomes stronger — water acts as a catalyst for the fermentation process',
      'Nothing visible happens — the cloudiness is just poor-quality arak'
    ],
    ans: 1,
    exp: '3ara2 louches (turns milky white) when water is added because anethole (the anise oil compound) is soluble in alcohol but not in water. This is the defining aesthetic of Lebanese arak — the proper ratio is roughly 1 part arak to 2 parts water over ice. Lebanese arak connoisseurs judge a batch partly by how white and opaque it becomes when properly diluted.'
  },
  {
    q: 'When Lebanese people say صحة وهنا (Se77a w hana), what are they doing?',
    opts: [
      'Offering food to a guest — "health and happiness" is a serving phrase',
      'Proposing a toast — wishing health and happiness to everyone at the table',
      'Apologizing for being drunk — "health and happiness" is said after stumbling',
      'Saying goodbye — it\'s a farewell phrase used when leaving a party'
    ],
    ans: 1,
    exp: 'Se77a w hana = "health and happiness" — Lebanese toast/cheers. Se77a (health) is from the root S-7-7; hana (happiness/ease) is a word used across many contexts. The response is often "3ala 2albak" (on your heart) or just "Se77a." Lebanese drinking toasts are elaborate — you might toast multiple times to multiple people at the table before taking the first sip. Skipping someone is a social slight.'
  },
  {
    q: 'What is the proper way to drink Lebanese arak according to local tradition?',
    opts: [
      'Straight, no ice, no water — like whisky',
      'Always with mezze, mixed with water over ice (never on an empty stomach), sipped slowly',
      'As a shot — Lebanese arak is meant to be slammed, not sipped',
      'Mixed with juice — the tradition is to dilute with pomegranate juice'
    ],
    ans: 1,
    exp: 'Lebanese arak culture emphasizes slow, social drinking with abundant food. على الريق (3ala el-rii2 — on an empty stomach) is considered dangerous and bad form. The proper vessel is a small glass (not a shot glass), mixed with cold water and ice. The mezze table is inseparable from the arak ritual — you eat between sips. Drinking arak without food is associated with problem drinking, not tradition.'
  },
  {
    q: 'The Bekaa Valley (بكاا) is central to Lebanese wine. What makes this region special?',
    opts: [
      'It\'s located at sea level near Beirut with warm coastal temperatures perfect for wine',
      'It\'s a high-altitude plateau (900-1100m) with significant temperature swings, Mediterranean climate, and ancient winemaking tradition going back over 6000 years',
      'The Bekaa is famous only for illegal alcohol production — all legal wineries are in South Lebanon',
      'The Bekaa exclusively produces white wine due to its cool climate'
    ],
    ans: 1,
    exp: 'The Bekaa Valley sits at 900-1100m elevation, giving it cool nights, warm days, and good drainage. Archaeological evidence shows Levantine winemaking in the Bekaa region going back ~5000 years, with Phoenicians (c. 1500-300 BCE) developing it into a major export trade — ancient Egyptian records mention Lebanese wine. Modern Lebanese wine industry (Château Ksara, Kefraya, Massaya, Château Musar) produces internationally recognized wines, especially Cabernet Sauvignon, Cinsault, and Grenache blends. Lebanese wine exports have grown despite the country\'s crises.'
  },
  {
    q: 'What does على رأسي (3ala raasi) mean when said at a Lebanese drinking table?',
    opts: [
      'I have a headache from drinking too much',
      'With pleasure / on my head — enthusiastic acceptance of a toast or a request to drink',
      'I can\'t drink — the phrase means "on my head" as in "I take responsibility for refusing"',
      'I\'ll pay for this round — it\'s equivalent to "on my tab"'
    ],
    ans: 1,
    exp: '3ala raasi = "on my head" — used across Lebanese culture to express deep acceptance, honor, or agreement. At a drinking table: "يلا شرب (yalla eshrab — let\'s drink)" → "3ala raasi" = "with all my heart, with pleasure." It\'s a warmer acceptance than just saying yes. The phrase is used in many other contexts too: if someone thanks you for help, you say 3ala raasi — "it was an honor."'
  },
  {
    q: 'Why is مزة (meze) inseparable from arak drinking culture?',
    opts: [
      'Lebanese law requires food to be served with alcohol in all licensed venues',
      'The mezze table is the cultural purpose of arak — drinking is just the context for the hours-long social gathering around shared food',
      'Mezze neutralizes arak\'s acidity and prevents intoxication',
      'Meze was invented specifically to pair with arak — they were developed together in the 19th century'
    ],
    ans: 1,
    exp: 'Lebanese mezze culture is ancient and elaborate — small shared plates designed for extended social meals. Arak arrived as the ritual drink for these gatherings. The mezze-arak session (sometimes called a "se7rien" or just a long afternoon) can last 4-6 hours. The food keeps coming in waves; the arak is sipped between bites. To drink arak without mezze is to miss the entire point of the tradition. Makduus, kibbe, hummus, tabbouleh — these are not sides; they\'re the reason.'
  },
  {
    q: 'Lebanese wine producer Château Musar became famous internationally. What made it historically unique?',
    opts: [
      'It was the first winery in the Middle East to use oak barrels',
      'It continued producing wine throughout Lebanon\'s 1975-1990 civil war, even when the vineyards were in a war zone — the wine is famous for its unusual longevity and earthy complexity',
      'It was founded by French Mandate authorities and uses exclusively French grape varieties',
      'It pioneered natural/organic winemaking in the Middle East in the 1980s'
    ],
    ans: 1,
    exp: 'Château Musar (founded 1930 by Gaston Hochar, revived by Serge Hochar) continued making wine through Lebanon\'s civil war — grapes were harvested while battles raged nearby. The wine gained international fame at the 1979 Bristol Wine Fair, shocking critics with its quality. Musar wines are known for extreme longevity (can age 40+ years), oxidative style, and a terroir character that\'s impossible to replicate. Serge Hochar called the war years "good for creativity."'
  },
  {
    q: 'When someone says على حسابي (3ala 7saabi) at a Lebanese table, what happens next?',
    opts: [
      'They\'re asking the waiter for the bill to split evenly',
      'They\'re buying the round — insisting on paying, which starts a competitive generosity ritual where others will also insist',
      'They\'re offering to drive everyone home',
      'They\'re leaving the table and asking others to finish their drink'
    ],
    ans: 1,
    exp: '3ala 7saabi = "on my account / I\'m paying." Lebanese hospitality turns paying the bill into a competitive performance — when one person says 3ala 7saabi, others immediately object and insist they should pay. This "fight" over the bill is expected and genuine. Accepting too easily is rude. The winner is usually whoever reaches the waiter first or is the host. Lebanese saying: "el-wa7id maa bedfu3 shi" — "one person never pays anything" (because they\'ll always be beaten to it).'
  },
  {
    q: 'What is نبيذ مزروبة (nabiiz mazruube)?',
    opts: [
      'A blended red wine — the most common Lebanese wine style',
      'Rosé wine — "mazruube" means pink/rosy in Lebanese colloquial',
      'Fortified wine, similar to port or sherry, made in the Bekaa',
      'A sparkling wine produced in the Chouf mountains'
    ],
    ans: 1,
    exp: 'mazruube = pink/rosé. From zarabe (to pour/mix). Lebanese rosé production has grown significantly in the 2010s — wineries like Ixsir, Château Saint Thomas, and others produce rosés from Cinsault, Grenache, and local varieties. Lebanese rosé is often dry and food-friendly, designed for the same mezze culture that pairs with arak. Pink wine = pink summer afternoons in Faraya or Batroun beachside restaurants.'
  },
  {
    q: 'What does the phrase مش بيشرب (mish bishrab) signal in Lebanese social contexts?',
    opts: [
      'Someone is drinking too much and needs to slow down',
      'Someone is a non-drinker — important social information since arak/wine drinking is so culturally central',
      'The drink is unfinished and needs to be refilled',
      'A bottle is empty and a new one should be ordered'
    ],
    ans: 1,
    exp: 'mish bishrab = "doesn\'t drink" (literally "not-drinks"). In Lebanon\'s religiously mixed society, drinking habits are part of social identity. Muslim Lebanese (especially Shia and Sunni communities) may not drink; Christian Lebanese communities often do. When hosting, knowing who drinks what is essential for hospitality. mish bishrab is the neutral way to flag it, and good hosts immediately offer excellent alternatives: 3aSiir (fresh juice), 3araqsuus (licorice drink), or quality water.'
  },
];

const ARK_TIPS = [
  'Lebanese arak (3ara2) is distilled twice from grapes, then redistilled with anise seeds, and aged in clay amphoras. The best arak comes from Keserwan (Christian mountain heartland) and is made by families who\'ve been distilling for generations. Commercial brands like Ksarak, Touma, and Muadda3 vary significantly. A true Lebanese arak connoisseur can identify the vintage and producer from the smell and the quality of the louche (cloudiness). The ritual of serving arak — the specific ratio of water to arak, the ice-first-then-arak order — is passed down within families.',
  'Lebanon\'s wine industry is remarkably resilient. Despite civil war, Israeli invasions, economic collapse, and political instability, the Bekaa Valley\'s wineries have continued operating. The Bekaa has 300+ days of sunshine per year, and the altitude brings cooling nights that preserve acidity. Major estates include Château Ksara (1857, oldest surviving winery), Château Kefraya, Château Musar, Massaya, and Ixsir. Post-2020 economic crisis hit the industry hard — importing equipment became nearly impossible — but local spirit kept production alive.',
  'The Lebanese mezze culture is itself an art form. A proper mezze spread for arak includes: cold dishes (hummus, mutabbal, fattoush, tabbouleh, makdous, labneh), hot dishes (kibbeh nayyeh, sawda (liver), makanek sausages, sambousek), and fresh vegetables. The progression of food over 3-4 hours is choreographed — cold dishes first, then hot. The arak accompanies the entire meal. A Lebanese who knows how to set a mezze table is considered cultured regardless of their cooking skill.',
  'Christian Lebanese communities (Maronite, Greek Orthodox, Melkite) have historically been the main producers and drinkers of arak and wine. But drinking culture in Lebanon crosses sectarian lines more than outsiders expect. Lebanese Druze drink; some Lebanese Shia and Sunni drink in private contexts even if not publicly. Beirut\'s nightlife (especially Gemmayzeh, Mar Mikhael, and Gemmayze) is genuinely mixed. The attitude to alcohol is one of Lebanon\'s cultural specificities within the Arab world.',
  'The phrase "صحة وهنا" (Se77a w hana) is specifically Lebanese — other Arab countries have different toasts. Syrians say "saha," Egyptians "fi Se77itak." Lebanese also add "w tfaDDal 3alayya" (and please, on me) when offering a drink, or "3ala 2albi" (on my heart) in response to a toast. Getting these toasting expressions right marks you as someone who understands Lebanese social culture, not just someone who speaks Arabic.',
];

const ARK_ABOUT = 'Arak (3ara2) is Lebanon\'s national drink and the liquid center of its dining culture. Where wine is for dinner, arak is for the endless afternoon — the hours-long shared table where politics, love, business, and philosophy all happen at once. The ritual of adding water (turning it white), eating mezze, proposing toasts, and competing to pay the bill encodes a Lebanese relationship with pleasure and generosity that has survived every catastrophe. Understanding Lebanese drinking culture is not about alcohol — it\'s about the Lebanese gift for turning a meal into a celebration and a celebration into a reason to remember you\'re alive.';
