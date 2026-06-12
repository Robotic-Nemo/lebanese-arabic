// R1044 — NEW FEATURE: Lebanese Childhood & Street Games Culture (chd)

const CHD_WORDS = [
  // games
  { ar: 'استغماية', tr: 'istaghmaaye', eng: 'hide and seek', cat: 'games' },
  { ar: 'حجلة', tr: '7ajle', eng: 'hopscotch', cat: 'games' },
  { ar: 'شلة', tr: 'shille', eng: 'marbles / glass balls', cat: 'games' },
  { ar: 'حبل القفز', tr: '7abl il-2afiz', eng: 'skipping rope', cat: 'games' },
  { ar: 'طاق طاق طاقية', tr: 'Taa2 Taa2 Taa2iye', eng: 'duck duck goose (Lebanese version)', cat: 'games' },
  { ar: 'غمة', tr: 'ghomme', eng: 'blindfolded / it (in tag)', cat: 'games' },
  { ar: 'مسابقة', tr: 'msaabaqa', eng: 'race / competition', cat: 'games' },
  // street life
  { ar: 'حارة', tr: '7aara', eng: 'alley / neighbourhood lane', cat: 'street' },
  { ar: 'سطح', tr: 'saTe7', eng: 'rooftop (play area)', cat: 'street' },
  { ar: 'حيط', tr: '7eeT', eng: 'wall (to draw/play on)', cat: 'street' },
  { ar: 'درج', tr: 'darray', eng: 'stairs / steps', cat: 'street' },
  { ar: 'فسحة', tr: 'fis7a', eng: 'break time / open space', cat: 'street' },
  // school
  { ar: 'مدرسة', tr: 'madrase', eng: 'school', cat: 'school' },
  { ar: 'كراس', tr: 'karraas', eng: 'notebook / exercise book', cat: 'school' },
  { ar: 'قلم', tr: '2alam', eng: 'pen / pencil', cat: 'school' },
  { ar: 'حقيبة مدرسية', tr: '7a2iibe madrasiyye', eng: 'school bag', cat: 'school' },
  { ar: 'استراحة', tr: 'istiraa7a', eng: 'break / recess', cat: 'school' },
  { ar: 'واجب', tr: 'waajib', eng: 'homework', cat: 'school' },
  // food & treats
  { ar: 'بوظة', tr: 'booZa', eng: 'ice cream', cat: 'food' },
  { ar: 'فلافل بالخبز', tr: 'falaafil bil-khubz', eng: 'falafel sandwich (classic school snack)', cat: 'food' },
  { ar: 'عصير', tr: '3aSiir', eng: 'juice', cat: 'food' },
  { ar: 'حلوى', tr: '7alwa', eng: 'sweets / candy', cat: 'food' },
  // expressions
  { ar: 'دورك', tr: 'doorak', eng: 'your turn (m)', cat: 'expressions' },
  { ar: 'دوري', tr: 'doori', eng: 'my turn', cat: 'expressions' },
  { ar: 'غشاش', tr: 'ghashhaash', eng: 'cheat / cheater', cat: 'expressions' },
  { ar: 'مو عدل', tr: 'muu 3adil', eng: 'not fair!', cat: 'expressions' },
  { ar: 'روح عالبيت', tr: 'ruu7 3al-beet', eng: 'go home! (classic dismissal)', cat: 'expressions' },
  { ar: 'لعبنا كتير', tr: 'la3abna ktiir', eng: 'we played a lot', cat: 'expressions' },
  { ar: 'شو بدنا نلعب؟', tr: 'shuu baddna nil3ab?', eng: 'what shall we play?', cat: 'expressions' },
  { ar: 'بدي روح عالبيت', tr: 'baddii ruu7 3al-beet', eng: 'I want to go home', cat: 'expressions' },
];

const CHD_CATS = ['all', 'games', 'street', 'school', 'food', 'expressions'];

