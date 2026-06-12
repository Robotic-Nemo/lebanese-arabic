// R627 — NEW FEATURE: Lebanese Technology & Social Media (dij)

const DIJ_CATS = [
  { id: 'devices',  label: '📱 Devices & Apps' },
  { id: 'social',   label: '📸 Social Media' },
  { id: 'internet', label: '🌐 Internet & Calls' },
  { id: 'slang',    label: '🔥 Tech Slang' },
];

const DIJ_WORDS = [
  // Devices & Apps
  { id: 'dij01', cat: 'devices', ar: 'المحمول', tr: 'l-ma7mul', en: 'Mobile phone', note: '"ma7mul" = carried. Also "l-portable" (French). "Dayyaht l-ma7mul" = my phone died.' },
  { id: 'dij02', cat: 'devices', ar: 'شاحن', tr: 'shahin', en: 'Charger', note: '"ma3ak shahin?" = do you have a charger? Constant need in Lebanon during power cuts.' },
  { id: 'dij03', cat: 'devices', ar: 'الواي فاي', tr: 'l-wayfi', en: 'WiFi', note: '"shu l-wayfi?" = what\'s the WiFi? Lebanon\'s internet is notoriously slow and expensive.' },
  { id: 'dij04', cat: 'devices', ar: 'داونلود', tr: 'dawnlod', en: 'Download', note: '"3ammil dawnlod" = I\'m downloading. Lebanese freely use English tech words with Arabic morphology.' },
  { id: 'dij05', cat: 'devices', ar: 'أبليكيشن', tr: '2aplikeyshin', en: 'App / Application', note: 'Loanword from "application". "7ammil l-2aplikeyshin" = install the app.' },
  { id: 'dij06', cat: 'devices', ar: 'اللاب تاب', tr: 'l-lab tab', en: 'Laptop', note: 'Direct loanword. "l-lab tab msakkar" = the laptop is locked/closed.' },
  { id: 'dij07', cat: 'devices', ar: 'البطارية', tr: 'l-battariyye', en: 'Battery', note: '"l-battariyye 3am tkhallas" = the battery is almost done. Lebanese say this constantly.' },
  // Social Media
  { id: 'dij08', cat: 'social', ar: 'نشر', tr: 'nashar', en: 'Posted / published', note: '"nashar ktir shi" = he posted a lot. "ma tnshur hayda!" = don\'t post that!' },
  { id: 'dij09', cat: 'social', ar: 'ستوري', tr: 'stori', en: 'Story (Instagram)', note: 'Direct from Instagram Stories. "shft l-stori taba3o?" = did you see his story?' },
  { id: 'dij10', cat: 'social', ar: 'فولو', tr: 'folu', en: 'Follow', note: '"foluwni" = follow me. "folow back" = follow back. Lebanese influencer culture is huge.' },
  { id: 'dij11', cat: 'social', ar: 'لايك', tr: 'layk', en: 'Like', note: '"3ammaytlo layk" = I liked it. "ktir likes" = many likes. Core of Lebanese social currency.' },
  { id: 'dij12', cat: 'social', ar: 'شير', tr: 'shir', en: 'Share', note: '"shirha ma3i" = share it with me. "3ammil shir" = I shared it.' },
  { id: 'dij13', cat: 'social', ar: 'ريلز', tr: 'rilz', en: 'Reels (Instagram)', note: '"shft l-rilz taba3o?" = did you see his reels? Lebanese creators excel at short videos.' },
  { id: 'dij14', cat: 'social', ar: 'إنفلوانسر', tr: 'influansar', en: 'Influencer', note: 'Direct loanword. "hiye influansar" = she\'s an influencer. Lebanon has a massive influencer scene.' },
  // Internet & Calls
  { id: 'dij15', cat: 'internet', ar: 'واتساب', tr: 'watsap', en: 'WhatsApp', note: 'The primary communication tool in Lebanon. "wassip-ni" = WhatsApp me. More common than SMS.' },
  { id: 'dij16', cat: 'internet', ar: 'مكالمة', tr: 'mkalme', en: 'Phone call', note: '"3amallit-lo mkalme" = I called him. "jit mkalme" = I got a call.' },
  { id: 'dij17', cat: 'internet', ar: 'فيديو كول', tr: 'vidyo kol', en: 'Video call', note: '"n3ammil vidyo kol?" = shall we video call? How Lebanese diaspora stays connected.' },
  { id: 'dij18', cat: 'internet', ar: 'إنترنيت', tr: 'intarnit', en: 'Internet', note: '"l-intarnit mish shaghghal" = the internet isn\'t working. Daily Lebanese reality.' },
  { id: 'dij19', cat: 'internet', ar: 'داتا', tr: 'data', en: 'Mobile data', note: '"khlasat l-data" = the data ran out. Lebanese rely on data when ADSL fails.' },
  { id: 'dij20', cat: 'internet', ar: 'حوّل رقم', tr: '7awwil ra2am', en: 'Transfer/share a number', note: '"7awwil-li ra2am-o" = transfer me his number. Lebanese share contacts constantly.' },
  { id: 'dij21', cat: 'internet', ar: 'باقة', tr: 'ba2a', en: 'Data package / bundle', note: '"shu l-ba2a taba3tak?" = what\'s your plan? Mobile packages key issue in Lebanon.' },
  // Tech Slang
  { id: 'dij22', cat: 'slang', ar: 'بلوك', tr: 'blok', en: 'Blocked (on social media)', note: '"blakni" = he blocked me. "3ammilto blok" = I blocked him. Lebanese social drama.' },
  { id: 'dij23', cat: 'slang', ar: 'أونلاين', tr: '2onlayn', en: 'Online', note: '"huwwe 2onlayn" = he\'s online. "lesh ma btrudd w-inta 2onlayn?" = why aren\'t you replying when you\'re online?' },
  { id: 'dij24', cat: 'slang', ar: 'سين', tr: 'sin', en: 'Seen (message read, no reply)', note: '"3amallit-li sin" = he read and ignored me. Lebanese version of "left on read".' },
  { id: 'dij25', cat: 'slang', ar: 'غوستينغ', tr: 'ghosting', en: 'Ghosting', note: 'Direct loanword. "3ammayli ghosting" = he ghosted me. Lebanese use English loanwords for dating terms.' },
  { id: 'dij26', cat: 'slang', ar: 'سكرينشوت', tr: 'skrinshot', en: 'Screenshot', note: '"3ammaytlo skrinshot" = I screenshotted it. "7assa2tit skrinshot" = I got caught screenshotting.' },
  { id: 'dij27', cat: 'slang', ar: 'ستالك', tr: 'stalk', en: 'Stalking (social media)', note: '"3am bstalko 3a-instagram" = I\'m stalking him on Instagram. Universal Lebanese social habit.' },
  { id: 'dij28', cat: 'slang', ar: 'كراش', tr: 'krash', en: 'Crush (romantic interest)', note: '"fi 3andi krash" = I have a crush. "shu ismu krashak?" = what\'s your crush\'s name? Lebanese youth slang.' },
];

