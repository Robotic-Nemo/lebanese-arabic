// R1050 — NEW FEATURE: Lebanese Morning & Breakfast Culture (sbh)

const SBH_WORDS = [
  // morning greetings
  { ar: 'صباح الخير', tr: 'sabaH il-kheir', eng: 'good morning', cat: 'greetings' },
  { ar: 'صباح النور', tr: 'sabaH in-nuur', eng: 'good morning (reply)', cat: 'greetings' },
  { ar: 'صباح الورد', tr: 'sabaH il-ward', eng: 'morning of roses (warm greeting)', cat: 'greetings' },
  { ar: 'صباح الياسمين', tr: 'sabaH il-yaasmiyn', eng: 'morning of jasmine (poetic reply)', cat: 'greetings' },
  { ar: 'كيفك الصبح؟', tr: 'kiifak iS-SubH?', eng: 'how are you this morning?', cat: 'greetings' },
  { ar: 'وجه الخير', tr: 'wiij il-kheir', eng: 'face of goodness (morning blessing)', cat: 'greetings' },
  // breakfast foods
  { ar: 'فول مدمس', tr: 'fuul medammes', eng: 'stewed fava beans', cat: 'food' },
  { ar: 'حمص', tr: '7ummuS', eng: 'hummus', cat: 'food' },
  { ar: 'لبنة', tr: 'labneh', eng: 'strained yogurt cheese', cat: 'food' },
  { ar: 'زعتر', tr: 'za3tar', eng: 'thyme & spice mix (with olive oil)', cat: 'food' },
  { ar: 'بيض', tr: 'beid', eng: 'eggs', cat: 'food' },
  { ar: 'جبنة بيضا', tr: 'jibneh beiDa', eng: 'white cheese', cat: 'food' },
  { ar: 'مربى', tr: 'mrabb', eng: 'jam / preserves', cat: 'food' },
  { ar: 'كعك', tr: 'ka3k', eng: 'sesame bread rings', cat: 'food' },
  // drinks
  { ar: 'قهوة', tr: '2ahweh', eng: 'coffee', cat: 'drinks' },
  { ar: 'شاي', tr: 'shaay', eng: 'tea', cat: 'drinks' },
  { ar: 'نسكافيه', tr: 'nescafe', eng: 'instant coffee (Nescafé)', cat: 'drinks' },
  { ar: 'عصير', tr: '3asiir', eng: 'fresh juice', cat: 'drinks' },
  { ar: 'حليب', tr: 'Haliib', eng: 'milk', cat: 'drinks' },
  // morning phrases
  { ar: 'صحة وعافية', tr: 'Sa77a w 3aafye', eng: 'good health (said after eating)', cat: 'phrases' },
  { ar: 'على قلبك', tr: '3a albak', eng: 'on your heart (reply to Sa77a)', cat: 'phrases' },
  { ar: 'عالصبحية', tr: '3a S-Sub7iyye', eng: 'at breakfast / in the morning', cat: 'phrases' },
  { ar: 'فطّرت؟', tr: 'fatTart?', eng: 'did you have breakfast?', cat: 'phrases' },
  { ar: 'وقفلي', tr: 'wa2fillii', eng: 'keep some for me (morning banter)', cat: 'phrases' },
  { ar: 'من الآخر', tr: 'min il-aakhir', eng: 'straight to the point / skip the formalities', cat: 'phrases' },
  // bakery / morning routine
  { ar: 'فرن', tr: 'furn', eng: 'bakery / oven', cat: 'routine' },
  { ar: 'خبز', tr: 'khubz', eng: 'bread', cat: 'routine' },
  { ar: 'زبدة', tr: 'zibde', eng: 'butter', cat: 'routine' },
  { ar: 'رح يصحى', tr: 'raH yiS7a', eng: 'he\'ll wake up (any time now)', cat: 'routine' },
  { ar: 'مو صاحي', tr: 'muu SaaHi', eng: 'not awake yet / still groggy', cat: 'routine' },
];

const SBH_CATS = ['all', 'greetings', 'food', 'drinks', 'phrases', 'routine'];

