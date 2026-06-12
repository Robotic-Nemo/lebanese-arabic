// R573 — NEW FEATURE: Lebanese Pharmacy & Medicine culture coach (prefix: phr)

const PHR_WORDS = [
  // pharmacy basics
  { ar: 'الصيدلية', tr: 'eS-Saydaliyye', en: 'the pharmacy', cat: 'basics' },
  { ar: 'الصيدلاني', tr: 'eS-Saydalaaani', en: 'the pharmacist', cat: 'basics' },
  { ar: 'دواء', tr: 'dawaa', en: 'medicine / drug', cat: 'basics' },
  { ar: 'حبّات', tr: '7abbaat', en: 'pills / tablets', cat: 'basics' },
  { ar: 'شراب', tr: 'sharaab', en: 'syrup', cat: 'basics' },
  { ar: 'مرهم', tr: 'mar7am', en: 'ointment / cream', cat: 'basics' },
  { ar: 'ريشتة', tr: 'reeshitta', en: 'prescription (from Italian ricetta)', cat: 'basics' },
  // symptoms
  { ar: 'عندي وجع', tr: '3andi waja3', en: 'I have pain', cat: 'symptoms' },
  { ar: 'عندي سخانة', tr: '3andi skhaane', en: 'I have a fever', cat: 'symptoms' },
  { ar: 'عندي ضعف', tr: '3andi Da3f', en: 'I feel weak / fatigued', cat: 'symptoms' },
  { ar: 'عندي ضغط', tr: '3andi Dughut', en: 'I have blood pressure issues', cat: 'symptoms' },
  { ar: 'عندي سكر', tr: '3andi sukar', en: 'I have diabetes / blood sugar issues', cat: 'symptoms' },
  { ar: 'عندي حساسية', tr: '3andi 7asaasiiyye', en: 'I have an allergy', cat: 'symptoms' },
  { ar: 'وجع رأس', tr: 'waja3 raas', en: 'headache', cat: 'symptoms' },
  // pharmacy interaction
  { ar: 'في شي لـ...؟', tr: 'fi shi la...?', en: 'do you have something for...?', cat: 'interact' },
  { ar: 'عطيني شي بينيّم', tr: '3aTiini shi bynayyim', en: 'give me something that makes me sleep', cat: 'interact' },
  { ar: 'بتسمحلي تعمل ريشتة؟', tr: 'btesma7lli ta3mil reeshitta?', en: 'can you write me a prescription?', cat: 'interact' },
  { ar: 'ما في إنشورانس', tr: 'maa fi inshuraans', en: 'no insurance (very common reality)', cat: 'interact' },
  { ar: 'كيف بآخذها؟', tr: 'kiif baaakhda?', en: 'how do I take it?', cat: 'interact' },
  { ar: 'مرتين بليوم', tr: 'marteen bil-yoom', en: 'twice a day (dosage instruction)', cat: 'interact' },
  // cultural / folk medicine
  { ar: 'الصيدلاني دكتور الفقير', tr: 'eS-Saydalaaani doktor el-faqiir', en: 'the pharmacist is the poor man\'s doctor', cat: 'cultural' },
  { ar: 'ما بدّك دكتور', tr: 'maa baddak doktor', en: 'you don\'t need a doctor (pharmacist says)', cat: 'cultural' },
  { ar: 'روح نام واشرب مي', tr: 'ruu7 naam w-ishrab mayy', en: 'go sleep and drink water (dismissive cure-all)', cat: 'cultural' },
  { ar: 'عندك كحّة؟ شرب زعتر', tr: '3indak ka77a? shrab za3tar', en: 'have a cough? drink thyme tea (folk remedy)', cat: 'cultural' },
  { ar: 'الضغط طالع', tr: 'eD-Dughut Taalii3', en: 'blood pressure is up', cat: 'cultural' },
  { ar: 'الضغط نازل', tr: 'eD-Dughut naazil', en: 'blood pressure is down', cat: 'cultural' },
  { ar: 'خذ ريحة', tr: 'khod ree7a', en: 'take a rest / catch your breath', cat: 'cultural' },
];

