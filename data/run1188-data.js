// R1188 — NEW FEATURE: Lebanese Beach Club & Lido Culture (ldo)

const LDO_WORDS = [
  { ar: 'ليدو', tr: 'lido', en: 'beach club / lido' },
  { ar: 'مسبح', tr: 'masba7', en: 'swimming pool' },
  { ar: 'شاطئ', tr: 'shate2', en: 'beach / shore' },
  { ar: 'كابينة', tr: 'kabine', en: 'changing cabin / beach cabin' },
  { ar: 'مظلة', tr: 'mazalle', en: 'beach umbrella / parasol' },
  { ar: 'كرسي شمس', tr: 'kursi shams', en: 'sun lounger / deck chair' },
  { ar: 'بحر', tr: 'ba7ar', en: 'sea / ocean' },
  { ar: 'موج', tr: 'mawj', en: 'waves' },
  { ar: 'سباحة', tr: 'sba7e', en: 'swimming' },
  { ar: 'غطس', tr: 'ghats', en: 'diving / snorkeling' },
  { ar: 'جت سكي', tr: 'jet ski', en: 'jet ski' },
  { ar: 'باراسيلينغ', tr: 'parasailing', en: 'parasailing' },
  { ar: 'حراس شاطئ', tr: '7arras shate2', en: 'lifeguard' },
  { ar: 'بوفيه', tr: 'buffe', en: 'buffet / snack bar' },
  { ar: 'مشروبات', tr: 'mashrubet', en: 'drinks / beverages' },
  { ar: 'فطيرة شمس', tr: 'fteeret shams', en: 'sunburn (lit. sun pancake)' },
  { ar: 'واقي شمس', tr: 'we2e shams', en: 'sunscreen / sunblock' },
  { ar: 'نظارة شمس', tr: 'naddara shams', en: 'sunglasses' },
  { ar: 'مايوه', tr: 'mayo', en: 'swimsuit / swimwear' },
  { ar: 'ماء بارد', tr: 'may bared', en: 'cold water' },
  { ar: 'عمق', tr: '3omq', en: 'depth / deep water' },
  { ar: 'رحلة بحرية', tr: 're7le ba7riye', en: 'boat trip / sea excursion' },
];

const LDO_DRILLS = [
  { q: '"Masba7" means:', opts: ['swimming pool', 'sea', 'beach cabin', 'waves'], ans: 0 },
  { q: '"Kabine" at a Lebanese lido is:', opts: ['changing cabin', 'lifeguard post', 'snack bar', 'sun lounger'], ans: 0 },
  { q: '"7arras shate2" means:', opts: ['lifeguard', 'beach vendor', 'boat captain', 'diving instructor'], ans: 0 },
  { q: 'The Lebanese word for "waves" is:', opts: ['mawj', 'ba7ar', '3omq', 'shate2'], ans: 0 },
  { q: '"We2e shams" is:', opts: ['sunscreen', 'sunglasses', 'sunburn', 'sun lounger'], ans: 0 },
  { q: '"Ghats" means:', opts: ['diving / snorkeling', 'swimming', 'surfing', 'boating'], ans: 0 },
  { q: '"Mazalle" at the beach is:', opts: ['beach umbrella / parasol', 'beach cabin', 'sun lounger', 'swimming pool'], ans: 0 },
  { q: '"Fteeret shams" literally means:', opts: ['sunburn (lit. sun pancake)', 'sunscreen', 'suntan', 'heat wave'], ans: 0 },
];

const LDO_TIPS = [
  {
    title: 'The Famous Lebanese Lidoes',
    body: "Lebanon's beach clubs are an institution. Sporting Club (since 1948) is Beirut's oldest and most iconic — generations of families swam there. Saint-Simon, Bamboo Bay, Blue Beach, Lazy B in Batroun, and Edde Sands in Byblos are summer landmarks. Entry fees can reach $30-60+ in peak summer. Many Lebanese have a 'home lido' they return to year after year.",
  },
  {
    title: 'The Saturday Morning Rush',
    body: "Lebanese lido culture peaks on weekends from June to September. Families arrive at 8am to claim the best spots (best cabin, shady area near pool). \"Bi3mil la2 kabine\" (booking a cabin in advance) is essential for popular clubs. The social scene is as important as the swimming — meeting neighbors, catching up, eating manakish by the pool.",
  },
  {
    title: 'Lido Food & Drinks',
    body: "Every lido has a snack bar or full restaurant. Staples: grilled corn (daura mashwiye), 3asir (fresh juice), sandwiche, and arak with mezze for adults. \"Nazzilna 3a-l-bahr\" (we went down to the sea) is how Lebanese describe a lido day. Ordering Almaza beer or 7up while floating on a lilo is peak Lebanese summer.",
  },
  {
    title: 'Sea Safety & Etiquette',
    body: "\"3omq\" (depth) is taken seriously — Lebanese parents warn kids \"la tro7 3al 3omq\" (don't go to the deep). Lifeguards (7arras shate2) are posted but the culture is relaxed. Red flag = dangerous waves = la titla3 (don't go in). Night swimming (sba7et leil) in coves and private beaches is a rite of passage for Lebanese teens and 20-somethings.",
  },
];
