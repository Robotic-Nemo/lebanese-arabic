// R435 — Lebanese Ramadan & Fasting Culture (rdm)
const RDM_WORDS = [
  // greetings & wishes
  { ar: 'رمضان كريم', tr: 'rmaDaan kariim', en: 'Ramadan Kareem (noble Ramadan)', cat: 'greetings' },
  { ar: 'رمضان مبارك', tr: 'rmaDaan mubaarak', en: 'blessed Ramadan', cat: 'greetings' },
  { ar: 'كريم', tr: 'kariim', en: 'noble/generous (reply to Ramadan Kareem)', cat: 'greetings' },
  { ar: 'مبارك عليكم الشهر', tr: 'mubaarak 3alikun el shahar', en: 'blessings on your month', cat: 'greetings' },
  { ar: 'الله يبارك فيك', tr: 'allah ybaarak fiik', en: 'may God bless you (reply)', cat: 'greetings' },
  { ar: 'رمضان جاي', tr: 'rmaDaan jaay', en: 'Ramadan is coming', cat: 'greetings' },
  { ar: 'بالسلامة من رمضان', tr: 'bil salaame min rmaDaan', en: 'safe exit from Ramadan (end greeting)', cat: 'greetings' },
  { ar: 'كل عام وأنتم بخير', tr: 'kull 3aam w intu bikheir', en: 'may you be well every year', cat: 'greetings' },
  // fasting & prayer
  { ar: 'صوم', tr: 'Sowm', en: 'fasting', cat: 'fasting' },
  { ar: 'صايم', tr: 'Saayim', en: 'I am fasting (m)', cat: 'fasting' },
  { ar: 'صايمة', tr: 'Saayime', en: 'I am fasting (f)', cat: 'fasting' },
  { ar: 'إفطار', tr: 'iftaar', en: 'breakfast / breaking the fast at sunset', cat: 'fasting' },
  { ar: 'سحور', tr: 'su7uur', en: 'pre-dawn meal before fasting begins', cat: 'fasting' },
  { ar: 'أذان المغرب', tr: 'azaan el maghrib', en: 'maghrib call to prayer (signals iftar)', cat: 'fasting' },
  { ar: 'مدفع رمضان', tr: 'mad2a3 rmaDaan', en: 'Ramadan cannon (signals iftar in Lebanon)', cat: 'fasting' },
  { ar: 'مسحراتي', tr: 'msa77araati', en: 'the suhur drummer who wakes people for pre-dawn meal', cat: 'fasting' },
  { ar: 'تراويح', tr: 'taraawii7', en: 'special Ramadan night prayers', cat: 'fasting' },
  { ar: 'ليلة القدر', tr: 'leilet el 2adr', en: 'Night of Power (27th night of Ramadan)', cat: 'fasting' },
  // food & iftar
  { ar: 'قطايف', tr: '2aTaayef', en: 'qatayef (stuffed Ramadan pancakes)', cat: 'food' },
  { ar: 'كنافة', tr: 'knefe', en: 'knafeh (traditional Ramadan sweet)', cat: 'food' },
  { ar: 'تمر', tr: 'tamr', en: 'dates (traditional to break fast)', cat: 'food' },
  { ar: 'تمر هندي', tr: 'tamr hindi', en: 'tamarind drink (popular iftar drink)', cat: 'food' },
  { ar: 'شربت', tr: 'sharbaT', en: 'sweet iftar drink / sherbet', cat: 'food' },
  { ar: 'مائدة الرحمة', tr: 'maayet el ra7ma', en: 'table of mercy (free public iftar for the poor)', cat: 'food' },
  { ar: 'عزومة إفطار', tr: '3aziimet iftaar', en: 'iftar dinner invitation', cat: 'food' },
  { ar: 'زوّاد', tr: 'zawwaad', en: 'person who provides food/supplies (Ramadan charity)', cat: 'food' },
  // community & culture
  { ar: 'هلال', tr: 'hilaal', en: 'crescent moon (marks Ramadan start)', cat: 'culture' },
  { ar: 'سهرة رمضانية', tr: 'sahret rmaDaaniyye', en: 'Ramadan night gathering', cat: 'culture' },
  { ar: 'زينة رمضان', tr: 'ziiyet rmaDaan', en: 'Ramadan decorations (lights/lanterns)', cat: 'culture' },
  { ar: 'فانوس', tr: 'faanuus', en: 'lantern (Ramadan symbol)', cat: 'culture' },
  { ar: 'صدقة', tr: 'Sada2a', en: 'charity / donation', cat: 'culture' },
  { ar: 'زكاة', tr: 'zakaah', en: 'obligatory Islamic charity (given in Ramadan)', cat: 'culture' },
  { ar: 'قرآن', tr: '2ur2aan', en: 'Quran (read fully during Ramadan)', cat: 'culture' },
  { ar: 'ختمة', tr: 'khatme', en: 'full Quran recitation (completing it during Ramadan)', cat: 'culture' },
  // Eid
  { ar: 'عيد الفطر', tr: '3iid el fiTr', en: 'Eid al-Fitr (feast ending Ramadan)', cat: 'eid' },
  { ar: 'عيد مبارك', tr: '3iid mubaarak', en: 'blessed Eid (standard greeting)', cat: 'eid' },
  { ar: 'عيديّة', tr: '3eidiyye', en: 'Eid money gift given to children', cat: 'eid' },
  { ar: 'خلص الصوم', tr: 'khallaS el Sowm', en: 'fasting is over / Eid is here', cat: 'eid' },
  { ar: 'زيارة العيد', tr: 'ziyaaret el 3iid', en: 'Eid visit (family-visiting tradition)', cat: 'eid' },
  { ar: 'ملابس العيد', tr: 'mlaabis el 3iid', en: 'Eid clothes (new outfit tradition)', cat: 'eid' },
];

