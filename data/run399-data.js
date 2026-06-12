// Run #399 — Lebanese Apartment & Housing Coach (apt)
// Categories: apartment | neighborhood | utilities | landlord | expressions

const APT_WORDS = [
  // apartment
  { ar: 'شقة', tr: 'sha22a', en: 'apartment / flat', cat: 'apartment' },
  { ar: 'غرفة', tr: 'ghurfe', en: 'room', cat: 'apartment' },
  { ar: 'صالون', tr: 'Saaluun', en: 'living room', cat: 'apartment' },
  { ar: 'مطبخ', tr: 'maTbakh', en: 'kitchen', cat: 'apartment' },
  { ar: 'حمام', tr: '7ammaam', en: 'bathroom', cat: 'apartment' },
  { ar: 'بلكون', tr: 'balkon', en: 'balcony (from French balcon)', cat: 'apartment' },
  { ar: 'مستأجر', tr: 'musta2jir', en: 'tenant / renter', cat: 'apartment' },
  { ar: 'أجار', tr: '2ajaar', en: 'rent (monthly payment)', cat: 'apartment' },
  // neighborhood
  { ar: 'حي', tr: '7ayy', en: 'neighborhood / quarter', cat: 'neighborhood' },
  { ar: 'جار', tr: 'jaar', en: 'neighbor', cat: 'neighborhood' },
  { ar: 'مبنى', tr: 'mabna', en: 'building', cat: 'neighborhood' },
  { ar: 'طابق', tr: 'Taabi2', en: 'floor / story (of building)', cat: 'neighborhood' },
  { ar: 'مصعد', tr: 'maS3ad', en: 'elevator / lift', cat: 'neighborhood' },
  { ar: 'دكان', tr: 'dakkaan', en: 'small shop (ground floor)', cat: 'neighborhood' },
  { ar: 'سطح', tr: 'saTH', en: 'rooftop / terrace', cat: 'neighborhood' },
  { ar: 'مدخل', tr: 'madkhal', en: 'entrance / lobby', cat: 'neighborhood' },
  // utilities
  { ar: 'كهرباء', tr: 'kahraba', en: 'electricity', cat: 'utilities' },
  { ar: 'مي', tr: 'mayy', en: 'water (Lebanese word)', cat: 'utilities' },
  { ar: 'مولد', tr: 'mawlad', en: 'generator (private power backup)', cat: 'utilities' },
  { ar: 'موتور', tr: 'mootar', en: 'water pump motor', cat: 'utilities' },
  { ar: 'إنترنت', tr: 'internet', en: 'internet / fiber', cat: 'utilities' },
  { ar: 'تدفئة', tr: 'tadfi2a', en: 'heating system', cat: 'utilities' },
  { ar: 'مازوت', tr: 'maazuut', en: 'diesel / heating oil', cat: 'utilities' },
  { ar: 'جرد', tr: 'jard', en: 'inventory / building inspection', cat: 'utilities' },
  // landlord
  { ar: 'صاحب البيت', tr: 'Saa7ib il-beet', en: 'landlord (owner of the house)', cat: 'landlord' },
  { ar: 'عقد إيجار', tr: '3a2d 2iijaar', en: 'rental contract / lease', cat: 'landlord' },
  { ar: 'مبلغ', tr: 'mablaGH', en: 'amount / sum (of money)', cat: 'landlord' },
  { ar: 'كفيل', tr: 'kafiil', en: 'guarantor / co-signer', cat: 'landlord' },
  { ar: 'تصليح', tr: 'taSliH', en: 'repair / maintenance', cat: 'landlord' },
  { ar: 'عداد', tr: '3addaad', en: 'meter (electric/water)', cat: 'landlord' },
  { ar: 'دفع', tr: 'dafa3', en: 'to pay', cat: 'landlord' },
  { ar: 'تخلية', tr: 'takhliye', en: 'vacating / moving out', cat: 'landlord' },
  // expressions
  { ar: 'شقة للإيجار', tr: 'sha22a lal-2iijaar', en: 'apartment for rent', cat: 'expressions' },
  { ar: 'إنقطع الكهربا', tr: 'in2aTa3 il-kahraba', en: 'the electricity cut off', cat: 'expressions' },
  { ar: 'جارنا عامل دوشة', tr: 'jaarna 3aamal doosha', en: 'our neighbor is making noise', cat: 'expressions' },
  { ar: 'صاحب البيت رفع الأجار', tr: 'Saa7ib il-beet rafa3 il-2ajaar', en: 'the landlord raised the rent', cat: 'expressions' },
  { ar: 'موتور الماء وقف', tr: 'mootar il-mayy wa2af', en: 'the water pump stopped', cat: 'expressions' },
  { ar: 'كيف الكهربا؟', tr: 'kiif il-kahraba?', en: 'how is the electricity? (schedule check)', cat: 'expressions' },
  { ar: 'وقت المولد', tr: 'wa2t il-mawlad', en: 'generator time (scheduled backup power)', cat: 'expressions' },
  { ar: 'بيت منيح بحي هادي', tr: 'beet mniH b-7ayy haadi', en: 'a good house in a quiet neighborhood', cat: 'expressions' },
];

