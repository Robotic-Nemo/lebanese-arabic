// R738 — NEW FEATURE: Lebanese Breakfast Culture (bkf)

const BKF_CATS = ['spreads','bread','drinks','phrases'];

const BKF_WORDS = [
  // spreads
  {tr:'labneh',          en:'strained yogurt spread',      ar:'لبنة',           cat:'spreads'},
  {tr:'zaatar w zeit',   en:'thyme & olive oil mix',       ar:'زعتر وزيت',      cat:'spreads'},
  {tr:'jibne beda',      en:'white cheese',                ar:'جبنة بيضا',      cat:'spreads'},
  {tr:'7alawa',          en:'halva / sesame paste sweet',  ar:'حلاوة',          cat:'spreads'},
  {tr:'mrabba',          en:'jam / preserves',             ar:'مربّى',          cat:'spreads'},
  {tr:'zeit w zaytoun',  en:'olive oil & olives',          ar:'زيت وزيتون',     cat:'spreads'},
  {tr:'3asal',           en:'honey',                       ar:'عسل',            cat:'spreads'},
  {tr:'nabulsiye',       en:'Nabulsi cheese',              ar:'نابلسية',        cat:'spreads'},
  // bread
  {tr:'manoushe',        en:'Lebanese flatbread w toppings',ar:'مناقيش',        cat:'bread'},
  {tr:'ka3ket beid',     en:'sesame bread ring',           ar:'كعكة بيض',       cat:'bread'},
  {tr:'khebez 3arabi',   en:'Arabic pita bread',           ar:'خبز عربي',       cat:'bread'},
  {tr:'lawash',          en:'thin flatbread',              ar:'لواش',           cat:'bread'},
  {tr:'ka3k',            en:'sesame ring cracker',         ar:'كعك',            cat:'bread'},
  {tr:'3ajinet mano2',   en:'manoushe dough',              ar:'عجينة مناقيش',   cat:'bread'},
  // drinks
  {tr:'ahwe',            en:'coffee (Lebanese)',           ar:'أهوة',           cat:'drinks'},
  {tr:'ahwe 3arabiye',   en:'Arabic cardamom coffee',      ar:'أهوة عربية',     cat:'drinks'},
  {tr:'shai',            en:'tea',                         ar:'شاي',            cat:'drinks'},
  {tr:'3asir burtue2an', en:'orange juice',                ar:'عصير برتقال',    cat:'drinks'},
  {tr:'7alib',           en:'milk',                        ar:'حليب',           cat:'drinks'},
  {tr:'nescafe',         en:'instant coffee (Nescafe)',    ar:'نسكافيه',        cat:'drinks'},
  // phrases
  {tr:'shu baddak 3al manoushe?',  en:'what do you want on your manoushe?', ar:'شو بدك عالمناقيش؟',    cat:'phrases'},
  {tr:'za3tar w zeit lew jibne?',  en:'thyme+oil or cheese?',               ar:'زعتر وزيت لو جبنة؟',   cat:'phrases'},
  {tr:'3arifje l-7ayye',           en:'the neighborhood manoushe guy',      ar:'عارفجي الحيّ',          cat:'phrases'},
  {tr:'fotor 3al beit',            en:'breakfast at home',                  ar:'فطور عالبيت',           cat:'phrases'},
  {tr:'kul wa ente mabsout',       en:'eat while you\'re happy',            ar:'كل وانت مبسوط',         cat:'phrases'},
  {tr:'7amouda l-fotor',           en:'breakfast plate (endearing)',        ar:'حمّودة الفطور',         cat:'phrases'},
  {tr:'min beit l-3arifji',        en:'straight from the bakery',           ar:'من بيت العارفجي',       cat:'phrases'},
  {tr:'ahwe w manoushe',           en:'coffee and manoushe (classic combo)',ar:'أهوة ومناقيش',          cat:'phrases'},
];

