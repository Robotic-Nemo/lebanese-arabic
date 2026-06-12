// R1380 — NEW FEATURE: Lebanese Bureaucracy & Government Offices (dwr)
const DWR_WORDS = [
  {ar:'دوائر', tr:'dawayir', en:'government offices'},
  {ar:'معاملة', tr:'mu3amale', en:'paperwork/transaction'},
  {ar:'وثيقة', tr:'wathiqa', en:'document/certificate'},
  {ar:'ختم', tr:'khatam', en:'stamp/seal'},
  {ar:'واسطة', tr:'wasita', en:'connections/wasta'},
  {ar:'راشية', tr:'rashiye', en:'bribe/tip'},
  {ar:'موظف', tr:'muwazzaf', en:'clerk/employee'},
  {ar:'طابور', tr:'tabur', en:'queue/line'},
  {ar:'هوية', tr:'huwiyye', en:'ID card'},
  {ar:'جواز سفر', tr:'jawaz safar', en:'passport'},
  {ar:'تأشيرة', tr:'ta2shira', en:'visa'},
  {ar:'شهادة', tr:'shahade', en:'certificate/degree'},
  {ar:'توقيع', tr:'tawqi3', en:'signature'},
  {ar:'نفوس', tr:'nufus', en:'civil registry'},
  {ar:'محكمة', tr:'mahkame', en:'court'},
  {ar:'قانون', tr:'qanun', en:'law'},
  {ar:'مخفر', tr:'makhfar', en:'police station'},
  {ar:'غرامة', tr:'ghrame', en:'fine/penalty'},
  {ar:'رخصة', tr:'rukhsa', en:'license/permit'},
  {ar:'عريضة', tr:'3arize', en:'petition/request'},
];
const DWR_DRILLS = [
  {q:'What does "wasita" mean?', opts:['bureaucracy','connections/wasta','signature','document'], a:1},
  {q:'How do you say "queue" in Lebanese?', opts:['tabur','khatam','huwiyye','mahkame'], a:0},
  {q:'What is "mu3amale"?', opts:['signature','paperwork/transaction','ID card','bribe'], a:1},
  {q:'"Rashiye" means?', opts:['law','certificate','bribe/tip','civil registry'], a:2},
  {q:'How do you say "stamp/seal" in Lebanese?', opts:['khatam','tawqi3','nufus','ta2shira'], a:0},
  {q:'What is "nufus"?', opts:['police station','civil registry','law','queue'], a:1},
  {q:'"Huwiyye" means?', opts:['visa','certificate','ID card','passport'], a:2},
  {q:'How do you say "fine/penalty" in Lebanese?', opts:['qanun','ghrame','rukhsa','3arize'], a:1},
];
const DWR_TIPS = [
  {title:'Wasita — the Lebanese superpower', body:'"Wasita" (واسطة) means using personal connections to bypass bureaucracy. "Ma fi wasita?" (ما في واسطة؟ = no connections?) is half-joke, half-genuine concern. It\'s so ingrained that even minor tasks — getting a phone line, a government job — often require someone who knows someone.'},
  {title:'The stamp culture', body:'Lebanese paperwork is notoriously stamp-obsessed. A document without a "khatam" (ختم) is invalid. Notary offices, municipalities, and courts all have their own stamps. "3am bdo khatam 3a khatam" (he wants a stamp on a stamp) is said of over-bureaucratic situations.'},
  {title:'Dawayir — the daily struggle', body:'"Dawayir" (دوائر = lit. circles) refers to government offices. Lebanese joke that you can spend a lifetime making the rounds. "Ra7 3al-dawayir" (رح عالدوائر = going to the offices) signals a long, exhausting day. The Serail (Grand Serail) in Beirut is the PM\'s HQ and the ultimate bureaucratic fortress.'},
  {title:'Bribery & fees', body:'"Rashiye" (راشية) is a small bribe or unofficial facilitation fee. Distinct from outright corruption, it\'s often the only way to speed up a painfully slow system. "3atta rasheyt" (أعطاه راشية = he gave him a tip) is understood without judgment. "Ghrame" (غرامة) is the official fine, though who pays it often depends on wasita.'},
];
