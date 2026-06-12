// R507 — Lebanese Electricity & Generator Culture (prefix: pwr)
const PWR_WORDS = [
  // electricity basics
  {ar:'كهربا', tr:'kahraba', en:'electricity (government power / EDL supply)', cat:'basics'},
  {ar:'نور', tr:'noor', en:'light / power (colloquial for electricity)', cat:'basics'},
  {ar:'قطعة', tr:'2aT3a', en:'power cut — the moment electricity goes off', cat:'basics'},
  {ar:'رجعت الكهربا', tr:'rij3it el kahraba', en:'the electricity is back! (announcement)', cat:'basics'},
  {ar:'أمبير', tr:'ambiir', en:'ampere — the unit Lebanese subscribe to for generators', cat:'basics'},
  {ar:'اشتراك', tr:'ishtiraak', en:'subscription — monthly fee to the generator owner', cat:'basics'},
  // generator world
  {ar:'مولّد', tr:'mwalled', en:'generator (the machine)', cat:'generator'},
  {ar:'موتور', tr:'mootor', en:'motor = generator (colloquial term)', cat:'generator'},
  {ar:'مولّدجي', tr:'mwalladji', en:'generator owner/operator (the man who controls your power)', cat:'generator'},
  {ar:'شبكة', tr:'shabke', en:'generator network — the local power grid fed by one generator', cat:'generator'},
  {ar:'خط', tr:'khaTT', en:'line — your generator subscription line', cat:'generator'},
  {ar:'عدّاد', tr:'3addaad', en:'meter — tracks generator consumption', cat:'generator'},
  // power schedule
  {ar:'جدول', tr:'jadwal', en:'schedule — EDL\'s published (often ignored) power hours', cat:'schedule'},
  {ar:'ساعات', tr:'saa3aat', en:'hours — as in: how many hours of state power today', cat:'schedule'},
  {ar:'بكرا', tr:'bukra', en:'tomorrow (as in: power returns tomorrow — maybe)', cat:'schedule'},
  {ar:'على متى؟', tr:'3a mta?', en:'when? / until when? (asking when power returns)', cat:'schedule'},
  {ar:'ما في لهلق', tr:'ma fii la7la2', en:'no power right now / not yet', cat:'schedule'},
  // daily life phrases
  {ar:'اشحن', tr:'ish7an', en:'charge (your phone — before the cut)', cat:'phrases'},
  {ar:'شحّن موبايلك', tr:'sha77an mobaaylek', en:'charge your phone! (urgent reminder)', cat:'phrases'},
  {ar:'الإنفرتر', tr:'el inverter', en:'UPS / inverter — backup battery system', cat:'phrases'},
  {ar:'بطّارية', tr:'baTTaariyye', en:'battery (car battery repurposed as home backup)', cat:'phrases'},
  {ar:'شمعة', tr:'sham3a', en:'candle (power cut backup lighting)', cat:'phrases'},
  {ar:'فيكي تشتغل على الموتور؟', tr:'fiiki tishtaGhal 3a l-mootor?', en:'does it run on the generator? (checking AC/appliance)', cat:'phrases'},
  // EDL & politics
  {ar:'إد إل', tr:'idil', en:'EDL — Électricité du Liban (state power company)', cat:'system'},
  {ar:'فاتورة', tr:'faatuurah', en:'electricity bill (often unpaid by EDL for months)', cat:'system'},
  {ar:'عدّاد الدولة', tr:'3addaad el dawle', en:'state meter (EDL meter, often broken)', cat:'system'},
  {ar:'سرقة كهربا', tr:'sre2et kahraba', en:'electricity theft (extremely common)', cat:'system'},
  {ar:'مخالفة', tr:'mukhaalafe', en:'violation — getting caught for illegal connection', cat:'system'},
  // adaptation culture
  {ar:'يو بي إس', tr:'yu bi es', en:'UPS — uninterruptible power supply', cat:'adapt'},
  {ar:'سولار', tr:'soolar', en:'solar panels (post-crisis adoption boomed)', cat:'adapt'},
  {ar:'عبّي المي', tr:'3abbi l-mayy', en:'fill the water (pumps stop during power cuts)', cat:'adapt'},
  {ar:'تكيّف', tr:'takayaf', en:'adapted / adjusted (to power cuts)', cat:'adapt'},
  {ar:'جنريتور بلديّة', tr:'generateur baladiyye', en:'municipal generator (shared neighborhood backup)', cat:'adapt'},
  {ar:'ما منحتاجها', tr:'ma mn7taajha', en:'we don\'t need it (resilient Lebanese attitude)', cat:'adapt'},
];

