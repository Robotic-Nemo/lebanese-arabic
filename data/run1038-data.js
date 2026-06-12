// R1038 — NEW FEATURE: Lebanese Parking & Traffic Culture coach (prk)

const PRK_WORDS = [
  // places
  { ar: 'موقف', tr: 'mawkif', eng: 'parking spot', cat: 'places' },
  { ar: 'جرصيف', tr: 'jarSiif', eng: 'sidewalk (where Lebanese park)', cat: 'places' },
  { ar: 'دوار', tr: 'duwwaar', eng: 'roundabout', cat: 'places' },
  { ar: 'موقف عمومي', tr: 'mawkif 3umuumi', eng: 'public parking lot', cat: 'places' },
  { ar: 'زاروب', tr: 'zaruub', eng: 'alley / narrow side street', cat: 'places' },
  // actions
  { ar: 'ركن', tr: 'rakan', eng: 'parked', cat: 'actions' },
  { ar: 'ضارح', tr: 'Daara7', eng: 'double-parked', cat: 'actions' },
  { ar: 'سكّر', tr: 'sakkar', eng: 'blocked someone in', cat: 'actions' },
  { ar: 'جرّ', tr: 'jarra', eng: 'towed', cat: 'actions' },
  { ar: 'لقي مطرح', tr: 'la2a maTra7', eng: 'found a spot', cat: 'actions' },
  // fines
  { ar: 'مخالفة', tr: 'mukhalafe', eng: 'fine / traffic ticket', cat: 'fines' },
  { ar: 'ريشة', tr: 'riishe', eng: 'bribe (lit. feather)', cat: 'fines' },
  { ar: 'مشي الحال', tr: 'meshi l-7aal', eng: 'handled it / sorted it out (paid a bribe)', cat: 'fines' },
  { ar: 'تسجيل', tr: 'tasjiil', eng: 'vehicle registration', cat: 'fines' },
  { ar: 'رخصة سواقة', tr: 'rukhSet soo2a', eng: 'driver\'s licence', cat: 'fines' },
  // people
  { ar: 'ضابط مرور', tr: 'Daabit muruur', eng: 'traffic officer', cat: 'people' },
  { ar: 'سائق كرين', tr: 'saa2i2 krein', eng: 'tow truck driver', cat: 'people' },
  { ar: 'بواب', tr: 'bawwaab', eng: 'building doorman (who watches cars)', cat: 'people' },
  { ar: 'مخبر', tr: 'mukhber', eng: 'informer / parking spotter', cat: 'people' },
  { ar: 'عسكري', tr: '3askari', eng: 'soldier / cop', cat: 'people' },
  // expressions
  { ar: 'ما في مطرح', tr: 'ma fii maTra7', eng: 'there\'s no parking space', cat: 'expressions' },
  { ar: 'عم بصير شوي', tr: '3am bSiir shway', eng: 'I\'ll just be a sec (classic excuse)', cat: 'expressions' },
  { ar: 'كيف بدي أركن؟', tr: 'kiif baddi 2irkun?', eng: 'how am I supposed to park?', cat: 'expressions' },
  { ar: 'سكّيرلي!', tr: 'sakkiirlii!', eng: 'you blocked me in! (demanding someone move)', cat: 'expressions' },
  { ar: 'في عليك مخالفة', tr: 'fii 3alayyak mukhalafe', eng: 'you\'ve got a ticket', cat: 'expressions' },
  // chaos
  { ar: 'طارير', tr: 'Taareer', eng: 'car horn', cat: 'chaos' },
  { ar: 'زحمة', tr: 'za7me', eng: 'heavy traffic / jam', cat: 'chaos' },
  { ar: 'دوّش', tr: 'dawwash', eng: 'honked repeatedly / made a racket', cat: 'chaos' },
  { ar: 'زبل', tr: 'zabal', eng: 'traffic standstill (lit. garbage heap)', cat: 'chaos' },
  { ar: 'فرّ', tr: 'farr', eng: 'sped off / fled the scene', cat: 'chaos' },
];

const PRK_CATS = ['all', 'places', 'actions', 'fines', 'people', 'expressions', 'chaos'];

