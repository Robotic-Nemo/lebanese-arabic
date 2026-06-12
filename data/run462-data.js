// R462 — Lebanese Pets & Animals coach (prefix: pet)
const PET_WORDS = [
  // pets
  {ar:'قطة', tr:'2aTTe', en:'cat', cat:'pets'},
  {ar:'كلب', tr:'kalb', en:'dog', cat:'pets'},
  {ar:'أرنب', tr:'arnab', en:'rabbit', cat:'pets'},
  {ar:'سمك زينة', tr:'samak zeene', en:'ornamental fish', cat:'pets'},
  {ar:'ببغاء', tr:'babbaghaa2', en:'parrot', cat:'pets'},
  {ar:'حمستر', tr:'hamster', en:'hamster', cat:'pets'},
  {ar:'سلحفاة', tr:'sal7afee', en:'turtle', cat:'pets'},
  // farm animals
  {ar:'بقرة', tr:'ba2ara', en:'cow', cat:'farm'},
  {ar:'خروف', tr:'kharuuf', en:'sheep', cat:'farm'},
  {ar:'عنزة', tr:'3anze', en:'goat', cat:'farm'},
  {ar:'دجاجة', tr:'djaaje', en:'chicken', cat:'farm'},
  {ar:'ديك', tr:'deek', en:'rooster', cat:'farm'},
  {ar:'حمار', tr:'7maar', en:'donkey', cat:'farm'},
  {ar:'بغل', tr:'baghal', en:'mule', cat:'farm'},
  {ar:'خنزير', tr:'khinziir', en:'pig', cat:'farm'},
  // wild animals (Lebanon)
  {ar:'دب', tr:'debb', en:'bear', cat:'wild'},
  {ar:'ذئب', tr:'ze2b', en:'wolf', cat:'wild'},
  {ar:'ثعلب', tr:'ta3lab', en:'fox', cat:'wild'},
  {ar:'غزال', tr:'ghazaal', en:'gazelle', cat:'wild'},
  {ar:'خنزير بري', tr:'khinziir barri', en:'wild boar', cat:'wild'},
  {ar:'قنفذ', tr:'2unfuz', en:'hedgehog', cat:'wild'},
  {ar:'سقنقور', tr:'sa2ankuur', en:'skink / lizard', cat:'wild'},
  // birds
  {ar:'نسر', tr:'nasr', en:'eagle (national symbol)', cat:'birds'},
  {ar:'حمامة', tr:'7amame', en:'dove / pigeon', cat:'birds'},
  {ar:'عصفور', tr:'3usfuur', en:'sparrow', cat:'birds'},
  {ar:'بلبل', tr:'bulbul', en:'nightingale', cat:'birds'},
  {ar:'صقر', tr:'Sa2r', en:'falcon', cat:'birds'},
  {ar:'غراب', tr:'ghuraab', en:'crow / raven', cat:'birds'},
  {ar:'بط', tr:'baTT', en:'duck', cat:'birds'},
  // sea animals
  {ar:'سمك', tr:'samak', en:'fish', cat:'sea'},
  {ar:'حبار', tr:'7abbaar', en:'squid', cat:'sea'},
  {ar:'سرطان', tr:'sar6aan', en:'crab', cat:'sea'},
  {ar:'دولفين', tr:'dolfiin', en:'dolphin', cat:'sea'},
  {ar:'قريدس', tr:'2reidis', en:'shrimp', cat:'sea'},
  {ar:'سلطعون', tr:'salTa3uun', en:'crab', cat:'sea'},
  // expressions / idioms
  {ar:'مثل الكلب', tr:'mitl el kalb', en:'like a dog (exhausted/mistreated)', cat:'expressions'},
  {ar:'قطة بسبع أرواح', tr:'2aTTe b-saba3 arwaa7', en:'cat with nine lives', cat:'expressions'},
  {ar:'يلعب مثل قط وفار', tr:'yil3ab mitl 2aTT w faar', en:'plays cat and mouse', cat:'expressions'},
  {ar:'الغراب مع غرابو', tr:'el ghuraab ma3 ghrabo', en:'birds of a feather flock together', cat:'expressions'},
  {ar:'دب', tr:'debb', en:'bear (used for a big clumsy person)', cat:'expressions'},
  {ar:'حيوان', tr:'7ayawaan', en:'animal (insult)', cat:'expressions'},
];

