// R486 — Lebanese Emergency & Safety Phrases coach (prefix: emg)
const EMG_WORDS = [
  // emergency calls
  {ar:'نجدة', tr:'najde', en:'help! / emergency!', cat:'emergency'},
  {ar:'إسعاف', tr:'is3aaf', en:'ambulance', cat:'emergency'},
  {ar:'شرطة', tr:'shurTa', en:'police', cat:'emergency'},
  {ar:'إطفاء', tr:'iTfaa2', en:'fire department', cat:'emergency'},
  {ar:'حريق', tr:'7ariiq', en:'fire!', cat:'emergency'},
  {ar:'سارق', tr:'saari2', en:'thief! / robber!', cat:'emergency'},
  {ar:'مساعدة', tr:'musaa3ade', en:'assistance / help', cat:'emergency'},
  {ar:'خطر', tr:'khaTar', en:'danger!', cat:'emergency'},
  // health emergency
  {ar:'مريض', tr:'mariiD', en:'sick / ill (male)', cat:'health'},
  {ar:'جرح', tr:'jar7', en:'wound / injury', cat:'health'},
  {ar:'كسر', tr:'kasr', en:'fracture / broken bone', cat:'health'},
  {ar:'ألم', tr:'alam', en:'pain', cat:'health'},
  {ar:'دم', tr:'damm', en:'blood', cat:'health'},
  {ar:'فقدان الوعي', tr:'fu2daan el wa3i', en:'loss of consciousness', cat:'health'},
  {ar:'صعوبة بالتنفس', tr:'Su3uube bit-tanaffus', en:'difficulty breathing', cat:'health'},
  {ar:'اتصل بالإسعاف', tr:'ittaSal bil is3aaf', en:'call the ambulance', cat:'health'},
  // asking for help
  {ar:'ساعدني', tr:'saa3idni', en:'help me!', cat:'help'},
  {ar:'وين المستشفى', tr:'wayn el mustashfa', en:'where is the hospital?', cat:'help'},
  {ar:'وين أقرب صيدلية', tr:'wayn a2rab Saydaliyye', en:'where is the nearest pharmacy?', cat:'help'},
  {ar:'محتاج مساعدة', tr:'m7taaj musaa3ade', en:'I need help', cat:'help'},
  {ar:'فيك تساعدني', tr:'fiik tsaa3idni', en:'can you help me?', cat:'help'},
  {ar:'إجو بسرعة', tr:'iju bis-sur3a', en:'come quickly!', cat:'help'},
  {ar:'اتصل بالشرطة', tr:'ittaSal biSh-shurTa', en:'call the police', cat:'help'},
  // accident & road
  {ar:'حادث', tr:'7aades', en:'accident', cat:'accident'},
  {ar:'حادث سير', tr:'7aades sayr', en:'traffic accident', cat:'accident'},
  {ar:'عطلان السيارة', tr:'3aTlaan es-sayyaara', en:'car breakdown', cat:'accident'},
  {ar:'تصادم', tr:'tSaadum', en:'collision / crash', cat:'accident'},
  {ar:'وقفت السيارة', tr:'wa2fit es-sayyaara', en:'the car stopped / broke down', cat:'accident'},
  {ar:'طريق مسدود', tr:'Tarii2 masdud', en:'road blocked / closed', cat:'accident'},
  // personal safety
  {ar:'ضاع', tr:'Daa3', en:'lost / went missing', cat:'safety'},
  {ar:'ضيّعت طريقي', tr:'Dayya3t Tariiqi', en:'I got lost', cat:'safety'},
  {ar:'مش عارف وين أنا', tr:'mish 3aarif wayn ana', en:'I don\'t know where I am', cat:'safety'},
  {ar:'سرقوا شنطتي', tr:'sara2u shanTti', en:'they stole my bag', cat:'safety'},
  {ar:'ضيّعت جواز سفري', tr:'Dayya3t jawwaz safari', en:'I lost my passport', cat:'safety'},
  {ar:'مش بخير', tr:'mish bikhayr', en:'I\'m not okay / not well', cat:'safety'},
  // numbers
  {ar:'مئة وعشرة', tr:'miyye w 3ashra', en:'110 (Lebanese police number)', cat:'numbers'},
  {ar:'مئة وأربعة وعشرون', tr:'miyye w arba3a w 3ashrin', en:'124 (ambulance / Red Cross)', cat:'numbers'},
  {ar:'مئة وعشرة', tr:'miyye w 3ashra', en:'175 (fire department)', cat:'numbers'},
  {ar:'اتصل على مئة وعشرة', tr:'ittaSal 3a miyye w 3ashra', en:'call 110', cat:'numbers'},
];

