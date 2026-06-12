// R780 — NEW FEATURE: Lebanese Arabic At the Dentist (dnt)

const DNT_CATS = ['clinic','teeth','procedures','phrases'];

const DNT_WORDS = [
  // clinic
  { ar: 'طبيب أسنان', tr: 'Tabiib 2asnan', en: 'dentist', cat: 'clinic' },
  { ar: 'عيادة', tr: '3iyaade', en: 'clinic/office', cat: 'clinic' },
  { ar: 'موعد', tr: 'maw3id', en: 'appointment', cat: 'clinic' },
  { ar: 'ممرضة', tr: 'mumarriDa', en: 'nurse/assistant', cat: 'clinic' },
  { ar: 'كرسي الطبيب', tr: 'kursi l-Tabiib', en: 'dental chair', cat: 'clinic' },
  { ar: 'تأمين', tr: 'ta2miin', en: 'insurance', cat: 'clinic' },
  { ar: 'وصفة', tr: 'wasSfe', en: 'prescription', cat: 'clinic' },
  // teeth
  { ar: 'سنّ', tr: 'sinn', en: 'tooth', cat: 'teeth' },
  { ar: 'أسنان', tr: '2asnan', en: 'teeth', cat: 'teeth' },
  { ar: 'لثة', tr: 'lissé', en: 'gum(s)', cat: 'teeth' },
  { ar: 'عصب', tr: '3aSab', en: 'nerve', cat: 'teeth' },
  { ar: 'مينا', tr: 'miina', en: 'enamel', cat: 'teeth' },
  { ar: 'ضرس العقل', tr: 'Dirs l-3a2el', en: 'wisdom tooth', cat: 'teeth' },
  { ar: 'تسوس', tr: 'tasawwus', en: 'tooth decay/cavities', cat: 'teeth' },
  // procedures
  { ar: 'حشوة', tr: '7ashwé', en: 'filling', cat: 'procedures' },
  { ar: 'قلع', tr: '2ala3', en: 'extraction/pulling', cat: 'procedures' },
  { ar: 'تنظيف', tr: 'tanDiif', en: 'cleaning', cat: 'procedures' },
  { ar: 'تقويم', tr: 'ta2wiim', en: 'braces/orthodontics', cat: 'procedures' },
  { ar: 'تخدير', tr: 'takhdeer', en: 'anesthesia/numbing', cat: 'procedures' },
  { ar: 'حقنة', tr: '7u2ne', en: 'injection/shot', cat: 'procedures' },
  { ar: 'تاج', tr: 'taaj', en: 'crown (dental)', cat: 'procedures' },
  { ar: 'طقم', tr: 'Ta2m', en: 'dentures/set (of teeth)', cat: 'procedures' },
  // phrases
  { ar: 'وجعني سن', tr: 'waja3ni sinn', en: 'my tooth hurts', cat: 'phrases' },
  { ar: 'في حدا متوفر بكرا؟', tr: 'fi 7ada mitwaffer bukra?', en: 'is anyone available tomorrow?', cat: 'phrases' },
  { ar: 'بكيف كتير', tr: 'bkiif ktiir', en: 'it hurts a lot', cat: 'phrases' },
  { ar: 'شو صار؟', tr: 'shu Sar?', en: "what happened? / what's wrong?", cat: 'phrases' },
  { ar: 'لازم تقلعي', tr: 'laazem ta2la3a', en: 'it needs to be pulled', cat: 'phrases' },
  { ar: 'رجّعلي موعد', tr: 'rajja3li maw3id', en: 'reschedule my appointment', cat: 'phrases' },
];

const DNT_DRILLS = [
  { q: 'How do you say "tooth hurts" in Lebanese?', opts: ['waja3ni sinn','maw3id lazem','tanDiif ktiir','7ashwé jadide'], a: 0 },
  { q: 'طبيب أسنان means:', opts: ['pharmacist','dentist','nurse','surgeon'], a: 1 },
  { q: 'What is تسوس?', opts: ['crown','filling','tooth decay','cleaning'], a: 2 },
  { q: 'حشوة translates to:', opts: ['braces','injection','filling','extraction'], a: 2 },
  { q: 'How do you say "anesthesia" in Lebanese?', opts: ['7u2ne','takhdeer','ta2wiim','taaj'], a: 1 },
  { q: 'ضرس العقل means:', opts: ['front tooth','molar','wisdom tooth','baby tooth'], a: 2 },
  { q: 'قلع means:', opts: ['cleaning','extraction','filling','crown'], a: 1 },
  { q: 'What does تقويم refer to?', opts: ['dentures','braces/orthodontics','crown','cleaning'], a: 1 },
  { q: 'لثة means:', opts: ['nerve','enamel','gum','jaw'], a: 2 },
  { q: 'How do you ask if anyone is available tomorrow?', opts: ['shu Sar bukra?','fi 7ada mitwaffer bukra?','waja3ni sinn bukra','maw3id bukra ma fi'], a: 1 },
  { q: 'تاج in dental context means:', opts: ['injection','crown','dentures','filling'], a: 1 },
  { q: 'What is طقم?', opts: ['appointment','dentures/set of teeth','prescription','chair'], a: 1 },
  { q: 'عصب means:', opts: ['enamel','gum','nerve','tooth'], a: 2 },
  { q: 'تنظيف means:', opts: ['extraction','filling','cleaning','braces'], a: 2 },
  { q: 'How do you say "reschedule my appointment"?', opts: ['rajja3li maw3id','laazem ta2la3a','waja3ni sinn','bkiif ktiir'], a: 0 },
];

const DNT_TIPS = [
  '🦷 Lebanese people often say "sinneh" (سنّة) for a single tooth colloquially alongside the formal "sinn" (سنّ).',
  '💉 "بخدّرك" (bkhaddirak) = "I\'ll numb you" — dentists say this before the injection.',
  '😬 "بكيف" (bkiif) is the colloquial Lebanese for "it hurts/is painful" — from the root وجع.',
  '📅 Dental clinics in Lebanon often require a deposit (3arbuun عربون) for appointments.',
  '🩺 Many Lebanese dentists trained abroad (France, USA) — code-switching mid-procedure is common.',
  '💊 After extraction, you\'ll hear "7ki 3a sidi l-yimiin" (حكي عالصدي اليمين) — "bite on the right side" to stop bleeding.',
];
