// R606 — NEW FEATURE: Lebanese Jobs & Work Culture (prefix: jbs)

const JBS_WORDS = [
  // job titles & roles
  { ar: 'موظف', tr: 'mawaDHDHaf', en: 'employee / office worker', cat: 'roles' },
  { ar: 'مدير', tr: 'mudiir', en: 'manager / director', cat: 'roles' },
  { ar: 'محاسب', tr: 'mu7aasib', en: 'accountant', cat: 'roles' },
  { ar: 'مهندس', tr: 'muhandis', en: 'engineer', cat: 'roles' },
  { ar: 'دكتور', tr: 'duktuur', en: 'doctor (also used for PhD)', cat: 'roles' },
  { ar: 'أستاذ', tr: 'ustaaz', en: 'professor / teacher (respectful title)', cat: 'roles' },
  { ar: 'محامي', tr: 'mu7aami', en: 'lawyer', cat: 'roles' },
  { ar: 'صاحب العمل', tr: 'Saa7ib el-3amal', en: 'employer / boss (literally "master of work")', cat: 'roles' },
  // job-seeking
  { ar: 'وظيفة', tr: 'waDHiife', en: 'job / position', cat: 'seeking' },
  { ar: 'سيرة ذاتية', tr: 'siire zaatiyye', en: 'CV / résumé', cat: 'seeking' },
  { ar: 'مقابلة', tr: 'u2aable', en: 'interview (also: "meeting")', cat: 'seeking' },
  { ar: 'شاغر', tr: 'shaagher', en: 'vacancy / open position', cat: 'seeking' },
  { ar: 'راتب', tr: 'raatib', en: 'salary', cat: 'seeking' },
  { ar: 'بدي شتغل', tr: 'baddi shtaghel', en: 'I want to work', cat: 'seeking' },
  // workplace phrases
  { ar: 'شغل', tr: 'shughl', en: 'work / job (casual)', cat: 'workplace' },
  { ar: 'اجتماع', tr: 'ijtimaa3', en: 'meeting', cat: 'workplace' },
  { ar: 'إجازة', tr: 'ijaaze', en: 'vacation / leave / day off', cat: 'workplace' },
  { ar: 'أوفر تايم', tr: 'over time', en: 'overtime', cat: 'workplace' },
  { ar: 'ترقية', tr: 'tar2iye', en: 'promotion', cat: 'workplace' },
  { ar: 'فصل', tr: 'fasl', en: 'fired / dismissed', cat: 'workplace' },
  { ar: 'استقال', tr: 'ista2aal', en: 'resigned / quit', cat: 'workplace' },
  // Lebanese work culture
  { ar: 'واسطة', tr: 'waaSiTa', en: 'connections / wasta (using contacts to get a job)', cat: 'culture' },
  { ar: 'على المشي', tr: '3ala el-mshi', en: 'freelance / on the go (informal work)', cat: 'culture' },
  { ar: 'لازم تعرف حدا', tr: 'laazim ta3ref 7ada', en: 'you need to know someone (hiring reality)', cat: 'culture' },
  { ar: 'بنص الدوام', tr: 'b-noss el-dawwaam', en: 'during work hours (but usually not working)', cat: 'culture' },
  { ar: 'هيدا مش شغلتي', tr: 'heyda mish shughlet-i', en: 'that\'s not my job / not my problem', cat: 'culture' },
  { ar: 'على قد الحال', tr: '3ala 2add el-7aal', en: 'making do / getting by (modest income)', cat: 'culture' },
  { ar: 'اقتصاد الظل', tr: 'i2tiSaad el-Zall', en: 'shadow economy (cash, off the books)', cat: 'culture' },
];

