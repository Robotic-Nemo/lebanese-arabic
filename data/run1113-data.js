// R1113 — NEW FEATURE: Lebanese Promenade & Walking Culture (msh)
const MSH_WORDS = [
  { ar: 'تمشّى', tr: 'tmasha', en: 'went for a walk' },
  { ar: 'الكورنيش', tr: 'l-kornish', en: 'the corniche / waterfront promenade' },
  { ar: 'نزهة', tr: 'nozhe', en: 'stroll / outing' },
  { ar: 'مشي', tr: 'mshi', en: 'walking' },
  { ar: 'فسحة', tr: 'fos7a', en: 'free time / casual outing' },
  { ar: 'طلعنا', tr: "tla3na", en: 'we went out' },
  { ar: 'حديقة', tr: '7adiqe', en: 'park / garden' },
  { ar: 'شارع', tr: "share3", en: 'street' },
  { ar: 'رصيف', tr: 'rssif', en: 'sidewalk / pavement' },
  { ar: 'غروب', tr: 'ghroub', en: 'sunset' },
  { ar: 'هوا', tr: 'hawa', en: 'air / breeze' },
  { ar: 'منظر', tr: 'manzar', en: 'view / scenery' },
  { ar: 'مبسوط', tr: 'mabsout', en: 'happy / content' },
  { ar: 'سهرة', tr: 'sahre', en: 'evening out' },
  { ar: 'ع مهلك', tr: "3a mahlak", en: 'take your time / easy does it' },
  { ar: 'وقفنا', tr: "wa2afna", en: 'we stopped' },
  { ar: 'مكان حلو', tr: 'makan 7elo', en: 'nice place' },
  { ar: 'تعا نتمشى', tr: "ta3a ntmasha", en: "come let's go for a walk" },
  { ar: 'قاعدين نمشي', tr: "2a3din nmshi", en: "we're walking / taking a stroll" },
  { ar: 'شو رأيك نطلع', tr: "shu ra2yek ntla3", en: 'what do you think, shall we go out?' },
  { ar: 'اتمشّينا كتير', tr: 'tmashhayna ktir', en: 'we walked a lot' },
  { ar: 'قهوة ع الكورنيش', tr: "ahwe 3al kornish", en: 'coffee on the corniche' },
  { ar: 'متل البشر', tr: "mtel l-bashar", en: 'like normal people / properly' },
  { ar: 'بحر', tr: "ba7r", en: 'sea' },
  { ar: 'دوّار', tr: 'dawwar', en: 'roundabout / circular plaza' },
];

const MSH_DRILLS = [
  { q: 'تمشّى', opts: ['went for a walk','stayed home','ran fast','sat down'], ans: 0 },
  { q: 'الكورنيش', opts: ['the market','the corniche','the school','the café'], ans: 1 },
  { q: 'نزهة', opts: ['argument','stroll / outing','heavy rain','loud music'], ans: 1 },
  { q: 'غروب', opts: ['sunrise','midnight','sunset','noon'], ans: 2 },
  { q: 'ع مهلك', opts: ['hurry up','be quiet','take your time','come here'], ans: 2 },
  { q: 'تعا نتمشى', opts: ["let's eat","come let's walk","go home","sit down"], ans: 1 },
  { q: 'مبسوط', opts: ['tired','angry','happy / content','confused'], ans: 2 },
  { q: 'سهرة', opts: ['morning nap','lunch break','evening out','quick errand'], ans: 2 },
  { q: 'منظر', opts: ['noise','view / scenery','shortcut','traffic jam'], ans: 1 },
  { q: 'شو رأيك نطلع', opts: ['where are you?','shall we go out?','what did you eat?','who called?'], ans: 1 },
];

const MSH_TIPS = [
  { title: 'Corniche Culture', body: 'The Beirut Corniche (كورنيش البحر) is the social heart of the city — Lebanese walk here at all hours for coffee, people-watching, and family outings. "Yalla nroo7 3al kornish" (يلا نروح ع الكورنيش) is a common spontaneous plan.' },
  { title: 'Fos7a vs Nozhe', body: '"Fos7a" (فسحة) is any casual outing or bit of free time, while "nozhe" (نزهة) specifically means a leisure stroll or picnic outing. Both are beloved concepts in Lebanese social life.' },
  { title: '3a mahlak', body: '"3a mahlak" (ع مهلك) means "at your pace / take it easy." Lebanese use it both literally when walking and figuratively to tell someone not to rush or stress.' },
  { title: 'Sahre', body: '"Sahre" (سهرة) is a cherished Lebanese tradition — an evening out with friends or family, often starting late (10pm+). It can be a walk, dinner, café visit, or all three.' },
];
