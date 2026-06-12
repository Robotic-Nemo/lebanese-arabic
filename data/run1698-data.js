// Run #1698 — NEW FEATURE: ehd — Ehden, the Maronite mountain town of north
// Lebanon (Zgharta caza, Mount Lebanon range, ~1500m elevation). Famous as
// summer escape for Zgharta families, host town of the Mar Mama festival, and
// gateway to the Horsh Ehden cedar reserve. Twin-city tradition with Zgharta
// (residents winter in Zgharta, summer in Ehden — "Bayt Tannourine" liwan
// houses). Distinct from R1605 qsh (Qadisha valley monastic), R1623 sda
// (Sidon south coast), R1611 nbt (Nabatieh shia south). Prefix: ehd.

const EHD_WORDS = [
  { w: 'ehden', t: 'إهدن', e: 'Ehden — Maronite mountain town, north Lebanon, ~1500m', ex: 'rayhin 3a ehden eS-Seif.', exEn: 'We are going to Ehden in summer.' },
  { w: 'zgharta', t: 'زغرتا', e: 'Zgharta — twin/winter town of Ehden, in the foothills', ex: 'zgharta jowwa, ehden barra.', exEn: 'Zgharta inside (winter), Ehden outside (summer).' },
  { w: 'mar mama', t: 'مار ماما', e: 'Mar Mama — patron saint of Ehden, festival August 1-2', ex: 'b3id mar mama 3am bteshri.', exEn: 'Mar Mama festival is at the start of August.' },
  { w: 'horsh', t: 'حرش', e: 'horsh — forest; Horsh Ehden is the famous cedar reserve', ex: 'mshina b-horsh ehden.', exEn: 'We walked in Horsh Ehden.' },
  { w: 'arz', t: 'أرز', e: 'arz — cedar; Horsh Ehden has rare Cilician fir + cedars', ex: 'el-arz ramz lebnan.', exEn: 'The cedar is Lebanon\'s symbol.' },
  { w: 'liwan', t: 'ليوان', e: 'liwan — vaulted reception hall in traditional Ehden houses', ex: 'eddna 3a-l-liwan.', exEn: 'We sat in the liwan.' },
  { w: 'midane', t: 'ميدان', e: 'midane — Ehden\'s central square, heart of the town', ex: 'el-midane fi-l-mahrajan.', exEn: 'The square has the festival.' },
  { w: 'frangieh', t: 'فرنجية', e: 'Frangieh — most prominent Zgharta-Ehden Maronite family', ex: 'aal frangieh men ehden.', exEn: 'The Frangieh family is from Ehden.' },
  { w: 'maronieh', t: 'مارونية', e: 'maronieh — Maronite (the dominant Christian denomination here)', ex: 'ehden maronieh kella.', exEn: 'Ehden is entirely Maronite.' },
  { w: 'mahrajan', t: 'مهرجان', e: 'mahrajan — festival; Ehden has summer mahrajanat', ex: 'mahrajan ehden mashhour.', exEn: 'The Ehden festival is famous.' },
  { w: 'Seif', t: 'صيف', e: 'Seif — summer; Ehden\'s population swells in Seif', ex: 'eS-Seif b-ehden a7la.', exEn: 'Summer in Ehden is best.' },
  { w: 'shta', t: 'شتا', e: 'shta — winter; most Ehdenis descend to Zgharta in shta', ex: 'b-eshshta byenzlu.', exEn: 'In winter they descend.' },
  { w: 'kfar zayna', t: 'كفر زينا', e: 'Kfar Zayna — Ehden\'s old quarter with stone houses', ex: 'kfar zayna fiya bouyout 2dime.', exEn: 'Kfar Zayna has old houses.' },
  { w: 'qarne', t: 'قرنة', e: 'qarne — peak; Qornet el-Sawda (3088m) is nearby', ex: 'qarne 3aliye.', exEn: 'A high peak.' },
  { w: 'nahr abu ali', t: 'نهر أبو علي', e: 'Nahr Abu Ali — river that runs through Zgharta to Tripoli', ex: 'nahr abu ali b-eshshta qawi.', exEn: 'The river is strong in winter.' },
  { w: 'kebbe', t: 'كبة', e: 'kebbe — north-Lebanese stuffed bulgur, Zgharta-Ehden specialty', ex: 'kebbe zghartaweye a7la.', exEn: 'Zgharta-style kibbeh is best.' },
  { w: 'zaffe', t: 'زفة', e: 'zaffe — wedding procession; Ehden weddings are loud zaffes', ex: 'zaffet ehden b-tabel w-zamour.', exEn: 'The Ehden zaffe has drum and horn.' },
  { w: '3id mar mama', t: 'عيد مار ماما', e: '3id mar mama — Mar Mama feast day, August 1', ex: '3id mar mama 3a awwal ab.', exEn: 'Mar Mama feast is on August 1.' },
  { w: 'bayit jdid', t: 'بيت جديد', e: 'Bayit Jdid — Frangieh family stronghold in Ehden', ex: 'bayit jdid fi qaSr.', exEn: 'Bayit Jdid has a mansion.' },
  { w: 'mar serkis', t: 'مار سركيس', e: 'Mar Serkis — old church in Ehden, key Maronite shrine', ex: 'kniset mar serkis 3atiqa.', exEn: 'Mar Serkis church is ancient.' },
  { w: 'sahha', t: 'سحة', e: 'sahha — picnic plain near Horsh Ehden for family outings', ex: 'roo7na 3a-s-sahha n3amel mashawi.', exEn: 'We went to the plain to grill.' },
  { w: 'akhdar', t: 'أخضر', e: 'akhdar — green; Ehden is famously the "green town"', ex: 'ehden akhdar kell el-sene.', exEn: 'Ehden is green all year.' }
];

