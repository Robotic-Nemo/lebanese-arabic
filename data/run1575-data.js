// R1575 — NEW FEATURE: Wadi Qadisha (Holy Valley) & Maronite Heritage (wqd)
const WQD_WORDS = [
  { w: "wadi qadisha", t: "وادي قاديشا", en: "Wadi Qadisha (Holy Valley)", ex: "Wadi qadisha 3al laye7at el-UNESCO.", exEn: "Wadi Qadisha is on the UNESCO list.", notes: "UNESCO World Heritage site since 1998 — sacred valley of Maronite Christian hermits for over 1,000 years." },
  { w: "wadi qannoubin", t: "وادي قنوبين", en: "Wadi Qannoubin (Patriarchal valley)", ex: "Bater2na sakanu bi-wadi qannoubin.", exEn: "Patriarchs lived in Wadi Qannoubin.", notes: "The deepest gorge of Qadisha — seat of the Maronite Patriarchate from 1440 to 1823. Cliff-carved cells still visible." },
  { w: "deir", t: "دير", en: "monastery", ex: "El-deir min2our bel-jabal.", exEn: "The monastery is carved into the mountain.", notes: "Word for monastery/convent. Qadisha has dozens — Mar Antonios Qozhaya, Mar Lichaa, Qannoubin, Hawqa, all medieval rock-cut." },
  { w: "mghara", t: "مغارة", en: "cave / grotto", ex: "El-mghara malja2 lel-nasek.", exEn: "The cave is the hermit's refuge.", notes: "Caves in Qadisha walls were carved/expanded for hermit cells (mahbass). Some date to the 5th century." },
  { w: "nasek", t: "ناسك", en: "hermit / ascetic", ex: "El-nasek 3ayesh bel-mghara la-50 sene.", exEn: "The hermit lived in the cave for 50 years.", notes: "Monastic tradition still alive — Father Yuhanna al-Khoury was last formal hermit (d. 2015). New hermits accepted today." },
  { w: "mahbass", t: "محبس", en: "hermitage / cell", ex: "El-mahbass kteer Daghi3.", exEn: "The hermitage is very small.", notes: "Small cliff-cell, often single room with chapel. Mar Bishay mahbass clings to vertical cliff face — must rappel to reach." },
  { w: "qiddees", t: "قدّيس", en: "saint", ex: "Mar Charbel a3la qiddees marouni.", exEn: "Saint Charbel is the most famous Maronite saint.", notes: "Qadisha produced many — Charbel Makhlouf (canonized 1977), Rafqa, Nimatullah Hardini all from this region." },
  { w: "Saleeb", t: "صليب", en: "cross", ex: "El-Saleeb 3al qubbet el-deir.", exEn: "The cross is on the monastery's dome.", notes: "Maronite cross often has flared ends (Cedars of Lebanon style). Crosses dot the cliffs above hermitages." },
  { w: "fres2", t: "فرسك", en: "fresco / wall painting", ex: "El-fres2 bel-deir min el-2arn 13.", exEn: "The fresco in the monastery is from the 13th century.", notes: "Qannoubin and Mar Lichaa preserve rare medieval Syriac-style frescoes — Christ Pantocrator, Mary, saints in Byzantine-Syriac fusion." },
  { w: "syriani", t: "سرياني", en: "Syriac (language/rite)", ex: "El-quddas syriani.", exEn: "The mass is in Syriac.", notes: "Maronites use Syriac (Aramaic dialect) for liturgy — language of Christ. Qadisha was a continuous Syriac literary center." },
  { w: "marouni", t: "ماروني", en: "Maronite (Christian)", ex: "El-marouni mn2asem la-Saint Maron.", exEn: "Maronites are named for Saint Maron.", notes: "Eastern Catholic church in communion with Rome. Saint Maron (d. 410) is the founder; Qadisha became their refuge from persecution." },
  { w: "arz el-rabb", t: "أرز الرب", en: "Cedars of God", ex: "Arz el-rabb foq Bsharri.", exEn: "The Cedars of God are above Bsharri.", notes: "Ancient cedar grove (1,200+ years old trees) above Bsharri at Qadisha's head. Mentioned 100+ times in Bible." },
  { w: "bsharri", t: "بشرّي", en: "Bsharri (town)", ex: "Bsharri masqat ras Gibran.", exEn: "Bsharri is Gibran's birthplace.", notes: "Mountain town at top of Qadisha valley, 1,500m elevation. Birthplace of Khalil Gibran (1883). Gateway to Cedars and valley trails." },
  { w: "gibran", t: "جبران", en: "Gibran (Khalil Gibran)", ex: "Gibran katab 'el-nabi' bel-englize.", exEn: "Gibran wrote 'The Prophet' in English.", notes: "Khalil Gibran Khalil (1883-1931). 'The Prophet' translated into 100+ languages. Tomb is in Mar Sarkis monastery, Bsharri." },
  { w: "qadeesh", t: "قديش", en: "ancient / very old (root q-d-sh)", ex: "Qadisha ya3ne 'el-mqaddase'.", exEn: "Qadisha means 'the holy one'.", notes: "Name from Syriac qadisha (holy/sacred). Same root as Hebrew kadosh. Valley named for its sacred status — pre-Christian roots possible." },
  { w: "hike", t: "هايك", en: "hike (the trail)", ex: "El-hike min Bsharri la-Qannoubin 5 se3at.", exEn: "Hike from Bsharri to Qannoubin is 5 hours.", notes: "Marked trail (Lebanon Mountain Trail crosses Qadisha). Steep, 800m elevation drop. Best Apr-Jun and Sep-Nov; winter snow/ice." }
];

