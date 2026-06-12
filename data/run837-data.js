// R837 — NEW FEATURE: Lebanese Startup & Tech Culture (srk)

const SRK_CATS = ['startup','tech','work','expressions'];

const SRK_WORDS = [
  // startup ecosystem
  { a: 'شركة ناشئة', tr: 'sharke naashe', en: 'startup — the Lebanese tech ecosystem is one of MENA\'s most active', cat: 'startup' },
  { a: 'رائد أعمال', tr: 'raaid a3maal', en: 'entrepreneur — highly respected title in Lebanese culture', cat: 'startup' },
  { a: 'استثمار', tr: 'istismaar', en: 'investment — "istismaar" sought by every Lebanese startup founder', cat: 'startup' },
  { a: 'مسرّع', tr: 'msarra3', en: 'accelerator — Beirut has several startup accelerators (Berytech, Speed)', cat: 'startup' },
  { a: 'حاضنة', tr: '7aDine', en: 'incubator — supports early-stage Lebanese startups', cat: 'startup' },
  { a: 'فكرة', tr: 'fikre', en: 'idea — "3ande fikre" (I have an idea) starts every Lebanese startup story', cat: 'startup' },
  { a: 'بيتش', tr: 'pitch', en: 'pitch — every Lebanese entrepreneur has a pitch ready at all times', cat: 'startup' },
  // tech work
  { a: 'مبرمج', tr: 'mbarammij', en: 'programmer/developer — highly sought-after in Lebanon\'s tech sector', cat: 'tech' },
  { a: 'تطبيق', tr: 'taTbiiq', en: 'app/application — "shu l-taTbiiq?" = what\'s the app?', cat: 'tech' },
  { a: 'موقع', tr: 'maw2i3', en: 'website — "3amlu maw2i3" = they made a website', cat: 'tech' },
  { a: 'إنترنت', tr: 'internet', en: 'internet — notoriously slow and expensive in Lebanon', cat: 'tech' },
  { a: 'انقطع النت', tr: 'in2ata3 in-net', en: '"the internet cut out" — most common phrase in Lebanese remote work', cat: 'tech' },
  { a: 'شارج', tr: 'shaarij', en: 'charging — "batariyye faaDye" (battery empty), chronic Lebanese problem', cat: 'tech' },
  { a: 'باور بنك', tr: 'power bank', en: 'power bank — essential Lebanese tech item due to electricity cuts', cat: 'tech' },
  // work culture
  { a: 'عمل عن بعد', tr: '3amal 3an bu3d', en: 'remote work — normalized in Lebanon, often from cafés or abroad', cat: 'work' },
  { a: 'فريلانسر', tr: 'freelancer', en: 'freelancer — very common Lebanese work model, paid in USD', cat: 'work' },
  { a: 'فريق', tr: 'farik', en: 'team — "shu l-farik?" = what\'s the team? always asked in pitch meetings', cat: 'work' },
  { a: 'اجتماع', tr: 'ijtimaa3', en: 'meeting — "3andna ijtimaa3" = we have a meeting', cat: 'work' },
  { a: 'ديدلاين', tr: 'deadline', en: 'deadline — borrowed directly from English, universally understood', cat: 'work' },
  { a: 'راتب بالدولار', tr: 'raatib bil-dollar', en: 'salary in dollars — the holy grail of Lebanese employment', cat: 'work' },
  { a: 'أوف شور', tr: 'offshore', en: 'offshore work — working for foreign clients, pays better than local', cat: 'work' },
  // expressions
  { a: 'بدنا نحرك', tr: 'bidna n7arrik', en: '"we need to get things moving" — Lebanese startup energy phrase', cat: 'expressions' },
  { a: 'سكيل أب', tr: 'scale up', en: '"scale up" — Lebanese founders\' dream, often said in English', cat: 'expressions' },
  { a: 'خليها تشتغل', tr: 'khalliya tishtaghil', en: '"let it work/run" — pragmatic Lebanese engineering philosophy', cat: 'expressions' },
  { a: 'ما في كهربا', tr: 'ma fi kahraba', en: '"no electricity" — the universal Lebanese work/life obstacle', cat: 'expressions' },
  { a: 'بنعمل شي كبير', tr: 'bna3mal shi kbiir', en: '"we\'re building something big" — Lebanese founder confidence', cat: 'expressions' },
  { a: 'المشروع', tr: 'il-mashru3', en: 'the project — "shu l-mashru3?" = what\'s the project/startup?', cat: 'expressions' },
  { a: 'بعد إشي', tr: 'ba3d ishi', en: '"there\'s still something" — indicating more features/work to come', cat: 'expressions' }
];

