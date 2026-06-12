// Run #102 — Time Expressions Coach (TEC)
// Lebanese time formulas that don't translate word-for-word from MSA or English:
// - Clock time: "es-sē3a tlēte w nuSS" (3:30 = the-hour three and half)
// - Days: native Lebanese names with the nHar- prefix
// - Relative past: "men yōmēn" (two days ago), "men ishi zamēn" (ages ago)
// - Relative future: "ba3d 3 ēyyām" (in 3 days), "bokra" (tomorrow)
// - Duration: "Sarli sē3a" (I've been X-ing for an hour)
// - Frequency: "kel yōm", "marra bi-l-jem3a"
//
// The hard part for MSA-trained learners: Lebanese uses (a) different numeral-
// gender agreement, (b) native time particles like ba3d/men instead of fi/ba3da,
// (c) the Sarli / Sarle possessive construction for "been doing for X", and
// (d) frequency adverbs formed with kel / bi / marra patterns.

const TEC_CATS = [
  { id:'clock',    label:'🕐 Clock time',       desc:'telling the hour' },
  { id:'days',     label:'📅 Days / today/tomorrow', desc:'calendar anchors' },
  { id:'past',     label:'⏪ Relative past',     desc:'X ago' },
  { id:'future',   label:'⏩ Relative future',   desc:'in X' },
  { id:'duration', label:'⏳ Duration',          desc:'been X-ing for' },
  { id:'freq',     label:'🔁 Frequency',         desc:'every / once per' }
];

