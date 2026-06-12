// Run #369 — Lebanese Gym & Fitness Culture
// Categories: gym-vocabulary | sports-activities | fitness-phrases | body-wellness | expressions

const GYM_WORDS = [
  // gym-vocabulary
  { ar: 'جيم', tr: 'jiim', en: 'gym (loanword)', cat: 'gym-vocabulary' },
  { ar: 'تمرين', tr: 'tamriin', en: 'exercise / workout / drill', cat: 'gym-vocabulary' },
  { ar: 'دمبل', tr: 'dambel', en: 'dumbbell (loanword)', cat: 'gym-vocabulary' },
  { ar: 'حديد', tr: '7adiid', en: 'iron / weights (lifting iron)', cat: 'gym-vocabulary' },
  { ar: 'بروتين', tr: 'bruutiin', en: 'protein (supplement, loanword)', cat: 'gym-vocabulary' },
  { ar: 'كارديو', tr: 'kaardioo', en: 'cardio (loanword)', cat: 'gym-vocabulary' },
  { ar: 'تريدميل', tr: 'triidmiil', en: 'treadmill (loanword)', cat: 'gym-vocabulary' },
  { ar: 'سيت', tr: 'siit', en: 'set (workout set, loanword)', cat: 'gym-vocabulary' },
  { ar: 'ريب', tr: 'reeb', en: 'rep / repetition (loanword)', cat: 'gym-vocabulary' },
  { ar: 'عضلة', tr: '3aDale', en: 'muscle', cat: 'gym-vocabulary' },
  // sports-activities
  { ar: 'كرة القدم', tr: 'kurat il-2adam', en: 'football / soccer', cat: 'sports-activities' },
  { ar: 'سباحة', tr: 'sbaaa7a', en: 'swimming', cat: 'sports-activities' },
  { ar: 'ركض', tr: 'rkaDH', en: 'running / jogging', cat: 'sports-activities' },
  { ar: 'دراجة', tr: 'draaaje', en: 'bicycle', cat: 'sports-activities' },
  { ar: 'تنس', tr: 'tenis', en: 'tennis (loanword)', cat: 'sports-activities' },
  { ar: 'باسكيت', tr: 'baasket', en: 'basketball (loanword)', cat: 'sports-activities' },
  { ar: 'يوغا', tr: 'yooga', en: 'yoga (loanword)', cat: 'sports-activities' },
  { ar: 'بوكس', tr: 'boks', en: 'boxing (loanword)', cat: 'sports-activities' },
  { ar: 'زومبا', tr: 'zumba', en: 'Zumba fitness (loanword)', cat: 'sports-activities' },
  { ar: 'مشي', tr: 'mshi', en: 'walking / a walk', cat: 'sports-activities' },
  // fitness-phrases
  { ar: 'لازم تتحرك', tr: 'laazem tit7arrak', en: 'you need to move / get moving', cat: 'fitness-phrases' },
  { ar: 'عم باشتغل على جسمي', tr: '3am bashtghel 3a jasmi', en: 'I\'m working on my body / I\'m training', cat: 'fitness-phrases' },
  { ar: 'اشترك بالجيم', tr: 'ishtarek bil-jiim', en: 'subscribed to / joined the gym', cat: 'fitness-phrases' },
  { ar: 'تعبان من التمرين', tr: 'ta3baen min it-tamriin', en: 'tired from the workout', cat: 'fitness-phrases' },
  { ar: 'عم بتقل', tr: '3am bit2all', en: 'you\'re getting heavier / bulking up', cat: 'fitness-phrases' },
  // body-wellness
  { ar: 'رشيق', tr: 'rashiiq', en: 'slim / fit / agile', cat: 'body-wellness' },
  { ar: 'مفتول', tr: 'maftoul', en: 'muscular / ripped', cat: 'body-wellness' },
  { ar: 'ريجيم', tr: 'riijeem', en: 'diet (loanword)', cat: 'body-wellness' },
  { ar: 'كاوري', tr: 'kaawree', en: 'calorie (loanword)', cat: 'body-wellness' },
  { ar: 'صحة', tr: 'Sa77a', en: 'health / cheers / bless you', cat: 'body-wellness' },
  { ar: 'لياقة', tr: 'lyaa2a', en: 'fitness / physical condition', cat: 'body-wellness' },
  { ar: 'طاقة', tr: 'Taa2a', en: 'energy / power', cat: 'body-wellness' },
  { ar: 'استراحة', tr: 'istraaha', en: 'rest / break', cat: 'body-wellness' },
  // expressions
  { ar: 'روح شبّع حالك', tr: 'ruu7 shabb3 7aalak', en: 'go fill yourself up / treat yourself (after workout)', cat: 'expressions' },
  { ar: 'مش قادر أتحرك', tr: 'mish 2aadir it7arrak', en: 'I can\'t move (sore after gym)', cat: 'expressions' },
  { ar: 'عضلاتي تأوجعوني', tr: '3aDlaati t2awja3uuni', en: 'my muscles are killing me / sore', cat: 'expressions' },
  { ar: 'هيدا هوايتي', tr: 'heyda hwaayti', en: 'this is my hobby / sport', cat: 'expressions' },
  { ar: 'بدّي أنزّل وزن', tr: 'baddii inazzel wazen', en: 'I want to lose weight', cat: 'expressions' },
  { ar: 'لازم تلتزم', tr: 'laazem tiltezem', en: 'you need to commit / be consistent', cat: 'expressions' },
  { ar: 'عا حالك', tr: '3a 7aalak', en: 'by yourself / on your own (working out solo)', cat: 'expressions' },
];

