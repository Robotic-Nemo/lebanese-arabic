// R615 — NEW FEATURE: Lebanese Neighborhood & City Life (nbh)

const NBH_CATS = [
  { id: 'places',    label: '🏘️ Places' },
  { id: 'directions', label: '🧭 Directions' },
  { id: 'transport', label: '🚌 Transport' },
  { id: 'services',  label: '🏥 Services' },
];

const NBH_WORDS = [
  // Places
  { id: 'nbh01', cat: 'places', ar: 'الحي', tr: 'l-7ay', en: 'The neighborhood / district', note: 'Used to refer to your local area — "min 2ayy 7ay inta?" = which neighborhood are you from?' },
  { id: 'nbh02', cat: 'places', ar: 'الشارع', tr: 'l-share3', en: 'The street', note: '3a l-share3 = on the street / outside' },
  { id: 'nbh03', cat: 'places', ar: 'الزاروب', tr: 'l-zarub', en: 'The alley / side street', note: 'Small side alley in Lebanese neighborhoods' },
  { id: 'nbh04', cat: 'places', ar: 'الساحة', tr: 'l-sa7a', en: 'The square / open area', note: 'Public gathering square, like Sahat l-Nejmeh (Nejmeh Square) in Beirut' },
  { id: 'nbh05', cat: 'places', ar: 'الوسط', tr: 'l-wast', en: 'Downtown / the center', note: 'Refers to Beirut\'s downtown: "wast l-balad"' },
  { id: 'nbh06', cat: 'places', ar: 'المبنى', tr: 'l-mabna', en: 'The building', note: '"3ayesh bi 2ayy mabna?" = which building do you live in?' },
  { id: 'nbh07', cat: 'places', ar: 'الطابق', tr: 'l-tabiq', en: 'The floor / storey', note: '"3a 2ayy tabiq?" = on which floor?' },
  { id: 'nbh08', cat: 'places', ar: 'الجيران', tr: 'l-jiran', en: 'The neighbors', note: '"l-jiran mnee7in" = the neighbors are nice / good' },
  { id: 'nbh09', cat: 'places', ar: 'السوق', tr: 'l-suq', en: 'The market / souk', note: 'Traditional market area — Suq l-Ahad (Sunday Market) is famous in Beirut' },
  { id: 'nbh10', cat: 'places', ar: 'المحل', tr: 'l-ma7all', en: 'The shop / store', note: '"ma7all l-ba2ala" = the grocery store' },
  // Directions
  { id: 'nbh11', cat: 'directions', ar: 'على طول', tr: '3ala tul', en: 'Straight ahead', note: 'The most common direction given — "ru7 3ala tul" = go straight' },
  { id: 'nbh12', cat: 'directions', ar: 'عالإيمين', tr: '3al-imin', en: 'To the right', note: 'Short for "3ala l-imin" — right side' },
  { id: 'nbh13', cat: 'directions', ar: 'عالشمال', tr: '3al-smal', en: 'To the left', note: 'Short for "3ala l-smal" — left side' },
  { id: 'nbh14', cat: 'directions', ar: 'قريب', tr: 'qrib', en: 'Near / close', note: '"qrib min hon?" = is it near here?' },
  { id: 'nbh15', cat: 'directions', ar: 'بعيد', tr: 'b3id', en: 'Far', note: '"m2addesh b3id?" = how far is it? (lit: how much far?)' },
  { id: 'nbh16', cat: 'directions', ar: 'عَقِد', tr: '3a2id', en: 'Turn (the corner)', note: '"3a2id 3al-imin" = turn right at the corner' },
  { id: 'nbh17', cat: 'directions', ar: 'قدام', tr: 'uddäm', en: 'In front of / ahead', note: '"uddäm l-kanise" = in front of the church' },
  { id: 'nbh18', cat: 'directions', ar: 'ورا', tr: 'wara', en: 'Behind / after', note: '"wara l-suq" = behind the market' },
  // Transport
  { id: 'nbh19', cat: 'transport', ar: 'السرفيس', tr: 'l-serwis', en: 'Service taxi (shared minibus)', note: 'Shared taxi/minibus with fixed routes — backbone of Lebanese public transport' },
  { id: 'nbh20', cat: 'transport', ar: 'التاكسي', tr: 'l-taksi', en: 'Taxi', note: '"hobbetni 3a Beirut" = take me to Beirut (said to a taxi driver)' },
  { id: 'nbh21', cat: 'transport', ar: 'الموقف', tr: 'l-maw2if', en: 'The bus/taxi stop', note: '"wein l-maw2if?" = where is the stop?' },
  { id: 'nbh22', cat: 'transport', ar: 'زحمة', tr: 'za7me', en: 'Traffic jam', note: '"fi za7me ktir" = there\'s a lot of traffic — extremely common complaint in Lebanon' },
  { id: 'nbh23', cat: 'transport', ar: 'ركب', tr: 'rikib', en: 'To get on / board (transport)', note: '"rikibna l-bas" = we got on the bus' },
  { id: 'nbh24', cat: 'transport', ar: 'نزل', tr: 'nizil', en: 'To get off / disembark', note: '"wein baddi nizil?" = where should I get off?' },
  // Services
  { id: 'nbh25', cat: 'services', ar: 'الكهرباء', tr: 'l-kahraba', en: 'Electricity', note: 'Notorious in Lebanon for outages — "2ija l-kahraba" = the electricity came back' },
  { id: 'nbh26', cat: 'services', ar: 'المولدة', tr: 'l-mawlide', en: 'The generator', note: 'Every building has a private generator due to power cuts — "shuterkon 3ala l-mawlide" = generator subscription' },
  { id: 'nbh27', cat: 'services', ar: 'المي', tr: 'l-mayy', en: 'The water', note: '"ma fi mayy" = there\'s no water — another common Lebanese complaint' },
  { id: 'nbh28', cat: 'services', ar: 'الصيدلية', tr: 'l-saydaliyye', en: 'The pharmacy', note: 'Pharmacies are everywhere in Lebanon — also used for basic medical advice' },
  { id: 'nbh29', cat: 'services', ar: 'المستشفى', tr: 'l-mustashfa', en: 'The hospital', note: '"wein l-mustashfa l-a2rab?" = where is the nearest hospital?' },
  { id: 'nbh30', cat: 'services', ar: 'البلدية', tr: 'l-baladiyye', en: 'The municipality', note: 'Local government office — handles permits, infrastructure issues' },
];

