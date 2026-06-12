// R546 — NEW FEATURE: Lebanese Phone & Messaging Phrases coach (prefix: phn)

const PHN_WORDS = [
  // cat: answer
  { ar: 'ألو', tr: 'aloo', en: 'Hello (answering the phone — Lebanese standard)', cat: 'answer' },
  { ar: 'آمر', tr: 'aamur', en: 'Yes? / At your service (formal phone answer)', cat: 'answer' },
  { ar: 'من معي؟', tr: 'min ma3i?', en: 'Who am I speaking with? (lit. who is with me?)', cat: 'answer' },
  { ar: 'كيفك؟ شو أخبارك؟', tr: 'kiifak? shu akhbaarak?', en: 'How are you? What\'s your news? (phone small talk)', cat: 'answer' },
  { ar: 'خير إن شاء الله؟', tr: 'kheir inshalla?', en: 'Hope it\'s good news? (said when unexpected call)', cat: 'answer' },

  // cat: unavailable
  { ar: 'مش موجود / مش موجودة', tr: 'mish mawjuud / mish mawjuude', en: 'Not available / not here (male/female)', cat: 'unavailable' },
  { ar: 'مشغول / مشغولة', tr: 'mashghuul / mashghuule', en: 'Busy (male/female)', cat: 'unavailable' },
  { ar: 'رح يرجعلك / رح ترجعلك', tr: 'ra7 yirja3lak / ra7 tirja3lak', en: 'He/she will call you back', cat: 'unavailable' },
  { ar: 'بعتلو / بعتلها خبر', tr: 'ba3atlo / ba3atla khabar', en: 'I\'ll pass along the message (lit. I\'ll send him/her news)', cat: 'unavailable' },
  { ar: 'خطه مشغول', tr: 'khaTTo mashghuul', en: 'His line is busy', cat: 'unavailable' },

  // cat: ending
  { ar: 'الله معك', tr: 'allah ma3ak', en: 'God be with you (farewell on phone — very Lebanese)', cat: 'ending' },
  { ar: 'يسلم تيزك', tr: 'yislam tiizak', en: 'Lit. "bless your backside" — warm jokey farewell between close friends', cat: 'ending' },
  { ar: 'تكرم عينك', tr: 'tikram 3einak', en: 'Lit. "may your eye be honored" — gracious phone goodbye', cat: 'ending' },
  { ar: 'بشوفك / بشوفك بكرا', tr: 'bishuufak / bishuufak bukra', en: 'See you / see you tomorrow', cat: 'ending' },
  { ar: 'صلي على النبي', tr: 'Salli 3a l-nabi', en: 'Say a prayer for the Prophet (Islamic farewell, also used casually)', cat: 'ending' },

  // cat: whatsapp
  { ar: 'شفت الرسالة', tr: 'shift er-risaale', en: 'I saw the message (Lebanese excuse for double blue tick)', cat: 'whatsapp' },
  { ar: 'بعتلك فويس', tr: 'ba3atlak voice', en: 'I sent you a voice note (Arabized English "voice")', cat: 'whatsapp' },
  { ar: 'رن عليّ', tr: 'rann 3aleyyi', en: 'Ring me (give me a missed call as a signal)', cat: 'whatsapp' },
  { ar: 'شو الواتساب؟', tr: 'shu l-waatsaab?', en: 'What\'s your WhatsApp? (asking for contact)', cat: 'whatsapp' },
  { ar: 'بينات', tr: 'baynaat', en: 'Between us (said before sharing gossip over voice note)', cat: 'whatsapp' },
  { ar: 'وصلت الرسالة؟', tr: 'waSlet er-risaale?', en: 'Did the message arrive? (did you get it?)', cat: 'whatsapp' },

  // cat: calling
  { ar: 'بحكيك بعدين', tr: 'b7akkiik ba3deen', en: 'I\'ll talk to you later', cat: 'calling' },
  { ar: 'عم بتصل فيك', tr: '3am bteSel fiik', en: 'I\'m calling you (right now)', cat: 'calling' },
  { ar: 'اتصل فيي', tr: 'ittaSel fiiyyi', en: 'Call me', cat: 'calling' },
  { ar: 'خبرني وين إنت', tr: 'khabberni ween inta', en: 'Let me know where you are', cat: 'calling' },
  { ar: 'الخط مقطوع', tr: 'el-khaTT ma2Tuu3', en: 'The line got cut / dropped call', cat: 'calling' },
  { ar: 'سماعتي مش شغالة', tr: 'smaa3ti mish shghaale', en: 'My earpiece isn\'t working', cat: 'calling' },

  // cat: problems
  { ar: 'ما في إشارة', tr: 'maa fii ishaare', en: 'No signal', cat: 'problems' },
  { ar: 'الشبكة واقعة', tr: 'esh-shabake waa2i3a', en: 'The network is down', cat: 'problems' },
  { ar: 'البطارية راحت', tr: 'el-baaTTaariyye raa7et', en: 'The battery died', cat: 'problems' },
  { ar: 'مش سامعك منيح', tr: 'mish saami3ak mniH', en: 'I can\'t hear you well', cat: 'problems' },
  { ar: 'قطع الاتصال', tr: '2aTa3 el-ittiSaal', en: 'The call dropped', cat: 'problems' },
];

