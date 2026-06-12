// R1581 — NEW FEATURE: Jeita Grotto & Lebanese Cave Heritage (jta)
const JTA_WORDS = [
  { w: "jeita", t: "جعيتا", en: "Jeita (grotto location)", ex: "Jeita 18 km shimal Beirut.", exEn: "Jeita is 18 km north of Beirut.", notes: "Limestone cave in Keserwan district, 18 km north of Beirut. Lebanon's most-visited natural site. Top finalist for New 7 Wonders of Nature (2011)." },
  { w: "mghara jeita", t: "مغارة جعيتا", en: "Jeita Grotto", ex: "Mghara jeita ekbar mghara bi-Lebnen.", exEn: "Jeita Grotto is the largest cave in Lebanon.", notes: "9km mapped passages. Two galleries — upper (walking, 750m) + lower (boat trip, 6.2km river). Closed 1969-1995 during civil war." },
  { w: "sahreej", t: "صهريج", en: "underground reservoir / pool", ex: "El-sahreej tahet el-mghara bared.", exEn: "The underground pool is cold.", notes: "Lower gallery has navigable underground river. Source feeds Beirut's water — ~1.2 million m³/day to ~1M Lebanese." },
  { w: "salaha", t: "صلاحة", en: "stalactite (drip-rock)", ex: "El-salaha el-tweele 8 metr.", exEn: "The longest stalactite is 8m.", notes: "Jeita has world's longest free-hanging stalactite at 8.2m / 27ft. Forms over millennia from mineral-rich water dripping." },
  { w: "salaha sa3da", t: "صلاحة صاعدة", en: "stalagmite (rising rock)", ex: "El-salaha el-sa3da tetla3 mn el-ard.", exEn: "Stalagmites rise from the floor.", notes: "Counterpart to stalactite — grows upward from drip pool. Together they sometimes meet to form columns." },
  { w: "kahf", t: "كهف", en: "cave / cavern", ex: "El-kahf bared kteer.", exEn: "The cave is very cold.", notes: "Cave temperature ~22°C year-round. Bring jacket — wet, chilly. Other Lebanese caves: Kfarhim, Roueiss, Qadisha hermit caves." },
  { w: "zawra2", t: "زورق", en: "small boat", ex: "Zawra2 bi-mghara jeita.", exEn: "A boat in Jeita Grotto.", notes: "Lower gallery requires boat ride (~20 min). Quiet electric boats glide on river — feels otherworldly." },
  { w: "telefric", t: "تلفريك", en: "cable car / téléphérique", ex: "El-telefric byewSal mghara.", exEn: "The cable car reaches the cave.", notes: "Optional cable car connects parking to upper gallery. Mini train (lower→upper) also available — ride included in ticket." },
  { w: "nahr el-kalb", t: "نهر الكلب", en: "Dog River (nearby)", ex: "Nahr el-kalb 2arib mn jeita.", exEn: "Dog River is near Jeita.", notes: "Nahr el-Kalb flows from Jeita's underground source. Riverbanks have ancient inscriptions — Pharaohs, Romans, Crusaders, Napoleon all left marks across 3,400 years." },
  { w: "ektisheef", t: "اكتشاف", en: "discovery / exploration", ex: "Ektisheef jeita sene 1836.", exEn: "Jeita's discovery was in 1836.", notes: "American missionary William Thomson 'discovered' it in 1836 (locals knew already). Cave only fully mapped by Lebanese speleologists in 1958." },
  { w: "noor", t: "نور", en: "light / illumination", ex: "El-noor bel-mghara mish 2awe.", exEn: "Light in the cave is dim.", notes: "Modern lighting installed for tours — colored LEDs accent stalactites/stalagmites. Subdued to preserve cave ecology." },
  { w: "soqouf", t: "سقوف", en: "ceilings / vaults", ex: "El-soqouf 3aliye w 7elwe.", exEn: "The ceilings are tall and beautiful.", notes: "Some chambers have 100m+ vault heights. Cathedral-like 'White Hall' is the upper gallery's most photographed space." },
  { w: "3aja2eb", t: "عجائب", en: "wonders / marvels", ex: "Jeita 3aja2eb el-tabi3a.", exEn: "Jeita is a natural wonder.", notes: "Voted top 14 in 'New 7 Wonders of Nature' 2011 finals — finished outside top 7 but huge for Lebanese pride. Government issued commemorative stamps." },
  { w: "ma2 7elou", t: "ماء حلو", en: "fresh water (sweet water)", ex: "Ma2 jeita 7elou w bared.", exEn: "Jeita's water is sweet and cold.", notes: "Underground river supplies ~1.2 million m³/day to Beirut. Crisis when 2018 fuel-oil leak contaminated it briefly — political scandal." },
  { w: "jameel", t: "جميل", en: "beautiful", ex: "Mghara jeita jameele kteer.", exEn: "Jeita Grotto is very beautiful.", notes: "Often described as 'jewel of Lebanese tourism'. Lebanese say 'shouf jeita 2abel ma temout' — see Jeita before you die." },
  { w: "khoroj", t: "خروج", en: "exit / way out", ex: "El-khoroj min hon.", exEn: "The exit is from here.", notes: "Tour route is one-way — boat to far chamber, walk back to exit. ~1.5 hour round trip with shuttle, train, both galleries." }
];

const JTA_DRILLS = [
  { q: "How say 'Jeita Grotto'?", a: "mghara jeita", hint: "Cave + place name." },
  { q: "What's 'cave'?", a: "kahf", hint: "Generic word for cavern." },
  { q: "Underground pool/reservoir?", a: "sahreej", hint: "Lower gallery river/lake." },
  { q: "Stalactite (drip-rock)?", a: "salaha", hint: "Hangs from ceiling — 8m world's longest at Jeita." },
  { q: "Small boat?", a: "zawra2", hint: "Rides through lower gallery." },
  { q: "Cable car?", a: "telefric", hint: "From French téléphérique." },
  { q: "Dog River near Jeita?", a: "nahr el-kalb", hint: "3,400-year inscriptions on banks." },
  { q: "Discovery (e.g., Jeita in 1836)?", a: "ektisheef", hint: "American missionary Thomson." },
  { q: "Wonders/marvels?", a: "3aja2eb", hint: "3aja2eb el-tabi3a — natural wonders." },
  { q: "Beautiful?", a: "jameel", hint: "Common adjective for Jeita." }
];

const JTA_TIPS = [
  "🏞️ Jeita Grotto, 18 km north of Beirut, has been Lebanon's #1 natural attraction since reopening in 1995. The 9km cave system has 2 galleries — upper (walking) and lower (boat ride on underground river).",
  "🥇 World's longest free-hanging stalactite (8.2m / 27ft) is in Jeita's upper gallery. The 'Grand Hall' has cathedral-like vaults reaching 100m+.",
  "🚫 No photography in lower gallery — flash disturbs bat colonies and blue-fin trout in the river. Upper gallery photos OK. Phones must be in lockers for boat ride.",
  "❄️ Cave is 22°C year-round — pleasant on hot summer days but feels cold (you've been in 35°C outside!). Bring a light jacket. Boat ride is ~20 min, total visit ~1.5 hours.",
  "🌊 Jeita's underground river supplies ~1.2 million m³ of drinking water daily to ~1 million Lebanese, mainly Beirut. A 2018 fuel-oil leak briefly contaminated supply — major political scandal."
];
