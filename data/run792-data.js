// R792 — NEW FEATURE: Lebanese Superstitions & Evil Eye (nzr)

const NZR_CATS = ['evil_eye','omens','protection','phrases'];

const NZR_WORDS = [
  // evil_eye
  { a: 'العين', tr: 'l-3een', en: 'the evil eye', cat: 'evil_eye' },
  { a: 'نظرة', tr: 'naDHra', en: 'a look / a glance (that causes harm)', cat: 'evil_eye' },
  { a: 'حسد', tr: '7asad', en: 'envy / jealousy', cat: 'evil_eye' },
  { a: 'مشنطق', tr: 'mishna22a2', en: 'jinxed / under the evil eye', cat: 'evil_eye' },
  { a: 'عيّن', tr: '3ayyan', en: 'gave the evil eye (to someone)', cat: 'evil_eye' },
  { a: 'شيلتلو العين', tr: 'sheelitlo l-3een', en: 'I lifted the evil eye from him', cat: 'evil_eye' },
  { a: 'بكّي', tr: 'bakki', en: 'make someone cry (to break the evil eye)', cat: 'evil_eye' },
  // omens
  { a: 'فأل', tr: 'fa2l', en: 'omen / sign', cat: 'omens' },
  { a: 'فأل حلو', tr: 'fa2l 7elo', en: 'good omen', cat: 'omens' },
  { a: 'فأل وحش', tr: 'fa2l we7esh', en: 'bad omen', cat: 'omens' },
  { a: 'خميس', tr: 'khamiis', en: 'Thursday (considered lucky)', cat: 'omens' },
  { a: 'نجمة', tr: 'najme', en: 'star / destiny', cat: 'omens' },
  { a: 'حظ', tr: '7aDH', en: 'luck / fate', cat: 'omens' },
  // protection
  { a: 'خمسة', tr: 'khamse', en: 'the hand of Fatima (protective amulet)', cat: 'protection' },
  { a: 'تعويذة', tr: 'ta3wiize', en: 'amulet / charm', cat: 'protection' },
  { a: 'خرزة زرقاء', tr: 'kharze zar2a', en: 'blue bead (against evil eye)', cat: 'protection' },
  { a: 'ما شاء الله', tr: 'ma sha2 allah', en: "masha'Allah (protective praise)", cat: 'protection' },
  { a: 'الله يحميك', tr: 'alla y7miik', en: 'God protect you', cat: 'protection' },
  { a: 'بالله عليك', tr: 'billahi 3leek', en: 'by God (earnest plea)', cat: 'protection' },
  { a: 'حرز', tr: '7irz', en: 'protective charm / amulet', cat: 'protection' },
  // phrases
  { a: 'ما شاء الله عليك', tr: 'ma sha2 alla 3leek', en: "masha'Allah on you (admiring + protecting)", cat: 'phrases' },
  { a: 'الله يستر', tr: 'alla ystur', en: 'may God conceal / protect', cat: 'phrases' },
  { a: 'بعيد الشر', tr: 'b3iid l-sharr', en: 'evil be far (touch wood)', cat: 'phrases' },
  { a: 'الحسد ما بيساوي شي', tr: 'l-7asad ma bisaawi shi', en: 'envy is worth nothing', cat: 'phrases' },
  { a: 'عين الحسود فيها عود', tr: '3een l-7asuud fiha 3uud', en: 'the eye of the envious has a stick in it (proverb)', cat: 'phrases' },
  { a: 'روح شوف حالك', tr: 'ruu7 shuuf 7aalak', en: 'go look at yourself (deflect evil eye)', cat: 'phrases' },
  { a: 'مكتوب', tr: 'maktuub', en: 'written / fated (it is what it is)', cat: 'phrases' },
  { a: 'نصيب', tr: 'naSiib', en: 'fate / destined share', cat: 'phrases' }
];

const NZR_DRILLS = [
  { q: 'What is "the evil eye" in Lebanese?', a: 'l-3een', hint: 'literally "the eye"' },
  { q: '"Masha\'Allah" is used to...', a: 'protect from evil eye', hint: 'said when admiring something' },
  { q: 'What is the "khamse"?', a: 'hand of Fatima amulet', hint: '5 fingers protect you' },
  { q: 'What does "7asad" mean?', a: 'envy / jealousy', hint: 'the emotion behind 3een' },
  { q: 'How do you say "good omen"?', a: 'fa2l 7elo', hint: 'fa2l = omen, 7elo = sweet/good' },
  { q: 'What is a "ta3wiize"?', a: 'amulet / charm', hint: 'worn for protection' },
  { q: '"Mishna22a2" means someone is...', a: 'jinxed / under evil eye', hint: 'bad luck following them' },
  { q: 'What color bead wards off evil?', a: 'blue (zar2a)', hint: 'kharze zar2a' },
  { q: '"B3iid l-sharr" means...', a: 'evil be far / touch wood', hint: 'said to deflect bad luck' },
  { q: 'What is "maktuub"?', a: 'written / fated', hint: 'from ktb = to write' },
  { q: '"3ayyan" means he...', a: 'gave the evil eye', hint: 'from 3een = eye' },
  { q: 'What day is considered lucky in Lebanon?', a: 'Thursday (khamiis)', hint: 'also day before Friday' },
  { q: '"Alla ystur" means...', a: 'may God conceal / protect', hint: 'said to ward off harm' },
  { q: 'What is "naSiib"?', a: "fate / one's destined share", hint: 'used resignedly: hada naSiibo' },
  { q: '"3een l-7asuud fiha 3uud" is a...', a: 'proverb about envy', hint: 'the envious one hurts themselves' }
];

const NZR_TIPS = [
  'Say "ma sha2 alla" when complimenting someone to avoid giving them the evil eye — skipping it is considered rude.',
  '"Khamse" amulets and blue beads hang in cars, homes, and businesses all over Lebanon for protection.',
  'If a baby cries suddenly for no reason, Lebanese elders say someone gave it "l-3een" (the evil eye).',
  '"Maktuub" and "naSiib" express fatalistic acceptance — what\'s written is written, resist it and you\'re fighting fate.',
  'Thursday is considered a lucky day for starting new ventures, signing contracts, or travelling.',
  '"B3iid l-sharr" (evil be far) is said reflexively like "touch wood" whenever something bad is mentioned.'
];
