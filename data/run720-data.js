// R720 — NEW FEATURE: Lebanese Sports & Athletics (sprt)
const SPRT_CATS = [
  { id:'football', label:'⚽ Football' },
  { id:'general',  label:'🏃 General Sports' },
  { id:'gym',      label:'💪 Gym & Fitness' },
  { id:'phrases',  label:'💬 Phrases' },
];

const SPRT_WORDS = [
  // football (soccer)
  { ar:'كرة القدم',    tr:'kurat el-2adam',    en:'football/soccer',         cat:'football' },
  { ar:'ملعب',         tr:'mal3ab',             en:'stadium/pitch',           cat:'football' },
  { ar:'هدف',          tr:'hadaf',              en:'goal',                    cat:'football' },
  { ar:'حارس مرمى',   tr:'7aaris marma',       en:'goalkeeper',              cat:'football' },
  { ar:'مباراة',       tr:'mubaara',            en:'match/game',              cat:'football' },
  { ar:'دوري',         tr:'dowri',              en:'league',                  cat:'football' },
  { ar:'بطولة',        tr:'buTooliyye',         en:'championship/tournament', cat:'football' },
  { ar:'لاعب',         tr:'laa3ib',             en:'player',                  cat:'football' },
  // general sports
  { ar:'رياضة',        tr:'riyaaDa',            en:'sport/exercise',          cat:'general' },
  { ar:'سباحة',        tr:'sibaa7a',            en:'swimming',                cat:'general' },
  { ar:'تنس',          tr:'tenis',              en:'tennis',                  cat:'general' },
  { ar:'تسلق',         tr:'tasalla2',           en:'climbing/hiking',         cat:'general' },
  { ar:'دراجة',        tr:'darraaje',           en:'bicycle',                 cat:'general' },
  { ar:'عدو',          tr:'3adw',               en:'running/sprint',          cat:'general' },
  { ar:'بطل',          tr:'baTal',              en:'champion',                cat:'general' },
  // gym & fitness
  { ar:'صالة رياضية',  tr:'Saalit riyaaDiyye', en:'gym/sports hall',         cat:'gym' },
  { ar:'تمرين',        tr:'tamriin',            en:'exercise/workout',        cat:'gym' },
  { ar:'لياقة',        tr:'lyaa2a',             en:'fitness',                 cat:'gym' },
  { ar:'وزن',          tr:'wazn',               en:'weight',                  cat:'gym' },
  { ar:'عضلة',         tr:'3aDale',             en:'muscle',                  cat:'gym' },
  { ar:'حمية',         tr:'7imye',              en:'diet',                    cat:'gym' },
  { ar:'تدريب',        tr:'tadriib',            en:'training/coaching',       cat:'gym' },
  // phrases
  { ar:'بتلعب رياضة؟',          tr:'btil3ab riyaaDa?',          en:'do you play sports?',       cat:'phrases' },
  { ar:'منو فريقك؟',            tr:'miin farii2ak?',               en:'who\'s your team?',          cat:'phrases' },
  { ar:'شو النتيجة؟',           tr:'shu el-natiije?',           en:'what\'s the score?',         cat:'phrases' },
  { ar:'اللعب بدو روح',         tr:'el-la3b biddo ruu7',        en:'the game needs spirit',     cat:'phrases' },
  { ar:'بتروح عالجيم؟',         tr:'btruu7 3al-jeem?',          en:'do you go to the gym?',     cat:'phrases' },
  { ar:'بطولة العالم',          tr:'buTooliyyet el-3aalam',     en:'World Cup',                 cat:'phrases' },
];

