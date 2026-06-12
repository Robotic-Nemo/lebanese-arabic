// R609 — NEW FEATURE: Lebanese History & Heritage Coach (hst)

const HST_CATS = [
  { id: 'landmark', label: '🏛️ Landmarks' },
  { id: 'figure',   label: '👤 Figures' },
  { id: 'event',    label: '📅 Events' },
  { id: 'ancient',  label: '🏺 Ancient' },
];

const HST_ITEMS = [
  // Landmarks
  { id: 'hst01', cat: 'landmark', ar: 'البعلبك', tr: 'Ba3labak', en: 'Baalbek (ancient Roman temple city)', note: 'One of the best-preserved Roman temple complexes in the world' },
  { id: 'hst02', cat: 'landmark', ar: 'قلعة بيبلوس', tr: 'q3let Byblos', en: 'Byblos Castle', note: 'Crusader castle in the oldest continuously inhabited city' },
  { id: 'hst03', cat: 'landmark', ar: 'جبيل', tr: 'Jbeil', en: 'Byblos — one of the oldest cities on Earth', note: 'Ancient Phoenician city, gave alphabet to the world' },
  { id: 'hst04', cat: 'landmark', ar: 'قلعة صيدا البحرية', tr: 'q3let Sayda l-ba7riyye', en: 'Sea Castle of Sidon', note: 'Crusader sea fortress built on an island' },
  { id: 'hst05', cat: 'landmark', ar: 'وادي قاديشا', tr: 'wadi Qadisha', en: 'Qadisha Valley (Holy Valley)', note: 'UNESCO World Heritage site, ancient Christian monasteries' },
  { id: 'hst06', cat: 'landmark', ar: 'أرز لبنان', tr: '2arz Lubnan', en: 'Cedars of Lebanon', note: 'Ancient cedar trees, national symbol of Lebanon' },
  { id: 'hst07', cat: 'landmark', ar: 'برج إيفل بيروت', tr: 'burj 2ifel Beirut', en: 'Pigeon Rocks (Rawche)', note: 'Iconic natural sea arches off Beirut coast' },
  { id: 'hst08', cat: 'landmark', ar: 'المتحف الوطني', tr: 'l-mat7af l-watani', en: 'National Museum of Beirut', note: 'Houses Phoenician, Roman and Byzantine artifacts' },
  // Figures
  { id: 'hst09', cat: 'figure', ar: 'جبران خليل جبران', tr: 'Jubran Khalil Jubran', en: 'Gibran Khalil Gibran — poet and artist', note: 'Author of "The Prophet"; born in Bsharri' },
  { id: 'hst10', cat: 'figure', ar: 'فيروز', tr: 'Fairuz', en: 'Fairuz — iconic Lebanese singer', note: 'Called "ambassador to the stars"; beloved across Arab world' },
  { id: 'hst11', cat: 'figure', ar: 'الأمير فخر الدين', tr: 'l-2amir Fakhr l-Din', en: 'Prince Fakhr al-Din II — founder of modern Lebanon', note: '17th-century Druze prince who unified Mount Lebanon' },
  { id: 'hst12', cat: 'figure', ar: 'ميشال عون', tr: 'Michel 3awn', en: 'Michel Aoun — Lebanese general and president', note: 'Served as president 2016–2022' },
  { id: 'hst13', cat: 'figure', ar: 'بشير الجميل', tr: 'Bashir l-Jmayel', en: 'Bashir Gemayel — president-elect 1982', note: 'Assassinated before taking office; pivotal civil war figure' },
  { id: 'hst14', cat: 'figure', ar: 'رفيق الحريري', tr: 'Rafiq l-Hariri', en: 'Rafik Hariri — prime minister and rebuilder', note: 'Rebuilt downtown Beirut after civil war; assassinated 2005' },
  { id: 'hst15', cat: 'figure', ar: 'الأمير بشير الثاني', tr: 'l-2amir Bashir l-tani', en: 'Prince Bashir II — unifier of Mount Lebanon', note: 'Early 19th-century ruler who brought stability to Lebanon' },
  // Events
  { id: 'hst16', cat: 'event', ar: 'الاستقلال', tr: 'l-istiqlal', en: 'Independence Day (November 22, 1943)', note: 'Lebanon gained independence from France in 1943' },
  { id: 'hst17', cat: 'event', ar: 'الحرب الأهلية', tr: 'l-7arb l-ahliyye', en: 'The Civil War (1975–1990)', note: '15-year civil war that reshaped Lebanese society' },
  { id: 'hst18', cat: 'event', ar: 'انتفاضة الاستقلال', tr: 'intifadat l-istiqlal', en: 'Cedar Revolution (2005)', note: 'Mass protests after Hariri assassination; Syria withdrew troops' },
  { id: 'hst19', cat: 'event', ar: 'انفجار مرفأ بيروت', tr: '2infjar mar2a2 Beirut', en: 'Beirut Port Explosion (August 4, 2020)', note: 'Ammonium nitrate explosion killed 200+, devastated Beirut' },
  { id: 'hst20', cat: 'event', ar: 'الانتداب الفرنسي', tr: 'l-intidab l-faransawi', en: 'French Mandate (1920–1943)', note: 'France controlled Lebanon under League of Nations mandate' },
  { id: 'hst21', cat: 'event', ar: 'الطائف', tr: 'l-Ta2if', en: 'Taif Agreement (1989)', note: 'Saudi-brokered accord that ended the civil war' },
  // Ancient
  { id: 'hst22', cat: 'ancient', ar: 'الفينيقيون', tr: 'l-finiqiyyun', en: 'The Phoenicians', note: 'Ancient seafarers who invented the alphabet from Levantine coast' },
  { id: 'hst23', cat: 'ancient', ar: 'الحرف الأبجدي', tr: 'l-7arf l-abjadi', en: 'The Alphabet', note: 'Phoenicians developed the first alphabet around 1050 BCE' },
  { id: 'hst24', cat: 'ancient', ar: 'صور', tr: 'Sur', en: 'Tyre — ancient Phoenician city', note: 'One of the greatest Phoenician port cities; founded Carthage' },
  { id: 'hst25', cat: 'ancient', ar: 'صيدا', tr: 'Sayda', en: 'Sidon — ancient Phoenician city', note: 'Major Phoenician trading city south of Beirut' },
  { id: 'hst26', cat: 'ancient', ar: 'معبد باخوس', tr: 'ma3bad Bakhos', en: 'Temple of Bacchus in Baalbek', note: 'Best-preserved Roman temple in the world' },
  { id: 'hst27', cat: 'ancient', ar: 'الكنعانيون', tr: 'l-kan3aniyyun', en: 'The Canaanites', note: 'Bronze Age predecessors of the Phoenicians in Lebanon' },
  { id: 'hst28', cat: 'ancient', ar: 'أوغاريت', tr: '2Ugarit', en: 'Ugarit — ancient script and trade city', note: 'Bronze Age city with earliest alphabetic writing (nearby Syria)' },
];

