// R726 — NEW FEATURE: Lebanese Electricity & Generator Culture (elc)

const ELC_CATS = ['grid','generator','solar','phrases'];

const ELC_WORDS = [
  // grid
  {tr:'kahraba',      en:'electricity',          ar:'كهربا',      cat:'grid'},
  {tr:'dawle',        en:'state grid supply',    ar:'دولة',       cat:'grid'},
  {tr:'ta3et',        en:'went out (power cut)', ar:'طعت',        cat:'grid'},
  {tr:'2ijet',        en:'came back (power)',    ar:'إجت',        cat:'grid'},
  {tr:'2an2ita3',     en:'power outage',         ar:'انقطاع',     cat:'grid'},
  {tr:'muftaa7',      en:'light switch',         ar:'مفتاح',      cat:'grid'},
  {tr:'lamba',        en:'light bulb / lamp',    ar:'لمبة',       cat:'grid'},
  {tr:'3addaad',      en:'electricity meter',    ar:'عدّاد',      cat:'grid'},
  // generator
  {tr:'jenreetor',    en:'generator',            ar:'جنريتور',    cat:'generator'},
  {tr:'mushtarak',    en:'generator subscription',ar:'مشترك',    cat:'generator'},
  {tr:'2ambeers',     en:'amperes (subscription level)',ar:'أمبيرات',cat:'generator'},
  {tr:'mou3allem',    en:'generator manager',    ar:'معلّم',      cat:'generator'},
  {tr:'7saab',        en:'generator bill',       ar:'حساب',       cat:'generator'},
  {tr:'saataat',      en:'generator hours',      ar:'ساعات',      cat:'generator'},
  {tr:'diesel',       en:'diesel fuel',          ar:'ديزل',       cat:'generator'},
  {tr:'3aTTal',       en:'broke down (generator)',ar:'عطّل',     cat:'generator'},
  // solar
  {tr:'shamsi',       en:'solar',                ar:'شمسي',       cat:'solar'},
  {tr:'panel',        en:'solar panel',          ar:'بانيل',      cat:'solar'},
  {tr:'inverter',     en:'inverter',             ar:'إنفيرتر',    cat:'solar'},
  {tr:'baTerriyye',   en:'battery',              ar:'بطارية',     cat:'solar'},
  {tr:'sha7n',        en:'charging',             ar:'شحن',        cat:'solar'},
  {tr:'waffar',       en:'saves / conserves',    ar:'وفّر',       cat:'solar'},
  // phrases
  {tr:'maa fi kahraba',      en:'no electricity',           ar:'ما في كهربا',      cat:'phrases'},
  {tr:'3al jenreetor',       en:'on the generator',         ar:'عل جنريتور',       cat:'phrases'},
  {tr:'dawle saa3tein',      en:'only two hours of state power', ar:'دولة ساعتين', cat:'phrases'},
  {tr:'2ijet el kahraba',    en:'electricity came back',    ar:'إجت الكهربا',      cat:'phrases'},
  {tr:'laazem i2taSid',      en:'need to conserve',         ar:'لازم أقتصد',       cat:'phrases'},
  {tr:'kull yoom heke',      en:'every day like this',      ar:'كل يوم هيك',       cat:'phrases'},
];

const ELC_DRILLS = [
  {q:'What is the Lebanese word for generator?', opts:['jenreetor','kahraba','lamba','sha7n'], a:0},
  {q:'"maa fi kahraba" means?', opts:['no electricity','came back','power outage','solar panel'], a:0},
  {q:'What does "mushtarak" mean in electricity context?', opts:['generator subscription','meter reading','light switch','diesel fuel'], a:0},
  {q:'How do you say "electricity came back" in Lebanese?', opts:['2ijet el kahraba','ta3et el kahraba','maa fi kahraba','dawle saa3tein'], a:0},
  {q:'"2ambeers" refers to?', opts:['amperes / subscription level','electricity bill','power hours','battery'], a:0},
  {q:'What is "dawle" in electricity context?', opts:['state grid supply','generator','solar panel','meter'], a:0},
  {q:'How do you say "electricity went out"?', opts:['ta3et el kahraba','2ijet el kahraba','fi kahraba','waffar'], a:0},
  {q:'"mou3allem" in generator context means?', opts:['generator manager','light switch','ampere level','subscription'], a:0},
  {q:'What does "sha7n" mean?', opts:['charging','solar','battery','meter'], a:0},
  {q:'"baTerriyye" means?', opts:['battery','panel','inverter','diesel'], a:0},
  {q:'How do you say "need to conserve"?', opts:['laazem i2taSid','kull yoom heke','3al jenreetor','dawle saa3tein'], a:0},
  {q:'"3addaad" is the?', opts:['electricity meter','light switch','generator','bill'], a:0},
  {q:'What is "shamsi"?', opts:['solar','battery','inverter','panel'], a:0},
  {q:'"kull yoom heke" expresses?', opts:['weary resignation (every day like this)','joy','surprise','request'], a:0},
  {q:'"3al jenreetor" means?', opts:['on the generator','solar mode','no electricity','state power'], a:0},
];

const ELC_TIPS = [
  {title:'The Daily Power Cut Routine', body:'Lebanon has one of the world\'s worst electricity crises. Most areas receive only 2–4 hours of state (dawle) power per day. Locals track cuts obsessively and plan chores — laundry, charging devices — around when dawle arrives.'},
  {title:'The Generator Economy', body:'Private generator networks fill the gap. Each neighborhood has a "mou3allem" who runs generators and sells subscriptions by ampere level ("2ambeers"). A typical household subscribes to 5–10 amps at ~$30–80/month. The mou3allem is a powerful local figure.'},
  {title:'Ampere Culture', body:'When someone asks "shu 2ambeers 3andak?" they\'re asking about your generator subscription strength. More amps = more appliances running simultaneously. Arguments over insufficient amps are a Lebanese staple. AC requires many amps.'},
  {title:'The Solar Revolution', body:'Since the economic collapse (~2019), rooftop solar has exploded. Families invest in panels + inverter + batteries to escape generator dependency. "Shamsi" has become a status symbol and financial lifeline. Lebanon now has surprising solar adoption rates.'},
  {title:'Coping Vocabulary', body:'Power cut humor is central to Lebanese culture. "2ijet el kahraba!" (electricity\'s back!) triggers genuine celebration. "Ta3et" (it went out) is said with resignation. "kull yoom heke" (every day like this) sums up the philosophical Lebanese response to infrastructure collapse.'},
  {title:'Generator Etiquette', body:'Running heavy appliances (washing machine, AC, water heater) during generator hours is frowned upon — it pulls too many amps from neighbors. Neighbors negotiate informally. The mou3allem sometimes cuts off subscribers who exceed their ampere allocation. Social harmony around electricity is a real cultural skill.'},
];
