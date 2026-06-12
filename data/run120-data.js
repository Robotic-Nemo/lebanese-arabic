// Run #120 — Sun/Moon Letters drill (NEW FEATURE)
// Arabic definite article ال assimilates before "sun letters" (coronal:
// ت ث د ذ ر ز س ش ص ض ط ظ ل ن) — the ل of ال disappears and the next
// letter doubles. Before "moon letters" (all others), ال stays intact.
// Lebanese keeps this rule exactly; the written form is always "ال"
// but the spoken form varies. Learners often get it wrong because the
// distinction is phonological, not orthographic.
// Drill: user sees a Lebanese noun, picks the correct spoken "el-/eN-"
// form from 3 options (correct + 2 distractors).

const SML_SUN_LETTERS = ['ت','ث','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','ل','ن'];
const SML_MOON_LETTERS = ['ا','ب','ج','ح','خ','ع','غ','ف','ق','ك','م','ه','و','ي'];

const SML_CATS = [
  { id:'moon', label:'🌙 Moon letters (el- stays)' },
  { id:'sun',  label:'☀️ Sun letters (doubles)' }
];

const SML_ITEMS = [
  // ===== moon letters (el- stays intact) =====
  { id:'sm1', ar:'بيت', tr:'bet', en:'house',
    correct:'el-bet', distractors:['eb-bet','il-bet'],
    kind:'moon', firstLetter:'ب',
    note:'ب is a moon letter (labial, not coronal). "el-" stays as "el-". Definite: الـبيت → "el-bet".' },
  { id:'sm2', ar:'قمر', tr:'2amar', en:'moon',
    correct:'el-2amar', distractors:['e2-2amar','esh-2amar'],
    kind:'moon', firstLetter:'ق',
    note:'ق (uvular, pronounced 2 in Lebanese) is a moon letter. "el-2amar" — literally "the moon," which is the textbook example of a moon letter.' },
  { id:'sm3', ar:'ولد', tr:'walad', en:'boy',
    correct:'el-walad', distractors:['iw-walad','ew-walad'],
    kind:'moon', firstLetter:'و',
    note:'و is a moon letter. "el-walad" stays intact. No assimilation.' },
  { id:'sm4', ar:'كتاب', tr:'kteb', en:'book',
    correct:'el-kteb', distractors:['ek-kteb','ik-kteb'],
    kind:'moon', firstLetter:'ك',
    note:'ك is a moon letter. "el-kteb" — the ك is velar (back of mouth), so no coronal assimilation.' },
  { id:'sm5', ar:'عين', tr:'3ayn', en:'eye',
    correct:'el-3ayn', distractors:['e3-3ayn','i3-3ayn'],
    kind:'moon', firstLetter:'ع',
    note:'ع (pharyngeal, ayn) is a moon letter. "el-3ayn" stays. Never assimilates to guttural consonants.' },
  { id:'sm6', ar:'حليب', tr:'7alib', en:'milk',
    correct:'el-7alib', distractors:['e7-7alib','il-7alib'],
    kind:'moon', firstLetter:'ح',
    note:'ح (pharyngeal, 7) is a moon letter. "el-7alib" stays. Pharyngeals never assimilate with ل.' },
  { id:'sm7', ar:'مدرسة', tr:'madrase', en:'school',
    correct:'el-madrase', distractors:['em-madrase','il-madrase'],
    kind:'moon', firstLetter:'م',
    note:'م is a moon letter (labial-nasal). "el-madrase" — even though ن assimilates, م does not.' },
  { id:'sm8', ar:'هواء', tr:'hawa', en:'air',
    correct:'el-hawa', distractors:['eh-hawa','ih-hawa'],
    kind:'moon', firstLetter:'ه',
    note:'ه (glottal h) is a moon letter. "el-hawa" stays intact.' },
  { id:'sm9', ar:'جبل', tr:'jabal', en:'mountain',
    correct:'el-jabal', distractors:['ej-jabal','ij-jabal'],
    kind:'moon', firstLetter:'ج',
    note:'ج (palato-alveolar) is a moon letter in the classical rule. "el-jabal" — note this is counterintuitive for some learners since ج feels "coronal-ish" but is traditionally moon.' },
  { id:'sm10', ar:'فنجان', tr:'finjen', en:'cup',
    correct:'el-finjen', distractors:['ef-finjen','il-finjen'],
    kind:'moon', firstLetter:'ف',
    note:'ف (labio-dental) is a moon letter. "el-finjen" stays — labials never assimilate with ل.' },

  // ===== sun letters (double) =====
  { id:'sm11', ar:'شمس', tr:'shams', en:'sun',
    correct:'esh-shams', distractors:['el-shams','ish-ams'],
    kind:'sun', firstLetter:'ش',
    note:'ش is a sun letter (palatal-alveolar, coronal). ل of ال assimilates: "esh-shams" — literally "the sun," the textbook sun-letter example.' },
  { id:'sm12', ar:'طريق', tr:'Taree2', en:'road',
    correct:'eT-Taree2', distractors:['el-Taree2','iT-aree2'],
    kind:'sun', firstLetter:'ط',
    note:'ط (emphatic t) is a sun letter. "eT-Taree2" — ل assimilates and the ط doubles.' },
  { id:'sm13', ar:'شاي', tr:'shay', en:'tea',
    correct:'esh-shay', distractors:['el-shay','ish-ay'],
    kind:'sun', firstLetter:'ش',
    note:'ش again — "esh-shay" is how you order "THE tea." Native speakers double the ش without thinking.' },
  { id:'sm14', ar:'ناس', tr:'nes', en:'people',
    correct:'en-nes', distractors:['el-nes','in-es'],
    kind:'sun', firstLetter:'ن',
    note:'ن is a sun letter (alveolar-nasal, coronal). "en-nes" = "the people."' },
  { id:'sm15', ar:'رجل', tr:'rijjel', en:'man',
    correct:'er-rijjel', distractors:['el-rijjel','ir-ijjel'],
    kind:'sun', firstLetter:'ر',
    note:'ر is a sun letter (alveolar trill). "er-rijjel" — rolling the ل into the ر.' },
  { id:'sm16', ar:'ست', tr:'sitt', en:'lady/grandmother',
    correct:'es-sitt', distractors:['el-sitt','is-itt'],
    kind:'sun', firstLetter:'س',
    note:'س is a sun letter. "es-sitt" = "the lady." Note the three-way double effect: ال + ستّ → "es-sitt" with already-doubled ت.' },
  { id:'sm17', ar:'دار', tr:'dar', en:'house/home',
    correct:'ed-dar', distractors:['el-dar','id-ar'],
    kind:'sun', firstLetter:'د',
    note:'د is a sun letter (alveolar stop). "ed-dar" — more formal/poetic than "el-bet."' },
  { id:'sm18', ar:'تفاح', tr:'tiffe7', en:'apples',
    correct:'et-tiffe7', distractors:['el-tiffe7','it-iffe7'],
    kind:'sun', firstLetter:'ت',
    note:'ت is a sun letter. "et-tiffe7" = "the apples."' },
  { id:'sm19', ar:'زيت', tr:'zet', en:'oil',
    correct:'ez-zet', distractors:['el-zet','iz-et'],
    kind:'sun', firstLetter:'ز',
    note:'ز is a sun letter (alveolar fricative). "ez-zet" = "the oil."' },
  { id:'sm20', ar:'صيف', tr:'Sef', en:'summer',
    correct:'eS-Sef', distractors:['el-Sef','iS-ef'],
    kind:'sun', firstLetter:'ص',
    note:'ص (emphatic s) is a sun letter. "eS-Sef" = "the summer." Emphasis carries through both doubled letters.' }
];

