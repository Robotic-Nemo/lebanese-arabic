// R921 — NEW FEATURE: Lebanese Coffee Shop & Café Culture (cfs)

const CFS_WORDS = [
  { ar: 'قهوة', tr: '2ahwe', en: 'coffee (Lebanese Arabic)' },
  { ar: 'قهوة عربية', tr: '2ahwe 3arabiyye', en: 'Arabic coffee (cardamom coffee)' },
  { ar: 'قهوة تركية', tr: '2ahwe turkiyye', en: 'Turkish coffee' },
  { ar: 'نسكافيه', tr: 'nescafe', en: 'Nescafé / instant coffee' },
  { ar: 'كابتشينو', tr: 'kapuchino', en: 'cappuccino' },
  { ar: 'لاتيه', tr: 'laate', en: 'latte' },
  { ar: 'إسبريسو', tr: 'espresso', en: 'espresso' },
  { ar: 'قهوة باردة', tr: '2ahwe barde', en: 'iced coffee' },
  { ar: 'قهوة حلوة', tr: '2ahwe 7ilwe', en: 'sweet coffee' },
  { ar: 'قهوة مرة', tr: '2ahwe murra', en: 'bitter coffee (no sugar)' },
  { ar: 'قهوة وسط', tr: '2ahwe wasa T', en: 'medium sugar coffee' },
  { ar: 'شاي نعنع', tr: 'shaay na3na3', en: 'mint tea' },
  { ar: 'شاي مرامية', tr: 'shaay maraamiyye', en: 'sage tea' },
  { ar: 'كافيه', tr: 'kaafe', en: 'café / coffee shop' },
  { ar: 'جلسة', tr: 'jalse', en: 'sitting / hangout session at café' },
  { ar: 'فنجان', tr: 'finjaan', en: 'coffee cup' },
  { ar: 'قرأ الفنجان', tr: '2ara l-finjaan', en: 'read the coffee cup (fortune telling)' },
  { ar: 'أركيلة', tr: 'argiile', en: 'hookah / nargileh' },
  { ar: 'حجر', tr: '7ajar', en: 'hookah coal' },
  { ar: 'شيشة', tr: 'shiishe', en: 'hookah (alternate term)' },
  { ar: 'معسل', tr: 'ma3ssel', en: 'flavored hookah tobacco' },
  { ar: 'استوى الأركيلة', tr: 'istawa l-argiile', en: 'the hookah is ready' },
  { ar: 'نرد', tr: 'nard', en: 'backgammon' },
  { ar: 'شدة', tr: 'shidde', en: 'cards game' },
  { ar: 'مزة كافيه', tr: 'mazze kaafe', en: 'café snacks / small bites' },
  { ar: 'وصلنا على الكافيه', tr: 'wSilna 3a l-kaafe', en: 'we arrived at the café' },
  { ar: 'دور جلسة', tr: 'dor jalse', en: 'reserve a table / seating spot' },
  { ar: 'الأجواء حلوة', tr: 'el-ajwaa 7ilwe', en: 'the atmosphere is nice' }
];

