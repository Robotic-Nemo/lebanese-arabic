// R504 — Lebanese Nightlife & Going Out (prefix: nlf)
const NLF_WORDS = [
  // drinks
  {ar:'عرق', tr:'3ara2', en:'arak — anise spirit, Lebanon\'s national drink', cat:'drinks'},
  {ar:'بيرة', tr:'biira', en:'beer', cat:'drinks'},
  {ar:'كاس', tr:'kaas', en:'glass / drink (also: a round)', cat:'drinks'},
  {ar:'نخب', tr:'nakhb', en:'cheers! / a toast (formal)', cat:'drinks'},
  {ar:'كسّك', tr:'kasak', en:'cheers! (lit. your glass — informal toast)', cat:'drinks'},
  {ar:'قدّك', tr:'2adak', en:'to your health / cheers (lit. your stature)', cat:'drinks'},
  {ar:'على الريحة', tr:'3a r-rii7a', en:'neat / straight up (no ice, no mixer)', cat:'drinks'},
  {ar:'مع الثلج', tr:'ma3 talj', en:'on the rocks / with ice', cat:'drinks'},
  // venues
  {ar:'بار', tr:'baar', en:'bar', cat:'venues'},
  {ar:'ملهى', tr:'malha', en:'nightclub / entertainment venue', cat:'venues'},
  {ar:'روف', tr:'ruuf', en:'rooftop bar/club', cat:'venues'},
  {ar:'جمّيزة', tr:'jemmaaze', en:'Gemmayzeh — Beirut\'s bar district', cat:'venues'},
  {ar:'مار مخايل', tr:'maar mkhaayil', en:'Mar Mikhael — nightlife hub (east Beirut)', cat:'venues'},
  {ar:'حمرا', tr:'7amra', en:'Hamra — older bohemian bar/café strip', cat:'venues'},
  // going out phrases
  {ar:'نطلع الليلة', tr:'niTla3 el leele', en:'let\'s go out tonight', cat:'phrases'},
  {ar:'شو المشوار؟', tr:'shu l-mishwaar?', en:'what\'s the plan? / where are we going?', cat:'phrases'},
  {ar:'وين رايحين؟', tr:'ween raay7iin?', en:'where are we going?', cat:'phrases'},
  {ar:'على حسابي', tr:'3a 7saabi', en:'it\'s on me / my treat', cat:'phrases'},
  {ar:'جيبلي كاس', tr:'jiibli kaas', en:'get me a drink', cat:'phrases'},
  {ar:'بدّي ياه', tr:'baddi yaah', en:'I want it / I\'ll have that', cat:'phrases'},
  {ar:'هيدا كتير', tr:'hayda ktiir', en:'that\'s too much (about price/drink)', cat:'phrases'},
  {ar:'عم بتشرب شو', tr:'3am btishrab shu', en:'what are you drinking?', cat:'phrases'},
  // nightlife culture
  {ar:'سهر', tr:'sahar', en:'staying up late / nightlife (the act)', cat:'culture'},
  {ar:'ساهرين', tr:'saahriin', en:'we\'re out all night / we\'re up late', cat:'culture'},
  {ar:'دي جي', tr:'di jee', en:'DJ', cat:'culture'},
  {ar:'موسيقى', tr:'muusii2a', en:'music', cat:'culture'},
  {ar:'رقص', tr:'ra2S', en:'dancing / to dance', cat:'culture'},
  {ar:'تعا نرقص', tr:'ta3a nru2uS', en:'come dance / let\'s dance', cat:'culture'},
  {ar:'جوّ', tr:'jaww', en:'vibe / atmosphere (lit. weather)', cat:'culture'},
  {ar:'جوّه منيح', tr:'jawwo mnii7', en:'good vibe / great atmosphere', cat:'culture'},
  // after-midnight culture
  {ar:'بعد نص الليل', tr:'ba3d nuSS el leel', en:'after midnight (when Beirut really starts)', cat:'latenight'},
  {ar:'صبح', tr:'SubuH', en:'morning / dawn — going home at sunrise', cat:'latenight'},
  {ar:'فطور', tr:'fuTuur', en:'breakfast (the 6am post-club meal at a diner)', cat:'latenight'},
  {ar:'بالصبح', tr:'bis-SubuH', en:'in the morning / at dawn (when you get home)', cat:'latenight'},
  {ar:'خلّيت الليلة تمشي', tr:'khalliit el leele timshi', en:'let the night take you / go with the flow', cat:'latenight'},
];

