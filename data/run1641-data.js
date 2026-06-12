// R1641 — Achrafieh & East Beirut Christian heart (ach)
const ACH_WORDS = [
  { w: "Achrafieh",                t: "الأشرفية",                e: "East Beirut hilltop, historic Christian quarter",      ex: "Achrafieh akbar 7ay masi7e bel-balad" },
  { w: "Sassine Square",           t: "ساحة ساسين",              e: "central Achrafieh roundabout & landmark",              ex: "Sassine 2alb el-Achrafieh" },
  { w: "Sursock Museum",           t: "متحف سرسق",               e: "1912 Italianate villa-turned-modern-art-museum",       ex: "matha7af Sursock byerji3 la-1912" },
  { w: "Sursock Street",           t: "شارع سرسق",               e: "famed boulevard of Levantine palace-mansions",         ex: "shari3 Sursock fi 2sour 3atiqa" },
  { w: "Gemmayzeh",                t: "الجميزة",                  e: "downhill bohemian bar-and-cafe street",                ex: "Gemmayzeh ahla shari3 sahar bel-balad" },
  { w: "Mar Mkhayel",              t: "مار مخايل",                e: "post-2010 hipster nightlife extension of Gemmayzeh",   ex: "Mar Mkhayel ahla 7ay sahar el-jdid" },
  { w: "Saifi Village",            t: "قرية الصيفي",              e: "boutique pedestrian quarter, post-war restoration",    ex: "Saifi Village kerne madine sghire" },
  { w: "Rue Pasteur",              t: "شارع باستور",              e: "Mar Mkhayel main bar strip",                            ex: "Rue Pasteur full bars w nightlife" },
  { w: "Hotel Dieu",               t: "مستشفى أوتيل ديو",        e: "USJ-affiliated French Catholic hospital (1923)",       ex: "Hotel Dieu min ahla mostashfayet" },
  { w: "USJ",                      t: "جامعة القديس يوسف",       e: "Université Saint-Joseph (Jesuit, 1875)",                ex: "USJ aktar jam3a 7eldout men 100 sene" },
  { w: "ABC Achrafieh",            t: "إيه بي سي الأشرفية",      e: "flagship Achrafieh shopping mall (2003)",               ex: "ABC mall el-asasi bel-Achrafieh" },
  { w: "Beirut Souks",             t: "أسواق بيروت",              e: "downtown reconstructed shopping district",              ex: "Aswaq Beirut tjadadet ba3d el-7arb" },
  { w: "Place de l'Etoile",        t: "ساحة النجمة",              e: "downtown star plaza & Parliament",                     ex: "Place de l'Etoile mahal el-barlaman" },
  { w: "el-Tabaris",               t: "التباريس",                  e: "old Achrafieh-Gemmayzeh transition neighborhood",       ex: "el-Tabaris bayn Achrafieh w Gemmayzeh" },
  { w: "Ras el-Nabe3",             t: "رأس النبع",                e: "mixed lower-Achrafieh historic neighborhood",           ex: "Ras el-Nabe3 7ay 2adim mokhtalat" },
  { w: "Mar Nicolas Stairs",       t: "درج مار نقولا",           e: "iconic 125-step Achrafieh-Gemmayzeh staircase",         ex: "Daraj Mar Nicolas yarbet Achrafieh bi-Gemmayzeh" }
];

const ACH_DRILLS = [
  {
    q: "What is Achrafieh historically?",
    opts: [
      "industrial zone",
      "East Beirut hilltop, historic Christian (mostly Greek Orthodox + Maronite) bourgeois quarter — counterpart to West Beirut's Hamra",
      "ancient Roman city",
      "purely modern district"
    ],
    a: 1
  },
  {
    q: "Sursock Museum?",
    opts: [
      "modern building",
      "1912 Italianate-style Sursock family villa, donated and converted to a modern art museum 1961, restored after 2020 explosion",
      "shopping mall",
      "hotel"
    ],
    a: 1
  },
  {
    q: "Gemmayzeh today?",
    opts: [
      "residential only",
      "downhill street from Achrafieh — densely packed bars, cafés, restaurants in old Ottoman-era houses; iconic Beirut nightlife strip since 2000s",
      "industrial",
      "abandoned"
    ],
    a: 1
  },
  {
    q: "Mar Mkhayel after 2010?",
    opts: [
      "always was nightlife",
      "shifted from sleepy industrial-residential to dense hipster bar/restaurant scene, considered cooler-than-Gemmayzeh by locals",
      "still industrial",
      "demolished"
    ],
    a: 1
  },
  {
    q: "Sassine Square's role?",
    opts: [
      "ancient market",
      "central Achrafieh roundabout, defining landmark — site of 1982 Bashir Gemayel assassination memorial",
      "small alley",
      "private estate"
    ],
    a: 1
  },
  {
    q: "USJ founded?",
    opts: [
      "1950",
      "1875 by French Jesuits — Université Saint-Joseph, oldest French-language university in Lebanon, francophone counterpart to AUB",
      "1900",
      "1925"
    ],
    a: 1
  },
  {
    q: "Saifi Village?",
    opts: [
      "ancient ruin",
      "post-war (early 2000s) Solidere-restored pedestrian quarter — boutique shops, art galleries, restored Levantine architecture",
      "industrial site",
      "informal settlement"
    ],
    a: 1
  },
  {
    q: "Mar Nicolas Stairs?",
    opts: [
      "small alley",
      "iconic 125-step staircase connecting Achrafieh up high to Gemmayzeh down low — Beirut Design Week venue, painted murals",
      "private path",
      "modern escalator"
    ],
    a: 1
  },
  {
    q: "August 4 2020 explosion impact on Gemmayzeh + Mar Mkhayel?",
    opts: [
      "untouched",
      "districts closest to port — devastated thousands of buildings, killed many in those streets, shattered the bar-and-restaurant scene; partial recovery underway",
      "minor damage only",
      "no impact"
    ],
    a: 1
  },
  {
    q: "Sursock Street architecture?",
    opts: [
      "modern only",
      "showcases Levantine palace mansions — Sursock, Bustros, Pharaon, Linord families' 19th-c three-arch villas with hand-painted ceilings, marble; 2020 explosion damaged them severely",
      "Ottoman barracks",
      "Roman ruins"
    ],
    a: 1
  }
];

const ACH_TIPS = [
  "Sassine → Sursock Museum → Sursock Street walk for the bourgeois Achrafieh experience",
  "Mar Nicolas Stairs (125 steps) is the dramatic walk down from Achrafieh to Gemmayzeh — best at golden hour",
  "Gemmayzeh evenings start at Maïs el-Reem or Mayrig (Armenian); progress to bars on Rue Gouraud",
  "Mar Mkhayel for cooler/younger crowd — Rue Pasteur is the strip; 2020 blast damaged but the scene is rebuilding",
  "Saifi Village pedestrian by day for boutique shopping + art galleries; ABC Achrafieh for mainstream mall"
];
