// Run #1695 — NEW FEATURE: mwl — Lebanese Mawwal (improvised vocal poetry).
// Mawwal (مَوّال) is the unmetered, melismatic vocal opening that precedes
// many Levantine songs. The singer improvises on a 4/7-line poem (often in
// 3atabba/mijana form), stretching syllables across maqam phrases ("ya leil
// ya 3ein"). Distinct from R1644 wsf (Wadih el-Safi as figure), R1650 sah
// (Sabah), R1653 zia (Ziad el-Rahbani), R1557 zgl (zajal duels) — focuses on
// the *vocal form itself*: maqam, melisma, and the lyrical conventions of
// the genre. Prefix: mwl.

const MWL_WORDS = [
  { w: 'mawwal', t: 'موّال', e: 'mawwal — improvised solo vocal opening, no fixed meter', ex: 'el-mawwal byeftah el-ghoniye.', exEn: 'The mawwal opens the song.' },
  { w: 'ya leil ya 3ein', t: 'يا ليل يا عين', e: '"Oh night, oh eye" — classic mawwal vocative refrain', ex: 'ya leil ya 3ein, taweel el-leil.', exEn: '"Oh night, oh eye" — the night is long.' },
  { w: 'maqam', t: 'مقام', e: 'maqam — Arabic modal scale system that frames mawwal', ex: 'el-mawwal 3a maqam bayati.', exEn: 'The mawwal is in maqam Bayati.' },
  { w: 'bayati', t: 'بياتي', e: 'Bayati — the most common maqam for mawwal (sad/yearning)', ex: 'bayati 3atifi.', exEn: 'Bayati is emotional.' },
  { w: 'sigah', t: 'سيكاه', e: 'Sigah — folk maqam, common in zajal-style mawwals', ex: 'sigah maqam sha3bi.', exEn: 'Sigah is a folk maqam.' },
  { w: '3atabba', t: 'عتابا', e: '3atabba — 4-line folk poem form often sung as mawwal', ex: 'el-3atabba arba3 abyat.', exEn: 'Atabba has four lines.' },
  { w: 'mijana', t: 'ميجانا', e: 'Mijana — refrain "ya mijana" sung after mawwal verses', ex: 'ba3d el-mawwal el-mijana.', exEn: 'After mawwal comes mijana.' },
  { w: 'shrouqi', t: 'شروقي', e: 'Shrouqi — bedouin-style mawwal with long melismatic phrases', ex: 'el-shrouqi badawi.', exEn: 'Shrouqi is bedouin in style.' },
  { w: 'tarab', t: 'طرب', e: 'tarab — ecstatic emotional state mawwal aims to evoke', ex: 'el-mawwal byjib tarab.', exEn: 'The mawwal brings tarab.' },
  { w: 'jawaab', t: 'جواب', e: 'jawaab — the high vocal register, climax of mawwal', ex: 'tele3 3a-l-jawaab.', exEn: 'He went up to the high register.' },
  { w: 'qarar', t: 'قرار', e: 'qarar — the low/resting tonic note of the maqam', ex: 'rij3 3a-l-qarar.', exEn: 'He returned to the tonic.' },
  { w: 'irtijal', t: 'ارتجال', e: 'irtijal — improvisation, the heart of mawwal', ex: 'el-mawwal kello irtijal.', exEn: 'Mawwal is all improvisation.' },
  { w: 'wasla', t: 'وصلة', e: 'wasla — the full song-suite mawwal is part of', ex: 'el-mawwal awal el-wasla.', exEn: 'The mawwal is the start of the wasla.' },
  { w: 'mootreb', t: 'مطرب', e: 'mootreb — male solo singer (literally "tarab-bringer")', ex: 'el-mootreb shateer.', exEn: 'The singer is skilled.' },
  { w: 'mootreba', t: 'مطربة', e: 'mootreba — female solo singer', ex: 'el-mootreba sawta 7elo.', exEn: 'The female singer has a beautiful voice.' },
  { w: 'sout', t: 'صوت', e: 'sout — voice; the singer\'s most prized instrument', ex: 'sawto qawi.', exEn: 'His voice is strong.' },
  { w: 'nafas', t: 'نَفَس', e: 'nafas — breath; long nafas = ability to stretch a syllable', ex: 'nafaso taweel.', exEn: 'His breath is long.' },
  { w: 'qaseede', t: 'قصيدة', e: 'qaseede — formal poem, sometimes turned into mawwal', ex: 'mawwal 3a qaseede.', exEn: 'A mawwal on a poem.' },
  { w: 'jinas', t: 'جناس', e: 'jinas — wordplay/punning, prized in 3atabba mawwals', ex: 'el-3atabba bjinas.', exEn: 'Atabba uses wordplay.' },
  { w: 'rabaaba', t: 'ربابة', e: 'rabaaba — bowed lute that often accompanies mawwal', ex: 'el-rabaaba btrafe2 el-mawwal.', exEn: 'The rabaaba accompanies the mawwal.' },
  { w: 'oud', t: 'عود', e: 'oud — the classical lute behind urban mawwal', ex: 'el-3oud yrafe2 el-mootreb.', exEn: 'The oud accompanies the singer.' },
  { w: 'mawwal baghdadi', t: 'موّال بغدادي', e: 'mawwal baghdadi — 7-line Iraqi-style mawwal', ex: 'el-baghdadi sab3 abyat.', exEn: 'Baghdadi has seven lines.' }
];

