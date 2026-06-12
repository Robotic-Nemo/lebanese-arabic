// R1077 — NEW FEATURE: Lebanese Hiking & Mountain Trails (hkr)
const HKR_WORDS = [
  { ar: 'المسار', tr: 'il-masar', eng: 'the trail / path', cat: 'terrain' },
  { ar: 'القمة', tr: 'il-2imma', eng: 'the summit / peak', cat: 'terrain' },
  { ar: 'الوادي', tr: 'il-wadi', eng: 'the valley', cat: 'terrain' },
  { ar: 'الصخرة', tr: 'is-sakhri', eng: 'the rock / boulder', cat: 'terrain' },
  { ar: 'الغابة', tr: 'il-ghabi', eng: 'the forest', cat: 'terrain' },
  { ar: 'الينبوع', tr: 'il-yanbou3', eng: 'the spring (water source)', cat: 'terrain' },
  { ar: 'الشلال', tr: 'ish-shalal', eng: 'the waterfall', cat: 'terrain' },
  { ar: 'المغارة', tr: 'il-mghare', eng: 'the cave / grotto', cat: 'terrain' },
  { ar: 'أرز لبنان', tr: 'arz lebnan', eng: 'Cedar of Lebanon (national tree)', cat: 'nature' },
  { ar: 'الغار', tr: 'il-ghar', eng: 'the laurel tree (wild)', cat: 'nature' },
  { ar: 'السنديان', tr: 'is-sandiyan', eng: 'the oak tree', cat: 'nature' },
  { ar: 'الزعرور', tr: 'iz-za3rour', eng: 'the hawthorn berry', cat: 'nature' },
  { ar: 'البكتيريا والزعتر', tr: 'iz-za3tar il-barri', eng: 'wild thyme (in mountains)', cat: 'nature' },
  { ar: 'الحقيبة', tr: 'il-7a2iba', eng: 'the backpack', cat: 'gear' },
  { ar: 'العصا', tr: 'il-3asa', eng: 'the walking stick', cat: 'gear' },
  { ar: 'الكنزة', tr: 'il-kanzi', eng: 'the sweater / fleece', cat: 'gear' },
  { ar: 'القرية', tr: 'il-2aryi', eng: 'the mountain village', cat: 'places' },
  { ar: 'الضيعة', tr: 'iD-Dii3a', eng: 'the village / hometown', cat: 'places' },
  { ar: 'الخانق', tr: 'il-khani2', eng: 'the gorge / narrow canyon', cat: 'terrain' },
  { ar: 'مسار جبل لبنان', tr: 'masar jabal lebnan', eng: 'Lebanon Mountain Trail (LMT)', cat: 'places' },
  { ar: 'التسلق', tr: 'it-tasalla2', eng: 'the climbing / ascent', cat: 'actions' },
  { ar: 'المشي لمسافات', tr: 'il-mashi la-masafat', eng: 'long-distance hiking', cat: 'actions' },
  { ar: 'المخيم', tr: 'il-mukhayyam', eng: 'the campsite / camping', cat: 'actions' },
  { ar: 'تضاريس وعرة', tr: 'tadariss wa3ri', eng: 'rough / rugged terrain', cat: 'terrain' },
  { ar: 'منظر طبيعي', tr: 'manzar Tabi3i', eng: 'natural scenery / landscape', cat: 'nature' },
  { ar: 'الغروب على الجبل', tr: 'il-ghroub 3al-jabal', eng: 'mountain sunset', cat: 'nature' },
  { ar: 'مجتمع المشاة', tr: 'mujtama3 il-mushati', eng: 'hiking community', cat: 'actions' },
  { ar: 'خريطة المسار', tr: 'kharitat il-masar', eng: 'trail map', cat: 'gear' },
  { ar: 'البوصلة', tr: 'il-bouSla', eng: 'the compass', cat: 'gear' },
  { ar: 'حراس الطبيعة', tr: '7urras iT-Tabi3a', eng: 'nature wardens / park rangers', cat: 'places' },
];

const HKR_CATS = ['all', 'terrain', 'nature', 'gear', 'places', 'actions'];

