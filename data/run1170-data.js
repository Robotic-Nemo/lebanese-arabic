// R1170 — NEW FEATURE: Lebanese Ice Cream & Booza Culture (bwz)

const BWZ_WORDS = [
  { ar: 'بوظة', tr: 'bwza', en: 'ice cream (Lebanese stretchy mastic ice cream)' },
  { ar: 'مستكة', tr: 'mastikeh', en: 'mastic (the key flavoring resin)' },
  { ar: 'سحلب', tr: 'sahlab', en: 'orchid root powder (gives bwza its stretch)' },
  { ar: 'فستق', tr: 'fistiq', en: 'pistachio' },
  { ar: 'ورد', tr: 'ward', en: 'rose water flavor' },
  { ar: 'قشطة', tr: '2ishta', en: 'clotted cream' },
  { ar: 'ميرمية', tr: 'meirammiyeh', en: 'sage ice cream flavor' },
  { ar: 'زهر', tr: 'zahher', en: 'orange blossom water' },
  { ar: 'شوكولاتة', tr: 'shokolata', en: 'chocolate' },
  { ar: 'لوز', tr: 'lawz', en: 'almond' },
  { ar: 'كاسة', tr: 'kasi', en: 'cup (to order ice cream in)' },
  { ar: 'مرتبان', tr: 'martaban', en: 'cone' },
  { ar: 'سكوب', tr: 'skoop', en: 'scoop' },
  { ar: 'وزن', tr: 'wazzen', en: 'to pound / beat the ice cream (vendor technique)' },
  { ar: 'مدّ', tr: 'madd', en: 'to stretch (as bwza vendors do to tease customers)' },
  { ar: 'دكان بوظة', tr: 'dkken bwza', en: 'ice cream shop' },
  { ar: 'عرقسوس', tr: '3ar2asoos', en: 'licorice drink (sold alongside bwza)' },
  { ar: 'بوظجي', tr: 'bwzaji', en: 'ice cream vendor / maker' },
  { ar: 'زوّدني', tr: 'zawwedni', en: 'give me extra (requesting more topping)' },
  { ar: 'طازج', tr: 'tazij', en: 'fresh / freshly made' },
];

const BWZ_DRILLS = [
  {
    q: 'What gives Lebanese booza its signature stretchy texture?',
    opts: ['gelatin', 'sahlab (orchid root powder)', 'egg whites', 'cornstarch'],
    ans: 1
  },
  {
    q: 'How do you say "pistachio" in Lebanese Arabic?',
    opts: ['lawz', 'fistiq', 'mastikeh', 'zahher'],
    ans: 1
  },
  {
    q: '"Mastikeh" refers to:',
    opts: ['a Lebanese sweet shop', 'mastic resin (key bwza flavoring)', 'a topping', 'a type of cone'],
    ans: 1
  },
  {
    q: 'What does a bwzaji do when he "madd" the ice cream?',
    opts: ['scoops it into a cup', 'melts it down', 'stretches it to tease the customer', 'weighs it'],
    ans: 2
  },
  {
    q: 'What is "2ishta" in bwza context?',
    opts: ['pistachio topping', 'clotted cream', 'orange blossom water', 'a cone type'],
    ans: 1
  },
  {
    q: 'How do you order a cone in Lebanese Arabic?',
    opts: ['kasi', 'skoop', 'martaban', 'wazzen'],
    ans: 2
  },
  {
    q: '"Zahher" is the flavor from:',
    opts: ['rose petals', 'orange blossom water', 'mastic resin', 'licorice'],
    ans: 1
  },
  {
    q: 'What is sold alongside bwza on the street?',
    opts: ['nargileh', '3ar2asoos (licorice drink)', 'ahweh 3arabiyyeh', 'arak'],
    ans: 1
  },
];

const BWZ_TIPS = [
  'Lebanese booza (بوظة) is not ordinary ice cream. It is a uniquely elastic, stretchy confection made with sahlab (orchid root powder) and mastikeh (mastic resin), giving it a gummy chew and a resinous, slightly smoky flavor unlike anything in Western ice cream. The traditional flavors — rose water, mastic, pistachio, and orange blossom — are distinctly Levantine. You do not just eat bwza; you fight for it. The bwzaji (vendor) will stretch it on a cone and pull it away before you can bite, the crowd laughing as you lunge forward.',
  'The most legendary bwza institution in Beirut is Hanna Mitri in Achrafieh — open since 1930, unchanged in method. The bwzaji pounds the ice cream in a metal cylinder with a long wooden paddle (the "wazzen"), folding in mastic and sahlab until the texture becomes elastic and shiny. Bachir Ice Cream is the second great name. Both shops have lines out the door in summer. The act of pounding and stretching is itself a performance — part theater, part craft, entirely Lebanese.',
  'In Lebanese culture, bwza is tied to specific moments: after a long Sunday lunch, on the Corniche at sunset, after a funeral to lighten the mood, or during Ramadan iftar when the whole family descends on the shop at once. In the mountains, bwza carts appear at trailheads in summer. In the city, children press against the glass of the dkken bwza (ice cream shop) window. The flavors change slightly by region — mountain villages favor sage (meirammiyeh) and walnut; coastal Beirut prefers mastic and pistachio.',
  'Ordering bwza in Lebanese is straightforward but requires knowing your vessel. You ask for a kasi (cup) or martaban (cone), specify your skoobs (scoops) — usually two — and then name your flavors. "Zawwedni fistiq" means "give me extra pistachio." The bwzaji may try to upsell 2ishta (clotted cream) on top. Accept. Paying is negotiable if you are a regular. The whole transaction should feel festive. If the bwzaji does not tease you at least once, find a better shop.',
];

const BWZ_ABOUT = 'Lebanese booza (بوظة) is the Levant\'s legendary stretchy mastic ice cream — made with sahlab powder and mastic resin, pounded to an elastic chew. Iconic flavors include pistachio, rose water, orange blossom, and sage. The bwzaji vendor\'s teasing stretch-and-pull is half the experience; legendary shops like Hanna Mitri in Achrafieh have been serving it since 1930.';