const SPRT_DRILLS = [
  { q:'How do you say "football/soccer"?', opts:['kurat el-2adam','riyaaDa','mal3ab','mubaara'], ans:0 },
  { q:'"Hadaf" means:', opts:['goal','stadium','match','player'], ans:0 },
  { q:'What is "mal3ab"?', opts:['stadium/pitch','league','tournament','team'], ans:0 },
  { q:'"Mubaara" means:', opts:['match/game','goal','championship','training'], ans:0 },
  { q:'How do you say "swimming"?', opts:['sibaa7a','riyaaDa','tasalla2','3adw'], ans:0 },
  { q:'"RiyaaDa" means:', opts:['sport/exercise','training','fitness','league'], ans:0 },
  { q:'What is "tamriin"?', opts:['exercise/workout','weight','muscle','diet'], ans:0 },
  { q:'"Tadriib" means:', opts:['training/coaching','exercise','fitness','match'], ans:0 },
  { q:'How do you say "champion"?', opts:['baTal','laa3ib','7aaris','dowri'], ans:0 },
  { q:'"Lyaa2a" means:', opts:['fitness','weight','muscle','training'], ans:0 },
  { q:'What is "buTooliyye"?', opts:['championship/tournament','league','match','goal'], ans:0 },
  { q:'"7aaris marma" means:', opts:['goalkeeper','player','champion','coach'], ans:0 },
  { q:'How do you say "do you play sports"?', opts:['btil3ab riyaaDa?','miin friik?','shu el-natiije?','btruu7 3al-jeem?'], ans:0 },
  { q:'"3aDale" means:', opts:['muscle','weight','diet','fitness'], ans:0 },
  { q:'How do you say "what\'s the score"?', opts:['shu el-natiije?','miin friik?','btil3ab riyaaDa?','el-la3b biddo ruu7'], ans:0 },
];

const SPRT_TIPS = [
  { title:'Football — the national obsession', body:'"Kurat el-2adam" (كرة القدم) = football/soccer — the most popular sport in Lebanon, played in every neighborhood. "Dowri" = league — the Lebanese Premier League (Dawri el-Mustawa el-Awwal) runs September–May. "Mubaara" = match — neighborhood games happen on makeshift pitches everywhere. "Mal3ab" = stadium — Municipal Stadium in Beirut, Camille Chamoun Sports City.' },
  { title:'Regional club rivalries', body:'"Fariiq" = team — Lebanese club rivalries mirror sectarian geography: Al-Ansar (Sunni West Beirut), Nejmeh SC (multicultural), Racing Club de Liban, Al-Ahed (south Beirut), Safa SC. "Laa3ib" = player — many Lebanese players compete in the Gulf. "Hadaf" = goal — Lebanese fans celebrate goals with car horns and fireworks.' },
  { title:'Mountain sports', body:'"Tasalla2" (تسلق) = climbing/hiking — Lebanon\'s mountains offer exceptional hiking via the Lebanon Mountain Trail (LMT), 470km from north to south. "Darraaje" = bicycle — cycling tourism growing in the mountains. "Tenis" = tennis — popular in private clubs. "Sibaara" = swimming — coastal Mediterranean swimming is a summer ritual.' },
  { title:'Gym culture', body:'"Saalit riyaaDiyye" = gym/sports hall — gym culture is booming in Beirut, especially post-2019 with people seeking stress relief. "Tamriin" = workout. "3aDale" = muscle — bodybuilding is popular among Lebanese youth. "Lyaa2a" = fitness. Lebanese gyms stay open late — evening sessions after dinner are common.' },
  { title:'Sports phrases', body:'"Btil3ab riyaaDa?" = do you play sports? — standard small talk. "Miin friik?" = who\'s your team? — careful, this can reveal political/religious affiliation! "Shu el-natiije?" = what\'s the score? — asked constantly during matches. "El-la3b biddo ruu7" = the game needs spirit — motivational saying.' },
  { title:'Lebanese sporting achievements', body:'"BaTal" = champion — Lebanon punches above its weight: Rami Farhat (bodybuilding), Ziyad Chahine (swimming), Aline Ghosn (tennis). "BuTooliyyet el-3aalam" = World Cup — Lebanese follow the World Cup passionately. Basketball ("kurat el-salle") is strong too — national team regularly qualifies for FIBA Asia Cup. "3adw" = running — Beirut Marathon is a major annual event.' },
];
