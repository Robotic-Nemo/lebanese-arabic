// R639 — NEW FEATURE: Lebanese City Life & Urban Vocab (mdn)

const MDN_CATS = [
  { id: 'districts', label: '🏙️ Beirut Districts' },
  { id: 'streets',   label: '🛣️ Streets & Transit' },
  { id: 'urban',     label: '🏬 Urban Life' },
  { id: 'vibe',      label: '😎 City Vibe' },
];

const MDN_WORDS = [
  // Beirut Districts
  { ar: 'بيروت',       tr: 'Beirut',          en: 'Beirut (the capital)',    cat: 'districts' },
  { ar: 'الحمرا',      tr: 'l-Hamra',         en: 'Hamra (cultural hub)',    cat: 'districts' },
  { ar: 'الجميزة',     tr: 'l-Jmeyze',        en: 'Gemmayze (nightlife)',    cat: 'districts' },
  { ar: 'مار مخايل',   tr: 'maar mikhayel',    en: 'Mar Mikhael (trendy)',    cat: 'districts' },
  { ar: 'الأشرفية',    tr: 'l-Ashrafiiye',    en: 'Achrafieh (east Beirut)', cat: 'districts' },
  { ar: 'الرملة البيضا', tr: 'l-ramle l-beiDa', en: 'Ramlet el Baida (beach)', cat: 'districts' },
  { ar: 'وسط البلد',   tr: 'waST l-balad',    en: 'downtown Beirut',         cat: 'districts' },
  // Streets & Transit
  { ar: 'سرفيس',       tr: 'serviis',         en: 'shared taxi (service)',   cat: 'streets' },
  { ar: 'موقف',        tr: 'maw2ef',          en: 'a stop / parking spot',   cat: 'streets' },
  { ar: 'دوار',        tr: 'dawwaar',         en: 'a roundabout',            cat: 'streets' },
  { ar: 'زحمة',        tr: 'za7me',           en: 'traffic jam / crowd',     cat: 'streets' },
  { ar: 'جاد',         tr: 'jaad',            en: 'an avenue / boulevard',   cat: 'streets' },
  { ar: 'نازل عالبلد', tr: 'naazil 3a-l-balad', en: 'going down to the city', cat: 'streets' },
  { ar: 'على أوتوستراد', tr: '3a-l-otostrad', en: 'on the highway',          cat: 'streets' },
  // Urban Life
  { ar: 'بقالة',       tr: 'ba2aale',         en: 'a corner store / grocer', cat: 'urban' },
  { ar: 'ملحمة',       tr: 'mal7ame',         en: 'a butcher shop',          cat: 'urban' },
  { ar: 'صيدلية',      tr: 'Seedaliye',       en: 'a pharmacy',              cat: 'urban' },
  { ar: 'محل',         tr: 'ma7all',          en: 'a shop / store',          cat: 'urban' },
  { ar: 'طابور',       tr: 'Taaboor',         en: 'a queue / line',          cat: 'urban' },
  { ar: 'كهربا',       tr: 'kahraba',         en: 'electricity (often cut)', cat: 'urban' },
  { ar: 'جنريتور',     tr: 'jenerator',       en: 'generator (power backup)',cat: 'urban' },
  // City Vibe
  { ar: 'مدينة نايمة', tr: 'madiine nayme',   en: 'a sleeping city (quiet)', cat: 'vibe' },
  { ar: 'عالليل',      tr: '3a-l-leil',       en: 'at night (in the city)',  cat: 'vibe' },
  { ar: 'هلق كتير ناس', tr: 'halla2 kteer naas', en: 'so many people now',  cat: 'vibe' },
  { ar: 'البلد صاحي',  tr: 'l-balad Saa7i',   en: 'the city is awake/lively', cat: 'vibe' },
  { ar: 'دخان',        tr: 'dkhaan',          en: 'smoke / exhaust / haze',  cat: 'vibe' },
  { ar: 'ضوضا',        tr: 'DawDa',           en: 'noise / commotion',       cat: 'vibe' },
  { ar: 'وسط الدوشة',  tr: 'waST l-dawshe',   en: 'in the middle of the chaos', cat: 'vibe' },
];

