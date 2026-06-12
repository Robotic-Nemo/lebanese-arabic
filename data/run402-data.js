// Run #402 — Lebanese Social Media & Internet Slang Coach (sms)
// Categories: internet-slang | texting | reactions | social-phrases | expressions

const SMS_WORDS = [
  // internet-slang
  { ar: 'يسطا', tr: 'yasta', en: 'dude / man / bro (very Lebanese slang)', cat: 'internet-slang' },
  { ar: 'شو هاد', tr: 'shuu haad', en: 'what is this (reaction to absurd content)', cat: 'internet-slang' },
  { ar: 'لول', tr: 'lol', en: 'lol (used in Lebanese Arabic text)', cat: 'internet-slang' },
  { ar: 'هههه', tr: 'hhhh', en: 'haha (Arabic laughter in text)', cat: 'internet-slang' },
  { ar: 'أكيد', tr: '2akiid', en: 'for sure / definitely', cat: 'internet-slang' },
  { ar: 'نرفزني', tr: 'narvazni', en: 'it annoyed me / it got on my nerves', cat: 'internet-slang' },
  { ar: 'كتير', tr: 'ktiir', en: 'very / a lot (used constantly in Lebanese)', cat: 'internet-slang' },
  { ar: 'هلق', tr: 'halla2', en: 'now / right now (Lebanese word)', cat: 'internet-slang' },
  // texting
  { ar: 'وين كنت', tr: 'ween kint', en: 'where were you (classic WhatsApp opener)', cat: 'texting' },
  { ar: 'شو عم تعمل', tr: 'shuu 3am ta3mil', en: 'what are you doing', cat: 'texting' },
  { ar: 'تعبت منك', tr: 'ti3bit minnak', en: 'I\'m tired of you / you\'re exhausting me', cat: 'texting' },
  { ar: 'مشتاق لك', tr: 'mushtaa2 lak', en: 'I miss you (to a guy)', cat: 'texting' },
  { ar: 'مشتاقة لك', tr: 'mushtaa2a lak', en: 'I miss you (to a guy, from a girl)', cat: 'texting' },
  { ar: 'كيفك عالكيفك', tr: 'kiifak 3al-kiifak', en: 'how are you being (casual Lebanese greeting)', cat: 'texting' },
  { ar: 'بحبك', tr: 'b7ibbak', en: 'I love you (to a guy)', cat: 'texting' },
  { ar: 'حلو', tr: '7ilu', en: 'nice / sweet / cool', cat: 'texting' },
  // reactions
  { ar: 'يلعن دينك', tr: 'yil3an diinak', en: 'damn you (strong curse — common in slang)', cat: 'reactions' },
  { ar: 'الله يسامحك', tr: 'alla ysaami7ak', en: 'God forgive you (mild rebuke)', cat: 'reactions' },
  { ar: 'بموت', tr: 'bmoot', en: 'I\'m dying (of laughter / shock / love)', cat: 'reactions' },
  { ar: 'هيدا كتير', tr: 'hayda ktiir', en: 'this is too much / this is a lot', cat: 'reactions' },
  { ar: 'زعلان', tr: 'za3laan', en: 'upset / sad / angry', cat: 'reactions' },
  { ar: 'ما في مزبوط', tr: 'ma fii mazbooT', en: 'nothing is right / everything is messed up', cat: 'reactions' },
  { ar: 'الله', tr: 'alla', en: 'wow / oh God (exclamation of surprise)', cat: 'reactions' },
  { ar: 'يي', tr: 'yii', en: 'oh! / wow! (Lebanese exclamation of surprise)', cat: 'reactions' },
  // social-phrases
  { ar: 'عالسريع', tr: '3as-srii3', en: 'quickly / real quick', cat: 'social-phrases' },
  { ar: 'بالتوفيق', tr: 'bil-tawfiiq', en: 'good luck / best of luck', cat: 'social-phrases' },
  { ar: 'ما خبرك', tr: 'ma khabarak', en: 'what\'s your news / what\'s up', cat: 'social-phrases' },
  { ar: 'يلا بيي', tr: 'yalla byii', en: 'it will come / it\'s coming (reassurance)', cat: 'social-phrases' },
  { ar: 'إنت مين', tr: '2inta miin', en: 'who are you (confrontational online)', cat: 'social-phrases' },
  { ar: 'اسمعني', tr: 'isma3ni', en: 'listen to me (getting attention)', cat: 'social-phrases' },
  { ar: 'شو رأيك', tr: 'shuu ra2yak', en: 'what do you think / what\'s your opinion', cat: 'social-phrases' },
  { ar: 'والله ما بعرف', tr: 'walla ma ba3rif', en: 'I swear I don\'t know', cat: 'social-phrases' },
  // expressions
  { ar: 'مع السلامة', tr: 'ma3 is-slaame', en: 'goodbye (lit. with safety)', cat: 'expressions' },
  { ar: 'يلا كسلان', tr: 'yalla kaslaane', en: 'come on lazy one (playful push)', cat: 'expressions' },
  { ar: 'طول بالك', tr: 'Tuul baalak', en: 'be patient / take it easy', cat: 'expressions' },
  { ar: 'شو هالحال', tr: 'shuu hal-7aal', en: 'what is this situation (frustrated reaction)', cat: 'expressions' },
  { ar: 'إجت من الله', tr: '2ijit min alla', en: 'it came from God (fate / can\'t argue with it)', cat: 'expressions' },
  { ar: 'بالصحة والراحة', tr: 'biS-Si77a w iraa7a', en: 'enjoy in good health (said to someone eating/shopping)', cat: 'expressions' },
  { ar: 'تكرم عيونك', tr: 'tikram 3yuunak', en: 'honored by your eyes (polite compliment on seeing you)', cat: 'expressions' },
  { ar: 'يسلم تمك', tr: 'yislam tammak', en: 'blessed be your mouth (thanks for saying something nice)', cat: 'expressions' },
];

