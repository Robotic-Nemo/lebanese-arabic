// Run #75 — Endearments & Compliments Coach (NEW FEATURE)
// Lebanese has dense, culture-specific endearment vocabulary. Mis-applying
// (e.g. calling a stranger "7yēté" or a male friend "ya 2amar") flags you as
// either a beginner or socially clumsy. The right pick depends on:
//   - relationship (spouse / parent–child / close friend / acquaintance)
//   - gender of addressee
//   - tone of moment (tender / playful / commiserating / formal)
//
// Each scenario presents a context line + 4 options (1 correct, 3 plausible).
// Browse mode lists all endearments grouped by usage. Tips synthesize the
// social calculus.

const DEC_ENDEARMENTS = [
  { ar:'حبيبي',       tr:'7abibé / 7abibi',  lit:'my love (m)',          ok:'partner / close friend / child (m)',    wrong:'professional contact, stranger of any age' },
  { ar:'حبيبتي',      tr:'7abibté / 7abibti',lit:'my love (f)',          ok:'partner / close friend / child (f)',    wrong:'professional contact, religious elder' },
  { ar:'حياتي',       tr:'7yēté',            lit:'my life',              ok:'spouse, very close family',             wrong:'casual friends — too intimate' },
  { ar:'قلبي',        tr:"2albé",            lit:'my heart',             ok:'spouse, mother↔child, lifelong best friend', wrong:'work colleague' },
  { ar:'روحي',        tr:'rou7é',            lit:'my soul',              ok:'spouse, parent↔child in tender moment', wrong:'social-distance contexts' },
  { ar:'عيوني',       tr:'3yuné',            lit:'my eyes',              ok:'spouse, family, very close friend',     wrong:'first-meet acquaintance' },
  { ar:'يا قمر',      tr:"ya 2amar",         lit:'O moon',               ok:'compliment to woman or child on beauty', wrong:'addressing a man (gender-marked feminine connotation)' },
  { ar:'يا حلو',      tr:"ya 7ilo",          lit:'O sweet',              ok:'casual compliment to younger person, child, or close friend',     wrong:'elder you must respect formally' },
  { ar:'يا حلوة',     tr:"ya 7ilwé",         lit:'O sweet (f)',          ok:'female friend, child, partner — light compliment',                wrong:'serious professional setting' },
  { ar:'تقبرني',      tr:'tu2borné',         lit:'may you bury me',      ok:'mother to child, spouse — extreme tenderness ("I die before you")', wrong:'casual / playful / English-thinking — sounds morbid out of context' },
  { ar:'يا روحي',     tr:'ya rou7é',         lit:'O my soul',            ok:'spouse in tender beat, parent to small child',                    wrong:'work greeting' },
  { ar:'حبيب قلبي',   tr:"7abib 2albé",      lit:'love of my heart',     ok:'spouse, fiancé, very-close-friend tender moment',                 wrong:'first date — too declarative early' },
  { ar:'يا غالي',     tr:'ya ghālé',         lit:'O precious one (m)',   ok:'showing respect + affection to friend (m), male elder you know well', wrong:'subordinate — sounds patronizing downward' },
  { ar:'يا غالية',    tr:'ya ghālyé',        lit:'O precious one (f)',   ok:'female friend / family elder you respect + love',                 wrong:'female stranger — too forward' },
  { ar:'كل سنة وانت طيب', tr:'kil sené w-inta Tayyeb', lit:'every year and you (m) well', ok:'birthday / Ramadan / Eid / new year — male recipient', wrong:'condolences' },
  { ar:'سلامتك',     tr:'salèmtak',         lit:'your safety',          ok:'someone recovering from illness, an injury, or returned from a trip — male', wrong:'first-meeting greeting' },
  { ar:'يعطيك العافية', tr:'ya3Tik el-3ēfyé',  lit:'may He give you health', ok:'thanking someone after work / service / favor (server, taxi, host)',     wrong:'romantic context — purely transactional politeness' },
  { ar:'صحة',        tr:'Sa77a',            lit:'health',               ok:'after a meal, drink, haircut, or shower — universal',                          wrong:'after a sneeze (use يرحمك instead)' },
  { ar:'نعيماً',     tr:'nā3iman',          lit:'blessed',              ok:'someone after a haircut, shave, or bath — "may it bring you grace"',           wrong:'after a meal' },
  { ar:'مبروك',      tr:'mabrouk',          lit:'blessed (congrats)',   ok:'achievement, new house, baby, marriage, promotion',                            wrong:'condolences' },
];

