// Run #81 — Negation Coach
// Lebanese negation: mish (nominal/adjectival), ma (verbal), la (imperative neg), wala (not even).
// Common learner pitfalls: using mish with verbs, using ma with adjectives, missing la before b-/bta- forms, etc.

const NEG_RULES = [
  { id:'r1', label:'mish + noun/adj/participle', rule:'Use "mish" (مش) for non-verb negation: nouns, adjectives, participles, prepositional phrases.', example_ar:'مش تعبان', example_tr:'mish ta3bān', example_en:'(I\'m) not tired' },
  { id:'r2', label:'ma + verb', rule:'Use "ma" (ما) before a conjugated verb (past, present, future b-/ra7-).', example_ar:'ما راح', example_tr:'ma rā7', example_en:'he did not go' },
  { id:'r3', label:'ma + b-present', rule:'"ma" also precedes the habitual b-present: ma b3ref = I don\'t know.', example_ar:'ما بعرف', example_tr:'ma ba3ref', example_en:'I don\'t know' },
  { id:'r4', label:'la + imperative', rule:'Negative command uses "la" (لا) + imperative (often with suffix -sh or subjunctive form).', example_ar:'لا تروح', example_tr:'la trū7', example_en:'don\'t go' },
  { id:'r5', label:'wala — not even / none', rule:'"wala" (ولا) = not even, none; stronger than ma. Used with nouns/pronouns for emphasis.', example_ar:'ولا واحد', example_tr:'wala wā7ad', example_en:'not even one / nobody' },
  { id:'r6', label:'mish vs ma with participles', rule:'Active participles acting as predicates use "mish" even though they feel verb-like: mish rāye7 = not going.', example_ar:'مش رايح', example_tr:'mish rāye7', example_en:'(I\'m) not going (right now)' },
  { id:'r7', label:'ma 7ada / ma shi', rule:'"ma 7ada" = nobody; "ma shi" = nothing. Double negation is grammatical here.', example_ar:'ما حدا جا', example_tr:'ma 7ada ija', example_en:'nobody came' },
  { id:'r8', label:'mish / mu / mō variation', rule:'Some speakers use "mu" or "mō" instead of "mish" (more northern/Syrian influence). All three are understood.', example_ar:'مو غالي', example_tr:'mū ghāli', example_en:'(it\'s) not expensive' }
];

