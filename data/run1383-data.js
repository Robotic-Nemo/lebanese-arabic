// R1383 — NEW FEATURE: Lebanese Apartment Living (bln)
const BLN_WORDS = [
  {ar:'بلكون',tr:'balkon',en:'balcony'},
  {ar:'جيران',tr:'jaraan',en:'neighbors'},
  {ar:'جار',tr:'jar',en:'neighbor (m)'},
  {ar:'جارة',tr:'jara',en:'neighbor (f)'},
  {ar:'عمارة',tr:'3amara',en:'apartment building'},
  {ar:'طابق',tr:'tabe2',en:'floor / story'},
  {ar:'درج',tr:'druj',en:'stairs / stairwell'},
  {ar:'مصنصر',tr:'masanser',en:'elevator'},
  {ar:'جرس',tr:'jares',en:'doorbell'},
  {ar:'مفتاح',tr:'mifteh7',en:'key'},
  {ar:'غسيل',tr:'ghassil',en:'laundry'},
  {ar:'نبتة',tr:'nabte',en:'houseplant'},
  {ar:'هوا',tr:'hawa',en:'air / breeze'},
  {ar:'منظر',tr:'manzar',en:'view / scenery'},
  {ar:'دوشة',tr:'dawsha',en:'noise / racket'},
  {ar:'باب العمارة',tr:'bab el 3amara',en:'building entrance'},
  {ar:'حارس',tr:'7aras',en:'guard / watchman'},
  {ar:'إيجار',tr:'ija2ar',en:'rent'},
  {ar:'صاحب البيت',tr:'saheb el bet',en:'landlord'},
  {ar:'مستأجر',tr:'mustajir',en:'tenant / renter'}
];

const BLN_DRILLS = [
  {q:'What does "jaraan" (جيران) mean?',opts:['buildings','keys','neighbors','stairs'],a:2},
  {q:'You take the "masanser" to reach your floor. What is it?',opts:['doorbell','elevator','stairwell','balcony'],a:1},
  {q:'Your landlord in Lebanese Arabic is called...?',opts:['mustajir','jar','saheb el bet','7aras'],a:2},
  {q:'"Ghassil" (غسيل) refers to...?',opts:['groceries','plants','laundry','noise'],a:2},
  {q:'"Dawsha" (دوشة) means...?',opts:['view','key','rent','noise / racket'],a:3},
  {q:'The monthly payment to live in your apartment is...?',opts:['jares','manzar','ija2ar','tabe2'],a:2},
  {q:'Which word means "floor / story of a building"?',opts:['druj','nabte','balkon','tabe2'],a:3},
  {q:'A person who rents from a landlord is a...?',opts:['saheb el bet','jar','7aras','mustajir'],a:3}
];

const BLN_TIPS = [
  {title:'Neighbor Greetings',body:'In Lebanese apartment buildings, greeting jaraan (neighbors) with "sabahal kheir" and "kif 7alk?" is expected daily etiquette. Knowing your neighbors by name and checking in is part of Lebanese social fabric — ignoring a neighbor is considered rude.'},
  {title:'Elevator Culture',body:'"Il-masanser wa2ef" (المصنصر واقف — the elevator is broken) is a common lament during Lebanese power cuts. Many residents joke that climbing the druj is their daily workout. Some buildings have generator-powered masanser, others do not.'},
  {title:'Rent in Dollars',body:'Even after Lebanon\'s economic crisis, ija2ar (إيجار — rent) is often quoted in US dollars. Saying "3am bdfa3 ija2ar" (I\'m paying rent) carries a sense of financial pressure. Landlords (saheb el bet) and tenants (mustajir) often negotiate in mixed currencies.'},
  {title:'Neighbor Proverb',body:'The Lebanese say "il-jar abel el dar" (الجار قبل الدار — the neighbor before the house): when choosing a home, your jaraan matter more than the building itself. This reflects how central community bonds are in Lebanese apartment life.'}
];
