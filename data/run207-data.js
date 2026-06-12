// Run #207 — Emotions & Feelings Coach data
// Lebanese Arabic emotional vocabulary and expression patterns

const EMO_WORDS = [
  {
    id: 'emo_mabsut', ar: 'مبسوط', tr: 'mabsut', en: 'happy / content',
    category: 'positive', emoji: '😊',
    usage: 'Mabsut (m) / mabsuta (f). Ana mabsut = I\'m happy/content. More everyday than "sa3id". Shu mabsutni = what makes me happy.',
    example_ar: 'أنا مبسوط كتير هلق', example_tr: 'ana mabsut ktir halla2', example_en: 'I\'m very happy right now'
  },
  {
    id: 'emo_farhan', ar: 'فرحان', tr: 'far7an', en: 'joyful / delighted',
    category: 'positive', emoji: '😄',
    usage: 'Far7an (m) / far7ane (f). Stronger joy than mabsut. Far7an b-hal-khabar = delighted with this news.',
    example_ar: 'فرحان بالخبر كتير', example_tr: 'far7an bil-khabar ktir', example_en: 'Very delighted with the news'
  },
  {
    id: 'emo_za3lan', ar: 'زعلان', tr: 'za3lan', en: 'upset / sad / angry',
    category: 'negative', emoji: '😢',
    usage: 'Za3lan (m) / za3lane (f). Covers sad AND upset AND mildly angry. Leish za3lan? = why are you upset? Very common.',
    example_ar: 'ليش زعلان؟ شو صار؟', example_tr: 'leish za3lan? shu sar?', example_en: 'Why are you upset? What happened?'
  },
  {
    id: 'emo_ta3ban', ar: 'تعبان', tr: 'ta3ban', en: 'tired / worn out',
    category: 'state', emoji: '😩',
    usage: 'Ta3ban (m) / ta3bane (f). Ana ta3ban = I\'m tired. Also used when sick: ta3ban (not well). Very versatile.',
    example_ar: 'أنا تعبان، بدي نام', example_tr: 'ana ta3ban, beddi nem', example_en: 'I\'m tired, I want to sleep'
  },
  {
    id: 'emo_mawtu2', ar: 'موتوق', tr: 'mawtuk', en: 'stressed / anxious',
    category: 'negative', emoji: '😰',
    usage: 'Mawtuk (m) / mawtuke (f). Lit. "tightened". Ana mawtuk = I\'m stressed/anxious. Very colloquial Lebanese.',
    example_ar: 'أنا موتوق من الشغل', example_tr: 'ana mawtuk men l-shughul', example_en: 'I\'m stressed from work'
  },
  {
    id: 'emo_mit2assif', ar: 'متأسف', tr: 'mit2assif', en: 'sorry',
    category: 'social', emoji: '🙏',
    usage: 'Mit2assif (m) / mit2assfe (f). Formal apology. For minor things use "ma3lesh". Mit2assif ktir = very sorry.',
    example_ar: 'متأسف كتير، ما قصدت', example_tr: 'mit2assif ktir, ma 2asadt', example_en: 'Very sorry, I didn\'t mean it'
  },
  {
    id: 'emo_ma3lesh', ar: 'معلش', tr: 'ma3lesh', en: 'never mind / it\'s ok / sorry (light)',
    category: 'social', emoji: '🤷',
    usage: 'Ma3lesh = never mind / don\'t worry / it\'s okay / light sorry. Most flexible Lebanese phrase for social smoothing.',
    example_ar: 'معلش، بكرا بيتحسن', example_tr: 'ma3lesh, bukra byet7assan', example_en: 'Never mind, it\'ll get better tomorrow'
  },
  {
    id: 'emo_khayif', ar: 'خايف', tr: 'khayif', en: 'afraid / scared',
    category: 'negative', emoji: '😱',
    usage: 'Khayif (m) / khayfe (f). Khayif men shu? = what are you afraid of? Mish khayif = not scared.',
    example_ar: 'خايف من الامتحان', example_tr: 'khayif men l-imti7an', example_en: 'Scared of the exam'
  },
  {
    id: 'emo_mish_merta7', ar: 'مش مرتاح', tr: 'mish merta7', en: 'uncomfortable / uneasy',
    category: 'negative', emoji: '😬',
    usage: 'Mish merta7 = not comfortable/at ease. Softer than khayif. Used for social discomfort, awkward situations.',
    example_ar: 'أنا مش مرتاح من هالموضوع', example_tr: 'ana mish merta7 men hal-mawdu3', example_en: 'I\'m uncomfortable with this topic'
  },
  {
    id: 'emo_3asabi', ar: 'عصبي', tr: '3asabi', en: 'nervous / irritable',
    category: 'negative', emoji: '😤',
    usage: '3asabi (m) / 3asabiye (f). Can mean nervous OR short-tempered. 3assabni = he/it annoyed me.',
    example_ar: 'ما تكون عصبي، خد نفس', example_tr: 'ma tkun 3asabi, khod nafas', example_en: 'Don\'t be nervous/irritable, take a breath'
  },
  {
    id: 'emo_mestannis', ar: 'مستانس', tr: 'mestanis', en: 'enjoying / having a good time',
    category: 'positive', emoji: '🥳',
    usage: 'Mestanis (m) / mestansit (f). Mistannis = enjoying myself. Shu mestanis! = how fun/enjoyable! Social positive.',
    example_ar: 'أنا مستانس كتير هون', example_tr: 'ana mestanis ktir hon', example_en: 'I\'m really enjoying myself here'
  },
  {
    id: 'emo_meshta2', ar: 'مشتاق', tr: 'meshta2', en: 'missing (someone/place)',
    category: 'positive', emoji: '🥺',
    usage: 'Meshta2 (m) / meshta2a (f). Meshta2lak = I miss you (to m). Meshta2lik = I miss you (to f). Very warm Lebanese phrase.',
    example_ar: 'مشتاقلك كتير يا حبيبي', example_tr: 'meshta2lak ktir ya 7abibi', example_en: 'I miss you so much my dear'
  },
  {
    id: 'emo_wa7id', ar: 'وحيد', tr: 'wa7id', en: 'lonely / alone',
    category: 'negative', emoji: '😔',
    usage: 'Wa7id (m) / wa7ide (f). Feels lonely. Not the same as "la7do" (by himself/herself). Feeling of loneliness.',
    example_ar: 'حاسس حالي وحيد اليوم', example_tr: '7assas 7ali wa7id l-yom', example_en: 'Feeling lonely today'
  },
  {
    id: 'emo_3ayish', ar: 'عايش', tr: '3ayish', en: 'living it up / thriving',
    category: 'positive', emoji: '🌟',
    usage: '3ayish (m) / 3ayishe (f). Lit. "living". "Kif halak?" "3ayish!" = how are you? Living/thriving! Positive life-is-good response.',
    example_ar: 'كيف حالك؟ عايش!', example_tr: 'kif 7alak? 3ayish!', example_en: 'How are you? Thriving/living it up!'
  },
  {
    id: 'emo_2albi_bi2', ar: 'قلبي بيوجع', tr: '2albi biwe3', en: 'heartbroken / heartache',
    category: 'negative', emoji: '💔',
    usage: '2albi biwe3 = my heart hurts/aches. Used for genuine heartbreak or deep emotional pain. Very expressive Lebanese.',
    example_ar: 'قلبي بيوجع لما شفت هيك', example_tr: '2albi biwe3 lamma shfit heik', example_en: 'My heart ached when I saw that'
  },
  {
    id: 'emo_shi3rit', ar: 'شعرت', tr: 'she3rit', en: 'I felt',
    category: 'expression', emoji: '💭',
    usage: 'She3rit = I felt/sensed. She3rit bi + noun = I felt [emotion]. She3rit bfarha = I felt joy. Past tense feeling verb.',
    example_ar: 'شعرت بفرحة كبيرة', example_tr: 'she3rit bi-far7a kbire', example_en: 'I felt great joy'
  },
  {
    id: 'emo_hay_hal', ar: 'هيدا الحال', tr: 'heida l-7al', en: 'that\'s life / such is the state',
    category: 'expression', emoji: '🤝',
    usage: 'Heida l-7al = this is the situation / that\'s how it is. Accepting/resigned expression. Used to move past hardship.',
    example_ar: 'شو بدك تعمل؟ هيدا الحال', example_tr: 'shu baddak ta3mal? heida l-7al', example_en: 'What can you do? That\'s life.'
  },
  {
    id: 'emo_3anjad_mabsut', ar: 'عنجد مبسوط', tr: '3anjad mabsut', en: 'genuinely happy',
    category: 'expression', emoji: '✨',
    usage: '3anjad = truly/really (intensifier for authenticity). 3anjad mabsut = genuinely happy, not just saying it. Adds sincerity.',
    example_ar: 'أنا عنجد مبسوط لك', example_tr: 'ana 3anjad mabsut lak', example_en: 'I\'m genuinely happy for you'
  },
  {
    id: 'emo_hayda_3adeh', ar: 'هيدا عادة', tr: 'heida 3ade', en: 'this is normal / it\'s fine',
    category: 'expression', emoji: '😌',
    usage: 'Heida 3ade = this is normal/usual. Used to reassure. 3ade = normal/acceptable. Heida 3ade ma bsir shi = this is normal, nothing happened.',
    example_ar: 'هيدا عادة، ما تقلق', example_tr: 'heida 3ade, ma t2alla2', example_en: 'That\'s normal, don\'t worry'
  },
  {
    id: 'emo_b7ibbak', ar: 'بحبك', tr: 'b7ibbak', en: 'I love you',
    category: 'social', emoji: '❤️',
    usage: 'B7ibbak (to m) / b7ibbik (to f) / b7ibbkon (to group). Lebanese "I love you". Also b7ebb = I like/love [thing].',
    example_ar: 'بحبك يا ماما', example_tr: 'b7ibbik ya mama', example_en: 'I love you, mom'
  }
];