const PRK_DRILLS = [
  {
    q: '"Daara7" (ضارح) means:',
    opts: ['found a spot', 'towed', 'double-parked', 'blocked someone in'],
    ans: 2
  },
  {
    q: '"mukhalafe" (مخالفة) is a:',
    opts: ['parking spot', 'traffic officer', 'fine / ticket', 'tow truck'],
    ans: 2
  },
  {
    q: '"riishe" (ريشة) in traffic context means:',
    opts: ['driver\'s licence', 'bribe', 'fine', 'roundabout'],
    ans: 1
  },
  {
    q: '"meshi l-7aal" (مشي الحال) means:',
    opts: ['there\'s no parking', 'how do I park?', 'handled it / sorted it out', 'you\'ve got a ticket'],
    ans: 2
  },
  {
    q: '"jarSiif" (جرصيف) is a:',
    opts: ['public parking lot', 'roundabout', 'tow truck', 'sidewalk'],
    ans: 3
  },
  {
    q: '"3am bSiir shway" is the classic excuse meaning:',
    opts: ['I can\'t find parking', 'I\'ll just be a second', 'you blocked me in', 'move the car'],
    ans: 1
  },
  {
    q: '"ma fii maTra7" (ما في مطرح) means:',
    opts: ['there\'s a ticket on your car', 'the road is blocked', 'there\'s no parking space', 'don\'t park here'],
    ans: 2
  },
  {
    q: '"saa2i2 krein" (سائق كرين) is:',
    opts: ['a traffic officer', 'a parking attendant', 'a tow truck driver', 'a building doorman'],
    ans: 2
  },
  {
    q: '"sakkar" (سكّر) in traffic means:',
    opts: ['parked legally', 'blocked someone in', 'drove away', 'paid a fine'],
    ans: 1
  },
  {
    q: '"jarra" (جرّ) means:',
    opts: ['honked', 'found a spot', 'towed', 'double-parked'],
    ans: 2
  },
  {
    q: '"bawwaab" (بواب) in a parking context:',
    opts: ['a traffic officer', 'a building doorman who watches cars', 'an informer', 'a tow truck driver'],
    ans: 1
  },
  {
    q: '"za7me" (زحمة) means:',
    opts: ['a fine', 'a tight alley', 'heavy traffic / jam', 'double-parking'],
    ans: 2
  },
  {
    q: '"sakkiirlii!" (سكّيرلي) means:',
    opts: ['you\'ve got a ticket', 'you blocked me in!', 'move to the sidewalk', 'I\'ll be back in a second'],
    ans: 1
  },
  {
    q: '"Daabit muruur" (ضابط مرور) is:',
    opts: ['a tow truck driver', 'a parking attendant', 'a traffic officer', 'a building doorman'],
    ans: 2
  },
  {
    q: '"zabal" (زبل) in traffic slang means:',
    opts: ['a bribe', 'a speeding ticket', 'a traffic standstill', 'a narrow alley'],
    ans: 2
  },
];

const PRK_TIPS = [
  {
    title: 'Double-Parking (Daara7) Is a Way of Life',
    body: 'In Lebanon, double-parking (Daara7) is so common it\'s almost normal. The unwritten rule: leave your car in neutral so the blocked car can push it forward. If you put on the handbrake, expect a symphony of Taariir (horns). "3am bSiir shway" (I\'ll just be a second) can mean anywhere from 2 minutes to half an hour.'
  },
  {
    title: 'The Riishe Economy',
    body: 'Getting stopped by a traffic officer doesn\'t always mean a mukhalafe (fine). "Meshi l-7aal" (it got sorted) is the euphemism for a small riishe (bribe). The amount is negotiated silently — a folded bill inside your tasjiil (registration) is the classic method. This informal economy persists despite periodic crackdowns.'
  },
  {
    title: 'The Bawwaab as Parking Valet',
    body: 'In residential neighbourhoods, the bawwaab (building doorman) is the de facto parking coordinator. He knows every resident\'s car, negotiates unofficial spots on the street, and will physically move cars when needed. A good bawwaab means you always have somewhere to park. A tip at New Year\'s keeps the arrangement smooth.'
  },
  {
    title: 'The Krein (Tow Truck) and How to Avoid It',
    body: 'Municipal towing (krein) is feared but inconsistently enforced. The mukhber (spotter) walks ahead, marking illegally parked cars for the crane. Lebanese drivers have developed a sixth sense for spotting mukhbereen. The standard response to "your car got towed" is a volley of creative profanity followed by an expensive trip to the pound (mawkif il-baladiyye).'
  },
  {
    title: 'Ma Fii Mawkif — The National Struggle',
    body: '"Ma fii maTra7" (there\'s no spot) is the lived reality of most Lebanese city drivers. Beirut was not designed for car ownership at modern levels — parking structures are rare and often full. Drivers circle blocks for 20+ minutes, eventually parking on the jarSiif (sidewalk), in a zaruub (alley), or with two wheels on a median. The creativity is genuinely impressive.'
  },
];