const SMS_DRILLS = [
  {
    q: 'What does "yasta" mean in Lebanese slang?',
    opts: ['yasta', '2akiid', 'halla2', 'ktiir'],
    correct: 0,
    note: '"Yasta" (يسطا) — dude / man / bro. Lebanon\'s most versatile address term for young people. From Egyptian "ostaz" (teacher/professor) but completely repurposed. "Yasta shuu saar?" = dude what happened? Used in text and speech constantly. Gender: "yasta" for male (also sometimes female). More formal: "7abiib/7abibti." Yasta signals casual street-level Lebanese speech — if someone calls you yasta, you\'re in the inner circle.',
  },
  {
    q: 'What does "halla2" mean?',
    opts: ['halla2', 'ktiir', 'yasta', 'shuu haad'],
    correct: 0,
    note: '"Halla2" (هلق) — now / right now. Purely Lebanese — MSA says "al-aan," Syrians say "halla2" too, but the Lebanese pronunciation and frequency is distinctive. "Halla2 shuu?" = what now? "Halla2 roH" = go now. In texting: "halla2 jii" = I\'m coming now. In Lebanese humor: "halla2 halla2" = right this second (impatient). The glottal stop at the end ("halla2") is a key Lebanese sound marker.',
  },
  {
    q: 'What does "bmoot" mean in Lebanese texts?',
    opts: ['bmoot', 'za3laan', 'narvazni', '2akiid'],
    correct: 0,
    note: '"Bmoot" (بموت) — I\'m dying. In Lebanese digital speech: "bmoot min il-D7ik" = I\'m dying from laughing, "bmoot 3aleek" = I\'m crazy about you (dying of love). Hyperbolic intensity is key to Lebanese expression. "Bmoot ma3ak" = I can\'t get enough of you. Also: "bmoot min il-3atab" = dying from exhaustion/heat. The Lebanese emotional register is operatically intense — "dying" is just strong emphasis.',
  },
  {
    q: 'What does "shuu ra2yak" mean?',
    opts: ['shuu ra2yak', 'ween kint', 'shuu 3am ta3mil', 'ma khabarak'],
    correct: 0,
    note: '"Shuu ra2yak" (شو رأيك) — what do you think / what\'s your opinion. The Lebanese intellectual and social culture places great value on opinions — asking and giving them. "Shuu ra2yak bil-mawDuu3?" = what do you think about the topic? In group chats, "shuu ra2ykon?" = what\'s everyone\'s opinion? Lebanese social media is highly opinionated. "Ra2i" = opinion (from MSA "ra\'y"). "Ra2yak ma3ak" = your opinion is with you (I disagree but respect you).',
  },
  {
    q: 'What does "til-tawfiiq" mean?',
    opts: ['bil-tawfiiq', 'ma3 is-slaame', 'biS-Si77a w iraa7a', 'tikram 3yuunak'],
    correct: 0,
    note: '"Bil-tawfiiq" (بالتوفيق) — good luck / best of luck. Said before exams, job interviews, performances. "Tawfiiq" = success granted by God. It\'s both a practical wish AND a spiritual invocation. "Alla yta wwaf2ak" = may God grant you success (stronger form). Lebanese academic and professional culture is intensely competitive — exams, university entrance, job hunting — so "bil-tawfiiq" carries real emotional weight. Said sincerely, not as just a filler.',
  },
  {
    q: 'What does "walla ma ba3rif" mean?',
    opts: ['walla ma ba3rif', 'hayda ktiir', 'ma fii mazbooT', 'shuu hal-7aal'],
    correct: 0,
    note: '"Walla ma ba3rif" (والله ما بعرف) — I swear I don\'t know. "Walla" = by God (light oath, used constantly in Lebanese speech as an intensifier). "Ma ba3rif" = I don\'t know. The combination is the standard Lebanese way to express genuine uncertainty or to deflect a difficult question. In texting: used to end conversations politely, express confusion about politics, or admit ignorance. "Walla" alone has many uses: "walla!" = wow really! / by God!',
  },
  {
    q: 'What does "Tuul baalak" mean?',
    opts: ['Tuul baalak', '2ijit min alla', 'yalla kaslaane', 'ma3 is-slaame'],
    correct: 0,
    note: '"Tuul baalak" (طول بالك) — be patient / take it easy / chill. "Tuul" = lengthen, "baal" = mind/attention. Literally "lengthen your attention." Lebanese essential expression for managing frustration, traffic, queues, and life under infrastructure collapse. "Tuul baalik 3ala l-kahraba" = be patient about the electricity. "Tuul baalik 3aleyi" = be patient with me. The opposite: "mazbuuT maa 3indo baal" = he has no patience.',
  },
  {
    q: 'What does "narvazni" mean?',
    opts: ['narvazni', 'ti3bit minnak', 'za3laan', 'hayda ktiir'],
    correct: 0,
    note: '"Narvazni" (نرفزني) — it annoyed / irritated me (lit. it nerv-ed me). From French "nerveux" via Lebanese borrowing. The verb "narvaz" = to irritate. "Halla2 3am ynarfazni" = he\'s annoying me right now. "Ma tnarvazni" = don\'t annoy me. Lebanese Arabic freely absorbs French vocabulary — "garson" (waiter), "balcon" (balcony), "narvaz" (nervous/annoyed), "bonjour" (hello in formal contexts). "Narvazni ktiir" = it really got on my nerves.',
  },
  {
    q: 'What does "ma3 is-slaame" mean?',
    opts: ['ma3 is-slaame', 'bil-tawfiiq', 'biS-Si77a w iraa7a', 'yislam tammak'],
    correct: 0,
    note: '"Ma3 is-slaame" (مع السلامة) — goodbye (lit. with safety). The standard Lebanese farewell. Response: "alla ysallmak" (may God keep you safe). More casual: "yalla bye" (yalla + English bye). In texts: "ma3 slaame" or just "slaame." Lebanese goodbyes are warm and extended — "yalla bye" "la2 yalla" "byii" "okay bye bye" — the actual end of conversation is negotiated over several exchanges. "Slaame" = safety/well-being.',
  },
  {
    q: 'What does "tikram 3yuunak" mean?',
    opts: ['tikram 3yuunak', 'yislam tammak', 'biS-Si77a w iraa7a', '2ijit min alla'],
    correct: 0,
    note: '"Tikram 3yuunak" (تكرم عيونك) — lit. "honored are your eyes" — a polite expression when you see someone you appreciate, or as a complimentary reply. "3yuunak" = your eyes. Eyes are a key symbol of affection in Lebanese Arabic — "3eeni" (my eye) = my darling. "3a 3yuunna" (on our eyes) = we honor the request/person. This expression elevates the casual into the poetic — Lebanese Arabic is full of these eye/heart/soul metaphors that make compliments feel deeply meaningful.',
  },
];

