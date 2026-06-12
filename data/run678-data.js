// R678 — NEW FEATURE: Lebanese Visiting & Hospitality (zwr)
const ZWR_CATS = [
  { id:'arrival',   label:'🚪 Arrival' },
  { id:'host',      label:'🫖 Host Phrases' },
  { id:'gifts',     label:'🎁 Gifts & Compliments' },
  { id:'farewell',  label:'👋 Farewell' },
];

const ZWR_WORDS = [
  // arrival
  { ar:'تفضّل',          tr:'tafaDDal',         en:'welcome/come in (m)',      cat:'arrival' },
  { ar:'تفضّلي',         tr:'tafaDDali',        en:'welcome/come in (f)',      cat:'arrival' },
  { ar:'أهلاً وسهلاً',  tr:'ahlan wa sahlan',  en:'welcome (formal)',         cat:'arrival' },
  { ar:'نوّرتونا',       tr:'nawwartoona',      en:'you have lit up our home', cat:'arrival' },
  { ar:'شرّفتونا',       tr:'sharrraftoona',    en:'you have honoured us',     cat:'arrival' },
  { ar:'زيارة',          tr:'ziyaara',          en:'a visit',                  cat:'arrival' },
  { ar:'دقّ الباب',      tr:'da22 el-baab',     en:'knocked the door',         cat:'arrival' },
  // host phrases
  { ar:'شو بدك تشرب',    tr:'shu baddak tishrab', en:'what would you like to drink?', cat:'host' },
  { ar:'اتفضّل كُل',     tr:'itfaDDal kol',     en:'please eat',               cat:'host' },
  { ar:'بيتكم',          tr:'baytkun',          en:'your house (it\'s your home)',  cat:'host' },
  { ar:'تكرم',           tr:'tikram',           en:'may you be honoured (reply to thanks)', cat:'host' },
  { ar:'ما في داعي',     tr:'maa fi daa3i',     en:'there was no need (for the gift)', cat:'host' },
  { ar:'الله يخلّيك',    tr:'alla ykhalleeq',   en:'may God keep you (gratitude)', cat:'host' },
  { ar:'على راحتك',      tr:'3ala raa7tak',     en:'make yourself comfortable', cat:'host' },
  // gifts & compliments
  { ar:'هدية',           tr:'hadiyye',          en:'gift',                     cat:'gifts' },
  { ar:'كرم',            tr:'karam',            en:'generosity',               cat:'gifts' },
  { ar:'الله يعطيك العافية', tr:'alla y3Tiik el-3aafye', en:'may God give you health', cat:'gifts' },
  { ar:'إيدك مباركة',    tr:'eedak mbaarke',    en:'blessed are your hands (for cooking)', cat:'gifts' },
  { ar:'أكلتك كتير منيحة', tr:'akltak ktiir mniH2a', en:'your food is very good', cat:'gifts' },
  { ar:'شرفتوا',         tr:'sharraftu',        en:'you have honoured (us/me)', cat:'gifts' },
  // farewell
  { ar:'الله يسلّمك',    tr:'alla ysallmak',    en:'may God keep you safe (farewell)', cat:'farewell' },
  { ar:'يسلمو إيدك',     tr:'yislamo eedak',    en:'bless your hands (host farewell)', cat:'farewell' },
  { ar:'مع السلامة',      tr:'ma3 el-salaame',  en:'goodbye (with peace)',     cat:'farewell' },
  { ar:'رح نرجع',        tr:'ra7 nirja3',       en:'we will come back',        cat:'farewell' },
  { ar:'سلّملي عليهم',   tr:'sallimlii 3alayhon', en:'give them my regards',  cat:'farewell' },
  { ar:'زورونا كمان',    tr:'zooroona kamaan',  en:'visit us again',           cat:'farewell' },
  { ar:'تصبحوا على خير',  tr:'tiSba7oo 3a kheir', en:'goodnight (to a group)', cat:'farewell' },
  { ar:'ما تأخروا',       tr:'maa ti2akhruu',   en:'don\'t be strangers',      cat:'farewell' },
];

