// Comparative & superlative — Lebanese
// Pattern: pos adj → af3al (comparative/superlative)
const COMPARATIVES = [
  { pos:{ar:'كبير',  tr:'kbir',  en:'big'},      cmp:{ar:'أكبر',  tr:'akbar',  en:'bigger / biggest'},   note:'k-b-r root' },
  { pos:{ar:'صغير',  tr:'sghir', en:'small'},    cmp:{ar:'أصغر',  tr:'asghar', en:'smaller'},            note:'s-gh-r' },
  { pos:{ar:'حلو',   tr:'7elw',  en:'sweet/nice'},cmp:{ar:'أحلى', tr:'a7la',   en:'sweeter / nicer'},   note:'7-l-w → final w drops' },
  { pos:{ar:'بعيد',  tr:'b3id',  en:'far'},      cmp:{ar:'أبعد',  tr:'ab3ad',  en:'farther'},            note:'b-3-d' },
  { pos:{ar:'قريب',  tr:'2arib', en:'close'},    cmp:{ar:'أقرب',  tr:'a2rab',  en:'closer'},             note:'q-r-b → 2 in Lebanese' },
  { pos:{ar:'طويل',  tr:'tawil', en:'tall/long'},cmp:{ar:'أطول',  tr:'atwal',  en:'taller / longer'},    note:'t-w-l' },
  { pos:{ar:'قصير',  tr:'2sayyer', en:'short'},  cmp:{ar:'أقصر',  tr:'a2sar',  en:'shorter'},            note:'q-s-r' },
  { pos:{ar:'غالي',  tr:'ghali', en:'expensive'},cmp:{ar:'أغلى',  tr:'aghla',  en:'more expensive'},     note:'gh-l-y → final y drops' },
  { pos:{ar:'رخيص',  tr:'rkhis', en:'cheap'},    cmp:{ar:'أرخص',  tr:'arkhas', en:'cheaper'},            note:'r-kh-s' },
  { pos:{ar:'سريع',  tr:'sari3', en:'fast'},     cmp:{ar:'أسرع',  tr:'asra3',  en:'faster'},             note:'s-r-3' },
  { pos:{ar:'بطيء',  tr:'bati2', en:'slow'},     cmp:{ar:'أبطأ',  tr:'abta2',  en:'slower'},             note:'b-t-2' },
  { pos:{ar:'مبسوط', tr:'mabsut',en:'happy'},    cmp:{ar:'أبسط',  tr:'absat',  en:'happier (lit. simpler)'}, note:'b-s-t — informal' },
  { pos:{ar:'كتير',  tr:'ktir',  en:'much/many'},cmp:{ar:'أكتر',  tr:'aktar',  en:'more'},              note:'k-t-r' },
  { pos:{ar:'قليل',  tr:'2alil', en:'little/few'},cmp:{ar:'أقلّ', tr:'a2all',  en:'less / fewer'},      note:'q-l-l (doubled root → -all)' },
  { pos:{ar:'جديد',  tr:'jdid',  en:'new'},      cmp:{ar:'أجدّ',  tr:'ajadd',  en:'newer'},             note:'j-d-d' },
  { pos:{ar:'قديم',  tr:'2adim', en:'old'},      cmp:{ar:'أقدم',  tr:'a2dam',  en:'older'},             note:'q-d-m' },
  { pos:{ar:'صعب',   tr:'sa3b',  en:'difficult'},cmp:{ar:'أصعب',  tr:'as3ab',  en:'harder'},            note:'s-3-b' },
  { pos:{ar:'سهل',   tr:'sahel', en:'easy'},     cmp:{ar:'أسهل',  tr:'ashal',  en:'easier'},            note:'s-h-l' },
  { pos:{ar:'منيح',  tr:'mni7',  en:'good'},     cmp:{ar:'أحسن',  tr:'a7san',  en:'better (irregular)'}, note:'7-s-n root, irregular' },
  { pos:{ar:'سيّء',  tr:'sayye2',en:'bad'},      cmp:{ar:'أسوأ',  tr:'aswa2',  en:'worse'},             note:'s-w-2' },
];

