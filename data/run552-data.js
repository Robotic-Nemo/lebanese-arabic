// R552 — NEW FEATURE: Lebanese Evil Eye & Superstitions coach (prefix: evl)

const EVL_WORDS = [
  // cat: evil-eye
  { ar: 'العين', tr: 'el-3een', en: 'The evil eye — core Lebanese supernatural belief', cat: 'evil-eye' },
  { ar: 'ما شاء الله', tr: 'maa shaa allah', en: 'God has willed it — said to deflect evil eye after a compliment', cat: 'evil-eye' },
  { ar: 'حسدوك', tr: '7asaduuk', en: 'They gave you the evil eye / they envied you', cat: 'evil-eye' },
  { ar: 'عيّن', tr: '3ayyan', en: 'To give someone the evil eye (verb)', cat: 'evil-eye' },
  { ar: 'شايل العين', tr: 'shaayil el-3een', en: 'Carrying the evil eye — affected by it (feeling unwell, things going wrong)', cat: 'evil-eye' },
  { ar: 'حجاب', tr: '7ijaab', en: 'Protective amulet / charm against evil eye', cat: 'evil-eye' },
  { ar: 'خرزة زرقاء', tr: 'kharze zar2aa', en: 'Blue bead — the classic evil eye protective charm', cat: 'evil-eye' },
  { ar: 'بخور', tr: 'bakhuur', en: 'Incense burned to cleanse the evil eye or bad energy', cat: 'evil-eye' },

  // cat: protection
  { ar: 'الله يحميك', tr: 'allah y7miik', en: 'God protect you — said to ward off evil after praise', cat: 'protection' },
  { ar: 'تفه تفه', tr: 'tfeh tfeh', en: 'Ptoo ptoo — symbolic spitting sound to deflect evil eye', cat: 'protection' },
  { ar: 'بالعافية', tr: 'bil-3aafye', en: 'May it be in health — said when someone compliments food/possessions', cat: 'protection' },
  { ar: 'الله يبعد الشر', tr: 'allah yib3id el-sharr', en: 'God keep evil far away', cat: 'protection' },
  { ar: 'خمسة وخميسة', tr: 'khamse w-khmiise', en: 'Five and five — the Hamsa hand gesture/phrase against evil', cat: 'protection' },
  { ar: 'بسم الله', tr: 'bismillah', en: 'In the name of God — said before anything to protect from evil', cat: 'protection' },

  // cat: luck
  { ar: 'طالع نجمته', tr: 'Taale3 nijmto', en: 'His star has risen — he\'s in luck / things are going his way', cat: 'luck' },
  { ar: 'نجمته حلوة', tr: 'nijmto 7ilwe', en: 'His star is beautiful — he\'s naturally lucky', cat: 'luck' },
  { ar: 'يد خضرا', tr: 'iid khaDra', en: 'Green hand — someone with a lucky touch (plants grow, things work)', cat: 'luck' },
  { ar: 'بختو مفتوح', tr: 'bakhto maftuuH', en: 'His luck is open / fortune favors him', cat: 'luck' },
  { ar: 'نحس', tr: 'na7s', en: 'Bad luck / misfortune (a person or thing can be "na7s")', cat: 'luck' },
  { ar: 'طالع من الشر', tr: 'Taale3 min el-sharr', en: 'Escaped from evil/bad luck — got through something difficult', cat: 'luck' },

  // cat: omens
  { ar: 'قعقع عينه', tr: 'qa3qa3 3eino', en: 'His eye twitched — usually a sign something will happen', cat: 'omens' },
  { ar: 'طنت أذنك', tr: 'Tannet udhnak', en: 'Your ear rang — someone is talking about you', cat: 'omens' },
  { ar: 'حلمت فيك', tr: '7alamet fiik', en: 'I dreamed about you — usually followed by telling the dream', cat: 'omens' },
  { ar: 'الحق يجي من الله', tr: 'el-7a2 yiji min allah', en: 'Truth comes from God — said when something turns out as predicted', cat: 'omens' },
  { ar: 'عتبة الدار', tr: '3atabet el-daar', en: 'The threshold of the house — crossing it has ritual significance', cat: 'omens' },

  // cat: phrases
  { ar: 'الله معنا', tr: 'allah ma3na', en: 'God is with us — reassurance during something scary or uncertain', cat: 'phrases' },
  { ar: 'يا ستر', tr: 'ya stir', en: 'Oh concealer (God) — said in shock, fear, or surprise at bad news', cat: 'phrases' },
  { ar: 'ما شافت عين', tr: 'maa shaafit 3een', en: 'May no eye see (it) — said about something precious, keep it hidden', cat: 'phrases' },
  { ar: 'ربنا يستر', tr: 'rabbna yistir', en: 'May God conceal (protect) us — common in uncertain situations', cat: 'phrases' },
  { ar: 'الله بيكفي', tr: 'allah biyikfi', en: 'God is sufficient — trust in God when worried about something', cat: 'phrases' },
];

