// R675 — NEW FEATURE: Lebanese Sea & Beach (bhr)
const BHR_CATS = [
  { id:'sea',      label:'🌊 Sea & Water' },
  { id:'beach',    label:'🏖️ Beach Life' },
  { id:'fish',     label:'🐟 Fish & Seafood' },
  { id:'phrases',  label:'💬 Phrases' },
];

const BHR_WORDS = [
  // sea & water
  { ar:'بحر',          tr:'ba7er',          en:'sea',                  cat:'sea' },
  { ar:'موجة',         tr:'mawje',          en:'wave',                 cat:'sea' },
  { ar:'رمل',          tr:'ramel',          en:'sand',                 cat:'sea' },
  { ar:'صخرة',         tr:'SaHra',          en:'rock',                 cat:'sea' },
  { ar:'شاطئ',         tr:'shaaTe2',        en:'beach/shore',          cat:'sea' },
  { ar:'مرفأ',         tr:'marfa2',         en:'port/harbour',         cat:'sea' },
  { ar:'غروب',         tr:'ghoroob',        en:'sunset',               cat:'sea' },
  { ar:'ملح',          tr:'mel7',           en:'salt',                 cat:'sea' },
  // beach life
  { ar:'مايوه',        tr:'maayo',          en:'swimsuit',             cat:'beach' },
  { ar:'شمسية',        tr:'shamsiyye',      en:'beach umbrella/sunshade', cat:'beach' },
  { ar:'كريم شمس',     tr:'kreem shams',    en:'sunscreen',            cat:'beach' },
  { ar:'نضارة',        tr:'ndaara',         en:'sunglasses',           cat:'beach' },
  { ar:'غوص',          tr:'ghaws',          en:'diving/snorkelling',   cat:'beach' },
  { ar:'سبح',          tr:'sbe7',           en:'to swim',              cat:'beach' },
  { ar:'شلة',          tr:'shille',         en:'group of friends (at beach)', cat:'beach' },
  { ar:'كشك',          tr:'kushk',          en:'beach kiosk/snack bar', cat:'beach' },
  // fish & seafood
  { ar:'سمك',          tr:'samak',          en:'fish',                 cat:'fish' },
  { ar:'جمبري',        tr:'jambari',        en:'shrimp/prawns',        cat:'fish' },
  { ar:'حبّار',        tr:'7abbaar',        en:'squid',                cat:'fish' },
  { ar:'بوري',         tr:'boori',          en:'mullet fish',          cat:'fish' },
  { ar:'سلطعون',       tr:'salTa3oon',      en:'crab',                 cat:'fish' },
  { ar:'مشوي',         tr:'mashwi',         en:'grilled',              cat:'fish' },
  { ar:'مسگعل',        tr:'ms2a3al',        en:'fried (fish)',         cat:'fish' },
  // phrases
  { ar:'يلا عالبحر',    tr:'yalla 3al ba7er',  en:'let\'s go to the sea', cat:'phrases' },
  { ar:'الماي باردة',   tr:'el-maay baardit',   en:'the water is cold',    cat:'phrases' },
  { ar:'المي دافية',    tr:'el-maay daafye',    en:'the water is warm',    cat:'phrases' },
  { ar:'بدي اسبح',      tr:'baddi isbe7',        en:'I want to swim',       cat:'phrases' },
  { ar:'عالشاطئ شي تاني', tr:'3al-shaaTe2 shi taani', en:'the beach is something else (it\'s great)', cat:'phrases' },
];

const BHR_DRILLS = [
  { q:'How do you say "sea" in Lebanese?', opts:['ba7er','ramel','mawje','shaaTe2'], ans:0 },
  { q:'"Mawje" means:', opts:['wave','rock','beach','sunset'], ans:0 },
  { q:'What is "shaaTe2"?', opts:['beach/shore','sand','port','sea'], ans:0 },
  { q:'"Marfa2" means:', opts:['port/harbour','rock','wave','salt'], ans:0 },
  { q:'How do you say "sunglasses"?', opts:['ndaara','maayo','shamsiyye','kreem shams'], ans:0 },
  { q:'"Shamsiyye" means:', opts:['beach umbrella','sunscreen','swimsuit','sunglasses'], ans:0 },
  { q:'How do you say "shrimp"?', opts:['jambari','samak','7abbaar','salTa3oon'], ans:0 },
  { q:'"Samak" means:', opts:['fish','squid','crab','mullet'], ans:0 },
  { q:'"Ghaws" means:', opts:['diving','swimming','sunset','wave'], ans:0 },
  { q:'How do you say "grilled"?', opts:['mashwi','ms2a3al','jambari','boori'], ans:0 },
  { q:'"Yalla 3al ba7er" means:', opts:["let's go to the sea","the water is cold","I want to swim","the beach is great"], ans:0 },
  { q:'"Baddi isbe7" means:', opts:['I want to swim','the water is warm','let\'s go','it\'s cold'], ans:0 },
  { q:'How do you say "squid"?', opts:['7abbaar','jambari','samak','boori'], ans:0 },
  { q:'"Shille" means:', opts:['group of friends','beach kiosk','umbrella','swimsuit'], ans:0 },
  { q:'"Mel7" means:', opts:['salt','sand','rock','wave'], ans:0 },
];

const BHR_TIPS = [
  { title:'Lebanese Beach Culture', body:'"Yalla 3al ba7er!" (يلا عالبحر) — heading to the sea is serious business in Lebanon. From Jounieh to Byblos to Batroun, beach clubs (lido) are packed every summer weekend. The "shille" (شلة — your crew) is essential.' },
  { title:'Batroun & White Beach', body:'Batroun\'s famous white pebble beaches use "7ajar abyad" (حجر أبيض). "SaHra" (صخرة) means rock — important in Lebanon where many beaches are rocky, not sandy.' },
  { title:'Seafood at the Port', body:'"Marfa2" (مرفأ) — the fishing port. In Saida, Tyre (Soor), and Batroun you\'ll find "samak mashwi" (grilled fish) and "jambari ms2a3al" (fried shrimp) at the dockside restaurants.' },
  { title:'The Corniche', body:'Beirut\'s seafront promenade (Corniche) is where people walk, fish, and watch "ghoroob" (غروب — sunset). "El-ba7er min hon kteer 7elo" — the sea from here is very beautiful.' },
  { title:'Swimming Terms', body:'"Sbe7" (سبح) = to swim. "Ghaws" (غوص) = diving/snorkelling. "Maayo" (مايوه) = swimsuit. "Kreem shams" = sunscreen — crucial under the Lebanese summer sun.' },
  { title:'Fish Names', body:'"Boori" (بوري) is mullet — common in Lebanese fish dishes. "7abbaar" (حبّار) is squid, popular grilled or fried. At the market: "2addesh el-kilo?" (how much per kilo?) is your key phrase.' },
];
