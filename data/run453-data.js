// R453 — Lebanese Music & Folk Songs (mus)
const MUS_WORDS = [
  // instruments
  { ar: 'عود', tr: '3uud', en: 'oud (lute — the king of Arabic instruments)', cat: 'instruments' },
  { ar: 'قانون', tr: '2aanun', en: 'qanun (zither — plucked string instrument)', cat: 'instruments' },
  { ar: 'ناي', tr: 'naay', en: 'ney (reed flute)', cat: 'instruments' },
  { ar: 'دربكة', tr: 'darbake', en: 'darbuka (goblet drum)', cat: 'instruments' },
  { ar: 'طبلة', tr: 'Tabla', en: 'tabla (hand drum)', cat: 'instruments' },
  { ar: 'بزق', tr: 'buzuq', en: 'buzuq (long-neck lute, Lebanese folk instrument)', cat: 'instruments' },
  { ar: 'ميجانا', tr: 'mijaana', en: 'mijana (folk singing style — improvised poetry)', cat: 'folk' },
  { ar: 'عتابا', tr: '3itaaba', en: 'ataba (traditional maqam, poetic verse form)', cat: 'folk' },
  // dance
  { ar: 'دبكة', tr: 'dabke', en: 'dabke (Lebanese national folk dance)', cat: 'dance' },
  { ar: 'رقص', tr: 'ra2S', en: 'dance', cat: 'dance' },
  { ar: 'فرقة', tr: 'fir2a', en: 'troupe / group', cat: 'dance' },
  { ar: 'خطوة', tr: 'khaTwe', en: 'step (dance step)', cat: 'dance' },
  { ar: 'لاوي', tr: 'laawi', en: 'lawwi (the lead dabke dancer who improvises)', cat: 'dance' },
  { ar: 'دبكة شمالية', tr: 'dabke shimaaliyye', en: 'northern dabke (style from North Lebanon/Akkar)', cat: 'dance' },
  // genres & styles
  { ar: 'موشح', tr: 'muwashsha7', en: 'muwashshah (classical Andalusian-Arab vocal form)', cat: 'genre' },
  { ar: 'قصيدة', tr: '2asiide', en: 'qasida (classical poem / song)', cat: 'genre' },
  { ar: 'موال', tr: 'mawwaal', en: 'mawwal (improvised vocal lament, emotional)', cat: 'genre' },
  { ar: 'أغنية شعبية', tr: 'ughniyye sha3biyye', en: 'folk / popular song', cat: 'genre' },
  { ar: 'موسيقى شرقية', tr: 'muusiqa shar2iyye', en: 'Oriental / Eastern music', cat: 'genre' },
  { ar: 'موسيقى عربية', tr: 'muusiqa 3arabiyye', en: 'Arabic music', cat: 'genre' },
  { ar: 'مقام', tr: 'ma2aam', en: 'maqam (modal scale — basis of Arabic music theory)', cat: 'genre' },
  // Fairouz vocabulary
  { ar: 'فيروز', tr: 'fayruuz', en: 'Fairouz (Lebanon\'s most iconic singer)', cat: 'artists' },
  { ar: 'وديع الصافي', tr: 'wadiig es-Saafi', en: 'Wadih El Safi (legendary Lebanese folk singer)', cat: 'artists' },
  { ar: 'صباح', tr: 'Sabaah', en: 'Sabah (iconic Lebanese pop/folk singer, "the Bride of the Arabs")', cat: 'artists' },
  { ar: 'فرقة الأخوين رحباني', tr: 'fir2it el akhawein ra7baani', en: 'Rahbani Brothers troupe (Assi & Mansour Rahbani)', cat: 'artists' },
  { ar: 'زياد الرحباني', tr: 'ziyaad er-ra7baani', en: 'Ziad Rahbani (Fairouz\'s son, jazz-Arabic fusion composer)', cat: 'artists' },
  // song vocabulary
  { ar: 'أغنية', tr: 'ughniyye', en: 'song', cat: 'songs' },
  { ar: 'كلمات', tr: 'kilmaat', en: 'lyrics / words', cat: 'songs' },
  { ar: 'لحن', tr: 'la7n', en: 'melody / tune', cat: 'songs' },
  { ar: 'مقدمة', tr: 'mu2addame', en: 'intro (of a song)', cat: 'songs' },
  { ar: 'جوقة', tr: 'juu2a', en: 'chorus (vocal group)', cat: 'songs' },
  { ar: 'صوت', tr: 'Sawt', en: 'voice', cat: 'songs' },
  { ar: 'طرب', tr: 'Tarab', en: 'tarab (musical ecstasy / emotional resonance from music)', cat: 'songs' },
  // concerts & culture
  { ar: 'حفلة', tr: '7afle', en: 'concert / party / event', cat: 'events' },
  { ar: 'جرش', tr: 'jarash', en: 'Jerash Festival (Jordan) — Fairouz performed here', cat: 'events' },
  { ar: 'بعلبك', tr: 'ba3albak', en: 'Baalbek (city with world-famous music festival)', cat: 'events' },
  { ar: 'مهرجان', tr: 'mahrajaan', en: 'festival', cat: 'events' },
  { ar: 'مهرجان بعلبك الدولي', tr: 'mahrajaan ba3albak ed-dawli', en: 'Baalbek International Festival (world-famous Lebanese festival)', cat: 'events' },
  { ar: 'مسرح', tr: 'masra7', en: 'theater / stage', cat: 'events' },
  // expressions
  { ar: 'بيطربني', tr: 'biTarbni', en: 'it gives me tarab / it moves me musically', cat: 'expressions' },
  { ar: 'صوته عسل', tr: 'Sawto 3asal', en: 'his voice is honey → beautiful voice', cat: 'expressions' },
  { ar: 'عم تغني', tr: '3am tghanni', en: 'singing (present continuous)', cat: 'expressions' },
  { ar: 'وجد', tr: 'wajd', en: 'wajd (spiritual ecstasy from music/poetry — Sufi concept)', cat: 'expressions' },
];

