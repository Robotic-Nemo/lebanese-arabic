// R474 — Lebanese Holidays & Celebrations coach (prefix: rel)
const REL_WORDS = [
  // major holidays
  {ar:'عيد الميلاد', tr:'3iid el Milaad', en:'Christmas', cat:'holidays'},
  {ar:'عيد الفصح', tr:'3iid el Fas7', en:'Easter', cat:'holidays'},
  {ar:'عيد الفطر', tr:'3iid el FiTr', en:'Eid Al-Fitr (end of Ramadan)', cat:'holidays'},
  {ar:'عيد الأضحى', tr:'3iid el AD7a', en:'Eid Al-Adha (feast of sacrifice)', cat:'holidays'},
  {ar:'عاشوراء', tr:'3aashuura2', en:'Ashura (Shia commemoration)', cat:'holidays'},
  {ar:'رمضان', tr:'ramaDaan', en:'Ramadan (holy month)', cat:'holidays'},
  {ar:'رأس السنة', tr:'raas es-sane', en:'New Year\'s Day', cat:'holidays'},
  {ar:'يوم الاستقلال', tr:'yoom el isti2laal', en:'Independence Day (Nov 22)', cat:'holidays'},
  {ar:'عيد العمال', tr:'3iid el 3ummaal', en:'Labor Day (May 1)', cat:'holidays'},
  {ar:'يوم الشهداء', tr:'yoom esh-shuhada2', en:'Martyrs\' Day (May 6)', cat:'holidays'},
  // greetings for occasions
  {ar:'كل عام وأنت بخير', tr:'kell 3aam w inta bikheer', en:'happy holiday (universal)', cat:'greetings'},
  {ar:'عيد مبارك', tr:'3iid mubarak', en:'blessed Eid/holiday', cat:'greetings'},
  {ar:'رمضان كريم', tr:'ramaDaan kariim', en:'generous Ramadan', cat:'greetings'},
  {ar:'رمضان مبارك', tr:'ramaDaan mubarak', en:'blessed Ramadan', cat:'greetings'},
  {ar:'الله أكبر منك', tr:'allah akbar minnak', en:'God is greater (Eid response)', cat:'greetings'},
  {ar:'مبروك العيد', tr:'mabruuk el 3iid', en:'congratulations on the holiday', cat:'greetings'},
  {ar:'سنة حلوة', tr:'sane 7ilwe', en:'happy (sweet) new year', cat:'greetings'},
  // religious vocabulary
  {ar:'مسجد', tr:'masjid', en:'mosque', cat:'places'},
  {ar:'كنيسة', tr:'kniise', en:'church', cat:'places'},
  {ar:'دير', tr:'deer', en:'monastery', cat:'places'},
  {ar:'مزار', tr:'mazaar', en:'shrine / holy site', cat:'places'},
  {ar:'صلاة', tr:'Salaah', en:'prayer', cat:'practices'},
  {ar:'صيام', tr:'Siyaam', en:'fasting', cat:'practices'},
  {ar:'حج', tr:'7ajj', en:'pilgrimage to Mecca', cat:'practices'},
  {ar:'زكاة', tr:'zakaah', en:'almsgiving / charity', cat:'practices'},
  // coexistence culture
  {ar:'عيش مشترك', tr:'3aysh mushtarak', en:'coexistence (shared living)', cat:'culture'},
  {ar:'تسامح', tr:'tasaamu7', en:'tolerance', cat:'culture'},
  {ar:'تعددية', tr:'ta3addudiyye', en:'pluralism / diversity', cat:'culture'},
  {ar:'طائفة', tr:'Taa2ife', en:'religious sect / community', cat:'culture'},
  {ar:'مسيحي', tr:'masi7i', en:'Christian', cat:'culture'},
  {ar:'مسلم', tr:'muslim', en:'Muslim', cat:'culture'},
  {ar:'درزي', tr:'darzi', en:'Druze', cat:'culture'},
  // celebrations
  {ar:'احتفال', tr:'i7tifaal', en:'celebration / party', cat:'celebrations'},
  {ar:'حفلة', tr:'7afle', en:'party / gathering', cat:'celebrations'},
  {ar:'زينة', tr:'zeene', en:'decoration / ornament', cat:'celebrations'},
  {ar:'شمعة', tr:'sham3a', en:'candle', cat:'celebrations'},
  {ar:'هدية', tr:'hadiyye', en:'gift', cat:'celebrations'},
  {ar:'بخشيش', tr:'ba2shiish', en:'gift of money (holiday custom)', cat:'celebrations'},
  {ar:'عيدية', tr:'3iidiyye', en:'holiday gift (esp. money for children)', cat:'celebrations'},
  {ar:'سهرة', tr:'sahra', en:'evening gathering / party', cat:'celebrations'},
];