const PWR_DRILLS = [
  {
    q: 'What is "kahraba" (كهربا) vs "noor" (نور) — two words for electricity in Lebanese?',
    opts: [
      '"Kahraba" = official/state electricity; "noor" = light/power (colloquial)',
      '"Kahraba" = generator power; "noor" = state power',
      '"Kahraba" = a power bill; "noor" = a power cut',
      '"Kahraba" = daytime power; "noor" = nighttime power'
    ],
    ans: 0,
    note: '"Kahraba" (كهربا) = electricity — the technical/formal term, also the company (EDL = Électricité du Liban). "Noor" (نور) = light — used colloquially to mean "power is on." "Rij3 el noor!" = the power\'s back! "Ma fi noor" = no electricity (lit. no light). "Rij3it el kahraba" = the electricity returned (more formal). In daily life, Lebanese use "noor" for the state of power and "kahraba" for the concept or the company. Both are essential vocabulary.'
  },
  {
    q: 'What is the "mwalladji" (مولّدجي) — Lebanon\'s most powerful neighborhood figure?',
    opts: [
      'The generator owner — who controls neighborhood power supply and sets prices',
      'An electrician — a professional who repairs electrical faults in homes',
      'An EDL employee — a government worker who reads meters',
      'A solar panel installer — a technician setting up renewable energy'
    ],
    ans: 0,
    note: '"Mwalladji" (مولّدجي) = generator operator/owner. In the absence of reliable state power, private generator operators fill the gap. They own diesel generators, run cables to buildings, and charge monthly "ishtiraak" (subscriptions) per "ambiir" (ampere). The "mwalladji" has real local power — raising prices, cutting subscribers, controlling which appliances can run. "El mwalladji 2aTa3 3alayyi" = the generator guy cut my power (a real threat). Post-crisis, "mwalladji" power grew enormously.'
  },
  {
    q: 'What does "ambiir" (أمبير) mean in Lebanese electricity culture?',
    opts: [
      'Ampere — the unit of electricity subscription you pay for from the generator',
      'A power bill — the monthly statement from EDL',
      'A voltage level — indicating how strong the electricity supply is',
      'A power hour — the time period when EDL supplies electricity'
    ],
    ans: 0,
    note: '"Ambiir" (أمبير) = ampere — the unit of generator subscription. "Ktaabet 5 ambiir" = I subscribed to 5 amperes. More amperes = more appliances running simultaneously = higher monthly fee. "El ambiir ma bi7tamil" = the ampere (subscription level) can\'t handle it (too many appliances on). Lebanese households carefully manage their ampere load: AC on = everything else off. "Rafa3 el ambiir" = upgraded the subscription (more amperes, higher monthly cost).'
  },
  {
    q: 'What is "2aT3a" (قطعة) — and how does it shape Lebanese daily life?',
    opts: [
      'A power cut — the moment state electricity stops, requiring switch to generator',
      'A power piece — a unit of electricity measurement',
      'A neighborhood — a district with its own power supply',
      'A power surge — when too much voltage damages appliances'
    ],
    ans: 0,
    note: '"2aT3a" (قطعة) = power cut — the sudden cessation of state electricity. Lebanese life is organized around "2aT3a" timing. Before leaving home: "ish7an el mobaayle" (charge the phone). Before sleeping: "3abbi el mayy" (fill the water, since pumps need power). The moment of "2aT3a" is punctuated by the generator starting — a sound every Lebanese knows. "Aymta lraaja3a?" = when is it coming back? (always uncertain). Life continues — Lebanese are experts at it.'
  },
  {
    q: 'What does "ishtiraak" (اشتراك) mean in Lebanese power culture?',
    opts: [
      'Subscription — monthly payment to the generator operator for power access',
      'A government form — paperwork for connecting to the state grid',
      'A neighborhood agreement — collective decision about power sharing',
      'An electricity tax — fee paid to the municipality for power infrastructure'
    ],
    ans: 0,
    note: '"Ishtiraak" (اشتراك) = subscription. The Lebanese electricity reality: two power bills monthly. (1) "Faatuuret el kahraba" = the EDL bill (state power, often charged even for hours not delivered). (2) The "ishtiraak" = private generator subscription, paid in cash, per ampere. Post-2019 financial crisis, generator "ishtiraak" shifted from Lebanese lira to US dollars. For many households, generator costs exceed the EDL bill. Lebanon\'s dual electricity economy is unique in the world.'
  },
  {
    q: 'What happened to Lebanese solar energy ("soolar") post-2019?',
    opts: [
      'Adoption exploded — power crisis made solar the rational choice for thousands',
      'It became illegal — government banned private power generation',
      'It became obsolete — new generators replaced solar entirely',
      'It remained rare — only the very wealthy could afford it'
    ],
    ans: 0,
    note: '"Soolar" (سولار) = solar panels. Lebanon\'s economic collapse + fuel crisis + generator price explosion caused a solar boom from 2020 onward. What was a luxury became a survival solution. Beirut rooftops transformed: solar panels everywhere. "3amalt soolar" = I installed solar (common conversation topic). Ironically, Lebanon gets over 300 sun days per year — ideal for solar. The crisis that devastated the economy accelerated Lebanon\'s renewable energy adoption faster than any policy could have.'
  },
  {
    q: 'What does "rij3it el kahraba" (رجعت الكهربا) signal in a Lebanese home?',
    opts: [
      '"The electricity is back!" — a joyful announcement triggering immediate action',
      '"The electricity is cut" — warning that power just went off',
      '"The electricity bill arrived" — notification of a new EDL bill',
      '"The generator is on" — the backup power has activated'
    ],
    ans: 0,
    note: '"Rij3it el kahraba" (رجعت الكهربا) = the electricity returned! In Lebanese homes, this announcement triggers immediate collective action: charge all devices, run the washing machine, turn on the water heater, start cooking what requires the oven. It\'s a small window (often 3-6 hours) before the next "2aT3a." The whole household mobilizes. Children learn young: when "el kahraba rij3et," you do everything electrical immediately. Lebanese efficiency at its most honest.'
  },
  {
    q: 'What is "el inverter" (الإنفرتر) — and why does every Lebanese apartment need one?',
    opts: [
      'A UPS/battery backup — stores power during supply hours and releases it during cuts',
      'A device that converts generator power to be safe for appliances',
      'A smart meter — tracks which hours EDL is supplying power',
      'An amplifier — boosts weak electrical current from aging infrastructure'
    ],
    ans: 0,
    note: '"El inverter" (الإنفرتر) = inverter/UPS system. A battery that charges during power-on hours and supplies power during cuts — bridging the gap between EDL schedule and generator start-up. Standard Lebanese home equipment. "El inverter waa2if" = the inverter is full/on (good). "El inverter khilas" = inverter battery depleted (back to candles). "Ashteri inverter" = buy an inverter (standard advice for anyone moving to Lebanon). The inverter is Lebanese infrastructure resilience, personalized.'
  },
  {
    q: 'What does "sha77an mobaaylek" (شحّن موبايلك) reveal about Lebanese life?',
    opts: [
      '"Charge your phone" — urgent reminder before the next power cut, a daily ritual',
      '"Buy a new phone" — suggestion to upgrade to a better device',
      '"Call someone" — instruction to make a phone call',
      '"Lower your phone brightness" — saving battery during a cut'
    ],
    ans: 0,
    note: '"Sha77an mobaaylek" (شحّن موبايلك) = charge your phone. In Lebanon, this is not advice — it\'s survival. Before every predicted power cut: charge phone, charge power bank, charge laptop. The Lebanese relationship with battery percentage is existential: below 30% creates real anxiety. "3indi kahraba la bes3a" = I have power for only one hour (charge everything now). Lebanese phones average higher daily charge cycles than almost any country. Constant low-battery vigilance is national.'
  },
  {
    q: 'What does "jadwal" (جدول) mean in Lebanese electricity context — and why is it ironic?',
    opts: [
      'Power schedule — EDL\'s published plan for power hours, rarely followed accurately',
      'Power bill — the monthly statement of electricity charges',
      'Power grid — the infrastructure distributing electricity city-wide',
      'Power plan — a government proposal to fix the electricity sector'
    ],
    ans: 0,
    note: '"Jadwal" (جدول) = schedule/table. EDL publishes a "jadwal" — a power-hour schedule showing which neighborhoods get electricity when. Theory: 3 hours on, 6 off (or worse). Reality: schedule changes without notice, is ignored during outages, or is simply wrong. "Shu el jadwal?" = what\'s the schedule? (asked with faint hope). Lebanese learn their neighborhood\'s actual pattern through experience, not the published jadwal. The gap between "jadwal" and reality is a perfect metaphor for Lebanese institutional governance.'
  },
];