const CFS_DRILLS = [
  { q: 'How do you say "coffee" in Lebanese?', opts: ['shaay', 'laate', '2ahwe', 'espresso'], ans: 2 },
  { q: 'What is "2ahwe 3arabiyye"?', opts: ['Iced coffee', 'Arabic coffee with cardamom', 'Turkish coffee', 'Latte'], ans: 1 },
  { q: 'How do you say "bitter coffee (no sugar)"?', opts: ['2ahwe 7ilwe', '2ahwe murra', '2ahwe wasa T', 'nescafe'], ans: 1 },
  { q: 'What does "argiile" mean?', opts: ['Backgammon', 'Coffee cup', 'Hookah', 'Card game'], ans: 2 },
  { q: 'How do you say "mint tea"?', opts: ['shaay maraamiyye', 'shaay na3na3', '2ahwe barde', 'kapuchino'], ans: 1 },
  { q: 'What is "jalse"?', opts: ['Coffee type', 'Sitting/hangout session', 'Hookah coal', 'Fortune telling'], ans: 1 },
  { q: 'How do you say "read the coffee cup"?', opts: ['2ara l-finjaan', 'dor jalse', 'istawa l-argiile', 'nard'], ans: 0 },
  { q: 'What does "ma3ssel" mean?', opts: ['Coffee cup', 'Hookah tobacco', 'Sage tea', 'Medium sugar'], ans: 1 },
  { q: 'How do you say "iced coffee"?', opts: ['2ahwe 7ilwe', '2ahwe turkiyye', '2ahwe barde', 'laate'], ans: 2 },
  { q: 'What is "nard"?', opts: ['Hookah', 'Backgammon', 'Cards', 'Tea'], ans: 1 },
  { q: 'How do you say "the hookah is ready"?', opts: ['istawa l-argiile', 'wSilna 3a l-kaafe', 'dor jalse', '7ajar'], ans: 0 },
  { q: 'What does "finjaan" mean?', opts: ['Café', 'Backgammon board', 'Coffee cup', 'Snacks'], ans: 2 },
  { q: 'How do you say "medium sugar coffee"?', opts: ['2ahwe murra', '2ahwe 7ilwe', '2ahwe wasa T', '2ahwe barde'], ans: 2 },
  { q: 'What is "el-ajwaa 7ilwe"?', opts: ['Sweet coffee', 'The atmosphere is nice', 'Hookah is ready', 'We arrived'], ans: 1 },
  { q: 'How do you say "sage tea"?', opts: ['shaay na3na3', '2ahwe 3arabiyye', 'shaay maraamiyye', 'nescafe'], ans: 2 },
  { q: 'What does "wSilna 3a l-kaafe" mean?', opts: ['We ordered coffee', 'We arrived at the café', 'We reserved a table', 'We drank coffee'], ans: 1 }
];

const CFS_TIPS = [
  { title: 'The Lebanese Coffee Ritual', body: 'In Lebanon, "2ahwe" (coffee) is a social institution, not a beverage. Visits begin with coffee — refusing it is a mild insult. Arabic coffee (2ahwe 3arabiyye) is cardamom-scented, served in small cups called "finjaan," and poured from a long-beaked "dalla" pot. After drinking, the cup is turned upside down on the saucer and left to dry — this is the base for coffee-cup fortune telling (2ara l-finjaan). Every grandmother and many café owners offer readings.' },
  { title: 'Café Culture & "Jalse"', body: '"Jalse" (جلسة) — a sitting, a session — is the Lebanese concept of extended café time. A jalse is not just coffee; it\'s 2-3 hours minimum, hookah mandatory, backgammon or cards on the table, and endless refills. Lebanese cafés (kaafe) don\'t rush you. The bill arrives when you ask for it. Reserving a "jalse" spot (dor jalse) at a popular outdoor café on weekends is serious planning. The atmosphere (el-ajwaa) is evaluated the moment you walk in.' },
  { title: 'The Hookah (Argiile)', body: '"Argiile" (أركيلة) — hookah/nargileh — is inseparable from Lebanese café culture. You don\'t order coffee without considering an argiile. The flavored tobacco (ma3ssel) comes in apple, grape, mint, and mixed. The hookah man (the argiilejii) manages the coals (7ajar) and refreshes your coals every 20 minutes. "Istawa l-argiile" (it\'s ready) is one of the best sentences in Lebanese Arabic. An argiile at a Gemmayzeh café in the evening is peak Beirut.' },
  { title: 'Tea as Hospitality', body: 'Lebanese tea — shaay — is an act of hospitality. Mint tea (shaay na3na3) is the most common: fresh mint leaves in boiling water with sugar. Sage tea (shaay maraamiyye) is the medicinal option — drunk for colds, stomach aches, anxiety. Offered to guests in homes and small cafés. In villages, you will receive shaay before you sit down. Refusing tea from an elder is awkward; accepting is easy and earns warmth.' },
  { title: 'Games at the Café', body: 'Two games define Lebanese café culture: nard (backgammon) and shidde (a Lebanese card game similar to tarneeb). Both are played loudly, with trash talk (nekked), table-slapping, and arguments about rules that have been debated for 50 years. Nard uses a specific Lebanese counting style. Losing at nard means buying the next round of coffee. Watching strangers play nard at a village café for an hour teaches you more Lebanese Arabic than any textbook.' }
];
