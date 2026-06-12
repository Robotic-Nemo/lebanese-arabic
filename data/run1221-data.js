// R1221 — NEW FEATURE: Lebanese Rivers & Freshwater Heritage (nhr)
const NHR_WORDS = [
  {ar:'نهر',tr:'nahr',en:'river',cat:'general'},
  {ar:'نهر إبراهيم',tr:'nahr ibraaheem',en:'Nahr Ibrahim (Adonis River)',cat:'river'},
  {ar:'نهر الكلب',tr:'nahr l-kalb',en:'Nahr el Kalb (Dog River)',cat:'river'},
  {ar:'نهر الليطاني',tr:'nahr l-leeţaani',en:'the Litani River',cat:'river'},
  {ar:'نهر العاصي',tr:'nahr l-3aasi',en:'Nahr el Assi (Orontes River)',cat:'river'},
  {ar:'نهر الأولي',tr:'nahr l-awali',en:'the Awali River',cat:'river'},
  {ar:'نبع',tr:'naba3',en:'spring / water source',cat:'general'},
  {ar:'شلال',tr:'shalaal',en:'waterfall',cat:'general'},
  {ar:'وادي',tr:'waadi',en:'valley / wadi',cat:'general'},
  {ar:'ضفة النهر',tr:'Daffet n-nahr',en:'riverbank',cat:'general'},
  {ar:'سد',tr:'sadd',en:'dam',cat:'infrastructure'},
  {ar:'سد القرعون',tr:'sadd l-2ar3oun',en:'Qaraoun Dam (Litani)',cat:'infrastructure'},
  {ar:'ري',tr:'riyy',en:'irrigation',cat:'use'},
  {ar:'تراوط',tr:'traawiT',en:'trout (mountain streams)',cat:'creature'},
  {ar:'سمك نهري',tr:'samak nahri',en:'freshwater fish',cat:'creature'},
  {ar:'عفقا',tr:'3afqa',en:'Afqa (sacred spring of Adonis)',cat:'place'},
  {ar:'جسر',tr:'jisr',en:'bridge',cat:'infrastructure'},
  {ar:'مياه عذبة',tr:'miyaah 3aZbe',en:'freshwater',cat:'general'},
  {ar:'فيضان',tr:'fayaDaan',en:'flood',cat:'general'},
  {ar:'منبع',tr:'mamba3',en:'river source / headwaters',cat:'general'},
];

