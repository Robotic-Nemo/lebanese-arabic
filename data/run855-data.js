// R855 — NEW FEATURE: Lebanese Village Life & Rural Culture (vil)

const VIL_CATS = ['village','farming','customs','expressions'];

const VIL_WORDS = [
  // village life
  { a: 'ضيعة', tr: 'Dey3a', en: 'village — Lebanese identify strongly with their ancestral village even after generations in Beirut', cat: 'village' },
  { a: 'بيت إجداد', tr: 'beet ijdaad', en: 'ancestral home — the old stone house in the village kept for summer visits and weddings', cat: 'village' },
  { a: 'مشاع', tr: 'mashaa3', en: 'communal land — shared agricultural land between village families', cat: 'village' },
  { a: 'منطقة', tr: 'manTa2a', en: 'region/district — Lebanese often specify their region before their village when introducing themselves', cat: 'village' },
  { a: 'بيت حجر', tr: 'beet 7ajar', en: 'stone house — traditional Lebanese village homes built from local limestone', cat: 'village' },
  { a: 'أكل بالضيعة', tr: '2akal bil-Dey3a', en: 'eating in the village — always better than the city, according to everyone from a village', cat: 'village' },
  { a: 'صيفية', tr: 'Seefiyye', en: 'summer residence — city families rent or own a place to escape to the mountains in summer', cat: 'village' },
  // farming & land
  { a: 'كرم', tr: 'karm', en: 'vineyard/orchard — family karm produces olives, grapes, or figs passed down generations', cat: 'farming' },
  { a: 'زيتون', tr: 'zeitoon', en: 'olives — pressing season (mawsim il-zeitoon) is a major social event in rural Lebanon', cat: 'farming' },
  { a: 'عتيق', tr: '3atii2', en: 'aged/old — "3atii2" applied to olive oil or wine means exceptional quality', cat: 'farming' },
  { a: 'معصرة', tr: 'ma3Sara', en: 'olive press — village communal press where families take olives to extract oil', cat: 'farming' },
  { a: 'تين', tr: 'teen', en: 'figs — fresh figs from the village tree, eaten warm, are a quintessential Lebanese summer memory', cat: 'farming' },
  { a: 'عنب', tr: '3inab', en: 'grapes — the Bekaa and Keserwan regions produce grapes for Lebanon\'s growing wine industry', cat: 'farming' },
  { a: 'ميّه نبعة', tr: 'mayye nab3a', en: 'spring water — village spring water is considered superior to anything bottled or piped', cat: 'farming' },
  // customs
  { a: 'عزيمة', tr: '3aziime', en: 'invitation/hospitality — a formal invitation to eat that cannot be declined without serious offense', cat: 'customs' },
  { a: 'مونة', tr: 'moune', en: 'preserved food pantry — jars of jam, olive oil, za3tar mix, cheese prepared for the year', cat: 'customs' },
  { a: 'فلاحة', tr: 'filaa7a', en: 'farming/agriculture — "3ando filaa7a" = he has farmland, carries social respect in rural areas', cat: 'customs' },
  { a: 'سطح', tr: 'saT7', en: 'rooftop — village rooftops used for drying figs, za3tar, and social gatherings', cat: 'customs' },
  { a: 'دكانة', tr: 'dkkaane', en: 'village shop — the single store that is also the village social hub and news exchange', cat: 'customs' },
  { a: 'طابون', tr: 'Taaboon', en: 'outdoor clay oven — traditional bread-baking oven, still used in many Lebanese villages', cat: 'customs' },
  // expressions
  { a: 'من وين أصلك؟', tr: 'min ween aSlak?', en: '"Where are you originally from?" — first question Lebanese ask each other, means village not city', cat: 'expressions' },
  { a: 'أهل الضيعة', tr: '2ahl id-Dey3a', en: '"People of the village" — the extended community, everyone related or acting like it', cat: 'expressions' },
  { a: 'هواء الضيعة غير', tr: 'hawa id-Dey3a gheer', en: '"Village air is different" — claimed by all Lebanese from villages, usually correct', cat: 'expressions' },
  { a: 'رح نروح على الضيعة', tr: 'ra7 nruu7 3a d-Dey3a', en: '"We\'re going to the village" — summer migration tradition from Beirut', cat: 'expressions' },
  { a: 'أكل مرتّب', tr: '2akal mratab', en: '"Proper home-cooked food" — village food is the gold standard, never restaurant quality', cat: 'expressions' },
  { a: 'جيراني مبسوطين', tr: 'jiiraani mabSuuTiin', en: '"My neighbors are happy" — village ethos: neighbors know everything and help with everything', cat: 'expressions' },
  { a: 'ريحة الأرض', tr: 'rii7it il-arD', en: '"The smell of the earth" — after rain on dry village soil, deeply nostalgic for Lebanese', cat: 'expressions' },
  { a: 'صوت الجرس', tr: 'Sawt il-jaras', en: '"Sound of the church bell" — village church bells mark time and community events', cat: 'expressions' }
];

