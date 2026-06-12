// R1449 — NEW FEATURE: Lebanese Grandparent Culture — Teta & Jeddo (grn)
const GRN_WORDS = [
  {w:'teta',          t:'تيتا',         tr:'grandmother (Teta)',               ex:'teta 3amla tabkha ma bi-t3adla',              et:'Grandma is making a dish that\'s unbeatable'},
  {w:'jeddo',         t:'جدّو',          tr:'grandfather (Jeddo)',              ex:'jeddo bi7ki 3an zamaan l-3izze',              et:'Grandpa talks about the old days of glory'},
  {w:'sett',          t:'ستّ',           tr:'grandmother / lady (older term)',  ex:'l-sett ma7iya tfarji l-masalsal',             et:'Grandma is busy watching the drama'},
  {w:'jedde',         t:'جدّة',          tr:'grandmother (formal)',             ex:'jedde l-3aruse fre7it bel-3irs',              et:'The bride\'s grandmother was happy at the wedding'},
  {w:'jidd',          t:'جدّ',           tr:'grandfather (formal)',             ex:'jidd l-3arees yihki 3arabiye fasee7a',         et:'The groom\'s grandfather speaks Classical Arabic'},
  {w:'3amme',         t:'عمّة',          tr:'paternal aunt / dad\'s sister',    ex:'3ammetna 3am tiji min Amerika l-2isbuu3 l-jay', et:'Our aunt is coming from America next week'},
  {w:'khalto',        t:'خالتو',         tr:'maternal aunt (his/hers)',         ex:'khalto sha3reta 2a7mar w 7elo',               et:'His/her maternal aunt has beautiful red hair'},
  {w:'akbar',         t:'أكبر',          tr:'the eldest / oldest',             ex:'l-akbar bil-3ele mnee7 yidhabb la-teta',       et:'The eldest in the family should go to grandma'},
  {w:'laqqab',        t:'لقّب',          tr:'to nickname / give a title',       ex:'teta laqqabet kill wa7ad bil-3ile',            et:'Grandma gave everyone in the family a nickname'},
  {w:'ba3id 3an l-sharr', t:'بعيد عن الشرّ', tr:'God forbid / touch wood',     ex:'ba3id 3an l-sharr ma shefna menshkilit',      et:'God forbid, we haven\'t had problems (touch wood)'},
  {w:'tul 3omrak',    t:'طول عمرك',      tr:'long life to you / bless you',    ex:'tul 3omrak ya teta, kattaret kherak',         et:'Long life to you, Grandma, may you always be good to us'},
  {w:'7asheyt',       t:'حاشيت',         tr:'God forbid / may it not happen',  ex:'7asheyt ykun fi menshkilit bil-3ile',         et:'God forbid there should be problems in the family'},
  {w:'sallimli',      t:'سلّملي',        tr:'send my regards (to)',             ex:'sallimli 3al jeddo w teta',                  et:'Give my regards to grandpa and grandma'},
  {w:'tabkha',        t:'طبخة',          tr:'a cooked meal / dish',            ex:'teta 3amlet tabkha bel-firin l-yom',          et:'Grandma made a baked dish today'},
  {w:'wara2 3inab',   t:'ورق عنب',       tr:'stuffed vine leaves',             ex:'teta btijhaz wara2 3inab kill jum3a',         et:'Grandma prepares stuffed vine leaves every Friday'},
  {w:'nasee7a',       t:'نصيحة',         tr:'advice / wisdom',                 ex:'nasee7et teta dayman fi maha',                et:'Grandma\'s advice always has wisdom in it'},
  {w:'7addan',        t:'حضن',           tr:'embrace / hug / lap',             ex:'l-awlad byinamo 3a 7addan teta',              et:'The kids sleep on grandma\'s lap'},
  {w:'3allamni',      t:'علّمني',        tr:'taught me / he-she taught me',    ex:'teta 3allamitni 7iyake w tabkha',             et:'Grandma taught me sewing and cooking'},
  {w:'min zamaan',    t:'من زمان',       tr:'from long ago / in the old days', ex:'jeddo byitfakkar min zamaan dayman',          et:'Grandpa always reminisces about the old days'},
  {w:'khiyye',        t:'خيّة',          tr:'sister (affectionate address)',    ex:'khiyye teta hi l-2a7la bel-hayy',             et:'Sister (dear), grandma is the best in the neighborhood'},
];

