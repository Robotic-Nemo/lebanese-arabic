// R1368 — NEW FEATURE: Lebanese Mawled & Prophet's Birthday Culture (mwd)
const MWD_WORDS = [
  { ar: 'mawled', tr: 'Prophet\'s Birthday', en: 'the celebration of Prophet Muhammad\'s birthday — a major Lebanese holiday' },
  { ar: 'inshad', tr: 'religious chanting', en: 'devotional songs praising the Prophet, sung in processions and homes' },
  { ar: 'zaffi', tr: 'festive procession', en: 'the street procession with flags, drums, and chanting on Mawled night' },
  { ar: 'na3t', tr: 'poem in praise of Prophet', en: 'a classical Arabic ode praising the Prophet, recited at Mawled gatherings' },
  { ar: 'ta2bir', tr: 'Sufi recitation / dhikr', en: 'the Sufi ritual of rhythmic remembrance of God, especially intense on Mawled' },
  { ar: 'mawled sharif', tr: 'the noble Mawled', en: 'the formal name for the celebration — "the noble birthday"' },
  { ar: '7elo w morr', tr: 'sweets and bitter herbs', en: 'symbolic foods shared on Mawled — sweet for joy, bitter for hardship' },
  { ar: 'sham3', tr: 'candle / torch', en: 'candles and torches lit during Mawled processions in Lebanese streets' },
  { ar: 'shaykh', tr: 'religious scholar / leader', en: 'the shaykh who leads the Mawled gathering and recitation' },
  { ar: '3ala l-nabi', tr: 'blessings upon the Prophet', en: 'the phrase repeated constantly on Mawled — calling for blessings' },
  { ar: 'jam3iyye', tr: 'religious association', en: 'the community organization that arranges the local Mawled celebration' },
  { ar: '7alawa', tr: 'sweets / candy', en: 'sweets distributed to children and neighbors on Mawled day' },
  { ar: 'tariq l-mawled', tr: 'the Mawled route', en: 'the procession path through the neighborhood, adorned with lights' },
  { ar: 'daff', tr: 'frame drum', en: 'the frame drum played during Mawled processions and inshad' },
  { ar: 'raya', tr: 'flag / banner', en: 'green and white flags carried in the Mawled procession' },
  { ar: 'moulid', tr: 'Mawled celebration (variant)', en: 'the Egyptian/regional variant spelling — heard in Lebanese media' },
  { ar: '3alam khadra', tr: 'green flag', en: 'the green flag of the Prophet — symbol of the Mawled celebration' },
  { ar: 'sirat n-nabawiyye', tr: 'biography of the Prophet', en: 'readings from the Prophet\'s life story, a Mawled gathering staple' },
  { ar: 'tabrikeh', tr: 'blessing / congratulation', en: 'offering congratulations to neighbors on the occasion of Mawled' },
  { ar: 'layl l-mawled', tr: 'Mawled night', en: 'the night itself — streets glow, chanting fills the air across Lebanese neighborhoods' }
];
const MWD_DRILLS = [
  { q: 'What is "mawled"?', opts: ['a type of drum', 'Prophet\'s Birthday celebration', 'a Sufi chant', 'a religious flag'], a: 1 },
  { q: '"Inshad" refers to?', opts: ['a street procession', 'sweets distributed to children', 'devotional religious chanting', 'candles lit in mosques'], a: 2 },
  { q: 'What is "zaffi"?', opts: ['a frame drum', 'festive street procession', 'blessing phrase', 'green flag'], a: 1 },
  { q: '"7elo w morr" symbolizes?', opts: ['two types of drums', 'joy and hardship', 'day and night', 'sun and moon'], a: 1 },
  { q: 'What is "daff"?', opts: ['a green flag', 'sweets for children', 'frame drum', 'religious association'], a: 2 },
  { q: '"3ala l-nabi" means?', opts: ['night of the Prophet', 'Mawled procession route', 'blessings upon the Prophet', 'biography of the Prophet'], a: 2 },
  { q: 'What is "sirat n-nabawiyye"?', opts: ['the Mawled drum', 'the Prophet\'s biography', 'sweets for Mawled', 'candles in procession'], a: 1 },
  { q: '"Raya" in the Mawled context is?', opts: ['a drum beat', 'a flag / banner', 'a religious chant', 'a sweet dish'], a: 1 }
];
const MWD_TIPS = [
  'Mawled (the Prophet\'s Birthday) is celebrated with great fervor in Lebanese Muslim neighborhoods — especially in Tripoli, Beirut\'s southern suburbs, and the Bekaa. The night before features lit streets, loudspeaker inshad, and crowds carrying torches and green flags.',
  'In Lebanon, Mawled celebrations have a distinctly communal character — jam3iyyat (religious associations) organize neighborhood processions, mosques hold all-night gatherings, and sweets (7alawa) are distributed to children and passers-by regardless of religion.',
  'The Lebanese Sufi orders (turuq) are especially active on Mawled — dhikr circles (ta2bir gatherings) go late into the night. In Tripoli, the old city\'s Mawled celebrations are famous across the Arab world for their traditional inshad and pageantry.',
  'Unlike some stricter interpretations that discourage Mawled, Lebanese Islam is rooted in Shafi\'i and Sufi traditions that embrace it warmly. The phrase "3ala l-nabi" (God\'s blessings on the Prophet) is heard constantly and responded to collectively.'
];
