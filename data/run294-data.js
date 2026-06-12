// Run #294 — Lebanese Transport & Getting Around Coach (trp)
// Vehicles, taxis, buses, driving phrases, road culture — 40 items, MCQ drill, 5 tips

const TRP_WORDS = [
  // vehicles
  { tr: 'sayyaara',        ar: 'سيارة',           en: 'car',                             cat: 'vehicles' },
  { tr: 'taaksi',          ar: 'تاكسي',           en: 'taxi',                            cat: 'vehicles' },
  { tr: 'serviis',         ar: 'سرفيس',           en: 'shared taxi (service)',            cat: 'vehicles' },
  { tr: 'baas',            ar: 'باص',             en: 'bus',                             cat: 'vehicles' },
  { tr: 'mootaasikil',     ar: 'موتاسيكل',        en: 'motorcycle',                      cat: 'vehicles' },
  { tr: 'shaahine',        ar: 'شاحنة',           en: 'truck',                           cat: 'vehicles' },
  { tr: 'ambulaans',       ar: 'إمبولنس',         en: 'ambulance',                       cat: 'vehicles' },
  { tr: 'Tayyaara',        ar: 'طيارة',           en: 'airplane',                        cat: 'vehicles' },
  // roads & places
  { tr: 'Taree2',          ar: 'طريق',            en: 'road / way',                      cat: 'roads' },
  { tr: 'shaari3',         ar: 'شارع',            en: 'street',                          cat: 'roads' },
  { tr: 'dawwaare',        ar: 'دوّارة',           en: 'roundabout',                      cat: 'roads' },
  { tr: 'mawqaf',          ar: 'موقف',            en: 'parking / stop',                  cat: 'roads' },
  { tr: 'jisr',            ar: 'جسر',             en: 'bridge',                          cat: 'roads' },
  { tr: 'mafra2',          ar: 'مفرق',            en: 'intersection / fork',             cat: 'roads' },
  { tr: 'naafaz',          ar: 'نفق',             en: 'tunnel',                          cat: 'roads' },
  { tr: 'maHaTTa',         ar: 'محطّة',            en: 'station / stop',                  cat: 'roads' },
  // driving actions
  { tr: 'saa2',            ar: 'ساق',             en: 'to drive',                        cat: 'actions' },
  { tr: 'wa2af',           ar: 'وقف',             en: 'to stop / park',                  cat: 'actions' },
  { tr: 'la22',            ar: 'لقّ',              en: 'to honk',                         cat: 'actions' },
  { tr: 'raaja3',          ar: 'راجع',            en: 'to reverse',                      cat: 'actions' },
  { tr: 'farram',          ar: 'فرّم',             en: 'to brake hard',                   cat: 'actions' },
  { tr: 'zbaTa',           ar: 'ضبطها',           en: 'fixed it / sorted it out',        cat: 'actions' },
  // directions
  { tr: 'yamiin',          ar: 'يمين',            en: 'right',                           cat: 'directions' },
  { tr: 'shimaal / shamel',ar: 'شمال',            en: 'left',                            cat: 'directions' },
  { tr: 'dghri',           ar: 'دغري',            en: 'straight ahead',                  cat: 'directions' },
  { tr: 'rja3 waraa',      ar: 'رجع وراء',         en: 'go back / reverse',               cat: 'directions' },
  { tr: 'layy yamiin',     ar: 'لي يمين',          en: 'turn right',                      cat: 'directions' },
  { tr: 'layy shimaal',    ar: 'لي شمال',          en: 'turn left',                       cat: 'directions' },
  // taxi phrases
  { tr: 'ween raayi7?',    ar: 'وين رايح؟',        en: 'where are you going?',            cat: 'taxi' },
  { tr: 'wSilna',          ar: 'وصلنا',           en: 'we arrived',                      cat: 'taxi' },
  { tr: 'na22ilni la...',  ar: 'نقّلني ل...',      en: 'take me to...',                   cat: 'taxi' },
  { tr: 'addesh l-ujra?',  ar: 'أديش الأجرة؟',    en: 'how much is the fare?',           cat: 'taxi' },
  { tr: 'kasiirli shwayy', ar: 'كسّرلي شوي',       en: 'give me a discount',              cat: 'taxi' },
  { tr: 'ma fi parkiing',  ar: 'ما في باركينغ',    en: 'no parking',                      cat: 'taxi' },
  // traffic culture
  { tr: 'z7me',            ar: 'زحمة',            en: 'traffic jam',                     cat: 'culture' },
  { tr: 'ghalaTaan',       ar: 'غلطان',           en: 'wrong / you\'re wrong (m)',        cat: 'culture' },
  { tr: 'maHruume',        ar: 'محرومة',          en: 'fine / traffic ticket',            cat: 'culture' },
  { tr: '3abbeet',         ar: 'عبّيت',           en: 'I filled up (fuel)',               cat: 'culture' },
  { tr: 'dawwer maTra7',   ar: 'دوّر مطرح',        en: 'find a spot (parking)',            cat: 'culture' },
  { tr: 'Hayy l-2awwel',   ar: 'حي الأول',         en: 'go first / after you',            cat: 'culture' },
];