const WQD_DRILLS = [
  { q: "How say 'Holy Valley'?", a: "wadi qadisha", hint: "UNESCO since 1998." },
  { q: "What's 'monastery'?", a: "deir", hint: "Qadisha has dozens, rock-cut." },
  { q: "How say 'hermit'?", a: "nasek", hint: "Last formal one died 2015." },
  { q: "What's 'cave / grotto'?", a: "mghara", hint: "Refuge for monastic cells." },
  { q: "How say 'hermitage cell'?", a: "mahbass", hint: "Mar Bishay clings to cliff." },
  { q: "What's 'saint'?", a: "qiddees", hint: "Charbel, Rafqa, Hardini all here." },
  { q: "How say 'Maronite'?", a: "marouni", hint: "Eastern Catholic in union with Rome." },
  { q: "Cedars of God?", a: "arz el-rabb", hint: "1,200-year trees above Bsharri." },
  { q: "Gibran's hometown?", a: "bsharri", hint: "1,500m elevation, valley head." },
  { q: "Liturgical language?", a: "syriani", hint: "Aramaic dialect — Christ's language." }
];

const WQD_TIPS = [
  "📜 Wadi Qadisha was inscribed by UNESCO in 1998 (jointly with Cedars of God) for over 1,000 years of continuous Maronite monastic life — one of the world's most ancient continuous Christian sites.",
  "⛪ Qannoubin Monastery was the seat of the Maronite Patriarchate from 1440 to 1823 — patriarchs are buried in cliff-cut tombs above the monastery, accessible by narrow staircase.",
  "🌲 Cedars of God (Arz el-Rabb) above Bsharri are biblical — Solomon's Temple was built from Lebanese cedar. The grove has trees verified at 1,000-1,500 years old.",
  "🧗 Mar Lichaa monastery is reached by a 30-minute steep descent from Hawqa village. Mar Bishay hermitage requires actual rope rappelling — only experienced climbers attempt it.",
  "✍️ Khalil Gibran's tomb is at Mar Sarkis monastery in Bsharri — his hermitage-bedroom is preserved with his books, paintings, and the silver coffin he requested for return from New York."
];
