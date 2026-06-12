// Run #270 — Lebanese Directions & Places Coach (dpl)
// Navigation, city places, asking/giving directions, transport — 40 items, MCQ drill, 5 tips

const DPL_WORDS = [
  // directions
  { tr: 'ymiine',        ar: 'يمين',         en: 'right',                          cat: 'directions' },
  { tr: 'shmel',         ar: 'شمال',          en: 'left',                           cat: 'directions' },
  { tr: 'duughri',       ar: 'دغري',          en: 'straight ahead',                 cat: 'directions' },
  { tr: 'wara',          ar: 'ورا',           en: 'behind / back',                  cat: 'directions' },
  { tr: '2eddem',         ar: 'قدام',          en: 'in front / ahead',               cat: 'directions' },
  { tr: 'fou2',          ar: 'فوق',           en: 'up / above / upstairs',          cat: 'directions' },
  { tr: 'ta7et',         ar: 'تحت',           en: 'down / below / downstairs',      cat: 'directions' },
  { tr: 'b-2eddem',      ar: 'بقدام',         en: 'ahead / forward',                cat: 'directions' },
  // places
  { tr: 'mdine',         ar: 'مدينة',         en: 'city / town',                    cat: 'places' },
  { tr: 'Day3a',         ar: 'ضيعة',          en: 'village',                        cat: 'places' },
  { tr: 'Hara',          ar: 'حارة',          en: 'neighborhood / quarter',         cat: 'places' },
  { tr: 'Tarii2',        ar: 'طريق',          en: 'road / way',                     cat: 'places' },
  { tr: 'shaare3',       ar: 'شارع',          en: 'street',                         cat: 'places' },
  { tr: 'dawar',         ar: 'دوار',          en: 'roundabout',                     cat: 'places' },
  { tr: 'jisr',          ar: 'جسر',           en: 'bridge',                         cat: 'places' },
  { tr: 'maHaTTa',       ar: 'محطة',          en: 'station / stop',                 cat: 'places' },
  // asking directions
  { tr: 'wein...?',      ar: 'وين...؟',       en: 'where is...?',                   cat: 'asking' },
  { tr: 'kiif brou7...?',ar: 'كيف بروح...؟',  en: 'how do I get to...?',            cat: 'asking' },
  { tr: 'ktiir b3iid?',  ar: 'كتير بعيد؟',    en: 'is it far?',                     cat: 'asking' },
  { tr: '2addeysh...?',  ar: 'قديش...؟',      en: 'how far / how much...?',         cat: 'asking' },
  { tr: 'min hon',       ar: 'من هون',        en: 'from here',                      cat: 'asking' },
  { tr: 'la hon',        ar: 'لهون',          en: 'to here / until here',           cat: 'asking' },
  // giving directions
  { tr: 'ru7 duughri',   ar: 'روح دغري',      en: 'go straight',                    cat: 'giving' },
  { tr: 'liff ymiine',   ar: 'لف يمين',       en: 'turn right',                     cat: 'giving' },
  { tr: 'liff shmel',    ar: 'لف شمال',       en: 'turn left',                      cat: 'giving' },
  { tr: 'ba3d el-dawar', ar: 'بعد الدوار',    en: 'after the roundabout',           cat: 'giving' },
  { tr: '3ind el-jisr',  ar: 'عند الجسر',     en: 'at the bridge',                  cat: 'giving' },
  { tr: '3a ymiinek',    ar: 'عا يمينك',      en: 'on your right',                  cat: 'giving' },
  // distance & landmarks
  { tr: 'b3iid',         ar: 'بعيد',          en: 'far',                            cat: 'distance' },
  { tr: '2ariib',        ar: 'قريب',          en: 'near / close',                   cat: 'distance' },
  { tr: 'maashi',        ar: 'ماشي',          en: 'walking (distance)',             cat: 'distance' },
  { tr: 'bi-ssiyyara',   ar: 'بالسيارة',      en: 'by car',                         cat: 'distance' },
  { tr: 'da2i2a',        ar: 'دقيقة',         en: 'minute',                         cat: 'distance' },
  { tr: 'msaafe',        ar: 'مسافة',         en: 'distance',                       cat: 'distance' },
  // transport
  { tr: 'siyyara',       ar: 'سيارة',         en: 'car',                            cat: 'transport' },
  { tr: 'taxi',          ar: 'تاكسي',         en: 'taxi',                           cat: 'transport' },
  { tr: 'serviis',       ar: 'سرفيس',         en: 'shared taxi / service car',      cat: 'transport' },
  { tr: 'baS',           ar: 'باص',           en: 'bus',                            cat: 'transport' },
  { tr: 'maw2af',        ar: 'موقف',          en: 'parking / bus stop',             cat: 'transport' },
  { tr: '3a rejlek',     ar: 'عا رجلك',       en: 'on foot / walk there',           cat: 'transport' },
];