const REL_DRILLS = [
  {
    q: 'Lebanon has 18 officially recognized religious communities. Which phrase describes this multi-faith coexistence?',
    opts: [
      '3aysh mushtarak (shared living / coexistence)',
      'Taa2ife wa7de (one sect)',
      'diine waa7id (one religion)',
      'ta7wiil diini (religious conversion)'
    ],
    ans: 0,
    note: '"3aysh mushtarak" (coexistence) is Lebanon\'s ideal — a model of multi-faith living. With Christians, Sunni Muslims, Shia Muslims, Druze, Alawites and others, Lebanon\'s diversity is both its strength and its political challenge.'
  },
  {
    q: 'What is "3iidiyye" and who receives it?',
    opts: [
      'Holiday gift of money — traditionally given to children',
      'Special food made only during Eid',
      'A prayer said at the mosque during holidays',
      'The holiday clothing bought for celebrations'
    ],
    ans: 0,
    note: '"3iidiyye" = holiday money gift, traditionally given by adults to children during Eid and Christmas. Similar to Chinese New Year red envelopes. Children love it; adults negotiate how much!'
  },
  {
    q: 'What does "ramaDaan kariim" mean and how is it used?',
    opts: [
      'Generous Ramadan — greeting at the start of Ramadan',
      'Ramadan is over — said at the end of the fast',
      'Fasting is hard — expression of difficulty',
      'God is generous — response to any greeting'
    ],
    ans: 0,
    note: '"RamaDaan kariim" = Ramadan is generous. Said at the start of Ramadan as a greeting. Response: "Allah akram" (God is more generous). "RamaDaan mubarak" (blessed Ramadan) is also common.'
  },
  {
    q: 'When is Lebanese Independence Day and what is its significance?',
    opts: [
      'November 22 — independence from France in 1943',
      'May 25 — Israeli withdrawal from south Lebanon in 2000',
      'April 13 — start of the civil war in 1975',
      'August 4 — Beirut port explosion 2020'
    ],
    ans: 0,
    note: '"Yoom el isti2laal" = Independence Day, November 22, 1943 — when Lebanon gained independence from French Mandate. A public holiday with military parades (when security situation allows).'
  },
  {
    q: 'What is "yoom esh-shuhada2" (Martyrs\' Day)?',
    opts: [
      'May 6 — commemorating Lebanese hanged by Ottomans in 1916',
      'April 13 — start of civil war',
      'November 22 — independence day',
      'August 15 — Assumption of Mary'
    ],
    ans: 0,
    note: '"Shuhada2" = martyrs. May 6, 1916: Jamal Pasha hanged Lebanese and Syrian intellectuals in Beirut\'s Martyrs\' Square (now Sahat el Shuhada). A solemn national day of remembrance.'
  },
  {
    q: 'How do you wish someone a happy new year in Lebanese?',
    opts: [
      'sane 7ilwe (sweet/happy new year)',
      '3iid mubarak (blessed holiday)',
      'kell 3aam w inta bikheer (every year may you be well)',
      'Both A and C are used'
    ],
    ans: 3,
    note: '"Sane 7ilwe" = sweet/happy new year (specifically New Year\'s). "Kell 3aam w inta bikheer" is universal for any annual occasion including New Year. Both are widely used — learners can use either!'
  },
  {
    q: 'What is "3aashuura2" in Lebanese Shia tradition?',
    opts: [
      'Annual commemoration of the martyrdom of Imam Hussein',
      'The night of divine decree in Ramadan',
      'The festival of lights celebrated by Druze',
      'A Christian pilgrimage to Mar Charbel\'s shrine'
    ],
    ans: 0,
    note: '"3aashuura2" commemorates the martyrdom of Imam Hussein at Karbala (680 CE). Marked by processions, mourning rituals, and charitable acts in Shia Muslim communities, particularly in south Lebanon and the Bekaa Valley.'
  },
  {
    q: 'What does "sane 7ilwe" literally mean?',
    opts: [
      'Sweet year — a warm way to say Happy New Year',
      'New year — the direct translation',
      'Big year — wishing abundance',
      'Good year — wishing success'
    ],
    ans: 0,
    note: '"Sane" = year, "7ilwe" = sweet/beautiful. "Sane 7ilwe" = sweet year — a poetic and warm way to say Happy New Year. Lebanese often say "sane 7ilwe w kteer sa3iide" (sweet year and very happy).'
  },
  {
    q: 'In Lebanon, Christmas is celebrated by which communities?',
    opts: [
      'All communities often join in the festive atmosphere',
      'Only Maronite Catholics',
      'Only Western Christians',
      'Only Armenians and Syriac Christians'
    ],
    ans: 0,
    note: 'Lebanon\'s 18 religious communities include multiple Christian sects (Maronite, Greek Orthodox, Armenian, Syriac, Roman Catholic, etc.). Christmas street decorations go up across Beirut, and Muslim and Druze neighbors often join in the celebrations — true 3aysh mushtarak!'
  },
  {
    q: 'What is the typical gift for children during Eid in Lebanon?',
    opts: [
      '3iidiyye — money given as a holiday gift',
      'A toy bought from the souk',
      'New prayer beads (misbaha)',
      'A book of Quran verses'
    ],
    ans: 0,
    note: '"3iidiyye" (holiday money) is the traditional Eid gift for children. Amounts vary by family wealth and relationship closeness. Children collect 3iidiyyaat from grandparents, aunts, uncles, and family friends — it\'s a major source of childhood joy.'
  },
];

