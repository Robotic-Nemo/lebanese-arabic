// R699 — NEW FEATURE: Lebanese Cinema & TV (cntv)
const CNTV_CATS = [
  { id:'cinema',   label:'🎬 Cinema' },
  { id:'tv',       label:'📺 TV & Media' },
  { id:'drama',    label:'🎭 Drama & Comedy' },
  { id:'phrases',  label:'💬 Phrases' },
];

const CNTV_WORDS = [
  // cinema
  { ar:'سينما',        tr:'sinema',          en:'cinema/movie theater',   cat:'cinema' },
  { ar:'فيلم',         tr:'film',            en:'film/movie',             cat:'cinema' },
  { ar:'ممثل',         tr:'mumaththel',      en:'actor (m)',              cat:'cinema' },
  { ar:'ممثلة',        tr:'mumaththele',     en:'actress (f)',            cat:'cinema' },
  { ar:'مخرج',         tr:'mukhrij',         en:'director',               cat:'cinema' },
  { ar:'بطولة',        tr:'buTuule',         en:'lead role/starring',     cat:'cinema' },
  { ar:'تذكرة',        tr:'tazkaré',         en:'ticket',                 cat:'cinema' },
  { ar:'شاشة',         tr:'shaashe',         en:'screen',                 cat:'cinema' },
  // tv & media
  { ar:'تلفزيون',      tr:'tilfizyon',       en:'television',             cat:'tv' },
  { ar:'مسلسل',        tr:'mosalssal',       en:'TV series/soap opera',   cat:'tv' },
  { ar:'برنامج',       tr:'barnaamej',       en:'programme/show',         cat:'tv' },
  { ar:'خبر',          tr:'khabar',          en:'news item',              cat:'tv' },
  { ar:'نشرة أخبار',   tr:'nashré akhbaar',  en:'news bulletin',          cat:'tv' },
  { ar:'قناة',         tr:'2anaat',          en:'channel',                cat:'tv' },
  { ar:'إعلان',        tr:'i3laan',          en:'advertisement',          cat:'tv' },
  // drama & comedy
  { ar:'مسرح',         tr:'masra7',          en:'theatre',                cat:'drama' },
  { ar:'مسرحية',       tr:'masra7iyye',      en:'play/theatrical piece',  cat:'drama' },
  { ar:'كوميديا',      tr:'comedya',         en:'comedy',                 cat:'drama' },
  { ar:'دراما',        tr:'draama',          en:'drama',                  cat:'drama' },
  { ar:'حلقة',         tr:'7al2a',           en:'episode',                cat:'drama' },
  { ar:'موسم',         tr:'mawsem',          en:'season',                 cat:'drama' },
  { ar:'بطل',          tr:'baTal',           en:'hero/protagonist',       cat:'drama' },
  // phrases
  { ar:'شو عم تشوف؟',    tr:'shu 3am tshouf?',  en:'what are you watching?', cat:'phrases' },
  { ar:'شو في عالتلفزيون؟', tr:'shu fii 3a l-tilfizyon?', en:'what\'s on TV?', cat:'phrases' },
  { ar:'هالمسلسل كتير منيح', tr:'hal-mosalssal kteer mnii7', en:'this series is very good', cat:'phrases' },
  { ar:'بدي شوف فيلم',    tr:'biddi shouf film',  en:'I want to watch a film',  cat:'phrases' },
  { ar:'مين الممثل؟',     tr:'miin el-mumaththel?', en:'who is the actor?',     cat:'phrases' },
  { ar:'الحلقة الجاي',    tr:'el-7al2a el-jaay',  en:'the next episode',        cat:'phrases' },
];

