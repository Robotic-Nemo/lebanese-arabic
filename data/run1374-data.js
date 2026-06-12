// R1374 — NEW FEATURE: Lebanese Mahjar & Diaspora Arts (mhj)
const MHJ_WORDS = [
  { ar: 'mahjar', tr: 'diaspora / the emigration', en: 'the Lebanese literary and cultural movement born in the Americas — "Mahjar literature" shaped modern Arabic poetry' },
  { ar: 'ghurbe', tr: 'exile / estrangement abroad', en: 'the ache of living far from Lebanon — a central theme in mahjar poetry and song' },
  { ar: 'watan', tr: 'homeland', en: 'Lebanon as the longed-for homeland — mahjar writers idealized and mourned it from afar' },
  { ar: 'jibran', tr: 'Gibran Khalil Gibran', en: 'the Lebanese-American poet and artist — "The Prophet" made him the world\'s most-read Arab author' },
  { ar: 'rabita al-qalamiyya', tr: 'Pen League', en: 'the mahjar literary society founded in New York in 1920 — Gibran, Naimy, Rihani were members' },
  { ar: 'mikha2il nu3ayme', tr: 'Mikhail Naimy', en: 'the Lebanese philosopher-writer from Baskinta — Gibran\'s closest friend and biographer' },
  { ar: 'hajj', tr: 'emigrant grandfather / great-uncle', en: 'the returned emigrant elder — every Lebanese family has "the hajj who went to America" in their story' },
  { ar: '7awale', tr: 'remittance / money sent home', en: 'the money emigrants send back — Lebanese 7awale built churches, schools, and whole villages' },
  { ar: 'bilad l-mahjar', tr: 'lands of the diaspora', en: 'the Americas, West Africa, and Australia where Lebanese settled — each community kept Lebanese culture alive' },
  { ar: 'nostaljya', tr: 'nostalgia', en: 'the deep longing for Lebanon — food, smell of jasmine, family — felt by every diaspora Lebanese' },
  { ar: 'ibne l-ghurbe', tr: 'son of exile', en: 'one born in the diaspora — the second generation trying to stay connected to Lebanese identity' },
  { ar: 'la2i3', tr: 'displaced / exiled', en: 'someone driven out — used for Lebanese who left during wars and couldn\'t return' },
  { ar: 'el-3awde', tr: 'the return', en: 'the dream of returning to Lebanon — endlessly deferred for mahjar Lebanese, finally impossible for some' },
  { ar: 'jaret l-wadi', tr: 'neighborhood back home', en: 'the childhood village or quarter left behind — described in mahjar poems with aching detail' },
  { ar: 'ta3assob', tr: 'sectarian / regional loyalty', en: 'the solidarity (sometimes excessive) with one\'s village or sect in diaspora — Lebanese communities abroad replicate Lebanese divisions' },
  { ar: 'jam3iyye lubnaniyye', tr: 'Lebanese society / association', en: 'the diaspora community clubs and cultural societies that preserved Lebanese identity abroad' },
  { ar: 'amin rihani', tr: 'Ameen Rihani', en: 'the Lebanese-American writer and political thinker — one of the Pen League founders, wrote in both Arabic and English' },
  { ar: 'mayrajana', tr: 'Mahrajan / diaspora festival', en: 'the Lebanese cultural festival held abroad — food, dabke, music — keeping culture alive for second generation' },
  { ar: 'bayt l-asl', tr: 'ancestral home / village', en: 'the home village in Lebanon that diaspora families still own and visit — often passed down for generations' },
  { ar: 'ibn lubnan', tr: 'son of Lebanon', en: 'a Lebanese person, especially in diaspora — used with pride and longing in mahjar literature and song' }
];
const MHJ_DRILLS = [
  { q: 'What is "mahjar"?', opts: ['longing for home', 'the Lebanese diaspora / emigration', 'a literary club', 'money sent home'], a: 1 },
  { q: '"Ghurbe" means?', opts: ['homeland', 'ancestral village', 'exile / estrangement abroad', 'cultural festival'], a: 2 },
  { q: 'Who was Jibran?', opts: ['Lebanese political thinker', 'Lebanese-American poet — author of The Prophet', 'founder of the Pen League only', 'president of Lebanon'], a: 1 },
  { q: 'What is "Rabita al-qalamiyya"?', opts: ['remittance money', 'the Pen League literary society', 'Lebanese diaspora festival', 'sectarian loyalty'], a: 1 },
  { q: '"7awale" refers to?', opts: ['exile and displacement', 'remittances sent home by emigrants', 'nostalgia for Lebanon', 'the return to homeland'], a: 1 },
  { q: '"El-3awde" means?', opts: ['the cultural association', 'the ancestral home', 'the return (to Lebanon)', 'the son of exile'], a: 2 },
  { q: 'What is "mayrajana"?', opts: ['a form of nostalgia', 'a Lebanese diaspora festival', 'the Pen League meeting', 'displaced person'], a: 1 },
  { q: '"Bayt l-asl" is?', opts: ['a diaspora club in America', 'ancestral home / village in Lebanon', 'a literary genre', 'money sent to Lebanon'], a: 1 }
];
const MHJ_TIPS = [
  'Lebanese emigration waves began in the 1880s (Mount Lebanon famines) and continued through the civil war (1975–1990) and beyond. Today more people of Lebanese descent live outside Lebanon than in it — estimates range from 8–14 million diaspora versus 5 million at home. The mahjar became a second Lebanon.',
  'The Pen League (Rabita al-Qalamiyya), founded in New York in 1920, revolutionized Arabic literature. Gibran, Naimy, Rihani, and others broke from classical forms — introducing free verse, mysticism, and social critique. Their influence on 20th-century Arabic poetry is immeasurable. Gibran\'s "The Prophet" (1923) remains one of the best-selling poetry books of all time.',
  'Lebanese diaspora in West Africa (Senegal, Ivory Coast, Sierra Leone, Nigeria) formed a distinct wave in the early 20th century — often called "Ifriqiyyin" (Africans) back home. Many became successful merchants and maintained Lebanese identity for generations while deeply integrating into local societies. Their story is less told but equally rich.',
  'The dream of "el-3awde" (the return) is central to Lebanese identity abroad. Many families buy or keep the ancestral village house, visit every summer, send children for Lebanese school holidays. Second-generation diaspora Lebanese navigate a complex identity — fully of the country they grew up in, yet pulled by the ghurbe narrative their parents lived and sang.'
];
