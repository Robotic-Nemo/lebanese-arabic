// Run #192 — Lebanese Slang & Colloquialisms Coach
// Everyday discourse markers, address terms, exclamations, fillers

const SLG_WORDS = [
  {
    id: 'sl_wallah', ar: 'والله', tr: 'wallah', en: 'I swear / seriously / really',
    category: 'emphasis', emoji: '🤲',
    usage: 'Oath of emphasis borrowed from "by God". Wallah mnih = it\'s seriously good. Used constantly — adds sincerity or emphasis.',
    example_ar: 'والله ما كنت عارف', example_tr: 'wallah ma kint 3eref', example_en: 'I honestly didn\'t know'
  },
  {
    id: 'sl_3anjad', ar: 'عنجد', tr: '3anjad', en: 'seriously / really / for real',
    category: 'emphasis', emoji: '😤',
    usage: 'Lebanese dialectal intensifier. 3anjad? = Are you serious? 3anjad ktir 7elwe = she\'s really very pretty.',
    example_ar: 'عنجد؟ ما صدقت!', example_tr: '3anjad? ma Sada2t!', example_en: 'Seriously? I can\'t believe it!'
  },
  {
    id: 'sl_akid', ar: 'أكيد', tr: 'akid', en: 'of course / definitely / sure',
    category: 'emphasis', emoji: '✅',
    usage: 'Strong affirmation. Akid! = Of course! Akid ra7 yiji = he\'ll definitely come. From Arabic "certainty".',
    example_ar: 'أكيد بيجي معنا', example_tr: 'akid biji ma3na', example_en: 'He\'ll definitely come with us'
  },
  {
    id: 'sl_wlo', ar: 'ولو', tr: 'wlo', en: 'no way / what?! / not at all',
    category: 'emphasis', emoji: '😱',
    usage: 'Expression of disbelief or denial. Wlo! = No way! / What?! Also used to dismiss an idea gently.',
    example_ar: 'ولو! هاد ما صار!', example_tr: 'wlo! hed ma Sar!', example_en: 'No way! That didn\'t happen!'
  },
  {
    id: 'sl_mshmakul', ar: 'مش معقول', tr: 'msh ma3qul', en: 'unbelievable / impossible',
    category: 'emphasis', emoji: '🤯',
    usage: 'Literally "not logical/reasonable". Used for amazement, disbelief, or frustration. Very common Lebanese exclamation.',
    example_ar: 'مش معقول كيف شاطر', example_tr: 'msh ma3qul kif sheter', example_en: 'It\'s unbelievable how smart he is'
  },
  {
    id: 'sl_yalla', ar: 'يلا', tr: 'yalla', en: 'let\'s go / come on / hurry up',
    category: 'discourse', emoji: '🏃',
    usage: 'One of the most used Lebanese words. Yalla yalla = hurry up. Yalla bye = ok bye (very common phone goodbye).',
    example_ar: 'يلا نروح بسرعة', example_tr: 'yalla nru7 bi-sur3a', example_en: 'Let\'s go quickly'
  },
  {
    id: 'sl_khalas', ar: 'خلص', tr: 'khalas', en: 'done / finished / that\'s it / enough',
    category: 'discourse', emoji: '🏁',
    usage: 'Signals completion or finality. Khalas, bas = enough already. Khalas 2l-mawzu3 = the topic is closed.',
    example_ar: 'خلص، ما بدي حكي عنو', example_tr: 'khalas, ma baddi 7ke 3anno', example_en: 'That\'s it, I don\'t want to talk about it'
  },
  {
    id: 'sl_bas', ar: 'بس', tr: 'bas', en: 'but / just / only / enough',
    category: 'discourse', emoji: '↩️',
    usage: 'Multi-purpose word. Bas = but (connector), just (limiter), or stop/enough (command). One of the most versatile Lebanese words.',
    example_ar: 'بس في مشكلة صغيرة', example_tr: 'bas fi mushkle Saghire', example_en: 'But there\'s a small problem'
  },
  {
    id: 'sl_ya3ni', ar: 'يعني', tr: 'ya3ni', en: 'I mean / like / sort of / you know',
    category: 'discourse', emoji: '💬',
    usage: 'Filler and softener. Ya3ni = I mean / sort of. Ya3ni mnih = it\'s sort of good. Used like "like" in English slang.',
    example_ar: 'يعني، مش عارف شو بقول', example_tr: 'ya3ni, msh 3eref shu b2ul', example_en: 'I mean, I don\'t know what to say'
  },
  {
    id: 'sl_haik', ar: 'هيك', tr: 'heik', en: 'like this / like that / this way',
    category: 'discourse', emoji: '👈',
    usage: 'Demonstrative adverb. Heik heik = so-so / like that. Ma bde heik = I don\'t want it like that.',
    example_ar: 'ليش عم تعمل هيك؟', example_tr: 'leish 3am t3amel heik?', example_en: 'Why are you acting like this?'
  },
  {
    id: 'sl_habibi', ar: 'حبيبي', tr: 'habibi', en: 'my dear / buddy / honey (m)',
    category: 'address', emoji: '❤️',
    usage: 'Lit. "my love/dear". Used warmly between friends, family, strangers. Feminine: habibti. Can be affectionate or sarcastic.',
    example_ar: 'حبيبي، كيفك اليوم؟', example_tr: 'habibi, kifak il-yom?', example_en: 'My dear, how are you today?'
  },
  {
    id: 'sl_zalame', ar: 'زلمة', tr: 'zalame', en: 'dude / man / guy',
    category: 'address', emoji: '🧑',
    usage: 'Informal address for males. Ya zalame = hey man/dude. Also means "a man/person" in general.',
    example_ar: 'يا زلمة، وين رايح؟', example_tr: 'ya zalame, la wein raye7?', example_en: 'Dude, where are you going?'
  },
  {
    id: 'sl_tfaddal', ar: 'تفضل', tr: 'tfaddal', en: 'please / go ahead / here you go / welcome',
    category: 'address', emoji: '🤝',
    usage: 'Multi-use politeness word. When handing something: "here you go". Inviting entry/seating: "please come in/sit". Feminine: tfaddali.',
    example_ar: 'تفضل، اتفضل جوا', example_tr: 'tfaddal, itfaddal juwwa', example_en: 'Please, come inside'
  },
  {
    id: 'sl_yislamo', ar: 'يسلمو', tr: 'yislamo', en: 'bless you / thank you (warm)',
    category: 'reaction', emoji: '🙏',
    usage: 'Warm thank-you lit. "may (your hands/you) be safe". Yislamo ideik = bless your hands (said after someone cooks).',
    example_ar: 'يسلمو إيديكي، طبختي كتير منيح', example_tr: 'yislamo ideiki, taba2ti ktir mnih', example_en: 'Bless your hands, you cooked very well'
  },
  {
    id: 'sl_yee', ar: 'يي', tr: 'yee', en: 'oh! / oh no! / wow!',
    category: 'reaction', emoji: '😮',
    usage: 'Exclamation of surprise, dismay, or delight depending on tone. Very Lebanese — not used in MSA.',
    example_ar: 'يي! شو صار؟', example_tr: 'yee! shu Sar?', example_en: 'Oh! What happened?'
  },
  {
    id: 'sl_mafimushkle', ar: 'ما في مشكلة', tr: 'ma fi mushkle', en: 'no problem / not an issue',
    category: 'reaction', emoji: '👌',
    usage: 'Common reassurance. Ma fi mushkle, tekdar tiji bukra = no problem, you can come tomorrow.',
    example_ar: 'ما في مشكلة، بعمل هالشي', example_tr: 'ma fi mushkle, ba3mel hal-shi', example_en: 'No problem, I\'ll do this thing'
  },
  {
    id: 'sl_2al', ar: 'قال', tr: '2al', en: 'supposedly / they say / apparently',
    category: 'discourse', emoji: '🗣️',
    usage: 'Hearsay marker — lit. "he said". 2al ra7 yiji = supposedly he\'s coming. Signals unverified info.',
    example_ar: 'قال رح تنزل أمطار', example_tr: '2al ra7 tonzol amTer', example_en: 'Apparently it\'s going to rain'
  },
  {
    id: 'sl_min_jidd', ar: 'من جد', tr: 'min jidd', en: 'seriously / honestly / for real',
    category: 'emphasis', emoji: '🎯',
    usage: 'Sincerity marker. Min jidd! = For real! / Honestly! Slightly more formal than 3anjad but both are common.',
    example_ar: 'من جد، هاد أحلى أكل أكلتو', example_tr: 'min jidd, hed a7la akel akalto', example_en: 'Honestly, this is the best food I\'ve ever eaten'
  }
];

