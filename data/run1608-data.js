// R1608 — Chouf & Druze Heartland coach (chf)
// Topics: Beit Eddine palace, Deir el-Qamar, Druze (Tawhid), Walid + Kamal
// Jumblatt, Maasser cedars, Baakline, Aley, traditional dress (laffeh + sirwal),
// Druze food, Bashir Shihab II palace history.

const CHF_WORDS = [
  { w: 'el-Chouf', t: 'الشوف', e: 'the Chouf (mountain region SE of Beirut, Druze heartland)', ex: '3aylti men el-Chouf — 7elwe ktir el-jbel.' },
  { w: 'qaSr Beit ed-Din', t: 'قصر بيت الدين', e: 'Beit Eddine Palace (Bashir II 1788-1818, marble + mosaics)', ex: 'zorna qaSr Beit ed-Din w shefna el-mathaf.' },
  { w: 'Deir el-Qamar', t: 'دير القمر', e: 'Deir el-Qamar (historic capital, mixed Druze-Christian, stone houses)', ex: 'Deir el-Qamar 7elwe la-tmashe fiya bel-saif.' },
  { w: 'el-Drouze', t: 'الدروز', e: 'the Druze (Lebanon religious community, Tawhid)', ex: 'el-Drouze byes2no bjbel el-Chouf w jbel el-3arab.' },
  { w: 'mwa77ed', t: 'موحد', e: 'muwahhid (initiated Druze, "monotheist", reads sacred texts)', ex: 'jeddi mwa77ed, byelbas el-laffe el-bayDa.' },
  { w: 'el-laffe', t: 'اللفة', e: 'laffeh (white turban worn by initiated Druze men)', ex: 'el-laffe el-bayDa 3alameh la-l-mwa77ed.' },
  { w: 'es-sirwal', t: 'السروال', e: 'sherwal (baggy black trousers, traditional Druze dress)', ex: 'jeddi byelbas es-sirwal el-aswad.' },
  { w: 'Walid Jumblatt', t: 'وليد جنبلاط', e: 'Walid Jumblatt (PSP leader, Druze political figure)', ex: 'Walid Jumblatt zaim el-Drouze sini ktire.' },
  { w: 'Kamal Jumblatt', t: 'كمال جنبلاط', e: 'Kamal Jumblatt (founded PSP 1949, killed 1977)', ex: 'Kamal Jumblatt mfakker w zaim, mawjoud el-mathaf bMukhtara.' },
  { w: 'el-Mukhtara', t: 'المختارة', e: 'Mukhtara (Jumblatt family ancestral seat in Chouf)', ex: 'qaSr el-Mukhtara mafto7 la-z-zwwar yom el-7add.' },
  { w: 'arz Maasser', t: 'أرز معاصر', e: 'Maasser cedars (cedar reserve, Chouf Biosphere)', ex: 'mshina bgheb arz Maasser — el-arz qadimin ktir.' },
  { w: 'Baakline', t: 'بعقلين', e: 'Baakline (large Druze town, near Mukhtara)', ex: 'el-mehkame el-druziye btSir bBaakline.' },
  { w: 'el-Tawhid', t: 'التوحيد', e: 'Tawhid (Druze faith, "Unitarianism")', ex: 'din el-Drouze esmo el-Tawhid.' },
  { w: 'el-khalwe', t: 'الخلوة', e: 'khalwa (Druze house of worship, simple stone building)', ex: 'el-mwa77adin byrouho 3al-khalwe yom el-khamis.' },
  { w: 'mloukhiyye', t: 'ملوخية', e: 'mloukhieh (jute leaf stew, Druze + Lebanese staple)', ex: 'em-mart 3ammi 3amlit mloukhiyye lyom — bteshrebli ma3a roz.' },
  { w: 'jellab', t: 'جلاب', e: 'jellab (date-syrup drink with pine nuts + raisins, Chouf summer)', ex: 'eshrabna jellab bared b3idd Beit ed-Din.' }
];

const CHF_DRILLS = [
  { q: 'What is Beit Eddine?', a: 'Bashir II\'s 19th-century palace, Chouf', exp: 'Built 1788-1818 by Emir Bashir Shihab II, marble + mosaic interiors, summer residence of Lebanese presidents.' },
  { q: 'What is the Druze religion called?', a: 'Tawhid (Unitarianism)', exp: 'Distinct esoteric monotheism that branched from Ismaili Shia in 11th c. Druze call themselves muwahhideen.' },
  { q: 'What is laffeh?', a: 'White turban worn by initiated Druze men', exp: 'Laffeh + sirwal + cummerbund mark mwahhid status. Only those who study + commit to Tawhid wear it.' },
  { q: 'Where is the Jumblatt family seat?', a: 'Mukhtara, Chouf', exp: 'Mukhtara palace open to public on Sundays; Walid Jumblatt receives visitors there. Ancestral home for centuries.' },
  { q: 'What are Maasser cedars?', a: 'Cedar reserve in Chouf Biosphere', exp: 'Largest contiguous cedar forest in Lebanon, ancient trees, hiking trails, part of UNESCO Biosphere Reserve.' },
  { q: 'What is khalwa?', a: 'Druze house of worship', exp: 'Simple stone building, no decoration. Open Thursday evenings for mwahhideen. Outsiders rarely admitted.' },
  { q: 'Who was Kamal Jumblatt?', a: 'Founded PSP 1949, killed 1977', exp: 'Philosopher, leftist Druze leader, founded Progressive Socialist Party. Assassinated during Lebanese civil war. Father of Walid.' },
  { q: 'What is jellab?', a: 'Date-syrup drink with pine nuts', exp: 'Sweet purple drink: date molasses + grape molasses + rosewater, topped with pine nuts + raisins. Chouf summer staple.' },
  { q: 'What is Deir el-Qamar?', a: 'Historic mixed Druze-Christian town', exp: 'Stone village, was capital of Mount Lebanon emirate. Famous for tolerant coexistence + Maan emirs\' palaces.' },
  { q: 'What is sherwal?', a: 'Baggy black traditional trousers', exp: 'Wide pants tapered at ankle, worn by older Druze men. Symbol of traditional dress alongside laffeh + ankle boots.' }
];

const CHF_TIPS = [
  { t: '🏛️ Beit Eddine summer festival', b: 'Annual Beiteddine Art Festival (July-August) hosts world-class concerts in palace courtyards. Tickets sell fast.' },
  { t: '🤝 Druze + Christian coexistence in Deir el-Qamar', b: 'Deir el-Qamar churches + mosque sit side by side. Old town walking is best at golden hour, stone reflects amber light.' },
  { t: '📖 Druze faith is closed to converts', b: 'Tawhid stopped accepting converts in 1043 CE. You\'re born Druze or you\'re not. Sacred texts (kitab el-7ekme) only studied by initiated mwa77adin.' },
  { t: '🌲 Chouf Biosphere Reserve hiking', b: 'Maasser, Barouk, Ain Zhalta cedar groves. Best trails: Barouk summit. Open spring-fall, snowed-in winter. Bring water — 1500m altitude.' },
  { t: '🍷 Mloukhieh family meal etiquette', b: 'Served over rice with chicken or rabbit. Squeeze of lemon mandatory. Druze families serve it Sundays — refusing seconds is mild insult, take a small second helping.' }
];
