// R696 — NEW FEATURE: Lebanese Music & Instruments (msc)
const MSC_CATS = [
  { id:'instruments', label:'🎸 Instruments' },
  { id:'genres',     label:'🎵 Genres' },
  { id:'performers', label:'🎤 Performers' },
  { id:'phrases',    label:'💬 Phrases' },
];

const MSC_WORDS = [
  // instruments
  { ar:'عود',          tr:'3ood',           en:'oud (lute)',              cat:'instruments' },
  { ar:'قانون',        tr:'2aanoon',        en:'qanun (zither)',          cat:'instruments' },
  { ar:'دربكة',        tr:'darbakke',       en:'darbuka (drum)',          cat:'instruments' },
  { ar:'ناي',          tr:'naay',           en:'nay (flute)',             cat:'instruments' },
  { ar:'كمان',         tr:'kamaan',         en:'violin',                  cat:'instruments' },
  { ar:'مجوز',         tr:'mijwiz',         en:'mijwiz (folk clarinet)',  cat:'instruments' },
  { ar:'طبلة',         tr:'tabla',          en:'tabla (drum)',            cat:'instruments' },
  { ar:'بزق',          tr:'buzuq',          en:'buzuq (long-neck lute)',  cat:'instruments' },
  // genres
  { ar:'طرب',          tr:'Tarab',          en:'tarab (emotional music)', cat:'genres' },
  { ar:'موسيقى شرقية', tr:'moosiiqaa shar2iyye', en:'oriental/eastern music', cat:'genres' },
  { ar:'دبكة',         tr:'dabke',          en:'dabke (folk dance music)',cat:'genres' },
  { ar:'موشح',         tr:'muwashsha7',     en:'muwashshah (classical)',  cat:'genres' },
  { ar:'أغنية',        tr:'ughniyye',       en:'song',                   cat:'genres' },
  { ar:'لحن',          tr:'la7n',           en:'melody/tune',            cat:'genres' },
  { ar:'إيقاع',        tr:'ee2aa3',         en:'rhythm/beat',            cat:'genres' },
  // performers
  { ar:'مغني',         tr:'mghanni',        en:'singer (m)',             cat:'performers' },
  { ar:'مغنية',        tr:'mghannniyye',    en:'singer (f)',             cat:'performers' },
  { ar:'موسيقار',      tr:'moosee2aar',     en:'musician/composer',      cat:'performers' },
  { ar:'فيروز',        tr:'Fayruz',         en:'Fairuz (icon)',          cat:'performers' },
  { ar:'وديع الصافي',  tr:'Wadii3 el-Saafi',en:'Wadih El Safi',         cat:'performers' },
  { ar:'زياد رحباني',  tr:'Ziyaad Ra7baani',en:'Ziad Rahbani',          cat:'performers' },
  { ar:'فرقة',         tr:'fir2a',          en:'band/ensemble',          cat:'performers' },
  // phrases
  { ar:'شو هالصوت',    tr:'shu ha-Sawt',    en:'what a voice!',          cat:'phrases' },
  { ar:'عزف بتعلم',    tr:'3azaf bt3allem',  en:'(you) learn by playing', cat:'phrases' },
  { ar:'بحب الطرب',    tr:'b7ebb el-Tarab', en:'I love tarab music',     cat:'phrases' },
  { ar:'دخيلك غنيلي',  tr:'dakhiilak ghannniili', en:'please sing for me', cat:'phrases' },
  { ar:'الموسيقى بتريح النفس', tr:'el-moosii2a btrii7 el-nafs', en:'music calms the soul', cat:'phrases' },
  { ar:'بيعزف عود',    tr:'byi3zef 3ood',   en:'(he) plays oud',        cat:'phrases' },
];