const TRP_DRILLS = [
  {
    q: 'How do you say "shared taxi" in Lebanese Arabic?',
    opts: ['taaksi', 'baas', 'serviis', 'sayyaara'],
    correct: 2,
    note: '"serviis" = shared taxi (سرفيس — from French "service"). Lebanon\'s iconic shared taxi system: fixed routes, fixed cheap fare, anyone can hail one and share with strangers going the same way. Say the destination when flagging: "Hamra?" or "Beirut?". Driver nods or shakes head. Common in Beirut and between cities. Private taxi (taaksi) is more expensive. Apps like Uber/Careem also operate in Lebanon, but locals still use serviis daily.'
  },
  {
    q: 'What does "z7me" mean?',
    opts: ['a roundabout', 'traffic jam', 'parking spot', 'road works'],
    correct: 1,
    note: '"z7me" = traffic jam / crowd (زحمة — from زحم = to crowd/squeeze). Lebanon\'s most complained-about daily reality. "Fi z7me ktiir" = there\'s a lot of traffic. "Wein l-z7me?" = where\'s the traffic jam? Lebanon lacks a metro or reliable bus system — almost everyone drives, creating legendary traffic. Beirut rush hour: 7-9am and 4-7pm. "Z7me 3al Dawra" or "z7me 3al jisr" are classic phrases. Also used figuratively: "z7me bi-baalo" = crowded mind = confused/overwhelmed.'
  },
  {
    q: 'How do you say "straight ahead" in Lebanese Arabic?',
    opts: ['yamiin', 'shimaal', 'dghri', 'layy'],
    correct: 2,
    note: '"dghri" = straight ahead (دغري — from Turkish "doğru" = straight/correct). Used in directions: "ruu7 dghri" = go straight. "Dghri min hnaa" = straight from here. Also means "directly/frankly": "2ullu dghri" = tell him directly. Lebanese directional vocab: "yamiin" (right), "shimaal/shamel" (left), "dghri" (straight). When asking directions: "kif ruu7 la..." = how do I get to... Lebanese directions often use landmarks: "ba3d l-ishaara" (after the traffic light), "2iddaam l-bank" (in front of the bank).'
  },
  {
    q: 'What does "na22ilni la..." mean?',
    opts: ['stop here please', 'take me to...', 'how far is...', 'turn here'],
    correct: 1,
    note: '"na22ilni la..." = take me to... (نقّلني ل — from نقل = to transport/move). Essential taxi phrase. "Na22ilni la Hamra" = take me to Hamra. Female: "na22lini la...". More casual: "ruu7 3a..." (go to...). When in taxi: state destination clearly upfront. Lebanese taxi etiquette: greet driver, state destination. Private taxi: negotiate price BEFORE getting in — "addesh la [place]?" (how much to [place]?). Serviis: standard fare, no negotiation needed. Tip is appreciated but not mandatory.'
  },
  {
    q: 'How do you say "to honk" in Lebanese Arabic?',
    opts: ['saa2', 'farram', 'la22', 'wa2af'],
    correct: 2,
    note: '"la22" = to honk (لقّ — onomatopoeic). Lebanon has one of the world\'s most active honking cultures. Honk meanings: (1) "move/the light is green" (impatient), (2) greeting a friend, (3) "I\'m here" for pickup, (4) general expression of frustration. "la22 3alei" = honked at me. "2a3Tik la2a" = I\'ll honk at you. Lebanese traffic sound: constant "la22 la22." To a slow driver ahead: "la22 la22" = get moving. Honking at 2am is normal in Lebanon — nightlife culture means late traffic.'
  },
  {
    q: 'What is "dawwaare"?',
    opts: ['a parking lot', 'a traffic light', 'a roundabout', 'a highway'],
    correct: 2,
    note: '"dawwaare" = roundabout (دوّارة — from دور = to circle/turn). Lebanon uses roundabouts as major landmarks and meeting points. Famous "dawwaaraat": Dawaret l-Cola (Cola roundabout — main bus hub in Beirut), Dawaret Barbir, Dawaret Zouk. Lebanese give directions using roundabouts: "3ind l-dawwaare, layy yamiin" = at the roundabout, turn right. Roundabout etiquette in Lebanon: traffic already IN the roundabout doesn\'t always have right of way — proceed boldly. "Min dawwaaret l-Cola" = from Cola roundabout (classic serviis departure point).'
  },
  {
    q: 'How do you say "traffic ticket / fine" in Lebanese Arabic?',
    opts: ['maHruume', 'z7me', 'mawqaf', 'ghalaTaan'],
    correct: 0,
    note: '"maHruume" = fine / traffic ticket (محرومة — from حرم = to deprive/forbid). Getting a "maHruume" in Lebanon was relatively rare historically due to weak enforcement, but traffic police do issue them. "Khadtu maHruume" = I got a fine. Common violations: parking wrong, phone while driving, running red lights. Lebanese traffic police: often stationed at intersections, especially in Beirut. "Maashe" = she\'s moving (no problem). The word "maHruume" literally means "deprived" — you\'re deprived of some money.'
  },
  {
    q: 'What does "addesh l-ujra?" mean?',
    opts: ['how far is it?', 'where is the station?', 'how much is the fare?', 'is this the right way?'],
    correct: 2,
    note: '"addesh l-ujra?" = how much is the fare? (أديش الأجرة؟ — addesh = how much, ujra = fare/wage). Always ask BEFORE getting in a private taxi. "Ujra" covers taxi fare, bus ticket, any transport payment. "Addesh l-ujra la Jounieh?" = how much to Jounieh? Lebanese price negotiation: state destination, driver names price, you can counter-offer. "Kasiir" = expensive, "rkhiiS" = cheap, "kasiirli shwayy" = give me a discount. Serviis fare: usually standard set price (ask locals what the going rate is).'
  },
  {
    q: 'How do you say "we arrived" in Lebanese Arabic?',
    opts: ['rja3na', 'wSilna', 'mshina', 'waqafna'],
    correct: 1,
    note: '"wSilna" = we arrived (وصلنا — from وصل = to arrive/reach). Single: "wSilit" (I arrived). Lebanese phone etiquette: after arriving somewhere, call/text whoever sent you off — "wSilit bi-l-salim" = I arrived safely. This is social obligation, not optional. "wSiltu?" = did you (pl.) arrive? (asked by the person who saw you off). "Wein wSilit?" = where did you reach? (how far along are you?). "Ma wSil ba3d" = hasn\'t arrived yet.'
  },
  {
    q: 'What does "Hayy l-2awwel" mean in traffic?',
    opts: ['slow down', 'go first / after you', 'stop here', 'you\'re wrong'],
    correct: 1,
    note: '"Hayy l-2awwel" = go first / after you (حي الأول — lit: "here\'s the first"). Lebanese traffic politeness gesture: at an intersection or tight spot, wave the other driver through. "Hayy" = here/come. "L-2awwel" = the first (you go first). Lebanese drivers can be aggressive in traffic but also show sudden courtesy moments — "Hayy l-2awwel" with a hand wave diffuses tension. Also said in queues, doorways. Accompanied by a hand gesture: flat palm forward, fingers up, slight wave = "please go ahead." Opposite of "miin 2awwel?" = who goes first?'
  },
];

