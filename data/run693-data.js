// R693 — NEW FEATURE: Lebanese Sports & Games (spg)
const SPG_CATS = [
  { id:'sports',  label:'⚽ Sports' },
  { id:'games',   label:'🎲 Games' },
  { id:'gym',     label:'💪 Fitness' },
  { id:'phrases', label:'💬 Phrases' },
];

const SPG_WORDS = [
  // sports
  { ar:'كرة قدم',     tr:'kurat 2adam',    en:'football/soccer',        cat:'sports' },
  { ar:'كرة سلة',     tr:'kurat salle',    en:'basketball',             cat:'sports' },
  { ar:'سباحة',       tr:'sibaa7a',        en:'swimming',               cat:'sports' },
  { ar:'تنس',         tr:'tenis',          en:'tennis',                 cat:'sports' },
  { ar:'ملاكمة',      tr:'malaakme',       en:'boxing',                 cat:'sports' },
  { ar:'ركض',         tr:'rakD',           en:'running',                cat:'sports' },
  { ar:'دراجة',       tr:'darraaje',       en:'bicycle/cycling',        cat:'sports' },
  { ar:'تسلق',        tr:'tasalla2',       en:'climbing',               cat:'sports' },
  // games & leisure
  { ar:'طاولة',       tr:'Tawle',          en:'backgammon',             cat:'games' },
  { ar:'شطرنج',       tr:'shatriinj',      en:'chess',                  cat:'games' },
  { ar:'ورق',         tr:'wara2',          en:'cards (card game)',       cat:'games' },
  { ar:'ضومنة',       tr:'Domine',         en:'dominoes',               cat:'games' },
  { ar:'فيديو',       tr:'video',          en:'video games',            cat:'games' },
  { ar:'نرد',         tr:'nard',           en:'dice',                   cat:'games' },
  { ar:'لعبة',        tr:'li3be',          en:'game',                   cat:'games' },
  // fitness
  { ar:'رياضة',       tr:'riyaaDa',        en:'sport/exercise',         cat:'gym' },
  { ar:'تمرين',       tr:'tamreen',        en:'workout/exercise',       cat:'gym' },
  { ar:'نادي رياضي',  tr:'naadi riyaaDi',  en:'sports club/gym',        cat:'gym' },
  { ar:'وزن',         tr:'wazn',           en:'weight',                 cat:'gym' },
  { ar:'تمدد',        tr:'tamaddod',       en:'stretching',             cat:'gym' },
  { ar:'بطولة',       tr:'buTuule',        en:'championship',           cat:'gym' },
  { ar:'فريق',        tr:'free2',          en:'team',                   cat:'gym' },
  // phrases
  { ar:'بتحب الرياضة؟', tr:'bt7ebb el-riyaaDa?', en:'do you like sports?', cat:'phrases' },
  { ar:'شو فريقك؟',     tr:'shu free2ak?',        en:'what is your team?',  cat:'phrases' },
  { ar:'مين فاز؟',      tr:'miin faaz?',           en:'who won?',            cat:'phrases' },
  { ar:'يلا نلعب',       tr:'yalla nil3ab',         en:'let\'s play',         cat:'phrases' },
  { ar:'بتلعب طاولة؟',   tr:'bti3mal Tawle?',       en:'do you play backgammon?', cat:'phrases' },
  { ar:'خسرنا',          tr:'khisirna',             en:'we lost',             cat:'phrases' },
];

const SPG_DRILLS = [
  { q:'How do you say "backgammon"?', opts:['Tawle','shatriinj','wara2','Domine'], ans:0 },
  { q:'"Kurat 2adam" means:', opts:['football/soccer','basketball','tennis','volleyball'], ans:0 },
  { q:'What is "sibaa7a"?', opts:['swimming','running','cycling','climbing'], ans:0 },
  { q:'"Malaakme" means:', opts:['boxing','wrestling','karate','tennis'], ans:0 },
  { q:'How do you say "chess"?', opts:['shatriinj','Tawle','nard','Domine'], ans:0 },
  { q:'"Free2" means:', opts:['team','game','championship','player'], ans:0 },
  { q:'What is "riyaaDa"?', opts:['sport/exercise','swimming','running','gym'], ans:0 },
  { q:'"Butuule" means:', opts:['championship','team','game','tournament'], ans:0 },
  { q:'How do you say "cards"?', opts:['wara2','nard','li3be','Domine'], ans:0 },
  { q:'"Yalla nil3ab" means:', opts:["let's play",'who won?','we lost','your team?'], ans:0 },
  { q:'What is "darraaje"?', opts:['bicycle/cycling','running','swimming','climbing'], ans:0 },
  { q:'"Miin faaz?" means:', opts:['who won?',"let's play",'we lost','what team?'], ans:0 },
  { q:'How do you say "workout"?', opts:['tamreen','riyaaDa','tamaddod','wazn'], ans:0 },
  { q:'"Khisirna" means:', opts:['we lost','we won','we drew','we played'], ans:0 },
  { q:'How do you say "climbing"?', opts:['tasalla2','rakD','sibaa7a','malaakme'], ans:0 },
];

const SPG_TIPS = [
  { title:'Backgammon — the Lebanese obsession', body:'"Tawle" (طاولة) = backgammon — the word means "table" but in Lebanon it refers almost exclusively to the game. Every café, household, and barbershop has a Tawle board. It\'s a social ritual: loud, fast, competitive, with specific Lebanese slang during play. "Yalla shra!" (roll fast!) is heard constantly.' },
  { title:'Football culture', body:'"Kurat 2adam" (كرة قدم) dominates Lebanese sports culture. Lebanon has club rivalries (Nejmeh vs Ansar — Beirut\'s biggest derby). During the World Cup, entire streets are painted in team colors. "Shu free2ak?" (what\'s your team?) is a serious question — the answer tells you a lot about someone.' },
  { title:'Café games', body:'Lebanese cafés (2ahwe) are social hubs for "shatriinj" (chess), "wara2" (cards), and "Tawle". The game of "khafeef" (a local card game) and "baloot" (a trick-taking card game) are popular. "3indo lad3a" (he has game/skill) means someone is good at cards or backgammon.' },
  { title:'Mountain sports', body:'Lebanon\'s mountains offer "tasalla2" (rock climbing) and hiking. The Chouf, Qadisha Valley, and Faraya are climbing destinations. "Darraaje" (cycling) is growing — mountain biking in the Lebanese highlands is a new scene. "Rakd" (running) — Beirut Marathon (Marathoon Bayrut) is a major annual event.' },
  { title:'Sports phrases', body:'"Bt7ebb el-riyaaDa?" (do you like sports?) is small talk. "Yalla nil3ab" = let\'s play (casual invite). "Miin faaz?" = who won?. "Khisirna" = we lost (commiseration). "7asibna" = we almost (had them) — used when you barely lose. "Injaaz" = achievement/accomplishment in sports context.' },
  { title:'Lebanese fitness culture', body:'"Naadi riyaaDi" (نادي رياضي) = sports club/gym. Gym culture boomed in Lebanon since the 2000s. "Tamreen" = workout/exercise. "Wazn" = weight. Lebanese bodybuilding has produced international champions. "3am bi2oom bil-riyaaDa" = I\'m doing sports/working out (the common phrase for exercising).' },
];
