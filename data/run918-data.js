// R918 — NEW FEATURE: Lebanese Nightlife & Bar Culture (ngt)

const NLB_WORDS = [
  { ar: 'بار', tr: 'baar', en: 'bar' },
  { ar: 'كلوب', tr: 'klaab', en: 'nightclub' },
  { ar: 'مسبح', tr: 'masba7', en: 'pool party / beach club' },
  { ar: 'عَ الجمّيزة', tr: '3a l-Gemmayzeh', en: 'in Gemmayzeh (Beirut nightlife district)' },
  { ar: 'مار مخايل', tr: 'Maar Mikhayel', en: 'Mar Mikhael (another nightlife area)' },
  { ar: 'حبة مشروب', tr: '7abbet mashrub', en: 'a drink (casual)' },
  { ar: 'وسكي', tr: 'wiski', en: 'whisky' },
  { ar: 'عرق', tr: '3ara2', en: 'arak (anise spirit, Lebanese national drink)' },
  { ar: 'بيرة', tr: 'biira', en: 'beer' },
  { ar: 'تكيلا', tr: 'tekiila', en: 'tequila' },
  { ar: 'كوكتيل', tr: 'kokteel', en: 'cocktail' },
  { ar: 'شوت', tr: 'shott', en: 'shot (of alcohol)' },
  { ar: 'كمان واحدة', tr: 'kamaan waa7de', en: 'one more (drink/round)' },
  { ar: 'بالصحة', tr: 'biS-S7a', en: 'cheers! / to your health!' },
  { ar: 'كيف الجو؟', tr: 'kiif el-jaw?', en: 'how\'s the vibe? (how\'s the atmosphere?)' },
  { ar: 'الجو ميت', tr: 'el-jaw miit', en: 'the vibe is dead (boring night out)' },
  { ar: 'الجو ناري', tr: 'el-jaw naari', en: 'the vibe is fire (amazing night)' },
  { ar: 'حجز طاولة', tr: '7ajaz Taawle', en: 'reserved a table' },
  { ar: 'خدمة', tr: 'khidme', en: 'bottle service' },
  { ar: 'ديجي', tr: 'DJ', en: 'DJ' },
  { ar: 'موسيقى عالي', tr: 'muusiqa 3aali', en: 'loud music' },
  { ar: 'رقص', tr: 'ra2S', en: 'dancing' },
  { ar: 'السكيورتي', tr: 'es-sekurity', en: 'security / bouncer' },
  { ar: 'دوبل', tr: 'double', en: 'double (shot)' },
  { ar: 'فاتورة', tr: 'faatuura', en: 'bill / check' },
  { ar: 'الليلة ع حسابي', tr: 'el-leele 3a 7saabi', en: 'tonight is on me' },
  { ar: 'سهرنا ع الصبح', tr: 'sehirna 3a S-Sub7', en: 'we stayed out until dawn' },
  { ar: 'خبطت', tr: 'khbaTt', en: 'I\'m drunk / I\'m hammered (lit: knocked)' }
];

