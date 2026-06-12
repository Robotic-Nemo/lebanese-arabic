// Run #339 — Lebanese Music & Tarab Coach (trb)
// 40 words across 5 categories: artists / instruments / genres / lyrics / culture
// 10 MCQ drills, 5 tips, about text

const TRB_WORDS = [
  // artists & legends
  { tr: 'Fayruuz', ar: 'فيروز', en: 'Fairuz — Lebanon\'s iconic diva', cat: 'artists' },
  { tr: 'Ziyaad Rahbaani', ar: 'زياد رحباني', en: 'Ziad Rahbani — composer/playwright, Fairuz\'s son', cat: 'artists' },
  { tr: 'il-Akhawein Rahbaani', ar: 'الأخوين رحباني', en: 'The Rahbani Brothers — Fairuz\'s composers', cat: 'artists' },
  { tr: 'Waadii l-Saafi', ar: 'وادي الصافي', en: 'Wadi el Safi — legendary Lebanese vocalist', cat: 'artists' },
  { tr: 'Sabaah', ar: 'صباح', en: 'Sabah — beloved Lebanese pop legend', cat: 'artists' },
  { tr: 'Najiib Hankash', ar: 'نجيب حنكش', en: 'Najib Hankash — folk singer, dabke master', cat: 'artists' },
  { tr: 'Marsiil Khaliife', ar: 'مارسيل خليفة', en: 'Marcel Khalife — oud master & political singer', cat: 'artists' },
  { tr: 'Majida l-Ruumi', ar: 'ماجدة الرومي', en: 'Majida al-Roumi — beloved contemporary singer', cat: 'artists' },
  // instruments
  { tr: '3uud', ar: 'عود', en: 'oud — the soul of Arab music (lute)', cat: 'instruments' },
  { tr: 'durbakke', ar: 'دربكة', en: 'darbuka / tabla — goblet drum', cat: 'instruments' },
  { tr: 'qaanuun', ar: 'قانون', en: 'qanun — plucked zither', cat: 'instruments' },
  { tr: 'naay', ar: 'ناي', en: 'ney — end-blown reed flute', cat: 'instruments' },
  { tr: 'miizmar', ar: 'مزمار', en: 'mizmar — double-reed folk oboe', cat: 'instruments' },
  { tr: 'kmaanje', ar: 'كمنجة', en: 'violin / kamanjeh', cat: 'instruments' },
  { tr: 'Tabl', ar: 'طبل', en: 'tabl — large frame drum (dabke processions)', cat: 'instruments' },
  { tr: '3azf', ar: 'عزف', en: 'playing (music) / musical performance', cat: 'instruments' },
  // genres & styles
  { tr: 'Tarab', ar: 'طرب', en: 'tarab — musical ecstasy / being moved by music', cat: 'genres' },
  { tr: 'dabke', ar: 'دبكة', en: 'dabke — Lebanese line dance (folk tradition)', cat: 'genres' },
  { tr: 'mawwaal', ar: 'موال', en: 'mawwal — improvised vocal lament', cat: 'genres' },
  { tr: 'muwashshaH', ar: 'موشح', en: 'muwashshah — classical Andalusian-Arab song form', cat: 'genres' },
  { tr: 'ughniyye', ar: 'أغنية', en: 'song', cat: 'genres' },
  { tr: 'alHaan', ar: 'ألحان', en: 'melodies / musical compositions', cat: 'genres' },
  { tr: 'sha3bii', ar: 'شعبي', en: 'popular / folk (music style)', cat: 'genres' },
  { tr: 'zajal', ar: 'زجل', en: 'zajal — Lebanese oral poetry battle / sung verse', cat: 'genres' },
  // lyric vocabulary
  { tr: 'ya 3ein', ar: 'يا عين', en: 'oh my eye — O my darling (lyrical endearment)', cat: 'lyrics' },
  { tr: 'ghanniili', ar: 'غنيلي', en: 'sing to me (imperative)', cat: 'lyrics' },
  { tr: 'laHn', ar: 'لحن', en: 'melody / tune', cat: 'lyrics' },
  { tr: 'kalimaet', ar: 'كلمات', en: 'words / lyrics', cat: 'lyrics' },
  { tr: 'Sawt', ar: 'صوت', en: 'voice / sound', cat: 'lyrics' },
  { tr: 'Haniin', ar: 'حنين', en: 'nostalgia / yearning (common lyric theme)', cat: 'lyrics' },
  { tr: 'GHanniyt', ar: 'غنيت', en: 'I sang / she sang', cat: 'lyrics' },
  { tr: 'biddi GHanniilak', ar: 'بدي غنيلك', en: 'I want to sing to you', cat: 'lyrics' },
  // culture & occasions
  { tr: '7afle', ar: 'حفلة', en: 'concert / party / celebration', cat: 'culture' },
  { tr: 'baalbek', ar: 'بعلبك', en: 'Baalbek — site of Lebanon\'s most famous music festival', cat: 'culture' },
  { tr: 'biermaan', ar: 'بيرمان', en: 'Byblos — music festival city', cat: 'culture' },
  { tr: 'fann', ar: 'فن', en: 'art / artistry', cat: 'culture' },
  { tr: 'mutrib', ar: 'مطرب', en: 'singer who induces tarab / musical enchanter', cat: 'culture' },
  { tr: 'zafffe', ar: 'زفة', en: 'wedding procession music / fanfare', cat: 'culture' },
  { tr: 'marbaa3', ar: 'مربع', en: 'traditional 4-line improvisational folk song', cat: 'culture' },
  { tr: '3ala daloona', ar: 'على دلونا', en: 'folk refrain — "on our way" (dabke song opener)', cat: 'culture' },
];