const REL_TIPS = [
  {
    title: 'Lebanon\'s 18 religious communities',
    body: 'Lebanon officially recognizes 18 religious communities: Maronite, Greek Orthodox, Greek Catholic, Armenian Apostolic, Armenian Catholic, Syriac Orthodox, Syriac Catholic, Chaldean, Latin, Alawite, Druze, Ismaili, Sunni, Shia, and others. The political system (confessionalism) divides power among sects — president is Maronite, PM is Sunni, speaker is Shia.'
  },
  {
    title: 'Holiday greetings across faiths',
    body: 'In Lebanon, it\'s normal for Muslims to wish Christians "Merry Christmas" and for Christians to wish Muslims "Eid mubarak". The universal "kell 3aam w inta bikheer" works for any occasion. Never assume someone\'s religion — Lebanon\'s diversity means your neighbor could be from any faith.'
  },
  {
    title: 'Mar Charbel — Lebanon\'s beloved saint',
    body: 'Mar Charbel Makhlouf (1828-1898), a Maronite monk from Annaya, is one of Lebanon\'s most beloved figures. His shrine in Annaya (Jbeil/Byblos district) draws pilgrims of all faiths — Muslim, Christian, and Druze — seeking healing. He was canonized by Pope Paul VI in 1977.'
  },
  {
    title: 'The Lebanese National Day spirit',
    body: '"Yoom el isti2laal" (Independence Day, Nov 22) is a moment of national unity that transcends sectarian lines. Lebanese parade with flags, play the national anthem "kulluna lil-waTan" (all of us for the homeland), and celebrate what they share. In difficult times, this spirit is especially important.'
  },
  {
    title: 'Ramadan in Lebanon',
    body: 'Ramadan transforms Lebanon\'s social life. Restaurants stay open late for ifTaar (fast-breaking) gatherings. The cannon shot at sunset signals the end of the day\'s fast. Non-Muslims often join ifTaar dinners as a sign of solidarity. "Suhoor" (pre-dawn meal) gatherings run until the fajr prayer. The atmosphere is festive and communal.'
  },
];

const REL_ABOUT = `
<p><strong>🕌 Lebanese Holidays & Celebrations</strong></p>
<p>Lebanon's religious and national holidays reflect the country's extraordinary diversity. With 18 officially recognized religious communities, Lebanon celebrates more holidays than almost any other country — a reflection of its pluralistic identity.</p>
<p><strong>The coexistence ideal:</strong> "3aysh mushtarak" (coexistence) is Lebanon's aspiration — a society where Christians, Muslims, and Druze live together, share each other's joys, and celebrate across religious lines. Beirut Christmas decorations go up alongside Ramadan lanterns.</p>
<p><strong>National holidays:</strong> Beyond religious holidays, Lebanon commemorates Independence Day (Nov 22), Martyrs' Day (May 6), and Liberation Day (May 25). These unite Lebanese across sectarian lines.</p>
<p><strong>For language learners:</strong> Knowing holiday vocabulary and greetings is essential for genuine connection with Lebanese people. Nothing warms a Lebanese heart more than a foreigner who says "kell 3aam w inta bikheer" at the right moment.</p>
`;