const EMO_DRILLS = [
  {
    id: 'ed1',
    prompt_ar: 'أنا _____ كتير هلق — feeling happy',
    prompt_tr: 'ana _____ ktir halla2',
    prompt_en: 'Fill in: I\'m very _____ right now (happy/content)',
    correct_id: 'ed1_a',
    options: [
      { id: 'ed1_a', ar: 'مبسوط', en: 'mabsut — happy/content' },
      { id: 'ed1_b', ar: 'زعلان', en: 'za3lan — upset/sad' },
      { id: 'ed1_c', ar: 'تعبان', en: 'ta3ban — tired' },
      { id: 'ed1_d', ar: 'خايف', en: 'khayif — afraid' },
      { id: 'ed1_e', ar: 'وحيد', en: 'wa7id — lonely' }
    ]
  },
  {
    id: 'ed2',
    prompt_ar: 'ليش _____؟ شو صار؟ — someone is upset',
    prompt_tr: 'leish _____? shu sar?',
    prompt_en: 'Fill in: Why are you _____ ? What happened? (upset)',
    correct_id: 'ed2_c',
    options: [
      { id: 'ed2_a', ar: 'مبسوط', en: 'mabsut — happy' },
      { id: 'ed2_b', ar: 'مستانس', en: 'mestanis — enjoying' },
      { id: 'ed2_c', ar: 'زعلان', en: 'za3lan — upset/sad' },
      { id: 'ed2_d', ar: 'فرحان', en: 'far7an — joyful' },
      { id: 'ed2_e', ar: 'عايش', en: '3ayish — thriving' }
    ]
  },
  {
    id: 'ed3',
    prompt_ar: 'مشتاقلك كتير يا _____!',
    prompt_tr: 'meshta2lak ktir ya _____!',
    prompt_en: 'What does "meshta2lak" express?',
    correct_id: 'ed3_b',
    options: [
      { id: 'ed3_a', ar: 'أنا خايف منك', en: 'I\'m afraid of you' },
      { id: 'ed3_b', ar: 'أنا مشتاقلك', en: 'I miss you' },
      { id: 'ed3_c', ar: 'أنا زعلان منك', en: 'I\'m upset at you' },
      { id: 'ed3_d', ar: 'أنا تعبان', en: 'I\'m tired' },
      { id: 'ed3_e', ar: 'أنا مبسوط', en: 'I\'m happy' }
    ]
  },
  {
    id: 'ed4',
    prompt_ar: 'كيف حالك؟ — _____! — thriving response',
    prompt_tr: 'kif 7alak? — _____!',
    prompt_en: 'Best Lebanese response meaning "living/thriving!"',
    correct_id: 'ed4_e',
    options: [
      { id: 'ed4_a', ar: 'تعبان', en: 'ta3ban — tired' },
      { id: 'ed4_b', ar: 'زعلان', en: 'za3lan — upset' },
      { id: 'ed4_c', ar: 'مش مرتاح', en: 'mish merta7 — uncomfortable' },
      { id: 'ed4_d', ar: 'مبسوط', en: 'mabsut — happy' },
      { id: 'ed4_e', ar: 'عايش', en: '3ayish — thriving/living it up!' }
    ]
  },
  {
    id: 'ed5',
    prompt_ar: 'ما يهمك، _____، بكرا بيتحسن',
    prompt_tr: 'ma yhemmak, _____, bukra byet7assan',
    prompt_en: 'Fill in: Don\'t worry, _____, it\'ll get better (never mind)',
    correct_id: 'ed5_d',
    options: [
      { id: 'ed5_a', ar: 'متأسف', en: 'mit2assif — sorry (formal)' },
      { id: 'ed5_b', ar: 'هيدا الحال', en: 'heida l-7al — that\'s life' },
      { id: 'ed5_c', ar: 'بحبك', en: 'b7ibbak — I love you' },
      { id: 'ed5_d', ar: 'معلش', en: 'ma3lesh — never mind/it\'s ok' },
      { id: 'ed5_e', ar: 'عنجد', en: '3anjad — really/truly' }
    ]
  },
  {
    id: 'ed6',
    prompt_ar: 'أنا _____ من الشغل اليوم',
    prompt_tr: 'ana _____ men l-shughul l-yom',
    prompt_en: 'Fill in: I\'m _____ from work today (stressed/anxious)',
    correct_id: 'ed6_a',
    options: [
      { id: 'ed6_a', ar: 'موتوق', en: 'mawtuk — stressed/anxious' },
      { id: 'ed6_b', ar: 'مستانس', en: 'mestanis — enjoying' },
      { id: 'ed6_c', ar: 'فرحان', en: 'far7an — joyful' },
      { id: 'ed6_d', ar: 'مبسوط', en: 'mabsut — happy' },
      { id: 'ed6_e', ar: 'مشتاق', en: 'meshta2 — missing someone' }
    ]
  },
  {
    id: 'ed7',
    prompt_ar: 'أنا _____ مبسوط لك — genuine emphasis',
    prompt_tr: 'ana _____ mabsut lak',
    prompt_en: 'Fill in: I\'m _____ happy for you (genuinely/really)',
    correct_id: 'ed7_c',
    options: [
      { id: 'ed7_a', ar: 'معلش', en: 'ma3lesh — never mind' },
      { id: 'ed7_b', ar: 'هيدا عادة', en: 'heida 3ade — that\'s normal' },
      { id: 'ed7_c', ar: 'عنجد', en: '3anjad — genuinely/really' },
      { id: 'ed7_d', ar: 'شعرت', en: 'she3rit — I felt' },
      { id: 'ed7_e', ar: 'وحيد', en: 'wa7id — lonely' }
    ]
  }
];

