// Run #348 — Lebanese Pharmacy & Health Phrases Coach (phm)
// 40 words across 5 categories: symptoms / pharmacy / medication / body-pain / phrases
// 10 MCQ drills, 5 tips, about text

const PHM_WORDS = [
  // symptoms
  { tr: '3indi 7umma', ar: 'عندي حمى', en: 'I have a fever', cat: 'symptoms' },
  { tr: 'rasi biddi', ar: 'راسي بيدني', en: 'I have a headache (lit. my head is hurting me)', cat: 'symptoms' },
  { tr: 'mi3dti btaw3a3ni', ar: 'معدتي بتوجعني', en: 'my stomach hurts', cat: 'symptoms' },
  { tr: 'sa3le', ar: 'سعلة', en: 'cough', cat: 'symptoms' },
  { tr: 'rashH', ar: 'رشح', en: 'cold / nasal congestion', cat: 'symptoms' },
  { tr: 'daykha', ar: 'دوخة', en: 'dizziness / vertigo', cat: 'symptoms' },
  { tr: 'ta3baen/ta3baane', ar: 'تعبان/تعبانة', en: 'feeling unwell / sick (m/f)', cat: 'symptoms' },
  { tr: 'battiin', ar: 'بطين', en: 'slow / sluggish — heavy feeling (figurative)', cat: 'symptoms' },
  // pharmacy vocab
  { tr: 'saydaliiye', ar: 'صيدلية', en: 'pharmacy', cat: 'pharmacy' },
  { tr: 'Saydalii', ar: 'صيدلي', en: 'pharmacist', cat: 'pharmacy' },
  { tr: 'waSfet Tabiib', ar: 'وصفة طبيب', en: 'doctor\'s prescription', cat: 'pharmacy' },
  { tr: 'bila waSfe', ar: 'بلا وصفة', en: 'without prescription / over-the-counter', cat: 'pharmacy' },
  { tr: '3indi ma3ak...?', ar: 'عندك...؟', en: 'do you have...? (pharmacy ask)', cat: 'pharmacy' },
  { tr: 'mn2iiH', ar: 'منيح', en: 'good / effective / well (medicine is "good")', cat: 'pharmacy' },
  { tr: 'Tabiib', ar: 'طبيب', en: 'doctor', cat: 'pharmacy' },
  { tr: 'mustashfa', ar: 'مستشفى', en: 'hospital', cat: 'pharmacy' },
  // medications
  { tr: 'dawaa', ar: 'دواء', en: 'medicine / medication', cat: 'medication' },
  { tr: '7abbaat', ar: 'حبّات', en: 'pills / tablets', cat: 'medication' },
  { tr: 'sharaabit', ar: 'شراب', en: 'syrup / liquid medicine', cat: 'medication' },
  { tr: 'mrahhim', ar: 'مرهم', en: 'ointment / cream', cat: 'medication' },
  { tr: 'bkhakhe', ar: 'بخاخة', en: 'spray / inhaler', cat: 'medication' },
  { tr: 'muDaadd 7ayawiiye', ar: 'مضاد حيوية', en: 'antibiotics', cat: 'medication' },
  { tr: 'muskhin', ar: 'مسكّن', en: 'painkiller / analgesic', cat: 'medication' },
  { tr: 'khaafid 7araara', ar: 'خافض حرارة', en: 'fever reducer / antipyretic', cat: 'medication' },
  // body pain
  { tr: 'Dahar', ar: 'ضهر', en: 'back', cat: 'body-pain' },
  { tr: 'waja3', ar: 'وجع', en: 'pain / ache', cat: 'body-pain' },
  { tr: 'jarH', ar: 'جرح', en: 'wound / cut', cat: 'body-pain' },
  { tr: 'kasra', ar: 'كسرة', en: 'fracture / break', cat: 'body-pain' },
  { tr: 'Harar', ar: 'حرار', en: 'burning sensation / heat', cat: 'body-pain' },
  { tr: '3ali2', ar: 'عالق', en: 'stuck / congested (in throat)', cat: 'body-pain' },
  { tr: 'mfakkak', ar: 'مفكّك', en: 'weak-limbed / falling apart (colloquial)', cat: 'body-pain' },
  { tr: 'TiHsha', ar: 'طحشة', en: 'sharp shooting pain (Lebanese colloquial)', cat: 'body-pain' },
  // health phrases
  { tr: 'sallmit', ar: 'سلّمت', en: 'recovered / got better (lit. was safe)', cat: 'phrases' },
  { tr: 'alla yshaffiik', ar: 'الله يشفيك', en: 'may God heal you — said to sick person', cat: 'phrases' },
  { tr: '3a l-3aafye', ar: 'عالعافية', en: 'to good health — said during/after illness', cat: 'phrases' },
  { tr: 'bTii7 3aleik', ar: 'بطيح عليك', en: 'it\'ll knock you down — said of a serious illness', cat: 'phrases' },
  { tr: 'faatir', ar: 'فاطر', en: 'fasting / not eaten yet', cat: 'phrases' },
  { tr: '7abbeit dawaa', ar: 'حبيت دواء', en: 'I took medication (lit. I liked medicine)', cat: 'phrases' },
  { tr: 'biHtaaj istiraHa', ar: 'بحتاج استراحة', en: 'I need rest', cat: 'phrases' },
  { tr: 'shu bidak trakkib?', ar: 'شو بدك تركّب؟', en: 'what do you want to put on? (pharmacist fitting question)', cat: 'phrases' },
];