const ZWR_DRILLS = [
  { q:'What does "tafaDDal" mean?', opts:['welcome/come in','goodbye','eat please','visit'], ans:0 },
  { q:'"Nawwartoona" means:', opts:['you lit up our home','you honoured us','welcome','come in'], ans:0 },
  { q:'How do you say "a visit"?', opts:['ziyaara','hadiyye','karam','baytkun'], ans:0 },
  { q:'"Ma3 el-salaame" means:', opts:['goodbye','goodnight','stay safe','come again'], ans:0 },
  { q:'"Shu baddak tishrab?" means:', opts:['what do you want to drink?','would you like to eat?','how are you?','please sit'], ans:0 },
  { q:'How do you say "gift"?', opts:['hadiyye','ziyaara','karam','3aafye'], ans:0 },
  { q:'"Alla ykhalleeq" means:', opts:['may God keep you','may God give health','bless your hands','with peace'], ans:0 },
  { q:'"Eedak mbaarke" means:', opts:['blessed are your hands','your food is good','you honoured us','thank you'], ans:0 },
  { q:'What is "karam"?', opts:['generosity','gift','visit','farewell'], ans:0 },
  { q:'"Itfaddal kol" means:', opts:['please eat','welcome','come in','sit down'], ans:0 },
  { q:'"Alla y3Tiik el-3aafye" means:', opts:['may God give you health','goodbye','welcome','your hands are blessed'], ans:0 },
  { q:'"Zooroona kamaan" means:', opts:['visit us again','come in','goodbye','stay safe'], ans:0 },
  { q:'How do you say "generosity"?', opts:['karam','hadiyye','ziyaara','tafaDDal'], ans:0 },
  { q:'"3ala raa7tak" means:', opts:['make yourself comfortable','thank you','goodbye','welcome'], ans:0 },
  { q:'"Maa ti2akhruu" means:', opts:["don't be strangers",'welcome','come back','eat please'], ans:0 },
];

const ZWR_TIPS = [
  { title:'The Art of "Tafaddal"', body:'"TafaDDal" (تفضّل) is the Lebanese hospitality command — it means "please, come in / help yourself / go ahead." Used for welcoming guests, offering food, inviting someone to pass. The feminine form is "tafaDDali." You\'ll hear it constantly.' },
  { title:'Nawwartoona vs Sharraftoona', body:'Both express gratitude for a visit. "Nawwartoona" (نوّرتونا) = you have lit up our home — warmer, more poetic. "Sharraftoona" (شرّفتونا) = you have honoured us — more formal. Use nawwartoona with friends and family.' },
  { title:'Food Compliments', body:'"Eedak mbaarke" (إيدك مباركة — blessed are your hands) is the highest compliment for a cook. Also: "alla y3Tiik el-3aafye" (may God give you health). These are automatic when eating at someone\'s home.' },
  { title:'The "Baytkun" Reflex', body:'Lebanese hosts immediately say "baytkun" (بيتكم — it\'s your home) when guests arrive or compliment their house. It\'s reflex hospitality. The guest replies "tikram" (تكرم — may you be honoured).' },
  { title:'Gift Etiquette', body:'"Maa fi daa3i" (ما في داعي — there was no need) is what hosts say when guests bring gifts — even if they\'re pleased. Always bring something. Sweets (ma3moul, baqlawa) or fruit are classic. Never arrive empty-handed.' },
  { title:'Farewells', body:'"Alla ysallmak" (الله يسلّمك) and "ma3 el-salaame" are the standard farewells. Hosts often say "yislamo eedak" to thank you for coming. "Maa ti2akhruu" (ما تأخروا — don\'t be strangers / don\'t delay [coming back]) is a warm send-off.' },
];
