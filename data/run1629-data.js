// R1629 — Aanjar (anj) Armenian-Lebanese town in Bekaa + Umayyad ruins
// Topics: Armenian Genocide refugees from Musa Dagh, UNESCO Umayyad ruins,
// Ainjar Sport Club, Armenian-Lebanese community, Bekaa border town,
// Anjar lake springs, Battle of Anjar 982 AD, Caliph Walid I 8th-c palace city.

const ANJ_WORDS = [
  { w: 'Aanjar', t: 'عنجر', e: 'Aanjar (Armenian-Lebanese town in Bekaa, ~5km from Syrian border)', ex: 'Aanjar bel-Beqaa, sekkin Armanyye min ayam el-tahjir.' },
  { w: 'el-Arman', t: 'الأرمن', e: 'Armenians (Lebanese Armenian community, ~150k, mostly Beirut + Aanjar)', ex: 'el-Arman b-Lebnen ejou ba3d el-tahjir el-kbir 1915.' },
  { w: 'Musa Dagh', t: 'موسى داغ', e: 'Musa Dagh (Cilician mountain Armenians fled, founded Aanjar 1939)', ex: 'sekkin Aanjar kelon men 6 dyou3 b-Musa Dagh, jaboha m3on.' },
  { w: 'el-tahjir', t: 'التهجير', e: 'tahjir (Armenian Genocide displacement 1915, "deportation")', ex: 'el-tahjir el-kbir 1915 ana hot men kel l-Armani, m\'set l-2yel.' },
  { w: 'athar el-Omawi', t: 'آثار الأموي', e: 'Umayyad ruins (8th-c Caliph Walid I palace city, UNESCO site)', ex: 'athar el-Omawi b-Aanjar mash-houra, men ahla el-mawakea3 b-Lebnen.' },
  { w: 'el-Walid', t: 'الوليد', e: 'Caliph al-Walid I (built Aanjar 705-715 as inland trade post)', ex: 'el-Walid bnaha b-l-2arn el-thamen, kanet madine tijariyye.' },
  { w: 'Ainjar Club', t: 'نادي عنجر', e: 'Ainjar Sport Club (Lebanese football, Armenian roots)', ex: 'Ainjar Club b-doori el-Lebnen, fariq Armani men ayam el-bidaya.' },
  { w: 'Hamazkayin', t: 'هاماسكاين', e: 'Hamazkayin (Armenian cultural society, schools + theater)', ex: 'Hamazkayin byekel mdares Armaniyye 3a kel mantqa.' },
  { w: 'el-Tashnag', t: 'الطاشناق', e: 'Tashnag party (ARF — Armenian Revolutionary Federation, dominant)', ex: 'el-Tashnag akbar 7izb Armani b-Lebnen, fi mqa3ed bel-barlamen.' },
  { w: 'mateef Antelias', t: 'كاثوليكوس أنطلياس', e: 'Catholicos of Antelias (Armenian Apostolic spiritual seat)', ex: 'mateef Antelias markaz el-2armaniyye lel-Sharq el-2awsat.' },
  { w: 'el-keshkek', t: 'الكشكك', e: 'keshkek (Armenian wheat-and-meat porridge, Aanjar specialty)', ex: 'el-keshkek akle Armaniyye, byekloha b-Aanjar yom el-3eed.' },
  { w: 'el-mante', t: 'المنتي', e: 'mante (Armenian dumplings in yogurt + garlic, popular dish)', ex: 'el-mante akhof men shish barak, b-bandura w yoghurt w toum.' },
  { w: 'naboo3 Aanjar', t: 'نبوع عنجر', e: 'Aanjar springs (lake-fed by 5 cold springs, trout farms)', ex: 'naboo3 Aanjar mayya bredeh sineh, fihon mzara3 troutet.' },
  { w: 'Cilicia', t: 'كيليكية', e: 'Cilicia (Armenian Kingdom region in southeast Turkey, lost 1375)', ex: 'el-Arman b-Lebnen kelon men Cilicia, fi3lon ma t3ado 3a watanon.' },
  { w: 'el-Hashashin', t: 'الحشاشين', e: 'Battle of Anjar 982 (Buyid army defeated Hamdanid here)', ex: 'b-2arn el-3asher sar ma3rake b-Aanjar, l-Buyihiyyin rabhouha.' },
  { w: 'matba3 el-trout', t: 'مزرعة التروت', e: 'trout farm (cold-water fish farms fed by Aanjar springs)', ex: 'matba3 el-trout b-Aanjar bya3eteh ahla samak el-mayya el-7elwe b-Lebnen.' }
];

