// R861 — NEW FEATURE: Lebanese Ramadan & Iftar Culture (rmd)

const RMD_CATS = ['fasting','iftar','prayers','expressions'];

const RMD_WORDS = [
  // fasting
  { a: 'رمضان كريم', tr: 'ramaDaan kariim', en: '"Generous Ramadan" — the standard greeting during Ramadan month in Lebanon', cat: 'fasting' },
  { a: 'رمضان مبارك', tr: 'ramaDaan mbaarik', en: '"Blessed Ramadan" — alternative greeting, equally common in Lebanese households', cat: 'fasting' },
  { a: 'صيام', tr: 'Siyaam', en: 'fasting — abstaining from food, drink, and smoking from fajr to maghrib', cat: 'fasting' },
  { a: 'سحور', tr: 'su7uur', en: 'suhur — the pre-dawn meal before the fast begins, eaten quietly before azan il-fajr', cat: 'fasting' },
  { a: 'أذان المغرب', tr: '2azaan il-maghrib', en: 'maghrib call to prayer — the exact moment fasting breaks, everyone stops to eat', cat: 'fasting' },
  { a: 'فانوس', tr: 'faanuus', en: 'lantern — Ramadan lanterns decorate streets and homes across Lebanon', cat: 'fasting' },
  { a: 'نية', tr: 'niyye', en: 'intention — "niyyit iS-Soom" — the intention to fast, declared the night before', cat: 'fasting' },
  // iftar
  { a: 'إفطار', tr: '2iftaar', en: 'iftar — the meal that breaks the fast at sunset, the most social meal of the year', cat: 'iftar' },
  { a: 'تمر', tr: 'tamr', en: 'dates — the first thing eaten at iftar, following prophetic tradition', cat: 'iftar' },
  { a: 'قطايف', tr: '2aTaayif', en: 'qatayef — Ramadan stuffed pancakes filled with cheese or nuts, only made during Ramadan', cat: 'iftar' },
  { a: 'عصير تمر هندي', tr: '3aSiir tamr hindi', en: 'tamarind juice — the iconic Ramadan drink, sold from ornate brass urns in Lebanese streets', cat: 'iftar' },
  { a: 'شوربة عدس', tr: 'shoorbit 3adas', en: 'lentil soup — the quintessential Lebanese iftar opener, followed by a full mezze spread', cat: 'iftar' },
  { a: 'مدفع رمضان', tr: 'mdf3 ramaDaan', en: 'Ramadan cannon — fired at sunset to signal iftar time; still done ceremonially in some Lebanese cities', cat: 'iftar' },
  { a: 'سفرة الإفطار', tr: 'sifrit il-2iftaar', en: 'iftar table — laid hours in advance, a point of Lebanese family pride and hospitality', cat: 'iftar' },
  // prayers
  { a: 'تراويح', tr: 'taraawii7', en: 'tarawih — the special nightly Ramadan prayers after isha, mosques fill every night', cat: 'prayers' },
  { a: 'ليلة القدر', tr: 'leelat il-2adar', en: 'Laylat al-Qadr — Night of Power, the 27th night of Ramadan, the holiest night', cat: 'prayers' },
  { a: 'اعتكاف', tr: '3itikaaf', en: 'itikaf — spiritual retreat in the mosque during the last 10 days of Ramadan', cat: 'prayers' },
  { a: 'زكاة الفطر', tr: 'zakaat il-fiTr', en: 'zakat al-fitr — charity given before Eid prayer, obligatory for every Muslim', cat: 'prayers' },
  { a: 'دعاء الإفطار', tr: 'du3aa il-2iftaar', en: '"Allahomma lak somto" — the prayer said when breaking the fast', cat: 'prayers' },
  { a: 'ختمة القرآن', tr: 'khatmit il-2ur2aan', en: 'Quran completion — finishing the entire Quran during Ramadan, a personal and communal goal', cat: 'prayers' },
  // expressions
  { a: 'صائم؟', tr: 'Saaym?', en: '"Are you fasting?" — the first question Lebanese ask during Ramadan, regardless of religion', cat: 'expressions' },
  { a: 'الله يتقبّل', tr: 'alla yitabbal', en: '"May God accept (your fast)" — said to someone fasting, blessing their worship', cat: 'expressions' },
  { a: 'أحلى بقربك', tr: '2a7la b2orbak', en: '"Sweeter with you near" — said about Ramadan; it\'s better shared with loved ones', cat: 'expressions' },
  { a: 'الصيام ما بيضيّع', tr: 'iS-Siyaam ma biyDayya3', en: '"Fasting is never wasted" — encouragement when fasting is hard', cat: 'expressions' },
  { a: 'ولو بقطرة ميّه', tr: 'walaw bi2aTrit mayye', en: '"Even with just a drop of water" — breaking fast symbolically, even minimally counts', cat: 'expressions' },
  { a: 'شهر الخير', tr: 'shahr il-kheir', en: '"Month of goodness" — how Lebanese refer to Ramadan, emphasizing charity and generosity', cat: 'expressions' },
  { a: 'كلنا سوا', tr: 'killna sawa', en: '"We are all together" — Ramadan community spirit; Lebanese Christians join iftar dinners too', cat: 'expressions' },
  { a: 'مبروك العيد', tr: 'mabrook il-3eed', en: '"Congratulations on Eid" — said at the end of Ramadan when Eid al-Fitr begins', cat: 'expressions' }
];

