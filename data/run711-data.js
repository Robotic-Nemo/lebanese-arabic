// R711 — NEW FEATURE: Lebanese Law & Justice (law)
const LAW_CATS = [
  { id:'court',   label:'⚖️ Court & Justice' },
  { id:'crime',   label:'🚔 Crime & Police' },
  { id:'rights',  label:'📜 Rights & Docs' },
  { id:'phrases', label:'💬 Phrases' },
];

const LAW_WORDS = [
  // court & justice
  { ar:'قانون',        tr:'2aanoon',         en:'law',                    cat:'court' },
  { ar:'محكمة',        tr:'ma7kame',         en:'court',                  cat:'court' },
  { ar:'قاضي',         tr:'2aaDi',           en:'judge',                  cat:'court' },
  { ar:'محامي',        tr:'mu7aami',         en:'lawyer',                 cat:'court' },
  { ar:'حكم',          tr:'7ukm',            en:'verdict/judgment',       cat:'court' },
  { ar:'عدالة',        tr:'3adaale',         en:'justice',                cat:'court' },
  { ar:'دعوى',         tr:'da3wa',           en:'lawsuit/case',           cat:'court' },
  { ar:'سجن',          tr:'sijin',           en:'prison/jail',            cat:'court' },
  // crime & police
  { ar:'شرطة',         tr:'shurTa',          en:'police',                 cat:'crime' },
  { ar:'شرطي',         tr:'shurTi',          en:'police officer',         cat:'crime' },
  { ar:'جريمة',        tr:'jariime',         en:'crime',                  cat:'crime' },
  { ar:'سرقة',         tr:'sar2a',           en:'theft/robbery',          cat:'crime' },
  { ar:'تحقيق',        tr:'ta7kii2',         en:'investigation',          cat:'crime' },
  { ar:'اعتقال',       tr:'i3ti2aal',        en:'arrest',                 cat:'crime' },
  { ar:'غرامة',        tr:'ghraame',         en:'fine/penalty',           cat:'crime' },
  // rights & documents
  { ar:'حق',           tr:'7a22',            en:'right',                  cat:'rights' },
  { ar:'عقد',          tr:'3a2d',            en:'contract',               cat:'rights' },
  { ar:'جواز سفر',     tr:'jawwaaz safar',   en:'passport',               cat:'rights' },
  { ar:'هوية',         tr:'huwwiyye',        en:'ID card',                cat:'rights' },
  { ar:'توقيع',        tr:'taw2ii3',         en:'signature',              cat:'rights' },
  { ar:'ميراث',        tr:'miraath',         en:'inheritance',            cat:'rights' },
  { ar:'ملكية',        tr:'milkiyye',        en:'ownership/property',     cat:'rights' },
  // phrases
  { ar:'بدي محامي',         tr:'biddi mu7aami',          en:'I need a lawyer',            cat:'phrases' },
  { ar:'هالعقد صحيح؟',       tr:'hal-3a2d Sa7ii7?',       en:'is this contract valid?',    cat:'phrases' },
  { ar:'في محكمة هون؟',      tr:'fii ma7kame hoon?',      en:'is there a court here?',     cat:'phrases' },
  { ar:'شو الحكم؟',          tr:'shu l-7ukm?',            en:'what is the verdict?',       cat:'phrases' },
  { ar:'بدي اشتكي',          tr:'biddi ishtkii',          en:'I want to complain',         cat:'phrases' },
  { ar:'حقي محفوظ',          tr:'7a22i ma7fuuz',          en:'my rights are protected',    cat:'phrases' },
];

