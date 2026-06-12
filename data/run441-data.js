// R441 — Lebanese Medical & Health Expressions (med)
const MED_WORDS = [
  // body parts & symptoms
  { ar: 'راسي بيوجعني', tr: 'raasi byouja3ni', en: 'my head hurts', cat: 'symptoms' },
  { ar: 'بطني بيوجعني', tr: 'baTni byouja3ni', en: 'my stomach hurts', cat: 'symptoms' },
  { ar: 'حرارة', tr: '7araara', en: 'fever / temperature', cat: 'symptoms' },
  { ar: 'زكمة', tr: 'zakme', en: 'cold / blocked nose', cat: 'symptoms' },
  { ar: 'كحة', tr: 'ka77a', en: 'cough', cat: 'symptoms' },
  { ar: 'دوخة', tr: 'dawkha', en: 'dizziness', cat: 'symptoms' },
  { ar: 'تعب', tr: 'ta3ab', en: 'tiredness / illness (general)', cat: 'symptoms' },
  { ar: 'ضغط', tr: 'DaghT', en: 'blood pressure', cat: 'symptoms' },
  { ar: 'سكر', tr: 'sukar', en: 'diabetes / blood sugar', cat: 'symptoms' },
  { ar: 'حساسية', tr: '7asaasiyye', en: 'allergy', cat: 'symptoms' },
  // at the doctor / pharmacy
  { ar: 'دكتور', tr: 'daktuur', en: 'doctor', cat: 'clinic' },
  { ar: 'مستشفى', tr: 'mustashfa', en: 'hospital', cat: 'clinic' },
  { ar: 'صيدلية', tr: 'Saydaliyye', en: 'pharmacy', cat: 'clinic' },
  { ar: 'موعد', tr: 'maw3id', en: 'appointment', cat: 'clinic' },
  { ar: 'وصفة', tr: 'waSSfa', en: 'prescription', cat: 'clinic' },
  { ar: 'دواء', tr: 'dawaay', en: 'medicine / medication', cat: 'clinic' },
  { ar: 'حبة', tr: '7abba', en: 'pill / tablet', cat: 'clinic' },
  { ar: 'إبرة', tr: 'ibra', en: 'injection / needle', cat: 'clinic' },
  { ar: 'تحليل دم', tr: 'ta7liil damm', en: 'blood test', cat: 'clinic' },
  { ar: 'أشعة', tr: 'ash3a', en: 'X-ray / scan', cat: 'clinic' },
  // useful phrases
  { ar: 'بيوجعني هون', tr: 'byouja3ni hoon', en: 'it hurts here', cat: 'phrases' },
  { ar: 'من إيمتى', tr: 'min aimta', en: 'since when (symptom onset)', cat: 'phrases' },
  { ar: 'كتير عم يوجعني', tr: 'ktiir 3am youja3ni', en: 'it hurts a lot', cat: 'phrases' },
  { ar: 'شو عندك', tr: 'shu 3andak', en: 'what is wrong with you? (doc to patient)', cat: 'phrases' },
  { ar: 'حاسس حالي تعبان', tr: '7aasis 7aali ta3baan', en: 'I feel sick / unwell', cat: 'phrases' },
  { ar: 'محتاج دكتور', tr: 'me7taaj daktuur', en: 'I need a doctor', cat: 'phrases' },
  { ar: 'هيدا غلط', tr: 'hayda ghalaT', en: "that's wrong (second opinion request)", cat: 'phrases' },
  { ar: 'في مشكلة بالقلب', tr: 'fi mushkile bil 2alb', en: 'there is a heart problem', cat: 'phrases' },
  // Lebanese health system specifics
  { ar: 'ضمان', tr: 'Damaan', en: 'social security / health insurance', cat: 'system' },
  { ar: 'تغطية', tr: 'taghTiyye', en: 'insurance coverage', cat: 'system' },
  { ar: 'كاش', tr: 'kaash', en: 'cash payment (most clinics require this)', cat: 'system' },
  { ar: 'دولار طب', tr: 'dollar Tibb', en: 'medical dollar (doctors charge in USD)', cat: 'system' },
  { ar: 'طوارئ', tr: 'Tawaari2', en: 'emergency / ER', cat: 'system' },
  { ar: 'عندو تقرير', tr: '3ando ta2riir', en: 'he has a medical report', cat: 'system' },
  { ar: 'مختبر', tr: 'mukhtabar', en: 'laboratory / testing lab', cat: 'system' },
  // mental health (rising awareness in Lebanon)
  { ar: 'اكتئاب', tr: 'ikti2aab', en: 'depression', cat: 'mental' },
  { ar: 'قلق', tr: '2ala2', en: 'anxiety', cat: 'mental' },
  { ar: 'ضغط نفسي', tr: 'DaghT nafsi', en: 'psychological stress', cat: 'mental' },
  { ar: 'معالج نفسي', tr: 'mu3aalij nafsi', en: 'therapist / psychologist', cat: 'mental' },
  { ar: 'بحتاج مساعدة', tr: 'b7taaj musaa3ade', en: 'I need help', cat: 'mental' },
  { ar: 'مش قادر ينام', tr: 'mish 2aadir yinaam', en: "can't sleep / insomnia", cat: 'mental' },
];