const NLF_DRILLS = [
  {
    q: 'What is "3ara2" (عرق) and why is it Lebanon\'s national drink?',
    opts: [
      'Arak — anise-flavored spirit diluted with water and ice, Lebanon\'s signature drink',
      'Wine — grape-based fermented drink from Lebanese vineyards',
      'Beer — Lebanese craft beer from Beirut microbreweries',
      'Vodka — imported spirit popular in Beirut clubs'
    ],
    ans: 0,
    note: '"3ara2" (عرق) = arak — distilled anise spirit, usually 50-60% alcohol. Mixed with water it turns white ("louche" effect). Served with mezze, ice, and water in a separate glass — you mix your own. "Biida w 7amra" (white and red) = arak and water mixing = the clouding effect. Lebanese arak (Château Ksara, Brun, Touma) is considered the finest in the region. "3ara2 ma3 mezze" is a full cultural experience. Never rush arak.'
  },
  {
    q: 'What does "kasak" (كسّك) mean when Lebanese raise their glasses?',
    opts: [
      '"Your glass" — the informal Lebanese drinking toast / cheers',
      '"Your health" — a formal blessing for the person\'s wellbeing',
      '"Bottoms up" — instruction to drink the entire glass at once',
      '"Good wine" — complimenting the quality of the drink'
    ],
    ans: 0,
    note: '"Kasak" (كسّك) = your glass — the standard Lebanese informal toast. Just "kasak!" is common. More formal: "nakhb!" (a toast/salute). "2adak" (to your stature) is more elevated. The full sequence at a Lebanese gathering: someone raises a glass, everyone joins, "kasak!" is said, eye contact made with each person. Looking away while toasting is considered rude in Lebanese culture. Same rules as in Mediterranean Europe: eyes matter.'
  },
  {
    q: 'What is "Gemmayzeh" (جمّيزة) in Beirut nightlife context?',
    opts: [
      'A historic bar district in east Beirut — Lebanon\'s most famous nightlife street',
      'A luxury beach club south of Beirut known for sunset parties',
      'A mountain resort town popular for après-ski nightlife',
      'A market street that turns into a night market on weekends'
    ],
    ans: 0,
    note: '"Jemmaaze" (جمّيزة) = Gemmayzeh — the narrow, bar-lined street in east Beirut (Achrafieh area) that is ground zero for Lebanese nightlife. Bars open onto the street, music spills out, crowds move between venues. Heavily damaged in the 2020 Beirut port explosion but rebuilt defiantly. Neighboring "maar mkhaayil" (Mar Mikhael) is the newer nightlife hub. Lebanese nightlife culture: start late (10pm-midnight), peak at 2-4am, end at sunrise.'
  },
  {
    q: 'What does "jaww" (جوّ) mean in Lebanese nightlife vocabulary?',
    opts: [
      'Vibe / atmosphere — the intangible quality that makes a place worth going to',
      'Crowd — the number of people in a venue on a given night',
      'Music — the specific playlist or DJ set at a club',
      'Location — the geographic area of a bar or club'
    ],
    ans: 0,
    note: '"Jaww" (جوّ) = atmosphere / vibe (lit. "weather/air"). "El jaww ktiir mnii7" = the vibe is great. "Ma fi jaww" = no atmosphere / dead night. Lebanese bar culture is highly vibe-conscious — the right "jaww" is more important than drink quality or price. "Shu jaww el 7affle?" = what\'s the vibe at the party? Lebanese DJs, lighting, crowd mix, music genre all contribute to "el jaww." A place without "jaww" is quickly abandoned.'
  },
  {
    q: 'What is "sahar" (سهر) — and why is it central to Lebanese identity?',
    opts: [
      'Staying up late / nightlife — a cherished Lebanese cultural practice and point of pride',
      'Drinking alcohol — the act of consuming alcoholic beverages',
      'Partying in a club — dancing to music in a venue',
      'Hosting guests — receiving people at home for the evening'
    ],
    ans: 0,
    note: '"Sahar" (سهر) = staying up late (literally "staying awake"). "Roo7 tsahar" = go out, live it up (stay up all night). Lebanese "sahar" culture is about more than nightclubs — it\'s about long dinners, conversations that stretch past midnight, gathering on balconies. "Ahl el sahar" = night people (those who come alive after dark). The Mediterranean culture of late nights is intensified in Lebanon: lunch is at 3pm, dinner at 10pm, the club fills at 1am.'
  },
  {
    q: 'What is the significance of "ba3d nuSS el leel" (بعد نص الليل) in Beirut?',
    opts: [
      '"After midnight" — the time when Beirut nightlife truly begins, not ends',
      '"Before midnight" — the early part of the evening when bars are quiet',
      '"At midnight" — the peak moment of Lebanese celebrations',
      '"Past bedtime" — a parental phrase indicating it\'s too late to be out'
    ],
    ans: 0,
    note: '"Ba3d nuSS el leel" (بعد نص الليل) = after midnight. In Beirut, this is when things start, not end. Clubs fill at 1am. The real energy hits 2-3am. Bars close when the last person leaves, often at sunrise. This rhythm is not laziness — it\'s adapted to Mediterranean summer heat (cool only after midnight) and a cultural preference for long, unhurried social experiences. "El leel ba3do Taweel" = the night is still long (the party continues).'
  },
  {
    q: 'What is "fuTuur" (فطور) in the context of Lebanese nightlife?',
    opts: [
      'The 6am breakfast eaten after a night out — a cherished Beirut tradition',
      'A pre-party meal eaten before going out for the night',
      'A late-night snack served at clubs around midnight',
      'A traditional Lebanese morning coffee ritual'
    ],
    ans: 0,
    note: '"FuTuur" (فطور) = breakfast. After a full night out, the classic Lebanese move is finding an open breakfast spot at 5-6am. Beirut has foul (fava bean) spots, manoushe stands, and breakfast cafés that specifically cater to the post-club crowd. "Roo7 naakol fuTuur" = let\'s go for breakfast (said at 5am, meaning the night is officially over). The manoushe at dawn after sahar is a Beirut rite of passage.'
  },
  {
    q: 'What does "niTla3 el leele" (نطلع الليلة) literally mean?',
    opts: [
      '"Let\'s go out tonight" — the invitation to an evening out',
      '"We\'re leaving tonight" — announcing departure from Beirut',
      '"Tonight is over" — calling an end to the night\'s activities',
      '"Tonight is free" — nothing is planned, stay home'
    ],
    ans: 0,
    note: '"NiTla3 el leele" (نطلع الليلة) = let\'s go out tonight (lit. "we go up tonight"). "TiTla3 ma3na?" = will you come out with us? "Laazim niTla3" = we need to go out. The verb "Tili3" (to go up) is used for going out — ascending from one\'s home to the world. "Mishwaar" (trip/plan) = the night\'s plan. "Shu l-mishwaar?" = what\'s the plan? Lebanese nightlife planning is fluid — the "mishwaar" evolves throughout the evening.'
  },
  {
    q: 'What does "ruuf" (روف) refer to in Beirut entertainment culture?',
    opts: [
      'Rooftop bar or venue — Beirut\'s iconic open-air nightlife format',
      'A traditional ground-floor Lebanese tavern',
      'An underground basement club known for techno music',
      'A beachfront club south of Beirut'
    ],
    ans: 0,
    note: '"Ruuf" (روف) = rooftop (from English "roof"). Beirut rooftop culture is legendary — bars, restaurants, and events perched atop Beirut\'s buildings with city views. The famous EM Rooftop, Iris Beirut (R.I.P.), Radio Beirut — all iconic. Post-2020, rooftop culture resurged defiantly in damaged neighborhoods. "3indo ruuf mnii7" = they have a great rooftop. Summer = rooftop season. The view of Beirut at night from a high rooftop is genuinely spectacular.'
  },
  {
    q: 'What does "3a 7saabi" (على حسابي) mean when someone says it at a bar?',
    opts: [
      '"It\'s on me" — I\'m paying for this round/drink',
      '"On my account" — charge it to my bar tab',
      '"On my health" — a toast wishing good health',
      '"My turn" — indicating whose round it is'
    ],
    ans: 0,
    note: '"3a 7saabi" (على حسابي) = on my account / it\'s on me. Lebanese bar generosity follows the same "who pays" battle as restaurants. "3a 7saabi el leele" = tonight is on me. Accepting "3a 7saabi" creates social debt — next time is on you. "Ma mniTiik tdfa3" = we won\'t let you pay. Lebanese generosity at bars is real but tracked — the social ledger is always open. "Daf3a" = a round. "3amlak daf3a" = I\'m buying you a round.'
  },
];

