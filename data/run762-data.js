// R762 — NEW FEATURE: Lebanese Generator & Power Culture (gnr)

const GNR_CATS = ['cuts','generator','equipment','phrases'];

const GNR_WORDS = [
  // cuts
  {tr:'kahraba',              en:'electricity / power',            ar:'كهرباء',              cat:'cuts'},
  {tr:'mot2ata3',             en:'power cut / blackout',           ar:'مقطّع',               cat:'cuts'},
  {tr:'barname',              en:'power schedule (rationing)',      ar:'برنامة',              cat:'cuts'},
  {tr:'EDL',                  en:'state electricity company',       ar:'كهرباء لبنان',        cat:'cuts'},
  {tr:'ta7ssen',              en:'power restoration',               ar:'تحسين',               cat:'cuts'},
  {tr:'ra7et',                en:'it went out (power)',             ar:'راحت',                cat:'cuts'},
  {tr:'reje3et',              en:'it came back (power)',            ar:'رجعت',                cat:'cuts'},
  {tr:'saha3at',              en:'hours of power per day',          ar:'ساعات',               cat:'cuts'},
  // generator
  {tr:'generator',            en:'generator',                       ar:'جنراتور',             cat:'generator'},
  {tr:'diesel',               en:'diesel fuel',                     ar:'ديزل',                cat:'generator'},
  {tr:'mu7arik',              en:'motor / engine',                  ar:'محرك',                cat:'generator'},
  {tr:'mushtarak',            en:'subscriber / shared connection',  ar:'مشترك',               cat:'generator'},
  {tr:'mosta2jer',            en:'renter of generator line',        ar:'مستأجر',              cat:'generator'},
  {tr:'2ab2a',                en:'circuit breaker / fuse',          ar:'قبقاب',               cat:'generator'},
  // equipment
  {tr:'UPS',                  en:'UPS / battery backup',            ar:'يو بي اس',            cat:'equipment'},
  {tr:'inverter',             en:'solar inverter',                  ar:'إنفيرتر',             cat:'equipment'},
  {tr:'batt2iye',             en:'battery / backup battery',        ar:'بطارية',              cat:'equipment'},
  {tr:'panel shams',          en:'solar panel',                     ar:'لوح شمسي',            cat:'equipment'},
  {tr:'mkayyef',              en:'air conditioner',                 ar:'مكيّف',               cat:'equipment'},
  {tr:'musakkhin',            en:'electric water heater',           ar:'مسخّن',               cat:'equipment'},
  {tr:'amp',                  en:'ampere (power allocation)',       ar:'أمبير',               cat:'equipment'},
  // phrases
  {tr:'kahraba ra7et',        en:'power went out',                  ar:'كهرباء راحت',         cat:'phrases'},
  {tr:'3al generator',        en:'on generator power',              ar:'على الجنراتور',       cat:'phrases'},
  {tr:'3al EDL',              en:'on state power',                  ar:'على الكهرباء',        cat:'phrases'},
  {tr:'diesel khales',        en:'diesel ran out',                  ar:'ديزل خلص',            cat:'phrases'},
  {tr:'kam amp 3andak?',      en:'how many amps do you have?',      ar:'كم أمبير عندك؟',      cat:'phrases'},
  {tr:'generator mish sha8el',en:'generator not working',           ar:'جنراتور مش شغّال',   cat:'phrases'},
  {tr:'halla2 byeji l-kahraba',en:'power is coming soon',          ar:'هلق بيجي الكهرباء',   cat:'phrases'},
  {tr:'inta 3and meen?',      en:'which generator are you with?',   ar:'إنت عند مين؟',        cat:'phrases'},
];

const GNR_DRILLS = [
  {q:'What is "kahraba"?', opts:['electricity / power','generator','power cut','diesel fuel'], ans:0},
  {q:'"mot2ata3" means?', opts:['power cut / blackout','power restoration','electricity company','ampere'], ans:0},
  {q:'How do you say "generator"?', opts:['generator','diesel','mkayyef','UPS'], ans:0},
  {q:'"barname" in Lebanon refers to?', opts:['power schedule (rationing)','subscription plan','electricity bill','power surge'], ans:0},
  {q:'How do you say "battery / backup power"?', opts:['batt2iye','amp','inverter','panel shams'], ans:0},
  {q:'"diesel" in this context means?', opts:['diesel fuel','electricity','motor','circuit breaker'], ans:0},
  {q:'How do you say "power went out"?', opts:['kahraba ra7et','reje3et','ta7ssen','saha3at'], ans:0},
  {q:'"mkayyef" is?', opts:['air conditioner','water heater','solar panel','generator'], ans:0},
  {q:'How do you say "how many amps do you have?"', opts:['kam amp 3andak?','diesel khales','3al generator','inta 3and meen?'], ans:0},
  {q:'"mushtarak" means?', opts:['subscriber / shared connection','motor / engine','circuit breaker','power restoration'], ans:0},
  {q:'How do you say "on generator power"?', opts:['3al generator','3al EDL','ta7ssen','reje3et'], ans:0},
  {q:'"UPS" in Lebanese context refers to?', opts:['UPS / battery backup','solar inverter','ampere meter','diesel tank'], ans:0},
  {q:'How do you say "diesel ran out"?', opts:['diesel khales','kahraba ra7et','generator mish sha8el','barname'], ans:0},
  {q:'"panel shams" means?', opts:['solar panel','battery backup','water heater','inverter'], ans:0},
  {q:'How do you say "power is coming soon"?', opts:['halla2 byeji l-kahraba','3al EDL','reje3et','inta 3and meen?'], ans:0},
];

