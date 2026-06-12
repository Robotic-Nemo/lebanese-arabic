// R1233 — NEW FEATURE: Lebanese Traditional Children's Games & Street Play (tcg)

const TCG_WORDS = [
  // games
  {ar:'دبة',        tr:'debbe',      en:'marbles (game)',    cat:'games'},
  {ar:'طيارة',      tr:'Tayyaare',   en:'kite',              cat:'games'},
  {ar:'دوّامة',     tr:'dawwaame',   en:'spinning top',      cat:'games'},
  {ar:'عروسة',      tr:'3arooseh',   en:'doll',              cat:'games'},
  {ar:'خبيصة',      tr:'khabbiise',  en:'hide and seek',     cat:'games'},
  // equipment
  {ar:'طوبة',       tr:'Toobe',      en:'ball',              cat:'equipment'},
  {ar:'حبل',        tr:'7abl',       en:'rope (jump rope)',  cat:'equipment'},
  {ar:'شراطة',      tr:'shraaTa',    en:'slingshot',         cat:'equipment'},
  {ar:'زليجة',      tr:'zlije',      en:'marble (single)',   cat:'equipment'},
  {ar:'بكرة',       tr:'bakra',      en:'spool/bobbin toy',  cat:'equipment'},
  // places & spaces
  {ar:'ملعب',       tr:'mal3ab',     en:'playground',        cat:'spaces'},
  {ar:'حاكورة',     tr:'7aakoore',   en:'yard/garden patch', cat:'spaces'},
  {ar:'حارة',       tr:'7aara',      en:'neighborhood alley',cat:'spaces'},
  {ar:'أرجوحة',     tr:'arjoo7a',    en:'swing',             cat:'spaces'},
  {ar:'زحليطة',     tr:'za7liite',   en:'slide',             cat:'spaces'},
  // play vocabulary
  {ar:'لعبة',       tr:'l3abe',      en:'game/toy',          cat:'play'},
  {ar:'لعب',        tr:'l3ab',       en:'to play',           cat:'play'},
  {ar:'دورتك',      tr:'doortak',    en:'your turn',         cat:'play'},
  {ar:'غشيش',       tr:'ghshiish',   en:'cheating',          cat:'play'},
  {ar:'خسران',      tr:'khsraan',    en:'losing/loser',      cat:'play'},
];

const TCG_DRILLS = [
  {q:'What does طيارة mean in children\'s play?',    opts:['kite','spinning top','doll','slingshot'],         ans:0},
  {q:'What does دورتك mean?',                        opts:['game over','your turn','playground','cheating'],  ans:1},
  {q:'Lebanese word for "ball"?',                    opts:['زليجة','طوبة','بكرة','حبل'],                      ans:1},
  {q:'What does خبيصة mean?',                        opts:['marbles','kite','hide and seek','playground'],    ans:2},
  {q:'Lebanese word for "swing"?',                   opts:['زحليطة','أرجوحة','حاكورة','ملعب'],                ans:1},
  {q:'What does غشيش mean?',                         opts:['winning','your turn','cheating','a game'],        ans:2},
  {q:'Lebanese word for "slingshot"?',               opts:['شراطة','دوّامة','بكرة','طوبة'],                   ans:0},
  {q:'What does حارة mean in this context?',         opts:['playground','yard','neighborhood alley','swing'], ans:2},
];

const TCG_TIPS = [
  {title:'Kite season طيّارة in Lebanon',    body:'Before screens, Beirut\'s rooftops and the open fields of Bekaa and South Lebanon buzzed with kite-flying every spring. Boys would coat kite strings with ground glass (خيط harab) to cut rival kite lines — a tradition that mixed craft skill with friendly neighborhood rivalry.'},
  {title:'Debb دبة — Lebanese marbles',      body:'Marbles was the great equalizer on Lebanese streets. A good shooter (debbe player) could win pocketfuls of others\' marbles in an afternoon. The game required drawing a circle in dirt or chalk on asphalt — حارة had its own debb stars whose reputations crossed neighborhood lines.'},
  {title:'The 7aara حارة as playground',     body:'The neighborhood alley — 7aara — was the original Lebanese playground. Traffic was rare, neighbors watched from balconies, and everyone knew everyone. Games like khbayse (hide and seek) and Toobe (ball games) were organized spontaneously by whoever was outside. No invitations needed.'},
  {title:'Ghshiish غشيش — cheating culture', body:'Accusations of ghshiish (cheating) were the fuel of Lebanese street games. Unlike many cultures, skilled ghshiish was sometimes admired — it meant being 3arrabji (clever/street-smart). The social negotiation around catching and calling out cheating was itself part of the game\'s entertainment.'},
];
