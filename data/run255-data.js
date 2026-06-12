// Run #255 — Lebanese Health & Medical Coach (hlt)
// Doctor visits, pharmacy, symptoms, body pain, emergencies — 40 items, MCQ drill, 5 tips

const HLT_WORDS = [
  // symptoms
  { tr: 'mriid',          ar: 'مريض',          en: 'sick / ill',                    cat: 'symptoms' },
  { tr: 'waja3',          ar: 'وجع',            en: 'pain / ache',                   cat: 'symptoms' },
  { tr: '7ammeh',         ar: 'حمى',            en: 'fever',                         cat: 'symptoms' },
  { tr: 'zukaam',         ar: 'زكام',           en: 'cold / runny nose',             cat: 'symptoms' },
  { tr: 'su3aal',         ar: 'سعال',           en: 'cough',                         cat: 'symptoms' },
  { tr: 'ra2beh btou3a',  ar: 'راسي بيوجعني',  en: 'I have a headache (head hurts)', cat: 'symptoms' },
  { tr: 'is7aal',         ar: 'إسهال',          en: 'diarrhea',                      cat: 'symptoms' },
  { tr: '2ayyeh',         ar: 'قيء',            en: 'vomiting',                      cat: 'symptoms' },
  // body parts (medical)
  { tr: 'ras',            ar: 'راس',            en: 'head',                          cat: 'body' },
  { tr: 'baTen',          ar: 'بطن',            en: 'stomach / abdomen',             cat: 'body' },
  { tr: 'Daher',          ar: 'ضهر',            en: 'back',                          cat: 'body' },
  { tr: '2alb',           ar: 'قلب',            en: 'heart',                         cat: 'body' },
  { tr: 'rije',           ar: 'رجلة',           en: 'leg / foot',                    cat: 'body' },
  { tr: '2eed',           ar: 'إيد',            en: 'hand / arm',                    cat: 'body' },
  { tr: '3ein',           ar: 'عين',            en: 'eye',                           cat: 'body' },
  { tr: 'wijen',          ar: 'وجن',            en: 'cheek (also face area)',         cat: 'body' },
  // medical people & places
  { tr: 'Tabiib',         ar: 'طبيب',           en: 'doctor',                        cat: 'places' },
  { tr: 'mumarriDa',      ar: 'ممرضة',          en: 'nurse (f)',                     cat: 'places' },
  { tr: 'Saydaliyye',     ar: 'صيدلية',         en: 'pharmacy',                      cat: 'places' },
  { tr: 'mustaShfa',      ar: 'مستشفى',         en: 'hospital',                      cat: 'places' },
  { tr: '3iyaade',        ar: 'عيادة',          en: 'clinic / doctor\'s office',     cat: 'places' },
  { tr: '2is3aaf',        ar: 'إسعاف',          en: 'ambulance / first aid',         cat: 'places' },
  { tr: 'Saydalaani',     ar: 'صيدلاني',        en: 'pharmacist',                    cat: 'places' },
  { tr: 'Tawwaaree2',     ar: 'طوارئ',          en: 'emergency room',                cat: 'places' },
  // medicine & treatment
  { tr: 'dawa',           ar: 'دواء',           en: 'medicine / medication',         cat: 'medicine' },
  { tr: 'Hubbe',          ar: 'حبة',            en: 'pill / tablet',                 cat: 'medicine' },
  { tr: 'wasfe',          ar: 'وصفة',           en: 'prescription',                  cat: 'medicine' },
  { tr: '7a2ne',          ar: 'حقنة',           en: 'injection / shot',              cat: 'medicine' },
  { tr: '7araare',        ar: 'حرارة',          en: 'temperature',                   cat: 'medicine' },
  { tr: 'laSeq',          ar: 'لاصق',           en: 'bandage / plaster',             cat: 'medicine' },
  // key phrases
  { tr: 'wein btou3ak?',  ar: 'وين بتوجعك؟',   en: 'where does it hurt?',           cat: 'phrases' },
  { tr: 'min emta?',      ar: 'من إمتى؟',       en: 'since when?',                   cat: 'phrases' },
  { tr: '3indi maw3ad',   ar: 'عندي موعد',      en: 'I have an appointment',         cat: 'phrases' },
  { tr: '7asaasiiyye',    ar: 'حساسية',         en: 'allergy',                       cat: 'phrases' },
  { tr: 'ma bnaam',       ar: 'ما بنام',        en: 'I can\'t sleep',                cat: 'phrases' },
  { tr: 'ta3baan',        ar: 'تعبان',          en: 'tired / exhausted / unwell',    cat: 'phrases' },
  { tr: 'khud raa7tak',   ar: 'خود راحتك',      en: 'take it easy / rest',           cat: 'phrases' },
  { tr: 'Bis7a!',         ar: 'بصحة!',          en: 'to your health! (blessing)',    cat: 'phrases' },
  { tr: '2allah yshafik', ar: 'الله يشفيك',     en: 'God heal you (said to sick)',   cat: 'phrases' },
  { tr: 'maa shar',       ar: 'ما شر',          en: 'nothing serious / you\'re fine', cat: 'phrases' },
];

