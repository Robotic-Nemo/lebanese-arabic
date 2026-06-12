// Run #396 — Lebanese Kitchen & Home Cooking Coach (kch)
// Categories: ingredients | cooking-methods | kitchen-tools | recipes | expressions

const KCH_WORDS = [
  // ingredients
  { ar: 'زيت زيتون', tr: 'zeet zaytoon', en: 'olive oil', cat: 'ingredients' },
  { ar: 'ثوم', tr: 'toom', en: 'garlic', cat: 'ingredients' },
  { ar: 'بصل', tr: 'baSSal', en: 'onion', cat: 'ingredients' },
  { ar: 'بندورة', tr: 'bandoora', en: 'tomato (Lebanese word)', cat: 'ingredients' },
  { ar: 'بقدونس', tr: 'ba2duunis', en: 'parsley', cat: 'ingredients' },
  { ar: 'نعنع', tr: 'na3na3', en: 'mint', cat: 'ingredients' },
  { ar: 'ليمون', tr: 'leemoon', en: 'lemon', cat: 'ingredients' },
  { ar: 'دبس رمان', tr: 'dibs rummaan', en: 'pomegranate molasses', cat: 'ingredients' },
  // cooking-methods
  { ar: 'قلى', tr: '2ala', en: 'to fry', cat: 'cooking-methods' },
  { ar: 'سلق', tr: 'sala2', en: 'to boil', cat: 'cooking-methods' },
  { ar: 'شوى', tr: 'shawa', en: 'to grill', cat: 'cooking-methods' },
  { ar: 'حمّر', tr: '7ammar', en: 'to brown / toast (onions)', cat: 'cooking-methods' },
  { ar: 'عجن', tr: '3ajan', en: 'to knead (dough)', cat: 'cooking-methods' },
  { ar: 'دبّل', tr: 'dabbal', en: 'to marinate / season', cat: 'cooking-methods' },
  { ar: 'حشا', tr: '7asha', en: 'to stuff (vegetables)', cat: 'cooking-methods' },
  { ar: 'خبز', tr: 'khbaz', en: 'to bake (bread)', cat: 'cooking-methods' },
  // kitchen-tools
  { ar: 'قدرة', tr: '2adre', en: 'pot / cooking pot', cat: 'kitchen-tools' },
  { ar: 'مقلاية', tr: 'me2laaye', en: 'frying pan', cat: 'kitchen-tools' },
  { ar: 'مهراس', tr: 'mehraas', en: 'mortar and pestle', cat: 'kitchen-tools' },
  { ar: 'مصفاة', tr: 'maSfaaye', en: 'colander / strainer', cat: 'kitchen-tools' },
  { ar: 'سكين', tr: 'sikkiin', en: 'knife', cat: 'kitchen-tools' },
  { ar: 'لوح', tr: 'luu7', en: 'cutting board', cat: 'kitchen-tools' },
  { ar: 'منقل', tr: 'man2al', en: 'charcoal grill / brazier', cat: 'kitchen-tools' },
  { ar: 'صحن', tr: 'Sa7n', en: 'plate / dish', cat: 'kitchen-tools' },
  // recipes
  { ar: 'تبولة', tr: 'tabbouule', en: 'tabbouleh (parsley salad)', cat: 'recipes' },
  { ar: 'حمص', tr: '7ummuS', en: 'hummus', cat: 'recipes' },
  { ar: 'كبة', tr: 'kibbe', en: 'kibbeh (bulgur + meat dish)', cat: 'recipes' },
  { ar: 'محشي', tr: 'ma7shi', en: 'stuffed vegetables (grape leaves, zucchini)', cat: 'recipes' },
  { ar: 'فتوش', tr: 'fattuush', en: 'fattoush (bread salad)', cat: 'recipes' },
  { ar: 'مجدرة', tr: 'mjaddara', en: 'mujaddara (lentils + rice + caramelized onion)', cat: 'recipes' },
  { ar: 'كنافة', tr: 'knaafe', en: 'knafeh (cheese pastry with syrup)', cat: 'recipes' },
  { ar: 'منقوشة', tr: 'man2uushe', en: 'manakish (za\'atar flatbread)', cat: 'recipes' },
  // expressions
  { ar: 'صحتين', tr: 'Sa7teen', en: 'bon appétit (double health — Lebanese)', cat: 'expressions' },
  { ar: 'على راسي', tr: '3ala raasi', en: 'with pleasure (lit. on my head — when asked to cook)', cat: 'expressions' },
  { ar: 'اكلة أمي', tr: '2aklit 2ummi', en: 'my mother\'s cooking (highest praise)', cat: 'expressions' },
  { ar: 'بدي أساعد', tr: 'biddi 2saa3id', en: 'I want to help (in the kitchen)', cat: 'expressions' },
  { ar: 'ريحتو بيقتل', tr: 'rii7to byy2til', en: 'its smell is killing (smells amazing)', cat: 'expressions' },
  { ar: 'طابت إيديكي', tr: 'Taabit 2iideeki', en: 'blessed are your hands (compliment on cooking)', cat: 'expressions' },
  { ar: 'بدي الوصفة', tr: 'biddi l-waSfe', en: 'I want the recipe', cat: 'expressions' },
  { ar: 'على قد الحال', tr: '3ala 2add il-7aal', en: 'as much as we have / simple but good', cat: 'expressions' },
];

