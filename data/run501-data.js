// R501 — Lebanese Traffic & Driving Culture (prefix: trf)
const TRF_WORDS = [
  // vehicles
  {ar:'سيّارة', tr:'sayyaara', en:'car', cat:'vehicles'},
  {ar:'موتور', tr:'mootor', en:'motorcycle / scooter', cat:'vehicles'},
  {ar:'سيرفيس', tr:'seervis', en:'shared taxi (fixed route, cheap)', cat:'vehicles'},
  {ar:'باص', tr:'baas', en:'bus', cat:'vehicles'},
  {ar:'شاحنة', tr:'shaa7na', en:'truck / lorry', cat:'vehicles'},
  {ar:'فان', tr:'van', en:'van / minibus', cat:'vehicles'},
  // road & directions
  {ar:'طريق', tr:'Taree2', en:'road / way', cat:'road'},
  {ar:'دوّار', tr:'dawwaar', en:'roundabout (ubiquitous in Lebanon)', cat:'road'},
  {ar:'إشارة', tr:'ishaara', en:'traffic light', cat:'road'},
  {ar:'فرق', tr:'fara2', en:'turn-off / fork in the road', cat:'road'},
  {ar:'جسر', tr:'jisr', en:'bridge / overpass', cat:'road'},
  {ar:'نازل', tr:'naazil', en:'going down (direction cue on mountain roads)', cat:'road'},
  {ar:'طالع', tr:'Taali3', en:'going up (direction cue — up the mountain)', cat:'road'},
  {ar:'على اليمين', tr:'3a l-yamiin', en:'on the right', cat:'road'},
  {ar:'على الشمال', tr:'3a sh-shimaal', en:'on the left', cat:'road'},
  // traffic situations
  {ar:'زحمة', tr:'za7me', en:'traffic jam / congestion (constant in Beirut)', cat:'traffic'},
  {ar:'واقف', tr:'waa2if', en:'stopped / parked / stuck', cat:'traffic'},
  {ar:'سريع', tr:'sarii3', en:'fast / speeding', cat:'traffic'},
  {ar:'مخالفة', tr:'mukhaalafe', en:'traffic fine / violation ticket', cat:'traffic'},
  {ar:'حادث', tr:'7aadit', en:'accident / crash', cat:'traffic'},
  {ar:'بوق', tr:'boo2', en:'car horn (used liberally in Lebanon)', cat:'traffic'},
  // driving phrases
  {ar:'يلا', tr:'yalla', en:'let\'s go / move it! (to slow drivers)', cat:'phrases'},
  {ar:'عن طريقك', tr:'3an Taraatak', en:'move out of the way / make room', cat:'phrases'},
  {ar:'ويلي', tr:'willi', en:'oh no! / damn it! (reaction to bad driving)', cat:'phrases'},
  {ar:'كيف بدّو يمشي؟', tr:'kiif biddo yimshi?', en:'how is he supposed to drive? (rhetorical rage)', cat:'phrases'},
  {ar:'شو هالسواقة', tr:'shu hal-sawaa2a', en:'what kind of driving is this?! (criticism)', cat:'phrases'},
  {ar:'صرخ علي', tr:'Sara5 3alay', en:'he honked at me / he yelled at me', cat:'phrases'},
  // parking
  {ar:'باركة', tr:'baarka', en:'parking (spot / act of parking)', cat:'parking'},
  {ar:'حجز', tr:'7ajaz', en:'reserved / blocked (parking spot)', cat:'parking'},
  {ar:'مخلّف', tr:'mkhallef', en:'double-parked / illegally parked', cat:'parking'},
  {ar:'رفع السيارة', tr:'rafa3 s-sayyaara', en:'towed the car (nightmare scenario)', cat:'parking'},
  // service taxi culture
  {ar:'نزّلني هون', tr:'nazzilni hoon', en:'drop me off here (to service driver)', cat:'service'},
  {ar:'على المسرى', tr:'3a l-masra', en:'on the way / along the route', cat:'service'},
  {ar:'أوتوستوب', tr:'otostop', en:'hitchhiking (still common in Lebanese mountains)', cat:'service'},
  {ar:'عدّاد', tr:'3addaad', en:'taxi meter (rare in Lebanon — usually negotiate)', cat:'service'},
];

