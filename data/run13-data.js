// Run #13 data — Possessive Pronouns, Verb Forms (Awzan), Sports+Hobbies
// Prefixes: pos-, vf-, sh-

// ============ POSSESSIVE PRONOUNS ============
// 8 Lebanese pronoun suffixes attached to nouns. Pattern: noun + suffix.
// Note: feminine nouns ending in -e/-a often shift to -et- before suffix.
// Examples below show the rule applied.

const POS_SUFFIXES = [
  { pron: 'ana',    label: 'my',          suf: '-i',   sufFem: '-ti' },
  { pron: 'inta',   label: 'your (m)',    suf: '-ak',  sufFem: '-tak' },
  { pron: 'inti',   label: 'your (f)',    suf: '-ek',  sufFem: '-tek' },
  { pron: 'howe',   label: 'his',         suf: '-o',   sufFem: '-to' },
  { pron: 'hiye',   label: 'her',         suf: '-a',   sufFem: '-ta' },
  { pron: 'n7na',   label: 'our',         suf: '-na',  sufFem: '-tna' },
  { pron: 'intu',   label: 'your (pl)',   suf: '-kon', sufFem: '-tkon' },
  { pron: 'hinnen', label: 'their',       suf: '-(h)on', sufFem: '-ton' }
];

const POS_NOUNS = [
  // masc
  { ar: 'بيت', tr: 'bayt', en: 'house', g: 'm', forms: ['bayti','baytak','baytek','bayto','bayta','baytna','baytkon','bayton'] },
  { ar: 'كتاب', tr: 'kteb', en: 'book', g: 'm', forms: ['ktebi','ktebak','ktebek','ktebo','kteba','ktebna','ktebkon','ktebon'] },
  { ar: 'إسم', tr: 'isem', en: 'name', g: 'm', forms: ['ismi','ismak','ismek','ismo','isma','ismna','ismkon','ismon'] },
  { ar: 'تلفون', tr: 'telefon', en: 'phone', g: 'm', forms: ['telefoni','telefonak','telefonek','telefono','telefona','telefonna','telefonkon','telefonon'] },
  { ar: 'عمل', tr: '3amal', en: 'work', g: 'm', forms: ['3amali','3amalak','3amalek','3amalo','3amala','3amalna','3amalkon','3amalon'] },
  { ar: 'صديق', tr: 'rfi2', en: 'friend (m)', g: 'm', forms: ['rfi2i','rfi2ak','rfi2ek','rfi2o','rfi2a','rfi2na','rfi2kon','rfi2on'] },
  { ar: 'ابن', tr: 'ibn', en: 'son', g: 'm', forms: ['ibni','ibnak','ibnek','ibno','ibna','ibnna','ibnkon','ibnon'] },
  { ar: 'أخ', tr: 'akh', en: 'brother', g: 'm', forms: ['akhi','akhuk','akhuki','akhu','akha','akhuna','akhukon','akhuhon'] },
  { ar: 'قلب', tr: '2alb', en: 'heart', g: 'm', forms: ['2albi','2albak','2albek','2albo','2alba','2albna','2albkon','2albon'] },
  { ar: 'شغل', tr: 'shoghol', en: 'job', g: 'm', forms: ['shoghli','shoghlak','shoghlek','shoghlo','shoghla','shoghlna','shoghlkon','shoghlon'] },
  // fem (-e shifts to -et-)
  { ar: 'سيارة', tr: 'sayyara', en: 'car', g: 'f', forms: ['sayyarti','sayyartak','sayyartek','sayyarto','sayyarta','sayyaritna','sayyartkon','sayyarton'] },
  { ar: 'أم', tr: 'imm', en: 'mother', g: 'f', forms: ['immi','immak','immek','immo','imma','immna','immkon','immon'] },
  { ar: 'أخت', tr: 'ekht', en: 'sister', g: 'f', forms: ['ekhti','ekhtak','ekhtek','ekhto','ekhta','ekhtna','ekhtkon','ekhton'] },
  { ar: 'بنت', tr: 'bint', en: 'daughter', g: 'f', forms: ['binti','bintak','bintek','binto','binta','bintna','bintkon','binton'] },
  { ar: 'مدرسة', tr: 'madrase', en: 'school', g: 'f', forms: ['madrasti','madrastak','madrastek','madrasto','madrasta','madrasitna','madrastkon','madrasiton'] },
  { ar: 'صديقة', tr: 'rfi2a', en: 'friend (f)', g: 'f', forms: ['rfi2ti','rfi2tak','rfi2tek','rfi2to','rfi2ta','rfi2itna','rfi2tkon','rfi2iton'] },
  { ar: 'غرفة', tr: 'ghorfe', en: 'room', g: 'f', forms: ['ghorfti','ghorftak','ghorftek','ghorfto','ghorfta','ghorfetna','ghorftkon','ghorfeton'] },
  { ar: 'وظيفة', tr: 'wazife', en: 'job (formal)', g: 'f', forms: ['wazifti','waziftak','waziftek','wazifto','wazifta','wazifetna','waziftkon','wazifeton'] }
];

