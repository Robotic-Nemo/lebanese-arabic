// R579 — NEW FEATURE: Lebanese Religious & Festive Calendar coach (prefix: rmn)

const RMN_WORDS = [
  // Ramadan
  { ar: 'رمضان', tr: 'RamaDaan', en: 'Ramadan (holy month of fasting)', cat: 'ramadan' },
  { ar: 'صوم', tr: 'Sowm', en: 'fasting', cat: 'ramadan' },
  { ar: 'إفطار', tr: 'iftaar', en: 'breaking the fast / iftar meal', cat: 'ramadan' },
  { ar: 'سحور', tr: 'su7uur', en: 'pre-dawn meal (suhoor)', cat: 'ramadan' },
  { ar: 'عيد الفطر', tr: '3iid el-fiTr', en: 'Eid al-Fitr (end of Ramadan)', cat: 'ramadan' },
  { ar: 'رمضان كريم', tr: 'RamaDaan kariim', en: 'Ramadan Kareem (Ramadan greeting)', cat: 'ramadan' },
  { ar: 'المسحراتي', tr: 'el-mas7araati', en: 'the dawn caller (wakes people for suhoor)', cat: 'ramadan' },
  // Christian occasions
  { ar: 'عيد الميلاد', tr: '3iid el-miilaad', en: 'Christmas (feast of the birth)', cat: 'christian' },
  { ar: 'الشعانين', tr: 'esh-sha3aaniin', en: 'Palm Sunday', cat: 'christian' },
  { ar: 'الكنيسة', tr: 'el-kniise', en: 'the church', cat: 'christian' },
  { ar: 'الجمعة الكبيرة', tr: 'ej-jum3a el-kbiire', en: 'Good Friday', cat: 'christian' },
  { ar: 'أحد الفصح', tr: 'a7ad el-fis7', en: 'Easter Sunday', cat: 'christian' },
  // Shared Islamic
  { ar: 'الجامع', tr: 'el-jaami3', en: 'the mosque', cat: 'islamic' },
  { ar: 'عيد الأضحى', tr: '3iid el-aD7a', en: 'Eid al-Adha (feast of sacrifice)', cat: 'islamic' },
  { ar: 'الأذان', tr: 'el-azaan', en: 'the call to prayer', cat: 'islamic' },
  { ar: 'الجمعة', tr: 'ej-jum3a', en: 'Friday (prayer day)', cat: 'islamic' },
  // Universal festive expressions
  { ar: 'عيدية', tr: '3iidiyye', en: 'Eid money / festive gift for children', cat: 'expr' },
  { ar: 'كل عام وإنتو بخير', tr: 'kill 3aam w-intu bkheir', en: 'Happy holidays (lit. may you be well every year)', cat: 'expr' },
  { ar: 'عيدكم مبارك', tr: '3iidkon mbaarak', en: 'blessed Eid to you all', cat: 'expr' },
  { ar: 'الله يبارك فيك', tr: 'allah ybaarak fiik', en: 'God bless you (response to blessing)', cat: 'expr' },
  { ar: 'بالصحة والسلامة', tr: 'bis-Si77a w-es-salaame', en: 'with health and safety (used for Eid)', cat: 'expr' },
  { ar: 'الله يخليلك إياهم', tr: 'allah ykhalliilek iyyaahom', en: 'may God keep them for you (said about loved ones)', cat: 'expr' },
  // Lebanese calendar events
  { ar: 'عيد الأم', tr: '3iid el-imm', en: "Mother's Day (March 21 in Lebanon)", cat: 'calendar' },
  { ar: 'عيد البربارة', tr: '3iid el-barbaara', en: "Saint Barbara's Day (Dec 4, like Halloween)", cat: 'calendar' },
  { ar: 'عيد الاستقلال', tr: '3iid el-isti2laal', en: 'Lebanese Independence Day (Nov 22)', cat: 'calendar' },
  { ar: 'يوم الشهيد', tr: 'yoom esh-shahiid', en: "Martyrs' Day (May 6)", cat: 'calendar' },
  { ar: 'الصليب المقدس', tr: 'eS-Saliiib el-mu2addas', en: "Holy Cross Day (Sep 14, public holiday)", cat: 'calendar' },
  { ar: 'شوف الهلال', tr: 'shuuf el-hilaal', en: 'spotting the crescent moon (starts Ramadan/Eid)', cat: 'calendar' },
];

