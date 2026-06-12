// Run #189 — Question Words Coach data
// Lebanese Arabic question words with usage patterns and contextual drills

const QWD_WORDS = [
  {
    id: 'qw_shu', ar: 'شو', tr: 'shu', en: 'what',
    category: 'basic', emoji: '❓',
    usage: 'Most common question word. Shu 3andak = what do you have. Shu fi = what\'s up/what\'s there.',
    example_ar: 'شو بتحب تاكل؟', example_tr: 'shu bt7ebb tekol?', example_en: 'What do you like to eat?'
  },
  {
    id: 'qw_min', ar: 'مين', tr: 'min', en: 'who',
    category: 'basic', emoji: '🙋',
    usage: 'Who. Min inta = who are you. Min howe = who is he. Can also mean "from" in other contexts — context distinguishes.',
    example_ar: 'مين بيجي معنا؟', example_tr: 'min biji ma3na?', example_en: 'Who is coming with us?'
  },
  {
    id: 'qw_wein', ar: 'وين', tr: 'wein', en: 'where',
    category: 'basic', emoji: '📍',
    usage: 'Where (location). Wein hayyek = where are you. Lebanese form of the MSA \'ayna (أين).',
    example_ar: 'وين بيتكون؟', example_tr: 'wein beitkon?', example_en: 'Where is your house?'
  },
  {
    id: 'qw_2emta', ar: 'إيمتى', tr: '2emta', en: 'when',
    category: 'basic', emoji: '⏰',
    usage: 'When. 2emta ra7 tiji = when will you come. Can also be used mid-sentence: ma 3arif 2emta = I don\'t know when.',
    example_ar: 'إيمتى بترجع؟', example_tr: '2emta btrja3?', example_en: 'When are you coming back?'
  },
  {
    id: 'qw_kif', ar: 'كيف', tr: 'kif', en: 'how',
    category: 'basic', emoji: '🔄',
    usage: 'How. Kif halak/halik = how are you (m/f). Kif 3amleh = how is it done. Also used in "kif kif" = same/equivalent.',
    example_ar: 'كيف حالك؟', example_tr: 'kif 7alak?', example_en: 'How are you?'
  },
  {
    id: 'qw_leish', ar: 'ليش', tr: 'leish', en: 'why',
    category: 'basic', emoji: '🤔',
    usage: 'Why. Leish ma jit = why didn\'t you come. Lebanese form — MSA uses "limadha" (لماذا). Very commonly shortened.',
    example_ar: 'ليش ما اتصلت؟', example_tr: 'leish ma ittasalt?', example_en: 'Why didn\'t you call?'
  },
  {
    id: 'qw_2addeish', ar: 'قديش', tr: '2addeish', en: 'how much / how many',
    category: 'basic', emoji: '💰',
    usage: 'How much (price) or how many. 2addeish il-7eseb = how much is the bill. Essential for shopping.',
    example_ar: 'قديش هالكيلو؟', example_tr: '2addeish hal-kilo?', example_en: 'How much is this kilo?'
  },
  {
    id: 'qw_ayya', ar: 'أي', tr: 'ayya', en: 'which',
    category: 'basic', emoji: '🔀',
    usage: 'Which. Ayya 7aga = which thing. Ayya wa7ad = which one. Stays the same regardless of gender.',
    example_ar: 'أي واحد بتحب؟', example_tr: 'ayya wa7ad bt7ebb?', example_en: 'Which one do you like?'
  },
  {
    id: 'qw_lawein', ar: 'لوين', tr: 'la wein', en: 'where to',
    category: 'compound', emoji: '🗺️',
    usage: 'Where to (direction of movement). La + wein = to where. La wein rayeh = where are you going (to).',
    example_ar: 'لوين رايح؟', example_tr: 'la wein raye7?', example_en: 'Where are you going?'
  },
  {
    id: 'qw_minwein', ar: 'من وين', tr: 'min wein', en: 'from where',
    category: 'compound', emoji: '🌍',
    usage: 'From where. Min + wein = from where. Min wein inta = where are you from. Key phrase for meeting people.',
    example_ar: 'من وين إنت؟', example_tr: 'min wein inta?', example_en: 'Where are you from?'
  }
];