const GYM_DRILLS = [
  {
    q: 'How do you say "I\'m working on my body / I\'m training" in Lebanese?',
    opts: ['3am bishtghel bil-beit', '3am bashtghel 3a jasmi', 'baddii riijeem', 'laazem istraaha'],
    correct: 1,
    note: '"3am bashtghel 3a jasmi" — literally "I\'m working on my body." A common gym-goer phrase heard in every Lebanese gym.'
  },
  {
    q: 'What does "maftoul" mean?',
    opts: ['tired', 'muscular / ripped', 'slim / fit', 'sore'],
    correct: 1,
    note: '"maftoul" (مفتول) — "twisted/coiled" → muscular/ripped. High compliment in Lebanese gym culture. "Hayda maftoul!" means "that guy is jacked!"'
  },
  {
    q: 'What is "7adiid" in the context of working out?',
    opts: ['protein supplement', 'cardio machine', 'iron / weights', 'a training set'],
    correct: 2,
    note: '"7adiid" (حديد) literally means "iron" but commonly refers to weight training. "Bneshel 7adiid" = "we lift iron" = we do weights.'
  },
  {
    q: 'How do you say "I want to lose weight" in Lebanese?',
    opts: ['baddii maftoul', 'baddii inazzel wazen', 'baddii riijeem kawiiye', 'baddii kaardioo bass'],
    correct: 1,
    note: '"baddii inazzel wazen" (بدّي أنزّل وزن) — using "inazzel" (to bring down) + "wazen" (weight). Very common phrase heard especially in January!'
  },
  {
    q: 'What does "rashiiq" mean?',
    opts: ['muscular', 'slim / fit / agile', 'heavy / bulky', 'tired'],
    correct: 1,
    note: '"rashiiq" (رشيق) means slim and fit. For women, "rshii2a" — a real compliment meaning graceful and in shape.'
  },
  {
    q: 'What does "3aDlaati t2awja3uuni" mean?',
    opts: ['my muscles grew a lot', 'I need more protein', 'my muscles are killing me / sore', 'I pulled a muscle'],
    correct: 2,
    note: '"3aDlaati t2awja3uuni" (عضلاتي تأوجعوني) — classic post-leg-day complaint. "T2awja3" = to cause pain/ache.'
  },
  {
    q: 'What is "riijeem"?',
    opts: ['a gym regime / schedule', 'diet (eating plan)', 'fitness class', 'a rest day'],
    correct: 1,
    note: '"riijeem" (ريجيم) — from French "régime" — means diet or eating restriction. "3am 3a riijeem" = "I\'m on a diet."'
  },
  {
    q: 'How do you say "you need to commit / be consistent"?',
    opts: ['laazem tit7arrak', 'laazem tiltezem', 'laazem tishrab bruutiin', 'laazem tishtarek'],
    correct: 1,
    note: '"laazem tiltezem" (لازم تلتزم) — the most common trainer advice. "Iltizaam" (commitment) is seen as the key to fitness progress.'
  },
  {
    q: 'What does "Sa77a" mean in a fitness context?',
    opts: ['a workout', 'protein', 'health / cheers (said when someone sneezes or drinks)', 'a gym membership'],
    correct: 2,
    note: '"Sa77a" (صحة) is multi-purpose: health, cheers when drinking, bless you when someone sneezes. In fitness: "Sa77a" after a tough workout = "to your health!"'
  },
  {
    q: 'What is "lyaa2a"?',
    opts: ['agility drill', 'fitness / physical condition', 'a training partner', 'rest day'],
    correct: 1,
    note: '"lyaa2a" (لياقة) means fitness level or physical condition. "3ndo lyaa2a 3aaliye" = "he has great fitness."'
  },
];

const GYM_TIPS = [
  'Lebanese gym culture is intense and social. People go to see AND be seen. Gyms in Beirut neighborhoods like Hamra, Achrafieh, and Jdeideh are packed in the evenings. Expect lots of mirrors, loud music, and very motivated people.',
  'Key compliment pattern: "maftoul" (ripped/muscular) for men, "rashiiq/rshii2a" (slim and fit) for women. Saying "3am btit7assan" (you\'re improving) is great encouragement.',
  'Diet is called "riijeem" (ريجيم, from French régime). When someone\'s on a diet, others often say "yii, laish? mish mhataaj/mhataaje!" (Why? You don\'t need it!). Refusing food is treated as almost offensive.',
  'Protein shakes are called simply "bruutiin" (بروتين). Supplement stores (ma7all il-bruutiin) are on every block in gym-dense areas. Whey, creatine, pre-workout — all referred to by English names.',
  'The verb "inazzel" (to bring down) is used for both losing weight ("inazzel wazen") and doing reps ("inazzel il-waze3" = lower the weight/load). "Irfa3" (to raise/lift) is the opposite for both contexts.',
];

const GYM_ABOUT = 'Lebanese gym culture is among the most vibrant in the Arab world. Influenced by American bodybuilding culture and French Mediterranean wellness traditions, Lebanese gyms combine serious training with social culture. AUB (American University of Beirut) students, Beirut professionals, and village youth all share a passion for fitness. The Lebanese ideal of looking "maftoul" (muscular) or "rashiiq" (slim and fit) is aspirational across genders. Understanding gym vocabulary helps you integrate into social fitness circles, understand everyday complaints after intense workouts, and navigate the uniquely Lebanese combination of rigorous exercise and indulgent food culture.';
