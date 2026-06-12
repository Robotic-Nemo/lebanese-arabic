// R879 — NEW FEATURE: Lebanese WhatsApp & Digital Communication Culture (wha)

const WHA_CATS = ['voice_notes', 'groups', 'expressions', 'stickers'];

const WHA_WORDS = [
  // voice_notes
  { a: 'رسالة صوتية', tr: 'risaale Sawtiyye', en: 'voice message', cat: 'voice_notes' },
  { a: 'بعتلك صوتية', tr: 'ba3tilak Sawtiyye', en: 'I sent you a voice note', cat: 'voice_notes' },
  { a: 'سمعت الصوتية؟', tr: 'sme3t is-Sawtiyye?', en: 'did you listen to the voice note?', cat: 'voice_notes' },
  { a: 'مسموع', tr: 'masmoou3', en: 'heard / seen (double blue tick)', cat: 'voice_notes' },
  { a: 'سرعة التشغيل', tr: 'sur3et it-tashgheel', en: 'playback speed', cat: 'voice_notes' },
  { a: 'ضغطت تسجيل', tr: 'Daga7t tasjeel', en: 'I pressed record', cat: 'voice_notes' },
  { a: 'وصلتني الصوتية متأخرة', tr: 'wasalitni is-Sawtiyye mit2akhkhre', en: 'the voice note arrived late', cat: 'voice_notes' },
  // groups
  { a: 'مجموعة الواتساب', tr: 'majmou3et il-WhatsApp', en: 'WhatsApp group', cat: 'groups' },
  { a: 'أدمن', tr: 'admin', en: 'group admin', cat: 'groups' },
  { a: 'كتمت المجموعة', tr: 'katamt il-majmou3a', en: 'I muted the group', cat: 'groups' },
  { a: 'شيلوني من المجموعة', tr: 'sheelouni min il-majmou3a', en: 'they removed me from the group', cat: 'groups' },
  { a: 'مجموعة العيلة', tr: 'majmou3et il-3eele', en: 'family group chat', cat: 'groups' },
  { a: 'ضيفني على المجموعة', tr: 'Dayifni 3ala l-majmou3a', en: 'add me to the group', cat: 'groups' },
  { a: 'تراسلنا على الواتساب', tr: 'traasalna 3al-WhatsApp', en: 'we messaged on WhatsApp', cat: 'groups' },
  // expressions
  { a: 'طب طب طب', tr: 'Tab Tab Tab', en: 'ok ok ok (impatient agreement)', cat: 'expressions' },
  { a: 'كيفك شو أخبارك', tr: 'kiifak shu akhbaarak', en: 'how are you / what\'s your news', cat: 'expressions' },
  { a: 'بدي اتصل فيك', tr: 'baddee ittasil fiik', en: 'I want to call you', cat: 'expressions' },
  { a: 'وين أنت؟', tr: 'ween inta?', en: 'where are you?', cat: 'expressions' },
  { a: 'شفت الرسالة؟', tr: 'shift ir-risaale?', en: 'did you see the message?', cat: 'expressions' },
  { a: 'قريت بس ما ردّيت', tr: '2arit bas ma raddet', en: 'I read it but didn\'t reply', cat: 'expressions' },
  { a: 'إيدك الشمال حرة', tr: '2eedak ish-shmal 7orra', en: 'your left hand is free (free call)', cat: 'expressions' },
  // stickers
  { a: 'ستيكر', tr: 'sticker', en: 'sticker', cat: 'stickers' },
  { a: 'الديك الرومي', tr: 'id-diik ir-roomii', en: 'the turkey sticker (famous meme)', cat: 'stickers' },
  { a: 'بوسة', tr: 'boose', en: 'kiss emoji / sticker', cat: 'stickers' },
  { a: 'قلب أحمر', tr: '2alb a7mar', en: 'red heart emoji', cat: 'stickers' },
  { a: 'ضحكة على ضحكة', tr: 'Da7ke 3ala Da7ke', en: 'laughing sticker (emoji on emoji)', cat: 'stickers' },
  { a: 'حراقة', tr: '7araA2', en: 'fire emoji (something hot/impressive)', cat: 'stickers' },
  { a: 'ما عندي ستيكرات', tr: 'ma 3andi stickarat', en: 'I don\'t have stickers (pack empty)', cat: 'stickers' },
];

