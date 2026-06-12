// Run #87 — Pronoun Suffix Coach (PSC)
// Complements Run #13 (possessive suffixes on NOUNS: bayti/baytak/...).
// This run drills the gap: suffixes on VERBS (object clitics) and PREPOSITIONS.
//   - Verb + object: shuft + ak → shuftak ("I saw you-m")
//   - Prep + pronoun: ma3 + i → ma3i ("with me"), la + o → la2o ("for him")
// Lebanese-specific notes:
//   - 3ind + i → 3indi (I have) — the prep becomes the sole "have" verb
//   - la + pronoun often gets glottal: la2i, la2ak, la2o (spelled لإلي/إلو in many texts)
//   - fi (in) + ha → fiyya, + i → fiyyi in some idioms; use fi + o → fi too common
//   - 3ala + i → 3alayy / 3layya, + o → 3lay (vowel-shift preps)
//   - min + o → minno (doubled n), + i → minni
//   - 3am-bshufak vs shuftak: progressive prefix sits before verb stem.

const PSC_PRONOUNS = [
  { pron:'ana',    label:'me / I',    vsuf:'-ni',   psuf:'-i',    gloss:'1sg' },
  { pron:'inta',   label:'you (m)',   vsuf:'-ak',   psuf:'-ak',   gloss:'2ms' },
  { pron:'inti',   label:'you (f)',   vsuf:'-ek',   psuf:'-ek',   gloss:'2fs' },
  { pron:'howe',   label:'him / it',  vsuf:'-o',    psuf:'-o',    gloss:'3ms' },
  { pron:'hiye',   label:'her / it',  vsuf:'-a',    psuf:'-a',    gloss:'3fs' },
  { pron:'n7na',   label:'us',        vsuf:'-na',   psuf:'-na',   gloss:'1pl' },
  { pron:'intu',   label:'you (pl)',  vsuf:'-kon',  psuf:'-kon',  gloss:'2pl' },
  { pron:'hinnen', label:'them',      vsuf:'-(h)on',psuf:'-(h)on',gloss:'3pl' }
];

// Verb-object suffixes. First pronoun ana uses special object marker -ni (not -i).
// All other pronouns reuse the same suffix form for both verb-object and prep.
const PSC_VERBS = [
  { ar:'شفت', tr:'shuft', en:'I saw', root:'sh-f', forms:['shuftni','shuftak','shuftek','shufto','shufta','shuftna','shuftkon','shufton'], note:'1sg object = -ni (not -i)' },
  { ar:'حبيت', tr:'7abbayt', en:'I loved', root:'7-b-b', forms:['7abbaytni','7abbaytak','7abbaytek','7abbayto','7abbayta','7abbaytna','7abbaytkon','7abbayton'] },
  { ar:'عرفت', tr:'3reft', en:'I knew', root:'3-r-f', forms:['3refetni','3reftak','3reftek','3refto','3refta','3reftna','3reftkon','3refton'] },
  { ar:'سألت', tr:'sa2alt', en:'I asked', root:'s-2-l', forms:['sa2altni','sa2altak','sa2altek','sa2alto','sa2alta','sa2altna','sa2altkon','sa2alton'] },
  { ar:'سمعت', tr:'sma3t', en:'I heard', root:'s-m-3', forms:['sma3etni','sma3tak','sma3tek','sma3to','sma3ta','sma3tna','sma3tkon','sma3ton'] },
  { ar:'فهمت', tr:'fhemt', en:'I understood', root:'f-h-m', forms:['fhemetni','fhemtak','fhemtek','fhemto','fhemta','fhemtna','fhemtkon','fhemton'] },
  { ar:'ساعدت', tr:'se3adt', en:'I helped', root:'s-3-d', forms:['se3adetni','se3adtak','se3adtek','se3ado','se3ada','se3adna','se3adkon','se3adon'] },
  { ar:'نسيت', tr:'nsit', en:'I forgot', root:'n-s-y', forms:['nsitni','nsitak','nsitek','nsito','nsita','nsitna','nsitkon','nsiton'] },
  { ar:'ذكرت', tr:'zkart', en:'I remembered', root:'z-k-r', forms:['zkaretni','zkartak','zkartek','zkarto','zkarta','zkartna','zkartkon','zkarton'] },
  { ar:'انتظرت', tr:'nTart', en:'I waited for', root:'n-T-r', forms:['nTaretni','nTartak','nTartek','nTarto','nTarta','nTartna','nTartkon','nTarton'] }
];

