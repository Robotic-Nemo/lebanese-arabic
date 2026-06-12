// R1353 — NEW FEATURE: Lebanese Pickles & Kabees Culture (kbs)
const KBS_WORDS = [
  { ar: 'kabees', tr: 'pickles', en: 'pickled vegetables (general)' },
  { ar: 'kabees lift', tr: 'turnip pickles', en: 'pickled turnips (bright pink)' },
  { ar: 'kabees khiyar', tr: 'pickled cucumber', en: 'pickled cucumber' },
  { ar: 'kabees arnabeet', tr: 'pickled cauliflower', en: 'pickled cauliflower' },
  { ar: 'kabees bazenjan', tr: 'pickled eggplant', en: 'pickled stuffed eggplant' },
  { ar: 'kabees flayfle', tr: 'pickled peppers', en: 'pickled hot peppers' },
  { ar: 'toum', tr: 'garlic paste', en: 'garlic & oil emulsion' },
  { ar: 'khall', tr: 'vinegar', en: 'vinegar (for pickling)' },
  { ar: 'ma7 l-kabees', tr: 'pickle brine', en: 'pickling liquid / brine' },
  { ar: 'mlou7', tr: 'salty', en: 'salty / brined' },
  { ar: '7amid', tr: 'sour', en: 'sour / acidic' },
  { ar: 'jarra', tr: 'clay jar', en: 'clay pickling jar' },
  { ar: 'mouneh', tr: 'pantry preserves', en: 'home preserved foods (general)' },
  { ar: 'mkhalal', tr: 'pickled', en: 'pickled / marinated' },
  { ar: 'zeit w za3tar', tr: 'oil and thyme', en: 'olive oil and thyme dip' },
  { ar: '2adas', tr: 'lentils', en: 'lentils (also preserved/stored)' },
  { ar: 'ka3k il-kabees', tr: 'pickle sesame ring', en: 'sesame bread ring eaten with pickles' },
  { ar: 'bjar', tr: 'spices', en: 'mixed spices for preserving' },
  { ar: 'mleh', tr: 'salt', en: 'salt (key preserving ingredient)' },
  { ar: 'bayti', tr: 'homemade', en: 'homemade / from the house' }
];

const KBS_DRILLS = [
  { q: 'What is "kabees lift"?', opts: ['pickled cucumber', 'pickled cauliflower', 'pickled turnips', 'pickled peppers'], a: 2 },
  { q: 'Which word means "sour"?', opts: ['mlou7', '7amid', 'mleh', 'khall'], a: 1 },
  { q: 'What is "toum"?', opts: ['pickle brine', 'vinegar', 'garlic paste', 'mixed spices'], a: 2 },
  { q: '"Mouneh" refers to:', opts: ['a type of pickle', 'home preserved foods', 'clay pickling jar', 'pickled eggplant'], a: 1 },
  { q: 'What does "mkhalal" mean?', opts: ['salty', 'homemade', 'pickled', 'sour'], a: 2 },
  { q: 'Which is "kabees bazenjan"?', opts: ['pickled cucumber', 'pickled cauliflower', 'pickled stuffed eggplant', 'pickled turnips'], a: 2 },
  { q: '"Jarra" means:', opts: ['vinegar bottle', 'clay pickling jar', 'pickle brine', 'salt container'], a: 1 },
  { q: 'What is "bayti" in the context of kabees?', opts: ['from the market', 'homemade', 'factory-made', 'imported'], a: 1 }
];

const KBS_TIPS = [
  'Kabees (pickles) are non-negotiable at the Lebanese table — no mezze spread is complete without a bowl of bright pink pickled turnips (kabees lift), whose color comes from a slice of beetroot added to the brine. They are as much visual as culinary.',
  'Lebanese grandmothers (tet) judge each other\'s mouneh (pantry preserves) the way others judge cooking: the quality of the kabees, the thickness of the makdous (stuffed eggplant in oil), and the color of the murabbat (jam) are signals of household care and mastery.',
  '"Bayti" (homemade) is the highest compliment for kabees. A jar of homemade pickled cauliflower or stuffed eggplant given as a gift carries more value than anything store-bought — it means someone spent hours preparing specifically for you.',
  'The pink pickle (kabees lift) is so iconic in Lebanese cuisine that it has become a symbol of the Lebanese table internationally. In Lebanese diaspora restaurants worldwide, a small dish of kabees lift often arrives before anything else — a taste of home that triggers instant nostalgia.'
];