const HST_EXERCISES = [
  { id: 'hstx01', itemId: 'hst01', prompt: 'Known for its massive Roman temples in Lebanon\'s Bekaa Valley', distractors: ['hst02','hst26'] },
  { id: 'hstx02', itemId: 'hst03', prompt: 'Ancient Phoenician city that gave writing to the world', distractors: ['hst24','hst25'] },
  { id: 'hstx03', itemId: 'hst05', prompt: 'UNESCO valley with ancient Christian monasteries', distractors: ['hst04','hst08'] },
  { id: 'hstx04', itemId: 'hst06', prompt: 'National symbol of Lebanon, ancient trees', distractors: ['hst05','hst07'] },
  { id: 'hstx05', itemId: 'hst09', prompt: 'Lebanese-American poet who wrote "The Prophet"', distractors: ['hst10','hst11'] },
  { id: 'hstx06', itemId: 'hst10', prompt: 'Called "ambassador to the stars" — iconic singer', distractors: ['hst09','hst13'] },
  { id: 'hstx07', itemId: 'hst11', prompt: '17th-century prince who unified Mount Lebanon', distractors: ['hst15','hst12'] },
  { id: 'hstx08', itemId: 'hst14', prompt: 'Rebuilt downtown Beirut, assassinated 2005', distractors: ['hst13','hst15'] },
  { id: 'hstx09', itemId: 'hst16', prompt: 'Lebanon gained independence from France — November 22, 1943', distractors: ['hst20','hst18'] },
  { id: 'hstx10', itemId: 'hst17', prompt: '15-year conflict that reshaped Lebanese society', distractors: ['hst18','hst21'] },
  { id: 'hstx11', itemId: 'hst18', prompt: 'Mass protests after 2005 assassination; Cedar Revolution', distractors: ['hst19','hst16'] },
  { id: 'hstx12', itemId: 'hst19', prompt: 'August 4, 2020 — explosion devastated the capital', distractors: ['hst17','hst18'] },
  { id: 'hstx13', itemId: 'hst21', prompt: 'Saudi-brokered 1989 accord ending the civil war', distractors: ['hst20','hst17'] },
  { id: 'hstx14', itemId: 'hst22', prompt: 'Ancient seafarers from Lebanese coast who invented the alphabet', distractors: ['hst27','hst23'] },
  { id: 'hstx15', itemId: 'hst23', prompt: 'Writing system Phoenicians gave to the world ~1050 BCE', distractors: ['hst22','hst27'] },
  { id: 'hstx16', itemId: 'hst24', prompt: 'Phoenician port city that founded Carthage', distractors: ['hst25','hst03'] },
  { id: 'hstx17', itemId: 'hst26', prompt: 'Best-preserved Roman temple in the world, inside Baalbek', distractors: ['hst01','hst02'] },
  { id: 'hstx18', itemId: 'hst02', prompt: 'Crusader castle in the oldest continuously inhabited city', distractors: ['hst04','hst08'] },
];

const HST_TIPS = [
  { tip: 'Lebanon has been inhabited for over 7000 years — one of the oldest continuously settled areas on Earth.' },
  { tip: '"Lubnan" (لبنان) comes from a Semitic root meaning "white" — referring to the snow-capped mountains.' },
  { tip: 'The Phoenician alphabet had 22 consonants — it became the ancestor of Greek, Latin, Arabic, and Hebrew scripts.' },
  { tip: 'Baalbek\'s Temple of Jupiter had the largest columns of any Roman temple — some stones weigh over 1000 tons.' },
  { tip: 'The Cedar of Lebanon (أرز الله — cedar of God) appears on the Lebanese flag and has been a symbol for 3000 years.' },
  { tip: 'Beirut has been destroyed and rebuilt 7 times throughout history, earning its Phoenix nickname.' },
  { tip: 'Byblos (جبيل) is where Greek traders got papyrus — "Byblos" → "Bible" → "bibliography".' },
];
