// R480 — Lebanese Sports & Football coach (prefix: spr)
const SPR_WORDS = [
  // football basics
  {ar:'كرة القدم', tr:'kooret el 2adam', en:'football / soccer', cat:'football'},
  {ar:'مباراة', tr:'mbaara', en:'match / game', cat:'football'},
  {ar:'ملعب', tr:'mal3ab', en:'stadium / field', cat:'football'},
  {ar:'هدف', tr:'hadaf', en:'goal', cat:'football'},
  {ar:'حارس المرمى', tr:'7aares el marma', en:'goalkeeper', cat:'football'},
  {ar:'مدرب', tr:'mudarrib', en:'coach / trainer', cat:'football'},
  {ar:'لاعب', tr:'laa3ib', en:'player', cat:'football'},
  {ar:'فريق', tr:'farii2', en:'team', cat:'football'},
  // Lebanese clubs
  {ar:'الأنصار', tr:'el anSaar', en:'Al Ansar (most successful club)', cat:'clubs'},
  {ar:'النجمة', tr:'en-najme', en:'Al Najma (stars — top club)', cat:'clubs'},
  {ar:'الرياضي', tr:'er-riyaaDi', en:'Al Riyadi (Athletic Club)', cat:'clubs'},
  {ar:'الصفاء', tr:'eS-Safaa2', en:'Al Safa (purity — Beirut club)', cat:'clubs'},
  {ar:'هومنتمن', tr:'hoomentmen', en:'Homenetmen (Armenian-Lebanese club)', cat:'clubs'},
  {ar:'شباب الساحل', tr:'shabaab eS-Saa7il', en:'Shabaab Al-Sahel (Youth of the Coast)', cat:'clubs'},
  // national team
  {ar:'المنتخب الوطني', tr:'el muntakhab el waTani', en:'the national team', cat:'national'},
  {ar:'الأرز', tr:'el arz', en:'the Cedars (national team nickname)', cat:'national'},
  {ar:'اتحاد كرة القدم', tr:'itti7aad kooret el 2adam', en:'football federation', cat:'national'},
  {ar:'كأس العالم', tr:'ka2s el 3aalam', en:'World Cup', cat:'national'},
  // sports actions
  {ar:'سجّل هدف', tr:'sajjal hadaf', en:'scored a goal', cat:'actions'},
  {ar:'ضرب كرة', tr:'Darab koore', en:'kicked the ball', cat:'actions'},
  {ar:'راقب المباراة', tr:'raa2ab el mbaara', en:'watched the match', cat:'actions'},
  {ar:'شجّع الفريق', tr:'shajja3 el farii2', en:'cheered for the team', cat:'actions'},
  {ar:'خسر المباراة', tr:'khisar el mbaara', en:'lost the match', cat:'actions'},
  {ar:'ربح المباراة', tr:'rbi7 el mbaara', en:'won the match', cat:'actions'},
  // street sports
  {ar:'تنس', tr:'tenis', en:'tennis', cat:'street'},
  {ar:'سباحة', tr:'sibaa7a', en:'swimming', cat:'street'},
  {ar:'جري', tr:'jari', en:'running / jogging', cat:'street'},
  {ar:'كرة السلة', tr:'kooret es-salle', en:'basketball', cat:'street'},
  {ar:'كرة الطائرة', tr:'kooret eT-Taayra', en:'volleyball', cat:'street'},
  {ar:'تسلق الجبال', tr:'tasallu2 el jbaal', en:'mountain climbing', cat:'street'},
  // fan expressions
  {ar:'يلّا يا لبنان', tr:'yalla ya lubnaan', en:'come on Lebanon! (chant)', cat:'expressions'},
  {ar:'الهدف كان ممتاز', tr:'el hadaf kaan mumtaaz', en:'the goal was excellent', cat:'expressions'},
  {ar:'فرصة ضايعة', tr:'furSa Daay3a', en:'missed opportunity / wasted chance', cat:'expressions'},
  {ar:'كانوا أحسن منا', tr:'kaanu a7san minna', en:'they were better than us', cat:'expressions'},
  {ar:'المباراة كانت ممتعة', tr:'el mbaara kaanet mumti3a', en:'the match was enjoyable', cat:'expressions'},
  {ar:'نحنا معك', tr:'n7na ma3ak', en:'we are with you (supporter chant)', cat:'expressions'},
  // sports culture
  {ar:'جمهور', tr:'jumhuur', en:'fans / audience / crowd', cat:'culture'},
  {ar:'بطولة', tr:'buTuule', en:'championship / tournament', cat:'culture'},
  {ar:'الدوري اللبناني', tr:'ed-doori el lubnani', en:'Lebanese league', cat:'culture'},
  {ar:'مشجّع', tr:'mushajji3', en:'fan / supporter', cat:'culture'},
  {ar:'ملاكمة', tr:'mulaakame', en:'boxing', cat:'culture'},
];

