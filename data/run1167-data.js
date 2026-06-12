// R1167 — NEW FEATURE: Lebanese Corniche & Seafront Culture (crn)

const CRN_WORDS = [
  { ar: 'كورنيش', tr: 'kornish', en: 'corniche / seaside promenade' },
  { ar: 'بحر', tr: 'ba7er', en: 'sea / ocean' },
  { ar: 'موج', tr: 'moj', en: 'wave' },
  { ar: 'صخرة الروشة', tr: 'sakhreh el-rawsheh', en: 'Pigeon Rocks (Rawsheh)' },
  { ar: 'صيادين', tr: 'sayyadin', en: 'fishermen' },
  { ar: 'سنارة', tr: 'sinnara', en: 'fishing rod' },
  { ar: 'ذرة مشوية', tr: 'zra mashwiyyeh', en: 'grilled corn on the cob' },
  { ar: 'قهوة عربية', tr: 'ahweh 3arabiyyeh', en: 'Arabic coffee (sold by vendors)' },
  { ar: 'مشوار', tr: 'mishwar', en: 'a walk / outing' },
  { ar: 'غروب الشمس', tr: 'ghoroob el-shams', en: 'sunset' },
  { ar: 'ركض', tr: 'rakad', en: 'to run / jogging' },
  { ar: 'درّاجة', tr: 'darrajeh', en: 'bicycle' },
  { ar: 'مقعد', tr: 'ma23ad', en: 'bench / seat' },
  { ar: 'متسول', tr: 'metsawwel', en: 'street vendor / beggar' },
  { ar: 'كلاب', tr: 'klab', en: 'dogs (walked on the Corniche)' },
  { ar: 'سباحة', tr: 'sba7eh', en: 'swimming' },
  { ar: 'عاشق', tr: '3ashek', en: 'a lover / romantic couple' },
  { ar: 'هواء البحر', tr: 'hawa el-ba7er', en: 'sea breeze' },
  { ar: 'فشار', tr: 'fshar', en: 'popcorn (Corniche snack)' },
  { ar: 'تمشّا', tr: 'tmashsha', en: 'to stroll / take a leisurely walk' },
];

const CRN_DRILLS = [
  {
    q: 'What is "kornish"?',
    opts: ['a type of fish', 'seaside promenade', 'fishing boat', 'wave breaker'],
    ans: 1
  },
  {
    q: 'How do you say "sunset"?',
    opts: ['hawa el-ba7er', 'moj', 'ghoroob el-shams', 'ma23ad'],
    ans: 2
  },
  {
    q: '"Sakhreh el-rawsheh" refers to:',
    opts: ['a Beirut restaurant', 'Pigeon Rocks landmark', 'the port area', 'a fishing village'],
    ans: 1
  },
  {
    q: 'What do vendors sell on the Corniche?',
    opts: ['nargileh only', 'grilled corn and Arabic coffee', 'shawarma and falafel', 'ice cream only'],
    ans: 1
  },
  {
    q: 'How do you say "sea breeze"?',
    opts: ['ba7er', 'hawa el-ba7er', 'moj', 'sba7eh'],
    ans: 1
  },
  {
    q: '"Tmashsha" means:',
    opts: ['to swim', 'to run fast', 'to stroll / take a leisurely walk', 'to fish'],
    ans: 2
  },
  {
    q: 'How do you say "fishing rod"?',
    opts: ['sinnara', 'darrajeh', 'fshar', 'kornish'],
    ans: 0
  },
  {
    q: '"Sayyadin" are:',
    opts: ['lifeguards', 'street vendors', 'fishermen', 'joggers'],
    ans: 2
  },
];

const CRN_TIPS = [
  'The Corniche (kornish) is the beating heart of Beirut street life — a 4.8km seafront promenade where all of Lebanese society converges. By 6am, joggers and retired men with worry beads fill the walkway. By sunset, it becomes the most romantic spot in the city. Families with strollers, couples holding hands on the sea wall, fishermen dangling lines over the edge with a radio playing Fairuz. The sea breeze (hawa el-ba7er) and the crashing waves (moj) make it unmistakably Lebanese. No ticket, no entrance fee — it belongs to everyone.',
  'Corniche vendors are an institution. The zra mashwiyyeh (grilled corn) seller pushes his cart and shouts "zra, zra!" — charcoal grilled corn rubbed with salt and lemon, sold for a thousand liras. The ahweh man carries a brass dalleh (coffee pot) and tiny cups, weaving through the crowd. Fshar (popcorn) carts rattle. Old men sell lottery tickets and small Palestinian flags. The Corniche\'s informal economy is unchanged for decades — a world untouched by the financial collapse that gutted the rest of the city.',
  'Sakhreh el-rawsheh (Pigeon Rocks / Rawsheh Rocks) are the iconic twin rock formations rising from the sea near the southern end of the Corniche. They are the most photographed sight in all of Lebanon. Tourists stop for photos; locals barely look. At sunset (ghoroob el-shams) the rocks turn orange and couples claim their spots on the iron railing, 3awashek (lovers) visible from far away. Boat tours go through the rock arches. The area around Rawsheh is also home to the most expensive restaurants and hotels in Beirut.',
  'Weekend mornings on the Corniche are a social event. Lebanese come to walk (tmashsha), run (rakad), or just sit on a ma23ad (bench) and watch the sea. Groups of Sudanese, Sri Lankan, and Ethiopian workers on their day off sit near the palm trees. Families from the southern suburbs mix with Hamra residents. During summer, swimming spots open and the ba7er fills with swimmers. During political tension, the Corniche becomes a protest route. During war, it empties — but always fills again. The Corniche is where Beirut comes to breathe.',
];

const CRN_ABOUT = 'The Lebanese Corniche is Beirut\'s iconic seafront promenade — a 4.8km strip where fishermen, joggers, lovers, vendors, and families converge at sunrise and sunset, with the Pigeon Rocks (Rawsheh) as backdrop and the smells of grilled corn, Arabic coffee, and sea salt defining the Lebanese urban walk.';
