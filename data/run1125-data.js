// R1125 — NEW FEATURE: Lebanese Laundry & Washing Day Culture (wsh)
const WSH_WORDS = [
  { ar: 'غسيل', tr: 'ghassil', en: 'laundry / washing' },
  { ar: 'غسالة', tr: 'ghassale', en: 'washing machine' },
  { ar: 'حبل الغسيل', tr: '7abl l-ghassil', en: 'clothesline' },
  { ar: 'مشبك', tr: 'mashbak', en: 'clothespin / peg' },
  { ar: 'صابون', tr: 'saabun', en: 'soap / detergent' },
  { ar: 'مسحوق', tr: 'mas7uu2', en: 'washing powder' },
  { ar: 'نشّف', tr: 'nashshaf', en: 'to dry (clothes)' },
  { ar: 'كوى', tr: 'kawa', en: 'to iron' },
  { ar: 'مكواة', tr: 'makwaye', en: 'iron (appliance)' },
  { ar: 'طي', tr: 'tay', en: 'to fold' },
  { ar: 'بقعة', tr: 'bo2a', en: 'stain' },
  { ar: 'بالكون', tr: 'balkon', en: 'balcony (where clothes hang)' },
  { ar: 'ملابس نظيفة', tr: 'malaabis nZiife', en: 'clean clothes' },
  { ar: 'ملابس وسخة', tr: 'malaabis wskhe', en: 'dirty clothes' },
  { ar: 'سلة الغسيل', tr: 'salle l-ghassil', en: 'laundry basket' },
  { ar: 'دورة غسيل', tr: 'daawra ghassil', en: 'wash cycle' },
  { ar: 'بودرة', tr: 'budra', en: 'powder detergent' },
  { ar: 'معطّر', tr: 'm3attar', en: 'fabric softener / scented' },
  { ar: 'جاف', tr: 'jaayef', en: 'dry (adj)' },
  { ar: 'رطب', tr: 'raTib', en: 'damp / wet' },
  { ar: 'مشنقة', tr: 'mashna2a', en: 'hanger' },
  { ar: 'يوم الغسيل', tr: 'yawm l-ghassil', en: 'washing day' },
  { ar: 'تنشيف آلي', tr: 'tanshiif aali', en: 'tumble dryer' },
  { ar: 'غسيل بالإيد', tr: 'ghassil bil-iid', en: 'hand washing' },
  { ar: 'شنق الغسيل', tr: 'sha22 l-ghassil', en: 'hanging the laundry' },
];

const WSH_DRILLS = [
  {
    q: 'You need to hang clothes outside. What do you need?',
    opts: ['مكواة (iron)', 'حبل الغسيل (clothesline)', 'غسالة (machine)', 'صابون (soap)'],
    ans: 1,
    exp: '7abl l-ghassil = clothesline. In Lebanon, hanging laundry on balconies is a daily ritual.'
  },
  {
    q: '"Shuuf l-bo2a 3al 2amiiS" — what is she pointing at?',
    opts: ['the machine', 'the basket', 'the stain', 'the hanger'],
    ans: 2,
    exp: 'bo2a = stain. A common drama moment before laundry day!'
  },
  {
    q: 'What\'s the word for clothespin in Lebanese?',
    opts: ['mashbak', '7abl', 'salle', 'budra'],
    ans: 0,
    exp: 'mashbak = clothespin/peg. Used to secure clothes on the 7abl l-ghassil.'
  },
  {
    q: '"Laazemne kawi l-malaabis" — kawi means?',
    opts: ['fold', 'dry', 'iron', 'wash'],
    ans: 2,
    exp: 'kawa/kawi = to iron. laazemne kawi = I need to iron. The mekwaye is the iron.'
  },
  {
    q: 'Lebanese balcony laundry lines are iconic. What is "balcony" in Lebanese?',
    opts: ['baalkon', 'darb', 'sha22', 'wta2'],
    ans: 0,
    exp: 'balkon = balcony. Lebanese apartment buildings are famous for colorful laundry hanging from every balkon.'
  },
  {
    q: '"Malaabis wskhe kteer" — what does the speaker have?',
    opts: ['clean ironed clothes', 'a broken machine', 'a lot of dirty laundry', 'fabric softener'],
    ans: 2,
    exp: 'wskhe = dirty. malaabis wskhe = dirty clothes. kteer = a lot.'
  },
  {
    q: 'You want to say "the clothes are still damp." Damp = ?',
    opts: ['jaayef', 'nZiife', 'raTib', 'm3attar'],
    ans: 2,
    exp: 'raTib = damp/wet. jaayef = dry, nZiife = clean, m3attar = scented.'
  },
  {
    q: '"Yawm l-ghassil" is a Lebanese tradition — what is it?',
    opts: ['a school holiday', 'the weekly laundry day', 'a fabric market', 'clothes donation day'],
    ans: 1,
    exp: 'yawm l-ghassil = washing day. Traditionally Saturday or Monday — the whole family\'s clothes washed at once.'
  },
  {
    q: 'Mshna2a is used to keep clothes organized. What is it?',
    opts: ['washing basket', 'clothespin', 'hanger', 'drying rack'],
    ans: 2,
    exp: 'mashna2a = clothes hanger. Used inside the closet after ironing (kawi).'
  },
  {
    q: '"Hatta l-ghassil" means the laundry is done — what did she use?',
    opts: ['hands only', 'tumble dryer', 'the ghassale (washing machine)', 'the neighbour'],
    ans: 2,
    exp: 'ghassale = washing machine. In older buildings, machines drain into the balcony or street — a classic Lebanese sight.'
  },
];

const WSH_TIPS = [
  {
    title: '🧺 Balcony Culture',
    body: 'In Lebanon, hanging laundry on the balcony is a daily ritual — colorful clothes, sheets, and even mattresses air out on every floor. Neighbors judge the laundry. "Shu kteer ghassil!" (What a lot of laundry!) is a compliment to a hardworking household.'
  },
  {
    title: '📅 Yawm l-Ghassil',
    body: 'The traditional "washing day" (yawm l-ghassil) — usually Saturday in Christian households or Monday in others — meant the whole family\'s clothes went in at once. Modern Lebanon has weekly wash days too, especially when water schedules are irregular.'
  },
  {
    title: '💧 Water Cuts & Laundry',
    body: 'With Lebanon\'s water shortages, laundry timing is strategic. People fill tanks (tanker = tanakeh) and watch the schedule. "Rji3 l-maay, yalla nghassil!" = "Water\'s back, let\'s wash!" is a real household announcement.'
  },
  {
    title: '☀️ Sun-Drying vs Machine',
    body: 'Most Lebanese prefer sun-drying (tanshiif bil-shams) over tumble dryers — better for the clothes, cheaper, and smells better. "L-ghassil 3al 7abl bi7la kteer" = clothes on the line smell much better. Electric dryers are seen as lazy or foreign.'
  },
];
