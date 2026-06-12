// Run #333 — Lebanese Relationships & Emotions Coach (rlv)
// 40 words across 5 categories: friendship / romance / loyalty / conflict / heartbreak
// 10 MCQ drills, 5 tips, about text

const RLV_WORDS = [
  // friendship
  { tr: 'sadii2', ar: 'صديق', en: 'friend (m)', cat: 'friendship' },
  { tr: 'sadi2a', ar: 'صديقة', en: 'friend (f)', cat: 'friendship' },
  { tr: 'sa7eb', ar: 'صاحب', en: 'buddy / pal (m, close informal)', cat: 'friendship' },
  { tr: 'sa7be', ar: 'صاحبة', en: 'buddy / pal (f, close informal)', cat: 'friendship' },
  { tr: 'rfi2', ar: 'رفيق', en: 'companion / comrade', cat: 'friendship' },
  { tr: 'ma3rife', ar: 'معرفة', en: 'acquaintance / connection', cat: 'friendship' },
  { tr: 'ba2melo ma3rife', ar: 'بعمله معرفة', en: 'I\'ll introduce him / set up a meeting', cat: 'friendship' },
  { tr: 'miin fi baalk?', ar: 'مين في بالك؟', en: 'who\'s on your mind? / who are you thinking of?', cat: 'friendship' },
  // romance
  { tr: '7ob', ar: 'حب', en: 'love (noun)', cat: 'romance' },
  { tr: '7abbak', ar: 'حبّك', en: 'I love you (to m)', cat: 'romance' },
  { tr: '7abbik', ar: 'حبّك', en: 'I love you (to f)', cat: 'romance' },
  { tr: '3yuni', ar: 'عيوني', en: 'my eyes / my darling (endearment)', cat: 'romance' },
  { tr: '2albi', ar: 'قلبي', en: 'my heart (endearment / emotional)', cat: 'romance' },
  { tr: '3aashi2', ar: 'عاشق', en: 'in love / lovestruck (m)', cat: 'romance' },
  { tr: 'w2i3t bi 7abbo', ar: 'وقعت بحبه', en: 'I fell for him / fell in love', cat: 'romance' },
  { tr: 'inti/inta 7ayyaati', ar: 'إنتِ/إنتَ حياتي', en: 'you are my life (f/m)', cat: 'romance' },
  // loyalty
  { tr: 'amiin', ar: 'أمين', en: 'trustworthy / faithful / honest', cat: 'loyalty' },
  { tr: 'waafi', ar: 'وافي', en: 'loyal / reliable / stands by you', cat: 'loyalty' },
  { tr: 'thiqa', ar: 'ثقة', en: 'trust / confidence', cat: 'loyalty' },
  { tr: 'kattam sirr', ar: 'كتم سر', en: 'kept a secret / stayed silent', cat: 'loyalty' },
  { tr: '3ala kilmto', ar: 'على كلمته', en: 'keeps his word / man of his word', cat: 'loyalty' },
  { tr: 'bthii2 fii', ar: 'بثيق فيه', en: 'I trust him / I rely on him', cat: 'loyalty' },
  { tr: 'khaan', ar: 'خان', en: 'betrayed / was disloyal', cat: 'loyalty' },
  { tr: 'ma bkhiin', ar: 'ما بخون', en: 'I don\'t betray / I\'m loyal', cat: 'loyalty' },
  // conflict
  { tr: '3itaab', ar: 'عتاب', en: 'gentle reproach / expressing hurt feelings', cat: 'conflict' },
  { tr: 'za3al', ar: 'زعل', en: 'upset / offended / sulking', cat: 'conflict' },
  { tr: 'ma7suub', ar: 'محسوب', en: 'favor owed / taken for granted', cat: 'conflict' },
  { tr: 'khalliini b7aali', ar: 'خليني بحالي', en: 'leave me alone / let me be', cat: 'conflict' },
  { tr: 'ma fi mawDuu3', ar: 'ما في موضوع', en: 'no issue / let\'s forget it / we\'re fine', cat: 'conflict' },
  { tr: 'tfa3zalna', ar: 'تفاعظلنا', en: 'we had a falling out / got into it', cat: 'conflict' },
  { tr: '3atab 3aleik', ar: 'عتاب عليك', en: 'I\'m disappointed in you / I expected better', cat: 'conflict' },
  { tr: 'rja3na mn2iiH', ar: 'رجعنا منيح', en: 'we made up / back to good', cat: 'conflict' },
  // heartbreak
  { tr: 'firaa2', ar: 'فراق', en: 'separation / painful farewell', cat: 'heartbreak' },
  { tr: 'ghiyaab', ar: 'غياب', en: 'absence / being away', cat: 'heartbreak' },
  { tr: 'ishtiyaa2', ar: 'اشتياق', en: 'deep longing / missing someone', cat: 'heartbreak' },
  { tr: 'bwaa7shiini', ar: 'بوحشني', en: 'I miss you (everyday Lebanese)', cat: 'heartbreak' },
  { tr: '7aziine', ar: 'حزينة', en: 'sad (f) / feeling down', cat: 'heartbreak' },
  { tr: 'w2i3 2albi', ar: 'وقع قلبي', en: 'my heart sank / I was heartbroken', cat: 'heartbreak' },
  { tr: 'naasiiini', ar: 'ناسيني', en: 'you\'ve forgotten about me', cat: 'heartbreak' },
  { tr: '7azz bHaalo', ar: 'حظ بحاله', en: 'he got over it / moved on (lit. luck to himself)', cat: 'heartbreak' },
];

