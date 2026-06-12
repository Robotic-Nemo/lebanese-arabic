// R1134 — NEW FEATURE: Lebanese Gas Station & Fuel Crisis Culture (bnz)

const BNZ_WORDS = [
  { ar: 'بنزين', tr: 'benziin', en: 'gasoline / petrol' },
  { ar: 'محطة بنزين', tr: 'ma7aTTet benziin', en: 'gas station' },
  { ar: 'مازوت', tr: 'maazuut', en: 'diesel / heating oil' },
  { ar: 'طابور', tr: 'Taabuur', en: 'queue / line (at the station)' },
  { ar: 'فُل', tr: 'full', en: 'full tank' },
  { ar: 'نص بكّ', tr: 'noSS bekk', en: 'half a tank' },
  { ar: 'ما في', tr: 'ma fii', en: 'there is none / out of stock' },
  { ar: 'محروم', tr: 'ma7ruum', en: 'deprived / out of fuel' },
  { ar: 'دبّة', tr: 'dabba', en: 'jerry can / fuel container' },
  { ar: 'مولّد', tr: 'mawalled', en: 'generator' },
  { ar: 'كهربا', tr: 'kahraba', en: 'electricity' },
  { ar: 'تقنين', tr: 'ta2niin', en: 'power rationing' },
  { ar: 'بلّطوا', tr: 'ballaTo', en: 'they blocked (the road in protest)' },
  { ar: 'مخزون', tr: 'makhzuun', en: 'reserve / stockpile' },
  { ar: 'دولار', tr: 'dolaar', en: 'dollar (fuel priced in dollars)' },
  { ar: 'سعر', tr: 'si3r', en: 'price' },
  { ar: 'غلي', tr: '3aliye', en: 'expensive' },
  { ar: 'احتياطي', tr: '2i7tiyaaT', en: 'reserve fuel' },
  { ar: 'خزان', tr: 'khazaan', en: 'tank / reservoir' },
  { ar: 'ضخّ', tr: 'Dakhkh', en: 'to pump (fuel)' },
  { ar: 'ليتر', tr: 'litr', en: 'liter' },
  { ar: 'ما وصّل', tr: 'ma wassal', en: 'did not arrive (fuel delivery)' },
  { ar: 'اشتعل', tr: 'ishta3al', en: 'caught fire / ignited' },
  { ar: 'بيبيبي', tr: 'beebeebee', en: 'honking (impatient in queue)' },
  { ar: 'صفّر', tr: 'Saffar', en: 'ran out completely (the tank emptied)' }
];

const BNZ_DRILLS = [
  {
    q: 'You want a full tank. What do you say?',
    opts: ['full', 'noSS bekk', 'ma fii', 'Taabuur'],
    a: 0
  },
  {
    q: '"ma fii" means:',
    opts: ['there is none', 'full tank', 'jerry can', 'expensive'],
    a: 0
  },
  {
    q: 'The word for "generator" in Lebanese is:',
    opts: ['mawalled', 'khazaan', 'dabba', 'maazuut'],
    a: 0
  },
  {
    q: 'You need a container to carry extra fuel. You grab a:',
    opts: ['dabba', 'litr', 'Taabuur', 'makhzuun'],
    a: 0
  },
  {
    q: '"ta2niin" refers to:',
    opts: ['power rationing', 'diesel oil', 'fuel delivery', 'price increase'],
    a: 0
  },
  {
    q: 'Diesel / heating oil in Lebanese dialect:',
    opts: ['maazuut', 'benziin', 'full', '2i7tiyaaT'],
    a: 0
  },
  {
    q: 'The word "Taabuur" means:',
    opts: ['queue / line', 'gas station', 'liter', 'reservoir'],
    a: 0
  },
  {
    q: '"ma wassal" (the fuel truck) means:',
    opts: ['did not arrive', 'ran out', 'caught fire', 'blocked the road'],
    a: 0
  },
  {
    q: 'To say fuel "ran out completely" (the tank emptied):',
    opts: ['Saffar', 'Dakhkh', '3aliye', 'ballaTo'],
    a: 0
  },
  {
    q: '"kahraba" means:',
    opts: ['electricity', 'gasoline', 'generator', 'rationing'],
    a: 0
  }
];

const BNZ_TIPS = [
  {
    title: 'The Queue Culture',
    body: 'During fuel crises, queuing at a ma7aTTet benziin can take hours. Lebanese developed a whole etiquette: you "take a number," leave your car, come back when called. Honking (beebeebee) is common but rarely speeds things up. Some stations only serve regulars or friends — wasta (connections) matters even for fuel.'
  },
  {
    title: 'Mawalled: The Generator Economy',
    body: 'With ta2niin (power cuts) hitting 20+ hours/day during crisis years, the mawalled became a lifeline. Neighborhood generator subscriptions are bought in amperes. "3andak kam ampiir?" (How many amps do you have?) became a standard question. Maazuut prices directly affect how many hours of generator power your building gets.'
  },
  {
    title: 'Dollarization of Fuel',
    body: 'After 2019, fuel prices shifted from fixed Lebanese lira to dollar-indexed rates. Prices update weekly on a government dashboard. Lebanese check "si3r l-benziin" every Thursday. A common complaint: "l-benziin 3aliye ktir" (fuel is very expensive). The phrase "ma fii benziin" (no fuel) became a daily reality during 2021–2022.'
  },
  {
    title: 'The Dabba Hoarders',
    body: 'During shortages, people filled every dabba (jerry can) they owned, sometimes storing fuel at home dangerously. This led to tragic fires ("ishtasal l-bayt" — the house caught fire). The government warned against hoarding, but fear of "Saffar l-benziin" (running completely out) drove the behavior. The dabba became a symbol of the crisis era.'
  }
];
