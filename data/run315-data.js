// Run #315 — Lebanese Sports & Recreation Coach (spt)
// Football culture, gym, outdoor activities, Lebanese sports expressions — 40 items, MCQ drill, 5 tips

const SPT_WORDS = [
  // football / soccer (the national obsession)
  { tr: 'kora',            ar: 'كورة',            en: 'football / soccer / ball',           cat: 'football' },
  { tr: '3am bil3ab kora', ar: 'عم بيلعب كورة',   en: 'playing football (present)',         cat: 'football' },
  { tr: 'gool!',           ar: 'غول!',            en: 'goal! (scored)',                     cat: 'football' },
  { tr: 'fariiq',          ar: 'فريق',            en: 'team',                               cat: 'football' },
  { tr: 'dawri',           ar: 'دوري',            en: 'league / championship',              cat: 'football' },
  { tr: 'malaab',          ar: 'ملعب',            en: 'stadium / sports field',             cat: 'football' },
  { tr: 'Hakam',           ar: 'حكم',             en: 'referee',                            cat: 'football' },
  { tr: 'penalti',         ar: 'بيناتلي',         en: 'penalty kick',                       cat: 'football' },
  // gym & fitness
  { tr: 'jiim / naaadi',   ar: 'جيم / نادي',      en: 'gym / sports club',                  cat: 'gym' },
  { tr: '3am bitmaarass',  ar: 'عم بتمارس',       en: 'working out / exercising',           cat: 'gym' },
  { tr: 'riyaaDa',         ar: 'رياضة',           en: 'sport / exercise (general)',         cat: 'gym' },
  { tr: 'wazn',            ar: 'وزن',             en: 'weight / body weight',               cat: 'gym' },
  { tr: 'protein / brutiin', ar: 'بروتين',        en: 'protein (Lebanese gym culture)',     cat: 'gym' },
  { tr: 'supliimant',      ar: 'سابليمانت',       en: 'supplement (common in Lebanese gyms)', cat: 'gym' },
  { tr: 'kaardyo',         ar: 'كارديو',          en: 'cardio / cardio workout',            cat: 'gym' },
  { tr: '3aDalaat',        ar: 'عضلات',           en: 'muscles',                            cat: 'gym' },
  // outdoor & mountain
  { tr: 'jabal',           ar: 'جبل',             en: 'mountain (Lebanon is famous for)',   cat: 'outdoor' },
  { tr: 'thalj',           ar: 'ثلج',             en: 'snow / ice',                         cat: 'outdoor' },
  { tr: 'tazalluj',        ar: 'تزلج',            en: 'skiing / skiing activity',           cat: 'outdoor' },
  { tr: 'farr 3al-jabal',  ar: 'فر عالجبل',       en: 'escaped to the mountain (went mountain)', cat: 'outdoor' },
  { tr: 'mashwar',         ar: 'مشوار',           en: 'outing / trip / walk',               cat: 'outdoor' },
  { tr: 'sbaHa',           ar: 'سباحة',           en: 'swimming',                           cat: 'outdoor' },
  { tr: 'baHar',           ar: 'بحر',             en: 'sea / beach',                        cat: 'outdoor' },
  { tr: 'shallaal',        ar: 'شلال',            en: 'waterfall',                          cat: 'outdoor' },
  // sports verbs & expressions
  { tr: 'li3ib',           ar: 'لعب',             en: 'played / to play',                   cat: 'verbs' },
  { tr: 'khasir',          ar: 'خسر',             en: 'lost (a game)',                      cat: 'verbs' },
  { tr: 'rbi7',            ar: 'ربح',             en: 'won / earned',                       cat: 'verbs' },
  { tr: 'Talla3 fariiq',   ar: 'طلع الفريق',      en: 'the team came up / won promotion',   cat: 'verbs' },
  { tr: 'daffa3',          ar: 'دفع',             en: 'pushed / paid / scored forward',     cat: 'verbs' },
  { tr: 'HaTT gool',       ar: 'حط غول',          en: 'scored a goal (put in a goal)',      cat: 'verbs' },
  // Lebanese sports culture
  { tr: 'Nejmeh / Ansar',  ar: 'النجمة / الأنصار', en: 'top Lebanese clubs (rival teams)',  cat: 'culture' },
  { tr: 'kasak!',          ar: 'كاسك!',           en: 'cheers! (sports toast)',             cat: 'culture' },
  { tr: '3ala raasTak l-kora', ar: 'على راسك الكورة', en: 'the ball is on your head (your responsibility)', cat: 'culture' },
  { tr: 'mish masna3',     ar: 'مش مصنع',         en: 'not manufactured / natural talent (sarcastic)', cat: 'culture' },
  { tr: 'nfar riyaaDi',    ar: 'نفر رياضي',       en: 'athletic guy / sporty person',       cat: 'culture' },
  { tr: 'ta3be',           ar: 'تعبة',            en: 'fatigue / tiredness (after sport)',  cat: 'culture' },
  { tr: 'ji3t',            ar: 'جعت',             en: 'I got hungry (after workout)',       cat: 'culture' },
  { tr: 'baad l-jiim',     ar: 'بعد الجيم',        en: 'after the gym (common social time)', cat: 'culture' },
  { tr: 'da77 3al-kora',   ar: 'دح عالكورة',      en: 'kicked the ball hard (da77 = kicked/pushed)', cat: 'culture' },
  { tr: 'hal-fariiq byil3ab', ar: 'هالفريق بيلعب', en: 'this team can play (plays well)',   cat: 'culture' },
];

