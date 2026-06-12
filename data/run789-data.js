// R789 — NEW FEATURE: Lebanese Arabic Music & Instruments (ins)

const INS_CATS = ['instruments','genres','people','phrases'];

const INS_WORDS = [
  // instruments
  { ar: 'عود', tr: '3oud', en: 'oud (lute)', cat: 'instruments' },
  { ar: 'طبلة', tr: 'Tabla', en: 'tabla (drum)', cat: 'instruments' },
  { ar: 'مزمار', tr: 'mizmaar', en: 'mizmaar (woodwind)', cat: 'instruments' },
  { ar: 'قانون', tr: '2aanun', en: 'qanun (zither)', cat: 'instruments' },
  { ar: 'بزق', tr: 'buzuq', en: 'buzuq (long-necked lute)', cat: 'instruments' },
  { ar: 'ربابة', tr: 'rabaabe', en: 'rababa (bowed instrument)', cat: 'instruments' },
  { ar: 'دف', tr: 'duff', en: 'duff (frame drum)', cat: 'instruments' },
  // genres
  { ar: 'موال', tr: 'mawwal', en: 'mawwal (improvised vocal)', cat: 'genres' },
  { ar: 'دبكة', tr: 'dabke', en: 'dabke (folk dance music)', cat: 'genres' },
  { ar: 'طرب', tr: 'Tarab', en: 'tarab (musical ecstasy/emotion)', cat: 'genres' },
  { ar: 'موسيقى شرقية', tr: 'musii2a shar2iyye', en: 'oriental/eastern music', cat: 'genres' },
  { ar: 'أغنية', tr: '2ughniye', en: 'song', cat: 'genres' },
  { ar: 'ميجانا', tr: 'miijana', en: 'mijana (folk lyric form)', cat: 'genres' },
  { ar: 'عتابا', tr: '3ataba', en: 'ataba (improvisational folk form)', cat: 'genres' },
  // people
  { ar: 'مغني', tr: 'mughannji', en: 'singer (male)', cat: 'people' },
  { ar: 'مغنية', tr: 'mughannjiye', en: 'singer (female)', cat: 'people' },
  { ar: 'عازف', tr: '3aazef', en: 'musician/player', cat: 'people' },
  { ar: 'ملحّن', tr: 'mula77an', en: 'composer', cat: 'people' },
  { ar: 'فيروز', tr: 'Fayruz', en: 'Fairouz (Lebanese icon)', cat: 'people' },
  { ar: 'الرحابنة', tr: 'l-Ra7bane', en: 'the Rahbani brothers (composers)', cat: 'people' },
  { ar: 'وديع الصافي', tr: 'Wadii3 l-Safi', en: 'Wadih El Safi (folk singer)', cat: 'people' },
  // phrases
  { ar: 'بتعزف إيه؟', tr: 'bta3zef 2eh?', en: 'what do you play?', cat: 'phrases' },
  { ar: 'صوتا حلو', tr: 'Soto 7elo', en: 'beautiful voice (his/her voice is beautiful)', cat: 'phrases' },
  { ar: 'بحبّ الطرب', tr: 'b7ebb l-Tarab', en: 'I love tarab (emotional music)', cat: 'phrases' },
  { ar: 'عيّطوا', tr: '3ayyaTu', en: 'they sang (lit: called out) — folk singing', cat: 'phrases' },
  { ar: 'دقّ الطبل', tr: 'da22 l-Tabl', en: 'beat the drum', cat: 'phrases' },
  { ar: 'على الميجانا', tr: '3ala l-miijana', en: 'in the mijana style', cat: 'phrases' },
  { ar: 'مين بيغنّي؟', tr: 'miin bighannji?', en: "who's singing?", cat: 'phrases' },
];

const INS_DRILLS = [
  { q: 'How do you say "oud (lute)" in Lebanese?', opts: ['Tabla','mizmaar','3oud','duff'], a: 2 },
  { q: 'طرب means:', opts: ['a song','a drum','musical ecstasy/emotion','folk dance'], a: 2 },
  { q: 'What is a قانون?', opts: ['tabla drum','zither','mizmaar','buzuq'], a: 1 },
  { q: 'دبكة refers to:', opts: ['oriental music','folk dance music','a singer','a song'], a: 1 },
  { q: 'فيروز is:', opts: ['a drum type','a music style','Lebanese iconic singer','a composer'], a: 2 },
  { q: 'موال is:', opts: ['a drum','an improvised vocal style','the buzuq','dabke'], a: 1 },
  { q: 'How do you say "what do you play?"', opts: ['miin bighannji?','bta3zef 2eh?','da22 l-Tabl','Soto 7elo'], a: 1 },
  { q: 'عازف means:', opts: ['singer','composer','musician/player','dancer'], a: 2 },
  { q: 'ميجانا is:', opts: ['a drum','an oriental music genre','a folk lyric form','the oud'], a: 2 },
  { q: 'الرحابنة refers to:', opts: ['Fairouz','the Rahbani brothers (composers)','folk singers','a musical style'], a: 1 },
  { q: 'How do you say "beautiful voice"?', opts: ['Soto 7elo','b7ebb l-Tarab','da22 l-Tabl','3ayyaTu'], a: 0 },
  { q: 'بزق is:', opts: ['frame drum','bowed instrument','long-necked lute','zither'], a: 2 },
  { q: 'What does عتابا mean?', opts: ['mijana style','improvised folk form','eastern music','dabke'], a: 1 },
  { q: 'مغنية means:', opts: ['musician','male singer','composer','female singer'], a: 3 },
  { q: 'How do you say "I love tarab"?', opts: ['b7ebb l-Tarab','3ala l-miijana','Soto 7elo','bta3zef 2eh?'], a: 0 },
];

const INS_TIPS = [
  '🎵 Fairouz (فيروز) is arguably the most beloved Arab singer ever — Lebanese identity is deeply tied to her voice. Her real name is Nouhad Haddad.',
  '🎶 "Tarab" (طرب) is untranslatable — it\'s the state of musical ecstasy or emotional transport that great Arabic singing produces in listeners.',
  '🥁 The dabke drum pattern uses دف (duff) and Tabla together — the Tabla sets the rhythm while the mizmaar carries the melody.',
  '🎸 The buzuq (بزق) is distinctly Lebanese/Syrian — longer neck than the oud, metallic strings, used heavily in folk and Romani-influenced music.',
  '🎭 Mijana (ميجانا) and Ataba (عتابا) are improvised vocal dueling forms — two singers trade poetic verses, often at weddings and village festivals.',
  '🏆 The Rahbani brothers (الرحابنة) — Assi and Mansour — wrote hundreds of songs for Fairouz and created a uniquely Lebanese musical theater form.',
];
