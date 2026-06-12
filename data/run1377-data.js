// R1377 — NEW FEATURE: Lebanese Environment & Sustainability (bya)
const BYA_WORDS = [
  {ar:'بيئة', tr:'bi2a', en:'environment'},
  {ar:'تلوث', tr:'talawwuth', en:'pollution'},
  {ar:'زبالة', tr:'zbele', en:'garbage'},
  {ar:'كهرباء', tr:'kahraba', en:'electricity'},
  {ar:'مية', tr:'miye', en:'water'},
  {ar:'هواء', tr:'hawa', en:'air'},
  {ar:'أرز', tr:'arz', en:'cedar tree'},
  {ar:'حريق', tr:'7ariq', en:'wildfire'},
  {ar:'طاقة شمسية', tr:'ta2a shamsiyye', en:'solar energy'},
  {ar:'تدوير', tr:'tadwir', en:'recycling'},
  {ar:'ناشط', tr:'nashit', en:'activist'},
  {ar:'توعية', tr:'taw3iyye', en:'awareness campaign'},
  {ar:'مازوت', tr:'mazut', en:'diesel fuel'},
  {ar:'غابة', tr:'ghabe', en:'forest'},
  {ar:'شاطئ', tr:'shate2', en:'beach/shore'},
  {ar:'بلاستيك', tr:'blastik', en:'plastic'},
  {ar:'خضرا', tr:'khadra', en:'greenery'},
  {ar:'مولدة', tr:'mawlade', en:'generator'},
  {ar:'طبيعة', tr:'tabi3a', en:'nature'},
  {ar:'نظيف', tr:'ndif', en:'clean'},
];
const BYA_DRILLS = [
  {q:'What does "bi2a" mean?', opts:['pollution','environment','recycling','forest'], a:1},
  {q:'How do you say "garbage" in Lebanese?', opts:['kahraba','miye','zbele','hawa'], a:2},
  {q:'What is "talawwuth"?', opts:['clean','nature','pollution','activist'], a:2},
  {q:'"Arz" means?', opts:['water','cedar tree','wildfire','generator'], a:1},
  {q:'What does "mawlade" mean?', opts:['solar energy','recycling','generator','forest'], a:2},
  {q:'How do you say "recycling" in Lebanese?', opts:['tadwir','mazut','ghabe','bi2a'], a:0},
  {q:'What is "7ariq"?', opts:['beach','nature','plastic','wildfire'], a:3},
  {q:'"Ta2a shamsiyye" means?', opts:['awareness','solar energy','electricity','activist'], a:1},
];
const BYA_TIPS = [
  {title:"Lebanon's garbage crisis", body:'In 2015, Lebanon\'s main landfill closed triggering the "You Stink" (طلعت ريحتكم) protest movement. "Zbele" (زبالة) became a political flashpoint — Lebanese use it both literally and figuratively to express frustration with corruption.'},
  {title:'Electricity & generators', body:'Lebanon rarely has 24/7 electricity. "Kahraba" (كهرباء) from the state is rationed, so most neighborhoods have private "mawlade" (مولدة) generators. "Tala3et il-kahraba" (طلعت الكهربا) = the electricity went out, said dozens of times daily.'},
  {title:'Cedar trees', body:'The cedar "arz" (أرز) is Lebanon\'s national symbol on the flag. "Zayy il-arz" (زي الأرز = like the cedar) means standing tall and strong. The Cedars of God (Arz il-Rab) in north Lebanon is a UNESCO World Heritage Site.'},
  {title:'Environmental activism', body:'Lebanese youth are increasingly "nashit" (ناشط) in environmental causes. After the 2020 Beirut blast, many turned to "taw3iyye" (توعية) campaigns. "Bi2etna 7ilwe" (بيئتنا حلوة = our environment is beautiful) is a common activism slogan.'},
];