const RDM_DRILLS = [
  {
    q: 'What is the correct response when someone says "Ramadan Kareem" to you?',
    opts: ['Ramadan Mubarak', 'Kariim (Allah is generous)', 'Shukran', 'Inshallah'],
    correct: 1,
    note: 'The standard response to "Ramadan Kareem" (noble Ramadan) is "Kariim" — acknowledging that God is the truly generous one. Some also respond with "Allahu Akram" (God is even more generous). In Lebanon, you\'ll hear both versions. Non-Muslims also exchange these greetings as a sign of community solidarity.'
  },
  {
    q: 'What is "su7uur" (سحور)?',
    opts: ['the iftar meal at sunset', 'the pre-dawn meal before fasting begins', 'a Ramadan prayer', 'the Eid breakfast'],
    correct: 1,
    note: '"Su7uur" is the meal eaten before dawn, before the fast begins. In Lebanon, families wake up around 3-4am for su7uur — usually a full meal (cheese, eggs, zaatar, labneh) to sustain the day\'s fast. The "msa77araati" (drum beater) traditionally walks through neighborhoods to wake people for su7uur, though most now use phone alarms.'
  },
  {
    q: 'What is the "msa77araati" (مسحراتي)?',
    opts: ['a Ramadan food vendor', 'the drummer who wakes people for the pre-dawn meal', 'a mosque official', 'the person who fires the Ramadan cannon'],
    correct: 1,
    note: 'The "msa77araati" is a beloved Ramadan tradition — a person who walks through the neighborhood beating a drum and calling out to wake people for su7uur. In Lebanon\'s older neighborhoods, especially in Tripoli and the Beqaa, this tradition is still practiced. It\'s a living piece of cultural heritage that urban modernization is gradually replacing with phone alarms.'
  },
  {
    q: 'What signals iftar time in Lebanese tradition?',
    opts: ['a church bell', 'the azaan el maghrib + mad2a3 rmaDaan (Ramadan cannon)', 'a TV announcement', 'sunrise'],
    correct: 1,
    note: 'In Lebanon, iftar is signaled by the "azaan el maghrib" (sunset call to prayer) and famously the "mad2a3 rmaDaan" (Ramadan cannon). Beirut\'s cannon is fired from the National Museum area. The double signal — religious call + cannon boom — is unmistakable. Families break the fast with dates and water first, following prophetic tradition, then the full meal.'
  },
  {
    q: 'What are "2aTaayef" (قطايف)?',
    opts: ['a type of lantern', 'stuffed Ramadan pancakes (a seasonal specialty)', 'the Eid money given to children', 'a special Ramadan prayer'],
    correct: 1,
    note: '"2aTaayef" are THE Ramadan dessert in Lebanon — small stuffed pancakes filled with cheese or walnuts/cinnamon, then fried or baked and drenched in syrup. They\'re ONLY made during Ramadan, which is part of what makes them special. Qatayef vendors set up specifically for Ramadan in Lebanese neighborhoods. Missing qatayef = missing Ramadan.'
  },
  {
    q: 'What is "maayet el ra7ma" (مائدة الرحمة)?',
    opts: ['a fancy restaurant iftar', 'a free public iftar table for anyone who needs food', 'the royal Eid feast', 'a Ramadan cooking competition'],
    correct: 1,
    note: '"Maayet el ra7ma" (table of mercy) is one of Lebanon\'s most beautiful Ramadan traditions — community-funded public iftar tables set up in streets or mosques where anyone (Muslim or not, rich or poor) can eat for free. In Lebanon\'s economic crisis, these tables became lifelines. They embody the Ramadan spirit of communal generosity.'
  },
  {
    q: 'What is "3eidiyye" (عيديّة) in Lebanese Eid tradition?',
    opts: ['a special Eid prayer', 'Eid money given to children by elders', 'new Eid clothing', 'a community Eid party'],
    correct: 1,
    note: '"3eidiyye" is the monetary gift given by adults (parents, grandparents, aunts/uncles) to children on Eid. In Lebanon, it\'s a competitive social ritual — children compare their 3eidiyye amounts, and relatives try to be generous. The amount has inflated significantly with Lebanon\'s dollar-ized economy. A typical 3eidiyye from a grandparent might be $5-20.'
  },
  {
    q: 'What is "leilet el 2adr" (ليلة القدر)?',
    opts: ['the first night of Ramadan', 'the Night of Power — the holiest night of Ramadan (27th night)', 'the night before Eid', 'a night of communal prayer for all of Lebanon'],
    correct: 1,
    note: '"Leilet el 2adr" (Night of Power/Decree) is believed to be the holiest night of the Islamic year — traditionally on the 27th night of Ramadan, when the Quran was first revealed. Lebanese Muslims spend this night in intense prayer and Quranic recitation at mosques. Many non-practicing Muslims specifically return to prayer on this night.'
  },
  {
    q: 'In Lebanon, who participates in Ramadan culture?',
    opts: ['only Muslims', 'Muslims, plus many Christians join iftar and greetings out of solidarity', 'it\'s entirely private', 'only the elderly'],
    correct: 1,
    note: 'Lebanon\'s unique religious mosaic means Ramadan is a shared social season. Christian Lebanese commonly wish their Muslim neighbors "Ramadan Mubarak," join iftar dinners, and respect the fasting culture. Restaurants accommodate both fasting customers and those eating. This coexistence is a source of Lebanese cultural pride — "3aysh mushtarak" (shared coexistence) in practice.'
  },
  {
    q: 'What is "zawwaad" (زوّاد) in Lebanese Ramadan context?',
    opts: ['a Ramadan decoration', 'a person who provides food and charity to others during Ramadan', 'the call to prayer', 'a type of Ramadan dessert'],
    correct: 1,
    note: '"Zawwaad" (provider/supplier) refers to community members who take on the role of providing food during Ramadan — sponsoring "maayet el ra7ma" tables, distributing iftars to the poor, or supplying families in need. In Lebanese culture, being a "zawwaad" during Ramadan carries significant social prestige and spiritual merit. It\'s a marker of successful community members giving back.'
  },
];

