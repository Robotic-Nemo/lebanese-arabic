// Run #300 — Lebanese Clothes & Fashion Coach (fsh)
// Clothing items, fabrics, shopping phrases, style descriptions, Lebanese fashion culture — 40 items, MCQ drill, 5 tips

const FSH_WORDS = [
  // clothing basics
  { tr: 'badla',           ar: 'بدلة',            en: 'suit / outfit',                   cat: 'clothing' },
  { tr: '2amiiS',          ar: 'قميص',            en: 'shirt',                           cat: 'clothing' },
  { tr: 'banTaloon',       ar: 'بنطلون',          en: 'trousers / pants',                cat: 'clothing' },
  { tr: 'fuuTa',           ar: 'فوطة',            en: 'skirt / towel',                   cat: 'clothing' },
  { tr: 'fustaan',         ar: 'فستان',           en: 'dress',                           cat: 'clothing' },
  { tr: 'kanzuura',        ar: 'كنزورة',          en: 'T-shirt / top',                   cat: 'clothing' },
  { tr: 'jaakiit',         ar: 'جاكيت',           en: 'jacket',                          cat: 'clothing' },
  { tr: 'kabbuut',         ar: 'كبّوت',            en: 'coat / overcoat',                 cat: 'clothing' },
  // shoes & accessories
  { tr: 'sbaT',            ar: 'صباط',            en: 'shoes / footwear',                cat: 'accessories' },
  { tr: 'shanta',          ar: 'شنطة',            en: 'bag / handbag',                   cat: 'accessories' },
  { tr: 'Hzaam',           ar: 'حزام',            en: 'belt',                            cat: 'accessories' },
  { tr: 'krawaata',        ar: 'كرافاتة',         en: 'tie',                             cat: 'accessories' },
  { tr: 'kuffiyye',        ar: 'كوفية',           en: 'headscarf / keffiyeh',            cat: 'accessories' },
  { tr: 'naDDaara',        ar: 'نظارة',           en: 'glasses / sunglasses',            cat: 'accessories' },
  { tr: '3aTr',            ar: 'عطر',             en: 'perfume / cologne',               cat: 'accessories' },
  { tr: 'dhababe',         ar: 'ذهبية',           en: 'gold jewelry / gold piece',       cat: 'accessories' },
  // fabrics & materials
  { tr: '2uTun',          ar: 'قطن',            en: 'cotton',                          cat: 'fabrics' },
  { tr: 'Hariir',          ar: 'حرير',            en: 'silk',                            cat: 'fabrics' },
  { tr: 'Suf',             ar: 'صوف',             en: 'wool',                            cat: 'fabrics' },
  { tr: 'jiild',           ar: 'جلد',             en: 'leather',                         cat: 'fabrics' },
  // shopping phrases
  { tr: 'haydaa mnaasib',  ar: 'هيدا مناسب',       en: 'this is appropriate / suitable',  cat: 'shopping' },
  { tr: 'fikra',           ar: 'فكرة',            en: 'size / idea (in shopping)',        cat: 'shopping' },
  { tr: 'l-maqaas',        ar: 'المقاس',          en: 'the size',                        cat: 'shopping' },
  { tr: 'jarreb',          ar: 'جرّب',             en: 'try on / try it',                 cat: 'shopping' },
  { tr: 'binaasibni',      ar: 'بيناسبني',         en: 'it suits me / fits me',           cat: 'shopping' },
  { tr: 'ma binaasibni',   ar: 'ما بيناسبني',      en: 'it doesn\'t suit / fit me',       cat: 'shopping' },
  { tr: 'gheyyir',         ar: 'غيّر',             en: 'change / exchange (return)',      cat: 'shopping' },
  { tr: '3andkon gheero?', ar: 'عندكن غيرو؟',      en: 'do you have another one?',        cat: 'shopping' },
  // style descriptions
  { tr: 'mriitti2',        ar: 'مريّتق',           en: 'elegant / dressed up',            cat: 'style' },
  { tr: 'shaakk',          ar: 'شاك',             en: 'stylish / chic (m)',              cat: 'style' },
  { tr: 'shaakke',         ar: 'شاكّة',            en: 'stylish / chic (f)',              cat: 'style' },
  { tr: 'Helwe 3aleik',    ar: 'حلوة عليك',        en: 'it looks good on you (f/to f)',   cat: 'style' },
  { tr: 'Helo 3aleik',     ar: 'حلو عليك',         en: 'it looks good on you (m/to m)',   cat: 'style' },
  { tr: '3annak nafs',     ar: 'عنّك نفس',          en: 'you have style / taste',          cat: 'style' },
  // care & cleaning
  { tr: 'ghasal',          ar: 'غسل',             en: 'to wash',                         cat: 'care' },
  { tr: 'kawa',            ar: 'كوى',             en: 'to iron',                         cat: 'care' },
  { tr: 'mkayyef',         ar: 'مكيّف',            en: 'freshly ironed / crisp',          cat: 'care' },
  { tr: 'wasikh',          ar: 'وسخ',             en: 'dirty',                           cat: 'care' },
  { tr: 'nDiif',           ar: 'نضيف',            en: 'clean',                           cat: 'care' },
  { tr: 'Taawle',          ar: 'طاولة',           en: 'ironing board (lit: table)',       cat: 'care' },
];

