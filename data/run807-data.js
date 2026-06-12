// R807 — NEW FEATURE: Lebanese Arabic for Kids & Parents (kds)

const KDS_CATS = ['baby','school','discipline','phrases'];

const KDS_WORDS = [
  // baby
  { a: 'بيبي', tr: 'beebi', en: 'baby (Lebanese term of endearment)', cat: 'baby' },
  { a: 'حبيبي', tr: '7abiibii', en: 'my love / sweetheart (to a child)', cat: 'baby' },
  { a: 'نام', tr: 'naam', en: 'sleep (imperative) / go to sleep', cat: 'baby' },
  { a: 'أكل', tr: '2akal', en: 'ate / to eat (past tense)', cat: 'baby' },
  { a: 'مامي', tr: 'maami', en: 'mommy (Lebanese baby talk)', cat: 'baby' },
  { a: 'بابا', tr: 'baaba', en: 'daddy / dad', cat: 'baby' },
  { a: 'تعا', tr: 'ta3a', en: 'come here (to a child)', cat: 'baby' },
  // school
  { a: 'مدرسة', tr: 'madrase', en: 'school', cat: 'school' },
  { a: 'واجب', tr: 'waajib', en: 'homework', cat: 'school' },
  { a: 'امتحان', tr: '2imti7aan', en: 'exam / test', cat: 'school' },
  { a: 'درجة', tr: 'daraje', en: 'grade / mark', cat: 'school' },
  { a: 'معلمة', tr: 'mu3allme', en: 'teacher (female)', cat: 'school' },
  { a: 'شنطة مدرسة', tr: 'shanTit madrase', en: 'school bag', cat: 'school' },
  { a: 'إجازة', tr: '2ijaaze', en: 'vacation / holiday (from school)', cat: 'school' },
  // discipline
  { a: 'لا تعمل هيك', tr: 'la t3amel heek', en: "don't do that", cat: 'discipline' },
  { a: 'قلت لك', tr: '2ilt lak', en: 'I told you (warning tone)', cat: 'discipline' },
  { a: 'معقول؟', tr: 'ma32uul', en: 'is this acceptable? / seriously? (reproach)', cat: 'discipline' },
  { a: 'شاطر', tr: 'shaaTer', en: 'well done / good boy/girl', cat: 'discipline' },
  { a: 'بدك تتأدب', tr: 'baddak tit2addab', en: 'you need to behave', cat: 'discipline' },
  { a: 'بيكفي', tr: 'biikfii', en: "that's enough / stop it", cat: 'discipline' },
  // phrases
  { a: 'كيفك؟ يا عيوني', tr: 'kiifak ya 3yuunii', en: 'how are you, my eyes? (term of endearment)', cat: 'phrases' },
  { a: 'عملت واجبك؟', tr: '3amalt waajbak', en: 'did you do your homework?', cat: 'phrases' },
  { a: 'كلّ محبتي', tr: 'kall ma7abbetii', en: 'all my love (to a child)', cat: 'phrases' },
  { a: 'روح نام', tr: 'ruu7 naam', en: 'go to sleep', cat: 'phrases' },
  { a: 'شو بدك تاكل؟', tr: 'shu baddak taakol', en: 'what do you want to eat?', cat: 'phrases' },
  { a: 'إحكيلي', tr: '2i7kiilii', en: 'tell me / talk to me', cat: 'phrases' },
  { a: 'بحبك كتير', tr: 'b7ibbak kitiir', en: 'I love you so much', cat: 'phrases' },
  { a: 'ولد مدلّل', tr: 'walad mdallal', en: 'spoiled child', cat: 'phrases' }
];

