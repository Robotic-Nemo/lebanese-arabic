// R1005 — NEW FEATURE: Lebanese Pharmacy & Self-Medication Culture (phx)

const PHX_WORDS = [
  { ar: 'صيدلية', tr: 'Saydliye', en: 'pharmacy', cat: 'basics' },
  { ar: 'دواء', tr: 'dawa', en: 'medicine / medication', cat: 'basics' },
  { ar: 'وصفة طبية', tr: 'waS7a Tabbiye', en: 'medical prescription', cat: 'basics' },
  { ar: 'قرص', tr: '2ars', en: 'tablet / pill', cat: 'basics' },
  { ar: 'كبسولة', tr: 'kabsule', en: 'capsule', cat: 'basics' },
  { ar: 'شراب', tr: 'sharab', en: 'syrup / liquid medicine', cat: 'basics' },
  { ar: 'حقنة', tr: '7a2ne', en: 'injection / shot', cat: 'basics' },
  { ar: 'مرهم', tr: 'mar7am', en: 'ointment / cream', cat: 'basics' },
  { ar: 'لصقة', tr: 'laS2a', en: 'bandage / plaster', cat: 'basics' },
  { ar: 'صيدلاني', tr: 'Saydlani', en: 'pharmacist (male)', cat: 'people' },
  { ar: 'صيدلانية', tr: 'Saydlaniyye', en: 'pharmacist (female)', cat: 'people' },
  { ar: 'مضاد حيوي', tr: 'mudadd 7yawi', en: 'antibiotic', cat: 'medicines' },
  { ar: 'مسكّن', tr: 'musakkin', en: 'painkiller', cat: 'medicines' },
  { ar: 'ضاغط دم', tr: 'DagheT damm', en: 'blood pressure medication', cat: 'medicines' },
  { ar: 'فيتامين', tr: 'vitamin', en: 'vitamin supplement', cat: 'medicines' },
  { ar: 'حبة منع الحمل', tr: '7abbet man3 il-7amal', en: 'contraceptive pill', cat: 'medicines' },
  { ar: 'زكام', tr: 'zukkam', en: 'cold / flu', cat: 'ailments' },
  { ar: 'كحّة', tr: 'ku77a', en: 'cough', cat: 'ailments' },
  { ar: 'حرارة', tr: '7arare', en: 'fever / temperature', cat: 'ailments' },
  { ar: 'إسهال', tr: 'is7al', en: 'diarrhea', cat: 'ailments' },
  { ar: 'إمساك', tr: 'imsak', en: 'constipation', cat: 'ailments' },
  { ar: 'ألم بطن', tr: '2alam batn', en: 'stomach ache', cat: 'ailments' },
  { ar: 'بدي دوا بدون وصفة', tr: 'biddi dawa bidoun waS7a', en: 'I want medicine without a prescription', cat: 'culture' },
  { ar: 'جنريك', tr: 'jinrik', en: 'generic (brand-free medicine)', cat: 'culture' },
  { ar: 'على مدار الساعة', tr: '3a madar il-sa3a', en: 'open 24 hours (pharmacy)', cat: 'culture' },
];

const PHX_CATS = ['basics','people','medicines','ailments','culture'];

const PHX_DRILLS = [
  { q: 'How do you say "pharmacy" in Lebanese Arabic?', opts: ['Saydliye','dawa','mar7am','waS7a Tabbiye'], ans: 0 },
  { q: 'What is "dawa" (دواء)?', opts: ['injection','pharmacy','medicine / medication','prescription'], ans: 2 },
  { q: 'How do you say "antibiotic"?', opts: ['musakkin','mudadd 7yawi','vitamin','kabsule'], ans: 1 },
  { q: 'What does "ku77a" (كحّة) mean?', opts: ['fever','diarrhea','cough','cold'], ans: 2 },
  { q: 'How do you say "painkiller"?', opts: ['mar7am','waS7a Tabbiye','mudadd 7yawi','musakkin'], ans: 3 },
  { q: 'What is "7arare" (حرارة)?', opts: ['cough','fever / temperature','stomach ache','constipation'], ans: 1 },
  { q: 'How do you say "pharmacist" (male)?', opts: ['Saydlaniyye','Saydlani','doktor','mari2'], ans: 1 },
  { q: 'What does "biddi dawa bidoun waS7a" mean?', opts: ['I need a prescription','the medicine is expensive','I want medicine without a prescription','the pharmacy is closed'], ans: 2 },
  { q: 'What is "jinrik" (جنريك)?', opts: ['brand name','vitamin','generic medicine','capsule'], ans: 2 },
  { q: 'How do you say "injection / shot"?', opts: ['laS2a','7a2ne','2ars','sharab'], ans: 1 },
  { q: 'What does "imsak" (إمساك) mean?', opts: ['diarrhea','constipation','cold','fever'], ans: 1 },
  { q: 'How do you say "ointment / cream"?', opts: ['kabsule','mudadd 7yawi','mar7am','2ars'], ans: 2 },
];

const PHX_TIPS = [
  { title: '💊 Pharmacist as Doctor', body: 'In Lebanon, people often skip the doctor and go straight to the "Saydlani" (pharmacist). Describe your symptoms, get your pills. Antibiotics, hormones, and strong painkillers are dispensed without prescription ("bidoun waS7a") — something that would be illegal in many countries.' },
  { title: '🏪 Corner Pharmacy Culture', body: 'Almost every neighborhood has a Saydliye open late. During power cuts and the financial crisis, pharmacies often ran out of basic medicines. Families began stockpiling essentials, and the pharmacist became a community lifeline — knowing who needs what and when.' },
  { title: '💰 Generic vs Brand', body: 'The "jinrik" (generic) vs brand-name medicine debate is common. With Lebanon\'s economic collapse, many patients switched to generics to afford their prescriptions. The pharmacist often guides the choice, sometimes based on personal relationships with reps.' },
  { title: '🌙 24-Hour Pharmacies', body: '"3a madar il-sa3a" (24-hour) signs appear on rotating duty pharmacies. In Lebanon, a rotating system means one or two pharmacies per area are open overnight. WhatsApp groups share which pharmacy is on duty each night — more reliable than any app.' },
];