// Prepositions with pronoun suffixes. Note special forms:
//   - 3ind + i → 3indi (becomes "have"); 3ind + o → 3indo
//   - la + i → la2i (glottal insertion); la + o → la2o
//   - min + i → minni (doubled n); min + o → minno
//   - 3ala + pronoun: vowel shifts — 3layy(a)/3layk/3lay(a)/3layna/3laykon/3lay(h)on
//   - fi + pronoun: fiyyi/fik/fiki/fi/fiya/fina/fikon/fi(h)on
const PSC_PREPS = [
  { ar:'مع', tr:'ma3', en:'with', forms:['ma3i','ma3ak','ma3ek','ma3o','ma3a','ma3na','ma3kon','ma3on'] },
  { ar:'عند', tr:'3ind', en:'at / have', forms:['3indi','3indak','3indek','3indo','3inda','3indna','3indkon','3indon'], note:'3indi = "I have"' },
  { ar:'لـ', tr:'la', en:'to / for', forms:['la2i','la2ak','la2ek','la2o','la2a','la2na','la2kon','la2on'], note:'glottal insertion: la + pronoun' },
  { ar:'من', tr:'min', en:'from', forms:['minni','minnak','minnek','minno','minna','minna','minnkon','minnon'], note:'doubled n' },
  { ar:'في', tr:'fi', en:'in / at', forms:['fiyyi','fik','fiki','fi','fiya','fina','fikon','fihon'], note:'fi + o contracts to fi' },
  { ar:'على', tr:'3ala', en:'on / about', forms:['3layy','3layk','3layki','3lay','3layha','3layna','3laykon','3layhon'], note:'vowel shift: 3ala → 3lay-' },
  { ar:'إلى', tr:'la7ad', en:'up to / until', forms:['la7addi','la7addak','la7addek','la7addo','la7adda','la7addna','la7addkon','la7addon'] },
  { ar:'قبل', tr:'abel', en:'before', forms:['abli','ablak','ablek','ablo','abla','ablna','ablkon','ablon'] },
  { ar:'بعد', tr:'ba3d', en:'after', forms:['ba3di','ba3dak','ba3dek','ba3do','ba3da','ba3dna','ba3dkon','ba3don'] },
  { ar:'بـ', tr:'b', en:'by / with (instrument)', forms:['fiyyi','fik','fiki','fi','fiya','fina','fikon','fihon'], note:'b- merges into fi- forms for pronominal use' }
];