const BKF_DRILLS = [
  {q:'What is "labneh"?', opts:['strained yogurt spread','white cheese','halva','jam'], a:0},
  {q:'"manoushe" is?', opts:['Lebanese flatbread with toppings','sesame ring','pita bread','thin flatbread'], a:0},
  {q:'How do you say "honey" in Lebanese?', opts:['3asal','7alawa','mrabba','zaatar'], a:0},
  {q:'"zaatar w zeit" means?', opts:['thyme & olive oil mix','cheese & bread','honey & jam','olive oil & olives'], a:0},
  {q:'What is "ahwe 3arabiye"?', opts:['Arabic cardamom coffee','Lebanese tea','instant coffee','orange juice'], a:0},
  {q:'"ka3k" refers to?', opts:['sesame ring cracker','manoushe dough','pita bread','thin flatbread'], a:0},
  {q:'How do you say "jam/preserves"?', opts:['mrabba','3asal','7alawa','labneh'], a:0},
  {q:'"lawash" is?', opts:['thin flatbread','sesame bread ring','Nabulsi cheese','halva'], a:0},
  {q:'What does "3arifje l-7ayye" mean?', opts:['the neighborhood manoushe guy','breakfast at home','from the bakery','eat while happy'], a:0},
  {q:'"jibne beda" means?', opts:['white cheese','strained yogurt','halva','sesame spread'], a:0},
  {q:'How do you say "milk" in Lebanese?', opts:['7alib','shai','nescafe','3asir'], a:0},
  {q:'"nabulsiye" is?', opts:['Nabulsi cheese','thyme mix','honey','sesame cracker'], a:0},
  {q:'What is "fotor 3al beit"?', opts:['breakfast at home','coffee and manoushe','from the bakery','eat while happy'], a:0},
  {q:'"7alawa" means?', opts:['halva / sesame paste sweet','white cheese','strained yogurt','jam'], a:0},
  {q:'How do you say "orange juice"?', opts:['3asir burtue2an','7alib','ahwe','shai'], a:0},
];

const BKF_TIPS = [
  {title:'The Manoushe: Lebanon\'s National Breakfast', body:'"Manoushe" (or "man2ousheh") is Lebanon\'s national breakfast — flatbread topped with za\'atar w zeit, jibne, or kishk (dried yogurt powder). Eaten hot from the neighborhood "3arifje" (baker). "Za\'atar w zeit lew jibne?" is the first question every Lebanese morning. You never just get one — you get three to share.'},
  {title:'The 3arifje Culture', body:'The "3arifje" (from 3arifa — knowledge) is the neighborhood bakery master. He knows everyone\'s order. "Min beit l-3arifji" means straight from the oven — the freshest. Lebanese families have a specific 3arifje they\'ve used for generations. The dawn run to the 3arifje before everyone wakes up is a morning ritual.'},
  {title:'Labneh: The Versatile Spread', body:'"Labneh" (strained yogurt) is Lebanon\'s answer to butter and cream cheese in one. Drizzled with olive oil, sprinkled with za\'atar, served with olives and tomatoes. "Labneh w zeitoun" (labneh and olives) is the simplest, most Lebanese breakfast possible. Making labneh from homemade yogurt is a sign of a serious Lebanese household.'},
  {title:'Ahwe: Coffee as Ritual', body:'"Ahwe" in Lebanese doesn\'t mean just coffee — it means a whole ritual. "Ahwe 3arabiye" (Arabic coffee with cardamom, lightly roasted, served in small cups) is for guests and mornings. "Nescafe" is the instant version Lebanese adopted whole-heartedly post-war. The question "baddak ahwe?" (want coffee?) is a way of saying "let\'s sit and talk."'},
  {title:'The Mezze Breakfast', body:'Lebanese breakfast isn\'t one item — it\'s a spread. Labneh, zaatar, jibne, olives, za\'atar, tomatoes, cucumbers, eggs sometimes. Called a "sofra" (spread). "Kul wa ente mabsout" (eat while you\'re happy) — the Lebanese philosophy that eating well is a form of joy and sharing. Weekend breakfasts can last hours.'},
  {title:'Ka3k: The Street Sesame Ring', body:'"Ka3ket beid" is a sesame-crusted bread ring sold by street vendors, often stuffed with za\'atar, cheese, or eaten plain. Vendors carry them on wooden boards or bicycle racks. A Beirut morning staple. "Ka3k" alone refers to the smaller sesame cracker version. Both are eaten on the go or with morning coffee — the Lebanese equivalent of a croissant.'},
];
