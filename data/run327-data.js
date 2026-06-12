// Run #327 — Lebanese Slang & Street Talk Coach (sln)
// 40 words across 5 categories: everyday / reactions / compliments / social / arguments
// 10 MCQ drills, 5 tips, about text

const SLN_WORDS = [
  // everyday
  { tr: 'yalla', ar: 'يلا', en: 'let\'s go / come on / hurry', cat: 'everyday' },
  { tr: 'bas', ar: 'بس', en: 'just / enough / but', cat: 'everyday' },
  { tr: 'ktir', ar: 'كتير', en: 'a lot / very / too much', cat: 'everyday' },
  { tr: 'nshalla', ar: 'إنشالله', en: 'God willing / hopefully / maybe', cat: 'everyday' },
  { tr: 'khalas', ar: 'خلص', en: 'done / finished / that\'s it', cat: 'everyday' },
  { tr: 'wein', ar: 'وين', en: 'where', cat: 'everyday' },
  { tr: 'hayde', ar: 'هيدي', en: 'this (f) / that\'s the one', cat: 'everyday' },
  { tr: 'min wein', ar: 'من وين', en: 'where from / where did that come from', cat: 'everyday' },
  // reactions
  { tr: 'mish ma32ul', ar: 'مش معقول', en: 'unbelievable / no way', cat: 'reactions' },
  { tr: 'ya haram', ar: 'يا حرام', en: 'what a pity / oh no / poor thing', cat: 'reactions' },
  { tr: 'walla', ar: 'والله', en: 'I swear / really / honestly', cat: 'reactions' },
  { tr: 'ya3', ar: 'يع', en: 'yuck / gross / ew', cat: 'reactions' },
  { tr: 'ya salam', ar: 'يا سلام', en: 'wow / how nice / wonderful', cat: 'reactions' },
  { tr: 'akiid', ar: 'أكيد', en: 'for sure / definitely / of course', cat: 'reactions' },
  { tr: 'mazboot', ar: 'مضبوط', en: 'correct / right / exactly', cat: 'reactions' },
  { tr: 'ma32ul?', ar: 'معقول؟', en: 'is that possible? / really? / seriously?', cat: 'reactions' },
  // compliments
  { tr: '7elwe', ar: 'حلوة', en: 'beautiful / nice / sweet (f)', cat: 'compliments' },
  { tr: 'ktir mniH', ar: 'كتير منيح', en: 'very good / really nice', cat: 'compliments' },
  { tr: 'ma sha2 allah', ar: 'ما شاء الله', en: 'mashallah (admiration / protection)', cat: 'compliments' },
  { tr: 'ya 3eini', ar: 'يا عيني', en: 'my darling / how precious (affection)', cat: 'compliments' },
  { tr: 'yislam', ar: 'يسلم', en: 'bless you / thank you / well done', cat: 'compliments' },
  { tr: '3adda', ar: 'عدّا', en: 'nailed it / good job / on point', cat: 'compliments' },
  { tr: 'shu bde2', ar: 'شو بديع', en: 'how amazing / how wonderful', cat: 'compliments' },
  { tr: 'inta/inti 7ilw/e', ar: 'إنت حلو/حلوة', en: 'you\'re nice / you\'re attractive (m/f)', cat: 'compliments' },
  // social
  { tr: '7abibi', ar: 'حبيبي', en: 'my love / buddy / dear (m)', cat: 'social' },
  { tr: '7abibti', ar: 'حبيبتي', en: 'my love / dear (f)', cat: 'social' },
  { tr: 'ya zalameh', ar: 'يا زلمه', en: 'hey man / dude / bro', cat: 'social' },
  { tr: 'ya sitti', ar: 'يا ستي', en: 'oh my goodness / no way (exclamation)', cat: 'social' },
  { tr: 'shu fi ma fi', ar: 'شو في ما في', en: 'what\'s new? / what\'s going on?', cat: 'social' },
  { tr: 'ma fi shi', ar: 'ما في شي', en: 'nothing / no big deal / never mind', cat: 'social' },
  { tr: 'kif 7alak', ar: 'كيف حالك', en: 'how are you (m)', cat: 'social' },
  { tr: 'shi bDa77ik', ar: 'شي بيضحك', en: 'something funny / ridiculous / laughable', cat: 'social' },
  // arguments / pushback
  { tr: 'bass!', ar: 'بسّ!', en: 'enough! / stop! (emphatic)', cat: 'arguments' },
  { tr: 'bala hawwe', ar: 'بلا هوا', en: 'cut the nonsense / stop the BS', cat: 'arguments' },
  { tr: '7ada saalak?', ar: 'حدا سألك؟', en: 'did anyone ask you? / mind your business', cat: 'arguments' },
  { tr: 'ruu7 min hon', ar: 'روح من هون', en: 'get out of here / go away', cat: 'arguments' },
  { tr: 'ma 3am bfham', ar: 'ما عم بفهم', en: 'I don\'t understand / this makes no sense', cat: 'arguments' },
  { tr: 'mish shuGlak', ar: 'مش شغلك', en: 'not your business / none of your concern', cat: 'arguments' },
  { tr: 'khod raHtak', ar: 'خود راحتك', en: 'relax / make yourself at home / chill', cat: 'arguments' },
  { tr: 'shi ktir', ar: 'شي كتير', en: 'too much / that\'s excessive', cat: 'arguments' },
];

