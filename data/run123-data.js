// Run #123 — Emphatic Consonants minimal-pair drill (NEW FEATURE)
// Arabic has 4 "emphatic" consonants (ص ض ط ظ) that contrast with their
// non-emphatic counterparts (س د ت ذ). The distinction is phonemic:
// changing one for the other produces a different word. English speakers
// struggle with this because there's no equivalent distinction — both
// emphatic and non-emphatic map to the same English phoneme.
// In the app's transliteration scheme, emphatics are marked with
// uppercase letters: S=ص, D=ض, T=ط, DH=ظ.
// Drill: user sees Lebanese transliteration + English gloss, picks the
// correct Arabic word from two options differing only in the emphatic.

const EMP_PAIRS_INFO = [
  { group:'s', plain:'س', emphatic:'ص', plainTr:'s', emphaticTr:'S',
    desc:'ص is pronounced with the tongue pulled back and the back of the tongue raised. Sounds "heavier" and lowers the pitch of adjacent vowels.' },
  { group:'d', plain:'د', emphatic:'ض', plainTr:'d', emphaticTr:'D',
    desc:'ض is pronounced with the tongue pressed against the upper teeth with more contact than د. Lebanese merges ض with ظ in some contexts — listen carefully.' },
  { group:'t', plain:'ت', emphatic:'ط', plainTr:'t', emphaticTr:'T',
    desc:'ط is produced with the tongue pulled back and a "hollow" mouth shape. Compare "tin" (ت) vs. "Tin" (ط) — the vowel sounds darker after ط.' },
  { group:'dh', plain:'ذ', emphatic:'ظ', plainTr:'dh', emphaticTr:'DH',
    desc:'ظ is the emphatic counterpart of ذ. In Lebanese, both ذ and ظ often merge toward د / ض — but the classical distinction remains in careful speech and in writing.' }
];

