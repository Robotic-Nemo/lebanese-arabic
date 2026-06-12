// R657 — NEW FEATURE: Lebanese Traditional Crafts & Artisans (cft)

const CFT_CATS = [
  { id: 'textile', label: '🧵 Textile & Weaving' },
  { id: 'pottery', label: '🏺 Pottery & Glasswork' },
  { id: 'woodmetal', label: '🪵 Wood & Metal' },
  { id: 'phrases', label: '💬 Artisan Phrases' }
];

const CFT_WORDS = [
  // Textile & weaving
  { ar: 'tatreez', tr: 'tatreez', en: 'embroidery', cat: 'textile' },
  { ar: 'nasij', tr: 'nasij', en: 'weaving / woven fabric', cat: 'textile' },
  { ar: '7areer', tr: '7areer', en: 'silk', cat: 'textile' },
  { ar: 'soof', tr: 'soof', en: 'wool', cat: 'textile' },
  { ar: 'kataane', tr: 'kataane', en: 'linen', cat: 'textile' },
  { ar: 'khiyaaTa', tr: 'khiyaaTa', en: 'tailoring / sewing', cat: 'textile' },
  { ar: 'saboun', tr: 'saboun', en: 'soap (handmade)', cat: 'textile' },
  // Pottery & glasswork
  { ar: 'fakhaara', tr: 'fakhaara', en: 'pottery / ceramics', cat: 'pottery' },
  { ar: 'zujaaj', tr: 'zujaaj', en: 'glass / glasswork', cat: 'pottery' },
  { ar: 'khazdaar', tr: 'khazdaar', en: 'potter (artisan)', cat: 'pottery' },
  { ar: 'fakhkhaar', tr: 'fakhkhaar', en: 'clay / earthenware', cat: 'pottery' },
  { ar: 'bala2', tr: 'bala2', en: 'tile / mosaic piece', cat: 'pottery' },
  { ar: 'mozayek', tr: 'mozayek', en: 'mosaic', cat: 'pottery' },
  { ar: 'nafiikh zujaaj', tr: 'nafiikh zujaaj', en: 'glassblower', cat: 'pottery' },
  // Wood & metalwork
  { ar: 'najjaar', tr: 'najjaar', en: 'carpenter', cat: 'woodmetal' },
  { ar: '7addaad', tr: '7addaad', en: 'blacksmith / ironworker', cat: 'woodmetal' },
  { ar: 'sa2a3a', tr: 'sa2a3a', en: 'watchmaker / clockmaker', cat: 'woodmetal' },
  { ar: 'nuHaas', tr: 'nuHaas', en: 'copper (material)', cat: 'woodmetal' },
  { ar: 'fidDa', tr: 'fidDa', en: 'silver', cat: 'woodmetal' },
  { ar: 'dhahab', tr: 'dhahab', en: 'gold', cat: 'woodmetal' },
  { ar: 'khashab el-arz', tr: 'khashab el-arz', en: 'cedar wood', cat: 'woodmetal' },
  { ar: 'naqsh', tr: 'naqsh', en: 'engraving / carving', cat: 'woodmetal' },
  // Artisan phrases
  { ar: 'sana3 ydaawi', tr: 'sana3 ydaawi', en: 'handmade (craft made by hand)', cat: 'phrases' },
  { ar: 'mn 2ideih', tr: 'mn 2ideih', en: 'handmade (from his hands)', cat: 'phrases' },
  { ar: 'l-7irfe raayi7a', tr: 'l-7irfe raayi7a', en: 'the craft is dying out', cat: 'phrases' },
  { ar: 'saa3a b-saa3a', tr: 'saa3a b-saa3a', en: 'hour by hour (patient work)', cat: 'phrases' },
  { ar: 'miin 3allmak?', tr: 'miin 3allmak?', en: 'who taught you (this skill)?', cat: 'phrases' },
  { ar: '2abu 3allamni', tr: '2abu 3allamni', en: 'my father taught me', cat: 'phrases' }
];

