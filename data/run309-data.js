// Run #309 — Lebanese Technology & Social Media Coach (tch)
// Phones, internet, apps, WhatsApp culture, social media, Lebanese digital life — 40 items, MCQ drill, 5 tips

const TCH_WORDS = [
  // devices & hardware
  { tr: 'haatef',          ar: 'هاتف',           en: 'phone (formal)',                    cat: 'devices' },
  { tr: 'mobile / mobail', ar: 'موبايل',          en: 'mobile phone (everyday word)',      cat: 'devices' },
  { tr: 'laptop',          ar: 'لابتوب',          en: 'laptop (borrowed word)',            cat: 'devices' },
  { tr: 'taabit',          ar: 'تابلت',           en: 'tablet',                           cat: 'devices' },
  { tr: 'shaashe',         ar: 'شاشة',            en: 'screen / monitor',                  cat: 'devices' },
  { tr: 'battariyye',      ar: 'بطارية',          en: 'battery',                           cat: 'devices' },
  { tr: 'shaahir',         ar: 'شاحر',            en: 'charger',                           cat: 'devices' },
  { tr: 'sama3at',         ar: 'سماعات',          en: 'headphones / earphones',           cat: 'devices' },
  // internet & connectivity
  { tr: 'internet',        ar: 'إنترنت',          en: 'internet',                          cat: 'internet' },
  { tr: 'waifi / wifi',    ar: 'وايفاي',          en: 'WiFi',                              cat: 'internet' },
  { tr: 'signal / ishara', ar: 'سيغنال / إشارة',  en: 'signal / network coverage',        cat: 'internet' },
  { tr: 'net maHjuub',     ar: 'نت محجوب',        en: 'internet blocked/censored',         cat: 'internet' },
  { tr: 'download / nazzil', ar: 'نزّل',          en: 'download (nazzil = put down)',      cat: 'internet' },
  { tr: 'upload / 7ammil', ar: 'حمّل',            en: 'upload (7ammil = load up)',         cat: 'internet' },
  { tr: 'shaarik',         ar: 'شارك',            en: 'share (shaarik = participate)',     cat: 'internet' },
  { tr: 'link / raabT',    ar: 'لينك / رابط',     en: 'link',                              cat: 'internet' },
  // apps & social media
  { tr: 'WhatsApp / waatsaab', ar: 'واتساب',      en: 'WhatsApp (the main app in Lebanon)', cat: 'apps' },
  { tr: 'Instagram / insta',  ar: 'إنستغرام',     en: 'Instagram',                         cat: 'apps' },
  { tr: 'TikTok / tiik-tok',  ar: 'تيك توك',      en: 'TikTok',                            cat: 'apps' },
  { tr: 'YouTube / yuutyuub',  ar: 'يوتيوب',      en: 'YouTube',                           cat: 'apps' },
  { tr: 'story / storia',  ar: 'ستوري',           en: 'story (Instagram/WhatsApp)',        cat: 'apps' },
  { tr: 'post / bost',     ar: 'بوست',            en: 'post (social media)',               cat: 'apps' },
  { tr: 'reel / riil',     ar: 'ريل',             en: 'reel (short video)',                cat: 'apps' },
  { tr: 'live / laiv',     ar: 'لايف',            en: 'live stream',                       cat: 'apps' },
  // digital actions
  { tr: 'laik / 3jabu',    ar: 'عجبو / لايك',     en: 'like (3jabu = it pleased him)',     cat: 'actions' },
  { tr: 'comment / 3alla2', ar: 'علّق',            en: 'comment (3alla2 = hung/commented)', cat: 'actions' },
  { tr: 'follow / taba3',  ar: 'تبع',             en: 'follow (taba3 = followed)',         cat: 'actions' },
  { tr: 'block / Hajab',   ar: 'حجب',             en: 'block (Hajab = blocked)',           cat: 'actions' },
  { tr: 'screenshot / sekrin', ar: 'سكرين',       en: 'screenshot',                        cat: 'actions' },
  { tr: 'shaaf l-story',   ar: 'شاف الستوري',     en: 'viewed the story',                  cat: 'actions' },
  // Lebanese digital culture
  { tr: 'w23iit 3al-phone', ar: 'وقعت عالفون',   en: 'fell on the phone (addicted/glued)', cat: 'culture' },
  { tr: 'shayfo online',   ar: 'شايفو أونلاين',   en: 'I can see he\'s online',            cat: 'culture' },
  { tr: '2ara l-message w ma redd', ar: 'قرأ الرسالة وما رد', en: 'read the message and didn\'t reply', cat: 'culture' },
  { tr: 'check 3alei',     ar: 'تشيك عليّ',       en: 'check on me (WhatsApp me)',         cat: 'culture' },
  { tr: 'yalla ta3a 3al-group', ar: 'يلا تعا عالغروب', en: 'come to the group (WhatsApp group)', cat: 'culture' },
  { tr: 'badhna nakuun viral', ar: 'بدنا نكون فيرال', en: 'we want to go viral',          cat: 'culture' },
  { tr: 'content creator', ar: 'كونتنت كرييتور',  en: 'content creator',                   cat: 'culture' },
  { tr: 'influencer / mwa2thir', ar: 'مؤثر',      en: 'influencer (mwa2thir = influential)', cat: 'culture' },
  { tr: 'khabar viral',    ar: 'خبر فيرال',       en: 'viral news / trending topic',       cat: 'culture' },
  { tr: 'net mbaaTTal',    ar: 'نت مبطّل',        en: 'internet is down/not working',      cat: 'culture' },
];

