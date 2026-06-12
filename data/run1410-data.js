// R1410 — NEW FEATURE: Lebanese Adhan & Church Bells Culture (adn)
const ADN_WORDS = [
  {ar:'أذان',tr:'azan',en:'call to prayer (adhan)'},
  {ar:'ناقوس',tr:'na2ous',en:'church bell / bell tower'},
  {ar:'جامع',tr:'jame3',en:'mosque'},
  {ar:'كنيسة',tr:'kniise',en:'church'},
  {ar:'مؤذّن',tr:'mu2azzen',en:'muezzin (caller to prayer)'},
  {ar:'صلاة',tr:'Sala',en:'prayer'},
  {ar:'قسيس',tr:'2assis',en:'priest / pastor'},
  {ar:'شيخ',tr:'shekh',en:'sheikh / religious scholar'},
  {ar:'تعايش',tr:'ta3ayosh',en:'coexistence (between religions)'},
  {ar:'ضربة الجرس',tr:'Darbit el-jaras',en:'ringing of the bell'},
  {ar:'جرس',tr:'jaras',en:'bell'},
  {ar:'منارة',tr:'manara',en:'minaret'},
  {ar:'برج الكنيسة',tr:'burj el-kniise',en:'church tower / steeple'},
  {ar:'طائفة',tr:'Ta2ife',en:'sect / religious community'},
  {ar:'تسامح',tr:'tasamu7',en:'tolerance / acceptance'},
  {ar:'صوم',tr:'Soum',en:'fasting (Ramadan or Lent)'},
  {ar:'قداس',tr:'2oddas',en:'mass / church service'},
  {ar:'جمعة',tr:'jum3a',en:'Friday (prayer day)'},
  {ar:'أحد',tr:'a7ad',en:'Sunday (church day)'},
  {ar:'روح',tr:'rou7',en:'spirit / soul'}
];

const ADN_DRILLS = [
  {q:'What is the "azan" (أذان)?',opts:['a church service','the call to prayer from the mosque','a type of bell','a religious holiday'],a:1},
  {q:'A "na2ous" (ناقوس) is...?',opts:['a muezzin\'s call','a church bell or bell tower','a minaret','a fasting period'],a:1},
  {q:'"Ta3ayosh" (تعايش) means...?',opts:['fasting during Ramadan','the church mass','coexistence between religions','ringing the bell'],a:2},
  {q:'The "manara" (منارة) is...?',opts:['a church steeple','a type of prayer','the minaret of a mosque','a religious scholar'],a:2},
  {q:'"Tasamu7" (تسامح) in Lebanese context refers to...?',opts:['strict religious observance','religious tolerance and acceptance','the Friday prayer','a fasting tradition'],a:1},
  {q:'A "mu2azzen" (مؤذّن) does what?',opts:['rings the church bell','leads the mass','gives the call to prayer','teaches religious studies'],a:2},
  {q:'"2oddas" (قداس) is...?',opts:['the Friday prayer','the church mass / service','a Ramadan meal','a religious sect'],a:1},
  {q:'What makes Beirut\'s soundscape unique with "jaras" (جرس) and "azan" (أذان)?',opts:['they are never heard together','church bells and calls to prayer ring side by side','one has replaced the other','they ring at different days only'],a:1}
];

const ADN_TIPS = [
  {title:'Beirut: Where Bells and Calls to Prayer Overlap',body:'One of Beirut\'s most distinctive features is the daily overlap of the Muslim call to prayer (أذان — azan) from mosque minarets (منارة — manara) and Christian church bells (ناقوس — na2ous) ringing at virtually the same moment. In neighborhoods like Achrafieh, Hamra, and Ain el-Mreisseh, you can hear both within seconds of each other. Lebanese often point to this sonic coexistence as a symbol of the country\'s complex but genuine tradition of ta3ayosh (تعايش — coexistence). "Iza b7iss el-jaras wel-azan ma3 ba3d, fi amal" — if you hear the bell and the call to prayer together, there is hope.'},
  {title:'The Muezzin & The Priest',body:'The mu2azzen (مؤذّن) calls the faithful to prayer five times a day — at dawn, noon, afternoon, sunset and night. The 2assis (قسيس — priest) leads the 2oddas (قداس — mass) on Sundays and feast days. Both figures are neighborhood presences in Lebanon, known personally to residents who may be of different faiths. The sheikh (شيخ — sheikh) at the mosque and the priest at the church often know each other by name. In smaller Lebanese villages, Muslim and Christian families historically shared the same feast days as an act of mutual respect.'},
  {title:'Religious Time in Lebanese Life',body:'Lebanese daily and weekly rhythms are shaped by both Muslim and Christian religious cycles. Jum3a (جمعة — Friday) is the Muslim prayer day; a7ad (أحد — Sunday) is the Christian church day. During Ramadan, the Soum (صوم — fasting) shapes the whole country\'s food schedule even for non-Muslims — restaurants adjust hours, iftar tables appear on streets. During Lent, Christian families observe their own Soum — and bakeries adjust their menus. Lebanon\'s national holidays include both Muslim and Christian feast days, a legal recognition of Ta2ife (طائفة — sect/community) diversity baked into law since 1943.'},
  {title:'The Sectarian System & Daily Life',body:'Lebanon\'s political system is organized by Ta2ife (طائفة — sect): the president must be Maronite Christian, the prime minister Sunni Muslim, the parliament speaker Shia Muslim. This confessional system (ta2ifiyye) permeates daily life — employment, marriage, funerals, and neighborhoods are all shaped by sect identity. Yet ordinary Lebanese across sects share dialects, food, humor, and often deep personal friendships. "Ana ma3 el-insan, mish ma3 el-ta2ife" (I\'m for the person, not the sect) is a common expression of the aspiration toward tasamu7 (تسامح — tolerance) that coexists, tensely, with the system\'s realities.'}
];