const CNTV_DRILLS = [
  { q:'How do you say "TV series"?', opts:['mosalssal','barnaamej','film','draama'], ans:0 },
  { q:'"Sinema" means:', opts:['cinema/movie theater','television','theatre','screen'], ans:0 },
  { q:'What is "mukhrij"?', opts:['director','actor','actress','producer'], ans:0 },
  { q:'"7al2a" means:', opts:['episode','season','series','channel'], ans:0 },
  { q:'How do you say "channel"?', opts:['2anaat','tilfizyon','shaashe','barnaamej'], ans:0 },
  { q:'"Masra7iyye" means:', opts:['play/theatrical piece','comedy','drama','series'], ans:0 },
  { q:'What is "mawsem"?', opts:['season','episode','series','show'], ans:0 },
  { q:'"Nashré akhbaar" means:', opts:['news bulletin','news item','programme','channel'], ans:0 },
  { q:'How do you say "ticket"?', opts:['tazkaré','shaashe','i3laan','film'], ans:0 },
  { q:'"Comedya" means:', opts:['comedy','drama','thriller','horror'], ans:0 },
  { q:'What is "baTal"?', opts:['hero/protagonist','actor','director','star'], ans:0 },
  { q:'"I3laan" means:', opts:['advertisement','announcement','news','show'], ans:0 },
  { q:'How do you say "what are you watching"?', opts:['shu 3am tshouf?','shu fii 3a l-tilfizyon?','biddi shouf film','miin el-mumaththel?'], ans:0 },
  { q:'"Butuule" in cinema context means:', opts:['lead role/starring','championship','heroism','award'], ans:0 },
  { q:'How do you say "the next episode"?', opts:['el-7al2a el-jaay','hal-mosalssal kteer mnii7','biddi shouf film','miin el-mumaththel?'], ans:0 },
];

const CNTV_TIPS = [
  { title:'Lebanese TV dramas — Ramadan specials', body:'"Mosalssal" (مسلسل) = TV series. Lebanese and Syrian productions dominate Arab TV. Ramadan is prime time — every family watches evening mosaalssal together. Lebanese shows are known for mixing dialect with humor and social commentary. LBC (Lebanese Broadcasting Corporation) and MTV Lebanon are the major channels ("2anaat").' },
  { title:'Lebanese cinema history', body:'Lebanon had a thriving film industry in the 1960s-70s ("sinema") before the civil war. Beirut was called the "Hollywood of the Arab world." Post-war, Lebanese cinema revived internationally: Ziad Doueiri ("The Attack"), Nadine Labaki ("Caramel", "Where Do We Go Now?", "Capernaum" — Oscar nominated). Lebanese filmmakers now win at Cannes regularly.' },
  { title:'Nadine Labaki — icon of Lebanese film', body:'Nadine Labaki is Lebanon\'s most internationally acclaimed director-actress. "Capernaum" (2018) was nominated for the Academy Award for Best Foreign Film. Her films portray Lebanese society with rawness and warmth. She is also known as an actress in Lebanese productions. "Inta 3omri" and "Caramel" made her a household name.' },
  { title:'Theatre in Lebanon', body:'"Masra7" (مسرح) = theatre — Beirut has a thriving theatre scene. The Beirut International Theatre Festival brings global productions. Lebanese political satire through "masra7iyye" (plays) is sharp and fearless. Ghassan Salhab and Lina Abyad are major theatre figures. The Monot Theatre and Monnot are legendary venues.' },
  { title:'News & media culture', body:'"Nashré akhbaar" (news bulletin) — Lebanese media is famously politically plural: Al Manar, LBC, MTV, Al Jadeed, Future TV — each aligned with different political groups. "Khabar" = news item. Lebanese newsreaders are known for dramatic delivery. "Shu fii 3a l-tilfizyon?" (what\'s on TV?) is the classic evening question.' },
  { title:'Watching & talking about shows', body:'"Shu 3am tshouf?" = what are you watching? "Hal-mosalssal kteer mnii7" = this series is very good. "El-7al2a el-jaay" = the next episode (always anticipated). "Biddi shouf film" = I want to watch a film. Lebanese people debate shows passionately — agreeing that something is "mnii7" (good) or "mish mnii7" (not good) is a social ritual.' },
];