const EMP_ITEMS = [
  // ===== س / ص =====
  { id:'e1', group:'s', ar:'صار', tr:'Sar', en:'became / happened',
    pair:'سار', pairTr:'sar', pairEn:'walked / went',
    note:'"Sar" (صار) is one of the most-used verbs in Lebanese — "Sar 3andi" = "I have now." Don\'t confuse with "sar" (سار) "walked," which is more formal/poetic.' },
  { id:'e2', group:'s', ar:'صيف', tr:'Sef', en:'summer',
    pair:'سيف', pairTr:'sef', pairEn:'sword',
    note:'"Sef" (صيف) = summer, common seasonal word. "sef" (سيف) = sword, mostly literary.' },
  { id:'e3', group:'s', ar:'صوت', tr:'Sot', en:'voice / sound',
    pair:'سوت', pairTr:'sot', pairEn:'(not a word — distractor)',
    note:'"Sot" (صوت) is the common word for voice. The plain-س version doesn\'t make a standard word, which is why the emphatic matters here.' },
  { id:'e4', group:'s', ar:'صبح', tr:'Sob7', en:'morning',
    pair:'سبح', pairTr:'sabba7', pairEn:'swam / praised',
    note:'"el-Sob7" (الصبح) = the morning. "sabba7" (سبّح) = praised (God). Same root feel, different words via the emphatic.' },
  { id:'e5', group:'s', ar:'صعب', tr:'Sa3b', en:'difficult',
    pair:'سعب', pairTr:'sa3b', pairEn:'(not a word — distractor)',
    note:'"Sa3b" = difficult — the everyday word. The non-emphatic form would not exist in standard Lebanese.' },

  // ===== د / ض =====
  { id:'e6', group:'d', ar:'ضرب', tr:'Darab', en:'hit / struck',
    pair:'درب', pairTr:'darrab', pairEn:'trained',
    note:'"Darab" (ضرب) = hit. "darrab" (درّب) = trained. The emphatic ض often carries more "physical contact" semantics.' },
  { id:'e7', group:'d', ar:'ضيف', tr:'Def', en:'guest',
    pair:'ديف', pairTr:'def', pairEn:'(not a word — distractor)',
    note:'"Def" (ضيف) = guest, central to Lebanese hospitality culture.' },
  { id:'e8', group:'d', ar:'ضو', tr:'Daw', en:'light',
    pair:'دو', pairTr:'daw', pairEn:'(not a word — distractor)',
    note:'"Daw" (ضو) = light. "el-Daw" = the light (as in "turn on the light"). Non-emphatic form isn\'t a standard Lebanese word.' },
  { id:'e9', group:'d', ar:'ضحك', tr:'De7ek', en:'laughed',
    pair:'دحك', pairTr:'da7ak', pairEn:'(not standard)',
    note:'"De7ek" (ضحك) = laughed. A root verb that\'s everywhere — "3am yiD7ak" = "he is laughing."' },
  { id:'e10', group:'d', ar:'ضهر', tr:'Dahar', en:'appeared / back (noun)',
    pair:'دهر', pairTr:'dahr', pairEn:'era / long time (literary)',
    note:'"Dahar" (ضهر) = to appear, or as a noun "the back." "dahr" (دهر) = era, mostly literary.' },

  // ===== ت / ط =====
  { id:'e11', group:'t', ar:'طب', tr:'Tabb', en:'medicine (also: "ok then")',
    pair:'تب', pairTr:'tabb', pairEn:'(not a word — distractor)',
    note:'"Tab" (طب) = medicine (the field). Also "Tab/Tayyeb" as interjection = "ok then." ت version isn\'t a Lebanese word.' },
  { id:'e12', group:'t', ar:'طريق', tr:'Taree2', en:'road / way',
    pair:'تريق', pairTr:'tarree2', pairEn:'(not a standard word)',
    note:'"Taree2" (طريق) = road. "3a-Taree2" = on the way. Extremely common directional word.' },
  { id:'e13', group:'t', ar:'طاولة', tr:'Tawle', en:'table',
    pair:'تاولة', pairTr:'tawle', pairEn:'(not a word — distractor)',
    note:'"Tawle" (طاولة) = table. Furniture vocabulary.' },
  { id:'e14', group:'t', ar:'طلع', tr:'Tele3', en:'went out / came up',
    pair:'تلع', pairTr:'tala3', pairEn:'(not standard)',
    note:'"Tele3" (طلع) = to go out / come up. Very high-frequency verb: "Tele3 min el-bet" = "he left the house."' },
  { id:'e15', group:'t', ar:'طيارة', tr:'Tyyara', en:'airplane',
    pair:'تيارة', pairTr:'tayyara', pairEn:'(not a word — distractor)',
    note:'"Tyyara" (طيارة) = airplane. Note the "T" keeping the darkened/retracted quality through the whole word.' },

  // ===== ذ / ظ =====
  { id:'e16', group:'dh', ar:'ظل', tr:'Dall', en:'stayed / remained',
    pair:'ذل', pairTr:'dhall', pairEn:'humiliated (literary)',
    note:'"Dall" (ظل) in Lebanese = stayed/remained. "Dhall" (ذل) is literary = humiliated. Lebanese often collapses ظ → D in casual speech.' },
  { id:'e17', group:'dh', ar:'ظهر', tr:'Dahar', en:'appeared',
    pair:'ذهر', pairTr:'dhahar', pairEn:'(not standard)',
    note:'"Dahar" (ظهر) in classical Arabic. Lebanese speakers often pronounce the same way as "Dahar" (ضهر) from item e10 — the two spellings are sometimes interchangeable in casual writing.' },
  { id:'e18', group:'dh', ar:'ظرف', tr:'Darf', en:'envelope / circumstance',
    pair:'ذرف', pairTr:'dharaf', pairEn:'(literary: shed tears)',
    note:'"Darf" (ظرف) = envelope or circumstance. Both senses common. Pairs with "Taree2" in set phrases like "Darf 3am" = "general circumstance."' },
  { id:'e19', group:'dh', ar:'ظلم', tr:'Dulum', en:'injustice / darkness',
    pair:'ذلم', pairTr:'dhalam', pairEn:'(not standard)',
    note:'"Dulum/Dulm" (ظلم) = injustice. Also "el-Dalam" = the darkness. Key emotional/moral word.' },
  { id:'e20', group:'dh', ar:'ظن', tr:'Dann', en:'thought / believed',
    pair:'ذن', pairTr:'dhann', pairEn:'(not standard)',
    note:'"Dann" (ظن) = thought, assumed, believed. "kinet Dann enno..." = "I thought that..."' }
];

const EMP_TIPS = [
  'Emphatics (ص ض ط ظ) are pronounced with the tongue retracted and the back of the tongue raised toward the soft palate. This "darkens" the sound and lowers the pitch of adjacent vowels.',
  'The adjacent-vowel darkening is often a better cue than the consonant itself — "Tab" vs "tab" — the "a" sounds more like "uh" in the emphatic version.',
  'English speakers tend to substitute ط with ت and ص with س. Native listeners hear the substitution immediately. Drilling minimal pairs trains the ear.',
  'Lebanese has a partial merger: ظ (classical) often surfaces as ض or even د in casual speech. "Dall" for "stayed" can be written ظلّ or ضلّ.',
  'In the app\'s transliteration scheme, uppercase = emphatic: S=ص, D=ض, T=ط, DH=ظ. Lowercase = non-emphatic: s=س, d=د, t=ت, dh=ذ. Always check capitalization in Lebanese Latin script.',
  'Memorize high-frequency emphatic words as units: Sar, Sef, Sot, Darab, Def, Daw, Tele3, Taree2, Tawle, Dann. Recognition in context is the fastest path to fluency.',
  'Emphatics spread: in Lebanese, the emphatic quality often affects the whole word or syllable, not just the one consonant. So "Taree2" has a darkened "a" and "ee" throughout.',
  'Writing tip: the hamza shape ٔ is tall and the ص has a loop — the most reliable visual cue to distinguish ص from س is the rounded "tooth" vs. the three jagged teeth.'
];

const EMP_CATS = [
  { id:'s',  label:'س/ص (s/S)' },
  { id:'d',  label:'د/ض (d/D)' },
  { id:'t',  label:'ت/ط (t/T)' },
  { id:'dh', label:'ذ/ظ (dh/DH)' }
];
