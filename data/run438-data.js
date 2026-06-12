// R438 — Lebanese Crisis Survival Vocabulary (crs)
const CRS_WORDS = [
  // electricity & power
  { ar: 'كهربا', tr: 'kahraba', en: 'electricity', cat: 'electricity' },
  { ar: 'مولّد', tr: 'moulad', en: 'generator', cat: 'electricity' },
  { ar: 'شومبو', tr: 'shumbu', en: 'circuit breaker / power cut (colloquial)', cat: 'electricity' },
  { ar: 'قطعة كهربا', tr: 'aT3et kahraba', en: 'power cut / blackout', cat: 'electricity' },
  { ar: 'مشيّة الكهربا', tr: 'mshiyet el kahraba', en: 'electricity schedule (rationing hours)', cat: 'electricity' },
  { ar: 'أمبيرات', tr: 'ambiraat', en: 'generator subscription amperes (measure of generator share)', cat: 'electricity' },
  { ar: 'موزّع كهربا', tr: 'mwazza3 kahraba', en: 'private generator distributor (neighborhood supplier)', cat: 'electricity' },
  { ar: 'شمعة', tr: 'sham3a', en: 'candle', cat: 'electricity' },
  { ar: 'مصباح شمسي', tr: 'maSbaa7 shamsi', en: 'solar lamp / LED emergency light', cat: 'electricity' },
  { ar: 'طاقة شمسية', tr: 'Taaka samsiyye', en: 'solar energy', cat: 'electricity' },
  // fuel & transport
  { ar: 'بنزين', tr: 'benzin', en: 'gasoline / fuel', cat: 'fuel' },
  { ar: 'محطة بنزين', tr: 'ma7aTTit benzin', en: 'gas station', cat: 'fuel' },
  { ar: 'طابور', tr: 'Taabuur', en: 'queue / line (especially fuel queue)', cat: 'fuel' },
  { ar: 'موزّع', tr: 'mwazza3', en: 'fuel distributor / rationing dealer', cat: 'fuel' },
  { ar: 'مازوت', tr: 'maazuut', en: 'diesel / heating fuel', cat: 'fuel' },
  { ar: 'تنكة', tr: 'tankee', en: 'jerrycan / fuel container', cat: 'fuel' },
  { ar: 'محروقات', tr: 'ma7ruuqaat', en: 'fuel (general term)', cat: 'fuel' },
  // currency & money
  { ar: 'ليرة لبنانية', tr: 'liira lubnaaniyye', en: 'Lebanese lira', cat: 'currency' },
  { ar: 'فريش دولار', tr: 'frish dollar', en: 'fresh dollar (transferred from abroad, spendable)', cat: 'currency' },
  { ar: 'ليرة على الورا', tr: 'liira 3a el wara', en: 'Lebanese lira way down (losing value rapidly)', cat: 'currency' },
  { ar: 'صراف', tr: 'Sarroof', en: 'currency exchanger / money changer', cat: 'currency' },
  { ar: 'حوالة', tr: '7awaale', en: 'money transfer (especially from diaspora)', cat: 'currency' },
  { ar: 'على الدولار', tr: '3a el dollar', en: 'priced in dollars (USD)', cat: 'currency' },
  { ar: 'هاير', tr: 'haayir', en: 'lost / bewildered (used to describe helplessness with prices)', cat: 'currency' },
  // water
  { ar: 'ماي', tr: 'maay', en: 'water (colloquial)', cat: 'water' },
  { ar: 'تانكر', tr: 'taankar', en: 'water tanker truck', cat: 'water' },
  { ar: 'خزان', tr: 'khazzaan', en: 'water tank / cistern', cat: 'water' },
  { ar: 'ما في ماي', tr: 'ma fi maay', en: 'there is no water', cat: 'water' },
  { ar: 'موتور المي', tr: 'mootur el mayy', en: 'water pump motor', cat: 'water' },
  // internet & phones
  { ar: 'إنترنت', tr: 'internet', en: 'internet', cat: 'digital' },
  { ar: 'إنترنت عَعَع', tr: 'internet 3a3', en: 'internet is cutting out (stutter slang)', cat: 'digital' },
  { ar: 'داتا', tr: 'daata', en: 'mobile data', cat: 'digital' },
  { ar: 'شحن الهاتف', tr: 'sha7an el haatif', en: 'phone credit top-up', cat: 'digital' },
  { ar: 'باور بانك', tr: 'pawer baank', en: 'power bank (essential in crisis)', cat: 'digital' },
  // crisis expressions
  { ar: 'أزمة', tr: 'azme', en: 'crisis', cat: 'expressions' },
  { ar: 'تدبّر', tr: 'tadabbar', en: 'to manage / make do / improvise', cat: 'expressions' },
  { ar: 'منكمّل', tr: 'mnkammal', en: "we carry on / we manage (Lebanese resilience phrase)", cat: 'expressions' },
  { ar: 'مش تابع', tr: 'mish taabi3', en: "can't keep up (with rising prices)", cat: 'expressions' },
  { ar: 'ما في كهربا', tr: 'ma fi kahraba', en: 'there is no electricity', cat: 'expressions' },
  { ar: 'بكرا برجع', tr: 'bukra birja3', en: 'tomorrow it comes back (hopeful / resigned)', cat: 'expressions' },
];

