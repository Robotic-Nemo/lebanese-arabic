// R585 — NEW FEATURE: Lebanese Mental Health & Emotional Wellbeing coach (prefix: mhl)

const MHL_WORDS = [
  // feelings & states
  { ar: 'مضغوط', tr: 'maDghooT', en: 'stressed / under pressure', cat: 'feelings' },
  { ar: 'قلقان', tr: '2al2aan', en: 'anxious / worried', cat: 'feelings' },
  { ar: 'مكتئب', tr: 'mukta2ib', en: 'depressed', cat: 'feelings' },
  { ar: 'محترق', tr: 'mu7tari2', en: 'burnt out (lit. on fire)', cat: 'feelings' },
  { ar: 'خنّاق', tr: 'khannaa2', en: 'suffocating / stifling (feeling trapped)', cat: 'feelings' },
  { ar: 'مش قادر أحمل', tr: 'mish 2aadir a7mil', en: "I can't bear it / I can't carry on", cat: 'feelings' },
  { ar: 'منهك', tr: 'munhak', en: 'exhausted / drained', cat: 'feelings' },
  // talking about it
  { ar: 'بدي أحكي', tr: 'biddi a7ki', en: 'I need to talk (about it)', cat: 'talk' },
  { ar: 'في شي عم يضغط عليي', tr: 'fi shi 3am biDghut 3alayyi', en: 'something is pressing on me / stressing me', cat: 'talk' },
  { ar: 'مش تمام', tr: 'mish tamaam', en: "I'm not okay / not well", cat: 'talk' },
  { ar: 'عم أحاول', tr: '3am a7aawil', en: "I'm trying / I'm managing", cat: 'talk' },
  { ar: 'مبسوط', tr: 'mabSuuT', en: 'happy / content / satisfied', cat: 'talk' },
  { ar: 'بخير', tr: 'bkheir', en: "fine / okay (I'm good)", cat: 'talk' },
  // support & therapy
  { ar: 'طبيب نفسي', tr: 'Tabiib nafsii', en: 'psychiatrist / mental health doctor', cat: 'support' },
  { ar: 'معالج نفسي', tr: 'mu3aalij nafsii', en: 'therapist / psychotherapist', cat: 'support' },
  { ar: 'جلسة', tr: 'jalse', en: 'a session (therapy)', cat: 'support' },
  { ar: 'علاج', tr: '3ilaaj', en: 'treatment / therapy', cat: 'support' },
  { ar: 'دعم', tr: 'da3m', en: 'support', cat: 'support' },
  { ar: 'أنا معك', tr: 'ana ma3ak', en: "I'm with you / I've got you (masc)", cat: 'support' },
  { ar: 'بتحتاج مساعدة', tr: 'bte7taaj musaa3ade', en: 'you need help (said with care)', cat: 'support' },
  // Lebanese-specific context
  { ar: 'الأزمة', tr: 'el-azme', en: 'the crisis (Lebanese economic/political crisis)', cat: 'context' },
  { ar: 'تعب من البلد', tr: 'ti3bit min el-balad', en: 'exhausted by the country / country fatigue', cat: 'context' },
  { ar: 'بدي أرّوح', tr: 'biddi araawi7', en: 'I want to go abroad / escape (emigrate)', cat: 'context' },
  { ar: 'كل يوم بيجيب همّو', tr: 'kill yoom bijiib hammo', en: 'every day brings its own worry', cat: 'context' },
  { ar: 'رح يكون تمام', tr: 'ra7 ykuun tamaam', en: "it'll be okay / it'll work out", cat: 'context' },
  { ar: 'بوجعني قلبي', tr: 'bi2ouje3ni 2albi', en: 'my heart hurts (for someone / something)', cat: 'context' },
  { ar: 'اعتنِ بحالك', tr: 'ita3anna b-7aalak', en: 'take care of yourself', cat: 'context' },
  { ar: 'الله يعين', tr: 'allah y3iin', en: 'may God help (said in empathy for hardship)', cat: 'context' },
];

