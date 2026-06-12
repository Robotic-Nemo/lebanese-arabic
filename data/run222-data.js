// Run #222 — Lebanese Clothes & Fashion Coach (clt)
// Clothing items, accessories, fabrics, shopping expressions — 40 items, MCQ drill, 5 tips

const CLT_WORDS = [
  // tops
  { tr: '2amiiS',       ar: 'قميص',        en: 'shirt',                  cat: 'tops' },
  { tr: 'ti-shirt',     ar: 'تي شيرت',     en: 't-shirt',                cat: 'tops' },
  { tr: 'bluze',        ar: 'بلوزة',        en: 'blouse',                 cat: 'tops' },
  { tr: 'sweater',      ar: 'سوايتر',       en: 'sweater / jumper',       cat: 'tops' },
  { tr: 'jakeet',       ar: 'جاكيت',        en: 'jacket',                 cat: 'tops' },
  { tr: 'mu3Taf',       ar: 'معطف',         en: 'coat / overcoat',        cat: 'tops' },
  { tr: 'fustaan',      ar: 'فستان',        en: 'dress',                  cat: 'tops' },
  { tr: 'fanelle',      ar: 'فانيلة',       en: 'undershirt / vest',      cat: 'tops' },
  { tr: 'sports bra',   ar: 'سبور برا',     en: 'sports bra',             cat: 'tops' },
  { tr: 'blazer',       ar: 'بليزر',        en: 'blazer',                 cat: 'tops' },
  // bottoms
  { tr: 'bantaloon',    ar: 'بنطلون',       en: 'trousers / pants',       cat: 'bottoms' },
  { tr: 'jeans',        ar: 'جينز',         en: 'jeans',                  cat: 'bottoms' },
  { tr: 'short',        ar: 'شورت',         en: 'shorts',                 cat: 'bottoms' },
  { tr: 'tannuura',     ar: 'تنورة',        en: 'skirt',                  cat: 'bottoms' },
  { tr: 'pijaama',      ar: 'بيجامة',       en: 'pyjamas',                cat: 'bottoms' },
  { tr: 'trak',         ar: 'تراك',         en: 'sweatpants / tracksuit', cat: 'bottoms' },
  { tr: 'legging',      ar: 'ليغنز',        en: 'leggings',               cat: 'bottoms' },
  { tr: 'bDleh',        ar: 'بدلة',         en: 'suit',                   cat: 'bottoms' },
  // footwear
  { tr: 'jazzme',       ar: 'جزمة',         en: 'shoe / boot',            cat: 'footwear' },
  { tr: 'shibshib',     ar: 'شبشب',         en: 'flip-flop / slipper',    cat: 'footwear' },
  { tr: 'kibb',         ar: 'كعب',          en: 'heels',                  cat: 'footwear' },
  { tr: 'shurraab',     ar: 'شراب',         en: 'sock',                   cat: 'footwear' },
  { tr: 'sneakers',     ar: 'سنيكرز',       en: 'sneakers',               cat: 'footwear' },
  { tr: 'sabbaT',       ar: 'سباط',         en: 'formal shoes',           cat: 'footwear' },
  // accessories
  { tr: '7ze2m',        ar: 'حزام',         en: 'belt',                   cat: 'accessories' },
  { tr: '7a2iibe',     ar: 'حقيبة',        en: 'bag / handbag',          cat: 'accessories' },
  { tr: 'naDDateyn',    ar: 'نضارتين',      en: 'glasses',                cat: 'accessories' },
  { tr: 'saa3a',        ar: 'ساعة',         en: 'watch',                  cat: 'accessories' },
  { tr: '2elaayde',     ar: 'قلادة',        en: 'necklace',               cat: 'accessories' },
  { tr: '7ale2',        ar: 'حلق',          en: 'earring(s)',             cat: 'accessories' },
  { tr: 'khaatam',      ar: 'خاتم',         en: 'ring',                   cat: 'accessories' },
  { tr: 'weshaH',       ar: 'وشاح',         en: 'scarf',                  cat: 'accessories' },
  // shopping / fabric expressions
  { tr: '2addesh el-maqas', ar: 'قديش المقاس', en: 'what is the size?',    cat: 'shopping' },
  { tr: 'fi akbar/asghar', ar: 'في أكبر/أصغر', en: 'is there bigger/smaller?', cat: 'shopping' },
  { tr: 'bjarribo',     ar: 'بجربو',        en: 'I\'ll try it on',        cat: 'shopping' },
  { tr: 'ghali ktir',   ar: 'غالي كتير',    en: 'very expensive',         cat: 'shopping' },
  { tr: '7aTTit 3alayy', ar: 'حطت علي',    en: 'it suits me / it fits',  cat: 'shopping' },
  { tr: '7aTTit 3alayyi mniH', ar: 'حطت علي منيح', en: 'it fits well on me', cat: 'shopping' },
  { tr: 'maqaas wasaT', ar: 'مقاس وسط',    en: 'size medium',            cat: 'shopping' },
  { tr: 'bdi ghayyer',  ar: 'بدي غير',      en: 'I want to change (exchange it)', cat: 'shopping' },
];

