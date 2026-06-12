// R873 — NEW FEATURE: Lebanese Olive Harvest & Zaytoun Season (olh)

const OLH_CATS = ['harvest', 'oil', 'zaatar', 'expressions'];

const OLH_WORDS = [
  // harvest
  { a: 'زيتون', tr: 'zaytoun', en: 'olive / olive tree', cat: 'harvest' },
  { a: 'معصرة', tr: 'ma3Sara', en: 'olive press / oil mill', cat: 'harvest' },
  { a: 'قطاف', tr: '2aTaaf', en: 'olive picking season', cat: 'harvest' },
  { a: 'حصاد', tr: '7aSaad', en: 'harvest', cat: 'harvest' },
  { a: 'شبكة', tr: 'shabake', en: 'net (laid under trees)', cat: 'harvest' },
  { a: 'مشط', tr: 'meshet', en: 'rake / comb (for picking)', cat: 'harvest' },
  { a: 'جرة', tr: 'jarre', en: 'clay jar (for storing olives)', cat: 'harvest' },
  { a: 'زيتونة', tr: 'zaytouné', en: 'single olive tree', cat: 'harvest' },
  { a: 'أخضر', tr: 'akhDar', en: 'green (unripe olive)', cat: 'harvest' },
  { a: 'أسود', tr: 'aswad', en: 'black (ripe olive)', cat: 'harvest' },
  // oil
  { a: 'زيت الزيتون', tr: 'zeit iz-zaytoun', en: 'olive oil', cat: 'oil' },
  { a: 'بكر', tr: 'bkir', en: 'extra virgin (first press)', cat: 'oil' },
  { a: 'عصر', tr: '3aSar', en: 'press / extract oil', cat: 'oil' },
  { a: 'تفل', tr: 'tifl', en: 'olive pulp (after pressing)', cat: 'oil' },
  { a: 'مونة', tr: 'moone', en: 'home provisions (pickles/oil)', cat: 'oil' },
  // zaatar
  { a: 'زعتر', tr: 'za3tar', en: 'thyme / zaatar mix', cat: 'zaatar' },
  { a: 'تيم', tr: 'time', en: 'wild thyme', cat: 'zaatar' },
  { a: 'سماق', tr: 'summaa2', en: 'sumac', cat: 'zaatar' },
  { a: 'سمسم', tr: 'simsim', en: 'sesame seeds', cat: 'zaatar' },
  { a: 'منقوشة', tr: 'man2oushe', en: 'zaatar flatbread', cat: 'zaatar' },
  { a: 'كشك', tr: 'kishk', en: 'fermented yogurt-wheat (harvest food)', cat: 'zaatar' },
  // expressions
  { a: 'موسم الزيتون', tr: 'mawsem iz-zaytoun', en: 'olive season', cat: 'expressions' },
  { a: 'بناخد معنا', tr: 'bnaakhod ma3na', en: 'we take it with us (to the press)', cat: 'expressions' },
  { a: 'زيتك مبارك', tr: 'zeitak mbaarak', en: 'may your oil be blessed', cat: 'expressions' },
  { a: 'طلع زيت كتير', tr: 'Tele3 zeit kteer', en: 'gave lots of oil (good harvest)', cat: 'expressions' },
  { a: 'عيلة كاملة', tr: '3eele kaamle', en: 'whole family (comes for harvest)', cat: 'expressions' },
  { a: 'على الشجرة', tr: '3al-shajare', en: 'on the tree (still unharvested)', cat: 'expressions' },
  { a: 'تفوح ريحتو', tr: 'tfoo7 ree7to', en: 'its scent wafts (fresh oil smell)', cat: 'expressions' },
];

