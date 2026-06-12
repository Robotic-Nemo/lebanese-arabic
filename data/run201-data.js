// Run #201 — Body Parts & Health Coach data
// Lebanese Arabic body vocabulary and health/medical survival phrases

const BDY_WORDS = [
  {
    id: 'bdy_ras', ar: 'راس', tr: 'ras', en: 'head',
    category: 'body', emoji: '🧠',
    usage: 'Ras = head. Btwe3ni rasi = my head hurts. Dwar ras = dizziness (lit. head spinning). Ra2s in MSA.',
    example_ar: 'بتوجعني راسي كتير', example_tr: 'btwaj3ni rasi ktir', example_en: 'My head hurts a lot'
  },
  {
    id: 'bdy_3ein', ar: 'عين', tr: '3ein', en: 'eye',
    category: 'body', emoji: '👁️',
    usage: '3ein = eye (f). 3yun = eyes (plural). 3eini 7amra = my eye is red. Btwe3ni 3eini = my eye hurts.',
    example_ar: 'عيونو حلوة', example_tr: '3yuno 7elwe', example_en: 'His eyes are beautiful'
  },
  {
    id: 'bdy_2udn', ar: 'أذن', tr: '2udn', en: 'ear',
    category: 'body', emoji: '👂',
    usage: '2udn = ear (f). 2udnein = two ears. Btwe3ni 2udni = my ear hurts. Waja3 2udn = ear pain.',
    example_ar: 'بتوجعني أذني', example_tr: 'btwaj3ni 2udni', example_en: 'My ear hurts'
  },
  {
    id: 'bdy_2anf', ar: 'أنف', tr: '2anf', en: 'nose',
    category: 'body', emoji: '👃',
    usage: '2anf = nose (m). 2anfi mesded = my nose is blocked. 2anfi bet2atter = my nose is running.',
    example_ar: 'أنفي مسدود', example_tr: '2anfi mesded', example_en: 'My nose is blocked'
  },
  {
    id: 'bdy_temm', ar: 'تمّ', tr: 'temm', en: 'mouth',
    category: 'body', emoji: '👄',
    usage: 'Temm = mouth (Lebanese). MSA uses "fam". Btwe3ni temmi = my mouth hurts. Fshe7 temak = open your mouth.',
    example_ar: 'افتح تمك', example_tr: 'if ta7 temmak', example_en: 'Open your mouth'
  },
  {
    id: 'bdy_snen', ar: 'سنان', tr: 'snen', en: 'teeth',
    category: 'body', emoji: '🦷',
    usage: 'Snen = teeth (plural). Senne = one tooth. Btwe3ni sneni = my tooth hurts. Tabib snen = dentist.',
    example_ar: 'بتوجعني سنتي', example_tr: 'btwaj3ni snti', example_en: 'My tooth hurts'
  },
  {
    id: 'bdy_2erd', ar: 'رقبة', tr: 'ra2abe', en: 'neck',
    category: 'body', emoji: '🧣',
    usage: 'Ra2abe = neck (f). Btwe3ni ra2abti = my neck hurts. 3ando waja3 ra2abe = he has neck pain.',
    example_ar: 'بتوجعني رقبتي', example_tr: 'btwaj3ni ra2abti', example_en: 'My neck hurts'
  },
  {
    id: 'bdy_ktef', ar: 'كتف', tr: 'ktef', en: 'shoulder',
    category: 'body', emoji: '💪',
    usage: 'Ktef = shoulder (m). Ktefein = shoulders. Btwe3ni ktfi = my shoulder hurts.',
    example_ar: 'بتوجعني كتفي', example_tr: 'btwaj3ni ktfi', example_en: 'My shoulder hurts'
  },
  {
    id: 'bdy_2alb', ar: 'قلب', tr: '2alb', en: 'heart',
    category: 'body', emoji: '❤️',
    usage: '2alb = heart. 3ando waja3 2alb = he has heart pain. 2albi btwe3ni = my heart hurts. Also used metaphorically.',
    example_ar: 'عندو ألم في القلب', example_tr: '3ando alam bi l-2alb', example_en: 'He has pain in his heart'
  },
  {
    id: 'bdy_ma3de', ar: 'معدة', tr: 'ma3de', en: 'stomach',
    category: 'body', emoji: '🫃',
    usage: 'Ma3de = stomach (f). Btwe3ni ma3dti = my stomach hurts. Waja3 ma3de = stomach ache. Very common complaint.',
    example_ar: 'بتوجعني معدتي', example_tr: 'btwaj3ni ma3dti', example_en: 'My stomach hurts'
  },
  {
    id: 'bdy_yed', ar: 'إيد', tr: '2eid', en: 'hand / arm',
    category: 'body', emoji: '✋',
    usage: '2eid = hand/arm (Lebanese). MSA uses "yad". 2idein = two hands. Btwe3ni 2eidi = my hand/arm hurts.',
    example_ar: 'إيدي بتوجعني', example_tr: '2eidi btwaj3ni', example_en: 'My hand/arm hurts'
  },
  {
    id: 'bdy_rej', ar: 'رجل', tr: 'rejl', en: 'foot / leg',
    category: 'body', emoji: '🦵',
    usage: 'Rejl = foot/leg (Lebanese). Rejlein = two legs. Kaser rejlo = he broke his leg. Btwe3ni rejli = my leg hurts.',
    example_ar: 'كسر رجله', example_tr: 'kasar rejlo', example_en: 'He broke his leg'
  },
  {
    id: 'bdy_waja3', ar: 'وجع', tr: 'waja3', en: 'pain / ache',
    category: 'health', emoji: '😣',
    usage: 'Waja3 = pain (noun). 3andi waja3 = I have pain. Waja3 ras = headache. Btwe3ni = it hurts me (verb form).',
    example_ar: 'عندي وجع في ظهري', example_tr: '3andi waja3 bi zahri', example_en: 'I have back pain'
  },
  {
    id: 'bdy_7umme', ar: 'حمى', tr: '7umme', en: 'fever',
    category: 'health', emoji: '🤒',
    usage: '7umme = fever. 3ando 7umme = he has a fever. 2addeish 7araret 7ummtak? = how high is your fever?',
    example_ar: 'عندو حمى عالية', example_tr: '3ando 7umme 3aliye', example_en: 'He has a high fever'
  },
  {
    id: 'bdy_zukam', ar: 'زكام', tr: 'zukam', en: 'cold (illness)',
    category: 'health', emoji: '🤧',
    usage: 'Zukam = cold/flu. 3andi zukam = I have a cold. Mezakkem = I\'m congested/have a cold.',
    example_ar: 'عندي زكام من امبارح', example_tr: '3andi zukam min mbere7', example_en: 'I\'ve had a cold since yesterday'
  },
  {
    id: 'bdy_dawa', ar: 'دوا', tr: 'dawa', en: 'medicine',
    category: 'health', emoji: '💊',
    usage: 'Dawa = medicine (Lebanese). MSA uses "dawa\'". Baddna dawa = we need medicine. Shofit l-dawa = I took the medicine.',
    example_ar: 'بدي دوا للوجع', example_tr: 'beddi dawa la l-waja3', example_en: 'I need medicine for the pain'
  },
  {
    id: 'bdy_tabie', ar: 'طبيب', tr: 'tabie', en: 'doctor',
    category: 'health', emoji: '👨‍⚕️',
    usage: 'Tabie = doctor (formal). Lebanese also say "doktor". Beddi ruh 3and t-tabie = I need to go to the doctor.',
    example_ar: 'بدي روح عند الطبيب', example_tr: 'beddi ru7 3and t-tabie', example_en: 'I need to go to the doctor'
  },
  {
    id: 'bdy_mustashfa', ar: 'مستشفى', tr: 'mustashfa', en: 'hospital',
    category: 'health', emoji: '🏥',
    usage: 'Mustashfa = hospital. Beddi ruh 3al-mustashfa = I need to go to the hospital. Mein akrab mustashfa? = where is the nearest hospital?',
    example_ar: 'وين أقرب مستشفى؟', example_tr: 'wein 2a2rab mustashfa?', example_en: 'Where is the nearest hospital?'
  },
  {
    id: 'bdy_saye3', ar: 'صايع', tr: 'saye3', en: 'not feeling well / bad',
    category: 'health', emoji: '😷',
    usage: 'Saye3 = off/not working right (colloquial). Ana saye3 = I\'m not feeling well/I\'m a mess. Informal way to express feeling bad.',
    example_ar: 'أنا صايع اليوم، ما في ميل', example_tr: 'ana saye3 l-yom, ma fi meil', example_en: 'I\'m not feeling well today, no energy'
  },
  {
    id: 'bdy_bes7a', ar: 'بصحتك', tr: 'be-s7etak', en: 'cheers / to your health',
    category: 'health', emoji: '🥂',
    usage: 'Be-s7etak (to m) / be-s7etik (to f). Cheers when drinking OR said after someone sneezes. Response: Allah y3afik.',
    example_ar: 'بصحتك! — الله يعافيك', example_tr: 'be-s7etak! — allah y3afik', example_en: 'Cheers! — May God keep you healthy'
  }
];