const TRF_DRILLS = [
  {
    q: 'What is "seervis" (سيرفيس) — Lebanon\'s most essential urban transport?',
    opts: [
      'A shared taxi that runs fixed routes at flat rates',
      'A private taxi ordered by phone for a fixed price',
      'A government bus with air conditioning',
      'A tourist shuttle between Beirut and the mountains'
    ],
    ans: 0,
    note: '"Seervis" (سيرفيس) = service taxi — a regular car that runs fixed routes picking up multiple passengers for a flat rate (traditionally 2,000 LL, now much more post-inflation). Say "seervis?" to a parked car to ask if it\'s running that route. "Seervis Hamra?" = are you going to Hamra? Non-negotiable price, no meter. The backbone of Lebanese urban mobility. "Nazzilni 3and el dawwaar" = drop me at the roundabout.'
  },
  {
    q: 'What does "za7me" (زحمة) mean and why is it Lebanon\'s most-said word?',
    opts: [
      'Traffic jam / congestion — Beirut\'s permanent state of movement',
      'Road construction — blocked roads being repaired',
      'A crowded market — people shopping in a narrow souk',
      'Rush hour — the 30-minute window of peak commuting'
    ],
    ans: 0,
    note: '"Za7me" (زحمة) = traffic jam / congestion. In Beirut, "za7me" is not a temporary condition — it is the baseline. "Fii za7me ktiir" = huge traffic (always). "Za7mit Dbayye" (Dbayye junction traffic) is legendary. Lebanese people plan their entire days around za7me. "Min el za7me" = because of traffic (universal excuse). The cause: Beirut designed for 500,000 people now holds 2M+, minimal public transport, everyone drives.'
  },
  {
    q: 'What does "dawwaar" (دوّار) mean — and why does Lebanon have so many?',
    opts: [
      'Roundabout — Lebanon\'s preferred intersection management system',
      'Speed bump — raised road obstacle to slow traffic',
      'A one-way street — road allowing traffic in one direction only',
      'A parking lot — designated area for leaving vehicles'
    ],
    ans: 0,
    note: '"Dawwaar" (دوّار) = roundabout. Lebanon uses "dawwaar" as navigation landmarks: "ba3d el dawwaar, 3a sh-shimaal" = after the roundabout, turn left. Famous ones: Dawwaar el Nahr, Dawwaar Sinn el Fil. Unlike Western countries, Lebanese roundabout behavior is improvised — lane markings are suggestions. "Rotary" is also used in Lebanese English. Navigating a "dawwaar" in Beirut is a full-contact sport.'
  },
  {
    q: 'What does "naazil/Taali3" (نازل/طالع) mean for navigation in Lebanon?',
    opts: [
      '"Going down/going up" — essential mountain road direction system',
      '"Left/right" — directional cues for city navigation',
      '"Fast/slow" — speed indicators for driving conditions',
      '"Arriving/departing" — status of a vehicle or driver'
    ],
    ans: 0,
    note: '"Naazil" (نازل) = going down (toward the coast/Beirut). "Taali3" (طالع) = going up (toward the mountains). Lebanese geography makes up/down the primary navigation axis. "3a l-2outel naazil" = at the hotel going down (toward sea). "Taali3 3al jibel" = heading up to the mountains. This up/down orientation applies to Beirut itself: "naazil 3al ba7ar" = going down to the sea. Everyone understands this implicitly.'
  },
  {
    q: 'What is "mkhallef" (مخلّف) in Lebanese parking culture?',
    opts: [
      'Double-parked / illegally parked — blocking others (extremely common)',
      'Reserved parking — a designated spot with a name or number',
      'Parking on a slope — dangerous mountain parking situation',
      'Paid parking — a meter or attendant-managed spot'
    ],
    ans: 0,
    note: '"Mkhallef" (مخلّف) = left behind / blocking — someone who has double-parked and left their car. Lebanese parking is creative: triple-parking exists, people block garages, sidewalks become car storage. "Miin el mkhallef el sayyaara?" = who left the blocking car? Standard practice: leave your number on the dashboard. "3am bikhallef" = he\'s double-parking (ongoing). Towing ("rafa3 s-sayyaara") is the feared consequence.'
  },
  {
    q: 'What does "3an Taraatak" (عن طريقك) mean when shouted from a car?',
    opts: [
      '"Get out of my way / move it" — urgent demand for space on the road',
      '"You\'re going the wrong way" — warning about direction error',
      '"Slow down" — warning to reduce speed',
      '"Your road is blocked" — informing of an obstacle ahead'
    ],
    ans: 0,
    note: '"3an Taraatak" (عن طريقك) = (get) off your path / move aside. The Lebanese driver\'s basic demand for road space. Also "3an Tareeek" or simply gesturing. Lebanese driving culture operates on the honk-first-look-second principle. "3an Taraatak, yalla!" = get out of the way, move! The horn ("boo2") accompanies everything. Lebanese horns aren\'t angry — they\'re communication: short tap = move, long blast = serious annoyance.'
  },
  {
    q: 'What is "otostop" (أوتوستوب) and where is it still practiced?',
    opts: [
      'Hitchhiking — still common on Lebanese mountain roads between villages',
      'A motorcycle taxi — an informal ride-sharing service',
      'A highway tollbooth — payment station on main roads',
      'A fuel station — where drivers stop to refuel'
    ],
    ans: 0,
    note: '"Otostop" (أوتوستوب) = hitchhiking (from French auto-stop). In Lebanese villages and mountain regions, hitchhiking remains a legitimate and practiced form of transport — especially where public transport is sparse. "Bidi 3mil otostop" = I want to hitchhike. Still relatively safe between villages where everyone knows everyone. Urban Beirut: rare. Mountain roads from Zahle to the Bekaa: common. Older Lebanese use it without second thought.'
  },
  {
    q: 'What does "rafa3 s-sayyaara" (رفع السيارة) mean and why do Lebanese fear it?',
    opts: [
      '"The car was towed" — worst case scenario for a Lebanese driver',
      '"He raised the car" — someone physically lifted a vehicle',
      '"The car went uphill" — navigation toward mountain areas',
      '"The car was repaired" — vehicle maintenance completed'
    ],
    ans: 0,
    note: '"Rafa3 s-sayyaara" (رفع السيارة) = towed the car (lit. "raised the car"). The nightmare scenario for Lebanese drivers. Municipal tow trucks do operate in Beirut, especially in Achrafieh and commercial areas. "Raff3uuli s-sayyaara" = they towed my car (disaster). Recovery involves finding which impound lot, paying fines, taking time off work. Lebanese drivers share towing zone locations like they share intelligence. "Ma t7oTTa hon — birfa3uula" = don\'t park here — they\'ll tow it.'
  },
  {
    q: 'What does "ishaara" (إشارة) mean — and what\'s the Lebanese relationship with it?',
    opts: [
      'Traffic light — which Lebanese drivers treat as suggestions, not commands',
      'Road sign — posted directions and speed limits',
      'Police signal — hand gesture from traffic officer',
      'Horn signal — specific pattern of honking for communication'
    ],
    ans: 0,
    note: '"Ishaara" (إشارة) = traffic light / signal. In Lebanon, the "ishaara" is technically law but culturally negotiable. Red at 2am in Beirut? Many drivers check for cars, then proceed. "El ishaara 7amra" = red light (technically stop). "El ishaara farret" = the light turned (just turned red/green). During power cuts, traffic lights go off — intersections self-regulate through improvised courtesy and aggression. Traffic police ("traffic") manage major junctions during peak hours.'
  },
  {
    q: 'What does "3addaad" (عدّاد) mean — and why is it almost mythological in Lebanon?',
    opts: [
      'Taxi meter — a device almost never used in Lebanese taxis',
      'Speedometer — measuring how fast the car is going',
      'Odometer — tracking total distance driven',
      'Parking meter — timed parking payment device'
    ],
    ans: 0,
    note: '"3addaad" (عدّاد) = meter / counter. In Lebanese taxis, the "3addaad" (meter) exists in theory and almost never in practice. Prices are negotiated before the trip: "2addeesh la Hamra?" = how much to Hamra? Standard tactic: ask the price, they say a high number, you counter, you meet somewhere. "Shu, ma fi 3addaad?" = what, no meter? (rhetorical — you know there isn\'t). Post-inflation, prices change daily. App taxis (Uber, Careem) brought metered pricing back to Lebanese streets.'
  },
];