const KDS_DRILLS = [
  { q: 'What does "shaaTer" mean when said to a child?', opts: ['be quiet','well done / good boy','hurry up','sit down'], ans: 1, exp: 'Shaater = clever/good — the highest praise for a Lebanese child' },
  { q: '"Waajib" means...', opts: ['vacation','homework','exam','teacher'], ans: 1, exp: 'Waajib = duty/obligation — used for school homework in Lebanese dialect' },
  { q: 'What is "beebi"?', opts: ['school bag','baby / term of endearment','go to sleep','come here'], ans: 1, exp: 'Beebi = baby (from English "baby") — also used as an affectionate term for any young child' },
  { q: '"Ta3a" means...', opts: ['eat it','go to sleep','come here','good night'], ans: 2, exp: 'Ta3a = come (imperative, to a boy); ta3ii = to a girl. Used constantly with children' },
  { q: 'What does "2imti7aan" mean?', opts: ['homework','school bag','exam/test','teacher'], ans: 2, exp: 'Imti7aan = exam/test — causes stress for Lebanese families nationwide' },
  { q: '"Biikfii" means...', opts: ['I love you','that\'s enough/stop','do your homework','well done'], ans: 1, exp: 'Biikfii = that\'s enough — the universal parent stop signal across Lebanon' },
  { q: 'What is "mu3allme"?', opts: ['school','homework','female teacher','grade'], ans: 2, exp: 'Mu3allme = female teacher — teachers are highly respected in Lebanese culture' },
  { q: '"2ijaaze" in a school context means...', opts: ['exam','homework','grade','vacation/holiday'], ans: 3, exp: 'Ijaaze = vacation — school holiday season is a big family event in Lebanon' },
  { q: 'What does "b7ibbak kitiir" mean?', opts: ['I miss you','I love you so much','be careful','come here'], ans: 1, exp: 'B7ibbak = I love you (to a boy); b7ibbik = to a girl; kitiir = a lot' },
  { q: '"Walad mdallal" means...', opts: ['well-behaved child','spoiled child','school child','clever child'], ans: 1, exp: 'Mdallal = spoiled/pampered — from dallal = to spoil with attention' },
  { q: 'What is "madrase"?', opts: ['homework','school','teacher','exam'], ans: 1, exp: 'Madrase = school — the center of Lebanese children\'s social life' },
  { q: '"Ma32uul?" to a child means...', opts: ['are you hungry?','seriously? / is this acceptable?','do you understand?','are you tired?'], ans: 1, exp: 'Ma32uul = rational/acceptable — used as a reproach: "is this behavior acceptable?"' },
  { q: 'What does "la t3amel heek" mean?', opts: ['do it like this','don\'t do that','come here','eat this'], ans: 1, exp: 'La = no/don\'t; t3amel = you do; heek = like this — the classic parental prohibition' },
  { q: '"2i7kiilii" means...', opts: ['go to sleep','tell me / talk to me','eat your food','be quiet'], ans: 1, exp: 'I7kiilii = talk to me (imperative) — Lebanese parents say this when something is wrong' },
  { q: 'What is "daraje" in school?', opts: ['vacation','school bag','teacher','grade/mark'], ans: 3, exp: 'Daraje = grade/degree — Lebanese parents are obsessed with their children\'s grades' }
];

const KDS_TIPS = [
  'Lebanese parents use an extraordinary number of endearments for children: 3yuunii (my eyes), 2albii (my heart), 7abiibii (my love), ruu7ii (my soul). A child is addressed with all of them daily.',
  '"Shaater" (clever/good) is the supreme compliment for a Lebanese child — used for good grades, good behavior, and finishing food. It comes from a root meaning clever/skilled.',
  'Lebanese education pressure is intense — the "Brevet" and "Baccalaureate" exams are national events, and "2imti7aan" (exam) is a word that puts the whole family on edge.',
  'The word "mdallal" (spoiled) is used with a mix of criticism and pride — Lebanese grandparents are the main culprits, indulging grandchildren (a7faad) beyond all limits.',
  '"Ta3a" (come here — to a boy) / "ta3ii" (to a girl) is one of the first words Lebanese children understand. It\'s used in every household dozens of times daily.',
  'Lebanese "beebi" culture means children are often called "beebi" (baby) well into their teen years by doting relatives — it\'s a term of endearment, not a comment on maturity.'
];
