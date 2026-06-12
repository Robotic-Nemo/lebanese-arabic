// R1116 — NEW FEATURE: Lebanese School Field Trip & Excursion Culture (rhl)
const RHL_WORDS = [
  { ar: 'رحلة', tr: 'ri7le', en: 'field trip / excursion' },
  { ar: 'باص المدرسة', tr: 'bas l-madrase', en: 'school bus' },
  { ar: 'مرشد', tr: 'murshid', en: 'tour guide' },
  { ar: 'متحف', tr: 'mat7af', en: 'museum' },
  { ar: 'آثار', tr: 'athar', en: 'ruins / antiquities' },
  { ar: 'بعلبك', tr: "ba3lebek", en: 'Baalbek (Roman ruins)' },
  { ar: 'جبيل', tr: 'jbeil', en: 'Byblos (ancient city)' },
  { ar: 'الأرز', tr: "l-arz", en: 'the Cedars (cedar forest)' },
  { ar: 'شلال', tr: 'shalal', en: 'waterfall' },
  { ar: 'غابة', tr: 'ghabe', en: 'forest / woods' },
  { ar: 'مكان تاريخي', tr: 'makan ta2rikhi', en: 'historical site' },
  { ar: 'صورة', tr: 'soura', en: 'photo' },
  { ar: 'منظر', tr: 'manzar', en: 'view / scenery' },
  { ar: 'ضياع', tr: "diya3", en: 'getting lost' },
  { ar: 'ساندويشات', tr: 'sandwishet', en: 'sandwiches (packed lunch)' },
  { ar: 'مرتجف', tr: 'mortajef', en: 'shivering (cold at cedars)' },
  { ar: 'تذكرة دخول', tr: "tazkaret dokhoul", en: 'entrance ticket' },
  { ar: 'حارس', tr: '7ares', en: 'guard / security' },
  { ar: 'تاريخ', tr: 'tarikh', en: 'history' },
  { ar: 'قلعة', tr: 'al2a', en: 'castle / fortress' },
  { ar: 'فينيقي', tr: 'finiki', en: 'Phoenician' },
  { ar: 'روماني', tr: 'roumani', en: 'Roman' },
  { ar: 'يلا نتحرك', tr: "yalla nit7arrak", en: "let's get moving" },
  { ar: 'لا تبعدوا', tr: "la tib3adou", en: "don't wander off" },
  { ar: 'اجتمعوا هون', tr: "ijtama3ou houn", en: 'gather here' },
];

const RHL_DRILLS = [
  { q: 'رحلة', opts: ['homework','field trip','exam','party'], ans: 1 },
  { q: 'متحف', opts: ['school','museum','bus','forest'], ans: 1 },
  { q: 'آثار', opts: ['pictures','tickets','ruins / antiquities','buses'], ans: 2 },
  { q: 'بعلبك', opts: ['the cedars','Byblos','Beirut port','Baalbek'], ans: 3 },
  { q: 'الأرز', opts: ['the sea','the ruins','the Cedars','the museum'], ans: 2 },
  { q: 'شلال', opts: ['mountain','waterfall','forest','castle'], ans: 1 },
  { q: 'قلعة', opts: ['ticket','guide','castle / fortress','picnic'], ans: 2 },
  { q: 'يلا نتحرك', opts: ["sit down","let's get moving","take a photo","be quiet"], ans: 1 },
  { q: 'ضياع', opts: ['arriving early','taking photos','getting lost','buying tickets'], ans: 2 },
  { q: 'لا تبعدوا', opts: ["hurry up","don't wander off","look at this","let's eat"], ans: 1 },
];

const RHL_TIPS = [
  { title: 'Baalbek & Byblos', body: '"Ba3lebek" (بعلبك) and "Jbeil" (جبيل) are the two most common school trip destinations in Lebanon — Ba3lebek for its massive Roman temples, Jbeil for Phoenician and Crusader ruins. Lebanese students say "ri7na 3al athar" (رحنا ع الآثار) for both.' },
  { title: 'The Cedars (L-Arz)', body: '"L-Arz" (الأرز) refers to the Cedars of God forest in north Lebanon. School trips here often end with students "mortajfin" (shivering) from cold, wearing each other\'s jackets, and taking group photos by the ancient trees.' },
  { title: 'Packed Lunch Culture', body: 'Moms pack "sandwishet" (ساندويشات) and juice boxes the night before a ri7le. Sharing and trading sandwiches on the bas is a rite of passage — za3tar, jebneh, or labneh wra2a.' },
  { title: 'The Tour Guide Problem', body: 'The "murshid" (مرشد) talks, but Lebanese school kids rarely listen — they\'re too busy taking selfies, chasing each other around columns, or sneaking chips near the archaeological sites. Teachers spend half the trip shouting "ijtama3ou houn!" (gather here!).' },
];