const PHM_DRILLS = [
  {
    q: 'How do you say "my head hurts" in Lebanese Arabic?',
    opts: ['Raasi mnii7', 'Raasi biddi / rasi byaw3ani', 'Rasi ta3baan', '3indi rashH'],
    correct: 1,
    note: '"Raasi biddi" or "raasi byaw3ani" (راسي بيدني / بيوجعني) = my head is hurting me. Lebanese uses the construction "X biddi/byaw3ani" = X is hurting me. "Rasi" = my head. Also: "mi3dti btaw3a3ni" (stomach), "dahri biddi" (my back hurts). The possession suffix "-i" = my. More casual: "3indi waja3 raas" = I have a headache.'
  },
  {
    q: 'What is a "saydaliiye" (صيدلية) and how is it different from in other countries?',
    opts: ['A hospital', 'A pharmacy — Lebanese pharmacies act as frontline medical consultants, not just dispensaries', 'A clinic', 'A medical lab'],
    correct: 1,
    note: '"Saydaliiye" (صيدلية) = pharmacy. In Lebanon, pharmacies are cultural institutions — the "Saydalii" (pharmacist) gives medical advice, recommends treatments, and dispenses many medications that require prescriptions elsewhere. "Bila waSfe" (without prescription) — many antibiotics, sleep aids, and controlled drugs are sold OTC. Lebanese pharmacies are open late and serve as emergency consultants. "3indi dawaa" = I have medicine.'
  },
  {
    q: 'What does "alla yshaffiik" (الله يشفيك) mean?',
    opts: ['Get out of my sight', 'May God heal you — said to someone who is sick', 'I hope you feel worse', 'Take this medicine'],
    correct: 1,
    note: '"Alla yshaffiik" (الله يشفيك) = may God heal/cure you. Said to someone who is sick. To a woman: "alla yshaffiiki". Response: "alla ysallmak/ek" (may God keep you well). Paired with "3a l-3aafye" (to your health). This phrase shows care and is expected when visiting a sick person. Not saying it when someone mentions illness is a social omission.'
  },
  {
    q: 'What are "muDaadd 7ayawiiye" (مضاد حيوية)?',
    opts: ['Vitamins', 'Antibiotics', 'Pain killers', 'Fever reducers'],
    correct: 1,
    note: '"MuDaadd 7ayawiiye" (مضاد حيوية) = antibiotics (lit. anti-life/bacterial). In Lebanon, antibiotics are heavily over-prescribed and often sold without prescription at pharmacies. "Biddi muDaadd 7ayawiiye" = I want antibiotics — a very common pharmacy request. Resistance awareness is growing but OTC dispensing is still common. "Muskhin" = painkiller. "Khaafid 7araara" = fever reducer.'
  },
  {
    q: 'When someone says "ta3baen/ta3baane" (تعبان/تعبانة), what do they mean?',
    opts: ['They are tired from exercise', 'They are feeling unwell / sick — a general term for not feeling well', 'They are emotionally sad', 'They are hungry'],
    correct: 1,
    note: '"Ta3baen" (m) / "ta3baane" (f) = not feeling well, sick, unwell. The most versatile health complaint in Lebanese. Can mean physically sick, emotionally drained, or just off. "Shu fik?" → "ta3baen" = what\'s wrong? → not feeling well. Stronger: "ta3baen ktir" = really unwell. The pharmacist\'s first question: "shu maa2ik/maa2ek?" = what\'s the matter with you?'
  },
  {
    q: 'What does "bila waSfe" (بلا وصفة) mean in a pharmacy context?',
    opts: ['Without payment', 'Without prescription / over-the-counter (sold freely)', 'A doctor\'s recommendation', 'A repeat prescription'],
    correct: 1,
    note: '"Bila waSfe" (بلا وصفة) = without prescription. "WaSfe" = recipe/prescription — same word for both in Lebanese! The pharmacist might say "ha, da2ini, bila waSfe" = here, take it, no prescription needed. Lebanon has one of the highest OTC drug dispensing rates in the region. This includes sleep aids, antibiotics, anti-anxiety meds. "Ma3ak waSfe?" = do you have a prescription?'
  },
  {
    q: 'What is "TiHsha" (طحشة) in Lebanese colloquial health vocabulary?',
    opts: ['A mild headache', 'A sharp, shooting or stabbing pain — a vivid colloquial term', 'A rash', 'Stomach bloating'],
    correct: 1,
    note: '"TiHsha" (طحشة) is a very Lebanese colloquial term for a sharp, sudden, shooting pain. "3indi TiHsha bi Dahri" = I have a sharp stabbing pain in my back. More expressive than the formal "waja3" (pain). Distinctly Lebanese/Levantine in usage. Also heard: "Harar" (burning sensation), "mfakkak" (feeling physically weak/falling apart), "biddo yinTi7" (about to collapse — colloquial for feeling really ill).'
  },
  {
    q: 'What does "sallmit" (سلّمت) mean when said after an illness?',
    opts: ['You got worse', 'You recovered / you are well again (lit. you were kept safe)', 'You need more medicine', 'You were discharged from hospital'],
    correct: 1,
    note: '"Sallmit" (سلّمت m) / "sallamti" (f) = you recovered, you\'re better now. From the root s-l-m (safety, peace, Islam). When someone recovers: "sallmit, il-7amdilla" = you\'re better, thank God. The greeting "alla yisallmak" (may God keep you safe) comes from the same root. Health and safety are linguistically intertwined in Lebanese Arabic.'
  },
  {
    q: 'How do you describe "I have a cold" in Lebanese Arabic?',
    opts: ['3indi bard', '3indi rashH / maskuub', '3indi 7umma', 'Ma3di byaw3ani'],
    correct: 1,
    note: '"3indi rashH" or "maskuub" = I have a cold / nasal congestion. "RashH" = nasal mucus/congestion specifically. "Maskuub" (lit. poured) = very runny nose. "3indi bard" = I\'m cold (temperature) — not the illness. "Sa3le" = cough. "3indi sa3le u rashH" = I have a cough and cold — the standard two-symptom Lebanese cold complaint. Pharmacist will give you something "maarid" (effective/powerful).'
  },
  {
    q: 'What is "muskhin" (مسكّن) and when do Lebanese ask for it?',
    opts: ['A vitamin supplement', 'A painkiller / analgesic — asked for freely at Lebanese pharmacies', 'A cough medicine', 'A sleep aid'],
    correct: 1,
    note: '"Muskhin" (مسكّن) = painkiller, from "sakkanat" (to quiet/silence) — literally "something that silences pain." "3tiini muskhin" = give me a painkiller. Lebanese pharmacies dispense ibuprofen, paracetamol, codeine combinations freely. "Muskhin 2awii" = strong painkiller. "Aspirin" and "Panadol" are so common they\'re used generically. "Shu 3andak li-waja3 raas?" = what do you have for headache?'
  },
];

