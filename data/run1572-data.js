// R1572 — NEW FEATURE: Lebanese Soap Making & Khan al-Saboun (sbn)
const SBN_WORDS = [
  { w: "saboun", t: "صابون", en: "soap", ex: "Saboun Trables a3la wa7ad bi-Lebnen.", exEn: "Tripoli soap is the finest in Lebanon.", notes: "Tripoli (Trables) is Lebanon's soap capital — olive-oil soap tradition continuous for 600+ years." },
  { w: "khan al-saboun", t: "خان الصابون", en: "Khan al-Saboun (Tripoli soap caravanserai)", ex: "Z2arna khan al-saboun bi-Trables.", exEn: "We visited Khan al-Saboun in Tripoli.", notes: "14th-century Mamluk-era merchant khan in Tripoli's old souk — still a working soap workshop and tourist landmark." },
  { w: "zayt zaytoun", t: "زيت زيتون", en: "olive oil (soap base)", ex: "El-saboun el-asli min zayt zaytoun.", exEn: "Real soap is from olive oil.", notes: "Lebanese soap base is cold-pressed olive oil — Koura and Akkar oils preferred for high oleic content." },
  { w: "ghar", t: "غار", en: "laurel / bay leaf oil", ex: "El-ghar byekhli el-saboun ghali.", exEn: "Laurel makes the soap expensive.", notes: "Laurel-berry oil is the prized additive — 5-25% ghar ratio defines grade. Native Levantine laurel preferred." },
  { w: "masbana", t: "مصبنة", en: "soap factory / workshop", ex: "Fi masbana qadeemeh bi-Trables.", exEn: "There's an old soap workshop in Tripoli.", notes: "Traditional masbana uses wood-fired copper cauldrons (qudoor). Hassoun and Bader workshops are 6+ generations." },
  { w: "saboun ghar", t: "صابون غار", en: "laurel soap (Aleppo/Tripoli style)", ex: "Saboun ghar la-bashre el-7assase.", exEn: "Laurel soap for sensitive skin.", notes: "The signature Levantine soap — green-brown bar with distinctive earthy scent. Cures skin conditions per folk tradition." },
  { w: "saboun zayt", t: "صابون زيت", en: "olive-oil soap (plain)", ex: "Saboun zayt el-akhdar lel-ghasleh.", exEn: "Plain green olive soap for laundry.", notes: "The everyday Lebanese soap — no laurel, just olive oil and lye. Cubes sold by weight in souks." },
  { w: "qaleb saboun", t: "قالب صابون", en: "soap mold / bar", ex: "Khedt qaleb saboun bi-3ashra alaaf.", exEn: "I bought a soap bar for 10k.", notes: "Cut from giant slabs after curing. Stamped with maker's name and cure date — a quality marker." },
  { w: "qadr", t: "قدر", en: "soap cauldron (copper pot)", ex: "El-qadr 3am yghalle kel layl.", exEn: "The cauldron boils all night.", notes: "Hand-hammered copper cauldrons — saponification stage takes 3-7 days at low heat. Wood fire only, gas changes scent." },
  { w: "ta3teeq", t: "تعتيق", en: "aging / curing", ex: "El-ta3teeq byekhod sitt ash7our.", exEn: "Curing takes six months.", notes: "Cured in stacked slabs in dark rooms — flipped weekly for even drying. 6-12 months is standard, longer for premium." },
  { w: "tanshif", t: "تنشيف", en: "drying stage", ex: "El-tanshif byekhli el-saboun aSlab.", exEn: "Drying makes the soap harder.", notes: "Final stage after curing — air-circulation rooms (no humidity). Hard soap = long-lasting; soft soap = poor cure." },
  { w: "khabbaz saboun", t: "خبّاز صابون", en: "soap master / soap-maker", ex: "El-khabbaz saboun mn3allem mn 3omor.", exEn: "The soap master is trained from childhood.", notes: "Literally 'soap baker' — title for the master who controls the cauldron. Apprenticeships run 7-15 years." },
  { w: "mash7on bel-ward", t: "مشحون بالورد", en: "scented with rose", ex: "Saboun mash7on bel-ward la-3aroussa.", exEn: "Rose-scented soap for the bride.", notes: "Damascene rose oil is the premium scent. Wedding soap gifts (jihaz) often include rose-scented Tripoli laurel." },
  { w: "yasmeen", t: "ياسمين", en: "jasmine (scent)", ex: "Saboun yasmeen aleph wa nas.", exEn: "Jasmine soap is one of a kind.", notes: "Beit Mery and Bekaa jasmine flowers infused into soap — summer scent associated with Lebanese gardens." },
  { w: "raqsh saboun", t: "رقش صابون", en: "soap stamp / engraving", ex: "El-raqsh fih ism el-3ayle.", exEn: "The stamp has the family name.", notes: "Hand-carved wooden stamps press the maker's mark before curing. Hassoun's lion stamp is most iconic." },
  { w: "sandouk khashab", t: "صندوق خشب", en: "wooden crate (soap shipping)", ex: "B3atouli sandouk khashab saboun min Trables.", exEn: "They sent me a wooden crate of soap from Tripoli.", notes: "Traditional pine crates with stenciled maker's name. Pre-plastic export packaging — collectibles among diaspora." }
];

const SBN_DRILLS = [
  { q: "How say 'soap'?", a: "saboun", hint: "Tripoli is Lebanon's soap capital — 600+ years." },
  { q: "What's 'olive oil'?", a: "zayt zaytoun", hint: "Cold-pressed Koura/Akkar oil preferred." },
  { q: "How say 'laurel oil'?", a: "ghar", hint: "5-25% ratio defines soap grade." },
  { q: "What's 'soap factory'?", a: "masbana", hint: "Wood-fired copper cauldrons traditional." },
  { q: "How say 'laurel soap'?", a: "saboun ghar", hint: "Green-brown bar, signature Levantine soap." },
  { q: "What's 'soap bar / mold'?", a: "qaleb saboun", hint: "Cut from slabs, stamped with maker's name." },
  { q: "How say 'curing / aging'?", a: "ta3teeq", hint: "6-12 months standard cure time." },
  { q: "What's 'soap master'?", a: "khabbaz saboun", hint: "Lit. 'soap baker' — 7-15 year apprenticeship." },
  { q: "Tripoli's famous soap khan?", a: "khan al-saboun", hint: "14th-century Mamluk merchant building." },
  { q: "Soap stamp / engraving?", a: "raqsh saboun", hint: "Hassoun's lion stamp is most iconic." }
];

const SBN_TIPS = [
  "🧼 Khan al-Saboun in Tripoli's old souk dates to the 14th century (Mamluk era) — still an active soap workshop and a top tourist landmark.",
  "🌿 Tripoli laurel soap (saboun ghar) predates Western soap-making by centuries. Crusaders brought the recipe back to Marseille → Marseille soap is its descendant.",
  "🫒 Olive-oil base + 5-25% laurel-berry oil ratio defines grade. Cheap = olive only; premium = 25% ghar with 9-12 month cure.",
  "🔥 Wood-fired copper cauldrons (qudoor) are required by purists — gas-fired soap is considered to have a different scent profile and looser texture.",
  "🦁 Hassoun and Bader Hassoun families dominate Tripoli soap-making (6+ generations). Bader Hassoun's gallery-museum on Tripoli's hilltop is a must-visit for soap heritage."
];
