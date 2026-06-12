// R1563 — NEW FEATURE: Lebanese Antique Market & Vintage Treasures (atq)
const ATQ_WORDS = [
  { w: "3atee2", tr: "عتيق", en: "antique / aged", ex: "Hayda 3atee2 min ayyam jeddi.", exEn: "This antique is from my grandfather's days.", notes: "Catch-all word for old/vintage. Used as compliment for furniture, jewelry, and watches with patina." },
  { w: "khorda", tr: "خردة", en: "junk / scrap", ex: "Hayda mish 3atee2, hayda khorda!", exEn: "This isn't antique, this is junk!", notes: "Pejorative — a quick way for hagglers to push the price down. The opposite of 3atee2." },
  { w: "ntfeh", tr: "نتفة", en: "trinket / keepsake", ex: "3andi ntfet min teta.", exEn: "I have a little keepsake from grandma.", notes: "Affectionate term for small heirlooms — earrings, broaches, ribboned cards. Plural: ntaf." },
  { w: "souk al-Ahad", tr: "سوق الأحد", en: "Sunday Market (Beirut)", ex: "Yom el-Ahad mneenzel 3a souk al-Ahad.", exEn: "On Sundays we go to Sunday Market.", notes: "Beirut's open-air weekly flea market off the Sin el-Fil overpass — the antique-hunter's pilgrimage spot." },
  { w: "nahasi", tr: "نحاسي", en: "made of copper/brass", ex: "Hayda ibreek nahasi asli.", exEn: "This is an authentic copper pitcher.", notes: "Lebanese homes prize hammered copper trays and pots — passed mother to daughter." },
  { w: "saneeyeh", tr: "صينية", en: "tray (often brass)", ex: "Saneeyet jeddti zaki nakshen.", exEn: "Grandma's tray has beautiful engraving.", notes: "Engraved brass trays — used for serving coffee or as wall art. Older ones from Damascus/Aleppo are most prized." },
  { w: "ibreek", tr: "إبريق", en: "pitcher / ewer", ex: "Sho 7elo el-ibreek el-3atee2!", exEn: "How beautiful the antique pitcher is!", notes: "Long-spouted brass or copper ewer. Originally for water/coffee service. Decorative now in most homes." },
  { w: "fanos", tr: "فانوس", en: "lantern / oil lamp", ex: "Fanos jeddi b3edo byish3el.", exEn: "Grandfather's lantern still works.", notes: "Brass kerosene lanterns — pre-electricity heritage objects. Ramadan lanterns share the name." },
  { w: "khazneh", tr: "خزنة", en: "antique chest / armoire", ex: "El-khazneh el-khashabiyyeh min Tripoli.", exEn: "The wooden chest is from Tripoli.", notes: "Carved wooden chests, often inlaid with mother-of-pearl. Tripoli and Damascus craftsmanship most valued." },
  { w: "saa3a 3atee2a", tr: "ساعة عتيقة", en: "vintage clock/watch", ex: "Bayye 3ato saa3a 3atee2a min jeddo.", exEn: "Dad gave me a vintage watch from his grandfather.", notes: "Pocket watches and pendulum clocks. Swiss-Lebanese diaspora often returned with these in the 1950s." },
  { w: "asli", tr: "أصلي", en: "authentic / original", ex: "Asli walla mzayyaf?", exEn: "Authentic or fake?", notes: "The make-or-break question at any antique stall. Sellers swear 'wallah asli' constantly." },
  { w: "mzayyaf", tr: "مزيّف", en: "fake / counterfeit", ex: "El-fudda hayde mzayyafe.", exEn: "This silver is fake.", notes: "The accusation buyers throw to lower prices. Knock-on copper, scratch-test silver — old buyer tricks." },
  { w: "ta2yeem", tr: "تقييم", en: "appraisal", ex: "Bedi ta2yeem la-hal saneeyeh.", exEn: "I want an appraisal for this tray.", notes: "Professional appraisers (mu2ayyem) work mainly out of Mar Mikhael and Gemmayze antique shops in Beirut." },
  { w: "ntfet 7arb", tr: "نتفة حرب", en: "war-era keepsake", ex: "Hayda fanos min ayyam el-7arb.", exEn: "This lantern is from the war days.", notes: "Civil-war era objects (1975-90) have their own market — kerosene gear, transistor radios, ration tins." },
  { w: "wraatha", tr: "وراثة", en: "heirloom / inheritance", ex: "Hal khaatem wraatha min ymmi.", exEn: "This ring is an heirloom from my mom.", notes: "Heirlooms aren't sold easily — selling family wraatha is socially weighted, often a sign of crisis." },
  { w: "khattef", tr: "خطّف", en: "snatch / grab quickly", ex: "Khattefto 2abel ma yji 7adan tene.", exEn: "I snatched it before someone else came.", notes: "Antique-hunter slang for grabbing a bargain before another buyer spots it. The thrill of souk al-Ahad." }
];

const ATQ_DRILLS = [
  { q: "How say 'antique'?", a: "3atee2", hint: "Catch-all for aged/vintage." },
  { q: "What's 'authentic'?", a: "asli", hint: "The seller swears it's this." },
  { q: "What's 'fake'?", a: "mzayyaf", hint: "Buyer's accusation to drop price." },
  { q: "How say 'tray'?", a: "saneeyeh", hint: "Often brass, often engraved." },
  { q: "How say 'pitcher/ewer'?", a: "ibreek", hint: "Long-spouted, copper or brass." },
  { q: "What's 'lantern'?", a: "fanos", hint: "Pre-electricity brass kerosene gear." },
  { q: "How say 'junk'?", a: "khorda", hint: "Pejorative opposite of 3atee2." },
  { q: "What's 'heirloom'?", a: "wraatha", hint: "Passed down through family." },
  { q: "Beirut's Sunday flea market?", a: "souk al-Ahad", hint: "Sin el-Fil overpass — the antique pilgrimage." },
  { q: "What's 'appraisal'?", a: "ta2yeem", hint: "What you ask of the mu2ayyem." }
];

const ATQ_TIPS = [
  "🏛️ Souk al-Ahad in Sin el-Fil runs every Sunday morning. Arrive at dawn — the best pieces vanish by 9am to dealer tip-offs.",
  "🪙 Hammered copper (nahas) is Lebanon's signature antique craft. Real pieces have visible hammer marks; pressed reproductions feel uniformly thin.",
  "🔨 Sellers' 'wallah asli' (I swear it's authentic) is ritual, not testimony. Always counter-test: scratch silver, weigh copper, check screws on watches.",
  "🏺 Damascus and Aleppo workshops historically made the finest brass trays imported into Lebanon. Tripoli's 3000-year metalwork tradition is the local pride.",
  "💔 Selling family wraatha is socially loaded — it suggests financial crisis. Lebanese antique buyers approach private sellers gently for this reason."
];
