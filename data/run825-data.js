// R825 — NEW FEATURE: Lebanese Political Sarcasm & Street Cynicism (lbp)

const LBP_CATS = ['sarcasm','blame','resignation','rallying'];

const LBP_WORDS = [
  // sarcasm / bitter humor
  { a: 'هيدا لبنان', tr: 'hayde lubnaaan', en: '"This is Lebanon" — resigned/sarcastic acceptance of absurdity', cat: 'sarcasm' },
  { a: 'بالله عليكم', tr: 'billaa 3laykum', en: '"By God / I beg you" — exasperated plea, often sarcastic', cat: 'sarcasm' },
  { a: 'شو هالبلد', tr: 'shu hal-balad', en: '"What a country this is!" — bitter exclamation at dysfunction', cat: 'sarcasm' },
  { a: 'رح يصلحوا', tr: 'ra7 yiSla7u', en: '"They\'ll fix it" — deeply sarcastic (they never will)', cat: 'sarcasm' },
  { a: 'ولا في عالم', tr: 'wala fi 3aalam', en: '"There\'s no one like them" — sarcastic praise of corrupt leaders', cat: 'sarcasm' },
  { a: 'تكرم عيونك', tr: 'tikram 3yuunak', en: '"May your eyes be honored" — polite but often used ironically', cat: 'sarcasm' },
  { a: 'الله يرحمو', tr: 'allaah yir7amu', en: '"God rest him" — used for the country itself: "God rest Lebanon"', cat: 'sarcasm' },
  // blame / frustration
  { a: 'كل واحد وحالو', tr: 'kull waa7ad w-7aalo', en: '"Every man for himself" — Lebanese survival philosophy', cat: 'blame' },
  { a: 'مين بيحكم هون', tr: 'miin bi7kum hoon', en: '"Who runs this place?" — rhetorical, the answer is no one', cat: 'blame' },
  { a: 'هني بس بيحكوا', tr: 'hinne bass bi7ku', en: '"They only talk" — leaders all promises, no action', cat: 'blame' },
  { a: 'سرقونا', tr: 'sara2uuna', en: '"They robbed us" — ubiquitous post-2019 expression about politicians', cat: 'blame' },
  { a: 'مافيا الحكم', tr: 'maafya il-7ukm', en: 'ruling mafia — common street descriptor for the political class', cat: 'blame' },
  { a: 'شعب بلا ذاكرة', tr: 'sha3b bala zaakira', en: '"A people without memory" — self-critical about re-electing same leaders', cat: 'blame' },
  // resignation / dark humor
  { a: 'يلا نشوف', tr: 'yalla nshuf', en: '"Let\'s see what happens" — resigned wait-and-see attitude', cat: 'resignation' },
  { a: 'مش لاقي', tr: 'mish laa2i', en: '"Can\'t find [it]" — no money, no solution, no escape', cat: 'resignation' },
  { a: 'روح عالله', tr: 'ruu7 3a-llaah', en: '"Go to God / good riddance" — dismissal, farewell without hope', cat: 'resignation' },
  { a: 'باقيين هون', tr: 'baa2iin hoon', en: '"We\'re staying here" — stubborn refusal to emigrate despite everything', cat: 'resignation' },
  { a: 'شو منعمل', tr: 'shu mna3mal', en: '"What can we do?" — helpless shrug at systemic problems', cat: 'resignation' },
  { a: 'بدنا نعيش', tr: 'bidna n3iish', en: '"We want to live / we just want to survive"', cat: 'resignation' },
  // rallying / resistance
  { a: 'كلن يعني كلن', tr: 'killen ya3ne killen', en: '"All of them means all of them" — 2019 revolution slogan, all politicians must go', cat: 'rallying' },
  { a: 'ثورة', tr: 'sawra', en: 'revolution — the October 2019 uprising that shook Lebanon', cat: 'rallying' },
  { a: 'الشعب يريد', tr: 'il-sha3b yriid', en: '"The people want [to topple the regime]" — pan-Arab Spring phrase', cat: 'rallying' },
  { a: 'مش خايفين', tr: 'mish khaayfiin', en: '"We\'re not afraid" — protest chant, resilience against intimidation', cat: 'rallying' },
  { a: 'صمود', tr: 'Sumuud', en: 'steadfastness / resilience — the Lebanese ability to endure', cat: 'rallying' },
  { a: 'رح نرجع', tr: 'ra7 nirja3', en: '"We will return / we will come back" — diaspora longing for Lebanon', cat: 'rallying' },
  { a: 'لبنان أقوى', tr: 'lubnaaan a2wa', en: '"Lebanon is stronger" — post-disaster defiance', cat: 'rallying' },
  { a: 'من هون وما رح نمشي', tr: 'min hoon w-ma ra7 nimshi', en: '"From here and we won\'t leave" — occupation-era resistance phrase', cat: 'rallying' },
  { a: 'وقفة عز', tr: 'wa2fit 3izz', en: '"Stand of dignity" — dignified resistance, refusing to bow', cat: 'rallying' }
];

