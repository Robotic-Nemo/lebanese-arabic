const CDR_WORDS = [
  { ar:'أرز', tr:'arz', en:'cedar tree', hint:'The Lebanese national symbol — on the flag' },
  { ar:'غابة الأرز', tr:'ghabit el-arz', en:'cedar forest', hint:'The Cedars of God (Arz el-Rab) in Bcharre' },
  { ar:'جبل', tr:'jabal', en:'mountain', hint:'Lebanon = "white mountain" (levan = white)' },
  { ar:'قمة', tr:'2imme', en:'summit / peak', hint:'Qornet es-Sawda = 3088m, highest peak (Sannine = 2628m, second-highest massif)' },
  { ar:'ثلج', tr:'tlej', en:'snow', hint:'Lebanon has snow 6+ months on high peaks' },
  { ar:'وادي', tr:'wadi', en:'valley', hint:'Wadi Qadisha = "holy valley", UNESCO site' },
  { ar:'نهر', tr:'nahr', en:'river', hint:'Nahr Ibrahim, Nahr el-Kalb — mountain rivers' },
  { ar:'حجر', tr:'7ajar', en:'stone / rock', hint:'Limestone mountain stone, iconic Lebanese homes' },
  { ar:'جذر', tr:'jidhir', en:'root', hint:'Metaphor: جذوري من هون = my roots are from here' },
  { ar:'برية', tr:'barriye', en:'wilderness / open nature', hint:'روح ع البرية = go into nature' },
  { ar:'طريق جبلي', tr:'tari2 jabali', en:'mountain road', hint:'Winding scenic roads between villages' },
  { ar:'ضباب', tr:'Dbab', en:'fog / mist', hint:'Mountain villages disappear in winter fog' },
  { ar:'برد', tr:'bard', en:'cold / coolness', hint:'Escaping summer heat to جبل = جاي ع البرد' },
  { ar:'صنوبر', tr:'Sanobar', en:'pine tree', hint:'Umbrella pine — common on Lebanese coast' },
  { ar:'شلال', tr:'shalal', en:'waterfall', hint:'Afqa waterfall — where Adonis River begins' },
  { ar:'كهف', tr:'kahf', en:'cave', hint:'Jeita Grotto — one of world\'s great cave systems' },
  { ar:'منظر طبيعي', tr:'manzar tabi3i', en:'natural scenery', hint:'الشوف منظرو طبيعي = Chouf has natural scenery' },
  { ar:'محمية', tr:'ma7miye', en:'nature reserve', hint:'Shouf Cedar Reserve — largest in Middle East' },
  { ar:'تنفس', tr:'tanaffos', en:'breathing / fresh air', hint:'طلعت ع الجبل لتنفس = went to mountain for fresh air' },
  { ar:'جذع', tr:'jidhe3', en:'tree trunk', hint:'Ancient cedar trunks can be 14m circumference' }
];

const CDR_DRILLS = [
  { q:'What does "arz" mean?', opts:['mountain','cedar tree','valley','river'], ans:1 },
  { q:'What is "wadi" in Lebanese?', opts:['peak','valley','forest','village'], ans:1 },
  { q:'"Tlej" means...?', opts:['rain','fog','snow','cold'], ans:2 },
  { q:'What is "ma7miye"?', opts:['waterfall','cave','nature reserve','mountain road'], ans:2 },
  { q:'"Shalal" means...?', opts:['rock','waterfall','fog','tree trunk'], ans:1 },
  { q:'Which word means "wilderness / open nature"?', opts:['jidhe3','barriye','kahf','2imme'], ans:1 },
  { q:'"7ajar" means...?', opts:['root','stone/rock','breathing','pine tree'], ans:1 },
  { q:'"Kahf" means...?', opts:['valley','forest','river','cave'], ans:3 }
];

const CDR_TIPS = [
  { title:'Cedar of Lebanon', body:'The cedar (أرز / arz) has been Lebanon\'s symbol for 5,000 years. Ancient Phoenicians exported cedar to Egypt for pharaoh\'s ships and Solomon\'s Temple. Today only ~17 ancient groves remain. "Arz el-Rab" (Cedars of God) in Bcharre is a UNESCO World Heritage Site.' },
  { title:'Mountain Identity', body:'Lebanese identity is deeply tied to the mountain (جبل / jabal). "Jabaliyyeh" (mountain people) implies resilience, stubbornness, hospitality. When politics get bad, people say "roo7 3al-jabal" (go to the mountain) — escape to ancestral villages.' },
  { title:'Qadisha Valley', body:'Wadi Qadisha (وادي قاديشا = Holy Valley) near Bcharre is one of the oldest continuously inhabited Christian settlements. Carved into limestone cliffs, hermit monks lived there for centuries. The word "qadisha" is Aramaic for "holy" — Lebanon still has Aramaic place names.' },
  { title:'Jeita Grotto', body:'"Kahf Jeita" (Jeita Cave) is a 9km limestone cave system — one of the world\'s largest. The lower chamber is navigated by boat. In 2011 it was a finalist for "New 7 Wonders of Nature." Lebanese proudly say: "منا Jeita" (we have Jeita).' }
];