const MUS_DRILLS = [
  {
    q: 'What is "dabke" (دبكة) and why is it central to Lebanese identity?',
    opts: ['a Lebanese musical instrument', 'a traditional line dance performed at weddings and celebrations — Lebanon\'s national folk dance', 'a type of Lebanese folk song with improvised poetry', 'a classical Arabic vocal form'],
    correct: 1,
    note: '"Dabke" is Lebanon\'s most visible cultural export. It\'s a communal line dance where performers stomp in unison, hold hands or shoulders, and follow a "lawwi" (lead dancer) who improvises. You\'ll see dabke at every Lebanese wedding, national celebration, and diaspora event worldwide. Different regions have different dabke styles: North Lebanon/Akkar dabke is energetic and acrobatic; southern styles are more grounded. "Yalla ndabki!" (let\'s dabke!) is a universal Lebanese celebration call. Lebanese children learn dabke in schools as part of cultural identity.'
  },
  {
    q: 'Who is Fairouz and why do Lebanese call her "the face of Lebanon"?',
    opts: ['a Lebanese TV presenter from the 1990s', 'Lebanon\'s most iconic singer — her voice is considered Lebanon\'s national treasure and symbol of hope', 'the creator of the dabke dance tradition', 'a Lebanese political figure known for speeches'],
    correct: 1,
    note: '"Fayruuz" (born Nouhad Haddad, 1934) is the most revered Arab singer of the 20th century. Her voice — a crystalline, melancholic mezzo-soprano — defined Lebanese music for six decades. With composers Assi and Mansour Rahbani (the Rahbani Brothers), she created Lebanese musical theater, folk-pop hybrids, and deeply poetic songs. During the Lebanese Civil War (1975-1990), both sides stopped fighting momentarily when Fairouz songs played on the radio. "Bkra binbarid el-jaw" (tomorrow the air will cool) became a metaphor for post-war hope. Lebanese diaspora play Fairouz songs to feel home.'
  },
  {
    q: 'What is "Tarab" (طرب) and how is it different from just "enjoying music"?',
    opts: ['the name of a Lebanese music festival', 'musical ecstasy — a profound emotional-physical state of being moved by music, deeper than enjoyment', 'a type of musical instrument', 'background music for Lebanese restaurants'],
    correct: 1,
    note: '"Tarab" (musical ecstasy) is a concept without English equivalent. It\'s the state where music penetrates your soul — you might sway involuntarily, cry, shout "alla!" or "ta3la!" (more!), or feel goosebumps. In Arab music culture, a singer who induces tarab is a master. Fairouz regularly induces tarab. Warda Al-Jazairia, Abdel Halim Hafez, and Um Kulthum are known for tarab. "Biwarjini tarab" = he/she makes me experience tarab. "Inta 3aamel tarab" (you\'re in a tarab state). Musicians see inducing tarab as the highest achievement.'
  },
  {
    q: 'What is the "maqam" (مقام) system and why is it fundamental to Arabic music?',
    opts: ['a Lebanese folk dance step sequence', 'a modal scale system with specific emotional qualities — the foundation of all Arabic music theory', 'the name for the lead singer in a Lebanese troupe', 'a traditional Lebanese music festival format'],
    correct: 1,
    note: '"Ma2aam" (modal scale) is the organizational system of Arabic music. Unlike Western music with just major/minor, Arabic music has 20+ maqamat (scales), each with distinct character: Maqam Rast (neutral, calm), Maqam Bayati (emotional, melancholic — Fairouz\'s signature), Maqam Hijaz (exotic, dramatic), Maqam Saba (extreme sadness). Each maqam uses quarter-tones that don\'t exist in Western music — that\'s why Arabic music can sound "off-key" to Western ears. The qanun and oud are essential for navigating maqamat because they can produce these micro-intervals.'
  },
  {
    q: 'What is the "Baalbek International Festival" (مهرجان بعلبك الدولي) and why is it iconic?',
    opts: ['a Beirut neighborhood music fair', 'a world-famous outdoor festival held at 2,000-year-old Roman temples — one of the world\'s great music venues', 'a religious music festival in South Lebanon', 'a Beirut nightclub festival'],
    correct: 1,
    note: '"Mahrajaan ba3albak ed-dawli" (Baalbek International Festival) has been held since 1956 in the ruins of the Roman Temple of Jupiter and Temple of Bacchus in Baalbek (Bekaa Valley). It\'s one of the world\'s most extraordinary concert settings — performances by the world\'s greatest artists (Ella Fitzgerald, Rudolf Nureyev, Fairouz, Placido Domingo) against 2,000-year-old Roman columns. Fairouz\'s Baalbek concerts (especially the 1957-1975 period with the Rahbani Brothers) are legendary recordings. The festival paused during the civil war and has resumed since. It symbolizes Lebanese cultural ambition.'
  },
  {
    q: 'What is "mawwal" (موال) and what role does it play in Lebanese music?',
    opts: ['a fast dance section in dabke performance', 'an improvised vocal lament — a singer freely expressing deep emotion without fixed meter', 'a type of Lebanese musical instrument', 'the name for a folk song chorus'],
    correct: 1,
    note: '"Mawwaal" is one of Arabic music\'s most emotionally powerful forms. A singer improvises freely — no fixed meter, no set structure — exploring a maqam with maximum emotional freedom. Think of it as Arabic musical free verse. A great mawwaal singer can hold an audience in tears with bending, melismatic vocal runs. It\'s the closest Arabic music gets to jazz improvisation in terms of in-the-moment creation. Lebanese singers like Wadih El Safi were masters of the mawwaal. At a Lebanese wedding or 7afle, the mawwaal section is when the room goes quiet and everyone listens.'
  },
  {
    q: 'What is the "3uud" (عود) and why is it called "the king of instruments" in Arabic music?',
    opts: ['a Lebanese percussion instrument similar to a drum', 'the oud (lute) — a fretless string instrument that is the foundational instrument of Arabic music', 'a type of folk flute', 'a modern electric instrument used in Lebanese pop'],
    correct: 1,
    note: '"El-3uud" (the oud) is the defining instrument of Arabic and Turkish classical music. It\'s a pear-shaped, fretless lute with 11-13 strings (in courses). Fretless means it can play the quarter-tones essential to maqam music. The word "lute" comes from Arabic "al-3uud" (the wood). It\'s the ancestor of the European lute and guitar. In Lebanese music: the oud leads, the qanun and ney support, the darbuka keeps rhythm. Lebanese oud masters include Marcel Khalifé (who combined oud with poetry) and Farid el-Atrash (Egyptian-Syrian-Lebanese). Learning oud is a Lebanese cultural rite of passage.'
  },
  {
    q: 'What is the "mijana" (ميجانا) and what makes it distinctly Lebanese?',
    opts: ['a modern Lebanese pop music genre', 'a traditional improvised folk singing style where poets compete with verbal wit', 'a type of Lebanese musical instrument', 'a Beirut music festival'],
    correct: 1,
    note: '"Mijaana" is a Lebanese/Levantine folk singing tradition where singers improvise poetic verses competitively. It\'s like a musical rap battle with a set of poetic rules — each verse must respond to the previous singer\'s challenge. Performed at rural celebrations, weddings, and harvest festivals. Related form: "3itaaba" (the mawwaal-style lament verse). Wadih El Safi and other folk legends were masters of both forms. The mijana tradition was preserved primarily in rural North Lebanon and the Bekaa Valley. It\'s a living art form — young Lebanese folk artists still practice and compete.'
  },
  {
    q: 'What is Ziad Rahbani\'s significance in Lebanese music?',
    opts: ['he invented the dabke dance', 'Fairouz\'s son — a jazz-Arabic fusion composer who modernized Lebanese music while being politically sharp', 'the founder of the Baalbek Festival', 'Lebanon\'s most famous oud player'],
    correct: 1,
    note: '"Ziyaad er-ra7baani" (Ziad Rahbani, born 1956) is Fairouz\'s son and a genius of Lebanese music. While his parents (the Rahbani Brothers + Fairouz) defined classic Lebanese sound, Ziad fused Arabic maqamat with jazz, classical, and experimental elements. His theatrical plays (like "Film Amreeki Twiil") are sharp political satire. He wrote major Fairouz albums ("Wahdon," "Kifak Inta"). His music is beloved by Lebanese intellectuals and leftists. His willingness to discuss Lebanon\'s failures makes him a cultural truth-teller. "Ziyaad 3am yghanni" = Ziad is singing — cause for celebration.'
  },
  {
    q: 'What does "biTarbni" (بيطربني) mean and when would a Lebanese person say it?',
    opts: ['it annoys me / it disturbs me', 'it gives me tarab — this music moves my soul / I experience musical ecstasy from this', 'it makes me dance', 'it reminds me of home'],
    correct: 1,
    note: '"BiTarbni" (it gives me tarab) is what you say when music transcends mere enjoyment and reaches your soul. Lebanese use it specifically to honor music that achieves tarab — not just catchy music, but music that causes involuntary emotional response. "Sawt Fayruuz biTarbni" (Fairouz\'s voice gives me tarab). It\'s a high compliment to a musician: "3am tTarbna!" (you\'re inducing tarab in us!). The verb "Tarrab" means to cause tarab. A "muTrib" (طرب-inducer) is the formal word for a singer/musician. In Lebanese compliment culture: "sawto 3asal w biTarb" = his voice is honey and induces tarab = supreme praise.'
  },
];

