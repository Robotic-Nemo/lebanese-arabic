// R1611 — Nabatieh & Jabal Amel coach (nbt)
// Topics: Shia south heartland, Ashura mourning, hussainiyeh, Imam Musa Sadr,
// Amal + Hezbollah context, marjaa, Bint Jbeil + Tyre-Nabatieh region,
// knafeh b-jebne, kishk + tobacco growing, southern resistance memory.

const NBT_WORDS = [
  { w: 'Nabatiyye', t: 'النبطية', e: 'Nabatieh (largest city in Lebanon south interior, Shia heartland)', ex: '3eltna men Nabatiyye, en-Nabatiyye 3aSme jbel 3amel.' },
  { w: 'Jabal 3Amel', t: 'جبل عامل', e: 'Jabal Amel (historic Shia region of south Lebanon, scholars + jurists)', ex: 'Jabal 3Amel meshhour bel-3oulama men 7aki zaman.' },
  { w: 'el-Shi3a', t: 'الشيعة', e: 'the Shia (Twelver Shia community in Lebanon south + Bekaa)', ex: 'el-Shi3a aktariye bjnoub Lebnen w bel-Beqa3.' },
  { w: '3Achoura', t: 'عاشوراء', e: 'Ashura (10th of Muharram, Imam Hussain martyrdom mourning)', ex: 'b-3Achoura kell el-balad b-Nabatiyye btelbes el-aswad.' },
  { w: 'el-7useiniyye', t: 'الحسينية', e: 'hussainiyeh (Shia mourning + assembly hall, named for Hussain)', ex: 'el-majles ya7ki esh-shaykh bel-7useiniyye.' },
  { w: 'el-marja3', t: 'المرجع', e: 'marjaa (highest Shia jurist, "source of emulation")', ex: 'kell shi3i byqalled marja3, mtl es-Sayyid Sistani.' },
  { w: 'es-Sayyid Mousa', t: 'السيد موسى', e: 'Sayyid Musa Sadr (founded Amal 1974, disappeared 1978 Libya)', ex: 'es-Sayyid Mousa Sadr Saaro le-l-shi3a fi Lebnen ramz.' },
  { w: '7arakit Amal', t: 'حركة أمل', e: 'Amal Movement (Shia political party, Berri leads)', ex: '7arakit Amal w7izb el-Lah el-7zaben es-shi3iyye el-kbar.' },
  { w: '7izb el-Lah', t: 'حزب الله', e: 'Hezbollah (Party of God, Shia armed + political party 1982-)', ex: '7izb el-Lah qawi b-jnoub Lebnen w bel-Dahye.' },
  { w: 'Bent Jbeil', t: 'بنت جبيل', e: 'Bint Jbeil (south town near Israel border, key resistance + diaspora)', ex: 'kheyy bye7ke men Bent Jbeil — el-balad mlana mghatreben.' },
  { w: 'Marjayoun', t: 'مرجعيون', e: 'Marjayoun (mixed Christian-Shia town, south Bekaa)', ex: 'Marjayoun balad qadime ma3 bayout 7ajariye.' },
  { w: 'el-knafe b-jebne', t: 'الكنافة بالجبنة', e: 'knafeh bi-jibneh (cheese-stuffed semolina pastry, Nabatieh + Tripoli pride)', ex: 'fTOrna knafe b-jebne men Abou Hassan, w7ada be-Nabatiyye.' },
  { w: 'el-kishk', t: 'الكشك', e: 'kishk (fermented bulgur+yogurt powder, south winter staple)', ex: 'taytna 3amlit kishk b-l-byet, mawnoun la-l-shete.' },
  { w: 'ed-debbe', t: 'الدبكة', e: 'dabke (line dance, south + Bekaa style with stamping)', ex: 'shabeb el-Day3a Tale3in dabke b-l-3ers.' },
  { w: 'es-souq el-qadim', t: 'السوق القديم', e: 'old souq (Nabatieh Monday souq, oldest weekly market in south)', ex: 'es-souq el-qadim be-Nabatiyye yom el-tnein, ktir 3ajqe.' },
  { w: 'tabgh el-jnoub', t: 'تبغ الجنوب', e: 'south tobacco (Regie-grown, key Jabal Amel cash crop)', ex: 'jeddi byzra3 tabgh el-jnoub w byb3o la-r-Regie.' }
];

