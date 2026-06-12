// R1119 — NEW FEATURE: Lebanese Jalse & Evening Gathering Culture (jls)
const JLS_WORDS = [
  { ar: 'جلسة', tr: 'jalse', en: 'evening gathering / get-together' },
  { ar: 'عرق', tr: '3arak', en: 'arak (anise spirit)' },
  { ar: 'مزة', tr: 'mezze', en: 'mezze / small dishes spread' },
  { ar: 'طرب', tr: 'tarab', en: 'musical ecstasy / being moved by music' },
  { ar: 'عود', tr: '3oud', en: 'oud (lute)' },
  { ar: 'ناي', tr: 'nay', en: 'ney flute' },
  { ar: 'طبلة', tr: 'tabla', en: 'hand drum' },
  { ar: 'عتابا', tr: '3ataba', en: 'Lebanese folk poetry singing' },
  { ar: 'زجل', tr: 'zajal', en: 'improvised Lebanese folk poetry' },
  { ar: 'شاعر', tr: 'sha3er', en: 'poet' },
  { ar: 'مغنية', tr: 'mghannieh', en: 'singer (female)' },
  { ar: 'لمة', tr: 'lamme', en: 'close gathering / circle of friends' },
  { ar: 'مزاج', tr: 'mazaj', en: 'mood / vibe' },
  { ar: 'صحتين', tr: 'sa7tein', en: 'cheers / to your health (×2)' },
  { ar: 'كأس', tr: 'ke2s', en: 'glass / drink' },
  { ar: 'نقزة', tr: 'na2ze', en: 'spontaneous burst of joy during music' },
  { ar: 'نوّرتونا', tr: 'nawwartuna', en: 'you\'ve honored/lit up our gathering' },
  { ar: 'يسلم هالصوت', tr: 'yislam ha-ssot', en: 'bless that voice' },
  { ar: 'خمرة', tr: 'khamra', en: 'wine' },
  { ar: 'دق', tr: 'da2', en: 'beat / rhythm' },
  { ar: 'ليلة ما بتنسى', tr: 'leile ma btensa', en: 'unforgettable night' },
  { ar: 'روح الحفلة', tr: 'rou7 l-7afle', en: 'spirit of the gathering' },
  { ar: 'شو بتطرب', tr: 'shou btetrab', en: 'how it moves you! / so moving!' },
  { ar: 'ما رح يخلص', tr: 'ma ra7 yikhlas', en: 'it\'ll never end (the fun)' },
  { ar: 'الجلسة رح تكمل', tr: 'l-jalse ra7 tekmel', en: 'the gathering will go on' },
];

const JLS_DRILLS = [
  { q: 'جلسة', opts: ['house party','evening gathering','concert','picnic'], ans: 1 },
  { q: 'طرب', opts: ['drumming','stage fright','musical ecstasy','silence'], ans: 2 },
  { q: 'عتابا', opts: ['hip-hop','Lebanese folk poetry singing','pop music','rap battle'], ans: 1 },
  { q: 'زجل', opts: ['classical Arabic poetry','improvised Lebanese folk poetry','national anthem','love song'], ans: 1 },
  { q: 'لمة', opts: ['large public gathering','close gathering of friends','work meeting','family argument'], ans: 1 },
  { q: 'نقزة', opts: ['dance move','food craving','spontaneous burst of joy during music','leaving early'], ans: 2 },
  { q: 'صحتين', opts: ['bon appétit only','cheers / to your health (×2)','goodbye','good morning'], ans: 1 },
  { q: 'نوّرتونا', opts: ['you brought food','you\'ve honored our gathering','you sang badly','you left early'], ans: 1 },
  { q: 'يسلم هالصوت', opts: ['silence that voice','bless that voice','what a bad singer','turn it down'], ans: 1 },
  { q: 'مزاج', opts: ['food platter','drink','mood / vibe','musician'], ans: 2 },
];

const JLS_TIPS = [
  { title: 'The Arak Ritual', body: 'Lebanese arak (3arak) is never mixed randomly — water goes in first, then arak (it turns white), then ice. Never the reverse. Drinking it "straight" is considered brutal. The cloudiness when water hits is called "la7zet l-3arak" — the arak moment. At a jalse, someone always refills your ke2s before it\'s empty.' },
  { title: 'Tarab — When Music Takes Over', body: '"Tarab" (طرب) has no English equivalent — it\'s the state of being transported, overwhelmed, and united by music. A great singer "ytarreb" the room; people close their eyes, sway, emit "na2zat" (spontaneous gasps of joy). The highest compliment: "yislam ha-ssot!" — bless that voice.' },
  { title: '3ataba & Zajal', body: '"3ataba" (عتابا) is a traditional Lebanese sung-poetry form, usually about longing and loss. "Zajal" (زجل) is competitive improvised poetry — two sha3ers (poets) trade rhymed verses, often wit and wordplay, while the crowd urges them on. Both are living art forms, especially in mountain villages.' },
  { title: 'The Lebanese Jalse Etiquette', body: '"Nawwartuna" (نوّرتونا — you\'ve lit us up) is said when a guest arrives or a great song begins. A jalse never has a fixed end time — "ma ra7 yikhlas" is a badge of honor. The host who says "mawkef el-3arak?" (is the arak set up?) signals the gathering is serious.' },
];