// Plural patterns (broken vs sound)
const PLURALS = [
  // Broken plurals — most common in Lebanese
  { sg:{ar:'كتاب', tr:'kteb',   en:'book'},     pl:{ar:'كتب',    tr:'kotob'},    type:'broken', pattern:'fu3ul' },
  { sg:{ar:'بيت',  tr:'bayt',   en:'house'},    pl:{ar:'بيوت',   tr:'byut'},     type:'broken', pattern:'fyu3' },
  { sg:{ar:'ولد',  tr:'walad',  en:'boy/child'},pl:{ar:'ولاد',   tr:'wled'},    type:'broken', pattern:'fa3eel' },
  { sg:{ar:'بنت',  tr:'bint',   en:'girl'},     pl:{ar:'بنات',   tr:'banet'},    type:'broken', pattern:'fa3aat'  },
  { sg:{ar:'شغل',  tr:'shughl', en:'work'},     pl:{ar:'أشغال',  tr:'ashghal'},  type:'broken', pattern:'af3al' },
  { sg:{ar:'يوم',  tr:'yom',    en:'day'},      pl:{ar:'أيام',   tr:'iyyem'},    type:'broken', pattern:'iyyaam' },
  { sg:{ar:'شي',   tr:'shi',    en:'thing'},    pl:{ar:'أشيا',   tr:'ashya'},    type:'broken', pattern:'af3ila' },
  { sg:{ar:'شغلة', tr:'sheghle',en:'matter'},   pl:{ar:'شغلات',  tr:'sheghlet'}, type:'sound-f', pattern:'-aat (fem -e)' },
  { sg:{ar:'سيارة', tr:'sayyaara',en:'car'},    pl:{ar:'سيارات', tr:'sayyaaraat'},type:'sound-f', pattern:'-aat' },
  { sg:{ar:'كلمة', tr:'kelme',  en:'word'},     pl:{ar:'كلمات',  tr:'kelmet'},   type:'sound-f', pattern:'-aat' },
  { sg:{ar:'صورة', tr:'sura',   en:'picture'},  pl:{ar:'صور',    tr:'sowar'},    type:'broken', pattern:'fu3al' },
  { sg:{ar:'مدرّس',tr:'mdarres',en:'teacher (m)'},pl:{ar:'مدرّسين', tr:'mdarrsin'}, type:'sound-m', pattern:'-in (masc)' },
  { sg:{ar:'مدرّسة', tr:'mdarrse', en:'teacher (f)'}, pl:{ar:'مدرّسات', tr:'mdarrsaat'}, type:'sound-f', pattern:'-aat' },
  { sg:{ar:'دكان', tr:'dekkene',en:'shop'},     pl:{ar:'دكاكين', tr:'dakekin'},  type:'broken', pattern:'fa3aakil' },
  { sg:{ar:'مفتاح', tr:'mefta7', en:'key'},     pl:{ar:'مفاتيح', tr:'mafati7'},  type:'broken', pattern:'mafa3il' },
  { sg:{ar:'سؤال', tr:'su2el',  en:'question'}, pl:{ar:'أسئلة',  tr:'as2ile'},   type:'broken', pattern:'af3ile' },
  { sg:{ar:'جواب', tr:'jaweb',  en:'answer'},   pl:{ar:'أجوبة',  tr:'ajwibe'},   type:'broken', pattern:'af3ile' },
  { sg:{ar:'صديق', tr:'sadi2',  en:'friend'},   pl:{ar:'أصحاب',  tr:'as7eb'},    type:'broken', pattern:'af3aal (root swap)' },
  { sg:{ar:'مفروم',tr:'mafrum', en:'minced'},   pl:{ar:'مفرومين',tr:'mafrumin'}, type:'sound-m', pattern:'-in' },
  { sg:{ar:'طبيب', tr:'tabib',  en:'doctor'},   pl:{ar:'أطبا',   tr:'atibba'},   type:'broken', pattern:'af3ila' },
  { sg:{ar:'حلو',  tr:'7elw',   en:'sweet'},    pl:{ar:'حلوين',  tr:'7elwin'},   type:'sound-m', pattern:'-in (adj)' },
  { sg:{ar:'كبير', tr:'kbir',   en:'big'},      pl:{ar:'كبار',   tr:'kbar'},     type:'broken', pattern:'f3aal (adj)' },
];