const MED_DRILLS = [
  {
    q: 'What does "7araara" (حرارة) mean in a medical context?',
    opts: ['headache', 'fever / elevated temperature', 'blood pressure', 'dizziness'],
    correct: 1,
    note: '"7araara" (fever) comes from the root meaning heat. In Lebanese dialect, you say "3ando 7araara" (he has a fever) or ask "2adesh 7araartak?" (what is your temperature?). During COVID-19, "7araara" became the first thing checked at every entrance — it entered everyday Lebanese crisis vocabulary alongside "kahraba" and "benzin".'
  },
  {
    q: 'What is "Saydaliyye" (صيدلية) and why is it especially important in Lebanon?',
    opts: ['a hospital emergency room', 'a pharmacy — often the first point of care in Lebanon', 'a blood testing laboratory', 'a doctor\'s office'],
    correct: 1,
    note: '"Saydaliyye" (pharmacy) is often the first stop for medical issues in Lebanon. Due to high doctor costs and long waits, Lebanese often go to the pharmacist directly to describe symptoms and get medicine without a prescription. Lebanese pharmacists are de facto primary care providers for many families. During the crisis, pharmacies also became battlegrounds over subsidized vs. unsubsidized medicine prices.'
  },
  {
    q: 'What does "Damaan" (ضمان) refer to in Lebanon?',
    opts: ['a private hospital', 'the National Social Security Fund — health insurance coverage', 'a medical prescription', 'cash-only payment policy'],
    correct: 1,
    note: '"Damaan" is Lebanon\'s National Social Security Fund (NSSF). It partially covers hospitalization, some medications, and tests for registered employees. However, coverage is incomplete, and the lira collapse means reimbursements are now worth a fraction of real costs. "3andi Damaan" (I have Damaan) used to mean real coverage — today many Lebanese pay mostly out-of-pocket regardless.'
  },
  {
    q: 'What does "byouja3ni" (بيوجعني) mean?',
    opts: ['I feel dizzy', 'it hurts me / I have pain', 'I am tired', 'I need medicine'],
    correct: 1,
    note: '"Byouja3ni" is from the root "waja3" (pain). You can combine it with any body part: "raasi byouja3ni" (my head hurts), "baTni byouja3ni" (my stomach hurts), "ijri byouja3ni" (my leg hurts). It\'s one of the most essential medical phrases. Lebanese also say "waja3 raas" idiomatically to mean something annoying: "hayda waja3 raas" = "this is a headache (hassle)".'
  },
  {
    q: 'What is "DaghT nafsi" (ضغط نفسي) and why is it frequently discussed in Lebanon post-2019?',
    opts: ['high blood pressure (physical)', 'psychological stress — a major public health issue since the 2019 crisis', 'a type of medication', 'an anxiety medication brand'],
    correct: 1,
    note: '"DaghT nafsi" (psychological stress/pressure) has exploded as a topic in Lebanon since 2019. The economic collapse, Beirut port explosion, COVID-19, and political dysfunction created a massive mental health crisis. Lebanese NGOs reported 70%+ of the population showing signs of depression or anxiety. "Btit7ammal" (can you handle it?) and "DaghT nafsi ktir" (too much psychological pressure) are common expressions of shared suffering.'
  },
  {
    q: 'What is "dollar Tibb" (دولار طب) and what does it reflect?',
    opts: ['a US-funded health program in Lebanon', 'doctors charging fees in US dollars due to lira collapse', 'dollar-denominated medications from abroad', 'a black market medicine trade'],
    correct: 1,
    note: '"Dollar Tibb" (medical dollar) refers to the practice of Lebanese doctors pricing consultations and procedures in USD since the lira became near-worthless. A specialist visit that cost 50,000 LL (formerly ~$33) might now cost $30-50 "fresh dollars" — actually more expensive for most Lebanese who earn in lira. Healthcare became a luxury, driving many to skip treatment entirely or use WhatsApp groups to share medications.'
  },
  {
    q: 'What does "ta7liil damm" (تحليل دم) mean?',
    opts: ['a blood transfusion', 'a blood test', 'blood pressure measurement', 'a heart scan'],
    correct: 1,
    note: '"Ta7liil damm" (blood test/analysis) uses "ta7liil" (analysis) + "damm" (blood). Medical tests in Lebanon are done at private "mukhtabar" (laboratories) that have proliferated due to weak hospital infrastructure. After the port explosion and crisis, many Lebanese discovered undiagnosed conditions through increased health awareness. "Roo7 3mol ta7liil" (go get a blood test) is common medical advice for vague symptoms.'
  },
  {
    q: 'What is "Tawaari2" (طوارئ) and what challenges do Lebanese ERs face?',
    opts: ['a scheduled appointment', 'emergency room — now critically underfunded', 'an outpatient clinic', 'a pharmacy hotline'],
    correct: 1,
    note: '"Tawaari2" (emergency) is the ER. Lebanese hospitals\' emergency departments nearly collapsed during the 2021-2022 crisis — fuel shortages meant generators failed, medications ran out, and nurses emigrated en masse. Hospitals demanded cash deposits before treatment. "Roo7 3a el Tawaari2" (go to the ER) became a frightening sentence — families scrambled for generators, medicine, and USD to get care.'
  },
  {
    q: 'What does "2ala2" (قلق) mean?',
    opts: ['anger', 'anxiety / worry', 'sadness', 'confusion'],
    correct: 1,
    note: '"2ala2" (anxiety/worry) is extremely common in Lebanese conversation. "Ana 2ala2aan" (I am anxious) or "3andi 2ala2" (I have anxiety) entered everyday speech as mental health awareness grew. Lebanese Arabic distinguishes between "2ala2" (anxiety/unease) and "khawf" (fear). Post-blast and post-collapse, "2ala2 wujuudi" (existential anxiety) became a term Lebanese therapists used frequently.'
  },
  {
    q: 'What does "7asaasiyye" (حساسية) cover in Lebanese medical usage?',
    opts: ['sensitivity to cold', 'allergy (food, drug, environmental — broad use)', 'a skin rash only', 'a medication side effect'],
    correct: 1,
    note: '"7asaasiyye" (allergy/sensitivity) is used broadly in Lebanese Arabic for any allergic reaction. "3andi 7asaasiyye" can mean food allergy, drug allergy, hay fever, or skin sensitivity. When visiting Lebanese doctors or taking medications, saying "3andi 7asaasiyye men..." (I am allergic to...) is essential. Lebanese also use "7asaas" informally to mean sensitive personality: "ma tkullo hayda, howe 7asaas" (don\'t tell him that, he\'s sensitive).'
  },
];

