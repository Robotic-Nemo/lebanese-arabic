// R864 — NEW FEATURE: Lebanese Grandparents & Teta/Jiddo Culture (tta)

const TTA_CATS = ['endearments','teta','jiddo','customs'];

const TTA_WORDS = [
  // endearments
  { a: 'تيتا', tr: 'tiita', en: 'grandma — the universal Lebanese grandmother name; saying it melts every Lebanese heart', cat: 'endearments' },
  { a: 'جدّو', tr: 'jiddo', en: 'grandpa — affectionate Lebanese form; some say "sido" in certain regions', cat: 'endearments' },
  { a: 'حبيب قلبي', tr: '7abiib 2albi', en: '"Love of my heart" — teta\'s standard greeting for any grandchild, said every time', cat: 'endearments' },
  { a: 'يسلم هالشب', tr: 'yislam hal-shabb', en: '"Bless this youth" — said admiringly by grandparents to a strapping grandchild', cat: 'endearments' },
  { a: 'عين عليك', tr: '3een 3leek', en: '"The eye on you" — protective phrase from grandparents warding off the evil eye', cat: 'endearments' },
  { a: 'ما في متلك', tr: 'ma fii mitlak', en: '"There is none like you" — the highest praise any teta can give a grandchild', cat: 'endearments' },
  { a: 'يعطيك العافية', tr: 'ya3Tiik il-3aafye', en: '"May God give you health" — said by grandparents after any task a grandchild does', cat: 'endearments' },
  // teta
  { a: 'شو بدك تاكل؟', tr: 'shu badak taakol?', en: '"What do you want to eat?" — teta\'s first question, asked within 30 seconds of arrival', cat: 'teta' },
  { a: 'خد شوي كمان', tr: 'khud shwayy kamaan', en: '"Take a little more" — teta insisting on more food, regardless of stated fullness', cat: 'teta' },
  { a: 'ما تروح بكير', tr: 'ma truu7 bakkiir', en: '"Don\'t leave early" — said every time a grandchild prepares to leave', cat: 'teta' },
  { a: 'رح تنساني', tr: 'ra7 tinsaani', en: '"You will forget me" — teta\'s gentle guilt trip when grandchildren visit infrequently', cat: 'teta' },
  { a: 'وجعتني هون', tr: 'waja3tini hoon', en: '"You hurt me here (heart)" — said when worried about a grandchild, pointing to chest', cat: 'teta' },
  { a: 'حكايات تيتا', tr: '7ikaayaat tiita', en: 'teta\'s stories — bedtime tales mixing Bible/Quran stories, village legends, and family lore', cat: 'teta' },
  { a: 'طبخة تيتا', tr: 'Tabkhit tiita', en: 'teta\'s cooking — the food every Lebanese person claims is the best in the world', cat: 'teta' },
  // jiddo
  { a: 'زمان كنّا', tr: 'zamaan kinna', en: '"Back in our day" — jiddo\'s opening line for every story about how things were better', cat: 'jiddo' },
  { a: 'من أيامنا', tr: 'min 2ayyaamna', en: '"From our days" — phrase marking the good old times jiddo references constantly', cat: 'jiddo' },
  { a: 'بوقتي كان', tr: 'b-wa2ti kaan', en: '"In my time it was" — jiddo explaining how everything modern is worse than before', cat: 'jiddo' },
  { a: 'يلا تعا اقعد', tr: 'yalla ta3a u23od', en: '"Come sit" — jiddo\'s invitation to sit beside him and hear a long story', cat: 'jiddo' },
  { a: 'بالأيام القديمة', tr: 'bil-2ayyaam il-2adiime', en: '"In the old days" — historical backdrop for every jiddo story about Lebanon before the war', cat: 'jiddo' },
  { a: 'اسمعني منيح', tr: 'isma3ni mnii7', en: '"Listen to me well" — jiddo\'s signal that important advice is coming', cat: 'jiddo' },
  // customs
  { a: 'كاسة قهوة', tr: 'kaasit ahwe', en: 'cup of coffee — mandatory offering to every grandchild who visits, non-negotiable', cat: 'customs' },
  { a: 'بيت الجدّ', tr: 'beet il-jadd', en: 'grandparents\' house — the family anchor; holidays, crises, and Sunday meals happen here', cat: 'customs' },
  { a: 'تبريك', tr: 'tabriik', en: 'blessing — grandparents touch the head and say a prayer over grandchildren for protection', cat: 'customs' },
  { a: 'مصروف', tr: 'maSruuf', en: 'pocket money — slipped secretly by teta into the grandchild\'s hand on the way out', cat: 'customs' },
  { a: 'صور القديمة', tr: 'Suwwar il-2adiime', en: 'old photos — framed black-and-white photos that jiddo explains for hours on Sunday', cat: 'customs' },
  { a: 'يوم الأحد', tr: 'yoom il-a7ad', en: 'Sunday — the mandatory weekly family gathering day centered at grandparents\' home', cat: 'customs' },
  { a: 'رح يفوت عليك', tr: 'ra7 yfuut 3leek', en: '"It will pass over you" — grandparent blessing, meaning prayers will protect you', cat: 'customs' },
  { a: 'دعيلك', tr: 'du3eelak', en: '"I pray for you" — what grandparents offer instead of money; their prayers are currency', cat: 'customs' }
];