const RMD_DRILLS = [
  { q: 'What is the standard Ramadan greeting in Lebanon?', opts: ['ramaDaan mbaarik', 'ramaDaan kariim', 'alla yitabbal', 'Siyaam'], ans: 1 },
  { q: 'What is "suhur" in Lebanese?', opts: ['2iftaar', 'su7uur', 'tamr', 'taraawii7'], ans: 1 },
  { q: 'What breaks the fast at sunset in Lebanon?', opts: ['su7uur', '2iftaar', 'zakaat il-fiTr', 'taraawii7'], ans: 1 },
  { q: 'What are "qatayef"?', opts: ['tamarind juice', 'lentil soup', 'Ramadan stuffed pancakes', 'dates'], ans: 2 },
  { q: 'What does "alla yitabbal" mean?', opts: ['Blessed Ramadan', 'Are you fasting?', 'May God accept your fast', 'Month of goodness'], ans: 2 },
  { q: '"Night of Power" in Lebanese?', opts: ['leelat il-2adar', 'taraawii7', '3itikaaf', 'khatmit il-2ur2aan'], ans: 0 },
  { q: 'What is the iconic Ramadan drink sold in Lebanese streets?', opts: ['shoorbit 3adas', '3aSiir tamr hindi', 'tamr', 'du3aa il-2iftaar'], ans: 1 },
  { q: 'What is "tarawih" in Lebanese?', opts: ['pre-dawn meal', 'iftar table', 'taraawii7 (nightly Ramadan prayers)', 'charity before Eid'], ans: 2 },
  { q: 'How do you say "fasting"?', opts: ['niyye', 'Siyaam', 'su7uur', '2iftaar'], ans: 1 },
  { q: '"Month of goodness" in Lebanese?', opts: ['shahr il-kheir', 'sifrit il-2iftaar', 'killna sawa', 'ramaDaan kariim'], ans: 0 },
  { q: 'What is "zakat al-fitr" in Lebanese?', opts: ['3itikaaf', 'du3aa il-2iftaar', 'zakaat il-fiTr', 'niyye'], ans: 2 },
  { q: '"Are you fasting?" in Lebanese?', opts: ['Saaym?', 'Siyaam?', '2iftaar?', 'taraawii7?'], ans: 0 },
  { q: 'What is the first food eaten at iftar?', opts: ['lentil soup', 'qatayef', 'dates (tamr)', 'tamarind juice'], ans: 2 },
  { q: 'What does "killna sawa" mean?', opts: ['Night of Power', 'We are all together', 'May God accept', 'Congratulations on Eid'], ans: 1 },
  { q: '"Congratulations on Eid" in Lebanese?', opts: ['ramaDaan kariim', 'alla yitabbal', 'mabrook il-3eed', 'shahr il-kheir'], ans: 2 },
  { q: 'What is "faanuus" in Lebanese?', opts: ['cannon', 'lantern', 'intention', 'Quran completion'], ans: 1 }
];

const RMD_TIPS = [
  '<strong>Ramadan in Lebanon</strong>: Lebanon is roughly half Christian, half Muslim — yet Ramadan is a shared cultural event. Christian Lebanese friends attend iftar dinners, wish "ramaDaan kariim", and many restaurants offer Ramadan menus. The "killna sawa" (we\'re all together) spirit is genuine.',
  '<strong>2aTaayif (qatayef)</strong>: These Ramadan-only stuffed pancakes appear in every Lebanese sweet shop from the first day of Ramadan. Filled with akkawi cheese or walnut/cinnamon mix, then fried or baked. Asking "fee 2aTaayif?" is how you know Ramadan has started.',
  '<strong>3aSiir tamr hindi</strong>: The tamarind juice sellers in Lebanese souks carry ornate brass urns and wear traditional costume. They announce their presence by clicking metal cups. A glass of tamr hindi at iftar is as Lebanese-Ramadan as it gets.',
  '<strong>Mdf3 ramaDaan (Ramadan cannon)</strong>: Historically, a cannon was fired to signal iftar in Lebanese cities like Tripoli and Beirut. Though now largely ceremonial, it\'s still fired in some areas. Hearing it means you can eat — and if you\'re still holding food, you stuff it in quickly.',
  '<strong>Cross-community iftar</strong>: Lebanese politicians, community leaders, and friends across religious lines host "iftar tables" (sifrit il-2iftaar) as gestures of national unity. Being invited to an iftar is an honor — arrive slightly before maghrib, help lay the table, eat together when the azan sounds.',
  '<strong>Leelat il-2adar</strong>: The 27th night of Ramadan, Lebanese mosques overflow — people pray all night seeking divine blessing. Streets around mosques fill with food stalls. Even non-observant Muslims try to stay up for this night. The atmosphere is unlike any other night in Lebanon.'
];
