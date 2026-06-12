// R1104 — NEW FEATURE: Lebanese Baby & Newborn Traditions (bby)
const BBY_WORDS = [
  { ar: 'مبروك المولود', tr: 'mabrouk l mawlood', en: 'congratulations on the newborn' },
  { ar: 'مولود', tr: 'mawlood', en: 'newborn / newborn baby' },
  { ar: 'ولادة', tr: 'wledeh', en: 'childbirth / delivery' },
  { ar: 'كربة', tr: 'karbe', en: 'labor pain / contraction' },
  { ar: 'سبعية', tr: 'sab3iyyeh', en: 'the 7th-day celebration for a newborn' },
  { ar: 'عقيقة', tr: '3aqiiqeh', en: 'feast celebrating a newborn (7 days after birth)' },
  { ar: 'زغلوطة', tr: 'zaghlooTa', en: 'ululation of joy' },
  { ar: 'حليب وسكر', tr: '7aliib w sukkar', en: 'milk and sugar distributed to visitors after birth' },
  { ar: 'حارس', tr: '7ares', en: 'evil-eye charm / blue bead to protect baby' },
  { ar: 'اسورة عين', tr: 'eswiret 3ayn', en: 'evil-eye bracelet for baby' },
  { ar: 'تفه تفه', tr: 'tfe7 tfe7', en: 'ritual spitting sound to ward off evil eye' },
  { ar: 'الله يحميه', tr: 'alla y7miio', en: 'may God protect him' },
  { ar: 'يكبر بعيونك', tr: 'yekbar bi 3younak', en: 'may he/she grow before your eyes (blessing)' },
  { ar: 'يعيش ويطول', tr: 'y3ish w yTool', en: 'may he/she live long (blessing for baby)' },
  { ar: 'أم هنية', tr: 'em haniyye', en: 'blessed/happy mother (address after birth)' },
  { ar: 'تسلمي يا ست', tr: 'tsallame ya sett', en: 'bless you (congratulations to the mother)' },
  { ar: 'الحمدلله عالسلامة', tr: 'l7amdilla 3as salame', en: 'thank God for the safe delivery' },
  { ar: 'دار للعالمة', tr: 'dar lil 3alame', en: 'house is open to all visitors (new-baby custom)' },
  { ar: 'ع اسم مين؟', tr: '3a isem min?', en: 'who is the baby named after?' },
  { ar: 'شبه مين؟', tr: 'shabah min?', en: 'who does the baby look like?' },
  { ar: 'شو اسمه / اسما؟', tr: 'shu ismon / isma?', en: "what's his/her name?" },
  { ar: 'بالشهر التاسع', tr: 'besh-shahr l tase3', en: 'in the 9th month / due' },
  { ar: 'بخير وبصحة', tr: 'b7eir w bse77a', en: 'in health and wellbeing (birth blessing)' },
  { ar: 'تهنئة', tr: 'tehni2a', en: 'congratulations visit / well-wishing' },
  { ar: 'الله يكملك ياه', tr: 'alla ykammelak yyeh', en: 'may God complete your joy with him (blessing to parent)' },
];

const BBY_DRILLS = [
  { q: 'What is a "sab3iyyeh"?', opts: ['7th-day celebration for newborn','Wedding party','Birthday party','Name-giving ceremony'], ans: 0 },
  { q: '"mabrouk l mawlood" means?', opts: ['How is the baby?','Congratulations on the newborn','When is the due date?','May God protect him'], ans: 1 },
  { q: 'What is "zaghlooTa"?', opts: ['A prayer','A food served at birth','Ululation of joy','An evil-eye charm'], ans: 2 },
  { q: '"7ares" refers to?', opts: ['Evil-eye charm / blue bead','A birth prayer','The 7th-day feast','Milk and sugar drink'], ans: 0 },
  { q: '"tfe7 tfe7" is used to?', opts: ['Congratulate the mother','Ward off the evil eye','Name the baby','Welcome visitors'], ans: 1 },
  { q: '"yekbar bi 3younak" is a blessing meaning?', opts: ['Stay healthy','May he/she grow before your eyes','Long life','God protect him'], ans: 1 },
  { q: 'What is "3aqiiqeh"?', opts: ['Feast for newborn around day 7','The 40-day ceremony','Evil-eye removal ritual','The naming ceremony'], ans: 0 },
  { q: '"dar lil 3alame" means the house is?', opts: ['Under construction','Only for family','Open to all visitors','Closed for 40 days'], ans: 2 },
];

const BBY_TIPS = [
  'After a birth, Lebanese families host open-door visiting for days — 7aliib w sukkar (milk with sugar) is served to all who come to congratulate.',
  'The "3aqiiqeh" involves sacrificing an animal as thanks to God — traditionally one sheep for a girl, two for a boy — and the meat is shared with neighbors and the poor.',
  'Evil eye (3ayn) protection is taken seriously: babies wear blue-bead bracelets, and admirers say "tfe7 tfe7" or "masha2 alla" to deflect their own gaze.',
  'Babies are often named after grandparents — "3a isem sitto/jiddo" (named after grandma/grandpa) is a deeply held tradition that honors the elder.',
  '"Em haniyye" (blessed mother) is how people address a new mother — elevating her status is a warm Lebanese tradition that persists in both Christian and Muslim communities.',
];
