// Run #17 data — Frequency Tier, Active Recall, Past Narrative
// Prefixes: ft-, ar-, pn-

// ============ FREQUENCY TIER (Top 200 Essentials) ============
// Ranked by colloquial frequency. Tier 1 = absolutely critical, learn first.
// Tier 2 = high-utility daily. Tier 3 = useful but situational.

const FREQ_WORDS = [
  // Tier 1 — pronouns / connectors / yes-no / time
  { tr: 'ana', en: 'I', ar: 'أنا', tier: 1, pos: 'pronoun' },
  { tr: 'inta', en: 'you (m)', ar: 'إنت', tier: 1, pos: 'pronoun' },
  { tr: 'inti', en: 'you (f)', ar: 'إنتي', tier: 1, pos: 'pronoun' },
  { tr: 'huwwe', en: 'he', ar: 'هوي', tier: 1, pos: 'pronoun' },
  { tr: 'hiyye', en: 'she', ar: 'هيي', tier: 1, pos: 'pronoun' },
  { tr: 'n7na', en: 'we', ar: 'نحنا', tier: 1, pos: 'pronoun' },
  { tr: 'intu', en: 'you (pl)', ar: 'إنتو', tier: 1, pos: 'pronoun' },
  { tr: 'hinnen', en: 'they', ar: 'هنّن', tier: 1, pos: 'pronoun' },
  { tr: 'aywa / na3am', en: 'yes', ar: 'أيوا/نعم', tier: 1, pos: 'particle' },
  { tr: 'la2', en: 'no', ar: 'لأ', tier: 1, pos: 'particle' },
  { tr: 'shu', en: 'what', ar: 'شو', tier: 1, pos: 'q-word' },
  { tr: 'wayn', en: 'where', ar: 'وين', tier: 1, pos: 'q-word' },
  { tr: 'lesh', en: 'why', ar: 'ليش', tier: 1, pos: 'q-word' },
  { tr: 'kif', en: 'how', ar: 'كيف', tier: 1, pos: 'q-word' },
  { tr: 'meta', en: 'when', ar: 'متى', tier: 1, pos: 'q-word' },
  { tr: 'min', en: 'who / from', ar: 'مين/من', tier: 1, pos: 'q-word/prep' },
  { tr: 'kam', en: 'how many / how much', ar: 'كم', tier: 1, pos: 'q-word' },
  { tr: 'wa / w', en: 'and', ar: 'و', tier: 1, pos: 'conn' },
  { tr: 'aw', en: 'or', ar: 'أو', tier: 1, pos: 'conn' },
  { tr: 'bas', en: 'but / only', ar: 'بس', tier: 1, pos: 'conn' },
  { tr: 'la2anno', en: 'because', ar: 'لأنّو', tier: 1, pos: 'conn' },
  { tr: 'iza', en: 'if', ar: 'إذا', tier: 1, pos: 'conn' },
  { tr: 'lamma', en: 'when (conj)', ar: 'لمّا', tier: 1, pos: 'conn' },
  { tr: 'ma', en: 'not (verb neg)', ar: 'ما', tier: 1, pos: 'particle' },
  { tr: 'mish', en: 'not (nominal)', ar: 'مش', tier: 1, pos: 'particle' },
  { tr: '3a / 3al', en: 'on / to / at', ar: 'ع', tier: 1, pos: 'prep' },
  { tr: 'min', en: 'from', ar: 'من', tier: 1, pos: 'prep' },
  { tr: 'b / bil', en: 'in / with', ar: 'ب', tier: 1, pos: 'prep' },
  { tr: 'la / la-', en: 'to / for', ar: 'ل', tier: 1, pos: 'prep' },
  { tr: 'ma3', en: 'with', ar: 'مع', tier: 1, pos: 'prep' },
  { tr: 'fi', en: 'there is / in', ar: 'في', tier: 1, pos: 'prep' },
  { tr: 'ma fi', en: 'there is no', ar: 'ما في', tier: 1, pos: 'phrase' },
  { tr: 'el yawm', en: 'today', ar: 'اليوم', tier: 1, pos: 'time' },
  { tr: 'mberi7', en: 'yesterday', ar: 'مبارح', tier: 1, pos: 'time' },
  { tr: 'bukra', en: 'tomorrow', ar: 'بكرا', tier: 1, pos: 'time' },
  { tr: 'halla2', en: 'now', ar: 'هلق', tier: 1, pos: 'time' },
  { tr: 'ba3dein', en: 'later / then', ar: 'بعدين', tier: 1, pos: 'time' },
  { tr: '2abel', en: 'before', ar: 'قبل', tier: 1, pos: 'time/prep' },
  { tr: 'ba3d', en: 'after', ar: 'بعد', tier: 1, pos: 'time/prep' },
  { tr: 'kteer', en: 'a lot / very', ar: 'كتير', tier: 1, pos: 'adv' },

  // Tier 2 — verbs / common adjectives / nouns
  { tr: 'kan', en: 'was/were', ar: 'كان', tier: 2, pos: 'verb' },
  { tr: 'sar', en: 'became / started', ar: 'صار', tier: 2, pos: 'verb' },
  { tr: 'baddi', en: 'I want', ar: 'بدي', tier: 2, pos: 'verb' },
  { tr: 'be7ki', en: 'I speak', ar: 'بحكي', tier: 2, pos: 'verb' },
  { tr: 'ba3ref', en: 'I know', ar: 'بعرف', tier: 2, pos: 'verb' },
  { tr: 'befhem', en: 'I understand', ar: 'بفهم', tier: 2, pos: 'verb' },
  { tr: 'bshouf', en: 'I see', ar: 'بشوف', tier: 2, pos: 'verb' },
  { tr: 'beshrab', en: 'I drink', ar: 'بشرب', tier: 2, pos: 'verb' },
  { tr: 'bewkol', en: 'I eat', ar: 'بوكل', tier: 2, pos: 'verb' },
  { tr: 'brou7', en: 'I go', ar: 'بروح', tier: 2, pos: 'verb' },
  { tr: 'beji', en: 'I come', ar: 'بجي', tier: 2, pos: 'verb' },
  { tr: 'be3mol', en: 'I do / make', ar: 'بعمل', tier: 2, pos: 'verb' },
  { tr: 'be7ib', en: 'I love / like', ar: 'بحب', tier: 2, pos: 'verb' },
  { tr: 'biser', en: 'happens', ar: 'بيصير', tier: 2, pos: 'verb' },
  { tr: 'fiyyi / fik', en: 'I can / you can', ar: 'فيي', tier: 2, pos: 'verb' },
  { tr: 'lazem', en: 'must / have to', ar: 'لازم', tier: 2, pos: 'modal' },
  { tr: 'mumken', en: 'maybe / can', ar: 'ممكن', tier: 2, pos: 'modal' },
  { tr: 'kbir', en: 'big', ar: 'كبير', tier: 2, pos: 'adj' },
  { tr: 'zghir', en: 'small', ar: 'زغير', tier: 2, pos: 'adj' },
  { tr: 'mni7', en: 'good', ar: 'منيح', tier: 2, pos: 'adj' },
  { tr: '3atel', en: 'bad', ar: 'عاطل', tier: 2, pos: 'adj' },
  { tr: 'jdid', en: 'new', ar: 'جديد', tier: 2, pos: 'adj' },
  { tr: '2adim', en: 'old', ar: 'قديم', tier: 2, pos: 'adj' },
  { tr: '7lo', en: 'beautiful / nice', ar: 'حلو', tier: 2, pos: 'adj' },
  { tr: 'bay7', en: 'house', ar: 'بيت', tier: 2, pos: 'noun' },
  { tr: 'bayt', en: 'house', ar: 'بيت', tier: 2, pos: 'noun' },
  { tr: 'sayyara', en: 'car', ar: 'سيارة', tier: 2, pos: 'noun' },
  { tr: 'shoghol', en: 'work', ar: 'شغل', tier: 2, pos: 'noun' },
  { tr: 'wa2t', en: 'time', ar: 'وقت', tier: 2, pos: 'noun' },
  { tr: 'yawm', en: 'day', ar: 'يوم', tier: 2, pos: 'noun' },
  { tr: 'sene', en: 'year', ar: 'سنة', tier: 2, pos: 'noun' },
  { tr: 'sa3a', en: 'hour', ar: 'ساعة', tier: 2, pos: 'noun' },
  { tr: 'wahad', en: 'one', ar: 'واحد', tier: 2, pos: 'num' },
  { tr: 'tnen', en: 'two', ar: 'تنين', tier: 2, pos: 'num' },
  { tr: 'tlete', en: 'three', ar: 'تلاتة', tier: 2, pos: 'num' },
  { tr: 'imm', en: 'mother', ar: 'إم', tier: 2, pos: 'noun' },
  { tr: 'bay', en: 'father', ar: 'باي', tier: 2, pos: 'noun' },
  { tr: 'akh', en: 'brother', ar: 'أخ', tier: 2, pos: 'noun' },
  { tr: 'ekht', en: 'sister', ar: 'أخت', tier: 2, pos: 'noun' },
  { tr: 'sho2t', en: 'apartment', ar: 'شقة', tier: 2, pos: 'noun' },

  // Tier 3 — situational / colour words / weekday names
  { tr: 'akel', en: 'food', ar: 'أكل', tier: 3, pos: 'noun' },
  { tr: 'shareb', en: 'drink', ar: 'شرب', tier: 3, pos: 'noun' },
  { tr: '2ahwe', en: 'coffee', ar: 'قهوة', tier: 3, pos: 'noun' },
  { tr: 'shay', en: 'tea', ar: 'شاي', tier: 3, pos: 'noun' },
  { tr: 'may', en: 'water', ar: 'مي', tier: 3, pos: 'noun' },
  { tr: 'khebez', en: 'bread', ar: 'خبز', tier: 3, pos: 'noun' },
  { tr: 'a7mar', en: 'red', ar: 'أحمر', tier: 3, pos: 'adj' },
  { tr: 'a7zar', en: 'green', ar: 'أخضر', tier: 3, pos: 'adj' },
  { tr: 'azra2', en: 'blue', ar: 'أزرق', tier: 3, pos: 'adj' },
  { tr: 'asfar', en: 'yellow', ar: 'أصفر', tier: 3, pos: 'adj' },
  { tr: 'aswad', en: 'black', ar: 'أسود', tier: 3, pos: 'adj' },
  { tr: 'abyad', en: 'white', ar: 'أبيض', tier: 3, pos: 'adj' },
  { tr: 'el a7ad', en: 'Sunday', ar: 'الأحد', tier: 3, pos: 'time' },
  { tr: 'el etnen', en: 'Monday', ar: 'الإتنين', tier: 3, pos: 'time' },
  { tr: 'el tlete', en: 'Tuesday', ar: 'التلاتة', tier: 3, pos: 'time' },
  { tr: 'el arba3', en: 'Wednesday', ar: 'الأربعا', tier: 3, pos: 'time' },
  { tr: 'el khamis', en: 'Thursday', ar: 'الخميس', tier: 3, pos: 'time' },
  { tr: 'el jem3a', en: 'Friday', ar: 'الجمعة', tier: 3, pos: 'time' },
  { tr: 'el sabt', en: 'Saturday', ar: 'السبت', tier: 3, pos: 'time' },
  { tr: 'sheti', en: 'winter', ar: 'شتي', tier: 3, pos: 'time' },
  { tr: 'sayf', en: 'summer', ar: 'صيف', tier: 3, pos: 'time' },
  { tr: 'rabi3', en: 'spring', ar: 'ربيع', tier: 3, pos: 'time' },
  { tr: 'kharif', en: 'autumn', ar: 'خريف', tier: 3, pos: 'time' },
  { tr: 'walad', en: 'boy', ar: 'ولد', tier: 3, pos: 'noun' },
  { tr: 'bint', en: 'girl', ar: 'بنت', tier: 3, pos: 'noun' },
  { tr: 'rajul', en: 'man', ar: 'رجال', tier: 3, pos: 'noun' },
  { tr: 'mara', en: 'woman', ar: 'مرا', tier: 3, pos: 'noun' },
  { tr: '7adan', en: 'someone', ar: 'حدا', tier: 3, pos: 'pron' },
  { tr: 'mafi 7adan', en: 'no one', ar: 'مافي حدا', tier: 3, pos: 'phrase' },
  { tr: 'kel shi', en: 'everything', ar: 'كل شي', tier: 3, pos: 'phrase' },
  { tr: 'shi', en: 'thing / something', ar: 'شي', tier: 3, pos: 'noun' },
  { tr: 'rasm', en: 'drawing', ar: 'رسم', tier: 3, pos: 'noun' },
  { tr: 'lawn', en: 'color', ar: 'لون', tier: 3, pos: 'noun' },
  { tr: 'ra2em', en: 'number', ar: 'رقم', tier: 3, pos: 'noun' },
  { tr: 'esem', en: 'name', ar: 'اسم', tier: 3, pos: 'noun' },
  { tr: 'jaw', en: 'weather', ar: 'جو', tier: 3, pos: 'noun' }
];

