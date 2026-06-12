// R924 — NEW FEATURE: Lebanese Proverbs & Wisdom (prw)

const PRW_WORDS = [
  { ar: 'إيدك ما بتوصل', tr: 'iidhak ma btooSal', en: 'your hand can\'t reach (don\'t aim too high)' },
  { ar: 'دق الحديد وهو حامي', tr: 'du22 el-7adiid w-huwwe 7aami', en: 'strike the iron while it\'s hot' },
  { ar: 'الكذب ما بدوم', tr: 'el-kidhib ma bduum', en: 'lies don\'t last' },
  { ar: 'الجار قبل الدار', tr: 'el-jaar 2abel ed-daar', en: 'the neighbor before the house (choose neighbors wisely)' },
  { ar: 'بعد الضيقة فرجة', tr: 'ba3d ed-dii2a, farje', en: 'after hardship comes relief' },
  { ar: 'اللي بحكي كتير بغلط كتير', tr: 'elli b7ki ktiir byeghla T ktiir', en: 'whoever talks a lot, errs a lot' },
  { ar: 'العين ما بتعلى ع الحاجب', tr: 'el-3een ma bti3la 3al-7aajeb', en: 'the eye can\'t be higher than the eyebrow (respect hierarchy)' },
  { ar: 'حكي الليل بيمحيه النهار', tr: '7aki el-leel byim7ii en-nhaar', en: 'night talk is erased by day (don\'t take late-night words too seriously)' },
  { ar: 'الغايب حجته معه', tr: 'el-ghaayeb 7ujjto ma3o', en: 'the absent one has his excuse (don\'t judge those who aren\'t here)' },
  { ar: 'من حفر حفرة وقع فيها', tr: 'min 7afar 7afre wa2a3 fiha', en: 'whoever digs a pit falls into it' },
  { ar: 'الوقت من ذهب', tr: 'el-wa2t min dhahab', en: 'time is gold' },
  { ar: 'اللي شافك ما حدا ضحك عليه', tr: 'elli shaafak ma 7ada Di7ak 3alee', en: 'whoever saw you, no one laughed at them (you\'re not alone in your struggle)' },
  { ar: 'الصبر مفتاح الفرج', tr: 'eS-Sabr miftaa7 el-faraj', en: 'patience is the key to relief' },
  { ar: 'كل بير إلو دلو', tr: 'kull biir ilo dalw', en: 'every well has its bucket (everyone has their method)' },
  { ar: 'مش كل يوم جمعة', tr: 'mish kull yoom jum3a', en: 'not every day is Friday (good days don\'t come every day)' },
  { ar: 'الدم ما بيصير ماي', tr: 'ed-damm ma byiSiir maay', en: 'blood doesn\'t become water (family ties are unbreakable)' },
  { ar: 'على قد لحافك مد رجليك', tr: '3a 2add li7aafak mudd rijlee k', en: 'stretch your legs as long as your blanket (live within your means)' },
  { ar: 'مع الذيب تعوي', tr: 'ma3 edh-dhiib t3awwi', en: 'howl with wolves you run with (adapt to your company)' },
  { ar: 'كلمتك مسمار', tr: 'kilmtak mismaar', en: 'your word is a nail (keep your promises)' },
  { ar: 'من جد وجد', tr: 'man jadda wajada', en: 'whoever strives, finds (hard work pays off)' },
  { ar: 'الحسد يأكل صاحبو', tr: 'el-7asad yookol SaaHbo', en: 'envy eats its owner' },
  { ar: 'رح يجي يوم وتفرح', tr: 'ra7 yiiji yoom w-tifra7', en: 'a day will come when you\'ll be happy (things will get better)' },
  { ar: 'الصمت من ذهب', tr: 'eS-Samt min dhahab', en: 'silence is gold' },
  { ar: 'شو ما دار دار بالأهل', tr: 'shu ma daar, daar bil-ahl', en: 'whatever happens, family is home' },
  { ar: 'الحق مر', tr: 'el-7a22 murr', en: 'the truth is bitter' },
  { ar: 'اللي فاتك مات', tr: 'elli faatik maat', en: 'what has passed is dead (let go of the past)' },
  { ar: 'بكرا أحسن من هلق', tr: 'bukra a7san min halla2', en: 'tomorrow is better than now (be patient)' },
  { ar: 'الحكي بالكيل', tr: 'el-7aki bil-keel', en: 'words come in measure (think before you speak)' }
];

