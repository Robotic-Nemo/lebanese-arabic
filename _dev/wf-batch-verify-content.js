export const meta = {
  name: 'leb-content-batch-verify',
  description: 'Frugal batched verification of round-10 audit flags — 9 light agents (one per batch file) instead of 1 agent per flag',
  phases: [ { title: 'Verify' } ],
}
const LEB = `You are verifying flagged items in a Lebanese-Arabic learning app's teaching data. Goal: REAL spoken LEBANESE (Beirut/Mount-Lebanon), correct translations + transliteration + Arabic script.
CHEATSHEET (violations are errors): 7=ح 2=ء/ق(glottal qaf, NOT q/g/k) 3=ع kh=خ gh=غ S=ص T=ط D=ض DH=ظ. ONLY digits 7/2/3 (NO 5/9). NO Cyrillic homoglyphs (т/а/е/о/с/р/х as Latin lookalikes). NO digits inside Arabic script. Pronouns: ana/inta/inti/howe/hiye/n7na/intu/hinnen; suffixes -i/-ak/-ek/-o/-a/-na/-kon/-(h)on.
LEBANESE vs MSA: shu/keef/wein/eimta/miin/leesh; negation bare ma+verb / mish (NOT laysa, NOT ma...sh); badd-i; future raH/Ha; 3am; b-/m- present; mnee7; halla2. Many words are SHARED MSA+Lebanese — NOT errors. French/English loanwords are normal Lebanese.
BE CONSERVATIVE: real regional/registral variation exists. recommend "fix" ONLY for clear, defensible errors a Lebanese teacher would mark wrong AND where the suggested replacement is itself correct Lebanese, correctly transliterated per the cheatsheet. If a competent Lebanese speaker could reasonably say/write the current form, recommend "keep". If you cannot judge from the given data, recommend "uncertain" — do NOT guess.
WORKFLOW: (1) Read YOUR batch file (path given below) with the Read tool — it is a JSON array of items, each with idx, type, field, current, suggested, explanation (the auditor's claim), and excerpt (the live file context). (2) Judge EVERY item from its excerpt + the claim. Do NOT read any other files — the excerpt is sufficient; items with excerpt:null are judged on linguistic merit alone. (3) End by calling StructuredOutput with one verdict per idx. note <= 15 words. Defend the original first; fix only clear errors.`
const VERDICTS = { type:'object', additionalProperties:false, required:['verdicts'], properties:{ verdicts:{ type:'array', items:{
  type:'object', additionalProperties:false, required:['idx','recommend','suggestionCorrect','note'],
  properties:{ idx:{type:'integer'}, recommend:{type:'string',enum:['fix','keep','uncertain']}, suggestionCorrect:{type:'boolean'}, note:{type:'string'} } } } } }
let paths = args
if(typeof paths === 'string'){ try { paths = JSON.parse(paths) } catch(e) { paths = null } }
if(!Array.isArray(paths) || !paths.length) paths = [0,1].map(b => `/tmp/r11_batch_${b}.json`)
log(`Verifying flags from ${paths.length} batch files, one light agent each`)
phase('Verify')
const results = await parallel(paths.map((p, bi) => () =>
  agent(`${LEB}\n\nYOUR BATCH FILE: ${p}\nRead it now, judge every item, return a verdict for EVERY idx it contains.`,
  { label: `verify-batch:${bi+1}/${paths.length}`, phase: 'Verify', schema: VERDICTS })
))
const flat = results.filter(Boolean).flatMap(r => r.verdicts || [])
return {
  batches: paths.length, judged: flat.length,
  fix: flat.filter(v=>v.recommend==='fix'&&v.suggestionCorrect).length,
  keep: flat.filter(v=>v.recommend==='keep').length,
  uncertain: flat.filter(v=>v.recommend==='uncertain').length,
  verdicts: flat,
}