const MHL_DRILLS = [
  {
    q: 'Someone says مضغوط (maDghooT) — what is the feeling?',
    opts: ['Happy and content', 'Stressed / under pressure', 'Tired from work', 'Angry at someone'],
    ans: 1,
    exp: 'maDghooT = stressed/pressured — from ضغط (stress/pressure). One of the most common emotional words in Lebanese Arabic, used constantly: economic pressure, family pressure, work pressure. بكرا بتحس حالك مضغوط = "you\'ll feel stressed tomorrow."'
  },
  {
    q: 'What does محترق (mu7tari2) literally mean, and how is it used emotionally?',
    opts: ['Literally burned, used to describe actual fire damage', 'Literally "on fire" — used as slang for burnt out / completely exhausted', 'Angry and ready to explode', 'Excited and passionate'],
    ans: 1,
    exp: 'mu7tari2 = literally "burning" → slang for burnt out. A vivid Lebanese expression for being totally depleted. "محترق من الشغل" = burnt out from work. Reflects how Lebanese Arabic turns physical sensations into emotional states.'
  },
  {
    q: 'A friend says مش تمام (mish tamaam) when you ask how they are. What does this signal?',
    opts: ['They\'re doing great but being modest', 'They\'re not okay / something is wrong — an honest answer', 'They\'re neutral and nothing special is happening', 'A greeting that means "all is perfect"'],
    ans: 1,
    exp: 'mish tamaam = "not okay." In Lebanese culture where "منيح" (fine) is the automatic response, saying mish tamaam is significant — it signals genuine distress or willingness to open up. Take it seriously.'
  },
  {
    q: 'What does تعب من البلد (ti3bit min el-balad) express?',
    opts: ['Physical travel exhaustion', 'National pride for Lebanon', 'Deep exhaustion and disillusionment with Lebanon\'s situation', 'Patriotic duty to stay'],
    ans: 2,
    exp: 'ti3bit min el-balad = "exhausted by the country." A deeply Lebanese phrase expressing emotional depletion from living through the economic collapse, political dysfunction, and repeated crises. Said with sadness, resignation, or anger — sometimes all three.'
  },
  {
    q: 'What is طبيب نفسي (Tabiib nafsii)?',
    opts: ['A general doctor', 'A psychiatrist / mental health doctor (lit. doctor of the soul)', 'A spiritual healer', 'A pharmacist who gives medication'],
    ans: 1,
    exp: 'Tabiib nafsii = psychiatrist (lit. "doctor of the soul/psyche"). نفسي = of the self/psyche. Therapy and mental health awareness has grown significantly in Lebanon post-2019 crisis and 2020 explosion, though stigma remains in some communities.'
  },
  {
    q: 'Someone says كل يوم بيجيب همّو (kill yoom bijiib hammo) — what are they expressing?',
    opts: ['Each day brings new joy', 'Every day is the same and boring', 'Every day brings its own worry — resignation to ongoing stress', 'Tomorrow will be better than today'],
    ans: 2,
    exp: 'kill yoom bijiib hammo = "every day brings its own worry." هم (hamm) = worry/concern. A Lebanese proverb-like expression of weary acceptance — don\'t borrow tomorrow\'s problems because today already has enough. Used with dark humor and genuine fatigue.'
  },
  {
    q: 'What is the correct response when a Lebanese person says أنا معك (ana ma3ak) during a difficult moment?',
    opts: ['Say "I don\'t need help" to preserve dignity', 'Thank them — it means "I\'m with you" and is a genuine offer of solidarity', 'Ask them to prove it by solving the problem', 'Ignore it as a social formality'],
    ans: 1,
    exp: 'ana ma3ak = "I\'m with you" — a simple but powerful expression of emotional solidarity. In Lebanese culture, the presence of people (وجود الناس) matters enormously. Being "with" someone emotionally is a real form of support, not just words.'
  },
  {
    q: 'When someone sighs الله يعين (allah y3iin) about your situation, what are they expressing?',
    opts: ['Judgment that you made bad choices', 'Genuine empathy and a prayer that God help you with your hardship', 'That they will solve the problem for you', 'That the situation is hopeless'],
    ans: 1,
    exp: 'allah y3iin = "may God help" — said with deep empathy when someone describes their difficult situation. Not fatalistic — it\'s a warm expression of solidarity when words feel insufficient. Common when hearing about Lebanese economic struggles.'
  },
  {
    q: 'A friend says بدي أرّوح (biddi araawi7) after describing frustration with Lebanon. What do they mean?',
    opts: ['I want to go home and rest', 'I want to emigrate / escape to another country', 'I want to travel for vacation', 'I want to take a break from work'],
    ans: 1,
    exp: 'biddi araawi7 = "I want to go abroad" — using رَوَّح which in Lebanese slang means emigrating. A phrase that carries enormous weight post-2019, when Lebanon\'s brain drain accelerated dramatically. Context distinguishes it from simply going home (رح عرجع عالبيت).'
  },
  {
    q: 'بوجعني قلبي (bi2ouje3ni 2albi) — what does this express?',
    opts: ['A chest pain requiring medical attention', 'Emotional heartache — deep sorrow or empathy for someone or something', 'I am angry and frustrated', 'My heart is racing with excitement'],
    ans: 1,
    exp: 'bi2ouje3ni 2albi = "my heart hurts" — a poetic Lebanese expression for deep emotional pain, empathy, or sorrow. Used for a dying city, a lost friend, a struggling family member. القلب (the heart) in Lebanese Arabic carries vast emotional weight beyond romance.'
  },
];

const MHL_TIPS = [
  'Mental health awareness has grown dramatically in Lebanon since the 2019 economic collapse and 2020 Beirut explosion. Organizations like Embrace Lebanon and Skoun have worked to destigmatize seeking help, and therapy became normalized in many Beirut social circles.',
  'Lebanese emotional vocabulary often externalizes internal states through physical metaphors: محترق (burning), مضغوط (squeezed/pressured), بوجعني قلبي (my heart hurts). Understanding this physical-emotional language is key to emotional conversations.',
  'تعب من البلد (exhausted by the country) is a phrase that crystallizes a generation\'s experience. Lebanon\'s compounding crises — economic collapse, COVID, the explosion, ongoing instability — have made collective emotional fatigue a lived reality for millions.',
  'In Lebanese culture, emotional support is often collective and physical: sitting with someone (جلوس), sharing food, the presence of family. The concept of وجود الناس (the presence of people) is a genuine form of mental health support.',
  'The word أزمة (azme = crisis) in Lebanese daily speech refers specifically to Lebanon\'s ongoing compound crisis since 2019. It appears constantly in emotional conversations as shorthand for the weight everyone is carrying.',
];

const MHL_ABOUT = 'Lebanese Arabic has a rich vocabulary for emotional states, shaped by decades of war, emigration, and crisis. Words like مضغوط, محترق, and تعب من البلد encode shared experiences of collective trauma and resilience. Since 2019, Lebanon\'s cascading crises have made mental health conversations more open — therapy, once taboo, is now openly discussed in urban Lebanese circles. Understanding this emotional vocabulary is essential for anyone wanting real connection in Lebanon, not just transactional conversation.';