const NLF_TIPS = [
  {
    title: 'Beirut nightlife: how it actually works',
    body: 'Beirut\'s nightlife defies its geography and its crises. Start time: nothing before 11pm. Peak: 1-3am. End: whenever. Venues in Gemmayzeh and Mar Mikhael are the standard, Badaro and Achrafieh for a slightly calmer crowd. Reservations rarely needed except for major clubs on weekends. Dress code: Beirut is stylish — put in effort. Price: highly variable post-inflation; expect to negotiate in USD. "Free before midnight" promotions are common. The night doesn\'t end — it dissolves into breakfast.'
  },
  {
    title: 'Arak culture: how to drink it right',
    body: '"3ara2" (arak) is drunk with mezze, never alone. The ritual: pour arak, add water (roughly 1:3 arak/water), watch it turn white, add ice last (ice dilutes before the louche happens). Never add water to someone\'s glass without asking — everyone has their ratio. "Biida w 7amra" (white and red) = arak turning white. Lebanese arak is 50-60% — sip slowly. "Kul shi w la tishrab 3ara2 3al-juu3" = eat everything, don\'t drink arak on an empty stomach.'
  },
  {
    title: 'The social rules of going out',
    body: '"Mishwaar" (plan) is decided collectively, always negotiated. Arrival time: Lebanese time means 30-60 minutes late. The "who pays" calculation: whoever suggests the place often pays first, but it\'s contested. Splitting the bill is rare — someone pays and is owed. Leaving early is acceptable with a good excuse; leaving without saying goodbye ("Irish exit") is noticed. If you\'re invited to join a table, the host almost certainly pays for everything.'
  },
  {
    title: 'Nightlife neighborhoods',
    body: 'Gemmayzeh (جمّيزة): historic party street, bars spill onto narrow sidewalks, international crowd. Mar Mikhael (مار مخايل): trendier, local Lebanese crowd, industrial-chic. Badaro (بدارو): neighborhood bars, relaxed, good for conversation. Hamra (حمرا): older, more bohemian, mixed crowd. Dbayye/Kaslik: north Beirut, Lebanese pop, louder clubs. Each neighborhood has a personality — "Gemmayzeh crowd" vs "Kaslik crowd" are genuinely different social sets.'
  },
  {
    title: 'Post-crisis resilience: nightlife as resistance',
    body: 'After the 2019 economic collapse, the port explosion of 2020, and COVID, Beirut nightlife was declared dead many times. It came back each time. Lebanese say "3asha Lubnan" (long live Lebanon) partly because they go out in the ruins and dance. Gemmayzeh bars opened the week after the explosion, in damaged buildings. The nightlife is not denial — it\'s defiance. Understanding this context gives "niTla3 el leele" (let\'s go out tonight) an extra dimension.'
  },
];

