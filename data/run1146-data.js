// R1146 — NEW FEATURE: Lebanese Bawwab & Building Doorman Culture (bwb)

const BWB_WORDS = [
  { ar: 'بوّاب', tr: 'bawwab', en: 'doorman / building superintendent' },
  { ar: 'عمارة', tr: '3imara', en: 'apartment building' },
  { ar: 'مفتاح', tr: 'mfta7', en: 'key' },
  { ar: 'باب', tr: 'bab', en: 'door / gate' },
  { ar: 'كراج', tr: 'karaj', en: 'garage / parking area' },
  { ar: 'سلّم', tr: 'sallam', en: 'staircase' },
  { ar: 'مصعد', tr: 'mas3ad', en: 'elevator' },
  { ar: 'طابق', tr: 'tabiq', en: 'floor / storey' },
  { ar: 'شقّة', tr: 'sha2a', en: 'apartment / flat' },
  { ar: 'صاحب البيت', tr: 'sa7eb l-bet', en: 'landlord / building owner' },
  { ar: 'إيجار', tr: 'ijar', en: 'rent' },
  { ar: 'جارة / جار', tr: 'jara / jar', en: 'neighbor (f/m)' },
  { ar: 'طرد', tr: 'tard', en: 'package / parcel' },
  { ar: 'جرس', tr: 'jaras', en: 'doorbell' },
  { ar: 'صندوق بريد', tr: 'sanduq bared', en: 'mailbox' },
  { ar: 'مولّد', tr: 'mwalled', en: 'generator' },
  { ar: 'تنظيف', tr: 'tanzeef', en: 'cleaning' },
  { ar: 'حارس', tr: '7ares', en: 'guard / watchman' },
  { ar: 'عيديّة', tr: '3idiyye', en: 'holiday tip / bonus gift' },
  { ar: 'بقشيش', tr: 'ba2sheesh', en: 'tip / gratuity' },
];

const BWB_DRILLS = [
  {
    q: 'How do you say "doorman/building superintendent" in Lebanese?',
    opts: ['7ares', 'bawwab', 'jar', 'sa7eb l-bet'],
    ans: 1
  },
  {
    q: 'What does "sha2a" mean?',
    opts: ['staircase', 'apartment / flat', 'elevator', 'key'],
    ans: 1
  },
  {
    q: 'How do you say "elevator" in Lebanese Arabic?',
    opts: ['sallam', 'bab', 'mas3ad', 'jaras'],
    ans: 2
  },
  {
    q: 'What is "ba2sheesh"?',
    opts: ['rent', 'mailbox', 'key', 'tip / gratuity'],
    ans: 3
  },
  {
    q: '"3idiyye" means:',
    opts: ['holiday tip / bonus gift', 'generator', 'package', 'neighbor'],
    ans: 0
  },
  {
    q: 'How do you say "staircase" in Lebanese?',
    opts: ['tabiq', 'mas3ad', 'sallam', 'karaj'],
    ans: 2
  },
  {
    q: 'What does "mwalled" mean?',
    opts: ['cleaning', 'generator', 'guard', 'elevator'],
    ans: 1
  },
  {
    q: '"sanduq bared" means:',
    opts: ['doorbell', 'garage', 'mailbox', 'floor'],
    ans: 2
  },
];

const BWB_TIPS = [
  'The bawwab is a central figure in Lebanese apartment building life — they handle packages, keys, and act as informal building security.',
  'Always give the bawwab an 3idiyye (holiday tip) at Eid and Christmas — it\'s a strong cultural expectation in Lebanese society.',
  'The bawwab often lives on the ground floor or in a small room near the entrance (3ind l-bab).',
  'In Lebanon, the bawwab often knows everything happening in the building — think of them as an unofficial community hub.',
];