const TRB_DRILLS = [
  {
    q: 'What is "Tarab" (طرب) in Lebanese musical culture?',
    opts: ['A type of instrument', 'Musical ecstasy — being deeply moved or transported by music', 'A folk dance', 'A song competition'],
    correct: 1,
    note: '"Tarab" (طرب) is one of the most important concepts in Arab music — it describes the state of emotional transport and ecstasy that great music induces. A "mutrib" (مطرب) is a singer who can create this feeling. When Lebanese say "tarraBni" (أطربني), it means the music moved their soul. It\'s the highest compliment for a performer.'
  },
  {
    q: 'Who is Fairuz and why is she called "Lebanon\'s ambassador to the stars"?',
    opts: ['A classical poet', 'Lebanon\'s most beloved singer — her voice defined Lebanese national identity', 'A famous oud player', 'A political figure'],
    correct: 1,
    note: '"Fayruuz" (فيروز) is arguably the most beloved Arab singer of the 20th century. She began her career with the Rahbani Brothers in the 1950s, performing at Baalbek International Festival. Her morning radio broadcasts were legendary — Lebanese say "Fayruuz bi s-SubuH" (Fairuz in the morning) is how you start a good day. Her son Ziad Rahbani became a major composer himself.'
  },
  {
    q: 'What is "dabke" (دبكة)?',
    opts: ['A solo violin performance', 'Lebanese traditional line dance performed at weddings and festivals', 'A type of mournful song', 'A musical instrument'],
    correct: 1,
    note: '"Dabke" (دبكة) is Lebanon\'s most iconic folk tradition — a stomping line dance where dancers link arms and a lead dancer (lawwi7) improvises acrobatics. Performed at weddings, festivals, and national celebrations. The word comes from stomping the ground (dabak = to stamp). The Tabl (طبل) drum and mizmar (مزمار) drive the rhythm. "Khud il-dabke!" = join the dabke line!'
  },
  {
    q: 'What does "mawwaal" (موال) describe in Arabic music?',
    opts: ['A dance style', 'An improvised vocal lament — an unaccompanied, deeply emotional solo', 'A drum rhythm', 'A type of wedding procession'],
    correct: 1,
    note: '"Mawwaal" (موال) is a form of improvised vocal poetry sung in dialect, usually expressing longing, heartbreak, or homeland. It\'s unaccompanied or minimally accompanied — the singer\'s raw voice is the instrument. A skilled mawwaal performer holds the audience breathless. It\'s the blues of Arab music. When a Lebanese singer "nazzal mawwaal" = they dropped an emotional improvised verse.'
  },
  {
    q: 'What is the "3uud" (عود) and why is it called the "king of instruments"?',
    opts: ['A type of flute made from reeds', 'The oud — a fretless lute, ancestor of the European lute, central to Arab music', 'A large frame drum', 'A double-reed instrument'],
    correct: 1,
    note: '"3uud" (عود) = oud — a fretless, short-necked lute that is the cornerstone of Arab music. Its name literally means "wood" in Arabic. The European lute came from the oud (al-3uud → lute). Lebanon produced world-class oud masters including Marcel Khalife. Playing oud is a mark of culture — "bi3zef 3uud?" = do you play oud? carries real social prestige in Lebanon.'
  },
  {
    q: 'What is "zajal" (زجل) in Lebanese culture?',
    opts: ['A type of drum', 'A sung oral poetry battle in Lebanese dialect — improvised competitive verse', 'A wedding dance', 'A funeral tradition'],
    correct: 1,
    note: '"Zajal" (زجل) is a uniquely Lebanese art form — competitive improvised poetry sung in Lebanese dialect. Two or more poets (zajjalin) duel in improvised verse, playing on words, rhyme, and wit. It\'s part stand-up comedy, part debate, part music. Zajal competitions are held on TV and at festivals. The best zajal poets are national celebrities. "Shayyil zajal" = he\'s a poet-singer.'
  },
  {
    q: 'What happens at "7aflet Baalbek" (حفلة بعلبك)?',
    opts: ['A government meeting', 'Baalbek International Festival — Lebanon\'s premier open-air concert venue in Roman ruins', 'A religious ceremony', 'A folk market'],
    correct: 1,
    note: '"7aflet Baalbek" refers to concerts at the Baalbek International Festival (مهرجانات بعلبك), held in the ancient Roman ruins in Lebanon\'s Beqaa valley. Since 1956, it has hosted Fairuz, Umm Kulthum, opera, and world artists. Fairuz\'s Baalbek performances are iconic recordings of Lebanese cultural history. "Raaya3 3al Baalbek" = going to Baalbek (for the festival) is a cherished summer ritual.'
  },
  {
    q: 'What does "ya 3ein" (يا عين) mean in Lebanese songs?',
    opts: ['Oh how painful', 'Oh my eye — a lyrical endearment meaning "my darling, my treasure"', 'Look out! A warning', 'The sun is beautiful'],
    correct: 1,
    note: '"Ya 3ein" (يا عين) literally means "oh my eye" but functions as a lyrical endearment meaning "my darling, my treasure." Eyes are deeply symbolic in Lebanese Arabic — "3eini" (my eye) = my dearest. "Ya 3eini 3a l-zaman" = oh my eye, how time passes — used nostalgically. In folk songs, "ya 3ein mola" is a classic refrain expressing longing. Eyes represent the most precious thing.'
  },
  {
    q: 'What is a "zafffe" (زفة)?',
    opts: ['A mournful funeral march', 'Wedding procession music — the celebratory fanfare when bride and groom enter', 'A solo guitar performance', 'A type of lullaby'],
    correct: 1,
    note: '"Zafffe" (زفة) is the triumphant wedding procession — the music and pageantry when the couple enters. Lebanese zaffes are elaborate productions with drummers, singers, dancers, sparklers, and traditional instruments. The zaffe song announces the wedding party. "3amalulna zaffe!" = they did a full procession for us! Zaffe companies are a real industry in Lebanon. Completely joyful noise.'
  },
  {
    q: 'What is "Haniin" (حنين) and why does it dominate Lebanese music?',
    opts: ['Excitement about the future', 'Nostalgia / deep yearning — especially for homeland, childhood, or lost love', 'Pride in achievement', 'Celebration of abundance'],
    correct: 1,
    note: '"Haniin" (حنين) = nostalgia, deep yearning — one of Lebanon\'s most central emotional and musical themes. With 15+ million Lebanese diaspora worldwide and decades of war, Haniin for Lebanon, for a home left behind, for lost people — saturates Lebanese music. Fairuz\'s "Li Beirut" (To Beirut), Wadi el-Safi\'s village songs — all are Haniin in musical form. "Beyhanniinii" = it makes me yearn.'
  },
];

