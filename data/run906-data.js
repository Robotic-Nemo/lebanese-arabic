// R906 — NEW FEATURE: Lebanese Ski & Snow Mountain Culture (ski)

const SKI_WORDS = [
  { ar: 'تزلّج', tr: 'tazallaj', en: 'skiing / to ski' },
  { ar: 'جبل', tr: 'jabal', en: 'mountain' },
  { ar: 'ثلج', tr: 'talj', en: 'snow' },
  { ar: 'تلفريك', tr: 'telefrik', en: 'cable car / gondola' },
  { ar: 'مزار', tr: 'Mzaar', en: 'Mzaar (major ski resort)' },
  { ar: 'فاريا', tr: 'Faarya', en: 'Faraya (ski village)' },
  { ar: 'الأرز', tr: 'el-arz', en: 'The Cedars (ski resort & cedar forest)' },
  { ar: 'لوح تزلّج', tr: 'law7 tazallaj', en: 'ski board / snowboard' },
  { ar: 'عصا التزلّج', tr: '3aSa el-tazallaj', en: 'ski pole' },
  { ar: 'نظارة شتوية', tr: 'naDDaara shatwiyye', en: 'ski goggles' },
  { ar: 'بدلة تزلّج', tr: 'badlet tazallaj', en: 'ski suit' },
  { ar: 'قفاز', tr: '2uffaaz', en: 'ski gloves' },
  { ar: 'درب التزلّج', tr: 'darb el-tazallaj', en: 'ski run / piste' },
  { ar: 'مدرّب تزلّج', tr: 'mudarrib tazallaj', en: 'ski instructor' },
  { ar: 'شالية', tr: 'shaalee', en: 'chalet / mountain cabin' },
  { ar: 'تقع', tr: 'ti22a3', en: 'to fall (on the slope)' },
  { ar: 'مزلقة', tr: 'mazla2a', en: 'sledge / sled' },
  { ar: 'بياض ثلج', tr: 'byaaD talj', en: 'snowfall / white snow' },
  { ar: 'يوم عطلة', tr: 'yoom 3oTle', en: 'holiday / day off (ski day)' },
  { ar: 'موسم الشتاء', tr: 'mawsim el-shitaa', en: 'winter season' },
  { ar: 'أرض ثلجية', tr: 'arD taljiyye', en: 'snowy ground / icy surface' },
  { ar: 'مبتدئ', tr: 'mubtadi2', en: 'beginner (skier)' },
  { ar: 'متقدّم', tr: 'muta2addim', en: 'advanced (skier)' },
  { ar: 'الجبل كتير مرتفع', tr: 'el-jabal ktiir murtafi3', en: 'the mountain is very high' },
  { ar: 'عم بتلقى ثلج', tr: '3am btil2a talj', en: 'there\'s snow / you\'ll find snow' },
  { ar: 'روح تزلّج', tr: 'ruu7 tazallaj', en: 'go skiing (command)' },
  { ar: 'تلج عم بيقع', tr: 'talj 3am byi22a3', en: 'snow is falling' },
  { ar: 'بتلاقي أكل وشرب عالجبل', tr: 'btlaa2i akl w sharib 3al-jabal', en: 'you\'ll find food and drink on the mountain' }
];

