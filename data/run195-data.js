// Run #195 — Colors & Descriptions Coach data
// Lebanese Arabic colors and basic descriptive adjectives with gender agreement

const CLR_WORDS = [
  {
    id: 'clr_ahmar', ar: 'أحمر', tr: 'a7mar', en: 'red',
    ar_f: 'حمرا', tr_f: '7amra',
    category: 'color', emoji: '🔴',
    usage: 'Adjective agrees with noun gender. Ktab a7mar = red book (m). Sayara 7amra = red car (f). Color comes after noun in Lebanese.',
    example_ar: 'شايل كيس أحمر', example_tr: 'shayyel kees a7mar', example_en: 'Carrying a red bag'
  },
  {
    id: 'clr_azraq', ar: 'أزرق', tr: 'azraq', en: 'blue',
    ar_f: 'زرقا', tr_f: 'zarqa',
    category: 'color', emoji: '🔵',
    usage: 'Azraq (m) / zarqa (f). Ba7er azraq = blue sea. Sama zarqa = blue sky.',
    example_ar: 'السما زرقا اليوم', example_tr: 'l-sama zarqa l-yom', example_en: 'The sky is blue today'
  },
  {
    id: 'clr_akhdar', ar: 'أخضر', tr: 'akhdar', en: 'green',
    ar_f: 'خضرا', tr_f: 'khadra',
    category: 'color', emoji: '🟢',
    usage: 'Akhdar (m) / khadra (f). Shajar akhdar = green tree. 7ashish khadra = green grass.',
    example_ar: 'بدي فستان أخضر', example_tr: 'beddi festen akhdar', example_en: 'I want a green dress'
  },
  {
    id: 'clr_asfar', ar: 'أصفر', tr: 'asfar', en: 'yellow',
    ar_f: 'صفرا', tr_f: 'safra',
    category: 'color', emoji: '🟡',
    usage: 'Asfar (m) / safra (f). Limon asfar = yellow lemon. Ward safra = yellow roses.',
    example_ar: 'الليمون أصفر', example_tr: 'l-lemon asfar', example_en: 'The lemon is yellow'
  },
  {
    id: 'clr_abyad', ar: 'أبيض', tr: 'abyad', en: 'white',
    ar_f: 'بيضا', tr_f: 'beda',
    category: 'color', emoji: '⬜',
    usage: 'Abyad (m) / beda (f). Qamees abyad = white shirt. Sayara beda = white car.',
    example_ar: 'لابس قميص أبيض', example_tr: 'labis qamees abyad', example_en: 'Wearing a white shirt'
  },
  {
    id: 'clr_iswid', ar: 'إسود', tr: 'iswid', en: 'black',
    ar_f: 'سودا', tr_f: 'soda',
    category: 'color', emoji: '⬛',
    usage: 'Iswid (m) / soda (f). Lebanese form — MSA uses aswad. Sha3er iswid = black hair. 3abaya soda = black abaya.',
    example_ar: 'شعرها إسود', example_tr: 'sha3ra iswid', example_en: 'Her hair is black'
  },
  {
    id: 'clr_bunni', ar: 'بني', tr: 'bunni', en: 'brown',
    ar_f: 'بنية', tr_f: 'bunniye',
    category: 'color', emoji: '🟤',
    usage: 'Bunni (m) / bunniye (f). Khashab bunni = brown wood. 3yun bunniye = brown eyes.',
    example_ar: 'عيونو بنية', example_tr: '3yuno bunniye', example_en: 'His eyes are brown'
  },
  {
    id: 'clr_burtuqali', ar: 'برتقالي', tr: 'burtuqali', en: 'orange',
    ar_f: 'برتقالية', tr_f: 'burtuqaliye',
    category: 'color', emoji: '🟠',
    usage: 'Named after the fruit (burtuqal = orange). Burtuqali doesn\'t change much. Most Lebanese just say the same form.',
    example_ar: 'لون برتقالي هلق عم يصير موضة', example_tr: 'lon burtuqali halla2 3am yesir moda', example_en: 'Orange color is trending now'
  },
  {
    id: 'clr_wardi', ar: 'وردي', tr: 'wardi', en: 'pink',
    ar_f: 'وردية', tr_f: 'wardiye',
    category: 'color', emoji: '🩷',
    usage: 'From ward (rose). Wardi (m) / wardiye (f). Festen wardi = pink dress.',
    example_ar: 'البنت لابسة وردي', example_tr: 'l-benet labse wardi', example_en: 'The girl is wearing pink'
  },
  {
    id: 'clr_ramadi', ar: 'رمادي', tr: 'ramadi', en: 'grey',
    ar_f: 'رمادية', tr_f: 'ramadiye',
    category: 'color', emoji: '🩶',
    usage: 'From ramad (ash). Ramadi (m) / ramadiye (f). Sama ramadiye = grey sky.',
    example_ar: 'السما رمادية', example_tr: 'l-sama ramadiye', example_en: 'The sky is grey'
  },
  {
    id: 'clr_kbir', ar: 'كبير', tr: 'kbir', en: 'big',
    ar_f: 'كبيرة', tr_f: 'kbire',
    category: 'size', emoji: '🔎',
    usage: 'Kbir (m) / kbire (f). Beit kbir = big house. Shanta kbire = big bag. Very common adjective.',
    example_ar: 'بيت كبير ومريح', example_tr: 'beit kbir w mri7', example_en: 'A big comfortable house'
  },
  {
    id: 'clr_zghir', ar: 'صغير', tr: 'zghir', en: 'small',
    ar_f: 'صغيرة', tr_f: 'zghire',
    category: 'size', emoji: '🔍',
    usage: 'Zghir (m) / zghire (f). Lebanese pronunciation — MSA is saghir. Walad zghir = small boy.',
    example_ar: 'ولد صغير عم يلعب', example_tr: 'walad zghir 3am yel3ab', example_en: 'A small boy is playing'
  },
  {
    id: 'clr_tawil', ar: 'طويل', tr: 'tawil', en: 'tall / long',
    ar_f: 'طويلة', tr_f: 'tawile',
    category: 'size', emoji: '📏',
    usage: 'Tawil (m) / tawile (f). For both height and length. Rajel tawil = tall man. Tari2 tawil = long road.',
    example_ar: 'هو كتير طويل', example_tr: 'howe ktir tawil', example_en: 'He is very tall'
  },
  {
    id: 'clr_2asir', ar: 'قصير', tr: '2asir', en: 'short',
    ar_f: 'قصيرة', tr_f: '2asire',
    category: 'size', emoji: '📐',
    usage: '2asir (m) / 2asire (f). Opposite of tawil. Shar 2asir = short hair. Benet 2asire = short girl.',
    example_ar: 'بدي شعر قصير', example_tr: 'beddi sha3r 2asir', example_en: 'I want short hair'
  },
  {
    id: 'clr_helou', ar: 'حلو', tr: 'helou', en: 'beautiful / nice / sweet',
    ar_f: 'حلوة', tr_f: 'helwe',
    category: 'quality', emoji: '😍',
    usage: 'Most versatile Lebanese adjective. Helou (m) / helwe (f). Physical beauty, taste (sweet), nice things. Ktir helwe = very beautiful.',
    example_ar: 'يا حلوة هالبنت', example_tr: 'ya helwe hal-benet', example_en: 'Oh what a beautiful girl'
  },
  {
    id: 'clr_ktir', ar: 'كتير', tr: 'ktir', en: 'a lot / very',
    ar_f: 'كتير', tr_f: 'ktir',
    category: 'degree', emoji: '📈',
    usage: 'Functions as adjective (ktir = many/much) or adverb (ktir = very). Ktir mni7 = very good. Fi ktir nas = there are many people.',
    example_ar: 'في كتير ناس هون', example_tr: 'fi ktir nas hon', example_en: 'There are many people here'
  },
  {
    id: 'clr_mni7', ar: 'منيح', tr: 'mni7', en: 'good / fine',
    ar_f: 'منيحة', tr_f: 'mni7a',
    category: 'quality', emoji: '👍',
    usage: 'Mni7 (m) / mni7a (f). Lebanese "good" — MSA uses "jayyid". Kif halak? Mni7 = How are you? Fine. Shi mni7 = a good thing.',
    example_ar: 'الأكل منيح كتير', example_tr: 'l-akl mni7 ktir', example_en: 'The food is very good'
  },
  {
    id: 'clr_shi7', ar: 'شيح', tr: 'shi7', en: 'ugly / bad-looking',
    ar_f: 'شيحة', tr_f: 'shi7a',
    category: 'quality', emoji: '😬',
    usage: 'Shi7 (m) / shi7a (f). Opposite of helou. Lon shi7 = ugly color. Not for people — too rude. Use for objects.',
    example_ar: 'هالمنظر شيح كتير', example_tr: 'hal-manzar shi7 ktir', example_en: 'This view/scene is very ugly'
  },
  {
    id: 'clr_jdid', ar: 'جديد', tr: 'jdid', en: 'new',
    ar_f: 'جديدة', tr_f: 'jdide',
    category: 'quality', emoji: '✨',
    usage: 'Jdid (m) / jdide (f). Sayara jdide = new car. Shi jdid = something new.',
    example_ar: 'اشتريت حذا جديد', example_tr: 'shtareit 7adha jdid', example_en: 'I bought new shoes'
  },
  {
    id: 'clr_2adim', ar: 'قديم', tr: '2adim', en: 'old (thing)',
    ar_f: 'قديمة', tr_f: '2adime',
    category: 'quality', emoji: '🏚️',
    usage: '2adim (m) / 2adime (f). For objects only — use "3juz/3ajuz" for old people. Beit 2adim = old house.',
    example_ar: 'هالبيت قديم بس حلو', example_tr: 'hal-beit 2adim bas helou', example_en: 'This house is old but beautiful'
  }
];

