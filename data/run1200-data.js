// R1200 — NEW FEATURE: Lebanese Hospital & Emergency Room (hrm)

const HRM_WORDS = [
  { ar: 'مستشفى', tr: 'mstashfa', en: 'hospital' },
  { ar: 'طوارئ', tr: 'taware2', en: 'emergency / ER' },
  { ar: 'طبيب', tr: 'Tabib', en: 'doctor' },
  { ar: 'ممرضة', tr: 'mmardé', en: 'nurse (f)' },
  { ar: 'إسعاف', tr: 'is3af', en: 'ambulance' },
  { ar: 'عملية', tr: '3amaliyye', en: 'surgery / operation' },
  { ar: 'أشعة', tr: 'ash3a', en: 'X-ray / scan' },
  { ar: 'تحاليل', tr: 'ta7alil', en: 'lab tests / blood work' },
  { ar: 'دواء', tr: 'dawa', en: 'medicine / medication' },
  { ar: 'وجع', tr: 'waja3', en: 'pain / ache' },
  { ar: 'ضغط', tr: 'DaghT', en: 'blood pressure' },
  { ar: 'سكر', tr: 'sukar', en: 'blood sugar / diabetes' },
  { ar: 'غرفة', tr: 'ghorfe', en: 'room (hospital room)' },
  { ar: 'سرير', tr: 'srir', en: 'bed (hospital bed)' },
  { ar: 'تأمين', tr: 'ta2min', en: 'insurance' },
  { ar: 'فاتورة', tr: 'fatura', en: 'bill / invoice' },
  { ar: 'موعد', tr: 'maw3id', en: 'appointment' },
  { ar: 'إبرة', tr: 'ibre', en: 'injection / needle / IV' },
  { ar: 'جبس', tr: 'jibs', en: 'cast / plaster' },
  { ar: 'خياطة', tr: 'khiyate', en: 'stitches / sutures' },
];

const HRM_DRILLS = [
  { q: '"Taware2" means:', opts: ['Emergency / ER', 'Ambulance', 'Surgery', 'Lab tests'], ans: 0 },
  { q: '"Is3af" means:', opts: ['Ambulance', 'Injection', 'Doctor', 'Blood pressure'], ans: 0 },
  { q: '"Ta7alil" refers to:', opts: ['Lab tests / blood work', 'X-ray / scan', 'Medicine', 'Bill'], ans: 0 },
  { q: '"Waja3" means:', opts: ['Pain / ache', 'Blood sugar', 'Cast', 'Stitches'], ans: 0 },
  { q: '"Ta2min" means:', opts: ['Insurance', 'Appointment', 'Bill', 'Room'], ans: 0 },
  { q: '"Ibre" means:', opts: ['Injection / needle / IV', 'Cast / plaster', 'Stitches', 'Nurse'], ans: 0 },
  { q: '"3amaliyye" means:', opts: ['Surgery / operation', 'Emergency', 'Lab test', 'Medication'], ans: 0 },
  { q: '"Jibs" means:', opts: ['Cast / plaster', 'Stitches / sutures', 'X-ray', 'Bed'], ans: 0 },
];

const HRM_TIPS = [
  {
    title: 'Lebanese Hospital Reality',
    body: "Lebanon has excellent private hospitals — AUB Medical Center, Hotel-Dieu, Clemenceau Medical Center — but the system is chaotic and expensive. The ER (taware2) is often crowded, understaffed, and requires payment upfront or proof of ta2min (insurance). Without insurance, a single night in a hospital can cost thousands of dollars. It's common to hear \"ma fi dawa\" (no medication) due to the economic collapse.",
  },
  {
    title: 'Navigating the ER',
    body: "In a Lebanese ER, expect to negotiate. Nurses (mmardé/mmared) are overwhelmed but usually kind. You'll need ta7alil (blood work) and ash3a (X-rays) before seeing a senior doctor. Is3af (ambulance) response time varies wildly — in Beirut traffic, sometimes a taxi is faster. Always bring your 7ib il-dawa (medication card) and insurance papers. Cash is king since the financial crisis.",
  },
  {
    title: 'Useful Phrases at the Hospital',
    body: "Key phrases: \"3andi waja3 bi-\\_\\_\" (I have pain in\\_\\_), \"shi7 ma3i\" (I feel unwell), \"daghti 3ali\" (my blood pressure is high), \"biddna doktor\" (we need a doctor). For the bill: \"2addesh el-7isab?\" (how much is the bill?). Lebanese hospital staff often speak English or French, but knowing Arabic phrases goes a long way and shows respect.",
  },
  {
    title: 'Insurance & Payments',
    body: "Most Lebanese carry private insurance (ta2min) through their employer or family plan. State insurance (NSSF / Damanat) covers basics but reimbursement is slow. After 2019, many hospitals demand cash payment in USD or fresh dollars (lira fresh). It's common to see families negotiating fatura (bills) at the cashier. The phrase \"2alli ta2mino ma biyghaTTi\" (my insurance doesn't cover it) is unfortunately very familiar.",
  },
];
