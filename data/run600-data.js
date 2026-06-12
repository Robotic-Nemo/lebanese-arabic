// R600 — NEW FEATURE: Lebanese Tawle & Café Game Culture (prefix: bgm)

const BGM_WORDS = [
  // tawle (backgammon) core
  { ar: 'طاولة', tr: 'tawle', en: 'backgammon (literally "table")', cat: 'tawle' },
  { ar: 'حجارة', tr: '7jaara', en: 'pieces / stones (backgammon checkers)', cat: 'tawle' },
  { ar: 'زهر', tr: 'zahr', en: 'dice', cat: 'tawle' },
  { ar: 'شش', tr: 'shesh', en: 'six (on dice)', cat: 'tawle' },
  { ar: 'حبس', tr: '7abas', en: 'blocked / hit a blot (opponent\'s piece)', cat: 'tawle' },
  { ar: 'جمّع', tr: 'jamme3', en: 'to bear off (bring pieces home)', cat: 'tawle' },
  { ar: 'مارس', tr: 'maaris', en: 'mars (winning without opponent bearing off — double score)', cat: 'tawle' },
  { ar: 'دبل', tr: 'dabl', en: 'double (the doubling cube / double wager)', cat: 'tawle' },
  // café culture
  { ar: 'مقهى', tr: 'ma2ha', en: 'café', cat: 'cafe' },
  { ar: 'أركيلة', tr: 'arjiile', en: 'hookah / nargileh / shisha', cat: 'cafe' },
  { ar: 'فنجان', tr: 'finjaan', en: 'small cup (for coffee)', cat: 'cafe' },
  { ar: 'قهوة عربية', tr: '2ahwe 3arabiyye', en: 'Arabic coffee (cardamom)', cat: 'cafe' },
  { ar: 'نيلة', tr: 'neele', en: 'a game / a round (let\'s play a game)', cat: 'cafe' },
  { ar: 'شليلة', tr: 'shlile', en: 'a series of games / rematch session', cat: 'cafe' },
  // card games
  { ar: 'ورق', tr: 'wara2', en: 'cards (playing cards)', cat: 'cards' },
  { ar: 'تروكو', tr: 'truco', en: 'Truco (popular Lebanese card game)', cat: 'cards' },
  { ar: 'كوتشينة', tr: 'kutchina', en: 'Koutchina (another card game)', cat: 'cards' },
  { ar: 'كاس', tr: 'kaas', en: 'cups (card suit)', cat: 'cards' },
  { ar: 'سبوع', tr: 'sbuu3', en: 'seven (the 7 card — powerful in Truco)', cat: 'cards' },
  { ar: 'بيت', tr: 'beit', en: 'a trick / hand won (literally "house")', cat: 'cards' },
  // game trash talk / phrases
  { ar: 'يلا اتفضّل', tr: 'yalla itfaDDal', en: 'come on, your turn', cat: 'talk' },
  { ar: 'شطح', tr: 'shaTa7', en: 'made a brilliant unexpected move', cat: 'talk' },
  { ar: 'خسرت', tr: 'khsirt', en: 'I lost / you lost', cat: 'talk' },
  { ar: 'ربحت', tr: 'rbi7t', en: 'I won / you won', cat: 'talk' },
  { ar: 'إنت بتغش', tr: 'inta btghishsh', en: 'you\'re cheating!', cat: 'talk' },
  { ar: 'وين ما حكيت', tr: 'wein maa 7keet', en: 'wherever I played (bragging about versatility)', cat: 'talk' },
  { ar: 'مكنش', tr: 'mkinish', en: 'no way / impossible (reaction to a bad move)', cat: 'talk' },
  { ar: 'جولة تانية', tr: 'jowle taanye', en: 'another round / rematch', cat: 'talk' },
];

