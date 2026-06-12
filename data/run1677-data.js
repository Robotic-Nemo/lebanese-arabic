// Run #1677 — NEW FEATURE: Lebanese Banking Crisis 2019-Present (bcr)
// Lollar, halqi, capital controls, BDL, Riad Salameh, October 17 trigger,
// hyperinflation, depositor protests, lira free-fall.

const BCR_WORDS = [
  { w: 'azme masrafiyye', t: 'أزمة مصرفية', en: 'banking crisis', ex: 'el-azme el-masrafiyye ballasht 2019.', exEn: 'The banking crisis began in 2019.' },
  { w: 'lollar', t: 'لولار', en: 'lollar (frozen $ in bank)', ex: 'el-lollar mish ka-el-cash dollar.', exEn: 'A lollar is not the same as a cash dollar.' },
  { w: 'fresh dollar', t: 'فريش دولار', en: 'fresh dollar (new cash $)', ex: 'baddi fresh dollar mish lollar.', exEn: 'I want fresh dollars, not lollars.' },
  { w: 'halqi', t: 'حلقي', en: 'old-money lira (pre-crisis)', ex: 'el-7isab halqi, ma fi qiyme.', exEn: 'The account is old-money, has no value.' },
  { w: 'lira', t: 'ليرة', en: 'Lebanese lira', ex: 'el-lira khasret 95% min qimeta.', exEn: 'The lira lost 95% of its value.' },
  { w: 'BDL', t: 'مصرف لبنان', en: 'Banque du Liban (central bank)', ex: 'BDL hawwal el-massari 3a Sayrafa.', exEn: 'BDL converted money via Sayrafa.' },
  { w: 'Sayrafa', t: 'صيرفة', en: 'Sayrafa exchange platform', ex: 'Sayrafa kanet sa3r el-sarf el-rasmi.', exEn: 'Sayrafa was the official exchange rate.' },
  { w: 'Riad Salameh', t: 'رياض سلامة', en: 'Riad Salameh (BDL governor)', ex: 'Riad Salameh 7akem el-BDL men 1993 la 2023.', exEn: 'Riad Salameh was BDL governor from 1993 to 2023.' },
  { w: 'haircut', t: 'هير كات', en: 'haircut (deposit loss)', ex: 'el-banks 3amlu haircut 3a el-wada3i3.', exEn: 'Banks did a haircut on the deposits.' },
  { w: 'capital control', t: 'كابيتال كنترول', en: 'capital controls', ex: 'capital control mana3 el-massari ma yetla3o.', exEn: 'Capital controls blocked money from leaving.' },
  { w: 'tas7eer', t: 'تسحير', en: 'cash withdrawal limit', ex: 'el-tas7eer 200$ bil-shahr.', exEn: 'The withdrawal cap is $200/month.' },
  { w: 'wadee3a', t: 'وديعة', en: 'deposit', ex: 'el-wadee3a kanet $50,000 sarat ma fi.', exEn: 'The deposit was $50K, now nothing.' },
  { w: 'tadakhom', t: 'تضخم', en: 'inflation / hyperinflation', ex: 'el-tadakhom wassal 240%.', exEn: 'Inflation reached 240%.' },
  { w: 'mu3ammelet sufi', t: 'معاملات صرف', en: 'exchange transactions', ex: 'mu3ammelet sufi 3al souq el-sawda.', exEn: 'Exchange transactions on the black market.' },
  { w: 'souq sawda', t: 'سوق سوداء', en: 'black market', ex: 'souq sawda 100,000 lira fil-dollar.', exEn: 'Black market is 100,000 LL per dollar.' },
  { w: 'mowda3in', t: 'مودعين', en: 'depositors', ex: 'el-mowda3in i3tasamu 2oddam el-bunuk.', exEn: 'Depositors held sit-ins outside banks.' },
  { w: '17 tishrin', t: '17 تشرين', en: 'October 17 (2019 protests)', ex: '17 tishrin sar dahr el-thawra.', exEn: 'October 17 became the day of revolution.' },
  { w: 'WhatsApp tax', t: 'ضريبة واتساب', en: 'WhatsApp tax (trigger)', ex: 'WhatsApp tax fajjarit el-thawra.', exEn: 'The WhatsApp tax triggered the revolution.' },
  { w: 'kelloun ya3ne kelloun', t: 'كلهن يعني كلهن', en: '"All of them means all of them"', ex: 'kelloun ya3ne kelloun, sh3ar el-thawra.', exEn: '"All of them means all of them" — the revolution slogan.' },
  { w: 'manhar', t: 'منهار', en: 'collapsing', ex: 'el-iqtisad manhar.', exEn: 'The economy is collapsing.' }
];

