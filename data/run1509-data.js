// R1509 — NEW FEATURE: Lebanese Breakfast & Morning Culture (msb)

const MSB_WORDS = [
  { w: "futur", tr: "فطور", en: "breakfast", ex: "l futur 3enna l yom", exEn: "breakfast is at our place today", notes: "morning meal; weekend futur is sacred" },
  { w: "msebbeh", tr: "مسبحة", en: "warm hummus with olive oil & toppings", ex: "3al 7amem msebbeh ma3 banadoura", exEn: "piping hot msebbeh with tomatoes", notes: "Beirut breakfast staple" },
  { w: "ful", tr: "فول", en: "fava beans with lemon and olive oil", ex: "ful ma3 2ahwe", exEn: "ful with coffee", notes: "the classic Lebanese morning fuel" },
  { w: "ka3k", tr: "كعك", en: "sesame ring bread", ex: "ka3k ma3 jibneh", exEn: "ka3k with white cheese", notes: "sold by street vendors at dawn" },
  { w: "zaatar w zeit", tr: "زعتر وزيت", en: "thyme spice mix and olive oil", ex: "khbiz w zaatar w zeit", exEn: "bread with zaatar and olive oil", notes: "dip bread in oil then zaatar" },
  { w: "labne", tr: "لبنة", en: "strained yogurt spread", ex: "labne ma3 khyar w na3na3", exEn: "labne with cucumber and mint", notes: "often drizzled with olive oil" },
  { w: "jibneh 3kawiyye", tr: "جبنة عكاوية", en: "Akawi white cheese", ex: "jibneh 3kawiyye mallet", exEn: "salty Akawi cheese", notes: "named after Akkar region" },
  { w: "bayd m3allaq", tr: "بيض معلق", en: "scrambled eggs", ex: "bayd m3allaq ma3 banadoura", exEn: "scrambled eggs with tomatoes", notes: "m3allaq = stirred/suspended" },
  { w: "fnjel 2ahwe", tr: "فنجان قهوة", en: "cup of coffee", ex: "fnjel 2ahwe 3al sobeh", exEn: "a morning coffee", notes: "espresso-style Turkish coffee" },
  { w: "2ahwe 3arabiyye", tr: "قهوة عربية", en: "Arabic cardamom coffee", ex: "2ahwe 3arabiyye ma3 tamr", exEn: "Arabic coffee with dates", notes: "light, cardamom-spiced; served in small cups" },
  { w: "sobeh", tr: "صبحية", en: "morning ritual / morning gathering", ex: "sobeh 3al balkon", exEn: "morning gathering on the balcony", notes: "deeply Lebanese — shared with neighbors" },
  { w: "t2ashal", tr: "تأشل", en: "to wake up groggily / slowly", ex: "la7zeh, 3am t2ashal", exEn: "hold on, still waking up", notes: "very colloquial Lebanese verb" },
  { w: "3aseer laymoun ta2", tr: "عصير ليمون طازج", en: "freshly squeezed lemon juice", ex: "3aseer laymoun ta2 ma3 na3na3", exEn: "fresh lemon juice with mint", notes: "ta2 = fresh/just squeezed" },
  { w: "yislam ideyk", tr: "يسلم إيديك", en: "God bless your hands (for cooking)", ex: "yislam ideyk, ktir tayib l futur", exEn: "God bless your hands, breakfast is amazing", notes: "essential Lebanese gratitude expression" },
  { w: "sahteen", tr: "صحتين", en: "double health / enjoy your meal", ex: "sahteen 3al 2alb", exEn: "double health to your heart", notes: "said when someone is eating" },
  { w: "futur jheiz", tr: "فطور جاهز", en: "breakfast is ready", ex: "yallah, l futur jheiz!", exEn: "come on, breakfast is ready!", notes: "the call everyone waits for" },
  { w: "ma2boul", tr: "مقبول", en: "decent / acceptable (of food)", ex: "l msebbeh kter ma2boul", exEn: "the msebbeh is very good", notes: "understated praise — actually means excellent" },
  { w: "3al berkeh", tr: "عالبركة", en: "with God's blessing", ex: "futur 3al berkeh", exEn: "breakfast with blessing", notes: "said before a meal; berkeh = blessing" }
];

const MSB_DRILLS = [
  { q: "How do you say 'breakfast is ready'?", a: "futur jheiz", hint: "jheiz = ready" },
  { q: "Warm hummus topped with olive oil and tomatoes?", a: "msebbeh", hint: "Beirut morning staple, served piping hot" },
  { q: "How do you compliment the cook after breakfast?", a: "yislam ideyk", hint: "bless your hands" },
  { q: "Lebanese word for 'morning gathering / ritual'?", a: "sobeh", hint: "often on the balcony with coffee" },
  { q: "Strained yogurt spread common at breakfast?", a: "labne", hint: "drizzled with olive oil" },
  { q: "How do you say 'enjoy your meal' in Lebanese?", a: "sahteen", hint: "double health" },
  { q: "Lebanese sesame ring bread sold by street vendors?", a: "ka3k", hint: "filled with zaatar or white cheese" },
  { q: "To wake up slowly and groggily?", a: "t2ashal", hint: "very Lebanese verb, heard every morning" },
  { q: "Fava bean dish with lemon and olive oil?", a: "ful", hint: "classic morning fuel" },
  { q: "How do you say 'breakfast with God's blessing'?", a: "futur 3al berkeh", hint: "berkeh = blessing" }
];

const MSB_TIPS = [
  "In Lebanon, weekend breakfast (futur) is a 2-hour family event — never rushed. Arriving late is fine; leaving early is not.",
  "Msebbeh is always ordered 'hot' (sakhne) — it arrives in a bowl with olive oil, diced tomatoes, and raw onion on top. Bread is mandatory.",
  "Ka3k vendors appear at dawn calling '2a3k! 2a3k!' — the sesame ring bread comes stuffed with zaatar or jibneh. Pairs with tea or coffee.",
  "The sobeh (morning ritual) on the balcony is deeply Lebanese — neighbors shout 'sabah l kher!' across balconies while sipping coffee.",
  "Saying 'yislam ideyk' to whoever cooked is non-negotiable politeness — it literally blesses the hands. Skipping it is noticed."
];