const FSH_DRILLS = [
  {
    q: 'How do you say "shoes" in Lebanese Arabic?',
    opts: ['shanta', 'sbaT', 'Hzaam', 'kanzuura'],
    correct: 1,
    note: '"sbaT" = shoes/footwear (صباط — from Turkish "çabat"). Lebanese dialect word for any kind of shoes. "2ib2i" = flip-flops. "Kunnash" = sneakers. "Kaa3" = high heels. Lebanese shoe shopping: "addesh l-maqaas tabaa3ak?" (what\'s your shoe size?). Lebanese shoe culture: very image-conscious — shoes matter. Lebanese men and women invest heavily in footwear. "Sbaato bnaadem" (his shoes are elegant) = social compliment. Plural: "sbaaT" or "asbaTa". Shoe shops are everywhere in Beirut neighborhoods.'
  },
  {
    q: 'What does "binaasibni" mean?',
    opts: ['it\'s on sale', 'it suits / fits me', 'I want to try it', 'it\'s my size'],
    correct: 1,
    note: '"binaasibni" = it suits/fits me (بيناسبني — from ناسب = to suit/match). Used for both fit and style. "L-fustaan binaasibni" = the dress suits me. "Ma binaasibni" = it doesn\'t fit/suit me. Related: "naasib" (suitable), "mnaasib" (appropriate). Lebanese shopping phrase toolkit: "jarreb" (try it on), "maqaas tani?" (another size?), "binaasibni, khdo" (it fits, I\'ll take it). Lebanese shop assistants are often very engaged — expect opinions on what suits you.'
  },
  {
    q: 'How do you say "try on" in Lebanese Arabic?',
    opts: ['kawa', 'gheyyir', 'jarreb', 'ghasal'],
    correct: 2,
    note: '"jarreb" = try on / try it (جرّب — from جرب = to try/test). "Jarrbo" = try it on (m). "Jarriibo" = try it on (f). Fitting room: "ghurfit l-2albaas" (literally: clothes room). Lebanese shopping: "in2allab" (try on, more formal), "lawwin" (try = test the color on you). "Jarreb ma3ak" = try it with you (with this other piece). Lebanese fashion culture: mixing and matching pieces, asking friends opinions. Dressing rooms in Lebanese malls are usually communal — expect comments from strangers.'
  },
  {
    q: 'What does "shaakk" mean?',
    opts: ['formal wear', 'stylish / chic', 'a type of fabric', 'well-ironed'],
    correct: 1,
    note: '"shaakk" (m) / "shaakke" (f) = stylish / chic (شاك — from French "chic"). Lebanese fashion compliment. "Inta shaakk kteer" = you\'re very stylish. "Shu shaakke!" = how chic she looks! Lebanese fashion consciousness: Beirut is the fashion capital of the Arab world. Lebanese are image-conscious — being "shaakk" matters socially. Related: "mriitti2" (elegant, dressed up, more formal), "3annak nafs" (you have style/taste). Lebanese fashion brands: a mix of international luxury, local designers (Elie Saab, Zuhair Murad), and street style.'
  },
  {
    q: 'How do you say "bag / handbag" in Lebanese Arabic?',
    opts: ['shanta', 'badla', 'krawaata', 'fustaan'],
    correct: 0,
    note: '"shanta" = bag/handbag (شنطة — from Italian "cianta" or Turkish "çanta"). Used for all types of bags: handbag, backpack, suitcase. "Shantit iid" = handbag (literal: hand bag). "Shantit Daher" = backpack (back bag). "Shantit safar" = suitcase. "Shantit maktab" = briefcase. Lebanese brand consciousness: designer bags are highly visible status symbols. "Shanta taazha" = authentic/original bag (vs fake). "Fatash fi-l-shanta" = searched through the bag. At airport: "kaam shante 3andak?" = how many bags do you have?'
  },
  {
    q: 'What does "mriitti2" mean?',
    opts: ['dirty', 'casual wear', 'elegant / dressed up', 'wrinkled'],
    correct: 2,
    note: '"mriitti2" = elegant/dressed up (مريّتق — from French "élite" with Lebanese twist, or Turkish "murdatık"). The highest Lebanese style compliment — fully put-together. "Shu mriitti2!" = how elegant! Used when someone is dressed for a special occasion. Lebanese dress culture: Lebanese over-dress by global standards — going to a café means looking your best. "Leish mriitti2 kteer?" (why are you so dressed up?) is a normal question. Lebanese wedding guests: everyone comes مريّتق. Lebanese style hierarchy: mriitti2 > shaakk > mnaasib > 3aadi.'
  },
  {
    q: 'How do you say "to iron (clothes)" in Lebanese Arabic?',
    opts: ['ghasal', 'wasikh', 'kawa', 'nDiif'],
    correct: 2,
    note: '"kawa" = to iron (كوى — from Arabic كواء = ironer). "Kawwi l-2amiiS" = iron the shirt. "Mkayyef" = freshly/crisply ironed (مكيّف — lit: conditioned/adjusted). Lebanese clothing care culture: appearing in wrinkled clothes is considered sloppy — "l-2amiiS mikayyef?" (is the shirt ironed?). "Mkayyef" as highest cleanliness compliment: "shu mkayyef!" = how crisp/sharp. Lebanese Sunday ritual: ironing the week\'s clothes. "Makawyaat" = dry cleaning/ironing services. "Jaabli l-2amiiS min makawyaat" = brought the shirt from the dry cleaner.'
  },
  {
    q: 'What does "3annak nafs" mean in fashion context?',
    opts: ['you smell good', 'you have style / taste', 'you\'re overdressed', 'you dress the same always'],
    correct: 1,
    note: '"3annak nafs" = you have style/taste (عنّك نفس — nafs = breath/soul/self). Lebanese compliment meaning you have innate style and class. "Nafs" in this context = that special something, je ne sais quoi. "3andik nafs kteer" = you have great style (to f). Different from "shaakk" (stylish today) — "3annak nafs" = you always have it. Lebanese fashion culture: style is considered a personality trait, not just clothes. Also used for other skills: "3anno nafs bi-l-Tabkh" = he has a touch/skill in cooking.'
  },
  {
    q: 'How do you say "size" (clothing) in Lebanese Arabic?',
    opts: ['maqaas', 'fikra', 'jiild', 'Hzaam'],
    correct: 0,
    note: '"l-maqaas" = the size (المقاس — from قاس = to measure). "Shu maqaasak?" = what\'s your size? "Maqaas kbiir / Zghiir" = big/small size. Lebanese clothing sizes: use European sizing (36, 38, 40...). "Fikra" (idea) is also used informally for size in some Lebanese dialects: "shu fikrtik?" = what\'s your size? Lebanese online shopping: huge growth post-crisis as prices in physical stores became USD-only. "Maqaas wssaT" = medium size. Alterations ("tafsiiS") are common — Lebanese tailors ("khayyaaT") still thrive.'
  },
  {
    q: 'What does "Helwe 3aleik" mean?',
    opts: ['it\'s very expensive', 'it looks good on you (f)', 'she\'s beautiful', 'what a lovely color'],
    correct: 1,
    note: '"Helwe 3aleik" = it looks good on you (حلوة عليك — to a female, about something she\'s wearing). "Helo 3aleik" = to a male. Directly: "beautiful/nice on you." Lebanese fashion feedback culture: Lebanese friends give unsolicited but genuine fashion opinions. "3ateek" (to give you) is also used: "3ateek l-fustaan" = the dress gives you (suits you). "Byerbo3 3aleik" = it looks great on you (literally: it squares/fits). Lebanese compliment language: specific and vocal — saying nothing means disapproval. "Ma bnarribak" = I won\'t tell you (because it doesn\'t suit you).'
  },
];

