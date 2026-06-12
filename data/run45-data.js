// Run #45 — Dialogue Completion Challenge
// Backup pool of plausible Lebanese conversational lines used as distractors
// when CONVERSATIONS doesn't have enough comparable turns to fill 4 MCQ
// options. Each entry stays within everyday register so the wrong answers
// feel real, not silly.
const DC_FILLER_LINES = [
  { ar:'أهلاً وسهلاً', tr:'ahla w-sahla', en:'Welcome' },
  { ar:'إن شاء الله', tr:'inshalla', en:'God willing' },
  { ar:'بعد إذنك', tr:'ba3d iznak', en:'With your permission' },
  { ar:'يعطيك العافية', tr:'ya3tik el-3afye', en:'May God give you health' },
  { ar:'ما في مشكلة', tr:'ma fi mishkle', en:'No problem' },
  { ar:'كيف الصحة؟', tr:'kif el-saHHa?', en:'How is your health?' },
  { ar:'الله يعطيك الصحة', tr:'allah ya3tik el-saHHa', en:'God give you health' },
  { ar:'تكرم عينك', tr:'tikram 3aynak', en:'At your service (lit. honor your eye)' },
  { ar:'بالخدمة', tr:'bil-khedme', en:'At your service' },
  { ar:'صحتين', tr:'saHtayn', en:'Bon appétit / good health' },
  { ar:'يلا، خلصنا', tr:'yalla, khalasna', en:'Come on, we\'re done' },
  { ar:'شو رأيك؟', tr:'shu ra2yak?', en:'What do you think?' },
  { ar:'منيح كتير', tr:'mneh ktir', en:'Very good' },
  { ar:'مش معقول', tr:'mish ma32ul', en:'Unbelievable' },
  { ar:'بدّي فكر شوي', tr:'baddi fakker shway', en:'I want to think a bit' },
  { ar:'متل ما بدّك', tr:'metl ma baddak', en:'As you wish' },
  { ar:'ما عندي وقت', tr:'ma 3andi wa2t', en:'I don\'t have time' },
  { ar:'هلق بجي', tr:'halla2 beji', en:'I\'ll come now' },
  { ar:'ضلّ هون شوي', tr:'Dall hon shway', en:'Stay here a bit' },
  { ar:'بعدين منحكي', tr:'ba3dayn mneHke', en:'We\'ll talk later' },
  { ar:'حلّيت السؤال؟', tr:'Hallayt el-su2el?', en:'Did you solve the question?' },
  { ar:'فهمت قصدك', tr:'fhimt asdak', en:'I got what you mean' },
  { ar:'متاكد؟', tr:'mit2akkad?', en:'Are you sure?' },
  { ar:'لازم نروح', tr:'lazim nruH', en:'We need to go' },
  { ar:'خلّيني شوف', tr:'khallini shuf', en:'Let me see' },
  { ar:'فيك تعيد؟', tr:'fik t3id?', en:'Can you repeat?' },
  { ar:'بحكي شوي عربي', tr:'beHke shway 3arabi', en:'I speak a little Arabic' },
  { ar:'شو القصة؟', tr:'shu el-2issa?', en:'What\'s the story?' },
  { ar:'لاحقاً منشوف', tr:'laHi2an mnshuf', en:'We\'ll see later' },
  { ar:'الله يحميك', tr:'allah yiHmik', en:'God protect you' }
];

// Hand-picked "hard mode" challenges where the correct line and the
// distractors share a topic, so the user can't guess by topic alone — they
// must read the preceding context. Each entry references a CONVERSATIONS
// id and the index of the line to hide.
const DC_HARD_CHALLENGES = [
  { conv:'cafe',        lineIdx: 3, theme:'sweetness reply' },
  { conv:'cafe',        lineIdx: 6, theme:'price quote' },
  { conv:'taxi',        lineIdx: 4, theme:'fare' },
  { conv:'taxi',        lineIdx: 7, theme:'closing instruction' },
  { conv:'meeting',     lineIdx: 2, theme:'name request' },
  { conv:'meeting',     lineIdx: 5, theme:'origin reply' },
  { conv:'supermarket', lineIdx: 2, theme:'aisle direction' },
  { conv:'supermarket', lineIdx: 6, theme:'price quote' },
  { conv:'directions',  lineIdx: 3, theme:'distance reply' }
];
