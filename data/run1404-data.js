// R1404 — NEW FEATURE: Lebanese Pigeon Keeping & Rooftop Culture (pgn)
const PGN_WORDS = [
  {ar:'حمام',tr:'7amem',en:'pigeons / doves'},
  {ar:'برج حمام',tr:'burj 7amem',en:'pigeon tower / loft'},
  {ar:'سطح',tr:'saTe7',en:'rooftop / terrace'},
  {ar:'مربي حمام',tr:'mrabbi 7amem',en:'pigeon keeper / breeder'},
  {ar:'طيّر',tr:'tayyer',en:'released (the pigeons into flight)'},
  {ar:'طرد',tr:'Tard',en:'drove away / chased off (pigeons)'},
  {ar:'لقّط',tr:'la22aT',en:'caught / retrieved (a pigeon)'},
  {ar:'حمامة',tr:'7ameme',en:'a pigeon / dove (single)'},
  {ar:'سباق حمام',tr:'sbe2 7amem',en:'pigeon racing'},
  {ar:'زاجل',tr:'zajel',en:'homing pigeon / carrier pigeon'},
  {ar:'حلّق',tr:'7alla2',en:'soared / circled in the sky'},
  {ar:'صفّر',tr:'Saffar',en:'whistled (to call the pigeons)'},
  {ar:'عصفورية',tr:'3asfouriyye',en:'birdhouse / aviary (on rooftop)'},
  {ar:'دوّار',tr:'dawwer',en:'wheeling / circling flock'},
  {ar:'طعمة',tr:'T3me',en:'bird feed / grain'},
  {ar:'رسالة',tr:'risele',en:'message (carried by pigeon)'},
  {ar:'فرخ',tr:'farkh',en:'baby pigeon / squeaker'},
  {ar:'جناح',tr:'jne7',en:'wing'},
  {ar:'سرب',tr:'sarb',en:'flock (of pigeons)'},
  {ar:'حارة',tr:'7ara',en:'neighborhood alley / quarter'}
];

const PGN_DRILLS = [
  {q:'A "burj 7amem" (برج حمام) is...?',opts:['a famous Beirut tower','a rooftop pigeon loft/coop','a bird market','a type of bread'],a:1},
  {q:'What does "zajel" (زاجل) mean?',opts:['a baby pigeon','a rooftop terrace','a homing/carrier pigeon','a whistling technique'],a:2},
  {q:'When a pigeon keeper "Saffar" (صفّر), he is...?',opts:['throwing feed to the birds','releasing the flock','whistling to call the pigeons back','building the loft'],a:2},
  {q:'A "sarb" (سرب) of pigeons is...?',opts:['a single homing pigeon','a flock flying together','the feed grain','the loft door'],a:1},
  {q:'"7alla2" (حلّق) describes pigeons...?',opts:['eating grain on the rooftop','soaring and circling in the sky','being caught by the keeper','hatching eggs'],a:1},
  {q:'The "saTe7" (سطح) is important in Lebanese pigeon culture because...?',opts:['it\'s where pigeons sleep underground','it\'s the rooftop — the home base for the pigeon loft','it\'s a type of pigeon breed','it\'s a racing track'],a:1},
  {q:'A "mrabbi 7amem" (مربي حمام) is...?',opts:['a pigeon racing judge','a person who keeps and breeds pigeons','a pigeon veterinarian','a market seller'],a:1},
  {q:'"Farkh" (فرخ) refers to...?',opts:['a baby pigeon / squeaker','the whistle call','the racing competition','the wooden loft'],a:0}
];

const PGN_TIPS = [
  {title:'Pigeons on Every Beirut Rooftop',body:'For generations, keeping homing pigeons (زاجل — zajel) on the rooftop has been a beloved Lebanese pastime, especially in old Beirut neighborhoods like Bourj Hammoud, Basta, and Mar Elias. The "burj 7amem" (برج حمام) — a wooden pigeon tower — sits atop the "saTe7" (سطح, rooftop terrace) of many homes. Every morning, the keeper releases the flock, which wheels and circles (دوّار — dawwer) overhead before being called back with a whistle (صفّر — Saffar). Neighbors compete by trying to lure each other\'s birds: "akal 3asfouri" (he ate my bird) means your pigeon joined another flock.'},
  {title:'Racing & Carrier Pigeons',body:'The "sbe2 7amem" (سباق حمام — pigeon racing) is a serious hobby. Carrier pigeons (زاجل) are released from distant locations and the first to return wins. Lebanese pigeon keepers develop intense bonds with their birds, naming each one and knowing their personalities. A good homing pigeon navigating back from Damascus or beyond was once a feat of natural GPS. The tradition connects to ancient Lebanese trade routes — pigeons carried messages (رسالة — risele) long before phones, part of the Levant\'s long communication history.'},
  {title:'Rooftop Life & Neighborhood Rivalry',body:'The Lebanese saTe7 (سطح) is a social world unto itself — pigeon keepers gather there at sunrise and sunset, when flocks fill the Beirut skyline. Neighbors call up to each other, debate which flock circles higher (حلّق — 7alla2), and friendly disputes arise over whose bird "ran away" to join a rival loft. Children grow up watching their fathers feed, train, and whistle for the birds. The culture is particularly strong in working-class neighborhoods where rooftop space is communal and pigeon keeping requires no land — just a small wooden loft and time. "Iza ma 3andak 7amem, ma bte3rif el-7ara" (if you don\'t have pigeons, you don\'t know the neighborhood).'},
  {title:'Pigeons as Living Weather Vanes',body:'Experienced Lebanese pigeon keepers read weather through their birds. Before a storm, the flock stays low and returns quickly — "el-7amem b7ess el-jaw" (the pigeons feel the weather). Before a hot day, they circle high in thermals. In wartime Lebanon, pigeon keepers on rooftops also served as informal lookouts — the sight of a pigeon flock suddenly flushing (طيّر — tayyer) could signal an explosion or disturbance blocks away. The birds became woven into the city\'s nervous system, their flight patterns part of urban life. Today pigeon keeping is rarer but deeply nostalgic — "zaman el-7amam" (the era of pigeons) evokes old Beirut for many Lebanese.'}
];