// ============ ACTIVE RECALL CARDS ============
// Pulls from the existing FREQ_WORDS list — random, English → tr typed answer
// Session-tracked: shows accuracy %, words seen, and "missed pile" for review

// ============ PAST NARRATIVE BUILDER ============
// Click sequence of past-tense events to assemble a story.
// Each "scene" has a fixed beginning, then user picks order of middle events,
// then a fixed ending. Reveals canonical narrative.

const PAST_NARRATIVES = [
  {
    title: 'A morning out',
    start: { ar: 'فيقت الساعة سبعة', tr: 'fi2et el se3a sab3a', en: 'I woke up at seven' },
    end: { ar: 'رجعت عالبيت بالمسا', tr: 'rja3et 3al bayt bil mesa', en: 'I came home in the evening' },
    events: [
      { ar: 'شربت قهوة', tr: 'shrebet 2ahwe', en: 'I drank coffee' },
      { ar: 'لبست تيابي', tr: 'lbiset tyebi', en: 'I put on my clothes' },
      { ar: 'نزلت عالشغل', tr: 'nzilet 3al shoghol', en: 'I went down to work' },
      { ar: 'اشتغلت تمن ساعات', tr: 'eshtaghalet tmen se3at', en: 'I worked eight hours' },
      { ar: 'تغديت مع رفقاتي', tr: 'tghaddet ma3 rfe2ati', en: 'I had lunch with my friends' }
    ]
  },
  {
    title: 'Trip to the beach',
    start: { ar: 'الجمعة الماضي قررنا نروح عالبحر', tr: 'el jem3a el madi 2arrarna nrou7 3al ba7r', en: 'Last Friday we decided to go to the sea' },
    end: { ar: 'رجعنا تعبانين بس مبسوطين', tr: 'rja3na ta3benin bas mabsoutin', en: 'We came back tired but happy' },
    events: [
      { ar: 'حضّرنا الأكل', tr: '7addarna el akel', en: 'We prepared the food' },
      { ar: 'ركبنا بالسيارة', tr: 'rkebna bil sayyara', en: 'We got in the car' },
      { ar: 'سحبت ساعتين عالطريق', tr: 'sa7abet sa3tein 3al tari2', en: 'It took two hours on the road' },
      { ar: 'سبحنا بالمي الباردة', tr: 'sba7na bil mai el barde', en: 'We swam in the cold water' },
      { ar: 'أكلنا منقوشة عالشاطئ', tr: 'akalna man2oushe 3al sheti', en: 'We ate manakish on the shore' }
    ]
  },
  {
    title: 'A funny dinner',
    start: { ar: 'مبارح كنا عند ستّي عالعشاء', tr: 'mberi7 kenna 3and setti 3al 3asha', en: 'Yesterday we were at grandma\'s for dinner' },
    end: { ar: 'ضحكنا للصبح', tr: 'di7ekna lal sob7', en: 'We laughed until morning' },
    events: [
      { ar: 'ستّي طبخت ملوخية', tr: 'setti tabkhet mloukhiyye', en: 'Grandma cooked mloukhiye' },
      { ar: 'خيّي حكا نكتة', tr: 'khayyi 7aka nokte', en: 'My brother told a joke' },
      { ar: 'القطّة قفزت عالطاولة', tr: 'el 2ette 2afzet 3al tawle', en: 'The cat jumped on the table' },
      { ar: 'بي وقع من الكرسي', tr: 'bay we2e3 men el kerse', en: 'Dad fell from the chair' },
      { ar: 'كل العيلة بلشت تضحك', tr: 'kel el 3eyle ballashet tedhak', en: 'The whole family started laughing' }
    ]
  }
];
