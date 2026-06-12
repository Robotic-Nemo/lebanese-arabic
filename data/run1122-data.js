// R1122 — NEW FEATURE: Lebanese Hiking & Nature Trails (hik)
const HIK_WORDS = [
  { ar: 'مشي', tr: 'mshi', en: 'hiking / walking' },
  { ar: 'جبل', tr: 'jabal', en: 'mountain' },
  { ar: 'وادي', tr: 'waadi', en: 'valley' },
  { ar: 'نهر', tr: 'nahr', en: 'river' },
  { ar: 'شلال', tr: 'shalaal', en: 'waterfall' },
  { ar: 'غابة', tr: 'ghaabe', en: 'forest' },
  { ar: 'أرزة', tr: 'arz', en: 'cedar tree' },
  { ar: 'درب', tr: 'darb', en: 'trail / path' },
  { ar: 'قمة', tr: '2imme', en: 'summit / peak' },
  { ar: 'كهف', tr: 'kahf', en: 'cave' },
  { ar: 'ينبوع', tr: 'yanbu3', en: 'spring / natural water source' },
  { ar: 'طبيعة', tr: 'tabi3a', en: 'nature' },
  { ar: 'محمية', tr: 'ma7miye', en: 'nature reserve' },
  { ar: 'حذاء جبلي', tr: 'hzze jabali', en: 'hiking boots' },
  { ar: 'خيمة', tr: 'khime', en: 'tent' },
  { ar: 'نار', tr: 'naar', en: 'campfire' },
  { ar: 'كشاف', tr: 'kashshaf', en: 'scout / hiker' },
  { ar: 'خريطة', tr: 'khariTa', en: 'map' },
  { ar: 'بوصلة', tr: 'bawSale', en: 'compass' },
  { ar: 'حقيبة ظهر', tr: '7a2eebe Dahr', en: 'backpack' },
  { ar: 'منظر', tr: 'manzar', en: 'view / scenery' },
  { ar: 'مخيم', tr: 'mkhayam', en: 'campsite' },
  { ar: 'وادي قاديشا', tr: 'waadi qadisha', en: 'Qadisha Valley (holy valley)' },
  { ar: 'محمية الشوف', tr: 'ma7miye l-shouf', en: 'Shouf Biosphere Reserve' },
  { ar: 'مشي بالجبل', tr: 'mshi bil-jabal', en: 'hiking in the mountains' },
];

const HIK_DRILLS = [
  {
    q: 'You want to say "the trail is beautiful." What\'s the word for trail?',
    opts: ['درب', 'نهر', 'كهف', 'خيمة'],
    ans: 0,
    exp: 'darb = trail/path. النهر = river, الكهف = cave, الخيمة = tent.'
  },
  {
    q: '"We saw a waterfall near the village." Waterfall = ?',
    opts: ['ينبوع', 'شلال', 'وادي', 'غابة'],
    ans: 1,
    exp: 'shalaal = waterfall. yanbu3 = spring, waadi = valley, ghaabe = forest.'
  },
  {
    q: 'Friend says "fi ma7miye 7elo kteer" — what is ma7miye?',
    opts: ['cave', 'nature reserve', 'campsite', 'river'],
    ans: 1,
    exp: 'ma7miye = nature reserve / protected area. Lebanon has the Shouf Biosphere Reserve.'
  },
  {
    q: '"Bring your 7a2eebe Dahr" — what does this mean?',
    opts: ['hiking boots', 'tent', 'backpack', 'map'],
    ans: 2,
    exp: '7a2eebe Dahr = backpack (literally "back bag"). Dahr = back/spine.'
  },
  {
    q: 'The national symbol of Lebanon is the ___',
    opts: ['غابة (forest)', 'أرزة (cedar)', 'شلال (waterfall)', 'وادي (valley)'],
    ans: 1,
    exp: 'arz = cedar. The cedar tree is on the Lebanese flag and is a national symbol.'
  },
  {
    q: 'You reach the top of the mountain. You say "wsalna 3al ___"',
    opts: ['وادي', 'درب', 'قمة', 'كهف'],
    ans: 2,
    exp: '2imme = summit/peak. wsalna 3al 2imme = we reached the peak!'
  },
  {
    q: '"Baddna n3amil mkhayam hon" — mkhayam means?',
    opts: ['bonfire', 'campsite', 'reserve', 'spring'],
    ans: 1,
    exp: 'mkhayam = campsite. baddna n3amil mkhayam = we want to set up camp.'
  },
  {
    q: 'Waadi Qadisha is famous as the ___',
    opts: ['highest peak', 'holy valley with monasteries', 'largest cedar forest', 'main hiking club'],
    ans: 1,
    exp: 'Waadi Qadisha (Holy Valley) has ancient monasteries carved into cliff faces — a UNESCO World Heritage Site.'
  },
  {
    q: '"Shu l-manzar 7elo!" — what is the hiker expressing?',
    opts: ['the trail is hard', 'what a beautiful view!', 'the cave is deep', 'the map is wrong'],
    ans: 1,
    exp: 'manzar = view/scenery. "shu l-manzar 7elo" = what a beautiful view!'
  },
  {
    q: 'You need water. There\'s a ynbu3 nearby. What is it?',
    opts: ['river', 'waterfall', 'natural spring', 'reservoir'],
    ans: 2,
    exp: 'yanbu3 = natural spring. Many Lebanese mountain springs are used for fresh drinking water.'
  },
];

const HIK_TIPS = [
  {
    title: '🌲 Cedar Forests',
    body: 'Lebanon\'s cedar forests (ghabe l-arz) are ancient and sacred. The Tannourine and Bcharre cedar reserves date back thousands of years. Say "7a3mol sura ma3 l-arz" — "I\'ll take a photo with the cedar."'
  },
  {
    title: '🏔️ Lebanon Mountain Trail',
    body: 'The LMT (Lebanon Mountain Trail) is a 470km hiking trail crossing the country from Andket to Marjayoun. Hikers say "3am nimshi 3al darb l-lubneni" — "we\'re walking the Lebanese trail."'
  },
  {
    title: '🦅 Shouf Biosphere Reserve',
    body: 'Shouf is Lebanon\'s largest nature reserve (ma7miye), home to wolves, deer, and eagles. Locals say "ma7miye l-Shouf kteer 7elwe bil-rabi3" — the Shouf reserve is beautiful in spring.'
  },
  {
    title: '⛺ Camping Culture',
    body: 'Lebanese camping (mkhayam) is social — groups of friends, big fires (naar), lots of food. "Baddna n3amil naar w nshwi" = we want to make a fire and grill. Never camp alone in remote areas.'
  },
];