const NBH_DRILLS = [
  { q: 'How do you say "go straight"?', opts: ['3al-imin', '3ala tul', '3al-smal', 'wara'], ans: 1, exp: '3ala tul (على طول) literally means "along the length" — the standard Lebanese direction for going straight.' },
  { q: 'What is "l-7ay"?', opts: ['The street', 'The building', 'The neighborhood/district', 'The market'], ans: 2, exp: 'l-7ay (الحي) = neighborhood. "Min 2ayy 7ay?" = which neighborhood are you from?' },
  { q: 'How do you say "turn right"?', opts: ['ru7 3ala tul', '3a2id 3al-imin', 'nizil hon', 'uddäm l-mabna'], ans: 1, exp: '3a2id 3al-imin = turn right. 3a2id = turn (the corner), 3al-imin = to the right.' },
  { q: 'What is "l-serwis"?', opts: ['A private taxi', 'A shared taxi/minibus route', 'A bus stop', 'A traffic jam'], ans: 1, exp: 'l-serwis (السرفيس) is the shared minibus/taxi system with fixed routes — the main public transport in Lebanon.' },
  { q: 'What is "za7me"?', opts: ['Far away', 'Traffic jam', 'A narrow alley', 'A building floor'], ans: 1, exp: 'za7me (زحمة) = traffic jam. "Fi za7me ktir" = there is a lot of traffic — a very common Lebanese phrase.' },
  { q: 'How do you say "is it near here"?', opts: ['fi za7me?', 'b3id min hon?', 'qrib min hon?', '3ala 2ayy tabiq?'], ans: 2, exp: 'qrib min hon? = is it near here? qrib = near/close.' },
  { q: 'What is "l-kahraba"?', opts: ['The generator', 'Electricity', 'The water supply', 'The municipality'], ans: 1, exp: 'l-kahraba (الكهرباء) = electricity. Famous in Lebanon for frequent outages.' },
  { q: 'What is "l-mawlide"?', opts: ['The bus stop', 'The taxi', 'The generator', 'The pharmacy'], ans: 2, exp: 'l-mawlide (المولدة) = the private generator. Due to power cuts, every building in Lebanon has one.' },
  { q: 'How do you say "where should I get off?" (transport)', opts: ['wein l-maw2if?', 'wein baddi nizil?', 'rikibna l-bas?', 'hobbetni?'], ans: 1, exp: '"wein baddi nizil?" = where should I get off? nizil = to descend/get off.' },
  { q: 'What is "wast l-balad"?', opts: ['The suburban area', 'The alley', 'Downtown / city center', 'The neighborhood'], ans: 2, exp: 'wast l-balad = downtown/city center. Refers specifically to Beirut\'s central district.' },
  { q: 'What is "l-jiran"?', opts: ['The market', 'The neighbors', 'The services', 'The street vendors'], ans: 1, exp: 'l-jiran (الجيران) = the neighbors. "l-jiran mnee7in" = the neighbors are good/nice.' },
  { q: 'How do you say "behind the market"?', opts: ['uddäm l-suq', 'wara l-suq', 'qrib l-suq', '3al-smal l-suq'], ans: 1, exp: '"wara l-suq" = behind the market. wara = behind/after.' },
  { q: 'What is "l-zarub"?', opts: ['A wide boulevard', 'A building floor', 'A narrow alley/side street', 'A taxi stop'], ans: 2, exp: 'l-zarub (الزاروب) = narrow alley or side street in Lebanese neighborhoods.' },
  { q: 'What does "rikib" mean?', opts: ['To turn', 'To get off transport', 'To get on/board transport', 'To park'], ans: 2, exp: 'rikib = to board/get on transport. "rikibna l-bas" = we got on the bus.' },
  { q: 'What is "l-saydaliyye"?', opts: ['The hospital', 'The municipality', 'The pharmacy', 'The generator shop'], ans: 2, exp: 'l-saydaliyye (الصيدلية) = pharmacy. Very common in Lebanon, also consulted for health advice.' },
];