const DEC_SCENARIOS = [
  { id:'dec01', ctx:"Your wife of 5 years just walked in after a long workday. You want to greet her tenderly.",
    options:[
      { ar:'حياتي', tr:'7yēté', correct:true, why:'spouse-tender register fits perfectly' },
      { ar:'يعطيك العافية', tr:'ya3Tik el-3ēfyé', correct:false, why:'transactional thank-you, not affection' },
      { ar:'مبروك', tr:'mabrouk', correct:false, why:'congratulation, no celebratory event here' },
      { ar:'يا غالي', tr:'ya ghālé', correct:false, why:'masculine form, also too distant for a spouse' },
    ]},
  { id:'dec02', ctx:"Your 6-year-old daughter brings you a drawing she made.",
    options:[
      { ar:'حبيبتي', tr:'7abibté', correct:true, why:'feminine endearment fits parent→child tender beat' },
      { ar:'يا غالية', tr:'ya ghālyé', correct:false, why:'too elevated/respect-heavy for a young child' },
      { ar:'سلامتك', tr:'salèmtak', correct:false, why:"used for someone recovering from illness, also masculine" },
      { ar:'صحة', tr:'Sa77a', correct:false, why:'after-meal/shower phrase, not for tender moment' },
    ]},
  { id:'dec03', ctx:"Your friend just got back from the barbershop. What do you say?",
    options:[
      { ar:'نعيماً', tr:'nā3iman', correct:true, why:'fixed phrase after grooming/bathing' },
      { ar:'مبروك', tr:'mabrouk', correct:false, why:'used for achievements, not haircuts' },
      { ar:'حياتي', tr:'7yēté', correct:false, why:'tender intimacy, mismatched register' },
      { ar:'سلامتك', tr:'salèmtak', correct:false, why:"used for safe-return/recovery, not grooming" },
    ]},
  { id:'dec04', ctx:"A taxi driver helped you find an obscure address. You're paying now.",
    options:[
      { ar:'يعطيك العافية', tr:'ya3Tik el-3ēfyé', correct:true, why:'standard service-thank-you, perfectly graded' },
      { ar:'حبيبي', tr:'7abibé', correct:false, why:'too intimate for a stranger transaction' },
      { ar:'يا قمر', tr:'ya 2amar', correct:false, why:'feminine compliment about beauty — gender-mismatched and out of context' },
      { ar:'تقبرني', tr:'tu2borné', correct:false, why:'extreme tenderness — wildly inappropriate to a stranger' },
    ]},
  { id:'dec05', ctx:"Your friend just told you she's getting married next month.",
    options:[
      { ar:'مبروك', tr:'mabrouk', correct:true, why:'standard congratulation for major life events' },
      { ar:'سلامتك', tr:'salèmtak', correct:false, why:'recovery phrase, totally wrong' },
      { ar:'صحة', tr:'Sa77a', correct:false, why:'after-meal phrase' },
      { ar:'كل سنة وانت طيب', tr:'kil sené w-inta Tayyeb', correct:false, why:'birthday/holiday phrase' },
    ]},
  { id:'dec06', ctx:"Your mother is recovering from minor surgery. You're visiting her.",
    options:[
      { ar:'سلامتك', tr:'salèmtek', correct:true, why:'health-recovery wish, fits perfectly' },
      { ar:'مبروك', tr:'mabrouk', correct:false, why:'congratulating illness is awkward' },
      { ar:'نعيماً', tr:'nā3iman', correct:false, why:'haircut/bath phrase' },
      { ar:'يا حلو', tr:'ya 7ilo', correct:false, why:'masculine compliment, also wrong register for an elder' },
    ]},
  { id:'dec07', ctx:"You just finished a meal at a friend's mom's house. You want to compliment the cook.",
    options:[
      { ar:'يعطيك العافية', tr:'ya3Tik el-3ēfyé', correct:true, why:'thank-the-cook standard; also doubles as general post-meal politeness' },
      { ar:'مبروك', tr:'mabrouk', correct:false, why:'no celebration to congratulate' },
      { ar:'حياتي', tr:'7yēté', correct:false, why:'spouse-level intimacy, inappropriate to friend\'s mother' },
      { ar:'تقبرني', tr:'tu2borné', correct:false, why:'extreme tenderness, weird in this context' },
    ]},
  { id:'dec08', ctx:"You sneezed during dinner with friends.",
    options:[
      { ar:'صحة', tr:'Sa77a', correct:true, why:"in modern Lebanese, Sa77a covers post-sneeze too; classical would prefer يرحمك الله but Sa77a is normal" },
      { ar:'مبروك', tr:'mabrouk', correct:false, why:'no congratulation needed' },
      { ar:'سلامتك', tr:'salèmtak', correct:false, why:'used for actual illness/recovery, sneeze is too minor' },
      { ar:'نعيماً', tr:'nā3iman', correct:false, why:'haircut/bath phrase' },
    ]},
  { id:'dec09', ctx:"You're ending a phone call with your dad. You want a warm sign-off.",
    options:[
      { ar:'تقبرني', tr:'tu2borné', correct:true, why:'parent↔child extreme tenderness, fixed expression' },
      { ar:'مبروك', tr:'mabrouk', correct:false, why:'no event to congratulate' },
      { ar:'يا قمر', tr:'ya 2amar', correct:false, why:'feminine beauty compliment, gender-mismatched' },
      { ar:'يا غالية', tr:'ya ghālyé', correct:false, why:'feminine form, addressing father is masculine' },
    ]},
  { id:'dec10', ctx:"It's Eid. You're greeting your neighbor's family.",
    options:[
      { ar:'كل سنة وانت طيب', tr:'kil sené w-inta Tayyeb', correct:true, why:'standard recurring-occasion greeting; addresses pl/m by default, swap to w-into for plural neutral or w-inti for f' },
      { ar:'سلامتك', tr:'salèmtak', correct:false, why:'recovery phrase' },
      { ar:'يعطيك العافية', tr:'ya3Tik el-3ēfyé', correct:false, why:'service-thank-you, not occasion-greeting' },
      { ar:'صحة', tr:'Sa77a', correct:false, why:'post-meal/shower phrase' },
    ]},
  { id:'dec11', ctx:"You see a baby at a relative's house and want to compliment her.",
    options:[
      { ar:'يا قمر', tr:'ya 2amar', correct:true, why:'beauty compliment, fits a baby (especially girls)' },
      { ar:'يا غالية', tr:'ya ghālyé', correct:false, why:'respect-heavy, weird for a baby' },
      { ar:'حبيبتي', tr:'7abibté', correct:false, why:'plausible from the parents but as visitor it\'s too forward — yā 2amar is the visitor-safe pick' },
      { ar:'سلامتها', tr:'salèmt-ha', correct:false, why:'health-recovery phrase, no occasion' },
    ]},
  { id:'dec12', ctx:"Your female colleague successfully defended her PhD. You want to respect-and-celebrate.",
    options:[
      { ar:'مبروك', tr:'mabrouk', correct:true, why:'achievement congratulation, perfectly graded' },
      { ar:'حياتي', tr:'7yēté', correct:false, why:'spouse-intimate, completely wrong register' },
      { ar:'تقبريني', tr:'tu2bourine', correct:false, why:'extreme family-tenderness, jarring at work' },
      { ar:'يا روحي', tr:'ya rou7é', correct:false, why:'spouse/parent intimate' },
    ]},
  { id:'dec13', ctx:"You're a man comforting your male best friend after a breakup.",
    options:[
      { ar:'يا غالي', tr:'ya ghālé', correct:true, why:'masculine "precious friend" — affectionate without homo-romantic register confusion' },
      { ar:'حبيب قلبي', tr:"7abib 2albé", correct:false, why:'spouse-only register' },
      { ar:'يا قمر', tr:'ya 2amar', correct:false, why:'feminine beauty compliment, mismatched' },
      { ar:'مبروك', tr:'mabrouk', correct:false, why:'congratulating a breakup is wrong' },
    ]},
  { id:'dec14', ctx:"Your young son hands you something he found.",
    options:[
      { ar:'تقبرني', tr:'tu2borné', correct:true, why:'mother/father→child fixed-tenderness phrase, very common' },
      { ar:'يعطيك العافية', tr:'ya3Tik el-3ēfyé', correct:false, why:'service-thanks register, too transactional' },
      { ar:'يا غالي', tr:'ya ghālé', correct:false, why:'too formal/respect-weighted for a child' },
      { ar:'سلامتك', tr:'salèmtak', correct:false, why:'recovery phrase' },
    ]},
  { id:'dec15', ctx:"Your husband walks in tired from work — you want a tender 1-word welcome.",
    options:[
      { ar:'حياتي', tr:'7yēté', correct:true, why:'spouse-tender single-word, absolutely standard' },
      { ar:'يا حلو', tr:'ya 7ilo', correct:false, why:'casual / lighthearted compliment, less tender than 7yēté for this beat' },
      { ar:'مبروك', tr:'mabrouk', correct:false, why:'congratulation, mismatched' },
      { ar:'صحة', tr:'Sa77a', correct:false, why:'post-meal/shower phrase' },
    ]},
  { id:'dec16', ctx:"You complimented a stranger\'s small dog. The owner thanks you. You want a warm but appropriate reply.",
    options:[
      { ar:'يعطيك العافية', tr:'ya3Tik el-3ēfyé', correct:true, why:'safe distance-acknowledging phrase ("good health to you") — keeps the warmth without intimacy' },
      { ar:'حبيبي', tr:'7abibé', correct:false, why:'too intimate for a stranger' },
      { ar:'تقبرني', tr:'tu2borné', correct:false, why:'extreme intimacy, weird with strangers' },
      { ar:'مبروك', tr:'mabrouk', correct:false, why:'no event to congratulate' },
    ]},
  { id:'dec17', ctx:"You finished a haircut at the barber. The barber is older than you.",
    options:[
      { ar:'يعطيك العافية', tr:'ya3Tik el-3ēfyé', correct:true, why:'both you and the barber will likely exchange this; you thank his work, he replies "ya3afīk"' },
      { ar:'نعيماً', tr:'nā3iman', correct:false, why:"that's what HE says to YOU; you don't say it to him about your own haircut" },
      { ar:'حبيبي', tr:'7abibé', correct:false, why:'inappropriate intimacy with elder you don\'t know' },
      { ar:'مبروك', tr:'mabrouk', correct:false, why:'no event to celebrate' },
    ]},
  { id:'dec18', ctx:"Your female cousin had a baby. You\'re visiting and meeting the baby.",
    options:[
      { ar:'مبروك', tr:'mabrouk', correct:true, why:'baby-arrival congratulation, universal' },
      { ar:'سلامتك', tr:'salèmtek', correct:false, why:"recovery phrase — possible if she's still recovering from delivery, but mabrouk is the primary social move" },
      { ar:'يعطيك العافية', tr:'ya3Tik el-3ēfyé', correct:false, why:'service-thanks register' },
      { ar:'كل سنة وانت طيبة', tr:'kil sené w-inti Tayyebé', correct:false, why:'recurring-occasion greeting, baby is one-time' },
    ]},
  { id:'dec19', ctx:"Your wife hands you coffee in the morning.",
    options:[
      { ar:'صحة', tr:'Sa77a', correct:true, why:'standard pre-drink/food acknowledgment; spouse can also follow with حياتي for warmth' },
      { ar:'مبروك', tr:'mabrouk', correct:false, why:'no event to celebrate' },
      { ar:'سلامتك', tr:'salèmtak', correct:false, why:'recovery phrase' },
      { ar:'كل سنة وانت طيب', tr:'kil sené w-inta Tayyeb', correct:false, why:'occasion phrase, no occasion' },
    ]},
  { id:'dec20', ctx:"You greet a male elder you respect at a family gathering, you don\'t see him often.",
    options:[
      { ar:'يا غالي', tr:'ya ghālé', correct:true, why:'respect + affection, age-appropriate, exactly the right blend' },
      { ar:'حبيبي', tr:'7abibé', correct:false, why:'too intimate / casual for respect register' },
      { ar:'يا قمر', tr:'ya 2amar', correct:false, why:'feminine beauty, jarringly out of place' },
      { ar:'مبروك', tr:'mabrouk', correct:false, why:'no event to congratulate' },
    ]},
];

const DEC_TIPS = [
  'Lebanese endearments scale by *relationship intimacy* AND *moment register*. Same person + different moment = different word.',
  'tu2borné ("may you bury me") sounds morbid in English but is one of the warmest things a Lebanese parent or spouse can say. Don\'t translate it literally.',
  'ya3Tik el-3ēfyé is the universal safe choice — service, work, light compliment, post-task thanks. When in doubt, this.',
  'Sa77a after meals/drinks/showers; nā3iman after haircuts/baths; salèmtak after illness/travel. Each has a fixed slot.',
  'mabrouk = congratulations for a positive change of state (marriage, baby, promotion, new house). Never for "you survived."',
  'ya 2amar / ya 7ilwé are gendered-feminine compliments. Using them on a man reads as joke or gaffe unless tone clearly signals teasing.',
  'Spouse-tier (7yēté, rou7é, 2albé, 7abib 2albé) on a casual friend reads as inappropriate even if the friend is close. Save them.',
];