const WHA_DRILLS = [
  { q: 'What is "risaale Sawtiyye"?', opts: ['group chat', 'voice message', 'sticker', 'blue tick'], ans: 1 },
  { q: 'What does "masmoou3" mean?', opts: ['sent', 'heard / double blue tick', 'muted', 'blocked'], ans: 1 },
  { q: 'What is "majmou3et il-3eele"?', opts: ['WhatsApp group', 'family group chat', 'admin role', 'voice note'], ans: 1 },
  { q: 'What does "katamt il-majmou3a" mean?', opts: ['I left the group', 'I muted the group', 'I deleted the group', 'I created the group'], ans: 1 },
  { q: '"Dayifni 3ala l-majmou3a" means?', opts: ['remove me from group', 'add me to the group', 'mute the group', 'leave the group'], ans: 1 },
  { q: 'What is "admin" in a WhatsApp group?', opts: ['member', 'sticker', 'group admin', 'message'], ans: 2 },
  { q: 'What does "ween inta?" mean?', opts: ['how are you?', 'where are you?', 'what are you doing?', 'did you see this?'], ans: 1 },
  { q: '"2arit bas ma raddet" means?', opts: ['I wrote but deleted it', 'I read it but didn\'t reply', 'I saw but blocked', 'I heard the voice note'], ans: 1 },
  { q: 'What is "sticker"?', opts: ['emoji', 'sticker', 'voice note', 'reaction'], ans: 1 },
  { q: 'What does "boose" mean?', opts: ['hug', 'wink', 'kiss emoji', 'heart'], ans: 2 },
  { q: '"Tab Tab Tab" expresses?', opts: ['anger', 'impatient agreement / ok ok ok', 'confusion', 'surprise'], ans: 1 },
  { q: 'What does "7araA2" mean in WhatsApp context?', opts: ['anger', 'fire emoji / something impressive', 'deleted message', 'blocked'], ans: 1 },
  { q: '"Daga7t tasjeel" means?', opts: ['I sent a sticker', 'I pressed record', 'I played the message', 'I deleted the note'], ans: 1 },
  { q: 'What is "sur3et it-tashgheel"?', opts: ['message delivery', 'playback speed', 'recording length', 'group settings'], ans: 1 },
  { q: '"Sheelouni min il-majmou3a" means?', opts: ['I left the group', 'they removed me from the group', 'I muted myself', 'I blocked them'], ans: 1 },
  { q: 'What does "ma 3andi stickarat" mean?', opts: ['I don\'t have WiFi', 'my sticker pack is empty', 'I can\'t send', 'no voice notes'], ans: 1 },
];

const WHA_TIPS = [
  { title: 'Voice Notes Are King', body: 'Lebanese people overwhelmingly prefer Sawtiyyaat (voice notes) over typing. A 3-minute voice note replacing a 3-sentence text is normal. If someone sends you a long voice note, you\'ve been honored with their time.' },
  { title: 'Family Group Nightmare', body: 'The "majmou3et il-3eele" (family group) is a Lebanese institution — and a source of anxiety. It contains aunts, uncles, and grandparents. Forwarded news, prayer chains, and random photos arrive at 6am. Muting is survival.' },
  { title: 'Double Blue Tick Culture', body: '"Masmoou3" (seen/heard) without a reply is a social statement in Lebanon. If you read and don\'t respond, you owe an explanation. "Shift bas ma kan 3endi shi 2oulo" (saw it but had nothing to say) is the classic excuse.' },
  { title: 'Sticker Packs Are Personality', body: 'Lebanese WhatsApp users curate sticker packs like art collections. The Dabke dancer, the Lebanese flag, the angry grandma — these are cultural touchstones. Someone with no stickers is considered digitally unsophisticated.' },
  { title: 'Tab Tab Tab', body: '"Tab" (طب) meaning "ok/fine" — repeated 3 times — is peak Lebanese impatience in messaging. It means "yes yes I get it stop explaining." It\'s also used at the start of voice notes: "Tab, sma3ni..." (ok listen to me...).' },
  { title: 'Free Calls Over WhatsApp', body: 'Lebanon\'s telecom costs drove everyone to WhatsApp calls early. "2eedak ish-shmal 7orra?" (is your left hand free?) is a way to ask if someone can talk — left hand holds the phone in Lebanese culture.' },
];
