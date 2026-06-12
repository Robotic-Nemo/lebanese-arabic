// R1614 — Sarraf & Currency Exchange coach (srf)
// Topics: lira collapse 2019-, dollarization, sayrafa, lollars, BDL,
// Riad Salameh scandal, capital controls, black market USD, fresh dollars,
// money changers, ATM withdrawal limits, dual pricing.

const SRF_WORDS = [
  { w: 'es-Sarraf', t: 'الصراف', e: 'sarraf (money changer, exchange shop owner)', ex: 'r7et 3al-Sarraf b-Hamra Saraflo dolar.' },
  { w: 'el-Lira', t: 'الليرة', e: 'Lebanese lira (LBP, official currency, collapsed 98%)', ex: 'el-lira ma 3ad 7eda fiya ma3 el-azme.' },
  { w: 'ed-Dolar', t: 'الدولار', e: 'dollar (USD, de-facto currency since 2019)', ex: 'kell shi b-Lebnen 3am yenba3 b-d-dolar lyom.' },
  { w: 'es-Sayrafa', t: 'صيرفة', e: 'Sayrafa (BDL official exchange platform 2021-)', ex: 'es-Sayrafa kenet btet3atal yawm el-7ad.' },
  { w: 'es-souq es-sawda', t: 'السوق السوداء', e: 'black market (parallel exchange rate)', ex: 'es-souq es-sawda byjeb se3r a3la men es-Sayrafa.' },
  { w: 'el-Lollars', t: 'اللولرات', e: 'lollars (locked-in bank dollars at fake rate)', ex: 'masari b-l-bank Saaro lollars, mfltsin.' },
  { w: 'el-fresh dolar', t: 'الفريش دولار', e: 'fresh dollars (cash USD outside banking system)', ex: 'el-shaqfe ma byqballo gher fresh dolar.' },
  { w: 'BanK Lubnen', t: 'بنك لبنان', e: 'Banque du Liban (BDL, central bank)', ex: 'BanK Lubnen mas2oul 3an es-siyase el-naqdiye.' },
  { w: 'Riad Salame', t: 'رياض سلامة', e: 'Riad Salameh (BDL governor 1993-2023, fraud charges)', ex: 'Riad Salame Saar 3layh ada3i bel-Faransa.' },
  { w: 'el-mahka el-bankiye', t: 'المحكاة البنكية', e: 'capital controls (informal, cash withdrawal limits)', ex: 'ma fina nesha7 men 7sebna ella 200 dolar bel-shahr.' },
  { w: 'es-se3r el-Sarf', t: 'سعر الصرف', e: 'exchange rate (LBP/USD, was 1500, now ~89000)', ex: 'es-se3r el-Sarf lyom 89 alf lira la-d-dolar.' },
  { w: 'm3atter', t: 'متعتر', e: 'broke / wiped out (financial slang post-2019)', ex: 'mo3Tam el-Lubnaniyye Saaro m3attrin men l-azme.' },
  { w: 'el-azme', t: 'الأزمة', e: 'the crisis (2019- economic collapse, "el-azme")', ex: 'el-azme balashit b-tachrin 2019, ba3da mostamerra.' },
  { w: 'haircut', t: 'هيركت', e: 'haircut (bank deposit reduction, IMF + creditor concept)', ex: 'el-7aki 3an haircut 3ed-deposit khattaf el-shaab.' },
  { w: 'el-7awale', t: 'الحوالة', e: 'remittance (diaspora money transfer, OMT/Western Union)', ex: 'el-7awalat men el-mghatreben mhemme la-l-iqtiSad.' },
  { w: 'es-se3r el-mzdawaj', t: 'السعر المزدوج', e: 'dual pricing (LBP + USD on menus)', ex: 'el-mata3em 3am yektbo es-se3r el-mzdawaj 3al-list.' }
];

