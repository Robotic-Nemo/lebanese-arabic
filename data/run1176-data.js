// R1176 — NEW FEATURE: Lebanese Beit Baladi & Traditional Stone House Culture (bbl)

const BBL_WORDS = [
  { ar: 'بيت بلدي', tr: 'beit baladi', en: 'traditional Lebanese stone house' },
  { ar: 'حجر', tr: '7ajar', en: 'stone (the material old houses are built from)' },
  { ar: 'ليوان', tr: 'liwan', en: 'arched porch / covered veranda (iconic beit baladi feature)' },
  { ar: 'قوس', tr: '2aws', en: 'arch (the defining architectural element)' },
  { ar: 'بلاطة', tr: 'balata', en: 'traditional stone floor tile' },
  { ar: 'صحن', tr: 'sa7en', en: 'inner courtyard (open-air center of the home)' },
  { ar: 'بير', tr: 'bi2r', en: 'well / cistern (every old house had one)' },
  { ar: 'صوبة', tr: 'soube', en: 'wood-burning stove / iron hearth' },
  { ar: 'خزينة', tr: 'khazine', en: 'built-in stone alcove / storage niche in the wall' },
  { ar: 'طابق', tr: 'tabi2', en: 'floor / storey of the house' },
  { ar: 'درج', tr: 'daraj', en: 'staircase (usually external, stone)' },
  { ar: 'شباك', tr: 'shubbak', en: 'window (the old triple-arched style)' },
  { ar: 'بوابة', tr: 'bwabe', en: 'main gate / entrance door (heavy wooden)' },
  { ar: 'جنينة', tr: 'jnene', en: 'garden / yard attached to the house' },
  { ar: 'معصرة', tr: 'ma3sara', en: 'olive or grape press (in the basement)' },
  { ar: 'قبو', tr: '2abw', en: 'cellar / basement (used for storage or pressing)' },
  { ar: 'عقد', tr: '3a2d', en: 'vaulted ceiling / barrel vault' },
  { ar: 'تراس', tr: 'trass', en: 'terrazzo floor (Italian-influenced colored cement tiles)' },
  { ar: 'بيت القديم', tr: 'beit l-2adim', en: 'the old house (collective memory term)' },
  { ar: 'عتبة', tr: '3atabe', en: 'threshold / doorstep (crossing it has cultural weight)' },
];

const BBL_DRILLS = [
  {
    q: 'What is a "liwan" in a traditional Lebanese house?',
    opts: ['a storage room', 'an arched porch or covered veranda', 'a cellar for olive pressing', 'a stone staircase'],
    ans: 1
  },
  {
    q: 'What does "7ajar" mean in the context of beit baladi?',
    opts: ['wood beams', 'iron door', 'stone — the primary building material', 'cement flooring'],
    ans: 2
  },
  {
    q: 'The "sa7en" is:',
    opts: ['a wooden stove', 'an inner courtyard open to the sky', 'a vaulted ceiling', 'the main entrance gate'],
    ans: 1
  },
  {
    q: 'What is "trass" in a Lebanese beit baladi?',
    opts: ['the stone wall', 'a terrazzo floor made of colored cement tiles', 'an arched window', 'the outdoor well'],
    ans: 1
  },
  {
    q: '"Ma3sara" refers to:',
    opts: ['a built-in wall alcove', 'a type of arch', 'an olive or grape press in the basement', 'the main gate'],
    ans: 2
  },
  {
    q: 'What is the "3a2d" in beit baladi architecture?',
    opts: ['the courtyard', 'the threshold', 'a terrazzo floor', 'a vaulted ceiling or barrel vault'],
    ans: 3
  },
  {
    q: '"Bwabe" in a beit baladi context means:',
    opts: ['an inner courtyard', 'the heavy main wooden gate', 'a cistern / well', 'the staircase'],
    ans: 1
  },
  {
    q: 'The "soube" was used for:',
    opts: ['pressing olives', 'heating the house via a wood-burning stove', 'storing grain in stone alcoves', 'washing clothes in the courtyard'],
    ans: 1
  },
];

const BBL_TIPS = [
  'The beit baladi — literally "the local/country house" — is the architectural soul of Lebanon. Built from the reddish-gold limestone of the Lebanese mountains, these houses are immediately recognizable: arched triple windows (the shubbak), a covered porch called a liwan running the width of the facade, thick stone walls that stay cool in summer and hold the heat in winter, and an interior sa7en (courtyard) open to the sky. The floors are tiled with balata — old geometric stones — or trass, the Italian-influenced terrazzo that came to Lebanon in the 19th century with waves of silk merchants and emigrants returning from the Americas. Every beit baladi is a layered document of Lebanese history.',
  'The functional heart of the old Lebanese house was the 2abw — the cellar or basement — where the ma3sara was kept. This was the olive or grape press, a massive stone wheel turned by a mule or by hand, that crushed the harvest into oil or must every autumn. Families who owned a ma3sara were the center of the village during harvest season — neighbors brought their olives and pressed them communally, sharing the oil in proportion to what they brought. Above the 2abw, the soube (iron stove) was the winter gathering point. The 3atabe — the threshold — was swept daily and marked the boundary between public and private life.',
  'The liwan is the most culturally loaded feature of the beit baladi. Facing south or east, it captures the winter sun while staying shaded in summer. It is where you received guests formally, where coffee was served, where the family gathered in the evenings. The 2aws (arch) above the liwan opening is often triple — three arches side by side — a design that spread from the Emirate period through the Ottoman era and became the definitive symbol of Lebanese domestic architecture. You still see this triple arch painted on everything from coffee bags to airline logos: it is Lebanon\'s most recognized visual shorthand.',
  'Today, beit baladi is endangered. Decades of war, post-war neglect, the 2020 Beirut explosion, and speculative real estate development have demolished thousands of old stone houses — especially in Beirut\'s historic neighborhoods of Gemmayze, Mar Mikhael, and Basta. Preservation organizations like APSAD (Association for the Protection of Sites and Ancient Dwellings) and activists on social media document and fight for these houses. Renting or restoring a beit baladi has become a cultural statement — a rejection of the glass-tower aesthetic and a reclamation of Lebanese identity through architecture. To live in a beit baladi is to be in conversation with the people who built it.',
];

const BBL_ABOUT = 'The Lebanese beit baladi (بيت بلدي) is the traditional stone house — built from golden limestone, defined by the triple-arched liwan porch, inner sa7en courtyard, vaulted 3a2d ceilings, and trass or balata tile floors. The basement held the ma3sara (olive or grape press) and the soube heated the family in winter. Endangered by development and war, beit baladi has become a symbol of Lebanese cultural identity and resistance.';