const PHN_DRILLS = [
  {
    q: 'You pick up the phone in Lebanon. What\'s the standard Lebanese way to answer?',
    opts: [
      'Aloo — the Lebanese standard phone greeting',
      'Marhaba — only for in-person greetings',
      'Aamur — too formal for everyday calls',
      'Kiifak — too informal before knowing who\'s calling'
    ],
    ans: 0,
    exp: '"Aloo" is the universal Lebanese phone answer — it\'s the Arabic adaptation of "hello" specifically for phone use. You\'ll hear it constantly. "Aamur" (at your service) is more formal, used by older generations or in business. "Marhaba" is reserved for in-person greetings. Starting with "aloo" immediately marks you as understanding Lebanese phone culture.'
  },
  {
    q: 'A Lebanese friend calls unexpectedly late at night. What do you say to signal mild surprise while staying warm?',
    opts: [
      'Kheir inshalla? — Hope it\'s good news?',
      'Miin ma3i? — Who am I speaking with?',
      'El-khaTT mashghuul — The line is busy',
      'B7akkiik ba3deen — I\'ll talk to you later'
    ],
    ans: 0,
    exp: '"Kheir inshalla?" literally means "good, God willing?" and is said when someone calls unexpectedly or at an unusual hour. It\'s not rude — it\'s culturally normal to signal "I hope this is positive news." Lebanese culture ties unexpected calls to possible bad news (a family emergency, a problem), so this phrase acknowledges that tension while staying warm and open.'
  },
  {
    q: 'You want to leave a message that someone called. What\'s the natural Lebanese phrasing?',
    opts: [
      'Ba3atlo/ba3atla khabar — I\'ll send him/her the news',
      'Ra7 yirja3lak — He will call you back (not about the message)',
      'Khabberni ween inta — Let me know where you are',
      'Wii in ma3ak — Who is with you'
    ],
    ans: 0,
    exp: '"Ba3atlo khabar" (I\'ll send him the message) is the Lebanese way to say "I\'ll pass along the message." Literally "I\'ll send him news." It\'s informal and warm. "Ra7 yirja3lak" (he\'ll call you back) is a promise of a callback — different from leaving a message. Both are useful, but ba3atlo khabar covers the "message taken" scenario specifically.'
  },
  {
    q: 'Your Lebanese friend sends you a WhatsApp voice note starting with "baynaat..." — what should you expect?',
    opts: [
      'Gossip or private information meant only for you',
      'A formal announcement or public news',
      'A complaint about connection quality',
      'A request to call back later'
    ],
    ans: 0,
    exp: '"Baynaat" literally means "between us" — it\'s the Lebanese WhatsApp signal that what follows is private, gossip, or confidential information. It\'s like saying "don\'t share this." Lebanese voice note culture is rich: long, rambling messages are normal, and "baynaat" at the start means lean in and turn up the volume — the good stuff is coming.'
  },
  {
    q: 'A call drops while you\'re speaking. What do you say when you call back?',
    opts: [
      '2aTa3 el-ittiSaal — The call dropped',
      'El-khaTT ma2Tuu3 — The line got cut',
      'Maa fii ishaare — No signal',
      'All of the above are appropriate'
    ],
    ans: 3,
    exp: 'All three are valid ways to explain a dropped call in Lebanese Arabic. "2aTa3 el-ittiSaal" is the neutral standard. "El-khaTT ma2Tuu3" (the line is cut) is very common and vivid. "Maa fii ishaare" (no signal) is used when you\'re in a dead zone. Lebanese telecom is notoriously patchy — these phrases come up constantly, especially in mountainous areas or during power outages when the infrastructure is strained.'
  },
  {
    q: 'How do Lebanese people typically say goodbye at the end of a phone call?',
    opts: [
      'Allah ma3ak — God be with you (very Lebanese)',
      'Ma3 essalaame — generic goodbye, less phone-specific',
      'Bye bye — also used but borrowed from English',
      'Both A and C are very common in Lebanese phone calls'
    ],
    ans: 3,
    exp: '"Allah ma3ak" is deeply Lebanese — warm, almost spiritual, a standard phone farewell. But "bye bye" (the English) is equally common in modern Beirut. Lebanese Arabic constantly code-switches; ending a call with "bye bye yalla allah ma3ak" mixing English and Arabic is completely normal. "Ma3 essalaame" is more formal. The mix depends on the speaker\'s generation and social context.'
  },
  {
    q: 'Your Lebanese friend wants you to give them a missed call as a signal. What do they say?',
    opts: [
      'Rann 3aleyyi — Ring me (give me a missed call)',
      '3am bteSel fiik — I\'m calling you right now',
      'Ittsel fiiyyi — Call me (expects you to stay on)',
      'Wiin inta? — Where are you?'
    ],
    ans: 0,
    exp: '"Rann 3aleyyi" (ring me) specifically means a missed call used as a signal — a Lebanese communication hack where you call and hang up before the other person answers. It means "I arrived," "I\'m outside," "I\'m thinking of you," or whatever the context implies. It\'s free, requiring no credit. "IttaSel fiiyyi" is a full call request, expecting a real conversation.'
  },
  {
    q: 'You sent a WhatsApp message and want to confirm it was received. What do you ask?',
    opts: [
      'WaSlet er-risaale? — Did the message arrive?',
      'Shift er-risaale? — Did you see the message?',
      'Ba3atlak voice? — Did I send you a voice note?',
      'Khabberni wein inta — Let me know where you are'
    ],
    ans: 0,
    exp: '"WaSlet er-risaale?" (did the message arrive?) is the standard check. It\'s different from "shift er-risaale?" (did you SEE the message?) — the first asks about delivery, the second asks about reading (and reading implies response obligation). Lebanese WhatsApp culture has clear social rules: two blue ticks but no reply is a socially loaded situation. "Shift er-risaale?" is sometimes an accusation, not just a question.'
  },
  {
    q: 'Someone calls asking for your friend who isn\'t home. How do you say he\'s not available?',
    opts: [
      'Mish mawjuud — Not available / not here',
      'Mashghuul — Busy (implies he\'s home but occupied)',
      'El-khaTT ma2Tuu3 — The line is cut (about the phone, not the person)',
      'Ra7 yirja3lak — He\'ll call you back (a promise, not a status)'
    ],
    ans: 0,
    exp: '"Mish mawjuud" (not present/available) is the standard way to say someone isn\'t home or isn\'t reachable. It\'s the Lebanese equivalent of "he\'s not in." "Mashghuul" means busy — the implication is he\'s there but occupied, which carries a different social weight. Using "mish mawjuud" is safer because it doesn\'t commit to whether he\'s physically home or just unavailable.'
  },
  {
    q: 'A Lebanese friend sends a voice note: "Ba3atlak voice, shift?" — what is he asking?',
    opts: [
      'Did you see/hear the voice note I sent you?',
      'Are you watching a video he shared?',
      'Did you receive his phone number?',
      'Can you call him back on WhatsApp video?'
    ],
    ans: 0,
    exp: '"Ba3atlak voice" means "I sent you a voice note" — "voice" here is Arabized English, universally understood in Lebanon. "Shift?" means "did you see/hear it?" This two-word follow-up is classic Lebanese WhatsApp behavior: send a long rambling voice note, then immediately send a text asking if you listened. The voice note culture in Lebanon is so strong that some conversations happen entirely in 2-minute audio clips.'
  },
];

