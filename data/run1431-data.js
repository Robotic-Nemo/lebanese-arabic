// R1431 — NEW FEATURE: Lebanese Florist & Flower Culture (nwr)

const NWR_WORDS = [
  { w: 'zahriye', t: 'زهرية', tr: 'florist shop', ex: 'ruh 3al-zahriye ta2khod ward', et: 'go to the florist to get flowers' },
  { w: 'ward', t: 'ورد', tr: 'roses / flowers', ex: 'ishteri ward l-3arous', et: 'buy flowers for the bride' },
  { w: 'yasmin', t: 'ياسمين', tr: 'jasmine', ex: 'rihet l-yasmin btghanni', et: 'the smell of jasmine sings' },
  { w: 'zahr', t: 'زهر', tr: 'blossom / flower', ex: 'l-zahr fattah b-l-rab3', et: 'flowers bloomed in spring' },
  { w: '3aqqad', t: 'عقد', tr: 'bouquet', ex: '3mello 3aqqad ktir 7elo', et: 'he made a very beautiful bouquet' },
  { w: 'nebbete', t: 'نبتة', tr: 'plant / seedling', ex: '3andi nebbete 3al-7et', et: 'I have a plant on the wall' },
  { w: 'shirsha7', t: 'شرشح', tr: 'scattered petals', ex: 'shirsha7 l-ward 3al-ars', et: 'scatter petals at the wedding' },
  { w: 'naddafe', t: 'ندافة', tr: 'florist (person)', ex: 'l-naddafe btwaffe2 l-alwan', et: 'the florist coordinates the colors' },
  { w: '7bashishe', t: 'حبشيشة', tr: 'herb / tiny plant', ex: 'min ay 7bashishe baddak', et: 'which herb do you want' },
  { w: 'ard l-ward', t: 'ورد الأرض', tr: 'ground cover flowers', ex: 'ard l-ward labbet l-7adique', et: 'ground flowers covered the garden' },
  { w: 'ra2iqa', t: 'رائقة', tr: 'fresh (of flowers)', ex: 'l-ward ra2i2 l-yom', et: 'the flowers are fresh today' },
  { w: 'zaffaf', t: 'زفاف', tr: 'wedding procession', ex: 'ward l-zaffaf abyad', et: 'wedding flowers are white' },
  { w: 'wardi', t: 'وردي', tr: 'pink / rosy', ex: 'fstan-a wardi 7elo', et: 'her dress is a lovely pink' },
  { w: 'foll', t: 'فل', tr: 'Arabian jasmine', ex: '7abbet shammit l-foll', et: 'she loves smelling Arabian jasmine' },
  { w: 'khozame', t: 'خزامة', tr: 'lavender', ex: 'l-khozame btriḥ', et: 'lavender is relaxing' },
  { w: 'narc', t: 'نرجس', tr: 'narcissus / daffodil', ex: 'l-narc byizher b-l-shte', et: 'narcissus blooms in winter' },
  { w: 'sha2fe', t: 'شأفة', tr: 'thorn / prickle', ex: '7ader min sha2fit l-ward', et: 'careful of the rose thorn' },
  { w: 'rib3', t: 'ربيع', tr: 'spring', ex: 'l-rib3 btizharo l-ward', et: 'in spring the flowers bloom' },
  { w: 'mayye l-ward', t: 'ماء الورد', tr: 'rose water', ex: 'mayye l-ward btri77 l-bayt', et: 'rose water perfumes the house' },
  { w: 'ta2w', t: 'تاج', tr: 'crown / wreath', ex: '3melo ta2w min ward', et: 'they made a crown from flowers' },
];

const NWR_DRILLS = [
  { q: 'How do you say "bouquet" in Lebanese?', opts: ['3aqqad','ward','zahr','foll'], ans: '3aqqad' },
  { q: 'What is "yasmin"?', opts: ['jasmine','lavender','narcissus','rose'], ans: 'jasmine' },
  { q: '"Ward" means:', opts: ['roses / flowers','spring','plant','thorn'], ans: 'roses / flowers' },
  { q: 'Which word means "rose water"?', opts: ['mayye l-ward','wardi','zahr','foll'], ans: 'mayye l-ward' },
  { q: '"Wardi" means:', opts: ['pink / rosy','fresh','spring','bouquet'], ans: 'pink / rosy' },
  { q: 'What is a "zahriye"?', opts: ['florist shop','bouquet','thorn','crown'], ans: 'florist shop' },
  { q: '"Foll" refers to:', opts: ['Arabian jasmine','lavender','narcissus','ground cover'], ans: 'Arabian jasmine' },
  { q: 'Which word means "thorn"?', opts: ['sha2fe','shirsha7','ra2iqa','nebbete'], ans: 'sha2fe' },
];

const NWR_TIPS = [
  {
    title: 'Flowers & Lebanese Culture',
    body: 'In Lebanon, flowers are deeply woven into daily life — from the jasmine (yasmin) sold in tiny bunches by street vendors at night, to elaborate floral arrangements at weddings and funerals. A "zahriye" (florist shop) is found in every neighborhood.',
  },
  {
    title: 'The Jasmine Sellers',
    body: 'On summer evenings in Beirut, young children and elderly vendors roam café terraces and corniche selling strings of "foll" (Arabian jasmine). Buying a string is almost obligatory — it\'s a small social ritual that connects neighbors and strangers alike.',
  },
  {
    title: 'Rose Water in Lebanese Life',
    body: '"Mayye l-ward" (rose water) is used constantly: splashed in drinks, sprinkled at gatherings, used in sweets like maamoul and rice pudding. A host who doesn\'t offer it is considered unrefined.',
  },
  {
    title: 'Flowers for Every Occasion',
    body: 'Lebanese gifting culture relies heavily on flowers. Visiting a sick person? Bring white flowers. Attending a wedding? Send a 3aqqad (bouquet) in advance. Welcoming someone back from abroad? A "ta2w" (wreath) or elaborate arrangement awaits them.',
  },
];