const PET_DRILLS = [
  {
    q: 'What does "2aTTe b-saba3 arwaa7" literally mean and what is the idiom\'s meaning?',
    opts: [
      'Cat with seven spirits — someone who keeps surviving trouble',
      'Dog with seven lives — someone very loyal',
      'Bird with seven feathers — someone very beautiful',
      'Fox with seven tricks — a cunning person'
    ],
    ans: 0,
    note: '"2aTTe b-saba3 arwaa7" = "cat with seven souls/spirits". Lebanese say 7 lives, not 9 like in English. Used for someone who survives disaster after disaster.'
  },
  {
    q: 'Which animal is on the Lebanese flag?',
    opts: ['Eagle (nasr)', 'Cedar tree — not an animal, but represents Lebanon', 'Dove (7amame)', 'Lion (asad)'],
    ans: 1,
    note: 'The Lebanese flag has a cedar tree (arze), not an animal. But the eagle (nasr) is the national bird symbol.'
  },
  {
    q: 'How do you say "dog" in Lebanese Arabic?',
    opts: ['kalb', 'debb', 'nasr', 'ze2b'],
    ans: 0,
    note: '"Kalb" = dog. Also used as an insult ("ya kalb!"). "Debb" = bear, "nasr" = eagle, "ze2b" = wolf.'
  },
  {
    q: 'What does "mitl el kalb" mean?',
    opts: [
      'Like a dog — exhausted or mistreated',
      'Like a cat — sneaky and quiet',
      'Like a donkey — working very hard',
      'Like a fox — cunning and clever'
    ],
    ans: 0,
    note: '"Mitl el kalb" = like a dog. Used to describe someone exhausted, mistreated, or in a miserable situation. E.g., "ta3abe mitl el kalb" = I\'m tired like a dog.'
  },
  {
    q: 'Which Lebanese wild animal is also found in the Chouf Mountains nature reserve?',
    opts: ['Gazelle (ghazaal)', 'Lion (asad)', 'Elephant (fiil)', 'Monkey (2ird)'],
    ans: 0,
    note: 'Gazelles (ghazaal) and other wildlife are protected in the Shouf Cedar Reserve, Lebanon\'s largest nature reserve covering 5% of the country.'
  },
  {
    q: 'What is "3anze" in Lebanese Arabic?',
    opts: ['Goat', 'Sheep', 'Cow', 'Donkey'],
    ans: 0,
    note: '"3anze" = goat. "Kharuuf" = sheep. Goat cheese (jibin el 3anze) is a staple in Lebanese village cuisine.'
  },
  {
    q: 'How do you say "dove/pigeon" in Lebanese?',
    opts: ['7amame', 'bulbul', '3usfuur', 'baTT'],
    ans: 0,
    note: '"7amame" = dove/pigeon. Pigeons are very common in Lebanese cities. The dove is also a peace symbol used in Lebanese art and poetry.'
  },
  {
    q: 'What does "el ghuraab ma3 ghrabo" mean literally?',
    opts: [
      'The crow goes with its crow — birds of a feather flock together',
      'The crow finds its nest — everyone returns home',
      'Black as a raven — very dark',
      'The crow steals — someone is a thief'
    ],
    ans: 0,
    note: 'Lebanese proverb: "el ghuraab ma3 ghrabo" (the crow with its kind) = birds of a feather flock together. "Ghuraab" = crow/raven.'
  },
  {
    q: 'What is "7maar" in Lebanese?',
    opts: ['Donkey', 'Horse', 'Camel', 'Mule'],
    ans: 0,
    note: '"7maar" = donkey. Also used affectionately or as a mild insult for someone stubborn or slow. "Baghal" = mule.'
  },
  {
    q: 'Which seafood term is specifically Lebanese dialect for "shrimp"?',
    opts: ['2reidis', 'sar6aan', '7abbaar', 'sal6a3uun'],
    ans: 0,
    note: '"2reidis" = shrimp (Lebanese dialect). "Sar6aan" = crab, "7abbaar" = squid, "sal6a3uun" = lobster. Lebanese coastal cuisine is famous for fresh seafood.'
  },
];

const PET_TIPS = [
  {
    title: 'Animals as insults & endearments',
    body: 'Lebanese use animal names both as insults and as affectionate nicknames. "Ya 7marr!" (you donkey!) is a mild rebuke. "Ya 2aTTe!" can be affectionate. "7ayawaan" (animal) is a serious insult.'
  },
  {
    title: 'The Bear (debb) in Lebanese culture',
    body: 'Brown bears (debb) historically lived in Lebanon\'s mountains. The word "debb" is now used to describe a big, clumsy, or hairy person — usually in a teasing, affectionate way among friends.'
  },
  {
    title: 'Lebanese wildlife',
    body: 'Lebanon\'s diverse ecosystem includes foxes, wolves, gazelles, wild boar, and over 380 bird species. The Shouf Cedar Reserve protects the last significant cedar forests. Spring migration brings thousands of birds through Lebanon\'s coast.'
  },
  {
    title: 'Pets in Lebanese culture',
    body: 'Pet ownership is growing in Lebanon, especially in Beirut. Cats roam freely in most neighborhoods and are generally well-fed by locals. Dogs are less commonly kept as pets in traditional households but are popular with younger generations.'
  },
  {
    title: 'Animal sounds in Arabic',
    body: 'Lebanese animal sounds differ from English: cats say "miau", dogs say "haw haw" or "3aw 3aw", roosters say "2oo2oo2oo". The nightingale (bulbul) is famous in Arabic poetry for its beautiful song — "ghanna mitl el bulbul" = sang like a nightingale.'
  },
];

const PET_ABOUT = `
<p><strong>🐾 Lebanese Pets & Animals</strong></p>
<p>Lebanon's varied landscape — from Mediterranean coast to snow-capped mountains to fertile valleys — supports remarkable biodiversity. This coach covers the vocabulary of animals in Lebanese daily life.</p>
<p><strong>In the home:</strong> Cats are everywhere in Lebanon. Village cats are semi-wild, city cats are community pets. Dogs are increasingly popular in urban areas. Traditional households often had farm animals right next to the living space.</p>
<p><strong>In the wild:</strong> The Shouf Cedar Reserve, Tannourine Cedars, and Palm Islands Reserve protect native species. Brown bears disappeared from Lebanon in the 20th century, but foxes, wolves, and gazelles still roam the mountains.</p>
<p><strong>In language:</strong> Animals appear constantly in Lebanese proverbs, idioms, and insults. Knowing animal vocabulary unlocks a rich layer of colloquial expression.</p>
`;
