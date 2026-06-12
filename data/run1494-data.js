// R1494 — NEW FEATURE: Lebanese Kaak Vendor & Street Bread Culture (kak) — 20 words, 8 drills, 4 tips
const KAK_WORDS = [
  {w:'kaak',t:'كعك',tr:'kaak',e:'sesame bread ring (iconic street vendor staple)',c:'kak'},
  {w:'sim-sim',t:'سمسم',tr:'sim-sim',e:'sesame seeds (coating the kaak ring)',c:'kak'},
  {w:'shawish',t:'شاويش',tr:'shawish',e:'street vendor / hawker calling out',c:'kak'},
  {w:'3arbe',t:'عربة',tr:'3arbe',e:'push cart / vendor\'s handcart',c:'kak'},
  {w:'sini',t:'صينية',tr:'sini',e:'large tray (for displaying kaak rings)',c:'kak'},
  {w:'3aroos bl-kaak',t:'عروس بالكعك',tr:"3aroos bl-kaak",e:'sandwich stuffed inside kaak ring',c:'kak'},
  {w:'jibne bayda',t:'جبنة بيضا',tr:'jibne bayda',e:'white cheese (most popular filling)',c:'kak'},
  {w:'za3tar w zeit',t:'زعتر وزيت',tr:"za3tar w zeit",e:'thyme & olive oil (classic filling)',c:'kak'},
  {w:'labneh',t:'لبنة',tr:'labneh',e:'strained yogurt spread (filling)',c:'kak'},
  {w:'Taze',t:'طازج',tr:'Taze',e:'fresh / just out of the oven',c:'kak'},
  {w:'sbee7iyyeh',t:'صبيحية',tr:'sbee7iyyeh',e:'morning breakfast ritual / early snack',c:'kak'},
  {w:'forn',t:'فرن',tr:'forn',e:'bakery oven / neighborhood bakery',c:'kak'},
  {w:'khabaz',t:'خباز',tr:'khabaz',e:'baker',c:'kak'},
  {w:'3ajine',t:'عجينة',tr:"3ajine",e:'bread dough',c:'kak'},
  {w:'ftoor',t:'فطور',tr:'ftoor',e:'breakfast',c:'kak'},
  {w:'khyar',t:'خيار',tr:'khyar',e:'cucumber (sliced into sandwich)',c:'kak'},
  {w:'na3ne3',t:'نعنع',tr:"na3ne3",e:'fresh mint (added to kaak sandwich)',c:'kak'},
  {w:'sawt l-biyye3',t:'صوت البياع',tr:"sawt l-biyye3",e:'vendor\'s street cry / call',c:'kak'},
  {w:'mne2ish',t:'منقيش',tr:'mne2ish',e:'small mana\'eesh (street-size, sold alongside)',c:'kak'},
  {w:'tbessil',t:'تبصيل',tr:'tbessil',e:'wrapping the order in paper',c:'kak'},
];

