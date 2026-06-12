// R1359 — NEW FEATURE: Lebanese Street Art & Graffiti Culture (grf)
const GRF_WORDS = [
  { ar: 'graffiti', tr: 'graffiti', en: 'street art spray-painted on walls — ubiquitous in Beirut' },
  { ar: 'rassamm sha3abi', tr: 'street artist', en: 'artist who paints murals and tags on public walls' },
  { ar: '7eet', tr: 'wall', en: 'the canvas for street art — every Beirut neighborhood has painted walls' },
  { ar: 'boya rash', tr: 'spray paint', en: 'aerosol can used for graffiti and murals' },
  { ar: 'jdariyyeh', tr: 'mural', en: 'large-scale wall painting, often political or cultural' },
  { ar: 'lawha', tr: 'art panel / artwork', en: 'a completed piece of street art or painting' },
  { ar: 'risaleh', tr: 'message', en: 'the social or political message behind a piece' },
  { ar: 'Gemmayzeh', tr: 'Gemmayzeh', en: 'Beirut neighbourhood famous for its colourful art walls' },
  { ar: 'Mar Mikhael', tr: 'Mar Mikhael', en: 'hip Beirut district known for street murals and galleries' },
  { ar: 'fann 7are', tr: 'street art / free art', en: 'art produced in public spaces, often without permission' },
  { ar: 'tashkeel', tr: 'composition / design', en: 'the visual design and layout of an artwork' },
  { ar: 'tawqee3', tr: 'tag / signature', en: 'artist\'s tag or signature left on a surface' },
  { ar: 'stencil', tr: 'stencil', en: 'cut-out template used to repeat designs quickly' },
  { ar: '7arb l-ahliyyeh', tr: 'civil war', en: 'the 15-year Lebanese civil war (1975–1990), subject of many murals' },
  { ar: 'tawra', tr: 'revolution', en: '2019 Lebanese uprising — sparked an explosion of protest art' },
  { ar: '7ayyet loon', tr: 'block of colour', en: 'bold colour fill — characteristic of Beirut mural style' },
  { ar: '3amma3eh', tr: 'paint roller', en: 'large roller used to cover wide wall sections quickly' },
  { ar: 'mashrou3 fanni', tr: 'art project', en: 'organised community mural or public art initiative' },
  { ar: 'nab2 l-fann', tr: 'art scene', en: 'Beirut\'s vibrant creative and arts community' },
  { ar: 'blast art', tr: 'explosion art', en: 'murals created after the 2020 Beirut port explosion to heal the city' }
];
const GRF_DRILLS = [
  { q: 'What is "jdariyyeh"?', opts: ['tag', 'spray paint', 'mural', 'street artist'], a: 2 },
  { q: '"7eet" means?', opts: ['canvas', 'wall', 'paint', 'stencil'], a: 1 },
  { q: 'What district is famous for art walls?', opts: ['Hamra', 'Dahiyeh', 'Gemmayzeh', 'Jounieh'], a: 2 },
  { q: '"Tawqee3" means?', opts: ['mural', 'tag / signature', 'spray can', 'art project'], a: 1 },
  { q: 'What is "boya rash"?', opts: ['paint roller', 'mural', 'spray paint', 'art scene'], a: 2 },
  { q: '"Tawra" in street art context means?', opts: ['explosion', 'revolution', 'freedom', 'colour'], a: 1 },
  { q: 'What is "mashrou3 fanni"?', opts: ['free art', 'art project', 'street artist', 'mural'], a: 1 },
  { q: '"Blast art" refers to murals after?', opts: ['the civil war', 'the 2019 tawra', 'the 2020 port explosion', 'a music festival'], a: 2 }
];
const GRF_TIPS = [
  'Beirut\'s walls are a living history book — political slogans, civil-war bullet holes, revolution graffiti, and post-blast healing murals all share the same plaster.',
  'After the August 2020 port explosion, artists from around the world came to paint murals on the destroyed buildings of Mar Mikhael and Gemmayzeh as an act of collective grief.',
  'The 2019 thawra (revolution) unleashed a wave of politically charged street art — caricatures of politicians, slogans like "killn yani killn", and giant fists became Beirut\'s new icons.',
  'Beirut has no official street art policy — some murals are commissioned by municipalities, others are painted overnight. The most famous ones become landmarks that tourists photograph and locals defend.'
];