const BGM_DRILLS = [
  {
    q: 'Backgammon in Lebanon is called طاولة (tawle). Why is it so central to Lebanese café culture?',
    opts: [
      'It was introduced by French Mandate authorities as a Western pastime',
      'Tawle is the universal male bonding ritual — played at cafés, homes, and clubs across all sects and classes; refusing a game can be a social insult',
      'It is mainly played at upscale resorts by tourists',
      'Tawle replaced football as the national sport in the 1980s'
    ],
    ans: 1,
    exp: 'tawle is more than a game — it\'s a social institution. Lebanese men (and increasingly women) play tawle at neighbourhood cafés, family homes, and clubs across all religious, class, and political lines. The game is played loudly with trash talk, coffee, and arjiile. Challenging someone to tawle is an invitation to friendship; mastering it is a point of local pride.'
  },
  {
    q: 'What is a مارس (maaris) in Lebanese tawle, and why does it matter?',
    opts: [
      'When both players bear off all pieces at the same time — a draw',
      'A crushing win where the loser has borne off zero pieces — typically worth double the stake',
      'A special dice roll of double 6s (shesh-shesh)',
      'The opening move where you capture the opponent\'s home point'
    ],
    ans: 1,
    exp: 'maaris = a gammon-style win (the loser hasn\'t borne off any pieces). In Lebanese tawle, this is humiliating and often doubles the bet or bragging rights. Avoiding a maaris when you\'re far behind is a matter of pride. The term maaris is Lebanese colloquial; in formal Arabic it\'s called "al-mars" or just called "double."'
  },
  {
    q: 'A Lebanese guy says يلا اتفضّل (yalla itfaDDal) during a game. What does he mean?',
    opts: [
      'Please leave the table — you\'re bothering me',
      'Your turn — come on, play (friendly pressure to move quickly)',
      'Congratulations on a good move',
      'I give up — the game is yours'
    ],
    ans: 1,
    exp: 'yalla itfaDDal = "go ahead / it\'s your turn." itfaDDal is a versatile Lebanese/Arabic word meaning "please do / go ahead / help yourself." Combined with yalla (hurry up), it becomes friendly pressure to move. Said with a smile it\'s warm; said with a sigh it\'s impatient. Mastering its tone is key to reading the room in Lebanese social games.'
  },
  {
    q: 'What is Truco (تروكو) in the Lebanese context?',
    opts: [
      'A type of Lebanese coffee served at backgammon tables',
      'An Italian-origin card game hugely popular in Lebanon, played with 40 cards and lots of bluffing and secret hand signals',
      'A Lebanese word for "trick" or "cheat" in backgammon',
      'A card game only played in South Lebanon'
    ],
    ans: 1,
    exp: 'Truco is a card game of Italian/Spanish origin that became deeply embedded in Lebanese culture — especially in the mountains and among certain Christian communities. Played with 40 cards (Spanish deck), in teams of two with secret hand signals between partners. The bluffing and partner communication make it highly social. Families play for hours on holidays. It\'s culturally sticky in ways that seem random but speak to Lebanon\'s Mediterranean heritage.'
  },
  {
    q: 'What does أركيلة (arjiile) mean and why is it inseparable from Lebanese game culture?',
    opts: [
      'A special backgammon board used in tournaments',
      'Hookah / nargileh / shisha — the water pipe shared at cafés, always present during long tawle and card sessions',
      'A traditional Lebanese mint tea',
      'A dice roll worth triple points'
    ],
    ans: 1,
    exp: 'arjiile = hookah/nargileh. The arjiile is the third player at any Lebanese café game session — you order coffee (2ahwe), set up the tawle, and light the arjiile. The ritual of sharing a pipe slows everything down into an unhurried social experience. Café culture in Lebanon lives in this triangle: game + coffee + arjiile. To refuse a puff is acceptable; to rush the session is rude.'
  },
  {
    q: 'Someone calls شطح (shaTa7) during a game. What happened?',
    opts: [
      'A player illegally moved a piece off the board',
      'A brilliant, unexpected tactical move that shocked everyone at the table',
      'The arjiile pipe tipped over',
      'A player resigned in frustration'
    ],
    ans: 1,
    exp: 'shaTa7 = made a stunning move (literally "flew off / leaped"). The word shaTa7 is used for improvised brilliance — a move no one saw coming that changes the game. Same word is used in Lebanese music for when a singer improvises brilliantly or when a dabke dancer does an unexpected leap. Calling someone\'s move a shaTa7 is a real compliment at the table.'
  },
  {
    q: 'What is the social significance of جولة تانية (jowle taanye) after losing a game?',
    opts: [
      'It\'s a formal apology ritual after bad trash talk',
      'An invitation for a rematch — refusing can be seen as either wisdom or cowardice depending on who you ask',
      'A Lebanese phrase meaning "the game is over, go home"',
      'A way to invite a new player to join the table'
    ],
    ans: 1,
    exp: 'jowle taanye = "another round / rematch." The social pressure to accept jowle taanye is intense — refusing might label you as someone who can\'t handle losing gracefully. On the other hand, playing jowle taanye when badly outmatched just compounds humiliation. The decision encodes Lebanese values around honor, face-saving, and social reading. Usually accompanied by ordering more coffee first.'
  },
  {
    q: 'What makes Lebanese café backgammon culture distinct from just playing at home?',
    opts: [
      'Café backgammon uses special rules not found in home games',
      'The café setting makes it a public performance — there\'s an audience, regular opponents, and a social reputation at stake across years of play',
      'Café games are played for money while home games are just for fun',
      'Only men are allowed in Lebanese tawle cafés'
    ],
    ans: 1,
    exp: 'Lebanese neighbourhood cafés function as informal clubs with regular players who\'ve been coming for years. Your tawle reputation is community knowledge. The audience (other regulars watching) adds social pressure. Bad moves are remembered. Good moves are retold. The same opponents become long-term rivals and friends. This ecosystem of regular play and social memory is what makes Lebanese café tawle a living tradition, not just a game.'
  },
  {
    q: 'When someone says ما بيصح هيك (maa biSe77 heyk) during a tawle game, what are they expressing?',
    opts: [
      'Admiration for an exceptionally clever move',
      'Outrage at an unfair or borderline-illegal move — "that\'s not right / that shouldn\'t be allowed"',
      'Agreement to switch sides for the next game',
      'A request to reset the board and start over'
    ],
    ans: 1,
    exp: 'maa biSe77 heyk = "that\'s not right / that can\'t be right" — used when a move seems unfair, suspicious, or technically illegal. Lebanese tawle is often played with local house rules that vary by region and family. Disputes about rules are common and passionate. ما بيصح is the protest cry. Who wins the argument often depends less on rules and more on who is louder and older.'
  },
  {
    q: 'Lebanese tawle uses the phrase شش-بيش (shesh-beish) for what?',
    opts: [
      'A complete loss — you\'ve lost all your pieces',
      'Rolling a 6 and a 5 on the dice — one of the most useful opening rolls in backgammon',
      'Winning three games in a row',
      'A special café that only serves serious players'
    ],
    ans: 1,
    exp: 'shesh = 6, beish = 5 (from Persian/Turkish origins). Shesh-beish (6-5) is one of the best opening rolls in backgammon, allowing you to run your back checker safely. Numbers in Lebanese tawle often come from Persian (via Ottoman influence): shesh (6), panj (5), char (4), se (3), du (2), yek (1). Lebanese players know these Persian dice words without knowing they\'re Persian — they\'re just "tawle language."'
  },
];

