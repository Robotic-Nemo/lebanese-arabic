// R804 — NEW FEATURE: Lebanese Traditional Games & Pastimes (gms)

const GMS_CATS = ['games','moves','expressions','phrases'];

const GMS_WORDS = [
  // games
  { a: 'طاولة', tr: 'tawle', en: 'backgammon (the Lebanese national pastime)', cat: 'games' },
  { a: 'ورق', tr: 'wara2', en: 'cards / playing cards', cat: 'games' },
  { a: 'شطرنج', tr: 'shatranj', en: 'chess', cat: 'games' },
  { a: 'دامة', tr: 'daama', en: 'checkers / draughts', cat: 'games' },
  { a: 'منقلة', tr: 'man2ale', en: 'mancala / counting game', cat: 'games' },
  { a: 'ضومنة', tr: 'Dumne', en: 'dominoes', cat: 'games' },
  { a: 'زهر', tr: 'zahr', en: 'dice', cat: 'games' },
  // moves
  { a: 'شيش بيش', tr: 'shiish biish', en: 'six-five (best opening in tawleh)', cat: 'moves' },
  { a: 'مريول', tr: 'maryuul', en: 'single piece on a point (vulnerable)', cat: 'moves' },
  { a: 'بيت', tr: 'beet', en: 'home board / inner table', cat: 'moves' },
  { a: 'شكّل', tr: 'shakkal', en: 'blocked / sealed off point', cat: 'moves' },
  { a: 'أكل', tr: '2akal', en: 'to capture / eat (a piece)', cat: 'moves' },
  { a: 'خرج', tr: 'khraj', en: 'to bear off / exit the board', cat: 'moves' },
  // expressions
  { a: 'يلّا العب', tr: 'yalla l3ab', en: 'come on, play your move', cat: 'expressions' },
  { a: 'شاطر', tr: 'shaaTer', en: 'clever / well played', cat: 'expressions' },
  { a: 'بتلعب؟', tr: 'btil3ab', en: 'do you play? / wanna play?', cat: 'expressions' },
  { a: 'خسرت', tr: 'khasirt', en: 'I lost', cat: 'expressions' },
  { a: 'ربحت', tr: 'rbi7t', en: 'I won', cat: 'expressions' },
  { a: 'جولة تانية', tr: 'jawle taanye', en: 'another round', cat: 'expressions' },
  { a: 'مبسوط', tr: 'mabsuuT', en: 'happy / pleased (with the game)', cat: 'expressions' },
  // phrases
  { a: 'دورك', tr: 'doorak', en: 'your turn', cat: 'phrases' },
  { a: 'دوري', tr: 'doori', en: 'my turn', cat: 'phrases' },
  { a: 'ارمي الزهر', tr: '2irmi z-zahr', en: 'roll the dice', cat: 'phrases' },
  { a: 'حكّم الزهر', tr: '7akkam z-zahr', en: 'let the dice decide', cat: 'phrases' },
  { a: 'انشالله تربح', tr: 'inshaalla tirba7', en: 'hopefully you win (said ironically)', cat: 'phrases' },
  { a: 'مش عدل', tr: 'mish 3adel', en: "that's not fair / no fair", cat: 'phrases' },
  { a: 'بلا غش', tr: 'bala ghashsh', en: 'no cheating', cat: 'phrases' },
  { a: 'على الماشي', tr: '3al maashi', en: 'casual game / easy going', cat: 'phrases' }
];

const GMS_DRILLS = [
  { q: 'What is "tawle"?', opts: ['backgammon','chess','dominoes','cards'], ans: 0, exp: 'Tawleh is Lebanon\'s most iconic pastime — played in cafes, homes, and streets' },
  { q: '"Wara2" means...', opts: ['dice','cards','chess pieces','board'], ans: 1, exp: 'Wara2 = paper/cards — Lebanese card games include tarneeb and bastra' },
  { q: 'What does "doorak" mean?', opts: ['my turn','game over','your turn','roll again'], ans: 2, exp: 'Door = turn; doorak = your turn, doori = my turn' },
  { q: '"2akal" in tawleh means...', opts: ['to move','to block','to capture','to win'], ans: 2, exp: 'Literally "ate" — capturing a lone piece is called "akel"' },
  { q: 'What is "shiish biish"?', opts: ['a bad roll','the best opening roll (6-5)','a blocked point','a draw'], ans: 1, exp: 'Six-five in Persian/Arabic — the most favorable opening throw in tawleh' },
  { q: '"Khasirt" means...', opts: ['I cheated','I won','I lost','I quit'], ans: 2, exp: 'From khasara = loss; rbi7t = I won (from riba7 = profit/win)' },
  { q: 'What is "daama"?', opts: ['dominoes','checkers','backgammon','mancala'], ans: 1, exp: 'Daama = checkers/draughts — a classic Lebanese coffee-shop game' },
  { q: '"2irmi z-zahr" means...', opts: ['play your move','shuffle cards','roll the dice','set the board'], ans: 2, exp: 'Irmi = throw/roll; z-zahr = the dice' },
  { q: 'What does "maryuul" refer to in tawleh?', opts: ['home board','a blocked point','a lone exposed piece','a perfect move'], ans: 2, exp: 'A single piece on a point — vulnerable to being captured' },
  { q: '"Yalla l3ab" means...', opts: ['good game','come on play','I give up','your turn'], ans: 1, exp: 'Yalla = come on; l3ab = play — used to urge a slow player' },
  { q: 'What is "man2ale"?', opts: ['chess','backgammon','mancala','checkers'], ans: 2, exp: 'Mancala — a counting/sowing game played across the Arab world' },
  { q: '"Bala ghashsh" means...', opts: ['no cheating','no problem','well played','let\'s go'], ans: 0, exp: 'Bala = without; ghashsh = cheating — Lebanese fairness culture' },
  { q: '"MabsuuT" in a game context means...', opts: ['I\'m losing','happy/pleased','bored','confused'], ans: 1, exp: 'Mabsuut = happy, content — said after a good move or win' },
  { q: 'What does "khraj" mean in tawleh?', opts: ['to cheat','to capture','to bear off','to block'], ans: 2, exp: 'Khraj = exited — bearing off pieces is the final phase of tawleh' },
  { q: '"3al maashi" in gaming means...', opts: ['competitive game','casual/easy going','fast game','final round'], ans: 1, exp: 'Al-maashi = going along — a relaxed, friendly game with no stakes' }
];

const GMS_TIPS = [
  'Tawleh (backgammon) is the heartbeat of Lebanese café culture — men and women of all ages play for hours over coffee or arak, with a soundtrack of dice and loud opinions.',
  '"Shiish biish" (6-5) is the best opening roll in tawleh and a synonym for "perfect luck" in everyday Lebanese speech — if something goes your way, people say "shiish biish".',
  'Lebanese card games include Tarneeb (trump-based partnership game) and Bastra (fishing card game) — both played loudly with trash talk considered part of the fun.',
  'The dice roll in tawleh is said aloud in Lebanese: "2irmi z-zahr" (roll the dice) and results are called out — "shtee shtee!" for double sixes = maximum luck.',
  'Calling a piece "maryuul" (exposed/vulnerable) comes from "maryuul" = reckless fellow — the lone piece is asking to be eaten just like a reckless person invites trouble.',
  'In Lebanon, offering to play "3al maashi" (casual) vs "3al ful" (serious/stakes) is an important social signal — declining a serious game is acceptable but refusing a casual one is rude.'
];