const LBP_DRILLS = [
  { q: 'What does "hayde lubnaaan" express?', opts: ['national pride','sarcastic acceptance of absurdity','political rally cry','revolutionary demand'], ans: 1, exp: '"Hayde lubnaaan" = This is Lebanon — perhaps the most versatile Lebanese expression; covers everything from traffic to power cuts to political scandal with a resigned shrug' },
  { q: '"Killen ya3ne killen" means...', opts: ['"some of them are OK"','"all of them means all of them"','"they will be replaced"','"Lebanon first"'], ans: 1, exp: '"Killen ya3ne killen" = All of them means all of them — the battle cry of the 2019 Lebanese revolution demanding all politicians resign' },
  { q: 'What is "sara2uuna"?', opts: ['"they ignored us"','"they promised us"','"they robbed us"','"they left us"'], ans: 2, exp: '"Sara2uuna" = they robbed us — post-2019 revolution phrase now used to describe how the banking sector and political class stripped ordinary Lebanese of their savings' },
  { q: '"Shu hal-balad" expresses...', opts: ['love for Lebanon','bitter exclamation at dysfunction','desire to emigrate','political support'], ans: 1, exp: '"Shu hal-balad" = What a country! — said with exasperation after yet another crisis; the question is rhetorical, the answer is painful' },
  { q: 'What does "Sumuud" mean?', opts: ['revolution','resignation','steadfastness/resilience','corruption'], ans: 2, exp: 'Sumuud = steadfastness — a concept of dignified endurance in Arabic political culture; for Lebanese it means surviving endless crises without leaving' },
  { q: '"Sha3b bala zaakira" means...', opts: ['"a country without government"','"a people without memory"','"a leader without vision"','"a nation without future"'], ans: 1, exp: '"Sha3b bala zaakira" = a people without memory — self-critical expression used by Lebanese when the same politicians win elections despite causing previous disasters' },
  { q: 'What is "sawra"?', opts: ['resignation','emigration','revolution','corruption'], ans: 2, exp: 'Sawra = revolution — specifically refers to the October 17, 2019 Lebanese uprising when hundreds of thousands filled streets demanding political change' },
  { q: '"Kull waa7ad w-7aalo" means...', opts: ['"we stand together"','"there\'s no solution"','"every man for himself"','"God help us"'], ans: 2, exp: '"Kull waa7ad w-7aalo" = every man for himself — the post-crisis Lebanese survival mode where state collapse forces individuals to fend alone' },
  { q: 'What does "baa2iin hoon" express?', opts: ['desire to emigrate','acceptance of corruption','stubborn refusal to leave Lebanon','apathy about politics'], ans: 2, exp: '"Baa2iin hoon" = we\'re staying here — a statement of defiant belonging despite everything; choosing not to emigrate even when everything pushes people to leave' },
  { q: '"Ra7 yiSla7u" is...', opts: ['a genuine promise','a revolutionary slogan','deeply sarcastic (they never will)','a prayer for the country'], ans: 2, exp: '"Ra7 yiSla7u" = they\'ll fix it — said with heavy irony about politicians\' promises; Beirut\'s infrastructure and electricity have been "about to be fixed" for 30 years' },
  { q: 'What is "maafya il-7ukm"?', opts: ['the revolutionary committee','international mediators','the ruling mafia','the banking sector'], ans: 2, exp: '"Maafya il-7ukm" = ruling mafia — the street term for the Lebanese political-security-business elite that has controlled the country since the Civil War' },
  { q: '"Wa2fit 3izz" means...', opts: ['"military victory"','"dignified stand/resistance"','"political deal"','"national holiday"'], ans: 1, exp: '"Wa2fit 3izz" = stand of dignity — a concept of refusing to be humiliated; refusing to beg, flee, or submit despite overwhelming pressure' },
  { q: 'What does "ra7 nirja3" express?', opts: ['a farewell','emigration decision','diaspora longing / we will return','post-war rebuilding'], ans: 2, exp: '"Ra7 nirja3" = we will return — the phrase of every Lebanese who left; the yearning to come back is a defining feature of the diaspora\'s relationship with home' },
  { q: '"Shu mna3mal" expresses...', opts: ['pride in resilience','helplessness at systemic problems','determination to change','call to emigrate'], ans: 1, exp: '"Shu mna3mal" = what can we do? — the Lebanese shrug at systemic problems too large for individuals to solve; acceptance without quite giving up' },
  { q: 'What is "bidna n3iish"?', opts: ['"we want revolution"','"we want to leave"','"we want to live/survive"','"we want justice"'], ans: 2, exp: '"Bidna n3iish" = we want to live/survive — the baseline demand of a population that by 2021 faced 80%+ poverty; survival replaced political demands' }
];

const LBP_TIPS = [
  'Lebanese political sarcasm is a coping mechanism and art form. The phrase "hayde lubnaaan" (This is Lebanon) can carry infinite meanings — exhausted acceptance, dark humor, defensive pride, or bitter lament — depending on tone. Learning the sarcastic register is essential to understanding daily Lebanese conversation about current events.',
  'The October 17, 2019 revolution ("sawra") was a watershed moment that gave Lebanese political vocabulary a generational update. "Killen ya3ne killen" (all of them means all of them) became the defining slogan — direct, total, refusing to make exception for any political faction, sect, or leader. It remains relevant today.',
  '"Sara2uuna" (they robbed us) became ubiquitous after the 2019 financial collapse. Lebanese lost 80-90% of their bank savings virtually overnight, trapped by capital controls while the political class moved funds abroad. This word captures a specific historical trauma and is used frequently in daily discourse.',
  'Lebanese political language is infused with religious references even in secular contexts. "Billaa 3laykun" (By God, I beg you) and "allaah yir7amu" (God rest him/it) apply to countries, institutions, and situations as naturally as to people. This mixing of sacred and political reflects Lebanon\'s sectarian political structure.',
  '"Sumuud" (steadfastness) is a concept shared across the Arab world but takes on particular Lebanese meaning — surviving without UN intervention, without diaspora aid materializing, without political reform coming. The dark joke is that Lebanon\'s sumuud is really just stubbornness and no better options.',
  '"Ra7 nirja3" (we will return) is the Lebanese diaspora\'s anthem — there are more Lebanese outside Lebanon than inside. The dream of return is real but increasingly complicated by a destroyed economy and ongoing crises. When spoken by someone who just left, it\'s hopeful; when spoken by someone whose family has been away 30 years, it\'s a ritual.'
];