const QWD_DRILLS = [
  {
    id: 'qd1',
    prompt_ar: '_____ بتحب تاكل؟',
    prompt_tr: '_____ bt7ebb tekol?',
    prompt_en: 'Fill in: _____ do you like to eat?',
    correct_id: 'qd1_a',
    options: [
      { id: 'qd1_a', ar: 'شو', en: 'shu — what' },
      { id: 'qd1_b', ar: 'مين', en: 'min — who' },
      { id: 'qd1_c', ar: 'وين', en: 'wein — where' },
      { id: 'qd1_d', ar: 'إيمتى', en: '2emta — when' },
      { id: 'qd1_e', ar: 'قديش', en: '2addeish — how much' }
    ]
  },
  {
    id: 'qd2',
    prompt_ar: '_____ رايح؟',
    prompt_tr: '_____ raye7?',
    prompt_en: 'Fill in: _____ are you going (direction)?',
    correct_id: 'qd2_c',
    options: [
      { id: 'qd2_a', ar: 'وين', en: 'wein — where (location)' },
      { id: 'qd2_b', ar: 'من وين', en: 'min wein — from where' },
      { id: 'qd2_c', ar: 'لوين', en: 'la wein — where to' },
      { id: 'qd2_d', ar: 'كيف', en: 'kif — how' },
      { id: 'qd2_e', ar: 'إيمتى', en: '2emta — when' }
    ]
  },
  {
    id: 'qd3',
    prompt_ar: '_____ هالكيلو؟',
    prompt_tr: '_____ hal-kilo?',
    prompt_en: 'Fill in: _____ is this kilo? (price)',
    correct_id: 'qd3_b',
    options: [
      { id: 'qd3_a', ar: 'شو', en: 'shu — what' },
      { id: 'qd3_b', ar: 'قديش', en: '2addeish — how much' },
      { id: 'qd3_c', ar: 'أي', en: 'ayya — which' },
      { id: 'qd3_d', ar: 'ليش', en: 'leish — why' },
      { id: 'qd3_e', ar: 'مين', en: 'min — who' }
    ]
  },
  {
    id: 'qd4',
    prompt_ar: '_____ ما اتصلت؟',
    prompt_tr: '_____ ma ittasalt?',
    prompt_en: 'Fill in: _____ didn\'t you call?',
    correct_id: 'qd4_d',
    options: [
      { id: 'qd4_a', ar: 'إيمتى', en: '2emta — when' },
      { id: 'qd4_b', ar: 'كيف', en: 'kif — how' },
      { id: 'qd4_c', ar: 'وين', en: 'wein — where' },
      { id: 'qd4_d', ar: 'ليش', en: 'leish — why' },
      { id: 'qd4_e', ar: 'من وين', en: 'min wein — from where' }
    ]
  },
  {
    id: 'qd5',
    prompt_ar: '_____ إنت؟ — أنا من لبنان',
    prompt_tr: '_____ inta? — ana min lebnen',
    prompt_en: 'Fill in: _____ are you? — I\'m from Lebanon',
    correct_id: 'qd5_e',
    options: [
      { id: 'qd5_a', ar: 'مين', en: 'min — who' },
      { id: 'qd5_b', ar: 'وين', en: 'wein — where (location)' },
      { id: 'qd5_c', ar: 'لوين', en: 'la wein — where to' },
      { id: 'qd5_d', ar: 'إيمتى', en: '2emta — when' },
      { id: 'qd5_e', ar: 'من وين', en: 'min wein — from where' }
    ]
  },
  {
    id: 'qd6',
    prompt_ar: '_____ بيجي معنا البرا؟',
    prompt_tr: '_____ biji ma3na l-barra?',
    prompt_en: 'Fill in: _____ is coming outside with us?',
    correct_id: 'qd6_b',
    options: [
      { id: 'qd6_a', ar: 'شو', en: 'shu — what' },
      { id: 'qd6_b', ar: 'مين', en: 'min — who' },
      { id: 'qd6_c', ar: 'كيف', en: 'kif — how' },
      { id: 'qd6_d', ar: 'أي', en: 'ayya — which' },
      { id: 'qd6_e', ar: 'قديش', en: '2addeish — how much' }
    ]
  },
  {
    id: 'qd7',
    prompt_ar: '_____ واحد بتحب — هاد أو هداك؟',
    prompt_tr: '_____ wa7ad bt7ebb — hed aw hedek?',
    prompt_en: 'Fill in: _____ one do you like — this one or that one?',
    correct_id: 'qd7_a',
    options: [
      { id: 'qd7_a', ar: 'أي', en: 'ayya — which' },
      { id: 'qd7_b', ar: 'شو', en: 'shu — what' },
      { id: 'qd7_c', ar: 'مين', en: 'min — who' },
      { id: 'qd7_d', ar: 'ليش', en: 'leish — why' },
      { id: 'qd7_e', ar: 'إيمتى', en: '2emta — when' }
    ]
  }
];

const QWD_TIPS = [
  '"Shu" (شو) is the Swiss army knife of Lebanese questions. It works for "what", "why" (colloquially), "what\'s up", and even as an exclamation. Shu ya3ni = what do you mean / like what?',
  'Lebanese "wein" (وين) vs "la wein" (لوين): wein asks about a static location ("where is the restaurant?"), la wein asks about destination or direction of movement ("where are you going?").',
  '"2addeish" (قديش) is your shopping survival word. 2addeish = how much (price) or how many. Unlike English "how much/many", Lebanese uses one word for both.',
  '"Min wein inta/inti?" (من وين إنت/إنتي؟) is one of the first questions Lebanese people will ask you. "Ana min amreeka/ingilterra/fransawi" = I\'m from America/England/France.',
  'Lebanese "leish" (ليش) replaced the MSA "limadha" (لماذا) completely. Never use limadha in conversation — it sounds like a formal news broadcast, not human speech.'
];

const QWD_ABOUT = 'Lebanese Arabic question words differ significantly from MSA. "Shu" (what), "min" (who), "wein" (where) and "leish" (why) are pure dialectal forms not found in formal Arabic. Mastering these unlocks the ability to form any question in Lebanese conversation.';
