// R567 — NEW FEATURE: Lebanese Tawle (Backgammon) culture coach (prefix: twl)

const TWL_WORDS = [
  // dice & setup
  { ar: 'الزهر', tr: 'ez-zahr', en: 'the dice', cat: 'game' },
  { ar: 'الخانة', tr: 'el-khane', en: 'the point (space on board)', cat: 'game' },
  { ar: 'الباب', tr: 'el-baab', en: 'the bar (where hit pieces go)', cat: 'game' },
  { ar: 'حبّة', tr: '7abbe', en: 'a single checker/piece', cat: 'game' },
  { ar: 'شيش بيش', tr: 'shesh besh', en: '6-5 roll (best opening)', cat: 'dice' },
  { ar: 'بيش بيش', tr: 'besh besh', en: '5-5 doubles', cat: 'dice' },
  { ar: 'شيش شيش', tr: 'shesh shesh', en: '6-6 doubles', cat: 'dice' },
  { ar: 'يك يك', tr: 'yak yak', en: '1-1 (worst doubles)', cat: 'dice' },
  // moves
  { ar: 'جنّ', tr: 'jann', en: 'to hit (send opponent to bar)', cat: 'moves' },
  { ar: 'كمّن', tr: 'kammin', en: 'to block/build a prime', cat: 'moves' },
  { ar: 'طلع', tr: 'tili3', en: 'to bear off (remove piece from board)', cat: 'moves' },
  { ar: 'فوت', tr: 'fuut', en: 'to enter from the bar', cat: 'moves' },
  { ar: 'مهجور', tr: 'mahjuur', en: 'a blot (lone piece that can be hit)', cat: 'moves' },
  { ar: 'عمل كمين', tr: '3amal kamiin', en: 'set a block/trap', cat: 'moves' },
  { ar: 'على الباب', tr: '3al-baab', en: 'on the bar (a piece was hit)', cat: 'moves' },
  // game outcomes
  { ar: 'الكمّون', tr: 'el-kammoon', en: 'backgammon win (opponent bears none off)', cat: 'outcome' },
  { ar: 'المارس', tr: 'el-maars', en: 'gammon (opponent hasn\'t started bearing off)', cat: 'outcome' },
  { ar: 'اللفّة', tr: 'el-laffe', en: 'the doubling cube', cat: 'outcome' },
  { ar: 'لفّ', tr: 'laff', en: 'to double (offer doubling cube)', cat: 'outcome' },
  { ar: 'ما بدّي لفّ', tr: 'maa bedde laff', en: 'I don\'t accept the double', cat: 'outcome' },
  // expressions
  { ar: 'الزهر مش معك', tr: 'ez-zahr mish ma3ak', en: 'the dice aren\'t with you', cat: 'expr' },
  { ar: 'يلا حطّ', tr: 'yalla 7utt', en: 'come on, place it!', cat: 'expr' },
  { ar: 'شوف كيف بلعب', tr: 'shuuf kiif bil3ab', en: 'watch how I play', cat: 'expr' },
  { ar: 'يسلّم إيدك', tr: 'yisallam eedk', en: 'well played (lit. your hand be blessed)', cat: 'expr' },
  { ar: 'ما بدّي حظّك', tr: 'maa bedde 7azzak', en: 'I don\'t want your luck', cat: 'expr' },
  { ar: 'عم بيتعصّب', tr: '3am byet3assab', en: 'he\'s getting frustrated', cat: 'expr' },
  { ar: 'ما بيجي بالتاولة', tr: 'maa biyji bit-tawle', en: 'nothing is certain in backgammon', cat: 'expr' },
  { ar: 'كن متركّز', tr: 'kun metrakkez', en: 'stay focused', cat: 'expr' },
];

