// R1347 — NEW FEATURE: Lebanese Wild Herbs & Mountain Foraging (wlf)
const WLF_WORDS = [
  { ar: 'za3tar barri', tr: 'wild thyme', en: 'wild thyme' },
  { ar: 'mi3liq', tr: 'purslane', en: 'purslane' },
  { ar: 'hindbe', tr: 'chicory', en: 'chicory / wild chicory' },
  { ar: 'za3rur', tr: 'hawthorn', en: 'hawthorn berry' },
  { ar: 'libbeyhe', tr: 'acorn', en: 'acorn' },
  { ar: 'na33na3 barri', tr: 'wild mint', en: 'wild mint' },
  { ar: '7ammid', tr: 'sorrel', en: 'wood sorrel / sour grass' },
  { ar: 'mardaqush', tr: 'oregano', en: 'oregano / marjoram' },
  { ar: 'khabbayz', tr: 'mallow', en: 'common mallow' },
  { ar: 'ghar', tr: 'bay leaf', en: 'bay laurel' },
  { ar: '2akkoub', tr: 'gundelia', en: 'gundelia / akkoub thistle' },
  { ar: 'leef', tr: 'palm fiber', en: 'loofah / luffa plant' },
  { ar: 'zbayb jabal', tr: 'mountain raisins', en: 'dried mountain berries' },
  { ar: 'fter', tr: 'mushroom', en: 'wild mushroom' },
  { ar: 'smeq', tr: 'sumac', en: 'sumac' },
  { ar: 'ktoor', tr: 'fennel fronds', en: 'fennel / anise herb' },
  { ar: '7abbet l-barake', tr: 'nigella seeds', en: 'black seed / nigella' },
  { ar: 'tine barri', tr: 'wild fig', en: 'wild fig' },
  { ar: 'jrana', tr: 'cricket', en: 'cricket / field insect (heard foraging)' },
  { ar: 'il-jabal bi3aTi', tr: 'the mountain gives', en: 'the mountain gives (foraging proverb)' }
];

const WLF_DRILLS = [
  { q: 'What is "hindbe" in English?', opts: ['wild thyme', 'chicory', 'purslane', 'sorrel'], a: 1 },
  { q: 'Which word means wild mushroom?', opts: ['za3rur', 'fter', 'ghar', 'libbeyhe'], a: 1 },
  { q: 'What does "2akkoub" refer to?', opts: ['bay laurel', 'wild mint', 'gundelia thistle', 'mallow'], a: 2 },
  { q: '"Smeq" is the Lebanese word for:', opts: ['sumac', 'oregano', 'fennel', 'nigella'], a: 0 },
  { q: 'Which plant is "khabbayz"?', opts: ['acorn', 'hawthorn', 'common mallow', 'chicory'], a: 2 },
  { q: 'What is "mi3liq"?', opts: ['wild fig', 'purslane', 'sorrel', 'bay leaf'], a: 1 },
  { q: '"Mardaqush" means:', opts: ['wild thyme', 'oregano / marjoram', 'black seed', 'fennel'], a: 1 },
  { q: 'What does "il-jabal bi3aTi" mean?', opts: ['the mountain is cold', 'the mountain gives', 'go up the mountain', 'mountain herbs'], a: 1 }
];

const WLF_TIPS = [
  'Foraging (il-kasb min il-jabal) is a deep Lebanese tradition — families gather wild thyme, chicory, and mallow on spring mountain walks. The best spots are passed down like family secrets.',
  '2Akkoub (gundelia thistle) is a prized wild vegetable in Lebanese mountain cooking — harvesting it requires gloves and patience, but the reward is a delicacy found only in season.',
  'Za3tar barri (wild thyme) is not just the spice blend — it\'s the fresh herb picked in Batroun, Ehden, and the Chouf highlands. Lebanese people say "illi mesh 7abib il-za3tar mesh Lebanese."',
  'Mountain foragers follow an informal code: take what you need, leave roots intact, and share with neighbors. The phrase "il-jabal bi3aTi" (the mountain gives) captures this ethos of abundance without extraction.'
];