const CLR_DRILLS = [
  {
    id: 'cd1',
    prompt_ar: 'السما _____ اليوم — لون السما',
    prompt_tr: 'l-sama _____ l-yom — color of sky',
    prompt_en: 'The sky is _____ today (feminine noun)',
    correct_id: 'cd1_b',
    options: [
      { id: 'cd1_a', ar: 'أزرق', en: 'azraq — blue (m form)' },
      { id: 'cd1_b', ar: 'زرقا', en: 'zarqa — blue (f form)' },
      { id: 'cd1_c', ar: 'أخضر', en: 'akhdar — green (m)' },
      { id: 'cd1_d', ar: 'رمادي', en: 'ramadi — grey (m)' },
      { id: 'cd1_e', ar: 'أبيض', en: 'abyad — white (m)' }
    ]
  },
  {
    id: 'cd2',
    prompt_ar: 'لابس قميص _____ — قميص = shirt (m)',
    prompt_tr: 'labis qamees _____ — qamees is masculine',
    prompt_en: 'Wearing a white shirt (shirt is masculine)',
    correct_id: 'cd2_a',
    options: [
      { id: 'cd2_a', ar: 'أبيض', en: 'abyad — white (m)' },
      { id: 'cd2_b', ar: 'بيضا', en: 'beda — white (f form)' },
      { id: 'cd2_c', ar: 'إسود', en: 'iswid — black (m)' },
      { id: 'cd2_d', ar: 'سودا', en: 'soda — black (f)' },
      { id: 'cd2_e', ar: 'بني', en: 'bunni — brown (m)' }
    ]
  },
  {
    id: 'cd3',
    prompt_ar: 'هالبنت _____ كتير — البنت = the girl',
    prompt_tr: 'hal-benet _____ ktir — the girl is very ?',
    prompt_en: 'This girl is very beautiful (f subject)',
    correct_id: 'cd3_c',
    options: [
      { id: 'cd3_a', ar: 'حلو', en: 'helou — beautiful (m form)' },
      { id: 'cd3_b', ar: 'منيح', en: 'mni7 — good (m form)' },
      { id: 'cd3_c', ar: 'حلوة', en: 'helwe — beautiful (f form)' },
      { id: 'cd3_d', ar: 'كبير', en: 'kbir — big (m)' },
      { id: 'cd3_e', ar: 'طويلة', en: 'tawile — tall (f)' }
    ]
  },
  {
    id: 'cd4',
    prompt_ar: 'الأكل _____ كتير — الأكل = food (m)',
    prompt_tr: 'l-akl _____ ktir — food is very ?',
    prompt_en: 'The food is very good (akl is masculine)',
    correct_id: 'cd4_b',
    options: [
      { id: 'cd4_a', ar: 'منيحة', en: 'mni7a — good (f)' },
      { id: 'cd4_b', ar: 'منيح', en: 'mni7 — good (m)' },
      { id: 'cd4_c', ar: 'حلوة', en: 'helwe — sweet (f)' },
      { id: 'cd4_d', ar: 'شيح', en: 'shi7 — ugly' },
      { id: 'cd4_e', ar: 'قديم', en: '2adim — old' }
    ]
  },
  {
    id: 'cd5',
    prompt_ar: 'اشتريت سيارة _____ — سيارة = car (f)',
    prompt_tr: 'shtareit sayara _____ — sayara is feminine',
    prompt_en: 'I bought a new car (sayara is feminine)',
    correct_id: 'cd5_e',
    options: [
      { id: 'cd5_a', ar: 'جديد', en: 'jdid — new (m form)' },
      { id: 'cd5_b', ar: 'أحمر', en: 'a7mar — red (m)' },
      { id: 'cd5_c', ar: 'كبير', en: 'kbir — big (m)' },
      { id: 'cd5_d', ar: 'أبيض', en: 'abyad — white (m)' },
      { id: 'cd5_e', ar: 'جديدة', en: 'jdide — new (f form)' }
    ]
  },
  {
    id: 'cd6',
    prompt_ar: 'What does "حلو / حلوة" mean in Lebanese?',
    prompt_tr: 'What does helou/helwe mean?',
    prompt_en: 'What does helou/helwe mean?',
    correct_id: 'cd6_a',
    options: [
      { id: 'cd6_a', ar: 'حلو/حلوة = beautiful/sweet/nice', en: 'beautiful, sweet, nice — all three' },
      { id: 'cd6_b', ar: 'حلو = only beautiful', en: 'only physical beauty' },
      { id: 'cd6_c', ar: 'حلو = only sweet food', en: 'only for food taste' },
      { id: 'cd6_d', ar: 'حلو = good/fine', en: 'same as mni7' },
      { id: 'cd6_e', ar: 'حلو = tall', en: 'height description' }
    ]
  },
  {
    id: 'cd7',
    prompt_ar: 'هالبيت _____ بس منيح — old but nice',
    prompt_tr: 'hal-beit _____ bas mni7',
    prompt_en: 'This house is old but nice (beit = house, m)',
    correct_id: 'cd7_c',
    options: [
      { id: 'cd7_a', ar: 'قديمة', en: '2adime — old (f form)' },
      { id: 'cd7_b', ar: 'صغير', en: 'zghir — small' },
      { id: 'cd7_c', ar: 'قديم', en: '2adim — old (m form)' },
      { id: 'cd7_d', ar: 'جديد', en: 'jdid — new' },
      { id: 'cd7_e', ar: 'إسود', en: 'iswid — black' }
    ]
  }
];