const SRF_DRILLS = [
  { q: 'What is sayrafa?', a: 'BDL official exchange platform', exp: 'Launched 2021 by BDL to set semi-official exchange rate. Hovered between black market + 1500. Used for some salary withdrawals + commercial transactions. Suspended periodically.' },
  { q: 'What are lollars?', a: 'Bank dollars stuck at fake rate', exp: 'Slang for USD trapped in Lebanese banks since 2019, withdrawable only in LBP at fake rate (was 3900, now varies). Officially still "dollars" — practically worth ~10-20% of face value.' },
  { q: 'When did the crisis start?', a: 'October 2019', exp: 'October 17 2019 protests over WhatsApp tax sparked currency collapse + bank runs. Banks imposed informal capital controls within weeks. Lira lost 98% of value over 4 years.' },
  { q: 'Who is Riad Salameh?', a: 'BDL governor 1993-2023', exp: 'Banque du Liban governor 30 years, "magic-banker" turned scandal figure. Indicted in France, Germany, Lebanon for embezzlement + money laundering. Considered architect of the crisis.' },
  { q: 'What are fresh dollars?', a: 'Cash USD outside banks', exp: 'Physical cash USD or USD in newly opened post-2019 accounts. Distinguished from "lollars" by being actually withdrawable + spendable at full value. Most prices in fresh USD now.' },
  { q: 'What is the black market?', a: 'Parallel exchange rate', exp: 'Sarraf shops + WhatsApp groups quote daily LBP/USD rate. Higher than official Sayrafa. Drives most real-economy pricing. App "lirarate.org" tracks it.' },
  { q: 'What does m3atter mean?', a: 'Broke, financially wiped out', exp: 'Post-2019 slang, became universal as middle class destroyed. From root 3-t-r meaning damaged/spoiled. Common reply: "kelna m3attrin" (we\'re all broke).' },
  { q: 'What are capital controls?', a: 'Informal bank withdrawal limits', exp: 'Never legalized — banks individually set caps (e.g., $200/month USD, varies). No law passed by parliament. Depositors can\'t freely access pre-2019 USD. Called "haircut by stealth".' },
  { q: 'What is dual pricing?', a: 'LBP + USD on same menu/list', exp: 'Restaurants, supermarkets, shops list both LBP and USD prices. USD price is real anchor. LBP updated daily/weekly per black market rate. Tipping increasingly in fresh USD.' },
  { q: 'What is a haircut?', a: 'Reduction in bank deposit value', exp: 'IMF-recommended formal acknowledgment that bank deposits cannot be repaid in full. Politically toxic — successive governments refused. Lollars are de-facto haircut without legal name.' }
];

const SRF_TIPS = [
  { t: '💵 Pay in fresh USD where possible', b: 'Most landlords, schools, hospitals, supermarkets prefer fresh USD. LBP accepted but recalculated at black market rate, often unfavorably. Carry small bills ($1, $5, $10, $20) — change in USD often unavailable, balance returned in LBP.' },
  { t: '🏦 Don\'t deposit fresh USD in Lebanese banks', b: 'Pre-2019 USD ("old USD") locked as lollars. New deposits theoretically "fresh" but trust is shattered. Most Lebanese keep cash at home. Diaspora send via OMT, Western Union, BoB Finance — instant pickup in USD.' },
  { t: '📊 Check daily exchange rate before transacting', b: 'lirarate.org or @LBPLiveRate Twitter for real-time black market. Sarrafs follow within 15-30 min. ATMs use BDL/Sayrafa rates which can be 10-30% lower. Hand-changing at sarraf almost always better.' },
  { t: '⚖️ Lollars vs fresh USD price gap', b: 'Real estate, used cars sometimes priced in lollars (cheaper but locked money). Fresh USD prices always higher. "Bank check" still legal payment but worth fraction of face value — clarify "fresh, lollar, or shik?" before any deal.' },
  { t: '🏛️ Tipping waiters in fresh USD', b: 'Service workers prefer fresh USD over LBP — small bills go far. $2-5 tip on a meal is generous. LBP tips devalue fast. Cash USD now standard for taxis, deliveries, valet, household help.' }
];