const SRK_DRILLS = [
  { q: 'What is "sharke naashe"?', opts: ['a large corporation','a government agency','startup — Lebanon has one of MENA\'s most active tech ecosystems','a freelance contract'], ans: 2, exp: '"Sharke naashe" (شركة ناشئة) = nascent/rising company = startup. Beirut has been called the "startup capital of the Arab world" — it produced companies like Anghami, Wamda, and Myki. The ecosystem is strong despite economic crises.' },
  { q: '"Raatib bil-dollar" is...', opts: ['a banking term','salary in dollars — the Lebanese employment holy grail','a payment app','investing in USD'], ans: 1, exp: '"Raatib bil-dollar" (راتب بالدولار) = salary in dollars — after the 2019 financial collapse, the Lebanese pound lost 90%+ of its value. Being paid in USD became the #1 employment priority. It separates stable jobs from precarious ones.' },
  { q: 'What does "in2ata3 in-net" mean?', opts: ['"the network is working"','"I connected to wifi"','"the internet cut out" — most common Lebanese remote-work phrase','the app crashed'], ans: 2, exp: '"In2ata3 in-net" (انقطع النت) = the internet cut out — Lebanon has among the most expensive and unreliable internet in the world. It cuts constantly, especially during power outages. This phrase ends more Zoom calls than any other.' },
  { q: 'Why is a "power bank" essential in Lebanon?', opts: ['for charging phones while traveling','because of chronic electricity cuts — the Lebanese daily reality','for use at clubs','for charging laptops at cafés'], ans: 1, exp: 'Power banks are essential in Lebanon because electricity cuts happen multiple times daily in most areas. The state electricity supply is often 3-6 hours per day outside Beirut center. Power banks became ubiquitous necessities, not luxuries.' },
  { q: '"3amal 3an bu3d" means...', opts: ['working overtime','working from home / remote work — normalized in Lebanon','working abroad','working for a foreign company'], ans: 1, exp: '"3amal 3an bu3d" (عمل عن بعد) = work from a distance = remote work. Lebanon normalized remote work long before COVID — Beirut\'s café culture, unreliable infrastructure, and global diaspora connections made remote/freelance work standard.' },
  { q: 'What is "msarra3" in the startup context?', opts: ['a fast internet connection','a startup that grew quickly','accelerator — supports early-stage startups','an investor'], ans: 2, exp: '"Msarra3" (مسرّع) = accelerator (from "sara3a" = speed). Beirut accelerators like Berytech and the Lebanese American University\'s programs supported Lebanon\'s startup boom. The word is borrowed from English "accelerator" and arabicized.' },
  { q: '"Freelancer" in Lebanon typically means...', opts: ['someone between jobs','a very common work model, usually paid in USD','a part-time employee','someone working illegally'], ans: 1, exp: 'Freelancer (فريلانسر) is extremely common in Lebanon — many Lebanese professionals work for foreign companies via remote contracts. Being a freelancer paid in USD is often better than a local salaried job. The term is used directly in English.' },
  { q: '"Ma fi kahraba" affects work because...', opts: ['it means there\'s no coffee','electricity cuts disrupt internet, computers, and everything else','"kahraba" is a tech tool that stopped working','it signals the end of the workday'], ans: 1, exp: '"Ma fi kahraba" (ما في كهربا) = no electricity — Lebanon\'s electricity crisis means daily power cuts that kill internet routers, computers, and everything else. Lebanese workers build their schedules around when state power is expected.' },
  { q: 'What does "pitch" mean in Lebanese startup culture?', opts: ['a type of meeting room','a startup presentation — every Lebanese entrepreneur has one ready','the initial investment round','a co-working space'], ans: 1, exp: '"Pitch" (بيتش) is used directly from English in Lebanese startup culture. Lebanese entrepreneurs are known for being excellent storytellers and pitchers — the culture of bargaining and convincing in business life translates naturally to startup pitches.' },
  { q: '"Bidna n7arrik" in startup context means...', opts: ['"we need to move office"','"we need to get things moving" — Lebanese startup energy','requesting a product demo','asking to accelerate the deadline'], ans: 1, exp: '"Bidna n7arrik" (بدنا نحرك) = we need to get things moving — a Lebanese expression of readiness to take action. In startup culture it\'s used to push for progress, launch, or momentum. Lebanese culture rewards action and initiative.' },
  { q: 'What is "mbarammij"?', opts: ['a tech investor','programmer/developer — highly valued in Lebanon\'s tech sector','a startup founder','an app designer'], ans: 1, exp: '"Mbarammij" (مبرمج) = programmer — from "barmaje" = to program. Lebanese programmers are in high demand locally and internationally. Many work remotely for Gulf, European, or US companies from Beirut or from the diaspora.' },
  { q: '"Offshore" work in Lebanon means...', opts: ['working at the port area','working underwater or at sea','working for foreign clients — pays better than local jobs','illegal employment'], ans: 2, exp: '"Offshore" (أوف شور) = working for international clients remotely. In Lebanese business culture, "offshore" work is prestigious and financially superior to local employment. Payment in USD, euros, or GBP makes offshore work the primary goal for many Lebanese professionals.' },
  { q: 'What is a "7aDine" in the startup world?', opts: ['a startup competition','a co-working space','an incubator — supports very early-stage startups','a type of investor'], ans: 2, exp: '"7aDine" (حاضنة) = incubator (from "7aDane" = to incubate/nurture). Like "msarra3" (accelerator), 7aDine supports early startups but at an earlier stage — when the idea is still forming. AUB\'s Beritech is one of Lebanon\'s most prominent.' },
  { q: '"Khalliya tishtaghil" reflects what Lebanese engineering philosophy?', opts: ['perfectionism — don\'t launch until perfect','"let it work/run" — pragmatic, ship it and iterate','strict code quality standards','avoid launching without full testing'], ans: 1, exp: '"Khalliya tishtaghil" (خليها تشتغل) = let it work/run — embodies the Lebanese pragmatic approach to engineering: get it working first, fix it later. Born from necessity (constant crises), this philosophy is "make it work with what you have."' },
  { q: '"Bna3mal shi kbiir" expressed by a startup founder means...', opts: ['"we\'re building a large office"','"we\'re hiring many people"','"we\'re building something big" — Lebanese founder confidence','we need a large investment'], ans: 2, exp: '"Bna3mal shi kbiir" (بنعمل شي كبير) = we\'re making something big — classic Lebanese entrepreneurial confidence. Lebanese culture prizes boldness and ambition. Saying you\'re working on something big is expected and socially valued in the startup scene.' }
];

