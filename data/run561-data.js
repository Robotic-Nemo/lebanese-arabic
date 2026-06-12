// R561 — NEW FEATURE: Lebanese Driving & Traffic culture (prefix: drv)

const TRAF_WORDS = [
  // cat: road
  { ar: 'السيارة', tr: 'es-siyyaara', en: 'The car — Lebanese identity on wheels', cat: 'road' },
  { ar: 'الطريق', tr: 'eT-Tariiq', en: 'The road / route', cat: 'road' },
  { ar: 'الأوتوستراد', tr: 'el-awtostraad', en: 'The highway / motorway', cat: 'road' },
  { ar: 'الدوار', tr: 'ed-dawwaar', en: 'The roundabout — Lebanese driving diplomacy in action', cat: 'road' },
  { ar: 'الزحمة', tr: 'ez-za7me', en: 'Traffic jam — permanent condition of Lebanese roads', cat: 'road' },
  { ar: 'الفريك', tr: 'el-frayk', en: 'The brake — also slang: slow down, chill out', cat: 'road' },

  // cat: honking
  { ar: 'البوق', tr: 'el-boo2', en: 'The horn — Lebanese orchestra instrument #1', cat: 'honking' },
  { ar: 'بوق بوق', tr: 'boo2 boo2', en: 'Honk honk — the universal Lebanese greeting/protest/communication', cat: 'honking' },
  { ar: 'شو بدك؟', tr: 'shu baddak?', en: 'What do you want? — said to someone honking at you', cat: 'honking' },
  { ar: 'يلا تحرك', tr: 'yalla t7arrak', en: 'Come on, move! — standard traffic encouragement', cat: 'honking' },
  { ar: 'روق', tr: 'rawwi2', en: 'Chill out! Calm down! — said to aggressive drivers', cat: 'honking' },
  { ar: 'مش شايف؟', tr: 'mish shayef?', en: 'Can\'t you see? — road rage opener', cat: 'honking' },

  // cat: parking
  { ar: 'واقف هون', tr: 'waa2ef hoon', en: 'Parked here — double-parking announcement', cat: 'parking' },
  { ar: 'بضل شوي', tr: 'biDall shwayy', en: 'I\'ll only be a minute — said while double-parking forever', cat: 'parking' },
  { ar: 'ما في وقوف', tr: 'maa fi wu2uuf', en: 'No parking / nowhere to park', cat: 'parking' },
  { ar: 'عالرصيف', tr: '3ar-rasiif', en: 'On the pavement — acceptable Lebanese parking spot', cat: 'parking' },

  // cat: petrol
  { ar: 'محطة البنزين', tr: 'ma7aTTet el-benziin', en: 'The petrol station', cat: 'petrol' },
  { ar: 'امليها', tr: 'imliha', en: 'Fill it up — fill the tank', cat: 'petrol' },
  { ar: 'فل عليها', tr: 'full 3alayha', en: 'Full tank — fill it completely', cat: 'petrol' },
  { ar: 'البنزين غالي', tr: 'el-benziin ghaal', en: 'Petrol is expensive — constant since the crisis', cat: 'petrol' },
  { ar: 'الطابور', tr: 'eT-Taabuur', en: 'The queue — fuel queues during the 2021 shortages', cat: 'petrol' },

  // cat: culture
  { ar: 'ضو أحمر', tr: 'Daw a7mar', en: 'Red light — more of a suggestion in Lebanon', cat: 'culture' },
  { ar: 'الزلمة', tr: 'ez-zalame', en: 'The guy — "hey man" (said to other driver or parking attendant)', cat: 'culture' },
  { ar: 'على راسي', tr: '3ala raasi', en: 'On my head — respectful acknowledgment (also used in traffic)', cat: 'culture' },
  { ar: 'الطلعة', tr: 'eT-Tul3e', en: 'The drive / the outing by car — favourite Lebanese pastime', cat: 'culture' },
  { ar: 'تكسي', tr: 'taksi', en: 'Taxi — shared service taxis also exist (serviis)', cat: 'culture' },
  { ar: 'السيرفيس', tr: 'es-seerviis', en: 'Service taxi — shared minibus/car with fixed route, very cheap', cat: 'culture' },
];

