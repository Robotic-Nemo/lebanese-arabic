// R852 — NEW FEATURE: Lebanese Trekking & Hiking Culture (trk)

const TRK_CATS = ['trails','gear','nature','expressions'];

const TRK_WORDS = [
  // trails & destinations
  { a: 'محمية الأرز', tr: 'ma7miyet il-arz', en: 'Cedar Reserve — the iconic Lebanese national symbol, home of the ancient cedars in the Qadisha Valley', cat: 'trails' },
  { a: 'وادي قاديشا', tr: 'waadi qadiisha', en: 'Qadisha Valley — UNESCO site, deepest gorge in Lebanon, popular multi-day trek', cat: 'trails' },
  { a: 'درب لبنان', tr: 'darb lubnaan', en: 'Lebanon Mountain Trail — 470km national trail from Andqet to Marjaayoun', cat: 'trails' },
  { a: 'قمة', tr: 'imme', en: 'summit — reaching the top after a hard climb, celebrated with a group selfie', cat: 'trails' },
  { a: 'مسلك', tr: 'maslak', en: 'trail/path — a marked route through Lebanese terrain', cat: 'trails' },
  { a: 'محمية', tr: 'ma7miye', en: 'nature reserve — Lebanon has several protected mountain areas', cat: 'trails' },
  { a: 'قيصر', tr: 'qeeZar', en: 'Qeezar — mountain village area in Bcharre region, popular trailhead', cat: 'trails' },
  // gear & preparation
  { a: 'حذاء جبل', tr: '7izee jabal', en: 'hiking boots — essential for Lebanese rocky trails', cat: 'gear' },
  { a: 'مزوّدة', tr: 'mzawwde', en: 'backpack/pack — carries snacks, water, and a jacket for the hike', cat: 'gear' },
  { a: 'ميّه', tr: 'mayye', en: 'water — always "shu ma3ak mayye?" before a Lebanese group hike', cat: 'gear' },
  { a: 'خريطة مسار', tr: 'khariiTa masaar', en: 'trail map — downloaded offline because mountain signal is sketchy', cat: 'gear' },
  { a: 'كريم شمس', tr: 'kreem shams', en: 'sunscreen — Lebanese hikers apply liberally, the mountain sun is fierce', cat: 'gear' },
  { a: 'عصا', tr: '3aSa', en: 'hiking stick — used to navigate steep rocky descents', cat: 'gear' },
  // nature & landscape
  { a: 'أرز', tr: 'arz', en: 'cedar tree — the symbol on the Lebanese flag, ancient trees in the north', cat: 'nature' },
  { a: 'ثلج', tr: 'talj', en: 'snow — Lebanese mountains have snow from December through May sometimes', cat: 'nature' },
  { a: 'شلّال', tr: 'shallaale', en: 'waterfall — found in Qadisha, Balaa, and Afqa gorge areas', cat: 'nature' },
  { a: 'وادي', tr: 'waadi', en: 'valley/gorge — the dramatic landscape feature of Lebanese mountain hikes', cat: 'nature' },
  { a: 'حجل', tr: '7ajal', en: 'chukar partridge — the birds you startle on Lebanese mountain trails', cat: 'nature' },
  { a: 'زعتر بري', tr: 'za3tar barri', en: 'wild thyme — hikers pick it fresh from the Lebanese hillsides', cat: 'nature' },
  { a: 'صخر', tr: 'Sakhr', en: 'rock/boulder — Lebanese trails are notoriously rocky, ankle-twist territory', cat: 'nature' },
  // expressions
  { a: 'كيلو كم باقي؟', tr: 'kiilo kaam baaqi?', en: '"How many km left?" — asked every 20 minutes on a Lebanese group hike', cat: 'expressions' },
  { a: 'ما عدت فيّي', tr: 'ma 3adt fiyyi', en: '"I can\'t go on" — classic Lebanese hiker complaint at the 70% mark', cat: 'expressions' },
  { a: 'هون أوقفنا', tr: 'hoon wa22afna', en: '"We stop here" — unanimous vote when a scenic view appears', cat: 'expressions' },
  { a: 'شو منزاكر هالمنظر', tr: 'shu mnzaakir hal-manZar', en: '"What a view we\'re experiencing" — Lebanese appreciation for mountain scenery', cat: 'expressions' },
  { a: 'تعا نشوف شو في', tr: 'ta3a nshuuf shu fii', en: '"Come let\'s see what\'s there" — the curious explorer leading the group off-trail', cat: 'expressions' },
  { a: 'بدنا نوقفة', tr: 'bidna wu22fe', en: '"We need a break" — code for "someone needs to catch their breath"', cat: 'expressions' },
  { a: 'رح نوكل هون', tr: 'ra7 nooki hoon', en: '"We\'ll eat here" — every Lebanese hike includes a full meal with view', cat: 'expressions' },
  { a: 'الجبل بيوادي', tr: 'il-jabal bywaadi', en: '"The mountain calms you" — Lebanese saying about mountain therapy', cat: 'expressions' }
];

