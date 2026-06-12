// Run #105 — Comparatives & Superlatives Coach (CMP)
// Lebanese forms comparatives with the a-F-3-al pattern (أفعل) and marks
// "than" with min (من / منّي / منّك ...). Superlatives reuse the same form,
// usually followed by wa7ad/shi or preceded by the definite article.

const CMP_ADJS = [
  // base → comparative. Regular a-F3al pattern unless flagged irregular.
  { id:'c1',  base_ar:'كبير',  base_tr:'kbir',     comp_ar:'أكبر',  comp_tr:'akbar',   en_base:'big',       en_comp:'bigger',   pattern:'a-F3al' },
  { id:'c2',  base_ar:'صغير',  base_tr:'zghir',    comp_ar:'أصغر',  comp_tr:'asghar',  en_base:'small',     en_comp:'smaller',  pattern:'a-F3al' },
  { id:'c3',  base_ar:'طويل',  base_tr:'Tawil',    comp_ar:'أطول',  comp_tr:'aTwal',   en_base:'tall/long', en_comp:'taller/longer', pattern:'a-F3al' },
  { id:'c4',  base_ar:'قصير',  base_tr:'2aSir',    comp_ar:'أقصر',  comp_tr:'a2Sar',   en_base:'short',     en_comp:'shorter',  pattern:'a-F3al' },
  { id:'c5',  base_ar:'غالي',  base_tr:'ghali',    comp_ar:'أغلى',  comp_tr:'aghla',   en_base:'expensive', en_comp:'more expensive', pattern:'a-F3a (weak-lam)' },
  { id:'c6',  base_ar:'رخيص',  base_tr:'rkhis',    comp_ar:'أرخص',  comp_tr:'arkhas',  en_base:'cheap',     en_comp:'cheaper',  pattern:'a-F3al' },
  { id:'c7',  base_ar:'سريع',  base_tr:'sari3',    comp_ar:'أسرع',  comp_tr:'asra3',   en_base:'fast',      en_comp:'faster',   pattern:'a-F3al' },
  { id:'c8',  base_ar:'بطيء',  base_tr:'bati2',    comp_ar:'أبطأ',  comp_tr:'abTa',    en_base:'slow',      en_comp:'slower',   pattern:'a-F3al' },
  { id:'c9',  base_ar:'حلو',   base_tr:'7ilu',     comp_ar:'أحلى',  comp_tr:'a7la',    en_base:'sweet/nice',en_comp:'sweeter/nicer', pattern:'a-F3a (weak-lam)' },
  { id:'c10', base_ar:'مر',    base_tr:'morr',     comp_ar:'أمر',   comp_tr:'amarr',   en_base:'bitter',    en_comp:'more bitter', pattern:'a-F3al (geminate)' },
  { id:'c11', base_ar:'قوي',   base_tr:'2awi',     comp_ar:'أقوى',  comp_tr:'a2wa',    en_base:'strong',    en_comp:'stronger', pattern:'a-F3a (weak-lam)' },
  { id:'c12', base_ar:'ضعيف',  base_tr:'Da3if',    comp_ar:'أضعف',  comp_tr:'aD3af',   en_base:'weak',      en_comp:'weaker',   pattern:'a-F3al' },
  { id:'c13', base_ar:'جديد',  base_tr:'jdid',     comp_ar:'أجد',   comp_tr:'ajadd',   en_base:'new',       en_comp:'newer',    pattern:'a-F3al (geminate)' },
  { id:'c14', base_ar:'قديم',  base_tr:'2adim',    comp_ar:'أقدم',  comp_tr:'a2dam',   en_base:'old',       en_comp:'older',    pattern:'a-F3al' },
  { id:'c15', base_ar:'قريب',  base_tr:'2arib',    comp_ar:'أقرب',  comp_tr:'a2rab',   en_base:'near',      en_comp:'closer',   pattern:'a-F3al' },
  { id:'c16', base_ar:'بعيد',  base_tr:'b3id',     comp_ar:'أبعد',  comp_tr:'ab3ad',   en_base:'far',       en_comp:'farther',  pattern:'a-F3al' },
  { id:'c17', base_ar:'سهل',   base_tr:'sahl',     comp_ar:'أسهل',  comp_tr:'ashal',   en_base:'easy',      en_comp:'easier',   pattern:'a-F3al' },
  { id:'c18', base_ar:'صعب',   base_tr:'Sa3b',     comp_ar:'أصعب',  comp_tr:'aS3ab',   en_base:'hard',      en_comp:'harder',   pattern:'a-F3al' },
  { id:'c19', base_ar:'مشغول', base_tr:'mashghul', comp_ar:'أشغل',  comp_tr:'ashghal', en_base:'busy',      en_comp:'busier',   pattern:'a-F3al' },
  { id:'c20', base_ar:'مبسوط', base_tr:'mabsuT',   comp_ar:'أبسط',  comp_tr:'absaT',   en_base:'happy',     en_comp:'happier',  pattern:'a-F3al (from root)' },
  { id:'c21', base_ar:'تعبان', base_tr:'ta3ban',   comp_ar:'أتعب',  comp_tr:'at3ab',   en_base:'tired',     en_comp:'more tired', pattern:'a-F3al (from root)' },
  { id:'c22', base_ar:'منيح',  base_tr:'mnih',     comp_ar:'أحسن',  comp_tr:'a7san',   en_base:'good',      en_comp:'better',   pattern:'irregular (suppletive)' },
  { id:'c23', base_ar:'عاطل',  base_tr:'3aaTel',   comp_ar:'أسوأ',  comp_tr:'aswa',    en_base:'bad',       en_comp:'worse',    pattern:'irregular (suppletive)' },
  { id:'c24', base_ar:'شاطر',  base_tr:'shaTer',   comp_ar:'أشطر',  comp_tr:'ashTar',  en_base:'smart/clever', en_comp:'smarter', pattern:'a-F3al' },
  { id:'c25', base_ar:'زاكي',  base_tr:'zaki',     comp_ar:'أزكى',  comp_tr:'azka',    en_base:'tasty',     en_comp:'tastier',  pattern:'a-F3a (weak-lam)' }
];