const CLT_DRILLS = [
  {
    q: 'How do you say "trousers / pants" in Lebanese Arabic?',
    opts: ['jeans', 'bantaloon', 'tannuura', 'short'],
    correct: 1,
    note: '"bantaloon" = trousers/pants; "jeans" = jeans; "tannuura" = skirt; "short" = shorts'
  },
  {
    q: 'What does "jazzme" mean?',
    opts: ['sock', 'flip-flop', 'shoe / boot', 'sneakers'],
    correct: 2,
    note: '"jazzme" = shoe/boot; "shurraab" = sock; "shibshib" = flip-flop; "sneakers" = sneakers'
  },
  {
    q: 'How do you say "dress" in Lebanese Arabic?',
    opts: ['tannuura', 'bluze', 'fustaan', 'fanelle'],
    correct: 2,
    note: '"fustaan" = dress; "tannuura" = skirt; "bluze" = blouse; "fanelle" = undershirt'
  },
  {
    q: 'What does "7a2iibe" mean?',
    opts: ['belt', 'watch', 'bag / handbag', 'necklace'],
    correct: 2,
    note: '"7a2iibe" = bag/handbag; "7ze2m" = belt; "saa3a" = watch; "2elaayde" = necklace'
  },
  {
    q: 'How do you say "scarf" in Lebanese Arabic?',
    opts: ['khaatam', '2elaayde', 'weshaH', '7ze2m'],
    correct: 2,
    note: '"weshaH" = scarf; "khaatam" = ring; "2elaayde" = necklace; "7ze2m" = belt'
  },
  {
    q: 'What does "shibshib" mean?',
    opts: ['sneakers', 'heels', 'formal shoes', 'flip-flop / slipper'],
    correct: 3,
    note: '"shibshib" = flip-flop/slipper; "kibb" = heels; "sabbaT" = formal shoes; "sneakers" = sneakers'
  },
  {
    q: 'How do you say "jacket" in Lebanese Arabic?',
    opts: ['sweater', 'jakeet', 'mu3Taf', 'blazer'],
    correct: 1,
    note: '"jakeet" = jacket; "sweater" = sweater; "mu3Taf" = coat; "blazer" = blazer'
  },
  {
    q: 'What does "ghali ktir" mean?',
    opts: ['it fits well', 'what size?', 'very expensive', 'I want to exchange'],
    correct: 2,
    note: '"ghali ktir" = very expensive; "7aTTit 3alayy mniH" = fits well; "2addesh el-maqas" = what size?'
  },
  {
    q: 'How do you say "sock" in Lebanese Arabic?',
    opts: ['shibshib', 'jazzme', 'kibb', 'shurraab'],
    correct: 3,
    note: '"shurraab" = sock; "shibshib" = flip-flop; "jazzme" = shoe; "kibb" = heel'
  },
  {
    q: 'What does "bjarribo" mean?',
    opts: ['it suits me', 'I will try it on', 'size medium', 'I want to return it'],
    correct: 1,
    note: '"bjarribo" = I\'ll try it on; "7aTTit 3alayy" = it suits me; "maqaas wasaT" = size medium'
  },
];

const CLT_TIPS = [
  { title: 'Lebanese clothing mix: Arabic, French & English', body: 'Lebanese fashion vocab is a mix: "jakeet" (jacket, from Fr.), "sweater", "jeans", "legging", "sneakers" (English), "fustaan" (Arabic for dress), "2amiiS" (Arabic for shirt). Don\'t be surprised to hear both "jazzme" and "shoes" in the same sentence.' },
  { title: 'Sizing in Lebanese stores', body: '"Maqaas" = size. Common sizes: "maqaas zghiir" (small), "maqaas wasaT" (medium), "maqaas kbiir" (large). You\'ll also hear S/M/L/XL directly. Asking: "fi 3andak maqaas...?" = do you have size...? Or "fi akbar minno?" = is there a bigger one?' },
  { title: '"7aTTit 3alayy" — Lebanese for "it fits me"', body: 'Literally "it put itself on me" — Lebanese uses "7aTT 3alay" (m) / "7aTTit 3alayyi" (f) for "it fits / it suits me". "Ma 7aTT 3alayy" = it doesn\'t fit. Alternative: "b-yilb2lek" = it suits you (to someone else).' },
  { title: 'Shopping verbs', body: '"Bjarribo" = I\'ll try it on. "bdi yah" = I want it. "ma bdi yah" = I don\'t want it. "ghayyer" = exchange it. "rja3lo" = return it. "7aTTo 3al-janab" = set it aside for me. Lebanese shopping is conversational — don\'t just point!' },
  { title: 'Colors + clothing combos', body: 'Lebanese combines color + item naturally: "2amiiS a7mar" = red shirt, "fustaan zaraa2" = blue dress, "jakeet aswad" = black jacket. Adjective follows noun. Feminine: "fustaan zaraa2a" (dress is feminine). Helpful colors: a7mar (red), zaraa2 (blue), akhDar (green), asfar (yellow), abyaD (white), aswad (black).' },
];

const CLT_ABOUT = 'Master Lebanese Arabic clothing and fashion vocabulary — tops, bottoms, footwear, accessories, and essential shopping phrases. Perfect for navigating Lebanese boutiques and souks, describing outfits, and understanding fashion conversations.';