const EVL_DRILLS = [
  {
    q: 'A Lebanese friend compliments your new car, then immediately says "ma shaa allah." Why?',
    opts: [
      'To deflect the evil eye — complimenting without it could cause harm',
      'To say goodbye — it\'s a farewell phrase',
      'To ask about the price — it\'s polite curiosity',
      'It\'s just filler — ma shaa allah means nothing specific here'
    ],
    ans: 0,
    exp: '"Ma shaa allah" after a compliment is one of the most important Lebanese social moves. The belief in the evil eye (el-3een) means that genuine admiration carries an energy that can harm the admired person or object. "Ma shaa allah" (God has willed it) deflects that energy back to God. Skipping it when complimenting someone\'s child, home, or success can be seen as negligent or even malicious in traditional households.'
  },
  {
    q: 'Someone says you\'ve been "shaayil el-3een" all week — things keep going wrong. What do Lebanese people believe is happening?',
    opts: [
      'You\'ve been affected by the evil eye from someone\'s envy',
      'You\'ve been working too hard and need rest',
      'You\'ve made a series of bad decisions',
      'Your horoscope is unfavorable this week'
    ],
    ans: 0,
    exp: '"Shaayil el-3een" (carrying the evil eye) explains a run of bad luck, illness, or misfortune as caused by someone\'s envious gaze. It\'s not about malicious intent — even involuntary admiration can transmit the evil eye. The typical remedies involve bakhuur (incense), reading specific prayers, or having a religious person perform a 3een-reading. This belief cuts across all of Lebanon\'s religious communities.'
  },
  {
    q: 'A Lebanese grandmother says "tfeh tfeh" and waves her hand while looking at her grandchild. What is she doing?',
    opts: [
      'Deflecting the evil eye — the symbolic spit sound protects the child',
      'Expressing disgust at the child\'s behavior',
      'Sneezing politely',
      'Calling the child to come to her'
    ],
    ans: 0,
    exp: '"Tfeh tfeh" is the Lebanese (and broader Levantine) protective gesture — a symbolic spitting sound made twice while looking at something precious. It\'s not real spitting; it\'s a performative action that says "I acknowledge this beauty without claiming it with my gaze." Grandmothers do it reflexively when admiring babies or grandchildren. It\'s accompanied by "ma shaa allah" and "inta allah y7miik" (God protect you).'
  },
  {
    q: 'Your Lebanese colleague is praised for their work success and someone says "nijmto 7ilwe." What does this mean?',
    opts: [
      '"His star is beautiful" — he\'s naturally lucky / fortune favors him',
      '"His work is beautiful" — a direct compliment on quality',
      '"His name is beautiful" — commenting on his name',
      '"His night is beautiful" — wishing him a good evening'
    ],
    ans: 0,
    exp: '"Nijmto 7ilwe" (his star is beautiful) is Lebanese astral luck vocabulary — every person has a "star" that influences their fortune. Someone with a beautiful star seems to have things fall into place naturally. Compare with "bakhto maftuuH" (his luck is open). Lebanese culture mixes Islamic destiny (maktub, inshallah) with older folk astrology where personal stars, birth timing, and cosmic alignment affect one\'s path.'
  },
  {
    q: 'Your ear is ringing and a Lebanese friend says "Tannet udhnak." What do they believe this means?',
    opts: [
      'Someone somewhere is talking about you right now',
      'You have a medical issue with your hearing',
      'The weather is about to change',
      'Someone is thinking good thoughts about you specifically'
    ],
    ans: 0,
    exp: '"Tannet udhnak" (your ear rang) is the Lebanese folk interpretation of ear ringing — someone is talking about you, and often not positively. The expected response is to guess who: "miin yikuun?" (who could it be?). This belief is universal across Lebanese generations and religious backgrounds. It\'s said playfully in modern contexts but the underlying folk belief is genuine in older generations.'
  },
  {
    q: 'You want to mention something precious but worry about attracting bad luck. What do you say after mentioning it?',
    opts: [
      'Maa shaafit 3een — may no eye see it',
      'Ya stir — oh God protect us',
      'Rabbna yistir — may God conceal us',
      'Any of the above work depending on context'
    ],
    ans: 3,
    exp: 'All three phrases protect against the evil eye after mentioning something precious. "Maa shaafit 3een" (may no eye see it) specifically asks that the thing escape envious gazes — said about wealth, health, or children. "Ya stir" is more a shocked reaction to danger. "Rabbna yistir" is a general divine protection prayer. Lebanese people switch between them fluidly — what matters is the protective intention, not the specific phrase.'
  },
  {
    q: 'Someone who always brings misfortune is called "na7s" — what are you saying about them?',
    opts: [
      'They carry bad luck — being near them causes misfortune',
      'They are evil — they intentionally cause harm',
      'They are unlucky only for themselves',
      'They are dishonest — na7s means liar'
    ],
    ans: 0,
    exp: '"Na7s" (bad luck/misfortune) can describe a person, a day, or an object. A "na7s" person isn\'t evil — they just radiate misfortune through no fault of their own. Lebanese culture takes na7s seriously: if someone\'s presence consistently correlates with things going wrong, they\'ll be gently avoided. Compare "iid khaDra" (green hand — lucky touch) as the positive opposite. The concept echoes the broader Levantine belief that personal energy affects everything around you.'
  },
  {
    q: 'A Lebanese grandmother insists you carry a blue bead (kharze zar2aa) in your bag. What is its purpose?',
    opts: [
      'To protect against the evil eye — the blue bead repels envious gazes',
      'For good luck in business dealings',
      'As a religious symbol of faith',
      'To remember her specifically — it\'s a personal memento'
    ],
    ans: 0,
    exp: 'The kharze zar2aa (blue bead) is the most universal Lebanese evil eye protection. The color blue is believed to reflect the evil eye gaze back to its source — the blue color mimics the eye itself. You\'ll see it hung in cars, tied to babies\' cribs, worn as jewelry, and placed in new homes. It\'s sold in every Lebanese market and given as gifts. The practice crosses all religious lines — Christian, Muslim, and Druze Lebanese all use it.'
  },
  {
    q: 'Someone says "bismillah" before starting a car journey. Why?',
    opts: [
      'To seek God\'s protection before something potentially risky',
      'It\'s a legal requirement before driving in Lebanon',
      'To greet passengers in the car',
      'It means "let\'s go" — bismillah is just a departure phrase'
    ],
    ans: 0,
    exp: '"Bismillah" (in the name of God) is said before any potentially dangerous or significant action — starting a car, beginning a meal, entering a home, starting surgery. It\'s both a prayer for protection and a declaration that the action is under God\'s authority. In Lebanese folk practice, saying bismillah before a journey transfers responsibility to God — if something goes wrong, it was God\'s will; but more importantly, saying it is believed to activate divine protection.'
  },
  {
    q: 'What does "iid khaDra" mean and who is it said about?',
    opts: [
      '"Green hand" — said about someone with a lucky touch, plants grow and things prosper around them',
      '"Green hand" — said about a skilled surgeon',
      '"Green hand" — means someone is environmentally conscious',
      '"Green hand" — Lebanese slang for a generous person'
    ],
    ans: 0,
    exp: '"Iid khaDra" (green hand) describes someone whose touch brings life and luck — plants thrive, businesses succeed, relationships flourish around them. It\'s the highest form of luck-compliment in Lebanese folk belief. Someone with a "green hand" is sought out: ask them to plant your garden, start your business, name your child. The metaphor connects to agricultural roots — green (khaDra) means alive, fertile, flourishing. The opposite is someone whose touch metaphorically kills things.'
  },
];