const VIL_DRILLS = [
  { q: 'What is "village" in Lebanese Arabic?', opts: ['manTa2a', 'Dey3a', 'beet ijdaad', 'ma3Sara'], ans: 1 },
  { q: 'What does "moune" mean?', opts: ['village shop', 'preserved food pantry', 'communal land', 'outdoor oven'], ans: 1 },
  { q: 'How do you say "vineyard/orchard"?', opts: ['zeitoon', 'karm', '3inab', 'teen'], ans: 1 },
  { q: '"Where are you originally from?" in Lebanese?', opts: ['min ween aSlak?', 'ra7 nruu7 3a d-Dey3a', '2ahl id-Dey3a', 'hawa id-Dey3a gheer'], ans: 0 },
  { q: 'What is "olive press" in Lebanese?', opts: ['ma3Sara', 'moune', 'Taaboon', 'saT7'], ans: 0 },
  { q: 'How do you say "spring water"?', opts: ['mayye nab3a', 'rii7it il-arD', '3aziime', 'Seefiyye'], ans: 0 },
  { q: '"Village air is different" — how do you say it?', opts: ['2akal mratab', 'Sawt il-jaras', 'hawa id-Dey3a gheer', 'jiiraani mabSuuTiin'], ans: 2 },
  { q: 'What is "outdoor clay oven" in Lebanese?', opts: ['dkkaane', 'saT7', 'Taaboon', 'mashaa3'], ans: 2 },
  { q: 'How do you say "figs"?', opts: ['zeitoon', '3inab', 'teen', '3atii2'], ans: 2 },
  { q: '"We\'re going to the village" in Lebanese?', opts: ['ra7 nruu7 3a d-Dey3a', '2ahl id-Dey3a', 'rii7it il-arD', 'beet 7ajar'], ans: 0 },
  { q: 'What does "3aziime" mean?', opts: ['stone house', 'formal invitation', 'rooftop', 'ancestral home'], ans: 1 },
  { q: 'How do you say "summer residence"?', opts: ['mashaa3', 'Seefiyye', 'filaa7a', 'karm'], ans: 1 },
  { q: 'What is "olives" in Lebanese?', opts: ['teen', '3inab', 'zeitoon', 'arz'], ans: 2 },
  { q: '"The smell of the earth" in Lebanese?', opts: ['Sawt il-jaras', 'rii7it il-arD', '2akal bil-Dey3a', 'hawa id-Dey3a gheer'], ans: 1 },
  { q: 'What does "dkkaane" mean?', opts: ['communal land', 'rooftop', 'village shop', 'stone house'], ans: 2 },
  { q: 'How do you say "ancestral home"?', opts: ['beet ijdaad', 'manTa2a', 'mashaa3', 'beet 7ajar'], ans: 0 }
];

const VIL_TIPS = [
  '<strong>Village identity in Lebanon</strong>: Lebanese people identify deeply with their ancestral village (Dey3a). When two Lebanese meet, "min ween aSlak?" is often the first question — more important than city neighborhood.',
  '<strong>Moune culture</strong>: The traditional Lebanese pantry (moune) is a serious annual project. Families spend weekends in summer and fall making jams, pressing olives, drying herbs, and storing provisions. A well-stocked moune is a source of pride.',
  '<strong>Summer migration</strong>: Every summer, Lebanese families relocate to mountain villages to escape Beirut heat. "Ra7 nruu7 3a d-Dey3a" is a seasonal ritual — schools empty, Beirut quiets, mountain villages fill.',
  '<strong>Olive harvest season</strong>: "Mawsim iz-zeitoon" (olive season, October-November) is a major event. Families gather to harvest, chat, and bring olives to the village ma3Sara (press). The fresh oil is shared with everyone.',
  '<strong>Stone house tradition</strong>: Lebanese village homes are built from local limestone (beet 7ajar). Restoring an ancestral stone house is a badge of cultural pride and often a major life project for diaspora Lebanese.',
  '<strong>Village food superiority complex</strong>: Every Lebanese person insists their village food is superior. "2akal bil-Dey3a" is never just eating — it\'s the freshest vegetables, homemade cheese, and bread from the Taaboon, eaten with family.'
];