const KAK_DRILLS = [
  {q:'I want a kaak with white cheese.',a:'بدي كعك بجبنة بيضا.',ar:'biddi kaak b-jibne bayda.',correct:0,
   opts:['بدي كعك بجبنة بيضا.','بدي كعك بلبنة.','بدي كعك بزعتر وزيت.','بدي كعك بيضا.']},
  {q:'The kaak is fresh from the oven.',a:'الكعك طازج من الفرن.',ar:'l-kaak Taze mn l-forn.',correct:0,
   opts:['الكعك طازج من الفرن.','الكعك قديم من أمبارح.','الكعك بارد هلق.','الكعك ما في.']},
  {q:'The vendor is calling in the street.',a:'الشاويش عم ينادي بالشارع.',ar:'l-shawish 3am ynadi bil-share3.',correct:0,
   opts:['الشاويش عم ينادي بالشارع.','الشاويش بالبيت هلق.','الشاويش ما جا اليوم.','الشاويش نايم.']},
  {q:'Give me a sandwich with labneh and mint.',a:'عطيني عروس بلبنة ونعنع.',ar:"3tini 3aroos bl-labneh w na3ne3.",correct:0,
   opts:['عطيني عروس بلبنة ونعنع.','عطيني عروس بجبنة وخيار.','عطيني عروس بزعتر بس.','عطيني كعك بدون شي.']},
  {q:'The baker wakes up before dawn.',a:'الخباز بيصحا قبل الفجر.',ar:'l-khabaz byse77a 2abel l-fajr.',correct:0,
   opts:['الخباز بيصحا قبل الفجر.','الخباز بيصحا متأخر.','الخباز بينام كل النهار.','الخباز ما بيشتغل الصبح.']},
  {q:'The tray is full of kaak rings.',a:'الصينية مليانة كعك.',ar:'l-sini mlayyane kaak.',correct:0,
   opts:['الصينية مليانة كعك.','الصينية فاضية هلق.','الصينية فيها خبز بس.','الصينية مكسورة.']},
  {q:'I love breakfast with a kaak.',a:'بحب الفطور بكعكة.',ar:'b7ebb l-ftoor b-kakke.',correct:0,
   opts:['بحب الفطور بكعكة.','بحب الفطور بالبيت.','بكره الفطور بالشارع.','ما بحب الفطور.']},
  {q:'Wrap it well in paper.',a:'تبصيله كويس بورق.',ar:'tbassilon kwayyes b-wara2.',correct:0,
   opts:['تبصيله كويس بورق.','خليه بالصينية.','حطه بالكيس.','ما لازم تتبصله.']},
];

const KAK_TIPS = [
  {title:'The Art of the Kaak Vendor',body:"Every morning in Lebanese cities and villages, a shawish (street vendor) pushes a cart loaded with kaak — large sesame bread rings that have been baked since before dawn. The vendor calls out through the neighborhood, often improvising poetic cries: 'kaak l-7ayye!' (neighborhood kaak!) or rattling their cart to signal their arrival. This is one of Lebanon's most enduring urban sounds. The kaak vendor knows every family's order by heart — Teta gets labneh, the kids want jibne, and Baba wants za3tar w zeit. The rings are displayed on a sini (tray) balanced on the cart, glistening with sim-sim (sesame seeds) fresh from the forn."},
  {title:'What Goes in a Kaak',body:"The real art of kaak is the 3aroos bl-kaak — stuffing the ring with fillings. The vendor splits the ring and loads it: jibne bayda (white cheese, usually Akkawi or Nabulsi) is the classic; labneh (strained yogurt) is creamy and tangy; za3tar w zeit (thyme mix with olive oil) is earthy and fragrant. Additions include khyar (cucumber slices), na3ne3 (fresh mint leaves), bandora (tomato), and zeit l-zaytoon (olive oil drizzle). A good vendor knows exactly how much to pack without the ring falling apart. Some vendors also sell mne2ish — small mana'eesh baked fresh alongside the kaak."},
  {title:'The Baker Before Dawn',body:"Behind every kaak vendor is a khabaz (baker) who has been working since 2 or 3 AM. The forn (neighborhood bakery) is the beating heart of Lebanese morning culture. The 3ajine (dough) is prepared the night before, shaped into rings, rolled in sim-sim, and baked until Taze (fresh and golden). The vendor collects their order before sunrise and begins the route by 6:30 AM. In Lebanese culture, there's a saying: 'l-kaak Taze ma biyetlennik' — fresh kaak doesn't let you down. The sbee7iyyeh (morning ritual) of buying kaak before work is sacred for many Lebanese families."},
  {title:'Kaak Culture & Neighborhood Sounds',body:"The sawt l-biyye3 (vendor's call) is one of the defining sounds of Lebanese urban life. In Beirut's older neighborhoods like Gemmayzeh, Mar Mikhael, and Achrafieh, you can still hear kaak vendors in the early morning. The tbessil (wrapping in paper) is done quickly and efficiently — a skilled vendor can stuff and wrap a 3aroos bl-kaak in under 20 seconds. Kaak culture represents the Lebanese philosophy of simple, communal, affordable food: you buy it from a neighbor, it costs almost nothing, and it connects you to the morning rhythm of your city. Diaspora Lebanese often describe missing 'sawt l-biyye3' as one of the first things they miss about home."},
];