const PRW_DRILLS = [
  { q: 'What does "el-jaar 2abel ed-daar" mean?', opts: ['Time is gold', 'The neighbor before the house', 'Strike while iron is hot', 'Blood is thicker than water'], ans: 1 },
  { q: 'What is the meaning of "ba3d ed-dii2a, farje"?', opts: ['Lies don\'t last', 'After hardship comes relief', 'Every well has its bucket', 'Patience is key'], ans: 1 },
  { q: 'How do you say "time is gold"?', opts: ['eS-Sabr miftaa7 el-faraj', 'el-wa2t min dhahab', 'el-7a22 murr', 'eS-Samt min dhahab'], ans: 1 },
  { q: 'What does "ed-damm ma byiSiir maay" mean?', opts: ['Blood becomes water', 'Blood doesn\'t become water (family is unbreakable)', 'Water is precious', 'Family is hard'], ans: 1 },
  { q: 'What is "eS-Sabr miftaa7 el-faraj"?', opts: ['Silence is gold', 'Time is gold', 'Patience is the key to relief', 'Truth is bitter'], ans: 2 },
  { q: 'How do you say "silence is gold"?', opts: ['el-wa2t min dhahab', 'eS-Samt min dhahab', 'kilmtak mismaar', 'el-7a22 murr'], ans: 1 },
  { q: 'What does "kilmtak mismaar" mean?', opts: ['Your word is a nail (keep promises)', 'Silence is a nail', 'Time is gold', 'The truth is a hammer'], ans: 0 },
  { q: 'What is "man jadda wajada"?', opts: ['Lies don\'t last', 'Whoever strives finds', 'Every day is Friday', 'Strike the iron'], ans: 1 },
  { q: 'What does "el-7a22 murr" mean?', opts: ['The truth is bitter', 'Blood is bitter', 'The neighbor is bitter', 'Lies are bitter'], ans: 0 },
  { q: 'How do you say "let go of the past"?', opts: ['bukra a7san min halla2', 'elli faatik maat', 'el-7asad yookol SaaHbo', '7aki el-leel'], ans: 1 },
  { q: 'What does "3a 2add li7aafak mudd rijlee k" mean?', opts: ['Sleep well', 'Stretch legs as long as blanket (live within means)', 'Work hard like a nail', 'Silence is golden'], ans: 1 },
  { q: 'What is "el-7asad yookol SaaHbo"?', opts: ['Envy eats its owner', 'Patience eats time', 'Truth eats lies', 'Family eats well'], ans: 0 },
  { q: 'What does "du22 el-7adiid w-huwwe 7aami" mean?', opts: ['Gold is precious', 'Strike the iron while it\'s hot', 'Blood doesn\'t become water', 'Patience is key'], ans: 1 },
  { q: 'How do you say "whoever talks a lot, errs a lot"?', opts: ['el-kidhib ma bduum', 'elli b7ki ktiir byeghla T ktiir', 'el-7aki bil-keel', 'el-Sabr miftaa7'], ans: 1 },
  { q: 'What does "shu ma daar, daar bil-ahl" mean?', opts: ['Whatever happens, family is home', 'Every house has a family', 'Neighbors are family', 'Home is where the heart is'], ans: 0 },
  { q: 'What is "el-ghaayeb 7ujjto ma3o"?', opts: ['The absent one is guilty', 'The absent one has his excuse', 'Night talk fades', 'Whoever digs falls'], ans: 1 }
];

const PRW_TIPS = [
  { title: 'Lebanese Proverb Culture', body: 'In Lebanon, proverbs (amthaal — أمثال) are the currency of everyday speech. An argument ends with a proverb. A grandparent\'s advice comes as a proverb. A proverb defuses tension at a dinner table that was about to explode. Lebanese proverbs are a compressed version of the culture: fatalism balanced with hustle, hospitality balanced with suspicion of outsiders, family loyalty above everything. The art is knowing which proverb fits the moment. A well-placed proverb signals wisdom and age, even when spoken by a 25-year-old.' },
  { title: 'Family & Loyalty Proverbs', body: '"Ed-damm ma byiSiir maay" (blood doesn\'t become water) is the Lebanese family creed — family loyalty above personal preference, always. "El-jaar 2abel ed-daar" (neighbor before the house) speaks to the importance of community — in Lebanon\'s sectarian geography, your neighbors define your safety. "Shu ma daar, daar bil-ahl" (whatever happens, family is home) — this is quoted at every airport farewell, every crisis, every decision whether to emigrate or stay.' },
  { title: 'Patience & Hardship Proverbs', body: '"Ba3d ed-dii2a, farje" (after hardship, relief) is the Lebanese national resilience mantra. A country that has survived civil war, assassinations, economic collapse, and explosions uses this constantly — not as denial, but as earned wisdom. "Bukra a7san min halla2" (tomorrow is better than now) pairs with it. "Raa7 yiiji yoom w-tifra7" (a day will come when you\'re happy) is said to someone crying. Patience (sabr) runs deep in Lebanese culture — but it coexists with ferocious ambition.' },
  { title: 'Warning & Wisdom Proverbs', body: '"El-kidhib ma bduum" (lies don\'t last) is a warning issued before someone is caught. "Min 7afar 7afre wa2a3 fiha" (whoever digs a pit falls into it) is said with satisfaction when a schemer gets caught. "El-7aki bil-keel" (words come in measure) tells you to think before speaking — Lebanese culture rewards verbal precision and sharp wit, but punishes verbal excess. "Ma3 edh-dhiib t3awwi" (howl with the wolf) is practical, not cynical — adapt to survive.' },
  { title: 'Everyday Wisdom', body: '"El-wa2t min dhahab" (time is gold) is spray-painted on Beirut walls, printed on notebooks. "El-Samt min dhahab" (silence is gold) is the Lebanese version — but ironic, since Lebanese silence is rare. "3a 2add li7aafak mudd rijlee k" (stretch your legs as long as your blanket) is financial wisdom delivered by anyone watching you overspend. "Kilmtak mismaar" (your word is a nail) — breaking a promise is a serious social offense in Lebanon. A nailed word cannot be pulled back.' }
];
