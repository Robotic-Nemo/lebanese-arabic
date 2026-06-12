// R684 — NEW FEATURE: Lebanese Family Life & Relationships (fml)
const FML_CATS = [
  { id:'roles',      label:'👨‍👩‍👧 Family Roles' },
  { id:'extended',   label:'👴 Extended Family' },
  { id:'milestones', label:'🎉 Milestones' },
  { id:'phrases',    label:'💬 Phrases' },
];

const FML_WORDS = [
  // immediate family roles
  { ar:'أبو',           tr:'aboo',            en:'father (informal)',        cat:'roles' },
  { ar:'إمي',           tr:'immee',           en:'my mother',                cat:'roles' },
  { ar:'أخ',            tr:'akh',             en:'brother',                  cat:'roles' },
  { ar:'أخت',           tr:'ukht',            en:'sister',                   cat:'roles' },
  { ar:'ابن',           tr:'ibn',             en:'son',                      cat:'roles' },
  { ar:'بنت',           tr:'bint',            en:'daughter/girl',            cat:'roles' },
  { ar:'جوز',           tr:'jooz',            en:'husband',                  cat:'roles' },
  { ar:'مرتو',          tr:'marto',           en:'his wife',                 cat:'roles' },
  // extended family
  { ar:'جدّو',          tr:'jiddo',           en:'grandfather (paternal)',    cat:'extended' },
  { ar:'تيتا',          tr:'teeta',           en:'grandmother',              cat:'extended' },
  { ar:'عمّو',          tr:'3ammo',           en:'paternal uncle',           cat:'extended' },
  { ar:'خال',           tr:'khaal',           en:'maternal uncle',           cat:'extended' },
  { ar:'عمّة',          tr:'3amme',           en:'paternal aunt',            cat:'extended' },
  { ar:'خالة',          tr:'khaale',          en:'maternal aunt',            cat:'extended' },
  { ar:'ابن عم',        tr:'ibn 3am',         en:'paternal cousin (m)',       cat:'extended' },
  { ar:'صهر',           tr:'Sahar',           en:'in-law (general)',         cat:'extended' },
  // milestones
  { ar:'خطوبة',         tr:'khaTuube',        en:'engagement',               cat:'milestones' },
  { ar:'عرس',           tr:'3ares',           en:'wedding',                  cat:'milestones' },
  { ar:'طفل',           tr:'Tifl',            en:'baby/child',               cat:'milestones' },
  { ar:'حامل',          tr:'7aamel',          en:'pregnant',                 cat:'milestones' },
  { ar:'ولادة',         tr:'wilaade',         en:'birth/delivery',           cat:'milestones' },
  { ar:'عيد ميلاد',     tr:'3eed milaad',     en:'birthday',                 cat:'milestones' },
  { ar:'طلاق',          tr:'Talaaq',          en:'divorce',                  cat:'milestones' },
  // phrases
  { ar:'كيف العيلة',     tr:'kif el-3eele',   en:'how is the family?',       cat:'phrases' },
  { ar:'العيلة أهم شي', tr:'el-3eele ahham shi', en:'family is the most important thing', cat:'phrases' },
  { ar:'ربّي الولاد',    tr:'rabbi el-wlaad',  en:'raise the children',       cat:'phrases' },
  { ar:'بيتنا دايماً مفتوح', tr:'betna dayyman maftoow7', en:'our home is always open', cat:'phrases' },
  { ar:'دم ما بصير مي', tr:'damm maa biSeer miye', en:'blood doesn\'t become water (blood is thicker)', cat:'phrases' },
];

const FML_DRILLS = [
  { q:'How do you say "brother" in Lebanese?', opts:['akh','ibn','jooz','aboo'], ans:0 },
  { q:'"Teeta" means:', opts:['grandmother','grandfather','aunt','mother'], ans:0 },
  { q:'What is "3ammo"?', opts:['paternal uncle','maternal uncle','grandfather','father'], ans:0 },
  { q:'"Jooz" means:', opts:['husband','son','brother','uncle'], ans:0 },
  { q:'How do you say "engagement"?', opts:['khaTuube','3ares','wilaade','Talaaq'], ans:0 },
  { q:'"3ares" means:', opts:['wedding','engagement','birthday','birth'], ans:0 },
  { q:'What is "jiddo"?', opts:['grandfather','grandmother','paternal uncle','father'], ans:0 },
  { q:'"Bint" means:', opts:['daughter/girl','sister','aunt','wife'], ans:0 },
  { q:'How do you say "pregnant"?', opts:['7aamel','wilaade','khaTuube','Tifl'], ans:0 },
  { q:'"Khaale" means:', opts:['maternal aunt','paternal aunt','grandmother','sister'], ans:0 },
  { q:'"3eed milaad" means:', opts:['birthday','wedding','birth','engagement'], ans:0 },
  { q:'How do you say "son"?', opts:['ibn','akh','jooz','Tifl'], ans:0 },
  { q:'"Ibn 3am" means:', opts:['paternal cousin','maternal cousin','uncle','brother'], ans:0 },
  { q:'"Kif el-3eele?" means:', opts:['how is the family?','how are you?','how is home?','what is family?'], ans:0 },
  { q:'How do you say "divorce"?', opts:['Talaaq','3ares','khaTuube','wilaade'], ans:0 },
];

const FML_TIPS = [
  { title:'Lebanese Family Structure', body:'Lebanese families are large and close-knit. "El-3eele" (العيلة) = the family unit. "El-3eele ahham shi" (family is the most important thing) isn\'t just a phrase — Sunday lunches with 30 relatives, everyone talking over each other, are the norm.' },
  { title:'Paternal vs Maternal', body:'Lebanese Arabic distinguishes precisely. "3ammo" (عمّو) = father\'s brother, "khaal" = mother\'s brother. "3amme" = father\'s sister, "khaale" = mother\'s sister. "Ibn 3am" (paternal cousin) is very specific — Lebanese often marry paternal cousins.' },
  { title:'"Jiddo" and "Teeta"', body:'"Jiddo" (جدّو) and "teeta" (تيتا) are the beloved grandparent terms. Grandparents are central to Lebanese family life — often live with or next to the family. "3ind teeta" (at grandma\'s) means a feast is coming.' },
  { title:'Marriage Milestones', body:'"KhaTuube" (خطوبة) is the engagement — often announced with a family party and ring ceremony before the wedding. "3ares" is the wedding itself. Lebanese weddings are legendary: 300-500 guests, 7+ hours, zaffeh (procession), dabke, and absurd amounts of food.' },
  { title:'Children & Parenthood', body:'"Inta 7aamel?" (are you pregnant?) is considered direct, not rude in Lebanese culture — family is everyone\'s business. "Wilaade" = birth. "Tifl" = baby/child. "Rabbi el-wlaad" (raising the kids) = the central life project.' },
  { title:'The "Damm" Proverb', body:'"Damm maa biSeer miye" (دم ما بصير مي) = blood doesn\'t become water. The ultimate Lebanese family value: family bonds can never truly be broken. Used when reconciling after fights or explaining why you can\'t cut off family.' },
];