const CRS_DRILLS = [
  {
    q: 'What is "moulad" (مولّد) in the context of Lebanese daily life?',
    opts: ['the electrical grid', 'a private generator (backup power source)', 'a type of candle', 'the electricity meter'],
    correct: 1,
    note: '"Moulad" (generator) is not just a machine in Lebanon — it\'s a full parallel economy. Every building subscribes to a private generator owner who runs diesel-powered generators during scheduled outages. You pay monthly for "ambiraat" (ampere capacity). In 2022, most Lebanese had only 1-3 hours of state electricity per day, relying entirely on generator subscriptions.'
  },
  {
    q: 'What does "mshiyet el kahraba" (مشيّة الكهربا) mean?',
    opts: ['the electricity company office', 'the electricity schedule (rationing timetable)', 'walking somewhere without lights', 'a power surge'],
    correct: 1,
    note: '"Mshiyet el kahraba" (electricity schedule) refers to the rationing timetable that tells residents exactly which hours state electricity will be available. It changed daily and by neighborhood. Checking "shu l mshiye?" (what\'s the schedule?) was a morning ritual for millions of Lebanese — essential for planning cooking, charging devices, and running appliances.'
  },
  {
    q: 'What is a "Taabuur" (طابور) most associated with during the Lebanese fuel crisis?',
    opts: ['a traffic police checkpoint', 'a long queue at the gas station waiting for fuel', 'a type of diesel generator', 'a neighborhood power outage'],
    correct: 1,
    note: '"Taabuur" means queue, but during the 2021 fuel crisis it became synonymous with the hours-long lines at gas stations. Lebanese would sleep in their cars overnight to secure fuel. Some people ran out of gas in the queue itself. The "Taabuur 3al benzin" (fuel queue) became a symbol of the crisis — a daily humiliation for a middle-class country that once had everything.'
  },
  {
    q: 'What is "frish dollar" (فريش دولار)?',
    opts: ['a new US banknote', 'dollars transferred from abroad that can be freely used (not frozen in banks)', 'dollars exchanged at the black market', 'counterfeit currency'],
    correct: 1,
    note: '"Fresh dollars" became a crucial distinction after Lebanon\'s 2019 banking collapse. Dollars already in Lebanese banks became "lollars" (Lebanese dollars) — trapped and unwithdrawable at real value. "Fresh dollars" are new USD transferred from abroad (diaspora, new salary) that actually retain their value and can be used freely. The distinction shapes every financial conversation in Lebanon today.'
  },
  {
    q: 'What does "tadabbar" (تدبّر) reflect about Lebanese crisis culture?',
    opts: ['giving up and leaving Lebanon', 'improvising and making do — Lebanese resilience and resourcefulness', 'complaining loudly about the situation', 'asking the government for help'],
    correct: 1,
    note: '"Tadabbar" (to manage/improvise) is the survival verb of crisis-era Lebanon. "Kif btdabbir?" (how do you manage?) is how people ask each other about daily survival. Lebanese culture has deep roots in improvisation — from the civil war through the 2006 war to the 2019 collapse. "Mnkammal" (we carry on) is the attitude. Solar panels, rooftop water tanks, private generators — Lebanese "tadabbar" on all fronts.'
  },
  {
    q: 'What is a "taankar" (تانكر) used for in Lebanon?',
    opts: ['delivering fuel to generators', 'delivering water when municipal supply fails', 'transporting cash to banks', 'carrying garbage in areas without municipal service'],
    correct: 1,
    note: 'A "taankar" (water tanker truck) is essential in Lebanon because municipal water supply is intermittent or nonexistent in many areas. Families maintain a "khazzaan" (rooftop water tank) and order taankars to refill it. During summer, taankars circle neighborhoods with drivers calling out prices. The water bill is now a separate informal economy — another parallel system Lebanese created to compensate for state failure.'
  },
  {
    q: 'What does "3a el dollar" (على الدولار) mean when pricing something?',
    opts: ['accepting payment only via bank transfer', 'the price is quoted in US dollars, not Lebanese lira', 'a discounted price for diaspora', 'payment by installment plan'],
    correct: 1,
    note: 'Since the lira\'s collapse, Lebanese merchants increasingly price goods "3a el dollar" (in USD). A restaurant bill, a doctor visit, a school fee — these might all be quoted in dollars now. This created a two-tier economy: those with fresh dollars live normally, those with only lira struggle as the rate fluctuated from 1,500 LL/$ to over 90,000 LL/$ by 2023. The dollar became a psychological anchor.'
  },
  {
    q: 'What is "sha7an el haatif" (شحن الهاتف) in crisis context?',
    opts: ['charging your phone battery (constant concern with blackouts)', 'paying your phone bill', 'buying a new phone', 'unlocking a blocked number'],
    correct: 0,
    note: '"Sha7an el haatif" (charging the phone) became a crisis survival skill. With power cuts lasting 20+ hours, keeping your phone charged meant strategic planning: charge when generator is on, use power banks, charge at coffee shops. "Ihtiyaat el battery" (battery conservation) — turning off WiFi, dimming screens — became second nature. Phones are lifelines for news, group chats, and crisis information.'
  },
  {
    q: 'What does "mnkammal" (منكمّل) express?',
    opts: ['we are finished / giving up', 'we carry on / we keep going (Lebanese resilience)', 'we need more money', 'we are waiting for the government'],
    correct: 1,
    note: '"Mnkammal" (we carry on, we continue) is a condensed expression of Lebanese crisis culture. It\'s neither optimism nor despair — it\'s the pragmatic acknowledgment that life must go on despite circumstances. You hear it after describing power cuts, price hikes, emigration of friends. It\'s related to "3am mnkammal" (we\'re managing). Lebanon has a dark humor about survival: "mish 3aarfin kif, bas mnkammal."'
  },
  {
    q: 'What is "Sarroof" (صراف) and why are they important in Lebanon?',
    opts: ['an ATM machine', 'a currency exchanger — essential because banks froze accounts and lira lost value', 'a bank teller', 'a government finance official'],
    correct: 1,
    note: '"Sarroof" (money changer / currency exchanger) went from an occasional service to a daily necessity after 2019. With Lebanese banks restricting withdrawals and the official exchange rate disconnected from reality, the street exchange market via "Saraafiif" (exchangers) became the real economy. People checked the "rate" (exchange rate) daily as a life barometer. The "sarroof" on the corner became more trusted than the bank.'
  },
];

