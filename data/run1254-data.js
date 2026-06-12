const RNS_WORDS = [
  { ar:'آثار', tr:'aathar', en:'ancient ruins / archaeology', hint:'Lebanon has 5 UNESCO World Heritage Sites' },
  { ar:'تاريخ', tr:'tari2', en:'history', hint:'Lebanon = over 7,000 years of continuous settlement' },
  { ar:'حضارة', tr:'7adara', en:'civilization', hint:'Phoenician civilization originated on Lebanese coast' },
  { ar:'فينيقي', tr:'fini2i', en:'Phoenician', hint:'Fini2iyye = people who gave the world the alphabet' },
  { ar:'بعلبك', tr:'ba3albak', en:'Baalbek', hint:'Temple of Jupiter — largest Roman temple ever built' },
  { ar:'جبيل', tr:'jbeil', en:'Byblos (Jbeil)', hint:'One of world\'s oldest continuously inhabited cities, 7000 BC' },
  { ar:'صور', tr:'sour', en:'Tyre (Sour)', hint:'Ancient Phoenician capital, UNESCO site, still inhabited' },
  { ar:'صيدا', tr:'sayda', en:'Sidon (Saida)', hint:'Sea Castle built by Crusaders, ancient harbour city' },
  { ar:'عنجر', tr:'3anjar', en:'Anjar', hint:'Umayyad palace ruins, 8th century, unique in Lebanon' },
  { ar:'قلعة', tr:'2al3a', en:'castle / fortress', hint:'2al3et Mseilha, 2al3et Baalbek — fortress ruins everywhere' },
  { ar:'أعمدة', tr:'a3mde', en:'columns / pillars', hint:'The 6 standing columns of Baalbek\'s Temple of Jupiter' },
  { ar:'معبد', tr:'ma3bad', en:'temple / shrine', hint:'Ma3bad el-Bacchus at Baalbek = best preserved Roman temple' },
  { ar:'مسرح', tr:'masra7', en:'amphitheater', hint:'Byblos amphitheater still used for summer concerts' },
  { ar:'حفريات', tr:'7afriyat', en:'excavations', hint:'Ongoing 7afriyat in Byblos since 1920s' },
  { ar:'منحوتة', tr:'man7oute', en:'carved stone / sculpture', hint:'Phoenician sarcophagi in National Museum Beirut' },
  { ar:'إرث', tr:'irth', en:'heritage / legacy', hint:'Irth 7adari = cultural heritage' },
  { ar:'موقع أثري', tr:'maw2e3 athari', en:'archaeological site', hint:'Lebanon has 500+ registered archaeological sites' },
  { ar:'متحف وطني', tr:'mat7af watani', en:'national museum', hint:'Beirut\'s National Museum: Phoenician to Ottoman eras' },
  { ar:'نقوش', tr:'nu2oush', en:'inscriptions / carvings', hint:'Nu2oush Nahr el-Kalb — victory stelae from 3200 years' },
  { ar:'فخار قديم', tr:'fakhkhar 2adim', en:'ancient pottery', hint:'Fakhkhar from Byblos excavations dates to 5000 BC' }
];

const RNS_DRILLS = [
  { q:'What does "aathar" mean?', opts:['history','ancient ruins','civilization','columns'], ans:1 },
  { q:'"Ba3albak" is famous for...?', opts:['Phoenician ships','the world\'s largest Roman temple','Crusader castle','Umayyad palace'], ans:1 },
  { q:'What is "jbeil" known as in English?', opts:['Tyre','Sidon','Byblos','Anjar'], ans:2 },
  { q:'"2al3a" means...?', opts:['temple','ruins','castle/fortress','excavation'], ans:2 },
  { q:'What does "7adara" mean?', opts:['history','ruins','civilization','heritage'], ans:2 },
  { q:'"Masra7" means...?', opts:['museum','temple','column','amphitheater'], ans:3 },
  { q:'Which word means "heritage / legacy"?', opts:['irth','nu2oush','man7oute','fakhkhar'], ans:0 },
  { q:'"Fini2i" refers to...?', opts:['Roman','Ottoman','Phoenician','Byzantine'], ans:2 }
];

const RNS_TIPS = [
  { title:'Baalbek — Jupiter\'s Throne', body:'Ba3albak\'s Temple of Jupiter had 54 columns, each 20 metres tall — 6 still stand. Romans called it Heliopolis (City of the Sun). The adjacent Temple of Bacchus is the best-preserved Roman temple on earth. Every summer, the Baalbek International Festival stages opera and concerts among the ruins.' },
  { title:'Byblos — World\'s Oldest City', body:'Jbeil (Byblos) has been continuously inhabited for over 7,000 years. The Phoenicians traded cedar wood here — and Egyptians brought papyrus. The Greek word "biblos" (book) comes from Byblos, giving us "Bible" and "bibliography." The old souq, Crusader castle, and Roman amphitheater sit side by side.' },
  { title:'Tyre & Sidon — Phoenician Capitals', body:'Sour (Tyre) was the most powerful Phoenician city — it founded Carthage and traded purple dye (from murex snails) across the Mediterranean. The "Tyrian purple" was worth more than gold. Sayda (Sidon) has a Sea Castle you can walk to at low tide, built by Crusaders in 1228 over Phoenician foundations.' },
  { title:'Nahr el-Kalb — Lebanon\'s Wall of History', body:'At the Dog River (Nahr el-Kalb) north of Beirut, every empire that conquered Lebanon carved a victory stele into the cliff: Egyptian pharaohs, Assyrian kings, Babylonian Nebuchadnezzar, Roman emperors, and even French and British WWII commanders. 3,200 years of military history in one canyon wall.' }
];
