// R1416 — NEW FEATURE: Lebanese Shrine & Pilgrimage Culture (mzr)
const MZR_WORDS = [
  {ar:'مزار',tr:'mazar',en:'shrine / holy site'},
  {ar:'نذر',tr:'nazer',en:'vow / offering to a saint'},
  {ar:'زيارة',tr:'zyara',en:'pilgrimage visit'},
  {ar:'شمعة',tr:'sham3a',en:'candle (lit at shrines)'},
  {ar:'بخور',tr:'bkhur',en:'incense'},
  {ar:'بركة',tr:'barke',en:'blessing / divine grace'},
  {ar:'قديس',tr:'2addis',en:'saint'},
  {ar:'ضريح',tr:'Daree7',en:'tomb / saint\'s burial shrine'},
  {ar:'سيدة',tr:'seyyede',en:'Our Lady (Virgin Mary)'},
  {ar:'مار',tr:'mar',en:'Saint (prefix, e.g. Mar Charbel)'},
  {ar:'دير',tr:'deir',en:'monastery'},
  {ar:'حرم',tr:'7aram',en:'sacred sanctuary'},
  {ar:'مقام',tr:'ma2am',en:'sacred station / Sufi shrine'},
  {ar:'ولي',tr:'wali',en:'holy man / saint'},
  {ar:'صلاة',tr:'Sala',en:'prayer'},
  {ar:'إيمان',tr:'iman',en:'faith'},
  {ar:'كرامة',tr:'karame',en:'miracle / saintly wonder'},
  {ar:'وقفة',tr:'wa2fe',en:'standing vigil / pause at shrine'},
  {ar:'تعزيم',tr:'ta3zeem',en:'seeking divine intercession'},
  {ar:'حاج',tr:'7aj',en:'pilgrim / hajj title'}
];

const MZR_DRILLS = [
  {q:'What is a "nazer" (نذر) in Lebanese shrine culture?',opts:['a type of candle','a vow or offering made to a saint','a pilgrim\'s certificate','a prayer book'],a:1},
  {q:'The phrase "roo7 la Mar Charbel" (روح لمار شربل) means...?',opts:['go to the church downtown','go visit the shrine of Saint Charbel','light a candle at home','make a financial offering'],a:1},
  {q:'"Barke" (بركة) from a shrine visit refers to...?',opts:['the entrance fee','divine blessing or grace','the incense smoke','the prayer mat'],a:1},
  {q:'What is "Saydet Harissa" (سيدة حريصا) known as in Lebanon?',opts:['a famous mosque on the coast','the largest monastery in Bekaa','Our Lady of Lebanon — the iconic hilltop Mary statue','a Druze pilgrimage site'],a:2},
  {q:'A "Daree7" (ضريح) at a shrine is...?',opts:['a donation box','a lit candle holder','the saint\'s tomb or burial shrine','a prayer alcove'],a:2},
  {q:'When Lebanese say "3melt nazer" (عملت نذر), they mean...?',opts:['they donated money to a mosque','they made a vow to a saint for intercession','they lit a candle for decoration','they visited a church for tourism'],a:1},
  {q:'"Karame" (كرامة) in the context of Lebanese saints refers to...?',opts:['a famous saying','a miracle or divine wonder attributed to a saint','the saint\'s birthplace','a religious holiday'],a:1},
  {q:'Which Lebanese saint is most widely venerated across all communities?',opts:['Mar Maroun','Mar Elias','Mar Charbel (Charbel Makhlouf)','Mar Mikhael'],a:2}
];

const MZR_TIPS = [
  {title:'Mar Charbel — Lebanon\'s Universal Saint',body:'Mar Charbel Makhlouf (1828–1898) is Lebanon\'s most beloved saint — venerated by Christians of all denominations and respected even by Muslims and Druze. His monastery at Annaya in the Byblos mountains attracts hundreds of thousands of pilgrims yearly. Lebanese say "ta7t 7imayto" (under his protection) across sectarian lines. Stories of his miracles ("karat") include healing the sick and appearing in dreams. "Charbel" has become one of the most popular Lebanese boy names, and families place his image in cars, homes, and shops as protection.'},
  {title:'Saydet Harissa — Our Lady of Lebanon',body:'The giant white statue of the Virgin Mary at Harissa, overlooking Jounieh Bay, is Lebanon\'s most iconic pilgrimage site. Installed in 1908, she gazes over the Mediterranean and is visible from far at sea. Maronite Christians, Greek Catholics, and Lebanese Muslims all visit to pray. A cable car (teleferic) carries pilgrims up to the shrine. "Yemmet Lebnan" (Mother of Lebanon) is her popular title. On the feast of Our Lady of Lebanon (Ascension Sunday), tens of thousands make the journey. Lebanese emigrants worldwide maintain shrines to her, making her a symbol of Lebanese identity itself.'},
  {title:'The Nazer System — Vows & Intercession',body:'Making a "nazer" (vow) to a saint is deeply embedded in Lebanese practice across religions. You ask a saint to intercede for healing, protection, a job, a marriage — and promise something in return (a donation, a pilgrimage, giving up something). If granted, you fulfill your vow publicly. "3melt nazer 3la wladak" (I made a vow for your children) is the highest form of care someone can express. Christian saints, Muslim awliya (holy men), and even Druze spiritual figures receive nazers. Shrines collect gold jewelry, crutches left behind by the healed, and candles from grateful pilgrims.'},
  {title:'Multi-Faith Shrine Culture',body:'Lebanon\'s shrine culture crosses sectarian lines in ways that confound outsiders. The Sayyida Zeinab mosque in Beirut\'s southern suburbs draws Shia pilgrims from across the Arab world. Christian families in Akkar villages have their own local saints\' shrines. Druze venerate Sheikh al-Aql and visit sacred 7alwat (meeting houses). The tomb of Abu Bakr in Tripoli draws Sunni devotion. "Kell wahed 3ando santo" (everyone has their saint) is a Lebanese saying — meaning that across faiths, the practice of seeking intercession from holy figures is universal. Even secular Lebanese visit their family\'s patron saint shrine as a cultural identity act.'}
];
