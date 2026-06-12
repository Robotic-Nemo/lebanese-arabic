// R1626 — Jounieh & Harissa (jne) Maronite coastal stronghold north of Beirut
// Topics: Bay of Jounieh, Casino du Liban, teleferique cable car to Harissa,
// Notre-Dame du Liban (Our Lady of Lebanon) statue, Maronite patriarchate Bkerke,
// nightlife clubs, Jounieh marina, sahel kesrwan dialect, summer crowds.

const JNE_WORDS = [
  { w: 'Jounieh', t: 'جونية', e: 'Jounieh (Maronite coastal city ~20km north of Beirut, ~100k pop)', ex: 'Jounieh ahla madine 3a sahel Kesrwan, w n3am bel-bayrouti.' },
  { w: 'Harissa', t: 'حريصا', e: 'Harissa (mountain village above Jounieh, Notre-Dame du Liban shrine)', ex: 'Harissa byban men kel khalij Jounieh, w Saydet Lebnan 3am tba3edna.' },
  { w: 'el-teleferique', t: 'التلفريك', e: 'teleferique (Jounieh-Harissa cable car, since 1965, iconic ride)', ex: 'el-teleferique brou7 men Jounieh la-Harissa b-9 daqayek, byzlmik el-bayrouti.' },
  { w: 'Saydet Lebnan', t: 'سيدة لبنان', e: 'Our Lady of Lebanon (15-ton bronze Mary statue 1908, Maronite icon)', ex: 'Saydet Lebnan tem-thelha bayyan men kel khalij, byezhar lel-Mawarni.' },
  { w: 'el-Casino', t: 'الكازينو', e: 'Casino du Liban (1959, MENA\'s first casino, Bay of Jounieh)', ex: 'el-Casino du Liban a3raq Casino bel-mantqa, w mash-hour bel-shows.' },
  { w: 'khalij Jounieh', t: 'خليج جونية', e: 'Bay of Jounieh (semicircular Mediterranean bay, marina + nightlife)', ex: 'khalij Jounieh men a7la khlejen bel-Mediterranean.' },
  { w: 'Bkerke', t: 'بكركي', e: 'Bkerke (Maronite Patriarchate seat, 5km from Jounieh)', ex: 'Bkerke markaz el-batrak el-Marouni, kel mwarini byrou7olha.' },
  { w: 'el-Marouniye', t: 'المارونية', e: 'Maronite (Eastern Catholic church, dominant in Mt Lebanon)', ex: 'el-Marouniye akbar Taifa Mas7iyye bel-Lebnen, men ayam el-2ddise Maroun.' },
  { w: 'Sahel Kesrwan', t: 'ساحل كسروان', e: 'Kesrwan coast (district name, Maronite heartland)', ex: 'Sahel Kesrwan fiyo Jounieh w Jbeil w Adma w kel sayfiyet el-Mawarni.' },
  { w: 'el-marina', t: 'المارينا', e: 'Jounieh marina (yachts, ATCL club, nightlife)', ex: 'el-marina b-Jounieh fiya yakhout w cafés w Sahrat el-saif.' },
  { w: 'el-saharat', t: 'السهرات', e: 'nightlife (Jounieh famous for clubs since 70s, MTV celebs)', ex: 'el-saharat b-Jounieh men a7sano bel-Lebnen, byjeebo nas men kel mantqa.' },
  { w: 'el-batrak', t: 'البطرك', e: 'Patriarch (Maronite head, current Bechara Boutros al-Rahi)', ex: 'el-batrak Mar Bechara biskon b-Bkerke, w byezhar bel-3uTla el-rasmiyye.' },
  { w: 'Adma', t: 'أدما', e: 'Adma (upscale Maronite suburb above Jounieh, gated villas)', ex: 'Adma min ahla mantqa la-l-bayyout 3al-tilet el-Lebanen.' },
  { w: 'el-Faraya road', t: 'طريق فاريا', e: 'Faraya highway (Jounieh→Faraya ski mountain road)', ex: 'min Jounieh bteTla3 3a Faraya b-45 daqiqa, kel sayfiyet w shtawi.' },
  { w: 'sahli Kesrwani', t: 'ساحلي كسرواني', e: 'Kesrwani coastal accent (distinct Maronite Mt Lebanon dialect)', ex: 'el-sahli el-Kesrwani byekhrof l-2 men kelmet el-2alb la-3.' },
  { w: '3eed el-Saydeh', t: 'عيد السيدة', e: 'Feast of Our Lady (15 August Assumption, Harissa pilgrimage)', ex: '3eed el-Saydeh b-15 Ab, kel l-Mawarni byrou7o 3a Harissa.' }
];