const SML_TIPS = [
  'Sun letters (14): ت ث د ذ ر ز س ش ص ض ط ظ ل ن — all articulated with the tongue tip or blade (coronal). Moon letters (14): everything else.',
  'Memory hook: the Arabic words الشمس (ash-shams, sun) and القمر (al-qamar, moon) are named after the phenomenon they demonstrate — "shams" starts with ش (sun letter, ل assimilates), "qamar" starts with ق (moon letter, ل stays).',
  'The ل of ال NEVER disappears in writing — the script is always ال. The rule is purely phonological. Spoken Lebanese doubles the sun letter; writing stays the same.',
  'ج trap: classically ج is a moon letter ("el-jabal"), but because Egyptian/Gulf pronunciations of ج feel coronal, some learners want to assimilate. Lebanese follows classical → ج is moon.',
  'The "e" / "i" / "a" vowel in "el-" / "il-" / "al-" varies by Lebanese speaker and preceding word — but the sun/moon distinction (assimilate or not) is invariant across all variants.',
  'Fast speech: native Lebanese speakers often reduce "el-" to just "l-" before a vowel, or drop it entirely in rapid speech. The sun-letter doubling survives even when the vowel drops: "esh-shams" → "sh-shams" (still doubled).',
  'Gemination matters: failing to double a sun letter marks non-native speech immediately. "el-shams" sounds foreign; "esh-shams" sounds native. The doubling is not optional.',
  'When a word starts with a vowel (hamza or sukun), ال often becomes just "l-": الأكل → "l-akl" (the food). This is separate from the sun/moon rule but interacts with it.'
];