const MDN_DRILLS = [
  { q: 'How do you say "traffic jam" in Lebanese?', opts: ['dawwaar','za7me','maw2ef','DawDa'], ans: 1 },
  { q: 'What does "serviis" mean?', opts: ['traffic light','bus stop','shared taxi','roundabout'], ans: 2 },
  { q: '"waST l-balad" means?', opts: ['Hamra district','downtown Beirut','the highway','a parking spot'], ans: 1 },
  { q: 'How do you say "a pharmacy"?', opts: ['ba2aale','mal7ame','Seedaliye','ma7all'], ans: 2 },
  { q: 'What does "kahraba" mean?', opts: ['generator','electricity','traffic','shop'], ans: 1 },
  { q: '"dawwaar" means?', opts: ['a street','a roundabout','an avenue','a stop'], ans: 1 },
  { q: 'How do you say "a corner store"?', opts: ['mal7ame','Taaboor','ba2aale','Seedaliye'], ans: 2 },
  { q: 'What does "l-Jmeyze" refer to?', opts: ['beach district','nightlife district','downtown','east Beirut'], ans: 1 },
  { q: '"jenerator" means?', opts: ['electricity','generator','power cut','fuel'], ans: 1 },
  { q: 'How do you say "noise / commotion"?', opts: ['dkhaan','DawDa','za7me','dawwaar'], ans: 1 },
  { q: 'What does "l-Ashrafiiye" refer to?', opts: ['west Beirut','the highway','east Beirut / Achrafieh','the beach'], ans: 2 },
  { q: '"Taaboor" means?', opts: ['a traffic jam','a roundabout','a queue/line','a shop'], ans: 2 },
  { q: 'How do you say "a butcher shop"?', opts: ['ma7all','ba2aale','Seedaliye','mal7ame'], ans: 3 },
  { q: 'What does "l-balad Saa7i" mean?', opts: ['the city is sleeping','the city is awake/lively','so many people','in chaos'], ans: 1 },
  { q: '"naazil 3a-l-balad" means?', opts: ['on the highway','going downtown','leaving the city','in the neighborhood'], ans: 1 },
];

const MDN_TIPS = [
  { title: 'Shared taxis (serviis)', body: '"Serviis" (from French "service") is the iconic Lebanese shared taxi. Shared routes, fixed fares. Wave it down, call out your destination, and the driver fits as many passengers as possible.' },
  { title: 'Beirut districts', body: 'Hamra = west Beirut intellectual/café hub. Gemmayze & Mar Mikhael = nightlife & craft beer. Achrafieh = east Beirut, more Christian/French influence. Downtown (waST l-balad) = rebuilt after civil war, now largely empty.' },
  { title: 'The electricity situation', body: '"Kahraba" (electricity) in Lebanon follows a schedule — often cut for hours daily. "Jenerator" (generator) kicks in via neighborhood subscriptions. Saying "kahraba 2ijtafa2et" means the power just cut.' },
  { title: 'Traffic & chaos', body: '"Za7me" = traffic jam (also used for any crowd). "DawDa" = general noise/commotion. "Wast l-dawshe" = in the middle of chaos — very Lebanese way to describe urban life.' },
  { title: 'City direction phrases', body: '"Naazil 3a-l-balad" (going down to the city) — Beirut is coastal, so city = downhill from mountain towns. "Taale3 3a-l-jabal" = going up to the mountains. Direction matters in Lebanese geography.' },
  { title: 'Urban commerce', body: '"Ba2aale" (corner store) is the backbone of Lebanese daily life — you can buy almost anything there. "Mal7ame" (butcher), "Seedaliye" (pharmacy), "ma7all" (generic shop) are your essential urban vocab.' },
];
