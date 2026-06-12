// R798 — NEW FEATURE: Lebanese Checkpoints & Security Phrases (chk)

const CHK_CATS = ['documents','commands','responses','phrases'];

const CHK_WORDS = [
  // documents
  { a: 'هوية', tr: 'hawiyye', en: 'ID card / identity document', cat: 'documents' },
  { a: 'جواز سفر', tr: 'jawwaz safar', en: 'passport', cat: 'documents' },
  { a: 'رخصة', tr: 'rkhse', en: 'licence / permit', cat: 'documents' },
  { a: 'وثيقة', tr: 'wasiiqe', en: 'official document', cat: 'documents' },
  { a: 'إذن مرور', tr: '2izn muruur', en: 'transit permit / pass', cat: 'documents' },
  { a: 'مسؤول', tr: 'mas2uul', en: 'official / person in charge', cat: 'documents' },
  { a: 'عسكر', tr: '3askar', en: 'soldier / military', cat: 'documents' },
  // commands
  { a: 'وقّف', tr: 'wa22ef', en: 'stop / halt', cat: 'commands' },
  { a: 'تعال هون', tr: 'ta3al hon', en: 'come here', cat: 'commands' },
  { a: 'نزّل من السيارة', tr: 'nazzil mn l-sayyaara', en: 'get out of the car', cat: 'commands' },
  { a: 'فتّش', tr: 'fattesh', en: 'search / inspect', cat: 'commands' },
  { a: 'دير بالك', tr: 'diir baalak', en: 'pay attention / watch out', cat: 'commands' },
  { a: 'شيل إيدك', tr: 'shiil 2iiidak', en: 'raise your hands / take your hands away', cat: 'commands' },
  // responses
  { a: 'أنا لبناني', tr: '2ana lubnaanii', en: 'I am Lebanese', cat: 'responses' },
  { a: 'ما في مشكلة', tr: 'ma fii mushkle', en: 'no problem / nothing wrong', cat: 'responses' },
  { a: 'كلو تمام', tr: 'killo tamaam', en: 'everything is fine', cat: 'responses' },
  { a: 'رح مشاوير', tr: 'ra7 mshaawer', en: 'going on errands', cat: 'responses' },
  { a: 'بدي رجع عالبيت', tr: 'baddii rja3 3al-beet', en: 'I want to go back home', cat: 'responses' },
  { a: 'أنا مش من هون', tr: '2ana mish min hon', en: "I'm not from here", cat: 'responses' },
  { a: 'ما بعرف كتير عربي', tr: 'ma b3ref ktiir 3arabii', en: "I don't know much Arabic", cat: 'responses' },
  // phrases
  { a: 'في حاجة؟', tr: 'fii 7aaje?', en: 'is there something? / any issue?', cat: 'phrases' },
  { a: 'شو في ما في؟', tr: 'shu fii ma fii?', en: "what's going on? (lit: what is what isn't)", cat: 'phrases' },
  { a: 'انبسط', tr: '2inbasaT', en: 'relax / cool down (informal command)', cat: 'phrases' },
  { a: 'لازم تصبر', tr: 'laazem tSabber', en: 'you have to be patient', cat: 'phrases' },
  { a: 'امشي', tr: '2imshii', en: 'go / move along', cat: 'phrases' },
  { a: 'تفضّل', tr: 'tfaDDal', en: 'go ahead / you\'re welcome to proceed', cat: 'phrases' },
  { a: 'الحاجز', tr: 'l-7aajez', en: 'the checkpoint / roadblock', cat: 'phrases' },
  { a: 'حارس', tr: '7aares', en: 'guard', cat: 'phrases' }
];

const CHK_DRILLS = [
  { q: 'What is "hawiyye"?', a: 'ID card / identity document', hint: 'you carry it always' },
  { q: '"Wa22ef" means...', a: 'stop / halt', hint: 'what a soldier shouts' },
  { q: 'How do you say "get out of the car"?', a: 'nazzil mn l-sayyaara', hint: 'nazzil = bring down' },
  { q: '"2ana lubnaanii" means...', a: 'I am Lebanese', hint: 'useful at checkpoints' },
  { q: 'What is "l-7aajez"?', a: 'the checkpoint / roadblock', hint: 'the physical barrier' },
  { q: '"Killo tamaam" means...', a: 'everything is fine', hint: 'tamaam = complete/fine' },
  { q: '"Fattesh" means...', a: 'search / inspect', hint: 'what happens at checkpoints' },
  { q: 'How do you say "go ahead / proceed"?', a: 'tfaDDal', hint: 'also means "please, help yourself"' },
  { q: '"Jawwaz safar" is...', a: 'passport', hint: 'jawwaz = permit, safar = travel' },
  { q: '"Ma fii mushkle" means...', a: 'no problem / nothing wrong', hint: 'reassuring phrase' },
  { q: '"2imshii" means...', a: 'go / move along', hint: 'said to dismiss someone' },
  { q: 'What does "diir baalak" mean?', a: 'pay attention / watch out', hint: 'also used as a general warning' },
  { q: '"Rkhse" is...', a: 'licence / permit', hint: 'e.g. driving licence' },
  { q: '"2inbasaT" means...', a: 'relax / cool down', hint: 'from inbasaT = to be relaxed' },
  { q: '"3askar" means...', a: 'soldier / military', hint: 'from 3askar = army' }
];

const CHK_TIPS = [
  'Lebanon has had many checkpoint eras — army, Hezbollah, PSP, ISF. Each has different protocols but the vocabulary stays the same.',
  'Always have your "hawiyye" (ID) or "jawwaz safar" (passport) accessible. Being slow to produce ID raises suspicion.',
  '"Killo tamaam" (everything\'s fine) and calm body language matter more than perfect grammar at a checkpoint.',
  '"TfaDDal" from a soldier means you can proceed — it\'s a green light. "2imshii" is the same but more abrupt.',
  'Foreigners can say "ma b3ref ktiir 3arabii" (I don\'t know much Arabic) — soldiers often switch to basic English.',
  '"Shu fii ma fii?" is heard soldier-to-soldier or between locals — a catch-all for "what\'s going on?"'
];