const DPL_DRILLS = [
  {
    q: 'How do you say "straight ahead" in Lebanese Arabic?',
    opts: ['ymiine', 'shmel', 'duughri', 'wara'],
    correct: 2,
    note: '"duughri" = straight ahead (دغري — from Turkish "doğru" = correct/straight). Lebanese direction trio: "ymiine" (right), "shmel" (left), "duughri" (straight). "ru7 duughri" = go straight. Lebanese "shmel" vs MSA "yasaar" — shmel is distinctly Levantine.'
  },
  {
    q: 'What does "wein...?" mean?',
    opts: ['when is...?', 'how much is...?', 'where is...?', 'what is...?'],
    correct: 2,
    note: '"wein" = where (وين). Lebanese "wein" vs MSA "ayna". Essential: "wein el-maHaTTa?" (where\'s the station?), "wein brou7?" (where do I go?). "wein inta?" = where are you? Double duty — location AND direction.'
  },
  {
    q: 'How do you say "turn right" in Lebanese Arabic?',
    opts: ['ru7 duughri', 'liff shmel', 'liff ymiine', '3a rejlek'],
    correct: 2,
    note: '"liff ymiine" = turn right (لف يمين — liff = turn/wrap). Direction commands: "ru7 duughri" (go straight), "liff ymiine" (turn right), "liff shmel" (turn left). "liff" = turn in Lebanese; MSA uses "dar" or "in7arat".'
  },
  {
    q: 'What is a "serviis" in Lebanon?',
    opts: ['bus', 'taxi', 'shared taxi / service car', 'motorbike'],
    correct: 2,
    note: '"serviis" = shared taxi (سرفيس — from French "service"). Lebanon\'s iconic affordable transport: fixed-route shared taxis that pick up multiple passengers. Flag one down, say your destination, pay a flat rate (~2000 LL). Distinct from "taxi" (private). "serviis la Beirut" = serviis going to Beirut.'
  },
  {
    q: 'How do you say "near / close" in Lebanese Arabic?',
    opts: ['b3iid', '2ariib', 'maashi', 'msaafe'],
    correct: 1,
    note: '"2ariib" = near/close (قريب). Antonym: "b3iid" = far. Lebanese geographic understatement: "2ariib" can mean anything from 2 minutes to 20 minutes away. "2ariib min hon" = close from here. "maashi 2ariib" = walkable distance (close enough to walk).'
  },
  {
    q: 'What does "Hara" mean?',
    opts: ['city', 'road', 'neighborhood / quarter', 'bridge'],
    correct: 2,
    note: '"Hara" = neighborhood/quarter (حارة). Lebanese urban structure: "mdine" (city) → "Hara" (neighborhood) → "shaare3" (street). "el-Hara" is central to Lebanese social identity — people identify with their neighborhood. "ibn el-Hara" = son of the neighborhood (local guy).'
  },
  {
    q: 'How do you say "how do I get to...?" in Lebanese Arabic?',
    opts: ['wein...?', 'kiif brou7...?', '2addeysh...?', 'ktiir b3iid?'],
    correct: 1,
    note: '"kiif brou7...?" = how do I get to...? (kiif = how, brou7 = I go). Full example: "kiif brou7 3a Beirut?" = how do I get to Beirut? "wein...?" asks for location; "kiif brou7...?" asks for directions. Both essential for navigation.'
  },
  {
    q: 'What does "dawar" mean?',
    opts: ['bus stop', 'bridge', 'roundabout', 'parking'],
    correct: 2,
    note: '"dawar" = roundabout (دوار). Lebanese navigation relies heavily on roundabouts as landmarks: "ba3d el-dawar liff ymiine" = after the roundabout turn right. Many Lebanese intersections use roundabouts instead of traffic lights. Also used as meeting point: "min3a 3ind el-dawar" = let\'s meet at the roundabout.'
  },
  {
    q: 'How do you say "by car" in Lebanese Arabic?',
    opts: ['3a rejlek', 'maashi', 'bi-ssiyyara', 'bi-taxi'],
    correct: 2,
    note: '"bi-ssiyyara" = by car (بالسيارة). Transport expressions: "bi-ssiyyara" (by car), "3a rejlek" (on foot), "bi-taxi" (by taxi), "bi-serviis" (by shared taxi). Lebanese ask: "brou7 maashi willa bi-ssiyyara?" = do I go on foot or by car?'
  },
  {
    q: 'What does "fou2" mean?',
    opts: ['in front', 'behind', 'below', 'above / up'],
    correct: 3,
    note: '"fou2" = up/above/upstairs (فوق). Antonym: "ta7et" = down/below/downstairs. Essential pair: "el-beit fou2" = the house upstairs, "el-garage ta7et" = the garage downstairs. Also metaphorical: "3al fou2" = at the top/outstanding. "rou7 3al ta7et" = go downstairs.'
  },
];