const SPR_DRILLS = [
  {
    q: 'What is "kooret el 2adam" in English?',
    opts: ['Football / soccer', 'Basketball', 'Tennis', 'Volleyball'],
    ans: 0,
    note: '"Kooret el 2adam" = football/soccer (literally "ball of the foot" — كرة القدم). Football is Lebanon\'s most popular sport. The Lebanese league (ed-doori el lubnani) runs from autumn to spring. Despite limited international success, football unites Lebanese across sectarian lines.'
  },
  {
    q: 'Al Ansar (el anSaar) is famous for being:',
    opts: [
      'Lebanon\'s most successful football club',
      'The national team\'s home ground',
      'A sports complex in Beirut',
      'A boxing federation'
    ],
    ans: 0,
    note: '"El anSaar" = Al Ansar, meaning "the supporters/helpers". Lebanon\'s most decorated club, based in Beirut, with a Sunni-associated following though officially non-sectarian. Has won the Lebanese Premier League more times than any other club. Rivals include Al Najma and Al Riyadi.'
  },
  {
    q: 'What does "yalla ya lubnaan" mean at a football match?',
    opts: [
      'Come on Lebanon! — fan chant',
      'Good game, Lebanon — polite applause',
      'Lebanon wins again — victory cry',
      'Play fair, Lebanon — referee complaint'
    ],
    ans: 0,
    note: '"Yalla ya lubnaan!" = Come on Lebanon! Classic fan chant. "Yalla" (يلا) = come on / let\'s go — one of the most useful Lebanese words, expressing urgency, encouragement, or farewell. At football matches it becomes a rhythmic chant with clapping.'
  },
  {
    q: 'The Lebanese national team\'s nickname is:',
    opts: [
      'El Arz — the Cedars',
      'El Nujuum — the Stars',
      'El Liibon — the Lebanese',
      'El Feniq — the Phoenix'
    ],
    ans: 0,
    note: '"El arz" = the Cedars — Lebanon\'s national football team nickname, like France = "Les Bleus". The cedar (arze) is Lebanon\'s national symbol appearing on the flag. "Yalla el arz!" is heard at national team matches.'
  },
  {
    q: 'How do you say "he scored a goal" in Lebanese?',
    opts: ['sajjal hadaf', 'Darab koore', 'khisar el mbaara', 'rbi7 el mbaara'],
    ans: 0,
    note: '"Sajjal hadaf" = scored a goal (سجّل هدف). "Sajjal" = registered/recorded, from "sijill" (record). "Hadaf" = goal/target. After a goal: "hadaf! hadaf!" (goal! goal!) or "yeeeeee!" — Lebanese fans are famously passionate.'
  },
  {
    q: 'What is "el jumhuur" at a football match?',
    opts: ['The fans / crowd', 'The referee', 'The coach', 'The halftime break'],
    ans: 0,
    note: '"Jumhuur" = fans/crowd/audience (الجمهور). From same root as "republic" (jumhuuriyye). Lebanese football fans are passionate — "jumhuur el anSaar" (Ansar fans) are known for elaborate displays. Lebanese fan culture borrows from Brazilian and European styles.'
  },
  {
    q: 'Al Najma (en-najme) means:',
    opts: ['The Stars', 'The Eagles', 'The Lions', 'The Champions'],
    ans: 0,
    note: '"En-najme" = The Star (النجمة). Al Najma is one of Lebanon\'s top clubs. Lebanese clubs often have poetic names: Ansar (helpers), Najma (star), Safa (purity), Riyadi (athletic). These names reflect Arabic naming traditions for sports clubs across the Arab world.'
  },
  {
    q: 'What does "furSa Daay3a" mean after a near-miss?',
    opts: [
      'Missed opportunity / wasted chance',
      'Great attempt / close shot',
      'Penalty kick awarded',
      'Offside call by referee'
    ],
    ans: 0,
    note: '"FurSa Daay3a" = missed/wasted opportunity (فرصة ضايعة). "FurSa" = opportunity/chance. "Daay3a" = lost/wasted (from "Daa3" = got lost). Used universally: "furSa Daay3a!" when a player misses. Also used in daily life: "Dayyya3t el furSa" = I missed the opportunity.'
  },
  {
    q: 'How do you say "the match was enjoyable" in Lebanese?',
    opts: [
      'el mbaara kaanet mumti3a',
      'el mbaara kaanet zghiire',
      'el mbaara kaanet Sa3be',
      'el mbaara kaanet Tawiile'
    ],
    ans: 0,
    note: '"El mbaara kaanet mumti3a" = the match was enjoyable (المباراة كانت ممتعة). "Mumti3a" = enjoyable/entertaining (from "tamatta3" = to enjoy). After a good match, Lebanese fans say "7ilo" (beautiful/nice) or "mumtaaz" (excellent). After a bad one: "khaayibe" (disappointing).'
  },
  {
    q: 'What sport is "mulaakame" in Lebanese?',
    opts: ['Boxing', 'Wrestling', 'Karate', 'Judo'],
    ans: 0,
    note: '"Mulaakame" = boxing (ملاكمة). Lebanon has produced world-class boxers — Ricky Hatton fought Lebanese-origin fighters. Lebanese boxing culture is strong. "Boks" (the French/English word) is also used colloquially. "3amm il3ab boks" = he boxes (hobby). Lebanese gyms are popular in Beirut.'
  },
];

