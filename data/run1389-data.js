// R1389 — NEW FEATURE: Lebanese Cedar & National Symbol (arz)
const ARZ_WORDS = [
  {ar:'أرز',tr:'arz',en:'cedar tree'},
  {ar:'أرز لبنان',tr:'arz el-lubnon',en:'cedar of Lebanon'},
  {ar:'العلم اللبناني',tr:'el-3alam el-lebneini',en:'the Lebanese flag'},
  {ar:'رمز',tr:'ramz',en:'symbol'},
  {ar:'وطن',tr:'watan',en:'homeland / nation'},
  {ar:'فخر',tr:'fakhr',en:'pride'},
  {ar:'جذور',tr:'jzur',en:'roots'},
  {ar:'غابة',tr:'ghabe',en:'forest'},
  {ar:'الأرز',tr:'el-arz',en:'the Cedars (Bcharré area)'},
  {ar:'ثلج',tr:'talj',en:'snow'},
  {ar:'خشب أرز',tr:'khashab arz',en:'cedar wood'},
  {ar:'شامخ',tr:'shamekh',en:'towering / majestic'},
  {ar:'أبدي',tr:'abadi',en:'eternal / everlasting'},
  {ar:'مهيب',tr:'mahib',en:'awe-inspiring'},
  {ar:'بشري',tr:'bsharri',en:'Bcharré (cedar heartland)'},
  {ar:'محمية',tr:'ma7miye',en:'nature reserve'},
  {ar:'أغصان',tr:'aghsan',en:'branches'},
  {ar:'صمود',tr:'smud',en:'steadfastness / resilience'},
  {ar:'تراث',tr:'turas',en:'heritage / legacy'},
  {ar:'ما بينقطع',tr:'ma byin2ata3',en:'unbreakable / will not be severed'}
];

const ARZ_DRILLS = [
  {q:'The cedar tree in Arabic is...?',opts:['نخلة (nakhle)','أرز (arz)','صنوبر (snawbar)','شجرة (shajare)'],a:1},
  {q:'The Cedar of Lebanon ("arz el-lubnon") appears on...?',opts:['Lebanese currency','the Lebanese flag','road signs','school uniforms'],a:1},
  {q:'"Watan" (وطن) means...?',opts:['cedar wood','a nature reserve','homeland','branches'],a:2},
  {q:'The Cedars of God are near the town of...?',opts:['Jounieh','Tyre','Bcharré','Baalbek'],a:2},
  {q:'"Shamekh" (شامخ) describes something that is...?',opts:['ancient and rotting','towering and majestic','broken and fallen','rare and hidden'],a:1},
  {q:'"Smud" (صمود) — a word often tied to the cedar — means...?',opts:['pride','roots','steadfastness','heritage'],a:2},
  {q:'The cedar\'s "jzur" (جذور) are why Lebanese use it as a symbol of...?',opts:['wealth','deep roots in the land','hospitality','religious faith'],a:1},
  {q:'"Ma7miye" (محمية) means the cedar grove is a...?',opts:['logging site','nature reserve','pilgrimage spot','tourist market'],a:1}
];

const ARZ_TIPS = [
  {title:'The Cedar on the Flag',body:'The Lebanese cedar (arz el-lubnon) sits at the center of the Lebanese flag between two red stripes. It was chosen as a symbol of immortality, steadfastness, and national pride. Lebanese often say "arz el-lubnon ma byin2ata3" — the cedar of Lebanon will never be severed — as a defiant expression of national resilience, even in hard political times.'},
  {title:'The Cedars of God',body:'The most famous cedar grove sits near Bcharré in northern Lebanon at around 2,000 meters altitude. Known as "Arz el-Rab" (Cedars of God), some trees are over 1,000 years old. The grove is a UNESCO World Heritage Site and a pilgrimage destination. Every year a mass is celebrated there in August. Visiting Lebanese often take a photo next to a cedar and post it with deep nationalist pride.'},
  {title:'Cedar in History & Myth',body:'Cedar wood from Lebanon was prized throughout the ancient world — used to build Solomon\'s Temple, Egyptian pharaoh boats, and Phoenician ships. Phoenicians were the first "cedar merchants," and Lebanese still proudly connect their identity to this Phoenician maritime past. When a Lebanese says "ana min arz el-lubnon" (I\'m from the cedar of Lebanon), it\'s a deep statement of roots and heritage.'},
  {title:'Cedar as Metaphor',body:'In Lebanese poetry and daily speech, the cedar is the ultimate metaphor for endurance. "Smud zayy el-arz" (steadfast like a cedar) is a common compliment. After every war, political crisis, or economic collapse, Lebanese point to the cedar: it survived centuries on rocky mountain soil without irrigation — so can we. The cedar is less a tree than an entire national psychology.'}
];