const EVL_TIPS = [
  '<strong>Ma shaa allah is mandatory after compliments:</strong> Lebanese culture expects "ma shaa allah" after any genuine compliment — about a child, a new home, a business success, a beautiful meal. Skipping it can be read as jealousy (you\'re admiring without protecting). Foreigners who learn to automatically add "ma shaa allah" after complimenting anything will immediately be perceived as culturally fluent and respectful.',
  '<strong>The evil eye crosses all religions:</strong> The 3een (evil eye) belief is shared by Lebanese Christians, Muslims, and Druze equally. The protective responses differ slightly — Christians may make the cross, Muslims recite Quran, Druze have their own traditions — but the core belief in el-3een and the need to protect against it is universal. It\'s a pre-Islamic, pre-Christian folk belief that survived Lebanon\'s religious transformations.',
  '<strong>Children are most vulnerable:</strong> Lebanese parents are especially protective of young children from the evil eye. Babies are often dressed in blue, have blue beads on their wrists, and strangers who admire them are expected to say "ma shaa allah" or "allah y7mii" (God protect him/her). Unusually beautiful children attract extra protective measures — their beauty itself is a risk.',
  '<strong>Bakhoor (incense) as purification:</strong> When a Lebanese home feels like it has bad energy — after conflict, illness, or a run of bad luck — burning bakhoor (incense, usually oud-based) is believed to cleanse the space. The smoke carries away the negative energy. You\'ll see this in traditional Lebanese households: unusual bakhoor use often signals a belief that something spiritually negative needs addressing.',
  '<strong>Na7s vs. good energy:</strong> Lebanese culture closely tracks the personal energy of those around them. A "na7s" person or object brings misfortune; someone with "iid khaDra" (green hand) or "nijmto 7ilwe" (beautiful star) brings luck. Understanding that Lebanese people mentally categorize the people in their lives this way helps explain why certain relationships are cultivated and others are gently avoided — it\'s often less about personal feelings and more about perceived energy exchange.',
];

const EVL_ABOUT = 'Lebanese superstitions and folk beliefs form an invisible layer beneath the country\'s surface — beneath the modernity of Beirut, the sectarian politics, the Francophone education. The evil eye (el-3een) is perhaps the most universal; walk into any Lebanese home and you\'ll see blue beads, Hamsa hands, and framed religious texts on the walls — all serving protective functions. This folk belief system isn\'t "superstition" in the dismissive Western sense — it\'s a coherent worldview that takes seriously the power of envy, admiration, and interpersonal energy. The Lebanese phrase "ma shaa allah" is a theological and social technology: it acknowledges beauty while redirecting it to God, preventing the speaker from accidentally claiming harmful power over the admired thing. Understanding el-3een, na7s, bakhoor, and protective phrases is understanding a dimension of Lebanese life that polite conversation rarely explains directly but that shapes behavior constantly.';