const EMG_DRILLS = [
  {
    q: 'How do you shout "help!" in Lebanese Arabic?',
    opts: ['najde!', 'shurTa!', '7ariiq!', 'alam!'],
    ans: 0,
    note: '"Najde!" (نجدة) = help! / emergency! — the universal Lebanese cry for help. Can also say "saa3idni!" (help me specifically) or "musaa3ade!" (assistance needed). "Najde!" is what you shout loudly in a crowd. Lebanese police: 110, ambulance/Red Cross: 124.'
  },
  {
    q: 'What is "is3aaf" in Lebanese?',
    opts: ['Ambulance', 'Police', 'Fire truck', 'Hospital'],
    ans: 0,
    note: '"Is3aaf" = ambulance (إسعاف), from "is3aaf" = first aid / relief. "Ittassal bil is3aaf" = call the ambulance. Lebanese Red Cross (Saliib el a7mar) runs ambulances at 124. "Is3aaf" also means emergency medical aid generally.'
  },
  {
    q: 'How do you say "I need help" in Lebanese?',
    opts: ['m7taaj musaa3ade', 'mish bikhayr', 'Daa3', 'ittaSal biSh-shurTa'],
    ans: 0,
    note: '"M7taaj musaa3ade" = I need help (محتاج مساعدة). "M7taaj" = needing/in need of. Female: "m7taaje". Also: "fiik tsaa3idni?" = can you help me? "Saa3idni!" = help me (imperative). In Lebanon, people generally respond quickly to visible distress.'
  },
  {
    q: 'How do you ask "where is the nearest pharmacy?"',
    opts: [
      'wayn a2rab Saydaliyye',
      'wayn el mustashfa',
      'wayn ittaSal biSh-shurTa',
      'wayn is3aaf'
    ],
    ans: 0,
    note: '"Wayn a2rab Saydaliyye?" = where is the nearest pharmacy? (وين أقرب صيدلية). "Saydaliyye" = pharmacy (from "Saydaliy" = pharmacist). Lebanon has many 24-hour pharmacies. "A2rab" = nearest/closest. "Wayn el mustashfa?" = where is the hospital?'
  },
  {
    q: 'What does "7aades sayr" mean?',
    opts: ['Traffic accident', 'Road blocked', 'Car breakdown', 'Speed bump'],
    ans: 0,
    note: '"7aades sayr" = traffic accident (حادث سير). "7aades" = incident/accident. "Sayr" = traffic/driving. Lebanese roads have high accident rates — knowing this phrase is important. After an accident: "fii majruu7iin?" (are there injured people?) and "ittaSal bil is3aaf" (call the ambulance).'
  },
  {
    q: 'How do you say "I got lost" in Lebanese?',
    opts: ['Dayya3t Tariiqi', 'mish 3aarif wayn ana', 'sara2u shanTti', 'Daa3'],
    ans: 0,
    note: '"Dayya3t Tariiqi" = I got lost (ضيّعت طريقي), literally "I lost my road/path". Also "mish 3aarif wayn ana" = I don\'t know where I am. "Daa3" = got lost (basic form). Lebanese streets can be confusing — even locals sometimes say "Dayya3t" in Beirut\'s narrow alleys.'
  },
  {
    q: 'What do you say if someone stole your bag?',
    opts: [
      'sara2u shanTti!',
      'khaTar! khaTar!',
      'Daa3 jawwazi!',
      'ittaSal 3a miyye w 3ashra'
    ],
    ans: 0,
    note: '"Sara2u shanTti!" = they stole my bag! (سرقوا شنطتي). "Sara2" = stole. "Shantta" = bag/purse. "Saari2!" = thief! (شارق). Lebanese police number: 110. Also say "saa3idni!" to bystanders. "Ittassal 3a shurTa" = call the police.'
  },
  {
    q: 'What does "Su3uube bit-tanaffus" mean?',
    opts: [
      'Difficulty breathing',
      'Chest pain',
      'High fever',
      'Loss of consciousness'
    ],
    ans: 0,
    note: '"Su3uube bit-tanaffus" = difficulty breathing (صعوبة بالتنفس). Critical phrase for medical emergencies. "Su3uube" = difficulty. "Tanaffus" = breathing. Other symptoms: "alam bis-Sadr" (chest pain), "sukhuuniyye 3aalye" (high fever), "fu2daan el wa3i" (loss of consciousness — fainted).'
  },
  {
    q: 'What is the Lebanese police emergency number?',
    opts: ['110', '112', '911', '999'],
    ans: 0,
    note: '"Ittassal 3a miyye w 3ashra" = call 110. Lebanese emergency numbers: 110 (police), 124 (Red Cross ambulance), 175 (fire department). "Miyye w 3ashra" = 110 in Lebanese. The Red Cross (Saliib el a7mar) often responds faster than state ambulances in Lebanon.'
  },
  {
    q: 'How do you tell someone to "come quickly!"?',
    opts: ['iju bis-sur3a!', 'ruu7 hon!', 'sta3jil!', 'la tii2!'],
    ans: 0,
    note: '"Iju bis-sur3a!" = come quickly! (إجوا بسرعة). "Iju" = come (plural imperative). "Sur3a" = speed/quickly. Singular: "ta3a bis-sur3a!" For medical emergencies: "fii Ta2es bis-sur3a!" (there\'s an emergency, hurry!). Lebanese response to emergencies is generally swift — "yalla, yalla!" gets people moving.'
  },
];