const SPT_DRILLS = [
  {
    q: 'What is "kora" in Lebanese Arabic?',
    opts: ['a type of Lebanese food', 'football / soccer / ball', 'a sport played in water', 'the name of a team'],
    correct: 1,
    note: '"kora" = كورة — football/soccer and the ball itself. The most important Lebanese word for sport. "3am bil3ab kora" = playing football (present continuous). "Bidi l3ab kora" = I want to play football. Lebanese football culture: football is a national obsession. Two main rival clubs: Nejmeh SC (النجمة) from Beirut west, and Ansar FC (الأنصار) from Beirut south — fans take this rivalry seriously. Lebanese abroad follow European leagues fanatically — Barcelona vs. Real Madrid divides families. "shu fariiqak?" = what\'s your team? Essential question for Lebanese social bonding. Match watching: cafes fill up, people bet, shouting is mandatory.'
  },
  {
    q: 'What does "rbi7" mean in Lebanese Arabic?',
    opts: ['to lose a match', 'won / earned / profited', 'to referee a game', 'the game ended in a draw'],
    correct: 1,
    note: '"rbi7" = ربح — won / earned / profited. From Classical Arabic rabiHa (to profit). Sports use: "l-fariiq rbi7" = the team won. "rbi7na!" = we won! Business use (same word): "rbi7t min l-beey3a" = I profited from the sale. Lebanese expressions: "rbi7 w khasir" = won and lost (life has ups and downs). "rbaaH" = winner/profitable. Opposite: "khasir" = lost. Lebanese sports celebration after winning: honking horns through the night, flags waving from cars, sharing sweets (especially after big wins). "3ala Hisaab l-mansuur" = at the winner\'s expense (tradition of buying coffee/sweets).'
  },
  {
    q: 'What is "jabal" and why is it culturally important in Lebanon?',
    opts: ['the sea / beach', 'mountain — Lebanon\'s defining geographic and cultural feature', 'a sports stadium', 'a type of outdoor market'],
    correct: 1,
    note: '"jabal" = جبل — mountain. Lebanon is defined by its mountains: Mount Lebanon (jabal Lubnaaan) runs through the country\'s spine. Cultural importance: (1) Skiing: Lebanese ski in the morning and swim in the afternoon — unique globally. Ski resorts: Mzaar, Faraya, Laqlouq. "raaH itkazzaj 3al-jabal" = went mountain skiing. (2) Summer refuge: "Halaak bi-yeSyafu 3al-jabal" = they summer in the mountains (escaping coastal heat). (3) Villages: most families have a home village in the mountains. "far 3al-jabal" = escaped to the mountain = went to their mountain house. Lebanese mountain culture: essential identity marker — "min wein enta?" often means "which village in the mountains?"'
  },
  {
    q: 'What does "riyaaDa" mean?',
    opts: ['only means football', 'sport / exercise / physical activity (general)', 'a specific type of dance', 'a Lebanese sports channel'],
    correct: 1,
    note: '"riyaaDa" = رياضة — sport / exercise / physical activity. General word covering all sports and fitness. "3am bitmaarass riyaaDa" = exercising / doing sport. "riyaaDict lkora" = football (sport of football). "naadit riyaaDi" = sports club. Lebanese gym culture: gyms ("jiim") are social spaces — people dress up to go to the gym, music is loud, mirrors are everywhere. Gym talk: "shu bitmaarass?" = what do you train? "wain ji3mak?" = where\'s your gym? "kel yo m ji3m" = every day gym (dedicated). Lebanese fitness trend: grew massively after 2020 as mental health outlet — "l-jiim makharrajni min junuun" = the gym kept me sane.'
  },
  {
    q: 'What does "tazalluj" mean?',
    opts: ['swimming in the sea', 'skiing / ski activity', 'mountain hiking', 'playing football on grass'],
    correct: 1,
    note: '"tazalluj" = تزلج — skiing / ski activity. Lebanon has ski resorts within 1 hour of Beirut and the sea, creating the famous "ski and swim same day" experience. Main ski resorts: Mzaar Kfardebian (largest), Faraya, Laqlouq, Cedars/Al-Arze, Zaarour. Lebanese ski culture: heavily social — après-ski gatherings, large family groups, Instagram-worthy slopes. "raaH yitla3 3al-Faraya" = went up to Faraya (skiing). "thalj mni7" = good snow. "mish fi thalj l-yoom" = no snow today (disappointing). Lebanese mountains: snow typically December-March, sometimes April. "l-thalj wili3" = the snow lit up (beautiful snow fell).'
  },
  {
    q: 'What does "mashwar" mean in Lebanese daily life?',
    opts: ['a type of exercise', 'outing / trip / walk / errand', 'a sports competition', 'the gym changing room'],
    correct: 1,
    note: '"mashwar" = مشوار — outing / short trip / walk / errand. From masha (to walk). Uses: (1) "badi3mil mashwar" = I need to do an errand. (2) "yalla 3al-mashwar!" = let\'s go on an outing! (3) "mashwar l-wadi?" = a walk to the valley? (4) "3mala mashwaar" = went on a trip. Lebanese outdoor culture: popular mashwars include: Wadi Qadisha (holy valley, hiking), Tannourine (forests/waterfalls), Baatara Gorge (natural waterfall). "bi-Seer mashwar?" = shall we go on an outing? spontaneous Lebanese activity. Nature as escape: during political/economic crises, outdoor mashwars become therapy — "3al-jabal 3am nnassa" = we\'re in the mountains forgetting (our problems).'
  },
  {
    q: 'What is the significance of "Nejmeh / Ansar" in Lebanese culture?',
    opts: ['two Lebanese mountains', 'the top rival football clubs — Nejmeh vs Ansar', 'two types of Lebanese food', 'Lebanese political parties'],
    correct: 1,
    note: '"Nejmeh" (النجمة = The Star) and "Ansar" (الأنصار = The Supporters) are Lebanon\'s two most successful and rival football clubs. Lebanese Premier League dominators. Nejmeh: historically associated with Beirut\'s Muslim community, western Beirut. Ansar: strong fan base in southern Beirut. Rivalry: one of the most passionate in Arab football. Match day: "mee7 Nejmeh willa Ansar?" = with Nejmeh or Ansar? = which side are you on? Social dynamics: fans take this extremely seriously — families divided, neighborhoods have loyalties. Lebanese football: despite economic crises, Lebanese clubs compete regularly and produce players for Arab leagues. "3amil fariiq" = he/she acts like a team (loyal).'
  },
  {
    q: 'What does "HaTT gool" mean?',
    opts: ['the goalkeeper saved', 'scored a goal (put in a goal)', 'the match was postponed', 'the referee blew the whistle'],
    correct: 1,
    note: '"HaTT gool" = حط غول — scored a goal (literally "put a goal"). "HaTT" = put/placed; "gool" = goal (from English). Lebanese football commentary: "HaTT l-gool b-khajal l-Hakam!" = scored the goal embarrassing the referee! "gool!!" = GOAL!! (shouted explosively). Lebanese match-watching culture: screaming "GOOL!" in cafes, homes, streets. The person who scores: "HaTT l-gool" = he scored. The team: "l-fariiq HaTT tlaate agwaal" = the team scored 3 goals. Lebanese betting: informal side bets during matches are common. "3al-gool l-awwal" = bet on the first goal. Goal celebrations: often involve running outside, honking, fireworks (real ones).'
  },
  {
    q: 'What does "ta3be" refer to in Lebanese sports culture?',
    opts: ['a sports energy drink', 'fatigue / tiredness (after sport or exertion)', 'a type of sports warm-up', 'celebrating a victory'],
    correct: 1,
    note: '"ta3be" = تعبة — fatigue / tiredness. From ta3ab (to be tired/exhausted). Sports use: "ta3baane ba3d l-jiim" = exhausted after the gym. "ta3ba ktir" = very tired (f). Lebanese post-workout ritual: "b3ad l-jiim, aakil shi ktir" = after the gym, I eat a lot. "ji3t" (I got hungry) follows any serious workout. Lebanese gym culture observation: going to the gym is aspirational and social — people spend 30 minutes working out and 2 hours socializing. "ta3be wala lazze" = exhausted but happy. Lebanese recreational pain: "waja3ni l-ji3m" = my body aches from the gym (proudly, showing you worked hard).'
  },
  {
    q: 'What does "sbaHa" mean?',
    opts: ['football practice', 'swimming / swimming activity', 'a mountain hiking trail', 'watching sports on TV'],
    correct: 1,
    note: '"sbaHa" = سباحة — swimming. From sbaH (to swim). "3am bisbaH" = swimming (present). Lebanon context: swimming in the Mediterranean is a summer staple — "3am rooH 3a l-baHar" = going to the sea. Lebanese beach culture: beaches ("shaTTi") are social hotspots — reserved umbrellas, loud music, mezze. Private beach clubs are popular. "sbaHa b-l-baHar" vs "sbaHa b-l-pool" = sea swimming vs pool swimming. Lebanese sea: warm Mediterranean from June-October. "sbaH!" = swim! (command). "saabaH" = swimmer / one who swims. Summer activity: "baad l-jiim, sbaHa" = after the gym, swimming. Lebanese saying: "l-mayy ma byisa3dak" = the water doesn\'t hold you (can\'t rely on it = unreliable person).'
  },
];

