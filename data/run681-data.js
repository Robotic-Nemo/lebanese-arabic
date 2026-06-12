// R681 — NEW FEATURE: Lebanese Hotel & Accommodation (htl)
const HTL_CATS = [
  { id:'checkin',   label:'🏨 Check-in' },
  { id:'room',      label:'🛏️ Room' },
  { id:'requests',  label:'🛎️ Requests' },
  { id:'phrases',   label:'💬 Phrases' },
];

const HTL_WORDS = [
  // check-in
  { ar:'فندق',           tr:'fun2u2',          en:'hotel',                    cat:'checkin' },
  { ar:'حجز',            tr:'7ajez',           en:'reservation/booking',      cat:'checkin' },
  { ar:'تسجيل وصول',     tr:'tasjeel weSool',  en:'check-in',                 cat:'checkin' },
  { ar:'تسجيل مغادرة',   tr:'tasjeel mghaadir', en:'check-out',               cat:'checkin' },
  { ar:'جواز سفر',       tr:'jwaaz safar',     en:'passport',                 cat:'checkin' },
  { ar:'مفتاح',          tr:'miftaa7',         en:'key',                      cat:'checkin' },
  { ar:'غرفة',           tr:'ghurfe',          en:'room',                     cat:'checkin' },
  { ar:'طابق',           tr:'Taabi2',          en:'floor/storey',             cat:'checkin' },
  // room
  { ar:'سرير',           tr:'sreer',           en:'bed',                      cat:'room' },
  { ar:'سرير مزدوج',     tr:'sreer mazdooj',   en:'double bed',               cat:'room' },
  { ar:'حمّام',          tr:'7ammeem',         en:'bathroom',                 cat:'room' },
  { ar:'شرفة',           tr:'shurfe',          en:'balcony',                  cat:'room' },
  { ar:'منظر',           tr:'manzar',          en:'view',                     cat:'room' },
  { ar:'مكيّف',          tr:'mukayyaf',        en:'air conditioning',         cat:'room' },
  { ar:'واي فاي',        tr:'waay faay',       en:'wifi',                     cat:'room' },
  // requests
  { ar:'خدمة الغرف',     tr:'khedmet el-ghraf', en:'room service',            cat:'requests' },
  { ar:'منشفة',          tr:'manshafe',        en:'towel',                    cat:'requests' },
  { ar:'وسادة',          tr:'wsaade',          en:'pillow',                   cat:'requests' },
  { ar:'مشكلة',          tr:'mushkile',        en:'problem',                  cat:'requests' },
  { ar:'صيانة',          tr:'Siyaane',         en:'maintenance',              cat:'requests' },
  { ar:'إفطار',          tr:'ifTaar',          en:'breakfast',                cat:'requests' },
  { ar:'حساب',           tr:'7saab',           en:'bill/account',             cat:'requests' },
  // phrases
  { ar:'عندي حجز',        tr:'3indi 7ajez',     en:'I have a reservation',    cat:'phrases' },
  { ar:'بدي غرفة لشخصين', tr:'baddi ghurfe la shakhSeen', en:'I want a room for two', cat:'phrases' },
  { ar:'كيف المنظر',      tr:'kif el-manzar',  en:'what\'s the view like?',   cat:'phrases' },
  { ar:'الواي فاي شغّال', tr:'el-waay faay shagghaal', en:'the wifi is working', cat:'phrases' },
  { ar:'فين المصعد',      tr:'feen el-miS3ad',  en:'where is the elevator?',  cat:'phrases' },
  { ar:'وقت الإفطار أيمتى', tr:'wa2t el-ifTaar ayymta', en:'what time is breakfast?', cat:'phrases' },
];

const HTL_DRILLS = [
  { q:'How do you say "hotel" in Lebanese?', opts:['fun2u2','7ajez','ghurfe','Taabi2'], ans:0 },
  { q:'"7ajez" means:', opts:['reservation','check-in','key','passport'], ans:0 },
  { q:'What is "miftaa7"?', opts:['key','room','floor','balcony'], ans:0 },
  { q:'"Tasjeel weSool" means:', opts:['check-in','check-out','reservation','passport'], ans:0 },
  { q:'How do you say "balcony"?', opts:['shurfe','ghurfe','manshafe','Siyaane'], ans:0 },
  { q:'"Manzar" means:', opts:['view','room','floor','wifi'], ans:0 },
  { q:'What is "7ammeem"?', opts:['bathroom','bedroom','balcony','towel'], ans:0 },
  { q:'"Manshafe" means:', opts:['towel','pillow','blanket','view'], ans:0 },
  { q:'How do you say "breakfast"?', opts:['ifTaar','7saab','khedme','Siyaane'], ans:0 },
  { q:'"Wsaade" means:', opts:['pillow','towel','bed','sheet'], ans:0 },
  { q:'"3indi 7ajez" means:', opts:['I have a reservation','I want a room','where is the elevator?','check me out'], ans:0 },
  { q:'How do you say "air conditioning"?', opts:['mukayyaf','manzar','Taabi2','waay faay'], ans:0 },
  { q:'"7saab" means:', opts:['bill/account','room service','maintenance','breakfast'], ans:0 },
  { q:'"Feen el-miS3ad?" means:', opts:['where is the elevator?','what time is breakfast?','what is the view?','I have a reservation'], ans:0 },
  { q:'How do you say "double bed"?', opts:['sreer mazdooj','sreer','shurfe','ghurfe'], ans:0 },
];

const HTL_TIPS = [
  { title:'Lebanese Hotels', body:'Lebanon has everything from 5-star hotels in Beirut (Phoenicia, Le Gray, Four Seasons) to mountain guesthouses in the Chouf or Faraya. "Fun2u2" (فندق) is hotel; a cheaper option is "benshoon" (pension/guesthouse). Mountain stays are called "bayt riyaafi" (country house).' },
  { title:'Check-in Phrases', body:'"3indi 7ajez" (عندي حجز — I have a reservation). If your room isn\'t ready: "mat7aDDara ba3d el-ghurfe?" (isn\'t the room ready yet?). Checkout is "tasjeel mghaadir" — usually by noon.' },
  { title:'The View Factor', body:'"Manzar" (منظر) is everything in Lebanon. "Ghurfe 3a el-ba7er" (sea view room) vs "ghurfe 3a el-jabal" (mountain view room). Always ask "kif el-manzar?" before booking. A sea view in Jounieh or mountain view in Broummana is worth specifying.' },
  { title:'Room Requests', body:'"Khedmet el-ghraf" (خدمة الغرف) = room service. "Baddii manaashef ziyde" (I want more towels). "El-mukayyaf mish shagghaal" (the AC isn\'t working). "Baddii tbaddlo el-miye" (I want the water changed — for bottled water in the room).' },
  { title:'Breakfast Culture', body:'"Iftar" (إفطار) in Lebanese hotels is typically a spread: 7ummous, labneh, zeitoon, khubez, bayd, jibne. "Waqt el-ifTaar ayymta?" (what time is breakfast?) — usually 7–10am. "Meen3ash el-ifTaar?" (is breakfast included?) is worth asking at check-in.' },
  { title:'Hotel Arabic Extras', body:'"MiS3ad" (مصعد) = elevator. "Markaz liiaaqe" (مركز لياقة) = gym. "Masba7" (مسبح) = pool. "Khidme el-ghuseel" (laundry service). "Safe" (خزنة) = safe box. "Parking" is just "barking" (بركينغ) in Lebanese.' },
];
