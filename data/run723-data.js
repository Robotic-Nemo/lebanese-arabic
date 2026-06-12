// R723 — NEW FEATURE: Lebanese University & Campus Life (unv)
const UNV_CATS = [
  { id:'academic',  label:'📚 Academic' },
  { id:'campus',    label:'🏛️ Campus Life' },
  { id:'student',   label:'🎓 Student Life' },
  { id:'phrases',   label:'💬 Phrases' },
];

const UNV_WORDS = [
  // academic
  { ar:'جامعة',        tr:'jaam3a',            en:'university',              cat:'academic' },
  { ar:'كلية',         tr:'kulliyye',          en:'faculty/college',         cat:'academic' },
  { ar:'شهادة',        tr:'shahaade',          en:'degree/certificate',      cat:'academic' },
  { ar:'دكتوراه',      tr:'duktoora',          en:'doctorate/PhD',           cat:'academic' },
  { ar:'ماجستير',      tr:'maajisteer',        en:'master\'s degree',        cat:'academic' },
  { ar:'أستاذ',        tr:'ustaaz',            en:'professor',               cat:'academic' },
  { ar:'محاضرة',       tr:'mu7aDara',          en:'lecture',                 cat:'academic' },
  { ar:'امتحان',       tr:'imti7aan',          en:'exam',                    cat:'academic' },
  // campus life
  { ar:'حرم جامعي',    tr:'7aram jaam3i',      en:'campus',                  cat:'campus' },
  { ar:'مكتبة',        tr:'maktabe',           en:'library',                 cat:'campus' },
  { ar:'كافيتيريا',    tr:'kafiteeria',        en:'cafeteria',               cat:'campus' },
  { ar:'ملعب',         tr:'mal3ab',            en:'sports field/stadium',    cat:'campus' },
  { ar:'سكن طلاب',     tr:'saken Tullaab',     en:'student dormitory',       cat:'campus' },
  { ar:'مختبر',        tr:'mukhtabar',         en:'laboratory',              cat:'campus' },
  { ar:'قاعة',         tr:'2aa3a',             en:'hall/auditorium',         cat:'campus' },
  // student life
  { ar:'طالب',         tr:'Taalib',            en:'student (m)',             cat:'student' },
  { ar:'طالبة',        tr:'Taalibe',           en:'student (f)',             cat:'student' },
  { ar:'تسجيل',        tr:'tasjiil',           en:'registration/enrollment', cat:'student' },
  { ar:'مادة',         tr:'maadde',            en:'subject/course',          cat:'student' },
  { ar:'معدل',         tr:'ma3addal',          en:'GPA/average',             cat:'student' },
  { ar:'رسالة',        tr:'risaale',           en:'thesis/letter',           cat:'student' },
  { ar:'منحة',         tr:'man7a',             en:'scholarship/grant',       cat:'student' },
  // phrases
  { ar:'عم تدرس شو؟',          tr:'3am tdrus shu?',           en:'what are you studying?',    cat:'phrases' },
  { ar:'شو تخصصك؟',            tr:'shu takhaSoSak?',          en:'what\'s your major?',        cat:'phrases' },
  { ar:'في امتحان بكرا',        tr:'fii imti7aan bukra',       en:'there\'s an exam tomorrow', cat:'phrases' },
  { ar:'رسبت بالمادة',          tr:'rasabt bel-maadde',        en:'I failed the subject',      cat:'phrases' },
  { ar:'الجامعة الأمريكية',     tr:'el-jaam3a el-amriikiyye', en:'AUB (American University)', cat:'phrases' },
  { ar:'رفع المعدل',            tr:'rafa3 el-ma3addal',        en:'raise the GPA',             cat:'phrases' },
];

