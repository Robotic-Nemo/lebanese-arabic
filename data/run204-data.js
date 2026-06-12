// Run #204 — Transportation & Directions Coach data
// Lebanese Arabic navigation, transport vocab, and directions survival

const DIR_WORDS = [
  {
    id: 'dir_wein', ar: 'وين', tr: 'wein', en: 'where (location)',
    category: 'directions', emoji: '📍',
    usage: 'Wein = where (static location). Wein l-maw2if? = where is the stop? Core navigation question word.',
    example_ar: 'وين المحطة؟', example_tr: 'wein l-ma7atta?', example_en: 'Where is the station?'
  },
  {
    id: 'dir_lawein', ar: 'لوين', tr: 'la wein', en: 'where to (direction)',
    category: 'directions', emoji: '🗺️',
    usage: 'La wein = where to (movement). La wein rayeh? = where are you going? Essential for taxis/transport.',
    example_ar: 'لوين رايح؟', example_tr: 'la wein raye7?', example_en: 'Where are you going (to)?'
  },
  {
    id: 'dir_ymin', ar: 'يمين', tr: 'ymin', en: 'right',
    category: 'directions', emoji: '➡️',
    usage: '3al-ymin = to the right. Du2 3al-ymin = turn right. Opposite of shemal (left).',
    example_ar: 'دق على اليمين', example_tr: 'du2 3al-ymin', example_en: 'Turn right'
  },
  {
    id: 'dir_shemal', ar: 'شمال', tr: 'shemal', en: 'left',
    category: 'directions', emoji: '⬅️',
    usage: '3ash-shemal = to the left. Du2 3ash-shemal = turn left. Note: shemal also means "north" in other contexts.',
    example_ar: 'دق على الشمال', example_tr: 'du2 3ash-shemal', example_en: 'Turn left'
  },
  {
    id: 'dir_2uddem', ar: 'قدام', tr: '2uddem', en: 'straight / in front',
    category: 'directions', emoji: '⬆️',
    usage: '2uddem = ahead/in front. Ruh 2uddem = go straight. 2uddami = in front of me. Also used as "before" in time.',
    example_ar: 'روح قدام شوي', example_tr: 'ru7 2uddem shwayye', example_en: 'Go straight a bit'
  },
  {
    id: 'dir_wara', ar: 'ورا', tr: 'wara', en: 'behind / back',
    category: 'directions', emoji: '⬇️',
    usage: 'Wara = behind / back. Ruj3a wara = go back. Wara l-beit = behind the house.',
    example_ar: 'المحل ورا الكنيسة', example_tr: 'l-ma7all wara l-kniise', example_en: 'The shop is behind the church'
  },
  {
    id: 'dir_2arib', ar: 'قريب', tr: '2arib', en: 'close / nearby',
    category: 'directions', emoji: '🔵',
    usage: '2arib = close/near. 2arib men hon = close from here. 2arib ktir = very close.',
    example_ar: 'هو قريب من هون؟', example_tr: 'howe 2arib men hon?', example_en: 'Is it close from here?'
  },
  {
    id: 'dir_b3id', ar: 'بعيد', tr: 'b3id', en: 'far',
    category: 'directions', emoji: '🔴',
    usage: 'B3id = far. B3id ktir = very far. Shu b3id? = how far? Opposite of 2arib.',
    example_ar: 'بعيد كتير عن البلد', example_tr: 'b3id ktir 3an l-balad', example_en: 'Very far from downtown'
  },
  {
    id: 'dir_taxi', ar: 'تاكسي', tr: 'taksi', en: 'taxi',
    category: 'transport', emoji: '🚕',
    usage: 'Taksi = taxi. Service = shared taxi (servis). Jib taksi = get a taxi. Taksi bi-3adad = metered taxi.',
    example_ar: 'وين ممكن لاقي تاكسي؟', example_tr: 'wein mken la2i taksi?', example_en: 'Where can I find a taxi?'
  },
  {
    id: 'dir_servis', ar: 'سيرفيس', tr: 'servis', en: 'shared taxi',
    category: 'transport', emoji: '🚐',
    usage: 'Servis = shared taxi (very Lebanese). Fixed routes, shared with strangers, cheap. Say your destination, driver tells you yes/no.',
    example_ar: 'في سيرفيس على وسط البلد؟', example_tr: 'fi servis 3a wast l-balad?', example_en: 'Is there a shared taxi to downtown?'
  },
  {
    id: 'dir_bus', ar: 'باص', tr: 'bas', en: 'bus',
    category: 'transport', emoji: '🚌',
    usage: 'Bas = bus. Maw2if bas = bus stop. Shu rak m l-bas? = what bus number? Lebanese buses are informal.',
    example_ar: 'وين مرق الباص؟', example_tr: 'wein mara2 l-bas?', example_en: 'Where does the bus pass?'
  },
  {
    id: 'dir_sayara', ar: 'سيارة', tr: 'sayara', en: 'car',
    category: 'transport', emoji: '🚗',
    usage: 'Sayara = car. Ijjar sayara = rent a car. Baddna nruh b-sayara = we\'re going by car.',
    example_ar: 'بدنا نروح بالسيارة', example_tr: 'badna nru7 b-sayara', example_en: 'We\'re going by car'
  },
  {
    id: 'dir_ma7atta', ar: 'محطة', tr: 'ma7atta', en: 'station / stop',
    category: 'transport', emoji: '🚉',
    usage: 'Ma7atta = station/stop. Ma7attet bas = bus stop. Ma7attet benzin = gas station.',
    example_ar: 'نزلني عند المحطة', example_tr: 'nazzilni 3and l-ma7atta', example_en: 'Drop me off at the station'
  },
  {
    id: 'dir_tari2', ar: 'طريق', tr: 'tari2', en: 'road / way',
    category: 'navigation', emoji: '🛣️',
    usage: 'Tari2 = road/way. Shu l-tari2 la X? = what\'s the way to X? Tari2 el-matar = airport road.',
    example_ar: 'شو الطريق على المطار؟', example_tr: 'shu t-tari2 3al-matar?', example_en: 'What\'s the way to the airport?'
  },
  {
    id: 'dir_dawwer', ar: 'دوّار', tr: 'dawwar', en: 'roundabout / circle',
    category: 'navigation', emoji: '🔄',
    usage: 'Dawwar = roundabout. Lebanese directions always reference roundabouts — "du2 3and d-dawwar" = turn at the roundabout.',
    example_ar: 'دق عند الدوار', example_tr: 'du2 3and d-dawwar', example_en: 'Turn at the roundabout'
  },
  {
    id: 'dir_3alla', ar: 'على', tr: '3alla', en: 'on / at / to (direction)',
    category: 'navigation', emoji: '↗️',
    usage: '3alla = on/at/toward. Ruh 3a l-ymin = go toward the right. 3a Beirut = toward Beirut. Extremely common.',
    example_ar: 'روح على اليمين بعد الدوار', example_tr: 'ru7 3al-ymin ba3d d-dawwar', example_en: 'Go right after the roundabout'
  },
  {
    id: 'dir_ba3d', ar: 'بعد', tr: 'ba3d', en: 'after / past',
    category: 'navigation', emoji: '⏭️',
    usage: 'Ba3d = after/past (in directions and time). Ba3d l-ishareh = after the traffic light. Ba3d shwayye = a little further.',
    example_ar: 'بعد الإشارة دق يسار', example_tr: 'ba3d l-ishara du2 ysar', example_en: 'After the traffic light, turn left'
  },
  {
    id: 'dir_ishareh', ar: 'إشارة', tr: 'ishare', en: 'traffic light',
    category: 'navigation', emoji: '🚦',
    usage: 'Ishare = traffic light. 3and l-ishare = at the traffic light. Very common direction landmark in Lebanon.',
    example_ar: 'وقف عند الإشارة', example_tr: 'wa2if 3and l-ishare', example_en: 'Stop at the traffic light'
  },
  {
    id: 'dir_nazzilni', ar: 'نزّلني', tr: 'nazzilni', en: 'drop me off',
    category: 'transport', emoji: '🚏',
    usage: 'Nazzilni = drop me off (imperative). Nazzilni hon = drop me off here. Essential phrase for taxis and servis.',
    example_ar: 'نزّلني هون من فضلك', example_tr: 'nazzilni hon min fadlak', example_en: 'Drop me off here please'
  },
  {
    id: 'dir_2addeis_b3id', ar: 'قديش بعيد', tr: '2addeish b3id', en: 'how far',
    category: 'navigation', emoji: '📏',
    usage: '2addeish b3id = how far. 2addeish b3id l-matar? = how far is the airport? Useful for planning travel.',
    example_ar: 'قديش بعيد المطار من هون؟', example_tr: '2addeish b3id l-matar men hon?', example_en: 'How far is the airport from here?'
  }
];