const NHR_DRILLS = [
  {q:'What is "nahr" in Lebanese Arabic?',opts:['lake','river','spring','sea'],ans:1,exp:'نهر = river — Lebanon has over 40 rivers fed by snowmelt and mountain springs. Despite the country\'s small size, its rivers shaped Phoenician civilization and continue to supply water to millions.'},
  {q:'Which river is also called the "Adonis River"?',opts:['nahr l-kalb','nahr l-leeţaani','nahr ibraaheem','nahr l-3aasi'],ans:2,exp:'نهر إبراهيم = Nahr Ibrahim — named after the Prophet Ibrahim in Islamic tradition, but ancient Greeks called it the Adonis River. At Afqa, its source was sacred to Adonis and Astarte — Lebanese Phoenician gods of love and fertility.'},
  {q:'What is "naba3" in Lebanese?',opts:['flood','dam','spring / water source','riverbank'],ans:2,exp:'نبع = spring — Lebanon\'s mountain springs (naba3) are culturally vital. The word is common in village names: Nabaa, Ain (عين), Ras el Ain. Mountain spring water is considered the freshest and most prized drinking water.'},
  {q:'What does "sadd l-2ar3oun" refer to?',opts:['Nahr el Kalb dam','Qaraoun Dam on the Litani','Awali River dam','Afqa spring dam'],ans:1,exp:'سد القرعون = Qaraoun Dam — built in the 1960s on the Litani River, creating Lebanon\'s largest artificial lake. The dam powers Lebanon\'s main hydroelectric plant and irrigates the Bekaa Valley. 2ar3oun village sits beside it.'},
  {q:'What is "traawiT" in Lebanese mountain streams?',opts:['carp','eel','trout','catfish'],ans:2,exp:'تراوط = trout — cold mountain river trout, prized by Lebanese fishermen. River trout from Nahr Ibrahim and Nahr el Assi are a delicacy, grilled whole at riverside restaurants in the Shouf and Akkar regions.'},
  {q:'What is "3afqa"?',opts:['a dam on the Litani','the mouth of the Awali River','the sacred spring source of Nahr Ibrahim','a bridge over Nahr el Kalb'],ans:2,exp:'عفقا = Afqa — a spectacular grotto high in the Mount Lebanon range where Nahr Ibrahim bursts from a cliff face. In Phoenician mythology, this was where Adonis was born and where his annual death (symbolized by red iron-rich water) was mourned by Astarte.'},
  {q:'What is "fayaDaan" in Lebanese?',opts:['irrigation canal','spring source','flood','freshwater fish'],ans:2,exp:'فيضان = flood — winter floods from snowmelt are a recurring hazard in Lebanese river valleys. The Nahr Beirut and Nahr el Kalb have caused urban flooding in Beirut suburbs. Flash floods in wadis (valleys) during heavy rain are also dangerous.'},
  {q:'Which river has historic inscription panels carved by conquering armies?',opts:['nahr ibraaheem','nahr l-kalb','nahr l-leeţaani','nahr l-awali'],ans:1,exp:'نهر الكلب = Nahr el Kalb (Dog River) — carved into the cliffs at its mouth near Beirut are 22 commemorative stelae left by every army that passed: Egyptian pharaohs, Assyrians, Alexander the Great, Roman emperors, French and British WWI forces, and modern Lebanese leaders.'},
];

const NHR_TIPS = [
  {title:'Lebanon\'s Water Tower',body:'Lebanon is called the "water tower of the Arab world." Its snow-capped mountains (jbel l-arz, jbel sanneen) release snowmelt that feeds over 40 rivers and hundreds of springs. At its peak, Lebanon exported water to Kuwait and Saudi Arabia. The Litani River alone carries enough volume to supply Lebanon\'s entire water needs — yet chronic infrastructure failures mean millions still lack reliable running water.'},
  {title:'Nahr el Kalb — River of Memory',body:'The cliffs at the mouth of Nahr el Kalb (Dog River) near Jounieh form one of the world\'s oldest open-air history archives. From Ramesses II (1274 BC) to French General Gouraud (1920), every conqueror felt compelled to carve a commemoration here. The modern Lebanese state added panels in 1946 (independence) and 2005 (Syrian troop withdrawal). Walking past them is walking through 3,300 years of Levantine history.'},
  {title:'Afqa & the Adonis Myth',body:'At Afqa in the Byblos mountains, Nahr Ibrahim emerges from a dramatic cave in a limestone cliff. For the Phoenicians, this was the birthplace of Adonis (Adon = Lord), beloved of Astarte. Each spring, red iron-rich water tinged the river — mourned as Adonis\'s blood. The Romans built a temple to Venus here. Early Christian emperors destroyed it. The myth of a dying-and-rising god of fertility here fed into broader Mediterranean religious tradition.'},
  {title:'The Litani & Lebanese Agriculture',body:'The Litani (nahr l-leeţaani) is Lebanon\'s longest river at 170 km, flowing through the Bekaa Valley before turning west to the sea. The Qaraoun Dam (built 1965) stores its water, generating hydroelectricity and feeding irrigation canals that made the Bekaa one of the Levant\'s most fertile plains. The Litani has also been a geopolitical flashpoint — Israel sought access to its waters in 1948 and 1978. Today it supplies Beirut and the south, though pollution from unregulated dumping is a serious threat.'},
];
