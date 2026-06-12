// R813 — NEW FEATURE: Lebanese Fruits & Orchards (frt)

const FRT_CATS = ['fruits','orchard','vendors','expressions'];

const FRT_WORDS = [
  // fruits
  { a: 'تفاحة', tr: 'tuffaa7a', en: 'apple', cat: 'fruits' },
  { a: 'عنب', tr: '3anab', en: 'grapes', cat: 'fruits' },
  { a: 'تين', tr: 'teen', en: 'figs', cat: 'fruits' },
  { a: 'خوخ', tr: 'khawkh', en: 'peaches', cat: 'fruits' },
  { a: 'مشمش', tr: 'mshmish', en: 'apricots', cat: 'fruits' },
  { a: 'كرز', tr: 'karaz', en: 'cherries', cat: 'fruits' },
  { a: 'برتقال', tr: 'burtu2aal', en: 'oranges', cat: 'fruits' },
  { a: 'ليمون', tr: 'laymoun', en: 'lemon / lime', cat: 'fruits' },
  { a: 'موز', tr: 'mawz', en: 'bananas', cat: 'fruits' },
  { a: 'بطيخ', tr: 'baTTiikh', en: 'watermelon', cat: 'fruits' },
  { a: 'دراق', tr: 'draa2', en: 'nectarine / draa2 (Lebanese peach variety)', cat: 'fruits' },
  // orchard
  { a: 'بستان', tr: 'bustaan', en: 'orchard / garden estate', cat: 'orchard' },
  { a: 'شجرة', tr: 'shajara', en: 'tree', cat: 'orchard' },
  { a: 'موسم', tr: 'mawsim', en: 'season (harvest season)', cat: 'orchard' },
  { a: 'حصاد', tr: '7Saad', en: 'harvest', cat: 'orchard' },
  { a: 'قطاف', tr: '2aTTaaf', en: 'fruit picking / harvest (lit: plucking)', cat: 'orchard' },
  { a: 'ناضج', tr: 'naadij', en: 'ripe', cat: 'orchard' },
  { a: 'أخضر', tr: 'akhDar', en: 'unripe / green (of fruit)', cat: 'orchard' },
  // vendors
  { a: 'فراولة', tr: 'fraawle', en: 'strawberries', cat: 'vendors' },
  { a: 'رمان', tr: 'rummaan', en: 'pomegranate', cat: 'vendors' },
  { a: 'إجاص', tr: 'ijaaS', en: 'pear', cat: 'vendors' },
  { a: 'صندوق', tr: 'Sanduu2', en: 'crate / box (of fruit)', cat: 'vendors' },
  { a: 'كيلو', tr: 'kiilo', en: 'kilogram', cat: 'vendors' },
  // expressions
  { a: 'متل التفاحة', tr: 'mtel it-tuffaa7a', en: 'like an apple (healthy/rosy)', cat: 'expressions' },
  { a: 'عقد مثل الليمونة', tr: '3a2ad mtel il-laymouneh', en: 'sour/frowning like a lemon (scowling face)', cat: 'expressions' },
  { a: 'حلو متل العسل', tr: '7elo mtel il-3asal', en: 'sweet as honey', cat: 'expressions' },
  { a: 'طازج', tr: 'Taazij', en: 'fresh', cat: 'expressions' },
  { a: 'الموسم فتح', tr: 'il-mawsim fta7', en: 'the season has opened (fruit is in season)', cat: 'expressions' }
];