const NBT_DRILLS = [
  { q: 'What is Ashura?', a: '10th Muharram, Hussain martyrdom mourning', exp: 'Commemorates martyrdom of Imam Hussain at Karbala 680 CE. Nabatieh holds Lebanon\'s largest public mourning processions, including symbolic bloodletting (taTbir) — controversial, declining.' },
  { q: 'What is a hussainiyeh?', a: 'Shia mourning + assembly hall', exp: 'Building dedicated to Ashura majles + religious gatherings. Distinct from a mosque — primarily for sermons and ritual mourning, often with stage and audience seating.' },
  { q: 'Who founded the Amal Movement?', a: 'Sayyid Musa Sadr (1974)', exp: 'Iranian-Lebanese cleric, founded Movement of the Deprived 1974, then Amal. Disappeared in Libya 1978 — fate still unresolved. Built Shia political consciousness in Lebanon.' },
  { q: 'What is Jabal Amel?', a: 'Historic Shia region of south Lebanon', exp: 'Mountain region between Litani river and Galilee. Famous for Shia jurists (Amili school) since 14th c. — Safavid Iran imported Amili scholars to establish Shia clergy.' },
  { q: 'What is a marjaa?', a: 'Highest Shia jurist for emulation', exp: 'Marja\' al-taqlid: senior Shia cleric whose religious rulings followers emulate. Currently includes Sistani (Iraq), Khamenei (Iran). Lebanese Shia divided between marjaas.' },
  { q: 'What is Bint Jbeil?', a: 'South border town, resistance + diaspora', exp: 'Town near Israeli border, heavy fighting in 2006 war. Massive diaspora in Detroit + Dearborn Michigan — known as "capital of expatriates" in south Lebanon.' },
  { q: 'What is knafeh bi-jibneh?', a: 'Cheese-stuffed semolina pastry', exp: 'Orange-tinted shredded dough or semolina with melted akkawi cheese, soaked in syrup. Nabatieh + Tripoli claim best versions. Eaten in sesame bread (kaak) for breakfast.' },
  { q: 'What is the Nabatieh Monday souq?', a: 'Oldest weekly market in south', exp: 'Souq el-Tnein: weekly Monday market dating back centuries. Vegetables, household goods, traditional crafts, fabrics. Survives Israeli occupation + invasions, still core south institution.' },
  { q: 'What is kishk?', a: 'Fermented bulgur + yogurt powder', exp: 'Bulgur soaked in goat milk yogurt, fermented, sun-dried, ground to powder. Reconstituted with water + meat for breakfast soup. South + Bekaa winter staple, classic mouneh item.' },
  { q: 'What does Hezbollah mean?', a: 'Party of God', exp: 'Founded 1982 during Israeli invasion. Combined armed resistance, social services, parliamentary politics. Backed by Iran. Current Shia political dominance largely in their + Amal\'s hands.' }
];

const NBT_TIPS = [
  { t: '🖤 Ashura in Nabatieh', b: 'Largest public Ashura procession in Lebanon happens here, on 10th Muharram. Tens of thousands wear black, men beat chests + recite latmiyyat. taTbir (symbolic head cutting) declining but still happens — many religious authorities now ban it.' },
  { t: '☕ Knafeh breakfast in Nabatieh', b: 'Eat at Abou Hassan or Kaak bil-Knafeh stalls. Best knafeh in Lebanon by southern standards. Order with kaak sesame bread — bakery passes hot rounds, vendor stuffs cheese-knafeh in. ~7am to 11am only.' },
  { t: '📜 Amili school of jurisprudence', b: 'Jabal Amel produced major Shia scholars 14-16th c. — al-Karaki, al-Shahid al-Awwal, al-Shahid al-Thani. Safavid Iran recruited them to formalize Shia clergy. Why "Amili" surname is common in Iran today.' },
  { t: '🌿 Tobacco in the south', b: 'Regie Libanaise des Tabacs holds state tobacco monopoly, grows mostly in Jabal Amel. Tied to south economy + identity since Ottoman times. Government buys at fixed price — controversial subsidy + livelihood.' },
  { t: '🚗 Going to the south', b: 'Coastal road past Saida → Tyre, then inland via Nabatieh. Hezbollah-controlled areas after Litani — generally safe for tourism but stay on main roads, no UN convoy zones at night. Border villages closed to non-residents.' }
];