const EMG_TIPS = [
  {
    title: 'Lebanese emergency numbers',
    body: 'Key numbers: 110 (police — shurTa), 124 (Red Cross ambulance — is3aaf), 175 (fire — iTfaa2). Save these in your phone. Lebanese Red Cross (el Saliib el a7mar) often responds faster than government ambulances and speaks English. In Beirut, hospitals like AUB Medical Center and Hotel-Dieu are well-equipped.'
  },
  {
    title: 'Calling for help in Arabic',
    body: '"Najde!" (help!) is the universal distress call. "Saa3idni!" (help me!) is more direct. Lebanese people are generally very responsive to visible distress — don\'t hesitate to flag down bystanders. "Fii waydad?" (is there a doctor?) is useful. WhatsApp location sharing is commonly used to guide help to your location.'
  },
  {
    title: 'At a Lebanese hospital',
    body: '"Wen el istiqdaal?" = where is reception/admissions? "3indi Ta2es" = I have an emergency. Lebanese private hospitals (like AUB Medical Center, Saint George, Hotel-Dieu) are world-class. State hospitals vary. Always ask for your insurance details: "hayda mit7assam 3al ta2miin?" = is this covered by insurance?'
  },
  {
    title: 'Car accident in Lebanon',
    body: 'After a "7aades sayr" (traffic accident): "fii majruu7iin?" (are there injuries?), "ittassal bil is3aaf" (call ambulance), "ittassal bil shurTa" (call police). Exchange: phone numbers ("3Tiini nu2tak"), insurance ("ta2miin"), ID ("hawiyye"). Witnesses ("shuhuud") are important for insurance claims. Don\'t move injured people unless they\'re in immediate danger.'
  },
  {
    title: 'Getting lost in Lebanon',
    body: '"Dayya3t Tariiqi" = I got lost. Lebanese people are happy to give directions, but addresses work differently — landmarks matter more than street names. "3and el bank" (at the bank), "2iddaam el jaami3" (in front of the mosque). Use WhatsApp location — it\'s universal. "Wayn el Dawra?" (where is the Dora roundabout?) — roundabouts are key landmarks.'
  },
];

const EMG_ABOUT = `
<p><strong>🚨 Lebanese Emergency & Safety Phrases</strong></p>
<p>Emergencies happen anywhere. Knowing a few key phrases in Lebanese Arabic can make the difference when seconds count. Lebanon's emergency infrastructure has its challenges, but the Lebanese people themselves are quick to help strangers in distress.</p>
<p><strong>Emergency numbers to know:</strong> 110 (police), 124 (Red Cross ambulance — often faster than state services), 175 (fire department). Save these in your phone before traveling.</p>
<p><strong>The Lebanese response to emergencies:</strong> Lebanese people are known for immediate, communal response to emergencies. "Najde!" will bring people running. The culture of mutual aid ("ta3aawun") is strong. Don't be afraid to shout, wave, and make noise — Lebanese are not shy and neither should you be in an emergency.</p>
<p><strong>Hospital & medical culture:</strong> Lebanon has excellent private hospitals, especially in Beirut. If you can, head to AUB Medical Center, Hotel-Dieu, or Saint George Hospital. Always bring your passport and insurance information. Many Lebanese doctors speak English and French.</p>
`;
