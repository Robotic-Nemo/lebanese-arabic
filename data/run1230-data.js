// R1230 — NEW FEATURE: Lebanese Traditional Crafts & Artisans (crf)

const CRF_WORDS = [
  // craftspeople
  {ar:'نجار',      tr:'najjar',    en:'carpenter',        cat:'craftspeople'},
  {ar:'حداد',      tr:'7addad',    en:'blacksmith',       cat:'craftspeople'},
  {ar:'خياط',      tr:'khayyaT',   en:'tailor',           cat:'craftspeople'},
  {ar:'فخراني',    tr:'fakhraani', en:'potter',           cat:'craftspeople'},
  {ar:'صنايعي',    tr:'Snaye3i',   en:'craftsman/artisan',cat:'craftspeople'},
  // spaces & tools
  {ar:'ورشة',      tr:'warshe',    en:'workshop',         cat:'spaces'},
  {ar:'نول',       tr:'nool',      en:'loom',             cat:'tools'},
  {ar:'مطرقة',     tr:'maTraqe',   en:'hammer',           cat:'tools'},
  {ar:'إزميل',     tr:'izmiil',    en:'chisel',           cat:'tools'},
  {ar:'إبرة',      tr:'ibri',      en:'needle',           cat:'tools'},
  // materials
  {ar:'خيط',       tr:'khiit',     en:'thread',           cat:'materials'},
  {ar:'نسيج',      tr:'nasiij',    en:'fabric/textile',   cat:'materials'},
  {ar:'جلد',       tr:'jild',      en:'leather',          cat:'materials'},
  {ar:'زجاج',      tr:'zjej',      en:'glass',            cat:'materials'},
  {ar:'قصدير',     tr:'qaSdiir',   en:'tin/pewter',       cat:'materials'},
  // craft concepts
  {ar:'حرفة',      tr:'7arfe',     en:'craft/trade',      cat:'concepts'},
  {ar:'تطريز',     tr:'taTriiz',   en:'embroidery',       cat:'concepts'},
  {ar:'فخار',      tr:'fakhkhaar', en:'pottery',          cat:'concepts'},
  {ar:'تحفة',      tr:'tu7fe',     en:'masterpiece',      cat:'concepts'},
  {ar:'حياكة',     tr:'7iyaake',   en:'weaving',          cat:'concepts'},
];

const CRF_DRILLS = [
  {q:'What does نجار mean?',         opts:['carpenter','blacksmith','tailor','potter'],    ans:0},
  {q:'What does ورشة mean?',         opts:['thread','workshop','loom','hammer'],           ans:1},
  {q:'Lebanese word for "needle"?',  opts:['خيط','نول','إبرة','إزميل'],                   ans:2},
  {q:'What does تطريز mean?',        opts:['weaving','pottery','embroidery','leather'],    ans:2},
  {q:'Lebanese word for "hammer"?',  opts:['مطرقة','إزميل','إبرة','قصدير'],               ans:0},
  {q:'What does صنايعي mean?',       opts:['blacksmith','tailor','craftsman','carpenter'], ans:2},
  {q:'Lebanese word for "glass"?',   opts:['جلد','نسيج','قصدير','زجاج'],                  ans:3},
  {q:'What does حرفة mean?',         opts:['craft/trade','masterpiece','pottery','loom'],  ans:0},
];

const CRF_TIPS = [
  {title:'Souq al-Hadadeene حدادين',   body:'Beirut\'s historic ironsmith souk once lined entire streets with craftsmen beating metal by hand. 7addad (حداد) literally means "one who works iron" — the surname is still common across Lebanon.'},
  {title:'Embroidery تطريز as identity', body:'Village women across Mount Lebanon, Rashaya, and the Bekaa traditionally embroider distinct regional motifs onto thobe garments. Patterns encode family and village identity — a living textile language.'},
  {title:'Pottery فخار of Beit Chabab', body:'The village of Beit Chabab near Metn has been a center of Lebanese pottery and glass-blowing for centuries. Fakhraani (فخراني) workshops there still produce hand-thrown clay jars using techniques unchanged for generations.'},
  {title:'Silk weaving حياكة الحرير', body:'Mount Lebanon\'s silk-weaving industry once supplied European markets via Beirut\'s port. The nool (نول) — wooden handloom — was a fixture in village homes from Bsharri to Deir el-Qamar throughout the 18th and 19th centuries.'},
];
