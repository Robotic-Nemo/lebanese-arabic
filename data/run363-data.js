// Run #363 — Lebanese Beauty Salon & Personal Care
// Categories: hair-salon | makeup-beauty | personal-care | appearance-compliments | phrases

const SAL_WORDS = [
  // hair-salon
  { ar: 'كوافير', tr: 'kwaafiir', en: 'hairdresser / hair salon', cat: 'hair-salon' },
  { ar: 'قصّة شعر', tr: 'aSSet sha3r', en: 'haircut', cat: 'hair-salon' },
  { ar: 'صبغة', tr: 'Sabghe', en: 'hair dye / coloring', cat: 'hair-salon' },
  { ar: 'بليتش', tr: 'bliitsh', en: 'bleach / highlights (loanword)', cat: 'hair-salon' },
  { ar: 'مش', tr: 'mesh', en: 'highlights (balayage/mesh technique)', cat: 'hair-salon' },
  { ar: 'كيراتين', tr: 'kiraatiin', en: 'keratin treatment', cat: 'hair-salon' },
  { ar: 'بروتين', tr: 'bruutiin', en: 'protein hair treatment', cat: 'hair-salon' },
  { ar: 'مجعّد', tr: 'mja33ad', en: 'curly', cat: 'hair-salon' },
  { ar: 'ناعم', tr: 'naa3im', en: 'smooth / soft', cat: 'hair-salon' },
  { ar: 'لفّة', tr: 'laffe', en: 'blowout / blow-dry', cat: 'hair-salon' },
  // makeup-beauty
  { ar: 'ميك أب', tr: 'meek ab', en: 'makeup (loanword)', cat: 'makeup-beauty' },
  { ar: 'روج', tr: 'ruuj', en: 'lipstick', cat: 'makeup-beauty' },
  { ar: 'ريمل', tr: 'riimel', en: 'mascara (loanword)', cat: 'makeup-beauty' },
  { ar: 'فاونديشن', tr: 'faawndeeshan', en: 'foundation (loanword)', cat: 'makeup-beauty' },
  { ar: 'كحل', tr: 'ku7l', en: 'kohl / eyeliner', cat: 'makeup-beauty' },
  { ar: 'باودر', tr: 'baawder', en: 'powder (loanword)', cat: 'makeup-beauty' },
  { ar: 'بلاشر', tr: 'blaaasher', en: 'blush / blusher (loanword)', cat: 'makeup-beauty' },
  { ar: 'برونزر', tr: 'bronzer', en: 'bronzer (loanword)', cat: 'makeup-beauty' },
  { ar: 'كريم', tr: 'kriim', en: 'cream / moisturizer', cat: 'makeup-beauty' },
  { ar: 'عطر', tr: '3aTr', en: 'perfume / cologne', cat: 'makeup-beauty' },
  // personal-care
  { ar: 'شامبو', tr: 'shaambuu', en: 'shampoo (loanword)', cat: 'personal-care' },
  { ar: 'بلسم', tr: 'balsam', en: 'conditioner / balsam', cat: 'personal-care' },
  { ar: 'صابون', tr: 'Saaboon', en: 'soap', cat: 'personal-care' },
  { ar: 'دكاشة', tr: 'dkaaashe', en: 'razor / shaver', cat: 'personal-care' },
  { ar: 'مانيكير', tr: 'maanikiir', en: 'manicure (loanword)', cat: 'personal-care' },
  { ar: 'بيدكير', tr: 'beedikiir', en: 'pedicure (loanword)', cat: 'personal-care' },
  { ar: 'مرهم', tr: 'marham', en: 'ointment / lotion', cat: 'personal-care' },
  { ar: 'مرآة', tr: 'mir2aaye', en: 'mirror', cat: 'personal-care' },
  { ar: 'مشط', tr: 'meshet', en: 'comb', cat: 'personal-care' },
  { ar: 'فرشة شعر', tr: 'farshet sha3r', en: 'hairbrush', cat: 'personal-care' },
  // appearance-compliments
  { ar: 'مبيّن عليك', tr: 'mbayyen 3aleik', en: 'it shows on you / it suits you', cat: 'appearance-compliments' },
  { ar: 'ماشي عليك', tr: 'maashi 3aleik', en: 'it looks good on you', cat: 'appearance-compliments' },
  { ar: 'ملامح', tr: 'malaamih', en: 'facial features', cat: 'appearance-compliments' },
  { ar: 'بشرة', tr: 'bashre', en: 'skin / complexion', cat: 'appearance-compliments' },
  { ar: 'بيق عليك', tr: 'byii2 3aleik', en: 'it suits you (looks great)', cat: 'appearance-compliments' },
  // phrases
  { ar: 'بدّي قصّة بس', tr: 'baddii aSSet bass', en: 'I only want a trim', cat: 'phrases' },
  { ar: 'شو رح تعملّي؟', tr: 'shuu ra7 t3ammalli?', en: 'what are you going to do for me? (to hairdresser)', cat: 'phrases' },
  { ar: 'من وين بتاخدي مكياجك؟', tr: 'min wein btaakhdi mkyaajik?', en: 'where do you get your makeup from?', cat: 'phrases' },
  { ar: 'طلعت حلوة كتير', tr: 'Tele3et Hilwe ktiir', en: 'she came out looking very pretty / great result', cat: 'phrases' },
  { ar: 'وجّع رأسي', tr: 'wajja3 raasi', en: 'it annoyed me / gave me a headache (about a bad salon)', cat: 'phrases' },
];

