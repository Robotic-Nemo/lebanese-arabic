// R1365 — NEW FEATURE: Lebanese Trail & Trekking Culture (trl)
const TRL_WORDS = [
  { ar: 'mshawar', tr: 'hike / trek', en: 'a mountain hike or trail walk — a Lebanese weekend staple' },
  { ar: 'darb', tr: 'trail / path', en: 'a mountain path or trail, often centuries-old mule tracks' },
  { ar: 'jabal', tr: 'mountain', en: 'the mountain — Lebanon\'s defining landscape, central to identity' },
  { ar: 'khshab l-arz', tr: 'cedar wood', en: 'the cedar forest, Lebanon\'s national symbol and top trekking destination' },
  { ar: 'wadi', tr: 'valley / gorge', en: 'a river valley or gorge carved between the mountains' },
  { ar: 'nbi2', tr: 'spring / water source', en: 'a natural spring — essential waypoint on mountain trails' },
  { ar: 'mghara', tr: 'cave / grotto', en: 'a cave, many historically important in Lebanese mountains' },
  { ar: 'Lebanon Mountain Trail', tr: 'LMT', en: 'the 440km national trail running the full length of Lebanon north to south' },
  { ar: 'shallal', tr: 'waterfall', en: 'a waterfall — popular hiking destination especially in spring snowmelt' },
  { ar: 'tlaij', tr: 'snow', en: 'snow — Lebanon uniquely offers skiing and beach swimming on the same day' },
  { ar: 'darb l-wadi', tr: 'valley trail', en: 'a trail descending into a valley — usually the hardest part of a hike' },
  { ar: 'kharroube', tr: 'carob tree', en: 'carob tree — shade provider and trail snack, wild across Lebanese hills' },
  { ar: 'mir2ab', tr: 'viewpoint / lookout', en: 'a scenic overlook — Lebanese hikers stop to admire the view and take photos' },
  { ar: 'maza3', tr: 'farm / orchard', en: 'a terraced orchard or farm on a hillside — trail often passes through' },
  { ar: 'sakhre', tr: 'rock / boulder', en: 'a rock or boulder — used as landmark or resting spot on trails' },
  { ar: 'nzoul 3ala l-wadi', tr: 'descending into the valley', en: 'the classic Lebanese hike structure — climb up, descend to a valley village' },
  { ar: 'dayye 3al-jabal', tr: 'mountain village', en: 'a mountain village — the destination and highlight of most Lebanese treks' },
  { ar: 'mankal', tr: 'portable grill / BBQ', en: 'the portable grill — Lebanese hikers always bring one for post-hike grilling' },
  { ar: 'ta3be', tr: 'tired / exhausted', en: 'exhausted after a hard trail — said with pride in Lebanese hiking culture' },
  { ar: 'yalla nshuuf l-jabal', tr: 'let\'s go see the mountain', en: 'the classic Lebanese weekend invitation — time to hit the trails' }
];
const TRL_DRILLS = [
  { q: 'What is the LMT?', opts: ['a mountain village', 'the 440km national trail', 'a valley gorge', 'a waterfall'], a: 1 },
  { q: '"Mshawar" means?', opts: ['a mountain spring', 'a cave', 'hike / trek', 'viewpoint'], a: 2 },
  { q: 'What is "mir2ab"?', opts: ['a trail', 'a cedar forest', 'viewpoint / lookout', 'a boulder'], a: 2 },
  { q: '"Mankal" is?', opts: ['a mountain village', 'portable grill / BBQ', 'cedar wood', 'snow'], a: 1 },
  { q: 'What is "nbi2"?', opts: ['a gorge', 'a carob tree', 'natural spring / water source', 'a cave'], a: 2 },
  { q: '"Dayye 3al-jabal" means?', opts: ['waterfall destination', 'mountain village', 'terraced orchard', 'valley trail'], a: 1 },
  { q: 'What is "shallal"?', opts: ['waterfall', 'valley', 'boulder', 'spring'], a: 0 },
  { q: '"Tlaij" is famous in Lebanon because?', opts: ['it\'s only in caves', 'skiing and beach same day possible', 'it never melts', 'only in north Lebanon'], a: 1 }
];
const TRL_TIPS = [
  'Lebanon has one of the most dramatic hiking landscapes in the Middle East — within 40km you can move from Mediterranean coast through pine forests to 3,000m peaks. The Lebanon Mountain Trail (LMT) is a world-class 440km route across all this terrain.',
  'Lebanese hiking culture is deeply social. The "mshawar" always ends with a village lunch or post-hike mankal (BBQ). Bringing food and sharing at the summit or a village terrace is as important as the trail itself.',
  'Seasons matter: spring (March–May) offers wildflowers and snowmelt waterfalls; autumn (Sept–Nov) is ideal for the full LMT. Summer treks target high altitude (2000m+) to escape coastal heat. Winter means snowshoeing in the cedars.',
  'The Lebanon Mountain Trail connects 75 villages and passes through cedars, ancient Roman roads, Crusader castles, and Druze mountain communities. Many Lebanese use it to rediscover their own country\'s forgotten paths.'
];
