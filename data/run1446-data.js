// R1446 — NEW FEATURE: Lebanese Radio Culture (rdo)
const RDO_WORDS = [
  {w:'radiyo',        t:'راديو',        tr:'radio',                            ex:'3am bsame3 l-radiyo bi-l-sayyara',             et:'I\'m listening to the radio in the car'},
  {w:'ma7atta',       t:'محطّة',        tr:'radio station',                    ex:'2ay ma7atta bti7eb?',                          et:'Which station do you like?'},
  {w:'mudi3',         t:'مذيع',         tr:'radio presenter / DJ',             ex:'l-mudi3 3ando sawt 7elo',                      et:'The radio presenter has a beautiful voice'},
  {w:'barnamij',      t:'برنامج',       tr:'programme / show',                 ex:'l-barnamij l-saba7i bi2a33id 3al-wawa3',       et:'The morning show cheers people up'},
  {w:'mawje',         t:'موجة',         tr:'frequency / wave',                 ex:'l-mawje l-FM a7la min AM',                    et:'FM frequency is better than AM'},
  {w:'2uzha',         t:'أغنية',        tr:'song',                             ex:'simi3t l-2uzha l-jdide la-l-musa77ir?',        et:'Did you hear the new musician\'s song?'},
  {w:'nasha4',        t:'نشرة',         tr:'news bulletin',                    ex:'l-nasha4 l-2akhbariyye 3al-sabi3a l-subh',     et:'The news bulletin is at 7am'},
  {w:'li2a2',         t:'لقاء',         tr:'interview',                        ex:'3amilna li2a2 ma3 l-fannane l-kbire',          et:'We did an interview with the great artist'},
  {w:'musi2a',        t:'موسيقى',       tr:'music',                            ex:'l-musi2a l-lubnaniye mashhure bil-3alam',      et:'Lebanese music is famous worldwide'},
  {w:'murasil',       t:'مراسل',        tr:'correspondent / reporter',         ex:'l-murasil bi-haleb ba3at taqrir',              et:'The correspondent in Aleppo sent a report'},
  {w:'istima3',       t:'استماع',       tr:'listening / tuning in',            ex:'ma7abib l-istima3 la-Fairuz saba7an',          et:'People love listening to Fairuz in the morning'},
  {w:'i3lan',         t:'إعلان',        tr:'advertisement / announcement',     ex:'l-i3lanat 3al-radiyo byakhdou 2amar',          et:'Radio ads take a minute'},
  {w:'shu7ra',        t:'شهرة',         tr:'fame / popularity',                ex:'l-ma7atta ktabbet shu7ra kbire bil-khalij',    et:'The station became very famous in the Gulf'},
  {w:'irsaal',        t:'إرسال',        tr:'broadcast / transmission',         ex:'l-irsaal bil-hayy mbashir',                   et:'The broadcast is live'},
  {w:'kaset',         t:'كاسيت',        tr:'cassette / tape',                  ex:'zamaan kinna nsajjil 3al-kaset min l-radiyo',  et:'Back in the day we used to record from the radio on cassette'},
  {w:'muqaddama',     t:'مقدّمة',       tr:'intro / jingle',                   ex:'l-muqaddama l-musiqa2iye m3arrufe kbir',       et:'The musical jingle is well known'},
  {w:'4ari2',         t:'شارع',         tr:'street (metaphor: street vibe)',   ex:'l-radiyo bi2akkhed 7ess l-4ari2 bil-hadith',   et:'Radio captures the street vibe in the talk'},
  {w:'2atir',         t:'أثير',         tr:'airwaves / ether',                 ex:'3al-2atir l-lubnaani fi fann rafi3',           et:'On Lebanese airwaves there is elevated art'},
  {w:'sawt',          t:'صوت',          tr:'voice / sound',                    ex:'sawt l-mudi3 3alla2 bi-balak',                 et:'The presenter\'s voice sticks in your mind'},
  {w:'idha3a',        t:'إذاعة',        tr:'broadcasting / radio station',     ex:'idha3et lubnan kan 2awwal idha3a bil-3alam arabi', et:'Radio Lebanon was the first radio station in the Arab world'},
];

const RDO_DRILLS = [
  {q:'What is the Lebanese word for "radio"?',                                  opts:['radiyo','mawje','ma7atta','irsaal'],         ans:'radiyo'},
  {q:'What word means "radio station"?',                                        opts:['ma7atta','barnamij','mudi3','idha3a'],       ans:'ma7atta'},
  {q:'What is the word for "frequency" or "wave"?',                             opts:['mawje','sawt','2atir','muqaddama'],          ans:'mawje'},
  {q:'What does "idha3a" mean?',                                                opts:['broadcasting / radio station','song','interview','news bulletin'], ans:'broadcasting / radio station'},
  {q:'What is the word for a radio or TV presenter?',                           opts:['mudi3','murasil','mudi3','li2a2'],           ans:'mudi3'},
  {q:'What word means "news bulletin"?',                                        opts:['nasha4','barnamij','i3lan','istima3'],       ans:'nasha4'},
  {q:'What is "cassette / tape" in Lebanese Arabic?',                           opts:['kaset','mawje','shu7ra','2uzha'],            ans:'kaset'},
  {q:'What word means "live broadcast" (transmission)?',                        opts:['irsaal','li2a2','muqaddama','murasil'],      ans:'irsaal'},
];

const RDO_TIPS = [
  {title:'Radio Lebanon — The Arab World\'s First',  body:'Idha3et Lubnan (إذاعة لبنان), founded in 1937, was the first radio station in the Arab world. Lebanese radio set the standard for Arabic pronunciation, music, and cultural broadcasting. The phrase "3al-2atir l-lubnaani" (on Lebanese airwaves) became synonymous with quality and prestige. Even today, Lebanese radio stations reach audiences from Morocco to the Gulf.'},
  {title:'Fairuz at Dawn — A Lebanese Ritual',  body:'Listening to Fairuz (فيروز) on the radio in the morning is a Lebanese institution. "Fairuz saba7an" (Fairuz in the morning) is almost sacred — ma7attat musiqa2iye (music stations) play her songs at sunrise. The expression "simi3t Fairuz?" (Did you hear Fairuz?) signals that your morning is off to the right start. Even during Lebanon\'s darkest moments — wars, blackouts, crises — her voice on the radio meant the country was still alive.'},
  {title:'Lebanese Radio Stations Today',  body:'Lebanon punches above its weight in radio: Radio One (popular youth station), Sawt el Ghad (صوت الغد), Virgin Radio Lebanon, Mix FM, and Nostalgie Lebanon. Lebanese mudi3in (مذيعين radio presenters) are beloved for their wit, warmth, and code-switching between Arabic, French, and English — sometimes mid-sentence. The morning show (barnamij l-saba7i) and drive-time news are peak listening. Many Lebanese in the diaspora stream these stations online to stay connected to home.'},
  {title:'Lebanese Radio Language',  body:'Radio shaped modern Lebanese Arabic: "3al-2atir" (on the airwaves), "bil-hayy" (live), "tawajjahu 2ilana" (tune in to us). The morning sign-on often begins with "masa2 l-khayr" or "saba7 l-nour ya lubnan!" Lebanese radio blends Arabic with French words freely: "emission" (برنامج), "direct" (مباشر), "animateur" (مذيع). The kaset (كاسيت cassette) era, when Lebanese families recorded their favorite programs and songs, is now a cherished nostalgia — "zamaan l-radiyo w l-kaset" (the days of radio and cassette).'},
];
