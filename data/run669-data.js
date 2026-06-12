// R669 — NEW FEATURE: Lebanese Home & House (hme)
const HME_CATS = [
  { id:'rooms',    label:'🏠 Rooms' },
  { id:'things',   label:'🛋️ Things' },
  { id:'chores',   label:'🧹 Chores' },
  { id:'phrases',  label:'💬 Phrases' },
];

const HME_WORDS = [
  // rooms
  { ar:'بيت',         tr:'beit',         en:'house/home',        cat:'rooms' },
  { ar:'غرفة',        tr:'ghurfe',        en:'room',              cat:'rooms' },
  { ar:'غرفة نوم',    tr:'ghurfet noom',  en:'bedroom',           cat:'rooms' },
  { ar:'صالون',       tr:'Saloon',        en:'living room',       cat:'rooms' },
  { ar:'مطبخ',        tr:'maTbakh',       en:'kitchen',           cat:'rooms' },
  { ar:'حمام',        tr:'7ammeem',       en:'bathroom',          cat:'rooms' },
  { ar:'مرحاض',       tr:'mer7aD',        en:'toilet',            cat:'rooms' },
  { ar:'شرفة',        tr:'shurfe',        en:'balcony',           cat:'rooms' },
  // things
  { ar:'تلفزيون',     tr:'televezyon',    en:'TV',                cat:'things' },
  { ar:'سرير',        tr:'sreer',         en:'bed',               cat:'things' },
  { ar:'طاولة',       tr:'Tewle',         en:'table',             cat:'things' },
  { ar:'كرسي',        tr:'kursi',         en:'chair',             cat:'things' },
  { ar:'ثلاجة',       tr:'tallaaje',      en:'fridge',            cat:'things' },
  { ar:'غسالة',       tr:'ghassaale',     en:'washing machine',   cat:'things' },
  { ar:'مكيف',        tr:'mukayyef',      en:'AC unit',           cat:'things' },
  { ar:'باب',         tr:'baab',          en:'door',              cat:'things' },
  { ar:'شباك',        tr:'shibbaak',      en:'window',            cat:'things' },
  { ar:'مرايا',       tr:'mraaye',        en:'mirror',            cat:'things' },
  // chores
  { ar:'نظف',         tr:'naZZaf',        en:'clean',             cat:'chores' },
  { ar:'كنس',         tr:'kanas',         en:'sweep',             cat:'chores' },
  { ar:'غسل',         tr:'ghasal',        en:'wash',              cat:'chores' },
  { ar:'طبخ',         tr:'Tabakh',        en:'cook',              cat:'chores' },
  { ar:'رتب',         tr:'rattab',        en:'tidy up',           cat:'chores' },
  { ar:'كوي',         tr:'kawa',          en:'iron (clothes)',     cat:'chores' },
  // phrases
  { ar:'تفضل عالبيت', tr:'tfaDDal 3al-beit', en:'welcome to my home',  cat:'phrases' },
  { ar:'البيت بيتك',  tr:'el-beit beitak',   en:'my home is your home', cat:'phrases' },
  { ar:'مرتب كتير',   tr:'murattab kteer',   en:'very tidy',           cat:'phrases' },
  { ar:'شو بدك تاكل', tr:'shu baddak taakul', en:'what do you want to eat', cat:'phrases' },
];

const HME_DRILLS = [
  { q:'How do you say "bedroom" in Lebanese?', opts:['ghurfet noom','maTbakh','7ammeem','Saloon'], ans:0 },
  { q:'What is "maTbakh"?', opts:['kitchen','bedroom','bathroom','living room'], ans:0 },
  { q:'"Tallaaje" means:', opts:['fridge','washing machine','AC','table'], ans:0 },
  { q:'How do you say "balcony"?', opts:['shurfe','baab','shibbaak','mraaye'], ans:0 },
  { q:'"Nazzaf" means:', opts:['clean','cook','sweep','wash'], ans:0 },
  { q:'What is "sreer"?', opts:['bed','chair','table','mirror'], ans:0 },
  { q:'"El-beit beitak" means:', opts:['my home is your home','welcome','very tidy','nice house'], ans:0 },
  { q:'"Rattab" means:', opts:['tidy up','iron','wash','sweep'], ans:0 },
  { q:'How do you say "window"?', opts:['shibbaak','baab','shurfe','mraaye'], ans:0 },
  { q:'"7ammeem" means:', opts:['bathroom','kitchen','bedroom','balcony'], ans:0 },
  { q:'What is "Tewle"?', opts:['table','chair','bed','fridge'], ans:0 },
  { q:'"Tfaddal 3al-beit" is used when:', opts:['welcoming someone home','asking for food','cleaning','leaving'], ans:0 },
  { q:'"Ghassaale" means:', opts:['washing machine','AC unit','fridge','TV'], ans:0 },
  { q:'How do you say "cook" (verb)?', opts:['Tabakh','kanas','ghasal','kawa'], ans:0 },
  { q:'"Mukayyef" means:', opts:['AC unit','heater','fan','washing machine'], ans:0 },
];

const HME_TIPS = [
  { title:'Lebanese Homes', body:'"Beit" (بيت) means both house and home — very intimate word. Lebanese often say "beitak" (your home) to make guests feel welcome.' },
  { title:'Bathroom vs Toilet', body:'"7ammeem" = bathroom with shower. "Mer7aD" = toilet. When asking for the toilet, say "wein el-mer7aD?" (wen el-merHaD?).' },
  { title:'Living Room Culture', body:'"Saloon" (صالون) is the formal living room. Lebanese homes have both a Saloon for guests and a more casual TV room.' },
  { title:'Hospitality Phrase', body:'"El-beit beitak" (البيت بيتك) — literally "the house is your house." A warm phrase said to guests to make them feel completely at home.' },
  { title:'AC Obsession', body:'"Mukayyef" (مكيف) is essential vocabulary. Lebanon\'s hot summers mean AC is a constant topic — "shagghel el-mukayyef" (turn on the AC).' },
  { title:'Chores Conjugation', body:'Chore verbs: "naZZaf" (clean), "kanas" (sweep), "ghasal" (wash), "Tabakh" (cook). Add "-i" for commands to a female, "-ee" for a female command form.' },
];
