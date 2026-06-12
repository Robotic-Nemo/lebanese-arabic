// R1413 — NEW FEATURE: Lebanese Dawle & Government Sarcasm Culture (dwl)
const DWL_WORDS = [
  {ar:'دولة',tr:'dawle',en:'state / the government'},
  {ar:'زعيم',tr:'za3eem',en:'feudal political leader'},
  {ar:'وزير',tr:'wazeer',en:'minister'},
  {ar:'رشوة',tr:'rishwe',en:'bribe / corruption'},
  {ar:'واسطة',tr:'wasta',en:'connections / nepotism'},
  {ar:'طائفية',tr:'ta2ifiyye',en:'sectarianism'},
  {ar:'برلمان',tr:'barlamaan',en:'parliament'},
  {ar:'أزمة',tr:'2azme',en:'crisis'},
  {ar:'كهرباء',tr:'kahraba',en:'electricity (often cut)'},
  {ar:'مزوّر',tr:'mzawwar',en:'forged / fraudulent'},
  {ar:'تشكيلة',tr:'tashkeele',en:'cabinet formation'},
  {ar:'شعب',tr:'sha3b',en:'the people / public'},
  {ar:'استقالة',tr:'isti2ale',en:'resignation'},
  {ar:'ثورة',tr:'sewre',en:'revolution / uprising'},
  {ar:'مافيا',tr:'mafia',en:'mafia (used for ruling class)'},
  {ar:'ضريبة',tr:'Daribe',en:'tax'},
  {ar:'بنزين',tr:'benzin',en:'petrol / gasoline'},
  {ar:'دولار',tr:'dolar',en:'US dollar (the real currency)'},
  {ar:'لولار',tr:'lolar',en:'lollar (trapped bank dollar)'},
  {ar:'ما في دولة',tr:'ma fi dawle',en:'there is no state (common expression)'}
];

const DWL_DRILLS = [
  {q:'What does "wasta" (واسطة) mean in Lebanese daily life?',opts:['a type of tax','using connections or nepotism to get things done','a government ministry','a form of bribery'],a:1},
  {q:'A Lebanese "za3eem" (زعيم) is...?',opts:['a prime minister only','an elected official only','a feudal political leader with sectarian followers','a local police chief'],a:2},
  {q:'"Ta2ifiyye" (طائفية) refers to...?',opts:['tax collection','electricity rationing','the sectarian system dividing Lebanese politics','the parliament speaker\'s role'],a:2},
  {q:'When Lebanese say "ma fi dawle" (ما في دولة), they mean...?',opts:['the state is very powerful','there is no functional state / the government doesn\'t work','a new government was formed','the president resigned'],a:1},
  {q:'What is a "lolar" (لولار)?',opts:['a legal dollar','a Lebanese dollar coin','a trapped bank dollar that can\'t be withdrawn freely','a black market currency'],a:2},
  {q:'"Rishwe" (رشوة) is...?',opts:['a government salary','a bribe or corrupt payment','a tax refund','a parliament vote'],a:1},
  {q:'"Tashkeele" (تشكيلة) in Lebanese politics refers to...?',opts:['a type of election','the formation of a new government cabinet','a constitutional amendment','a protest movement'],a:1},
  {q:'The word "sewre" (ثورة) gained prominence in Lebanon in...?',opts:['the 1975 Civil War','the 1990 Taif Agreement','the 2019 October Revolution protests','the 2006 July War'],a:2}
];

const DWL_TIPS = [
  {title:'"Ma Fi Dawle" — The National Motto',body:'No phrase better captures Lebanese political reality than "ma fi dawle" (ما في دولة — there is no state). It\'s said with a shrug when the electricity cuts, when a pothole goes unfixed for years, when officials are never held accountable. It\'s equal parts complaint and dark comedy. Lebanese have learned to treat state dysfunction as a constant — building their own generator systems, water tanks, informal neighborhood networks. "Ma fi dawle, bass fi sha3b" (there is no state but there are people) is the resilient counterpart.'},
  {title:'Wasta — The Invisible Infrastructure',body:'Wasta (واسطة) is how Lebanon actually runs. A wasta is a connection — a relative in the ministry, a za3eem\'s (feudal leader\'s) phone call, a friend in the right place. Need a school seat for your child? You need wasta. Need a government job? Wasta. Need to clear customs fast? Wasta. Lebanese often speak about wasta with a mix of resignation and savvy — "lezem ma3ak wasta" (you need wasta) is said as practical advice, not necessarily as moral complaint. Fighting wasta is central to reformist politics.'},
  {title:'The Za3eem System',body:'Lebanon\'s political life is organized around za3eems (زعيم — pl. zuama): feudal leaders who inherit followers across generations. The Jumblatt family for Druze, Geagea for Lebanese Forces Christians, Berri for Shia, Hariri for Sunnis — each za3eem provides jobs, school placements, hospital access, and legal intervention in exchange for votes and loyalty. "Yehmeek el za3eem" (the leader protects you) remains a social reality. Lebanese reformers use "ma fi za3eem" (no feudal leader) as a political slogan.'},
  {title:'The Lollar & Economic Collapse',body:'The "lolar" (لولار) — a Lebanese portmanteau of "lira" and "dollar" — refers to dollars trapped in Lebanese banks since the 2019 financial collapse. Account holders officially own dollars but can\'t withdraw them at the real rate. The real dollar (dolar freshe = fresh dollar) became a separate category from the lolar. "3andi lolarat" (I have lollars) means your savings are frozen. Lebanon\'s banking crisis spawned entire new vocabulary: haircut (bank loses), capital controls (2o2oud rasmal), black market rate (se3r el souk), and informal cash-based economy slang.'}
];