const SLG_DRILLS = [
  {
    id: 'sd1',
    prompt_ar: 'You hand someone a coffee. Which word do you say?',
    prompt_tr: '',
    prompt_en: 'Choose the right politeness word for handing something over',
    correct_id: 'sd1_b',
    options: [
      { id: 'sd1_a', ar: 'يلا', en: 'yalla — let\'s go' },
      { id: 'sd1_b', ar: 'تفضل', en: 'tfaddal — here you go' },
      { id: 'sd1_c', ar: 'خلص', en: 'khalas — done' },
      { id: 'sd1_d', ar: 'ولو', en: 'wlo — no way' },
      { id: 'sd1_e', ar: 'يسلمو', en: 'yislamo — bless you' }
    ]
  },
  {
    id: 'sd2',
    prompt_ar: 'والله ما كنت عارف',
    prompt_tr: 'wallah ma kint 3eref',
    prompt_en: 'What does "wallah" signal here?',
    correct_id: 'sd2_c',
    options: [
      { id: 'sd2_a', ar: 'سؤال', en: 'a question' },
      { id: 'sd2_b', ar: 'رفض', en: 'refusal' },
      { id: 'sd2_c', ar: 'تأكيد / إخلاص', en: 'sincerity / emphasis' },
      { id: 'sd2_d', ar: 'استغراب', en: 'surprise' },
      { id: 'sd2_e', ar: 'طلب', en: 'a request' }
    ]
  },
  {
    id: 'sd3',
    prompt_ar: 'Someone cooks you a delicious meal. What do you say?',
    prompt_tr: '',
    prompt_en: 'Choose the warm Lebanese thank-you for food',
    correct_id: 'sd3_d',
    options: [
      { id: 'sd3_a', ar: 'ولو', en: 'wlo — no way' },
      { id: 'sd3_b', ar: 'خلص', en: 'khalas — done' },
      { id: 'sd3_c', ar: 'هيك', en: 'heik — like this' },
      { id: 'sd3_d', ar: 'يسلمو إيديكي', en: 'yislamo ideiki — bless your hands' },
      { id: 'sd3_e', ar: 'يي', en: 'yee — oh!' }
    ]
  },
  {
    id: 'sd4',
    prompt_ar: 'قال رح تنزل أمطار اليوم',
    prompt_tr: '2al ra7 tonzol amTer il-yom',
    prompt_en: 'What does "2al" signal?',
    correct_id: 'sd4_a',
    options: [
      { id: 'sd4_a', ar: 'معلومة مش مأكدة — hearsay', en: 'unverified info (supposedly)' },
      { id: 'sd4_b', ar: 'أمر مباشر', en: 'a direct order' },
      { id: 'sd4_c', ar: 'سؤال', en: 'a question' },
      { id: 'sd4_d', ar: 'نفي', en: 'negation' },
      { id: 'sd4_e', ar: 'مدح', en: 'praise' }
    ]
  },
  {
    id: 'sd5',
    prompt_ar: 'يلا يلا، اتأخرنا!',
    prompt_tr: 'yalla yalla, it2akharna!',
    prompt_en: 'What does "yalla yalla" express?',
    correct_id: 'sd5_b',
    options: [
      { id: 'sd5_a', ar: 'رفض — refusal', en: 'refusal' },
      { id: 'sd5_b', ar: 'استعجال — hurry up', en: 'hurry up / urgency' },
      { id: 'sd5_c', ar: 'موافقة هادية', en: 'calm agreement' },
      { id: 'sd5_d', ar: 'مفاجأة', en: 'surprise' },
      { id: 'sd5_e', ar: 'تحية', en: 'greeting' }
    ]
  },
  {
    id: 'sd6',
    prompt_ar: 'يعني، مش تماماً ما بقدر أحضر',
    prompt_tr: 'ya3ni, msh tamaman ma b2dar 7aDer',
    prompt_en: 'What does "ya3ni" do here?',
    correct_id: 'sd6_e',
    options: [
      { id: 'sd6_a', ar: 'يرفض بشدة', en: 'refuses firmly' },
      { id: 'sd6_b', ar: 'يؤكد', en: 'strongly affirms' },
      { id: 'sd6_c', ar: 'يسأل', en: 'asks a question' },
      { id: 'sd6_d', ar: 'يرحب', en: 'welcomes' },
      { id: 'sd6_e', ar: 'يخفف / يتردد', en: 'softens / hesitates' }
    ]
  },
  {
    id: 'sd7',
    prompt_ar: 'ولو! ما صدقت هالخبر',
    prompt_tr: 'wlo! ma Sada2t hal-khabar',
    prompt_en: 'What does "wlo" express here?',
    correct_id: 'sd7_c',
    options: [
      { id: 'sd7_a', ar: 'موافقة — agreement', en: 'agreement' },
      { id: 'sd7_b', ar: 'شكر — thanks', en: 'gratitude' },
      { id: 'sd7_c', ar: 'عدم تصديق — disbelief', en: 'disbelief / no way' },
      { id: 'sd7_d', ar: 'فرح — joy', en: 'joy' },
      { id: 'sd7_e', ar: 'إذن — permission', en: 'granting permission' }
    ]
  }
];

