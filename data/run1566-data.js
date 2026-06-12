// R1566 — NEW FEATURE: Lebanese Lottery & Yanaseeb Culture (ynb)
const YNB_WORDS = [
  { w: "yanaseeb", t: "يانصيب", en: "lottery", ex: "Btil3ab yanaseeb kil jum3a?", exEn: "Do you play the lottery every Friday?", notes: "Lebanon's national lottery — 'La Libanaise des Jeux' since 2002. Drawings every Thursday." },
  { w: "loto", t: "لوتو", en: "Loto (number lottery)", ex: "Khasret bil loto la-thelet marra.", exEn: "I lost the Loto for the third time.", notes: "Pick 6 numbers from 42. The flagship draw — jackpot rolls over weekly." },
  { w: "zeed", t: "زيد", en: "Zeed (instant scratch ticket)", ex: "Shtarayt zeed b-elf, rbi7t alfayn.", exEn: "I bought a Zeed for 1k, won 2k.", notes: "Instant scratch-off card. Cheaper, faster, the impulse buy at every dekken." },
  { w: "kebsh", t: "كبش", en: "the jackpot / grand prize", ex: "El-kebsh hal jum3a meet milyoun.", exEn: "The jackpot this Friday is 100 million.", notes: "Literally 'the ram' — slang for the top prize. Comes from sacrificial-ram imagery: the big one." },
  { w: "ra2m 7arim", t: "رقم حظ", en: "lucky number", ex: "Sab3a ra2m 7arimi.", exEn: "Seven is my lucky number.", notes: "Most Lebanese players have a fixed 'lucky' set — birthdays, anniversaries, Quranic numbers. Never changed even after losses." },
  { w: "warqa", t: "ورقة", en: "ticket", ex: "Dayya3et el-warqa!", exEn: "I lost the ticket!", notes: "Generic for any lotto slip. Holding the warqa near family while watching the draw is a small ritual." },
  { w: "sa7eb", t: "سحب", en: "the draw / drawing", ex: "El-sa7eb el-yom el-sa3a tmaneh.", exEn: "The draw is today at 8.", notes: "The televised drawing. Aired on Télé Liban for decades — many older Lebanese still tune in habitually." },
  { w: "fzeit", t: "فزت", en: "I won!", ex: "Fzeit! Fzeit b-loto!", exEn: "I won! I won the Loto!", notes: "The shouted celebration. Often misheard as 'fzi3t' (got scared) — context disambiguates." },
  { w: "khasret", t: "خسرت", en: "I lost", ex: "Khasret kel masari el-shahr.", exEn: "I lost all my money this month.", notes: "The shrugged-off admission. Lebanese gambling fatalism: 'el-mara el-jeyye' (next time)." },
  { w: "ba3id 3annak", t: "بعيد عنّك", en: "far from you (touch wood)", ex: "Ba3id 3annak, khsert kteer.", exEn: "Far from you (God forbid), I lost a lot.", notes: "Said when sharing bad fortune — wishes the listener escapes the same fate. Standard after loss talk." },
  { w: "ba2she", t: "بقشيش", en: "tip after winning", ex: "B3atli ba2she la-Abu Khalil!", exEn: "Send a tip to Abu Khalil!", notes: "Lebanese tradition: winners tip the kiosk seller who sold the lucky ticket. 1-5% common." },
  { w: "naseeb", t: "نصيب", en: "fate / one's share", ex: "Hayda mish naseebi.", exEn: "This isn't my fate.", notes: "Quran-rooted concept of pre-ordained share. Used to soften losses — 'wasn't meant to be mine.'" },
  { w: "rbi7", t: "ربح", en: "winnings / profit", ex: "El-rbi7 ma byiji bel souhoula.", exEn: "Winnings don't come easily.", notes: "Used both for lottery cash and broader income. Lebanese proverb: 'el-rbi7 el-7alel byibroum' (honest profit blesses you)." },
  { w: "tasleem el-jaa2za", t: "تسليم الجائزة", en: "prize claim / collection", ex: "Tasleem el-jaa2za bel-3awasem fi Beirut.", exEn: "Prize collection at the headquarters in Beirut.", notes: "Big wins claimed in person at Hamra HQ. ID + ticket required. Anonymity not guaranteed." },
  { w: "jaru bayya3 yanaseeb", t: "جارّ بيّاع يانصيب", en: "lottery hawker (street seller)", ex: "El-jaru bayya3 yanaseeb 3a Hamra.", exEn: "The lottery hawker is on Hamra.", notes: "Walking street vendors — older men, often retirees, with fan-shaped ticket displays. A vanishing scene." },
  { w: "bel-mishmesh", t: "بالمشمش", en: "in your dreams / when apricots bloom", ex: "Btirba7 el-yanaseeb? Bel-mishmesh!", exEn: "You'll win the lottery? In your dreams!", notes: "Sarcastic dismissal — apricots bloom briefly, so 'in apricot season' = unlikely. The teasing reply when someone fantasizes about jackpots." }
];

const YNB_DRILLS = [
  { q: "How say 'lottery'?", a: "yanaseeb", hint: "Lebanon's national lottery name." },
  { q: "What's 'jackpot/grand prize'?", a: "kebsh", hint: "Literally 'the ram' — top prize slang." },
  { q: "How say 'I won!'?", a: "fzeit", hint: "Shouted at the TV after the draw." },
  { q: "What's 'lucky number'?", a: "ra2m 7arim", hint: "Birthdays, ages, anniversaries — never changed." },
  { q: "How say 'the draw'?", a: "sa7eb", hint: "Televised drawing on Télé Liban." },
  { q: "What's 'fate / one's share'?", a: "naseeb", hint: "Quran-rooted concept used to soften losses." },
  { q: "How say 'I lost'?", a: "khasret", hint: "Shrugged-off admission. 'El-mara el-jeyye.'" },
  { q: "What's 'instant scratch ticket'?", a: "zeed", hint: "Cheap impulse buy at every dekken." },
  { q: "What's 'tip to the kiosk seller'?", a: "ba2she", hint: "Tradition: winners tip who sold them the ticket." },
  { q: "Sarcastic 'in your dreams'?", a: "bel-mishmesh", hint: "Apricot-blossom timing — unlikely." }
];

const YNB_TIPS = [
  "🎟️ Lebanon's national lottery is 'La Libanaise des Jeux' (since 2002, succeeding the older Yanaseeb el-Watani). Tickets sold at every dekken and roadside kiosk.",
  "🐏 'Kebsh' (ram) for the jackpot is pure Lebanese — derives from sacrificial-ram imagery. The biggest prize is always 'the ram.'",
  "📺 Older Lebanese still watch the televised draw on Thursday nights with the warqa (ticket) in hand. A multi-generational living-room ritual.",
  "🍑 'Bel-mishmesh' (in apricot season) is the standard sarcastic response to wishful thinking — apricots bloom briefly, so the phrase mocks impossibility.",
  "💰 Winners tip the kiosk vendor who sold them the lucky ticket — 'ba2she' is expected, often 1-5% of winnings. The seller becomes a local celebrity for a day."
];