const SKI_DRILLS = [
  { q: 'How do you say "snow"?', opts: ['talj', 'jabal', 'tazallaj', 'shatwiyye'], ans: 0 },
  { q: 'How do you say "skiing / to ski"?', opts: ['telefrik', 'tazallaj', '2uffaaz', 'darb'], ans: 1 },
  { q: 'What is "Mzaar"?', opts: ['A cedar forest', 'A cable car', 'A major ski resort', 'A ski instructor'], ans: 2 },
  { q: 'How do you say "cable car / gondola"?', opts: ['shaalee', 'mazla2a', 'mudarrib', 'telefrik'], ans: 3 },
  { q: 'How do you say "ski goggles"?', opts: ['naDDaara shatwiyye', 'badlet tazallaj', '2uffaaz', 'law7 tazallaj'], ans: 0 },
  { q: 'How do you say "chalet / mountain cabin"?', opts: ['3aSa el-tazallaj', 'shaalee', 'darb el-tazallaj', 'arD taljiyye'], ans: 1 },
  { q: 'What does "el-arz" mean?', opts: ['The ski slope', 'The snowfall', 'The Cedars (ski resort)', 'The mountain road'], ans: 2 },
  { q: 'How do you say "ski gloves"?', opts: ['mawsim', 'badlet', '2uffaaz', 'law7'], ans: 2 },
  { q: 'How do you say "to fall (on slope)"?', opts: ['tazallaj', 'ti22a3', 'mazla2a', 'ruu7'], ans: 1 },
  { q: 'How do you say "beginner (skier)"?', opts: ['muta2addim', 'mudarrib', 'mubtadi2', 'murtafi3'], ans: 2 },
  { q: 'How do you say "winter season"?', opts: ['yoom 3oTle', 'mawsim el-shitaa', 'byaaD talj', 'arD taljiyye'], ans: 1 },
  { q: 'How do you say "snowboard"?', opts: ['3aSa el-tazallaj', 'law7 tazallaj', 'darb el-tazallaj', '2uffaaz'], ans: 1 },
  { q: '"Talj 3am byi22a3" means?', opts: ['Snow is melting', 'It\'s cold outside', 'Snow is falling', 'There\'s ice on the road'], ans: 2 },
  { q: 'How do you say "ski run / piste"?', opts: ['darb el-tazallaj', 'badlet tazallaj', 'mazla2a', 'shaalee'], ans: 0 },
  { q: 'How do you say "advanced (skier)"?', opts: ['mubtadi2', 'mudarrib', 'muta2addim', 'murtafi3'], ans: 2 },
  { q: 'How do you say "ski instructor"?', opts: ['mubtadi2', 'mudarrib tazallaj', 'muta2addim', 'telefrik'], ans: 1 }
];

const SKI_TIPS = [
  { title: 'Lebanon: Sea & Ski Same Day', body: 'Lebanon is one of few places where you can ski in the morning and swim in the Mediterranean by afternoon — a source of immense national pride. The boast "tazallajt w 3imtu bl-yoom el-wa7id" (I skied and swam the same day) is a classic Lebanese flex, often met with "bse3a el-wa7de el-far2" (it\'s one hour apart).' },
  { title: 'The Resorts', body: 'Main resorts: Mzaar Kfardebian (largest), Faraya (oldest), The Cedars (el-arz, near Bsharre), Laqlouq, and Zaarour. Lebanese ski season runs December–March. Weekend traffic from Beirut to the mountains is legendary — the road to Faarya on Saturdays is a parking lot.' },
  { title: 'Chalet Culture', body: 'The shaalee (chalet) is central to Lebanese ski culture — it\'s less about slopes and more about gathering. Groups rent chalets for the whole season (mawsim). 3am byishrabuu kahwe, byaaklu mane2iish, w byit7assabuu min el-talj — drinking coffee, eating maneesh, and watching snow from inside. The skiing itself is optional.' },
  { title: 'Mountain Vocabulary', body: 'Key phrases: "el-jabal msakkar" (mountain road is closed), "fi talj ktir" (there\'s lots of snow), "3am byi22a3 talj" (snow is falling), "el-darb zila2" (the road is slippery). The informal ski lesson is: "shu hayda, bad haakak bi nus sa3a" (what\'s this, I\'ll teach you in half an hour).' },
  { title: 'Cedars & National Symbol', body: 'El-arz (the Cedars) is both a ski resort and a UNESCO ancient cedar forest. The cedar tree is Lebanon\'s national symbol — on the flag, in songs, in poetry. Visiting el-arz carries a deeper meaning than just skiing: it connects Lebanese to their ancient roots. Phrases: "3m bn3am bi tal3et el-arz" (we spent a night at the Cedars).' }
];
