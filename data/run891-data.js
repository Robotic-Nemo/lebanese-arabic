// R891 — NEW FEATURE: Lebanese Compliments & Social Flattery (flt)

const FLT_CATS = ['appearance', 'cooking', 'home', 'blessings'];

const FLT_WORDS = [
  // appearance
  { a: 'يسلم إيدك', tr: 'yislam idayk', en: 'bless your hands (said to artisans/cooks)', cat: 'appearance' },
  { a: 'عيونكن', tr: '3uyounkon', en: 'by your eyes (you\'re too kind)', cat: 'appearance' },
  { a: 'كتير حلو/حلوي', tr: 'ktir 7elo / ktir 7elwe', en: 'very handsome / very beautiful', cat: 'appearance' },
  { a: 'ما شاء الله', tr: 'ma sha2 alla', en: 'mashallah (admiring without evil eye)', cat: 'appearance' },
  { a: 'بدي عيونك', tr: 'biddi 3uyounak', en: 'I want your eyes (you have beautiful eyes)', cat: 'appearance' },
  { a: 'حلو كتير', tr: '7elo ktir', en: 'so handsome', cat: 'appearance' },
  { a: 'شو حلوي هيدي', tr: 'shu 7elwe haydi', en: 'how beautiful she is', cat: 'appearance' },
  // cooking
  { a: 'الله يخليكي', tr: 'alla ykhalliki', en: 'may God keep you (said to a woman who cooked)', cat: 'cooking' },
  { a: 'صحتين وعافية', tr: 'sa7tayn w 3aafye', en: 'double health (bon appétit / great cooking)', cat: 'cooking' },
  { a: 'عالعافية', tr: '3al3aafye', en: 'to your health (said after eating)', cat: 'cooking' },
  { a: 'يسلم إيدك', tr: 'yislam idayk', en: 'bless your hands (compliment to the cook)', cat: 'cooking' },
  { a: 'تقبر مرتك', tr: 'ti2bor marto', en: 'may your wife bury you (said to a good host)', cat: 'cooking' },
  { a: 'دايماً تحت أمرتكن', tr: 'daymen ta7t amretkon', en: 'always at your service (humble response)', cat: 'cooking' },
  { a: 'هنيئاً', tr: 'haniian', en: 'enjoy it / may it be wholesome', cat: 'cooking' },
  // home
  { a: 'دار الكرم', tr: 'dar il-karam', en: 'house of generosity (complimenting a home)', cat: 'home' },
  { a: 'مرحبا بأهل البيت', tr: 'mar7aba b-ahl il-beit', en: 'welcome to the household', cat: 'home' },
  { a: 'عقبال الإدفا', tr: '3a2bal il-2idfa', en: 'may it always be warm (said to new home)', cat: 'home' },
  { a: 'الله يبارك', tr: 'alla ybarek', en: 'God bless it (said of a home/purchase)', cat: 'home' },
  { a: 'بيتكن عامر', tr: 'beitkon 3amer', en: 'may your home be full of life', cat: 'home' },
  { a: 'مليان نعمة', tr: 'malyaan ni3me', en: 'full of blessings', cat: 'home' },
  { a: 'تسلم الإيدين', tr: 'tislam il-idein', en: 'bless both hands (compliment on decoration)', cat: 'home' },
  // blessings
  { a: 'الله يخليك', tr: 'alla ykhallik', en: 'may God keep you / you\'re too kind', cat: 'blessings' },
  { a: 'كتّر خيرك', tr: 'kattar kheirak', en: 'may your goodness increase', cat: 'blessings' },
  { a: 'يعطيك العافية', tr: 'ya3Tik il-3aafye', en: 'may God give you health (thanks for work)', cat: 'blessings' },
  { a: 'الله يوفقك', tr: 'alla ywaffe2ak', en: 'may God grant you success', cat: 'blessings' },
  { a: 'يرحم والديك', tr: 'yir7am waldayk', en: 'may God have mercy on your parents', cat: 'blessings' },
  { a: 'عيشة هنية', tr: '3ishe haniyye', en: 'a life of comfort (wish for someone)', cat: 'blessings' },
  { a: 'نعم فيك', tr: 'ni3m fiik', en: 'what a blessing you are', cat: 'blessings' },
];

