// R768 — NEW FEATURE: Lebanese Thawra & Revolution Vocabulary (thw)

const THW_CATS = ['crowd','state','vocab','chants'];

const THW_WORDS = [
  // crowd
  {tr:'sha3b',              en:'the people',                      ar:'شعب',              cat:'crowd'},
  {tr:'shabab',             en:'the youth',                       ar:'شباب',             cat:'crowd'},
  {tr:'mudhahara',          en:'demonstration / march',           ar:'مظاهرة',            cat:'crowd'},
  {tr:'tajammu3',           en:'gathering / assembly',            ar:'تجمّع',             cat:'crowd'},
  {tr:'7arak',              en:'movement / momentum',             ar:'حراك',             cat:'crowd'},
  {tr:'marj',               en:'Martyrs Square (Beirut)',         ar:'المرج',             cat:'crowd'},
  {tr:'riyad l-sol7',       en:'Riad al-Solh Square (Beirut)',    ar:'رياض الصلح',       cat:'crowd'},
  // state
  {tr:'dawle',              en:'the state',                       ar:'دولة',             cat:'state'},
  {tr:'7ukme',              en:'ruling authority / governance',   ar:'حكمة',             cat:'state'},
  {tr:'2isqat',             en:'fall / removal (of leaders)',     ar:'إسقاط',            cat:'state'},
  {tr:'wezer',              en:'minister',                        ar:'وزير',             cat:'state'},
  {tr:'majles l-nuwwab',    en:'parliament',                      ar:'مجلس النواب',      cat:'state'},
  {tr:'fasad',              en:'corruption',                      ar:'فساد',             cat:'state'},
  {tr:'ta3yeen',            en:'political appointment',           ar:'تعيين',            cat:'state'},
  // vocab
  {tr:'thawra',             en:'revolution',                      ar:'ثورة',             cat:'vocab'},
  {tr:'midan',              en:'public square / protest ground',  ar:'ميدان',            cat:'vocab'},
  {tr:'karame',             en:'dignity',                         ar:'كرامة',            cat:'vocab'},
  {tr:'7orriye',            en:'freedom',                         ar:'حرية',             cat:'vocab'},
  {tr:'3adele',             en:'justice',                         ar:'عدالة',            cat:'vocab'},
  {tr:'ghazl',              en:'tear gas',                        ar:'غاز',              cat:'vocab'},
  {tr:'3ase2',              en:'baton / riot club',               ar:'عصا',              cat:'vocab'},
  {tr:'17 teshrin',         en:'October 17th (uprising date)',    ar:'١٧ تشرين',         cat:'vocab'},
  // chants
  {tr:'kellon ya3ni kellon', en:'all of them means all of them',  ar:'كلّن يعني كلّن',   cat:'chants'},
  {tr:'bad-na 7esab',       en:'we want accountability',          ar:'بدنا حساب',        cat:'chants'},
  {tr:'el-sha3b yorid',     en:'the people want',                 ar:'الشعب يريد',       cat:'chants'},
  {tr:'thawra thawra',      en:'revolution revolution (chant)',   ar:'ثورة ثورة',        cat:'chants'},
  {tr:'bedna naskot la2',   en:'we will not be silent',           ar:'بدنا ما نسكت لا',  cat:'chants'},
  {tr:'yalla yalla',        en:'let\'s go / move (protest call)', ar:'يلا يلا',          cat:'chants'},
];

const THW_DRILLS = [
  {q:'What is "thawra"?', opts:['revolution','demonstration','gathering','the people'], ans:0},
  {q:'"sha3b" means?', opts:['the people','the youth','the state','parliament'], ans:0},
  {q:'How do you say "freedom"?', opts:['7orriye','karame','3adele','fasad'], ans:0},
  {q:'"fasad" means?', opts:['corruption','justice','dignity','rule'], ans:0},
  {q:'How do you say "all of them means all of them"?', opts:['kellon ya3ni kellon','bedna naskot la2','thawra thawra','bad-na 7esab'], ans:0},
  {q:'"mudhahara" refers to?', opts:['demonstration / march','gathering','revolution','movement'], ans:0},
  {q:'How do you say "justice"?', opts:['3adele','7orriye','karame','fasad'], ans:0},
  {q:'"2isqat" means?', opts:['fall / removal (of leaders)','gathering','chant','accountability'], ans:0},
  {q:'How do you say "we want accountability"?', opts:['bad-na 7esab','kellon ya3ni kellon','el-sha3b yorid','bedna naskot la2'], ans:0},
  {q:'"tajammu3" means?', opts:['gathering / assembly','movement','demonstration','square'], ans:0},
  {q:'How do you say "tear gas"?', opts:['ghazl','3ase2','midan','dawle'], ans:0},
  {q:'"17 teshrin" refers to?', opts:['October 17th (uprising date)','a protest chant','a square in Beirut','the state electricity company'], ans:0},
  {q:'How do you say "the people want"?', opts:['el-sha3b yorid','bad-na 7esab','bedna naskot la2','thawra thawra'], ans:0},
  {q:'"dawle" means?', opts:['the state','the parliament','the minister','the people'], ans:0},
  {q:'How do you say "dignity"?', opts:['karame','7orriye','3adele','7arak'], ans:0},
];