const SMS_TIPS = [
  'Lebanese text culture mixes Arabic script, Franco-Arabic (Arabic words in Latin letters), English loanwords, and French loanwords in a single conversation. A typical WhatsApp message might read: "Halla2 fi wa7de chou 3am t2oul, too much 7ake" (there\'s this one girl saying so much, too much talking). "Too much" is used in Lebanese as one word. "7ake" = talk. Franco-Arabic uses numbers for Arabic sounds: 7=ح, 2=ء, 3=ع. Many Lebanese write this way even when the Arabic keyboard is available.',
  '"Yalla" is Lebanon\'s most essential word. It means: let\'s go, come on, OK then, hurry up, come in, let me in, let\'s do it, goodbye (when combined with bye), I\'ll leave you now, and more. The tone, context, and repetition ("yalla yalla" = hurry up!) convey the precise meaning. "Yalla bye" ends phone calls. "Yalla imshi" = move/go. "Yalla 7abiib" = come on sweetheart (encouraging). Understanding "yalla" in all its shades is mastering Lebanese conversational rhythm.',
  'Lebanese social media (Instagram, TikTok, WhatsApp, Twitter/X) has its own register mixing Lebanese dialect with heavy English. "Content creator" = lebanese internet personality. Popular phrases: "ta3a shuuf" (come see this), "shuu dakhal" (what does that have to do with anything), "inta normal?" (are you normal? = are you crazy?). Lebanese TikTok humor often revolves around making fun of infrastructure failures, politician corruption, and the paradoxes of Lebanese life under crisis — dark humor ("dark humor" itself used in Lebanese). ',
  'The word "ktiir" (كتير) appears in almost every Lebanese sentence. "Ktiir 7ilu" (very nice), "ktiir ta3baan" (very tired), "ktiir mniH" (very good), "ktiir ghali" (very expensive). It functions like English "very" but also "a lot" and "too much." In texting it\'s shortened to "ktir." The Lebanese emotional scale runs from "shway" (a little) to "ktiir" (a lot) to "ktiir ktiir" (extremely) to "bmoot" (dying). Mastering "ktiir" placement changes how Lebanese your speech sounds instantly.',
  'Phone calls in Lebanon are an art form. Starting a call: "allo? allo? fii 7ada?" (hello? anyone there? — the signal is bad). During: constant "aywa/na3am" (yes, I\'m listening). Ending a call takes 5 minutes of "yalla," "yalla bye," "la2 yalla," "okay okay," "bye," "bye bye," "ma3 slaame," "yislam tammak" — nobody actually hangs up first. WhatsApp voice notes ("note" / "voice" in Lebanese usage) replaced texts as the main communication mode for many Lebanese.',
];

const SMS_ABOUT = 'Lebanese social media and digital communication culture reflects the country\'s unique linguistic mixing, resilience, and humor. Lebanese Arabic texting combines standard dialect with French loanwords, English phrases, and internet slang in a creative mashup that outsiders find hard to follow. The Lebanese digital sphere is known for political commentary, dark humor about crises, and intense social connection maintained across diaspora — with Lebanese WhatsApp groups connecting Beirut with São Paulo, Sydney, and Detroit. Understanding Lebanese internet slang means understanding how Lebanon keeps its community together across distance and difficulty, using laughter, warmth, and shared language as tools of survival.';
