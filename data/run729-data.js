// R729 — NEW FEATURE: Lebanese Migration & Diaspora (mig)

const MIG_CATS = ['abroad','return','identity','phrases'];

const MIG_WORDS = [
  // abroad
  {tr:'mughtarib',       en:'expat / émigré',          ar:'مغترب',          cat:'abroad'},
  {tr:'2ightraab',       en:'emigration / being away',  ar:'اغتراب',         cat:'abroad'},
  {tr:'mahjar',          en:'diaspora / place abroad',  ar:'مهجر',           cat:'abroad'},
  {tr:'safaara',         en:'embassy',                  ar:'سفارة',          cat:'abroad'},
  {tr:'jawaaz',          en:'passport',                 ar:'جواز',           cat:'abroad'},
  {tr:'ta2shiira',       en:'visa',                     ar:'تأشيرة',         cat:'abroad'},
  {tr:'iiqaame',         en:'residence permit',         ar:'إقامة',          cat:'abroad'},
  {tr:'jinsiyye',        en:'nationality / citizenship',ar:'جنسية',          cat:'abroad'},
  // return
  {tr:'3awde',           en:'return / homecoming',      ar:'عودة',           cat:'return'},
  {tr:'ghorbe',          en:'longing for home / estrangement', ar:'غربة',    cat:'return'},
  {tr:'7anniin',         en:'nostalgia / yearning',     ar:'حنين',           cat:'return'},
  {tr:'2osoul',          en:'roots / ancestry',         ar:'أصول',           cat:'return'},
  {tr:'jdoud',           en:'ancestors / grandparents', ar:'جدود',           cat:'return'},
  {tr:'manTi2a',         en:'hometown region / area',   ar:'منطقة',          cat:'return'},
  {tr:'barra',           en:'abroad / outside',         ar:'برّا',           cat:'return'},
  {tr:'byeje Seef',      en:'comes back every summer',  ar:'بيجي صيف',       cat:'return'},
  // identity
  {tr:'hawiyye',         en:'ID card / identity',       ar:'هوية',           cat:'identity'},
  {tr:'muwaazen',        en:'citizen',                  ar:'مواطن',          cat:'identity'},
  {tr:'2intima2',        en:'sense of belonging',       ar:'انتماء',         cat:'identity'},
  {tr:'2ibn el-mahjar',  en:'child of the diaspora',    ar:'ابن المهجر',     cat:'identity'},
  {tr:'2ajnabi',         en:'foreigner',                ar:'أجنبي',          cat:'identity'},
  {tr:'2osoul lubnaaniyye', en:'Lebanese roots/origins',ar:'أصول لبنانية',  cat:'identity'},
  // phrases
  {tr:'3aayesh barra',         en:'living abroad',            ar:'عايش برّا',        cat:'phrases'},
  {tr:'7anniin la blad',       en:'yearning for home',        ar:'حنين لبلد',        cat:'phrases'},
  {tr:'baayin 3aleik min barra',en:'you look like you\'re from abroad', ar:'بايّن عليك من برّا', cat:'phrases'},
  {tr:'byooju3ni 2albi 3al balad', en:'my heart aches for home', ar:'بيوجعني قلبي عالبلد', cat:'phrases'},
  {tr:'rije3 3al balad',       en:'came back home',           ar:'رجع عالبلد',       cat:'phrases'},
  {tr:'maa fi mustaqbal hon',  en:'no future here (why people leave)', ar:'ما في مستقبل هون', cat:'phrases'},
];

const MIG_DRILLS = [
  {q:'What does "mughtarib" mean?', opts:['expat / émigré','visa holder','return traveller','embassy staff'], a:0},
  {q:'"ghorbe" means?', opts:['longing for home / estrangement','emigration','passport','homeland region'], a:0},
  {q:'How do you say "nostalgia / yearning" in Lebanese?', opts:['7anniin','2awde','ghorbe','mahjar'], a:0},
  {q:'"jinsiyye" means?', opts:['nationality / citizenship','residence permit','passport','visa'], a:0},
  {q:'What is "jawaaz"?', opts:['passport','embassy','ID card','visa'], a:0},
  {q:'"mahjar" refers to?', opts:['diaspora / place abroad','return','homeland village','émigré'], a:0},
  {q:'How do you say "return / homecoming"?', opts:['3awde','ghorbe','7anniin','2ightraab'], a:0},
  {q:'"2intima2" means?', opts:['sense of belonging','citizenship','roots','ancestors'], a:0},
  {q:'"ta2shiira" means?', opts:['visa','passport','residence permit','embassy'], a:0},
  {q:'What does "barra" mean?', opts:['abroad / outside','return','home','village'], a:0},
  {q:'"2osoul" means?', opts:['roots / ancestry','nationality','citizen','identity'], a:0},
  {q:'"iiqaame" is a?', opts:['residence permit','visa','passport','nationality'], a:0},
  {q:'How do you say "yearning for home"?', opts:['7anniin la blad','3aayesh barra','rije3 3al balad','maa fi mustaqbal'], a:0},
  {q:'"safaara" means?', opts:['embassy','visa office','homeland region','municipality'], a:0},
  {q:'"2ibn el-mahjar" means?', opts:['child of the diaspora','expat worker','return migrant','foreigner'], a:0},
];

const MIG_TIPS = [
  {title:'More Lebanese Outside Than Inside', body:'Lebanon has an estimated 4–14 million people of Lebanese descent living abroad — compared to ~5 million inside the country. The Brazilian Lebanese community alone may rival Lebanon\'s population. This diaspora is deeply connected to the homeland through remittances, summer visits, and dual citizenship.'},
  {title:'The "Seef" Phenomenon', body:'"Byeje Seef" (comes in summer) describes the annual diaspora return. Every July–August, Lebanese from abroad flood back: airports packed, sea prices surge, Beirut nightlife explodes. Many Lebanese families have half their members abroad and half at home, reuniting each summer.'},
  {title:'"Ghorbe" — The Lebanese Soul Concept', body:'"Ghorbe" (غربة) is untranslatable — it\'s the ache of being away from home. More than homesickness, it\'s an existential sense of estrangement. Lebanese music, poetry, and conversation are saturated with ghorbe. Even Lebanon-based Lebanese feel it about lost older times or neighborhoods.'},
  {title:'Diaspora Literature — "Adab el-Mahjar"', body:'The mahjar literary movement (early 1900s) produced world-famous poets: Kahlil Gibran (USA) and Elia Abu Madi among them. Writing in Arabic from exile, they shaped modern Arabic poetry. "Min el-mahjar" (from the diaspora) became a literary label of pride, not shame.'},
  {title:'Remittances — The Economic Lifeline', body:'The Lebanese diaspora sends roughly $6–8 billion/year home — often exceeding Lebanon\'s GDP from domestic sources. This has made Lebanon paradoxically resilient despite political collapse: families survive on wire transfers from sons and daughters abroad. Remittances are both a lifeline and an incentive to keep emigrating.'},
  {title:'Identity Phrases You\'ll Hear', body:'"Baayin 3aleik min barra" (you look like you\'re from abroad) means you\'re dressed too well or speak awkward Arabic. "Maa fi mustaqbal hon" (no future here) is the resigned emigration rationale. "2ibn el-mahjar" is worn with pride. "7anniin la blad" sums up the Lebanese diaspora emotional state.'},
];
