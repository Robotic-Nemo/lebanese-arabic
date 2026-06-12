// R477 — Lebanese Nature & Seasons coach (prefix: nat)
const NAT_WORDS = [
  // seasons
  {ar:'ربيع', tr:'rabii3', en:'spring', cat:'seasons'},
  {ar:'صيف', tr:'Seef', en:'summer', cat:'seasons'},
  {ar:'خريف', tr:'khariif', en:'autumn / fall', cat:'seasons'},
  {ar:'شتاء', tr:'shite', en:'winter', cat:'seasons'},
  {ar:'موسم', tr:'mawsim', en:'season / time of year', cat:'seasons'},
  {ar:'اعتدال الربيع', tr:'i3tidaal er-rabii3', en:'spring equinox', cat:'seasons'},
  // landscape features
  {ar:'جبل', tr:'jabal', en:'mountain', cat:'landscape'},
  {ar:'بحر', tr:'ba7r', en:'sea', cat:'landscape'},
  {ar:'نهر', tr:'nahar', en:'river', cat:'landscape'},
  {ar:'وادي', tr:'waadi', en:'valley', cat:'landscape'},
  {ar:'غابة', tr:'ghaabe', en:'forest', cat:'landscape'},
  {ar:'شاطئ', tr:'shaaTe2', en:'beach / coast', cat:'landscape'},
  {ar:'صخرة', tr:'Sakhra', en:'rock / cliff', cat:'landscape'},
  {ar:'قمة', tr:'2imme', en:'mountain peak / summit', cat:'landscape'},
  // trees & plants
  {ar:'أرزة', tr:'arze', en:'cedar tree (national symbol)', cat:'plants'},
  {ar:'زيتونة', tr:'zaytuune', en:'olive tree', cat:'plants'},
  {ar:'تين', tr:'tiin', en:'fig tree / figs', cat:'plants'},
  {ar:'كرمة', tr:'karme', en:'grapevine', cat:'plants'},
  {ar:'ياسمين', tr:'yaasmiine', en:'jasmine', cat:'plants'},
  {ar:'سنديان', tr:'sindyaan', en:'oak tree', cat:'plants'},
  {ar:'صنوبر', tr:'Sanuubar', en:'pine tree', cat:'plants'},
  {ar:'زهور بريّة', tr:'zhuur barriyye', en:'wildflowers', cat:'plants'},
  // weather phenomena
  {ar:'ثلج', tr:'talj', en:'snow', cat:'weather'},
  {ar:'مطر', tr:'maTar', en:'rain', cat:'weather'},
  {ar:'شمس', tr:'shams', en:'sun', cat:'weather'},
  {ar:'غيمة', tr:'gheyme', en:'cloud', cat:'weather'},
  {ar:'ريح', tr:'riiH', en:'wind', cat:'weather'},
  {ar:'ضباب', tr:'Dabaab', en:'fog / mist', cat:'weather'},
  {ar:'برق', tr:'bar2', en:'lightning', cat:'weather'},
  {ar:'رعد', tr:'ra3d', en:'thunder', cat:'weather'},
  // nature expressions
  {ar:'هوا نقي', tr:'hawa na2i', en:'fresh / clean air', cat:'expressions'},
  {ar:'فيروز وبياض الثلج', tr:'feyruz w byaaD et-talj', en:'Fairuz and the snow\'s whiteness (cultural ref.)', cat:'expressions'},
  {ar:'منيح متل الربيع', tr:'mniH mitl er-rabii3', en:'beautiful as spring (compliment)', cat:'expressions'},
  {ar:'أرض الأرز', tr:'arD el arz', en:'land of the cedars (Lebanon)', cat:'expressions'},
  {ar:'الجبل يطل على البحر', tr:'el jabal yTell 3a el ba7r', en:'the mountain overlooks the sea', cat:'expressions'},
  // wildlife
  {ar:'نسر', tr:'nasr', en:'eagle', cat:'wildlife'},
  {ar:'سنونو', tr:'snuunu', en:'swallow (migratory bird)', cat:'wildlife'},
  {ar:'ثعلب', tr:'ta3lab', en:'fox', cat:'wildlife'},
  {ar:'ضبع', tr:'Daba3', en:'hyena', cat:'wildlife'},
  {ar:'سقنقور', tr:'sa2ankuur', en:'skink / lizard', cat:'wildlife'},
  {ar:'دودة النار', tr:'doodeh en-naar', en:'firefly', cat:'wildlife'},
];