const MWL_DRILLS = [
  { q: 'What is a mawwal?', opts: ['a metered dance song', 'an improvised vocal opening', 'a wedding chant'], a: 1, exp: 'A mawwal (موّال) is the slow, unmetered, improvised vocal section that traditionally opens a Levantine song. The singer stretches words across the maqam, demonstrating vocal mastery before the rhythmic part begins.' },
  { q: 'What does "ya leil ya 3ein" mean literally?', opts: ['Oh moon, oh sea', 'Oh night, oh eye', 'Oh sky, oh heart'], a: 1, exp: '"Ya leil ya 3ein" (يا ليل يا عين) literally means "Oh night, oh eye" — a stock vocative refrain in mawwal. It\'s used as a melismatic syllable carrier where the singer can show off vocal control without committing to lyrics yet.' },
  { q: 'Which maqam is most associated with mawwal?', opts: ['Bayati', 'Hijaz', 'Rast'], a: 0, exp: 'Bayati (بياتي) is the most common maqam for mawwal — its half-flat second degree gives it the yearning, melancholic quality that fits mawwal\'s emotional intensity. Other common choices: Sigah, Saba, and Hijaz.' },
  { q: 'What is "tarab"?', opts: ['a type of drum', 'an ecstatic emotional state', 'a wedding hall'], a: 1, exp: 'Tarab (طرب) is the deep emotional/ecstatic state that classical Arab music — especially mawwal — aims to induce. It\'s the audience-singer feedback loop where listeners shout "Allah!" or "ya 3eini" in response to a particularly moving phrase.' },
  { q: 'What is the "jawaab" in a mawwal?', opts: ['the answer to a riddle', 'the high vocal register/climax', 'the second verse'], a: 1, exp: 'Jawaab (جواب) literally means "answer" but in maqam theory it\'s the upper octave or high register. The mawwal\'s emotional climax comes when the singer "goes up to the jawaab" — straining to the top of their range.' },
  { q: 'What is "3atabba"?', opts: ['a four-line folk poem form', 'a brass instrument', 'a tea ceremony'], a: 0, exp: '3atabba (عتابا) is a 4-line Levantine folk poetry form, sung as a mawwal. The first three lines end in homophones (jinas/wordplay) with different meanings, and the fourth line ends in the rhyme syllable -aab. It alternates with mijana refrains.' },
  { q: 'Why is "nafas" (breath) important in mawwal?', opts: ['so the singer can dance', 'so they can stretch syllables in long melismatic phrases', 'so the audience can sing along'], a: 1, exp: 'Nafas (نَفَس) — literally "breath" — refers to a singer\'s breath capacity, crucial because mawwal phrases are unmetered and can stretch a single syllable across many seconds. A "long nafas" is the mark of a virtuoso mootreb.' },
  { q: 'What is the difference between mawwal and zajal?', opts: ['they\'re the same thing', 'mawwal is solo improvised song; zajal is improvised poetic dueling', 'mawwal is sung; zajal is written'], a: 1, exp: 'Mawwal is a solo, slow, melismatic vocal improvisation on a maqam. Zajal is competitive improvised poetry — usually two poets exchanging rhymed verses in front of an audience, often with sung refrains. They share roots but mawwal is monologue, zajal is dialogue.' },
  { q: 'Which instrument is the classic mawwal accompanist in Bedouin/folk style?', opts: ['oud', 'rabaaba', 'qanun'], a: 1, exp: 'The rabaaba (ربابة) — a single-string bowed lute with a square frame — is the classic accompaniment for Bedouin and folk-style mawwals (shrouqi). In urban mawwal, the oud or full takht ensemble takes over.' },
  { q: 'Who is associated with the most famous Lebanese mawwals?', opts: ['Wadih el-Safi', 'Fairuz', 'Marcel Khalife'], a: 0, exp: 'Wadih el-Safi (1921-2013) is the undisputed king of Lebanese mawwal — his nasal tenor, mountain dialect, and ability to hold a note for 30+ seconds defined the genre. Sabah and Nasri Shamseddine also recorded famous mawwals.' }
];

const MWL_TIPS = [
  'Listen for the moment a mootreb "goes up to the jawaab" (high register) — it\'s usually the emotional climax of the mawwal. Audiences traditionally respond with "Allah!", "ya 3eini!", or applause to feed the tarab loop. The singer reads this and may push higher or repeat the phrase with variation.',
  'A typical Lebanese song structure: (1) instrumental taqsim/intro, (2) mawwal — slow, free, melismatic, (3) the metered song proper with verses and refrains. The mawwal can be a few minutes — Wadih el-Safi famously did 10-minute mawwals before launching into the actual song.',
  'Mawwal text often comes from 3atabba (4-line folk poem with jinas/punning) or qaseede (formal classical poem). The same mawwal text ("ya leil ya 3ein...") can be reset by different singers in different maqams — it\'s a vehicle, not a fixed composition.',
  'Bedouin shrouqi mawwal is high-pitched, nasal, and uses the rabaaba — heard at south Lebanon weddings and in Palestinian/Jordanian repertoire. Mountain Lebanese mawwal (Wadih, Nasri) uses the oud and full takht and tends toward Bayati/Sigah maqams. The two styles are immediately recognizable.',
  'Mawwal is dying — most contemporary Arab pop songs skip it entirely. Old wedding singers and zajal masters keep it alive in Lebanese village settings. If you visit a North Lebanese mountain wedding (Bsharri, Akkar, Ehden), you may still hear a 5-minute live mawwal before the dabke starts.'
];