// Drills: host + target pronoun → correct inflected form.
// kind = 'verb' or 'prep'. Answer is the full inflected word (forms[idx]).
const PSC_EXERCISES = [
  { id:'p1',  kind:'verb', host:'shuft',     pronIdx:1, prompt_en:'I saw you (m)',            ar:'شفتك',      tr:'shuftak',    hint:'verb + -ak' },
  { id:'p2',  kind:'verb', host:'shuft',     pronIdx:3, prompt_en:'I saw him',                ar:'شفتو',      tr:'shufto',     hint:'verb + -o' },
  { id:'p3',  kind:'verb', host:'shuft',     pronIdx:4, prompt_en:'I saw her',                ar:'شفتا',      tr:'shufta',     hint:'verb + -a' },
  { id:'p4',  kind:'verb', host:'shuft',     pronIdx:0, prompt_en:'you (m) saw me',           ar:'شفتني',     tr:'shuftni',    hint:'verb-object 1sg = -ni (not -i)' },
  { id:'p5',  kind:'verb', host:'7abbayt',   pronIdx:2, prompt_en:'I loved you (f)',          ar:'حبيتك',     tr:'7abbaytek',  hint:'verb + -ek' },
  { id:'p6',  kind:'verb', host:'7abbayt',   pronIdx:4, prompt_en:'I loved her',              ar:'حبيتا',     tr:'7abbayta',   hint:'verb + -a' },
  { id:'p7',  kind:'verb', host:'sma3t',     pronIdx:3, prompt_en:'I heard him',              ar:'سمعتو',     tr:'sma3to',     hint:'verb + -o' },
  { id:'p8',  kind:'verb', host:'sma3t',     pronIdx:6, prompt_en:'I heard you (pl)',         ar:'سمعتكن',    tr:'sma3tkon',   hint:'verb + -kon' },
  { id:'p9',  kind:'verb', host:'fhemt',     pronIdx:3, prompt_en:'I understood him',         ar:'فهمتو',     tr:'fhemto',     hint:'verb + -o' },
  { id:'p10', kind:'verb', host:'sa2alt',    pronIdx:1, prompt_en:'I asked you (m)',          ar:'سألتك',     tr:'sa2altak',   hint:'verb + -ak' },
  { id:'p11', kind:'verb', host:'se3adt',    pronIdx:5, prompt_en:'I helped us',              ar:'ساعدنا',    tr:'se3adna',    hint:'verb + -na' },
  { id:'p12', kind:'verb', host:'nsit',      pronIdx:3, prompt_en:'I forgot him',             ar:'نسيتو',     tr:'nsito',      hint:'verb + -o' },
  { id:'p13', kind:'verb', host:'nTart',     pronIdx:2, prompt_en:'I waited for you (f)',     ar:'انتظرتك',   tr:'nTartek',    hint:'verb + -ek' },
  { id:'p14', kind:'verb', host:'3reft',     pronIdx:7, prompt_en:'I knew them',              ar:'عرفتن',     tr:'3refton',    hint:'verb + -(h)on' },

  { id:'p15', kind:'prep', host:'ma3',       pronIdx:0, prompt_en:'with me',                  ar:'معي',       tr:'ma3i',       hint:'ma3 + -i' },
  { id:'p16', kind:'prep', host:'ma3',       pronIdx:1, prompt_en:'with you (m)',             ar:'معك',       tr:'ma3ak',      hint:'ma3 + -ak' },
  { id:'p17', kind:'prep', host:'3ind',      pronIdx:0, prompt_en:'I have (lit: at me)',      ar:'عندي',      tr:'3indi',      hint:'3ind + -i; this is "I have"' },
  { id:'p18', kind:'prep', host:'3ind',      pronIdx:3, prompt_en:'he has (lit: at him)',     ar:'عندو',      tr:'3indo',      hint:'3ind + -o; this is "he has"' },
  { id:'p19', kind:'prep', host:'la',        pronIdx:3, prompt_en:'for him',                  ar:'إلو',       tr:'la2o',       hint:'la + -o → la2o (glottal)' },
  { id:'p20', kind:'prep', host:'la',        pronIdx:0, prompt_en:'for me',                   ar:'إلي',       tr:'la2i',       hint:'la + -i → la2i' },
  { id:'p21', kind:'prep', host:'min',       pronIdx:3, prompt_en:'from him',                 ar:'منو',       tr:'minno',      hint:'min + -o → minno (doubled n)' },
  { id:'p22', kind:'prep', host:'min',       pronIdx:0, prompt_en:'from me',                  ar:'مني',       tr:'minni',      hint:'min + -i → minni' },
  { id:'p23', kind:'prep', host:'3ala',      pronIdx:0, prompt_en:'on me / about me',         ar:'عليّ',       tr:'3layy',      hint:'3ala → 3lay- + pronoun' },
  { id:'p24', kind:'prep', host:'3ala',      pronIdx:3, prompt_en:'on him',                   ar:'عليه',      tr:'3lay',       hint:'3ala + -o contracts to 3lay' },
  { id:'p25', kind:'prep', host:'ba3d',      pronIdx:1, prompt_en:'after you (m)',            ar:'بعدك',      tr:'ba3dak',     hint:'ba3d + -ak' },
  { id:'p26', kind:'prep', host:'abel',      pronIdx:3, prompt_en:'before him',               ar:'قبلو',      tr:'ablo',       hint:'abel + -o' },
  { id:'p27', kind:'prep', host:'fi',        pronIdx:0, prompt_en:'in me',                    ar:'فيّي',       tr:'fiyyi',      hint:'fi + -i → fiyyi' },
  { id:'p28', kind:'prep', host:'fi',        pronIdx:3, prompt_en:'in him / in it (m)',      ar:'فيه',       tr:'fi',         hint:'fi + -o contracts to fi' }
];

const PSC_TIPS = [
  '1sg object on VERBS uses -ni (shuftni, sma3ni), not -i. Prepositions use -i (ma3i, 3indi).',
  '"3indi" is how Lebanese says "I have" — literally "at me". Same pattern: 3indo = he has.',
  '"la + pronoun" inserts a glottal: la2i, la2ak, la2o (often written إلي, إلك, إلو).',
  '"min + pronoun" doubles the n: minni, minnak, minno.',
  '"3ala" shifts stem: 3layy (on me), 3layk (on you m), 3lay (on him), 3layha (on her).',
  '"fi + o" contracts to "fi" (not fio). Listen to audio — the vowel absorbs.',
  'Verb + suffix is stress-neutral in Lebanese, so shuft-ak stays [SHUFtak] — no reaccentuation.'
];
