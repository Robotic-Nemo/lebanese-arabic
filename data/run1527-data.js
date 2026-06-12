// R1527 — NEW FEATURE: Lebanese Time & Lateness Culture (ltn)

const LTN_WORDS = [
  { w: "sa3a lubnaniyye", tr: "ساعة لبنانية", en: "Lebanese time (culturally late)", ex: "jina 3al sa3a lubnaniyye, ma fi mshkle", exEn: "we arrived on Lebanese time, no problem", notes: "universal Lebanese concept — arriving 30min to 2hrs late is normal and expected at social events" },
  { w: "3ayyir", tr: "عيّر", en: "late / delayed", ex: "laish 3ayyirt ktir?", exEn: "why are you so late?", notes: "3ayyir = delayed or running behind; used casually without blame at informal gatherings" },
  { w: "wein inta", tr: "وين إنتا", en: "where are you? (the classic check-in)", ex: "wein inta, kell l nas wselou", exEn: "where are you? everyone has arrived", notes: "the go-to WhatsApp message when someone is late — sent repeatedly without annoyance implied" },
  { w: "3am 2iji", tr: "عم إيجي", en: "I'm coming (but haven't left yet)", ex: "3am 2iji, bass lahzit", exEn: "I'm coming, just a moment", notes: "'3am 2iji' is often said while still at home getting ready — means 'coming soon' not 'en route'" },
  { w: "ba3d shwayy", tr: "بعد شوي", en: "a little while (vague time unit)", ex: "ba3d shwayy bkoon 3andak", exEn: "in a little while I'll be with you", notes: "ba3d shwayy can mean 5 minutes or 2 hours — Lebanese time is elastic" },
  { w: "2addi", tr: "قدي", en: "I'm on my way / heading over", ex: "2addi, bas fi za77ame", exEn: "I'm on my way, just there's traffic", notes: "2addi = literally 'I'm coming/heading' — confirms you've left but gives no ETA" },
  { w: "tawwal 3alay", tr: "طوّل عليي", en: "be patient with me / bear with me", ex: "tawwal 3alay, ma bta2akhkhir ktir", exEn: "be patient with me, I won't be too late", notes: "polite way to acknowledge you're running behind and asking the other person to wait" },
  { w: "za77ame", tr: "زحمة", en: "traffic jam (top excuse)", ex: "fi za77ame kbire, ma kenit bidi", exEn: "there's heavy traffic, it wasn't my intention", notes: "za77ame is the #1 Lebanese excuse for lateness — often true, always accepted" },
  { w: "mshghool", tr: "مشغول", en: "busy (excuse for lateness / cancellation)", ex: "kenit mshghoul, ma2 dareit ji", exEn: "I was busy, I couldn't make it", notes: "mshghool = busy; used as universal explanation for any delay, absence, or unreturned call" },
  { w: "7addan", tr: "حدان", en: "on time / punctual", ex: "ja 7addan l marra, shee nadir", exEn: "he came on time this time, rare thing", notes: "being 7addan is remarkable enough to comment on — Lebanese culture treats punctuality as an exception" },
  { w: "3al tardim", tr: "عالطرديم", en: "exactly on time / on the dot", ex: "wselna 3al tardim, la 2addam la ta2akhkhur", exEn: "we arrived exactly on time, neither early nor late", notes: "3al tardim = precisely on time; usually said with mild pride or surprise since it's so uncommon" },
  { w: "2ayyid l maw3id", tr: "قيّد الموعد", en: "confirm the appointment", ex: "2ayyid l maw3id abel ma troo7", exEn: "confirm the appointment before you go", notes: "essential in Lebanon — always re-confirm any appointment the day before, plans change constantly" },
  { w: "bawwaz", tr: "بوّظ", en: "ruined / cancelled (plans)", ex: "bawwaz l yom kello", exEn: "he ruined the whole day", notes: "bawwaz = ruined/wrecked; used when someone's lateness or no-show messes up the schedule" },
  { w: "maw3id", tr: "موعد", en: "appointment / scheduled time", ex: "3andi maw3id, ma fini ita2akhkhar", exEn: "I have an appointment, I can't be late", notes: "maw3id = formal commitment; calling it a maw3id signals you take it more seriously than casual plans" },
  { w: "la2 msarni", tr: "لا مسرني", en: "I'm not rushing (I have time)", ex: "la2 msarni, khod waqtak", exEn: "I'm not rushing, take your time", notes: "said generously to signal the other person not to hurry; very Lebanese social lubricant" },
  { w: "2antar", tr: "قنطر", en: "stood up / left waiting", ex: "2antarni sa3tein, ma ji", exEn: "he left me waiting two hours, didn't show", notes: "2antar = to be left waiting a long time without the person showing — a serious social offense" },
  { w: "baddis", tr: "بدّيس", en: "dawdling / dragging feet", ex: "laish 3am tbaddis? yalla yalla", exEn: "why are you dawdling? come on, let's go", notes: "baddis = going very slowly when speed is needed — scolding someone for delaying departure" },
  { w: "inshallah", tr: "إن شاء الله", en: "God willing (time wildcard)", ex: "inshallah bkra bkoon jaahez", exEn: "God willing, I'll be ready tomorrow", notes: "in time-commitment context, 'inshallah' often means maybe — the ultimate Lebanese time hedge" }
];

