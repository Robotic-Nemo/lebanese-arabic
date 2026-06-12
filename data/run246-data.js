// Run #246 — Lebanese Transportation & Getting Around Coach (trn)
// Vehicles, directions, transit phrases, riding/driving vocab — 40 items, MCQ drill, 5 tips

const TRN_WORDS = [
  // vehicles
  { tr: 'sayyara',       ar: 'سيارة',        en: 'car',                           cat: 'vehicles' },
  { tr: 'ta2si',         ar: 'تاكسي',         en: 'taxi',                          cat: 'vehicles' },
  { tr: 'servis',        ar: 'سيرفيس',        en: 'shared taxi / service cab',     cat: 'vehicles' },
  { tr: 'baS',           ar: 'باص',            en: 'bus',                           cat: 'vehicles' },
  { tr: 'moto',          ar: 'موتو',           en: 'motorbike / scooter',           cat: 'vehicles' },
  { tr: 'darrajje',      ar: 'دراجة',          en: 'bicycle',                       cat: 'vehicles' },
  { tr: 'shu77aaTa',     ar: 'شحاطة',          en: 'flip-flops / on foot (slang)', cat: 'vehicles' },
  { tr: '3al rjlein',    ar: 'عالرجلين',       en: 'on foot',                       cat: 'vehicles' },
  // directions & navigation
  { tr: 'min hon',       ar: 'من هون',         en: 'from here',                     cat: 'directions' },
  { tr: 'la hon',        ar: 'لهون',           en: 'to here / this way',            cat: 'directions' },
  { tr: 'yamiin',        ar: 'يمين',           en: 'right',                         cat: 'directions' },
  { tr: 'shmaal',        ar: 'شمال',           en: 'left',                          cat: 'directions' },
  { tr: 'dughrri',       ar: 'دغري',           en: 'straight ahead',                cat: 'directions' },
  { tr: 'la faww2',      ar: 'لفوق',           en: 'uphill / up there',             cat: 'directions' },
  { tr: 'la ta77et',     ar: 'لتحت',           en: 'downhill / down there',         cat: 'directions' },
  { tr: '3al naaside',   ar: 'عالناصية',       en: 'at the corner',                 cat: 'directions' },
  // transit phrases
  { tr: 'wein raye7?',   ar: 'وين رايح؟',      en: 'where are you going?',          cat: 'transit' },
  { tr: 'la-wein?',      ar: 'لوين؟',          en: 'where to?',                     cat: 'transit' },
  { tr: 'waQQefni hon',  ar: 'وقفني هون',       en: 'stop me here / stop here',      cat: 'transit' },
  { tr: 'ta2si khali',   ar: 'تاكسي خالي',     en: 'taxi free / available',         cat: 'transit' },
  { tr: 'kaddeysh el-ujra?', ar: 'قدييش الأجرة؟', en: 'how much is the fare?',      cat: 'transit' },
  { tr: 'nazel hon',     ar: 'نازل هون',        en: 'getting off here',              cat: 'transit' },
  { tr: '3abberni',      ar: 'عبّرني',          en: 'take me across / drop me off',  cat: 'transit' },
  { tr: 'sheraa3',       ar: 'شارع',            en: 'street / road',                 cat: 'transit' },
  // locations & landmarks
  { tr: 'mfara2',        ar: 'مفرق',            en: 'intersection / junction',       cat: 'locations' },
  { tr: 'jisr',          ar: 'جسر',             en: 'bridge',                        cat: 'locations' },
  { tr: 'mawqaf',        ar: 'موقف',            en: 'bus stop / parking spot',       cat: 'locations' },
  { tr: 'maTaar',        ar: 'مطار',            en: 'airport',                       cat: 'locations' },
  { tr: 'marfa2',        ar: 'مرفأ',            en: 'port / harbor',                 cat: 'locations' },
  { tr: 'mhaTTa',        ar: 'محطة',            en: 'station / stop',                cat: 'locations' },
  // driving vocab
  { tr: 'Tarri2',        ar: 'طريق',            en: 'road / path / way',             cat: 'driving' },
  { tr: 'zaaHme',        ar: 'زحمة',            en: 'traffic jam / crowd',           cat: 'driving' },
  { tr: 'baanjo',        ar: 'بانجو',           en: 'flat tire (Lebanese)',           cat: 'driving' },
  { tr: '7adde',         ar: 'حادة',            en: 'accident',                      cat: 'driving' },
  { tr: 'benziin',       ar: 'بنزين',           en: 'gasoline / petrol',             cat: 'driving' },
  { tr: 'motor',         ar: 'موتور',           en: 'engine (also: any motor)',      cat: 'driving' },
  { tr: 'rakhSa',        ar: 'رخصة',            en: 'license (driving)',             cat: 'driving' },
  { tr: 'mSaare',        ar: 'مصاري',           en: 'money / fare (colloquial)',     cat: 'driving' },
  { tr: 'dakhle',        ar: 'دخلة',            en: 'entrance / ramp / turn-off',   cat: 'driving' },
  { tr: '2isle',         ar: 'إيسل',            en: 'highway / autoroute (Lebanese)', cat: 'driving' },
];