const NEG_EXERCISES = [
  { id:'ne1',  type:'nominal',    prompt_ar:'أنا تعبان',              prompt_tr:'ana ta3bān',              prompt_en:'I am tired',                  negated_ar:'أنا مش تعبان',         negated_tr:'ana mish ta3bān',           why:'Adjective → mish' },
  { id:'ne2',  type:'verbal',     prompt_ar:'راح عالبيت',             prompt_tr:'rā7 3al-bēt',             prompt_en:'he went home',                negated_ar:'ما راح عالبيت',        negated_tr:'ma rā7 3al-bēt',            why:'Past verb → ma' },
  { id:'ne3',  type:'b-present',  prompt_ar:'بعرف',                   prompt_tr:'ba3ref',                   prompt_en:'I know',                      negated_ar:'ما بعرف',              negated_tr:'ma ba3ref',                  why:'b-present verb → ma' },
  { id:'ne4',  type:'imperative', prompt_ar:'روح',                    prompt_tr:'rū7',                      prompt_en:'go!',                         negated_ar:'لا تروح',              negated_tr:'la trū7',                   why:'Negative command → la + subjunctive' },
  { id:'ne5',  type:'nominal',    prompt_ar:'هيدا كبير',              prompt_tr:'hayda kbīr',              prompt_en:'this is big',                 negated_ar:'هيدا مش كبير',          negated_tr:'hayda mish kbīr',           why:'Adjective predicate → mish' },
  { id:'ne6',  type:'verbal',     prompt_ar:'أكل',                    prompt_tr:'akal',                     prompt_en:'he ate',                      negated_ar:'ما أكل',                negated_tr:'ma akal',                   why:'Past verb → ma' },
  { id:'ne7',  type:'participle', prompt_ar:'رايح عالسوق',            prompt_tr:'rāye7 3as-sū2',            prompt_en:'(I\'m) going to the market',   negated_ar:'مش رايح عالسوق',        negated_tr:'mish rāye7 3as-sū2',        why:'Active participle → mish' },
  { id:'ne8',  type:'imperative', prompt_ar:'كول',                    prompt_tr:'kūl',                      prompt_en:'eat!',                        negated_ar:'لا تاكل',              negated_tr:'la tākol',                  why:'Negative command → la + imperfect' },
  { id:'ne9',  type:'verbal',     prompt_ar:'رح روح',                 prompt_tr:'ra7 rū7',                  prompt_en:'I will go',                   negated_ar:'مش رح روح',            negated_tr:'mish ra7 rū7',              why:'Future "ra7" takes mish, not ma' },
  { id:'ne10', type:'nominal',    prompt_ar:'هوي دكتور',              prompt_tr:'huwwe doktōr',             prompt_en:'he is a doctor',              negated_ar:'هوي مش دكتور',          negated_tr:'huwwe mish doktōr',         why:'Noun predicate → mish' },
  { id:'ne11', type:'emphatic',   prompt_ar:'في حدا',                 prompt_tr:'fī 7ada',                  prompt_en:'there is someone',            negated_ar:'ما في حدا',            negated_tr:'ma fī 7ada',                why:'Existential "fī" → ma fī' },
  { id:'ne12', type:'emphatic',   prompt_ar:'عنده مصاري',             prompt_tr:'3indo maSāri',             prompt_en:'he has money',                negated_ar:'ما عنده مصاري',        negated_tr:'ma 3indo maSāri',           why:'Possessive "3ind" takes ma' },
  { id:'ne13', type:'b-present',  prompt_ar:'بحب القهوة',             prompt_tr:'b7ebb l-2ahwe',            prompt_en:'I love coffee',               negated_ar:'ما بحب القهوة',        negated_tr:'ma b7ebb l-2ahwe',          why:'b-present → ma' },
  { id:'ne14', type:'imperative', prompt_ar:'حكي',                    prompt_tr:'7ki',                      prompt_en:'talk!',                       negated_ar:'لا تحكي',              negated_tr:'la te7ki',                  why:'Negative command → la + subjunctive' },
  { id:'ne15', type:'nominal',    prompt_ar:'الأكل لذيذ',             prompt_tr:'l-akel laðīð',             prompt_en:'the food is delicious',       negated_ar:'الأكل مش لذيذ',         negated_tr:'l-akel mish laðīð',         why:'Adjective predicate → mish' },
  { id:'ne16', type:'emphatic',   prompt_ar:'في شي',                  prompt_tr:'fī shī',                   prompt_en:'there is something',          negated_ar:'ما في شي',             negated_tr:'ma fī shī',                 why:'ma fī shī = nothing' },
  { id:'ne17', type:'verbal',     prompt_ar:'قال الحقيقة',            prompt_tr:'2āl l-7a2ī2a',             prompt_en:'he told the truth',           negated_ar:'ما قال الحقيقة',       negated_tr:'ma 2āl l-7a2ī2a',            why:'Past verb → ma' },
  { id:'ne18', type:'participle', prompt_ar:'واصل',                   prompt_tr:'wāSel',                    prompt_en:'(I\'ve) arrived',              negated_ar:'مش واصل',               negated_tr:'mish wāSel',                why:'Participle → mish' },
  { id:'ne19', type:'b-present',  prompt_ar:'بتشوفني',                prompt_tr:'bitshūfni',                prompt_en:'you see me',                  negated_ar:'ما بتشوفني',           negated_tr:'ma bitshūfni',              why:'b-present → ma' },
  { id:'ne20', type:'imperative', prompt_ar:'تعا',                    prompt_tr:'ta3a',                     prompt_en:'come!',                       negated_ar:'لا تيجي',              negated_tr:'la tīji',                   why:'Negative command uses the subjunctive of "to come" (ji), not ta3a' },
  { id:'ne21', type:'nominal',    prompt_ar:'هيدي فكرة منيحة',        prompt_tr:'haydi fekra mnī7a',        prompt_en:'that\'s a good idea',          negated_ar:'هيدي مش فكرة منيحة',   negated_tr:'haydi mish fekra mnī7a',    why:'Adjective modifying noun in predicate → mish' },
  { id:'ne22', type:'emphatic',   prompt_ar:'عندي وقت',               prompt_tr:'3indi wa2t',               prompt_en:'I have time',                 negated_ar:'ما عندي وقت',          negated_tr:'ma 3indi wa2t',             why:'Possessive → ma' },
  { id:'ne23', type:'verbal',     prompt_ar:'عمل شي',                 prompt_tr:'3emel shī',                prompt_en:'he did something',            negated_ar:'ما عمل شي',            negated_tr:'ma 3emel shī',              why:'Past verb + shī → ma verb shī (nothing)' },
  { id:'ne24', type:'participle', prompt_ar:'فاهم',                   prompt_tr:'fāhem',                    prompt_en:'(I) understand',              negated_ar:'مش فاهم',              negated_tr:'mish fāhem',                why:'Participle → mish' },
  { id:'ne25', type:'b-present',  prompt_ar:'بتحكي عربي',             prompt_tr:'bte7ki 3arabe',            prompt_en:'you speak Arabic',            negated_ar:'ما بتحكي عربي',        negated_tr:'ma bte7ki 3arabe',          why:'b-present → ma' },
  { id:'ne26', type:'nominal',    prompt_ar:'الجو حلو',               prompt_tr:'el-jaww 7elo',             prompt_en:'the weather is nice',         negated_ar:'الجو مش حلو',           negated_tr:'el-jaww mish 7elo',         why:'Adjective predicate → mish' },
  { id:'ne27', type:'emphatic',   prompt_ar:'في حدا هون',             prompt_tr:'fī 7ada hōn',              prompt_en:'there is someone here',       negated_ar:'ما في حدا هون',        negated_tr:'ma fī 7ada hōn',            why:'ma fī 7ada = nobody' },
  { id:'ne28', type:'imperative', prompt_ar:'خود',                    prompt_tr:'khod',                     prompt_en:'take!',                       negated_ar:'لا تاخد',              negated_tr:'la tākhod',                 why:'Negative command → la + subjunctive' }
];

const NEG_TIPS = [
  'Fast rule: verb → ma, everything else → mish. 80% of cases.',
  'Future "ra7" + verb uses mish, not ma: "mish ra7 rū7" (I\'m not going to go).',
  '"ma" also attaches to possessives and existentials: "ma 3indi", "ma fī".',
  'Negative commands use la + imperfect (subjunctive), not la + imperative form.',
  'Active participles (rāye7, fāhem, wāSel) use mish even though they feel like verbs.',
  '"wala" = not even; stronger than ma. "wala wā7ad" = not even one.',
  'mish / mu / mō are dialectal variants — all understood; mish is most Lebanese.'
];
