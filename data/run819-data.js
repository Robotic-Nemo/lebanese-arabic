// R819 — NEW FEATURE: Lebanese Embroidery & Traditional Textiles (emb)

const EMB_CATS = ['stitches','garments','materials','culture'];

const EMB_WORDS = [
  // stitches/patterns
  { a: 'تطريز', tr: 'tatriiz', en: 'embroidery (the craft)', cat: 'stitches' },
  { a: 'خيط', tr: 'khayT', en: 'thread / yarn', cat: 'stitches' },
  { a: 'إبرة', tr: '2ibra', en: 'needle', cat: 'stitches' },
  { a: 'نقشة', tr: 'na2she', en: 'pattern / motif', cat: 'stitches' },
  { a: 'وردة', tr: 'warde', en: 'rose motif (common embroidery pattern)', cat: 'stitches' },
  { a: 'خرزة', tr: 'kharze', en: 'bead (decorative bead in embroidery)', cat: 'stitches' },
  { a: 'دانتيل', tr: 'daanteel', en: 'lace / lacework', cat: 'stitches' },
  // garments
  { a: 'تنورة', tr: 'tannuura', en: 'skirt (traditional embroidered skirt)', cat: 'garments' },
  { a: 'قفطان', tr: '2aftaan', en: 'kaftan (long embroidered robe)', cat: 'garments' },
  { a: 'شال', tr: 'shaal', en: 'shawl / wrap', cat: 'garments' },
  { a: 'طربوش', tr: 'TarbuuSh', en: 'fez (traditional Ottoman-era hat)', cat: 'garments' },
  { a: 'زنار', tr: 'znaar', en: 'belt / sash (embroidered waistband)', cat: 'garments' },
  { a: 'عباية', tr: '3abaaye', en: 'abaya / cloak', cat: 'garments' },
  // materials
  { a: 'حرير', tr: '7ariir', en: 'silk', cat: 'materials' },
  { a: 'صوف', tr: 'Suuf', en: 'wool', cat: 'materials' },
  { a: 'قطن', tr: '2uTun', en: 'cotton', cat: 'materials' },
  { a: 'ذهب', tr: 'dahab', en: 'gold (gold thread / gold embroidery)', cat: 'materials' },
  { a: 'فضة', tr: 'fiDDa', en: 'silver (silver thread)', cat: 'materials' },
  // culture
  { a: 'دار الحرف', tr: 'daar il-7iraf', en: 'craft house / artisan cooperative', cat: 'culture' },
  { a: 'تراث', tr: 'turaas', en: 'heritage / cultural tradition', cat: 'culture' },
  { a: 'يدوي', tr: 'yadawi', en: 'handmade', cat: 'culture' },
  { a: 'قديم', tr: '2adeem', en: 'old / antique / traditional', cat: 'culture' },
  { a: 'حرفية', tr: '7irfiyye', en: 'craftsmanship / artisanal skill', cat: 'culture' },
  { a: 'دبكة الإبر', tr: 'dabket il-ibar', en: 'needle dance (embroidery session as social gathering)', cat: 'culture' },
  { a: 'شغل إيد', tr: 'shughl iid', en: 'handwork / handiwork (lit: hand work)', cat: 'culture' },
  { a: 'مطرّزة', tr: 'muTarrzeh', en: 'embroidered (adjective)', cat: 'culture' },
  { a: 'نسيج', tr: 'nasiij', en: 'fabric / weave / textile', cat: 'culture' },
  { a: 'بيت الحرير', tr: 'bayt il-7ariir', en: 'silk house / silk weaving workshop', cat: 'culture' }
];