const FRT_DRILLS = [
  { q: 'What is "tuffaa7a"?', opts: ['fig','apple','peach','grape'], ans: 1, exp: 'Tuffaa7a = apple — Lebanon grows excellent apples especially in the mountains of Broummana and Ehden' },
  { q: '"3anab" means...', opts: ['oranges','bananas','grapes','figs'], ans: 2, exp: '3anab = grapes — Lebanese grapes are famous; Bekaa Valley wine country grows dozens of varieties' },
  { q: 'What is "teen"?', opts: ['figs','dates','peaches','plums'], ans: 0, exp: 'Teen = fig — Lebanon has many wild fig trees; fresh figs are eaten off branches in summer' },
  { q: '"Bustaan" means...', opts: ['market stall','orchard/garden estate','harvest season','fruit box'], ans: 1, exp: 'Bustaan = orchard or garden estate — family bustaaans are central to Lebanese mountain culture' },
  { q: 'What does "mawsim" mean?', opts: ['tree','harvest','season','ripe'], ans: 2, exp: 'Mawsim = season — Lebanese food culture is intensely seasonal; asking "what\'s in season?" is essential' },
  { q: '"2aTTaaf" means...', opts: ['fruit seller','ripe fruit','fruit picking/harvest','orchard'], ans: 2, exp: '2aTTaaf = picking/plucking harvest — families gather for 2aTTaaf il-zaytoun (olive harvest) as a tradition' },
  { q: 'What is "naadij"?', opts: ['fresh','ripe','unripe','sweet'], ans: 1, exp: 'Naadij = ripe — the key word at any fruit stand; vendors say "naadij kitiir" (very ripe) to upsell' },
  { q: '"Mshmish" means...', opts: ['cherries','peaches','apricots','nectarines'], ans: 2, exp: 'Mshmish = apricots — famous in Lebanese proverb "bikra mshmish" (apricot season = never, like "when pigs fly")' },
  { q: 'What is "rummaan"?', opts: ['watermelon','pomegranate','pear','strawberry'], ans: 1, exp: 'Rummaan = pomegranate — deeply symbolic in Lebanese culture; pomegranate molasses (dibs rummaan) is essential' },
  { q: '"BaTTiikh" means...', opts: ['figs','lemons','watermelon','bananas'], ans: 2, exp: 'BaTTiikh = watermelon — summer staple; vendors thump them to test ripeness (hollow sound = ripe)' },
  { q: 'What does "mtel it-tuffaa7a" mean?', opts: ['sour like a lemon','sweet as honey','like an apple (healthy/rosy)','fresh like morning'], ans: 2, exp: 'Mtel it-tuffaa7a = like an apple — said of someone with healthy rosy cheeks or glowing complexion' },
  { q: '"Taazij" means...', opts: ['ripe','unripe','fresh','sweet'], ans: 2, exp: 'Taazij = fresh — the highest compliment for Lebanese produce; "taazij il-yawm" (fresh today) is the magic phrase' },
  { q: 'What is "Sanduu2" in market context?', opts: ['scale/weight','crate/box of fruit','fruit type','price tag'], ans: 1, exp: 'Sanduu2 = crate/box — buying by the sanduu2 is cheaper than by kilo; families stock up at harvest' },
  { q: '"Karaz" means...', opts: ['apricots','peaches','cherries','plums'], ans: 2, exp: 'Karaz = cherries — Lebanese mountain cherries (esp. from Falougha) are famous for their sweetness' },
  { q: '"Il-mawsim fta7" means...', opts: ['the market is open','the tree is blooming','the season has opened','the harvest is done'], ans: 2, exp: 'Il-mawsim fta7 = the season has opened — signals the arrival of a specific fruit; Lebanese get excited for each season' }
];

const FRT_TIPS = [
  'Lebanese fruit culture follows strict seasonality: spring brings strawberries and cherries, summer brings figs and grapes, autumn brings apples and pomegranates. Saying "mish mawsmoo" (not its season) explains unavailability of any produce.',
  '"Bikra mshmish" (apricot season, lit: tomorrow is apricot day) is the Lebanese expression for "never" — apricots are so fleeting and anticipated that their arrival became a metaphor for perpetual postponement.',
  'The Lebanese orchard (bustaan) is more than a farm — it\'s a social institution. Mountain families host relatives for fruit picking (2aTTaaf), sharing meals under the trees. Olive harvest (2aTTaaf zaytoun) is an annual family reunion.',
  'Lebanese mountain villages are often known for specific fruits: Falougha for cherries, Ehden for apples, Barouk for pomegranates. Locals pride themselves on regional varieties and scoff at imported equivalents.',
  'At Lebanese fruit stands, you rarely pick your own fruit — the vendor selects for you. Protest with "baddii ana ntar" (I want to pick) or trust the vendor\'s "7aaTT 3lek il-a7san" (I\'m giving you the best ones).',
  'Pomegranate molasses (dibs rummaan) is essential to Lebanese cooking — it\'s the sour-sweet element in salads, muhammara, and fattoush. Fresh pomegranate juice (3aSiir rummaan) is pressed at juice stands in autumn.'
];
