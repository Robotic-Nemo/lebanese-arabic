// R774 — NEW FEATURE: Lebanese Bureaucracy & Red Tape (bur)

const BUR_CATS = ['offices','documents','process','phrases'];

const BUR_WORDS = [
  // offices
  {tr:'dawle',             en:'the state / government',            ar:'دولة',             cat:'offices'},
  {tr:'da2ira',            en:'government department / office',    ar:'دائرة',            cat:'offices'},
  {tr:'modir',             en:'director / official in charge',     ar:'مدير',             cat:'offices'},
  {tr:'mwa22af',           en:'government employee / clerk',       ar:'موظف',             cat:'offices'},
  {tr:'nefus',             en:'civil registry office',             ar:'نفوس',             cat:'offices'},
  {tr:'baladiyye',         en:'municipality',                      ar:'بلدية',            cat:'offices'},
  {tr:'mukhtiyar',         en:'mukhtar (local official)',          ar:'مختيار',           cat:'offices'},
  // documents
  {tr:'hawiyye',           en:'ID card',                           ar:'هوية',             cat:'documents'},
  {tr:'jawaz safar',       en:'passport',                          ar:'جواز سفر',         cat:'documents'},
  {tr:'2ikhraj 2id',       en:'civil registration extract',        ar:'إخراج قيد',        cat:'documents'},
  {tr:'shu7ne',            en:'official certificate / attestation',ar:'شهادة',            cat:'documents'},
  {tr:'khtim',             en:'official stamp / seal',             ar:'ختم',              cat:'documents'},
  {tr:'tawki3',            en:'signature',                         ar:'توقيع',            cat:'documents'},
  {tr:'nuskha',            en:'copy / photocopy',                  ar:'نسخة',             cat:'documents'},
  // process
  {tr:'wasta',             en:'connection / favour / pulling strings', ar:'واسطة',        cat:'process'},
  {tr:'tor',               en:'queue / waiting turn',              ar:'طور',              cat:'process'},
  {tr:'maw3id',            en:'appointment',                       ar:'موعد',             cat:'process'},
  {tr:'ta2khir',           en:'delay',                             ar:'تأخير',            cat:'process'},
  {tr:'mish mawjud',       en:'not available / not present',       ar:'مش موجود',         cat:'process'},
  {tr:'raje3 bukra',       en:'come back tomorrow',                ar:'راجع بكرا',        cat:'process'},
  {tr:'ma mne2dar',        en:'we can\'t do that',                 ar:'ما منقدر',         cat:'process'},
  // phrases
  {tr:'shu lazem ma3i?',   en:'what do I need to bring?',          ar:'شو لازم معي؟',    cat:'phrases'},
  {tr:'2addesh byekhod wa2et?', en:'how long will it take?',       ar:'قديش بياخد وقت؟', cat:'phrases'},
  {tr:'fi 7ada bi3ref?',   en:'is there anyone who can help?',     ar:'في حدا بيعرف؟',   cat:'phrases'},
  {tr:'3a min lezim 7ki?', en:'who do I need to talk to?',         ar:'عالمين لازم حكي؟', cat:'phrases'},
  {tr:'wein l-ktayb?',     en:'where is the form / booklet?',      ar:'وين الكتيب؟',     cat:'phrases'},
  {tr:'3am besta2mel wasta', en:'I\'m using connections',          ar:'عم بستعمل واسطة', cat:'phrases'},
  {tr:'khabbi-ha bi l-2id', en:'keep it in the file (bribe hint)', ar:'خبيها بالإيد',    cat:'phrases'},
];

const BUR_DRILLS = [
  {q:'What is "wasta"?', opts:['connection / pulling strings','government stamp','queue number','official ID'], ans:0},
  {q:'"hawiyye" means?', opts:['ID card','passport','document copy','civil certificate'], ans:0},
  {q:'How do you say "come back tomorrow"?', opts:['raje3 bukra','mish mawjud','ma mne2dar','ta2khir'], ans:0},
  {q:'"nefus" refers to?', opts:['civil registry office','municipality','passport office','police station'], ans:0},
  {q:'How do you say "official stamp / seal"?', opts:['khtim','tawki3','nuskha','shu7ne'], ans:0},
  {q:'"mukhtiyar" is?', opts:['mukhtar / local official','municipality director','civil clerk','police officer'], ans:0},
  {q:'How do you say "queue / waiting turn"?', opts:['tor','maw3id','ta2khir','wasta'], ans:0},
  {q:'"2ikhraj 2id" refers to?', opts:['civil registration extract','birth certificate only','passport copy','ID renewal form'], ans:0},
  {q:'How do you say "what do I need to bring?"', opts:['shu lazem ma3i?','2addesh byekhod wa2et?','3a min lezim 7ki?','fi 7ada bi3ref?'], ans:0},
  {q:'"ta2khir" means?', opts:['delay','appointment','queue','closing time'], ans:0},
  {q:'How do you say "signature"?', opts:['tawki3','khtim','nuskha','tawki3'], ans:0},
  {q:'"baladiyye" is?', opts:['municipality','civil registry','government ministry','local court'], ans:0},
  {q:'How do you say "not available / not present"?', opts:['mish mawjud','raje3 bukra','ma mne2dar','tor'], ans:0},
  {q:'"jawaz safar" means?', opts:['passport','ID card','civil extract','travel permit'], ans:0},
  {q:'How do you say "we can\'t do that"?', opts:['ma mne2dar','mish mawjud','raje3 bukra','fi 7ada bi3ref?'], ans:0},
];