const NLB_DRILLS = [
  { q: 'How do you say "bar"?', opts: ['klaab', 'baar', 'masba7', 'DJ'], ans: 1 },
  { q: 'What is "3ara2"?', opts: ['Beer', 'Tequila', 'Arak (anise spirit)', 'Cocktail'], ans: 2 },
  { q: 'How do you say "cheers"?', opts: ['biS-S7a', 'sehirna', 'khbaTt', '7abbet mashrub'], ans: 0 },
  { q: 'What does "el-jaw naari" mean?', opts: ['The night is over', 'The vibe is fire', 'The bar is empty', 'The music is loud'], ans: 1 },
  { q: 'How do you say "one more (drink)"?', opts: ['double', 'shott', 'kamaan waa7de', 'faatuura'], ans: 2 },
  { q: 'What does "el-jaw miit" mean?', opts: ['The vibe is fire', 'The music stopped', 'The vibe is dead', 'The bar closed'], ans: 2 },
  { q: 'How do you say "bottle service"?', opts: ['ra2S', 'khidme', 'DJ', 'kokteel'], ans: 1 },
  { q: 'What is "3a l-Gemmayzeh"?', opts: ['Pool party', 'In Gemmayzeh district', 'Bottle service', 'Bar bill'], ans: 1 },
  { q: 'How do you say "I\'m drunk / hammered"?', opts: ['biS-S7a', 'sehirna', '7ajaz Taawle', 'khbaTt'], ans: 3 },
  { q: 'What does "el-leele 3a 7saabi" mean?', opts: ['The vibe is on fire', 'Tonight is on me', 'We stayed until dawn', 'One more round'], ans: 1 },
  { q: 'How do you say "dancing"?', opts: ['muusiqa', 'khidme', 'ra2S', 'faatuura'], ans: 2 },
  { q: 'What is "sehirna 3a S-Sub7"?', opts: ['We arrived early', 'We stayed out until dawn', 'We reserved a table', 'We had one drink'], ans: 1 },
  { q: 'How do you say "shot"?', opts: ['biira', 'wiski', 'shott', 'double'], ans: 2 },
  { q: 'What is "es-sekurity"?', opts: ['DJ booth', 'Bouncer / security', 'Bill', 'Shot glass'], ans: 1 },
  { q: 'How do you say "how\'s the vibe"?', opts: ['kiif el-jaw?', 'biS-S7a', 'kamaan waa7de', 'el-jaw naari'], ans: 0 },
  { q: 'What does "7ajaz Taawle" mean?', opts: ['Paid the bill', 'Reserved a table', 'Did a shot', 'Ordered a double'], ans: 1 }
];

const NLB_TIPS = [
  { title: 'Gemmayzeh & Mar Mikhael', body: 'Lebanon\'s nightlife is concentrated in two Beirut streets: Gemmayzeh (3a l-Gemmayzeh) and Mar Mikhael (Maar Mikhayel). These areas run parallel in East Beirut and contain hundreds of bars, restaurants, and clubs packed into narrow streets. On weekends, the streets themselves become the party — sidewalk tables overflow, music spills from every door, and people walk bar-to-bar until 4am. Even during the economic crisis, these areas stayed packed. The Lebanese will always find a way to celebrate.' },
  { title: 'Arak: The National Drink', body: '"3ara2" (arak) is Lebanon\'s defining alcohol — an anise-flavored spirit distilled from grapes. It\'s served with water and ice, turning cloudy white ("it blooms" — biyfa22a3). Arak is never drunk alone — it accompanies long mezze meals. A true Lebanese will tell you: drinking arak without food is not Lebanese. The ritual: pour arak, add water (never ice first), watch it cloud, raise your glass and say "biS-S7a!" The pace is slow, conversational, stretching for hours.' },
  { title: 'The Vibe Economy', body: 'In Lebanese nightlife, "el-jaw" (the vibe/atmosphere) is everything. "El-jaw naari" (the vibe is fire) is the highest compliment for a venue. "El-jaw miit" (the vibe is dead) is a reason to leave immediately. The Lebanese assess a venue within 30 seconds of entering — the music, the crowd, the lighting, the energy. Bottle service (khidme) tables dominate premium clubs. A reserved table (7ajaz Taawle) with bottles signals status. The security bouncer (es-sekurity) at the door decides your fate.' },
  { title: 'Lebanese Night Timing', body: 'Lebanese nightlife runs on a completely different clock from the rest of the world. Dinner is at 10pm. The bar fills at midnight. The club peaks at 3am. "Sehirna 3a S-Sub7" (we stayed until dawn) is normal and aspirational. Leaving before 2am is considered early. The Lebanese concept of "baad shwayye" (in a little while) can mean two more hours at the bar. The phrase "kamaan waa7de" (one more) will be repeated until sunrise.' },
  { title: 'Drinking Culture & Toasts', body: '"BiS-S7a!" (to your health) is the Lebanese toast — said at the clink of every glass. The Lebanese drink socially, not competitively. "KhbaTt" (I\'m hammered/knocked) is a confession, not a boast. The bill (faatuura) at Lebanese clubs and bars can be shocking — bottle minimums in premium venues can hit $500+ even during the lira crisis, paid in "fresh dollars" (cash USD). "El-leele 3a 7saabi" (tonight is on me) is said with genuine pride — Lebanese hospitality extends fully into nightlife.' }
];
