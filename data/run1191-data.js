// R1191 — NEW FEATURE: Lebanese Olive Harvest Culture (ztn)

const ZTN_WORDS = [
  { ar: 'زيتون', tr: 'zaytoun', en: 'olives' },
  { ar: 'دولة الزيتون', tr: 'dawlet ez-zaytoun', en: 'olive tree (lit. state/nation of the olive)' },
  { ar: 'موسم الزيتون', tr: 'mawsam ez-zaytoun', en: 'olive harvest season' },
  { ar: 'معصرة', tr: 'ma3sara', en: 'olive press / mill' },
  { ar: 'زيت زيتون', tr: 'zeit zaytoun', en: 'olive oil' },
  { ar: 'زيت أول', tr: 'zeit awwal', en: 'first-press / extra virgin oil' },
  { ar: 'قطاف', tr: '2ata2', en: 'olive picking / harvesting' },
  { ar: 'بساط', tr: 'bsat', en: 'tarp / net spread under tree to catch olives' },
  { ar: 'مشط', tr: 'mesht', en: 'rake / comb for knocking olives off branches' },
  { ar: 'زيتون أخضر', tr: 'zaytoun akhdar', en: 'green olives (unripe)' },
  { ar: 'زيتون أسود', tr: 'zaytoun aswad', en: 'black / ripe olives' },
  { ar: 'مصبّنة', tr: 'msabbane', en: 'brined / pickled olives' },
  { ar: 'مؤنّسة', tr: 'mo2annase', en: 'marinated / spiced olives' },
  { ar: 'جفت', tr: 'jeft', en: 'olive pomace (pressed pulp leftover)' },
  { ar: 'رح عالزيت', tr: 'ra7 3a-z-zeit', en: "going olive picking (lit. going to the oil)" },
  { ar: 'حصاد', tr: '7sade', en: 'harvest / reaping' },
  { ar: 'صابون زيتون', tr: 'saboun zaytoun', en: 'olive oil soap' },
  { ar: 'شتلة', tr: 'shatle', en: 'seedling / young olive sapling' },
  { ar: 'تقليم', tr: 'ta2lim', en: 'pruning (olive trees after harvest)' },
  { ar: 'ضيعة', tr: 'day3a', en: "village / family plot (land passed down generations)" },
];

const ZTN_DRILLS = [
  { q: '"Ma3sara" is:', opts: ['olive press / mill', 'olive tree', 'harvest season', 'olive oil'], ans: 0 },
  { q: '"Jeft" means:', opts: ['olive pomace (pressed pulp)', 'olive soap', 'olive picking', 'catch tarp'], ans: 0 },
  { q: '"Dawlet ez-zaytoun" literally means:', opts: ['olive tree (lit. nation of the olive)', 'olive oil factory', 'olive harvest', 'olive grove'], ans: 0 },
  { q: '"Ra7 3a-z-zeit" literally means:', opts: ['going olive picking (lit. going to the oil)', 'going to buy oil', 'going to the press', 'going to the village'], ans: 0 },
  { q: '"Msabbane" olives are:', opts: ['brined / pickled', 'marinated with spices', 'green and unripe', 'pressed for oil'], ans: 0 },
  { q: 'The "bsat" is spread for:', opts: ['catching falling olives under the tree', 'pressing olives', 'brining olives', 'pruning branches'], ans: 0 },
  { q: '"Zeit awwal" means:', opts: ['first-press / extra virgin oil', 'second-press oil', 'refined oil', 'olive pomace oil'], ans: 0 },
  { q: '"Ta2lim" at an olive grove means:', opts: ['pruning', 'harvesting', 'pressing', 'planting saplings'], ans: 0 },
];

const ZTN_TIPS = [
  {
    title: 'The October Ritual',
    body: "Lebanon's olive harvest runs October–November. Entire families return to their villages (day3a) for the 2ata2. \"Ra7 3a-z-zeit\" is one of the most beloved phrases in Lebanese life — it signals autumn has arrived. Children miss school, city families rent cars, and WhatsApp groups light up: \"2ata2 thlete2 el-sabet\" (harvest this Saturday). Northern Lebanon (Koura, Zgharta) and the South produce the most.",
  },
  {
    title: 'The Village Ma3sara',
    body: "Every Lebanese village has its ma3sara (olive press). Families queue for hours to press the same day they pick — freshness matters. The first golden trickle of zeit awwal (extra virgin) is tasted immediately on khobz markouk (thin flatbread). The smell of fresh-pressed oil in October is one of Lebanon's most iconic sensory memories. Some presses run 24 hours during peak season.",
  },
  {
    title: 'Lebanese Olive Varieties',
    body: "Lebanon grows several traditional varieties: Soury (sour, small, South Lebanon), Rumi (large, North), and Debs (Syrian-origin, prized for oil yield). Each village swears its olives make the best zeit. Msabbane (brined) and mo2annase (marinated with thyme, chili, lemon) olives are prepared at home — recipes pass through generations without being written down.",
  },
  {
    title: 'Olive Oil in Lebanese Daily Life',
    body: "\"Zeit w za3tar\" (olive oil and thyme) is the Lebanese breakfast — no household runs out. Olive oil is drizzled on hummus, labneh, fattoush. Saboun zaytoun (olive oil soap) from the Levant region was traded for centuries. Giving someone a tin of your own zeit awwal is a serious gift. Jeft (pomace) is traditionally burned as fuel or used in cheap soap — nothing is wasted.",
  },
];