// ============ VERB FORMS (Awzan) ============
// Arabic derivational morphology — each "form" modifies the base meaning.
// Lebanese uses primarily I, II, III, V, VI, VII, VIII, X.

const VERB_FORMS = [
  {
    form: 'I',
    pattern: 'fa3al / fi3il',
    meaning: 'Base — simple action',
    example: { root: 'k-t-b', verb: 'katab', en: 'wrote' },
    desc: 'Most common form. Direct, basic action of the root meaning.'
  },
  {
    form: 'II',
    pattern: 'fa33al',
    meaning: 'Causative / intensive',
    example: { root: 'k-s-r', verb: 'kassar', en: 'shattered (broke into many pieces)' },
    desc: 'Doubled middle radical. Often makes the action causative or more intense than Form I (kasar = broke; kassar = smashed).'
  },
  {
    form: 'III',
    pattern: 'fe3al',
    meaning: 'Reciprocal / with someone',
    example: { root: 'k-t-b', verb: 'keatab', en: 'corresponded with' },
    desc: 'Long ā after first radical. Implies doing the action TO/WITH someone (katab = wrote; keatab = corresponded with).'
  },
  {
    form: 'V',
    pattern: 'tfa33al',
    meaning: 'Reflexive of II / become',
    example: { root: '3-l-m', verb: 't3allam', en: 'learned (taught oneself)' },
    desc: 'Prefix t- + Form II. Reflexive — the action happens TO the subject (3allam = taught; t3allam = learned).'
  },
  {
    form: 'VI',
    pattern: 'tfe3al',
    meaning: 'Reciprocal action',
    example: { root: 'k-t-b', verb: 'tkeatab', en: 'wrote to each other' },
    desc: 'Prefix t- + Form III. Mutual/reciprocal action between two parties.'
  },
  {
    form: 'VII',
    pattern: 'nfa3al',
    meaning: 'Passive of I',
    example: { root: 'k-s-r', verb: 'nkasar', en: 'got broken' },
    desc: 'Prefix n-. Passive or middle voice — action happens to subject without explicit doer (kasar = broke; nkasar = got broken).'
  },
  {
    form: 'VIII',
    pattern: 'fta3al',
    meaning: 'Reflexive / middle voice',
    example: { root: 'sh-gh-l', verb: 'shtaghal', en: 'worked / functioned' },
    desc: 'Infix -t- after first radical. Often reflexive or makes the action self-directed.'
  },
  {
    form: 'X',
    pattern: 'sta-f3al',
    meaning: 'Request / consider as',
    example: { root: '3-m-l', verb: 'sta3mal', en: 'used' },
    desc: 'Prefix sta-. Means to seek the action, consider something to BE the meaning, or to use it (3amal = did; sta3mal = used).'
  }
];

// Drill: given root + form, derive the verb. Or: given verb, identify form.
const VF_DRILL = [
  { root: 'k-t-b', form: 'I', answer: 'katab', en: 'wrote' },
  { root: 'k-s-r', form: 'II', answer: 'kassar', en: 'smashed' },
  { root: '3-l-m', form: 'V', answer: 't3allam', en: 'learned' },
  { root: '3-m-l', form: 'X', answer: 'sta3mal', en: 'used' },
  { root: 'k-t-b', form: 'III', answer: 'keatab', en: 'corresponded with' },
  { root: 'sh-gh-l', form: 'VIII', answer: 'shtaghal', en: 'worked' },
  { root: 'f-h-m', form: 'I', answer: 'fihim', en: 'understood' },
  { root: 'f-h-m', form: 'II', answer: 'fahham', en: 'explained (made understand)' },
  { root: 'k-l-m', form: 'II', answer: 'kallam', en: 'spoke to' },
  { root: 'k-l-m', form: 'V', answer: 'tkallam', en: 'spoke / talked' },
  { root: 'gh-y-r', form: 'II', answer: 'ghayyar', en: 'changed (something)' },
  { root: 'gh-y-r', form: 'V', answer: 'tghayyar', en: 'changed (itself)' },
  { root: 'w-2-f', form: 'I', answer: 'w2if', en: 'stood / stopped' },
  { root: 'w-2-f', form: 'II', answer: 'wa22af', en: 'made stand / parked' },
  { root: 'r-j-3', form: 'I', answer: 'rja3', en: 'returned' }
];

