// R1401 — NEW FEATURE: Lebanese Oud & Tarab Music Culture (oud)
const OUD_WORDS = [
  {ar:'عود',tr:'oud',en:'oud (lute instrument)'},
  {ar:'طرب',tr:'tarab',en:'musical ecstasy / being moved by music'},
  {ar:'بعزف',tr:'bi3zif',en:'plays (an instrument)'},
  {ar:'موسيقى',tr:'musiqa',en:'music'},
  {ar:'وتر',tr:'watar',en:'string (of instrument)'},
  {ar:'ريشة',tr:'risha',en:'plectrum / pick'},
  {ar:'مقام',tr:'ma2am',en:'musical mode / scale'},
  {ar:'فيروز',tr:'fayruz',en:'Fairouz (iconic Lebanese singer)'},
  {ar:'نغمة',tr:'naghme',en:'melody / musical phrase'},
  {ar:'أغنية',tr:'ughniye',en:'song'},
  {ar:'صوت',tr:'sout',en:'voice / sound'},
  {ar:'مطرب',tr:'motrib',en:'singer who moves the audience'},
  {ar:'موّال',tr:'mawwal',en:'improvised vocal lament'},
  {ar:'جلسة طرب',tr:'jalset tarab',en:'intimate musical gathering'},
  {ar:'لحن',tr:'la7n',en:'tune / melody'},
  {ar:'بيطرّب',tr:'biTarrab',en:'gets musically enchanted'},
  {ar:'الرحبانية',tr:'el-ra7baniyye',en:'the Rahbani Brothers (iconic composers)'},
  {ar:'تعزيف',tr:'ta3ziif',en:'musical performance / playing'},
  {ar:'بكّى',tr:'bakka',en:'moved to tears (by music)'},
  {ar:'سماع',tr:'sama3',en:'deep listening / Sufi musical ritual'}
];

const OUD_DRILLS = [
  {q:'In Lebanese music culture, "tarab" (طرب) describes...?',opts:['a type of oud','the state of being moved/enchanted by music','a musical mode','a plectrum technique'],a:1},
  {q:'The "risha" (ريشة) is used to...?',opts:['tune the oud strings','hold the instrument','strum/pluck the oud strings','write musical notation'],a:2},
  {q:'Fairouz (فيروز) is best described as...?',opts:['a Lebanese oud brand','the most iconic Lebanese singer, beloved across the Arab world','a musical mode','a type of improvised song'],a:1},
  {q:'A "mawwal" (موّال) is...?',opts:['a type of oud','a written musical score','an improvised vocal lament, often emotionally intense','a formal concert'],a:2},
  {q:'"Ma2am" (مقام) in Arabic music refers to...?',opts:['the oud body shape','a musical mode or scale system','a plectrum','a singer\'s rank'],a:1},
  {q:'"El-Ra7baniyye" (الرحبانية) refers to...?',opts:['a Lebanese restaurant chain','the Rahbani Brothers, who composed most of Fairouz\'s songs','a musical mode','a village near Beirut'],a:1},
  {q:'A "jalset tarab" (جلسة طرب) is typically...?',opts:['a large stadium concert','a formal recital','an intimate late-night gathering where musicians improvise and feed off audience emotion','a recorded album session'],a:2},
  {q:'"Bifarrab" (بيطرّب) describes someone who...?',opts:['is learning to play oud','is musically enchanted / overcome with emotion by the music','is composing a song','is tuning an instrument'],a:1}
];

const OUD_TIPS = [
  {title:'The Oud — Lebanon\'s Soul Instrument',body:'The oud (عود) is the grandfather of the guitar and central to Lebanese and Arab musical identity. Fretless and played with a risha (plectrum), it produces a warm, resonant sound unlike any Western instrument. Every Lebanese household once had an oud player — "beit ma fio 3oud, ma fio 7ayeh" (a home without an oud has no life) is a common saying. Famous Lebanese oud masters include Marcel Khalifé, who combined classical Arabic maqamat with political poetry to create a uniquely Lebanese sound.'},
  {title:'Fairouz — The Voice of Lebanon',body:'No Lebanese music discussion exists without Fairouz (فيروز), born Nouhad Haddad in 1934. Her voice — smoky, pure, timeless — became the soundtrack of Lebanese identity. She collaborated with the Rahbani Brothers (her husband Assi and his brother Mansour) to create operettas, films, and hundreds of songs. Lebanese tradition is to wake up to Fairouz: "ma bet7ib fayrouz?" (you don\'t love Fairouz?) is met with genuine shock. Her song "Li Beirut" became Lebanon\'s unofficial anthem during the civil war.'},
  {title:'Tarab — Music as Emotional Journey',body:'"Tarab" (طرب) has no single English translation. It describes a state of musical enchantment where performer and audience merge in shared emotion — tears, trembling, shouting "wallah!" or "ya3tik el-3afye!" (God bless your health!). A skilled motrib (مطرب) reads the room, slowing down, repeating a phrase the audience loves ("el-layle" — tonight — might be sung 12 times to ecstatic response). In Lebanon, a concert is judged by how much tarab it produced. A show without tarab is "khali" (empty).'},
  {title:'Lebanese Musical Gatherings (Jalse)',body:'The "jalset tarab" (جلسة طرب) is Lebanese music at its most intimate — a small group, a singer, an oud, maybe a riq (tambourine), and an audience that participates. It typically starts after midnight, peaks around 2-3am, and might end at dawn. The mawwal (موّال) — an improvised vocal lament in dialect — is the emotional peak. Someone shouts "la2 la2 la2!" and the singer repeats the phrase more intensely. Famous venues in Beirut\'s Hamra and Mar Mikhael districts hosted legendary jalsat. "El-jalse el-7elwe ma bit7ib t2om" (a good gathering doesn\'t want to end).'}
];