const MUS_TIPS = [
  {
    title: '🎵 Fairouz: Why She Unites Lebanon',
    body: 'Fairouz is Lebanon\'s only universally loved figure — transcending religion, politics, and class. In a country divided by 18 recognized sects, Fairouz is "our Fairouz" to everyone. During the 1975-1990 Civil War, her morning songs on Radio Lebanon were a shared ritual across battle lines. Her voice carried messages: "Bhebbak ya Lubnaan" (I love you Lebanon) became the national sentiment. Lebanese diaspora in São Paulo, Sydney, Detroit, or Paris play Fairouz to maintain emotional connection to home. Learning key Fairouz song titles and phrases is essential Lebanese cultural literacy — it opens doors in every Lebanese conversation.'
  },
  {
    title: '🥁 Dabke: How to Watch and Appreciate',
    body: 'To appreciate dabke, watch for: (1) The lawwi (lead dancer) — he improvises, throws his body dramatically, and sets the energy. (2) Foot coordination — everyone must stomp in perfect unison; this is trained from childhood. (3) Regional style differences: northern dabke is more acrobatic (high kicks, jumps), southern styles are more grounded. (4) The circle formation — dabke traditionally goes in a line, but celebration dabke sometimes forms a circle. At Lebanese weddings, the groom and his closest friends usually start the dabke line. "Yalla ndabki 3a l-3aroos!" (let\'s dabke for the groom!) signals the party\'s peak moment.'
  },
  {
    title: '🎭 The Rahbani Brothers & Lebanese Musical Theater',
    body: 'Assi and Mansour Rahbani (the Rahbani Brothers) created Lebanese musical theater in the 1950s-70s — original plays combining Arabic, Lebanese folk, and Western classical music with Fairouz as the star. Productions like "Bint el-Haras," "Jisr el-Qamar," and "Ya3ish Ya3ish" played at Baalbek and toured the Arab world. They created a new genre: not traditional maqam music, not Western theater, but something distinctly Lebanese — folk melodies with sophisticated harmonies, simple peasant stories with profound political themes. Their work during Lebanon\'s golden age (1950s-1973) represents what Lebanese call "el-zaman ez-zahabi" (the golden era).'
  },
  {
    title: '🎸 Modern Lebanese Music: From Fairuz to Today',
    body: 'Lebanese music evolved dramatically: 1950s-70s — Rahbani Brothers/Fairouz golden era. 1980s — civil war disrupted music scene; artists like Marcel Khalifé combined oud with Palestinian resistance poetry. 1990s — Lebanese pop emerged: Elissa, Najwa Karam, Wael Kfoury became Arab world stars. 2000s — Mashrou\' Leila (indie Arabic rock with frank LGBTQ+ themes) broke global barriers. Today — Lebanese DJ and electronic music is globally recognized (BLVCK CEILING, Jad Khalife). Beirut\'s Mar Mikhael and Gemmayzeh neighborhoods were the Middle East\'s best live music scenes before 2020. The 2020 Beirut explosion devastated many venues, but the music scene is rebuilding.'
  },
  {
    title: '🕌 Musical Vocabulary for Lebanese Conversations',
    body: 'Key music phrases: "Shu bti7ebb btisma3?" (what do you like to listen to?) — great opener. "Ana min 3ushsha2 Fayruuz" (I\'m a Fairouz devotee). "3am ndabki?" (shall we dabke?). "Sawto 3asal" (his voice is honey — highest vocal compliment). "Ha2 el-ughniyye" (that song deserves respect). "Sha3lik" (move to the music / feel it). "El-7afle rayye7a" (the concert is going well). At Lebanese gatherings: never criticize Fairouz — it\'s social suicide. Asking "Shu ra2yak b-Fayruuz?" (what do you think of Fairouz?) will get emotional, proud, detailed answers. Music is the safe entry point to Lebanese conversation and soul.'
  },
];

const MUS_ABOUT = 'Music is Lebanon\'s deepest language. While Lebanese Arabic unites speakers, music transcends — Fairouz\'s voice crosses religious, political, and generational lines that nothing else can cross. The Lebanese relationship to music is intimate: songs are not entertainment but memory, identity, and emotional lifeline. A Lebanese abroad who hears Fairouz singing "Bhebbak ya Lubnaan" (I love you Lebanon) feels homesick immediately. The Rahbani Brothers invented Lebanese musical identity; dabke made it physical; the 3uud and darbuka gave it its sound. Understanding Lebanese music vocabulary means understanding the emotional core of Lebanese culture — the beauty they hold onto when everything else falls apart.';
