// R912 — NEW FEATURE: Lebanese Solar & Generator Culture (slr)

const SLR_WORDS = [
  { ar: 'كهربا', tr: 'kahraba', en: 'electricity' },
  { ar: 'قطع الكهربا', tr: '2ata3 el-kahraba', en: 'power cut / electricity outage' },
  { ar: 'موتور', tr: 'moteur', en: 'generator (French loanword)' },
  { ar: 'اشتراك موتور', tr: 'ishtiraak el-moteur', en: 'generator subscription (monthly fee)' },
  { ar: 'أمبير', tr: 'amper', en: 'amperes (how much generator capacity you pay for)' },
  { ar: 'ألواح شمسية', tr: 'alwaa7 shamsiyye', en: 'solar panels' },
  { ar: 'بطارية', tr: 'battariyye', en: 'battery / UPS unit' },
  { ar: 'انفرتر', tr: 'inverter', en: 'inverter (DC-to-AC converter)' },
  { ar: 'عداد', tr: '3addaad', en: 'electricity meter' },
  { ar: 'كهربجي', tr: 'kahrabaaji', en: 'electrician' },
  { ar: 'كهرباء حكومية', tr: 'kahraba 7kuumiyye', en: 'government / EDL electricity supply' },
  { ar: 'الضو', tr: 'ed-daw', en: 'the light / electricity (colloquial)' },
  { ar: 'الضو رجع', tr: 'ed-daw rija3', en: 'the electricity came back!' },
  { ar: 'قطع الضو', tr: '2ata3 ed-daw', en: 'the electricity cut out' },
  { ar: 'نشرة', tr: 'nishre', en: 'electricity schedule / bulletin (hours on/off)' },
  { ar: 'ساعة الحكومية', tr: 'saa3et el-7kuume', en: 'government electricity hour (scheduled on-time)' },
  { ar: 'فيوز', tr: 'fyuz', en: 'fuse / circuit breaker' },
  { ar: 'محول', tr: 'mu7awwil', en: 'transformer' },
  { ar: 'خزانة كهربائية', tr: 'khizzaane kahrabaiyye', en: 'electrical fuse box / panel' },
  { ar: 'ديزل', tr: 'diizil', en: 'diesel (fuel for generators)' },
  { ar: 'تانك', tr: 'taank', en: 'diesel tank' },
  { ar: 'ميكانيسيان', tr: 'mecanicien', en: 'generator mechanic (French loanword)' },
  { ar: 'UPS', tr: 'UPS', en: 'UPS / battery backup unit' },
  { ar: 'شمعة', tr: 'sham3a', en: 'candle (used during outages)' },
  { ar: 'مقاطعة', tr: 'mu2aata3a', en: 'power disconnection / outage period' },
  { ar: 'بدي أشترك', tr: 'baddii ishtrik', en: 'I want to subscribe (to the generator)' },
  { ar: 'الموتور كافي؟', tr: 'el-moteur kaafi?', en: 'is the generator enough (power)?'},
  { ar: 'طلع الضو', tr: 'tili3 ed-daw', en: 'the power came on (lit: the light went up)' }
];

