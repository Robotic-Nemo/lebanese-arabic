// R870 — NEW FEATURE: Lebanese Tawle (Backgammon) & Coffeehouse Games (tbl)

const TBL_CATS = ['tawle', 'cards', 'coffeehouse', 'expressions'];

const TBL_WORDS = [
  // tawle / backgammon
  { a: 'طاولة', tr: 'tawle', en: 'backgammon', cat: 'tawle' },
  { a: 'نرد', tr: 'nard', en: 'dice', cat: 'tawle' },
  { a: 'حجر', tr: '7ajar', en: 'piece/checker', cat: 'tawle' },
  { a: 'بيت', tr: 'beit', en: 'point (on board)', cat: 'tawle' },
  { a: 'زهر', tr: 'zahr', en: 'roll the dice', cat: 'tawle' },
  { a: 'دبل', tr: 'dabal', en: 'double', cat: 'tawle' },
  { a: 'باز', tr: 'baaz', en: 'bar (hit piece)', cat: 'tawle' },
  { a: 'شش بيش', tr: 'shesh besh', en: 'six-five (best roll)', cat: 'tawle' },
  { a: 'جمع', tr: 'jama3', en: 'bear off pieces', cat: 'tawle' },
  { a: 'مارس', tr: 'maars', en: 'mars (win double)', cat: 'tawle' },
  // cards
  { a: 'وراق', tr: 'wraa2', en: 'cards', cat: 'cards' },
  { a: 'كوتشينة', tr: 'kotsheena', en: 'playing cards (deck)', cat: 'cards' },
  { a: 'بصرة', tr: 'basra', en: 'basra (card game)', cat: 'cards' },
  { a: 'شدة', tr: 'shadde', en: 'suit (cards)', cat: 'cards' },
  { a: 'دور', tr: 'door', en: 'turn/round', cat: 'cards' },
  { a: 'بلوت', tr: 'baloot', en: 'baloot (trump card game)', cat: 'cards' },
  // coffeehouse
  { a: 'قهوة', tr: '2ahwe', en: 'coffeehouse', cat: 'coffeehouse' },
  { a: 'شيشة', tr: 'sheeshe', en: 'hookah/nargileh', cat: 'coffeehouse' },
  { a: 'حكي', tr: '7aki', en: 'chat/talk', cat: 'coffeehouse' },
  { a: 'سهرة', tr: 'sahre', en: 'evening gathering', cat: 'coffeehouse' },
  { a: 'جلسة', tr: 'jalse', en: 'sitting/session', cat: 'coffeehouse' },
  { a: 'نافلة', tr: 'naafle', en: 'wasting time pleasantly', cat: 'coffeehouse' },
  // expressions
  { a: 'زهرك حلو', tr: 'zahrak 7elo', en: 'lucky roll (lit. your dice is sweet)', cat: 'expressions' },
  { a: 'ما بتحكمني', tr: 'ma bte7komni', en: "you can't control me", cat: 'expressions' },
  { a: 'الزهر بيلعب', tr: 'iz-zahr byil3ab', en: 'luck is at play', cat: 'expressions' },
  { a: 'هلق دوري', tr: 'halla2 doori', en: 'now it\'s my turn', cat: 'expressions' },
  { a: 'خسرت', tr: 'khisirt', en: 'I lost', cat: 'expressions' },
  { a: 'ربحت', tr: 'rbe7t', en: 'I won', cat: 'expressions' },
];

const TBL_DRILLS = [
  { q: 'What is "backgammon" in Lebanese?', opts: ['طاولة', 'نرد', 'حجر', 'زهر'], ans: 0 },
  { q: 'What does "nard" mean?', opts: ['piece', 'dice', 'board', 'move'], ans: 1 },
  { q: '"Shesh besh" is what roll?', opts: ['double six', 'six-five', 'five-four', 'six-one'], ans: 1 },
  { q: 'What is "baaz" in tawle?', opts: ['winning move', 'a hit piece on bar', 'double roll', 'bear off'], ans: 1 },
  { q: 'What does "maars" mean?', opts: ['a miss', 'win by double (mars)', 'dice roll', 'a point'], ans: 1 },
  { q: 'What is "kotsheena"?', opts: ['dice game', 'playing cards deck', 'hookah', 'coffeehouse'], ans: 1 },
  { q: 'What card game is "basra"?', opts: ['a trump game', 'a Lebanese card game', 'bingo', 'chess'], ans: 1 },
  { q: 'What is "sheeshe"?', opts: ['chess piece', 'hookah/nargileh', 'playing card', 'dice'], ans: 1 },
  { q: 'What does "sahre" mean?', opts: ['morning coffee', 'evening gathering', 'card game', 'dice roll'], ans: 1 },
  { q: 'What is "naafle"?', opts: ['a card game move', 'wasting time pleasantly', 'a bad roll', 'a score'], ans: 1 },
  { q: '"Zahrak 7elo" literally means?', opts: ['your turn is good', 'your dice is sweet', 'your card is high', 'your move is clever'], ans: 1 },
  { q: 'What does "iz-zahr byil3ab" mean?', opts: ['throw the dice now', 'luck is at play', 'the dice is broken', 'play again'], ans: 1 },
  { q: 'What is "jama3" in tawle?', opts: ['double roll', 'bear off pieces', 'hit opponent', 'start position'], ans: 1 },
  { q: 'What does "jalse" mean?', opts: ['card game', 'sitting/session', 'dice move', 'score'], ans: 1 },
  { q: 'What is "rbe7t"?', opts: ['I lost', 'I cheated', 'I won', 'I played'], ans: 2 },
  { q: 'What does "7aki" mean in coffeehouse context?', opts: ['order coffee', 'chat/talk', 'play cards', 'pay the bill'], ans: 1 },
];

const TBL_TIPS = [
  { title: 'Tawle is Everywhere', body: 'Backgammon (tawle) is the national pastime. Every coffeehouse, balcony, and family gathering has a board. Games can last hours while men smoke argileh and drink coffee.' },
  { title: 'Speed & Trash Talk', body: 'Lebanese tawle is fast-paced with constant commentary. "Zahrak 7elo" (lucky dice!) and "ma bte7komni!" (you can\'t control me!) are standard table talk.' },
  { title: 'Basra Card Game', body: 'Basra is a beloved Lebanese card game where you capture pairs. It\'s played in coffeehouses and at home, especially during power cuts.' },
  { title: 'The Coffeehouse (2ahwe)', body: 'The neighborhood 2ahwe is a male social institution. Men gather to play, gossip, watch football, and "naafle" — spend time pleasantly doing nothing important.' },
  { title: 'Argileh Culture', body: 'Sheeshe (hookah) is ordered by flavor — tuffaa7 (apple), 3inab (grape), nana (mint). You don\'t ask for it — the waiter already knows your preference after the first visit.' },
  { title: 'Gambling & Pride', body: 'While street gambling is frowned upon, playing for small stakes (coins, coffee bets) is normal. Losing gracefully is respected; being a sore loser is not.' },
];