const HLT_DRILLS = [
  {
    q: 'How do you say "fever" in Lebanese Arabic?',
    opts: ['zukaam', '7ammeh', 'su3aal', 'waja3'],
    correct: 1,
    note: '"7ammeh" = fever (from حمى); "zukaam" = cold/runny nose; "su3aal" = cough; "waja3" = pain/ache'
  },
  {
    q: 'What does "Saydaliyye" mean?',
    opts: ['hospital', 'clinic', 'pharmacy', 'ambulance'],
    correct: 2,
    note: '"Saydaliyye" = pharmacy (where you buy medicine); "mustaShfa" = hospital; "3iyaade" = clinic; "2is3aaf" = ambulance'
  },
  {
    q: 'How do you say "where does it hurt?" in Lebanese Arabic?',
    opts: ['min emta?', '3indi maw3ad', 'wein btou3ak?', 'ma bnaam'],
    correct: 2,
    note: '"wein btou3ak?" = where does it hurt? (lit: where hurts you?); "min emta?" = since when?; "3indi maw3ad" = I have an appointment; "ma bnaam" = I can\'t sleep'
  },
  {
    q: 'What does "ta3baan" mean?',
    opts: ['sick', 'tired / exhausted / unwell', 'allergic', 'dizzy'],
    correct: 1,
    note: '"ta3baan" = tired/exhausted/unwell — very versatile word, covers both physical and emotional states; "mriid" = sick; "7asaasiiyye" = allergy'
  },
  {
    q: 'How do you say "injection / shot" in Lebanese Arabic?',
    opts: ['dawa', 'Hubbe', '7a2ne', 'wasfe'],
    correct: 2,
    note: '"7a2ne" = injection/shot; "dawa" = medicine; "Hubbe" = pill/tablet; "wasfe" = prescription'
  },
  {
    q: 'What does "2allahu yshafik" mean?',
    opts: ['take it easy', 'to your health!', 'God heal you', 'nothing serious'],
    correct: 2,
    note: '"2allahu yshafik" = God heal you (said to sick person, very common greeting); "Bis7a!" = to your health!; "khud raa7tak" = take it easy; "maa shar" = nothing serious'
  },
  {
    q: 'What does "Tawwaaree2" mean?',
    opts: ['clinic', 'pharmacy', 'ambulance', 'emergency room'],
    correct: 3,
    note: '"Tawwaaree2" = emergency room (from طوارئ); "3iyaade" = clinic; "Saydaliyye" = pharmacy; "2is3aaf" = ambulance'
  },
  {
    q: 'How do you say "I have an appointment" in Lebanese Arabic?',
    opts: ['3indi maw3ad', 'ma bnaam', 'min emta?', 'khud raa7tak'],
    correct: 0,
    note: '"3indi maw3ad" = I have an appointment (essential for clinic visits in Lebanon); "ma bnaam" = I can\'t sleep; "min emta?" = since when?; "khud raa7tak" = take it easy'
  },
  {
    q: 'What does "is7aal" mean?',
    opts: ['fever', 'cough', 'vomiting', 'diarrhea'],
    correct: 3,
    note: '"is7aal" = diarrhea; "7ammeh" = fever; "su3aal" = cough; "2ayyeh" = vomiting'
  },
  {
    q: 'How do you say "prescription" in Lebanese Arabic?',
    opts: ['7a2ne', 'dawa', 'wasfe', 'laSeq'],
    correct: 2,
    note: '"wasfe" = prescription (from وصفة, also means recipe — doctor\'s recipe!); "7a2ne" = injection; "dawa" = medicine; "laSeq" = bandage/plaster'
  },
];

