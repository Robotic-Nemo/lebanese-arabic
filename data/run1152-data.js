// R1152 — NEW FEATURE: Lebanese Corniche & Waterfront Culture (krn)

const KRN_WORDS = [
  { ar: 'كورنيش', tr: 'kornish', en: 'corniche / seafront promenade' },
  { ar: 'بحر', tr: 'ba7r', en: 'sea' },
  { ar: 'موج', tr: 'mawj', en: 'wave' },
  { ar: 'صخرة', tr: 'sakhra', en: 'rock' },
  { ar: 'صيّاد', tr: 'sayyad', en: 'fisherman' },
  { ar: 'سنّارة', tr: 'sannara', en: 'fishing rod' },
  { ar: 'مشوار', tr: 'mishwar', en: 'stroll / walk' },
  { ar: 'غروب', tr: 'ghroub', en: 'sunset' },
  { ar: 'بائع', tr: 'bay3', en: 'street vendor' },
  { ar: 'ذرة مشوية', tr: 'zra msheyyeh', en: 'grilled corn' },
  { ar: 'فول سوداني', tr: 'fool soudani', en: 'peanuts' },
  { ar: 'دراجة', tr: 'drajeh', en: 'bicycle' },
  { ar: 'مشي', tr: 'mashye', en: 'walking / on foot' },
  { ar: 'ضباب', tr: 'dabbab', en: 'fog / haze' },
  { ar: 'نسيم', tr: 'naseem', en: 'breeze' },
  { ar: 'رياضة', tr: 'riyede', en: 'sport / exercise' },
  { ar: 'ملعب', tr: 'mal3ab', en: 'playground / court' },
  { ar: 'مياه', tr: 'miyeh', en: 'water' },
  { ar: 'أفق', tr: 'ofo2', en: 'horizon' },
  { ar: 'غيوم', tr: 'ghyoum', en: 'clouds' },
];

const KRN_DRILLS = [
  {
    q: 'How do you say "corniche" in Lebanese Arabic?',
    opts: ['ba7r', 'kornish', 'mashye', 'naseem'],
    ans: 1
  },
  {
    q: 'What does "sayyad" mean?',
    opts: ['wave', 'vendor', 'fisherman', 'breeze'],
    ans: 2
  },
  {
    q: 'How do you say "sunset"?',
    opts: ['ghroub', 'mawj', 'ofo2', 'dabbab'],
    ans: 0
  },
  {
    q: '"Mishwar" means:',
    opts: ['fishing rod', 'bicycle', 'stroll / walk', 'rock'],
    ans: 2
  },
  {
    q: 'How do you say "breeze"?',
    opts: ['ghyoum', 'naseem', 'miyeh', 'ba7r'],
    ans: 1
  },
  {
    q: 'What is "zra msheyyeh"?',
    opts: ['peanuts', 'grilled corn', 'vendor', 'fog'],
    ans: 1
  },
  {
    q: '"Drajeh" means:',
    opts: ['horizon', 'clouds', 'playground', 'bicycle'],
    ans: 3
  },
  {
    q: 'How do you say "horizon"?',
    opts: ['ofo2', 'mawj', 'sakhra', 'riyede'],
    ans: 0
  },
];

const KRN_TIPS = [
  'The Beirut Corniche (Kornish Bayrout) stretches along the seafront from Ain el-Mreisseh to Raouche — a social institution where Beirutis walk, fish, and people-watch at all hours.',
  'Grilled corn (zra msheyyeh — ذرة مشوية) and peanut vendors (fool soudani) are classic corniche snacks; the smell of roasting corn is synonymous with an evening by the sea.',
  'Fishermen cast lines off the corniche rocks (sakhra) early morning and late afternoon — the Pigeon Rocks (Rawsheh) area is the most iconic spot for fishing and sunset photos.',
  'Evening walks on the corniche are a family ritual especially in summer — couples, grandparents, kids on bicycles, and groups of friends all share the same promenade without any formality.',
];
