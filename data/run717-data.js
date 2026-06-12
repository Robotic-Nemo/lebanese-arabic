// R717 — NEW FEATURE: Lebanese News & Media (nwsp)
const NWSP_CATS = [
  { id:'press',   label:'📰 Press & Print' },
  { id:'tv',      label:'📺 TV & Radio' },
  { id:'social',  label:'📱 Social Media' },
  { id:'phrases', label:'💬 Phrases' },
];

const NWSP_WORDS = [
  // press & print
  { ar:'جريدة',        tr:'jariide',          en:'newspaper',             cat:'press' },
  { ar:'مجلة',         tr:'majalle',          en:'magazine',              cat:'press' },
  { ar:'خبر',          tr:'khabar',           en:'news item/story',       cat:'press' },
  { ar:'صحفي',         tr:'Sa7afi',           en:'journalist',            cat:'press' },
  { ar:'مقالة',        tr:'ma2aale',          en:'article',               cat:'press' },
  { ar:'رأي',          tr:'ra2y',             en:'opinion',               cat:'press' },
  { ar:'تحقيق',        tr:'ta7kii2',          en:'investigation/report',  cat:'press' },
  { ar:'عنوان',        tr:'3inwaan',          en:'headline/title',        cat:'press' },
  // tv & radio
  { ar:'تلفزيون',      tr:'televezyon',       en:'television',            cat:'tv' },
  { ar:'راديو',        tr:'raadyo',           en:'radio',                 cat:'tv' },
  { ar:'نشرة',         tr:'nashra',           en:'news bulletin',         cat:'tv' },
  { ar:'مذيع',         tr:'muzayye3',         en:'presenter/anchor',      cat:'tv' },
  { ar:'مقابلة',       tr:'mu2aabale',        en:'interview',             cat:'tv' },
  { ar:'برنامج',       tr:'barnaame2',        en:'program/show',          cat:'tv' },
  { ar:'قناة',         tr:'2anaat',           en:'channel',               cat:'tv' },
  // social media
  { ar:'وسائل التواصل', tr:'wasaa2il el-tawaaSSol', en:'social media',   cat:'social' },
  { ar:'منشور',        tr:'manshooor',        en:'post/publication',      cat:'social' },
  { ar:'تعليق',        tr:'ta3lii2',          en:'comment',               cat:'social' },
  { ar:'مشاركة',       tr:'mushaarake',       en:'share/sharing',         cat:'social' },
  { ar:'متابع',        tr:'mutaabe3',         en:'follower',              cat:'social' },
  { ar:'تغريدة',       tr:'taghriide',        en:'tweet',                 cat:'social' },
  { ar:'بث مباشر',     tr:'bath mubaasher',   en:'live stream',           cat:'social' },
  // phrases
  { ar:'شفت الأخبار؟',         tr:'sheft el-akhbaar?',        en:'did you see the news?',       cat:'phrases' },
  { ar:'شو عم بصير؟',          tr:'shu 3am bSiir?',           en:'what\'s happening?',           cat:'phrases' },
  { ar:'فضائي',                tr:'faDaa2i',                  en:'satellite (TV)',               cat:'phrases' },
  { ar:'وكالة أنباء',          tr:'wikaalit anbaa2',          en:'news agency',                 cat:'phrases' },
  { ar:'حرية الصحافة',         tr:'7urriyyet el-Sa7aafe',     en:'press freedom',               cat:'phrases' },
  { ar:'الإعلام اللبناني',      tr:'el-i3laam el-libnaani',   en:'Lebanese media',              cat:'phrases' },
];

