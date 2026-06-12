// R1350 — NEW FEATURE: Lebanese Bread & Bakery Culture (brd)
const BRD_WORDS = [
  { ar: 'khobez', tr: 'bread', en: 'bread (generic)' },
  { ar: 'man2ouche', tr: 'manakish', en: 'za3tar flatbread / Lebanese pizza' },
  { ar: 'markouk', tr: 'mountain bread', en: 'thin mountain flatbread' },
  { ar: 'ka3k', tr: 'sesame ring bread', en: 'sesame-crusted bread ring' },
  { ar: 'saj', tr: 'saj griddle', en: 'domed griddle for flatbread' },
  { ar: 'tannour', tr: 'clay oven', en: 'traditional clay bread oven' },
  { ar: '3ajin', tr: 'dough', en: 'bread dough' },
  { ar: 'khamire', tr: 'yeast', en: 'yeast / leavening agent' },
  { ar: 'firon', tr: 'bakery oven', en: 'bakery / oven (colloquial)' },
  { ar: 'forran', tr: 'baker', en: 'professional baker' },
  { ar: 'khobez 3arabi', tr: 'pita bread', en: 'Arabic pita bread' },
  { ar: '2obbet l-3ajin', tr: 'dough ball', en: 'ball of dough (ready to roll)' },
  { ar: '3ajan', tr: 'knead (verb)', en: 'to knead dough' },
  { ar: 'mistwi / mekhbuz', tr: 'baked', en: 'baked / cooked' },
  { ar: 'forno', tr: 'wood oven', en: 'wood-fired oven (Italian loan)' },
  { ar: 'rghif', tr: 'loaf', en: 'loaf of bread' },
  { ar: '2eshra', tr: 'bread crust', en: 'crust / crusty end piece' },
  { ar: 'baklawa', tr: 'baklava', en: 'baklava pastry' },
  { ar: 'ma3moul', tr: "ma'amoul", en: 'stuffed shortbread cookie' },
  { ar: 'sfiha', tr: 'meat pie', en: 'open-faced meat pie' }
];

const BRD_DRILLS = [
  { q: 'What is "man2ouche"?', opts: ['sesame ring bread', 'za3tar flatbread', 'mountain bread', 'pita bread'], a: 1 },
  { q: 'Which word means "baker"?', opts: ['forran', 'firon', 'tannour', 'khamire'], a: 0 },
  { q: 'What is a "saj"?', opts: ['clay oven', 'dough ball', 'domed griddle', 'loaf of bread'], a: 2 },
  { q: '"Markouk" refers to:', opts: ['baklava pastry', 'pita bread', 'thin mountain flatbread', 'sesame ring bread'], a: 2 },
  { q: 'What does "3ajan" mean?', opts: ['to bake', 'to knead dough', 'to roll out', 'to slice bread'], a: 1 },
  { q: 'Which is a stuffed shortbread cookie?', opts: ['sfiha', 'ka3k', 'baklawa', 'ma3moul'], a: 3 },
  { q: '"3ajin" means:', opts: ['yeast', 'dough', 'bread crust', 'loaf'], a: 1 },
  { q: 'What is "2eshra"?', opts: ['bread crust / end piece', 'dough ball', 'wood oven', 'pita bread'], a: 0 }
];

const BRD_TIPS = [
  'The bakery (forno or firon) is a morning institution in Lebanon — families send children at dawn to bring fresh man2ouche or ka3k before school. The smell of saj bread is one of the most nostalgic Lebanese sensory memories.',
  'Markouk bread (mountain flatbread) is so thin you can read through it. It\'s made on a domed saj and dried to preserve it — mountain families would store stacks of dried markouk for winter, softening it with water when needed.',
  '"Khobez" is the backbone of every Lebanese meal — used as utensil, plate, and food simultaneously. Wasting bread is considered deeply disrespectful; grandmothers say "il-khobez barake" (bread is a blessing).',
  'Ma3moul cookies (filled with dates, walnuts, or pistachios) are the official pastry of both Eid and Easter in Lebanon — shared across religious communities, they symbolize the Lebanese tradition of celebrating together regardless of faith.'
];