const PHM_TIPS = [
  {
    title: 'Lebanese Pharmacies: First Line of Medical Care',
    body: 'In Lebanon, the "saydaliiye" (pharmacy) is often the first stop for any health issue — before a doctor. Pharmacists ("Saydalii") are trained to diagnose and prescribe, and many medications requiring prescriptions elsewhere are dispensed "bila waSfe" (without prescription). This includes antibiotics, sleep aids, and stronger painkillers. Pharmacies are open late (often until midnight), on holidays, and serve as emergency consultation points. Saying "biddi dawaa la..." = I want medicine for... will usually get you something immediately.'
  },
  {
    title: 'How to Describe Pain in Lebanese Arabic',
    body: 'Lebanese has a rich vocabulary for pain: "waja3" (ache/pain), "TiHsha" (sharp shooting pain), "Harar" (burning), "ta3baen" (generally unwell), "mfakkak" (weak, falling apart). Body + "biddi/byaw3ani" = X is hurting: "Dahri biddi" (back), "rasi byaw3ani" (head), "mi3dti btaw3a3ni" (stomach). Intensity: "ktir" (a lot), "shway" (a little), "3ali2" (stuck/congested). Being specific helps pharmacists: "waja3 7aad" = sharp pain, "waja3 ghaamiz" = dull ache.'
  },
  {
    title: 'Key Health Blessings and Responses',
    body: '"Alla yshaffiik" (may God heal you) — said to any sick person. Response: "alla ysallmak" (may God keep you safe). On recovery: "sallmit, il-7amdilla" (you recovered, thank God). When someone says they\'re unwell: "mn2iiH inshalla" (get well soon, God willing). "3a l-3aafye" (to your health) is said after someone recovers. "Sanatein 3ala raasak" (two years on your head) = a dramatic way to say "thank goodness you\'re ok."'
  },
  {
    title: 'The Lebanese Word "WaSfe" — Recipe and Prescription',
    body: 'One of Lebanese Arabic\'s most charming quirks: "waSfe" (وصفة) means BOTH a cooking recipe AND a doctor\'s prescription. "WaSfet Tabiib" = doctor\'s prescription. "Waasfet tabbule" = tabbouleh recipe. This double meaning reflects Lebanon\'s deep connection between food and healing. When you go to a pharmacy: "3andak waSfe?" = do you have a prescription? "La, ma3i waSfe" = no, I don\'t have one. Often no waSfe is needed anyway.'
  },
  {
    title: 'Common Over-the-Counter Medication Requests',
    body: 'Know these pharmacy phrases: "3tiini muskhin" (painkiller), "3tiini dawaa li-sa3le" (cough medicine), "3tiini khaafid 7araara" (fever reducer), "3tiini muDaadd 7ayawiiye" (antibiotics — yes, often OTC). "Shrab ktir mayye" = drink lots of water (pharmacist advice). "Khud 7abbit kull 8 sa3aat" = take a pill every 8 hours. "Ma taakul 3al-faaDi" = don\'t take on empty stomach. "Iza m2akkil mas7" = if symptoms don\'t improve, come back.'
  },
];

const PHM_ABOUT = 'Lebanese pharmacy culture is as distinctive as Lebanese food culture — the saydaliiye (pharmacy) is a community institution where trained Saydalii (pharmacists) serve as frontline medical consultants, friends, and emergency helpers. Many medications sold strictly by prescription elsewhere flow freely "bila waSfe" in Lebanon. Whether you need a muskhin (painkiller), muDaadd 7ayawiiye (antibiotics), or just want to know what to take for your rashH (cold) and sa3le (cough), Lebanese pharmacy vocabulary is essential for any visitor or resident. And knowing to say "alla yshaffiik" (may God heal you) when someone is sick is as important as knowing the medicine name.';
