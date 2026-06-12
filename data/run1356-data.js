// R1356 — NEW FEATURE: Lebanese Ziara & Shrine Visit Culture (zyr)
const ZYR_WORDS = [
  { ar: 'ziyara', tr: 'shrine visit', en: 'visit to a saint\'s shrine' },
  { ar: 'maqam', tr: 'maqam / shrine', en: 'saint\'s burial site or holy place' },
  { ar: 'wali', tr: 'saint / holy one', en: 'holy person / patron saint' },
  { ar: 'mar', tr: 'Saint (Christian)', en: 'Christian saint title (e.g. Mar Charbel)' },
  { ar: 'sham3a', tr: 'votive candle', en: 'candle lit at a shrine as prayer' },
  { ar: 'bkhor', tr: 'incense', en: 'incense burned at shrine in prayer' },
  { ar: 'barake', tr: 'blessing', en: 'divine blessing / grace sought at shrine' },
  { ar: 'nadher', tr: 'vow', en: 'vow made to a saint if prayer is answered' },
  { ar: 'karama', tr: 'miracle', en: 'miraculous act attributed to a saint' },
  { ar: 'mawsem', tr: 'saint\'s feast day', en: 'annual celebration of a saint\'s day' },
  { ar: 'mshe 7afe', tr: 'barefoot walk', en: 'walking barefoot as act of devotion to shrine' },
  { ar: '7arse', tr: 'shrine keeper', en: 'caretaker / guardian of the maqam' },
  { ar: 'ta2dime', tr: 'offering', en: 'items left as offerings at the shrine' },
  { ar: 'tawassol', tr: 'intercession', en: 'asking the saint to intercede with God' },
  { ar: 'ikrami', tr: 'votive gift', en: 'gift given in gratitude for an answered prayer' },
  { ar: 'saydet l-jabal', tr: 'Our Lady of the Mountain', en: 'Harissa — Our Lady of Lebanon shrine' },
  { ar: 'zawiyye', tr: 'small shrine', en: 'small neighborhood shrine or prayer corner' },
  { ar: 'sahn', tr: 'shrine courtyard', en: 'open courtyard of a shrine or church' },
  { ar: 'mouallem', tr: 'patron saint', en: 'patron saint of a trade, village, or town' },
  { ar: 'rbe7 il-maqam', tr: 'blessed by the saint', en: 'received the barake of the holy site' }
];

const ZYR_DRILLS = [
  { q: 'What does "ziyara" mean?', opts: ['a saint', 'shrine visit', 'incense', 'miracle'], a: 1 },
  { q: '"Karama" means?', opts: ['blessing', 'vow', 'miracle', 'shrine keeper'], a: 2 },
  { q: 'What is "nadher"?', opts: ['candle', 'vow', 'barefoot walk', 'offering'], a: 1 },
  { q: '"Maqam" refers to?', opts: ['feast day', 'shrine', 'courtyard', 'incense'], a: 1 },
  { q: 'What is "mawsem"?', opts: ['miracle', 'shrine keeper', 'saint\'s feast day', 'blessing'], a: 2 },
  { q: '"Barake" means?', opts: ['vow', 'blessing', 'incense', 'candle'], a: 1 },
  { q: 'Who is "7arse"?', opts: ['a pilgrim', 'a saint', 'shrine keeper', 'patron saint'], a: 2 },
  { q: '"Mshe 7afe" means?', opts: ['shrine visit', 'lighting candles', 'barefoot walk', 'offering'], a: 2 }
];

const ZYR_TIPS = [
  'Mar Charbel (Saint Charbel Makhlouf) is Lebanon\'s most visited shrine, drawing millions of pilgrims annually to Annaya in the Jbeil mountains. Lebanese from all faiths — Christian, Muslim, and Druze — are known to visit, seeking his barake (blessing). The phenomenon of cross-sectarian shrine devotion is a distinctly Lebanese cultural feature.',
  'The "nadher" (vow) is central to Lebanese shrine culture. A believer makes a private promise — "if my son recovers, I will walk barefoot to the maqam" or "if my business succeeds, I will light 40 candles." Fulfilling the nadher is a matter of serious personal obligation; breaking it is considered dangerous and disrespectful to the wali.',
  '"Mawsem" (feast day) celebrations transform quiet village maqams into week-long festivals with music, food, and a stream of pilgrims. The mawsem of a local saint defines the calendar of many Lebanese villages — neighbors return from diaspora specifically for it. Missing the mawsem of your village\'s patron saint is considered a sign of losing your roots.',
  'The shrine economy has its own vocabulary of material devotion: sham3at (candles), bkhor (incense), ta2dimet (offerings of food, oil, fabric), and ikrami (gold or silver votive objects shaped like healed body parts). A 7arse (shrine keeper) manages these donations. Entering a maqam, locals say "bismillah" or cross themselves regardless of their sect — the barake transcends denominational boundaries.'
];