const UNV_DRILLS = [
  { q:'How do you say "university"?', opts:['jaam3a','kulliyye','shahaade','mu7aDara'], ans:0 },
  { q:'"Imti7aan" means:', opts:['exam','lecture','degree','subject'], ans:0 },
  { q:'What is "ustaaz"?', opts:['professor','student','dean','lecturer'], ans:0 },
  { q:'"Shahaade" means:', opts:['degree/certificate','exam','lecture','course'], ans:0 },
  { q:'How do you say "library"?', opts:['maktabe','kafiteeria','2aa3a','mukhtabar'], ans:0 },
  { q:'"Taalib" means:', opts:['student (m)','professor','dean','lecturer'], ans:0 },
  { q:'What is "maadde"?', opts:['subject/course','exam','degree','grade'], ans:0 },
  { q:'"Man7a" means:', opts:['scholarship/grant','exam','degree','course'], ans:0 },
  { q:'How do you say "campus"?', opts:['7aram jaam3i','maktabe','kulliyye','2aa3a'], ans:0 },
  { q:'"Ma3addal" means:', opts:['GPA/average','grade','exam','pass'], ans:0 },
  { q:'What is "mu7aDara"?', opts:['lecture','exam','seminar','course'], ans:0 },
  { q:'"Maajisteer" means:', opts:['master\'s degree','doctorate','bachelor','diploma'], ans:0 },
  { q:'How do you say "what are you studying"?', opts:['3am tdrus shu?','shu takhaSoSak?','fii imti7aan bukra','rafa3 el-ma3addal'], ans:0 },
  { q:'"Tasjiil" means:', opts:['registration/enrollment','exam','course','graduation'], ans:0 },
  { q:'How do you say "there\'s an exam tomorrow"?', opts:['fii imti7aan bukra','rasabt bel-maadde','rafa3 el-ma3addal','3am tdrus shu?'], ans:0 },
];

const UNV_TIPS = [
  { title:'Lebanon\'s world-class universities', body:'"Jaam3a" (جامعة) = university — Lebanon has one of the highest rates of university enrollment in the Arab world. AUB (American University of Beirut, 1866) and USJ (Université Saint-Joseph, 1875) are internationally renowned. LAU (Lebanese American University) and BAU (Beirut Arab University) are also major institutions. "El-jaam3a el-amriikiyye" = AUB — the gold standard in Lebanese higher education.' },
  { title:'Academic system', body:'"Kulliyye" (كلية) = faculty/college — Lebanese universities follow both American (credit-hour) and French (licence/master/doctorat) systems depending on the institution. "Shahaade" = degree — a university degree carries massive social prestige. "Maajisteer" = master\'s. "Duktoora" = PhD. "Ustaaz" (أستاذ) = professor — also used as a respectful form of address.' },
  { title:'Student culture', body:'"Taalib/Taalibe" = student (m/f) — Lebanese students are known for academic intensity and social activism. Student politics at AUB and other universities mirror national sectarian divisions. "Man7a" (منحة) = scholarship — highly sought due to economic pressures. "Tasjiil" = registration. "Ma3addal" (معدل) = GPA — discussed openly; a high GPA is a source of family pride.' },
  { title:'Campus life', body:'"7aram jaam3i" (حرم جامعي) = campus — AUB\'s campus overlooking the Mediterranean is considered one of the most beautiful in the world. "Maktabe" = library — the Jafet Library at AUB is a landmark. "Kafiteeria" = cafeteria — campus cafes and restaurants are social hubs. "Mukhtabar" = lab. "Saken Tullaab" = dormitory — many students commute from home due to family culture.' },
  { title:'Exams & pressure', body:'"Imti7aan" (امتحان) = exam — exam season is treated like a national crisis. "Rasabt bel-maadde" = I failed the subject — a devastating social admission. "Rafa3 el-ma3addal" = raise the GPA — constant pressure from families. "Maadde" = subject. Students in Lebanon often pursue medicine, engineering, or business — professions valued for economic migration.' },
  { title:'University phrases', body:'"3am tdrus shu?" = what are you studying? — first question after names. "Shu takhaSoSak?" = what\'s your major? — determines social positioning. "Fii imti7aan bukra" = exam tomorrow — universal student panic phrase. "Risaale" (رسالة) = thesis — writing a risaale is a rite of passage. Lebanese graduates often leave: "brain drain" is a major national concern.' },
];