const GNR_TIPS = [
  {title:'The Lebanese Power Crisis: Daily Reality', body:'Lebanon\'s electricity crisis is among the world\'s worst. State power (EDL — Électricité du Liban) provides as little as 2-4 hours per day in some regions, following a "barname" (rationing schedule) that rotates cuts across neighborhoods. The schedule shifts constantly and is tracked via WhatsApp groups, neighbor calls, and app notifications. "Kahraba ra7et" (power went out) and "reje3et" (it came back) punctuate every Lebanese day. Power cuts are not emergencies — they are the rhythm of life. Lebanese adapt their entire routine around them: charge your phone, do laundry, run the washing machine, all on the hour the power is on.'},
  {title:'The Generator Subscription System', body:'Private generator owners ("ashab generator") sell electricity subscriptions to households and businesses on their building or street. You are a "mushtarak" (subscriber). The key question: "inta 3and meen?" (which generator are you with?) You pay monthly — typically in US dollars — for a set number of "amps" (amperes): 5 amps for a modest household, 10 for more. The generator runs on diesel; when the owner can\'t get fuel, everything goes dark. Generator owners are among the few profiting from the crisis — and often among the most complained about. The relationship between tenants and their generator owner is uniquely Lebanese.'},
  {title:'Amp Culture: How Power Is Allocated', body:'"Kam amp 3andak?" (how many amps do you have?) is a standard question when moving into a new apartment. Your ampere allocation determines what appliances you can run simultaneously. 5 amps: lights, phone chargers, one small appliance. 10 amps: refrigerator, TV, and maybe one AC unit. Running the "mkayyef" (AC) blows the circuit — a "2ab2a" (circuit breaker) trip — on low-amp connections. Lebanese have become expert electrical engineers out of necessity: calculating loads, rotating usage, and negotiating for extra amps. The "amp" has become its own Lebanese currency of comfort.'},
  {title:'The Diesel Economy', body:'The generator network runs on diesel. When fuel subsidies ended and the Lebanese pound collapsed, diesel prices became a crisis within the crisis. Long lines snaked around fuel stations; generators ran dry; neighborhoods went dark. "Diesel khales" (diesel ran out) became a feared phrase. Generator owners rationed hours, raised prices in dollars, and sometimes cut service entirely. The diesel shortage exposed how completely informal private infrastructure had replaced the state. Lebanon\'s power system is now a patchwork of thousands of private generators — each one a small diesel-burning business, each one a dependency.'},
  {title:'Solar & The New Lebanese Resilience', body:'Since 2020, solar panels have proliferated across Lebanese rooftops, balconies, and even walls. A "panel shams" (solar panel) plus "inverter" plus "batt2iye" (battery) creates a small independent power system. Initial investment is high — often $2,000-5,000 — but pays off quickly when generator costs are counted. "UPS" (battery backup) devices bridge the seconds between power sources switching. WhatsApp groups share solar installer recommendations. The Lebanese solar market boomed in a country with 300+ days of sunshine. It\'s improvised infrastructure — but it works. Many Lebanese now have more reliable power from their rooftop than from the state.'},
  {title:'Living Around the Power Schedule', body:'The barname (power schedule) structures Lebanese daily life in ways outsiders rarely understand. Major appliances — washing machines, dishwashers, ovens, water heaters ("musakkhin") — are only run when power is available. Everyone knows their neighborhood\'s cut-time. If the power is on at 10pm, that\'s when half the building does laundry. "3al generator" and "3al EDL" describe which source is currently live — they have different voltages, which affects appliance performance. Lebanese developed extraordinary flexibility: multiple power sources, mental power-maps, and a near-tribal knowledge of when and how long each source will last. Power is not assumed. It is negotiated.'},
];
