// R576 — NEW FEATURE: Lebanese Nightlife & Going Out coach (prefix: nyt)

const NYT_WORDS = [
  // venues & places
  { ar: 'الجمّيزة', tr: 'el-Jemmayzeh', en: 'Gemmayzeh (Beirut bar/nightlife district)', cat: 'places' },
  { ar: 'مار مخايل', tr: 'maar Mkhaayil', en: 'Mar Mikhael (hip Beirut neighborhood)', cat: 'places' },
  { ar: 'جونية', tr: 'Jouniye', en: 'Jounieh (coastal nightlife town)', cat: 'places' },
  { ar: 'الملهى', tr: 'el-mal7a', en: 'the nightclub', cat: 'places' },
  { ar: 'الحانة', tr: 'el-7aane', en: 'the bar / pub', cat: 'places' },
  { ar: 'الروف', tr: 'er-ruuf', en: 'the rooftop (bar/lounge)', cat: 'places' },
  // drinks
  { ar: 'عرق', tr: '3araq', en: 'arak (anise spirit, Lebanon\'s national drink)', cat: 'drinks' },
  { ar: 'عصير ليمون بالنعنع', tr: '3asiir leemoon bin-na3na3', en: 'fresh lemon mint juice', cat: 'drinks' },
  { ar: 'كاسة', tr: 'kaase', en: 'a glass / a drink', cat: 'drinks' },
  { ar: 'جولة', tr: 'jawle', en: 'a round (of drinks)', cat: 'drinks' },
  { ar: 'علينا الجولة', tr: '3aleena el-jawle', en: 'this round\'s on us', cat: 'drinks' },
  { ar: 'فروج', tr: 'faruuj', en: 'shots (lit. chickens — slang for shots)', cat: 'drinks' },
  // ordering & paying
  { ar: 'بالحساب', tr: 'bil-7esaab', en: 'the bill please / let\'s settle up', cat: 'ordering' },
  { ar: 'شو عم بتشرب؟', tr: 'shu 3am btishrab?', en: 'what are you drinking?', cat: 'ordering' },
  { ar: 'عزيمتك', tr: '3aziimtak', en: 'you\'re my guest / it\'s on me', cat: 'ordering' },
  { ar: 'لأ لأ، أنا بدفع', tr: 'la2 la2, ana badfa3', en: 'no no, I\'m paying', cat: 'ordering' },
  { ar: 'نقسّم', tr: 'nqassim', en: 'let\'s split (the bill)', cat: 'ordering' },
  // going out expressions
  { ar: 'يلا نطلع', tr: 'yalla nTla3', en: 'let\'s go out', cat: 'expr' },
  { ar: 'في شي هالليلة؟', tr: 'fi shi hal-leele?', en: 'is there anything happening tonight?', cat: 'expr' },
  { ar: 'وين الشباب؟', tr: 'ween esh-shabaab?', en: 'where is everyone? (lit. where\'s the guys?)', cat: 'expr' },
  { ar: 'المكان كامل', tr: 'el-makaan kaamil', en: 'the place is full / packed', cat: 'expr' },
  { ar: 'في طابور', tr: 'fi Taabuur', en: 'there\'s a queue / line', cat: 'expr' },
  { ar: 'ما في وسطة', tr: 'maa fi wasaTa', en: 'no connections (can\'t get in without wasta)', cat: 'expr' },
  // nightlife culture
  { ar: 'الموسيقى عالية', tr: 'el-muusiqa 3aalye', en: 'the music is loud', cat: 'culture' },
  { ar: 'الجو منيح', tr: 'el-jaw mniih', en: 'the vibe is good', cat: 'culture' },
  { ar: 'كيف الجو؟', tr: 'kiif el-jaw?', en: 'how\'s the vibe? / what\'s the atmosphere like?', cat: 'culture' },
  { ar: 'نفس الناس كلها', tr: 'nafs en-naas killha', en: 'same crowd as always', cat: 'culture' },
  { ar: 'هيدا اللبناني', tr: 'heeida el-libnaani', en: 'that\'s the Lebanese way (ironic/proud)', cat: 'culture' },
];