const CMP_EXAMPLES = [
  // Full sentences: comparative with "min"
  { id:'x1',  ar:'بيتي أكبر من بيتك',         tr:'baiti akbar min baitak',            en:'My house is bigger than yours',           mode:'comp' },
  { id:'x2',  ar:'هالقهوة أغلى من هديك',       tr:'hal2ahwe aghla min hadik',          en:'This coffee is more expensive than that one', mode:'comp' },
  { id:'x3',  ar:'أخي أكبر مني بسنتين',        tr:'akhi akbar menni b-santein',        en:'My brother is older than me by two years', mode:'comp' },
  { id:'x4',  ar:'الطقس اليوم أحسن من مبارح',  tr:'el-Ta2s el-yom a7san min mbare7',  en:"Today's weather is better than yesterday's", mode:'comp' },
  { id:'x5',  ar:'هالطريق أسرع',              tr:'hal-Tari2 asra3',                   en:'This road is faster',                      mode:'comp' },
  { id:'x6',  ar:'منيح إنك أقرب من أختك',     tr:'mnih ennak a2rab min ekhtak',        en:"It's good you're closer than your sister", mode:'comp' },
  // Superlative with wa7ad/shi
  { id:'x7',  ar:'هيدا أحسن واحد',             tr:'hayda a7san wa7ad',                 en:'This is the best one',                     mode:'sup' },
  { id:'x8',  ar:'بيتهم أكبر واحد بالشارع',   tr:'baiton akbar wa7ad bil-shari3',     en:'Their house is the biggest one on the street', mode:'sup' },
  { id:'x9',  ar:'بعطيك أرخص شي عندي',        tr:"ba3Tik arkhas shi 3endi",           en:'I will give you the cheapest thing I have', mode:'sup' },
  { id:'x10', ar:'هالمطعم أحلى مطعم بالبلد',   tr:'hal-maT3am a7la maT3am bil-balad',  en:'This restaurant is the nicest in town',    mode:'sup' },
  // Comparative with attached suffix on min
  { id:'x11', ar:'هوي أشطر منّي',              tr:'howe ashTar menni',                 en:"He's smarter than me",                     mode:'comp' },
  { id:'x12', ar:'هنن أسرع مناكن',             tr:'hinnen asra3 mennkon',              en:"They're faster than you (pl)",             mode:'comp' },
  { id:'x13', ar:'شو في أسوأ من هيك؟',         tr:"shu fi aswa min hek?",              en:"What's worse than that?",                   mode:'comp' },
  { id:'x14', ar:'صار أهدى',                   tr:'Sar ahda',                          en:'He became calmer',                         mode:'comp' },
  { id:'x15', ar:'ما في أطيب من أكل إمك',      tr:"ma fi aTyab min akel emmak",        en:"Nothing is tastier than your mom's food", mode:'comp' }
];