const DIJ_DRILLS = [
  { q: 'What does "wayfi" mean?', opts: ['Battery', 'WiFi', 'Data', 'Charger'], ans: 1, exp: '"wayfi" = WiFi. Lebanese pronunciation of "Wi-Fi". Constant topic due to Lebanon\'s poor internet infrastructure.' },
  { q: 'What is "3ammaytlo layk"?', opts: ['I called him', 'I blocked him', 'I liked it', 'I shared it'], ans: 2, exp: '"3ammaytlo layk" = I liked it. Using "layk" (like) with Lebanese verb morphology: 3ammit + lo (to him).' },
  { q: 'What does "nashar" mean?', opts: ['Downloaded', 'Posted/published', 'Charged', 'Followed'], ans: 1, exp: '"nashar" = posted/published. "nashar shi 3a-instagram" = he posted something on Instagram.' },
  { q: 'What is "sin" in Lebanese WhatsApp culture?', opts: ['A voice message', 'Message seen but not replied to', 'A missed call', 'Online status'], ans: 1, exp: '"sin" = the Arabic letter س which appears as WhatsApp\'s "seen" tick. Lebanese say "3amallit-li sin" = left me on read.' },
  { q: 'What is "l-battariyye 3am tkhallas"?', opts: ['The battery is full', 'The battery is almost dead', 'The charger broke', 'No WiFi'], ans: 1, exp: '"l-battariyye 3am tkhallas" = the battery is almost done. Critical phrase in Lebanon during power cuts.' },
  { q: 'What does "blakni" mean?', opts: ['He called me', 'He downloaded my contact', 'He blocked me', 'He followed me'], ans: 2, exp: '"blakni" = he blocked me. From "block" + Lebanese suffix "-ni" (me). Lebanese social media drama.' },
  { q: 'What is "wassip-ni"?', opts: ['Video call me', 'WhatsApp me', 'Follow me', 'Share with me'], ans: 1, exp: '"wassip-ni" = WhatsApp me. From "WhatsApp" + suffix "-ni". More common than giving a phone number in Lebanon.' },
  { q: 'What does "3am bstalko" mean?', opts: ['I\'m calling him', 'I\'m blocking him', 'I\'m stalking him online', 'I\'m following him'], ans: 2, exp: '"3am bstalko" = I\'m stalking him. "stalk" + Lebanese present tense. Refers to checking someone\'s social media secretly.' },
  { q: 'What is "khlasat l-data"?', opts: ['The internet is slow', 'The data ran out', 'No WiFi', 'The phone died'], ans: 1, exp: '"khlasat l-data" = the data ran out. khlasat = finished. Common excuse in Lebanon.' },
  { q: 'What does "2onlayn" mean?', opts: ['Offline', 'On call', 'Online', 'Download'], ans: 2, exp: '"2onlayn" = online. Lebanese arabization of "online". "lesh ma btredd w-inta 2onlayn?" = why not reply when online?' },
  { q: 'What is a "stori" in Lebanese social media?', opts: ['A video call', 'An Instagram Story', 'A profile picture', 'A WhatsApp message'], ans: 1, exp: '"stori" = Instagram Story. Direct loanword. "shft storiyto?" = did you see his/her story?' },
  { q: 'What does "Dayyaht l-ma7mul" mean?', opts: ['I lost my phone', 'My phone died/battery died', 'My phone fell', 'I forgot my phone'], ans: 1, exp: '"Dayyaht l-ma7mul" = my phone died. Dayyaht = it died/ran out. More common than "l-battariyye khilsit".' },
  { q: 'What is "ghosting" in Lebanese usage?', opts: ['Blocking someone', 'Disappearing without explanation', 'Going offline', 'Deleting messages'], ans: 1, exp: '"ghosting" is a direct loanword. "3ammayli ghosting" = he ghosted me. Lebanese youth adopted English dating vocabulary.' },
  { q: 'What does "folu-ni" mean?', opts: ['Call me', 'WhatsApp me', 'Follow me', 'Like my post'], ans: 2, exp: '"foluwni" = follow me. From "follow" with Lebanese imperative suffix "-ni". Lebanese influencer culture.' },
  { q: 'What does "7awwil-li ra2am-o" mean?', opts: ['Call his number', 'Share/transfer his number to me', 'Block his number', 'Save his number'], ans: 1, exp: '"7awwil-li ra2am-o" = transfer me his number. 7awwil = transfer, ra2am = number. Common request in Lebanon.' },
];