const TCH_DRILLS = [
  {
    q: 'What do Lebanese people call a mobile phone in everyday speech?',
    opts: ['haatef', 'mobile / mobail', 'shaashe', 'taabit'],
    correct: 1,
    note: '"mobile" or "mobail" = everyday Lebanese word for mobile phone (موبايل). "Haatef" (هاتف) is the formal Arabic word, used in written contexts or news. In daily conversation: "wayn mobileik?" (where\'s your phone?), "baaddu mobile jedid" (he wants a new phone). Lebanese phone culture: smartphones are ubiquitous and WhatsApp is the primary communication channel — more important than calls or SMS. "3aTini l-mobail" = give me the phone. Battery and charging: "battariyyet l-mobile wlaat" = the phone battery died. "lazim sha7nit" = I need to charge it.'
  },
  {
    q: 'What does "nazzil" mean in Lebanese digital vocabulary?',
    opts: ['upload a file', 'download (put down/install)', 'share a post', 'block someone'],
    correct: 1,
    note: '"nazzil" = download / install (نزّل — from nazzala = to put down/descend). "nazzilt t-tatbiiq" = I downloaded the app. "nazzil l-update" = download the update. Opposite: "7ammil" (upload — from Hamala = to carry/load). Lebanese app culture: WhatsApp is dominant — most Lebanese use it for calls, messages, groups, and sharing media. "nazzilna WhatsApp 3a l-laptop?" = did you install WhatsApp on the laptop? "nazzil l-video" = download the video. Key tech verbs: nazzil (download), 7ammil (upload/load), shaarik (share), 7azzam (invite), dafa3 (pay/push notification).'
  },
  {
    q: 'How do you say "I can see he\'s online" in Lebanese Arabic?',
    opts: ['shaayfo online', 'raa7 3al-net', 'battariyyto khalsat', 'net mbaaTTal'],
    correct: 0,
    note: '"shaayfo online" = I can see he\'s online (شايفو أونلاين — shaayf = seeing, -o = him). Lebanese WhatsApp culture: "online" status is heavily monitored — seeing someone online but not replying creates social tension. "la2a online w ma redd" = found him online and didn\'t reply. "2ara l-message w ma redd" = read the message and didn\'t reply (double-blue-tick culture). Lebanese digital etiquette: going online without replying is considered rude between close contacts. "ma rah radd 7atta ma ysha7n" = won\'t reply until he charges (phone excuse).'
  },
  {
    q: 'What does "2ara l-message w ma redd" mean?',
    opts: ['the message was deleted', 'read the message and didn\'t reply', 'message not delivered', 'the message was in a group'],
    correct: 1,
    note: '"2ara l-message w ma redd" = read the message and didn\'t reply (قرأ الرسالة وما رد — 2ara = read, ma redd = didn\'t reply). The Lebanese "read and left on read" phenomenon. WhatsApp double blue ticks = confirmation of reading. Social implications: reading without replying = either busy, upset, or ignoring intentionally. This is a significant social signal in Lebanese culture. "la2a shaayfo 2ara w ma redd" = found that he read and didn\'t reply. "shu hal tarbiye?" = what kind of manners is this? Reply strategies: "sorry kint meshghul" (sorry I was busy), "ma shift l-message" (I didn\'t see the message — lie).'
  },
  {
    q: 'Which app is most central to Lebanese daily communication?',
    opts: ['Instagram', 'WhatsApp / waatsaab', 'TikTok', 'YouTube'],
    correct: 1,
    note: '"WhatsApp / waatsaab" (واتساب) = the primary Lebanese communication platform. Lebanon has one of the highest WhatsApp penetration rates globally. Uses: messages, voice calls (to avoid expensive carrier rates), family groups, work groups, voice notes. "WhatsApp group" culture: every Lebanese family has a WhatsApp family group that is both essential and chaotic. "mshayyin group" = kicked out of the group (dramatic Lebanese punishment). "3aTni l-group" = add me to the group. "kassar l-group" = left/dissolved the group. Voice notes: Lebanese people send voice notes of 5-10 minutes regularly — more convenient than typing in Arabic.'
  },
  {
    q: 'What does "w23iit 3al-phone" literally describe?',
    opts: ['the phone fell and broke', 'phone fell in water', 'addicted to/glued to the phone', 'calling someone repeatedly'],
    correct: 2,
    note: '"w23iit 3al-phone" = fell on the phone (وقعت عالفون — w23a = to fall, 3al = on the). Figuratively: addicted to / glued to the phone, obsessively scrolling. Lebanese phone humor: "w23it 3al-TikTok" = fell on TikTok (lost hours scrolling). "w23a 3al-phone b-noss l-7ake" = glued to the phone mid-conversation. Related phrases: "HaTT l-phone" = put down the phone. "rakkiz ma3i" = focus on me (not your phone). Lebanese screen-time culture: very high social media usage, especially among youth. "w23it 3a-stories" = fell into the stories (doom-scrolled Instagram stories).'
  },
  {
    q: 'What does "shaarik" mean in Lebanese digital context?',
    opts: ['follow an account', 'comment on a post', 'share (content, a link)', 'report a post'],
    correct: 2,
    note: '"shaarik" = share (شارك — from shaarka = to participate/share). "shaarik l-post" = share the post. "shaarikha" = share it (fem). Lebanese viral culture: sharing is key to content spreading — "3melo share" (they shared it) = it spread. "viral 3al-WhatsApp" = viral on WhatsApp groups. Lebanese media consumption pattern: news and viral content spreads primarily through WhatsApp group chains, then Instagram stories. "inshiril" = it went viral (informal). "khabbar l-kuul" = spread the word to everyone. Famous Lebanese WhatsApp behavior: forwarding news, jokes, prayers, and voice notes to every group simultaneously.'
  },
  {
    q: 'What does "net mbaaTTal" mean?',
    opts: ['the internet is very fast', 'the internet is down / not working', 'no WiFi available', 'internet is expensive'],
    correct: 1,
    note: '"net mbaaTTal" = internet is down / not working (نت مبطّل — mbaaTTal = disabled/not working, from baTTal = to stop). Lebanese internet reality: power cuts (ankaab l-kahraba) and generator-only power frequently disrupt internet. "ma fi kahraba, l-internet mbaaTTal" = no electricity so internet is down. "waifi l-jeeran betshtaghil?" = does the neighbors\' WiFi work? Lebanese coping strategies: mobile data as backup, café WiFi, generator schedules. "signal 3ala l-internet mish mni7" = internet signal is not good. Lebanon internet context: among the most expensive and slowest in the region due to infrastructure/monopoly issues.'
  },
  {
    q: 'How do you say "follow" someone on social media in Lebanese Arabic?',
    opts: ['laik', 'taba3', 'shaarik', '3alla2'],
    correct: 1,
    note: '"taba3" = follow / followed (تبع — from tabi3 = to follow). "taba3to 3al-Instagram" = I followed him on Instagram. "tba3ni" = follow me (back). Lebanese Instagram culture: follower counts matter — "kam follower 3indo?" = how many followers does he have? "unfollow" = "shaal follow" (removed follow). "taba3ak" = he followed you. Reverse: "Hajab" = block. Lebanese content creator scene: growing rapidly, especially in food, comedy, and political commentary. Popular creators seen as mini-celebrities. "content creator lebnaani" = Lebanese content creator (many are internationally known for their humor and style).'
  },
  {
    q: 'What does "check 3alei" mean in Lebanese digital speak?',
    opts: ['check my profile online', 'check on me / WhatsApp me', 'like my photo', 'send me the link'],
    correct: 1,
    note: '"check 3alei" = check on me / WhatsApp me / message me (تشيك عليّ — from English "check" + Arabic 3alei = on me). Lebanese hybrid phrase: mixing English "check" with Arabic. Used to say "message me to see how I\'m doing" or "ping me when you arrive." Similar phrases: "ping me" (same meaning), "3aTini khaber" (give me news = let me know). Lebanese texting culture: highly informal, mixes Arabic + French + English freely. "check 3alei la 2ijouz" = message me later. "shu, ma check 3alei?" = what, you didn\'t check on me? (mild reproach). Voice notes: often sent instead of text — 30 seconds of spoken Arabic is faster than typing.'
  },
];

