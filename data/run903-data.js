// R903 — NEW FEATURE: Lebanese Fortune Telling & Coffee Cup Reading (ftn)

const FTN_WORDS = [
  { ar: 'قراءة الفنجان', tr: '2iraa2et el-finjan', en: 'coffee cup reading / tasseography' },
  { ar: 'فنجان', tr: 'finjan', en: 'coffee cup (used for fortune telling)' },
  { ar: 'تقلب الفنجان', tr: 'ti2lib el-finjan', en: 'flipping the cup (to read fortune)' },
  { ar: 'زهر', tr: 'zahar', en: 'luck / fortune (rolling dice)' },
  { ar: 'بخت', tr: 'bakht', en: 'fate / luck / destiny' },
  { ar: 'نصيب', tr: 'naSiib', en: 'fate / what is destined' },
  { ar: 'طالع', tr: 'Taali3', en: 'horoscope / fortune / what comes up' },
  { ar: 'برج', tr: 'burj', en: 'zodiac sign / star sign' },
  { ar: 'عرّافة', tr: '3arraafe', en: 'fortune teller (woman)' },
  { ar: 'منجّم', tr: 'munajjim', en: 'astrologer / fortune teller' },
  { ar: 'ودع', tr: 'wada3', en: 'cowrie shells (used in fortune telling)' },
  { ar: 'كف اليد', tr: 'kaff el-iid', en: 'palm (palmistry reading)' },
  { ar: 'خط الحياة', tr: 'khaTT el-7ayaat', en: 'the lifeline (palmistry)' },
  { ar: 'طريق طويل', tr: 'Tariiq Tawiil', en: 'long road ahead (fortune sign)' },
  { ar: 'حظ حلو', tr: '7azz 7ilu', en: 'good luck / sweet fortune' },
  { ar: 'حظ عاثر', tr: '7azz 3aatir', en: 'bad luck / rotten fortune' },
  { ar: 'شايف شخص', tr: 'shaayif shakhs', en: 'seeing a person (in the cup — someone coming)' },
  { ar: 'طيرة', tr: 'Tiiyara', en: 'omen / sign (bird or object shape in cup)' },
  { ar: 'دموع', tr: 'dmu3', en: 'tears (shape in cup — sadness coming)' },
  { ar: 'قلب', tr: '2alb', en: 'heart (shape in cup — love coming)' },
  { ar: 'مال', tr: 'maal', en: 'money / wealth (sign in cup)' },
  { ar: 'سفرة', tr: 'safra', en: 'journey / travel (predicted in the cup)' },
  { ar: 'عروسة', tr: '3arouse', en: 'bride figure (in cup — wedding coming)' },
  { ar: 'عين حاسدة', tr: '3ein 7aasde', en: 'evil eye watching (warning sign)' },
  { ar: 'ما بعرف', tr: 'maa ba3rif', en: 'I can\'t tell (fortune teller\'s hedge)' },
  { ar: 'إن شاء الله خير', tr: 'in shaa2 alla kheer', en: 'God willing it\'s good (response to fortune)' },
  { ar: 'اقلب الفنجان', tr: 'i2lib el-finjan', en: 'flip the cup (command to begin reading)' },
  { ar: 'صبري يا حبيبي', tr: 'Sabri yaa 7abiibii', en: 'be patient dear (what the reader says)' }
];

const FTN_DRILLS = [
  { q: 'How do you say "coffee cup reading"?', a: '2iraa2et el-finjan', hint: 'قراءة الفنجان' },
  { q: 'How do you say "fate / what is destined"?', a: 'naSiib', hint: 'نصيب' },
  { q: 'How do you say "luck / fortune"?', a: 'bakht', hint: 'بخت' },
  { q: 'How do you say "zodiac sign"?', a: 'burj', hint: 'برج' },
  { q: 'How do you say "fortune teller (woman)"?', a: '3arraafe', hint: 'عرّافة' },
  { q: 'How do you say "flip the cup" (to start reading)?', a: 'i2lib el-finjan', hint: 'اقلب الفنجان' },
  { q: 'How do you say "good luck"?', a: '7azz 7ilu', hint: 'حظ حلو' },
  { q: 'How do you say "bad luck"?', a: '7azz 3aatir', hint: 'حظ عاثر' },
  { q: 'What does "safra" mean in a reading?', a: 'journey / travel (predicted in the cup)', hint: 'سفرة' },
  { q: 'How do you say "horoscope / what comes up"?', a: 'Taali3', hint: 'طالع' },
  { q: 'What does "3arouse" mean when seen in the cup?', a: 'bride figure (wedding coming)', hint: 'عروسة' },
  { q: 'How do you say "palm (for palmistry)"?', a: 'kaff el-iid', hint: 'كف اليد' },
  { q: 'How do you say "omen / sign"?', a: 'Tiiyara', hint: 'طيرة' },
  { q: 'How do you say "be patient dear" (fortune teller\'s phrase)?', a: 'Sabri yaa 7abiibii', hint: 'صبري يا حبيبي' },
  { q: 'How do you say "God willing it\'s good" (response to fortune)?', a: 'in shaa2 alla kheer', hint: 'إن شاء الله خير' },
  { q: 'How do you say "astrologer"?', a: 'munajjim', hint: 'منجّم' }
];

const FTN_TIPS = [
  { title: 'The Coffee Cup Ritual', body: 'After finishing Lebanese coffee (2ahwe), you flip the cup onto the saucer and wait for it to cool. The fortune teller (3arraafe) then reads the coffee grounds. Shapes, lines, and shadows reveal visitors, journeys, love, and money. The phrase "i2lib el-finjan" signals you are ready to begin.' },
  { title: 'What Shapes Mean', body: 'Common shapes: a heart (2alb) = love is coming; a bird (Tiiyara) = good news or a visitor; tears (dmu3) = sadness ahead; a road (Tariiq) = a journey or long process. The 3arraafe always ends with "Sabri" — patience is the universal advice in Lebanese fortune telling.' },
  { title: 'Bakht vs. NaSiib', body: 'Lebanese distinguish two types of destiny: bakht (بخت) — your general luck, which can be good or bad — and naSiib (نصيب) — specifically what God has written for you, especially in love and marriage. "Maa 7adda naSiibik" means no one can interfere with what is fated for you.' },
  { title: 'The Horoscope Page', body: 'Every Lebanese newspaper runs a Taali3 (طالع) horoscope column. People read their burj (zodiac sign) religiously. The most popular fortune teller in Lebanon is believed to be on TV or radio — their predictions for Lebanon\'s political future draw massive audiences each New Year.' },
  { title: 'The 3arraafe & Evil Eye', body: 'Beyond cup reading, the 3arraafe reads the kaff el-iid (palm) and uses wada3 (cowrie shells) thrown on a cloth. She also warns of the 3ein 7aasde (evil eye) and prescribes protective remedies. Visiting a fortune teller is semi-taboo religiously but widely practiced across all sects.' }
];