// Each item: {id, ar, tr, en, cat, note, example, example_tr, example_en}.
const TEC_ITEMS = [
  // ── clock ──────────────────────────────────────────────────────────────
  { id:'te1', cat:'clock',
    ar:'الساعة كم؟',                tr:'es-sē3a kam?',               en:"What time is it?",
    note:"Literally 'the-hour how-many'. 'kam' expects a numeral answer; MSA would use 'kam es-sā3a' or 'ayy sā3a' — Lebanese inverts.",
    example:'الساعة كم هلق؟',        example_tr:'es-sē3a kam halla2?', example_en:"What time is it right now?" },
  { id:'te2', cat:'clock',
    ar:'الساعة تلاتة ونص',           tr:'es-sē3a tlēte w nuSS',       en:'3:30 (three and a half)',
    note:"Hour + 'w' (and) + fraction. nuSS=1/2, rob3=1/4, tlett=1/3. Minutes over 30 subtract: 'arb3a illa rob3' (4 minus quarter = 3:45).",
    example:'نلتقي الساعة تلاتة ونص', example_tr:'nelta2i es-sē3a tlēte w nuSS', example_en:"Let's meet at 3:30" },
  { id:'te3', cat:'clock',
    ar:'الساعة ربع',                tr:'es-sē3a rob3',               en:"(o'clock) quarter past",
    note:"Short form when hour is implied. Full: 'es-sē3a sitte w rob3' (6:15). 'rob3' = quarter = 15 min.",
    example:'بيوصل الساعة سبعة إلا ربع', example_tr:'byuSal es-sē3a seb3a illa rob3', example_en:"He arrives at 6:45 (seven minus quarter)" },
  { id:'te4', cat:'clock',
    ar:'الصبح / بعد الضهر / بالليل', tr:'eS-Sobo7 / ba3d eD-Dhor / bel-layl', en:'morning / afternoon / at night',
    note:"AM/PM not used — qualifier follows the time. 'es-sē3a sitte eS-Sobo7' = 6 AM. 'ba3d eD-Dhor' = afternoon (literally 'after the noon').",
    example:'الساعة تسعة الصبح',      example_tr:'es-sē3a tes3a eS-Sobo7', example_en:'9 in the morning' },
  { id:'te5', cat:'clock',
    ar:'نص الليل',                  tr:'nuSS el-layl',               en:'midnight',
    note:"'nuSS el-layl' = half of the night. Counterpart 'D-Dhor' = noon. '3ala nuSS el-layl' = at midnight.",
    example:'وصلنا على نص الليل',     example_tr:'weSelna 3ala nuSS el-layl', example_en:'We arrived at midnight' },
  // ── days ───────────────────────────────────────────────────────────────
  { id:'te6', cat:'days',
    ar:'اليوم',                     tr:'el-yōm',                     en:'today',
    note:"'el-yōm' = 'the-day' = today (context-dependent). MSA 'al-yawm' — same root, Lebanese pronunciation.",
    example:'اليوم بالبيت',          example_tr:'el-yōm bel-bayt',    example_en:"I'm home today" },
  { id:'te7', cat:'days',
    ar:'بكرا',                      tr:'bokra',                      en:'tomorrow',
    note:"Lebanese 'bokra' (MSA 'ghadan'). 'ba3d bokra' = day after tomorrow.",
    example:'بكرا بتشوفو',           example_tr:'bokra btshufo',      example_en:"You'll see him tomorrow" },
  { id:'te8', cat:'days',
    ar:'مبارح',                     tr:'mbēre7',                     en:'yesterday',
    note:"Lebanese 'mbēre7' (MSA 'ams'). 'awwal mbēre7' = day before yesterday (literally 'first of yesterday').",
    example:'شفتو مبارح',            example_tr:'sheftu mbēre7',      example_en:'I saw him yesterday' },
  { id:'te9', cat:'days',
    ar:'نهار التنين',               tr:'nhār et-tnēn',               en:'Monday',
    note:"'nhār' = day (the headword; literally 'daytime'). Days: tnēn=Mon, tlētē=Tue, arb3a=Wed, kh(m)ēs=Thu, jem3a=Fri, sabet=Sat, a7ad=Sun.",
    example:'بشوفك نهار التنين',     example_tr:'bshufak nhār et-tnēn', example_en:"I'll see you Monday" },
  { id:'te10', cat:'days',
    ar:'نهار الجمعة',               tr:'nhār el-jem3a',              en:'Friday',
    note:"'jem3a' also = week. 'bi-l-jem3a' can mean 'per week' or 'on Friday' depending on context; time context disambiguates.",
    example:'نهار الجمعة العطلة',    example_tr:'nhār el-jem3a el-3oTle', example_en:"Friday is the holiday" },
  // ── past ───────────────────────────────────────────────────────────────
  { id:'te11', cat:'past',
    ar:'من يومين',                  tr:'men yōmēn',                  en:'two days ago',
    note:"'men' = from/since. Dual suffix '-ēn' on yōm = two days. 'men tlatt ēyyām' = 3 days ago (plural form).",
    example:'شفتو من يومين',         example_tr:'sheftu men yōmēn',   example_en:'I saw him two days ago' },
  { id:'te12', cat:'past',
    ar:'من ساعة',                   tr:'men sē3a',                   en:'an hour ago',
    note:"'men' + bare singular = 'a [duration] ago'. 'men dqī2a' = a minute ago. 'men sene' = a year ago.",
    example:'وصل من ساعة',           example_tr:'weSel men sē3a',     example_en:'He arrived an hour ago' },
  { id:'te13', cat:'past',
    ar:'من شي زمن',                 tr:'men shī zamēn',              en:'a while ago / ages ago',
    note:"'shī' (some) + 'zamēn' (time) = vague distant past. Interchangeable with 'men zamēn'. Contrast 'men ishi' (of thing) with similar feel.",
    example:'ما شفتو من شي زمن',     example_tr:'ma sheftu men shī zamēn', example_en:"I haven't seen him in ages" },
  { id:'te14', cat:'past',
    ar:'الأسبوع الماضي',            tr:'el-isbū3 el-mēDi',           en:'last week',
    note:"'mēDi' (past) postmodifies noun. Also 'el-isbū3 elli rā7' (the week that went). 'ha l-isbū3' = this week.",
    example:'سافرت الأسبوع الماضي',  example_tr:'sēfart el-isbū3 el-mēDi', example_en:'I traveled last week' },
  // ── future ─────────────────────────────────────────────────────────────
  { id:'te15', cat:'future',
    ar:'بعد ساعة',                  tr:'ba3d sē3a',                  en:'in an hour',
    note:"'ba3d' = after. Bare singular = 'in a [duration]'. 'ba3d tlett ēyyām' = in 3 days. MSA 'ba3da sā3atin' — Lebanese drops the tanween.",
    example:'بيوصلوا بعد ساعة',      example_tr:'byuSalu ba3d sē3a',  example_en:"They'll arrive in an hour" },
  { id:'te16', cat:'future',
    ar:'بعد شوي',                   tr:'ba3d shway',                 en:'in a bit / soon',
    note:"'shway' = a little. Vague near-future. 'ba3d kamēn shway' = in just a little more. Common softener when committing to timing.",
    example:'بلحقك بعد شوي',         example_tr:'ble7a2ak ba3d shway', example_en:"I'll catch up to you in a bit" },
  { id:'te17', cat:'future',
    ar:'الأسبوع الجاي',             tr:'el-isbū3 el-jēyy',           en:'next week',
    note:"'jēyy' (coming) postmodifies noun. Also 'elli jēyy' (the one that's coming). 'esh-shahr el-jēyy' = next month.",
    example:'منلتقي الأسبوع الجاي',  example_tr:'men-elta2i el-isbū3 el-jēyy', example_en:"We'll meet next week" },
  { id:'te18', cat:'future',
    ar:'بعدين',                     tr:'ba3dēn',                     en:'later / afterward',
    note:"'ba3dēn' = later (unspecified). Common closing: 'mnshūfak ba3dēn' = 'see you later'. Not 'in-a-moment' — feels vaguer than ba3d shway.",
    example:'منحكي بعدين',           example_tr:'men7ki ba3dēn',      example_en:"We'll talk later" },
  // ── duration ───────────────────────────────────────────────────────────
  { id:'te19', cat:'duration',
    ar:'صرلي ساعة',                 tr:'Sarli sē3a',                 en:"I've been here for an hour",
    note:"'Sar-li' = became to-me = 'it has become [time] for me'. Possessive suffix agrees with speaker: Sarlak/Sarlek/Sarlo/Sarla. Covers English present-perfect-continuous.",
    example:'صرلي ساعة عم إنتظر',    example_tr:'Sarli sē3a 3am inteZer', example_en:"I've been waiting for an hour" },
  { id:'te20', cat:'duration',
    ar:'صرلو يومين',                tr:'Sarlo yōmēn',                en:"it's been two days for him",
    note:"Third-person masculine: Sarlo. Feminine: Sarla. Always paired with a noun of duration + optional '3am <verb>'.",
    example:'صرلو يومين مسافر',      example_tr:'Sarlo yōmēn msēfer',  example_en:"He's been traveling for two days" },
  { id:'te21', cat:'duration',
    ar:'طول النهار',                tr:'Tūl en-nhār',                en:'all day long',
    note:"'Tūl' = length. 'Tūl el-layl' = all night. 'Tūl el-wa2t' = all the time.",
    example:'شغلنا طول النهار',      example_tr:'shaghelna Tūl en-nhār', example_en:'We worked all day' },
  { id:'te22', cat:'duration',
    ar:'لحد هلق',                   tr:'la-7add halla2',             en:'until now / up to now',
    note:"'la-7add' = up-to-the-limit. 'la-7add bokra' = until tomorrow. 'men hōnīk la-hōn' (time version): 'men wa2ta la-hal-wa2et' = from then till now.",
    example:'لحد هلق ما وصلو',       example_tr:'la-7add halla2 ma weSlu', example_en:"Up to now they haven't arrived" },
  // ── frequency ──────────────────────────────────────────────────────────
  { id:'te23', cat:'freq',
    ar:'كل يوم',                    tr:'kel yōm',                    en:'every day',
    note:"'kel' = every. 'kel sē3a' = every hour. 'kel sene' = every year. Never takes 'el-' prefix on the noun.",
    example:'بشرب قهوة كل يوم',      example_tr:'bishrab ahwe kel yōm', example_en:'I drink coffee every day' },
  { id:'te24', cat:'freq',
    ar:'مرة بالأسبوع',              tr:'marra bi-l-isbū3',           en:'once a week',
    note:"'marra' = one time. 'marratēn' = twice. 'bi-' = per. 'tlett marrāt bi-s-sene' = 3 times a year.",
    example:'بروح عالجيم مرة بالأسبوع', example_tr:'brū7 3al-gym marra bi-l-isbū3', example_en:'I go to the gym once a week' },
  { id:'te25', cat:'freq',
    ar:'كل شوي',                    tr:'kel shwayy',                 en:'every little while / constantly',
    note:"'kel shwayy' literally 'every little while'. Colloquially = constantly, every few minutes. Feels more casual than 'dāyman' (MSA 'always').",
    example:'كل شوي عم يحكي معو',    example_tr:'kel shwayy 3am ye7ki ma3o', example_en:"He's constantly talking to him" },
  { id:'te26', cat:'freq',
    ar:'أحيانا',                    tr:'a7yēnan',                    en:'sometimes',
    note:"MSA loan, common in Lebanese. Alternatives: 'marra marra' (once-once = sometimes), 'ba3D el-a7yēn' (some of the times).",
    example:'أحيانا بنسا',           example_tr:'a7yēnan binsa',       example_en:'Sometimes I forget' },
  { id:'te27', cat:'freq',
    ar:'ولا مرة',                   tr:'wala marra',                 en:'never / not even once',
    note:"'wala' = not a / not even. Takes a singular noun. 'wala shī' = nothing. 'wala 7ada' = nobody. Must pair with negation on verb: 'ma shefto wala marra'.",
    example:'ما شفتو ولا مرة',       example_tr:'ma shefto wala marra', example_en:"I've never seen him" }
];