const BGM_TIPS = [
  'Lebanese tawle (backgammon) operates by largely the same rules as international backgammon but with cultural differences: the doubling cube is rarely used in casual play (local stakes are verbal), games move fast with loud dice-slapping, and trash talk (شتيمة تاولة — shtime tawle) is part of the game. Speed is considered skill — slow players are teased. A session can last hours with the same opponents cycling through wins and rematches.',
  'The café (مقهى — ma2ha) is a Lebanese institution distinct from a restaurant. Men and women gather to play tawle and cards, smoke the arjiile, drink 2ahwe or tea, and talk politics. Neighbourhood cafés have regulars who\'ve been coming for decades. In Beirut\'s Gemmayzeh or Mar Mikhael, you\'ll find café culture merging old tawle tradition with new nightlife. In mountain villages, the café terrace is the social hub from May to October.',
  'Truco arrived in Lebanon through the Lebanese emigrant community — possibly from South America, possibly from Italian settlers. Its exact origin in Lebanon is debated, but it\'s been played in Lebanese mountain villages for generations. Families have their own house rules. The secret hand signals between partners (coded to indicate card strength) are passed from father to child. It\'s a game of information, psychology, and partnership trust.',
  'Lebanese dice slang comes from Persian through the Ottoman Empire: yek (1), du (2), se (3), char (4), panj (5), shesh (6). These words are used only in tawle — not in regular counting. This linguistic archaeology tells you something about how deep tawle is in Lebanese and Levantine culture — it survived the collapse of empires with its Persian dice-numbers intact.',
  'The social rules of Lebanese game culture matter as much as the rules of the game: always offer the opponent coffee or arjiile at the start. Don\'t refuse a rematch immediately after a win (let them catch their breath). Accept bad luck with humor rather than excuses. The worst social crime is not losing — it\'s being a bad loser. The phrase كسبت بس ما كان في مجال (ksabt bas maa kaan fi majaal — "you won but there was no room to play") is the classic excuse that everyone uses and nobody believes.',
];

const BGM_ABOUT = 'Lebanese tawle (backgammon) and café game culture are living expressions of a society that has survived chaos by mastering the art of the present moment. At any Lebanese café, the tawle board is the venue for politics, philosophy, trash talk, and friendship. The dice are slapped, the arjiile bubbles, the coffee is bitter and strong. Win or lose, a Lebanese player at the tawle table is completely alive. The words شطح (brilliant move), مارس (crushing victory), and جولة تانية (another round) encode a philosophy: the game is never over, and there is always another chance to turn the table.';