const PWR_TIPS = [
  {
    title: 'Lebanon\'s two-electricity system',
    body: 'Lebanese households pay for electricity twice: (1) EDL (Électricité du Liban) — the state utility, supplying anywhere from 0-20 hours daily depending on region and era, bills in lira; (2) Private generator "ishtiraak" — monthly subscription to neighborhood generator operator, paid in USD since 2020. The generator fills the EDL gap. In practice: EDL ≈ 3-6 hours/day in Beirut (less elsewhere), generator covers the rest. Monthly power cost can be $100-200+. A solution that works through pure private-sector improvisation in the complete failure of the state.'
  },
  {
    title: 'The generator economy',
    body: '"Mwalladji" (generator operators) form a parallel power utility. They own commercial generators, run cables building-to-building, sell subscriptions by ampere, and collect cash monthly. No receipts, no regulation, no consumer protection. Ampere prices doubled/tripled during the fuel crisis. Some "mwalladji" became wealthy; others couldn\'t afford diesel and cut service. The Lebanese generator economy is worth hundreds of millions. Post-crisis solar adoption threatens this model — tension between solar adopters and generator operators is real.'
  },
  {
    title: 'How to live with power cuts',
    body: 'Lebanese power-cut adaptation is artful. Key practices: (1) Always charge phones and power banks during power-on hours. (2) "3abbi el mayy" — fill water storage before cuts (pumps fail). (3) Know your generator\'s ampere limit — running AC + washing machine + water heater = tripped breaker. (4) Keep candles and flashlights accessible. (5) Inverters/UPS for WiFi routers (Lebanese prioritize internet over lights). (6) Solar panels as long-term investment. The rule: never trust the power to stay on; always be ready for it to go.'
  },
  {
    title: 'Post-2019 electricity crisis',
    body: 'Lebanon\'s electricity was bad before 2019; after the financial collapse, it became catastrophic. Fuel for generators became unaffordable in local currency. EDL supply dropped to 1-2 hours/day in some areas; zero in others. Hospitals ran on generators 24/7. Traffic lights failed. The darkness accelerated solar adoption: Lebanon went from minimal residential solar to thousands of installations in two years. The crisis made visible what was always true: the state had never actually provided reliable electricity, and Lebanese had been compensating privately all along.'
  },
  {
    title: 'Electricity as social barometer',
    body: 'In Lebanon, electricity hours correlate with wealth and political access. Some neighborhoods (connected to powerful political figures) get more EDL hours. Some buildings can afford 24/7 generator coverage. Others get 4 hours of state power and nothing else. "Kahraba" is not neutral — it reflects Lebanon\'s sectarian and class geography. Moving to a new apartment: "2addeesh el kahraba?" = how many hours of electricity? This is a standard real estate question. Wealthier areas, more hours. The electricity schedule is a proxy for power in both senses.'
  },
];