const ANJ_DRILLS = [
  { q: 'What is Aanjar?', a: 'Armenian-Lebanese town in Bekaa', exp: 'Town of ~3,000 mostly Armenian residents in central Bekaa, 5km from Syrian border. Founded 1939 by Armenian refugees fleeing Musa Dagh region of Turkey. Distinct from older Armenian Beirut neighborhoods (Bourj Hammoud). Bilingual Armenian-Arabic community.' },
  { q: 'Why are Armenians in Lebanon?', a: 'Genocide refugees fleeing Ottoman Turkey 1915', exp: 'Armenian Genocide of 1915-1923 displaced ~1.5 million Armenians. Survivors fled to Lebanon, Syria, and abroad. Lebanon hosted ~150,000 Armenians who built communities in Beirut (Bourj Hammoud, Antelias) + Aanjar. Granted Lebanese citizenship + political representation.' },
  { q: 'What are the Aanjar Umayyad ruins?', a: 'UNESCO World Heritage 8th-c Umayyad palace city', exp: 'Built 705-715 AD by Caliph al-Walid I as a fortified trade city on the Damascus-Beirut route. Rectangular grid, palace, mosque, baths. Unique inland Umayyad site. UNESCO World Heritage since 1984. Adjacent to modern Armenian town.' },
  { q: 'What is Musa Dagh?', a: 'Mountain in Cilicia where Aanjar founders are from', exp: 'Coastal Mt Musa in Hatay region of Turkey (formerly Cilician Armenia). Site of 1915 Armenian armed resistance against Ottoman deportation, immortalized in Franz Werfel novel "The Forty Days of Musa Dagh." After 1939 transfer of Hatay to Turkey, Musa Dagh Armenians moved to Aanjar.' },
  { q: 'What is the Tashnag party?', a: 'Armenian Revolutionary Federation, dominant Armenian-Lebanese party', exp: 'Armenian Revolutionary Federation (ARF, "Tashnag" or "Dashnak"). Founded 1890 in Tbilisi. Dominant Armenian-Lebanese political party. Holds reserved seats for Armenians in Lebanese parliament. Generally allied with March 8 coalition. Cultural + youth + sports networks.' },
  { q: 'What is Ainjar Sport Club?', a: 'Lebanese Premier League football club, Armenian roots', exp: 'Founded 1953 in Aanjar by Armenian-Lebanese community. Currently in Lebanese Premier League. Identity tied to Armenian-Lebanese heritage. One of two Armenian-rooted Lebanese pro clubs (Homenetmen Beirut also Armenian).' },
  { q: 'What is keshkek?', a: 'Armenian wheat-and-meat ceremonial porridge', exp: 'Slow-cooked dish of pounded wheat + chicken or lamb, eaten on weddings + religious feasts. Armenian + Anatolian origin. Distinct from Lebanese kishk (yogurt-cracked-wheat). UNESCO recognized as Armenian intangible cultural heritage.' },
  { q: 'What is the Catholicos of Antelias?', a: 'Armenian Apostolic Church seat in Lebanon', exp: 'Catholicosate of the Great House of Cilicia, based in Antelias north of Beirut. Spiritual head of Armenian Apostolic Christians of Middle East + diaspora. Historically based in Sis (Cilicia), moved to Antelias 1930 after refugees settled. One of two Catholicosates (other is Echmiadzin in Armenia).' },
  { q: 'What are Aanjar springs?', a: 'Cold-water springs feeding Aanjar lake + trout farms', exp: '5 natural springs feed the Anjar river/lake system in central Bekaa. Cold water year-round. Famous for trout farms — riverside restaurants serve fresh trout grilled on saj or fried. Major weekend destination from Beirut for fish lunches in summer.' },
  { q: 'When was Battle of Anjar?', a: '982 AD, Buyid Persians vs Hamdanids', exp: 'Battle fought 982 between Buyid Persian forces under Adud al-Dawla and Hamdanid army of Aleppo. Buyid victory. Site coincided with old Aanjar plain. One of several medieval clashes in Bekaa. Distinct from Umayyad-era city built 200 years earlier.' }
];

const ANJ_TIPS = [
  { t: '🏛️ Visiting Umayyad ruins', b: 'Open 8am-6pm summer, $5 entry fresh USD. Best in spring or fall — Bekaa heat brutal in July/August. Walk the colonnaded cardo + visit the small palace + tetrastyle. Allow 1.5 hrs. Combine with lunch at trout farms 5min away. Bring water + hat.' },
  { t: '🐟 Trout farm lunch', b: 'Riverside restaurants like Shams or Arabi 5km from ruins. Fresh trout grilled or fried, mezze + fries, ~$15-20 USD per person. Weekend traffic heavy from Beirut after 1pm. Best weekday or arrive 11:30am. Bring jacket — riverside breeze cool even in summer.' },
  { t: '🎭 Armenian community visit', b: 'Aanjar town has Armenian schools, churches (Catholic + Apostolic + Evangelical all present), small museum at municipality. Hamazkayin cultural events open to public. Better Armenian food than Beirut Bourj Hammoud some say. People speak Armenian + Arabic + often French.' },
  { t: '🌄 Best photo spot', b: 'Tetrastyle (4-pillar intersection at city center) shot from northwest corner with Anti-Lebanon mountains in background. Late afternoon light gives golden stones. Drone allowed but check with site office. No tripod restrictions inside ruins.' },
  { t: '🚗 Getting there', b: 'From Beirut: ~90min via Damascus highway (via Chtoura). Public servis: from Cola roundabout to Chtoura ($3) then taxi to Aanjar ($5). Border closeness means occasional checkpoints — bring passport. Skip in winter — Bekaa snowy + ruins muddy.' }
];
