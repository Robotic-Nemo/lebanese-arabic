// R450 — Lebanese Idioms & Expressions (idm)
const EXP_WORDS = [
  // body-based idioms
  { ar: 'عيني عليك', tr: '3ayni 3layk', en: 'my eye is on you → I\'m watching you / I care about you', cat: 'body' },
  { ar: 'قلبي معك', tr: '2albi ma3ak', en: 'my heart is with you → I\'m with you / good luck', cat: 'body' },
  { ar: 'على راسي', tr: '3a raasi', en: 'on my head → with pleasure / absolutely (accepting a favor)', cat: 'body' },
  { ar: 'بيده الطولى', tr: 'biido el Tuula', en: 'long arm → has influence / pulls strings', cat: 'body' },
  { ar: 'وجعلي راسي', tr: 'waja3li raasi', en: 'gave me a headache → annoyed me greatly', cat: 'body' },
  { ar: 'ناعم الإيد', tr: 'naa3im el iid', en: 'soft hand → light-fingered / a thief', cat: 'body' },
  { ar: 'قلبه بارد', tr: '2albo baarid', en: 'cold heart → calm / doesn\'t get excited easily', cat: 'body' },
  { ar: 'طويل البال', tr: 'Tawiil el baal', en: 'long patience → very patient', cat: 'body' },
  // fate & luck
  { ar: 'نصيبه كبير', tr: 'nasiibo kbiir', en: 'big fate/share → lucky / destined for good things', cat: 'fate' },
  { ar: 'الله كريم', tr: 'alla kariim', en: 'God is generous → things will work out / don\'t worry', cat: 'fate' },
  { ar: 'شو بدك تعمل', tr: 'shu baddak ta3mil', en: 'what do you want to do → what can you do / c\'est la vie', cat: 'fate' },
  { ar: 'هيك الدنيا', tr: 'heek el dine', en: 'that\'s the world → that\'s life / such is life', cat: 'fate' },
  { ar: 'يعطيك العافية', tr: 'ya3Tiik el 3aafiye', en: 'may God give you health → thank you (for your effort)', cat: 'fate' },
  { ar: 'إن شالله', tr: 'inshalla', en: 'if God wills → hopefully / maybe (can be evasive)', cat: 'fate' },
  // social / relationships
  { ar: 'حبة ببة', tr: '7abbit bebe', en: 'grain by grain → slowly / taking it one step at a time', cat: 'social' },
  { ar: 'أكل هواء', tr: '2akal hawa', en: 'ate air → wasted a trip / got nothing for effort', cat: 'social' },
  { ar: 'طلع بخفي حنين', tr: 'Tili3 b-khaffi 7aniin', en: 'left with Hanin\'s shoes → left empty-handed (classic idiom)', cat: 'social' },
  { ar: 'سكرت الدكان', tr: 'sakart el dukkaan', en: 'I locked the shop → I\'m done talking / conversation over', cat: 'social' },
  { ar: 'ما تخليني', tr: 'maa tkhalliini', en: 'don\'t leave me → don\'t let me down / I\'m counting on you', cat: 'social' },
  { ar: 'بيحكي بالفم الملآن', tr: 'bi7ki bil famm el mal2aan', en: 'speaks with full mouth → speaks boldly/frankly', cat: 'social' },
  // money & work
  { ar: 'مشلوح', tr: 'mashluu7', en: 'thrown away → broke / has no money', cat: 'money' },
  { ar: 'ما في ولا قرش', tr: 'maa fii wala 2rush', en: 'not even a piastre → completely broke / zero money', cat: 'money' },
  { ar: 'يحرق الصيرة', tr: 'yi7ri2 el Siire', en: 'burns through the wallet → spends money freely / spendthrift', cat: 'money' },
  { ar: 'بياكل بالصحن الكبير', tr: 'byaakul biS-Sa7n el kbiir', en: 'eats from the big plate → lives large / ambitious/greedy', cat: 'money' },
  { ar: 'شغل بلا بركة', tr: 'shughl bala barake', en: 'work without blessing → effort that doesn\'t pay off', cat: 'money' },
  // weather & nature metaphors
  { ar: 'قلبه متل الصخرة', tr: '2albo matal es-Sakhre', en: 'heart like a rock → hard-hearted / emotionless', cat: 'nature' },
  { ar: 'متل النسمة', tr: 'matal en-nasme', en: 'like a breeze → gentle / kind / pleasant person', cat: 'nature' },
  { ar: 'بيحب كتير متل ما بيمطر', tr: 'bi7ibb ktiir matal ma bimTar', en: 'loves a lot like rain falls → loves generously/unconditionally', cat: 'nature' },
  { ar: 'الليل طويل', tr: 'el leel Tawiil', en: 'the night is long → there\'s still time / don\'t give up', cat: 'nature' },
  // street wisdom
  { ar: 'خود راحتك', tr: 'khod raa7tak', en: 'take your comfort → make yourself at home / relax', cat: 'street' },
  { ar: 'دبر راسك', tr: 'dabbar raasak', en: 'manage your head → figure it out yourself / fend for yourself', cat: 'street' },
  { ar: 'روح تمرمط', tr: 'ruu7 tmarmag', en: 'go roll around → get lost / buzz off (rude but common)', cat: 'street' },
  { ar: 'ما خصك', tr: 'maa khaSSak', en: 'doesn\'t concern you → mind your own business', cat: 'street' },
  { ar: 'كيفك وكيف الأحوال', tr: 'kiifak w kiif el a7waal', en: 'how are you and how are conditions → full Lebanese greeting (asking everything)', cat: 'street' },
  { ar: 'مزبوط', tr: 'mazbuuT', en: 'precise / correct → exactly right / nailed it', cat: 'street' },
  { ar: 'يسلموا', tr: 'yislamuu', en: 'may they be safe → thank you / well done (praising someone\'s work)', cat: 'street' },
  { ar: 'تكرم عينك', tr: 'tikram 3aynak', en: 'may your eye be honored → excuse me for what I said / pardon the expression', cat: 'street' },
  { ar: 'بس هيك', tr: 'bass heek', en: 'just like that → that\'s all / enough said', cat: 'street' },
  { ar: 'معلش', tr: 'ma3lish', en: 'never mind / it doesn\'t matter → versatile softener (apology, consolation)', cat: 'street' },
  { ar: 'بكفي', tr: 'bikaffi', en: 'it\'s enough → that\'s sufficient / stop it', cat: 'street' },
  { ar: 'يا عيني', tr: 'yaa 3ayni', en: 'oh my eye → oh dear / wow / term of endearment (surprise/affection)', cat: 'street' },
];

