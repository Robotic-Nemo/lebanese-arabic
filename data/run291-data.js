// Run #291 — Lebanese Body Parts Coach (bod)
// Body parts, face, movement, physical descriptions, body idioms — 40 items, MCQ drill, 5 tips

const BOD_WORDS = [
  // head & face
  { tr: 'raas',           ar: 'راس',            en: 'head',                            cat: 'face' },
  { tr: 'wejj',           ar: 'وجه',            en: 'face',                            cat: 'face' },
  { tr: '3ein',           ar: 'عين',            en: 'eye',                             cat: 'face' },
  { tr: 'zene',           ar: 'أذن',            en: 'ear',                             cat: 'face' },
  { tr: 'fam',            ar: 'فم',             en: 'mouth',                           cat: 'face' },
  { tr: 'snein',          ar: 'سنين',           en: 'teeth',                           cat: 'face' },
  { tr: 'anf',            ar: 'أنف',            en: 'nose',                            cat: 'face' },
  { tr: 'sha3ar',         ar: 'شعر',            en: 'hair',                            cat: 'face' },
  // upper body
  { tr: 'ktef',           ar: 'كتف',            en: 'shoulder',                        cat: 'upper' },
  { tr: 'diira3',         ar: 'ديرع',           en: 'arm',                             cat: 'upper' },
  { tr: 'iid',            ar: 'إيد',            en: 'hand',                            cat: 'upper' },
  { tr: 'Saba3',          ar: 'صبع',            en: 'finger',                          cat: 'upper' },
  { tr: 'Sadr',           ar: 'صدر',            en: 'chest',                           cat: 'upper' },
  { tr: 'Daher',          ar: 'ضهر',            en: 'back',                            cat: 'upper' },
  { tr: 'batun',          ar: 'بطن',            en: 'stomach / belly',                 cat: 'upper' },
  { tr: '3unuu2',         ar: 'عنق',            en: 'neck',                            cat: 'upper' },
  // lower body
  { tr: 'rijl',           ar: 'رجل',            en: 'leg / foot',                      cat: 'lower' },
  { tr: 'rukbe',          ar: 'ركبة',           en: 'knee',                            cat: 'lower' },
  { tr: '2adam',          ar: 'قدم',            en: 'foot',                            cat: 'lower' },
  { tr: 'warak',          ar: 'ورك',            en: 'hip',                             cat: 'lower' },
  // body functions & symptoms
  { tr: 'mardaan',        ar: 'مريض',           en: 'sick / ill',                      cat: 'health' },
  { tr: 'waja3',          ar: 'وجع',            en: 'pain / ache',                     cat: 'health' },
  { tr: 'Hamme',          ar: 'حمّى',            en: 'fever',                           cat: 'health' },
  { tr: 'khasiis',        ar: 'خسيس',           en: 'weak / run down',                 cat: 'health' },
  { tr: 'ta3baan',        ar: 'تعبان',          en: 'tired / sick / unwell',           cat: 'health' },
  // body idioms (Lebanese)
  { tr: '3ala 2albo',     ar: 'على قلبه',        en: 'on his heart = he loves it',      cat: 'idioms' },
  { tr: 'bifarri2 rasak', ar: 'بيفرّق راسك',     en: 'splits your head = very loud',    cat: 'idioms' },
  { tr: 'yiksir l-khaaTir', ar: 'يكسر الخاطر',  en: 'breaks the spirit / disappoints', cat: 'idioms' },
  { tr: 'wija3 raas',     ar: 'وجع راس',         en: 'headache = nuisance / problem',   cat: 'idioms' },
  { tr: 'bi-3uyuunak',    ar: 'بعيونك',          en: 'in your eyes = with pleasure',    cat: 'idioms' },
  // movement
  { tr: 'mishi',          ar: 'مشي',            en: 'to walk',                         cat: 'movement' },
  { tr: 'ri2iS',          ar: 'رقص',            en: 'to dance',                        cat: 'movement' },
  { tr: 'wa2af',          ar: 'وقف',            en: 'to stand / stop',                 cat: 'movement' },
  { tr: 'ja3les',         ar: 'جلس',            en: 'to sit',                          cat: 'movement' },
  { tr: 'naam',           ar: 'نام',            en: 'to sleep',                        cat: 'movement' },
  { tr: 'SiHi',          ar: 'صحي',             en: 'to wake up',                      cat: 'movement' },
  { tr: '2aam',           ar: 'قام',            en: 'to get up / rise',                cat: 'movement' },
  { tr: '7aka',           ar: 'حكى',            en: 'to speak / talk',                 cat: 'movement' },
  { tr: 'Hass',           ar: 'حس',             en: 'to feel / sense',                 cat: 'movement' },
  { tr: 'shaal',          ar: 'شال',            en: 'to carry / lift',                 cat: 'movement' },
];