const SPT_TIPS = [
  { title: 'Football — Lebanon\'s national obsession', body: 'Football ("kora") is the unifying language across Lebanon\'s diverse communities. Key phrases: "3am bil3ab kora" (playing football), "gool!" (GOAL!), "rbi7na/khasirna" (we won/lost), "HaTT gool" (scored), "Hakam ghalaT" (the ref was wrong — always). Lebanese football culture: asking "shu fariiqak?" (what\'s your team?) is a bonding ritual. Top clubs: Nejmeh (النجمة) vs Ansar (الأنصار) — like Barcelona vs Real Madrid intensity. Lebanese abroad: fervently follow European football — French Ligue 1 (historic French connection), Premier League, Champions League. Match watching: cafes transform into viewing parties with narghile, coffee, extreme opinions, and mandatory shouting.' },
  { title: 'Lebanese mountains — skiing, hiking, and summer escapes', body: 'Lebanon\'s mountains ("jabal") are central to national identity. Skiing ("tazalluj") vocabulary: "raaH yitla3 3al-Faraya" (went up to Faraya skiing), "thalj mni7?" (is the snow good?), "kaif l-mazbalaj?" (how are the slopes?). The famous Lebanese brag: skiing in the morning, swimming in the afternoon — both within 1 hour of each other. Summer: families go to mountain villages ("raaHu 3a-DDay3a" = they went to the village). Mountain outings: "mashwar 3al-jabal" (mountain outing), "shallaal" (waterfall), "nahr" (river). Popular areas: Wadi Qadisha, Faraya, Bcharre, Bkerke, Jounieh mountains.' },
  { title: 'Lebanese gym culture — social fitness', body: 'Lebanese gyms ("jiim" or "naadi riyaaDi") are intensely social. Vocabulary: "3am bitmaarass" (working out), "3aDalaat" (muscles), "brutiin" (protein), "kaardyo" (cardio), "wazn" (weight). Lebanese gym culture: dress code matters — looking good in the gym is important. Mirrors everywhere. Gym talk: "shu bitmaarass?" (what do you train?), "min emta fil jiim?" (how long have you been at the gym?), "shi byinriid l-jiim" (need the gym — Lebanese slang for someone too thin). Post-gym: food is mandatory. "baad l-jiim raaH aakil shawarma" (after gym, went to eat shawarma) is extremely common. The jiim as therapy during crises: "l-jiim makharrajni min junuun" = the gym saved my sanity.' },
  { title: 'Sports vocabulary for betting and commentary', body: 'Lebanese sports talk, especially football: "l-fariiq rbi7" (the team won), "khasirna mar2a teni" (we lost again), "penalti!" (penalty!), "wain l-Hakam?" (where\'s the ref?), "Hakam ghalaT" (wrong call by ref — universal). Score talk: "l-natijje shu?" (what\'s the score?), "taaween taaween" (2-2 draw). Betting: informal sports betting is common — "raahin 3alaik" (I\'m betting on you). Lebanese sports bar culture: ordering narghile + coffee + watching football = ideal Lebanese evening. Post-match analysis: Lebanese people can spend 3 hours analyzing a 90-minute game, often louder after the match than during.' },
  { title: 'Outdoor activities and Lebanese leisure', body: 'Lebanese outdoor vocabulary: "sbaHa" (swimming), "baHar" (sea), "mashwar" (outing/trip), "shallaal" (waterfall), "raHle" (excursion). Lebanese outdoor culture: despite urban density, Lebanese people love nature trips. Summer: "3al-baHar" (to the sea) every weekend. Mountain visits: essential in July-August. Lebanese water culture: sea swimming = recreational, social. Rivers: popular picnic spots with barbecue ("manqal"). Lebanese saying about balance: skiing AND swimming same day = uniquely Lebanese pride. Activities: hiking ("trekking"), cycling ("darraaje"), camping ("khyam/takhayyum"). WhatsApp group outings: "mashwar maa3" (group outing) organized via WhatsApp group chat — Lebanese social planning in action.' },
];

const SPT_ABOUT = 'Master Lebanese Arabic for sports and recreation — from the football culture that unites the country to mountain skiing, gym life, and Mediterranean swimming. Essential for bonding over Lebanon\'s national obsession (football), joining outdoor adventures, and understanding the Lebanese love of physical activity and nature escapes.';