const TRK_DRILLS = [
  { q: 'What is "Cedar Reserve" in Lebanese?', opts: ['ma7miyet il-arz', 'darb lubnaan', 'waadi qadiisha', 'ma7miye'], ans: 0 },
  { q: 'What does "darb lubnaan" mean?', opts: ['cedar tree', 'Lebanon Mountain Trail', 'nature reserve', 'summit'], ans: 1 },
  { q: 'How do you say "waterfall"?', opts: ['talj', 'waadi', 'shallaale', 'Sakhr'], ans: 2 },
  { q: '"I can\'t go on" in Lebanese hiking slang?', opts: ['hoon wa22afna', 'ma 3adt fiyyi', 'bidna wu22fe', 'kiilo kaam baaqi?'], ans: 1 },
  { q: 'What is "wild thyme" in Lebanese?', opts: ['za3tar barri', '7ajal', 'arz', '3aSa'], ans: 0 },
  { q: 'How do you say "backpack"?', opts: ['mzawwde', '7izee jabal', 'kreem shams', 'khariiTa masaar'], ans: 0 },
  { q: '"How many km left?" in Lebanese?', opts: ['shu mnzaakir hal-manZar', 'ra7 nooki hoon', 'kiilo kaam baaqi?', 'ta3a nshuuf shu fii'], ans: 2 },
  { q: 'What is "valley/gorge" in Lebanese?', opts: ['imme', 'waadi', 'maslak', 'Sakhr'], ans: 1 },
  { q: 'How do you say "summit"?', opts: ['ma7miye', 'imme', '7ajal', 'shallaale'], ans: 1 },
  { q: '"We stop here" when a view appears?', opts: ['bidna wu22fe', 'hoon wa22afna', 'ma 3adt fiyyi', 'ra7 nooki hoon'], ans: 1 },
  { q: 'What is "trail/path" in Lebanese?', opts: ['maslak', 'darb', 'waadi', 'Sakhr'], ans: 0 },
  { q: 'How do you say "cedar tree"?', opts: ['za3tar', 'arz', '7ajal', 'Sakhr'], ans: 1 },
  { q: '"We\'ll eat here" on a Lebanese hike?', opts: ['ra7 nooki hoon', 'hoon wa22afna', 'bidna wu22fe', 'kiilo kaam baaqi?'], ans: 0 },
  { q: 'What does "ma7miye" mean?', opts: ['trail', 'summit', 'nature reserve', 'valley'], ans: 2 },
  { q: 'How do you say "water" (hiking context)?', opts: ['arz', 'talj', 'mayye', '3aSa'], ans: 2 },
  { q: '"The mountain calms you" — Lebanese saying?', opts: ['shu mnzaakir hal-manZar', 'il-jabal bywaadi', 'ta3a nshuuf shu fii', 'ma 3adt fiyyi'], ans: 1 }
];

const TRK_TIPS = [
  '<strong>Lebanon Mountain Trail (darb lubnaan)</strong>: 470km hiking trail connecting 75+ villages from north to south. Can be done in sections — most Lebanese hikers do 1-2 day segments on weekends.',
  '<strong>Cedar Reserve etiquette</strong>: Say "ma7miyet il-arz" not "ghaabit il-arz" — locals are proud of the protected status. Don\'t pick branches or carve initials in the ancient cedars.',
  '<strong>Group hike culture</strong>: Lebanese mountain hikes are social events. Expect a packed lunch (ma\'ouneh), lots of stops, and someone inevitably getting lost checking Instagram at a viewpoint.',
  '<strong>Snow hiking</strong>: Lebanese mountains get serious snow — "talj" in the mountains can last till April-May. Many hikers transition directly from ski season to trekking season with minimal gear change.',
  '<strong>Wild foraging</strong>: Picking "za3tar barri" (wild thyme) on hikes is common and celebrated. Bring an empty bag — it\'s practically a social obligation to collect herbs and share them.',
  '<strong>Mountain conditions</strong>: Weather changes fast — "il-jaww bit3awwad" (weather changes quickly). Always pack a layer even in summer and download trail maps offline, mobile signal is unreliable above 2000m.'
];
