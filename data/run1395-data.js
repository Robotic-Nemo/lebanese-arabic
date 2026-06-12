// R1395 — NEW FEATURE: Lebanese Phoenician Heritage & Ancient Identity (fnq)
const FNQ_WORDS = [
  {ar:'فينيقي',tr:'fini2i',en:'Phoenician'},
  {ar:'الفينيقيون',tr:'el-fini2iyyin',en:'the Phoenicians'},
  {ar:'جبيل',tr:'jbeil',en:'Byblos (ancient city)'},
  {ar:'صور',tr:'sour',en:'Tyre (ancient city)'},
  {ar:'صيدا',tr:'saida',en:'Sidon (ancient city)'},
  {ar:'الأبجدية',tr:'el-abjadiyye',en:'the alphabet'},
  {ar:'الملاحة',tr:'el-mala7a',en:'seafaring / navigation'},
  {ar:'أرجوان',tr:'arjuwan',en:'Tyrian purple (dye)'},
  {ar:'بحار',tr:'ba77ar',en:'sailor / seafarer'},
  {ar:'تجارة',tr:'tijare',en:'trade / commerce'},
  {ar:'مستعمرة',tr:'musta3mara',en:'colony / settlement'},
  {ar:'أسطول',tr:'ustul',en:'fleet (of ships)'},
  {ar:'إيل',tr:'il',en:'El (supreme Canaanite god)'},
  {ar:'قرطاج',tr:'2arta2',en:'Carthage'},
  {ar:'آثار',tr:'atar',en:'ruins / artifacts'},
  {ar:'حضارة',tr:'7adara',en:'civilization'},
  {ar:'فخر فينيقي',tr:'fakhr fini2i',en:'Phoenician pride'},
  {ar:'الأبراج',tr:'el-abraj',en:'the towers (fortifications)'},
  {ar:'زجاج',tr:'zjej',en:'glass (Phoenician invention)'},
  {ar:'أصول',tr:'usul',en:'origins / roots'}
];

const FNQ_DRILLS = [
  {q:'The ancient Phoenician city known today as Byblos is called...?',opts:['صيدا (Saida)','جبيل (Jbeil)','صور (Sour)','قرطاج (2arta2)'],a:1},
  {q:'"El-abjadiyye" (الأبجدية) refers to...?',opts:['the sea route','the alphabet','the fleet','the purple dye'],a:1},
  {q:'Tyrian purple "arjuwan" (أرجوان) was famous because...?',opts:['it was cheap and common','it was a precious dye worth more than gold','it was used for writing','it was a food ingredient'],a:1},
  {q:'"Ba77ar" (بحار) in Phoenician context means...?',opts:['a merchant on land','a temple priest','a sailor or seafarer','a king'],a:2},
  {q:'Carthage ("2arta2") was a famous Phoenician...?',opts:['religious site','alphabet','colony in North Africa','warship'],a:0},
  {q:'"7adara" (حضارة) means...?',opts:['ruins','civilization','trade route','fleet'],a:1},
  {q:'The Phoenicians are credited with inventing practical...?',opts:['pottery','glass and the alphabet','iron weapons','pyramids'],a:1},
  {q:'"Usul" (أصول) — Lebanese often invoke this word to mean their...?',opts:['money and property','origins and roots','religious faith','political party'],a:1}
];

const FNQ_TIPS = [
  {title:'Lebanese Phoenician Identity',body:'Many Lebanese — particularly Maronite Christians and secular nationalists — identify strongly with Phoenician ancestry rather than Arab identity. The phrase "ana fini2i" (I am Phoenician) is a proud declaration of pre-Arab roots. This identity became politically charged during the Lebanese Civil War, when Phoenicianism was associated with Lebanese distinctiveness. Today, "el-fakhr el-fini2i" (Phoenician pride) is a common cultural touchstone in Lebanese literature, art, and branding.'},
  {title:'The Alphabet Gift to the World',body:'The Phoenician alphabet — "el-abjadiyye" — is one of the most significant gifts to human civilization. Developed around 1050 BCE, it was the first widely used phonetic alphabet with just 22 consonants, no vowels. It gave rise to Greek, Latin, Arabic, Hebrew, and virtually every modern alphabet. When Lebanese say "el-abjadiyye menna" (the alphabet is from us), they mean it literally. Byblos (Jbeil) is considered the birthplace of this writing system.'},
  {title:'Byblos, Tyre & Sidon',body:'Lebanon\'s coast is dotted with ancient Phoenician cities. Jbeil (Byblos) is one of the oldest continuously inhabited cities on earth, with ruins dating back 7,000 years — and still an active tourist town. Sour (Tyre) was so powerful it resisted Alexander the Great for seven months. Saida (Sidon) was known for glass-making and purple dye. Walking these old souks, Lebanese feel a direct line to the ancient world — "min hon el-7adara bida" (civilization started here).'},
  {title:'Tyrian Purple & Sea Trade',body:'Phoenician "arjuwan" (Tyrian purple) was extracted from sea snails (murex) and was so rare it became the color of royalty across the ancient world — Roman emperors wore it, Egyptian pharaohs traded for it. The Phoenicians were master seafarers ("ba77arin") who established colonies across the Mediterranean from Carthage to Spain. Modern Lebanese still feel this maritime heritage deeply: the sea is part of identity, and "el-ba77ar el-fini2i" (the Phoenician sailor) is a romantic archetype in Lebanese culture.'}
];