const APT_DRILLS = [
  {
    q: 'What is "sha22a"?',
    opts: ['sha22a', 'mabna', 'ghurfe', 'Saaluun'],
    correct: 0,
    note: '"Sha22a" (شقة) — apartment / flat. Lebanon\'s dominant housing type — vertical living in dense urban blocks. "Sha22a lal-2iijaar" = apartment for rent. "Sha22a lal-bee3" = apartment for sale. Beirut apartment prices became some of the most expensive in the Middle East relative to local wages, even before the 2019 crisis. Post-crisis, rents denominated in "fresh dollars" became unaffordable for most Lebanese. "Sha22a" vs "beet" (house): sha22a = flat in a building; beet = standalone house or family home.',
  },
  {
    q: 'What is "kahraba" in Lebanese daily life?',
    opts: ['kahraba', 'mayy', 'mawlad', 'maazuut'],
    correct: 0,
    note: '"Kahraba" (كهرباء) — electricity. Lebanon\'s most discussed utility — the state electricity (kahraba il-dawle) provides power for only a few hours per day. The rest is covered by private generator subscriptions ("mawlad"). "In2aTa3 il-kahraba" = the electricity cut off (most common Lebanese phrase). "Kiif il-kahraba 3andkon?" = how\'s your electricity situation? Lebanese daily planning revolves around power cuts. "Wa2t il-kahraba" = when the state power is on.',
  },
  {
    q: 'What is "Saa7ib il-beet"?',
    opts: ['Saa7ib il-beet', '3a2d 2iijaar', 'musta2jir', 'kafiil'],
    correct: 0,
    note: '"Saa7ib il-beet" (صاحب البيت) — the landlord (lit. owner of the house). The landlord-tenant relationship in Lebanon is complex: Lebanon had a rent control law (2014 reform) protecting old tenants but new rentals are at market rates. "Saa7ib il-beet rafa3 il-2ajaar" (landlord raised the rent) is a constant complaint. Many Lebanese families have multi-generational tenancy under old laws. Post-2019: many landlords switched to dollar-denominated rents, pricing many families out.',
  },
  {
    q: 'What is "mawlad" and why is it essential?',
    opts: ['mawlad', 'kahraba', 'maazuut', 'tadfi2a'],
    correct: 0,
    note: '"Mawlad" (مولد) — private generator / generator subscription. Because Lebanese state electricity can be off 12-20 hours daily, every building subscribes to a private generator service ("muSawwir" or neighborhood generator). Monthly fee: "2ajr il-mawlad." Running hours: "wa2t il-mawlad." Lebanon\'s generator industry became a multi-billion dollar sector. "Ma fi mawlad" (no generator) = complete blackout. "Mawlad wa2af" (generator stopped) = major complaint. "3am ysha7an" = charging (phone, batteries) when power is on.',
  },
  {
    q: 'What does "in2aTa3 il-kahraba" mean?',
    opts: ['in2aTa3 il-kahraba', 'kiif il-kahraba?', 'wa2t il-mawlad', 'mawlad wa2af'],
    correct: 0,
    note: '"In2aTa3 il-kahraba" (إنقطع الكهربا) — the electricity cut off. The most universally uttered Lebanese sentence. "In2aTa3" = it was cut/disconnected (from 2aTa3 = to cut). Said constantly throughout the day. Context: "in2aTa3 il-kahraba, sarli sa3a ma3o" = the electricity cut, I\'ve been without it for an hour. Lebanese cultural identity is partly built around managing power cuts: UPS systems, phone power banks, charging during the few "kahraba" hours.',
  },
  {
    q: 'What is "jaar" in Lebanese apartment culture?',
    opts: ['jaar', 'mabna', '7ayy', 'madkhal'],
    correct: 0,
    note: '"Jaar" (جار) — neighbor. Lebanese neighbor culture: "7u2uu2 il-jaar" (rights of the neighbor) is a moral/religious concept — neighbors have special duties toward each other. "Jaarna 3aamal doosha" = our neighbor is making noise (constant complaint). Building life: everyone knows everyone\'s schedule, visitors, and arguments. "Jaar mniH" = a good neighbor (precious). In Lebanese culture, a good neighbor is better than a distant relative. Generator subscriptions, parking, noise — the neighbor relationship defines building life.',
  },
  {
    q: 'What does "taSliH" mean for tenants?',
    opts: ['taSliH', 'takhliye', '3a2d 2iijaar', '3addaad'],
    correct: 0,
    note: '"TaSliH" (تصليح) — repair / maintenance. The eternal debate: who pays for taSliH? Lebanese leases often specify: "taSliH 3ala il-musta2jir" (repairs on the tenant) vs. "3ala Saa7ib il-beet" (on the landlord). "Il-beet bi7taaj taSliH" = the house needs repairs. Common repairs: plumbing ("sabakiyye"), paint ("dihaane"), broken tiles ("blaaTe maksuur"). Post-earthquake and post-explosion (Beirut 2020): taSliH became an existential issue — thousands of apartments damaged with no insurance or landlord help.',
  },
  {
    q: 'What is "maazuut" in a Lebanese home?',
    opts: ['maazuut', 'mawlad', 'tadfi2a', 'kahraba'],
    correct: 0,
    note: '"Maazuut" (مازوت) — diesel / heating oil. Lebanon\'s primary heating fuel — most older apartments use a "sobiiye" (radiator system) or diesel heaters fed by building tanks. "Mala2na l-maazuut" = we filled up the diesel (important seasonal purchase). Post-crisis: maazuut prices became unpredictable and subject to dollar exchange rate. "Ma fi maazuut" = no diesel heating (common winter problem). Some families switched to wood/coal fires post-crisis. "Maazuut ghali ktir" = diesel very expensive.',
  },
  {
    q: 'What does "Taabi2" mean?',
    opts: ['Taabi2', 'mabna', 'madkhal', 'maS3ad'],
    correct: 0,
    note: '"Taabi2" (طابق) — floor / story of a building. "Taabi2 awwal" = first floor (but note: in Lebanon/Middle East the "ground floor" = tabi2 arDi, and first floor = one floor up, unlike US usage). "Taabi2 taalte" = third floor. "maS3ad mish shaghil" = elevator not working (extremely common complaint in Lebanese buildings). Without working elevators, "5th floor" apartments become burdensome. Post-2019: many buildings can\'t maintain elevators due to fuel and maintenance costs.',
  },
  {
    q: 'What does "sha22a lal-2iijaar" mean?',
    opts: ['sha22a lal-2iijaar', 'sha22a lal-bee3', 'beet mniH', '2ajaar mnaasib'],
    correct: 0,
    note: '"Sha22a lal-2iijaar" (شقة للإيجار) — apartment for rent. The phrase you\'ll see on painted walls, WhatsApp groups, and SMS forwards all over Lebanon. Lebanese apartment hunting is primarily word-of-mouth and WhatsApp groups. Post-2019: many apartments were listed in "fresh dollars" only, creating a two-tier market. "Sha22a mfurnashe" = furnished apartment. "3ala l-2ajaar" = monthly rent. Finding a good sha22a is a social project — family networks, neighbors, and building superintendents ("khfeer") are key sources.',
  },
];