const NWSP_DRILLS = [
  { q:'How do you say "newspaper"?', opts:['jariide','majalle','khabar','nashra'], ans:0 },
  { q:'"Khabar" means:', opts:['news item/story','opinion','headline','article'], ans:0 },
  { q:'What is "nashra" in Lebanese TV?', opts:['news bulletin','channel','program','interview'], ans:0 },
  { q:'"Sa7afi" means:', opts:['journalist','anchor','reporter','editor'], ans:0 },
  { q:'How do you say "magazine"?', opts:['majalle','jariide','ma2aale','ra2y'], ans:0 },
  { q:'"Muzayye3" means:', opts:['presenter/anchor','journalist','program','channel'], ans:0 },
  { q:'What is "ta3lii2"?', opts:['comment','post','share','follower'], ans:0 },
  { q:'"Manshooor" means:', opts:['post/publication','comment','share','tweet'], ans:0 },
  { q:'How do you say "channel"?', opts:['2anaat','barnaame2','nashra','televezyon'], ans:0 },
  { q:'"Mu2aabale" means:', opts:['interview','article','investigation','headline'], ans:0 },
  { q:'What is "mutaabe3"?', opts:['follower','poster','commenter','anchor'], ans:0 },
  { q:'"Bath mubaasher" means:', opts:['live stream','news bulletin','broadcast','recording'], ans:0 },
  { q:'How do you say "did you see the news"?', opts:['sheft el-akhbaar?','shu 3am bSiir?','shu fii?','shu Saayir?'], ans:0 },
  { q:'"3inwaan" means:', opts:['headline/title','article','opinion','story'], ans:0 },
  { q:'What is "ta7kii2" in journalism?', opts:['investigation/report','interview','comment','post'], ans:0 },
];

const NWSP_TIPS = [
  { title:'Lebanese media landscape', body:'"Jariide" (جريدة) = newspaper — Lebanon has a historically free and vibrant press, though increasingly constrained. Major papers: An-Nahar (النهار), As-Safir (السفير), L\'Orient Le Jour (French). "Majalle" = magazine. "Sa7afi" = journalist — Lebanon produces many of the Arab world\'s top journalists. "7urriyyit el-Sa7aafe" = press freedom — Lebanon ranks highest in MENA for press freedom.' },
  { title:'Television dominance', body:'"Televezyon" (تلفزيون) = TV — Lebanese TV is watched across the Arab world. LBC, Al-Jadeed (New TV), MTV Lebanon, Future TV, and Al-Manar are major channels. "Nashra" = news bulletin — 8pm news is a national ritual. "2anaat" = channel. "Muzayye3" = anchor — Lebanese anchors known for sharp style. Satellite ("faDaa2i") carries Lebanese channels worldwide.' },
  { title:'Radio culture', body:'"Raadyo" (راديو) = radio — Lebanese radio stations are influential: Radio Liban, Virgin Radio Lebanon, Sawt el-Ghad. "Barnaame2" = program. Lebanese radio mixes music, news, and call-in shows. "Mu2aabale" = interview — Lebanese political interviews are notoriously confrontational. Radio is the commuter\'s companion in Beirut traffic.' },
  { title:'Social media explosion', body:'"Wasaa2il el-tawaaSSol" = social media — Lebanon has one of the highest social media penetration rates in MENA. Instagram, Twitter/X, TikTok, and WhatsApp dominate. "Manshooor" = post. "Ta3lii2" = comment — Lebanese comment sections are legendary for political debate. "Bath mubaasher" = live stream — live protest coverage on Facebook is major.' },
  { title:'News consumption habits', body:'"Khabar" (خبر) = news item — Lebanese consume news obsessively due to constant political crises. "Sheft el-akhbaar?" = did you see the news? — standard conversation opener. "Shu 3am bSiir?" = what\'s happening? — constant question during crises. WhatsApp groups ("gruubaat") replace traditional media for breaking news. "3inwaan" = headline.' },
  { title:'Media ownership & politics', body:'"Wikaalit anbaa2" = news agency — NNA (National News Agency) is state wire. Lebanese media is mostly owned by political factions: LBC (Lebanese Forces), Future TV (Hariri), Al-Manar (Hezbollah), Al-Jadeed (independent). "Ra2y" = opinion — op-eds carry enormous weight. "Ta7kii2" = investigation — investigative journalism faces legal threats. "El-i3laam el-libnaani" = Lebanese media.' },
];