const DIJ_TIPS = [
  { title: 'WhatsApp dominates Lebanese communication', body: 'WhatsApp is Lebanon\'s primary communication platform. "Wassip-ni" (WhatsApp me) is standard. Lebanese use WhatsApp groups for everything: family, work, neighborhoods. The double blue tick (seen = "sin") creates social anxiety — "3amallit-li sin wma radd" = saw it and didn\'t reply.' },
  { title: 'Lebanese internet struggles', body: 'Lebanon has some of the world\'s most expensive, slowest internet. Common phrases: "l-intarnit mish shaghghal" (internet not working), "khlasat l-data" (data ran out), "l-wayfi mish 3ammil" (WiFi not working). During power cuts, mobile data is the only lifeline.' },
  { title: 'Arabic + English tech mashup', body: 'Lebanese freely blend Arabic grammar with English tech words: "3ammaytlo layk" (I liked it), "3ammaytlo blok" (I blocked him), "3am bstalko" (I\'m stalking him), "7ammil l-aplikeyshin" (install the app). This hybrid is completely natural — don\'t be afraid to use it.' },
  { title: 'Lebanese social media culture', body: 'Lebanon punches above its weight in content creation. Key words: "influansar" (influencer), "stori" (story), "rilz" (reels), "nashar" (posted). Lebanese Instagram culture is fashion-forward and food-obsessed. "3ala l-stori" = on the story (i.e., just for show, not real).' },
  { title: 'Online dating and ghosting terms', body: 'Lebanese youth use English loanwords for relationship dynamics: "ghosting" (disappearing), "krash" (crush), "blakni" (blocked me), "sin" (read but ignored). The phrase "3ammayli ghosting" is universally understood by young Lebanese.' },
  { title: 'Power cuts and tech survival', body: 'Lebanon\'s electricity crisis (2-22 hours of cuts per day) shapes tech vocabulary. "Shahin" (charger) is precious. Power banks are essential. "l-battariyye 3am tkhallas" during a power cut = true emergency. Lebanese learned to compress their digital life into the hours of power.' },
];