const TRF_TIPS = [
  {
    title: 'Lebanese driving: rules and reality',
    body: 'Lebanon has a traffic code. It is widely ignored. Lane markings are suggestions. Turning signals are optional. The merge is Lebanese-style: whoever\'s bolder goes first. "Shaarif" (brash) driving gets you places; "khaaayef" (scared) driving gets you stuck. Foreigners are advised: watch Lebanese drivers for 10 minutes before driving yourself. The unwritten rules are complex — aggressive but communicative, dangerous-seeming but (mostly) functional. Honking is not rage; it\'s language.'
  },
  {
    title: 'Za7me: Beirut\'s permanent condition',
    body: 'Beirut traffic is not rush hour — it is a baseline. Morning (7:30–9:30), evening (4:30–7:30), and "just because" za7me (anytime). Causes: no functional public transport, most roads one-lane, illegal parking narrowing streets to one car width, construction blocking lanes, political motorcades ("mawkib") freezing entire districts. Lebanese timing accounts for za7me: "I\'ll be there in 10 minutes" means 30. "Ana 3am seer" (I\'m on my way) often means I haven\'t left yet.'
  },
  {
    title: 'The seervis system',
    body: '"Seervis" taxis are the informal public transport of Lebanon. Regular cars run fixed routes (printed nowhere — locals just know), pick up multiple strangers, drop each off along the route. Price fixed per leg. Say your destination to a stationary car; if they nod or say "tfaDDal" — get in. No app, no booking, no receipt. The system works entirely on shared local knowledge. "Seervis Hazmieh?" = are you doing the Hazmieh route? New to Beirut? Ask a local which "seervis" goes where.'
  },
  {
    title: 'Parking in Lebanon',
    body: 'Lebanese parking is improvised. Sidewalks, double-parking, blocking driveways — all routine. The etiquette: leave your phone number visible. Someone will call. You come out and move. No anger (usually). Official parking lots ("parking" — pronounced as French) charge by the hour. Valet parking is ubiquitous at restaurants and malls — hand keys to a stranger without hesitation. In residential areas, neighbors have unspoken "my spot" understandings enforced by side-eye and occasional confrontation.'
  },
  {
    title: 'Mountain driving: a separate skill',
    body: 'Lebanese mountain roads are narrow, winding, often unpaved, and shared with oncoming traffic, goats, and trucks. Key vocabulary: "naazil" (going down), "Taali3" (going up), "3a yamiin el 7eet" (hug the wall — on your right). Passing rule: whoever is going uphill has right of way. Night driving on mountain roads requires knowing the road — headlights illuminate only 20 meters of hairpin. Locals slow down for "naMaaat" (regular points) and speed up on straights. Brakes should be checked before any mountain descent.'
  },
];

