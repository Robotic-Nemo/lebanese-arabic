// R1095 — NEW FEATURE: Lebanese Breakfast & Morning Table (ftr)

const FTR_WORDS = [
  {ar:'الفطور',tr:'l-fToor',en:'breakfast'},
  {ar:'كعك',tr:'ka3k',en:'sesame bread ring'},
  {ar:'لبنة',tr:'labneh',en:'strained yogurt cheese'},
  {ar:'زيت وزعتر',tr:'zeet w za3tar',en:'olive oil and thyme mix'},
  {ar:'بيض',tr:'bayd',en:'eggs'},
  {ar:'جبنة بيضاء',tr:'jibne bayde',en:'white cheese'},
  {ar:'خبز',tr:'khibez',en:'bread'},
  {ar:'زيتون',tr:'zaytoon',en:'olives'},
  {ar:'مشبك',tr:'mshabbak',en:'crispy fried sweet (like funnel cake)'},
  {ar:'تيمة',tr:'time7',en:'fig jam'},
  {ar:'معلوم',tr:'ma3loom',en:'I know / of course (filler at table)'},
  {ar:'شكيبة',tr:'shkeebi',en:'flatbread with cheese'},
  {ar:'مناقيش',tr:'mana2eesh',en:'za3tar flatbread'},
  {ar:'عصير برتقال',tr:'3aseer borto2an',en:'orange juice'},
  {ar:'نسكافيه',tr:'nescafe',en:'instant coffee (generic term)'},
  {ar:'أهوة',tr:'ahwe',en:'Lebanese coffee'},
  {ar:'شاي',tr:'shy',en:'tea'},
  {ar:'حليب',tr:'7aleeb',en:'milk'},
  {ar:'سبانخ',tr:'sbanikh',en:'spinach (in fatayer)'},
  {ar:'سمنة',tr:'samneh',en:'clarified butter / ghee'},
  {ar:'معجنات',tr:'ma3jenet',en:'pastries'},
  {ar:'فطير',tr:'fTeer',en:'thin pastry sheet'},
  {ar:'صاج',tr:'saaj',en:'flat griddle / saj bread'},
  {ar:'دقيق',tr:'da2ee2',en:'flour'},
  {ar:'دبس رمان',tr:'debs rommaan',en:'pomegranate molasses'},
  {ar:'طحين',tr:'T7een',en:'sesame paste (tahini)'},
  {ar:'شهية',tr:'shehye',en:'appetite'},
  {ar:'ريحة الصبح',tr:'ree7et l-Sob7',en:'morning smell (fresh bread etc.)'},
  {ar:'صح النوم',tr:'Sa77 l-noom',en:'good morning (lit. healthy awakening)'},
  {ar:'صحتين',tr:'Sa7teen',en:'bon appétit (lit. two healths)'}
];

const FTR_DRILLS = [
  {q:'What is labneh?',opts:['strained yogurt cheese','fried bread','sesame paste','fig jam'],a:0},
  {q:'How do you say "breakfast" in Lebanese?',opts:['l-fToor','ahwe','shy','ka3k'],a:0},
  {q:'What is za3tar typically mixed with to eat at breakfast?',opts:['zeet (olive oil)','7aleeb (milk)','bayd (eggs)','debs rommaan'],a:0},
  {q:'Mana2eesh is a flatbread topped with:',opts:['za3tar or jibne','bayd w samneh','debs w T7een','sbanikh only'],a:0},
  {q:'What does "Sa7teen" mean at the table?',opts:['bon appétit','good morning','more please','thank you'],a:0},
  {q:'Ka3k is a:',opts:['sesame bread ring','sweet pastry','fried egg dish','cheese pie'],a:0},
  {q:'Which word means "clarified butter"?',opts:['samneh','labneh','T7een','time7'],a:0},
  {q:'Ahwe refers to:',opts:['Lebanese coffee','orange juice','instant coffee','tea'],a:0},
  {q:'"Sa77 l-noom" literally means:',opts:['healthy awakening','good sleep','sweet dreams','wake up'],a:0},
  {q:'Saaj (صاج) is:',opts:['a flat griddle','a type of cheese','a sweet pastry','a bread ring'],a:0},
  {q:'What is "debs rommaan"?',opts:['pomegranate molasses','grape molasses','carob molasses','date syrup'],a:0},
  {q:'T7een (طحين) at the Lebanese table means:',opts:['sesame paste / tahini','flour','clarified butter','jam'],a:0},
  {q:'Which is NOT a typical Lebanese breakfast item?',opts:['sushi','ka3k','labneh','zaytoon'],a:0},
  {q:'"Ree7et l-Sob7" evokes:',opts:['the smell of morning bread','the cold morning air','morning prayers','the sound of birds'],a:0},
  {q:'Jibne bayde is:',opts:['white cheese','yellow cheese','goat cheese','aged cheese'],a:0}
];

const FTR_TIPS = [
  {title:'The Spread (l-Maayde)',body:'Lebanese breakfast is a shared spread (maayde). Family pulls chairs around a big table loaded with small plates — labneh, zaytoon, ka3k, bayd, jibne, mana2eesh. It\'s social, slow, and sacred on weekends.'},
  {title:'Mana2eesh Morning',body:'On weekday mornings, families send kids to the local bakery (forn) for fresh mana2eesh. The smell of za3tar on a hot saaj is the scent of Lebanese childhood. "Roo7 3a l-forn" (go to the bakery) is a morning ritual.'},
  {title:'Ahwe Etiquette',body:'Lebanese coffee (ahwe) is served in small cups (finjan). The host refills automatically — to refuse, tip the cup sideways slightly. Drinking without comment is rude; say "da2eem" (may it always be so) when finished.'},
  {title:'Sa7teen Culture',body:'"Sa7teen" (two healths) is said to the person who cooked. They reply "3a 2albak" (on your heart). This exchange happens every single meal, every day. It\'s affection expressed through food ritual.'},
  {title:'Weekend vs Weekday',body:'Weekday breakfast is quick — a ka3k snatched from a vendor, instant nescafe in the car. Weekend breakfast is a 2-hour affair starting at 9am, with the whole family slowly gathering, arguing about politics, and eating way too much.'}
];
