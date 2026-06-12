// R1620 — Zahle (zhl) Bekaa valley capital, Greek Catholic heartland
// Topics: city of wine + poetry, Berdouni river, riverside meze restaurants,
// Ksara + Kefraya arak/wineries, Skaff political family, Lady of Zahle,
// Boulevard, Wadi el-Arnaki, Greek Catholic majority, summer escape, kebbe nayye.

const ZHL_WORDS = [
  { w: 'Zahle', t: 'زحلة', e: 'Zahle (Bekaa valley capital, ~150k pop, Greek Catholic majority)', ex: 'Zahle a3ras madine bel-Beqa3 w 3aSmet el-3arak.' },
  { w: 'el-Beqa3', t: 'البقاع', e: 'Bekaa (broad fertile valley between Lebanon + Anti-Lebanon ranges)', ex: 'el-Beqa3 ahla mantqa la-z-zra3a w el-3enab.' },
  { w: 'el-Berdouni', t: 'البردوني', e: 'Berdouni (Zahle river, lined with riverside meze restaurants)', ex: 'rou7na 3al-Berdouni la-net3asha 3al-mai.' },
  { w: 'mata3em el-Berdouni', t: 'مطاعم البردوني', e: 'Berdouni restaurants (open-air mezze tables over flowing river)', ex: 'mata3em el-Berdouni mfetra l-bnen w eS-Soura.' },
  { w: 'el-3arak', t: 'العرق', e: 'arak (anise spirit, Zahle cottage industry pride)', ex: '3arak el-Zahleweye a7la 3arak bel-3alam, akid.' },
  { w: 'Ksara', t: 'كسارة', e: 'Ksara (oldest Lebanese winery, Jesuit-founded 1857, Bekaa)', ex: 'Cha2to Ksara madkhalo b-jorouf rouman, ya7lem.' },
  { w: 'Kefraya', t: 'كفريا', e: 'Kefraya (major Bekaa winery, 1979 founded, west Bekaa)', ex: 'nbid Kefraya mash-hour 3a3am-3alami.' },
  { w: 'Saydet Zahle', t: 'سيدة زحلة', e: 'Lady of Zahle (54m tower + Mary statue overlooking city)', ex: 'tem-thel Saydet Zahle byban men kel zawye bel-madine.' },
  { w: 'el-Skaff', t: 'الصكاف', e: 'Skaff family (Zahle Greek Catholic political dynasty, MPs)', ex: '3aylet el-Skaff 7akmin Zahle men ayam el-3othmaniyye.' },
  { w: 'el-Boulevard', t: 'البولفار', e: 'Boulevard (Zahle\'s main downtown promenade)', ex: 'el-Boulevard b-Zahle byem-tile bel-saif b-naas.' },
  { w: 'el-kebbe nayye', t: 'الكبة نيئة', e: 'kebbe nayye (raw kebbe, Zahli specialty mezze)', ex: 'kebbe nayye Zahliyye = bahar mwazan + la7m mafroum t2alid 3.' },
  { w: 'Tannoura', t: 'الطنورة', e: 'Tannoura (raised hill above Zahle, panoramic views)', ex: 'sa3do 3a Tannoura la-tshouf el-Beqa3 kella.' },
  { w: 'sayfiyye Zahle', t: 'صيفية زحلة', e: 'Zahle summer (cooler 950m alt, Beiruti summer escape)', ex: 'sayfiyye Zahle bnet3ash bel-naqa w el-bared lyom 7lo.' },
  { w: 'Mar Elias', t: 'مار الياس', e: 'Mar Elias (St Elie, Zahle patron saint feast late July)', ex: '3eed Mar Elias b-Zahle b-akhir Tammouz, kel l-balad btezhar.' },
  { w: 'el-Zahleweye', t: 'الزحلوية', e: 'Zahliotes (people of Zahle, distinct accent + identity)', ex: 'el-Zahleweye bye7sso 7alon mostaqallin 3an Beirut.' },
  { w: 'mahrajan el-3enab', t: 'مهرجان العنب', e: 'Grape Festival (Zahle annual September wine + grape festival)', ex: 'mahrajan el-3enab b-aylul, byjeebo nbid w mousiqa men kel el-Beqa3.' }
];

