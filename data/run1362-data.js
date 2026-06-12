// R1362 — NEW FEATURE: Lebanese Afternoon Rest & Qaylule Culture (qyl)
const QYL_WORDS = [
  { ar: 'qaylule', tr: 'afternoon nap', en: 'the Lebanese tradition of resting after the midday meal' },
  { ar: 'nawme', tr: 'nap / sleep', en: 'a brief sleep, especially after lunch' },
  { ar: 'ghadeh', tr: 'lunch', en: 'the midday meal — the main meal triggering qaylule' },
  { ar: 'mfarraq', tr: 'woken up groggy', en: 'feeling disoriented after being woken from a nap' },
  { ar: 'raye7 3a nawme', tr: 'going for a nap', en: 'announcing you are taking your afternoon rest' },
  { ar: 'kell ynayyem', tr: 'everyone\'s napping', en: 'the quiet midday hour when the whole street sleeps' },
  { ar: 'sa3et l-qaylule', tr: 'nap time', en: 'the sacred 1–3 pm window for afternoon rest in Lebanon' },
  { ar: 'dafye', tr: 'warm and drowsy', en: 'the pleasantly warm, sleepy feeling after a heavy lunch' },
  { ar: 'ikhda 7aqqak', tr: 'take your rest', en: 'telling someone they deserve (and should take) a nap' },
  { ar: 'sha3ab', tr: 'sleepy / drowsy', en: 'adjective for feeling heavy and ready to sleep after eating' },
  { ar: 'tkhayyal', tr: 'doze off', en: 'to drift in and out of sleep without fully napping' },
  { ar: 'waqt moul', tr: 'dead hour / off-peak time', en: 'the quiet midday lull when shops close and streets empty' },
  { ar: '2es-sa3a tleta', tr: 'by three o\'clock', en: 'the typical end of qaylule — life resumes at 3pm' },
  { ar: 'sirir', tr: 'bed / sofa bed', en: 'the surface of choice for the midday nap' },
  { ar: 'nazzef l-mokhkh', tr: 'clear the head', en: 'the restorative feeling after a good qaylule' },
  { ar: 'halak ma bi nawwim', tr: 'too worked up to sleep', en: 'can\'t nap despite being tired — too much on your mind' },
  { ar: 'tawla 2al-ghada', tr: 'after-lunch rest', en: 'the unspoken rule that the hour after lunch is rest time' },
  { ar: 'hajiz dawle', tr: 'government checkpoint', en: 'jokingly — Lebanese nap rules feel like government orders' },
  { ar: 'jarras l-bab', tr: 'ring the doorbell', en: 'mortal sin — ringing the bell during qaylule hour' },
  { ar: 'sa7a w 3afe', tr: 'rest well / good nap', en: 'the blessing said to someone waking from their qaylule' }
];
const QYL_DRILLS = [
  { q: 'What is "qaylule"?', opts: ['a heavy lunch', 'afternoon nap', 'evening tea', 'sleepy feeling'], a: 1 },
  { q: '"Mfarraq" means?', opts: ['fully rested', 'woken up groggy', 'deep asleep', 'too tired to nap'], a: 1 },
  { q: 'What do you say to someone finishing a nap?', opts: ['raye7 3a nawme', 'sha3ab', 'sa7a w 3afe', 'tkhayyal'], a: 2 },
  { q: '"Sha3ab" describes?', opts: ['the nap itself', 'sleepy / drowsy feeling', 'waking up', 'the sofa'], a: 1 },
  { q: 'What is "waqt moul"?', opts: ['lunch time', 'quiet midday lull', 'evening break', 'morning rest'], a: 1 },
  { q: '"Kell ynayyem" means?', opts: ['everyone\'s eating', 'nap is over', 'everyone\'s napping', 'time to wake up'], a: 2 },
  { q: 'What is "nazzef l-mokhkh"?', opts: ['clear the head after nap', 'fall asleep fast', 'snore loudly', 'groggy waking'], a: 0 },
  { q: '"Jarras l-bab" during qaylule is?', opts: ['encouraged', 'a tradition', 'a mortal sin', 'normal'], a: 2 }
];
const QYL_TIPS = [
  'Qaylule is a deeply embedded Lebanese institution — shops close, phones go silent, and even the most urban Beirutis find a couch from 1–3pm. Disturbing someone\'s qaylule is a social offense.',
  'The trigger is always the ghadeh (lunch): the heavier the Lebanese spread — kibbeh, rice, stews — the deeper the qaylule. It\'s considered medically necessary by Lebanese grandmothers.',
  'Lebanese summer heat intensifies qaylule culture. In mountain villages and coastal towns alike, the midday silence is total — it\'s both a physical need and a social rhythm.',
  'International visitors are often surprised to find restaurants, pharmacies, and government offices closed mid-afternoon. "Sa3et l-qaylule" (nap o\'clock) is a real scheduling concept in Lebanon.'
];
