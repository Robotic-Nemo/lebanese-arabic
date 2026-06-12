// Run #198 — Food & Restaurant Coach data
// Lebanese Arabic food vocabulary, ordering phrases, and restaurant survival

const FOD_WORDS = [
  {
    id: 'fod_akl', ar: 'أكل', tr: 'akl', en: 'food / eating',
    category: 'basic', emoji: '🍽️',
    usage: 'Akl = food (noun) or eating (verbal noun). Shu fi akl? = What food is there? 3am nekel = we\'re eating.',
    example_ar: 'الأكل منيح كتير هون', example_tr: 'l-akl mni7 ktir hon', example_en: 'The food is very good here'
  },
  {
    id: 'fod_tayeb', ar: 'طيب', tr: 'tayeb', en: 'delicious / good (taste)',
    category: 'basic', emoji: '😋',
    usage: 'Tayeb specifically for taste — food is delicious. Tayeb ktir = very tasty. Not the same as mni7 (good quality).',
    example_ar: 'يالله هالأكل طيب', example_tr: 'yalla hal-akl tayeb', example_en: 'Wow this food is delicious'
  },
  {
    id: 'fod_jwe3', ar: 'جوعان', tr: 'jwe3an', en: 'hungry',
    category: 'basic', emoji: '🤤',
    usage: 'Jwe3an (m) / jwe3ane (f). Ana jwe3an = I\'m hungry. Sirt jwe3an = I got hungry.',
    example_ar: 'أنا جوعان كتير', example_tr: 'ana jwe3an ktir', example_en: 'I\'m very hungry'
  },
  {
    id: 'fod_3atshan', ar: 'عطشان', tr: '3atshan', en: 'thirsty',
    category: 'basic', emoji: '🥤',
    usage: '3atshan (m) / 3atshane (f). 3atshan l-ma = thirsty for water.',
    example_ar: 'بدي مي، أنا عطشان', example_tr: 'beddi maye, ana 3atshan', example_en: 'I want water, I\'m thirsty'
  },
  {
    id: 'fod_maktub', ar: 'منيو', tr: 'manyu', en: 'menu',
    category: 'restaurant', emoji: '📋',
    usage: 'From French "menu". Jib l-manyu = bring the menu. Common in Lebanese restaurants.',
    example_ar: 'ممكن تجيب المنيو؟', example_tr: 'mken tjib l-manyu?', example_en: 'Can you bring the menu?'
  },
  {
    id: 'fod_hesab', ar: 'حساب', tr: '7esab', en: 'bill / check',
    category: 'restaurant', emoji: '🧾',
    usage: '7esab = bill (lit. calculation/account). Jib l-7esab = bring the bill. 2addeish l-7esab = how much is the bill.',
    example_ar: 'جيب الحساب لو سمحت', example_tr: 'jib l-7esab law sama7t', example_en: 'Bring the bill please'
  },
  {
    id: 'fod_tawle', ar: 'طاولة', tr: 'tawle', en: 'table',
    category: 'restaurant', emoji: '🪑',
    usage: 'Tawle = table. Baddna tawle la arba3a = we want a table for four. Fi tawle fadye? = Is there a free table?',
    example_ar: 'في طاولة فاضية؟', example_tr: 'fi tawle fadye?', example_en: 'Is there a free table?'
  },
  {
    id: 'fod_waiter', ar: 'غرسون', tr: 'garson', en: 'waiter',
    category: 'restaurant', emoji: '🧑‍🍳',
    usage: 'From French "garçon". Universal in Lebanese restaurants. To call: "garson!" or "ya garson!". Female: garsoneh.',
    example_ar: 'يا غرسون، ممكن تجي؟', example_tr: 'ya garson, mken tji?', example_en: 'Waiter, can you come?'
  },
  {
    id: 'fod_bddi', ar: 'بدي', tr: 'beddi', en: 'I want',
    category: 'ordering', emoji: '👆',
    usage: 'Beddi = I want (from baddi). Beddi + noun = I want X. Beddi 2akol = I want to eat. Key phrase for ordering.',
    example_ar: 'بدي شاورما من فضلك', example_tr: 'beddi shawarma min fadlak', example_en: 'I want shawarma please'
  },
  {
    id: 'fod_nfs', ar: 'نفس', tr: 'nafs', en: 'same (order)',
    category: 'ordering', emoji: '☝️',
    usage: 'Nafs = same. Ana nafs = same for me. Kamen nafs = also the same. Very useful when ordering.',
    example_ar: 'أنا نفس الشي', example_tr: 'ana nafs l-shi', example_en: 'Same thing for me'
  },
  {
    id: 'fod_min_fadlak', ar: 'من فضلك', tr: 'min fadlak', en: 'please (to m) / excuse me',
    category: 'ordering', emoji: '🙏',
    usage: 'Min fadlak (m) / min fadlik (f). Used to get attention AND to say please. Essential for ordering.',
    example_ar: 'جيب مي من فضلك', example_tr: 'jib maye min fadlak', example_en: 'Bring water please'
  },
  {
    id: 'fod_maye', ar: 'مي', tr: 'maye', en: 'water',
    category: 'drinks', emoji: '💧',
    usage: 'Maye = water (Lebanese dialect). MSA uses "ma\'" (ماء). Maye 3adiye = regular water. Maye ma3danie = mineral water.',
    example_ar: 'مي معدنية أو عادية؟', example_tr: 'maye ma3daniye aw 3adiye?', example_en: 'Mineral or regular water?'
  },
  {
    id: 'fod_ahwe', ar: 'قهوة', tr: '2ahwe', en: 'coffee',
    category: 'drinks', emoji: '☕',
    usage: '2ahwe = coffee. 2ahwe 3arabiye = Lebanese/Arabic coffee (cardamom). 2ahwe fransawiye = French press / espresso style.',
    example_ar: 'بدي قهوة عربية', example_tr: 'beddi 2ahwe 3arabiye', example_en: 'I want Arabic coffee'
  },
  {
    id: 'fod_shai', ar: 'شاي', tr: 'shai', en: 'tea',
    category: 'drinks', emoji: '🍵',
    usage: 'Shai = tea. Shai b-na3na3 = mint tea (very common). Shai b-7lib = tea with milk.',
    example_ar: 'سي بنعنع من فضلك', example_tr: 'shai b-na3na3 min fadlak', example_en: 'Mint tea please'
  },
  {
    id: 'fod_khobez', ar: 'خبز', tr: 'khbez', en: 'bread',
    category: 'food', emoji: '🫓',
    usage: 'Khbez = bread (Lebanese pita). Khbez 3arabi = Lebanese flatbread. Almost always brought free in Lebanese restaurants.',
    example_ar: 'جيب خبز زيادة', example_tr: 'jib khbez zyede', example_en: 'Bring more bread'
  },
  {
    id: 'fod_lahme', ar: 'لحمة', tr: 'la7me', en: 'meat',
    category: 'food', emoji: '🥩',
    usage: 'La7me = meat (general). La7me 7alal = halal meat. La7met 7alib = veal. Important to know for ordering.',
    example_ar: 'هاد فيه لحمة؟', example_tr: 'hed fi la7me?', example_en: 'Does this have meat in it?'
  },
  {
    id: 'fod_dajaj', ar: 'دجاج', tr: 'djaj', en: 'chicken',
    category: 'food', emoji: '🍗',
    usage: 'Djaj = chicken. Djaj mashwi = grilled chicken. Djaj m7ammar = roasted chicken. Very common in Lebanese cuisine.',
    example_ar: 'بدي دجاج مشوي', example_tr: 'beddi djaj mashwi', example_en: 'I want grilled chicken'
  },
  {
    id: 'fod_samak', ar: 'سمك', tr: 'samak', en: 'fish',
    category: 'food', emoji: '🐟',
    usage: 'Samak = fish. Samak mashwi = grilled fish. Samak ma2li = fried fish. Lebanon is famous for fresh fish.',
    example_ar: 'السمك طازج اليوم؟', example_tr: 'l-samak tazej l-yom?', example_en: 'Is the fish fresh today?'
  },
  {
    id: 'fod_7elou', ar: 'حلو', tr: '7elou', en: 'dessert / sweet',
    category: 'food', emoji: '🍮',
    usage: '7elou as noun = dessert/sweets. Baddna 7elou = we want dessert. Lebanese sweets: baklawa, maamoul, 2atayef.',
    example_ar: 'شو في حلو عندكون؟', example_tr: 'shu fi 7elou 3andkon?', example_en: 'What desserts do you have?'
  },
  {
    id: 'fod_yislamo', ar: 'يسلموا', tr: 'yislamo', en: 'thank you (for the meal)',
    category: 'phrases', emoji: '🙌',
    usage: 'Yislamo = "bless your hands" — specific thanks for food/service. More heartfelt than shukran after a meal.',
    example_ar: 'يسلموا، الأكل كان رائع', example_tr: 'yislamo, l-akl ken ra2i3', example_en: 'Thank you, the food was wonderful'
  }
];

