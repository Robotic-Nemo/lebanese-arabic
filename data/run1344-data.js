// R1344 — NEW FEATURE: Lebanese Balcony Culture (blc) — shatfa, neighbor-watching, laundry, morning coffee on balcony
const BLC_WORDS = [
  { ar: 'il-shatfa', tr: 'the balcony', en: 'the balcony (open terrace)' },
  { ar: 'il-balkoon', tr: 'il-balkoon', en: 'the enclosed balcony' },
  { ar: 'shirshee7', tr: 'clothesline', en: 'laundry line strung between buildings' },
  { ar: 'ghasseel', tr: 'laundry', en: 'laundry hanging to dry' },
  { ar: 'b7aasir', tr: 'I spy / I watch', en: 'I watch / observe (neighbors)' },
  { ar: 'jeera', tr: 'neighbor (f)', en: 'female neighbor' },
  { ar: 'jeer', tr: 'neighbor (m)', en: 'male neighbor' },
  { ar: 'il-7ara', tr: 'the neighborhood / alley', en: 'neighborhood alleyway' },
  { ar: 'shataf', tr: 'he aired it out', en: 'to air out the house / balcony' },
  { ar: '3a il-shatfa', tr: 'on the balcony', en: 'out on the balcony' },
  { ar: 'nshur il-ghasseel', tr: 'hang the laundry', en: 'hang laundry to dry' },
  { ar: 'sabb il-mayyeh', tr: 'spilled the water', en: 'threw water off the balcony (cleaning)' },
  { ar: 'il-jar', tr: 'the neighbor', en: 'the neighbor (general)' },
  { ar: 'tkhane2na', tr: 'we suffocated / no air', en: 'we were suffocating (no breeze)' },
  { ar: 'nfad il-ghasseel', tr: 'shake out the laundry', en: 'shake laundry before hanging' },
  { ar: 'brid il-hawa', tr: 'the air is cool', en: 'there\'s a cool breeze' },
  { ar: 'bi7ki ma3 il-jeera', tr: 'chatting with the neighbor', en: 'chatting balcony-to-balcony' },
  { ar: '3ala waj3 raasak', tr: 'mind your own business', en: 'mind your own business (lit. on your headache)' },
  { ar: 'shakkeh', tr: 'a peek / a glance', en: 'a sneaky look over the balcony' },
  { ar: 'il-manshaf', tr: 'the drying rack', en: 'the laundry rack / drying stand' },
];

const BLC_DRILLS = [
  { q: 'How do you say "the balcony (open terrace)" in Lebanese?', opts: ['il-shatfa','il-balkoon','il-7ara','shirshee7'], a: 0 },
  { q: 'What does "ghasseel" mean?', opts: ['balcony','laundry','neighbor','cool breeze'], a: 1 },
  { q: 'How do you say "female neighbor" in Lebanese?', opts: ['jeer','il-jar','jeera','il-7ara'], a: 2 },
  { q: 'What does "nshur il-ghasseel" mean?', opts: ['shake the laundry','hang the laundry','spill water','air out the house'], a: 1 },
  { q: 'Which phrase means "chatting with the neighbor" balcony to balcony?', opts: ['shataf','bi7ki ma3 il-jeera','brid il-hawa','shakkeh'], a: 1 },
  { q: 'What is "shirshee7"?', opts: ['the balcony','drying rack','clothesline between buildings','laundry bag'], a: 2 },
  { q: 'How do you say "there\'s a cool breeze"?', opts: ['tkhane2na','brid il-hawa','sabb il-mayyeh','3ala waj3 raasak'], a: 1 },
  { q: 'What does "shakkeh" mean?', opts: ['a sneaky look over the balcony','the laundry rack','the alleyway','to air out'], a: 0 },
];

const BLC_TIPS = [
  'The Lebanese balcony (shatfa) is a social institution — neighbors greet, gossip, and watch street life from their balconies. "B7aasir" (I\'m watching) is never said guiltily.',
  'Laundry (ghasseel) hanging between balconies on a shirshee7 is a Beirut visual staple. The morning routine of nshur il-ghasseel (hanging laundry) is almost ritual.',
  'Balcony chatting with the jeera (female neighbor) across the alley is a daily social event — news, recipes, and gossip flow freely between buildings.',
  'The phrase "3ala waj3 raasak" (mind your own business) is ironic coming from a culture famous for neighborly observation — it\'s said but rarely meant.',
];