// Exercises: English prompt → pick the Lebanese expression.
// Distractors = 3 other items from the same category (so the gate is
// form-matching inside a semantic field, not category guessing).
const TEC_EXERCISES = [
  { id:'tx1',  itemId:'te1',  prompt:"Ask 'what time is it?' in Lebanese" },
  { id:'tx2',  itemId:'te2',  prompt:"How do you say '3:30'?" },
  { id:'tx3',  itemId:'te3',  prompt:"Short form for 'quarter past (the hour)'?" },
  { id:'tx4',  itemId:'te5',  prompt:"How do you say 'midnight'?" },
  { id:'tx5',  itemId:'te7',  prompt:"The word for 'tomorrow' in Lebanese?" },
  { id:'tx6',  itemId:'te8',  prompt:"The word for 'yesterday' in Lebanese?" },
  { id:'tx7',  itemId:'te9',  prompt:"How do you say 'Monday' (day + name)?" },
  { id:'tx8',  itemId:'te10', prompt:"How do you say 'Friday' (day + name)?" },
  { id:'tx9',  itemId:'te11', prompt:"Express 'two days ago' in Lebanese" },
  { id:'tx10', itemId:'te12', prompt:"Express 'an hour ago'" },
  { id:'tx11', itemId:'te14', prompt:"Express 'last week'" },
  { id:'tx12', itemId:'te13', prompt:"Express 'a while ago / ages ago'" },
  { id:'tx13', itemId:'te15', prompt:"Express 'in an hour' (future)" },
  { id:'tx14', itemId:'te16', prompt:"Express 'in a bit / soon'" },
  { id:'tx15', itemId:'te17', prompt:"Express 'next week'" },
  { id:'tx16', itemId:'te18', prompt:"Express 'later / afterward'" },
  { id:'tx17', itemId:'te19', prompt:"Express 'I've been [here] for an hour' using the Sar-li pattern" },
  { id:'tx18', itemId:'te21', prompt:"Express 'all day long'" },
  { id:'tx19', itemId:'te23', prompt:"Express 'every day'" },
  { id:'tx20', itemId:'te24', prompt:"Express 'once a week'" },
  { id:'tx21', itemId:'te27', prompt:"Express 'never / not even once'" }
];