const TRF_ABOUT = `
<p><strong>🚗 Lebanese Traffic & Driving Culture</strong></p>
<p>To drive in Lebanon is to understand Lebanon. The road is where Lebanese social values — hierarchy, improvisation, bravado, community — play out at 80 km/h. There are rules; they are negotiated in real time. There are lanes; they are suggestions. There are traffic lights; they are respected when a traffic officer is present.</p>
<p><strong>The infrastructure of chaos:</strong> Beirut was not designed for 2 million people and their cars. Narrow Ottoman-era streets, no functional metro, minimal bus network, and a culture that equates car ownership with dignity. The result: permanent "za7me" (congestion) that Lebanese navigate with a mix of patience, aggression, and elaborate informal rules.</p>
<p><strong>The seervis ecosystem:</strong> In the absence of formal public transport, "seervis" taxis fill the gap — informal, efficient, collective, priced by consensus. Every Lebanese knows which routes the seervis runs, where to flag one, and how much to pay. It requires no technology, no signage, no app. Pure social infrastructure.</p>
<p><strong>Horn as language:</strong> The Lebanese car horn is not rage — it is communication. Short tap: I'm here / move. Two taps: thank you / you go first. Long blast: this is unacceptable. Sequence of taps: I know you / hello. Learning "horn language" is as important as learning vocabulary.</p>
`;
