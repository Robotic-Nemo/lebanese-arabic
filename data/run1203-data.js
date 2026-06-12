// R1203 — NEW FEATURE: Lebanese Fishing & Sea Culture (syd)

const SYD_WORDS = [
  { ar: 'صيد', tr: 'sayd', en: 'fishing / catch' },
  { ar: 'صياد', tr: 'sayyad', en: 'fisherman' },
  { ar: 'سمك', tr: 'samak', en: 'fish' },
  { ar: 'بحر', tr: 'ba7r', en: 'sea / ocean' },
  { ar: 'مركب', tr: 'markab', en: 'boat' },
  { ar: 'شبكة', tr: 'shabake', en: 'fishing net' },
  { ar: 'سنارة', tr: 'sinnara', en: 'fishing rod / hook' },
  { ar: 'مينا', tr: 'mina', en: 'harbor / port' },
  { ar: 'سردين', tr: 'sardeen', en: 'sardines' },
  { ar: 'بوري', tr: 'buri', en: 'mullet (fish)' },
  { ar: 'لقز', tr: 'la22az', en: 'sea bass (loup de mer)' },
  { ar: 'كركند', tr: 'karkand', en: 'lobster' },
  { ar: 'جمبري', tr: 'jambari', en: 'shrimp / prawns' },
  { ar: 'أخطبوط', tr: 'akhTabut', en: 'octopus' },
  { ar: 'حبار', tr: '7abbar', en: 'squid / cuttlefish' },
  { ar: 'طازج', tr: 'taze', en: 'fresh (fish)' },
  { ar: 'مسحب', tr: 'mas7ab', en: 'fish market / seafood stall' },
  { ar: 'بياع السمك', tr: 'bayya3 el-samak', en: 'fishmonger / fish seller' },
  { ar: 'موج', tr: 'mawj', en: 'wave / sea waves' },
  { ar: 'شاطئ', tr: 'shaTi2', en: 'beach / shoreline' },
];

const SYD_DRILLS = [
  { q: '"Sayyad" means:', opts: ['Fisherman', 'Fish market', 'Harbor', 'Fishing rod'], ans: 0 },
  { q: '"Shabake" means:', opts: ['Fishing net', 'Fishing rod', 'Boat', 'Wave'], ans: 0 },
  { q: '"La22az" refers to:', opts: ['Sea bass (loup de mer)', 'Sardines', 'Lobster', 'Squid'], ans: 0 },
  { q: '"Karkand" means:', opts: ['Lobster', 'Shrimp', 'Octopus', 'Mullet'], ans: 0 },
  { q: '"7abbar" means:', opts: ['Squid / cuttlefish', 'Octopus', 'Sea bass', 'Sardines'], ans: 0 },
  { q: '"Mina" means:', opts: ['Harbor / port', 'Beach', 'Fish market', 'Fishing net'], ans: 0 },
  { q: '"Taze" when describing fish means:', opts: ['Fresh', 'Grilled', 'Frozen', 'Salted'], ans: 0 },
  { q: '"Jambari" means:', opts: ['Shrimp / prawns', 'Lobster', 'Crab', 'Octopus'], ans: 0 },
];

const SYD_TIPS = [
  {
    title: 'Lebanese Fishing Culture',
    body: "Fishing (sayd) has deep roots in Lebanese coastal towns like Tyre (Sour), Sidon (Saida), Byblos (Jbeil), and Jounieh. Early morning, sayyadin (fishermen) pull their markaab (boats) from the mina (harbor) and set out with their shabake (nets) or sinnara (rod). Freshly caught samak is still sold directly at the dock — the freshest way to buy. The phrase \"min el-ba7r la-tabaltak\" (from the sea to your plate) is taken literally here.",
  },
  {
    title: 'Seafood in Lebanese Cuisine',
    body: "Lebanese seafood is celebrated for freshness. Popular fish: buri (mullet), la22az (sea bass/loup de mer), sardeen (sardines), and swordfish (samak el-sayf). Mezze seafood includes jambari (shrimp), karkand (lobster), akhTabut (octopus), and 7abbar (squid). Fish is typically grilled with lemon, olive oil, and herbs, or fried. Sayadieh (fish with rice and caramelized onions) is the classic Lebanese fish dish.",
  },
  {
    title: 'The Fish Market Experience',
    body: "The mas7ab (fish market/stall) is an experience in itself. Bayya3 el-samak (fishmongers) call out their catch loudly — \"samak taze! samak taze ya awlad!\" (fresh fish! fresh fish, boys!). Bargaining is expected. The test for freshness: bright red gills, clear eyes, firm flesh. Common Lebanese advice: \"buy fish with its eyes\" — meaning buy whole fish you can inspect, not fillets. Prices are always negotiated, rarely fixed.",
  },
  {
    title: 'Coastal Towns & Sea Life',
    body: "Lebanon\'s 225km coastline has distinct fishing identities. Tyre is famous for its ancient harbor and sustainable fishing traditions. Saida\'s fish market is legendary. In Jounieh, restaurant tables extend onto pontoons over the water. The Lebanese sea means summer: shaTi2 (beach), mawj (waves), 3ayniye (swimming in the sea). The phrase \"roo7 mesh3iya 3al-ba7r\" (go for a walk by the sea) is code for clearing your head of Lebanon\'s chaos.",
  },
];
