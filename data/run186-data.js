// Run #186 — Numbers Coach data
// Lebanese Arabic numbers: cardinals, ordinals, quantity words

const NUM_WORDS = [
  {
    id: 'n0', numeral: '0', ar: 'صفر', tr: 'sifr', en: 'zero',
    category: 'cardinal', emoji: '0️⃣',
    desc: 'Same as MSA. Used in phone numbers, scores, temperatures.',
    example_ar: 'الدرجة صفر اليوم', example_tr: 'il-daraje sifr il-yom', example_en: 'It\'s zero degrees today'
  },
  {
    id: 'n1', numeral: '1', ar: 'واحد', tr: 'wahed', en: 'one',
    category: 'cardinal', emoji: '1️⃣',
    desc: 'Masculine form. Feminine: wahde (واحدة). Used after nouns in Lebanese.',
    example_ar: 'بدي قهوة واحدة', example_tr: 'biddi ahwe wahde', example_en: 'I want one coffee'
  },
  {
    id: 'n2', numeral: '2', ar: 'تنين', tr: 'tnein', en: 'two',
    category: 'cardinal', emoji: '2️⃣',
    desc: 'Lebanese dialect form of itnein (اثنين). The t- prefix is characteristic of Lebanese.',
    example_ar: 'عندي تنين ولاد', example_tr: '3andi tnein wlad', example_en: 'I have two kids'
  },
  {
    id: 'n3', numeral: '3', ar: 'تلاتة', tr: 'tlete', en: 'three',
    category: 'cardinal', emoji: '3️⃣',
    desc: 'Lebanese form of thalatha. The th→t shift is a core Lebanese feature.',
    example_ar: 'تلاتة أيام', example_tr: 'tlete tyem', example_en: 'three days'
  },
  {
    id: 'n4', numeral: '4', ar: 'أربعة', tr: 'arba3a', en: 'four',
    category: 'cardinal', emoji: '4️⃣',
    desc: 'Close to MSA. The 3 represents ع (ayin) — the pharyngeal consonant.',
    example_ar: 'في أربعة كراسي', example_tr: 'fi arba3a kresi', example_en: 'There are four chairs'
  },
  {
    id: 'n5', numeral: '5', ar: 'خمسة', tr: 'khamse', en: 'five',
    category: 'cardinal', emoji: '5️⃣',
    desc: 'Short final vowel dropped compared to MSA khamsa. Common shortening pattern.',
    example_ar: 'الساعة خمسة', example_tr: 'is-se3a khamse', example_en: 'It\'s five o\'clock'
  },
  {
    id: 'n6', numeral: '6', ar: 'ستة', tr: 'sitte', en: 'six',
    category: 'cardinal', emoji: '6️⃣',
    desc: 'The tt doubling is a Lebanese dialect feature. MSA: sitta.',
    example_ar: 'بياخد ستة أشهر', example_tr: 'biyekhod sitte ashor', example_en: 'It takes six months'
  },
  {
    id: 'n7', numeral: '7', ar: 'سبعة', tr: 'sab3a', en: 'seven',
    category: 'cardinal', emoji: '7️⃣',
    desc: 'The 3 is the ayin (ع). Sab3a il-ayem = the seven days of the week.',
    example_ar: 'سبعة أيام بالجمعة', example_tr: 'sab3a tyem bil-jom3a', example_en: 'Seven days in a week'
  },
  {
    id: 'n8', numeral: '8', ar: 'تمانة', tr: 'tmene', en: 'eight',
    category: 'cardinal', emoji: '8️⃣',
    desc: 'Lebanese form of thamaniya. th→t shift + vowel changes. Very distinctive.',
    example_ar: 'تمانة صباحاً', example_tr: 'tmene Saba7an', example_en: 'eight in the morning'
  },
  {
    id: 'n9', numeral: '9', ar: 'تسعة', tr: 'tis3a', en: 'nine',
    category: 'cardinal', emoji: '9️⃣',
    desc: 'The 3 is ayin. Tis3a w nuss = nine and a half.',
    example_ar: 'تسعة دقايق', example_tr: 'tis3a d2aye2', example_en: 'nine minutes'
  },
  {
    id: 'n10', numeral: '10', ar: 'عشرة', tr: '3ashre', en: 'ten',
    category: 'cardinal', emoji: '🔟',
    desc: 'Starts with ayin (ع). 3ashre dole = ten dollars. Min 3ashre = out of ten.',
    example_ar: 'عشرة من عشرة', example_tr: '3ashre min 3ashre', example_en: 'ten out of ten'
  },
  {
    id: 'n20', numeral: '20', ar: 'عشرين', tr: '3ashrin', en: 'twenty',
    category: 'cardinal', emoji: '2️⃣0️⃣',
    desc: 'Tens in Lebanese add -in suffix: 3ashrin, tletin, arb3in, khamsin...',
    example_ar: 'عمرو عشرين سنة', example_tr: '3omro 3ashrin sene', example_en: 'He\'s twenty years old'
  },
  {
    id: 'n100', numeral: '100', ar: 'مية', tr: 'miye', en: 'hundred',
    category: 'cardinal', emoji: '💯',
    desc: 'Lebanese form: miye not mi\'a. Miyyein = two hundred. Tlet miyye = 300.',
    example_ar: 'بمية دولار', example_tr: 'bi-miye dolar', example_en: 'for a hundred dollars'
  },
  {
    id: 'n1000', numeral: '1000', ar: 'ألف', tr: 'alf', en: 'thousand',
    category: 'cardinal', emoji: '🔢',
    desc: 'Alf = 1000. Tnen alf = 2000. Alf mabrouk = congratulations (lit. a thousand blessings).',
    example_ar: 'ألف مبروك', example_tr: 'alf mabrook', example_en: 'Congratulations! (lit. a thousand blessings)'
  },
  {
    id: 'ord1', numeral: '1st', ar: 'أوّل', tr: 'awwal', en: 'first',
    category: 'ordinal', emoji: '🥇',
    desc: 'Masculine. Feminine: oula (أولى). Il-awwal = the first one. Min il-awwal = from the start.',
    example_ar: 'كان أوّل واحد وصل', example_tr: 'ken awwal wahed wasel', example_en: 'He was the first to arrive'
  },
  {
    id: 'ord2', numeral: '2nd', ar: 'تاني', tr: 'teni', en: 'second / another',
    category: 'ordinal', emoji: '🥈',
    desc: 'Also means "another" or "other". Teni wahed = another one. Teni yom = the next day.',
    example_ar: 'روح على تاني شارع', example_tr: 'ru7 3a teni sheri3', example_en: 'Go to the next street'
  },
  {
    id: 'ord3', numeral: '3rd', ar: 'تالت', tr: 'telet', en: 'third',
    category: 'ordinal', emoji: '🥉',
    desc: 'From thalith. Telet marra = third time. Il-telet = the third one.',
    example_ar: 'هاد المرة التالتة', example_tr: 'hed il-marra il-telte', example_en: 'This is the third time'
  },
  {
    id: 'sp_nus', numeral: '½', ar: 'نص', tr: 'nuss', en: 'half',
    category: 'special', emoji: '½',
    desc: 'Very common. Is-se3a w nuss = half past (the hour). Nuss kilo = half a kilo.',
    example_ar: 'الساعة تلاتة ونص', example_tr: 'is-se3a tlete w nuss', example_en: 'It\'s half past three'
  },
  {
    id: 'sp_ktir', numeral: '∞', ar: 'كتير', tr: 'ktir', en: 'a lot / many / very',
    category: 'special', emoji: '📈',
    desc: 'Extremely common. Used as adjective, adverb, noun. Ktir mnih = very good. Fi ktir nes = many people.',
    example_ar: 'شكراً كتير', example_tr: 'shukran ktir', example_en: 'Thank you very much'
  },
  {
    id: 'sp_shwy', numeral: '~', ar: 'شوية', tr: 'shwayye', en: 'a little / a bit',
    category: 'special', emoji: '🤏',
    desc: 'Shwayye shwayye = little by little / slowly. Kamen shwayye = a little more.',
    example_ar: 'انتظر شوية', example_tr: 'intazar shwayye', example_en: 'Wait a little'
  }
];