const ZHL_DRILLS = [
  { q: 'What is Zahle?', a: 'Bekaa valley capital, Greek Catholic majority', exp: 'Largest city in Bekaa, ~150k pop. Greek Catholic (Melkite) majority unusual in Lebanon. Founded ~17th c. by Christians fleeing Mt Lebanon. Self-image: "city of wine, poetry, and the Berdouni".' },
  { q: 'What is the Berdouni?', a: 'Zahle\'s river + restaurant strip', exp: 'River cutting through Zahle. Banks lined with open-air restaurants serving mezze tables over the running water. Iconic Lebanese summer dining experience — hours-long lunches, arak, dozens of small plates.' },
  { q: 'What is Ksara?', a: 'Oldest Lebanese winery (1857)', exp: 'Founded by Jesuits in Ksara village near Zahle. Roman cellars cut into rock. Lebanon\'s most-recognized wine label. Bekaa terroir = high altitude + Mediterranean = excellent reds (cinsault, cab sauv).' },
  { q: 'What is arak?', a: 'Lebanese anise spirit', exp: 'Distilled from grape juice, twice-distilled with aniseed. Cloudy white when water added ("lion\'s milk"). Drunk slow in tiny glasses with mezze. Zahle = capital of arak production. Best aged in clay jars.' },
  { q: 'Who are the Skaff?', a: 'Zahle Greek Catholic political dynasty', exp: 'Family controlled Zahle politics 100+ years. Joseph Skaff, then son Élias Skaff (MP, ag minister), now Mariam Skaff. Tied to grape-growing economy. Independent bloc, not aligned with March 8 or 14.' },
  { q: 'What is Saydet Zahle?', a: 'Massive Mary statue tower', exp: 'Notre-Dame de Zahle. 54m tower built 1968 with golden Mary on top, visible from across the valley. Pilgrim site, especially in May. Symbol of city\'s Catholic identity vs surrounding Bekaa Shia + Sunni areas.' },
  { q: 'What is the Boulevard?', a: 'Zahle\'s main promenade', exp: 'Tree-lined central avenue running through downtown. Cafés, shops, cinemas. Locals walk evenings, especially in summer. More European-style than Beirut\'s commercial streets — slower, smaller, communal.' },
  { q: 'What is kebbe nayye Zahliyye?', a: 'Raw kebbe Zahle-style', exp: 'Hand-pounded raw lamb or beef mixed with bulgur + spices. Zahle version emphasizes very fresh meat (same-morning slaughter), specific spice blend, traditional shaping. Sunday-table mezze classic, eaten with olive oil + onion.' },
  { q: 'When is the Grape Festival?', a: 'September, harvest season', exp: '"Mahrajan el-3Enab" annual September festival celebrating Bekaa grape harvest. Wine tastings, music, parades. Started 1950s. Coincides with actual harvest from Ksara, Kefraya, smaller estates. Major Bekaa tourism draw.' },
  { q: 'Why is Zahle a summer escape?', a: 'Cooler altitude, riverside dining', exp: 'At 950m altitude, summer evenings cool. Hot dry days but pleasant nights. Berdouni dining + breeze pull Beirutis up the mountain Friday-Sunday. Hotels + guesthouses fill July-August. Different from Faraya (mountain ski) or Jounieh (coast) — valley town pleasure.' }
];

const ZHL_TIPS = [
  { t: '🍷 Berdouni restaurant lunch', b: 'Go between 1-3pm Saturday/Sunday for full atmosphere. Most don\'t take reservations for small parties. Order full mezze (~20 plates) + arak by carafe. Tables literally over the running river. 3-4 hours, $30-50/person fresh USD.' },
  { t: '🍇 Ksara winery tour', b: '20min drive south of Zahle. Tours show Roman cellars + tasting in Old French style chai. Reserve in advance summer weekends. Buy direct = cheaper than Beirut shops. Their "Réserve du Couvent" entry-level red is great $7-10.' },
  { t: '🏛️ Lady of Zahle climb', b: 'Drive or walk up to base of statue + tower. Free entry to terrace. Best at sunset — golden light + view of full Bekaa valley + Anti-Lebanon mountains. Small chapel inside. Combine with dinner downtown after.' },
  { t: '🎉 Festival timing', b: 'Mahrajan el-3Enab (Grape Festival) typically 1st week September. Saint Elie feast July 20. Both pack hotels — book early. Wine tastings free at festival, food vendors all over Boulevard. Family-friendly, kids welcome.' },
  { t: '🚗 Beirut-Zahle drive', b: '~50min via Dahr el-Baidar pass when traffic flowing. Snowy in winter — chains may be required Dec-Feb. Highway is fine, two-lane mountain section can back up Friday afternoons. Best driving Tue-Thu off-peak.' }
];