// Cultural Cards — Lebanese food, places, holidays, customs
const CULTURAL_CARDS = [
  // Food
  { id:'food_kibbeh', cat:'Food', emoji:'🥩', title_en:'Kibbeh',  title_ar:'كبّة',  title_tr:'kibbe',
    body:'National dish — torpedo-shaped fried bulgur shells filled with spiced minced lamb and onions. Also raw (kibbe nayye), in yogurt (kibbe labanieh), and as flat trays (kibbe bil-saneeyye).' },
  { id:'food_tabbouleh', cat:'Food', emoji:'🥗', title_en:'Tabbouleh', title_ar:'تبّولة', title_tr:'tabbule',
    body:'Parsley salad — mostly chopped parsley with mint, tomato, onion, bulgur, lemon, olive oil. Eaten by scooping with romaine lettuce leaves.' },
  { id:'food_manakish', cat:'Food', emoji:'🫓', title_en:'Manaeesh', title_ar:'مناقيش', title_tr:'mana2ish',
    body:'Flatbread topped with za3tar (thyme blend) + olive oil, or cheese (jibne), or minced meat (lahme b3ajin). The Lebanese breakfast staple.' },
  { id:'food_fattoush', cat:'Food', emoji:'🥬', title_en:'Fattoush', title_ar:'فتّوش', title_tr:'fattush',
    body:'Salad with romaine, tomato, cucumber, mint, sumac, and crispy fried pita pieces. Sumac (summa2) gives the lemony zing.' },
  { id:'food_mezze', cat:'Food', emoji:'🍽️', title_en:'Mezze', title_ar:'مازة', title_tr:'meeze',
    body:'A spread of small plates: hummus, baba ghanouj, labneh, kibbe, fatayer, makanik, etc. Eaten slowly over hours with arak.' },
  { id:'food_arak', cat:'Food', emoji:'🥃', title_en:'Arak', title_ar:'عرق', title_tr:'3ara2',
    body:'Anise-flavored spirit. Pour arak first, then water, then ice (in that order — never reverse). Turns milky white. National drink.' },
  // Cities / regions
  { id:'place_beirut', cat:'Places', emoji:'🌃', title_en:'Beirut', title_ar:'بيروت', title_tr:'Beyrut',
    body:'Capital. Famous neighborhoods: Hamra (cafes, university), Gemmayze + Mar Mikhael (nightlife), Achrafieh (Christian east), Downtown (Beirut Souks), Corniche (seaside walk).' },
  { id:'place_baalbek', cat:'Places', emoji:'🏛️', title_en:'Baalbek', title_ar:'بعلبك', title_tr:'Ba3lbak',
    body:'Bekaa Valley city. Massive Roman temples (Jupiter, Bacchus) — among largest in the world. Annual international festival.' },
  { id:'place_tripoli', cat:'Places', emoji:'🕌', title_en:'Tripoli', title_ar:'طرابلس', title_tr:'Trablos',
    body:'Northern Lebanon\'s biggest city. Historic souks, Crusader citadel, Mamluk architecture. Famous for sweets and soap-making.' },
  { id:'place_byblos', cat:'Places', emoji:'⚓', title_en:'Byblos / Jbeil', title_ar:'جبيل', title_tr:'Jbeyl',
    body:'One of the world\'s oldest continuously-inhabited cities. Phoenician + Crusader port + medieval old town. The word "Bible" comes from Byblos.' },
  { id:'place_chouf', cat:'Places', emoji:'🌲', title_en:'The Chouf', title_ar:'الشوف', title_tr:'esh-Shuf',
    body:'Mountain region south of Beirut. Druze heartland. Cedar reserves, Beiteddine palace, Deir el-Qamar village.' },
  { id:'place_baalbeck_bekaa', cat:'Places', emoji:'🍇', title_en:'Bekaa Valley', title_ar:'البقاع', title_tr:'el-Be2aa3',
    body:'Fertile inland valley. Wine country (Ksara, Kefraya, Massaya). Cooler climate, agricultural heartland.' },
  // Holidays
  { id:'hol_eid', cat:'Holidays', emoji:'🌙', title_en:'Eid al-Fitr', title_ar:'عيد الفطر', title_tr:'3id el-fiter',
    body:'Marks end of Ramadan fasting. Greet with "Eid mubarak" (3id mubarak) or "kel sene w-inta saalem" (every year may you be well).' },
  { id:'hol_christmas', cat:'Holidays', emoji:'🎄', title_en:'Christmas', title_ar:'عيد الميلاد', title_tr:'3id el-milad',
    body:'December 25 (Catholics and Greek Orthodox) and January 6 (Armenian Orthodox). Bûche de Noël ("bûche") + meghli (rice pudding for newborn Jesus) are traditional. "Milad majid" = Merry Christmas.' },
  { id:'hol_easter', cat:'Holidays', emoji:'🐣', title_en:'Easter', title_ar:'عيد الفصح', title_tr:'3id el-fis7',
    body:'Maamoul (semolina cookies stuffed with dates/nuts) are baked. "Al-Masih qaam!" → "haqqan qaam!" (Christ is risen → Truly risen).' },
  { id:'hol_independence', cat:'Holidays', emoji:'🇱🇧', title_en:'Independence Day', title_ar:'عيد الإستقلال', title_tr:'3id el-isti2lal',
    body:'November 22 — independence from France in 1943. Military parade in Beirut.' },
  // Customs
  { id:'cust_coffee', cat:'Customs', emoji:'☕', title_en:'Coffee culture', title_ar:'القهوة', title_tr:'el-2ahwe',
    body:'Strong cardamom-flavored Arabic coffee. Always offered to guests — refusing is rude. "2ahwe sade" = unsweetened, "wasat" = medium, "7ilwe" = sweet.' },
  { id:'cust_hospitality', cat:'Customs', emoji:'🤝', title_en:'Tfaddal', title_ar:'تفضّل', title_tr:'tfaddal',
    body:'"Please come in / help yourself" — said when offering food, a chair, or to enter a home. The cornerstone of Lebanese hospitality.' },
  { id:'cust_naharak', cat:'Customs', emoji:'☀️', title_en:'Greetings layered by time', title_ar:'نهارك سعيد', title_tr:'naharak sa3id',
    body:'"Naharak sa3id" (have a happy day, m) → response "naharak sa3id w-mubarak" (and blessed). Lebanese greetings often have a fixed reply.' },
  { id:'cust_ya7ki_zay', cat:'Customs', emoji:'🤌', title_en:'Hand gestures', title_ar:'إشارات اليد', title_tr:'isharaat el-yad',
    body:'Pinched-fingers hand-up = "wait / slow down" or "what do you want?". Right hand on chest = sincere thanks. Single palm-down wave = "come here".' },
  { id:'cust_evil_eye', cat:'Customs', emoji:'🧿', title_en:'Evil eye / 3en', title_ar:'العين', title_tr:'el-3ein',
    body:'Blue eye amulets (3in zar2a) ward off envy. Compliment a child? Add "ma sha2 Allah" (what God willed) so you don\'t accidentally cast the eye.' },
  // Music / arts
  { id:'arts_fairouz', cat:'Arts', emoji:'🎵', title_en:'Fairouz', title_ar:'فيروز', title_tr:'Fairuz',
    body:'The voice of Lebanon. Morning radio across the country plays her. Songs about Beirut, the village, love. With brothers Rahbani.' },
  { id:'arts_dabke', cat:'Arts', emoji:'💃', title_en:'Dabke', title_ar:'دبكة', title_tr:'dabke',
    body:'Folkloric line dance. Stomping rhythmic steps, hands linked. Performed at weddings + festivals. Different regional styles.' },
];

const CULTURAL_BY_ID = Object.fromEntries(CULTURAL_CARDS.map(c => [c.id, c]));
const CULTURAL_CATS = [...new Set(CULTURAL_CARDS.map(c => c.cat))];
