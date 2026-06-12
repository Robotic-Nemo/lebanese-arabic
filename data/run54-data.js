// Run #54 — Reverse Translation Trainer (RT)
// User sees English, types Lebanese Arabizi. Production-side recall drill.
// Matching is fuzzy: accepts alternate spellings listed per-item + Levenshtein ≤ 1.

const RT_BANK = [
  // ── Greetings & politeness (1-star) ──
  { en:"hello", tr:"marhaba", ar:"مرحبا", alts:["mar7aba","marhabaa","marahba"], diff:1, cat:"greeting" },
  { en:"goodbye", tr:"bkhatrak", ar:"بخاطرك", alts:["bkhatrek","b-khatrak","bi khatrak"], diff:1, cat:"greeting" },
  { en:"good morning", tr:"sabah el kheir", ar:"صباح الخير", alts:["saba7 el kheir","sabah elkher","saba7 elkheir"], diff:1, cat:"greeting" },
  { en:"good evening", tr:"masa el kheir", ar:"مسا الخير", alts:["masa elkheir","masa el kher","masa' el kheir"], diff:1, cat:"greeting" },
  { en:"thank you", tr:"shukran", ar:"شكرا", alts:["chokran","choukran","shokran"], diff:1, cat:"polite" },
  { en:"you're welcome", tr:"3afwan", ar:"عفوا", alts:["afwan","a3fwan"], diff:1, cat:"polite" },
  { en:"please (to a man)", tr:"min fadlak", ar:"من فضلك", alts:["min fadlek","minfadlak"], diff:1, cat:"polite" },
  { en:"please (to a woman)", tr:"min fadlik", ar:"من فضلك", alts:["min fadlek","minfadlik"], diff:1, cat:"polite" },
  { en:"excuse me / sorry", tr:"3an iznak", ar:"عن اذنك", alts:["3an iznek","an iznak","3aniznak"], diff:2, cat:"polite" },
  { en:"I'm sorry", tr:"ana asef", ar:"انا اسف", alts:["ana aasef","ana asif"], diff:1, cat:"polite" },

  // ── Self-introduction (1-star) ──
  { en:"my name is", tr:"ismi", ar:"اسمي", alts:["esmi","ismy"], diff:1, cat:"self" },
  { en:"what is your name? (to a man)", tr:"shu ismak", ar:"شو اسمك", alts:["chou ismak","shou ismak","shu esmak"], diff:2, cat:"self" },
  { en:"how are you? (to a man)", tr:"kifak", ar:"كيفك", alts:["keefak","kif ak"], diff:1, cat:"greeting" },
  { en:"how are you? (to a woman)", tr:"kifik", ar:"كيفك", alts:["keefek","kifek","kif ik"], diff:1, cat:"greeting" },
  { en:"I'm fine", tr:"mnih", ar:"منيح", alts:["mni7","mneeh","mniih"], diff:1, cat:"greeting" },
  { en:"fine, thank God", tr:"mnih el hamdellah", ar:"منيح الحمدلله", alts:["mni7 el 7amdellah","mnih alhamdellah"], diff:2, cat:"greeting" },
  { en:"I am Lebanese (m)", tr:"ana libnene", ar:"انا لبناني", alts:["ana lubnani","ana libnani"], diff:2, cat:"self" },
  { en:"I don't understand", tr:"mish fahem", ar:"مش فاهم", alts:["mish faahem","mishfahem","mich fahem"], diff:1, cat:"self" },

  // ── Survival (2-star) ──
  { en:"yes", tr:"eh", ar:"اي", alts:["e","aywa","na3am"], diff:1, cat:"basic" },
  { en:"no", tr:"la", ar:"لا", alts:["laa","laaa"], diff:1, cat:"basic" },
  { en:"maybe", tr:"yemken", ar:"يمكن", alts:["yumkin","yimken"], diff:1, cat:"basic" },
  { en:"where is the bathroom?", tr:"wen el hammam", ar:"وين الحمام", alts:["wein el 7ammam","wen el 7ammam","wein elhammam"], diff:2, cat:"survival" },
  { en:"how much?", tr:"bkam", ar:"بكم", alts:["b kam","bkamm","b-kam"], diff:1, cat:"shopping" },
  { en:"too expensive", tr:"ghale ktir", ar:"غالي كتير", alts:["ghalee ktir","ghali ktir","ghaly kter"], diff:2, cat:"shopping" },
  { en:"I want", tr:"baddi", ar:"بدي", alts:["bade","bedde","beddi"], diff:1, cat:"need" },
  { en:"I don't want", tr:"ma baddi", ar:"ما بدي", alts:["mabaddi","ma bedde"], diff:1, cat:"need" },
  { en:"I need", tr:"lezemne", ar:"لازمني", alts:["lazemne","lazemni","lezemni"], diff:2, cat:"need" },
  { en:"help!", tr:"sa3idne", ar:"ساعدني", alts:["saa3idne","saaedne","sa3idni"], diff:2, cat:"survival" },
  { en:"I'm lost", tr:"ana dayi3", ar:"انا ضايع", alts:["ana dayee3","ana day3","ana daayi3"], diff:2, cat:"survival" },

  // ── Daily / everyday (2-star) ──
  { en:"today", tr:"el yom", ar:"اليوم", alts:["elyom","elyum","el youm"], diff:1, cat:"time" },
  { en:"tomorrow", tr:"bukra", ar:"بكرا", alts:["bokra","bokraa"], diff:1, cat:"time" },
  { en:"yesterday", tr:"mberi7", ar:"مبارح", alts:["mbeeri7","mbari7","mbeereh"], diff:2, cat:"time" },
  { en:"now", tr:"hala2", ar:"هلق", alts:["halla2","halla'","hala'"], diff:1, cat:"time" },
  { en:"later", tr:"ba3den", ar:"بعدين", alts:["baaden","ba3deen","baadein"], diff:1, cat:"time" },
  { en:"coffee please", tr:"ahwe min fadlak", ar:"قهوة من فضلك", alts:["ahweh min fadlak","2ahwe min fadlak","qahwe min fadlak"], diff:2, cat:"food" },
  { en:"water", tr:"mai", ar:"مي", alts:["mayy","may","mayeh"], diff:1, cat:"food" },
  { en:"bread", tr:"khebez", ar:"خبز", alts:["khobez","khobz","khibez"], diff:1, cat:"food" },
  { en:"very good", tr:"ktir mnih", ar:"كتير منيح", alts:["ktir mni7","kteer mnih","kter mnih"], diff:1, cat:"basic" },
  { en:"not bad", tr:"mish battal", ar:"مش بطال", alts:["mich battal","mish bataal","mish batal"], diff:2, cat:"basic" },

  // ── Verbs 1st person (2-star) ──
  { en:"I go", tr:"bruh", ar:"بروح", alts:["broo7","bro7","brouh"], diff:2, cat:"verb" },
  { en:"I come", tr:"bije", ar:"بيجي", alts:["beje","bijee","bji"], diff:2, cat:"verb" },
  { en:"I eat", tr:"bekol", ar:"باكل", alts:["baakol","baakel","bekel"], diff:2, cat:"verb" },
  { en:"I drink", tr:"beshrab", ar:"بشرب", alts:["bechrab","beshrob","beshrab"], diff:2, cat:"verb" },
  { en:"I know", tr:"ba3ref", ar:"بعرف", alts:["ba3rif","baaref","baa3ref"], diff:2, cat:"verb" },
  { en:"I don't know", tr:"ma ba3ref", ar:"ما بعرف", alts:["maba3ref","ma ba3rif","ma baaref"], diff:2, cat:"verb" },
  { en:"I love you (to a man)", tr:"bhebak", ar:"بحبك", alts:["b7ebak","bhebbak","b7ebbak"], diff:2, cat:"verb" },
  { en:"I love you (to a woman)", tr:"bhebik", ar:"بحبك", alts:["b7ebik","bhebbik","b7ebbek"], diff:2, cat:"verb" },
  { en:"I see", tr:"beshuf", ar:"بشوف", alts:["bechuf","beshoof","bshuf"], diff:2, cat:"verb" },
  { en:"I hear", tr:"besma3", ar:"بسمع", alts:["bisma3","besmaa","bsma3"], diff:2, cat:"verb" },

  // ── Questions (2-star) ──
  { en:"what?", tr:"shu", ar:"شو", alts:["chou","shou","shoo"], diff:1, cat:"question" },
  { en:"where?", tr:"wen", ar:"وين", alts:["wein","ween"], diff:1, cat:"question" },
  { en:"when?", tr:"emta", ar:"امتى", alts:["eemta","imta","aymta"], diff:1, cat:"question" },
  { en:"why?", tr:"leh", ar:"ليه", alts:["lei","leih","lay"], diff:1, cat:"question" },
  { en:"how?", tr:"kif", ar:"كيف", alts:["keef","keif"], diff:1, cat:"question" },
  { en:"who?", tr:"min", ar:"مين", alts:["meen","meeeen"], diff:1, cat:"question" },
  { en:"how much / how many?", tr:"2addaysh", ar:"قديش", alts:["addeesh","adesh","qaddesh","2addesh"], diff:2, cat:"question" },

  // ── Place / direction (3-star) ──
  { en:"here", tr:"hon", ar:"هون", alts:["hoon","hown"], diff:1, cat:"place" },
  { en:"there", tr:"hnik", ar:"هنيك", alts:["hneek","hnik","hnaak"], diff:2, cat:"place" },
  { en:"far", tr:"b3id", ar:"بعيد", alts:["b3eed","baaeed","ba3eed"], diff:2, cat:"place" },
  { en:"close", tr:"2arib", ar:"قريب", alts:["qarib","2areeb","ariyb"], diff:2, cat:"place" },
  { en:"left", tr:"shmel", ar:"شمال", alts:["chmel","shimal","shmeel"], diff:2, cat:"place" },
  { en:"right (direction)", tr:"yamin", ar:"يمين", alts:["yameen","yameen"], diff:2, cat:"place" },
  { en:"straight ahead", tr:"dughri", ar:"دغري", alts:["doghri","dughree","dughri"], diff:3, cat:"place" },

  // ── Idiomatic (3-star) ──
  { en:"no problem", tr:"ma fi moshkle", ar:"ما في مشكلة", alts:["mafi moshkle","mafee moshkle","ma fi moushkle"], diff:2, cat:"idiom" },
  { en:"welcome (to guest)", tr:"ahla w sahla", ar:"اهلا وسهلا", alts:["ahlan wa sahlan","ahla o sahla","a7la w sahla"], diff:2, cat:"idiom" },
  { en:"god willing", tr:"inshallah", ar:"ان شاء الله", alts:["insha2allah","in shaa allah","enshalla"], diff:2, cat:"idiom" },
  { en:"by god's will (used as thanks)", tr:"yislamo", ar:"يسلمو", alts:["yeslamo","yislamoo","yislamu"], diff:3, cat:"idiom" },
  { en:"never mind / forget it", tr:"ma3lesh", ar:"معلش", alts:["maalesh","ma3lish","maalish"], diff:2, cat:"idiom" },
  { en:"good luck", tr:"bel tawfi2", ar:"بالتوفيق", alts:["bel tawfeeq","bittawfi2","bi al tawfiq"], diff:3, cat:"idiom" },
];

const RT_CATS = [
  { id:"greeting", label:"👋 Greeting" },
  { id:"polite",   label:"🙏 Polite" },
  { id:"self",     label:"🪞 Self" },
  { id:"basic",    label:"🔤 Basic" },
  { id:"survival", label:"🆘 Survival" },
  { id:"time",     label:"⏰ Time" },
  { id:"food",     label:"🍽 Food" },
  { id:"shopping", label:"🛒 Shopping" },
  { id:"need",     label:"❗ Need" },
  { id:"verb",     label:"🏃 Verb 1sg" },
  { id:"question", label:"❓ Question" },
  { id:"place",    label:"📍 Place" },
  { id:"idiom",    label:"💬 Idiom" },
];

const RT_TIPS = [
  "Type Arabizi. Numerals 7=ح, 3=ع, 2=ء/ق, kh=خ, gh=غ, sh=ش.",
  "Spelling variants are accepted — e.g. 'mar7aba' and 'marhaba' both match.",
  "Close misses (1 letter off) count as 'close' — not full credit but not wrong.",
  "Hit Enter to submit, N to skip to next item.",
];