const SLG_TIPS = [
  '"Yalla" is the most exported Lebanese/Levantine word globally. It can mean let\'s go, hurry up, ok bye, or come on depending entirely on tone and context. "Yalla bye" to end a call is quintessentially Lebanese.',
  '"Khalas" signals definitive closure. When a Lebanese person says "khalas" in a serious tone, the topic is truly finished. It can also mean "finally!" (khalas, weslna = we finally arrived).',
  '"Ya3ni" (يعني) is used as a filler exactly like "like" in American English or "innit" in British. It hedges, softens, or fills silence. Overusing ya3ni is a strong marker of Lebanese speech.',
  '"Wallah" technically means "by God" but has lost its religious gravity in daily Lebanese speech. It\'s now a general-purpose sincerity marker. Never take offense at its frequency — it\'s just emphasis.',
  '"Habibi/habibti" can be completely non-romantic — used between male friends, with strangers, taxi drivers, shopkeepers. The romantic meaning is determined entirely by context and tone.'
];

const SLG_ABOUT = 'Lebanese slang is a window into the culture\'s warmth, directness, and wit. These words — wallah, yalla, khalas, ya3ni — appear in every conversation and mark fluency more than grammar does. Many Lebanese slang terms have spread globally through music, TV, and diaspora communities.';
