// R1665 — Lebanese Raouche / Pigeon Rocks & West Beirut Coast (rwc)
const RWC_WORDS = [
  { w: "Raouche",            t: "الروشة",          e: "Raouche — west Beirut neighborhood famous for offshore Pigeon Rocks landmark; cliffside corniche cafés; sunset photo spot; iconic Beirut postcard view",                       ex: "esh-shams 3am tghib bi Raouche" },
  { w: "Sakhret el-7amam",   t: "صخرة الحمام",     e: "Pigeon Rocks — twin offshore limestone arches off Raouche cliffs; nesting pigeons; iconic since pre-civil-war; tourist photo + selfie obligatory",                              ex: "Sakhret el-7amam ma2tu3a" },
  { w: "magharet el-7amam",  t: "مغارة الحمام",     e: "Pigeon Cave — natural arch passage in larger rock; small boats pass through; popular boat-tour photo stop; symbol of west Beirut",                                  ex: "magharet el-7amam shatara" },
  { w: "tamayyeh",           t: "تمي",             e: "cliff dive — local young men jumping from Raouche cliffs into sea; risky but tradition; performance for tourists; summer ritual",                                              ex: "el-shabeb 3am ytammu" },
  { w: "ghattas",            t: "غطّاس",           e: "diver — Raouche cliff divers + Beirut snorkelers; sea-divers tradition; small dive shops near Pigeon Rocks; informal tour-guide divers",                                       ex: "el-ghattas raye7 lal-ba7r" },
  { w: "Manara",             t: "المنارة",         e: "Manara — west Beirut lighthouse + neighborhood; AUB area; Corniche el-Manara coastal walkway; Movenpick Hotel; sunset jogging",                                              ex: "el-Manara 3al-corniche" },
  { w: "Ramlet el-Bayda",    t: "رملة البيضا",      e: "Ramlet el-Bayda — last Beirut public sandy beach; controversy over private resort encroachment; locals' summer free swim spot; pre-2000 wider sand",                          ex: "Ramlet el-Bayda 3am tdee2" },
  { w: "Saint George Bay",   t: "خليج مار جرجس",     e: "Saint George Bay — Beirut harbor north of Raouche; mythological dragon-slaying St. George site; Phoenician+Roman trade origins; Marina Towers + St. George Yacht Club",      ex: "Saint George Bay bil-yacht-club" },
  { w: "Bay Rock café",      t: "كافيه باي روك",     e: "Bay Rock Café — clifftop café Raouche; iconic Pigeon Rocks view; argileh + Turkish coffee; sunset hour packed; pre-2000 generation rendezvous",                              ex: "Bay Rock 3al-ghuroub" },
  { w: "Sporting Club",      t: "نادي السبورتنغ",    e: "Sporting Club — historic Beirut beach club Manara; pre-civil-war elite; salt-water pool by sea; nostalgic 1970s glamour vibe; family memberships",                          ex: "Sporting Club bil-saif" },
  { w: "Long Beach",         t: "لونج بيتش",        e: "Long Beach — Manara beach club Beirut; mid-tier; locals' day-trip from city; pool + sea access; affordable summer hangout",                                                 ex: "Long Beach bil-yom" },
  { w: "Riviera",            t: "ريفييرا",          e: "Riviera Hotel — Manara seafront 5-star; private beach + pool; pre-civil-war Beirut Riviera scene revival; expat brunches + diaspora returners",                              ex: "Riviera bil-Eid" },
  { w: "Movenpick",          t: "موفنبيك",          e: "Mövenpick Hotel — west Beirut Manara coast; Swiss luxury chain; private beach club + pool; weekend beach passes; Mediterranean cuisine + ice cream",                          ex: "Movenpick beach-day" },
  { w: "AUB seaside",        t: "بحر الجامعة",       e: "AUB seaside — American University of Beirut campus + private beach below cliffs; students' free swim spot; west Beirut intellectual heritage 1866",                         ex: "tlab AUB 3al-ba7r" },
  { w: "Manara Corniche",    t: "كورنيش المنارة",   e: "Manara Corniche — coastal walkway from Ain el-Mreisseh to Raouche; sunset joggers; cyclists; fishermen; lovers' benches; pigeon feeders; democratic public space",         ex: "tmasha 3al-corniche" },
  { w: "ghroub esh-shams",   t: "غروب الشمس",      e: "sunset over sea — Raouche west-facing cliffs world-class sunset hour; tourists + locals 5-7pm summer; Instagram backdrop; Beirut's daily ritual",                            ex: "ghroub esh-shams 3a Raouche" }
];