const TWL_DRILLS = [
  {
    q: 'You roll 6-5 on your opening move. What\'s this called in Lebanese?',
    opts: ['يك يك (yak yak)', 'شيش بيش (shesh besh)', 'بيش بيش (besh besh)', 'شيش شيش (shesh shesh)'],
    ans: 1,
    exp: 'شيش بيش (shesh besh) is the 6-5 roll — considered the best opening in backgammon. شيش=6, بيش=5.'
  },
  {
    q: 'Your piece is alone on a point and can be hit. What\'s it called?',
    opts: ['كمين (kamiin)', 'لفّة (laffe)', 'مهجور (mahjuur)', 'باب (baab)'],
    ans: 2,
    exp: 'مهجور (mahjuur) means a blot — a single checker on a point, vulnerable to being hit.'
  },
  {
    q: 'What does جنّ (jann) mean in tawle?',
    opts: ['To bear off a piece', 'To double the stakes', 'To hit opponent\'s piece to the bar', 'To build a block'],
    ans: 2,
    exp: 'جنّ (jann) means to hit an opponent\'s blot, sending it to the bar — الباب.'
  },
  {
    q: 'Someone offers you the doubling cube. You refuse. What do you say?',
    opts: ['يلا حطّ (yalla 7utt)', 'ما بدّي لفّ (maa bedde laff)', 'عمل كمين (3amal kamiin)', 'فوت (fuut)'],
    ans: 1,
    exp: 'ما بدّي لفّ (maa bedde laff) = I don\'t accept the double. You\'d forfeit the current stakes instead.'
  },
  {
    q: 'You\'ve built 3 connected points in a row, blocking your opponent. You\'ve done what?',
    opts: ['كمّنت (kammant)', 'جنّيت (janneet)', 'طلّعت (tilla3t)', 'لفّيت (laffeet)'],
    ans: 0,
    exp: 'كمّنت (kammant) = you built a block/prime. كمّن means to anchor and block consecutive points.'
  },
  {
    q: 'Your piece was just hit and sent to the bar. How do you describe its position?',
    opts: ['على اللفّة', 'على الباب (3al-baab)', 'طلع', 'مكمّن'],
    ans: 1,
    exp: 'على الباب (3al-baab) = on the bar. You must re-enter this piece before moving any others.'
  },
  {
    q: 'The dice keep going against you. A friend commiserates. What do they say?',
    opts: ['شيش شيش', 'كن متركّز', 'الزهر مش معك (ez-zahr mish ma3ak)', 'يسلّم إيدك'],
    ans: 2,
    exp: 'الزهر مش معك = the dice aren\'t with you. A common expression for bad luck in tawle.'
  },
  {
    q: 'You win and your opponent hasn\'t even started bearing off. This is called?',
    opts: ['المارس (el-maars)', 'الكمّون (el-kammoon)', 'اللفّة (el-laffe)', 'الباب (el-baab)'],
    ans: 1,
    exp: 'الكمّون (el-kammoon) = backgammon — worth 3 points. Opponent hasn\'t borne off any pieces.'
  },
  {
    q: 'What does طلع (tili3) mean in tawle?',
    opts: ['To roll the dice', 'To enter from the bar', 'To bear off a piece from the board', 'To offer a double'],
    ans: 2,
    exp: 'طلع (tili3) = to bear off — removing pieces from the board in the final stage of the game.'
  },
  {
    q: 'After a beautiful move, your opponent genuinely compliments you. What do they say?',
    opts: ['ما بيجي بالتاولة', 'ما بدّي حظّك', 'يسلّم إيدك (yisallam eedk)', 'عم بيتعصّب'],
    ans: 2,
    exp: 'يسلّم إيدك = lit. "may your hand be blessed" — a genuine compliment for a well-played move in tawle.'
  },
];

const TWL_TIPS = [
  'Tawle (backgammon) is part of Lebanese daily life — played in coffee shops, on sidewalks, and at home. The clatter of dice and pieces is a national soundtrack.',
  'Lebanese dice rolling has its own dialect: شيش=6, بيش=5, يك=1. Combinations like شيش بيش (6-5) are the vocabulary of the game.',
  'Trash talk in Lebanese tawle is an art form — ما بدّي حظّك (I don\'t want your luck) is the ultimate compliment disguised as insult.',
  'The doubling cube (اللفّة) is used in more competitive play. Offering and refusing doubles (لفّ / ما بدّي لفّ) adds a layer of psychological warfare.',
  'Playing tawle well means reading الزهر (the dice) philosophically. ما بيجي بالتاولة (nothing is certain in backgammon) applies equally to life in Lebanon.',
];

const TWL_ABOUT = 'Tawle — Lebanese backgammon — is far more than a board game. It\'s a social institution found in every café, home, and barber shop across Lebanon. The snap of pieces, the rattle of dice, and the commentary from onlookers are as Lebanese as the cedar tree. Understanding tawle vocabulary lets you participate in one of the most intimate parts of Lebanese social life — and the philosophical sayings that come from the game offer a window into how Lebanese people think about luck, strategy, and fate.';