const PHN_TIPS = [
  '<strong>Voice notes are king in Lebanon:</strong> Lebanese WhatsApp culture runs on voice notes (فويس / voice). Typing is considered cold and impersonal for close relationships. A good Lebanese communicator sends voice notes for everything — news, plans, gossip. If someone sends you a long voice note, listen to the whole thing before replying or you\'ll miss key information buried at the end (Lebanese speakers front-load small talk, bury the real message in the middle, and close with expressions of love).',
  '<strong>"Aloo" not "hello" on the phone:</strong> The switch from "marhaba" (in person) to "aloo" (on phone) is automatic for Lebanese speakers. If you use "marhaba" when answering a call, you\'ll sound slightly odd — like you didn\'t notice it was a phone call. "Aloo" signals phone mode immediately.',
  '<strong>Missed calls as signals:</strong> "Rann 3aleyyi" (ring me = missed call) is a real communication system in Lebanon. One ring = I\'m outside. Two rings = call me when you can. Established friend groups have their own codes. It\'s also practical: Lebanon has had intermittent telecom issues and economic pressures, so the free missed-call signal is widely used.',
  '<strong>Dropped calls are normal:</strong> Lebanese telecom infrastructure means dropped calls are expected, not embarrassing. "2aTa3 el-ittiSaal" or "khaTTna inha2a2" is said without apology — it\'s systemic, not personal. The culturally appropriate response when a call drops is to immediately call back, not wait for the other person.',
  '<strong>Warm farewells matter enormously:</strong> How you end a Lebanese phone call matters as much as how you start it. "Allah ma3ak" (God be with you), "tislam" (may you be safe), "yalla bye" are all warm and normal. Hanging up abruptly without a proper goodbye is considered rude — Lebanese phone calls often have 2-3 minutes of farewell exchange before the actual hang-up.',
];

const PHN_ABOUT = 'Lebanese phone culture is an extension of Lebanese social warmth — calls are never purely transactional. Even a 30-second call to confirm a meeting will include greetings, wellness checks, and a drawn-out goodbye. WhatsApp has become the primary communication medium for Lebanese people, with voice notes replacing texting for close relationships. The Lebanese code-switching between Arabic and English (or French) is constant: "aloo, kiifak, ana okay, bye bye yalla" in one sentence is completely natural. Understanding Lebanese phone phrases also means understanding the unspoken rules: double-blue-tick without reply is passive aggression, a missed call is a signal, and a long voice note starting with "baynaat" is the highest form of social trust.';