const DIR_DRILLS = [
  {
    id: 'dd1',
    prompt_ar: 'دق على _____ — turning right',
    prompt_tr: 'du2 3al-_____',
    prompt_en: 'Fill in: Turn _____ (right)',
    correct_id: 'dd1_a',
    options: [
      { id: 'dd1_a', ar: 'اليمين', en: 'l-ymin — right' },
      { id: 'dd1_b', ar: 'الشمال', en: 'l-shemal — left' },
      { id: 'dd1_c', ar: 'قدام', en: '2uddem — straight' },
      { id: 'dd1_d', ar: 'ورا', en: 'wara — behind' },
      { id: 'dd1_e', ar: 'الدوار', en: 'l-dawwar — roundabout' }
    ]
  },
  {
    id: 'dd2',
    prompt_ar: 'نزّلني _____ من فضلك — asking to stop',
    prompt_tr: 'nazzilni _____ min fadlak',
    prompt_en: 'Fill in: Drop me off _____ please (here)',
    correct_id: 'dd2_c',
    options: [
      { id: 'dd2_a', ar: 'بعيد', en: 'b3id — far' },
      { id: 'dd2_b', ar: 'قريب', en: '2arib — close' },
      { id: 'dd2_c', ar: 'هون', en: 'hon — here' },
      { id: 'dd2_d', ar: 'هناك', en: 'hnek — there' },
      { id: 'dd2_e', ar: 'قدام', en: '2uddem — ahead' }
    ]
  },
  {
    id: 'dd3',
    prompt_ar: 'وين ممكن لاقي _____؟ — finding transport',
    prompt_tr: 'wein mken la2i _____?',
    prompt_en: 'Fill in: Where can I find a _____ ? (taxi)',
    correct_id: 'dd3_b',
    options: [
      { id: 'dd3_a', ar: 'سيرفيس', en: 'servis — shared taxi' },
      { id: 'dd3_b', ar: 'تاكسي', en: 'taksi — taxi' },
      { id: 'dd3_c', ar: 'باص', en: 'bas — bus' },
      { id: 'dd3_d', ar: 'سيارة', en: 'sayara — car' },
      { id: 'dd3_e', ar: 'محطة', en: 'ma7atta — station' }
    ]
  },
  {
    id: 'dd4',
    prompt_ar: 'بعد الإشارة دق _____ — next direction',
    prompt_tr: 'ba3d l-ishara du2 _____',
    prompt_en: 'Fill in: After the traffic light, turn _____ (left)',
    correct_id: 'dd4_d',
    options: [
      { id: 'dd4_a', ar: 'اليمين', en: 'l-ymin — right' },
      { id: 'dd4_b', ar: 'قدام', en: '2uddem — straight' },
      { id: 'dd4_c', ar: 'الدوار', en: 'l-dawwar — roundabout' },
      { id: 'dd4_d', ar: 'الشمال', en: 'l-shemal — left' },
      { id: 'dd4_e', ar: 'ورا', en: 'wara — back' }
    ]
  },
  {
    id: 'dd5',
    prompt_ar: 'What is a "سيرفيس" in Lebanon?',
    prompt_tr: 'What is a servis?',
    prompt_en: 'What is a servis in Lebanese transport?',
    correct_id: 'dd5_e',
    options: [
      { id: 'dd5_a', ar: 'تاكسي خاص', en: 'private taxi' },
      { id: 'dd5_b', ar: 'باص كبير', en: 'large bus' },
      { id: 'dd5_c', ar: 'قطار', en: 'train' },
      { id: 'dd5_d', ar: 'أوتوبيس سياحي', en: 'tourist bus' },
      { id: 'dd5_e', ar: 'تاكسي مشترك', en: 'shared taxi on fixed routes (servis)' }
    ]
  },
  {
    id: 'dd6',
    prompt_ar: 'هل هو _____ من هون؟ — asking about distance',
    prompt_tr: 'howe _____ men hon?',
    prompt_en: 'Fill in: Is it _____ from here? (close)',
    correct_id: 'dd6_a',
    options: [
      { id: 'dd6_a', ar: 'قريب', en: '2arib — close' },
      { id: 'dd6_b', ar: 'بعيد', en: 'b3id — far' },
      { id: 'dd6_c', ar: 'وراء', en: 'wara — behind' },
      { id: 'dd6_d', ar: 'قدام', en: '2uddem — ahead' },
      { id: 'dd6_e', ar: 'طويل', en: 'tawil — long' }
    ]
  },
  {
    id: 'dd7',
    prompt_ar: 'روح _____ شوي — heading forward',
    prompt_tr: 'ru7 _____ shwayye',
    prompt_en: 'Fill in: Go _____ a bit (straight/ahead)',
    correct_id: 'dd7_c',
    options: [
      { id: 'dd7_a', ar: 'ورا', en: 'wara — back' },
      { id: 'dd7_b', ar: 'يمين', en: 'ymin — right' },
      { id: 'dd7_c', ar: 'قدام', en: '2uddem — straight ahead' },
      { id: 'dd7_d', ar: 'شمال', en: 'shemal — left' },
      { id: 'dd7_e', ar: 'بعيد', en: 'b3id — far' }
    ]
  }
];