const EMO_TIPS = [
  '"Za3lan" (زعلان) is Lebanon\'s all-purpose negative emotion word — it covers sad, upset, AND mildly angry. "Leish za3lan?" = why are you upset/sad/annoyed? One word, three English meanings.',
  '"Mabsut" (مبسوط) vs "far7an" (فرحان): mabsut = generally happy/content (everyday), far7an = joyful/delighted about something specific. "Mabsut?" is the standard check-in. "Far7an bil-khabar" = delighted about the news.',
  '"Ma3lesh" (معلش) is the Lebanese social lubricant — never mind, it\'s ok, don\'t worry, sorry (light). Not for serious apologies (use mit2assif). Covers everything from spilling a drink to minor cancellations.',
  '"Meshta2lak / meshta2lik" (مشتاقلك) = I miss you (m/f). Directly translates as "longing for you". Warmer than in English — Lebanese people say it freely to friends and family, not just romantic partners.',
  '"3ayish!" (عايش!) as a response to "kif 7alak?" = "I\'m living it up / thriving!" The most positive, energetic answer possible. Implies life is good, you\'re enjoying it. More vibrant than just "mni7".'
];

const EMO_ABOUT = 'Lebanese emotional vocabulary is rich and direct. "Za3lan" (upset) covers a wide range, "mabsut" (happy) is the everyday positive, and "ma3lesh" (never mind) smooths over countless social moments. "Meshta2lak" (I miss you) and "b7ibbak" (I love you) are core warmth expressions that Lebanese use freely.';