const SAL_DRILLS = [
  {
    q: 'How do you say "haircut" in Lebanese Arabic?',
    opts: ['Sabghe', 'aSSet sha3r', 'laffe', 'meshet'],
    correct: 1,
    note: '"aSSet sha3r" — literally "cutting of hair". A Sabghe is a dye job, laffe is a blowout.'
  },
  {
    q: 'What does "laffe" mean?',
    opts: ['shampoo', 'comb', 'blowout / blow-dry', 'highlights'],
    correct: 2,
    note: '"laffe" (لفّة) is a blowout or blow-dry styling. Very common at Lebanese salons.'
  },
  {
    q: 'Which word means "lipstick"?',
    opts: ['ku7l', 'ruuj', 'balsam', 'bashre'],
    correct: 1,
    note: '"ruuj" (روج) is lipstick. Ku7l is kohl/eyeliner, balsam is conditioner.'
  },
  {
    q: 'What does "byii2 3aleik" mean?',
    opts: ['you look tired', 'it suits you / looks great on you', 'you need a haircut', 'your skin is dry'],
    correct: 1,
    note: '"byii2 3aleik" (بيق عليك) — one of the nicest compliments meaning "it really suits you".'
  },
  {
    q: 'How do you say "I only want a trim"?',
    opts: ['baddii Sabghe bass', 'baddii kiraatiin bass', 'baddii aSSet bass', 'baddii laffe bass'],
    correct: 2,
    note: '"baddii aSSet bass" — using "bass" (بس) means "only / just". Essential salon phrase.'
  },
  {
    q: 'What is "ku7l"?',
    opts: ['mascara', 'kohl / eyeliner', 'lipstick', 'blush'],
    correct: 1,
    note: '"ku7l" (كحل) is traditional kohl used as eyeliner. Ancient beauty tradition in the Levant.'
  },
  {
    q: 'What does "mbayyen 3aleik" mean?',
    opts: ['it suits you / it shows on you', 'you look pale', 'you need more makeup', 'it doesn\'t match'],
    correct: 0,
    note: '"mbayyen 3aleik" (مبيّن عليك) — a compliment meaning the look really comes through on you.'
  },
  {
    q: 'Which word means "conditioner"?',
    opts: ['shaambuu', 'balsam', 'marham', 'Saaboon'],
    correct: 1,
    note: '"balsam" (بلسم) is conditioner / hair balsam. Shaambuu is shampoo.'
  },
  {
    q: 'What does "Sabghe" mean?',
    opts: ['highlights (mesh)', 'blowout', 'hair dye / coloring', 'keratin treatment'],
    correct: 2,
    note: '"Sabghe" (صبغة) means hair dye or coloring. "Mesh" specifically refers to highlights/balayage.'
  },
  {
    q: 'How do Lebanese say "where do you get your makeup from?"',
    opts: ['min wein btaakhdi mkyaajik?', 'kiifik btHuTTi mkyaajik?', 'shu 3am ta3mli?', 'min wein sha3rik?'],
    correct: 0,
    note: '"min wein btaakhdi mkyaajik?" — common compliment-question between women about beauty products.'
  },
];

const SAL_TIPS = [
  'Lebanese salons (kwaafiir) are major social hubs — women go for both grooming and catching up on news. A salon visit can last 2-3 hours with tea and gossip included.',
  'Key verb pattern: "baddii + service" = I want [service]. "Baddii aSSet" (I want a cut), "baddii Sabghe" (I want a dye), "baddii laffe" (I want a blowout).',
  'Complimenting appearance: "byii2 3aleik" and "maashi 3aleik" are interchangeable warm compliments. "Mbayyen 3aleik" suggests something really shows positively. Always safe to use.',
  'Loanwords dominate beauty vocabulary: ميك أب (makeup), ريمل (mascara), فاونديشن (foundation), كيراتين (keratin), مش (mesh highlights). Lebanese beauty culture absorbs French and English freely.',
  'The phrase "Tele3et Hilwe ktiir" (طلعت حلوة كتير) — "she came out very pretty" — is the highest compliment for a salon result. You\'ll hear this all the time after a wedding or event preparation.',
];

const SAL_ABOUT = 'Lebanese beauty culture is among the most vibrant in the Arab world. Beirut is home to world-class salons and Lebanese women are renowned for their attention to grooming and appearance. The kwaafiir (hair salon) is a social institution — a place for community, gossip, and self-care. Beauty vocabulary mixes classical Arabic (3aTr, bashre, ku7l), French loanwords (kwaafiir itself from French "coiffeur"), and English loanwords (reemel, faawndeeshan). Understanding this vocabulary helps you navigate daily life, give compliments naturally, and connect with Lebanese culture on a personal level.';
