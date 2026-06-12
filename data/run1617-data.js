// R1617 — Akkar (akr) Lebanon's far northern region
// Topics: Halba (capital), Akkar plateau, Sunni heartland, Syrian border,
// Wadi Khaled, Qammoua reserve, Akkari oranges + tobacco, traditional dabke,
// kebbet hashweh, Akkari diaspora, neglect + poverty, Mikati family.

const AKR_WORDS = [
  { w: '3Akkar', t: 'عكار', e: 'Akkar (northernmost province, Sunni heartland, ~280k pop)', ex: '3Akkar el-mu7afaza el-aba3ad shamel Lebnen.' },
  { w: 'Halba', t: 'حلبا', e: 'Halba (Akkar provincial capital, market town)', ex: 'es-souq el-osbou3i bHalba mlena ktir.' },
  { w: '3Akkar el-3Atiqa', t: 'عكار العتيقة', e: 'Akkar el-Atika (historic Mamluk citadel village)', ex: '7eSn 3Akkar el-3Atiqa fawk jbel byTel.' },
  { w: 'sahel 3Akkar', t: 'سهل عكار', e: 'Akkar plain (fertile lowland, citrus + wheat farms)', ex: 'sahel 3Akkar mzar3a ktir, byzra3o lemoun w bordkan.' },
  { w: 'Wadi Khaled', t: 'وادي خالد', e: 'Wadi Khaled (border valley with Syria, mixed tribes)', ex: 'Wadi Khaled mtawSal ma3 Souriye, fi 3aylet mtawzi3in.' },
  { w: 'Qammoua', t: 'قموعة', e: 'Qammoua (forest reserve, oak + pine highlands)', ex: 'msha7anat ghabet Qammoua kel saif la-l-shi 7lawe.' },
  { w: 'jourd 3Akkar', t: 'جرد عكار', e: 'Akkar highlands (rugged mountain interior)', ex: 'jourd 3Akkar bared bel-shete, mghatte tellij.' },
  { w: '3Akkari', t: 'عكاري', e: 'Akkari (person from Akkar, distinctive accent)', ex: 'el-3Akkari bye7ke kelmet "wlek" w "ya zalame" ktir.' },
  { w: 'el-burdkan', t: 'البرتقان', e: 'oranges (Akkar plain main citrus crop)', ex: 'el-burdkan el-3akkari el-7elo, byaSdor la-l-Khalij.' },
  { w: 'tabgh 3Akkar', t: 'تبغ عكار', e: 'Akkar tobacco (Regie monopoly crop, livelihood)', ex: 'jeddi byzra3 tabgh 3Akkar w byb3o la-r-Regie.' },
  { w: 'kebbet 7ashwe', t: 'كبة حشوة', e: 'kebbe hashwe (Akkari signature stuffed kebbe with rice + meat)', ex: 'em-mart 3ammi 3amlit kebbet 7ashwe — Toulit el-yom.' },
  { w: 'el-mahmsa', t: 'المحمصة', e: 'mahmsa (roasted bulgur wheat, north winter staple)', ex: 'el-mahmsa Tay7Toura, byekloha ma3 laben.' },
  { w: 'eS-Sahel', t: 'الساحل', e: 'the coast (Akkari coastal strip, Cheikh Zennad fishing villages)', ex: 'rou7na 3a Cheikh Zennad 3aS-Sahel la-nshouf el-ba7r.' },
  { w: 'el-Mikati', t: 'الميقاتي', e: 'Mikati (Sunni political family, Tripoli/Akkar PM Najib)', ex: 'Najib Mikati Saar ra2is el-7okoumi mar2at edda.' },
  { w: '3aylet Mar3i', t: 'عيلة مرعي', e: 'Mar\'i family (prominent Akkari tribal family)', ex: '3aylet Mar3i kbira w mawjoudin b-akhtar dyou3 3Akkar.' },
  { w: 'el-mugharbe', t: 'المغربة', e: 'expatriates (heavy Akkari diaspora to Gulf + Africa)', ex: 'kell 3aylit 3akkari fiya mughareben b-Africa aw Khalij.' }
];

