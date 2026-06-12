// R1434 — NEW FEATURE: Lebanese Zaffe & Wedding Music (zff)
const ZFF_WORDS = [
  {w:'zaffe',       t:'زفّة',        tr:'wedding procession/parade',  ex:'l-zaffe bdet tse3a',          et:'The zaffe started at 9'},
  {w:'3ariss',      t:'عريس',        tr:'groom',                       ex:'l-3ariss lebis bedlto',        et:'The groom wore his suit'},
  {w:'3arouse',     t:'عروس',        tr:'bride',                       ex:'l-3arouse ktir 7lowe',         et:'The bride is very beautiful'},
  {w:'tabliyyeh',   t:'طبليّة',      tr:'drummer/drum troupe',         ex:'l-tabliyyeh 3ambet2ajjer',     et:'The drum troupe is warming up'},
  {w:'mizmar',      t:'مزمار',       tr:'reed flute (wedding)',        ex:'3azzaf 3a-l-mizmar',            et:'He played the mizmar'},
  {w:'derbakkeh',   t:'دربكّة',      tr:'goblet drum',                 ex:'darbak 3a-d-derbakkeh',        et:'He drummed on the derbakkeh'},
  {w:'zaghareet',   t:'زغاريت',      tr:'ululation (women\'s joy cry)',ex:'l-7reme 3ambezeghrit',          et:'The women are ululating'},
  {w:'khatib',      t:'خاطب',        tr:'matchmaker/fiancé',           ex:'jeh l-khatib mbere7',           et:'The fiancé came yesterday'},
  {w:'khteybe',     t:'خطيبة',       tr:'fiancée',                     ex:'khteybto 7lowe ktir',           et:'His fiancée is very beautiful'},
  {w:'3aqd',        t:'عقد',         tr:'marriage contract',           ex:'3emlo l-3aqd bel-jame3',        et:'They did the contract at the mosque'},
  {w:'madfe3',      t:'مدفع',        tr:'cannon (fired at weddings)',  ex:'daqqo l-madfe3 3al-3ariss',     et:'They fired the cannon for the groom'},
  {w:'henna',       t:'حنّة',        tr:'henna (pre-wedding party)',   ex:'3emlo 7aflit l-7enna',          et:'They held the henna party'},
  {w:'shneb',       t:'شنب',         tr:'moustache (groom symbol)',    ex:'robbo b-shnebo l-3ariss',        et:'They raised the groom by his moustache'},
  {w:'bukhra',      t:'بخرة',        tr:'incense burner',              ex:'7atto l-bukhra bel-bayt',       et:'They put the incense burner in the house'},
  {w:'2ashoufit',   t:'أشوفت',       tr:'ululation call/phrase',       ex:'2ashoufit l-3arouse weyn',      et:'Where is the bride? (zaffe call)'},
  {w:'3arsa',       t:'عرسة',        tr:'female weasel (bridal luck)', ex:'shufo l-3arsa 3al-3ariss',      et:'They put the weasel luck on the groom'},
  {w:'shabab',      t:'شباب',        tr:'young men (zaffe)',           ex:'l-shabab 3ambirqusu',            et:'The young men are dancing'},
  {w:'mhallal',     t:'محلّل',       tr:'praised/blessed (wedding)',   ex:'mhallal la-7abibi',             et:'Blessings to my beloved'},
  {w:'ghanniye',    t:'غنّية',       tr:'wedding singer (female)',     ex:'l-ghanniye ghannit 3al-3ariss',  et:'The singer sang for the groom'},
  {w:'khotrube',    t:'خطروبة',      tr:'fiancée celebration',         ex:'3emlo l-khotrube bel-beit',     et:'They held the fiancée party at home'},
];

const ZFF_DRILLS = [
  {q:'What is the Lebanese word for wedding procession?',                       opts:['zaffe','3aqd','henna','madfe3'],         ans:'zaffe'},
  {q:'What do women do at a Lebanese wedding to express joy?',                  opts:['zaghareet','mizmar','bukhra','shneb'],    ans:'zaghareet'},
  {q:'What instrument is central to the zaffe procession?',                    opts:['derbakkeh','tabliyyeh','mizmar','2ashoufit'], ans:'derbakkeh'},
  {q:'What is the pre-wedding henna celebration called?',                      opts:['henna','khotrube','3arsa','mhallal'],     ans:'henna'},
  {q:'What is fired to celebrate the groom\'s arrival?',                       opts:['madfe3','mizmar','bukhra','shneb'],        ans:'madfe3'},
  {q:'What is the marriage contract called in Lebanese?',                       opts:['3aqd','3arss','khatib','tabliyyeh'],      ans:'3aqd'},
  {q:'What word means "groom" in Lebanese Arabic?',                             opts:['3ariss','khatib','shabab','ghanniye'],    ans:'3ariss'},
  {q:'Who leads matchmaking in Lebanese wedding tradition?',                    opts:['khatib','3ariss','3arouse','mhallal'],    ans:'khatib'},
];

const ZFF_TIPS = [
  {title:'The Zaffe Procession',  body:'The zaffe is a musical parade that escorts the groom — and later the couple — into the wedding hall. Drummers, trumpet players, and a mizmar player lead the way while guests ululate (zaghareet) and dance dabke.'},
  {title:'Zaghareet — Women\'s Ululation', body:'Zaghareet (زغاريت) is the high-pitched trill Lebanese women make to celebrate joy. It\'s heard at weddings, graduations, and the return of loved ones. Producing a good zaghrouta is considered a skill passed through generations.'},
  {title:'The Henna Night',  body:'The laylat l-henna (حنّة) is a pre-wedding celebration where the bride\'s hands and feet are decorated with henna patterns. Female relatives and friends gather, sing traditional songs, and celebrate before the big day.'},
  {title:'Lebanese Wedding Traditions', body:'Lebanese weddings blend religious ceremony (3aqd) with grand celebration. The madfe3 (cannon) firing signals the groom\'s procession. The khotrube marks the engagement, and the zaffe itself can last hours with music, dance, and zaghareet.'},
];
