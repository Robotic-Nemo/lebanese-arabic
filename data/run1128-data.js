// R1128 — NEW FEATURE: Lebanese Getting Sick & Home Remedies (mrd)

const MRD_WORDS = [
  {ar:'مريض',tr:'mariiD',en:'sick / ill'},
  {ar:'زكام',tr:'zukaam',en:'cold (illness)'},
  {ar:'كحة',tr:'ku77a',en:'cough'},
  {ar:'حرارة',tr:'7araara',en:'fever / temperature'},
  {ar:'صداع',tr:'Sadaa3',en:'headache'},
  {ar:'وجع بطن',tr:'waja3 baTan',en:'stomachache'},
  {ar:'غثيان',tr:'ghathayaan',en:'nausea'},
  {ar:'حبة',tr:'7abba',en:'pill / tablet'},
  {ar:'دوا',tr:'dawa',en:'medicine'},
  {ar:'صيدلية',tr:'Saydaliyye',en:'pharmacy'},
  {ar:'دكتور',tr:'duktoor',en:'doctor'},
  {ar:'موعد',tr:'maw3id',en:'appointment'},
  {ar:'شاي بالعسل',tr:'shaay bil-3asal',en:'tea with honey'},
  {ar:'عصير ليمون',tr:'3aSiir laymoon',en:'lemon juice'},
  {ar:'ثوم',tr:'toom',en:'garlic (folk remedy)'},
  {ar:'زعتر',tr:'za3tar',en:'thyme (herbal remedy)'},
  {ar:'مروخ',tr:'mrookh',en:'muscle rub / ointment'},
  {ar:'ضغط',tr:'DaghT',en:'blood pressure'},
  {ar:'سكر',tr:'sukar',en:'blood sugar / diabetes'},
  {ar:'راحة',tr:'raa7a',en:'rest'},
  {ar:'نوم',tr:'nawm',en:'sleep (as remedy)'},
  {ar:'مستشفى',tr:'mustashfa',en:'hospital'},
  {ar:'طوارئ',tr:'Tawaaree2',en:'emergency room'},
  {ar:'تأمين صحي',tr:'ta2miin Sa77i',en:'health insurance'},
  {ar:'بتخز',tr:'btekhuzz',en:'it stings / it pricks'}
];

const MRD_DRILLS = [
  {
    q:'Shoo 3andak?',
    en:'What\'s wrong with you? (asking about illness)',
    opts:['3andi zukaam','3andi Sadaa3','maa fi shi','3andi 7arara'],
    ans:0,
    hint:'Common cold answer'
  },
  {
    q:'Shu btaakhod la-l-7arara?',
    en:'What do you take for fever?',
    opts:['shaay bil-3asal','7abba khafaDit 7arara','mrookh','sukar'],
    ans:1,
    hint:'Medicine for fever'
  },
  {
    q:'Wein btruuH la-l-dawa?',
    en:'Where do you go for medicine?',
    opts:['mustashfa','Saydaliyye','duktoor','maw3id'],
    ans:1,
    hint:'The pharmacy'
  },
  {
    q:'Shu l-3ilaaj l-baladiyye la-l-zukaam?',
    en:'What\'s the folk remedy for a cold?',
    opts:['toom w shaay','sukar w DaghT','Tawaaree2','ta2miin Sa77i'],
    ans:0,
    hint:'Garlic and tea — Lebanese grandmother solution'
  },
  {
    q:'Shoo ya3ne "mariiD"?',
    en:'What does "mariiD" mean?',
    opts:['tired','sick','hungry','sleepy'],
    ans:1,
    hint:'Basic illness word'
  },
  {
    q:'Eemta btruuH 3a-l-Tawaaree2?',
    en:'When do you go to the emergency room?',
    opts:['la-zukaam basiiT','la-7abba','la-7aala Tariyye','la-dawa'],
    ans:2,
    hint:'Only for urgent situations'
  },
  {
    q:'Shu ya3ne "raa7a"?',
    en:'What does "raa7a" mean?',
    opts:['medicine','rest','doctor','pain'],
    ans:1,
    hint:'Best prescription from teta'
  },
  {
    q:'Kiif bteHki "stomachache" bil-3arabe?',
    en:'How do you say "stomachache" in Lebanese?',
    opts:['Sadaa3','ghathayaan','waja3 baTan','ku77a'],
    ans:2,
    hint:'Waja3 = pain, baTan = stomach'
  },
  {
    q:'Shu hiyye "7abba"?',
    en:'What is "7abba"?',
    opts:['a vitamin drink','a pill or tablet','a herbal tea','a doctor visit'],
    ans:1,
    hint:'What you swallow when sick'
  },
  {
    q:'Shu ta2miin Sa77i?',
    en:'What is "ta2miin Sa77i"?',
    opts:['blood type','health insurance','medical exam','pharmacy card'],
    ans:1,
    hint:'Important but hard to get in Lebanon'
  }
];

const MRD_TIPS = [
  {
    title:'Lebanese Home Remedies (3ilaaj Baladiyye)',
    body:'Before going to a doctor, Lebanese families rely on teta\'s cures: shay bil-3asal (tea with honey) for sore throats, 3aSiir laymoon for colds, toom (garlic) in everything, and za3tar as an anti-inflammatory. "Ruu7 naam" (go sleep) is often the first prescription.'
  },
  {
    title:'Pharmacist as First Doctor',
    body:'In Lebanon the pharmacist (Saydalaani) often acts as a GP — dispensing antibiotics and prescription meds without a script. Saydaliyyaat are everywhere and open late. "Ruu7 3a-l-Saydaliyye" is heard far more than "ruu7 3a-l-duktoor".'
  },
  {
    title:'"Btekhuzz" & Other Sick-Room Words',
    body:'"Btekhuzz" (it stings/pricks) is what kids say about injections. "Khadd dam" (take blood) means blood test. "DaghT 3aali" (high blood pressure) is a national obsession. "L-jaw wajja3ni" (the weather made me sick) is the universal excuse.'
  },
  {
    title:'Health Insurance in Lebanon',
    body:'Ta2miin Sa77i is a privilege, not a given. CNSS (national social security) covers formal workers, but many Lebanese pay out-of-pocket. Private hospitals (like AUB Medical) are world-class but expensive. "Maa 3andi ta2miin" is a sadly common phrase.'
  }
];
