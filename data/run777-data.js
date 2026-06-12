// R777 — NEW FEATURE: Lebanese Cinema & Film Culture (cin)

const CIN_CATS = ['cinema','films','vocab','phrases'];

const CIN_WORDS = [
  // cinema
  {tr:'cinema',            en:'cinema / movie theater',            ar:'سينما',            cat:'cinema'},
  {tr:'film',              en:'film / movie',                      ar:'فيلم',             cat:'cinema'},
  {tr:'share3 hamra',      en:'Hamra Street (Beirut cinema hub)',   ar:'شارع الحمراء',     cat:'cinema'},
  {tr:'ticket',            en:'ticket',                            ar:'تذكرة',            cat:'cinema'},
  {tr:'sala',              en:'screening hall',                    ar:'صالة',             cat:'cinema'},
  {tr:'3ard',              en:'screening / showing',               ar:'عرض',              cat:'cinema'},
  {tr:'makhraj',           en:'director',                          ar:'مخرج',             cat:'cinema'},
  // films
  {tr:'ziyara',            en:'The Visit (Lebanese classic topic)', ar:'زيارة',            cat:'films'},
  {tr:'caramel',           en:'Caramel (Nadine Labaki film)',       ar:'كراميل',           cat:'films'},
  {tr:'w halla2 la wein',  en:'Where Do We Go Now? (Labaki film)', ar:'وهلأ لوين؟',       cat:'films'},
  {tr:'capharnaüm',        en:'Capernaum (Labaki Oscar film)',      ar:'كفرناحوم',         cat:'films'},
  {tr:'7arb lubnan',       en:'Lebanese civil war films (genre)',   ar:'حرب لبنان',        cat:'films'},
  {tr:'dokumantir',        en:'documentary',                       ar:'دوكومنتير',        cat:'films'},
  {tr:'serial',            en:'TV series / drama',                 ar:'مسلسل',            cat:'films'},
  // vocab
  {tr:'mumassil',          en:'actor',                             ar:'ممثل',             cat:'vocab'},
  {tr:'mumassile',         en:'actress',                           ar:'ممثلة',            cat:'vocab'},
  {tr:'2ussa',             en:'story / plot',                      ar:'قصة',              cat:'vocab'},
  {tr:'mashhad',           en:'scene',                             ar:'مشهد',             cat:'vocab'},
  {tr:'mawsim',            en:'season (TV)',                       ar:'موسم',             cat:'vocab'},
  {tr:'subtitles',         en:'subtitles',                         ar:'ترجمة',            cat:'vocab'},
  {tr:'7afle tawzi3',      en:'awards ceremony / premiere',        ar:'حفلة توزيع',       cat:'vocab'},
  // phrases
  {tr:'shu l-film 3am bi7ki?', en:'what is the film about?',       ar:'شو الفيلم عم بحكي؟', cat:'phrases'},
  {tr:'7elo ktir',         en:'very beautiful / great (film)',     ar:'حلو كتير',         cat:'phrases'},
  {tr:'bakkani',           en:'it made me cry',                    ar:'بكّاني',            cat:'phrases'},
  {tr:'dahakni',           en:'it made me laugh',                  ar:'ضحّكني',            cat:'phrases'},
  {tr:'fi tarjeme?',       en:'is there subtitles?',               ar:'في ترجمة؟',        cat:'phrases'},
  {tr:'3a 2ayy sa3a l-3ard?', en:'at what time is the showing?',   ar:'عأيّ ساعة العرض؟', cat:'phrases'},
  {tr:'mustagreb',         en:'strange / unexpected (plot twist)', ar:'مستغرب',           cat:'phrases'},
];

const CIN_DRILLS = [
  {q:'What is "makhraj"?', opts:['director','actor','producer','screenwriter'], ans:0},
  {q:'"caramel" is a film by whom?', opts:['Nadine Labaki','Ziad Doueiri','Maroun Baghdadi','Philippe Aractingi'], ans:0},
  {q:'How do you say "scene"?', opts:['mashhad','2ussa','mawsim','3ard'], ans:0},
  {q:'"capharnaüm" won what?', opts:['Oscar nomination','Palme d\'Or','César Award','Golden Globe'], ans:0},
  {q:'How do you say "it made me cry"?', opts:['bakkani','dahakni','7elo ktir','mustagreb'], ans:0},
  {q:'"mumassile" means?', opts:['actress','actor','director','screenwriter'], ans:0},
  {q:'How do you say "story / plot"?', opts:['2ussa','mashhad','mawsim','3ard'], ans:0},
  {q:'"share3 hamra" is known for?', opts:['Beirut cinema hub','film studio district','TV production center','animation studios'], ans:0},
  {q:'How do you say "is there subtitles?"', opts:['fi tarjeme?','shu l-film 3am bi7ki?','3a 2ayy sa3a?','7elo ktir'], ans:0},
  {q:'"serial" in Lebanese means?', opts:['TV series / drama','cinema film','documentary','short film'], ans:0},
  {q:'How do you say "it made me laugh"?', opts:['dahakni','bakkani','mustagreb','7elo ktir'], ans:0},
  {q:'"w halla2 la wein" translates to?', opts:['Where Do We Go Now?','Where Did We Come From?','Where Are We Going?','Where Have We Been?'], ans:0},
  {q:'How do you say "what is the film about?"', opts:['shu l-film 3am bi7ki?','fi tarjeme?','3a 2ayy sa3a l-3ard?','7elo ktir'], ans:0},
  {q:'"dokumantir" means?', opts:['documentary','drama series','foreign film','short film'], ans:0},
  {q:'How do you say "very beautiful / great"?', opts:['7elo ktir','mustagreb','bakkani','dahakni'], ans:0},
];