const LTN_DRILLS = [
  { q: "What is 'sa3a lubnaniyye'?", a: "Lebanese time (arriving late)", hint: "30min to 2hrs late is normal" },
  { q: "What does '3am 2iji' really mean?", a: "I'm coming (but haven't left yet)", hint: "said while still at home" },
  { q: "How long is 'ba3d shwayy'?", a: "a little while (vague — could be 5 min or 2 hours)", hint: "elastic Lebanese time unit" },
  { q: "What is the #1 Lebanese excuse for lateness?", a: "za77ame (traffic)", hint: "always true, always accepted" },
  { q: "What does '7addan' mean?", a: "on time / punctual", hint: "noteworthy because so rare" },
  { q: "What does '2antar' mean?", a: "to be stood up / left waiting", hint: "a serious social offense" },
  { q: "How do you confirm an appointment?", a: "2ayyid l maw3id", hint: "always do this before going" },
  { q: "What does 'baddis' mean?", a: "dawdling / dragging feet", hint: "scolding someone for being slow" },
  { q: "What does 'tawwal 3alay' mean?", a: "be patient with me / bear with me", hint: "polite way to say you're running late" },
  { q: "Why is 'inshallah' a time wildcard?", a: "it often means maybe — not a firm commitment", hint: "the ultimate Lebanese time hedge" }
];

const LTN_TIPS = [
  "The 'sa3a lubnaniyye' (Lebanese time) concept is real and universal. Social events like dinners, parties, and family gatherings run 30 minutes to 2 hours late by default. If you're invited for 8pm, arriving at 8 is too early — 9 is more appropriate. Only medical appointments and formal meetings call for actual punctuality.",
  "The phrase '3am 2iji' (I'm coming) is one of the most important cultural phrases to understand. When someone says '3am 2iji,' they have NOT necessarily left their house. It means 'I intend to come soon.' Follow up with 'ta3it min wein?' (you left from where?) to get a clearer picture of their actual location.",
  "Lebanese traffic (za77ame) is both a genuine problem and a cultural institution. The Beirut-to-airport road, the coastal highway, and any road after 5pm can turn a 15-minute journey into 90 minutes. Using za77ame as an excuse is universally accepted because it is usually partially true.",
  "Always confirm ('2ayyid') any Lebanese appointment the day before. Plans in Lebanon change constantly — someone might have a family obligation, a power cut, or simply forgot. Sending a WhatsApp message the morning of 'still on for tonight?' is standard practice and not considered rude.",
  "The Lebanese relationship with 'inshallah' in time context is nuanced. Three levels: 'inshallah bukra' said firmly = likely yes. 'Inshallah' with a slight pause = maybe. 'Inshallah inshallah' said quickly = polite way to say no. Understanding this tonal difference is key to navigating Lebanese social commitments."
];