const RLV_DRILLS = [
  {
    q: 'What is the difference between "sadii2" and "sa7eb" in Lebanese?',
    opts: ['They mean the same thing', '"Sa7eb" is more formal than "sadii2"', '"Sa7eb" is a closer, more informal buddy; "sadii2" is friend generally', '"Sadii2" is only for family'],
    correct: 2,
    note: '"Sa7eb" (صاحب) is the warmer, more colloquial word for a close buddy — the one you call at 2am. "Sadii2" (صديق) is "friend" generally, slightly more formal. Lebanese often say "sa7ebi" (my buddy) with real warmth. "Sa7biyye/sa7be" = close female friend.'
  },
  {
    q: 'What does "bwaa7shiini" mean in Lebanese Arabic?',
    opts: ['I\'m angry at you', 'I miss you', 'I don\'t understand you', 'You\'re bothering me'],
    correct: 1,
    note: '"Bwaa7shiini" (بوحشني) = I miss you, in everyday Lebanese. From "waa7ash" (wild/strange) — your absence feels strange, wrong. Also: "bwaa7shak ktir" (I miss you a lot). Reply: "ana kameen bwaa7shak" (I miss you too).'
  },
  {
    q: 'What does "3itaab" (عتاب) express in Lebanese relationships?',
    opts: ['Physical fighting', 'Gentle reproach / expressing hurt feelings to someone you care about', 'Breaking up', 'Formal complaint'],
    correct: 1,
    note: '"3itaab" (عتاب) is a uniquely important Lebanese concept — a soft, loving reproach between people who care about each other. Not anger, but wounded feelings. "3indi 3itaab 3alaik" = I have some hurt feelings toward you. It assumes the relationship is worth preserving.'
  },
  {
    q: 'What does "amiin" (أمين) mean when describing a person?',
    opts: ['Handsome / beautiful', 'Wealthy / successful', 'Trustworthy / faithful / honest', 'Smart / clever'],
    correct: 2,
    note: '"Amiin" (أمين) = trustworthy, faithful, keeper of secrets. One of the highest compliments in Lebanese culture. "Huwe amiin ktir" (he\'s very trustworthy). Also the name Amine — naming children "Amiin" reflects the value placed on trustworthiness.'
  },
  {
    q: 'What does "w2i3 2albi" mean?',
    opts: ['My heart is strong', 'My heart sank / I was heartbroken', 'I fell asleep', 'I lost my wallet'],
    correct: 1,
    note: '"W2i3 2albi" (وقع قلبي) — literally "my heart fell". Used for heartbreak, shock, or crushing disappointment. "Lamma smi3it il-khabar, w2i3 2albi" = when I heard the news, my heart sank. The heart (2alb) in Lebanese Arabic carries enormous emotional weight.'
  },
  {
    q: 'What does "za3al" (زعل) describe?',
    opts: ['Happiness / excitement', 'Hunger', 'Upset / offended / sulking', 'Tiredness'],
    correct: 2,
    note: '"Za3al" (زعل) = upset, offended, sulking. "Za3lan mennak" = upset at you. Distinct from anger ("ghaDab") — za3al is softer, like hurt feelings with a bit of sulk. Children and adults alike "za3al" when their feelings are hurt. Fixing it: "khalas, bass za3al" = okay, enough sulking.'
  },
  {
    q: 'What does "3ala kilmto" mean in Lebanese?',
    opts: ['He speaks Arabic', 'He talks too much', 'He keeps his word / man of his word', 'He has an accent'],
    correct: 2,
    note: '"3ala kilmto" (على كلمته) — literally "on his word". Means he honors what he says. In a culture where personal reputation is paramount, being "3ala kilmto" is a major compliment. The opposite: "ma bkhuD kilmato biswa shi" = his word isn\'t worth anything.'
  },
  {
    q: 'What is "firaa2" (فراق)?',
    opts: ['A type of food', 'A celebration', 'Separation / painful farewell', 'An argument'],
    correct: 2,
    note: '"Firaa2" (فراق) = separation, parting, painful farewell. Used in poetry, songs, and everyday speech for the pain of distance. "Yaa weili min il-firaa2" = woe from the separation. Lebanese music (especially Fairuz and Wadi el-Safi) is full of firaa2 themes.'
  },
  {
    q: 'What does "ishtiyaa2" mean?',
    opts: ['Excitement before a party', 'Deep longing / missing someone intensely', 'Surprise at good news', 'Hunger'],
    correct: 1,
    note: '"Ishtiyaa2" (اشتياق) = deep, aching longing for someone absent. More intense than "bwaa7shiini" (everyday missing). Used in formal speech and song. "Il-ishtiyaa2 2atalni" = the longing is killing me. Fairuz\'s songs about Lebanon while in exile are full of ishtiyaa2.'
  },
  {
    q: 'When someone says "rja3na mn2iiH", what happened?',
    opts: ['They went somewhere', 'They came back safely', 'They made up / reconciled after a conflict', 'They returned a borrowed item'],
    correct: 2,
    note: '"Rja3na mn2iiH" (رجعنا منيح) — literally "we came back good/well". Means we reconciled, we\'re back to normal after a falling-out. Lebanese relationships prioritize reconciliation — "il-sulHa" (making peace) is a valued cultural practice, often facilitated by a neutral third party.'
  },
];