const AKR_DRILLS = [
  { q: 'What is Akkar?', a: 'Lebanon\'s far northern province', exp: 'Northernmost mu7afaza, borders Syria, capital Halba. Largely Sunni Muslim, mostly rural + agricultural. Historically marginalized by central state — poorest region in Lebanon.' },
  { q: 'What is Akkar el-Atika?', a: 'Mamluk-era citadel village', exp: 'Historic stronghold built by Mamluks 13-14th c. on rocky hilltop. Walls + tower remain. Symbol of Akkar\'s pre-Ottoman past. Visited for ruins + sweeping plateau views.' },
  { q: 'What is Wadi Khaled?', a: 'Border valley with Syria', exp: 'Eastern Akkar river valley straddling LB-Syria border. Mixed Arab tribes spread on both sides — same families, two passports. Heavy Syrian refugee population since 2011.' },
  { q: 'What is Qammoua?', a: 'Akkar forest reserve', exp: 'High-altitude pine + oak forest 1500m+. Cooler summers, popular for camping + hiking. One of last big native forests in Lebanon — fragile, fires + grazing pressure.' },
  { q: 'Who is Najib Mikati?', a: 'Sunni PM, Tripoli/Akkar tycoon', exp: 'Self-made billionaire, telecommunications. Three-time Prime Minister of Lebanon (2005, 2011-14, 2021-25). Mikati family historically rooted in Tripoli + north Sunni networks.' },
  { q: 'What does an Akkari accent sound like?', a: 'Distinctive northern Sunni dialect', exp: '"Wlek" (=hey/dude) every other sentence, hard "qaf" sometimes preserved (vs. coastal glottal stop). More tribal/rural prosody. Often comedy stereotype on Lebanese TV.' },
  { q: 'What is Akkar plain known for?', a: 'Citrus + tobacco farming', exp: 'Sahel Akkar = fertile coastal-adjacent flatland. Oranges, lemons exported to Gulf. Tobacco grown on government Regie contracts — primary cash crop after citrus.' },
  { q: 'What is kebbet hashwe?', a: 'Akkari stuffed kebbe with rice', exp: 'Distinctive Akkari kebbe variant: thick bulgur shell stuffed with seasoned rice + minced meat (instead of standard onion-meat-pine-nut). Served in tray, baked. Sunday family meal.' },
  { q: 'Why is Akkar marginalized?', a: 'Historic state neglect of north', exp: 'Lowest GDP per capita in Lebanon, weakest infrastructure (roads, schools, hospitals). Heavy out-migration. Politicians treat as vote bank. Key Syrian refugee host area pre + post 2011.' },
  { q: 'What is the Akkari diaspora known for?', a: 'Gulf + West Africa migration', exp: 'Generations of Akkari men work in Gulf (oil sector, construction) and West Africa (trade, Senegal/Côte d\'Ivoire diamond + textile networks). Remittances = village lifeblood.' }
];

const AKR_TIPS = [
  { t: '🏰 Akkar el-Atika hike', b: 'Drive Halba → Sheikh Mohammed → Akkar el-Atika. Steep narrow road last 5km. Citadel ruins free + open. Best at sunset, valley turns gold. Bring water — no shops on top.' },
  { t: '🍊 Akkari oranges in winter', b: 'Sahel Akkar citrus harvest peaks Dec-Feb. Roadside stalls in villages around Halba sell direct from grove. Sweet thick-skinned, ideal for juice. Far cheaper than supermarket. Bring crates.' },
  { t: '🌲 Qammoua hiking & camping', b: 'Cooler than coast, even August nights ~15°C. Trail to Qornet el-Kbira summit. Wild pine + Lebanese cedar. Fenced reserve area, others free-access. Local guides cheap, ask at Fneideq cafés.' },
  { t: '🚗 Akkar road trip caveats', b: 'Most roads narrow + potholed, infrastructure neglected. Coastal route Tripoli→Halba ~1h, but inland mountain roads slow. No public transport beyond Halba. Limited petrol stations — fill up before going east of Halba.' },
  { t: '🛂 Wadi Khaled border zone', b: 'Sensitive area, occasional Lebanese army checkpoints. Have ID ready. Locals welcoming but stay out of unmarked tracks near actual border line. Many villages literally split by border with cousin houses across line.' }
];
