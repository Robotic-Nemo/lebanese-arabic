// Run #366 — Lebanese Superstitions, Folk Culture & Evil Eye
// Categories: evil-eye | folk-beliefs | fate-expressions | folk-remedies | phrases

const FLK_WORDS = [
  // evil-eye
  { ar: 'عين', tr: '3ein', en: 'evil eye', cat: 'evil-eye' },
  { ar: 'حسد', tr: '7asad', en: 'envy / jealousy (causing evil eye)', cat: 'evil-eye' },
  { ar: 'خمسة', tr: 'khamse', en: 'hand of Fatima / five (ward off evil eye)', cat: 'evil-eye' },
  { ar: 'بخور', tr: 'bkhuur', en: 'incense (used to ward off evil eye)', cat: 'evil-eye' },
  { ar: 'حجاب', tr: '7ijaab', en: 'amulet / talisman (protective charm)', cat: 'evil-eye' },
  { ar: 'زرقا', tr: 'zar2a', en: 'blue (color protecting against evil eye)', cat: 'evil-eye' },
  { ar: 'ما تحسدني', tr: 'maa t7asdni', en: 'don\'t give me the evil eye / don\'t jinx me', cat: 'evil-eye' },
  { ar: 'مصروفة', tr: 'maSruufe', en: 'one who has been affected by the evil eye', cat: 'evil-eye' },
  // folk-beliefs
  { ar: 'حمّة', tr: '7amme', en: 'fever / bad luck charm (folk concept)', cat: 'folk-beliefs' },
  { ar: 'فأل', tr: 'fa2l', en: 'omen / sign (good or bad)', cat: 'folk-beliefs' },
  { ar: 'طيرة', tr: 'Tiire', en: 'bad omen / ill-omen', cat: 'folk-beliefs' },
  { ar: 'نحس', tr: 'na7s', en: 'bad luck / misfortune', cat: 'folk-beliefs' },
  { ar: 'حظ', tr: '7azz', en: 'luck / fortune', cat: 'folk-beliefs' },
  { ar: 'نصيب', tr: 'naSiib', en: 'fate / destiny / one\'s lot', cat: 'folk-beliefs' },
  { ar: 'قسمة', tr: 'qisme', en: 'one\'s destined share / fate', cat: 'folk-beliefs' },
  { ar: 'سعد', tr: 'sa3d', en: 'good fortune / lucky star', cat: 'folk-beliefs' },
  // fate-expressions
  { ar: 'ما شاء الله', tr: 'maashalla', en: 'what God wills (said admiringly to ward off envy)', cat: 'fate-expressions' },
  { ar: 'إن شاء الله', tr: 'inshalla', en: 'if God wills / hopefully', cat: 'fate-expressions' },
  { ar: 'الله يحميك', tr: 'alla y7miik', en: 'may God protect you', cat: 'fate-expressions' },
  { ar: 'الله معك', tr: 'alla ma3ak', en: 'may God be with you', cat: 'fate-expressions' },
  { ar: 'بإذن الله', tr: 'bi-izn alla', en: 'with God\'s permission / by God\'s leave', cat: 'fate-expressions' },
  { ar: 'مكتوب', tr: 'maktub', en: 'it is written / it was fated', cat: 'fate-expressions' },
  { ar: 'ربّنا بيعرف', tr: 'rabbna byi3ref', en: 'God knows best', cat: 'fate-expressions' },
  { ar: 'بيد الله', tr: 'beid alla', en: 'in God\'s hands / up to God', cat: 'fate-expressions' },
  // folk-remedies
  { ar: 'خزعبلات', tr: 'khaz3abalaat', en: 'superstitions / old wives\' tales (pl.)', cat: 'folk-remedies' },
  { ar: 'عقد', tr: '3u2ad', en: 'knots (tied in string for folk magic)', cat: 'folk-remedies' },
  { ar: 'ملح', tr: 'mle7', en: 'salt (used to ward off evil)', cat: 'folk-remedies' },
  { ar: 'دخّن', tr: 'dakhkhan', en: 'to fumigate / burn incense (for protection)', cat: 'folk-remedies' },
  { ar: 'تميمة', tr: 'tmiime', en: 'amulet / protective charm worn on body', cat: 'folk-remedies' },
  { ar: 'زيت الزيتون', tr: 'zeit il-zeitoon', en: 'olive oil (used in folk healing rituals)', cat: 'folk-remedies' },
  // phrases
  { ar: 'بعيد الشر', tr: 'b3iid il-shar', en: 'far from evil / touch wood (deflecting bad luck)', cat: 'phrases' },
  { ar: 'حسبي الله', tr: '7asbi alla', en: 'God is sufficient for me (when facing difficulty)', cat: 'phrases' },
  { ar: 'سحر اسمو', tr: 'sa7r ismo', en: 'it\'s (like) a spell / something has a charm to it', cat: 'phrases' },
  { ar: 'من الحسد', tr: 'min il-7asad', en: 'from envy (blaming misfortune on someone\'s jealousy)', cat: 'phrases' },
  { ar: 'شو بدّو يكون', tr: 'shuu baddoh ykuun', en: 'what will be will be / whatever happens', cat: 'phrases' },
  { ar: 'ما في شي بالصدفة', tr: 'maa fii shi bis-Sudfe', en: 'nothing happens by coincidence', cat: 'phrases' },
  { ar: 'ضرب نصيب', tr: 'Darrab naSiib', en: 'luck struck / fate came through (good news)', cat: 'phrases' },
  { ar: 'طلع فالو', tr: 'Tele3 faalo', en: 'his omen came true / his premonition was right', cat: 'phrases' },
  { ar: 'الله يدفع الشر', tr: 'alla ydfa3 il-shar', en: 'may God repel evil', cat: 'phrases' },
  { ar: 'خوّف', tr: 'khawwaf', en: 'to scare / to give someone a fright (bad omen)', cat: 'phrases' },
];