const TRAF_DRILLS = [
  {
    q: 'Traffic is gridlocked in Beirut. Your Lebanese friend says "haydik ez-za7me el-3aadiye." What do they mean?',
    opts: [
      '"That\'s the normal traffic" — Lebanese acceptance of permanent gridlock',
      '"That\'s an unusual traffic jam" — something special is happening',
      '"That traffic is dangerous" — warning about an accident ahead',
      '"The traffic will clear soon" — optimistic Lebanese prediction'
    ],
    ans: 0,
    exp: '"Ez-za7me el-3aadiye" (the normal traffic) captures the Lebanese philosophical acceptance of chronic gridlock. Beirut\'s roads, designed for a fraction of today\'s traffic, are in permanent gridlock during peak hours (which in Lebanese terms is most of the day). The response to traffic is not frustration but adaptation: Lebanese drivers use horns as communication, find alternative routes through residential alleys, double-park liberally, and treat the drive as social time. "Ma fi za7me" (no traffic) is a mythical condition announced when the gridlock drops from catastrophic to merely severe.'
  },
  {
    q: 'A Lebanese driver honks at you "boo2 boo2" as you hesitate at a green light. What are they communicating?',
    opts: [
      'Move — honking is the primary Lebanese communication tool for "the light is green, go now"',
      'Danger — there\'s something wrong with your car',
      'Greeting — they recognized you and are saying hello',
      'Road rage — they are furious about something you did earlier'
    ],
    ans: 0,
    exp: 'The Lebanese horn vocabulary is extensive. Two short honks ("boo2 boo2") at a traffic light means "it\'s green, move." One long honk at a junction means "I\'m coming through." Honking at a parked car means "move your car." Rapid multiple honks is frustration or urgency. The horn is not inherently aggressive in Lebanon — it\'s communication. A visitor interpreting all Lebanese horn use as road rage will spend their entire trip feeling personally attacked. The correct response to "boo2 boo2" at a green light is to simply drive.'
  },
  {
    q: 'Your driver parks "3ar-rasiif" (on the pavement) and says "biDall shwayy." What should you expect?',
    opts: [
      'They\'re double-parking on the pavement briefly — the standard Lebanese parking approach',
      'They\'re illegally parking and will get a ticket',
      'They\'re dropping you off and leaving immediately',
      'They\'re waiting for a parking space to open'
    ],
    ans: 0,
    exp: '"3ar-rasiif" (on the pavement) and "biDall shwayy" (only a minute) are two halves of the quintessential Lebanese parking statement. Beirut has far more cars than parking spaces, so sidewalk parking is normal practice. "Shwayy" (a little/a moment) in Lebanese time means anything from two minutes to half an hour — it\'s not a literal time estimate but a social signal meaning "I\'m not abandoning the car, I\'ll be back." Municipal parking enforcement is sporadic enough that pavement parking carries little practical risk in most neighbourhoods.'
  },
  {
    q: 'Someone offers you a ride in "es-seerviis." What type of transport is this?',
    opts: [
      'Service taxi — a shared car or minibus following a fixed route, very cheap but no fixed timetable',
      'A private car with a driver booked through an app',
      'A large tourist bus with a set departure time',
      'A motorcycle taxi common in Beirut'
    ],
    ans: 0,
    exp: '"Es-seerviis" (service taxi) is Lebanon\'s informal shared transport system — cars (often old Mercedes or newer sedans) and minibuses that follow rough fixed routes and pick up multiple passengers along the way, each paying a small fee. There\'s no timetable; you stand at the side of the road and hold out your hand, the driver honks if they\'re going your way. Before ride-hailing apps, the seerviis was how Lebanese people got around cheaply. It\'s still widely used, especially by those who can\'t afford individual taxis. Saying "seerviis" when hailing a car signals you want to share.'
  },
  {
    q: 'During Lebanon\'s 2021 fuel crisis, "eT-Taabuur 3al-benziin" became a daily conversation topic. What was this?',
    opts: [
      'Queuing for petrol — fuel shortages meant hours-long queues at petrol stations that sometimes ran dry',
      'A new traffic regulation requiring orderly queuing at junctions',
      'The government\'s petrol rationing system using vouchers',
      'Black market fuel sellers operating from car boots'
    ],
    ans: 0,
    exp: '"Et-Taabuur 3al-benziin" (the queue for petrol) became a symbol of Lebanese institutional collapse in 2021. Fuel shortages — caused by foreign currency depletion making imports impossible — meant petrol stations ran dry for days, then rationed fuel when supply arrived. People queued for hours, sometimes overnight. Videos of kilometre-long queues spread on social media. Some Lebanese started buying petrol canisters to stockpile; the army was deployed to manage queues. For Lebanese who remember the civil war, fuel queues triggered deep anxiety — this was a familiar marker of crisis.'
  },
  {
    q: 'What does "eT-Tul3e bies-siyyaara" mean as a Lebanese cultural concept?',
    opts: [
      'A drive for pleasure — going out by car as a social activity, not to reach a destination',
      'Taking the car to get repairs — visiting the mechanic',
      'Driving someone to the airport — a major social obligation in Lebanon',
      'A road trip to the mountains — escaping Beirut\'s heat'
    ],
    ans: 0,
    exp: '"Et-Tul3e" (the outing) by car is a distinctly Lebanese social form. On weekends, Lebanese families and friend groups pile into cars and drive — to the mountains, along the coast, to a specific restaurant 45 minutes away, or simply through the city. The journey is the point as much as the destination. Lebanese parents take toddlers for a "tul3e" to get them to sleep. Couples drive without a specific destination. Friend groups meet in a car park and decide the route as they go. The car is not just transport — it\'s a mobile social space with music, conversation, and food brought along.'
  },
  {
    q: 'A Lebanese driver aggressively cuts you off and you\'re considering confrontation. Your Lebanese companion says "rawwi2." What do they advise?',
    opts: [
      'Chill out / calm down — Lebanese road confrontations escalate quickly and are best avoided',
      'Speed up — don\'t let them get away with it',
      'Honk your horn repeatedly — assert your right of way',
      'Take their licence plate number — report them to police'
    ],
    ans: 0,
    exp: '"Rawwi2" (literally "let it clarify/settle") means chill out, calm down, let it go. In the context of Lebanese traffic, it\'s crucial advice: road confrontations in Lebanon escalate faster than in most countries. Connections matter — the aggressive driver might have a brother in the police, or belong to a political party whose followers patrol certain areas. Lebanese people have a sophisticated calculation about which confrontations are worth having. The advice "rawwi2" from a local means: this particular situation is one to walk away from. Trust the calculation.'
  },
  {
    q: '"ضو أحمر" (Daw a7mar, red light) is sometimes described as "optional" in Lebanon. What does this actually mean in practice?',
    opts: [
      'Red lights are often ignored, especially late at night, as a widespread social norm rather than a legal obligation',
      'Lebanese traffic lights are frequently broken due to power cuts',
      'The highway code allows turning right on red',
      'Only new drivers respect red lights; experienced Lebanese drivers know when it\'s safe to proceed'
    ],
    ans: 0,
    exp: 'The Lebanese relationship with red lights reflects a broader pattern: formal rules exist but social enforcement determines compliance. Red lights at quiet junctions, especially at night, are widely treated as yield signs — you slow, check for traffic, and proceed if clear. This is not recklessness but a learned adaptation to a context where: formal authority is distrusted, enforcement is inconsistent, and self-navigation has replaced rule-following as the survival skill. Knowing when a Lebanese person will stop and when they\'ll proceed requires reading context, not consulting the highway code.'
  },
  {
    q: 'What is the social obligation around "driving to the airport" in Lebanese culture?',
    opts: [
      'Seeing someone off at the airport is a major social event — large groups accompany travellers, it\'s a cultural duty',
      'Only immediate family drives to the airport; friends say goodbye at home',
      'Lebanese people prefer to take a taxi to the airport to avoid burdening others',
      'The airport is too far — people say goodbye by phone'
    ],
    ans: 0,
    exp: 'Lebanese airport goodbyes are a cultural institution. Because emigration is so embedded in Lebanese life — with millions of Lebanese living abroad — the airport is where the community\'s separation and reunion dramas play out. Seeing someone off is not just dropping them at departures: it\'s extended family gathering, last meals, gifts for relatives abroad, final advice. Arrivals are equally ceremonial — meeting a returning relative involves a convoy of cars and a welcoming crowd. The Beirut airport road is famous for its emotional charge. "Raayeh 3a el-maTaar" (going to the airport) means the whole community is mobilizing.'
  },
  {
    q: 'A Lebanese driver waves at an oncoming car and flashes their lights once. What are they likely communicating?',
    opts: [
      'Warning about police, a speed check, or road obstruction ahead — lights are the Lebanese road-warning system',
      'Greeting a friend they recognized in the other car',
      'Telling the other driver their own headlights are off',
      'Asking the other driver to slow down for safety'
    ],
    ans: 0,
    exp: 'Lebanese drivers have a sophisticated light-communication vocabulary. One flash = warning ahead (police, checkpoint, accident, animal in road). Two flashes = greeting to someone you know. Sustained flashing = "move over, I\'m coming through" or urgent warning. At night, incoming flashes are a gift — someone is telling you about a speed trap or road hazard ahead. This system operates on mutual solidarity: you flash to warn strangers, they flash to warn you. It\'s an informal distributed information network that predates the smartphone and remains more real-time than any app.'
  },
];