const HKR_DRILLS = [
  { q: 'il-masar means:', opts: ['the summit', 'the trail / path', 'the valley', 'the gorge'], ans: 1 },
  { q: 'arz lebnan is:', opts: ['a mountain village', 'wild thyme', 'Cedar of Lebanon', 'the oak tree'], ans: 2 },
  { q: 'il-wadi means:', opts: ['the waterfall', 'the cave', 'the valley', 'the spring'], ans: 2 },
  { q: 'il-mghare means:', opts: ['the forest', 'the cave/grotto', 'the gorge', 'the rock'], ans: 1 },
  { q: 'il-yanbou3 is:', opts: ['the waterfall', 'the boulder', 'the spring (water)', 'the peak'], ans: 2 },
  { q: 'il-shalal means:', opts: ['the valley', 'the waterfall', 'the cave', 'the trail'], ans: 1 },
  { q: 'il-7a2iba is:', opts: ['the walking stick', 'the sweater', 'the backpack', 'the compass'], ans: 2 },
  { q: 'iD-Dii3a means:', opts: ['the gorge', 'the trail map', 'the mountain sunset', 'the village/hometown'], ans: 3 },
  { q: 'masar jabal lebnan is:', opts: ['Cedar forest', 'Lebanon Mountain Trail (LMT)', 'a hiking community', 'a mountain village'], ans: 1 },
  { q: 'il-khani2 means:', opts: ['the summit', 'the waterfall', 'the gorge/canyon', 'the spring'], ans: 2 },
  { q: 'il-3asa is:', opts: ['the compass', 'the walking stick', 'the backpack', 'the sweater'], ans: 1 },
  { q: 'il-bouSla means:', opts: ['the trail map', 'the campsite', 'the compass', 'the backpack'], ans: 2 },
];

const HKR_TIPS = [
  { title: 'Lebanon Mountain Trail (LMT)', body: 'The Lebanon Mountain Trail (LMT) is a 470km long-distance hiking trail traversing Lebanon from north to south, passing through more than 75 villages and towns. Established in 2007, it takes approximately 35-40 days to walk in its entirety. The trail passes through dramatic landscapes — cedar forests, limestone gorges, terraced vineyards, and ancient ruins. It is considered one of the most scenic long-distance trails in the Middle East and has become a source of national pride, revitalizing rural economies along its route. Lebanese hikers affectionately call it "il-masar" (the trail).' },
  { title: 'The Cedars of God (Arz il-Rab)', body: 'Lebanon\'s Cedar forests (arz — أرز) are among the most ancient forests on earth. The Cedars of God in the Qadisha Valley are a UNESCO World Heritage Site, containing some trees estimated to be over 3,000 years old. In ancient times, Cedar wood from Lebanon was prized across the Mediterranean — used in the construction of Egyptian temples, King Solomon\'s temple in Jerusalem, and Greek and Roman ships. Today, the cedar is Lebanon\'s national symbol, emblazoned on its flag. Every Lebanese knows the expression "arz lebnan" — it carries enormous cultural weight as a symbol of resilience and deep roots.' },
  { title: 'The Qadisha Valley (Wadi Qadisha)', body: 'The Qadisha Valley (وادي قاديشا — "Holy Valley" in Aramaic) in North Lebanon is one of the most spectacular hiking destinations in the Middle East. The valley contains ancient Christian monasteries carved into cliffsides, some dating back to the 4th century, making it a UNESCO World Heritage Site. Hiking here means passing hermit caves, rushing streams, ancient churches, and old-growth forest. The valley is sacred to Maronite Christians and represents Lebanon\'s ancient connection to Christianity. The word "قاديشا" comes from the Aramaic word for "holy" — a reminder that Lebanon\'s mountain culture predates Islam and Arabic.' },
  { title: 'Hiking Culture in Lebanon', body: 'Hiking in Lebanon has exploded in popularity since the 2010s, with dozens of clubs and organizations leading weekend treks. The Lebanese hiking community is incredibly vibrant — weekend hikes (called "2idriyyat" or "tayyarat") attract everyone from families to serious mountaineers. Groups gather at 6am, pile into minibuses, and spend the day traversing trails before stopping at a village restaurant for mezza and arak. The culture emphasizes communal experience over solo adventure — a reflection of Lebanese social values. After the 2006 war and subsequent crises, hiking became a form of reconnecting with the land that many Lebanese feel fiercely connected to.' },
];