const JBS_DRILLS = [
  {
    q: 'What is واسطة (waaSiTa) and why is it so central to Lebanese work culture?',
    opts: [
      'A formal job application system used by Lebanese government ministries',
      'Using personal connections and relationships to get jobs, contracts, or services — the dominant hiring mechanism in Lebanon, bypassing merit',
      'A Lebanese labor union that represents workers across all sectors',
      'A work permit required for foreigners employed in Lebanon'
    ],
    ans: 1,
    exp: 'waaSiTa (connections/intermediary) is Lebanon\'s parallel hiring system. Who you know determines what job you get — and often what salary, what apartment, what hospital bed. The phrase "laazim ta3ref 7ada" (you need to know someone) is the honest summary of how Lebanon works. waaSiTa operates across all sectors and classes. The Lebanese paradox: a highly educated population, world-class universities (AUB, LAU), yet jobs go to whoever has the right uncle in the right ministry. It\'s simultaneously criticized as corruption and accepted as survival.'
  },
  {
    q: 'Why has Lebanon\'s brain drain (هجرة الأدمغة) accelerated dramatically since 2019?',
    opts: [
      'Lebanese youth increasingly prefer agricultural work, leaving professional jobs vacant',
      'The economic collapse of 2019-2020 made professional salaries worth almost nothing in USD terms, while the Beirut explosion displaced educated professionals — emigration became survival',
      'New Gulf visa policies made it easier for Lebanese workers to relocate, creating a pull effect',
      'Lebanon\'s education system declined, producing graduates who prefer overseas universities'
    ],
    ans: 1,
    exp: 'Lebanon\'s economic collapse (October 2019 revolution, banking crisis, currency collapse) destroyed professional salaries. A doctor earning 3 million LBP per month earned ~$2,000 in 2019, but only ~$100 by 2022 after the lira lost 95%+ of its value. The 2020 Beirut explosion destroyed entire neighborhoods. Engineers, doctors, nurses, lawyers fled to Gulf, Europe, Canada, and Australia. Lebanon lost an estimated 77,000+ professionals in 2021 alone. The "diaspora" grew even faster than usual.'
  },
  {
    q: 'A Lebanese professional says شغلي على المشي (shughli 3ala el-mshi). What does this mean?',
    opts: [
      'They walk to work — Lebanese for commuting by foot',
      'Their work is freelance / project-based — no fixed employer, no office, making income on the move',
      'They are job hunting — looking for work "as they go"',
      'They are constantly busy — their work never stops'
    ],
    ans: 1,
    exp: '3ala el-mshi = literally "on the walking" — used for informal, freelance, or cash-based work with no fixed employer. In Lebanon\'s shadow economy, many people work 3ala el-mshi: a carpenter who takes jobs, a driver who freelances, a consultant who works project-to-project. The phrase captures Lebanon\'s informalization of work — especially after 2019, when formal employment collapsed and many people cobbled together income from multiple informal sources.'
  },
  {
    q: 'What is راتب (raatib) worth in Lebanon\'s post-2019 context?',
    opts: [
      'Salaries remained stable because Lebanon pegged wages to the dollar',
      'Official salaries are now paid partly in USD, partly in lira, after the central bank mandated a mixed payment system',
      'Many government-sector salaries collapsed to less than $100/month equivalent as the lira lost 95%+ of its value, creating a public sector in complete dysfunction',
      'Salaries improved significantly as inflation forced companies to raise wages to keep up'
    ],
    ans: 1,
    exp: 'raatib (salary) became almost meaningless for public sector workers. A Lebanese soldier earning 2.5 million LBP in 2022 was earning about $70 USD — less than the cost of a tank of petrol. Teachers, nurses, and civil servants saw their purchasing power collapse. Private sector salaries denominated in USD or pegged informally to it survived better. The result: mass public sector absenteeism (people working second jobs) and mass migration. Lebanon\'s public institutions operated on skeleton crews.'
  },
  {
    q: 'What is the significance of the title أستاذ (ustaaz) in Lebanese professional culture?',
    opts: [
      'It strictly means university professor — used only in academic contexts',
      'A broad respectful title used for teachers, lawyers, educated professionals, and even strangers as a term of respect — more about social status than specific job',
      'It\'s an honorific reserved exclusively for government officials and politicians',
      'The title means "master tradesman" and is used for skilled craftsmen'
    ],
    ans: 1,
    exp: 'ustaaz = teacher/professor in formal Arabic, but in Lebanese colloquial it\'s a flexible term of respect. Address a lawyer, a schoolteacher, an educated man you\'ve just met, or even a tailor who\'s been in the trade for decades — all might be addressed as ustaaz. It signals that you recognize someone as educated, skilled, or senior. Calling a professional by their title (duktuur for doctor, muhandis for engineer) is equally important — Lebanese professional culture is formally title-conscious.'
  },
  {
    q: 'A colleague says هيدا مش شغلتي (heyda mish shughlet-i). What\'s happening?',
    opts: [
      'They\'re enthusiastically volunteering to take on a new project',
      'Drawing a professional boundary — "that\'s not my job" — can reflect healthy limits or reflect the siloing of responsibilities in Lebanese organizations',
      'They\'re quitting — the phrase is the Lebanese way of submitting a resignation',
      'They\'re asking to be paid more to do extra work'
    ],
    ans: 1,
    exp: 'mish shughlet-i = "not my job/work." Lebanese workplace culture has contradictions: on one hand, intense personal loyalty to a specific boss or patron; on the other hand, rigid demarcation of official roles. In public sector jobs especially, tasks outside one\'s exact job description are often refused. In family businesses, everyone does everything. The phrase can be professional boundary-setting or passive obstruction depending on context. Understanding which you\'re dealing with is key to navigating Lebanese organizations.'
  },
  {
    q: 'What is اقتصاد الظل (i2tiSaad el-Zall) and how large is it in Lebanon?',
    opts: [
      'A theoretical economic model taught in Lebanese universities',
      'The shadow/informal economy — cash-based, undeclared transactions estimated to represent 30-50%+ of Lebanese economic activity',
      'Foreign investment specifically from Lebanese diaspora that bypasses official banking channels',
      'The black market for foreign currency that emerged after the 2019 banking crisis'
    ],
    ans: 1,
    exp: 'The shadow economy in Lebanon is not marginal — it\'s structural. Estimates suggest 30-50% of economic activity is informal/undeclared. After 2019, with banks freezing accounts and the currency collapsing, the shadow economy grew further as people bypassed banks entirely with cash dollar transactions. A landlord demanding fresh dollars in cash, a doctor accepting private payments, a smuggler operating across the Syrian border — all part of the Zall economy. This makes Lebanese GDP figures particularly unreliable.'
  },
  {
    q: 'What does مقابلة (u2aable) mean in a job context, and what are Lebanese interview norms?',
    opts: [
      'A written exam — Lebanese companies prefer written qualification tests to verbal interviews',
      'A job interview — often personal, relationship-focused, and the hiring decision may already be made before you walk in (if waaSiTa is involved)',
      'A contract signing session — the final step before starting work',
      'A probationary work period — "trying out" the candidate for a week'
    ],
    ans: 1,
    exp: 'u2aable = meeting / interview. Lebanese job interviews often combine Western HR practices (CV, formal questions) with relationship-based factors that actually determine the outcome. If waaSiTa brought you in, the interview is a formality. If you\'re unknown, it\'s a real evaluation. Small talk about family connections ("who do you know?", "where are you from?") is normal. Religious and sectarian background, while officially illegal to discriminate on, is often assessed through hometown, school name, and family name. Being from the "right" sect for a specific institution matters.'
  },
  {
    q: 'إجازة (ijaaze) in Lebanese work culture means what, and how much is typical?',
    opts: [
      'Only medical leave — ijaaze refers exclusively to sick days in Lebanese labor law',
      'Vacation / leave — Lebanese labor law grants 15 days paid annual leave, but actual practice varies enormously by sector and employer',
      'A work permit or professional license — required before starting any professional job',
      'A retirement benefit — "ijaaze" refers to pension arrangements'
    ],
    ans: 1,
    exp: 'ijaaze = vacation/leave/day off. Lebanese labor law (Labor Code of 1946, revised) grants 15 days paid annual leave after one year of employment, increasing to 21 days after 5 years. Reality: enforcement is weak, especially in the private sector. Many workers take less. Public sector workers often take more (and sometimes work very little overall). After 2019, many companies informally cut salaries and "compensated" with flexible time. ijaaze is also used for any official break or holiday — both secular and religious.'
  },
  {
    q: 'What does على قد الحال (3ala 2add el-7aal) capture about Lebanese economic reality?',
    opts: [
      'An expression of pride in achieving financial success through hard work',
      'Making do with what you have / getting by — an honest admission of modest means and constrained circumstances, now deeply resonant after economic collapse',
      'A complaint about Lebanese economic inequality and unfair distribution',
      'A saying about saving money for future investment'
    ],
    ans: 1,
    exp: '3ala 2add el-7aal = "according to the situation / making do." Originally a humble acknowledgment that you\'re managing with what you have. After 2019-2022, it took on deeper resonance — a generation of middle-class Lebanese who had stable salaries, savings, and plans found themselves 3ala 2add el-7aal: getting by day-to-day, counting groceries, rationing generator hours. The phrase became a dignity-preserving way to describe circumstances that had become genuinely difficult. The Lebanese capacity to say this phrase with dignity rather than despair is itself cultural data.'
  },
];