const THW_TIPS = [
  {title:'October 17, 2019: The Day Lebanon Erupted', body:'On October 17, 2019 — "17 teshrin" — Lebanon exploded. A proposed WhatsApp tax triggered protests that snowballed into the largest uprising in Lebanese history. Within days, hundreds of thousands filled Martyrs Square ("marj") and Riad al-Solh ("riyad l-sol7") in Beirut, and squares in every Lebanese city. The demand was simple and universal: "kellon ya3ni kellon" — all of them, meaning all political leaders, must go. It wasn\'t a partisan movement; it was cross-sectarian, cross-regional, youth-led fury at a system that had failed Lebanon for decades. For a few weeks, Lebanon felt different.'},
  {title:'"Kellon Ya3ni Kellon": The Slogan That Defined a Generation', body:'"كلّن يعني كلّن" — all of them means all of them — was the defining phrase of Lebanon\'s 2019 uprising. It wasn\'t targeted at one party or leader; it accused the entire political class. Every sect\'s leaders, every militia\'s political wing, every dynasty that had ruled since the civil war. The phrase went global. It was painted on walls, chanted in streets, tattooed on skin. Lebanese in the diaspora heard it and wept. Its power was its totality — no exceptions, no favorites, no alliances. For a moment, it felt like Lebanon had found a shared language beyond sectarianism.'},
  {title:'The Language of the Streets', body:'The thawra created its own vocabulary in real time. "7arak" — movement — described the organic, leaderless energy. "Tajammu3" — gathering — described every spontaneous crowd. "Bad-na 7esab" (we want accountability) named the demand. "El-sha3b yorid" (the people want) echoed the Arab Spring. "Bedna naskot la2" (we will not be silent) defied decades of fear. "Fasad" (corruption) and "2isqat" (removal) became daily words. Lebanese who had never used political vocabulary suddenly had a shared lexicon. WhatsApp groups, protest signs, and walls wrote the dictionary.'},
  {title:'Martyrs Square and Riad al-Solh: Lebanon\'s Protest Hearts', body:'Beirut\'s two central squares became the beating heart of the thawra. "Marj" — المرج — refers to Martyrs Square, named for those executed by the Ottomans in 1916. "Riyad l-sol7" — Riad al-Solh Square — sits adjacent to the Grand Serail (government headquarters). Together they formed a protest city: tents, food stalls, music, speakers, art, and nightly gatherings of tens of thousands. Both squares were eventually cleared by force. The names now carry weight beyond geography — saying you were "3al marj" or "3al riyad l-sol7" in October 2019 marks a generation.'},
  {title:'Dignity, Freedom, Justice: The Three Demands', body:'"Karame" (dignity), "7orriye" (freedom), "3adele" (justice) — these three words appeared on every banner, every chant, every livestream. They named what decades of corrupt governance had taken away. Karame: you cannot ask for a job or a permit without a wasta (connection). 7orriye: sectarianism locks you into a community, a party, a leader. 3adele: the courts are politicized; the powerful face no consequences. These weren\'t abstract demands. Every Lebanese could fill each word with a personal story. The thawra found its language in the gap between what Lebanon promised and what it delivered.'},
  {title:'After the Thawra: Vocabulary That Stayed', body:'The thawra vocabulary entered everyday Lebanese Arabic and stayed. "7arak" now means any grassroots civic movement. "Fasad" is used constantly to describe the system. "Kellon ya3ni kellon" is shorthand for cynicism about politicians. October 17 itself — "17 teshrin" — functions as a cultural timestamp: before or after. The thawra was followed by the August 4, 2020 port explosion, which deepened the vocabulary of loss and accountability. "3adele" and "2isqat" became demands for justice for the explosion victims. The words outlived the protests because the causes never went away.'},
];