const MSC_DRILLS = [
  { q:'How do you say "oud"?', opts:['3ood','kamaan','naay','buzuq'], ans:0 },
  { q:'"Darbakke" means:', opts:['darbuka (drum)','qanun','nay','tabla'], ans:0 },
  { q:'What is "Tarab"?', opts:['emotional music','folk dance','classical','song'], ans:0 },
  { q:'"2aanoon" means:', opts:['qanun (zither)','oud','violin','buzuq'], ans:0 },
  { q:'How do you say "violin"?', opts:['kamaan','3ood','naay','darbakke'], ans:0 },
  { q:'"Mijwiz" means:', opts:['folk clarinet','drum','lute','flute'], ans:0 },
  { q:'What is "ughniyye"?', opts:['song','melody','rhythm','music'], ans:0 },
  { q:'"La7n" means:', opts:['melody/tune','rhythm','song','instrument'], ans:0 },
  { q:'How do you say "band/ensemble"?', opts:['fir2a','mghanni','moosee2aar','kamaan'], ans:0 },
  { q:'"Fayruz" refers to:', opts:['Fairuz (icon)','Wadih El Safi','Ziad Rahbani','musician'], ans:0 },
  { q:'What is "dabke" in music context?', opts:['folk dance music','tarab','muwashshah','classical'], ans:0 },
  { q:'"Ee2aa3" means:', opts:['rhythm/beat','melody','song','music'], ans:0 },
  { q:'How do you say "nay"?', opts:['naay','mijwiz','kamaan','tabla'], ans:0 },
  { q:'"Muwashsha7" means:', opts:['muwashshah (classical)','tarab','dabke','song'], ans:0 },
  { q:'How do you say "musician/composer"?', opts:['moosee2aar','mghanni','fir2a','3ood'], ans:0 },
];

const MSC_TIPS = [
  { title:'Fairuz — Lebanon\'s soul', body:'"Fayruz" (فيروز) = Fairuz — arguably the most beloved Arab singer of the 20th century. Born Nouhad Haddad, her voice is inseparable from Lebanese identity. "Saba7 el-khayr ya Lebnan" (good morning Lebanon) from her song "Li Beirut" became an anthem. She rarely performs now — a Fairuz concert is once-in-a-generation.' },
  { title:'The Oud — king of instruments', body:'"3ood" (عود) = the oud — the ancestor of the European lute. Central to Arabic music. Played without a fretboard — the player slides between notes. "Bt3allem 3ood?" (do you learn oud?) is a common question. Beirut has many oud masters. The oud\'s sound is described as "7azeen" (melancholic) and "2aseel" (authentic).' },
  { title:'Tarab — music that moves you', body:'"Tarab" (طرب) is not just a genre but a state: the ecstatic emotional response to beautiful music. When a singer or musician induces Tarab, the audience shouts "Allah!" or "yislam!" — they are overcome. True Tarab requires deep musicianship. Oum Kalthoum, Wadih El Safi, and Sabah were masters of inducing Tarab.' },
  { title:'Rahbani Brothers & Ziad', body:'The Rahbani Brothers (Assi and Mansour) created modern Lebanese music with Fairuz. Their son "Ziyaad Ra7baani" (Ziad Rahbani) took it further — jazz, political satire, experimental. "Bint el-Haras" and "Bennesbeh Labokra Shou?" are classics. Ziad is considered Lebanon\'s most provocative musical mind.' },
  { title:'Folk instruments', body:'"Mijwiz" (مجوز) = a double-piped folk clarinet — the sound of Lebanese village music, Chouf mountains, and Dabke. "Tabla" and "darbakke" are different-sized drums used in folk and classical contexts. "Buzuq" (بزق) is a long-neck lute with a bright, twangy tone used in gypsyfolk and Tarab.' },
  { title:'Music phrases', body:'"Shu ha-Sawt!" (what a voice!) — the highest compliment for a singer. "Dakhiilak ghannniili" (please sing for me) — a warm, intimate request. "El-moosii2a btrii7 el-nafs" (music calms the soul) — a common saying. "Byi3zef 3ood" (he plays oud) — how you talk about a musician\'s instrument in Lebanese.' },
];