const TCH_TIPS = [
  { title: 'WhatsApp dominates Lebanese communication', body: 'WhatsApp ("waatsaab") is the central nervous system of Lebanese communication. Every family has a family group, every friend group has a WhatsApp group, every business uses it. Key phrases: "3aTini 3al-waatsaab" = message me on WhatsApp; "adir t3aTini voice note?" = can you send a voice note?; "check 3alei" = message me to check in; "yalla ta3a 3al-group" = come to the group chat. Voice notes (30-second snippets) are preferred over typing for speed and expressiveness. The double blue ticks causing social anxiety is universal — "2ara w ma redd" (read and didn\'t reply) can spark real conflict.' },
  { title: 'Lebanese internet slang — mixing three languages', body: 'Lebanese digital language is a trilingual mix. Arabic base: "nazzil" (download), "7ammil" (upload), "shaarik" (share), "taba3" (follow), "Hajab" (block). French borrowed: "likke" (like), "posté" (posted). English borrowed: "screenshot", "story", "reel", "live", "post", "content creator". Hybrid phrases: "w23iit 3al-TikTok" (got glued to TikTok), "check 3alei" (message me). Lebanese youth online: highly creative with memes, humor channels, political satire. Lebanese accent and expressions spread virally on TikTok — the dialect is recognizable globally.' },
  { title: 'Lebanese internet challenges and reality', body: 'Lebanon has some of the most expensive and unreliable internet in the region due to a state monopoly (Ogero) and infrastructure damage. Key phrases: "net mbaaTTal" (internet down), "signal Da3iif" (weak signal), "kahraba 2ije?" (did electricity come?). Power cuts mean internet drops with them — generator power often doesn\'t include router/fiber. Workarounds: mobile data (especially 4G from Touch or Alfa), café WiFi, generator subscriptions that include internet. "3aTini l-password mta3 l-waifi" = give me the WiFi password. Lebanon\'s digital scene is vibrant despite infrastructure issues — creators find ways.' },
  { title: 'Social media culture and online reputation', body: 'Lebanese social media culture is intensely social and reputation-conscious. Instagram: "followers" and "aesthetic" matter — food photography, fashion, travel. TikTok: comedy, dialect content, Lebanese abroad nostalgia. YouTube: food channels, political commentary, diaspora vlogs. Key concepts: "viral 3al-WhatsApp" (viral on WhatsApp groups) = true mass reach. "influencer / mwa2thir" = influencer (growing sector). "badhna nakuun viral" = we want to go viral. Lebanese content often goes international — the dialect is beloved in the Arab world for its expressiveness and humor. "khabbar l-kuul" = spread the word (real virality).' },
  { title: 'Essential tech vocabulary for daily Lebanese life', body: 'Core tech phrases you\'ll hear daily: "mobile faaD" = storage full (faaD = overflowing); "battariyye khilsat" = battery died; "sha7in" = charging/charger; "download l-app" = download the app; "shaashet l-mobile inkasaret" = phone screen cracked (very common topic). Phones and plans: "khaTT" = phone line/SIM, "3aTini raqmak" = give me your number, "missed call = masdruum" (missed). Lebanese phone behavior: answering calls in movies, restaurants, funerals is normalized — "lahza" (one moment) while still talking. "hallik 3al-khaTT" = stay on the line.' },
];

const TCH_ABOUT = 'Master Lebanese Arabic for the digital age — smartphones, WhatsApp culture, social media vocabulary, internet slang, and the unique Lebanese online world. Essential for understanding modern Lebanese life, connecting with Lebanese contacts, and navigating the country\'s vibrant digital culture.';
