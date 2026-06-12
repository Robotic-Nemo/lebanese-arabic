// R642 — NEW FEATURE: Lebanese Rural Life & Agriculture (ryf)

const RYF_CATS = [
  { id: 'farm',    label: '🌾 Farming & Land' },
  { id: 'harvest', label: '🫒 Harvest & Produce' },
  { id: 'animals', label: '🐄 Animals & Livestock' },
  { id: 'seasons', label: '🌤️ Rural Seasons & Work' },
];

const RYF_WORDS = [
  // Farming & Land
  { ar: 'الريف',        tr: 'l-reif',         en: 'the countryside / rural',  cat: 'farm' },
  { ar: 'الأرض',        tr: 'l-arD',          en: 'the land / earth / soil',  cat: 'farm' },
  { ar: 'المزرعة',      tr: 'l-mazra3a',      en: 'the farm',                 cat: 'farm' },
  { ar: 'الحقل',        tr: 'l-7a2l',         en: 'the field',                cat: 'farm' },
  { ar: 'البستان',      tr: 'l-bustaan',      en: 'the orchard / garden',     cat: 'farm' },
  { ar: 'الترابة',      tr: 'l-traabe',       en: 'the soil / dirt',          cat: 'farm' },
  { ar: 'سقّى',         tr: 'sa22a',          en: 'watered / irrigated',      cat: 'farm' },
  // Harvest & Produce
  { ar: 'الزيتون',      tr: 'l-zeitoun',      en: 'the olives',               cat: 'harvest' },
  { ar: 'الموسم',       tr: 'l-mawsem',       en: 'the season / harvest time',cat: 'harvest' },
  { ar: 'قطاف',         tr: '2aTaaf',         en: 'the olive/fruit picking',  cat: 'harvest' },
  { ar: 'العنب',        tr: 'l-3anab',        en: 'the grapes',               cat: 'harvest' },
  { ar: 'التين',        tr: 'l-tiin',         en: 'the figs',                 cat: 'harvest' },
  { ar: 'الخروبة',      tr: 'l-kharroobe',    en: 'the carob tree/fruit',     cat: 'harvest' },
  { ar: 'حصاد',         tr: '7aSaad',         en: 'the harvest / reaping',    cat: 'harvest' },
  // Animals & Livestock
  { ar: 'الماعز',       tr: 'l-maa3ez',       en: 'the goats',                cat: 'animals' },
  { ar: 'الغنم',        tr: 'l-ghnam',        en: 'the sheep',                cat: 'animals' },
  { ar: 'البقرة',       tr: 'l-ba2ara',       en: 'the cow',                  cat: 'animals' },
  { ar: 'الدجاج',       tr: 'l-djej',         en: 'the chickens',             cat: 'animals' },
  { ar: 'الحمار',       tr: 'l-7maar',        en: 'the donkey',               cat: 'animals' },
  { ar: 'راعي',         tr: 'raa3i',          en: 'a shepherd / herder',      cat: 'animals' },
  { ar: 'المرعى',       tr: 'l-mar3a',        en: 'the pasture / grazing land', cat: 'animals' },
  // Rural Seasons & Work
  { ar: 'الفلاح',       tr: 'l-fallaa7',      en: 'the farmer / peasant',     cat: 'seasons' },
  { ar: 'بيكفل حالو',   tr: 'bi-kaffel 7aalo', en: 'self-sufficient (lit: covers himself)', cat: 'seasons' },
  { ar: 'عالفجر',       tr: '3a-l-fjer',      en: 'at dawn / at daybreak',    cat: 'seasons' },
  { ar: 'تعب الأرض',    tr: 'ta3ab l-arD',    en: 'the hard work of the land',cat: 'seasons' },
  { ar: 'مية النبع',    tr: 'mayyet l-nab3',  en: 'spring water (natural)',   cat: 'seasons' },
  { ar: 'دروب الجبل',   tr: 'drub l-jabal',   en: 'mountain paths / trails',  cat: 'seasons' },
  { ar: 'ريحة التراب المبلول', tr: 'riy7et l-traab l-mablool', en: 'smell of wet earth', cat: 'seasons' },
];