const EHD_DRILLS = [
  { q: 'Where is Ehden located?', opts: ['south Lebanon coast', 'north Lebanon mountains', 'Bekaa valley'], a: 1, exp: 'Ehden (إهدن) sits at ~1500m on the western Mount Lebanon range in the north, in Zgharta caza. It overlooks the Qadisha valley and is one of the highest year-round inhabited towns in the Maronite heartland.' },
  { q: 'What is the relationship between Ehden and Zgharta?', opts: ['rival villages', 'twin towns — Zgharta is winter, Ehden is summer', 'they merged into one'], a: 1, exp: 'Ehden and Zgharta are twin towns — the same families historically winter in Zgharta (foothills, ~250m) and summer in Ehden (mountain, ~1500m). It\'s the most famous Lebanese transhumance pattern, called "Zgharta jowwa, Ehden barra".' },
  { q: 'Who is Mar Mama?', opts: ['a Lebanese politician', 'the patron saint of Ehden', 'a folk hero'], a: 1, exp: 'Mar Mama (St. Mamas of Caesarea, مار ماما) is the patron saint of Ehden. His feast day August 1-2 brings a massive mahrajan with diaspora Ehdenis returning from Australia, the US, and West Africa.' },
  { q: 'What is Horsh Ehden?', opts: ['a shopping street', 'a cedar nature reserve', 'a hotel'], a: 1, exp: 'Horsh Ehden (حرش إهدن) is one of Lebanon\'s key nature reserves — home to rare Cilician fir, cedars, and over 1000 plant species. It\'s a UNESCO biosphere candidate and one of the few intact ancient mountain forests left in the country.' },
  { q: 'Which prominent Maronite family is from Ehden?', opts: ['Hariri', 'Frangieh', 'Geagea'], a: 1, exp: 'The Frangieh (فرنجية) family is the dominant political dynasty of Zgharta-Ehden. Suleiman Frangieh Sr. was president 1970-76; his grandson Suleiman Frangieh Jr. heads the Marada Movement and is a recurring presidential contender.' },
  { q: 'What is a "liwan" in an Ehden house?', opts: ['a kitchen', 'a vaulted reception hall', 'a bedroom'], a: 1, exp: 'A liwan (ليوان) is the vaulted, semi-open reception hall at the heart of a traditional Ehden mountain house. Stone walls, high ceilings, and three closed sides with one open arch — perfect for the cool summer climate at altitude.' },
  { q: 'What is the Zgharta-Ehden specialty kebbe?', opts: ['kebbe with apricot', 'a north-Lebanese stuffed bulgur shell', 'kebbe with chocolate'], a: 1, exp: 'Kebbe zghartaweye (كبة زغرتاوية) is a hallmark of north-Lebanese cooking — bulgur shells stuffed with spiced meat and onion, distinctive for using more pine nuts and a specific lamb-fat seasoning. It\'s Zgharta-Ehden\'s edible identity marker.' },
  { q: 'When does Ehden\'s population swell?', opts: ['winter ski season', 'summer (Seif)', 'all year evenly'], a: 1, exp: 'Ehden\'s population goes from a few thousand in winter to tens of thousands in summer (Seif صيف). Diaspora families return, Zgharta families come up, and the town fills with weddings, festivals, and the Mar Mama mahrajan.' },
  { q: 'What is the "midane" in Ehden?', opts: ['a mosque', 'the central town square', 'a cinema'], a: 1, exp: 'The midane (ميدان) is Ehden\'s central square — surrounded by the old Mar Mama and Mar Serkis churches, cafés, and stone houses. It\'s where the Mar Mama festival takes place and where families promenade in the summer evenings.' },
  { q: 'What does it mean that "Ehden is akhdar"?', opts: ['it is wealthy', 'it is green (forested) year-round', 'it is far away'], a: 1, exp: 'Akhdar (أخضر) literally means "green". Ehden is called akhdar because the surrounding cedar/fir forests of Horsh Ehden keep the slopes green even in dry summers — unusual in Lebanon where most mountains turn brown by August.' }
];

const EHD_TIPS = [
  'Ehden vs Qadisha: both are Maronite mountain heartland in north Lebanon, but Qadisha (R1605 qsh) is the deep monastic valley below, while Ehden sits high on the western ridge above it. From Ehden\'s midane on a clear day you can see all the way down the Qadisha to Tripoli and the Mediterranean. They share the same Maronite spiritual identity but Ehden is the "living town" while Qadisha is the "hermit valley".',
  'The August 1-2 Mar Mama festival is the single biggest event in Ehden — the diaspora returns, weddings cluster around it, and the midane fills with zaffe processions (drum + zamour horn). If you visit Ehden any other time it\'s a quiet stone-house town; on Mar Mama it\'s the loudest place in north Lebanon.',
  'The Frangieh family dynamic shapes Ehden politically — Bayit Jdid (the Frangieh stronghold neighborhood) is essentially the family seat. The 1978 Ehden massacre, when 40+ Frangiehs including young Tony Frangieh were killed during the civil war, still defines local politics. Don\'t bring it up casually with locals — it\'s a deeply raw memory.',
  'The Ehden liwan is architecturally distinct: thick limestone walls (1m+ thick) keep summer heat out, vaulted ceilings open onto a courtyard, and the open arch faces north for cross-ventilation. Many old liwans have been converted into upscale restaurants — eating kebbe in a 200-year-old vaulted liwan is a classic Ehden experience.',
  'Horsh Ehden is one of three Lebanese sites (with Tannourine and Shouf) where you can still see ancient cedar/fir mixed forest. Best visited in late spring (May-June) when wildflowers bloom or early autumn before snow. Bring layers — even in August it\'s 10°C cooler than Beirut, and rain showers come fast at altitude.'
];
