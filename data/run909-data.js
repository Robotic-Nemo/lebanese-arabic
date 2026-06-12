// R909 — NEW FEATURE: Lebanese Baccalaureate Exam Culture (bac)

const BAC_WORDS = [
  { ar: 'البكالوريا', tr: 'el-bakaloorya', en: 'the Baccalaureate (Lebanese high school exit exam)' },
  { ar: 'امتحان رسمي', tr: 'imti7aan rasmii', en: 'official government exam' },
  { ar: 'دورة أولى', tr: 'dawra uula', en: 'first session (June exams)' },
  { ar: 'دورة تانية', tr: 'dawra taanye', en: 'second session (August resit exams)' },
  { ar: 'راسب', tr: 'raaasib', en: 'failed / flunked (the exam)' },
  { ar: 'ناجح', tr: 'naaji7', en: 'passed (the exam)' },
  { ar: 'علامة', tr: '3alaameh', en: 'grade / mark' },
  { ar: 'معدل', tr: 'mu3addal', en: 'average grade / GPA' },
  { ar: 'مادة', tr: 'maaade', en: 'subject / course' },
  { ar: 'تعليم رسمي', tr: 'ta3liim rasmii', en: 'official (government) curriculum' },
  { ar: 'تعليم خاص', tr: 'ta3liim khaaSS', en: 'private school curriculum' },
  { ar: 'دروس خصوصية', tr: 'duruus khuSuuSiyye', en: 'private tutoring lessons' },
  { ar: 'مدرّس خصوصي', tr: 'mudarris khuSuuSii', en: 'private tutor' },
  { ar: 'سكشن', tr: 'section', en: 'stream / section (sciences, humanities, etc.)' },
  { ar: 'علوم', tr: '3uluum', en: 'sciences (stream)' },
  { ar: 'إنسانيات', tr: 'insaaniyyaat', en: 'humanities / social sciences (stream)' },
  { ar: 'اقتصاد', tr: 'i2tiSaad', en: 'economics (stream)' },
  { ar: 'جامعة', tr: 'jaami3a', en: 'university' },
  { ar: 'مركز امتحانات', tr: 'markaz imti7aanaat', en: 'exam center / testing site' },
  { ar: 'ورقة الإجابة', tr: 'war2et el-ijaabe', en: 'answer sheet' },
  { ar: 'مراقب', tr: 'muraaqib', en: 'exam invigilator / proctor' },
  { ar: 'غش', tr: 'ghish', en: 'cheating (in the exam)' },
  { ar: 'ضغط', tr: 'Daght', en: 'pressure / stress' },
  { ar: 'نتايج', tr: 'ntaayij', en: 'results (exam results)' },
  { ar: 'وزارة التربية', tr: 'wizaaret el-tarbiye', en: 'Ministry of Education' },
  { ar: 'شهادة', tr: 'shahaade', en: 'certificate / diploma' },
  { ar: 'إذا رسبت', tr: 'iza rasibt', en: 'if you fail (common threat/fear)' },
  { ar: 'مبروك نجحت', tr: 'mabruuk nja7t', en: 'congratulations you passed!' }
];