const SLR_DRILLS = [
  { q: 'How do you say "electricity"?', opts: ['moteur', 'kahraba', 'amper', 'fyuz'], ans: 1 },
  { q: 'What is "2ata3 el-kahraba"?', opts: ['Power came back', 'Generator subscription', 'Power cut', 'Solar panels'], ans: 2 },
  { q: 'How do you say "generator"?', opts: ['battariyye', 'inverter', 'taank', 'moteur'], ans: 3 },
  { q: 'What does "ishtiraak el-moteur" mean?', opts: ['Electricity meter', 'Generator subscription', 'Fuse box', 'Government electricity'], ans: 1 },
  { q: 'How do you say "solar panels"?', opts: ['alwaa7 shamsiyye', 'battariyye', 'kahraba 7kuumiyye', 'nishre'], ans: 0 },
  { q: 'What is "ed-daw rija3"?', opts: ['Power cut out', 'Subscribe to generator', 'Electricity came back!', 'Candle'], ans: 2 },
  { q: 'How do you say "amperes" (generator capacity)?', opts: ['3addaad', 'fyuz', 'amper', 'mu7awwil'], ans: 2 },
  { q: 'What does "nishre" mean in the electricity context?', opts: ['Inverter', 'Electricity schedule/bulletin', 'Transformer', 'Diesel tank'], ans: 1 },
  { q: 'How do you say "electrician"?', opts: ['mecanicien', 'kahrabaaji', 'mu7awwil', '3addaad'], ans: 1 },
  { q: 'What is "kahraba 7kuumiyye"?', opts: ['Solar power', 'Government/EDL electricity', 'Battery backup', 'Generator fuel'], ans: 1 },
  { q: 'How do you say "candle" (used during outages)?', opts: ['diizil', 'taank', 'sham3a', 'inverter'], ans: 2 },
  { q: 'What does "tili3 ed-daw" mean?', opts: ['Power cut out', 'Candle lit', 'Power came on', 'Subscribe to generator'], ans: 2 },
  { q: 'How do you say "diesel" (generator fuel)?', opts: ['fyuz', 'diizil', 'UPS', 'nishre'], ans: 1 },
  { q: 'What is "inverter" used for?', opts: ['Generator subscription', 'Electricity meter reading', 'DC-to-AC conversion / battery backup', 'Power cut schedule'], ans: 2 },
  { q: 'How do you say "fuse / circuit breaker"?', opts: ['amper', 'taank', '3addaad', 'fyuz'], ans: 3 },
  { q: 'What does "baddii ishtrik" mean?', opts: ['I want solar panels', 'I want to subscribe (to generator)', 'The power is back', 'I need diesel'], ans: 1 }
];

const SLR_TIPS = [
  { title: 'The Two-Grid Life', body: 'Lebanon has two electricity grids running simultaneously: the government supply (kahraba 7kuumiyye from EDL — Électricité du Liban) and the private generator network (el-moteur). Most areas get 2-4 hours of government power per day. The rest of the day runs on the generator. You pay a monthly subscription (ishtiraak) to the neighborhood generator owner based on how many amps (amper) you want — like a cable TV package for electricity.' },
  { title: 'The Ampere Economy', body: 'The generator system is built around amps. A family might pay for 5 amper from the moteur — enough for lights, fridge, and TV but not A/C. Wealthier households pay for 10-20 amper. The generator owner (sa7eb el-moteur) is both a utility provider and a neighborhood power broker. Disputes over billing, stolen amps, or generator breakdowns are serious social events.' },
  { title: 'Solar Goes Mainstream', body: 'After the 2019 economic collapse wiped out generator subsidies, many Lebanese households installed solar panels (alwaa7 shamsiyye) and battery inverter systems. Solar became a survival strategy, not a luxury. Rooftops across Beirut and the mountains now bristle with panels. "3indak solar?" (do you have solar?) has become a standard question when visiting someone\'s home or renting an apartment.' },
  { title: '"The Light is Back" Culture', body: '"Ed-daw rija3!" (the electricity came back!) is one of Lebanon\'s most celebrated phrases. When government power returns, everything plugged in simultaneously turns on — TVs, washing machines, phone chargers, water pumps — creating a chaotic surge. Families schedule laundry, dishwashers, and hot water around the nishre (schedule). Power hour times are tracked obsessively on neighborhood WhatsApp groups.' },
  { title: 'Generator Mechanic: A Noble Profession', body: 'The mecanicien (generator mechanic) is a sought-after and respected figure. When the neighborhood generator breaks down mid-summer, he becomes the most popular person in the building. Diesel (diizil) delivery trucks navigate Beirut streets regularly. The taank (diesel tank) level is monitored carefully. Candles (sham3a) are kept in every drawer — not for romance, but for survival.' }
];