const BUR_TIPS = [
  {title:'Wasta: The Invisible System That Runs Lebanon', body:'"Wasta" — واسطة — is the single most important word in Lebanese bureaucracy. It means connection, favor, pulling strings. It\'s not corruption in the obvious sense — it\'s the social capital system that operates parallel to (and often above) formal institutions. To get a document processed faster, a job application considered, a university place secured, or a traffic fine removed: you need wasta. "3am besta2mel wasta" (I\'m using connections) is said without shame. The person with no wasta navigates Lebanon on hard mode. The person with good wasta moves through the same system in hours. Understanding wasta is understanding Lebanon.'},
  {title:'The Mukhtar: Lebanon\'s Most Powerful Local Official', body:'The "mukhtiyar" (mukhtar) is a neighborhood official found across Lebanon — elected locally, semi-formal, but essential. Your mukhtar signs documents, confirms addresses, witnesses transactions, and stamps the paperwork that government offices demand. In many bureaucratic chains, the first stop is always the mukhtar. He knows everyone in his district personally. He\'s the bridge between family and state. The "2ikhraj 2id" (civil registration extract) — needed for school enrollment, marriage, passports, and much else — runs through the "nefus" (civil registry), often with the mukhtar\'s stamp along the way.'},
  {title:'Raje3 Bukra: Lebanon\'s Unofficial National Slogan', body:'"Raje3 bukra" — come back tomorrow — is the Lebanese bureaucratic motto. Offices close early, staff are absent, systems go down, power cuts interrupt the computer. "Mish mawjud" (not available) and "ma mne2dar" (we can\'t do that) follow naturally. The process of getting any government document requires multiple visits, multiple "nuskha" (copies), multiple "khtim" (stamps), and tremendous patience. Lebanese who have dealt with embassies abroad are often shocked by efficiency — then relieved to return to a system they know how to navigate, even if it\'s maddening.'},
  {title:'The Document Chain: What Lebanon Always Needs', body:'Every Lebanese knows the document chain from memory. First the "2ikhraj 2id" — civil registration extract — from the "nefus" (civil registry), proving family status. Then the "hawiyye" (ID card) or "jawaz safar" (passport) for identity. Then the "shu7ne" (certificate) — graduation, employment, marriage — each requiring its own "tawki3" (signature) and "khtim" (stamp). Every document needs "nuskha" (copies) — usually 3-5. The "da2ira" (government office) will often tell you something is missing after the first visit: "shu lazem ma3i?" (what do I need to bring?) is a question you\'ll ask repeatedly.'},
  {title:'The Queue: A Lebanese Contact Sport', body:'"Tor" — queue — in Lebanese government offices is theoretical. Numbers are handed out but ignored. The person who arrived last but knows someone gets served first. Standing in "tor" for hours at the "baladiyye" (municipality) or "nefus" only to be told "mish mawjud" is a rite of passage. The "maw3id" (appointment) system exists on paper; in practice it means arriving at a designated time and then waiting anyway. Lebanese have developed philosophical patience with "ta2khir" (delay) — not acceptance, but a weary competence at managing a system that runs on its own logic.'},
  {title:'The Informal Economy of Bureaucracy', body:'Between the formal bureaucratic process and the actual outcome sits a vast informal economy. "Khabbi-ha bi l-2id" — keep it in the hand — is a phrase that implies a small facilitation payment, said with a gesture. It\'s not always required, but it exists. More commonly, the currency is time (theirs) and patience (yours), traded for a "fi 7ada bi3ref?" (is there anyone who can help?) moment when someone makes a call to a cousin who works at the "da2ira" (office). "3a min lezim 7ki?" (who do I need to talk to?) is the practical question. In Lebanon, knowing who to talk to is the bureaucratic skill that schools never teach.'},
];