const SBH_DRILLS = [
  {
    q: '"sabaH il-kheir" (صباح الخير) means:',
    opts: ['good night', 'good morning', 'good afternoon', 'good evening'],
    ans: 1
  },
  {
    q: '"sabaH in-nuur" (صباح النور) is:',
    opts: ['morning of flowers', 'good morning (reply)', 'good night reply', 'have a nice day'],
    ans: 1
  },
  {
    q: '"fuul medammes" (فول مدمس) is:',
    opts: ['strained yogurt', 'hummus', 'stewed fava beans', 'sesame rings'],
    ans: 2
  },
  {
    q: '"labneh" (لبنة) is:',
    opts: ['fresh juice', 'strained yogurt cheese', 'white cheese', 'butter'],
    ans: 1
  },
  {
    q: '"za3tar" (زعتر) is:',
    opts: ['hummus dip', 'thyme & spice mix', 'stewed beans', 'sesame bread'],
    ans: 1
  },
  {
    q: '"ka3k" (كعك) are:',
    opts: ['sesame bread rings', 'jam preserves', 'fried eggs', 'butter pastries'],
    ans: 0
  },
  {
    q: '"Sa77a w 3aafye" (صحة وعافية) is said:',
    opts: ['before eating', 'after eating', 'when greeting in the morning', 'when leaving'],
    ans: 1
  },
  {
    q: '"fatTart?" (فطّرت؟) means:',
    opts: ['are you awake?', 'did you have breakfast?', 'what time is it?', 'are you hungry?'],
    ans: 1
  },
  {
    q: '"muu SaaHi" (مو صاحي) means:',
    opts: ['very hungry', 'not awake yet / groggy', 'just woke up', 'at the bakery'],
    ans: 1
  },
  {
    q: '"wiij il-kheir" (وجه الخير) is:',
    opts: ['good afternoon', 'face of goodness (morning blessing)', 'how are you?', 'morning of roses'],
    ans: 1
  },
  {
    q: '"furn" (فرن) means:',
    opts: ['kitchen', 'bakery / oven', 'café', 'market'],
    ans: 1
  },
  {
    q: '"3a S-Sub7iyye" (عالصبحية) means:',
    opts: ['good night', 'at the bakery', 'at breakfast / in the morning', 'after lunch'],
    ans: 2
  },
  {
    q: '"sabaH il-ward" (صباح الورد) means:',
    opts: ['good morning (standard)', 'morning of roses (warm greeting)', 'morning reply', 'wake up greeting'],
    ans: 1
  },
  {
    q: '"3asiir" (عصير) is:',
    opts: ['tea', 'coffee', 'fresh juice', 'milk'],
    ans: 2
  },
  {
    q: '"3a albak" (على قلبك) is the reply to:',
    opts: ['good morning', 'goodbye', 'Sa77a w 3aafye', 'how are you?'],
    ans: 2
  },
];

const SBH_TIPS = [
  {
    title: 'The Lebanese Morning Greeting Chain',
    body: 'Lebanese mornings begin with an elaborate greeting sequence. "SabaH il-kheir" (good morning) gets "sabaH in-nuur" (morning of light) in return. If you want to be warmer: "sabaH il-ward" (morning of roses), answered with "sabaH il-yaasmiyn" (morning of jasmine). These aren\'t just pleasantries — using the right tier of greeting signals your social closeness. Among friends, even "wiij il-kheir" (face of goodness) suffices, skipping the formal chain entirely.'
  },
  {
    title: 'The Lebanese Breakfast Table',
    body: 'A proper Lebanese breakfast is a spread, not a bowl of cereal. "Fuul" (stewed fava beans), "7ummuS" (hummus), "labneh" (yogurt cheese), "jibneh beiDa" (white cheese), "beid" (eggs), "za3tar" (thyme mix with olive oil), and fresh "khubz" (bread) from the "furn" (bakery). All shared at once, not in courses. "Ka3k" (sesame bread rings) are bought from street vendors early morning. The Lebanese breakfast is also a negotiation — who went to the bakery, who made the eggs, who forgot the "zibde" (butter).'
  },
  {
    title: 'Coffee Culture at Dawn',
    body: 'Lebanese coffee culture splits at breakfast. Some households start with "2ahweh" (Lebanese/Arabic coffee — cardamom-spiced, unsweetened), others with "nescafe" (instant — Nescafé brand dominates so completely it replaced the word "coffee" for younger generations). "Shaay" (tea) is the diplomat\'s choice: acceptable everywhere. Morning coffee is often drunk while standing, before real conversation begins. "Muu SaaHi" (not awake yet) is a valid social excuse for at least 30 minutes post-waking.'
  },
  {
    title: 'Eating Blessings',
    body: '"Sa77a w 3aafye" (صحة وعافية — health and wellness) is said to anyone eating, by anyone watching or passing by. The eater replies "3a albak" (على قلبك — on your heart). This exchange is obligatory — skipping it is noticeably rude. At a Lebanese breakfast table, it may be said three to five times as people arrive, sit down, or pass through. "FatTart?" (did you have breakfast?) is asked out of genuine care — Lebanese hospitality mandates that no one nearby should be hungry.'
  },
  {
    title: 'The Bakery Rush',
    body: 'The "furn" (bakery) is a morning institution. Lebanese families often send someone out early for fresh bread, "ka3k," and sometimes "manoush" (though that\'s more late-morning). The bakery line is fast, loud, and social. "Min il-aakhir" (straight to the point) is the bakery customer\'s posture: order fast, pay, leave — the line behind you is judging. Returning from the bakery with warm bread earns you the most goodwill the Lebanese morning can offer.'
  },
];