const FOD_DRILLS = [
  {
    id: 'fd1',
    prompt_ar: '_____ شاورما من فضلك — ordering food',
    prompt_tr: '_____ shawarma min fadlak',
    prompt_en: 'Fill in: _____ shawarma please (I want)',
    correct_id: 'fd1_a',
    options: [
      { id: 'fd1_a', ar: 'بدي', en: 'beddi — I want' },
      { id: 'fd1_b', ar: 'في', en: 'fi — there is' },
      { id: 'fd1_c', ar: 'بدك', en: 'baddak — you want' },
      { id: 'fd1_d', ar: 'منيح', en: 'mni7 — good' },
      { id: 'fd1_e', ar: 'ممكن', en: 'mken — possible/can' }
    ]
  },
  {
    id: 'fd2',
    prompt_ar: 'جيب _____ لو سمحت — asking for the bill',
    prompt_tr: 'jib _____ law sama7t',
    prompt_en: 'Fill in: Bring the _____ please (bill)',
    correct_id: 'fd2_c',
    options: [
      { id: 'fd2_a', ar: 'المنيو', en: 'l-manyu — the menu' },
      { id: 'fd2_b', ar: 'المي', en: 'l-maye — the water' },
      { id: 'fd2_c', ar: 'الحساب', en: 'l-7esab — the bill' },
      { id: 'fd2_d', ar: 'الخبز', en: 'l-khbez — the bread' },
      { id: 'fd2_e', ar: 'الغرسون', en: 'l-garson — the waiter' }
    ]
  },
  {
    id: 'fd3',
    prompt_ar: 'أنا _____ كتير — saying you\'re hungry',
    prompt_tr: 'ana _____ ktir',
    prompt_en: 'Fill in: I\'m very _____ (hungry)',
    correct_id: 'fd3_b',
    options: [
      { id: 'fd3_a', ar: 'عطشان', en: '3atshan — thirsty' },
      { id: 'fd3_b', ar: 'جوعان', en: 'jwe3an — hungry' },
      { id: 'fd3_c', ar: 'طيب', en: 'tayeb — delicious' },
      { id: 'fd3_d', ar: 'تعبان', en: 'ta3ban — tired' },
      { id: 'fd3_e', ar: 'مبسوط', en: 'mabsut — happy' }
    ]
  },
  {
    id: 'fd4',
    prompt_ar: 'بدي _____ مشوي — grilled protein',
    prompt_tr: 'beddi _____ mashwi — I want grilled ?',
    prompt_en: 'Fill in: I want grilled _____ (chicken)',
    correct_id: 'fd4_d',
    options: [
      { id: 'fd4_a', ar: 'سمك', en: 'samak — fish' },
      { id: 'fd4_b', ar: 'خبز', en: 'khbez — bread' },
      { id: 'fd4_c', ar: 'لحمة', en: 'la7me — meat' },
      { id: 'fd4_d', ar: 'دجاج', en: 'djaj — chicken' },
      { id: 'fd4_e', ar: 'حلو', en: '7elou — dessert' }
    ]
  },
  {
    id: 'fd5',
    prompt_ar: 'ممكن تجيب المنيو؟ — what is منيو?',
    prompt_tr: 'mken tjib l-manyu? — what is manyu?',
    prompt_en: 'What does "manyu" mean?',
    correct_id: 'fd5_e',
    options: [
      { id: 'fd5_a', ar: 'طاولة', en: 'tawle — table' },
      { id: 'fd5_b', ar: 'حساب', en: '7esab — bill' },
      { id: 'fd5_c', ar: 'غرسون', en: 'garson — waiter' },
      { id: 'fd5_d', ar: 'طلب', en: 'talab — order' },
      { id: 'fd5_e', ar: 'منيو', en: 'manyu — menu (from French)' }
    ]
  },
  {
    id: 'fd6',
    prompt_ar: 'What do you say to thank someone for a meal?',
    prompt_tr: 'Heartfelt thanks after eating — Lebanese phrase',
    prompt_en: 'Heartfelt thanks after a meal in Lebanese',
    correct_id: 'fd6_b',
    options: [
      { id: 'fd6_a', ar: 'شكراً', en: 'shukran — thank you (generic)' },
      { id: 'fd6_b', ar: 'يسلموا', en: 'yislamo — bless your hands (food thanks)' },
      { id: 'fd6_c', ar: 'مع السلامة', en: 'ma3 l-salame — goodbye' },
      { id: 'fd6_d', ar: 'صحة', en: 'se7a — health/cheers' },
      { id: 'fd6_e', ar: 'تفضل', en: 'tfaddal — here you go/welcome' }
    ]
  },
  {
    id: 'fd7',
    prompt_ar: '_____ معدنية أو عادية؟ — type of water',
    prompt_tr: '_____ ma3daniye aw 3adiye?',
    prompt_en: 'Fill in: _____ mineral or regular? (water)',
    correct_id: 'fd7_a',
    options: [
      { id: 'fd7_a', ar: 'مي', en: 'maye — water (Lebanese dialect)' },
      { id: 'fd7_b', ar: 'قهوة', en: '2ahwe — coffee' },
      { id: 'fd7_c', ar: 'شاي', en: 'shai — tea' },
      { id: 'fd7_d', ar: 'عصير', en: '3asir — juice' },
      { id: 'fd7_e', ar: 'حليب', en: '7alib — milk' }
    ]
  }
];

const FOD_TIPS = [
  '"Garson!" (غرسون) is how you call a waiter in Lebanon — shouted across the restaurant, not rude. From French "garçon". Don\'t use "waiter" — say garson or ya garson to get attention.',
  'Lebanese restaurants almost always bring free bread (khbez). "Jib khbez zyede" (جيب خبز زيادة) = bring more bread — totally acceptable to ask.',
  'Two key water questions: "maye 3adiye aw ma3daniye?" = regular or mineral? Lebanese water (tap) is drinkable in most areas but most people order bottled.',
  '"Yislamo" (يسلموا) after a meal means "bless your hands" — the highest compliment. It acknowledges the cook\'s effort. More meaningful than shukran in food contexts.',
  'The Lebanese food ordering formula: "beddi + [food] + min fadlak/k". Beddi djaj mashwi min fadlak = I want grilled chicken please. Add "w" (and) to chain: beddi djaj w khbez w maye.'
];

const FOD_ABOUT = 'Lebanese food culture is central to social life. Knowing how to order, ask for the bill, express hunger, and compliment food unlocks restaurant confidence. Key phrases: beddi (I want), 7esab (bill), garson (waiter), maye (water), tayeb (delicious), yislamo (thank you for the meal).';