const APT_TIPS = [
  'Lebanon\'s electricity crisis defines apartment living. State power (kahraba il-dawle) may run only 3-6 hours per day outside Beirut and sometimes less. Every building subscribes to a private generator ("mawlad") for the rest. Monthly costs include both the state electricity bill and the generator subscription. Power planning is daily life: charge phones and devices when kahraba is on, schedule laundry accordingly, keep candles and power banks. Understanding "wa2t il-kahraba" (electricity schedule) is essential for any resident.',
  'The Beirut Port Explosion of August 4, 2020 destroyed or damaged over 77,000 apartments in Beirut alone. Many were never fully repaired. The overlapping crises — economic collapse (2019), COVID, explosion, and political paralysis — created a housing catastrophe. Rents switched from lira to dollar-denominated, pricing out locals. Neighborhoods like Gemmayzeh and Mar Mikhael, heavily damaged, saw paradoxical rent increases due to foreign buyers. "Beet maksuur" (broken house) became a Lebanese reality for thousands.',
  'Lebanese landlord-tenant relations: old vs. new law. Pre-1992 tenants had rent-controlled, near-irremovable tenancies at frozen 1970s prices. The 2014 law tried to modernize this. New leases are at market rates — typically 1-3 year contracts, often dollar-denominated post-2019. "Saa7ib il-beet" (landlord) is a powerful figure in Lebanese social life. "3al-2ajaar" negotiations often involve family connections. A fair landlord ("Saa7ib beet mniH") is cherished; one who raises rent ("rafa3 il-2ajaar") is widely discussed.',
  'Lebanese building social life: the building is a community. "Il-mabna" has a bawwaab or khfeer (doorman/guard) in older/larger buildings who knows everything. Neighbors share generator costs, water costs, and building maintenance fees ("2ujrat il-mabna"). Disputes: parking spots, noise after midnight, generator schedules. "Jaarna 3aamal doosha" (neighbor making noise) is a universal Lebanese complaint. Building WhatsApp groups now coordinate power schedules, package deliveries, and safety alerts. The elevator ("maS3ad") breaking down is a shared trauma.',
  'Water management is a parallel challenge. Municipal water runs on a schedule — buildings have rooftop tanks filled when water flows. "Il-mayy khalas" (water ran out) means the tank is empty. "Mootar il-mayy" (water pump motor) pumps water to upper floors — if it breaks, top floors have no water. Bottled water ("mayy ma3daniyye") is used for drinking in most households. "Sabakiyye" (plumbing) problems are constant in older buildings. Understanding the water system — tank, pump, schedule — is essential for Lebanese apartment life.',
];

const APT_ABOUT = 'Lebanese apartment culture is inseparable from the country\'s infrastructure crises and social dynamics. Housing in Lebanon means navigating daily power cuts (managing between state electricity and private generators), water schedules and pump failures, dollar-denominated rents that can outpace local salaries, and the dense social life of multi-family buildings. The landlord ("Saa7ib il-beet") and the neighbor ("jaar") are central characters in Lebanese daily life. Post-2019 economic collapse and the 2020 Beirut Port Explosion transformed housing into a survival issue for many families. Understanding Lebanese apartment vocabulary means understanding not just physical spaces but the ingenuity, resilience, and frustrations of daily Lebanese life.';