const NYT_DRILLS = [
  {
    q: 'Someone offers to pay for your drinks. What\'s the Lebanese phrase they use?',
    opts: ['نقسّم (nqassim)', 'بالحساب (bil-7esaab)', 'عزيمتك (3aziimtak)', 'جولة (jawle)'],
    ans: 2,
    exp: 'عزيمتك (3aziimtak) = you\'re my guest / it\'s on me. A culturally loaded phrase — refusing too quickly can be impolite.'
  },
  {
    q: 'Your group wants to go out tonight. What do you say to get everyone moving?',
    opts: ['بالحساب', 'يلا نطلع (yalla nTla3)', 'المكان كامل', 'ما في وسطة'],
    ans: 1,
    exp: 'يلا نطلع (yalla nTla3) = let\'s go out. نطلع (ntTla3) = we go out/up — the universal call to get the night started.'
  },
  {
    q: 'What is عرق (3araq) and why is it culturally important?',
    opts: ['Beer — Lebanon\'s most popular drink', 'Arak — anise spirit mixed with water and ice, Lebanon\'s national drink', 'A non-alcoholic mint drink', 'Wine from the Bekaa Valley'],
    ans: 1,
    exp: 'عرق (3araq) is Lebanon\'s iconic anise-flavored spirit. Served with water (which turns it milky white) and ice. A cultural institution at every meze table and night out.'
  },
  {
    q: 'Someone asks كيف الجو؟ (kiif el-jaw?) at a bar. What are they asking?',
    opts: ['What\'s the weather like?', 'How\'s the vibe / atmosphere?', 'Is there a queue?', 'Where is everyone?'],
    ans: 1,
    exp: 'كيف الجو? = how\'s the vibe/atmosphere? الجو (el-jaw) means air/weather but is also used for atmosphere/vibe in Lebanese slang.'
  },
  {
    q: 'What does في طابور (fi Taabuur) mean outside a popular Beirut club?',
    opts: ['There\'s a good DJ', 'There\'s a queue / line to get in', 'The place is exclusive', 'There\'s no entrance fee'],
    ans: 1,
    exp: 'في طابور (fi Taabuur) = there\'s a queue. Knowing this lets you decide whether to wait or use وسطة (wasta — connections) to get in faster.'
  },
  {
    q: 'What are فروج (faruuj) in Lebanese nightlife slang?',
    opts: ['Chickens at a restaurant', 'Shots of alcohol', 'A type of cocktail', 'The cover charge'],
    ans: 1,
    exp: 'فروج (faruuj) = lit. chickens → shots of alcohol in Lebanese slang. Ordering "فروج" at a bar will get you shots.'
  },
  {
    q: 'What does علينا الجولة (3aleena el-jawle) mean?',
    opts: ['We\'re going for a drive', 'This round of drinks is on us', 'We\'re heading home', 'Let\'s move to another bar'],
    ans: 1,
    exp: 'علينا الجولة (3aleena el-jawle) = this round\'s on us. جولة = round (of drinks). A generous offer that rarely goes unappreciated.'
  },
  {
    q: 'الجمّيزة (el-Jemmayzeh) is famous for what in Beirut?',
    opts: ['Religious sites and churches', 'Banking and finance district', 'Bars, restaurants and nightlife scene', 'Traditional souk shopping'],
    ans: 2,
    exp: 'الجمّيزة (Gemmayzeh) is one of Beirut\'s most famous nightlife districts — a street lined with bars, restaurants, and art galleries. Severely damaged in the 2020 explosion but partially rebuilt.'
  },
  {
    q: 'What does ما في وسطة (maa fi wasaTa) mean in a nightlife context?',
    opts: ['There\'s no music tonight', 'No connections/pull to skip the queue or get in', 'The bar is closed', 'No tables available'],
    ans: 1,
    exp: 'ما في وسطة = no wasta (connections). وسطة (connections/pull) is crucial in Lebanese social life — at exclusive venues, knowing the right person gets you past the queue.'
  },
  {
    q: 'Someone says هيدا اللبناني (heeida el-libnaani) when describing the chaotic party scene. What tone do they mean?',
    opts: ['Embarrassed criticism', 'Proud irony / affectionate exasperation', 'Genuine complaint', 'Formal pride'],
    ans: 1,
    exp: 'هيدا اللبناني (heeida el-libnaani) = that\'s the Lebanese way — said with proud irony about the chaos, excess, and energy that defines Lebanese nightlife. Both pride and exasperation at once.'
  },
];

const NYT_TIPS = [
  'Beirut\'s nightlife is legendary — Gemmayzeh, Mar Mikhael, and Jounieh attract Lebanese and visitors alike. Understanding nightlife vocabulary is essential for social integration.',
  'عرق (3araq) culture is central to Lebanese nights out — it\'s always mixed with water and ice, never straight, and shared over long meze dinners before moving to bars.',
  'Paying for others (عزيمتك) is a deeply cultural act. Lebanese hospitality around bills involves genuine competition — refusing too quickly is considered bad manners.',
  'وسطة (wasta — connections) is very real in Lebanese nightlife. Who you know determines whether you wait in line or walk straight in. ما في وسطة is a genuine social problem.',
  'Despite economic collapse and power cuts, Lebanese nightlife persisted — generators kept clubs running, people danced in partial darkness. هيدا اللبناني captures this resilient energy perfectly.',
];

const NYT_ABOUT = 'Lebanese nightlife is internationally famous and deeply culturally encoded. From the specific vocabulary of wasta-dependent entry to the communal generosity of "علينا الجولة," going out in Lebanon involves mastering a social language. Beirut neighborhoods like Gemmayzeh (الجمّيزة) and Mar Mikhael each have their own character, and knowing how to navigate the social dynamics — from ordering arak to handling the bill — marks you as culturally fluent.';
