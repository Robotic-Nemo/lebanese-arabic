// R801 — NEW FEATURE: Lebanese Gardening & Plants (gdn)

const GDN_CATS = ['trees','flowers','herbs','phrases'];

const GDN_WORDS = [
  // trees
  { a: 'أرز', tr: '2arz', en: 'cedar tree (symbol of Lebanon)', cat: 'trees' },
  { a: 'زيتون', tr: 'zaytun', en: 'olive / olive tree', cat: 'trees' },
  { a: 'تين', tr: 'tiin', en: 'fig / fig tree', cat: 'trees' },
  { a: 'رمان', tr: 'rummaane', en: 'pomegranate tree', cat: 'trees' },
  { a: 'صنوبر', tr: 'Snawbar', en: 'pine tree', cat: 'trees' },
  { a: 'كرمة', tr: 'karm', en: 'grapevine', cat: 'trees' },
  { a: 'لوز', tr: 'lawz', en: 'almond tree', cat: 'trees' },
  // flowers
  { a: 'ياسمين', tr: 'yaasmiin', en: 'jasmine (iconic Lebanese scent)', cat: 'flowers' },
  { a: 'ورد', tr: 'ward', en: 'rose / roses', cat: 'flowers' },
  { a: 'زهرة', tr: 'zahra', en: 'flower / blossom', cat: 'flowers' },
  { a: 'خزامى', tr: 'khuzaama', en: 'lavender', cat: 'flowers' },
  { a: 'عباد الشمس', tr: '3abbaad l-shams', en: 'sunflower', cat: 'flowers' },
  { a: 'نرجس', tr: 'narjis', en: 'narcissus / daffodil', cat: 'flowers' },
  // herbs
  { a: 'زعتر', tr: 'za3tar', en: 'thyme / zaatar (wild herb essential to Lebanese food)', cat: 'herbs' },
  { a: 'نعناع', tr: 'na3naa3', en: 'mint', cat: 'herbs' },
  { a: 'بقدونس', tr: 'ba2duunes', en: 'parsley', cat: 'herbs' },
  { a: 'كزبرة', tr: 'kizbra', en: 'coriander / cilantro', cat: 'herbs' },
  { a: 'مريمية', tr: 'maryamiyye', en: 'sage', cat: 'herbs' },
  { a: 'إكليل الجبل', tr: '2ikliil l-jabal', en: 'rosemary (lit: mountain crown)', cat: 'herbs' },
  { a: 'حبق', tr: '7aba2', en: 'basil', cat: 'herbs' },
  // phrases
  { a: 'بدي زرع', tr: 'baddii zra3', en: 'I want to plant', cat: 'phrases' },
  { a: 'سقّي النباتات', tr: 'sa22ii l-nabaataat', en: 'water the plants', cat: 'phrases' },
  { a: 'الحديقة', tr: 'l-7adii2a', en: 'the garden', cat: 'phrases' },
  { a: 'شجرة كبيرة', tr: 'shajara kibiira', en: 'a big tree', cat: 'phrases' },
  { a: 'التربة', tr: 'l-turba', en: 'the soil / earth', cat: 'phrases' },
  { a: 'قصّ العشب', tr: '2uSS l-3ishb', en: 'mow the grass', cat: 'phrases' },
  { a: 'بيزهر', tr: 'biizhar', en: "it's blooming / flowering", cat: 'phrases' },
  { a: 'ريح الياسمين', tr: 'rii7 l-yaasmiin', en: 'the scent of jasmine', cat: 'phrases' }
];

const GDN_DRILLS = [
  { q: 'What tree is the symbol of Lebanon?', a: '2arz (cedar)', hint: 'it\'s on the flag' },
  { q: '"Yaasmiin" is...', a: 'jasmine', hint: 'iconic scent of Lebanese nights' },
  { q: 'What is "za3tar"?', a: 'thyme / zaatar herb', hint: 'essential Lebanese herb mix' },
  { q: '"Na3naac" means...', a: 'mint', hint: 'used in Lebanese tea' },
  { q: 'How do you say "the garden"?', a: 'l-7adii2a', hint: '7adii2a = garden' },
  { q: '"Zaytun" is...', a: 'olive / olive tree', hint: 'key to Lebanese cuisine' },
  { q: 'What is "ward"?', a: 'rose / roses', hint: 'also a female name' },
  { q: '"Ba2duunes" means...', a: 'parsley', hint: 'key ingredient in tabbouleh' },
  { q: '"Biizhar" means...', a: "it's blooming / flowering", hint: 'from zahar = flower' },
  { q: 'What is "karm"?', a: 'grapevine', hint: 'Lebanon has many vineyards' },
  { q: '"2ikliil l-jabal" literally means...', a: 'mountain crown (rosemary)', hint: 'jabal = mountain' },
  { q: 'What is "l-turba"?', a: 'the soil / earth', hint: 'needed for planting' },
  { q: '"3abbaad l-shams" means...', a: 'sunflower', hint: 'literally: worshipper of the sun' },
  { q: 'How do you say "water the plants"?', a: 'sa22ii l-nabaataat', hint: 'sa22ii = water (imperative)' },
  { q: '"Rummaane" is...', a: 'pomegranate tree', hint: 'rummaan = pomegranate' }
];

const GDN_TIPS = [
  'The cedar (2arz) is Lebanon\'s national symbol — it appears on the flag and has been venerated since ancient times.',
  'Za3tar (wild thyme) is picked from Lebanese hills in spring and mixed with sumac and sesame seeds into the famous za3tar blend.',
  'Jasmine (yaasmiin) grows on trellises and balconies across Lebanon — its scent in summer evenings is iconic.',
  '"Baddii zra3" (I want to plant) is heard often in spring — gardening is a deep Lebanese tradition from village life.',
  'The word "karm" (vineyard/grapevine) gives Lebanon its famous wine regions like the Bekaa Valley.',
  'Many Lebanese herbs grow wild in the mountains — na3naa3 (mint), maryamiyye (sage), and 7aba2 (basil) are gathered fresh.'
];
