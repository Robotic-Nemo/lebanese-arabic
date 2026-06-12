// R687 — NEW FEATURE: Lebanese Wild Nature & Animals (wld)
const WLD_CATS = [
  { id:'animals',  label:'🦁 Animals' },
  { id:'birds',    label:'🦅 Birds' },
  { id:'plants',   label:'🌿 Plants & Trees' },
  { id:'phrases',  label:'💬 Phrases' },
];

const WLD_WORDS = [
  // animals
  { ar:'أسد',          tr:'asad',           en:'lion',                   cat:'animals' },
  { ar:'دبّ',          tr:'dibb',           en:'bear',                   cat:'animals' },
  { ar:'ذئب',          tr:'zi2b',           en:'wolf',                   cat:'animals' },
  { ar:'ثعلب',         tr:'ta3lab',         en:'fox',                    cat:'animals' },
  { ar:'غزال',         tr:'ghazaal',        en:'gazelle/deer',           cat:'animals' },
  { ar:'قنفذ',         tr:'2unfuz',         en:'hedgehog',               cat:'animals' },
  { ar:'أفعى',         tr:'af3a',           en:'snake',                  cat:'animals' },
  { ar:'سنجاب',        tr:'sunjaab',        en:'squirrel',               cat:'animals' },
  // birds
  { ar:'نسر',          tr:'nisr',           en:'eagle/vulture',          cat:'birds' },
  { ar:'بلبل',         tr:'bulbul',         en:'nightingale',            cat:'birds' },
  { ar:'حمام',         tr:'7amaam',         en:'dove/pigeon',            cat:'birds' },
  { ar:'غراب',         tr:'ghoraab',        en:'crow/raven',             cat:'birds' },
  { ar:'شحرور',        tr:'sha7roor',       en:'blackbird',              cat:'birds' },
  { ar:'صقر',          tr:'Sa2r',           en:'falcon/hawk',            cat:'birds' },
  { ar:'بومة',         tr:'boome',          en:'owl',                    cat:'birds' },
  // plants & trees
  { ar:'أرز',          tr:'arz',            en:'cedar (tree)',           cat:'plants' },
  { ar:'زيتون',        tr:'zaytoon',        en:'olive (tree)',           cat:'plants' },
  { ar:'سنديان',       tr:'sindiyaan',      en:'oak tree',               cat:'plants' },
  { ar:'كينا',         tr:'keena',          en:'eucalyptus',             cat:'plants' },
  { ar:'بلوط',         tr:'ballooT',        en:'acorn/oak',              cat:'plants' },
  { ar:'زهرة',         tr:'zahre',          en:'flower',                 cat:'plants' },
  { ar:'عشب',          tr:'3ushb',          en:'grass/herb',             cat:'plants' },
  // phrases
  { ar:'شو هالطير',     tr:'shu hal-Teer',   en:'what a bird (that is)!', cat:'phrases' },
  { ar:'برية',          tr:'barriyye',       en:'wilderness/countryside', cat:'phrases' },
  { ar:'صوت الطبيعة',   tr:'Sawt el-Tabeee3', en:'the sound of nature',  cat:'phrases' },
  { ar:'في جبل لبنان',  tr:'fii jabal Lubnaan', en:'in Mount Lebanon',   cat:'phrases' },
  { ar:'الأرز رمز لبنان', tr:'el-arz ramz Lubnaan', en:'the cedar is Lebanon\'s symbol', cat:'phrases' },
  { ar:'الطير بيغني',   tr:'el-Teer bi-ghanné', en:'the bird is singing', cat:'phrases' },
];

const WLD_DRILLS = [
  { q:'How do you say "cedar tree" in Lebanese?', opts:['arz','zaytoon','sindiyaan','ballooT'], ans:0 },
  { q:'"Bulbul" means:', opts:['nightingale','blackbird','owl','dove'], ans:0 },
  { q:'What is "ghazaal"?', opts:['gazelle/deer','fox','wolf','lion'], ans:0 },
  { q:'"Ta3lab" means:', opts:['fox','wolf','bear','squirrel'], ans:0 },
  { q:'How do you say "falcon"?', opts:['Sa2r','nisr','boome','ghoraab'], ans:0 },
  { q:'"Zaytoon" means:', opts:['olive tree','cedar','oak','eucalyptus'], ans:0 },
  { q:'What is "dibb"?', opts:['bear','lion','fox','deer'], ans:0 },
  { q:'"Ghoraab" means:', opts:['crow/raven','dove','owl','hawk'], ans:0 },
  { q:'How do you say "snake"?', opts:['af3a','sunjaab','2unfuz','zi2b'], ans:0 },
  { q:'"Sha7roor" means:', opts:['blackbird','nightingale','crow','pigeon'], ans:0 },
  { q:'What is "7amaam"?', opts:['dove/pigeon','eagle','owl','raven'], ans:0 },
  { q:'"Boome" means:', opts:['owl','dove','crow','falcon'], ans:0 },
  { q:'How do you say "wolf"?', opts:['zi2b','ta3lab','dibb','asad'], ans:0 },
  { q:'"El-arz ramz Lubnaan" means:', opts:['the cedar is Lebanon\'s symbol','the bird is singing','the sound of nature','wilderness'], ans:0 },
  { q:'How do you say "hedgehog"?', opts:['2unfuz','sunjaab','ghazaal','af3a'], ans:0 },
];

const WLD_TIPS = [
  { title:'The Cedar of Lebanon', body:'"Arz Lubnaan" (أرز لبنان) — the cedar tree is Lebanon\'s national symbol, on the flag. "El-arz ramz Lubnaan" (the cedar is Lebanon\'s symbol). The ancient cedar forests in the Chouf and Bcharré are protected. "Ghabet el-arz" (غابة الأرز) = cedar forest — a must-visit.' },
  { title:'The Bulbul & Sha7roor', body:'"Bulbul" (بلبل) is the nightingale — symbol of singing in Arabic poetry. "Sha7roor" (شحرور) is the blackbird — also beloved for its song. Both appear in Lebanese folk songs. "El-Teer bi-ghanné" (the bird is singing) is a classic romantic phrase.' },
  { title:'Mountain Wildlife', body:'Lebanon\'s mountains (Jabal Lubnaan) still have wild boar (khanzeer barri), fox (ta3lab), and wolf (zi2b) in the Chouf Biosphere Reserve. The Syrian brown bear (dibb) was once common. "Barriyye" (برية) = wilderness/countryside.' },
  { title:'The Olive Tree', body:'"Zaytoon" (زيتون) is everywhere in Lebanon — terraced hillsides of olive trees have been cultivated for thousands of years. "Zayt zaytoon" (olive oil), "zeitoun m7ammar" (roasted olives). Olive trees can live 1000+ years.' },
  { title:'Lebanese Birds of Prey', body:'"Sa2r" (صقر — falcon/hawk) and "nisr" (نسر — eagle/vulture) soar over Lebanese mountains. Falconry has ancient roots. The "nesr" appears in Lebanese proverbs: "3ala ween ya nesr?" (where are you going, eagle?) meaning you\'re heading somewhere dangerous.' },
  { title:'Oak & Woodland', body:'"Sindiyaan" (سنديان — oak) covers large parts of Lebanon\'s mountain slopes. "Balloot" (بلوط) = acorn/oak variant. Lebanese mountain villages are often surrounded by "3ushb" (grass) and wildflowers "zahre" in spring, making the countryside breathtaking.' },
];