const RWC_DRILLS = [
  {
    q: "Raouche's iconic landmark?",
    opts: [
      "modern statue",
      "Sakhret el-7amam (Pigeon Rocks) — twin offshore limestone arches off west Beirut cliffs; pigeons nest in the arch; iconic Beirut postcard since pre-civil-war 1950s; sunset selfie obligatory tourist + local ritual",
      "Roman ruins",
      "Phoenician temple"
    ],
    a: 1
  },
  {
    q: "'tamayyeh' meaning?",
    opts: [
      "swimming",
      "cliff diving — local young men jumping from Raouche cliffs into Mediterranean below; risky tradition + performance for tourists; summer ritual; informal economy of small tips",
      "boating",
      "fishing"
    ],
    a: 1
  },
  {
    q: "Ramlet el-Bayda significance?",
    opts: [
      "private beach",
      "Beirut's last public sandy beach (Manara coast) — free swim for locals; controversy over private resort encroachment squeezing public access; civic battle over coastline 'public-trust' rights",
      "harbor",
      "fishing port"
    ],
    a: 1
  },
  {
    q: "Manara Corniche character?",
    opts: [
      "private gated walk",
      "democratic public seafront walkway from Ain el-Mreisseh to Raouche — joggers + cyclists + fishermen + lovers' benches + pigeon feeders + family strollers; Beirut's most egalitarian shared space",
      "tourist-only",
      "no public access"
    ],
    a: 1
  },
  {
    q: "Saint George Bay history?",
    opts: [
      "modern harbor",
      "Saint George Bay — Beirut harbor mythological St. George dragon-slaying legend site; Phoenician+Roman trade port origins millennia old; today Marina Towers + St. George Yacht Club",
      "private cove",
      "fishing only"
    ],
    a: 1
  },
  {
    q: "Bay Rock Café notable?",
    opts: [
      "modern bistro",
      "clifftop café Raouche overlooking Pigeon Rocks — iconic view; argileh + Turkish coffee; sunset hour packed; pre-2000 generation rendezvous spot still operating; postcard backdrop",
      "fast food",
      "rooftop bar"
    ],
    a: 1
  },
  {
    q: "Sporting Club history?",
    opts: [
      "modern gym",
      "historic Beirut beach club Manara — pre-civil-war elite institution; salt-water pool by sea + family memberships; nostalgic 1970s Beirut Riviera glamour vibe still alive",
      "stadium",
      "tennis only"
    ],
    a: 1
  },
  {
    q: "AUB seaside significance?",
    opts: [
      "no access",
      "American University of Beirut campus has private rocky beach below cliffs — students' free swim spot; AUB founded 1866 anchors west Beirut intellectual + cosmopolitan heritage",
      "modern pool",
      "indoor"
    ],
    a: 1
  },
  {
    q: "magharet el-7amam meaning?",
    opts: [
      "fish cave",
      "Pigeon Cave — natural arch passage through larger Pigeon Rock; small boats pass through the opening; cliff-divers + boat-tour photo stop; symbol of west Beirut sea adventure",
      "underground",
      "tunnel"
    ],
    a: 1
  },
  {
    q: "Raouche sunset cultural role?",
    opts: [
      "ignored",
      "ghroub esh-shams (sunset) — west-facing cliffs offer Beirut's world-class sunset 5-7pm in summer; daily ritual; tourists + locals + diaspora returnees converge; Instagram backdrop; symbol of Beirut resilience",
      "private only",
      "morning only"
    ],
    a: 1
  }
];

const RWC_TIPS = [
  "Pigeon Rocks IS Beirut's postcard — featured on tourism brochures, currency past, postcards since the 1920s; 'I went to Beirut' = 'I went to Raouche'",
  "'Tamayyeh' cliff dives are NOT safe but are tradition — young men perform leaps for tourist tips; periodic deaths but locals shrug 'fil dam' (in the blood); part of Raouche identity",
  "Ramlet el-Bayda is a civic battlefield — last public Beirut beach being squeezed by private resort encroachment; locals' protests + court cases; symbol of public-trust vs developer profit",
  "Bay Rock Café is generational — your parents went there in the 1980s, you go now; argileh + Turkish coffee + sunset hour ritual transcends civil-war eras",
  "Manara Corniche IS Beirut's most democratic space — rich + poor + Christian + Muslim + Druze + refugees + diaspora all walk the same waterfront 3pm-9pm; rare unsegregated public sphere"
];
