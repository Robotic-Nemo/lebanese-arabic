// R594 — NEW FEATURE: Lebanese Sports & Football Culture (prefix: kra)

const KRA_WORDS = [
  // football basics
  { ar: 'كرة القدم', tr: 'krit el-2adam', en: 'football / soccer', cat: 'football' },
  { ar: 'مباراة', tr: 'mubaara', en: 'match / game', cat: 'football' },
  { ar: 'هدف', tr: 'hadef', en: 'goal / objective', cat: 'football' },
  { ar: 'حكم', tr: '7akam', en: 'referee', cat: 'football' },
  { ar: 'نادي', tr: 'naadi', en: 'sports club / team', cat: 'football' },
  { ar: 'ملعب', tr: 'mal3ab', en: 'stadium / playing field', cat: 'football' },
  { ar: 'بطولة', tr: 'buTuule', en: 'championship / tournament', cat: 'football' },
  { ar: 'كأس العالم', tr: 'ka2s el-3aalam', en: 'World Cup', cat: 'football' },
  // fan culture
  { ar: 'مشجّع', tr: 'mushajiij', en: 'fan / supporter', cat: 'fans' },
  { ar: 'يلا', tr: 'yalla', en: 'come on! / let\'s go! (cheer)', cat: 'fans' },
  { ar: 'عالي عالي', tr: '3aali 3aali', en: 'up up! (chant for team to rise)', cat: 'fans' },
  { ar: 'برافو', tr: 'braavo', en: 'bravo! well done! (borrowed from Italian)', cat: 'fans' },
  { ar: 'مسخرة', tr: 'maskhar(a)', en: 'a joke / a disgrace (when team plays badly)', cat: 'fans' },
  { ar: 'ما استاهل', tr: 'maa istaahel', en: 'didn\'t deserve it / unfair', cat: 'fans' },
  // Lebanese teams
  { ar: 'النجمة', tr: 'el-najme', en: 'Al-Nejmeh (most successful Lebanese football club)', cat: 'leb' },
  { ar: 'الأنصار', tr: 'el-anSaar', en: 'Al-Ansar (historic Lebanese club, Beirut)', cat: 'leb' },
  { ar: 'المنتخب', tr: 'el-muntakhab', en: 'the national team', cat: 'leb' },
  { ar: 'الدوري', tr: 'el-doori', en: 'the league (Lebanese Premier League)', cat: 'leb' },
  // other sports
  { ar: 'سباحة', tr: 'sibaara', en: 'swimming', cat: 'other' },
  { ar: 'تسلق الجبال', tr: 'tasalla2 el-jbaal', en: 'mountain climbing', cat: 'other' },
  { ar: 'تزلّج', tr: 'tzalij', en: 'skiing', cat: 'other' },
  { ar: 'كرة السلة', tr: 'krit el-salle', en: 'basketball', cat: 'other' },
  // commentary phrases
  { ar: 'ركلة جزاء', tr: 'rikleh jazaa', en: 'penalty kick', cat: 'commentary' },
  { ar: 'تسديدة', tr: 'tasdiide', en: 'shot (at goal)', cat: 'commentary' },
  { ar: 'تمرير', tr: 'tamriir', en: 'pass (in football)', cat: 'commentary' },
  { ar: 'تصفير', tr: 'taSfiir', en: 'whistle / referee\'s whistle', cat: 'commentary' },
  { ar: 'انتهت المباراة', tr: 'intahet el-mubaara', en: 'the match has ended / full time', cat: 'commentary' },
  { ar: 'وقت إضافي', tr: 'wa2t iDaafi', en: 'extra time / overtime', cat: 'commentary' },
];