const TRN_DRILLS = [
  {
    q: 'How do you say "straight ahead" in Lebanese Arabic?',
    opts: ['yamiin', 'shmaal', 'dughrri', 'la faww2'],
    correct: 2,
    note: '"dughrri" = straight ahead; "yamiin" = right; "shmaal" = left; "la faww2" = uphill'
  },
  {
    q: 'What does "servis" mean?',
    opts: ['bus', 'shared taxi / service cab', 'motorbike', 'private car'],
    correct: 1,
    note: '"servis" = shared taxi (Lebanese institution — fixed routes, shared cost); "baS" = bus; "moto" = motorbike; "sayyara" = car'
  },
  {
    q: 'How do you say "stop me here" in Lebanese Arabic?',
    opts: ['nazel hon', 'waQQefni hon', 'la-wein?', '3abberni'],
    correct: 1,
    note: '"waQQefni hon" = stop me here (to driver); "nazel hon" = getting off here; "la-wein?" = where to?; "3abberni" = take me across'
  },
  {
    q: 'What does "zaaHme" mean?',
    opts: ['accident', 'flat tire', 'traffic jam / crowd', 'road'],
    correct: 2,
    note: '"zaaHme" = traffic jam/crowd — from "za7am" (to crowd). Lebanese traffic is legendary; "7adde" = accident; "baanjo" = flat tire; "Tarri2" = road'
  },
  {
    q: 'How do you say "where to?" in Lebanese Arabic?',
    opts: ['wein raye7?', 'min hon', 'la-wein?', 'kaddeysh el-ujra?'],
    correct: 2,
    note: '"la-wein?" = where to? (destination); "wein raye7?" = where are you going?; "min hon" = from here; "kaddeysh el-ujra?" = how much is the fare?'
  },
  {
    q: 'What does "mfara2" mean?',
    opts: ['bridge', 'station', 'airport', 'intersection / junction'],
    correct: 3,
    note: '"mfara2" = intersection/junction (key landmark for giving directions); "jisr" = bridge; "mhaTTa" = station; "maTaar" = airport'
  },
  {
    q: 'How do you say "flat tire" in Lebanese Arabic (slang)?',
    opts: ['baanjo', '7adde', 'benziin', 'motor'],
    correct: 0,
    note: '"baanjo" = flat tire (Lebanese slang for panne = French breakdown); "7adde" = accident; "benziin" = petrol; "motor" = engine'
  },
  {
    q: 'What does "dughrri" mean?',
    opts: ['to the right', 'around the corner', 'straight ahead', 'downhill'],
    correct: 2,
    note: '"dughrri" = straight ahead (also means "directly/honestly" in speech); "yamiin" = right; "3al naaside" = at the corner; "la ta77et" = downhill'
  },
  {
    q: 'How do you say "how much is the fare?" in Lebanese Arabic?',
    opts: ['nazel hon', 'wein raye7?', 'ta2si khali', 'kaddeysh el-ujra?'],
    correct: 3,
    note: '"kaddeysh el-ujra?" = how much is the fare?; "nazel hon" = getting off here; "ta2si khali" = taxi free/available; "wein raye7?" = where are you going?'
  },
  {
    q: 'What does "3al rjlein" mean?',
    opts: ['by motorbike', 'on foot', 'by bicycle', 'in a taxi'],
    correct: 1,
    note: '"3al rjlein" = on foot (lit: on the two legs); "moto" = motorbike; "darrajje" = bicycle; "ta2si" = taxi'
  },
];

const TRN_TIPS = [
  { title: 'The "servis" — Lebanon\'s iconic shared taxi', body: 'The "servis" (shared taxi) is Lebanon\'s main public transit. Fixed routes, shared rides, dirt cheap. To hail one: stand on the road and shout "servis!". Tell the driver your destination: "Beirut?", "Hamra?". They\'ll nod or wave you off. Pay as you exit — no meter, just the standard shared fare. "Ta2si khali" (free taxi) means an empty, private taxi. Always ask "servis ow ta2si?" to clarify shared vs private.' },
  { title: '"Dughrri" — straight AND honest', body: '"Dughrri" (straight ahead) doubles as "directly/honestly." "2ollak dughrri" = I\'ll tell you straight. This dual meaning is very Lebanese — precision of direction becoming a metaphor for directness. Directions: "dughrri, ba3dein yamiin 3al naaside" = straight, then right at the corner. Lebanese give directions by landmarks, not street names: "3and el-baladiyye" (at the municipality), "2oddaam el-masjid" (in front of the mosque).' },
  { title: '"Zaaghme" and Beirut traffic culture', body: '"Zaaghme" = traffic jam — possibly Lebanon\'s most-used word. Lebanon has no functioning metro or tram; cars dominate. "Shi7n el-zaaghme" = the traffic is terrible. Common expressions: "mabrook 3a-zaaghme" (sarcastically congrats on the traffic). To avoid: "fi Tarri2 teni?" = is there another road? "khdeh el-iskandarani" (take the coastal road) — always compared to "el-2isle" (the highway). Expect this conversation with every taxi driver.' },
  { title: 'Lebanese taxi communication essentials', body: 'In a Lebanese taxi, you need: "waQQefni hon" (stop me here), "kaddeysh el-ujra?" (how much?), "ma3i bass [X] lira" (I only have X lira), "mish 3aarif" (I don\'t know [directions]). For Uber/ride apps: just type the destination. Traditional taxis: name a landmark nearby, not an address. "3and el-jami3a" (near the university), "2oddaam el-supermarche" (in front of the supermarket). Never say a street number — nobody uses them.' },
  { title: 'Direction word pairs to memorize as units', body: 'Lebanese directions come in opposites: "yamiin" (right) / "shmaal" (left). "la faww2" (up) / "la ta77et" (down) — critical in hilly Lebanon. "min hon" (from here) / "la hon" (to here). "3abberni" (take me across/past) / "nazel hon" (I\'m getting off here). "dakhle" (entrance/ramp) / "mkharge" (exit). The key phrase for any location: "wein" (where) + "min 3and" (near/from) + landmark.' },
];

const TRN_ABOUT = 'Master Lebanese Arabic transportation vocabulary — vehicles, directions, transit phrases, and driving terms. Essential for navigating Lebanon\'s car-dependent culture, hailing shared taxis (servis), communicating with drivers, and understanding the colorful world of Lebanese traffic and getting around.';
