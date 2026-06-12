// R1578 — NEW FEATURE: Baalbek & Roman Heritage (blb)
const BLB_WORDS = [
  { w: "ba3labak", t: "بعلبك", en: "Baalbek (city)", ex: "Ba3labak fi-l-beqa3.", exEn: "Baalbek is in the Bekaa.", notes: "City in Lebanon's Beqaa Valley, 85 km NE of Beirut. Name = 'Lord (Ba'al) of the Beqaa'. UNESCO site since 1984." },
  { w: "haykal", t: "هيكل", en: "temple", ex: "Haykal Jupiter ekbar haykal romani.", exEn: "Temple of Jupiter is the largest Roman temple.", notes: "Baalbek's Jupiter temple held world's largest Roman columns (22m tall). 6 of 54 still standing." },
  { w: "ba3al", t: "بعل", en: "Ba'al (Phoenician god)", ex: "Ba3al el-elaha el-finiqi.", exEn: "Ba'al was the Phoenician god.", notes: "Storm/sun god worshipped at Baalbek before Romans. Romans equated Ba'al with Jupiter — site became 'Heliopolis'." },
  { w: "jupiter", t: "جوبيتر", en: "Jupiter (Roman supreme god)", ex: "Haykal jupiter ebne sene 60 ba3d el-meelad.", exEn: "Jupiter's temple was built 60 AD.", notes: "Begun under Augustus, finished under Nero. Stylobate uses Trilithon — three 800-ton stones, world's largest construction blocks ever moved." },
  { w: "bacchus", t: "باخوس", en: "Bacchus (wine god)", ex: "Haykal bacchus a7san ma7fouz.", exEn: "Bacchus temple is the best preserved.", notes: "Built ~150 AD, smaller but more intact than Jupiter's. Famous carved reliefs — grapes, wheat, dancing maenads." },
  { w: "venus", t: "فينوس", en: "Venus (goddess)", ex: "Haykal venus zghir w mdawwar.", exEn: "Venus temple is small and round.", notes: "Circular temple SE of main complex, 3rd century. Converted to Byzantine church (St Barbara) in 4th century." },
  { w: "amoud", t: "عمود", en: "column / pillar", ex: "El-3awamid 22 metr 3oluw.", exEn: "The columns are 22m tall.", notes: "Jupiter's six surviving columns are the tallest in classical antiquity. Granite shafts shipped from Aswan, Egypt." },
  { w: "trilithon", t: "تريليثون", en: "Trilithon (three megalith stones)", ex: "El-trilithon kl wa7da 800 ton.", exEn: "Each Trilithon stone is 800 tons.", notes: "Three massive limestone blocks in Jupiter temple's western podium wall. Each 19×4×4m. Quarried locally — moved 800m, lifted 7m. Method still debated." },
  { w: "hajar el-7ubla", t: "حجر الحبلى", en: "Stone of the Pregnant Woman", ex: "Hajar el-7ubla 1000 ton.", exEn: "Stone of the Pregnant Woman is 1,000 tons.", notes: "Even bigger unfinished megalith in nearby quarry — 1,000 tons. Largest cut stone ever. Why it was abandoned remains a mystery." },
  { w: "qarmid", t: "قرميد", en: "stone block / brick", ex: "El-qarmid el-rommani matin.", exEn: "Roman stonework is solid.", notes: "Roman builders used dry-fit ashlar — no mortar. Stones cut so precise a knife blade can't fit between them, 2,000 years later." },
  { w: "moussa el-azar", t: "موسى العزر", en: "Moses al-Azar (Festival)", ex: "Mahrajan ba3labak kl Sayfiye.", exEn: "Baalbek Festival is every summer.", notes: "Baalbek International Festival started 1956 — Fairouz, Caracalla Dance Theater, Wagner operas performed in temple ruins. Iconic." },
  { w: "fairouz", t: "فيروز", en: "Fairouz (Lebanese diva)", ex: "Fairouz ghannet bi-ba3labak.", exEn: "Fairouz sang at Baalbek.", notes: "Nouhad Haddad (b. 1934). Sang her debut at Baalbek 1957 — defining moment for Lebanese cultural identity. Songs 'Le Beirut', 'Saalouni el-Nas'." },
  { w: "rasif", t: "رصيف", en: "platform / podium", ex: "El-rasif fou2 el-ard 7 metr.", exEn: "The platform is 7m above ground.", notes: "Jupiter complex sits on raised podium — Trilithon visible from outside as part of foundation. Engineering rationale for the megaliths still debated." },
  { w: "athaar", t: "آثار", en: "ruins / antiquities", ex: "El-athaar bi-Lebnen kteer.", exEn: "There are many ruins in Lebanon.", notes: "Lebanon has 4 UNESCO sites: Baalbek, Anjar, Byblos, Tyre — plus Qadisha. Plus Roman Tyre, Phoenician Sidon, Crusader castles." },
  { w: "anjar", t: "عنجر", en: "Anjar (Umayyad ruins)", ex: "Anjar madineh omawiyye.", exEn: "Anjar is an Umayyad city.", notes: "8th-century palace city, only major Umayyad site in Lebanon. 30 min from Baalbek. UNESCO since 1984." },
  { w: "balad el-shams", t: "بلد الشمس", en: "Heliopolis (City of the Sun)", ex: "El-rommen samohou heliopolis.", exEn: "Romans called it Heliopolis.", notes: "Greek for 'City of the Sun'. Romans renamed Baalbek to Heliopolis because they conflated Ba'al with sun-god worship. Coins from era have 'COL HEL' inscription." }
];