const TRAF_TIPS = [
  '<strong>Lebanese driving is communication-dense:</strong> What looks like chaos to a foreign eye is a negotiated system. Eye contact, hand signals, horn patterns, and light flashes all carry meaning. Lebanese drivers read each other\'s intentions through micro-signals: a driver inching into your lane while making eye contact is asking permission, not forcing their way. Giving a slight nod or small wave is accepting the negotiation; looking away means no. The horn is used far more liberally than in Northern Europe but with much less anger — it\'s conversation, not confrontation.',
  '<strong>Double-parking norms:</strong> Double-parking is widespread and semi-accepted across Lebanon. When you double-park, you leave your handbrake off so other drivers can push your car slightly to pass. Honking at a double-parked car is a request, not a rage — the driver (if present) will typically appear within a minute and move. If no one appears, Lebanese drivers are patient: they push the car slightly if needed. Learning to leave your handbrake off and your phone on silent is the Lebanese double-parking code.',
  '<strong>The hierarchy of the road:</strong> Lebanese road hierarchy is not official but real: military and security vehicles have absolute priority; large trucks and buses have practical priority (smaller cars move); drivers from known political strongholds in certain areas operate with understood impunity; BMW/Mercedes drivers push more aggressively than Kia/Daihatsu drivers (class signal). Foreigners and tourists have an unofficial courtesy from Lebanese drivers — you\'ll often find space given generously, horns used gently. The system has social memory even in anonymous traffic.',
  '<strong>Petrol station culture:</strong> Lebanese petrol stations are not self-service — an attendant fills your tank, wipes your windscreen, and sometimes checks your oil. The exchange is social: small chat, news about prices, information about road conditions ahead. You pay in dollars or lira (ask the price first since it changes). Tipping is normal and appreciated. During the 2021 fuel crisis, petrol station attendants became crucial nodes of information about which stations had fuel — their social capital increased with the scarcity.',
  '<strong>Road signage and navigation:</strong> Lebanese road signage is notoriously inconsistent — signs missing, bilingual only in some areas, roundabout exits unmarked. Lebanese people navigate by landmark, not by street name: "turn left at the petrol station", "right after the mosque", "keep going until you see the supermarket." When asking for directions, you\'ll receive landmark instructions, not street names. Learning the neighbourhood landmarks is the actual navigation skill. This is why Lebanon\'s social knowledge of the area — the Ibn el-7ayy expertise — matters more than a map.',
];

const TRAF_ABOUT = 'Driving in Lebanon is simultaneously terrifying and exhilarating for the uninitiated. The Lebanese road system operates on informal negotiation rather than formal rules: lanes are suggestions, red lights are yield signs at night, double-parking is universal, and the horn is a full communication instrument. But beneath the apparent chaos is a functioning system built on acute situational reading, mutual micro-negotiation, and shared tacit knowledge. Lebanese drivers have internalized a complex set of social signals that replace the formal rule-following of more regulated traffic environments. Understanding this system requires understanding Lebanon\'s broader relationship with formal institutions: the state cannot be trusted to provide reliable rules or enforcement, so society has built its own operating system. Lebanese driving culture is a microcosm of Lebanon itself — chaotic in appearance, socially ordered in practice, expressive of a people who navigate impossible circumstances through creativity, connection, and constant negotiation.';