const LAW_DRILLS = [
  { q:'How do you say "lawyer"?', opts:['mu7aami','2aaDi','shurTi','2aanoon'], ans:0 },
  { q:'"Ma7kame" means:', opts:['court','prison','police','law'], ans:0 },
  { q:'What is "7ukm"?', opts:['verdict/judgment','case','law','justice'], ans:0 },
  { q:'"ShurTa" means:', opts:['police','army','court','judge'], ans:0 },
  { q:'How do you say "contract"?', opts:['3a2d','da3wa','7a22','miraath'], ans:0 },
  { q:'"Jariime" means:', opts:['crime','arrest','theft','fine'], ans:0 },
  { q:'What is "2aaDi"?', opts:['judge','lawyer','police officer','witness'], ans:0 },
  { q:'"Sar2a" means:', opts:['theft/robbery','crime','arrest','fine'], ans:0 },
  { q:'How do you say "passport"?', opts:['jawwaaz safar','huwwiyye','taw2ii3','milkiyye'], ans:0 },
  { q:'"3adaale" means:', opts:['justice','law','court','verdict'], ans:0 },
  { q:'What is "i3ti2aal"?', opts:['arrest','investigation','fine','crime'], ans:0 },
  { q:'"Miraath" means:', opts:['inheritance','ownership','contract','rights'], ans:0 },
  { q:'How do you say "I need a lawyer"?', opts:['biddi mu7aami','biddi ishtkii','hal-3a2d Sa7ii7?','shu l-7ukm?'], ans:0 },
  { q:'"Ghraame" means:', opts:['fine/penalty','crime','arrest','prison'], ans:0 },
  { q:'How do you say "signature"?', opts:['taw2ii3','milkiyye','huwwiyye','3a2d'], ans:0 },
];

const LAW_TIPS = [
  { title:'Lebanon\'s legal system', body:'"2aanoon" (قانون) = law — Lebanon operates under a hybrid legal system combining French civil law (from the Mandate era) with Ottoman traditions and religious personal status law. "Ma7kame" (محكمة) = court. There are separate courts for civil, criminal, religious (for marriage/inheritance), and military matters. "2aaDi" (قاضي) = judge — Lebanese judges are known for independence despite political pressures.' },
  { title:'The lawyer culture', body:'"Mu7aami" (محامي) = lawyer — Lebanon has one of the highest lawyer-to-population ratios in the Arab world. The Beirut Bar Association is the largest professional body. "Biddi mu7aami" = I need a lawyer. Lebanese lawyers are known for dramatic courtroom style. Many politicians are also trained lawyers ("mu7aami"). Law degrees from AUB and USJ are highly respected.' },
  { title:'Personal status law — the confessional system', body:'"Miraath" (ميراث) = inheritance — Lebanon has 18 recognized religious sects, each with its own personal status courts for marriage, divorce, and inheritance. There is no civil marriage in Lebanon — couples sometimes marry abroad. "3a2d" (عقد) = contract — religious marriage contracts are legally binding. "Milkiyye" (ملكية) = ownership — property registration is managed by the Cadastre.' },
  { title:'Police & security forces', body:'"ShurTa" (شرطة) = police — Lebanon has multiple security forces: the Internal Security Forces (ISF), the Army, the General Security. "ShurTi" = police officer. "Ta7kii2" (تحقيق) = investigation. Lebanon\'s security situation has historically been complex — multiple armed groups, political factions, and UN peacekeepers (UNIFIL in the south). "I3ti2aal" = arrest.' },
  { title:'Crime & civil disputes', body:'"Jariime" (جريمة) = crime. "Sar2a" (سرقة) = theft — petty theft in Beirut markets is a concern for tourists. "Ghraame" (غرامة) = fine/penalty. "Da3wa" (دعوى) = lawsuit — Lebanese courts are notoriously slow, with cases taking years. Corruption ("rishwe") is a known issue in some sectors. "Sijin" (سجن) = prison — Roumieh prison near Beirut is Lebanon\'s main facility.' },
  { title:'Documents & rights phrases', body:'"Jawwaaz safar" = passport (essential for Lebanese diaspora travel). "Huwwiyye" = ID card (Lebanese carry national ID). "Taw2ii3" = signature. "7a22i ma7fuuz" = my rights are protected. "Hal-3a2d Sa7ii7?" = is this contract valid? "Biddi ishtkii" = I want to complain. "Shu l-7ukm?" = what is the verdict? (used in everyday disputes, not just courts).' },
];
