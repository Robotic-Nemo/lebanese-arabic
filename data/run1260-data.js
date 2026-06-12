const KYT_WORDS = [
  { ar:'طيارة ورق', tr:'tayyara wara2', en:'kite / paper kite', hint:'Tayyara wara2 — kids fly them off Corniche railings every March' },
  { ar:'خيط', tr:'khait', en:'string / thread', hint:'Khait el-tayyara — Lebanese kids use glass-coated string for competitions' },
  { ar:'هوا', tr:'hawa', en:'wind / air / breeze', hint:'Hawa el-ba7er on the Corniche lifts kites without running' },
  { ar:'طيّر', tr:'tayyer', en:'to fly / launch (a kite)', hint:'Tayyer el-tayyara — you run into the wind then let go' },
  { ar:'نسيم', tr:'naseem', en:'breeze / gentle wind', hint:'Naseem el-jbal — mountain breeze in spring perfect for kites' },
  { ar:'كورنيش', tr:'kornish', en:'Corniche / seaside promenade', hint:'Kornish Beirut — the classic kite-flying spot since Ottoman times' },
  { ar:'حلّق', tr:'7alla2', en:'to soar / to hover in the sky', hint:'El-tayyara 7alla2et — it soared means you have the perfect angle' },
  { ar:'خيط الزجاج', tr:'khait el-izzej', en:'glass-coated competition string', hint:'Khait el-izzej — dangerous razor string used in kite battles' },
  { ar:'قطع الخيط', tr:'2ate3 el-khait', en:'to cut the string / to win kite battle', hint:'2ate3 el-khait — if you cut rival\'s string, his kite is yours' },
  { ar:'طيارة أسيرة', tr:'tayyara asire', en:'captured kite / kite that got cut loose', hint:'Tayyara asire — kids race to catch a kite that got cut free' },
  { ar:'لعبة', tr:'la3be', en:'game / play activity', hint:'La3bet el-tayyara is more sport than toy in Lebanon' },
  { ar:'ربيع', tr:'rabi3', en:'spring (season)', hint:'Rabi3 — kite season in Lebanon: March to May, sea winds peak' },
  { ar:'شراع', tr:'shira3', en:'sail / wing of a kite', hint:'Shira3 el-tayyara — plastic bags recycled as kite sails in villages' },
  { ar:'عصا', tr:'3asa', en:'stick / kite frame', hint:'3aset el-tayyara — thin bamboo or reed from nearby fields' },
  { ar:'منافسة', tr:'mnafsé', en:'competition / contest', hint:'Mnafsét el-tayyaraat — village kite battles: last one flying wins' },
  { ar:'ارتفع', tr:'irtafa3', en:'to rise / to go up', hint:'El-tayyara irtafa3et — she rose perfectly means you read the wind right' },
  { ar:'نازل', tr:'naazil', en:'coming down / dropping', hint:'El-tayyara naazle — she\'s dropping means fix the tail or adjust angle' },
  { ar:'ذيل', tr:'dhail', en:'tail (of a kite)', hint:'Dhail el-tayyara balances it — too short and she spins madly' },
  { ar:'أولاد', tr:'wled', en:'children / boys', hint:'Wled el-7ayy — neighborhood kids gather at sunset on rooftops' },
  { ar:'سطح', tr:'saTe7', en:'rooftop / flat roof', hint:'SaTe7 el-bayt — Lebanese rooftop is the launch pad for every kite' }
];

const KYT_DRILLS = [
  { q:'What is "tayyara wara2"?', opts:['kite','string','wind','rooftop'], ans:0 },
  { q:'"7alla2" means...?', opts:['to fall','to cut','to soar','to run'], ans:2 },
  { q:'What is "khait el-izzej"?', opts:['kite tail','glass competition string','sea breeze','bamboo frame'], ans:1 },
  { q:'"2ate3 el-khait" means...?', opts:['tie the string','cut the string','fly the kite','catch the wind'], ans:1 },
  { q:'What is "tayyara asire"?', opts:['a kite that soars','a captured / cut-loose kite','a kite competition','a kite tail'], ans:1 },
  { q:'"SaTe7" means...?', opts:['seaside promenade','rooftop','spring wind','bamboo stick'], ans:1 },
  { q:'What does "dhail" mean?', opts:['string','sail','tail','wind'], ans:2 },
  { q:'"Kornish" is...?', opts:['a kite frame','spring season','seaside promenade','a competition'], ans:2 }
];

const KYT_TIPS = [
  { title:'Kites on the Corniche — Beirut\'s Aerial Tradition', body:'Every spring, the Beirut Corniche transforms into a kite festival without a name. Families unroll spools of string, children sprint into the sea wind, and homemade kites climb above the Mediterranean. The best spot is near Ain el-Mreisseh — the wind channels between buildings and lifts kites effortlessly. Plastic bags, bamboo sticks, and old newspaper: that\'s all you need to join.' },
  { title:'Khait el-Izzej — The Dangerous String', body:'Serious Lebanese kite competitors use glass-coated string (khait el-izzej) made by rolling wet string in crushed glass powder. The goal: cut your opponent\'s string and claim his kite. A cut kite (tayyara asire) means a sprint through the neighborhood — whoever catches it first keeps it. Parents warn kids: khait el-izzej can slice fingers if you grab it barehanded.' },
  { title:'Village Rooftops — The Original Kite Launch Pads', body:'In Lebanese mountain villages, the saTe7 (flat rooftop) is the center of summer life and spring kite season. Every house has one, and kids claim territories. Boys compete to see whose kite flies highest, who cuts the most strings, and who can keep one up the longest at sunset. The rhyme goes: "tayyarti faww, tayyartak tayt" — mine went up, yours crashed.' },
  { title:'Reading the Wind — Lebanese Kite Wisdom', body:'Lebanese kids learn wind reading young: naseem el-ba7er (sea breeze) in morning is gentle, hawa el-2asr (afternoon wind) is strong and gusty. A kite "naazle" (dropping) needs its tail adjusted or the string angle changed. A kite that "7alla2" (soars) has found the thermal. Old men on the Corniche will still stop and advise: "saker el-khait shway" — release a little more string.' }
];
