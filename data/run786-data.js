// R786 — NEW FEATURE: Lebanese Arabic Immigration & Diaspora (imm)

const IMM_CATS = ['documents','travel','diaspora','phrases'];

const IMM_WORDS = [
  // documents
  { ar: 'جواز سفر', tr: 'jawwaz safar', en: 'passport', cat: 'documents' },
  { ar: 'فيزا', tr: 'viiza', en: 'visa', cat: 'documents' },
  { ar: 'إقامة', tr: '2i2ame', en: 'residency permit', cat: 'documents' },
  { ar: 'تصريح عمل', tr: 'taSrii7 3amal', en: 'work permit', cat: 'documents' },
  { ar: 'بطاقة إقامة', tr: 'bTa2et 2i2ame', en: 'residence card', cat: 'documents' },
  { ar: 'شهادة جنسية', tr: 'shahiide jinsiyye', en: 'nationality certificate', cat: 'documents' },
  { ar: 'لاجئ', tr: 'laaji2', en: 'refugee', cat: 'documents' },
  // travel
  { ar: 'مطار', tr: 'maTar', en: 'airport', cat: 'travel' },
  { ar: 'رحلة', tr: 'ri7le', en: 'trip/flight', cat: 'travel' },
  { ar: 'وطن', tr: 'waTan', en: 'homeland/country', cat: 'travel' },
  { ar: 'غربة', tr: 'ghurbe', en: 'living abroad / homesickness', cat: 'travel' },
  { ar: 'عودة', tr: '3awde', en: 'return/homecoming', cat: 'travel' },
  { ar: 'سفارة', tr: 'sifaare', en: 'embassy', cat: 'travel' },
  { ar: 'قنصلية', tr: '2unSuliyye', en: 'consulate', cat: 'travel' },
  // diaspora
  { ar: 'مغترب', tr: 'mughtareb', en: 'expatriate / Lebanese abroad', cat: 'diaspora' },
  { ar: 'حوالة', tr: '7awale', en: 'money transfer/remittance', cat: 'diaspora' },
  { ar: 'نوستالجيا', tr: 'nostalgia', en: 'nostalgia', cat: 'diaspora' },
  { ar: 'أبناء المهجر', tr: '2abna2 l-mahjar', en: 'children of the diaspora', cat: 'diaspora' },
  { ar: 'بلد الاغتراب', tr: 'balad l-ightiraab', en: 'country of emigration', cat: 'diaspora' },
  { ar: 'تحويل', tr: 'ta7wiil', en: 'wire transfer (money)', cat: 'diaspora' },
  { ar: 'جالية', tr: 'jaliye', en: 'community (expat community)', cat: 'diaspora' },
  // phrases
  { ar: 'رح سافر', tr: 'ra7 safer', en: "I'm going to travel/leave", cat: 'phrases' },
  { ar: 'شاقلي البال', tr: 'sha2li l-bal', en: "I'm worried/my mind is restless", cat: 'phrases' },
  { ar: 'بتوصلنا؟', tr: 'btuwSalna?', en: 'will you send (it) to us?', cat: 'phrases' },
  { ar: 'ما في شغل', tr: 'ma fi shughl', en: "there's no work", cat: 'phrases' },
  { ar: 'بتوصل خبر', tr: 'btuwSal khabar', en: 'send news / keep in touch', cat: 'phrases' },
  { ar: 'غاب عن بالي', tr: 'ghaab 3an baali', en: "I couldn't stop thinking about it (lit: left my mind)", cat: 'phrases' },
  { ar: 'مشتاقلك', tr: 'mushtaa2lak', en: 'I miss you', cat: 'phrases' },
];

const IMM_DRILLS = [
  { q: 'How do you say "passport" in Lebanese?', opts: ['viiza','jawwaz safar','2i2ame','taSrii7 3amal'], a: 1 },
  { q: 'غربة means:', opts: ['homeland','passport','living abroad/homesickness','return'], a: 2 },
  { q: 'What is مغترب?', opts: ['refugee','tourist','expatriate/Lebanese abroad','visa holder'], a: 2 },
  { q: 'حوالة refers to:', opts: ['flight','money transfer/remittance','work permit','residency'], a: 1 },
  { q: 'How do you say "I miss you" in Lebanese?', opts: ['ra7 safer','sha2li l-bal','mushtaa2lak','ghaab 3an baali'], a: 2 },
  { q: 'وطن means:', opts: ['embassy','visa','consulate','homeland/country'], a: 3 },
  { q: 'سفارة translates to:', opts: ['consulate','airport','embassy','residency card'], a: 2 },
  { q: 'What does ما في شغل mean?', opts: ["I'm traveling","there's no work","send news","I'm worried"], a: 1 },
  { q: 'عودة means:', opts: ['departure','visa','return/homecoming','work permit'], a: 2 },
  { q: 'جالية refers to:', opts: ['flight','refugee','wire transfer','expat community'], a: 3 },
  { q: 'How do you say "residency permit"?', opts: ['viiza','jawwaz safar','2i2ame','laaji2'], a: 2 },
  { q: 'أبناء المهجر means:', opts: ['airport staff','embassy workers','children of the diaspora','travel agents'], a: 2 },
  { q: 'رح سافر means:', opts: ["I miss you","I'm going to travel/leave","send news","I'm worried"], a: 1 },
  { q: 'What is a لاجئ?', opts: ['expat','tourist','work permit holder','refugee'], a: 3 },
  { q: 'مشتاقلك is said when:', opts: ['arriving at airport','getting a visa','missing someone','sending money'], a: 2 },
];

const IMM_TIPS = [
  '✈️ Lebanon has one of the largest diasporas relative to its size — over 14 million Lebanese abroad vs ~6 million in Lebanon.',
  '💸 "7awale" (حوالة) remittances are a lifeline — Lebanon receives billions USD/year from مغتربين (mughtarebiin).',
  '🌍 The Lebanese diaspora spans Brazil, USA, Australia, West Africa, Gulf states — each community developed its own dialect blend.',
  '😢 "Ghurbe" (غربة) carries deep emotional weight — it means both the physical state of living abroad AND the longing/homesickness that comes with it.',
  '🛬 "3awde" (عودة) — the return — is often bittersweet. Lebanese say "3awde 3al waTan" (returning to the homeland) with complex feelings.',
  '📞 "Btuwsal khabar" (بتوصل خبر) literally "send news" is a departure phrase meaning keep in touch — said instead of "goodbye" to travelers.',
];
