// R1239 — NEW FEATURE: Lebanese Independence & National Pride Culture (ind)

const IND_WORDS = [
  // national symbols
  {ar:'استقلال',    tr:'isti2laal',    en:'independence',         cat:'symbols'},
  {ar:'علم',        tr:'3alam',        en:'flag',                 cat:'symbols'},
  {ar:'أرزة',       tr:'arzeh',        en:'cedar tree',           cat:'symbols'},
  {ar:'نشيد',       tr:'nashiid',      en:'anthem/hymn',          cat:'symbols'},
  {ar:'وطن',        tr:'waTan',        en:'homeland',             cat:'symbols'},
  // pride expressions
  {ar:'فخور',       tr:'fakhoor',      en:'proud',                cat:'pride'},
  {ar:'مواطن',      tr:'muwaaTin',     en:'citizen',              cat:'pride'},
  {ar:'بلدي',       tr:'baladi',       en:'my country/local',     cat:'pride'},
  {ar:'لبناني',     tr:'libnenii',     en:'Lebanese',             cat:'pride'},
  {ar:'الشعب',      tr:'sh-sha3b',     en:'the people',           cat:'pride'},
  // historical & political
  {ar:'ثورة',       tr:'sawre',        en:'revolution/uprising',  cat:'history'},
  {ar:'حرية',       tr:'7orriyye',     en:'freedom/liberty',      cat:'history'},
  {ar:'شهيد',       tr:'shahiid',      en:'martyr',               cat:'history'},
  {ar:'مقاومة',     tr:'mu2aawme',     en:'resistance',           cat:'history'},
  {ar:'انتخابات',   tr:'intikhabaat',  en:'elections',            cat:'history'},
  // celebration
  {ar:'عيد الاستقلال', tr:'3iid l-isti2laal', en:'Independence Day', cat:'celebration'},
  {ar:'موكب',       tr:'mawkib',       en:'parade/procession',    cat:'celebration'},
  {ar:'احتفال',     tr:'i7tifaal',     en:'celebration',          cat:'celebration'},
  {ar:'سلاح',       tr:'slaa7',        en:'fireworks/weapons',    cat:'celebration'},
  {ar:'بيروت',      tr:'bayrout',      en:'Beirut',               cat:'celebration'},
];

const IND_DRILLS = [
  {q:'What does أرزة mean?',              opts:['flag','anthem','cedar tree','homeland'],          ans:2},
  {q:'Lebanese word for "proud"?',        opts:['وطن','فخور','مواطن','علم'],                       ans:1},
  {q:'What does حرية mean?',             opts:['revolution','resistance','martyr','freedom/liberty'], ans:3},
  {q:'Lebanese word for "citizen"?',      opts:['بلدي','لبناني','مواطن','الشعب'],                   ans:2},
  {q:'What does مقاومة mean?',            opts:['elections','parade','resistance','celebration'],   ans:2},
  {q:'Lebanese word for "parade"?',       opts:['موكب','ثورة','احتفال','نشيد'],                    ans:0},
  {q:'What does وطن mean?',               opts:['citizen','cedar tree','flag','homeland'],          ans:3},
  {q:'Lebanese word for "revolution"?',   opts:['ثورة','شهيد','استقلال','عيد الاستقلال'],          ans:0},
];

const IND_TIPS = [
  {title:'Independence Day — November 22',      body:'Lebanon\'s independence from France was declared on November 22, 1943 — a date called 3iid l-isti2laal. The day is marked with a military parade in downtown Beirut, school ceremonies, and the national anthem (nashiid waTani). The arzeh (cedar) at the heart of the Lebanese flag is the most potent national symbol — appearing on everything from passports to football kits to diaspora tattoos.'},
  {title:'The Cedar — arzeh — and what it means', body:'The arzeh is not just a symbol — it\'s an emotional anchor. The Cedars of God (arz rabb) near Bsharri are among the oldest living trees on earth. When Lebanese emigrants miss home, they miss the mountains, and the cedar is shorthand for both. The phrase "balad l-arz" (land of the cedar) is used in songs, poetry, and political speeches across all sects.'},
  {title:'Lebanese identity beyond borders',    body:'With more Lebanese abroad than at home (an estimated 14 million diaspora vs. 5 million residents), libnenii (Lebanese) identity is intensely felt in diaspora communities. The 3alam (flag) appears at soccer games in São Paulo, weddings in Ivory Coast, and storefronts in Sydney. This scattered nationalism produces both deep loyalty and deep frustration — "7abbna l-waTan bass l-waTan ma 7abbna" (we loved the homeland, but the homeland didn\'t love us).'},
  {title:'Sawre & the October 17 uprising',     body:'The word sawre (revolution/uprising) took on new meaning after October 17, 2019, when Lebanese from all regions and sects took to the streets chanting "killon ya3ne killon" (all of them means all of them). The protest movement introduced a new generation to terms like mu2aawme (resistance), 7orriyye (freedom), and sha3b (people) as demands rather than slogans. The arzeh appeared in protest art stripped of political party colors.'},
];
