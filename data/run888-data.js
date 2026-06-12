// R888 — NEW FEATURE: Lebanese Fitness & Health Culture (fit)

const FIT_CATS = ['gym', 'exercises', 'nutrition', 'phrases'];

const FIT_WORDS = [
  // gym
  { a: 'صالة رياضية', tr: 'saalet riyaaDiye', en: 'gym / sports hall', cat: 'gym' },
  { a: 'أثقال', tr: '2atqaal', en: 'weights', cat: 'gym' },
  { a: 'دمبل', tr: 'dumbbell', en: 'dumbbell', cat: 'gym' },
  { a: 'حديد', tr: '7adid', en: 'iron / barbell (slang)', cat: 'gym' },
  { a: 'تردميل', tr: 'treadmill', en: 'treadmill', cat: 'gym' },
  { a: 'بنش', tr: 'bench', en: 'bench', cat: 'gym' },
  { a: 'اشتراك', tr: 'ishtraak', en: 'membership / subscription', cat: 'gym' },
  // exercises
  { a: 'بنش بريس', tr: 'bench press', en: 'bench press', cat: 'exercises' },
  { a: 'سكوات', tr: 'squat', en: 'squat', cat: 'exercises' },
  { a: 'كارديو', tr: 'cardio', en: 'cardio', cat: 'exercises' },
  { a: 'عضلات', tr: '3adalet', en: 'muscles', cat: 'exercises' },
  { a: 'سيت', tr: 'set', en: 'set (in training)', cat: 'exercises' },
  { a: 'ريبس', tr: 'reps', en: 'repetitions (reps)', cat: 'exercises' },
  { a: 'تمرين', tr: 'tamreen', en: 'exercise / workout', cat: 'exercises' },
  // nutrition
  { a: 'بروتين', tr: 'protein', en: 'protein', cat: 'nutrition' },
  { a: 'كرياتين', tr: 'creatine', en: 'creatine', cat: 'nutrition' },
  { a: 'تخين', tr: 'tkheen', en: 'bulking / gaining size', cat: 'nutrition' },
  { a: 'نشيف', tr: 'nshif', en: 'cutting / lean', cat: 'nutrition' },
  { a: 'ماس', tr: 'mass', en: 'muscle mass', cat: 'nutrition' },
  { a: 'كالوريز', tr: 'calories', en: 'calories', cat: 'nutrition' },
  { a: 'سوبليمنت', tr: 'supplement', en: 'supplement', cat: 'nutrition' },
  // phrases
  { a: 'وين الصالة؟', tr: 'ween il-saale?', en: 'where is the gym?', cat: 'phrases' },
  { a: 'شو برنامجك؟', tr: 'shu barnaamjak?', en: "what's your workout program?", cat: 'phrases' },
  { a: 'عطيني سبوت', tr: '3Tini spot', en: 'give me a spot (assist)', cat: 'phrases' },
  { a: 'مضخوخ', tr: 'madkhookh', en: 'pumped up / jacked', cat: 'phrases' },
  { a: 'عم بحرق', tr: '3am b7re2', en: "I'm burning (feel the burn)", cat: 'phrases' },
  { a: 'خد الباقي', tr: 'khod il-ba2i', en: 'take the rest (rest time)', cat: 'phrases' },
  { a: 'نحنح', tr: 'na7na7', en: 'warm up', cat: 'phrases' },
];

const FIT_DRILLS = [
  { q: 'How do you say "gym" in Lebanese?', opts: ['saalet riyaaDiye', '3adalet', 'tamreen', 'ishtraak'], ans: 0 },
  { q: 'What does "2atqaal" mean?', opts: ['cardio', 'weights', 'muscles', 'bench'], ans: 1 },
  { q: '"membership / subscription" → ?', opts: ['ishtraak', 'set', '7adid', 'treadmill'], ans: 0 },
  { q: 'What is "3adalet"?', opts: ['exercises', 'muscles', 'reps', 'sets'], ans: 1 },
  { q: '"bulking / gaining size" → ?', opts: ['nshif', 'tkheen', 'mass', 'protein'], ans: 1 },
  { q: 'What does "nshif" mean?', opts: ['pumped up', 'cutting / lean', 'warm up', 'burning'], ans: 1 },
  { q: '"give me a spot" → ?', opts: ['shu barnaamjak?', '3Tini spot', 'madkhookh', 'na7na7'], ans: 1 },
  { q: 'What does "madkhookh" mean?', opts: ['tired', 'pumped up / jacked', 'lean', 'sore'], ans: 1 },
  { q: '"feel the burn" phrase → ?', opts: ['3am b7re2', 'khod il-ba2i', 'na7na7', '3am b7re2'], ans: 0 },
  { q: '"warm up" → ?', opts: ['tamreen', 'na7na7', 'cardio', 'reps'], ans: 1 },
  { q: 'What is "tamreen"?', opts: ['exercise / workout', 'supplement', 'membership', 'bench'], ans: 0 },
  { q: '"what\'s your program?" → ?', opts: ['ween il-saale?', 'shu barnaamjak?', '3Tini spot', 'khod il-ba2i'], ans: 1 },
  { q: '"muscle mass" → ?', opts: ['creatine', 'calories', 'mass', 'protein'], ans: 2 },
  { q: 'What does "7adid" mean in gym slang?', opts: ['iron / barbell', 'cardio machine', 'bench', 'dumbbell'], ans: 0 },
  { q: '"take the rest (rest time)" → ?', opts: ['na7na7', 'khod il-ba2i', '3am b7re2', 'shu barnaamjak?'], ans: 1 },
  { q: 'What is "set" in Lebanese gym talk?', opts: ['one exercise', 'a set in training', 'rest period', 'supplement'], ans: 1 },
];

const FIT_TIPS = [
  { title: 'Gym Culture in Lebanon', body: 'Lebanon has a serious gym culture. Gyms in Beirut are often upscale social spaces. People dress well, take mirror selfies, and greet everyone. Going to the gym is a social event as much as a workout — you catch up on gossip between sets.' },
  { title: 'The "7adid" Obsession', body: 'Lebanese gym-goers call the barbell "7adid" (iron). You\'ll hear "chou, 3am tishtaghel 3a l-7adid?" (working the iron?) as a compliment. Building a strong physique is highly respected — especially for young men heading to a family gathering.' },
  { title: 'Supplement Culture', body: 'Protein powder, creatine, and other supplements are widely used. Dedicated supplement shops are everywhere. Friends share advice on "shu protein bte2khod?" (what protein do you take?). Some gyms sell supplements at reception.' },
  { title: 'Tkheen vs. Nshif', body: '"Tkheen" (bulking) and "nshif" (cutting) are standard gym vocabulary. Lebanese guys often want to bulk for winter and cut before summer beach season. The summer physique reveal at Jounieh bay is taken seriously.' },
  { title: 'Spotting & Brotherhood', body: 'Asking for a spot — "3Tini spot" — builds gym friendships. Lebanese men are generous spotters and give unsolicited advice freely. Don\'t be surprised if a stranger corrects your squat form mid-set. It\'s meant kindly.' },
  { title: 'Classes & Trainers', body: 'Fitness classes (Zumba, spinning, CrossFit) are popular especially among Lebanese women. Personal trainers ("personal" — borrowed word) are status symbols. Many Lebanese follow fitness influencers and bring YouTube routines to the gym.' },
];