const NBH_TIPS = [
  { title: 'Directions Lebanese style', body: 'Lebanese directions rarely use compass points. Landmarks are everything: "3ala l-imin ba3d l-kanise" (right after the church). Beirut also has the famous landmark system — "7add Concorde" (near Concorde cinema, now demolished but still used).' },
  { title: 'Electricity culture', body: 'Lebanon has rolling power cuts (ta2ti3). Every building has a generator subscription (shuterkon 3ala l-mawlide). You hear "2ija l-dawle" (the state electricity came) and "2ija l-mawlide" (the generator came) many times daily.' },
  { title: 'Serwis system', body: 'The serwis (shared taxi) has routes and costs a fixed price. You hail it on the street, tell the driver "3al-serwis" and name your destination. If it\'s on his route, he nods and you hop in. You pay when you get off with "b-shit?" (how much?).' },
  { title: 'Traffic and za7me', body: 'Traffic jams (za7me) are legendary in Beirut. Complaining about traffic is a national sport: "l-za7me akharet l-dene" (traffic is the end of the world). The phrase "za7me ktir" is heard every morning.' },
  { title: 'Neighborhood identity', body: 'Which 7ay (neighborhood) you\'re from is a core identity in Lebanon. Beirut neighborhoods — Hamra, Gemmayzeh, Mar Mikhael, Achrafieh, Verdun — each have a distinct personality and sectarian flavor.' },
  { title: 'Water problems', body: '"Ma fi mayy" (no water) is almost as common as electricity cuts. Buildings have water tanks on the roof that get filled by trucks. The water man (sabba2) comes regularly to fill them.' },
];