const BOD_DRILLS = [
  {
    q: 'How do you say "hand" in Lebanese Arabic?',
    opts: ['rijl', 'ktef', 'iid', 'Saba3'],
    correct: 2,
    note: '"iid" = hand (إيد — Lebanese dialect; MSA: "yad"). Plural: "2iid" or "ideik" (your two hands). Lebanese expressions: "tislam ideik" (bless your hands — said after someone does something nice/makes food). "iid bi-iid" = hand in hand. "3ala iido" = on his hand = he\'s responsible for it. The hand is central to Lebanese gesture culture — Lebanese are expressive communicators.'
  },
  {
    q: 'What does "ta3baan" mean?',
    opts: ['hungry', 'happy', 'tired / sick / unwell', 'angry'],
    correct: 2,
    note: '"ta3baan" = tired / sick / unwell (تعبان — from تعب = fatigue/hardship). One of the most versatile Lebanese words. "Ana ta3baan" = I\'m tired/not well. Female: "ta3baane". Used for physical tiredness, illness, emotional exhaustion. "Ta3baan min l-shughel" = tired from work. "Ta3baan b-qalbo" = heartbroken. "L-beled ta3baan" = the country is struggling. One word covers physical, emotional, and societal exhaustion.'
  },
  {
    q: 'How do you say "pain / ache" in Lebanese Arabic?',
    opts: ['Hamme', 'waja3', 'mardaan', 'ta3baan'],
    correct: 1,
    note: '"waja3" = pain/ache (وجع). "3andi waja3 bi-[body part]" = I have pain in [part]. "waja3 raas" = headache (also idiom: big problem/nuisance). "waja3 batun" = stomachache. "waja3 Daher" = backache. Lebanese expression: "waja3 2alb" = heartache (emotional pain). At doctor: "wein l-waja3?" = where does it hurt? "Biwja3ni" = it hurts me.'
  },
  {
    q: 'What does the idiom "bifarri2 rasak" mean?',
    opts: ['he fixes your head', 'splits your head = very loud/annoying', 'he knows you by heart', 'he changes your mind'],
    correct: 1,
    note: '"bifarri2 rasak" = splits your head (بيفرّق راسك — figuratively: very loud/annoying). "Farri2 rasi l-mousiiqe" = the music is splitting my head (too loud). Also used for people: "bfarri2 rasak" = he\'s so annoying he splits your head. Lebanese body idioms use the head a lot: "raas kbiir" (big head = arrogant), "wija3 raas" (headache = nuisance). Physical pain vocabulary often doubles as emotional/social commentary.'
  },
  {
    q: 'How do you say "to walk" in Lebanese Arabic?',
    opts: ['naam', 'ja3les', 'mishi', 'wa2af'],
    correct: 2,
    note: '"mishi" = to walk (مشي). "3am bimshi" = I\'m walking (present continuous). "imshi" = walk! (command). Lebanese use "mishi" for more than walking: "l-shughel mashi" = work is going/moving along. "Mishi l-Hal" = make do/get by. "Yimshi?" = is it going/working? "la2, ma bimshi" = no, it\'s not working. The word "mishi" covers locomotion, progress, and function simultaneously.'
  },
  {
    q: 'What does "bi-3uyuunak" mean?',
    opts: ['I see you', 'in your eyes = with pleasure', 'your eyes are beautiful', 'eye contact'],
    correct: 1,
    note: '"bi-3uyuunak" = in your eyes = with pleasure / gladly (بعيونك — 3uyuun = eyes, -ak = your). One of Lebanon\'s most beautiful expressions. Said when asked to do a favor: "bi-3uyuunak" = gladly, for you with my eyes. Equivalent to "anything for you." "3uyuun" (eyes) appear in many Lebanese expressions: "ya 3ain" (oh eye = how precious!), "3ain 3aleik" (evil eye on you). Eyes symbolize care, attention, and affection.'
  },
  {
    q: 'How do you say "to wake up" in Lebanese Arabic?',
    opts: ['naam', 'SiHi', '2aam', 'wa2af'],
    correct: 1,
    note: '"SiHi" = to wake up (صحي — from صحى). "Sa7i" = awake/alert. "SaHit" = she woke up. Lebanese morning: "SiHit min nom" (woke up from sleep). "Sa7i 3a badri?" = did you wake up early? "Bkir" = early. "2aam" = to get up/rise (specifically getting out of bed, standing up): "2aam min l-takht" = got up from bed. Sequence: "SiHi" (woke up) → "2aam" (got up) → "faTar" (had breakfast).'
  },
  {
    q: 'What does "yiksir l-khaaTir" mean?',
    opts: ['to break a bone', 'to break someone\'s spirit / disappoint', 'to lose your mind', 'to be very brave'],
    correct: 1,
    note: '"yiksir l-khaaTir" = to break the spirit / disappoint (يكسر الخاطر — khaaTir = spirit/mood, kisar = to break). "Kasarli khaaTri" = he broke my spirit/disappointed me. "la tiksar khaaTri" = don\'t disappoint me / don\'t let me down. Lebanese emotional vocabulary uses breaking: "kesserni" (bargaining: give me a break), "mkaSSar" (broken). "khaaTir" = the soft inner spirit — breaking it is serious. "3ala khaaTrak" = as you wish (lit: on your spirit).'
  },
  {
    q: 'How do you say "shoulder" in Lebanese Arabic?',
    opts: ['Sadr', 'ktef', 'Daher', '3unuu2'],
    correct: 1,
    note: '"ktef" = shoulder (كتف — Lebanese; MSA: "katif"). Plural: "ktaaf". Lebanese body language: shrugging shoulders "rafa3 ktafo" = raised his shoulders = shrugged (I don\'t know). "ktef bi-ktef" = shoulder to shoulder = together. "Shakalt ktaafak" = I shouldered your burden. Lebanese physical contact: men pat each other\'s shoulders in greeting; women hug. Body contact is normal between same-gender friends.'
  },
  {
    q: 'What does "7aka" mean?',
    opts: ['to feel', 'to carry', 'to speak / talk', 'to sit'],
    correct: 2,
    note: '"7aka" = to speak/talk (حكى — from حكى = to tell/narrate). "3am bi7ki" = he\'s talking. "shu 7akait?" = what did you say? Very common Lebanese word for speaking. "7aki" = talk/speech (noun). "7aki fraagh" = empty talk / nonsense. "7aki farr" = talk and run = promises not kept. "7akiili" = talk to me. Lebanese culture values talkativeness — "7aki ktiir" (talks a lot) is not always a complaint. Also: "7aka 7aki mliH" = spoke well.'
  },
];