const SLN_DRILLS = [
  {
    q: 'What does "yalla" (يلا) mean in Lebanese slang?',
    opts: ['Goodbye', 'Let\'s go / come on', 'I don\'t know', 'How much?'],
    correct: 1,
    note: '"Yalla" (يلا) is the Swiss Army knife of Lebanese Arabic. It means "let\'s go", "come on", "hurry up", "okay then", and even "goodbye". You\'ll hear it dozens of times a day. "Yalla bye!" is a classic Lebanese farewell.'
  },
  {
    q: 'A Lebanese friend says "mish ma32ul!" What are they expressing?',
    opts: ['Agreement', 'Disbelief / no way', 'Anger', 'Greeting'],
    correct: 1,
    note: '"Mish ma32ul" (مش معقول) = not reasonable/possible. Used for disbelief, amazement, or outrage. "Ma32ul?" alone (is it possible?) is a quicker version. Both are extremely common in daily conversation.'
  },
  {
    q: 'What does "walla" mean in Lebanese conversation?',
    opts: ['Goodbye', 'Please', 'I swear / really / honestly', 'Welcome'],
    correct: 2,
    note: '"Walla" (والله) = "I swear by God". Used to emphasize sincerity, express surprise, or just fill space like "honestly" or "really". "Walla ma 3arif" = "I honestly don\'t know". One of the most versatile Lebanese words.'
  },
  {
    q: 'What does "khalas" (خلص) signal in conversation?',
    opts: ['Let\'s start', 'Done / finished / that\'s it', 'Maybe', 'I\'m hungry'],
    correct: 1,
    note: '"Khalas" (خلص) = finished, done, over. "Khalas, bas!" = that\'s enough, stop it. Used to end arguments, announce completion, or signal finality. Heard constantly in Lebanese homes and streets.'
  },
  {
    q: 'What does "ya haram" express?',
    opts: ['Excitement', 'Pity / sympathy / oh no', 'Hunger', 'Success'],
    correct: 1,
    note: '"Ya haram" (يا حرام) = "what a sin/pity". Used to express sympathy, pity, or dismay. "Ya haram, the poor thing" — said for people, animals, even food gone to waste. Deeply embedded in Lebanese empathy culture.'
  },
  {
    q: 'What is "7abibi" (حبيبي) and when do you use it?',
    opts: ['A food dish', 'My love / buddy / dear (m)', 'Good morning', 'Let\'s go'],
    correct: 1,
    note: '"7abibi" (حبيبي) = my love/dear (m), "7abibti" (حبيبتي) for women. Used constantly between friends, family, even strangers. Not always romantic — it\'s the default warm address. "Yalla 7abibi, mniH?" = "Come on buddy, you good?"'
  },
  {
    q: 'When a Lebanese person says "ya salam", what do they mean?',
    opts: ['Goodbye / farewell', 'Wow / how nice / wonderful', 'I\'m bored', 'Help me'],
    correct: 1,
    note: '"Ya salam" (يا سلام) expresses pleasant surprise or admiration — "wow", "how nice", "how lovely". Different from "ma sha2 allah" (protective admiration) — "ya salam" is pure delight. "Ya salam, shu 7elwe!" = "Wow, how beautiful!"'
  },
  {
    q: 'What does "bala hawwe" mean in an argument?',
    opts: ['You\'re right', 'Cut the nonsense / stop the BS', 'I agree', 'Let\'s eat'],
    correct: 1,
    note: '"Bala hawwe" (بلا هوا) — literally "without air/wind". Means "stop blowing hot air" — cut the nonsense, stop the BS. Used when someone is exaggerating, lying, or being dramatic. Direct Lebanese pushback.'
  },
  {
    q: 'What does "akiid" (أكيد) mean?',
    opts: ['Maybe / perhaps', 'For sure / definitely', 'I don\'t know', 'Never'],
    correct: 1,
    note: '"Akiid" (أكيد) = definitely, for sure, of course. "Akiid biji!" = "I\'ll definitely come!" The opposite is "mish akiid" (not sure). "Akiid walla" = "absolutely, I swear" — double emphasis for maximum certainty.'
  },
  {
    q: 'What does "shu fi ma fi" mean?',
    opts: ['There\'s nothing here', 'What\'s new? / What\'s going on?', 'I don\'t want anything', 'Where are you?'],
    correct: 1,
    note: '"Shu fi ma fi" (شو في ما في) — literally "what\'s there, what\'s not there". A casual "what\'s new?" or "what\'s up?". The reply is often "ma fi shi" (nothing new) or a rundown of the day. Pure Lebanese small-talk ritual.'
  },
];