const EXP_DRILLS = [
  {
    q: 'Someone does you a favor and asks "can you help me move this weekend?" You enthusiastically agree. What do you say?',
    opts: ['معلش (ma3lish)', 'على راسي (3a raasi)', 'ما خصك (maa khaSSak)', 'بكفي (bikaffi)'],
    correct: 1,
    note: '"3a raasi" (on my head) is one of the most enthusiastic ways to accept a request in Lebanese. It literally means you\'re placing the obligation on your head — the most honored part of the body. Use it when you genuinely want to help or to show you\'re deeply honored. The English equivalent is "absolutely, with pleasure!" or "my pleasure!" Used constantly in Lebanese social interactions to show you\'re not just agreeing but eager.'
  },
  {
    q: 'A friend plans something but a Lebanese relative says "inshalla" without commitment. What does this usually signal in practice?',
    opts: ['guaranteed yes — inshalla means confirmed', 'maybe/probably not — inshalla is often a polite non-commitment', 'an insult', 'a religious vow'],
    correct: 1,
    note: '"Inshalla" literally means "if God wills" and is genuinely used for future plans with sincerity. But in practice it has a spectrum: said enthusiastically = yes. Said flatly = probably not. Said with a slow nod = definitely not. Lebanese and Arab comedians joke about this: "inshalla" as cultural avoidance. When someone says "inshalla ktiiir" (a lot of inshalla), they\'re definitely saying no. Context, tone, and body language decode it. The genuine version is "inshalla w in3am" (God willing and we\'ll see it done).'
  },
  {
    q: 'What does "ya3Tiik el 3aafiye" (يعطيك العافية) mean and when do you use it?',
    opts: ['get well soon (only for illness)', 'thank you for your effort / may God give you strength — said to someone who just worked', 'please help me', 'goodbye forever'],
    correct: 1,
    note: '"Ya3Tiik el 3aafiye" (may God give you health/strength) is one of the most useful Lebanese expressions. Say it: when a worker finishes a job at your house, when a waiter serves you, when someone helps you with something physical, when a cashier gives you change. The reply is "alla y3aafi-k" (may God strengthen you) or "alla ysalimak." It\'s the Lebanese equivalent of "thank you for your service" — acknowledging someone\'s effort specifically. Can\'t be overused — Lebanese say it constantly.'
  },
  {
    q: 'Your Lebanese friend worked very hard on a project but got nothing from it. What idiom describes their experience?',
    opts: ['"Tili3 b-khaffi 7aniin" — left with Hanin\'s shoes (left empty-handed)', '"bass heek" — just like that', '"dine 7ilwe" — beautiful world', '"3a raasi" — on my head'],
    correct: 0,
    note: '"Tili3 b-khaffi 7aniin" (he left with Hanin\'s shoes) is a famous Lebanese idiom from the story of Hanin, a cobbler who was cheated by a customer. The customer took one shoe, got on the horse, and the cobbler ran after him for the other shoe — eventually giving up and losing both. "Khaffi 7aniin" (Hanin\'s shoes) means you got cheated or walked away with nothing despite your effort. Equivalent to English "came away empty-handed" but with a tragicomic flavor.'
  },
  {
    q: 'Someone asks for directions and after your whole explanation gets confused again. You\'ve had it. Which phrase means "I\'m done / conversation over"?',
    opts: ['"alla kariim" (God is generous)', '"shu baddak ta3mil" (what do you want to do)', '"sakart el dukkaan" (I locked the shop)', '"yislamuu" (may they be safe)'],
    correct: 2,
    note: '"Sakart el dukkaan" (I locked the shop) means the discussion is over — you\'re closing up. Comes from the image of a shopkeeper rolling down the shutters at closing time. Used when you\'re tired of arguing, explaining, or dealing with a situation. Often said with exasperation: "sakart el dukkaan — ma fi shi tani!" (shop\'s closed — nothing more to say!). The phrase is final — it signals you\'re walking away from the topic. Very Lebanese in its merchant-culture metaphor.'
  },
  {
    q: 'A Lebanese friend compliments your cooking by saying "yislamuu ideek." What are they praising?',
    opts: ['your ingredients (from the market)', 'your hands — "may your hands be safe" (praising skill/craftsmanship)', 'your kitchen equipment', 'your family recipe'],
    correct: 1,
    note: '"Yislamuu ideek" (may your hands be safe) is a beautiful compliment meaning "your hands did amazing work." It specifically honors the skill in someone\'s hands — a chef, a craftsman, a seamstress. "Yislamuu" alone means "may they/you be safe" and is a general thank-you/praise. When someone does great physical or creative work: "yislamuu ideek." If they did great mental work: "yislamuu 3a2lak" (may your mind be safe). If they look great: "yislamuu suurtak" (may your image be safe). The formula [yislamuu + body part] = specific praise.'
  },
  {
    q: 'What does "tikram 3aynak" (تكرم عينك) mean and when do you use it?',
    opts: ['your eye is beautiful (a compliment)', 'pardon the expression / excuse me for saying this (used before something gross or harsh)', 'I can\'t see you (polite refusal)', 'look at this (pointing)'],
    correct: 1,
    note: '"Tikram 3aynak" (may your eye be honored) is a polite phrase used BEFORE saying something the listener might find offensive, gross, or shocking. Example: "tikram 3aynak, bt-7kii 3a 7adase" (excuse the expression, I\'m talking about a lentil — a humble food). It\'s like saying "pardon my language" or "if you\'ll excuse the expression" in English. Used constantly before mentioning body functions, death, dirty words, or anything that might seem improper. Shows social sensitivity — you\'re aware the topic is delicate.'
  },
  {
    q: 'Someone mentions "alla kariim" when talking about Lebanon\'s economic crisis. What are they expressing?',
    opts: ['anger at God', 'resignation mixed with hope — God is generous, things will work out eventually', 'a request for charity', 'denial that there is a crisis'],
    correct: 1,
    note: '"Alla kariim" (God is generous) is Lebanon\'s signature phrase for navigating impossible situations. With unemployment, inflation, power cuts, and crisis: "alla kariim." It\'s not denial — it\'s a deeply held belief that divine generosity can turn any situation, combined with the Lebanese resilience culture. The phrase carries both genuine faith and pragmatic fatalism. Lebanese use it constantly: when a plan fails, when money runs out, when the generator dies again. International observers note it as a key psychological coping mechanism. "Alla kariim, mniimshi" (God is generous, let\'s go).'
  },
  {
    q: 'A Lebanese host says "khod raa7tak" to a guest. What are they signaling?',
    opts: ['please leave when you\'re ready', 'make yourself at home / be comfortable — no formality needed', 'take a rest (you look tired)', 'help yourself to food'],
    correct: 1,
    note: '"Khod raa7tak" (take your comfort) is the Lebanese invitation to drop all formality. It means: relax, use what you need, don\'t stand on ceremony. Lebanese hospitality culture is intense — guests are sometimes overly formal about sitting, eating, using the bathroom. "Khod raa7tak" breaks the ice. It\'s the host signaling "you\'re family here." The reply is often "allah yraa7ik" (may God comfort you). Lebanese hospitality vocab: "ahla w sahla" (welcome), "tfaddal" (please come in/eat), "3a rasna" (you honor us).'
  },
  {
    q: 'What does "ma3lish" (معلش) mean and why is it one of the most versatile words in Lebanese Arabic?',
    opts: ['it means nothing — just a filler sound', 'it means "never mind / it\'s okay" — used as apology, consolation, and softener in dozens of contexts', 'it means "what do you want"', 'it\'s a formal apology only'],
    correct: 1,
    note: '"Ma3lish" (never mind / it doesn\'t matter) is one of the most useful words in Arabic. Meanings by context: after spilling something = "no worries / it\'s okay." After failing = "never mind, try again." After an awkward moment = "don\'t worry about it." To console someone = "it\'ll be okay." It derives from "maa 3laysh" (nothing upon you = no blame). Cross-dialect: used in Lebanese, Egyptian, Gulf. Lebanese use it constantly to smooth social friction. Counterpart: "maa 3layyi" (nothing on me = not my problem/fault — slightly defensive version).'
  },
];