const TRB_TIPS = [
  {
    title: 'Fairuz: How to Talk About Lebanon\'s National Voice',
    body: '"Fayruuz" (فيروز) is more than a singer — she IS Lebanese musical identity. Start any morning with her music: "Fayruuz bi s-SubuH mazbooTa" (Fairuz in the morning is right/correct) is a cultural law. Her Rahbani-era songs (1950s-80s) define classic Lebanese Arabic. Her son Ziad\'s more jazz-influenced compositions pushed the form. Essential tracks: "Shatti ya Dini" (rain down), "Li Beirut" (to Beirut), "Nassam 3aleina l-Hawa". Knowing even one Fairuz lyric earns massive warmth from Lebanese people.'
  },
  {
    title: 'Dabke: Lebanon\'s Living Folk Dance',
    body: '"Dabke" (دبكة) is performed at every Lebanese wedding, festival, and national occasion. The name comes from stomping (dabak). Dancers form a line, linking shoulders or hands, and stomp in unison. The "lawwi7" (leader) breaks from the line to improvise solos. Music is typically "3ala daloona" (على دلونا) folk songs with Tabl drum and mizmar. "Yalla, 3ala l-dabke!" = let\'s dance! Even basic dabke participation makes you immediately part of the community — you don\'t need to be good.'
  },
  {
    title: 'The Oud: Instrument of the Lebanese Soul',
    body: 'The "3uud" (عود) is the master instrument of Lebanese and Arab music — 13 strings, fretless, warm tone. Lebanese oud masters include Marcel Khalife (political folk), Rabih Abou-Khalil (jazz fusion), and countless traditional players. You\'ll hear 3uud in cafés, homes, and festivals. "Bi3zef 3uud?" (do you play oud?) opens deep musical conversations. The 3uud differs from a guitar: no frets means microtonal expression impossible on Western instruments. It\'s the sound that makes Arab music sound Arab.'
  },
  {
    title: 'Baalbek Festival & Summer Music Culture',
    body: 'Lebanon\'s summer festival circuit is legendary: Baalbek International (مهرجانات بعلبك) in Roman ruins, Byblos Festival (مهرجانات جبيل) on Phoenician walls, Beiteddine, Zouk. These aren\'t just concerts — they\'re national events. "Raayi7 3al Baalbek?" (going to Baalbek?) is a summer rite of passage. Fairuz performed there in the 50s-70s — recordings from those nights are cultural treasures. Even during war years, Lebanese found ways to hold concerts: music as resistance and continuity.'
  },
  {
    title: 'Tarab vs Noise: The Lebanese Musical Ear',
    body: '"Tarab" (طرب) describes genuine musical emotion — when a voice or melody moves you to tears, chills, or joy. The opposite is just "DajjiJ" (noise). Lebanese musical culture has high standards: a singer either "byiTrab" (induces tarab) or doesn\'t. "Tarrbaani" = she moved my soul. The mawwaal (موال) is the ultimate tarab vehicle — an unaccompanied improvised lament. When a great singer "nazzal mawwaal" at a wedding, the room goes silent. That silence is the ultimate compliment.'
  },
];

const TRB_ABOUT = 'Lebanese music is a world of its own — from the immortal voice of Fairuz echoing through Roman ruins at Baalbek, to the stomping joy of dabke at mountain weddings, to the soul-tearing improvisation of a mawwaal at midnight. Lebanon sits at the crossroads of Arab tarab tradition, Andalusian classical forms, French chanson influence, and raw folk poetry (zajal). Understanding Lebanese musical vocabulary unlocks not just songs but the emotional DNA of Lebanese culture: Haniin (longing), Tarab (ecstasy), and the belief that beauty can survive anything.';