const KCH_DRILLS = [
  {
    q: 'What is "tabbouule"?',
    opts: ['tabbouule', 'fattuush', 'kibbe', 'mjaddara'],
    correct: 0,
    note: '"Tabbouule" (تبولة) — Lebanon\'s most famous dish internationally. Fine-chopped parsley, tomato, onion, bulgur, lemon, olive oil. Lebanese tabbouleh is parsley-dominant; Syrian versions have more bulgur. "Tabbouule ktir mniH" (great tabbouleh) is the highest social currency at a gathering. The word comes from the root "تابل" (taabal) = to season. Making tabbouleh is an art form — the parsley must be hand-chopped, never blended.',
  },
  {
    q: 'What does "Sa7teen" mean?',
    opts: ['Sa7teen', '2aklit 2ummi', 'Taabit 2iideeki', '3ala 2add il-7aal'],
    correct: 0,
    note: '"Sa7teen" (صحتين) — literally "double health." The Lebanese / Levantine way to say bon appétit. Said before or during eating. Reply: "3ala 2albak" (on your heart / on your good heart). More emphatic: "sa7teen w 3aafye" (double health and wellness). This is one of Lebanon\'s most used social phrases — said at every meal, to every person eating around you.',
  },
  {
    q: 'What is "kibbe"?',
    opts: ['kibbe', 'ma7shi', '7ummuS', 'knaafe'],
    correct: 0,
    note: '"Kibbe" (كبة) — Lebanon\'s national dish. Ground lamb or beef mixed with bulgur wheat, onions, and spices. Prepared many ways: "kibbe bil-saneeyye" (baked in a tray), "kibbe nayye" (raw — like Lebanese steak tartare), "kibbe maqliye" (fried torpedo-shaped). "Kibbe nayye" is eaten raw with olive oil and mint — considered a delicacy. The best kibbe is still made in a stone mortar ("mehraas"). Every Lebanese family has their secret kibbe recipe.',
  },
  {
    q: 'What does "Taabit 2iideeki" mean?',
    opts: ['Taabit 2iideeki', 'Sa7teen', 'biddi l-waSfe', 'rii7to byy2til'],
    correct: 0,
    note: '"Taabit 2iideeki" (طابت إيديكي) — literally "blessed/good are your hands." The ultimate compliment after a meal. Said to the cook, always female in traditional usage (the "-eki" suffix = to a woman). To a man: "Taabit 2iidaak." This phrase is deeply emotional — saying it to someone\'s mother after eating is a profound form of gratitude. It goes beyond "delicious" — it honors the labor and love in the cooking.',
  },
  {
    q: 'What is "man2uushe"?',
    opts: ['man2uushe', 'tabbouule', 'fattuush', 'ma7shi'],
    correct: 0,
    note: '"Man2uushe" (منقوشة) — Lebanon\'s iconic breakfast bread. Flatbread brushed with za\'atar (thyme-sesame-olive oil mix) and baked in a stone oven. "Man2uushe 3a zaatar" = classic; also with cheese, kishk, or lahm bi 3ajeen. The "ferren" (bakery oven) opens at 6am and locals queue for fresh man2uushe. It\'s breakfast, hangover cure, and comfort food. The name comes from "na2ash" (نقش) = to engrave — referring to pressing the topping into the dough.',
  },
  {
    q: 'What is "dibs rummaan"?',
    opts: ['dibs rummaan', 'zeet zaytoon', 'leemoon', 'na3na3'],
    correct: 0,
    note: '"Dibs rummaan" (دبس رمان) — pomegranate molasses. One of Lebanon\'s most distinctive flavor ingredients. Made from reduced pomegranate juice — sweet-tart, dark, thick. Used in kibbeh, fattoush, salad dressings, sauces. Lebanon produces pomegranates in abundance. "Dibs" means molasses or thick syrup. Also: "dibs khaarrub" (carob molasses). Lebanese cuisine uses these fruit molasses where other cuisines might use vinegar.',
  },
  {
    q: 'What does "7asha" mean in cooking?',
    opts: ['7asha', '7ammar', '2ala', 'sala2'],
    correct: 0,
    note: '"7asha" (حشا) — to stuff. The art of stuffing vegetables is central to Lebanese cuisine. "Ma7shi" = stuffed things. "7asha waraa2 3anab" = stuff grape leaves. "7asha koosa" = stuff zucchini. "7asha baadinjaan" = stuff eggplant. The filling is typically rice, meat, tomatoes, and spices. Lebanese grandmothers judge each other\'s "ma7shi" by how tightly the grape leaves are rolled and how evenly the rice cooks inside.',
  },
  {
    q: 'What is "mjaddara"?',
    opts: ['mjaddara', 'kibbe', 'ma7shi', 'fattuush'],
    correct: 0,
    note: '"Mjaddara" (مجدرة) — lentils cooked with rice or bulgur, topped with deeply caramelized (almost crispy) onions. Lebanon\'s most beloved comfort food. Affordable, nutritious, deeply satisfying. "Mjaddara wi-baSSal" = lentils with onion. In Lebanon, the Friday lunch tradition in many homes is mjaddara. The caramelizing of the onions ("7ammart il-baSSal") is the critical step — they must be "brown-black," not just golden.',
  },
  {
    q: 'What does "2aklit 2ummi" mean?',
    opts: ['2aklit 2ummi', 'Taabit 2iideeki', 'Sa7teen', 'biddi 2saa3id'],
    correct: 0,
    note: '"2aklit 2ummi" (اكلة أمي) — my mother\'s cooking. The highest food compliment in Lebanese culture: "mitl 2aklit 2ummi" (just like my mother\'s cooking). Lebanese mothers are expected to cook everything from scratch. The "2ummi" standard is both an aspiration and a gentle competitive pressure at every Lebanese table. When a Lebanese man marries, the comparison to his mother\'s cooking begins immediately — a cultural touchstone that comedians, poets, and TV shows never stop mining.',
  },
  {
    q: 'What is "knaafe"?',
    opts: ['knaafe', 'man2uushe', 'tabbouule', '7ummuS'],
    correct: 0,
    note: '"Knaafe" (كنافة) — knafeh. Shredded wheat pastry layered with sweet white cheese, soaked in sugar syrup, sprinkled with crushed pistachios. Served hot from the tray. Lebanon and Palestine both claim it — Nablus style (with white cheese) vs. Lebanese style. "Knaafe bi-jibn" (with cheese) is the classic. The best knafeh comes from specific old bakeries. Eating it on the street, standing up, burning your fingers slightly — that\'s the authentic experience.',
  },
];