const BCR_DRILLS = [
  { q: 'When did the Lebanese banking crisis begin?', a: 'October 2019', d1: 'March 2020', d2: 'August 2020', exp: 'Banks froze withdrawals in October 2019, just before/after the Oct 17 thawra erupted.' },
  { q: 'What does "lollar" mean?', a: 'a US dollar trapped in a Lebanese bank, worth ~10-15¢ on the black market', d1: 'a fresh cash dollar', d2: 'a fake dollar', exp: 'Coined by economist Dan Azzi: dollar deposits became "Lebanese-only dollars" (lollars) after capital controls.' },
  { q: 'What event triggered the October 17 protests?', a: 'A proposed tax on WhatsApp calls', d1: 'Hariri\'s assassination', d2: 'Israeli attacks', exp: 'On Oct 17, 2019 the cabinet announced a $0.20/day WhatsApp call tax — protests exploded the same evening.' },
  { q: 'Roughly how much value did the Lebanese lira lose by 2023?', a: 'over 98% (from 1,500 → 100,000+ to the dollar)', d1: 'about 50%', d2: 'about 10%', exp: 'Pre-crisis: 1,500 LL/$. By late 2023: 89,500-100,000+ LL/$ on the black market — one of the worst currency collapses globally.' },
  { q: 'Who was BDL (central bank) governor during the crisis?', a: 'Riad Salameh (1993-2023)', d1: 'Saad Hariri', d2: 'Najib Mikati', exp: 'Salameh ran BDL for 30 years; ended his term in July 2023 under multiple international fraud indictments.' },
  { q: 'What is "Sayrafa"?', a: 'BDL\'s official exchange platform (subsidized rate)', d1: 'a black-market app', d2: 'a stock exchange', exp: 'Sayrafa was BDL\'s controlled platform offering an artificially favorable rate — gradually phased out 2023.' },
  { q: 'What is the famous October 17 slogan?', a: '"Kelloun ya3ne kelloun" (All of them means all of them)', d1: '"Bread and dignity"', d2: '"Lebanon first"', exp: 'A blanket condemnation of the entire ruling class — sectarian leaders included.' },
  { q: 'What is "haircut" in banking-crisis Arabic?', a: 'losing a portion (often 70-85%) of your deposit value', d1: 'a free service from BDL', d2: 'a tax discount', exp: 'Various restructuring proposals included writing off most deposits — never formally enacted, but de facto enforced via lollar conversion.' },
  { q: 'What were Lebanese banks\' withdrawal caps in 2020-2022?', a: 'around $100-400 per month at fixed sub-market rates', d1: 'no limits', d2: 'unlimited dollars', exp: 'Caps varied by bank; depositors lost most of their deposit value through forced lira conversion at official rates well below market.' },
  { q: 'What does "manhar" mean?', a: 'collapsing / collapsed', d1: 'rising', d2: 'frozen', exp: 'منهار = collapsed/collapsing — used constantly during 2019-2023 to describe lira, banks, electricity, governance.' }
];

const BCR_TIPS = [
  'The IMF estimated total Lebanese banking-sector losses at over $70 billion — proportionally the worst banking crisis in modern history (2024 World Bank report).',
  'Riad Salameh was indicted in France, Germany, Luxembourg, and Switzerland on money laundering, embezzlement, and illicit enrichment charges — multiple ongoing trials as of 2025.',
  'Pre-2019, Lebanese banks offered 7-15% interest on dollar deposits — luring diaspora savings into a Ponzi-like scheme that collapsed when foreign inflows dried up.',
  '"Sayrafa" became a symbol of opacity: BDL set the rate, decided who got dollars, and printed lira to fund the gap — fueling hyperinflation.',
  'October 17, 2019 protests were called the "October Revolution" (thawret 17 tishrin) — the WhatsApp tax was the spark, but accumulated grievances over corruption, garbage crisis, and electricity were the fuel.'
];