const CHD_DRILLS = [
  {
    q: '"istaghmaaye" (استغماية) is:',
    opts: ['hopscotch', 'hide and seek', 'marbles', 'skipping rope'],
    ans: 1
  },
  {
    q: '"7ajle" (حجلة) is:',
    opts: ['hide and seek', 'tag', 'hopscotch', 'a race'],
    ans: 2
  },
  {
    q: '"ghomme" (غمة) means:',
    opts: ['a winner', 'blindfolded / it in tag', 'a cheat', 'a race'],
    ans: 1
  },
  {
    q: '"ghashhaash" (غشاش) means:',
    opts: ['your turn', 'fair play', 'cheater', 'my turn'],
    ans: 2
  },
  {
    q: '"muu 3adil" (مو عدل) means:',
    opts: ['your turn', 'not fair!', 'go home!', 'well done'],
    ans: 1
  },
  {
    q: '"doorak" (دورك) means:',
    opts: ['my turn', 'game over', 'your turn (m)', 'let\'s play'],
    ans: 2
  },
  {
    q: '"7aara" (حارة) is a:',
    opts: ['school', 'rooftop', 'alley / neighbourhood lane', 'playground'],
    ans: 2
  },
  {
    q: '"karraas" (كراس) is a:',
    opts: ['school bag', 'pencil case', 'notebook / exercise book', 'pen'],
    ans: 2
  },
  {
    q: '"istiraa7a" (استراحة) means:',
    opts: ['homework', 'lesson', 'break / recess', 'notebook'],
    ans: 2
  },
  {
    q: '"booZa" (بوظة) is:',
    opts: ['a sandwich', 'ice cream', 'candy', 'juice'],
    ans: 1
  },
  {
    q: '"waajib" (واجب) means:',
    opts: ['break time', 'school bag', 'teacher', 'homework'],
    ans: 3
  },
  {
    q: '"7abl il-2afiz" (حبل القفز) is:',
    opts: ['a game of tag', 'marbles', 'skipping rope', 'hopscotch'],
    ans: 2
  },
  {
    q: '"shuu baddna nil3ab?" (شو بدنا نلعب؟) means:',
    opts: ['I want to go home', 'what shall we play?', 'your turn', 'we played a lot'],
    ans: 1
  },
  {
    q: '"fis7a" (فسحة) means:',
    opts: ['a wall', 'stairs', 'break time / open space', 'rooftop'],
    ans: 2
  },
  {
    q: '"shille" (شلة) in childhood games refers to:',
    opts: ['a gang of friends', 'marbles / glass balls', 'a race', 'hide and seek'],
    ans: 1
  },
];

const CHD_TIPS = [
  {
    title: 'The 7aara: Lebanon\'s Original Playground',
    body: 'Before smartphones and malls, the "7aara" (neighbourhood alley) was where Lebanese children grew up. Narrow, shaded, and usually car-free by day, it was the stage for "istaghmaaye" (hide and seek), "7ajle" (hopscotch) drawn in chalk, and endless rounds of tag. Neighbours knew every child by name. The 7aara was also where you got called home — the classic "ruu7 3al-beet!" shouted from a window was the signal that dinner (or dark) had arrived.'
  },
  {
    title: 'Shille: More Than Marbles',
    body: '"Shille" (شلة) literally means marbles — the glass balls children flicked with their thumbs — but it\'s also everyday Lebanese slang for your "crew" or close friends. "Wiin shilltak?" means "where\'s your group?" A good shille game required serious skill: the best players could crack opponents\' marbles on the first flick. Serious shille players kept their prized marbles in a cloth bag and guarded them jealously.'
  },
  {
    title: 'School Culture: Fis7a & Waajib',
    body: 'Lebanese school kids operated on two states: "istiraa7a" (recess) and "waajib" (homework). The "fis7a" (break / open space) was treasured — usually 20 minutes of chaotic energy. After school, the universal dread was the waajib. Lebanese parents took it seriously: "3amalte waajibak?" (did you do your homework?) was heard in every household. The "karraas" (notebook) had to be covered in plastic wrap and labelled — a serious ritual.'
  },
  {
    title: 'Lebanese Childhood Sweets',
    body: '"Booze" (بوظة — Lebanese ice cream) from the corner vendor was the ultimate reward. Unlike Western ice cream, Lebanese "booZa" is stretchy and chewy (made with mastic and sahlab), scooped and sometimes rolled in pistachios. A "7alwa" (sweet) from the "dukkaan" (corner shop) cost a few hundred liire. The "falaafil bil-khubz" (falafel sandwich) was the standard school-gate snack — cheap, filling, and eaten standing up.'
  },
  {
    title: 'Games & Fairness: The Lebanese Way',
    body: '"Muu 3adil!" (not fair!) is among the most-used phrases in Lebanese childhood — and adult — life. Lebanese games were rarely refereed: disputes were settled loudly, with everyone arguing at once. "Doorak" (your turn) could trigger a ten-minute debate. "Ghashhaash!" (cheat!) was a serious accusation. The beauty was that somehow, games resumed. Lebanese children learned early that chaos and fun coexist — good preparation for adult life in Lebanon.'
  },
];