const NUM_DRILLS = [
  {
    id: 'nd1',
    prompt_ar: 'تلاتة',
    prompt_tr: 'tlete',
    prompt_en: 'What number is this?',
    correct_id: 'nd1_c',
    options: [
      { id: 'nd1_a', ar: '٢', en: 'two' },
      { id: 'nd1_b', ar: '٤', en: 'four' },
      { id: 'nd1_c', ar: '٣', en: 'three' },
      { id: 'nd1_d', ar: '٨', en: 'eight' },
      { id: 'nd1_e', ar: '٥', en: 'five' }
    ]
  },
  {
    id: 'nd2',
    prompt_ar: 'الساعة خمسة ونص',
    prompt_tr: 'is-se3a khamse w nuss',
    prompt_en: 'What time is it?',
    correct_id: 'nd2_c',
    options: [
      { id: 'nd2_a', ar: '5:00', en: 'five o\'clock' },
      { id: 'nd2_b', ar: '4:30', en: 'four thirty' },
      { id: 'nd2_c', ar: '5:30', en: 'five thirty' },
      { id: 'nd2_d', ar: '6:00', en: 'six o\'clock' },
      { id: 'nd2_e', ar: '5:15', en: 'five fifteen' }
    ]
  },
  {
    id: 'nd3',
    prompt_ar: 'ألف مبروك',
    prompt_tr: 'alf mabrook',
    prompt_en: 'What does "alf" mean here?',
    correct_id: 'nd3_b',
    options: [
      { id: 'nd3_a', ar: 'عشرة', en: 'ten' },
      { id: 'nd3_b', ar: 'ألف — congratulations', en: 'a thousand (blessings)' },
      { id: 'nd3_c', ar: 'مية', en: 'hundred' },
      { id: 'nd3_d', ar: 'تنين', en: 'two' },
      { id: 'nd3_e', ar: 'كتير', en: 'a lot' }
    ]
  },
  {
    id: 'nd4',
    prompt_ar: 'How do you say "twenty" in Lebanese?',
    prompt_tr: '',
    prompt_en: 'Choose the correct Lebanese form',
    correct_id: 'nd4_b',
    options: [
      { id: 'nd4_a', ar: 'عشرة', en: '3ashre (ten)' },
      { id: 'nd4_b', ar: 'عشرين', en: '3ashrin (twenty)' },
      { id: 'nd4_c', ar: 'عشتين', en: '3ashteen (wrong)' },
      { id: 'nd4_d', ar: 'ميتين', en: 'miteen (two hundred)' },
      { id: 'nd4_e', ar: 'تنين', en: 'tnein (two)' }
    ]
  },
  {
    id: 'nd5',
    prompt_ar: 'شوية شوية',
    prompt_tr: 'shwayye shwayye',
    prompt_en: 'What does this expression mean?',
    correct_id: 'nd5_a',
    options: [
      { id: 'nd5_a', ar: 'شوية شوية = ببطء / تدريجياً', en: 'little by little / slowly' },
      { id: 'nd5_b', ar: 'كتير كتير', en: 'very very much' },
      { id: 'nd5_c', ar: 'مرتين', en: 'twice' },
      { id: 'nd5_d', ar: 'لأ لأ', en: 'no no' },
      { id: 'nd5_e', ar: 'بسرعة', en: 'quickly' }
    ]
  },
  {
    id: 'nd6',
    prompt_ar: 'كان أوّل واحد وصل',
    prompt_tr: 'ken awwal wahed wasel',
    prompt_en: 'What ordinal is used?',
    correct_id: 'nd6_c',
    options: [
      { id: 'nd6_a', ar: 'تاني — second', en: 'second' },
      { id: 'nd6_b', ar: 'تالت — third', en: 'third' },
      { id: 'nd6_c', ar: 'أوّل — first', en: 'first' },
      { id: 'nd6_d', ar: 'واحد — one', en: 'one (cardinal)' },
      { id: 'nd6_e', ar: 'رابع — fourth', en: 'fourth' }
    ]
  },
  {
    id: 'nd7',
    prompt_ar: 'Which number uses the Lebanese th→t shift?',
    prompt_tr: '',
    prompt_en: 'Find the number with the th→t dialectal change',
    correct_id: 'nd7_d',
    options: [
      { id: 'nd7_a', ar: 'واحد', en: 'wahed (one)' },
      { id: 'nd7_b', ar: 'أربعة', en: 'arba3a (four)' },
      { id: 'nd7_c', ar: 'ستة', en: 'sitte (six)' },
      { id: 'nd7_d', ar: 'تلاتة', en: 'tlete (three) — MSA thalatha' },
      { id: 'nd7_e', ar: 'مية', en: 'miye (hundred)' }
    ]
  }
];