const BDY_DRILLS = [
  {
    id: 'bd1',
    prompt_ar: 'بتوجعني _____ كتير — the pain is in your head',
    prompt_tr: 'btwaj3ni _____ ktir',
    prompt_en: 'Fill in: My _____ hurts a lot (head)',
    correct_id: 'bd1_a',
    options: [
      { id: 'bd1_a', ar: 'راسي', en: 'rasi — my head' },
      { id: 'bd1_b', ar: 'معدتي', en: 'ma3dti — my stomach' },
      { id: 'bd1_c', ar: 'كتفي', en: 'ktfi — my shoulder' },
      { id: 'bd1_d', ar: 'رجلي', en: 'rejli — my leg' },
      { id: 'bd1_e', ar: 'أذني', en: '2udni — my ear' }
    ]
  },
  {
    id: 'bd2',
    prompt_ar: 'عندو _____ عالية — sick with fever',
    prompt_tr: '3ando _____ 3aliye',
    prompt_en: 'Fill in: He has a high _____ (fever)',
    correct_id: 'bd2_c',
    options: [
      { id: 'bd2_c', ar: 'حمى', en: '7umme — fever' },
      { id: 'bd2_a', ar: 'زكام', en: 'zukam — cold' },
      { id: 'bd2_b', ar: 'وجع', en: 'waja3 — pain' },
      { id: 'bd2_d', ar: 'دوا', en: 'dawa — medicine' },
      { id: 'bd2_e', ar: 'طبيب', en: 'tabie — doctor' }
    ]
  },
  {
    id: 'bd3',
    prompt_ar: 'بدي روح عند _____  — I need medical help',
    prompt_tr: 'beddi ru7 3and _____',
    prompt_en: 'Fill in: I need to go to the _____ (doctor)',
    correct_id: 'bd3_d',
    options: [
      { id: 'bd3_a', ar: 'المستشفى', en: 'l-mustashfa — the hospital' },
      { id: 'bd3_b', ar: 'الصيدلية', en: 'l-seydaliye — the pharmacy' },
      { id: 'bd3_c', ar: 'المعدة', en: 'l-ma3de — the stomach' },
      { id: 'bd3_d', ar: 'الطبيب', en: 't-tabie — the doctor' },
      { id: 'bd3_e', ar: 'القلب', en: 'l-2alb — the heart' }
    ]
  },
  {
    id: 'bd4',
    prompt_ar: 'بدي _____ للوجع — need medication',
    prompt_tr: 'beddi _____ la l-waja3',
    prompt_en: 'Fill in: I need _____ for the pain (medicine)',
    correct_id: 'bd4_b',
    options: [
      { id: 'bd4_a', ar: 'طبيب', en: 'tabie — doctor' },
      { id: 'bd4_b', ar: 'دوا', en: 'dawa — medicine' },
      { id: 'bd4_c', ar: 'مستشفى', en: 'mustashfa — hospital' },
      { id: 'bd4_d', ar: 'حمى', en: '7umme — fever' },
      { id: 'bd4_e', ar: 'راس', en: 'ras — head' }
    ]
  },
  {
    id: 'bd5',
    prompt_ar: 'What does "بصحتك" mean?',
    prompt_tr: 'What does be-s7etak mean?',
    prompt_en: 'When do you say "be-s7etak"?',
    correct_id: 'bd5_e',
    options: [
      { id: 'bd5_a', ar: 'مع السلامة', en: 'goodbye' },
      { id: 'bd5_b', ar: 'شفاء عاجل', en: 'get well soon' },
      { id: 'bd5_c', ar: 'صحتين', en: 'double health (after eating)' },
      { id: 'bd5_d', ar: 'تعب وباخر', en: 'I\'m tired' },
      { id: 'bd5_e', ar: 'بصحتك', en: 'cheers / to your health (toasting or after sneeze)' }
    ]
  },
  {
    id: 'bd6',
    prompt_ar: 'أنفي _____ — nasal symptom',
    prompt_tr: '2anfi _____',
    prompt_en: 'Fill in: My nose is _____ (blocked)',
    correct_id: 'bd6_a',
    options: [
      { id: 'bd6_a', ar: 'مسدود', en: 'mesded — blocked' },
      { id: 'bd6_b', ar: 'كبير', en: 'kbir — big' },
      { id: 'bd6_c', ar: 'أحمر', en: 'a7mar — red' },
      { id: 'bd6_d', ar: 'مريح', en: 'mri7 — comfortable' },
      { id: 'bd6_e', ar: 'طويل', en: 'tawil — long' }
    ]
  },
  {
    id: 'bd7',
    prompt_ar: 'وين أقرب _____؟ — seeking urgent care',
    prompt_tr: 'wein 2a2rab _____?',
    prompt_en: 'Fill in: Where is the nearest _____ ? (hospital)',
    correct_id: 'bd7_c',
    options: [
      { id: 'bd7_a', ar: 'طبيب', en: 'tabie — doctor' },
      { id: 'bd7_b', ar: 'صيدلية', en: 'seydaliye — pharmacy' },
      { id: 'bd7_c', ar: 'مستشفى', en: 'mustashfa — hospital' },
      { id: 'bd7_d', ar: 'دوا', en: 'dawa — medicine' },
      { id: 'bd7_e', ar: 'معدة', en: 'ma3de — stomach' }
    ]
  }
];

