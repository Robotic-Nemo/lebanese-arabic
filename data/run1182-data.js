// R1182 — NEW FEATURE: Lebanese Mobile Phone & Telecom Culture (mbl)

const MBL_WORDS = [
  { ar: 'خط', tr: 'khatt', en: 'phone line / SIM plan' },
  { ar: 'رصيد', tr: 'rasid', en: 'credit balance (on phone)' },
  { ar: 'شحن', tr: 'shi7n', en: 'recharging credit / charging phone' },
  { ar: 'إنترنت', tr: 'internet', en: 'internet' },
  { ar: 'سيغنال', tr: 'signal', en: 'signal (coverage)' },
  { ar: 'مش شبكة', tr: 'mish shabake', en: 'no network / no signal' },
  { ar: 'روaming', tr: 'roaming', en: 'roaming' },
  { ar: 'تطبيق', tr: 'tatbii2', en: 'app / application' },
  { ar: 'واتساب', tr: 'whatsapp', en: 'WhatsApp (dominant messaging app)' },
  { ar: 'باقة', tr: 'ba2a', en: 'data/phone bundle/package' },
  { ar: 'ضعيف', tr: 'Da3if', en: 'weak (signal or battery)' },
  { ar: 'بطارية', tr: 'baTTariye', en: 'battery' },
  { ar: 'شاحن', tr: 'sha7en', en: 'charger' },
  { ar: 'مشغول', tr: 'mashghul', en: 'busy (line engaged)' },
  { ar: 'خارج التغطية', tr: 'kharij el-taghtiye', en: 'out of coverage area' },
  { ar: 'انقطع الخط', tr: 'n2aTa3 el-khatt', en: 'the call dropped / line cut' },
  { ar: 'تليفون بالجيب', tr: 'telefon bil-jib', en: 'mobile phone (lit. phone in the pocket)' },
  { ar: 'بيانات', tr: 'bayanat', en: 'data (mobile data)' },
  { ar: 'أوجيرو', tr: 'Ogero', en: 'Ogero (state internet provider)' },
  { ar: 'ألفا وتاتش', tr: 'Alfa w Touch', en: 'Alfa & Touch (Lebanon\'s two mobile operators)' },
];

const MBL_DRILLS = [
  { q: 'What does "rasid" mean?', opts: ['credit balance', 'signal strength', 'battery', 'charger'], ans: 0 },
  { q: '"Mish shabake" means:', opts: ['no network / no signal', 'out of battery', 'call dropped', 'busy line'], ans: 0 },
  { q: 'Lebanon\'s two mobile operators are:', opts: ['Alfa & Touch', 'Ogero & MTC', 'Touch & LTE', 'Alfa & Ogero'], ans: 0 },
  { q: 'How do you say "the call dropped"?', opts: ['n2aTa3 el-khatt', 'kharij el-taghtiye', 'mish shabake', 'ba2a khalisit'], ans: 0 },
  { q: '"Ba2a" in telecom context means:', opts: ['data/phone bundle', 'battery', 'charger', 'roaming'], ans: 0 },
  { q: 'What is "shi7n"?', opts: ['recharging credit', 'signal', 'busy line', 'application'], ans: 0 },
  { q: '"Kharij el-taghtiye" means:', opts: ['out of coverage', 'no battery', 'data used up', 'dropped call'], ans: 0 },
  { q: 'Ogero is:', opts: ['state internet provider', 'a mobile operator', 'a phone brand', 'a WhatsApp group'], ans: 0 },
];

const MBL_TIPS = [
  {
    title: 'Alfa & Touch — Lebanon\'s Telecom Duopoly',
    body: 'Lebanon has only two mobile operators: Alfa and Touch, both state-controlled. Competition is minimal and prices are among the highest in the region. Most Lebanese use both SIMs to maximize coverage. "El-khatt shu?" (which line?) is a common question.',
  },
  {
    title: 'Credit Culture & "Shi7n"',
    body: 'Mobile credit is sold as scratch cards ("kart shi7n") at every kiosk. With economic collapse, dollar-priced plans became unaffordable. "Rasid ma3i ktir" (I have lots of credit) or "rasid khilis" (credit ran out) are everyday phrases. WhatsApp calling replaced normal calls to avoid charges.',
  },
  {
    title: 'Internet Cuts & Ogero',
    body: 'Ogero is the state-run ISP providing DSL. Power cuts kill the internet along with electricity. Phrases like "el-internet maTfi" (the internet is off), "2awwim el-router" (restart the router), and "shi ghalt ma3 el-line" (something wrong with the line) are daily vocabulary.',
  },
  {
    title: 'WhatsApp as Primary Communication',
    body: 'In Lebanon, WhatsApp is effectively the national phone system. "B3atlak 3al WhatsApp" (I\'ll message you on WhatsApp) replaces SMS. Voice notes ("rasail sawtiyye") are preferred over texts. Groups for buildings, families, neighborhoods, and political affiliation are omnipresent.',
  },
];