const NUM_TIPS = [
  'Lebanese uses the -in suffix for tens: 3ashrin (20), tletin (30), arb3in (40), khamsin (50), sittin (60), sab3in (70), tmanin (80), tis3in (90).',
  'The th→t shift is a core Lebanese feature: thalatha→tlete (3), thamanya→tmene (8), thalith→telet (third). You\'ll hear this pattern everywhere.',
  '"Teni" (تاني) does double duty — it means both "second" (ordinal) and "another/other". Context makes it clear: teni yom = the next day, teni kap = another cup.',
  '"Ktir" (كتير) is one of the most versatile Lebanese words: adjective (ktir mnih = very good), adverb (bhibbak ktir = I love you a lot), or standalone (ktir! = a lot!). Master it early.',
  'For telling time, Lebanese uses the hour + "w" (and) + minutes: tlete w nuss (3:30), arba3a w rub3 (4:15). "Nuss" (نص) = half, "rub3" (ربع) = quarter.'
];

const NUM_ABOUT = 'Lebanese Arabic numbers blend Classical Arabic roots with distinct dialect features. The th→t shift (thalatha→tlete), shortened vowels, and unique forms like "miye" for hundred make Lebanese numbers sound quite different from MSA. Ordinals and quantity words like ktir and shwayye are essential for everyday conversation.';