const EXP_TIPS = [
  {
    title: '🗣️ The Art of Lebanese Complimenting',
    body: 'Lebanese compliments have a specific architecture. The formula "yislamuu + [body part/possession]" praises the skill or beauty connected to that part: "yislamuu ideek" (hands — for work), "yislamuu 3a2lak" (mind — for intelligence), "yislamuu suurtak" (face — for appearance), "yislamuu halak" (self — general). "Allah la ywassi3" (may God not make it bigger — a jealousy ward) often follows compliments — Lebanese fear the evil eye and deflect praise. Responding to compliments: always deflect. "Ktiirak" (you\'re more), "alla ybaarak fiik" (God bless you). Never just say "thanks" — reciprocate.'
  },
  {
    title: '🔄 Expressing Resignation: The Lebanese Toolkit',
    body: 'Lebanese have a rich vocabulary for navigating things outside their control: "inshalla" (if God wills — future hope), "alla kariim" (God is generous — present hope), "hiik el dine" (such is life — acceptance), "shu baddak ta3mil" (what can you do — helplessness), "ma3lish" (never mind — moving on), "2addaar alla" (as God decreed — fate acceptance). This toolkit reflects a culture shaped by political instability, war, and economic crises. It\'s NOT pessimism — it\'s a sophisticated coping system that allows Lebanese to remain warm, social, and functional under pressure. Recognizing which phrase fits the emotional register makes you sound natural.'
  },
  {
    title: '👁️ Eye (3ayn) Idioms in Lebanese Culture',
    body: 'The eye ("3ayn") appears in Lebanese idioms constantly because of the "evil eye" concept (3ayn el 7asad). "3ayni 3layk" (my eye is on you) = I\'m watching over you. "Biihu 3ayn" (he has an eye) = he might give the evil eye/he\'s jealous. "3ayn el 7asad" (eye of envy) causes bad luck. "Ma3 el 3ayn" (with the eye = something precious). "Zar2a" (blue bead) wards off evil eye. Tikram 3aynak precedes unpleasant subjects. Lebanese homes often have hamsa (hand) or blue bead decorations for protection. This isn\'t superstition to dismiss — it\'s a living cultural belief that shapes daily language.'
  },
  {
    title: '💰 Lebanese Money Idioms: Merchant Culture',
    body: 'Lebanon\'s Phoenician merchant heritage shaped money idioms. "Sakart el dukkaan" (shop\'s closed) = I\'m done. "Biyaa3 3a l-jaw" (selling to the air) = wasting effort on hopeless cause. "Shtara b-tiijaartu" (bought through his trade) = got something through shrewd dealing. "Ma fi shi bi-ballash" (nothing is free) = everything has a cost — deeply Lebanese. "Baddak tishtri ou baddak tibii3" (do you want to buy or sell?) = are you in or out? "Ma 3indo wa2t yishtri" (no time to shop) = too busy. Lebanese Arabic richly reflects a culture where commerce, bargaining, and the market are central social spaces.'
  },
  {
    title: '🏠 Hospitality & Guest Idioms',
    body: 'Lebanese hospitality vocabulary is elaborate: "ahla w sahla" (welcome — the most common), "tfaddal/tfaddali" (please — come in, sit, eat, take), "3a rasna" (on our heads — you honor us), "daarna daarak" (our house is your house), "khod raa7tak" (be comfortable), "kul/shrab" (eat/drink — said repeatedly). Refusing food: "alla ykhalliik" (God keep you — polite decline). Being forced to eat more: "3ib trufud" (shame to refuse). Lebanese hosts will repeat offers many times — the first refusal is social protocol; accept on the second or third. "Zeena l-beet" (you\'re the beauty of the house) = you honor us with your presence.'
  },
];

const EXP_ABOUT = 'Lebanese idioms are a window into the soul of the culture. They carry centuries of Phoenician merchant wisdom, mountain village values, Mediterranean hospitality, and the gallows humor of a people who\'ve survived wars, occupations, and economic crises. Mastering idioms means moving beyond "textbook Lebanese" into the way people actually speak — the expressions that make a native speaker laugh, nod, or think "they really know us." Every idiom connects to a cultural truth: "alla kariim" isn\'t just optimism, it\'s a survival strategy. "Sakart el dukkaan" isn\'t just ending a conversation, it\'s asserting dignity. "3a raasi" isn\'t just agreement, it\'s placing honor on the line. Learn the idiom, learn the culture.';