const DIR_TIPS = [
  'The Lebanese "servis" (سيرفيس) is the backbone of cheap transport. It\'s a shared taxi on a fixed route — you say your destination, the driver says yes/no. Pay a fixed rate (ask "2addeish l-servis la X?"). Tourists miss it entirely and overpay for private taxis.',
  'Lebanese direction vocabulary uses roundabouts (dawwar) as primary landmarks. "Du2 3and d-dawwar" = turn at the roundabout. Dawwars have names — Dawwar l-Cola, Dawwar Sodeco. Learn the major ones for Beirut.',
  '"La wein?" vs "wein?": wein asks about static location (where IS the station?), la wein asks about movement destination (where are you GOING?). Critical for taxis — drivers ask "la wein?" not "wein?".',
  '"Nazzilni" (نزّلني) = drop me off. Add "hon" (here) for immediate stop. "Nazzilni 3and l-ishare" = drop me off at the light. Shouting "hon! hon!" also works in a pinch.',
  'Lebanese traffic directions chain with "ba3d" (after) and "3and" (at). "Ruh 2uddem, ba3d d-dawwar du2 3al-ymin, w ba3d l-ishare shemal" = go straight, after the roundabout turn right, then after the light go left. Practice this pattern.'
];

const DIR_ABOUT = 'Lebanese transport relies on taxis (taksi) and shared taxis (servis) far more than buses. Direction vocabulary uses landmarks: roundabouts (dawwar), traffic lights (ishare), and relative words (ymin/shemal/2uddem/wara). "Nazzilni hon" (drop me off here) and "la wein?" (where to?) are essential taxi phrases.';