const SPR_TIPS = [
  {
    title: 'Football & Lebanese identity',
    body: 'Football in Lebanon crosses sectarian lines. Al Ansar has a Sunni fan base, Homenetmen is Armenian-Lebanese, but stadiums mix communities. The national team ("el arz" — the Cedars) briefly united Lebanon during qualifying campaigns. "Yalla el arz!" is one of the few phrases heard from all Lebanese communities together.'
  },
  {
    title: 'Watching matches Lebanese style',
    body: 'Lebanese football culture: gather at a "snack" (local café/restaurant), order tea or "3aSiir" (juice), watch on a big screen while commenting loudly. "Shu hal7akam!" (what a referee!) and "shu hal la3ib!" (what a player!) are standard commentary. Arguing about football is a national sport itself.'
  },
  {
    title: 'Lebanon\'s mountainous sports culture',
    body: '"Tasallu2 el jbaal" (mountain climbing) and skiing are beloved Lebanese sports — unusual in the Arab world. Mzaar Kfardebian and The Cedars ski resort draw winter crowds. Lebanese also love "jari" (running) in parks. The Beirut Marathon (maraaToon bayrut) attracts thousands each November.'
  },
  {
    title: 'Lebanese clubs and their histories',
    body: 'The Lebanese Premier League clubs reflect Beirut\'s geography and history. El Ansar (Tariq Jdide), El Najma (Bourj Hammoud), El Riyadi (Ras Beirut), El Safa (southern suburbs). During the civil war (1975-1990), the league continued sporadically. Today it\'s professional with regional cup competitions.'
  },
  {
    title: 'Sports vocabulary shortcut',
    body: 'Lebanese borrows sports terms from French and English: "boks" (boxing), "tenis" (tennis), "jimnastik" (gymnastics), "sikl" (bicycle). But core football vocabulary is Arabic: "hadaf" (goal), "mal3ab" (field), "laa3ib" (player), "farii2" (team). Mix freely — Lebanese do!'
  },
];

const SPR_ABOUT = `
<p><strong>⚽ Lebanese Sports & Football</strong></p>
<p>Sports in Lebanon reflect the country's contradictions: a small nation with passionate supporters, world-class mountain sports next to Mediterranean beaches, and football clubs that serve as community anchors in a fragmented society.</p>
<p><strong>Football culture:</strong> The Lebanese Premier League (ed-doori el lubnani) runs every season. Al Ansar, Al Najma, Al Riyadi, and Al Safa are the historic big clubs. The national team nickname "el arz" (the Cedars) ties sport to national identity. Qualifying campaigns for the World Cup and Asian Cup bring rare moments of unified Lebanese pride.</p>
<p><strong>Mountain sports:</strong> Lebanon's geography enables skiing and hiking that's unique in the region. "Tasallu2 el jbaal" (mountain climbing) and skiing are sources of national pride. "Shu hada — bTa2dar tshatta w tsba7 bi nafs el yom" (amazing — you can ski and swim the same day) is a common boast.</p>
<p><strong>Beyond football:</strong> Basketball (kooret es-salle) is popular, especially in Armenian-Lebanese communities. Volleyball (kooret eT-Taayra) is played on beaches. The Beirut Marathon draws 40,000+ runners annually — one of the Middle East's biggest road races.</p>
`;