const PWR_ABOUT = `
<p><strong>⚡ Lebanese Electricity & Generator Culture</strong></p>
<p>In most countries, electricity is infrastructure — invisible until it fails. In Lebanon, electricity is a daily negotiation, a parallel economy, and a marker of social position. Every Lebanese person knows their neighborhood's power schedule, their generator subscription cost, and the exact sound of the generator starting after a "2aT3a" (power cut).</p>
<p><strong>The system:</strong> EDL (Électricité du Liban), the state utility, has never supplied 24-hour power. In better years: 12-16 hours. Post-2019 crisis: often 2-3. The gap is filled by private "mwalladji" (generator operators) who run diesel generators and sell subscriptions by ampere. Two bills, two systems, one country that somehow keeps running.</p>
<p><strong>The adaptation:</strong> Lebanese have built an entire vocabulary, culture, and economy around power instability. "Sha77an mobaaylek" (charge your phone) before the cut. "3abbi el mayy" (fill the water). Know your inverter's capacity. Watch the ampere load. Solar panels as the new Lebanese investment. This is not resignation — it's engineering around a broken system with remarkable creativity.</p>
<p><strong>The politics:</strong> Electricity is inseparable from Lebanon's political dysfunction. The same sectarian system that paralyzes governance paralyzes EDL. Reform proposals have failed for decades. Meanwhile, the generator economy — unregulated, cash-based, and powerful — fills the gap. Understanding "kahraba" culture means understanding Lebanon's relationship with its own state.</p>
`;