const HLT_TIPS = [
  { title: 'Lebanese health blessings — essential phrases', body: 'When someone is sick, Lebanese use "2allahu yshafik" (God heal you — m) or "2allahu yshafiki" (to f). The response is "ykhalliinak" (may God keep you). After someone sneezes: "ya3tiik l3aafye" (may God give you health). Recovering from illness: "Bis7a!" (to your health!). These aren\'t optional niceties — not saying them is noticed. Learn "ta3baan" (unwell/tired) — Lebanese use it constantly for any state of not-feeling-100%.' },
  { title: 'Pharmacies in Lebanon — your first stop', body: 'Lebanese pharmacies (Saydaliyye) are incredibly powerful institutions. Pharmacists prescribe, recommend, and sell many drugs that require prescriptions elsewhere. Walk in, describe symptoms, leave with medicine. Always say "fi Saydaliyye" (at the pharmacy) — there\'s usually one every 200m. Common phrases: "3indi zukaam/su3aal" (I have a cold/cough), "weja3 baTen" (stomach pain), "3aTiini shi la-..." (give me something for...). No appointment needed.' },
  { title: 'Describing pain in Lebanese Arabic', body: 'The verb "waja3" conjugates: "bou3ani" (it hurts me — I), "btou3ak/ek" (it hurts you), "btou3o/a" (it hurts him/her). Body + "byou3a3ni" = I have [body part] pain: "rasi byou3a3ni" (I have a headache), "batni byou3a3ni" (I have a stomachache), "Dahri byou3a3ni" (my back hurts). Intensity: "ktir" (a lot), "shwayy" (a little), "mniH" = fine. "waja3 ktir" = a lot of pain.' },
  { title: 'Lebanese hospital system — what to know', body: 'Lebanon has top-quality private hospitals but they\'re expensive. Always ask: "fi taamiin?" (is there insurance coverage?). State hospitals: "mustaShfa 7ukuumi" — cheaper, longer waits. Emergency: call 140 (Lebanese Red Cross) or 112. Key phrases: "baddi shuuf Tabiib" (I want to see a doctor), "3indi maw3ad ma3 el-Tabiib" (I have a doctor appointment), "wein Tawwaaree2 a2rab mustaShfa?" (where\'s the nearest ER?). "2is3aaf" (ambulance) is both the vehicle and first aid kit.' },
  { title: '"Ta3baan" — Lebanon\'s most useful health word', body: '"Ta3baan" literally means tired/exhausted but in Lebanon it covers: physically sick, emotionally drained, broken (objects), worn out. "Ana ta3baan ktir" = I\'m really not well. "el-sayyyara ta3baane" = the car is broken down. Doctors hear it constantly — "shu fi?" (what\'s wrong?) → "ta3baan" → follow-up questions. Contrast: "mriid" is specifically sick/ill (medical), while "ta3baan" is the catch-all complaint. "Sar 3anni el-ta3ab" = I got over the tiredness/illness.' },
];

const HLT_ABOUT = 'Master Lebanese Arabic health and medical vocabulary — symptoms, body parts, pharmacies, hospitals, and essential phrases for doctor visits. Critical knowledge for navigating Lebanon\'s healthcare system and expressing health concerns to locals.';