const KRA_DRILLS = [
  {
    q: 'Lebanon is unusual in the Arab world because you can ski AND swim on the same day. Which sport reflects this geography?',
    opts: ['كرة السلة (basketball)', 'تزلّج (skiing) — Lebanon has ski resorts like Mzaar in the mountains', 'كرة القدم (football)', 'سباحة في النهر (river swimming)'],
    ans: 1,
    exp: 'tzalij = skiing. Lebanon has multiple ski resorts — Mzaar Kfardebian (the largest), The Cedars, Faraya. Uniquely, Lebanon\'s geography allows people to ski in the mountains in the morning and be at the Mediterranean beach by afternoon. This reflects Lebanon\'s diverse landscape packed into a small country.'
  },
  {
    q: 'What is النجمة (el-najme) in Lebanese football?',
    opts: ['The Lebanese national team\'s nickname', 'Al-Nejmeh — the most successful and popular football club in Lebanon, based in Beirut', 'A trophy given to the best Lebanese player', 'The Lebanese league cup competition'],
    ans: 1,
    exp: 'el-najme (The Star) = Al-Nejmeh SC, Lebanon\'s most decorated football club. Founded 1945, based in Beirut, with a huge cross-sectarian fan base. They\'ve won the Lebanese Premier League more than any other club. In the Arab Champions League, they\'ve represented Lebanon internationally.'
  },
  {
    q: 'A Lebanese fan shouts يلا (yalla) during a match. What are they doing?',
    opts: ['Calling the referee a cheat', 'Cheering their team on — "come on!" or "let\'s go!"', 'Asking for the score', 'Calling for a substitution'],
    ans: 1,
    exp: 'yalla = "come on!" / "let\'s go!" — arguably the most versatile word in Lebanese Arabic. In sports, it\'s pure encouragement. Outside sports, yalla means "hurry up," "let\'s go," or even a goodbye. In football stadiums, a rhythmic "yalla yalla yalla" from thousands of fans creates electric atmosphere.'
  },
  {
    q: 'Lebanon faces a unique challenge in football. What is it?',
    opts: ['The country is too hot to play football', 'Political and sectarian divisions affect club rivalries, and the small population limits talent depth for the national team', 'Football is banned on religious grounds', 'The Lebanese league plays in winter only'],
    ans: 1,
    exp: 'Lebanese football reflects the country\'s politics — major clubs like Al-Nejmeh and Al-Ansar have different regional and sectarian associations. The national team struggles with talent drain (emigration) and funding. Despite this, passionate fan culture exists, especially when Lebanon qualifies for tournaments or upsets stronger teams.'
  },
  {
    q: 'What does مسخرة (maskhara) mean when a Lebanese fan says it after a bad play?',
    opts: ['A brilliant individual performance', 'A disgrace / it\'s a joke — expressing contempt for poor play', 'A tactical foul that was clever', 'An unexpected comeback goal'],
    ans: 1,
    exp: 'maskhara = "a joke" / "a disgrace" — the go-to word when your team plays embarrassingly. From مسخرة (something ridiculous / made a mockery of). Lebanese football commentary is famously colorful — maskhara, 3eib (shame), and maa 3indo (he\'s got nothing) are constant fixtures when the team underperforms.'
  },
  {
    q: 'What does ركلة جزاء (rikleh jazaa) mean during a match?',
    opts: ['A free kick from outside the penalty area', 'A penalty kick — awarded for a foul inside the penalty box', 'The final whistle to end the match', 'A corner kick'],
    ans: 1,
    exp: 'rikleh jazaa = penalty kick. جزاء (jazaa) = punishment/penalty. One of the most dramatic moments in football. In Lebanese commentary, a penalty leads to an explosion of excitement (or outrage) — "rikleh jazaa!" shouted by commentators with maximum drama. The Lebanese commentary style is known for its emotional intensity.'
  },
  {
    q: 'The phrase ما استاهل (maa istaahel) after a match result means:',
    opts: ['The team played beautifully and deserved to win', 'It wasn\'t deserved / unfair — expressing that the result was unjust', 'The match was boring and not worth watching', 'The referee performed well'],
    ans: 1,
    exp: 'maa istaahel = "didn\'t deserve it." Used both when your team loses unfairly ("we didn\'t deserve to lose") or when the opponent wins luckily ("they didn\'t deserve to win"). Essential vocabulary for post-match analysis in Lebanese cafés, where detailed tactical debate follows every game.'
  },
  {
    q: 'Why is كأس العالم (ka2s el-3aalam) a major social event in Lebanon?',
    opts: ['Lebanon regularly qualifies for the World Cup', 'Despite rarely qualifying, Lebanese fans passionately support regional favorites like Brazil, Argentina, France or Germany — the World Cup unites diverse communities', 'Lebanon hosts a World Cup qualifying group', 'Lebanese players play in major European leagues'],
    ans: 1,
    exp: 'ka2s el-3aalam = World Cup. Lebanon has rarely qualified, but Lebanese passion for the tournament is unmatched — different communities support different teams (Brazil, Argentina, France, Germany). During the World Cup, Beirut cafés fill with mixed groups watching together. It\'s one of the few events that genuinely brings people together across divides.'
  },
  {
    q: 'What sport does تسلق الجبال (tasalla2 el-jbaal) describe, and why is it culturally significant in Lebanon?',
    opts: ['Swimming in mountain streams', 'Mountain climbing / hiking — reflecting Lebanon\'s rugged terrain and outdoor culture in the Lebanese mountains', 'Skiing down mountain slopes', 'Road cycling through mountain passes'],
    ans: 1,
    exp: 'tasalla2 el-jbaal = mountain climbing. Lebanon\'s mountains (the Lebanon Range and Anti-Lebanon) are central to national identity — the cedar, the mountain village, the summer refuge from coastal heat. Hiking and climbing culture is strong, especially in the Kadisha Valley, Qornet el-Sawda (highest peak), and the Chouf mountains.'
  },
  {
    q: 'When does وقت إضافي (wa2t iDaafi) happen in a football match?',
    opts: ['When a match is played in overtime heat and needs a break', 'Extra time — added minutes when a knock-out game is tied after 90 minutes', 'The halftime break between the two halves', 'Time added at the end of each half for stoppages'],
    ans: 1,
    exp: 'wa2t iDaafi = extra time. iDaafi = additional/extra. In Lebanese football commentary, extra time creates maximum tension — especially in knockout rounds. وقت إضافي, followed potentially by ركلات الترجيح (rikalaat el-tarjii7 = penalty shootout), is the most dramatic ending a football match can have.'
  },
];