const SRK_TIPS = [
  'Beirut\'s tech ecosystem is one of the most active in the Arab world despite — or because of — the constant crises. Lebanese entrepreneurs have been building with extreme constraints for decades: unreliable power, slow internet, economic instability. This forced resilience produces exceptionally adaptable founders.',
  '"Raatib bil-dollar" (salary in dollars) became the defining employment metric after the 2019 financial crisis. The Lebanese pound lost over 90% of its value. Today, Lebanese professionals split sharply between those earning in hard currency (USD/EUR) and those in Lebanese pounds — the difference in purchasing power is enormous.',
  'The Lebanese startup scene produced several regional successes: Anghami (Arabic Spotify, acquired for $220M), Wamda (media/investment platform), Myki (password manager), and many others. Lebanese entrepreneurs punch well above the country\'s weight. The diaspora is a key distribution and funding network.',
  'Electricity ("kahraba") is the central constraint of Lebanese tech work. State power is 6-8 hours per day maximum in most areas. Lebanese workers master schedules around generator switches, invest in power banks, and design workflows around connectivity gaps. "Ma fi kahraba" is not an excuse — it\'s a daily fact.',
  'Lebanese work culture blends Arab formality with a startup/hustle mentality. Meetings start late, relationship-building is essential before business, but once the rapport is established, Lebanese business moves fast. The café is often the office — AUBites and tech workers fill Hamra and Mar Mikhael coffee shops, working on laptops for hours.',
  'The phrase "3ande fikre" (I have an idea) is everywhere in Lebanese startup culture — Lebanese people are natural entrepreneurs, trained by necessity to find gaps and fill them. The flip side is that execution often lags ideation. "Shu l-mashru3?" (what\'s the project?) is how Lebanese greet each other in startup circles.'
];