const DPL_TIPS = [
  { title: 'Lebanese directions — essential vocab', body: '"duughri" (straight — from Turkish) + "ymiine" (right) + "shmel" (left) are the three direction words. For commands: "ru7 duughri" (go straight), "liff ymiine/shmel" (turn right/left), "rja3 wara" (go back). Landmarks rule Lebanese navigation — street addresses are rarely used. Instead: "ba3d el-jamiye, liff ymiine" (after the association, turn right), "2eddem el-bank" (in front of the bank), "wara l-kaziyye" (behind the gas station). Prepare to give AND receive landmark-based directions.' },
  { title: 'The serviis system — Lebanon\'s shared taxi network', body: '"Serviis" (shared taxi, from French "service") is Lebanon\'s backbone transport. Fixed routes, shared with strangers, flat fare. Flag one down — stick your hand out. Say destination: "Hamra?" or "Beirut?". Sit down and pay when exiting. Serviis go between neighborhoods and cities. Beirut has no subway — serviis + private taxi ARE the system. "Taaksi 3ala 3adad" = taxi by meter (rare, often negotiate). "Sherketein" = app taxis (Uber-like). Key phrase: "wein rayeH?" = where are you headed? (to the driver).' },
  { title: 'Asking for directions — Lebanese phrases', body: '"Wein el-[place]?" = where is [place]? "Kiif brou7 3a [place]?" = how do I get to [place]? "Ktiir b3iid?" = is it far? "2addeysh da2ayet maashi?" = how many walking minutes? When someone says "2ariib" (close), ask: "2ariib 2addeysh?" — Lebanese "close" is relative. Responses: "3a ymiinek" (on your right), "3a smeelek" (on your left), "duughri" (straight), "bad3id" (a bit far), "maashi" (walkable). If lost: "inta min hon?" (are you from here?) before asking a local.' },
  { title: 'Beirut neighborhood landmarks you need to know', body: 'Key Beirut navigation anchors: "Hamra" (West Beirut commercial), "Gemmayzeh/Mar Mikhael" (trendy East), "Achrafieh" (East Christian quarter), "Verdun" (upscale shopping), "Dahiye" (southern suburbs), "Downtown/Solidere" (rebuilt center). Neighborhoods define social/political identity — locals know immediately what your neighborhood says about you. Key landmarks: "Dora maHaTTa" (Dora junction = North Lebanon serviis hub), "Cola" (South Lebanon serviis hub), "Charles Helou" (bus station), "el-maTaar" (Rafic Hariri airport). Navigation tip: tell taxi "3a Sa7it Sassine" = to Sassine Square, Ashrafieh.' },
  { title: 'Lebanese distance perception and directions culture', body: 'Lebanese distance perception is famously optimistic: "2ariib" (close) = anything under 30 min drive. "3al baab" (at the door) = 5-10 min away. "bi-rjlek" (walkable) = might require a taxi in reality. Time expressions: "3ala ma btouSal" (by the time you arrive = soon-ish), "ba3d shwayy" (in a while). Lebanese are generally very helpful with directions and will walk you partway or call someone to ask. "Khallik hon, jib sayyartak" (stay here, get your car) = it\'s too far to walk. Navigation culture: honking, creative parking, and motorcycle shortcuts are all normal.' },
];

const DPL_ABOUT = 'Master Lebanese Arabic for navigation — directions, city places, asking and giving directions, transport options, and distance expressions. Essential for getting around Lebanon, using the serviis network, and navigating Beirut.';