const SLN_TIPS = [
  {
    title: '"Yalla" Does Everything',
    body: '"Yalla" (يلا) is arguably the most-used word in Lebanese Arabic. It can mean: let\'s go, come on, hurry up, okay then, alright, goodbye, get moving, you go first. Context is everything. "Yalla bye!" ends a phone call. "Yalla yalla!" means hurry up urgently. "Yalla, tfaDDal" = okay, go ahead. Learning "yalla" well is your single biggest return on investment in Lebanese slang.'
  },
  {
    title: 'The Power of "Walla"',
    body: '"Walla" (والله = I swear by God) functions like "honestly", "really", "I swear", and "I promise". It\'s used so frequently it\'s almost a filler word. "Walla ma3rif" (I honestly don\'t know). "Walla ktir mniH" (I swear it\'s really good). Non-Muslims use it just as casually — it\'s culturally Lebanese, not religiously specific. Pair it with "akiid walla" for maximum emphasis.'
  },
  {
    title: 'Slang Varies by Generation',
    body: 'Older Lebanese slang (ya3, ya salam, ya haram) is understood by all ages. Younger Beiruti slang borrows heavily from English and French: "cool", "c\'est la vie" (sa la vi), "whatever" (watever). Lebanese Gen Z mixes Arabic, English, and French mid-sentence naturally. Key marker: young Beirutis say "hayde normal" (that\'s normal) and "la helo" (wow, literally "no it\'s beautiful") — hyperlocal Beirut expressions.'
  },
  {
    title: 'Pushback Phrases Signal Directness',
    body: 'Lebanese culture values directness. "7ada saalak?" (did anyone ask you?), "mish shuGlak" (not your business), "bala hawwe" (cut the BS) — these are blunt but normal in Lebanese conversation, especially between friends and family. Context matters: between close friends these are playful; with strangers they signal genuine irritation. Learning to read the tone is as important as learning the words.'
  },
  {
    title: '"Nshalla" Is a Full Spectrum',
    body: '"Nshalla" (إنشالله = God willing) ranges from sincere hope to polite deflection. A genuine "nshalla" means real hope. Three drawn-out "nshallaaahs" often means "probably not" or "I\'m noncommittal". "Nshalla tkuun mabsuuT" = may you be happy (sincere). "Nshalla biji" from a Lebanese friend requires reading tone, facial expression, and relationship history. Outsiders misread "nshalla" as evasion — locals read the full emotional subtext.'
  },
];

const SLN_ABOUT = 'Lebanese slang is a living, breathing mix of Arabic dialects, French phrases, English loanwords, and uniquely Lebanese inventions. It shifts by neighborhood, age group, and social class — Beirut slang differs from the South, the North, and the Mountain. But the core everyday words (yalla, bas, ktir, walla, khalas, nshalla) cut across all Lebanese communities and are your foundation for sounding genuinely local, not textbook-Lebanese.';