const CLR_TIPS = [
  'Lebanese adjectives agree with the noun\'s grammatical gender. Masculine nouns take the base form (a7mar, kbir, helou). Feminine nouns take the -a/-e ending (7amra, kbire, helwe). When in doubt, add -e/-a to the feminine.',
  '"Helou" (حلو) is the most flexible Lebanese adjective — it covers beauty, sweetness, and general niceness. "Ya helou!" as an exclamation means "how lovely!" or "how sweet!". Helou is your go-to compliment word.',
  'Lebanese color adjectives have irregular feminine forms: a7mar→7amra, azraq→zarqa, akhdar→khadra, asfar→safra, abyad→beda, iswid→soda. These are the classic Pattern II colors inherited from Arabic root morphology.',
  '"Ktir" (كتير) is both an adjective (many/much: ktir nas = many people) and an adverb of degree (very: ktir mni7 = very good). It\'s the most common intensifier in Lebanese — more common than "jiddan" from MSA.',
  'For "old" in Lebanese: use "2adim" (قديم) for objects and things, but "3juz" (عجوز) for an old person. Calling a person "2adim" sounds weird — it\'s for houses, cars, books, etc.'
];

const CLR_ABOUT = 'Lebanese Arabic adjectives follow noun-adjective order (noun first) and must agree in gender with the noun. Colors have distinctive feminine forms. Core adjectives like helou/helwe (beautiful), mni7/mni7a (good), kbir/kbire (big) are essential for daily description. Ktir (very/many) is the universal intensifier.';