const CIN_TIPS = [
  {title:'Nadine Labaki: Lebanon\'s Global Voice in Cinema', body:'Nadine Labaki is Lebanon\'s most internationally recognized director. Her trilogy — "Caramel" (كراميل, 2007), "W Halla2 La Wein?" (وهلأ لوين؟, 2011), and "Capharnaüm" (كفرناحوم, 2018) — established her as a major world filmmaker. "Capharnaüm" received an Oscar nomination for Best International Film and won the Jury Prize at Cannes. Each film uses Lebanese street Arabic ("7aki"), non-professional actors, and issues specific to Lebanon — sectarianism, the refugee crisis, child poverty — while reaching global audiences. Labaki is from the Doueiry, not Doueiri, family; separate from director Ziad Doueiri ("The Attack", "The Insult").'},
  {title:'Hamra: Beirut\'s Cinema Street', body:'"Share3 Hamra" — Hamra Street — was the cultural heart of Beirut cinema from the 1950s through the civil war. At its peak, it hosted over a dozen movie theaters showing Hollywood, French, Egyptian, and Lebanese films. Stars, directors, writers, and intellectuals gathered in its cafés after screenings. The civil war (1975–1990) destroyed most of those cinemas. Today a handful survive, including the Metropolis Cinema — Lebanon\'s only arthouse theater — dedicated to Lebanese and regional films. "Hamra" and "cinema" are linked in Lebanese cultural memory as a symbol of prewar Beirut cosmopolitanism.'},
  {title:'The Lebanese Civil War as Cinema', body:'"7arb lubnan" — the Lebanese civil war — has generated a vast body of cinema. Directors like Maroun Baghdadi ("Little Wars", 1982), Jocelyne Saab ("Once Upon a Time, Beirut", 1994), and more recently Ziad Doueiri ("The Insult", 2017) have explored the war\'s causes, events, and aftermath. The war is not a single narrative in Lebanese film — it\'s represented from contradictory perspectives, Christian, Muslim, Palestinian, secular. "Dokumantir" (documentary) has been especially powerful: Lebanese civil war documentaries excavate memory that official culture suppresses. Film became Lebanon\'s way of processing what politics couldn\'t.'},
  {title:'Arabic Dubbing vs. Subtitles: The Lebanese Divide', body:'Lebanon has an unusual relationship with film language. Hollywood films are shown in original English with Arabic "subtitles" (ترجمة) — Lebanese audiences are accustomed to reading French and English. Egyptian dubbed versions of Hollywood films are aired on TV but felt as foreign by Lebanese. Lebanese cinema is made in Lebanese Arabic — "7aki" — which Egyptian, Syrian, and Gulf audiences sometimes struggle with. Lebanese TV "serial" (مسلسل) production is major: political dramas, romantic comedies, and historical series produced in Beirut reach pan-Arab audiences, with Lebanese dialect sometimes softened toward Modern Standard Arabic for export.'},
  {title:'The Lebanese Audience: Demanding and Expressive', body:'Lebanese cinema audiences are vocal. At a screening, "7elo ktir" (very beautiful) murmured or said aloud during a powerful scene is common. "Bakkani" (it made me cry) is worn as a badge — Lebanese are not ashamed of emotional response to film. "Dahakni" (it made me laugh) explains a comedy recommendation. "Mustagreb" (strange/unexpected) describes a plot twist. Lebanese audiences discuss films as cultural events, not just entertainment. After a Nadine Labaki release or a major Arabic film, cafés on Hamra fill with "shu l-film 3am bi7ki?" (what\'s the film saying?) — the question beneath the question.'},
  {title:'The Awards Season: Lebanese Pride and Pain', body:'Lebanon\'s relationship with the Oscars — and international "7afle tawzi3" (awards ceremonies) — is intense and personal. Each Labaki nomination is a national event; radio and TV cover it live. When "Capharnaüm" was nominated in 2019, Lebanese social media was flooded. When Lebanese films win at Cannes, Venice, or Berlin, it\'s felt as vindication — proof that a country in perpetual crisis still produces art that matters. The pain is that these films often portray Lebanon\'s darkest realities. The pride is that Lebanese filmmakers refuse to look away. The "makhraj" (director) becomes a national figure.'},
];
