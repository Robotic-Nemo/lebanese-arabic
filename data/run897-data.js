// R897 — NEW FEATURE: Lebanese Street Food & Snack Vendors (sfv)

const SFV_WORDS = [
  { ar: 'عَربِيّة أكل', tr: '3arabiyyit akil', en: 'food cart / street food cart' },
  { ar: 'صاحب العربية', tr: 'Sa7ib el-3arabiyye', en: 'the cart vendor / owner' },
  { ar: 'مناقيش', tr: 'mana2eesh', en: 'flatbread with zaatar or cheese (street food)' },
  { ar: 'عصير ليمون', tr: '3aSeer laimoun', en: 'fresh lemonade' },
  { ar: 'عصير رمان', tr: '3aSeer remmaan', en: 'pomegranate juice' },
  { ar: 'كستنا', tr: 'kastana', en: 'roasted chestnuts' },
  { ar: 'ذرة', tr: 'dhara', en: 'corn on the cob' },
  { ar: 'ترمس', tr: 'tirmis', en: 'salted lupini beans (street snack)' },
  { ar: 'حمص بالزيت', tr: '7ummuS bil-zeit', en: 'hummus with olive oil' },
  { ar: 'فول مدمس', tr: 'foul mdammas', en: 'fava bean stew (street breakfast)' },
  { ar: 'كعكة بالسمسم', tr: 'ka3ke bis-simsim', en: 'sesame bread ring (street snack)' },
  { ar: 'سندويش', tr: 'sandaweesh', en: 'sandwich (street sandwich)' },
  { ar: 'بطاطا مشوية', tr: 'baTaaTa mashwiyye', en: 'grilled potato' },
  { ar: 'مزة', tr: 'mazze', en: 'snack spread / mezze' },
  { ar: 'بيع بالشارع', tr: 'bee3 bil-shaari3', en: 'street selling' },
  { ar: 'نادي', tr: 'naadi', en: 'calling out / hawking wares' },
  { ar: 'وَزَّن', tr: 'wazzan', en: 'he weighed (the portion)' },
  { ar: 'صَبَّ', tr: 'Sabb', en: 'he poured (a drink)' },
  { ar: 'بكام هاد؟', tr: 'bi-kam haad?', en: 'how much is this?' },
  { ar: 'عطيني', tr: '3aTini', en: 'give me (ordering from vendor)' },
  { ar: 'كمان شوي', tr: 'kaman shwayy', en: 'a little more (of something)' },
  { ar: 'بس هيك', tr: 'bass haik', en: 'that\'s enough / just like that' },
  { ar: 'مع بعض', tr: 'ma3 ba3d', en: 'together / mixed (in the bag)' },
  { ar: 'حلو وحامض', tr: '7ilu w 7aamiD', en: 'sweet and sour (tamarind, sumac)' },
  { ar: 'تحت البيت', tr: 'ta7t el-beit', en: 'downstairs / in front of the building (where vendors pass)' },
  { ar: 'نادى بصوت عالي', tr: 'naada bi-Sout 3aali', en: 'called out loudly (the vendor\'s cry)' },
  { ar: 'خِسّ', tr: 'khiss', en: 'fresh lettuce (wrapped in a bag with snacks)' },
  { ar: 'بقدونس', tr: 'ba2dounis', en: 'parsley (added to street wraps)' }
];

const SFV_DRILLS = [
  { q: 'How do you say "food cart"?', a: '3arabiyyit akil', hint: 'عَربِيّة أكل' },
  { q: 'What is "mana2eesh"?', a: 'flatbread with zaatar or cheese', hint: 'مناقيش' },
  { q: 'How do you say "fresh lemonade"?', a: '3aSeer laimoun', hint: 'عصير ليمون' },
  { q: 'What is "kastana" on the street?', a: 'roasted chestnuts', hint: 'كستنا' },
  { q: 'How do you say "salted lupini beans"?', a: 'tirmis', hint: 'ترمس' },
  { q: 'How do you say "sesame bread ring"?', a: 'ka3ke bis-simsim', hint: 'كعكة بالسمسم' },
  { q: 'How do you ask "how much is this?"', a: 'bi-kam haad?', hint: 'بكام هاد؟' },
  { q: 'How do you say "give me" (ordering)?', a: '3aTini', hint: 'عطيني' },
  { q: 'How do you say "a little more"?', a: 'kaman shwayy', hint: 'كمان شوي' },
  { q: 'How do you say "that\'s enough"?', a: 'bass haik', hint: 'بس هيك' },
  { q: 'How do you say "he poured (a drink)"?', a: 'Sabb', hint: 'صَبَّ' },
  { q: 'How do you say "sweet and sour"?', a: '7ilu w 7aamiD', hint: 'حلو وحامض' },
  { q: 'What does "ta7t el-beit" mean for street food?', a: 'downstairs / in front of the building', hint: 'تحت البيت' },
  { q: 'How do you say "fava bean stew (street breakfast)"?', a: 'foul mdammas', hint: 'فول مدمس' },
  { q: 'How do you say "pomegranate juice"?', a: '3aSeer remmaan', hint: 'عصير رمان' },
  { q: 'How do you say "corn on the cob"?', a: 'dhara', hint: 'ذرة' }
];

const SFV_TIPS = [
  { title: 'The Street Vendor\'s Cry', body: 'Lebanese street vendors have iconic calls. The kastana man rings a bell and yells "kastanaaaa!" The ka3ke seller shouts "ka3ke ya ka3ke bis-simsim!" — you hear them before you see them. These cries (naada bi-Sout 3aali) are part of the neighborhood soundscape.' },
  { title: 'Morning Foul Culture', body: 'Foul mdammas (فول مدمس) is the classic Lebanese street breakfast. Vendors set up at dawn near bakeries and serve it in small bowls with olive oil, lemon, and parsley (ba2dounis). Eaten with fresh bread, it\'s the working-class breakfast of Lebanon.' },
  { title: 'Mana2eesh from the Saj', body: 'Mana2eesh (مناقيش) cooked on a curved metal dome (saj) are the cornerstone of Lebanese street food. Zaatar (thyme-oil-sesame mix) or white cheese versions are most common. Vendors fold them and wrap in paper to eat on the go.' },
  { title: 'Tirmis & Ka3ke: The Pocket Snacks', body: 'Tirmis (ترمس, lupini beans) sold in small cups with salt are a Lebanese street obsession. Ka3ke (كعكة) sesame rings are carried in a basket by vendors who loop through neighborhoods. Both are perfect for a 1000 lira snack.' },
  { title: 'Ordering from a Cart', body: 'When ordering, say "3aTini" (give me) + what you want + "bi-kam?" to check price. "Kaman shwayy" gets you more of something; "bass haik" stops them. Vendors add khiss (lettuce) and ba2dounis (parsley) to wraps without being asked.' }
];