const GRN_DRILLS = [
  {q:'What is "grandmother" in informal Lebanese Arabic (Teta)?',               opts:['teta','jeddo','sett','jedde'],              ans:'teta'},
  {q:'What is "grandfather" in informal Lebanese Arabic (Jeddo)?',              opts:['jeddo','jidd','sett','akbar'],              ans:'jeddo'},
  {q:'What does "tul 3omrak" mean?',                                            opts:['long life to you','God forbid','send my regards','touch wood'], ans:'long life to you'},
  {q:'What is the Lebanese phrase meaning "God forbid / touch wood"?',          opts:['ba3id 3an l-sharr','sallimli','min zamaan','nasee7a'], ans:'ba3id 3an l-sharr'},
  {q:'What does "wara2 3inab" refer to?',                                       opts:['stuffed vine leaves','a cooked meal','advice','hug'], ans:'stuffed vine leaves'},
  {q:'What does "min zamaan" mean?',                                            opts:['from long ago / in the old days','send regards','eldest','God forbid'], ans:'from long ago / in the old days'},
  {q:'What is "nasee7a"?',                                                      opts:['advice / wisdom','nickname','sister','embrace'], ans:'advice / wisdom'},
  {q:'What word means "embrace / hug / lap" in Lebanese Arabic?',               opts:['7addan','tabkha','khiyye','laqqab'],         ans:'7addan'},
];

const GRN_TIPS = [
  {title:'Teta — The Heart of the Lebanese Home',  body:'The Lebanese Teta (تيتا) is an institution. She is the keeper of recipes, the dispenser of nasee7a (نصيحة wisdom), and the emotional center of the 3ile (عيلة family). Phrases like "teta 3amla tabkha" (grandma is cooking) signal a gathering worth showing up for. Teta\'s wara2 3inab (ورق عنب stuffed vine leaves), kibbeh, and ma3amoul are legendary. In Lebanon, you don\'t compliment a dish without adding "bass ma bi-t3adla teta" (but nothing beats grandma\'s).'},
  {title:'Jeddo — Storyteller & Family Elder',  body:'The Jeddo (جدّو) holds the family history. "Min zamaan" (من زمان from the old days) stories about pre-war Beirut, the Civil War, or village life in the Bekaa are living oral history. Jeddo phrases are measured and poetic: "3ish w-shoof" (live and see), "l-waqt 2afda min d-dahab" (time is more precious than gold). The eldest family member (l-akbar) commands respect — "itfadal ya jidd" (please, grandfather) is said with genuine reverence.'},
  {title:'Grandparent Blessings — The Lebanese Verbal Shield',  body:'Lebanese grandparents bless constantly. "Ba3id 3an l-sharr" (بعيد عن الشر God forbid / touch wood) is said when mentioning anything bad. "7asheyt" (حاشيت) wards off misfortune. "Tul 3omrak" (طول عمرك long life to you) is the warm reply to gratitude. "Allah y7fadak" (God protect you) is layered into daily speech. These phrases form a verbal shield around the family — grandparents teach them to grandchildren as survival tools for Lebanese social life.'},
  {title:'3amme & Khalto — The Extended Family Web',  body:'Lebanese grandparents anchor an extended family system. 3amme (عمّة paternal aunt) and khalto (خالتو maternal aunt) are addressed with their family title, never just by name. Family visits to teta\'s house on Sundays are almost obligatory — missing them requires a medical excuse. Teta gives out laqqab (لقّب nicknames) that stick for life. In Lebanon, you inherit your grandparents\' social reputation: "ibn meen inta?" (whose son are you?) is a real question, and the answer traces back to jeddo.'},
];