const JBS_TIPS = [
  'Lebanese professional culture combines formal titles (muhandis, duktuur, ustaaz) with deeply personal relationship-based work. The most important career advice in Lebanon is "ta3raf 7ada zayn" (know someone good). Networking at university, in your building, at church/mosque, in your village community, and through your family is not optional — it is the career structure. LinkedIn exists but waaSiTa predates it by centuries.',
  'Lebanon\'s official labor law (Labor Code 1946) provides protections that are rarely enforced. Minimum wage (officially set), overtime pay, and leave entitlements apply in theory. In practice, especially in small businesses and domestic work, they\'re widely ignored. Domestic workers (often migrant workers from Ethiopia, Philippines, Sri Lanka) are explicitly excluded from labor law protections and fall under the deeply criticized "kafala" (sponsorship) system.',
  'The Lebanese private sector historically paid well relative to the region. AUB, LAU, and Université Saint-Joseph graduates commanded competitive salaries, and Beirut\'s financial sector attracted regional banks. Post-2019, this collapsed. The question "do you get paid in fresh dollars?" (dollars outside frozen bank accounts) became the primary job evaluation criterion, replacing title, prestige, or career development.',
  'Sectarian distribution of jobs is informal but structured in Lebanon. Government ministries are roughly allocated by sect (Foreign Ministry tends Maronite, Finance Ministry tends Shia, Interior Ministry tends Sunni). This "confessional system" (Ta\'if Agreement 1989) extends into public sector hiring, NGOs, and some private companies. Understanding which institution is associated with which sect is practical knowledge for navigating Lebanese professional life.',
  'Lebanese professionals abroad (especially in the Gulf, West Africa, North America) maintain active connections to Lebanon — remittances ($6+ billion per year, roughly 35% of GDP) are Lebanon\'s largest income source. Lebanese engineers in Saudi Arabia, doctors in Canada, merchants in West Africa all send money home. The diaspora professional identity is distinct: Lebanese enough to send money and visit every summer; global enough to survive the country\'s dysfunction.',
];

const JBS_ABOUT = 'Work in Lebanon is inseparable from family, connections (waaSiTa), sect, and the country\'s ongoing crises. Lebanese work culture is a paradox: extraordinary ambition and education levels alongside structural dysfunction and informal systems that make meritocracy aspirational rather than real. The words waaSiTa (connections), shughl (work), and 3ala 2add el-7aal (making do) tell the story of a labor market shaped by civil war, emigration, patronage networks, and repeated economic collapse — and a people who somehow keep working, studying, and building through it all.';