const RMN_DRILLS = [
  {
    q: 'What is the Lebanese term for the pre-dawn meal eaten before fasting begins?',
    opts: ['إفطار (iftaar)', 'سحور (su7uur)', 'عيدية (3iidiyye)', 'المسحراتي (el-mas7araati)'],
    ans: 1,
    exp: 'سحور (su7uur) = the pre-dawn meal eaten before the day\'s fast. Iftar is the meal that BREAKS the fast at sunset — opposite timing.'
  },
  {
    q: 'Someone wishes you "رمضان كريم" — what\'s the appropriate response?',
    opts: ['شكراً (shukran)', 'الله أكرم (allah akram)', 'عيدكم مبارك (3iidkon mbaarak)', 'بالصحة (bis-Si77a)'],
    ans: 1,
    exp: 'الله أكرم (allah akram) = God is more generous — the traditional response to "Ramadan Kareem." Simple thanks is too plain; this elevates the exchange.'
  },
  {
    q: 'What is عيدية (3iidiyye) in Lebanese Eid culture?',
    opts: ['The Eid feast meal', 'Money or gifts given to children on Eid', 'A special Ramadan prayer', 'The crescent moon sighting'],
    ans: 1,
    exp: 'عيدية (3iidiyye) = money given to children on Eid (al-Fitr or al-Adha). Kids dress up and visit relatives specifically to collect their 3iidiyye — a beloved tradition.'
  },
  {
    q: 'What is عيد البربارة (3iid el-barbaara) in Lebanon?',
    opts: ['A summer music festival', 'A day similar to Halloween — costumes, sweets, St. Barbara\'s Day (Dec 4)', 'Lebanese Independence Day', 'A Ramadan night market'],
    ans: 1,
    exp: '3iid el-barbaara (Saint Barbara\'s Day, Dec 4) is Lebanon\'s version of Halloween — children dress in costumes and collect sweets. A purely Lebanese Christian tradition adopted across communities.'
  },
  {
    q: 'What does كل عام وإنتو بخير (kill 3aam w-intu bkheir) literally mean?',
    opts: ['Eid Mubarak', 'May every year find you well', 'God bless this celebration', 'May your family be safe'],
    ans: 1,
    exp: 'kill 3aam w-intu bkheir = "may every year find you well" — the universal Lebanese festive wish used for Eid, Christmas, birthdays, and New Year. The plural إنتو is important — you address the whole group.'
  },
  {
    q: 'What is the role of المسحراتي (el-mas7araati) during Ramadan?',
    opts: ['The mosque prayer caller at sunset', 'A person who beats a drum to wake people for suhoor before dawn', 'The charity organizer distributing food', 'The religious leader who confirms the crescent sighting'],
    ans: 1,
    exp: 'el-mas7araati = a person who walks through neighborhoods at pre-dawn, beating a drum and calling out to wake families for su7uur (the pre-dawn meal). A beloved tradition now fading in cities.'
  },
  {
    q: 'How is Lebanese Independence Day referred to in Arabic?',
    opts: ['يوم الشهيد (yoom esh-shahiid)', 'عيد الاستقلال (3iid el-isti2laal)', 'عيد البلاد (3iid el-blaad)', 'عيد الجمهورية (3iid el-jomhuuriyye)'],
    ans: 1,
    exp: 'عيد الاستقلال (3iid el-isti2laal) = Independence Day, celebrated November 22. isti2laal = independence. Marked by military parades and fireworks in Beirut.'
  },
  {
    q: 'What does شوف الهلال (shuuf el-hilaal) refer to in Ramadan/Eid context?',
    opts: ['Reading the Quran at night', 'Spotting the crescent moon — officially starts/ends Ramadan', 'The pre-dawn call to prayer', 'Lighting the Eid lanterns'],
    ans: 1,
    exp: 'shuuf el-hilaal = spotting the new crescent moon. Islamic months begin with the crescent — the official sighting determines when Ramadan starts and when Eid begins. In Lebanon, authorities confirm it officially.'
  },
  {
    q: 'What is الجمعة الكبيرة (ej-jum3a el-kbiire) in Lebanese Christian calendar?',
    opts: ['The Friday before Christmas', 'Good Friday', 'The first Friday of Ramadan', 'Any Friday prayer day'],
    ans: 1,
    exp: 'ej-jum3a el-kbiire = the "big Friday" = Good Friday. Lebanese Christians commemorate the crucifixion with processions and solemn services. A public holiday in Lebanon for all denominations.'
  },
  {
    q: 'When someone says بالصحة والسلامة (bis-Si77a w-es-salaame) at Eid, what are they wishing?',
    opts: ['Happy fasting', 'Health and safety / May you be healthy and safe', 'Congratulations on your new clothes', 'May God bless your meal'],
    ans: 1,
    exp: 'bis-Si77a w-es-salaame = "with health and safety" — a wish for wellbeing used at Eid, after someone recovers from illness, after a haircut, after a shower, or any renewal. Very versatile Lebanese blessing.'
  },
];

const RMN_TIPS = [
  'Lebanon is unique in the Arab world for having both Christian and Muslim public holidays enshrined in law. Major holidays from both Eid al-Fitr, Eid al-Adha, Christmas, Easter, and various saints\' days are all official.',
  'عيدية (3iidiyye) transcends religion in Lebanon — Muslim and Christian children alike receive Eid money from relatives. It\'s a joyful social ritual that cuts across sectarian lines in family settings.',
  'The Lebanese Independence Day (عيد الاستقلال, Nov 22) is one of the few non-religious national holidays. The Lebanese army parade in Beirut remains an annual tradition even through crises.',
  'Saint Barbara\'s Day (عيد البربارة, Dec 4) is unique to Lebanon and a few other Levantine countries. Children dress as saints, demons, or characters, collect sweets, and eat a special wheat pudding called بربارة.',
  'Spotting the crescent moon (شوف الهلال) for Eid and Ramadan is a moment of collective suspense in Lebanon. Families wait for the official announcement, which often differs between Lebanese authorities and Saudi Arabia — debates ensue.',
];

const RMN_ABOUT = 'Lebanon\'s religious calendar reflects its unique status as a multi-confessional nation. Christians (Maronite, Orthodox, Catholic) and Muslims (Sunni, Shia, Druze) coexist with distinct holiday traditions — yet many festive phrases and expressions (كل عام وإنتو بخير, عيدية, بالصحة والسلامة) cross all boundaries. Knowing religious and festive vocabulary marks you as culturally aware in a country where religion shapes daily life, work schedules, and social occasions.';