const EMB_DRILLS = [
  { q: 'What is "tatriiz"?', opts: ['weaving','silk thread','embroidery (the craft)','lace'], ans: 2, exp: 'Tatriiz = embroidery — a living craft tradition in Lebanese villages, especially in the Bekaa and South Lebanon' },
  { q: '"Khayit" means...', opts: ['needle','bead','pattern','thread/yarn'], ans: 3, exp: 'KhayT = thread — the foundation of all embroidery; Lebanese craftswomen use silk, wool, and metallic threads' },
  { q: 'What is "daanteel"?', opts: ['embroidery motif','bead decoration','lace/lacework','cotton fabric'], ans: 2, exp: 'Daanteel = lace — Lebanese lace-making (from the French dentelle) is a Byblos and coastal tradition' },
  { q: '"2aftaan" means...', opts: ['embroidered skirt','fez hat','kaftan/embroidered robe','shawl'], ans: 2, exp: '2aftaan = kaftan — long embroidered robes worn for ceremonies; Lebanese kaftans feature elaborate chest embroidery' },
  { q: 'What is "TarbuuSh"?', opts: ['embroidered belt','silk thread','shawl','fez (traditional hat)'], ans: 3, exp: 'TarbuuSh = fez — the Ottoman-era red hat; still worn by Lebanese men at traditional events and in old photos' },
  { q: '"7ariir" means...', opts: ['cotton','wool','lace','silk'], ans: 3, exp: '7ariir = silk — Lebanon was historically a major silk producer; Bsharri and the mountain villages are famous for silk heritage' },
  { q: 'What does "yadawi" mean?', opts: ['old/antique','handmade','embroidered','heritage'], ans: 1, exp: 'Yadawi = handmade (from yad = hand) — in Lebanese craft markets, "yadawi" commands a premium and signals quality' },
  { q: '"Turaas" means...', opts: ['pattern/motif','craft house','heritage/cultural tradition','artisan skill'], ans: 2, exp: 'Turaas = heritage — Lebanon takes fierce pride in its turaas; embroidery is considered living cultural patrimony' },
  { q: 'What is "na2she"?', opts: ['bead','thread','pattern/motif','needle'], ans: 2, exp: 'Na2she = pattern or motif — each Lebanese village traditionally had its own na2she distinguishing its embroidery' },
  { q: '"Shughl iid" means...', opts: ['traditional dance','silk weaving','handwork/handiwork','craft cooperative'], ans: 2, exp: 'Shughl iid = hand work — the Lebanese term for handcraft; anything described as shughl iid is valued for its human touch' },
  { q: 'What is "znaar"?', opts: ['abaya/cloak','embroidered waistband/sash','needle','lace'], ans: 1, exp: 'Znaar = belt or sash — traditional Lebanese costumes feature elaborately embroidered znaars marking the waist' },
  { q: '"7irfiyye" means...', opts: ['old tradition','handmade item','craftsmanship/artisanal skill','heritage site'], ans: 2, exp: '7irfiyye = craftsmanship — Lebanese artisans (7irfiyyiin) in gold, embroidery, and pottery represent a valued living tradition' },
  { q: 'What does "muTarrzeh" mean?', opts: ['woven','handmade','silk','embroidered'], ans: 3, exp: 'MuTarrzeh = embroidered — describes any item with tatriiz decoration; the word immediately implies quality and tradition' },
  { q: '"Bayt il-7ariir" is...', opts: ['a heritage museum','silk weaving workshop','embroidery cooperative','traditional house design'], ans: 1, exp: 'Bayt il-7ariir = silk house — historical silk workshops in Lebanese mountain villages were the economic engine of the 19th century' },
  { q: 'What is "2ibra"?', opts: ['thread','pattern','needle','bead'], ans: 2, exp: '2ibra = needle — and also used metaphorically ("2ibret il-bawSale" = compass needle); fundamental tool of Lebanese embroidery' }
];

const EMB_TIPS = [
  'Lebanese embroidery (tatriiz) is distinct from Palestinian tatreez — Lebanese patterns tend to feature more floral motifs (roses, jasmine) and use silk thread, while each mountain village historically maintained its own distinctive stitch patterns and color combinations.',
  'Byblos (Jbeil) is Lebanon\'s lace capital. "Byblos lace" (daanteel jbayli) features intricate needle-made patterns and has been practiced there for centuries. Women in the old city still sell handmade lace at the harbor entrance.',
  '"Shughl iid" (handwork) carries deep social meaning in Lebanon — embroidery sessions were traditionally social gatherings where women met, gossiped, and passed down patterns. The "dabket il-ibar" (needle dance, a term for these sessions) built community.',
  'Lebanon was a major silk producer in the 19th century. The "bayt il-7ariir" (silk house/workshop) in mountain villages like Bsharri and Deir el-Qamar used locally-raised silkworms. This industry collapsed but the cultural memory of 7ariir remains strong.',
  'The fez (TarbuuSh) in Lebanese traditional dress is Ottoman-era heritage. Now worn ceremonially, it appears at dabke performances and in old portraits of Lebanese grandparents. Calling someone "7aaTiT TarbuuSho" (putting on his fez) means he\'s being formal/old-fashioned.',
  'Contemporary Lebanese designers like Aizone and Elie Saab incorporate traditional embroidery into haute couture — tatriiz appears on evening gowns and is Lebanon\'s contribution to global fashion. The craft is experiencing a revival as Lebanese diaspora communities reconnect with turaas.'
];
