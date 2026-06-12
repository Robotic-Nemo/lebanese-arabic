// R666 — NEW FEATURE: Lebanese Digital & Online Life (dgt)

const DGT_CATS = [
  { id: 'apps', label: '📱 Apps & Platforms' },
  { id: 'actions', label: '👆 Digital Actions' },
  { id: 'slang', label: '💬 Online Slang' },
  { id: 'phrases', label: '📲 WhatsApp Phrases' }
];

const DGT_WORDS = [
  // Apps & platforms
  { ar: 'waatsaab', tr: 'waatsaab', en: 'WhatsApp', cat: 'apps' },
  { ar: 'instagram', tr: 'instagram', en: 'Instagram', cat: 'apps' },
  { ar: 'tik tok', tr: 'tik tok', en: 'TikTok', cat: 'apps' },
  { ar: 'YouTube', tr: 'YouTube', en: 'YouTube', cat: 'apps' },
  { ar: 'internet', tr: 'internet', en: 'internet', cat: 'apps' },
  { ar: 'shaabake', tr: 'shaabake', en: 'network / wifi signal', cat: 'apps' },
  { ar: 'batteri', tr: 'batteri', en: 'battery', cat: 'apps' },
  // Digital actions
  { ar: 'bi3mil laik', tr: 'bi3mil laik', en: 'to like (a post)', cat: 'actions' },
  { ar: 'shaarak', tr: 'shaarak', en: 'share (verb)', cat: 'actions' },
  { ar: 'nazzal', tr: 'nazzal', en: 'download / post (upload)', cat: 'actions' },
  { ar: 'Sawwar', tr: 'Sawwar', en: 'take a photo / screenshot', cat: 'actions' },
  { ar: 'ba3at raasaale', tr: 'ba3at raasaale', en: 'sent a message', cat: 'actions' },
  { ar: 'Hayya3', tr: 'Hayya3', en: 'live broadcast / go live', cat: 'actions' },
  { ar: 'block', tr: 'block', en: 'block (someone online)', cat: 'actions' },
  // Online slang
  { ar: 'viral', tr: 'viral', en: 'viral / trending', cat: 'slang' },
  { ar: 'content', tr: 'content', en: 'content (online)', cat: 'slang' },
  { ar: 'follow', tr: 'follow', en: 'follow (social media)', cat: 'slang' },
  { ar: 'story', tr: 'story', en: 'story (Instagram/WhatsApp)', cat: 'slang' },
  { ar: '3amil post', tr: '3amil post', en: 'made a post', cat: 'slang' },
  { ar: 'offline', tr: 'offline', en: 'offline / unavailable', cat: 'slang' },
  { ar: 'screenshoot', tr: 'screenshoot', en: 'screenshot', cat: 'slang' },
  // WhatsApp phrases
  { ar: 'shu 2akhbaarak?', tr: 'shu 2akhbaarak?', en: 'what\'s up? (lit. what\'s your news?)', cat: 'phrases' },
  { ar: 'shayef/shayfe?', tr: 'shayef/shayfe?', en: 'did you see (the message)?', cat: 'phrases' },
  { ar: 'bkra mnHki', tr: 'bkra mnHki', en: 'we\'ll talk tomorrow', cat: 'phrases' },
  { ar: 'raasaale Sawtiyye', tr: 'raasaale Sawtiyye', en: 'voice note', cat: 'phrases' },
  { ar: 'miin 3amil call?', tr: 'miin 3amil call?', en: 'who\'s calling?', cat: 'phrases' },
  { ar: 'ba3atlik', tr: 'ba3atlik', en: 'I sent you (something)', cat: 'phrases' },
  { ar: 'shuft raasalti?', tr: 'shuft raasalti?', en: 'did you see my message?', cat: 'phrases' }
];

const DGT_DRILLS = [
  { q: 'What is "waatsaab" in English?', opts: ['Instagram','WhatsApp','TikTok','YouTube'], ans: 1 },
  { q: 'What does "bi3mil laik" mean?', opts: ['share a post','to like a post','download something','go live'], ans: 1 },
  { q: 'What is "raasaale Sawtiyye"?', opts: ['video call','text message','voice note','screenshot'], ans: 2 },
  { q: 'What does "shaabake" mean?', opts: ['battery','phone','network/wifi signal','data'], ans: 2 },
  { q: 'What does "nazzal" mean?', opts: ['like','share','download/post','screenshot'], ans: 2 },
  { q: '"shuft raasalti?" means?', opts: ['did you send a message?','did you see my message?','who texted you?','where is my message?'], ans: 1 },
  { q: '"Hayya3" means?', opts: ['block someone','screenshot','go live/broadcast','follow'], ans: 2 },
  { q: '"offline" in Lebanese digital context means?', opts: ['trending','unavailable/offline','logged in','downloading'], ans: 1 },
  { q: '"ba3atlik" means?', opts: ['I called you','I blocked you','I sent you something','I tagged you'], ans: 2 },
  { q: '"story" in Lebanese social media refers to?', opts: ['a news article','a WhatsApp/Instagram story','a long video','a profile bio'], ans: 1 },
  { q: '"viral" in Lebanese slang means?', opts: ['blocked','offline','trending/viral','downloaded'], ans: 2 },
  { q: '"Sawwar" in digital context means?', opts: ['share','take a photo/screenshot','upload','go live'], ans: 1 },
  { q: '"bkra mnHki" means?', opts: ['call me now','I\'ll text you later','we\'ll talk tomorrow','read my message'], ans: 2 },
  { q: '"shaarak" means?', opts: ['like','comment','share','follow'], ans: 2 },
  { q: '"block" on Lebanese social media means?', opts: ['delete a post','mute someone','block someone online','unfriend'], ans: 2 }
];

const DGT_TIPS = [
  { title: 'WhatsApp is everything', body: 'In Lebanon, WhatsApp replaces SMS, email, and often phone calls. Group chats for family, school, neighborhood, and work are universal. "Raasaale Sawtiyye" (voice notes) are preferred over typing — Lebanese communicate fast and verbally even in writing.' },
  { title: 'Lebanese digital mixing', body: 'Lebanese online language is a mix of Arabic, French, and English. A message might read: "3amilt post ktiir cool w viral Sar kteer fast!" (I made a post, very cool, and it went viral really fast). Code-switching mid-sentence is the norm.' },
  { title: 'Screenshoot culture', body: '"Screenshoot" (screenshot — Lebanese pronunciation) is a verb and noun. "Sawwarli l-post" means take a screenshot of the post. Screenshots are used to share WhatsApp messages, prices, news, and receipts — a key part of daily digital life.' },
  { title: 'The two blue ticks', body: 'WhatsApp\'s blue read-receipt ticks are socially loaded in Lebanon. "Shayef w ma rad" (he saw it and didn\'t reply) is a conversational topic. "Shuft raasalti?" (did you see my message?) implies social obligation to respond.' },
  { title: 'Instagram vs TikTok', body: 'Instagram is dominant for photos and stories among all ages. TikTok surged post-2020. Lebanese content creators are active globally — Arabic memes, comedy clips, and food videos. "Content" (unchanged word) describes all creative online output.' },
  { title: 'Internet & power cuts', body: '"Shaabake" (network/wifi) is precious — Lebanon\'s rolling power cuts mean mobile data and generators keep people online. "Batteri" (battery) anxiety is real — portable chargers are essential. "Offline" is a dreaded status during cuts.' }
];