const BOD_TIPS = [
  { title: 'Lebanese body vocabulary in daily conversation', body: '"Raas" (head), "iid" (hand), "rijl" (leg) are everyday words. Body parts feature heavily in Lebanese expressions: "3ala raasi" (on my head = gladly/I\'ll do it), "bi-3uyuunak" (with my eyes = with pleasure), "tislam ideik" (bless your hands = thank you for your work). Lebanese gestures are iconic: the chin flick (ma fi = there\'s nothing/I don\'t know), the finger-bunch kiss (delicious), pointing with the chin. Understanding body vocabulary helps decode both literal and figurative Lebanese speech.' },
  { title: 'Lebanese body idioms — the body as metaphor', body: 'Lebanese Arabic uses body parts metaphorically throughout daily speech. Head ("raas"): "wija3 raas" (headache = problem), "raas kbiir" (big head = arrogant), "3ala raasi" (on my head = my responsibility/pleasure). Heart ("2alb"): "2albo ma3o" (his heart is with him = he\'s generous), "3ala 2albo" (on his heart = he loves it). Eyes ("3ein"/"3uyuun"): "ya 3ain" (oh eye = how precious), "bi-3uyuunak" (with my eyes = gladly). Back ("Daher"): "3ala Dahrak" (on your back = your responsibility). Hands ("iid"): "tislam ideik" (bless your hands = thank you).' },
  { title: 'Describing illness and pain in Lebanese Arabic', body: '"Ta3baan" is the go-to word for not feeling well — covers everything from tired to seriously ill. More specific: "3andi waja3 b..." (I have a pain in...) + body part. "Hamme" (fever) = serious concern. "khasiis" (weak/run-down). "mardaan" (sick — formal). At Lebanese pharmacies: describe symptoms directly, pharmacist will recommend medication. Lebanese approach to illness: minimize to others ("ma shi, ta3baan shwayy" = nothing, just a little tired), but accept sympathy warmly. "Allah yshfik" (God heal you) is the standard response to illness news.' },
  { title: 'Movement verbs in Lebanese daily life', body: '"Mishi" (walk) is one of Lebanon\'s most versatile words: literal walking + figurative "it\'s working/going." "L-shughel mashi?" = is work going well? "Mishi l-Hal" = making do. "Wa2af" (stop/stand) is used for traffic, arguments, moments: "wa2af l-kaww" = power stopped. "2aam" (got up/rose) signals beginning of action: "2aam w raa7" = got up and left. "Ja3les" (sit) = invite to stay: "ta3a je2les ma3na" = come sit with us. Body movement vocabulary is intertwined with social invitation and daily logistics.' },
  { title: 'Lebanese gestures and body language guide', body: 'Lebanese communication is highly gestural. Key gestures: (1) Chin lift + click = "no" or "there\'s nothing" (bifarri2 min la2); (2) Finger bunch (fingertips together, shake upward) = "wait/what do you want?" or "sabre shwayy" (wait a moment); (3) Flat hand wave downward = "it\'s nothing/don\'t worry"; (4) Index finger wag = "no/I won\'t"; (5) Eye pull (finger under eye) = "watch out / I\'m watching you"; (6) Flat hand on chest = sincerity / "from my heart." Learning these gestures alongside body vocabulary gives you the full Lebanese communication system — words + gestures together.' },
];

const BOD_ABOUT = 'Master Lebanese Arabic for body parts and physical vocabulary — head to toe, body idioms, movement verbs, health descriptions, and Lebanese gesture culture. Essential for medical visits, physical descriptions, and understanding the body-centered metaphors in everyday Lebanese speech.';