const RYF_DRILLS = [
  { q: 'How do you say "the farm" in Lebanese?', opts: ['l-bustaan','l-mazra3a','l-7a2l','l-reif'], ans: 1 },
  { q: 'What does "2aTaaf" mean?', opts: ['watering','harvest season','olive/fruit picking','plowing'], ans: 2 },
  { q: '"l-zeitoun" means?', opts: ['the figs','the grapes','the olives','the carob'], ans: 2 },
  { q: 'How do you say "the sheep"?', opts: ['l-maa3ez','l-ghnam','l-ba2ara','l-djej'], ans: 1 },
  { q: 'What does "l-fallaa7" mean?', opts: ['the orchard','the pasture','the harvest','the farmer'], ans: 3 },
  { q: '"sa22a" means?', opts: ['harvested','watered/irrigated','picked fruit','plowed'], ans: 1 },
  { q: 'How do you say "the field"?', opts: ['l-7a2l','l-arD','l-bustaan','l-traabe'], ans: 0 },
  { q: 'What does "l-mawsem" mean?', opts: ['the farm','the farmer','the season/harvest time','the land'], ans: 2 },
  { q: '"l-3anab" means?', opts: ['the olives','the figs','the carob','the grapes'], ans: 3 },
  { q: 'How do you say "the goats"?', opts: ['l-ghnam','l-maa3ez','l-djej','l-7maar'], ans: 1 },
  { q: 'What does "raa3i" mean?', opts: ['a farmer','a shepherd/herder','a landowner','a harvester'], ans: 1 },
  { q: '"7aSaad" means?', opts: ['spring water','the harvest','at dawn','mountain paths'], ans: 1 },
  { q: 'How do you say "the orchard"?', opts: ['l-mazra3a','l-7a2l','l-bustaan','l-reif'], ans: 2 },
  { q: 'What does "3a-l-fjer" mean?', opts: ['in the fields','at harvest','at dawn','in the village'], ans: 2 },
  { q: '"l-mar3a" means?', opts: ['the farm','the field','the pasture/grazing land','the earth'], ans: 2 },
];

const RYF_TIPS = [
  { title: 'Olive season — قطاف', body: '"2aTaaf l-zeitoun" (olive picking) is a major autumn event in Lebanese villages. Families gather to hand-pick olives in October–November. It\'s deeply social — a reason to return to the village.' },
  { title: 'The farmer\'s identity', body: '"L-fallaa7" (farmer/peasant) is a word of pride in Lebanon despite city bias. Saying "ibn l-fallaa7" (son of a farmer) signals humility and roots. "Ta3ab l-arD" = the hard work of the land — respected greatly.' },
  { title: 'Water in Lebanon', body: '"Mayyet l-nab3" (spring water) is precious. Lebanon has natural springs ("nab3" = spring/source). "Sa22a" (watered) is crucial for farming — water rights are serious village politics.' },
  { title: 'Rural animals', body: '"L-maa3ez" (goats) and "l-ghnam" (sheep) graze on mountain slopes. "Raa3i" (shepherd) still exists. "L-7maar" (donkey) was historically the rural transport — now rare but still symbolically important.' },
  { title: 'Village self-sufficiency', body: '"Bi-kaffel 7aalo" (self-sufficient) is the rural ideal — growing your own food, raising animals. "Min arDna" (from our land) = a phrase of pride when serving home-grown produce.' },
  { title: 'Sensory rural vocab', body: '"Riy7et l-traab l-mablool" (smell of wet earth) is a deeply nostalgic phrase. "3a-l-fjer" (at dawn) is when farm work starts. "Drub l-jabal" (mountain paths) are trails between villages — some centuries old.' },
];