const NLF_ABOUT = `
<p><strong>🍸 Lebanese Nightlife & Going Out</strong></p>
<p>Beirut has been called "the Paris of the Middle East" — and whatever that phrase has become, the nightlife part isn't wrong. In a country where power cuts, economic collapse, and periodic political violence are routine, Lebanese go out with uncommon intensity. The night is not an escape from reality; it is an assertion that reality hasn't won.</p>
<p><strong>The rhythm:</strong> Dinner at 9pm, drinks at midnight, club at 1am, breakfast at 6am. Lebanese nightlife operates on Mediterranean time with extra delay. Showing up to a bar at 9pm means being one of three people there. Showing up at 1am means the night is just beginning.</p>
<p><strong>The drinks:</strong> "3ara2" (arak) with mezze is the national ritual — slow, social, paired with food. Beer is fine; cocktails are available everywhere. The point is never just the drink — it is the table, the conversation, the company.</p>
<p><strong>The geography:</strong> Gemmayzeh and Mar Mikhael are ground zero. These streets were damaged in the 2020 explosion and rebuilt defiantly. The fact that Lebanese nightlife exists at all — after everything — is itself a cultural statement. Knowing the vocabulary of going out in Lebanese Arabic means knowing the vocabulary of a people who refuse to stop living.</p>
`;