const TEC_TIPS = [
  "Clock: hour + 'w' + fraction (nuSS=½, rob3=¼). Over 30 uses 'illa' (minus): 'arb3a illa rob3' = 3:45.",
  "AM/PM: use 'eS-Sobo7' (morning), 'ba3d eD-Dhor' (afternoon), 'bel-3ashīye' (evening), 'bel-layl' (night) after the time, not before.",
  "Past: 'men' + singular = 'a [X] ago' (men sē3a); 'men' + dual = 'two [X] ago' (men yōmēn); 'men' + number + plural = more (men tlatt ēyyām).",
  "Future: 'ba3d' + duration mirrors the past pattern. 'ba3d bokra' = day after tomorrow. 'ba3dēn' is vaguer than 'ba3d shway'.",
  "Duration been-doing: use 'Sar-' + pronoun suffix + duration (Sarli / Sarlak / Sarlek / Sarlo / Sarla / Sarelna / Sarelkon / Sarelhon), then optionally '3am + verb'.",
  "Frequency: 'kel' for every (kel yōm), 'marra bi-' for once-per (marra bi-l-isbū3). Numerals change: 'tlett marrāt bi-s-sene' = 3 times a year.",
  "Never: 'wala marra' must pair with a negated verb: 'ma shefto wala marra' (I never saw him). Solo 'wala marra' is ungrammatical."
];