const FLK_DRILLS = [
  {
    q: 'What does "3ein" mean?',
    opts: ['good luck', 'evil eye', 'amulet', 'fate'],
    correct: 1,
    note: '"3ein" (عين) is the evil eye — a core concept in Lebanese folk belief. Looking at someone with envy or excessive admiration can cause harm.'
  },
  {
    q: 'What is "maashalla" used for?',
    opts: ['to curse someone', 'to say goodbye', 'to ward off envy when admiring something', 'to greet an elder'],
    correct: 2,
    note: '"maashalla" (ما شاء الله) is said when admiring something — a baby, a new car, success — to prevent the evil eye. Never admire without saying it!'
  },
  {
    q: 'What is "khamse"?',
    opts: ['incense', 'the number five / hand of Fatima symbol', 'a type of prayer', 'olive oil ritual'],
    correct: 1,
    note: '"khamse" (خمسة) — the open hand with five fingers — is a protective charm against the evil eye, worn as jewelry or hung in homes.'
  },
  {
    q: 'What does "maktub" mean?',
    opts: ['it is written / fated', 'it is forbidden', 'it is blessed', 'it is lost'],
    correct: 0,
    note: '"maktub" (مكتوب) — literally "written" — means something was destined to happen. Fatalistic acceptance is common in Lebanese expression.'
  },
  {
    q: 'What does "b3iid il-shar" mean?',
    opts: ['may evil come near', 'far from evil / touch wood', 'the evil has arrived', 'ward off bad people'],
    correct: 1,
    note: '"b3iid il-shar" (بعيد الشر) is said when mentioning something bad to deflect it — equivalent to knocking on wood in English culture.'
  },
  {
    q: 'What is "naSiib"?',
    opts: ['incense', 'bad luck', 'fate / destiny / one\'s lot', 'a folk remedy'],
    correct: 2,
    note: '"naSiib" (نصيب) means fate or one\'s destined share. "Darrab naSiib" means luck struck — fate delivered something good.'
  },
  {
    q: 'What does "maa t7asdni" mean?',
    opts: ['don\'t give me the evil eye / don\'t jinx me', 'don\'t forget me', 'don\'t envy my enemies', 'don\'t look at me'],
    correct: 0,
    note: '"maa t7asdni" (ما تحسدني) — don\'t jinx me! Said when sharing good news to protect it from the evil eye.'
  },
  {
    q: 'What is "bkhuur" used for in folk belief?',
    opts: ['cooking', 'warding off the evil eye / purification', 'making amulets', 'telling omens'],
    correct: 1,
    note: '"bkhuur" (بخور) — incense — is burned to purify a space or person from the evil eye. Very common in Lebanese households when someone falls ill.'
  },
  {
    q: 'What does "7asbi alla" express?',
    opts: ['I am very happy', 'God is sufficient for me (facing difficulty)', 'I need help from others', 'I am grateful for wealth'],
    correct: 1,
    note: '"7asbi alla" (حسبي الله) is said when facing hardship or injustice — a deeply felt expression meaning God alone is enough.'
  },
  {
    q: 'What does "min il-7asad" mean?',
    opts: ['from good fortune', 'from envy (blaming misfortune on jealousy)', 'from a doctor', 'from the village elder'],
    correct: 1,
    note: '"min il-7asad" (من الحسد) — blaming something bad on someone\'s envy. Common explanation for unexplained illness or bad luck in Lebanese culture.'
  },
];

const FLK_TIPS = [
  '"Maashalla" is non-negotiable in Lebanese culture. Never admire a baby, a new house, someone\'s success, or their looks without saying it. Forgetting is considered rude or even harmful — you\'re seen as giving the evil eye.',
  'The evil eye (3ein) belief is not considered "backward" — it\'s deeply embedded in educated, urban Lebanese life too. Blue eye charms (khamse) are sold in Beirut boutiques alongside designer goods.',
  'Fate vocabulary (naSiib, qisme, maktub) is used constantly in everyday speech, not just in religious contexts. "That\'s naSiib" explains everything from a missed bus to a failed relationship.',
  'When someone sneezes, say "sa77a" (health) or "alla yshaffiik" (may God heal you). When someone has good news, protect it with "maashalla" and "alla y7miik" (may God protect you).',
  'The phrase "inshalla" has three tones: sincere (truly hopeful), polite deflection (probably won\'t happen), and sarcastic (definitely won\'t happen). Context and tone are everything.',
];

const FLK_ABOUT = 'Lebanese folk belief is a rich blend of pre-Islamic superstition, Islamic fatalism, and Mediterranean folk wisdom. The evil eye (3ein) is taken seriously across all religious communities — Christian and Muslim Lebanese alike hang blue khamse charms and say maashalla. Folk remedies often involve incense (bkhuur), salt, olive oil, or knotted string. Fate language (naSiib, maktub, inshalla, bi-izn alla) permeates everyday speech and reflects a deep cultural acceptance that some things lie beyond human control. Understanding these expressions helps you respond appropriately to news, navigate social expectations, and connect authentically with Lebanese people.';