const OLH_DRILLS = [
  { q: 'What is "zaytoun"?', opts: ['olive / olive tree', 'olive oil', 'harvest season', 'clay jar'], ans: 0 },
  { q: 'What is a "ma3Sara"?', opts: ['olive tree', 'harvest net', 'olive press / oil mill', 'clay jar'], ans: 2 },
  { q: 'What does "2aTaaf" mean?', opts: ['olive oil', 'olive picking season', 'rake', 'net'], ans: 1 },
  { q: 'What is "moone"?', opts: ['olive pulp', 'home provisions (pickles/oil)', 'clay jar', 'harvest'], ans: 1 },
  { q: 'What does "bkir" mean for olive oil?', opts: ['second press', 'rancid oil', 'extra virgin (first press)', 'mixed oil'], ans: 2 },
  { q: 'What is "za3tar"?', opts: ['olive tree', 'thyme / zaatar mix', 'sesame seeds', 'sumac'], ans: 1 },
  { q: 'What is "man2oushe"?', opts: ['zaatar mix', 'olive oil jar', 'zaatar flatbread', 'fermented wheat'], ans: 2 },
  { q: 'What does "jarre" mean?', opts: ['harvest net', 'clay jar (for storing olives)', 'olive press', 'comb for picking'], ans: 1 },
  { q: '"Zeitak mbaarak" means?', opts: ['your tree is big', 'may your oil be blessed', 'olive season started', 'good harvest'], ans: 1 },
  { q: 'What is "kishk"?', opts: ['olive pulp', 'zaatar bread', 'fermented yogurt-wheat', 'olive oil'], ans: 2 },
  { q: 'What is "summaa2"?', opts: ['sesame', 'wild thyme', 'sumac', 'zaatar mix'], ans: 2 },
  { q: '"Tele3 zeit kteer" means?', opts: ['the tree fell', 'gave lots of oil', 'very good thyme', 'too much harvest'], ans: 1 },
  { q: 'What is "tifl" in olive pressing?', opts: ['olive tree', 'clay jar', 'first press oil', 'olive pulp after pressing'], ans: 3 },
  { q: 'What is "shabake" used for in harvest?', opts: ['picking olives off tree', 'net laid under trees', 'storing oil', 'grinding olives'], ans: 1 },
  { q: '"3eele kaamle" at harvest means?', opts: ['very big tree', 'whole family (comes for harvest)', 'full jar of oil', 'complete season'], ans: 1 },
  { q: 'What does "meshet" do in the harvest?', opts: ['stores oil', 'presses olives', 'rakes/combs olives off branches', 'nets under trees'], ans: 2 },
];

const OLH_TIPS = [
  { title: 'October–November Season', body: 'The olive harvest (2aTaaf iz-zaytoun) happens in October and November. Lebanese families who own land in villages drive up to their ancestral olive groves. It\'s a multi-day family affair.' },
  { title: 'The Ma3Sara', body: 'After picking, olives go to the local ma3Sara (oil mill). Everyone waits their turn. The first press (bkir) gives the prized extra virgin oil. The scent of fresh-pressed oil is unforgettable.' },
  { title: 'Moone Culture', body: 'Moone (home provisions) is a Lebanese tradition of preserving food for winter — pickled olives, olive oil, kishk, jam. Making moone together is a family bonding ritual.' },
  { title: 'Za3tar Connection', body: 'Zaatar (thyme mix) made with olive oil is breakfast every morning. Lebanese diaspora carry za3tar and zeit abroad. "Za3tar bi-zeit" — thyme dipped in olive oil — is the national morning ritual.' },
  { title: 'Olive Trees as Heritage', body: 'Some Lebanese olive trees are over 1000 years old. Families inherit specific trees across generations. "These are my grandfather\'s trees" is said with deep pride. Uprooting olive trees is considered a grave offense.' },
  { title: 'Harvest Blessing', body: '"Zeitak mbaarak" (may your oil be blessed) is said when someone shows you their new oil. A good harvest year (sene kwayse) is celebrated; a bad year (sene rde2a) is mourned like a family loss.' },
];