// ============ SPORTS & HOBBIES ============
const SPORTS_VOCAB = [
  // sports
  { ar: 'كرة قدم', tr: 'kourat 2adam', en: 'soccer', cat: 'sport' },
  { ar: 'كرة سلة', tr: 'kourat salle', en: 'basketball', cat: 'sport' },
  { ar: 'تنس', tr: 'tenis', en: 'tennis', cat: 'sport' },
  { ar: 'سباحة', tr: 'sba7a', en: 'swimming', cat: 'sport' },
  { ar: 'ركض', tr: 'rakd', en: 'running', cat: 'sport' },
  { ar: 'ملاكمة', tr: 'malekme', en: 'boxing', cat: 'sport' },
  { ar: 'سكي', tr: 'ski', en: 'skiing', cat: 'sport' },
  { ar: 'يوغا', tr: 'yoga', en: 'yoga', cat: 'sport' },
  { ar: 'ركوب الخيل', tr: 'rkoub el khayl', en: 'horseback riding', cat: 'sport' },
  { ar: 'صيد', tr: 'sayd', en: 'fishing/hunting', cat: 'sport' },
  // hobbies
  { ar: 'قراءة', tr: '2ireye', en: 'reading', cat: 'hobby' },
  { ar: 'موسيقى', tr: 'mousi2a', en: 'music', cat: 'hobby' },
  { ar: 'رسم', tr: 'rasem', en: 'drawing', cat: 'hobby' },
  { ar: 'تصوير', tr: 'taswir', en: 'photography', cat: 'hobby' },
  { ar: 'طبخ', tr: 'tabekh', en: 'cooking', cat: 'hobby' },
  { ar: 'سفر', tr: 'safar', en: 'traveling', cat: 'hobby' },
  { ar: 'بستنة', tr: 'bastane', en: 'gardening', cat: 'hobby' },
  { ar: 'حياكة', tr: '7yeke', en: 'knitting', cat: 'hobby' },
  { ar: 'رقص', tr: 'ra2es', en: 'dancing', cat: 'hobby' },
  { ar: 'شطرنج', tr: 'shatranj', en: 'chess', cat: 'hobby' },
  // gear/places
  { ar: 'ملعب', tr: 'mal3ab', en: 'stadium / playground', cat: 'place' },
  { ar: 'نادي', tr: 'nedi', en: 'club / gym', cat: 'place' },
  { ar: 'مسبح', tr: 'masba7', en: 'swimming pool', cat: 'place' },
  { ar: 'كرة', tr: 'koura', en: 'ball', cat: 'gear' },
  { ar: 'مضرب', tr: 'modrab', en: 'racket / bat', cat: 'gear' },
  { ar: 'حذاء رياضة', tr: '7iza riyada', en: 'sneakers', cat: 'gear' },
  // verbs
  { ar: 'لعب', tr: 'la3ab', en: 'to play', cat: 'verb' },
  { ar: 'فاز', tr: 'fez', en: 'to win', cat: 'verb' },
  { ar: 'خسر', tr: 'khsir', en: 'to lose', cat: 'verb' },
  { ar: 'تمرّن', tr: 'tmarran', en: 'to practice / train', cat: 'verb' }
];

const SPORTS_PHRASES = [
  { ar: 'بحب ألعب كرة قدم', tr: 'b7ib il3ab kourat 2adam', en: 'I love playing soccer' },
  { ar: 'شو هواياتك؟', tr: 'shu hweyetak?', en: 'What are your hobbies?' },
  { ar: 'بمارس الرياضة كل يوم', tr: 'bmares iryada kil yawm', en: 'I exercise every day' },
  { ar: 'مين فاز؟', tr: 'min fez?', en: 'Who won?' },
  { ar: 'الفريق خسر', tr: 'el fari2 khisir', en: 'The team lost' },
  { ar: 'بحب اقرا كتب', tr: 'b7ib i2ra ktob', en: 'I love reading books' },
  { ar: 'بعزف عالغيتار', tr: 'ba3zof 3al guitar', en: 'I play guitar' },
  { ar: 'منلعب شطرنج؟', tr: 'min la3ob shatranj?', en: 'Shall we play chess?' },
  { ar: 'رايح عالنادي', tr: 'rayi7 3al nedi', en: 'Going to the gym' },
  { ar: 'بيتسلى بالتصوير', tr: 'bitsalla bil taswir', en: 'He enjoys photography' },
  { ar: 'فيك تسبح؟', tr: 'fik tesba7?', en: 'Can you swim?' },
  { ar: 'كنت بالفريق', tr: 'kint bil fari2', en: 'I was on the team' }
];

const SPORTS_DIALOG = {
  title: 'Talking about hobbies',
  turns: [
    { sp: 'A', ar: 'شو هواياتك؟', tr: 'shu hweyetak?', en: 'What are your hobbies?' },
    { sp: 'B', ar: 'بحب الموسيقى والقراءة. وانت؟', tr: 'b7ib el mousi2a wel 2ireye. winta?', en: "I love music and reading. And you?" },
    { sp: 'A', ar: 'بلعب كرة قدم وبسبح', tr: 'bil3ab kourat 2adam wbisba7', en: 'I play soccer and swim' },
    { sp: 'B', ar: 'وين بتلعب؟', tr: 'wayn btil3ab?', en: 'Where do you play?' },
    { sp: 'A', ar: 'بنادي قريب من البيت', tr: 'bnedi 2arib min el bayt', en: 'At a club near home' },
    { sp: 'B', ar: 'كم مرة بالأسبوع؟', tr: 'kam marra bil esbou3?', en: 'How many times a week?' },
    { sp: 'A', ar: 'تلت مرات', tr: 'tlet marrat', en: 'Three times' },
    { sp: 'B', ar: 'يا سلام! أنا بحاجة تمرين', tr: 'ya salem! ana b7eje tamrin', en: 'Wow! I need exercise' }
  ]
};