const CFT_DRILLS = [
  { q: 'What is "tatreez"?', opts: ['weaving','embroidery','silk','linen'], ans: 1 },
  { q: 'What is "fakhaara"?', opts: ['glasswork','woodwork','pottery','tailoring'], ans: 2 },
  { q: 'What does "najjaar" mean?', opts: ['blacksmith','potter','carpenter','glassblower'], ans: 2 },
  { q: 'What is "7addaad"?', opts: ['watchmaker','blacksmith','carpenter','embroiderer'], ans: 1 },
  { q: 'What is "7areer"?', opts: ['wool','linen','silk','cotton'], ans: 2 },
  { q: 'What is "soof"?', opts: ['silk','wool','linen','cotton'], ans: 1 },
  { q: 'What does "nafiikh zujaaj" mean?', opts: ['glassblower','potter','weaver','tile-maker'], ans: 0 },
  { q: 'What is "nuHaas"?', opts: ['silver','gold','copper','iron'], ans: 2 },
  { q: 'What is "fidDa"?', opts: ['gold','copper','silver','bronze'], ans: 2 },
  { q: 'What does "naqsh" mean?', opts: ['weaving','pottery','engraving','soap'], ans: 2 },
  { q: '"sana3 ydaawi" means?', opts: ['factory-made','handmade','imported','traditional'], ans: 1 },
  { q: '"l-7irfe raayi7a" conveys what idea?', opts: ['the craft is thriving','the craft is dying out','the craft is expensive','the craft is new'], ans: 1 },
  { q: 'What is "mozayek"?', opts: ['glasswork','pottery','mosaic','tile-cutter'], ans: 2 },
  { q: '"khashab el-arz" is what material?', opts: ['oak wood','olive wood','cedar wood','pine wood'], ans: 2 },
  { q: '"2abu 3allamni" means?', opts: ['I learned online','my father taught me','I trained in school','a master craftsman taught me'], ans: 1 }
];

const CFT_TIPS = [
  { title: 'Cedar — Lebanon\'s symbol', body: '"Khashab el-arz" (cedar wood) is Lebanon\'s national symbol — on the flag, in proverbs, in poetry. Cedar forests were once vast; now protected reserves remain in Bsharri and Shouf. Craftsmen prize cedar for furniture and decorative carving.' },
  { title: 'Tripoli — craft capital', body: 'Tripoli (Trablous) is Lebanon\'s artisan capital. Its old souk has dedicated streets: Khan el-Saboun (soap), Khan el-Khayyatin (tailors), Souk el-Harraje (antiques). Tripoli soap (saboun Trablous) uses olive oil and is famous regionally.' },
  { title: 'Tatreez — cross-stitch tradition', body: '"Tatreez" (embroidery) is a living tradition, especially among Palestinian and Lebanese women. Each region has distinct geometric motifs. Embroidered dresses and tablecloths are prized crafts at village festivals.' },
  { title: 'Glassblowing in Sarafand', body: '"Nafiikh zujaaj" (glassblowing) survives in Sarafand, south Lebanon. The technique is Phoenician in origin. Artisans blow vases, cups, and decorative pieces by mouth — an ancient skill passed down through families.' },
  { title: 'Fakhaara — surviving potters', body: '"Fakhaara" (pottery) villages like Rashaya el-Fukhar still produce traditional reddish-clay pots, jugs, and serving dishes. The clay is local; firing methods use traditional kilns. Each piece is wheel-thrown by hand.' },
  { title: 'Craft phrases in daily speech', body: '"Mn 2ideih" (from his hands) is the highest praise for a craftsman. "Sana3 ydaawi" labels genuine handmade goods. "L-7irfe raayi7a" (the craft is dying) is heard with sadness — a lament that apprentices are scarce and machine-made goods dominate.' }
];