const NAT_DRILLS = [
  {
    q: 'The cedar tree is on the Lebanese flag. What is it called in Lebanese?',
    opts: ['arze', 'sindyaan', 'Sanuubar', 'zaytuune'],
    ans: 0,
    note: '"Arze" = cedar tree. "Arza" is singular, "arz" is the general term. The cedar (Cedrus libani) has been Lebanon\'s symbol for millennia — mentioned in the Bible, used in Solomon\'s temple. Lebanon = "arD el arz" (land of the cedars).'
  },
  {
    q: 'Lebanon is famous for having what unique geographical feature?',
    opts: [
      'Mountains and sea close together — you can ski and swim same day',
      'The world\'s largest cedar forest',
      'The deepest river in the Arab world',
      'A desert that turns green in spring'
    ],
    ans: 0,
    note: 'Lebanon\'s distinctive geography puts ski resorts (Faraya, Mzaar) within an hour of Mediterranean beaches. "El jabal yTell 3a el ba7r" (the mountain overlooks the sea) — you can see snow-capped peaks from the coast.'
  },
  {
    q: 'What does "hawa na2i" mean and why is it culturally significant?',
    opts: [
      'Fresh/clean air — Lebanese pride themselves on mountain air quality',
      'Hot wind — the summer heat from the desert',
      'Sea breeze — the cool wind from the Mediterranean',
      'Morning mist — the fog over Beirut in winter'
    ],
    ans: 0,
    note: '"Hawa na2i" (clean/fresh air) is a point of Lebanese mountain pride. Village folk brag about their clean mountain air vs. city pollution. "Ta3a khod hawa" (come get some air) is an invitation to visit the mountains.'
  },
  {
    q: 'Which Lebanese plant is associated with romance and is used in folk songs?',
    opts: ['yaasmiine (jasmine)', 'zaytuune (olive)', 'tiin (fig)', 'karme (grapevine)'],
    ans: 0,
    note: '"Yaasmiine" (jasmine) is the flower of Lebanese romance and poetry. Its scent is associated with warm summer nights, love songs, and old Beirut. Fairouz songs mention jasmine. Vendors sell jasmine garlands in Lebanese towns.'
  },
  {
    q: 'What is "khariif" in Lebanese?',
    opts: ['Autumn / fall', 'Spring', 'Summer', 'Winter'],
    ans: 0,
    note: '"khariif" = autumn/fall. The word also means "harvest" in some contexts — autumn is grape and apple harvest season in Lebanon\'s mountains. The Bekaa Valley produces famous wines during khariif.'
  },
  {
    q: 'What does "waadi" mean in Lebanese geography?',
    opts: ['Valley between mountains', 'High mountain peak', 'River delta', 'Coastal plain'],
    ans: 0,
    note: '"Waadi" = valley. Lebanon has famous wadis: Wadi Qadisha (holy valley with ancient monasteries), Wadi el Joz (a Beirut neighborhood). "Qadisha" means holy in Aramaic — the valley has been inhabited since ancient times.'
  },
  {
    q: 'What season does Lebanon\'s famous Baalbek Festival take place in?',
    opts: ['Seef (summer)', 'rabii3 (spring)', 'khariif (autumn)', 'shite (winter)'],
    ans: 0,
    note: '"Seef" = summer. The Baalbek International Festival takes place at the ancient Roman temples every summer since 1956. It has featured opera, jazz, classical music — Fairouz\'s performances there are legendary.'
  },
  {
    q: 'How do you say "snow" in Lebanese?',
    opts: ['talj', 'maTar', 'Dabaab', 'bar2'],
    ans: 0,
    note: '"Talj" = snow. Lebanon has functioning ski resorts (Mzaar Kfardebian, Faraya, The Cedars). "Talj" is also used for ice: "talj min el tallaaje" = ice from the fridge. Snow on the peaks is visible from Beirut on clear winter days.'
  },
  {
    q: 'What are "snuunu" and why are they special in Lebanon?',
    opts: [
      'Swallows — migratory birds whose arrival signals spring',
      'Fireflies — seen in mountain forests in summer',
      'Eagles — the national bird of Lebanon',
      'Sparrows — common birds in Lebanese cities'
    ],
    ans: 0,
    note: '"Snuunu" = swallows. Their arrival from Africa in spring is a beloved signal of warmer weather. Lebanese poets and folk songs mention the snuunu announcing spring. "El snuunu rijacat" (the swallows returned) = spring is here.'
  },
  {
    q: 'What does "arD el arz" mean?',
    opts: [
      'Land of the cedars — poetic name for Lebanon',
      'Cedar forest — the nature reserve in the north',
      'Cedar products — the Lebanese timber trade',
      'Green land — generic nature phrase'
    ],
    ans: 0,
    note: '"ArD el arz" = land of the cedars. A poetic and patriotic name for Lebanon. The cedar (arze) appears in the Lebanese flag, national anthem, and countless poems and songs. Lebanon\'s ancient cedar forests were once vast — today protected reserves survive in the north.'
  },
];