const FLT_DRILLS = [
  { q: 'What does "yislam idayk" mean?', opts: ['bless your eyes', 'bless your hands', 'you are beautiful', 'thank you'], ans: 1 },
  { q: '"mashallah" (admiring without evil eye) → ?', opts: ['alla ybarek', 'ma sha2 alla', '3uyounkon', 'haniian'], ans: 1 },
  { q: 'How do you compliment cooking in Lebanese?', opts: ['sa7tayn w 3aafye', 'mar7aba b-ahl il-beit', 'beitkon 3amer', '3a2bal il-2idfa'], ans: 0 },
  { q: '"may your goodness increase" → ?', opts: ['alla ykhallik', 'kattar kheirak', 'ya3Tik il-3aafye', 'ni3m fiik'], ans: 1 },
  { q: 'What does "3uyounkon" mean?', opts: ['beautiful eyes', 'by your eyes / you\'re too kind', 'I want your eyes', 'look at you'], ans: 1 },
  { q: '"may God give you health" → ?', opts: ['alla ywaffe2ak', 'ya3Tik il-3aafye', 'alla ykhallik', 'alla ybarek'], ans: 1 },
  { q: 'What is said to a new home?', opts: ['beitkon 3amer', '3a2bal il-2idfa', 'dar il-karam', 'alla ybarek'], ans: 1 },
  { q: '"house of generosity" → ?', opts: ['dar il-karam', 'mar7aba b-ahl il-beit', 'beitkon 3amer', 'mlyaan ni3me'], ans: 0 },
  { q: '"may your home be full of life" → ?', opts: ['alla ybarek', 'beitkon 3amer', 'tislam il-idein', '3al3aafye'], ans: 1 },
  { q: 'What does "sa7tayn w 3aafye" mean?', opts: ['enjoy your meal', 'double health (great cooking)', 'God bless you', 'to your health'], ans: 1 },
  { q: '"may God keep you" → ?', opts: ['kattar kheirak', 'alla ykhallik', 'yir7am waldayk', 'alla ywaffe2ak'], ans: 1 },
  { q: 'What is "3al3aafye"?', opts: ['to your health (after eating)', 'bless your hands', 'welcome', 'mashallah'], ans: 0 },
  { q: '"may God have mercy on your parents" → ?', opts: ['alla ykhallik', 'yir7am waldayk', 'ni3m fiik', 'alla ybarek'], ans: 1 },
  { q: 'What does "haniian" mean?', opts: ['congratulations', 'enjoy it / may it be wholesome', 'welcome', 'thank you'], ans: 1 },
  { q: '"what a blessing you are" → ?', opts: ['kattar kheirak', '3ishe haniyye', 'ni3m fiik', 'ma sha2 alla'], ans: 2 },
  { q: '"bless both hands" (said of decoration) → ?', opts: ['yislam idayk', 'tislam il-idein', 'alla ybarek', 'ya3Tik il-3aafye'], ans: 1 },
];

const FLT_TIPS = [
  { title: 'The Art of Lebanese Flattery', body: 'Lebanese compliments are elaborate and sincere. Saying "ma sha2 alla" (mashallah) when admiring something is essential — it wards off the evil eye. Neglecting it can be seen as inviting bad luck to the person you\'re complimenting.' },
  { title: '"Yislam Idayk" — Bless Your Hands', body: '"Yislam idayk" is one of the most used Lebanese compliments. Said to anyone who made something with their hands — a cook, a seamstress, a builder. The response is often "3uyounkon" (by your eyes) — deflecting the compliment back graciously.' },
  { title: 'Complimenting Food', body: 'After a Lebanese meal, you\'re expected to compliment the cook. "Sa7tayn w 3aafye" (double health), "yislam idayki" (bless your hands — to a woman), and "alla ykhalliki" (may God keep you) are standard. Saying nothing after eating is considered rude.' },
  { title: 'Blessing a New Home', body: 'When visiting a new home, say "3a2bal il-2idfa" (may it always be warm) or "alla ybarek" (God bless it). Lebanese hosts respond with "beitkon 3amer" (may your home be full of life) — turning the compliment back to the visitor.' },
  { title: '"Ya3Tik il-3aafye" — For Workers', body: '"Ya3Tik il-3aafye" (may God give you health) is said to someone who is working or has done a task. Like saying "good work." The correct response is "alla y3afik" (may God give you health too). Used constantly with tradesmen, workers, and helpers.' },
  { title: 'Deflecting Compliments', body: 'Lebanese culture values modesty in receiving compliments. The proper response to "ktir 7elo" (very handsome) is not "thank you" but "3uyounak" (your eyes) — meaning "you see beauty because of your own beautiful eyes." It\'s a graceful deflection.' },
];
