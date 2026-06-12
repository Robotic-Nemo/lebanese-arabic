// R1398 — NEW FEATURE: Lebanese River & Wadi Swimming Culture (wdi)
const WDI_WORDS = [
  {ar:'وادي',tr:'wadi',en:'wadi / river valley'},
  {ar:'نهر',tr:'nahr',en:'river'},
  {ar:'شلال',tr:'shalal',en:'waterfall'},
  {ar:'بركة',tr:'birke',en:'pool / swimming hole'},
  {ar:'مسبح',tr:'masbah',en:'swimming pool'},
  {ar:'نهر إبراهيم',tr:'nahr ibrahim',en:'Nahr Ibrahim (Adonis River)'},
  {ar:'نهر الكلب',tr:'nahr el-kalb',en:'Nahr el-Kalb (Dog River)'},
  {ar:'بعلبك',tr:'ba3albak',en:'Baalbek (Bekaa region)'},
  {ar:'عرق',tr:'3ara2',en:'sweat / perspiration'},
  {ar:'بريد',tr:'barid',en:'cold / cool'},
  {ar:'ماي بارد',tr:'may barid',en:'cold water'},
  {ar:'صخرة',tr:'sakhra',en:'rock / boulder'},
  {ar:'غطس',tr:'ghats',en:'diving / plunging in'},
  {ar:'بتسبح',tr:'btesba7',en:'you swim (masc.)'},
  {ar:'منطقة طبيعية',tr:'mante2a tabi3iyye',en:'natural area / nature reserve'},
  {ar:'جلسة',tr:'jalse',en:'gathering / sit-together'},
  {ar:'بيكنيك',tr:'biknik',en:'picnic'},
  {ar:'قرب',tr:'2arab',en:'close / nearby'},
  {ar:'روح تسبح',tr:'ru7 tesba7',en:'go swim (imperative)'},
  {ar:'ماي عذب',tr:'may 3azb',en:'fresh water (sweet water)'}
];

const WDI_DRILLS = [
  {q:'The Lebanese word "wadi" (وادي) refers to...?',opts:['a beach resort','a river valley or gorge','a mountain peak','a city square'],a:1},
  {q:'"Shalal" (شلال) means...?',opts:['a swimming pool','a waterfall','a rock','a river bank'],a:1},
  {q:'"Nahr Ibrahim" is nicknamed the "Adonis River" because...?',opts:['it was named after a president','the myth of Adonis turning the river red with his blood','it flows through Beirut','it borders Syria'],a:1},
  {q:'"Birke" (بركة) in a wadi context means...?',opts:['a prayer','a natural swimming hole or pool','a waterfall','a picnic area'],a:1},
  {q:'"May 3azb" (ماي عذب) literally means "sweet water" — it refers to...?',opts:['sugary drinks','mineral water','fresh non-salty water','fruit juice'],a:2},
  {q:'"Btesba7" (بتسبح) means...?',opts:['you eat','you swim','you jump','you rest'],a:1},
  {q:'Lebanese summers at the wadi typically involve...?',opts:['skiing and snowboarding','swimming in natural pools, BBQ, jalse with family','beach volleyball only','desert trekking'],a:1},
  {q:'"Barid" (بريد) when describing wadi water means...?',opts:['dirty','deep','cold / cool','fast-flowing'],a:2}
];

const WDI_TIPS = [
  {title:'Wadi Culture in Lebanon',body:'For Lebanese, "wadi" trips are a beloved summer tradition. Families pack cars with food, shisha, and speakers and head to river valleys like Wadi Qannoubine (north), Nahr Ibrahim (Jbeil), or the streams of the Chouf. The whole day is a "jalse" — eating, swimming, lounging on rocks. "Wين رايحين هلق؟ — عالوادي!" (Where are you going now? — To the wadi!) is a classic summer exchange. Wadis are considered Lebanese nature at its purest.'},
  {title:'Nahr Ibrahim — The Adonis River',body:'Nahr Ibrahim (نهر إبراهيم), flowing through the Jbeil district, is known as the Adonis River from the ancient myth that its waters turn red each spring — once explained as the blood of Adonis killed by a boar on the nearby mountains. Phoenicians worshipped Adonis/Tammuz here, and Roman temples line the valley. Lebanese still swim in its gorges. "Nahr ibrahim may-o 2azra2 w barid" (Nahr Ibrahim water is blue and cold) is how locals describe it.'},
  {title:'Swimming Holes (Brika) vs. Masabeh',body:'Lebanese distinguish between a natural swimming hole — a "birke" or "brike" — formed by rocks in a river, and a "masbah" (man-made pool). The birke is considered far superior: "ma fi birke tit7ala 3al birke el-tabi3iyye" (no pool compares to a natural hole). Famous natural pools include those at Jezzine, Wadi el-Khodr in Saida, and the emerald pools of Wadi Jhannam in the Chouf. Getting the "cool rock" spot near the deepest part is a point of pride.'},
  {title:'Wadi Safety & Summer Slang',body:'Every Lebanese summer brings news of wadi accidents — flash floods ("seyl" سيل), strong currents, and risky jumps from cliffs. "La tghuts min hon, fi salou3" (Don\'t dive from here, there are rocks) is a standard warning. "Ghats" (diving/jumping in) and "ghata" (diving in and getting soaked) are key wadi verbs. The perfect wadi day ends with a "jalse" on the rocks, someone\'s uncle bringing "warak 3arish" (grape leaves), and staying until sunset — "bel ghrub betzakkar el-nhar" (at sunset you remember the day).'}
];