const BLB_DRILLS = [
  { q: "How say 'Baalbek (city)'?", a: "ba3labak", hint: "Lord of the Beqaa." },
  { q: "What's 'temple'?", a: "haykal", hint: "Jupiter's was world's largest Roman one." },
  { q: "Phoenician storm-god?", a: "ba3al", hint: "Romans equated him with Jupiter." },
  { q: "Best-preserved Baalbek temple?", a: "bacchus", hint: "Wine-god, ~150 AD." },
  { q: "How say 'column'?", a: "amoud", hint: "Six survive, 22m tall." },
  { q: "Three giant podium stones?", a: "trilithon", hint: "800 tons each." },
  { q: "1,000-ton unfinished megalith?", a: "hajar el-7ubla", hint: "Pregnant Woman Stone." },
  { q: "Lebanese diva who sang at Baalbek?", a: "fairouz", hint: "Debut 1957, Le Beirut." },
  { q: "Roman name for Baalbek?", a: "balad el-shams", hint: "City of the Sun, Heliopolis." },
  { q: "Umayyad ruins near Baalbek?", a: "anjar", hint: "Only Umayyad site in Lebanon." }
];

const BLB_TIPS = [
  "🏛️ Baalbek's Jupiter Temple held the world's largest Roman columns (22m / 72ft tall) — only 6 of original 54 still stand. Largest single Roman religious structure ever built.",
  "🪨 The Trilithon stones in Jupiter's podium each weigh ~800 tons. Even today, only 2-3 cranes worldwide can lift that weight. Romans moved them 800m and stacked them 7m up — method unknown.",
  "🎵 Baalbek International Festival (1956–present, paused during civil war) made Fairouz, the Caracalla Dance Theater, and the Rahbani Brothers internationally famous. Performances inside Bacchus temple.",
  "☀️ Romans called Baalbek 'Heliopolis' (City of the Sun) — they syncretized Phoenician Ba'al with Jupiter and Helios. Coins reading 'COL HEL' (Colonia Heliopolitana) date to this era.",
  "🚗 From Beirut: 2 hours via the Beqaa Valley road. Combine with Anjar (8th-c Umayyad palace ruins, 30 min away) and Ksara wine cellars for a single-day antiquities tour."
];