const RLV_TIPS = [
  {
    title: 'The Lebanese Heart: "2albi" as Emotional Center',
    body: 'The word "2albi" (قلبي = my heart) appears constantly in Lebanese emotional expression. "2albi 3alaik" = my heart goes out to you. "3ala 2albi" = upon my heart (very dear to me). "Min 2albi" = from the bottom of my heart. "W2i3 2albi" = heartbreak. Lebanese people experience and express emotions through the heart metaphor far more than the English-speaking world. Learning 2alb expressions unlocks a deep emotional register.'
  },
  {
    title: '"3itaab": The Art of Soft Reproach',
    body: '"3itaab" (عتاب) has no perfect English translation. It\'s the gentle, loving act of telling someone they hurt you — not to fight, but to preserve the relationship. "3indi 3itaab 3alaik" (I have something on my heart about you) opens a conversation. The culture around 3itaab assumes that the relationship is important enough to address. Ignoring someone\'s 3itaab is a serious social misstep. It\'s more therapeutic than confrontational.'
  },
  {
    title: 'Missing Someone: Layers of Longing',
    body: 'Lebanese Arabic has a rich vocabulary for missing people: "bwaa7shiini" (everyday "I miss you"), "ishtiyaa2" (deep longing, more poetic), "ghiyaab" (the weight of someone\'s absence), and "firaa2" (painful separation). The word "nawwart" (you brightened/lit up my world) is used when someone returns. Lebanon\'s history of emigration — over 15 million Lebanese diaspora worldwide — has made missing people a cultural art form.'
  },
  {
    title: 'Trust is Everything: "Thiqa" and "Amiin"',
    body: 'In Lebanese culture, personal trust ("thiqa") and reliability ("amiin", "waafi") are among the highest social values. "Huwe amiin" (he\'s trustworthy) is a major endorsement. "Ma fi thiqa" (no trust) can end a friendship or business relationship permanently. "Kattam sirr" (he kept the secret) is highly praised — discretion is valued. Contrast with betrayal ("khiyaane") which is one of the most serious moral failures in Lebanese social code.'
  },
  {
    title: 'Lebanese Friendship: "Sa7eb" vs Acquaintance',
    body: 'Lebanese friendships are intense and loyal. A true "sa7eb" (close friend) is expected to be there at all times — weddings, funerals, late nights, crises. "Sa7ebi min el-3omr" (friend of my life/lifetime) is the highest tier. Acquaintances are "ma3rife" (connections, networking-tier). The Lebanese social structure runs heavily on personal networks — who you know, who vouches for you. "Min yiT3am tizi" (who guarantees you?) — literally who vouches for your character — reflects this culture.'
  },
];

const RLV_ABOUT = 'Lebanese Arabic has some of the richest emotional vocabulary in the Arab world, shaped by a culture of intense personal loyalty, deep family bonds, and a history of both joy and loss. From the gentle reproach of "3itaab" to the aching longing of "ishtiyaa2", from fierce "thiqa" (trust) to the devastation of "khiyaane" (betrayal) — Lebanese emotional vocabulary reflects a people who feel deeply and express it freely. Understanding these words unlocks the emotional core of Lebanese culture.';