const TTA_DRILLS = [
  { q: 'What is "grandma" in Lebanese?', opts: ['jiddo', 'tiita', '7abiib 2albi', 'tabriik'], ans: 1 },
  { q: '"There is none like you" — teta\'s highest praise?', opts: ['ya3Tiik il-3aafye', 'ma fii mitlak', '7abiib 2albi', 'yislam hal-shabb'], ans: 1 },
  { q: 'What does teta ask within 30 seconds of your arrival?', opts: ['ma truu7 bakkiir', 'shu badak taakol?', 'ra7 tinsaani', 'waja3tini hoon'], ans: 1 },
  { q: '"You will forget me" — teta\'s guilt trip phrase?', opts: ['ma fii mitlak', 'ra7 tinsaani', 'ma truu7 bakkiir', 'khud shwayy kamaan'], ans: 1 },
  { q: 'How do you say "grandpa" in Lebanese?', opts: ['tiita', 'sido', 'jiddo', 'jadd'], ans: 2 },
  { q: '"Back in our day" — jiddo\'s story opener?', opts: ['zamaan kinna', 'min 2ayyaamna', 'b-wa2ti kaan', 'bil-2ayyaam il-2adiime'], ans: 0 },
  { q: 'What is "pocket money (teta\'s secret gift)" in Lebanese?', opts: ['maSruuf', 'tabriik', 'du3eelak', 'Suwwar il-2adiime'], ans: 0 },
  { q: '"Listen to me well" — jiddo\'s advice signal?', opts: ['yalla ta3a u23od', 'isma3ni mnii7', 'b-wa2ti kaan', 'zamaan kinna'], ans: 1 },
  { q: 'What is "teta\'s cooking" in Lebanese?', opts: ['7ikaayaat tiita', 'Tabkhit tiita', 'kaasit ahwe', 'beet il-jadd'], ans: 1 },
  { q: '"Don\'t leave early" — said every departure?', opts: ['ra7 tinsaani', 'khud shwayy kamaan', 'ma truu7 bakkiir', 'waja3tini hoon'], ans: 2 },
  { q: 'What is "blessing" (grandparent prayer over child)?', opts: ['maSruuf', 'tabriik', 'du3eelak', '3een 3leek'], ans: 1 },
  { q: 'When do Lebanese families gather at grandparents\' home?', opts: ['Friday', 'Saturday', 'Sunday', 'Monday'], ans: 2 },
  { q: '"Come sit" — jiddo\'s invitation for a long story?', opts: ['isma3ni mnii7', 'yalla ta3a u23od', 'b-wa2ti kaan', 'zamaan kinna'], ans: 1 },
  { q: '"I pray for you" — grandparent\'s offering?', opts: ['tabriik', 'maSruuf', 'du3eelak', '7abiib 2albi'], ans: 2 },
  { q: 'What is mandatory when a grandchild visits?', opts: ['kaasit ahwe', 'Tabkhit tiita', 'yoom il-a7ad', 'Suwwar il-2adiime'], ans: 0 },
  { q: '"Love of my heart" — teta\'s standard greeting?', opts: ['ma fii mitlak', '7abiib 2albi', 'ya3Tiik il-3aafye', 'yislam hal-shabb'], ans: 1 }
];

const TTA_TIPS = [
  '<strong>The teta food cycle</strong>: Every Lebanese teta runs a three-phase loop: "shu badak taakol?" → pile the plate → "khud shwayy kamaan" regardless of what you say. Saying "I\'m full" (shibba3t) is treated as an opening negotiating position, not a final answer.',
  '<strong>Teta\'s guilt trips</strong>: "Ra7 tinsaani" (you\'ll forget me) and "ma btiiji" (you never come) are not complaints — they\'re love expressed as mild distress. The correct response is to hug her, insist you never forget, and schedule another visit. Then leave and actually come back.',
  '<strong>Jiddo\'s zamaan stories</strong>: "Zamaan kinna" (back in our day) opens every jiddo story about pre-war Lebanon — the mountains, the village, the price of things, the "real" people. These stories are priceless family history. Sit, listen, and ask questions. You\'ll only get them for so long.',
  '<strong>Teta\'s maSruuf</strong>: The secret pocket money slipped discreetly into a grandchild\'s hand as they leave is a universal Lebanese institution. Teta does this whether she can afford it or not. Refusing it causes more pain than accepting. Take it, thank her, and spend it on something good.',
  '<strong>Sunday at beet il-jadd</strong>: The Sunday family gathering at grandparents\' home is the anchor of Lebanese family life. Children bring children, neighbors drop in, food appears from everywhere. Missing without a serious excuse is noted. Teta keeps the social calendar in her head.',
  '<strong>Tabriik (blessing)</strong>: Lebanese grandparents — Christian and Muslim alike — place a hand on the grandchild\'s head and say a quiet prayer before the child leaves for something important (travel, exams, wedding). This blessing is taken seriously across all communities and generations.'
];