const JNE_DRILLS = [
  { q: 'What is Jounieh?', a: 'Maronite coastal city north of Beirut', exp: 'About 20km north of Beirut on Bay of Jounieh, ~100k pop. Maronite Catholic majority, traditional Mt Lebanon Christian heartland. Pre-civil-war played role as Christian capital. Today: tourism, marina, nightlife, suburb of Beirut.' },
  { q: 'What is Notre-Dame du Liban?', a: 'Our Lady of Lebanon Marian statue at Harissa', exp: '15-ton bronze Mary statue installed 1908 atop Harissa hill. Designed in France. National symbol of Maronite Lebanon. Visible from across Bay of Jounieh. Major pilgrimage site, especially August 15 Assumption feast. Adjoining basilica + Lebanese flag plaza.' },
  { q: 'What is the teleferique?', a: 'Jounieh-Harissa cable car', exp: 'Built 1965 by Italian firm. 9-minute ride climbs 600m from coast to Harissa shrine. Iconic Lebanese tourist experience. Closed during civil war. Reopened 1996. Operates daily 9am-7pm in summer, reduced winter hours. View of bay during ride is the highlight.' },
  { q: 'What is the Casino du Liban?', a: 'MENA region\'s first casino (1959)', exp: 'Built into hillside above Bay of Jounieh, opened 1959. First major casino in Middle East. Concert hall, multiple gaming floors. Hosted international stars (Sinatra, Aznavour). Owned by Lebanese state. Survived civil war, still operating.' },
  { q: 'What is Bkerke?', a: 'Maronite Patriarchate seat', exp: 'Maronite Catholic spiritual center in Kesrwan, 5km from Jounieh. Mountain monastery complex. Residence of Patriarch. Politically influential — patriarchal statements shape Maronite political positions. Current patriarch: Bechara Boutros al-Rahi (since 2011).' },
  { q: 'What is the Maronite Church?', a: 'Eastern Catholic church of Lebanon', exp: 'Founded by St Maron 4th-5th c. AD in Syrian-Lebanese mountains. Largest Christian community in Lebanon. In communion with Rome since 12th c. Distinct liturgy + traditions. Historically retreated to Mt Lebanon. Patriarch holds rank of cardinal. Strong diaspora presence.' },
  { q: 'What is Adma?', a: 'Upscale Maronite suburb', exp: 'Affluent residential area on hills above Jounieh. Gated villas, sea views. Home to many Maronite political + business families. Real estate among most expensive in Lebanon. Adjacent to Bkerke. Symbol of post-war Maronite consolidation.' },
  { q: 'Why was Jounieh called Christian capital?', a: 'Wartime alternative to Beirut', exp: 'During 1975-1990 civil war, East Beirut + Jounieh became de facto Christian-controlled zone. Many businesses, embassies, social scenes relocated north. Casino, marina, nightlife flourished. Symbolic role faded post-war but Jounieh remained Maronite cultural center.' },
  { q: 'What\'s special about August 15 in Harissa?', a: 'Feast of Assumption + Maronite pilgrimage', exp: 'Major Marian feast in Catholic + Orthodox calendar. Massive pilgrimages to Harissa shrine on this date. Procession with Mary statue, mass at the basilica, fireworks over bay. National holiday in Lebanon. Date for many Maronite town festivals.' },
  { q: 'What is Sahel Kesrwan?', a: 'Kesrwan coast district', exp: 'Lebanese administrative district. Stretches Maameltein → Faraya. Includes Jounieh, Adma, Jbeil. Maronite majority since Mamluk era when Sunni rulers settled Maronites there. Heart of Mt Lebanon Mutasarrifate (autonomous Christian region 1861-1918).' }
];

const JNE_TIPS = [
  { t: '🚠 Teleferique ride strategy', b: 'Take it up before sunset for view at Harissa, walk down through stations or drive back. ~$8-12 round trip fresh USD. Operate 9am-7pm summer, closes earlier winter. Avoid Sundays (long lines after mass at Harissa). Photo from glass cabin → bay panorama.' },
  { t: '🌊 Bay of Jounieh sunset', b: 'Best from Maameltein corniche or rooftop bars in Adma/Sehaileh. Lights of city + bay visible from Harissa terrace. Old Souk of Jounieh on the coast is walkable + has cafés. Avoid summer weekend traffic 7-10pm — locals + Beirutis crawl Bay area.' },
  { t: '⛪ Harissa visit', b: 'Free entry to Mary statue + basilica. Climb spiral inside the statue base for sky view. Adjoining Maronite Patriarchal residences nearby (Bkerke separate, 10min drive). Peaceful weekday mornings; crowded on Sundays + holidays. Modest dress preferred.' },
  { t: '🎰 Casino du Liban', b: 'Smart-casual dress code (no shorts/sandals). Show ID, foreigners get easier entry than locals. Stage shows nightly — French + Arab cabaret. $20-30 entry depending on package. Restaurants overlook bay. Skip if you don\'t gamble — better just see the building from outside.' },
  { t: '🌆 Jounieh nightlife', b: 'Clubs concentrated in Maameltein-ATCL area. Famous for late-night dance clubs. Less laid-back than Mar Mikhael, more flashy + Lebanese diaspora crowd. SkyBar Jounieh (different from Beirut SkyBar) iconic in summer. Reservations needed Friday/Saturday.' }
];