const TRP_TIPS = [
  { title: 'Getting around Lebanon — transport basics', body: 'Lebanon has no metro or tram system — cars dominate. Main options: (1) "Serviis" (shared taxi) — cheap, shared route-based taxis; hail by calling out destination. (2) Private taxi — negotiate fare upfront; apps: Uber, Careem, local apps. (3) "Baas" (bus) — LCC buses in Beirut, very cheap but infrequent. (4) "Mootaasikil" delivery guys — everywhere, creative road users. Renting a car: common for exploring outside Beirut. Driving in Lebanon requires confidence — lanes are suggestions, horns are language. "Maashe" (it\'s going/fine) sums up Lebanese road philosophy.' },
  { title: 'Lebanese taxi culture — serviis vs private', body: '"Serviis" is Lebanon\'s unique shared taxi system — set routes, set fares, strangers share the car. Hail by calling your destination: "Hamra?" — driver nods or shakes head. No meter, set price. Serviis from Beirut to Tripoli: depart from "Dawaret l-Cola" (Cola roundabout). Private taxi: agree on price before entering — "addesh la [place]?" Lebanese taxi phrases: "na22ilni la..." (take me to...), "wa22ifni hoon" (stop me here), "addesh l-ujra?" (how much is the fare?). Drivers often make conversation — practice your Lebanese!' },
  { title: 'Lebanese traffic culture — z7me and road rules', body: '"Z7me" (traffic jam) is Lebanon\'s national pastime. Beirut rush hours are legendary — the city built for 300,000 now houses millions. Lebanese road rules: (1) Honking is communication (la22, la22); (2) Lanes are flexible — 3 cars in a 2-lane road is normal; (3) Right of way: whoever is bolder usually wins; (4) Traffic lights: mostly respected; (5) Parking: creative (on sidewalks, double-parked). "GhalaTaan" (you\'re wrong) is often shouted from windows. Patience: "sabre shwayy" (wait a bit) — the car in front will move eventually.' },
  { title: 'Lebanese directions — how to ask and understand', body: 'Lebanese give directions using landmarks, not street names (streets often lack signs or names that locals use). "Ba3d l-ishaara" = after the traffic light. "2iddaam l-kniiseh" = in front of the church. "Ta7t l-jisr" = under the bridge. Key direction words: "dghri" (straight), "yamiin" (right), "shimaal/shamel" (left), "layy" (turn). "Kam daqiiqe?" = how many minutes? Lebanese distance: measured in time, not km. "5 daqaayiq" = 5 minutes (usually means 15 in traffic). When lost: "Wein l-[place]?" = where is the [place]? Locals are very helpful with directions.' },
  { title: 'Road culture gems — honking, parking, fuel', body: '"La22" (honk) is language in Lebanon — impatience, greeting, summons, joy. Honk if the car ahead is slow at a green light: expected and normal. Parking ("mawqaf"): finding a spot ("dawwer maTra7") is a daily challenge in Beirut — double parking, sidewalk parking, blocking driveways all happen. Valets are common at restaurants. Fuel: "3abbet" (I filled up) — Lebanese buy small amounts at a time due to fuel shortages. Gas stations: "3abbilni bi-100,000 lira" = fill me with [amount]. "Zbata" (sorted it out) = Lebanese problem-solving in one word — applies to parking, routes, any road challenge.' },
];

const TRP_ABOUT = 'Master Lebanese Arabic for transport and getting around — vehicles, taxis, driving phrases, directions, road culture. Essential for navigating Beirut traffic, hailing service taxis, and understanding Lebanon\'s unique road culture.';