const CMP_EXERCISES = [
  // Pick the correct comparative. Distractors drawn from same-pattern or irregular siblings.
  { id:'e1',  prompt:'big → ?',       answer:'أكبر',  base_ar:'كبير',  choices:['أكبر','أصغر','أطول','أحسن'],      note:'a-F3al from k-b-r' },
  { id:'e2',  prompt:'small → ?',     answer:'أصغر',  base_ar:'صغير',  choices:['أصغر','أكبر','أبعد','أقصر'],     note:'a-F3al from S-gh-r' },
  { id:'e3',  prompt:'expensive → ?', answer:'أغلى',  base_ar:'غالي',  choices:['أغلى','أرخص','أحلى','أقوى'],     note:'weak-lam root → ends in alif-maqsura' },
  { id:'e4',  prompt:'cheap → ?',     answer:'أرخص',  base_ar:'رخيص',  choices:['أرخص','أغلى','أبطأ','أسهل'],     note:'a-F3al from r-kh-s' },
  { id:'e5',  prompt:'fast → ?',      answer:'أسرع',  base_ar:'سريع',  choices:['أسرع','أبطأ','أقوى','أطول'],     note:'a-F3al from s-r-3' },
  { id:'e6',  prompt:'slow → ?',      answer:'أبطأ',  base_ar:'بطيء',  choices:['أبطأ','أسرع','أضعف','أقدم'],     note:'a-F3al with final hamza' },
  { id:'e7',  prompt:'good → ?',      answer:'أحسن',  base_ar:'منيح',  choices:['أحسن','أسوأ','أشطر','أكبر'],     note:'IRREGULAR: 7-s-n stem, not from mnih' },
  { id:'e8',  prompt:'bad → ?',       answer:'أسوأ',  base_ar:'عاطل',  choices:['أسوأ','أحسن','أتعب','أبطأ'],     note:'IRREGULAR: suppletive' },
  { id:'e9',  prompt:'sweet → ?',     answer:'أحلى',  base_ar:'حلو',   choices:['أحلى','أغلى','أقوى','أزكى'],     note:'weak-lam → alif-maqsura' },
  { id:'e10', prompt:'strong → ?',    answer:'أقوى',  base_ar:'قوي',   choices:['أقوى','أضعف','أحلى','أزكى'],     note:'weak-lam root' },
  { id:'e11', prompt:'weak → ?',      answer:'أضعف',  base_ar:'ضعيف',  choices:['أضعف','أقوى','أصغر','أبعد'],     note:'a-F3al from D-3-f' },
  { id:'e12', prompt:'near → ?',      answer:'أقرب',  base_ar:'قريب',  choices:['أقرب','أبعد','أطول','أقصر'],     note:'a-F3al from 2-r-b' },
  { id:'e13', prompt:'far → ?',       answer:'أبعد',  base_ar:'بعيد',  choices:['أبعد','أقرب','أقصر','أطول'],     note:'a-F3al from b-3-d' },
  { id:'e14', prompt:'easy → ?',      answer:'أسهل',  base_ar:'سهل',   choices:['أسهل','أصعب','أسرع','أبسط'],     note:'a-F3al from s-h-l' },
  { id:'e15', prompt:'hard → ?',      answer:'أصعب',  base_ar:'صعب',   choices:['أصعب','أسهل','أقوى','أضعف'],     note:'a-F3al from S-3-b' },
  { id:'e16', prompt:'tasty → ?',     answer:'أزكى',  base_ar:'زاكي',  choices:['أزكى','أحلى','أقوى','أغلى'],     note:'weak-lam root' },
  { id:'e17', prompt:'smart → ?',     answer:'أشطر',  base_ar:'شاطر',  choices:['أشطر','أحسن','أكبر','أسرع'],     note:'a-F3al from sh-T-r' },
  { id:'e18', prompt:'old → ?',       answer:'أقدم',  base_ar:'قديم',  choices:['أقدم','أجد','أكبر','أبعد'],      note:'a-F3al from 2-d-m' },
  { id:'e19', prompt:'new → ?',       answer:'أجد',   base_ar:'جديد',  choices:['أجد','أقدم','أحلى','أسرع'],      note:'geminate assimilation: a-jdad → a-jadd' },
  { id:'e20', prompt:'bitter → ?',    answer:'أمر',   base_ar:'مر',    choices:['أمر','أحلى','أقوى','أسوأ'],      note:'geminate root m-r-r' },
  { id:'e21', prompt:'tall → ?',      answer:'أطول',  base_ar:'طويل',  choices:['أطول','أقصر','أكبر','أبعد'],     note:'a-F3al from T-w-l' },
  { id:'e22', prompt:'short → ?',     answer:'أقصر',  base_ar:'قصير',  choices:['أقصر','أطول','أسرع','أصغر'],     note:'a-F3al from 2-S-r' }
];

const CMP_TIPS = [
  'Lebanese comparative uses one pattern for both "more X" and "the most X" — context disambiguates.',
  'Default pattern: a-F3al (أفعل). Take the 3-letter root, prefix أ, and fit the pattern: kbir → akbar, sari3 → asra3.',
  'Weak-lam roots (ending in ي/و): drop the final letter and add alif-maqsura (ى). ghali → aghla, 7ilu → a7la, 2awi → a2wa.',
  'Geminate roots (doubled last radical): the doubling surfaces without a vowel. jdid → ajadd, morr → amarr.',
  'Irregulars to memorize: mnih → a7san (good→better), 3aaTel → aswa (bad→worse). These are suppletive.',
  '"Than" = min. With pronoun suffix it changes form: menni (than me), mennak (than you-m), mennek (than you-f), menno, menna, menna, menkon, mennon. Double-n shows up in spoken form.',
  'Superlative construction 1: comparative + wa7ad/shi — "a7san wa7ad" (the best one), "arkhas shi" (the cheapest thing).',
  'Superlative construction 2: comparative + noun (definite) — "a7la maT3am" (the nicest restaurant), "akbar bait" (the biggest house). No article needed on the comparative.',
  'Elative doesn\'t agree with gender or number — "akbar" works for he/she/they/it. This is different from base adjectives which do agree.',
  'Common trap: learners over-generalize by putting "aktar" (more) in front of an adjective, MSA-style. In Lebanese, you just use the a-F3al form directly.'
];