const FSH_TIPS = [
  { title: 'Lebanese fashion culture — image is everything', body: 'Lebanon, particularly Beirut, is the fashion capital of the Arab world. Lebanese are highly appearance-conscious — even a quick coffee run warrants consideration. Key style vocabulary: "shaakk/shaakke" (chic), "mriitti2" (fully elegant), "3annak nafs" (you have innate style). Lebanese fashion icons: designers Elie Saab, Zuhair Murad, and Rabih Kayrouz put Lebanese fashion on global maps. Daily life: Lebanese regularly comment on each other\'s clothes — it\'s social bonding, not invasive. "Shu libsa hayda?" (what is she wearing?) is said with curiosity and fashion interest, not judgment.' },
  { title: 'Clothing shopping in Lebanon', body: 'Lebanese shopping phrases: "addesh haydaa?" (how much is this?), "fi khaSSam?" (any discount?), "jarribo" (try it on), "binaasibni/ma binaasibni" (suits/doesn\'t suit me), "3andkon maqaas tani?" (do you have another size?), "gheyyro" (exchange it). Shopping areas: Hamra Street (mix of local and chains), ABC Mall and City Centre (international brands), Saifi Village (boutiques), Verdun (mid-range). Post-crisis reality: most stores price in USD now. Vintage/second-hand shops ("2azizé secondhand" culture) have grown. Tailoring is common — Lebanese "khayyaaT" (tailors) do excellent work.' },
  { title: 'Lebanese clothing care vocabulary', body: '"Ghasal" (wash), "kawa" (iron), "nDiif" (clean), "wasikh" (dirty), "mkayyef" (crisply ironed). Lebanese clothing standards: appearing wrinkled is a social faux pas. Ironing is taken seriously — "l-2amiiS mkayyef" (the shirt is crisp) is a point of pride. "Makawyaat" = dry cleaner/ironing service, found in every neighborhood. Fabric care: "2uTun" (cotton — easy care), "Hariir" (silk — delicate), "Suf" (wool — seasonal), "jiild" (leather — status piece). Lebanese saying: "l-libse btbayyin" (the clothing shows) = how you dress reveals who you are.' },
  { title: 'Lebanese accessories and grooming culture', body: 'Accessories are essential in Lebanese style. "Sbaatao/sbaata" (his/her shoes) are noticed and commented on. "Shanta" (bag): designer or high-quality bags are status symbols — authentic ("taazha") vs fake is a known distinction. "3aTr" (perfume) is very important in Lebanese culture — Lebanese men and women use heavy, oriental fragrances. "Shu 3aTrak ktiir!" (your perfume is so nice!) is a genuine compliment. Jewelry: "dhababe" (gold piece), "2eed" (bracelet), "Xaatam" (ring). Lebanese wedding jewelry is elaborate. Grooming: Lebanese visit barbershops/salons very regularly — appearance maintenance is constant.' },
  { title: 'Lebanese style compliments and fashion talk', body: 'Lebanese fashion vocabulary for complimenting: "Helwe/Helo 3aleik" (looks good on you), "binaasibik" (it suits you), "shaakke/shaakk" (chic), "mriitti2" (elegant), "3annak nafs" (you have style). Giving compliments is a Lebanese social skill — be specific: "l-lon (color) binaasib l-3uyuun" (the color matches the eyes). Receiving compliments: Lebanese often deflect with "Allah ybarik fiik" (God bless you) or "tislamm ideik" (bless your hands). Fashion comparison: "Helo kteer minna" (much nicer than this), "ma fi shi yijmalo" (nothing compares to it). Shopping with friends is a social event — expect strong opinions and honest feedback.' },
];

const FSH_ABOUT = 'Master Lebanese Arabic for clothes and fashion — clothing vocabulary, shopping phrases, style descriptions, and Lebanese fashion culture. Essential for shopping in Lebanon\'s vibrant markets, giving style compliments, and navigating the appearance-conscious Lebanese social scene.';