const NAT_TIPS = [
  {
    title: 'Ski and swim same day',
    body: 'Lebanon is one of the few places where you can ski in the morning and swim in the afternoon. Mzaar Kfardebian ski resort is about 50km from Beirut\'s beaches. This unique geography — snow-capped mountains visible from the Mediterranean — is a constant source of Lebanese pride. "3a el jabal mniH" = it\'s nice in the mountains.'
  },
  {
    title: 'The Cedar: Lebanon\'s soul',
    body: 'The Cedrus libani (arze) is mentioned in ancient texts including the Epic of Gilgamesh and the Bible. Solomon\'s Temple was built with Lebanese cedar. Today, ancient cedar groves survive at The Cedars (Arz el Rabb), Tannourine, and the Shouf Reserve. The tree is protected — cutting a cedar is a serious crime.'
  },
  {
    title: 'Lebanese seasons',
    body: 'Lebanon has four distinct seasons: spring (rabii3) brings wildflowers and the Qadisha Valley turns green; summer (Seef) means beach, heat, and Baalbek Festival; autumn (khariif) is harvest time with grapes and apples; winter (shite) brings snow and ski season. This diversity in a tiny country is remarkable.'
  },
  {
    title: 'Jasmine culture',
    body: '"Yaasmiine" (jasmine) is woven into Lebanese culture. Street vendors sell jasmine garlands to hang in cars and homes. The scent of jasmine on a warm night is quintessentially Lebanese. Fairouz songs mention jasmine. "Rihet el yaasmiine" (the scent of jasmine) is shorthand for Lebanese nostalgia.'
  },
  {
    title: 'The Qadisha Valley',
    body: '"Waadi Qadisha" (Holy Valley) near Bcharre is a UNESCO World Heritage Site. It houses ancient monasteries, hermit caves, and the last old-growth cedar forest (Horsh Arz el Rabb). "Qadisha" comes from Aramaic meaning "holy". The valley was a refuge for early Christians and remains sacred today.'
  },
];

const NAT_ABOUT = `
<p><strong>🌿 Lebanese Nature & Seasons</strong></p>
<p>Lebanon's nature punches far above its weight. A country smaller than Connecticut holds snow-capped mountains, Mediterranean beaches, ancient cedar forests, fertile valleys, and four distinct seasons.</p>
<p><strong>The iconic cedar:</strong> The <em>arze</em> (cedar tree) on the Lebanese flag is more than a symbol — it's a connection to Lebanon's ancient identity, mentioned in the Bible, used to build Solomon's Temple, beloved in Arabic poetry. Standing before an ancient cedar in the Shouf Reserve is a spiritual experience.</p>
<p><strong>Unique geography:</strong> Where else can you ski in the morning and swim in the afternoon? Lebanon's compressed landscape means dramatic altitude changes over short distances — from 0 to 3,000m in under 50km. "El jabal yTell 3a el ba7r" (the mountain overlooks the sea) is both poetry and literal fact.</p>
<p><strong>Environmental challenges:</strong> Lebanon faces serious environmental issues: deforestation, plastic pollution on beaches, water scarcity, and wildfire risk. Environmental activism is growing, especially among young Lebanese who want to protect what makes their country beautiful.</p>
`;