const KCH_TIPS = [
  'Lebanese cuisine is Mediterranean at its core but with distinct Levantine personality: olive oil, lemon, garlic, and fresh herbs in everything. The "meze" culture — dozens of small shared dishes — is Lebanese hospitality made edible. A Lebanese table never has just one dish. Even a simple lunch becomes a spread. The word "meze" (مازة) comes from the Persian "maza" (taste/relish). Sharing food is sharing love in Lebanese culture.',
  'The Lebanese kitchen hierarchy: grandmother at the top. "Sitto" (grandmother) knows secrets that no recipe book captures — the exact shade of caramelized onion, the right feel of kibbe dough, the timing of grape leaf rolls. "Mitl 2aklit sitto" (like grandmother\'s cooking) might be even higher praise than "2aklit 2ummi." This oral transmission of cooking knowledge is why Lebanese diaspora families in Brazil, Australia, and Canada cook near-identical dishes to their village relatives.',
  '"Tabbouule" and "man2uushe" are Lebanon\'s two most internationally recognized dishes. Tabbouleh is now found worldwide, though often with excessive bulgur — the Lebanese version is 80% parsley. Man2uushe (also spelled manakeesh) has crossed into international brunch culture. But the authentic versions — tabbouleh made with hand-chopped parsley from the home garden, man2uushe from the "ferren" oven at dawn — remain uniquely Lebanese experiences.',
  'Olive oil ("zeet zaytoon") is Lebanon\'s sacred cooking fat. Southern Lebanon (Hasbaya, Tyre region) produces exceptional olive oil. Lebanese olive trees are ancient — some over 1000 years old. "Zeet zaytoon baladi" (local olive oil) is the pride of every village. Drizzling olive oil over hummus, dipping bread into it with za\'atar, finishing dishes with a raw glug — olive oil is everywhere. A Lebanese household without a large jerrycan of their village\'s olive oil is incomplete.',
  'The "waSfe" (recipe) in Lebanese culture is both sacred and secret. Lebanese women traditionally guard their best recipes — the exact amount of cinnamon in the kibbe, the ratio of lemon to olive oil in tabbouleh. "Biddi l-waSfe" (I want the recipe) is said at every meal, but the full recipe is rarely given completely. A pinch of this, "shu biis7ab" (as much as it wants), "7ass 3al-2add" (feel the amount) — Lebanese cooking passes through hands, not notebooks.',
];

const KCH_ABOUT = 'Lebanese cuisine is one of the most celebrated in the world — a Mediterranean diet built on olive oil, fresh vegetables, legumes, herbs, and grilled meats. But Lebanese kitchen culture goes beyond the food itself: it\'s about the labor of love behind every dish, the Sunday family gathering around a table that keeps expanding, the grandmother who starts cooking at dawn so everyone eats at noon, the competition between mothers over whose kibbeh is most tender. The Lebanese kitchen is where identity, memory, and love are expressed. Understanding Lebanese food vocabulary means understanding Lebanese hospitality — the culture where feeding someone well is the deepest form of respect and affection.';