const PHR_DRILLS = [
  {
    q: 'You\'re at the pharmacy with a headache. What\'s the most natural thing to ask?',
    opts: ['بتسمحلي تعمل ريشتة؟', 'في شي لوجع الراس؟ (fi shi la waja3 er-raas?)', 'ما في إنشورانس', 'مرتين بليوم'],
    ans: 1,
    exp: 'في شي لـ...؟ (fi shi la...?) = do you have something for...? The standard opener at any Lebanese pharmacy.'
  },
  {
    q: 'The pharmacist asks about your dosage. They say مرتين بليوم (marteen bil-yoom). What do they mean?',
    opts: ['Take it once a week', 'Take it twice a day', 'Take it at night only', 'Take it with food'],
    ans: 1,
    exp: 'مرتين بليوم = twice a day. مرة = once, مرتين = twice, تلت مرات = three times.'
  },
  {
    q: 'What is the famous saying about Lebanese pharmacists?',
    opts: ['الصيدلاني دكتور الفقير', 'الصيدلاني أغلى من الدكتور', 'الدواء أحلى من الصحة', 'الصيدلاني مش دكتور'],
    ans: 0,
    exp: 'الصيدلاني دكتور الفقير = the pharmacist is the poor man\'s doctor. Lebanese pharmacists often diagnose and prescribe without requiring a doctor\'s visit.'
  },
  {
    q: 'Someone says عندي ضغط (3andi Dughut). What are they describing?',
    opts: ['They have a headache', 'They have blood pressure issues', 'They have diabetes', 'They have an allergy'],
    ans: 1,
    exp: 'عندي ضغط (3andi Dughut) = I have blood pressure problems. الضغط (blood pressure) is one of the most common health topics in Lebanese conversation.'
  },
  {
    q: 'You want something to help you sleep. What do you tell the pharmacist?',
    opts: ['روح نام واشرب مي', 'في شي لوجع الراس', 'عطيني شي بينيّم (3aTiini shi bynayyim)', 'كيف بآخذها؟'],
    ans: 2,
    exp: 'عطيني شي بينيّم = give me something that makes me sleep. A very direct (and common) Lebanese pharmacy request.'
  },
  {
    q: 'What does ريشتة (reeshitta) mean, and where does the word come from?',
    opts: ['A type of syrup, from Arabic', 'A prescription, from Italian ricetta', 'A pill, from French', 'A cream, from Turkish'],
    ans: 1,
    exp: 'ريشتة (reeshitta) = prescription, from the Italian "ricetta." Lebanese Arabic has many Italian loanwords from Ottoman trade routes.'
  },
  {
    q: 'A pharmacist dismisses your complaint with روح نام واشرب مي (ruu7 naam w-ishrab mayy). What are they saying?',
    opts: ['Take these pills with water', 'Go to sleep and drink water (cure-all dismissal)', 'Your condition is serious', 'Come back tomorrow'],
    ans: 1,
    exp: 'روح نام واشرب مي = go sleep and drink water. The classic Lebanese (and Mediterranean) dismissal for minor complaints — rest and hydration cure everything.'
  },
  {
    q: 'What does عندي سخانة (3andi skhaane) mean?',
    opts: ['I have a cough', 'I have a fever', 'I have diabetes', 'I have low blood pressure'],
    ans: 1,
    exp: 'عندي سخانة (3andi skhaane) = I have a fever. سخانة comes from ساخن (saakhin) = hot.'
  },
  {
    q: 'When the pharmacist says ما بدّك دكتور (maa baddak doktor), what are they telling you?',
    opts: ['You need to see a doctor immediately', 'You don\'t need a doctor — I can help you', 'Doctors are too expensive', 'The doctor is unavailable'],
    ans: 1,
    exp: 'ما بدّك دكتور = you don\'t need a doctor. Lebanese pharmacists frequently diagnose and treat patients directly — a culturally embedded practice.'
  },
  {
    q: 'What does خذ ريحة (khod ree7a) literally mean, and what does it advise?',
    opts: ['Take a pill', 'Smell the medicine', 'Take a rest / catch your breath', 'Take the prescription'],
    ans: 2,
    exp: 'خذ ريحة (khod ree7a) = lit. "take a breath/smell" → take a rest. ريحة means breath/smell/rest. Universal Lebanese advice for any health complaint.'
  },
];

const PHR_TIPS = [
  'Lebanese pharmacies are social institutions — pharmacists often diagnose, prescribe, and counsel without requiring a doctor\'s referral. "الصيدلاني دكتور الفقير" (the pharmacist is the poor man\'s doctor) is a real and lived reality.',
  'Prescriptions (ريشتة, from Italian ricetta) are sometimes optional in Lebanon — pharmacists will often dispense antibiotics and other medicines without one, especially in smaller neighborhoods.',
  'Blood pressure (الضغط) is one of the most discussed health topics in Lebanese culture. Stress, bad news, or excitement can all "raise your pressure" — it\'s used both medically and metaphorically.',
  'Folk remedies are taken seriously alongside Western medicine: زعتر (thyme) for coughs, ماء زهر (orange blossom water) for anxiety, مي ورد (rose water) for stomach issues.',
  'ما في إنشورانس (no insurance) is an extremely common reality in Lebanon, especially since the economic collapse. Pharmacies often have informal arrangements or discounts for regular customers.',
];

const PHR_ABOUT = 'Lebanese pharmacy culture is a microcosm of Lebanese society — pragmatic, social, and deeply human. The pharmacist is often the first (and only) medical professional many Lebanese people consult. Understanding pharmacy vocabulary lets you navigate health situations, follow dosage instructions, and participate in one of Lebanon\'s most universal social rituals: complaining about your health while getting exactly the medicine you asked for.';