const RDM_TIPS = [
  {
    title: '🌙 Ramadan in Lebanon\'s Multi-Religious Context',
    body: 'Lebanon is unique — roughly 40% Muslim (mostly Sunni + Shia) and 40% Christian. Ramadan is a national social season, not just a religious one. The first day of Ramadan sees traffic jams as people rush to buy groceries. Restaurants in Muslim neighborhoods go quiet at dawn, then explode with iftar crowds at sunset. Christian-owned businesses often adapt hours. The public cannon, decorative lights, and street qatayef vendors are shared cultural experiences regardless of religion.'
  },
  {
    title: '🥘 Iftar Food Culture',
    body: 'Lebanese iftar is a serious meal. The traditional sequence: break fast with dates + water (sunnah), then fresh juice (tamr hindi, 2amar el diin/apricot), then full spread. A Lebanese iftar might include: soup (shawerbet 3ads - lentil soup), fattoush, hummus, main meat dish, and qatayef or knafeh for dessert. Inviting someone to iftar is a high honor. "3aziimet iftaar" (iftar invitation) is taken very seriously — the host prepares for days.'
  },
  {
    title: '🪘 The Ramadan Cannon',
    body: 'Beirut\'s "mad2a3 rmaDaan" (Ramadan cannon) is a beloved institution. Fired at sunset from near the National Museum, the boom echoes across the city and signals iftar. Lebanon has multiple cannon positions in different cities — Tripoli, Sidon, and Tyre all have their own. The cannon\'s sound triggers an immediate Pavlovian response: everything stops, people reach for their dates and water. It\'s one of Beirut\'s most distinctive seasonal sounds.'
  },
  {
    title: '🎁 Eid Customs in Lebanon',
    body: '"3iid el fiTr" (Eid ending Ramadan) in Lebanon is a 3-day holiday. The sequence: wake early for Eid prayer (Salat el 3iid), dress in new clothes (mlaabis el 3iid), family breakfast, then a full day of visiting relatives (ziyaaret el 3iid). Each house offers sweets and coffee. Children collect their "3eidiyye" from every house they visit. The ritual visiting cycle — starting with grandparents, then uncles/aunts, then family friends — can last all 3 days.'
  },
  {
    title: '📿 Social Etiquette During Ramadan',
    body: 'If you\'re in Lebanon during Ramadan: eating/drinking publicly during fasting hours is considered disrespectful in conservative Muslim areas (though Lebanon is less strict than some countries). Saying "Ramadan Mubarak/Kariim" to Muslim acquaintances shows cultural respect. Accepting an iftar invitation is a generous social gesture. Don\'t be surprised by late nights (Lebanese Ramadan nights are lively) and quieter mornings. Many restaurants open only after Maghrib and serve until 2-3am.'
  },
];

const RDM_ABOUT = 'Ramadan in Lebanon (shahar rmaDaan) is experienced uniquely in one of the Middle East\'s most religiously diverse countries. The coexistence of Muslim and Christian communities means Ramadan is as much a social season as a religious one — shared through public iftars, street food, communal celebrations, and the famous Ramadan cannon echoing across Beirut. Lebanese Ramadan is characterized by its warmth: the maayet el ra7ma (public iftar tables for the poor), the qatayef vendors that appear only in this month, the late-night sahret rmaDaaniyye (evening gatherings), and the communal electricity of a city that stays up until 3am. Understanding Ramadan vocabulary is essential for anyone living in or visiting Lebanon during this season — and for understanding Lebanese Muslim family life, generosity values, and community bonds throughout the year.';