const CRS_TIPS = [
  {
    title: '⚡ The Generator Economy',
    body: 'Lebanon runs a parallel electricity economy. Every building subscribes to a "maHalle" (neighborhood generator owner) who charges monthly fees based on "ambiraat" (ampere capacity). When state electricity ("kahraba el dawle") cuts, the generator kicks in. In 2022, most areas had only 1-3 hours of state power daily. The generator industry employs thousands, runs on diesel (itself in shortage), and costs families $50-200/month on top of state bills. Solar panels on rooftops are now a status symbol and practical investment — "shet 3a el shams" (switched to solar) is a common announcement.'
  },
  {
    title: '⛽ The Fuel Crisis (2021)',
    body: 'In summer 2021, Lebanon ran out of fuel. Gas stations closed, the few open had multi-hour queues. Hospitals nearly ran out of generator fuel. Lebanon\'s subsidies system had been exhausted by currency collapse — importing fuel cost real dollars the central bank couldn\'t supply. The crisis lasted months. Key vocabulary: "Taabuur 3al benzin" (fuel queue), "mfiyye el ma7aTTa" (station is empty), "badna benzin" (we need fuel). Many Lebanese started keeping "tankiyye" (jerrycans) as backup — a wartime habit revived.'
  },
  {
    title: '💵 Understanding the Lira Collapse',
    body: 'The Lebanese lira (LL) was pegged at 1,500 LL/$ for 30 years. After the 2019 financial collapse, it fell to 1,500 → 3,000 → 10,000 → 30,000 → 90,000+ LL/$. Three exchange rates coexisted: the official bank rate, the "sarroof" street rate, and the black market rate. "Frish dollar" (fresh dollars from abroad) retained value; "bank dollars" (lollars) could only be withdrawn at unfavorable rates. Salary in lira = impoverishment. This is why "3a el dollar" pricing became standard for any quality product or service.'
  },
  {
    title: '🚿 The Water Situation',
    body: 'Municipal water runs a few hours per day or less in many areas. Buildings have rooftop "khazzaan" (storage tanks) that get filled when municipal water flows. When tanks run low, families call a "taankar" (water truck). A tanker refill costs $10-30 depending on size. In summer, tankers are booked days ahead. Water quality from taps varies; many buy filtered water for drinking. "Ma fi mayy" (no water) is as common a complaint as "ma fi kahraba." The unofficial water economy is worth millions annually.'
  },
  {
    title: '📱 Digital Survival Tools',
    body: 'Lebanese crisis culture produced a set of digital survival habits: (1) "Electricity apps" tracking real-time generator/state power schedules by neighborhood; (2) WhatsApp groups for building residents coordinating power schedules; (3) Currency exchange apps checking daily lira rates; (4) "Wa2t el kahraba" (electricity time) as a shared social reference; (5) Power banks charged in shifts. Dark humor thrives: memes about checking the "mshiye," celebrating unexpected electricity, or calculating how many hours you can run your AC on the generator. Lebanese black humor about survival is its own coping mechanism.'
  },
];

const CRS_ABOUT = 'The Lebanese economic and infrastructure crisis, accelerating since 2019, created an entirely new vocabulary of daily survival. Power cuts (aT3et kahraba), generator culture (moulad), fuel queues (Taabuur 3al benzin), currency collapse (liira 3a el wara), and water shortages (taankar, khazzaan) became the language of everyday life. Understanding this vocabulary is essential for anyone in Lebanon or connected to Lebanese communities — it explains how 5 million people navigate a state that has largely stopped functioning. The words here reflect not just hardship, but also the remarkable improvisation (tadabbar) and dark humor that Lebanese culture deploys to survive. "Mnkammal" — we carry on.';