const KRA_TIPS = [
  'Football (كرة القدم) is Lebanon\'s most popular sport, but Lebanese sports culture has a strong outdoor tradition too. The country\'s geography — mountains, Mediterranean coast, and valleys — makes Lebanon one of the few places where you can ski, hike, swim, and sail within hours of each other.',
  'Lebanese club football has a complicated relationship with sectarianism and regional identity. Major clubs like Al-Nejmeh, Al-Ansar, Safa, and Racing are associated with different communities. Yet football also creates moments of genuine cross-community solidarity, especially when the national team plays.',
  'Lebanon has produced athletes who compete internationally despite the country\'s challenges. Boxer Ramla Ali has Lebanese heritage; weightlifter Mohammad Ibrahim and swimmer Saly Zakhia have represented Lebanon at the Olympics. These athletes often carry the weight of national pride during difficult times.',
  'The Mzaar Kfardebian ski resort (also called Faraya Mzaar) is the largest ski resort in the Middle East. Skiing is seen as a quintessentially Lebanese activity — a symbol of the country\'s blend of East and West, and its natural beauty. During Lebanon\'s golden era, international celebrities would ski in Lebanon.',
  'Lebanese football commentary is an art form. Arabic sports commentators, particularly on Lebanese and pan-Arab channels, are famous for emotional, poetic, and dramatic calls — elongating "GOOOOOOOOOL," composing spontaneous poetry on great goals, and mixing classical Arabic with colloquial excitement.',
];

const KRA_ABOUT = 'Sports in Lebanon are inseparable from the country\'s complex social fabric. Football is the national obsession — Lebanese gather in cafés and homes to watch local, regional, and international matches with intense passion. Lebanon\'s geography creates a unique sports culture: skiing in the mountains, swimming in the Mediterranean, hiking the Kadisha Valley, and football everywhere. The Lebanese love of sport is also a love of community — watching a match together, arguing about tactics, and sharing in the joy or agony of the result. كرة القدم (football) may be the common language, but Lebanon\'s diverse sporting culture reflects its character: small in size, large in spirit.';