const BDY_TIPS = [
  'The key pain phrase in Lebanese: "btwe3ni [body part]" = "[body part] hurts me". Btwe3ni rasi = my head hurts, btwe3ni rejli = my leg hurts. Memorize this pattern — it covers 80% of medical complaints.',
  'Lebanese uses "2eid" (إيد) for both hand AND arm — English distinguishes them, Lebanese doesn\'t always. Similarly "rejl" covers foot AND leg. Context clarifies.',
  '"Mezakkem" (مزكم) = I have a cold / I\'m stuffed up. "Zukam" is the noun (the cold), mezakkem is the state. You\'ll hear both. At a pharmacy: "ana mezakkem" tells them everything.',
  '"Be-s7etak / be-s7etik" serves double duty: (1) cheers when drinking — always say this before the first sip, (2) said to someone who sneezes (like "bless you"). The response is "allah y3afik" (may God keep you healthy).',
  'Medical vocabulary that works in Lebanon: "tabie" (doctor), "mustashfa" (hospital), "seydaliye" (pharmacy), "dawa" (medicine). In an emergency: "shu2le!" (emergency!) or "el3anu!" (call for help!) plus any of these words.'
];

const BDY_ABOUT = 'Lebanese body part vocabulary diverges from MSA in key places: "temm" (mouth) vs fam, "2eid" (hand/arm) vs yad, "rejl" (leg/foot) vs rijl. The pain phrase "btwe3ni" is essential. Health phrases like "be-s7etak" (cheers/bless you) show how body vocabulary embeds into daily culture.';