const MED_TIPS = [
  {
    title: '🏥 Lebanese Healthcare Reality',
    body: 'Lebanon had one of the best healthcare systems in the Middle East before 2019. American University of Beirut Medical Center (AUBMC) and Hotel-Dieu were world-class. After the lira collapse, the system deteriorated sharply. Over 40% of doctors and nurses emigrated. Hospitals demanded cash in USD before treatment. Medicine shortages became chronic. Yet Lebanon still has pockets of excellence — specialist doctors trained abroad, private clinics for those with fresh dollars. Understanding Lebanese medical vocabulary means navigating both the old prestige system and the new crisis reality.'
  },
  {
    title: '💊 The Pharmacy as First-Line Care',
    body: 'In Lebanon, the "Saydaliyye" (pharmacy) functions as primary care for millions. Lebanese pharmacists (often pharmacy school graduates) consult directly, prescribe over-the-counter medications, and fill requests without prescriptions for many drugs. "Shu 3andak dawa la..." (what medicine do you have for...) is how many interactions begin. This became more extreme during the crisis when doctor visits became unaffordable. WhatsApp groups also became informal medicine networks — sharing leftover medications, asking for substitutes for out-of-stock drugs.'
  },
  {
    title: '📋 Insurance, Damaan & Paying Cash',
    body: 'Lebanese health coverage has three tiers: government employees have "ta2miin" (insurance), private sector workers may have "Damaan" (NSSF) or employer insurance, and many have nothing. Even with coverage, reimbursements in lira are minimal compared to real costs. The phrase "3andi Damaan bas ma 3am tnaf3ni" (I have Damaan but it\'s useless now) captures the frustration. "Kaash" (cash) — preferably in USD — became the universal healthcare currency. International NGOs like MSF and UNHCR fill gaps for refugees and the poorest Lebanese.'
  },
  {
    title: '🧠 Mental Health in Post-Crisis Lebanon',
    body: 'Mental health went from stigmatized to openly discussed after 2019. The port explosion (August 4, 2020), economic freefall, mass emigration of friends and family, and daily hardship created a national trauma. Lebanese therapists and psychiatrists saw unprecedented demand. Organizations like EMBRACE Lebanon run suicide hotlines. "Bro7 3and mu3aalij" (I\'m going to a therapist) lost much of its stigma. Key vocabulary: "ikti2aab" (depression), "2ala2" (anxiety), "sadme" (trauma/shock), "DaghT nafsi" (psychological pressure). Acknowledging mental health needs is now a sign of strength in Lebanese culture.'
  },
  {
    title: '🚑 Emergency & Medical Phrases to Know',
    body: 'Essential medical phrases for Lebanon: "Saa3idni!" (help me!), "3ando azme 2albiyye" (he\'s having a heart attack), "wa3et" / "2ighma 3alay" (I fainted), "fi 7ariij" (there\'s a fire), "ta7riik el ijri mish maa2luum" (leg movement is unclear — paralysis concern). For hospitals: "biddi daktuur 3aajel" (I need a doctor urgently), "fiik ta3mil ta7liil?" (can you do a test?), "ma 3andi maSaari kaafi" (I don\'t have enough money). Knowing these phrases can be lifesaving in a system where communication speed matters.'
  },
];

const MED_ABOUT = 'Medical vocabulary in Lebanese Arabic reflects both the country\'s sophisticated healthcare heritage and its current crisis. Lebanon once exported doctors across the Arab world; today it struggles to keep them home. From the "Saydaliyye" (pharmacy) that substitutes for primary care, to "Damaan" insurance that barely covers costs, to the quiet epidemic of "2ala2" (anxiety) and "ikti2aab" (depression) — medical language here is inseparable from survival. These words help you navigate clinics, communicate symptoms, understand the system, and recognize that Lebanese healthcare, battered as it is, still runs on human dedication and improvisation.';