const BAC_DRILLS = [
  { q: 'How do you say "the Baccalaureate"?', opts: ['el-imti7aan', 'el-bakaloorya', 'el-jaami3a', 'el-shahaade'], ans: 1 },
  { q: 'How do you say "you passed" (congratulation)?', opts: ['iza rasibt', 'raaasib', 'mabruuk nja7t', 'Daght'], ans: 2 },
  { q: 'What is "dawra taanye"?', opts: ['First session exams', 'Second session / resit exams', 'Private school', 'Economics stream'], ans: 1 },
  { q: 'How do you say "private tutoring"?', opts: ['ta3liim rasmii', 'muraaqib', 'duruus khuSuuSiyye', 'wizaaret el-tarbiye'], ans: 2 },
  { q: 'What does "raaasib" mean?', opts: ['Passed', 'Average grade', 'Failed', 'Results'], ans: 2 },
  { q: 'How do you say "cheating (in exam)"?', opts: ['ghish', 'Daght', '3alaameh', 'section'], ans: 0 },
  { q: 'How do you say "sciences stream"?', opts: ['insaaniyyaat', 'i2tiSaad', '3uluum', 'ta3liim khaaSS'], ans: 2 },
  { q: 'How do you say "exam results"?', opts: ['ntaayij', 'maaade', 'mu3addal', 'markaz'], ans: 0 },
  { q: 'How do you say "grade / mark"?', opts: ['dawra', '3alaameh', 'rasmii', 'muraaqib'], ans: 1 },
  { q: 'What is "mu3addal"?', opts: ['Subject / course', 'Private tutor', 'Average grade / GPA', 'Certificate'], ans: 2 },
  { q: 'How do you say "Ministry of Education"?', opts: ['markaz imti7aanaat', 'wizaaret el-tarbiye', 'war2et el-ijaabe', 'jaami3a'], ans: 1 },
  { q: 'How do you say "stream / section" (school track)?', opts: ['ghish', 'Daght', 'muraaqib', 'section'], ans: 3 },
  { q: 'How do you say "humanities stream"?', opts: ['3uluum', 'insaaniyyaat', 'i2tiSaad', 'ta3liim rasmii'], ans: 1 },
  { q: 'How do you say "if you fail"?', opts: ['mabruuk nja7t', 'dawra uula', 'iza rasibt', 'ntaayij'], ans: 2 },
  { q: 'What is "shahaade"?', opts: ['Exam proctor', 'Certificate / diploma', 'Answer sheet', 'Pressure'], ans: 1 },
  { q: 'How do you say "exam invigilator"?', opts: ['muraaqib', 'mudarris', 'mu3addal', 'maaade'], ans: 0 }
];

const BAC_TIPS = [
  { title: 'The Bac: Lebanon\'s National Stress Event', body: 'The bakaloorya (Lebanese Baccalaureate) is the high school exit exam that determines university admission. It\'s administered by the Lebanese Ministry of Education (wizaaret el-tarbiye). Every June, Lebanon collectively holds its breath — traffic near exam centers, families on WhatsApp, priests and sheikhs invoked. Parents say "el-bac" the same way they say "hareb el-bac" (the Bac war).' },
  { title: 'Two Sessions, Two Chances', body: 'Dawra uula (first session) runs in June. Those who fail get a second chance: dawra taanye in August. Failing dawra taanye means repeating the year. The August resit is said to be harder and the shame is immense — summers are dominated by cramming. "Ri7 3ala dawra taanye" (he went to the second session) carries social weight.' },
  { title: 'The Tutoring Economy', body: 'Duruus khuSuuSiyye (private tutoring) is a massive industry. Families spend fortunes on private tutors. Famous tutors in subjects like math or chemistry become local celebrities. "3indon mudarris khuSuuSii la kil maaade" (they have a private tutor for every subject) signals wealth and ambition. Schools often run their own paid evening tutoring sessions.' },
  { title: 'Streams & Sorting', body: 'Students choose a "section" (track): 3uluum (sciences), insaaniyyaat (humanities), i2tiSaad (economics/social sciences), or others. Sciences is highest-prestige. "Section 3uluum" signals future doctor or engineer. Switching from sciences to humanities is seen as academic failure. "Nazzaluu 3al-insaaniyyaat" (they moved him down to humanities) is code for "didn\'t make it in sciences."' },
  { title: 'Results Day Chaos', body: 'When ntaayij (results) are published — originally in newspapers, now online — Lebanon erupts. "Mabruuk nja7t!" texts flood WhatsApp. Neighbors fire guns in the air. Some families hold 7afle (party) immediately. Those who rasibuu (failed) go silent. A passing grade means a night of dabke in front of the house, zaghareet from the aunts, and sweets distributed to neighbors.' }
];
