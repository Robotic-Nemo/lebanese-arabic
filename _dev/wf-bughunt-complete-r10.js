export const meta = {
  name: 'bughunt-complete-r10',
  description: 'Frugal completion of round-10 bug sweep: 2 missing finders (capped) + batched verification of all bugs',
  phases: [ { title: 'Find' }, { title: 'Verify' } ],
}
const ROOT = '/Users/felipe/claude/lebanese-arabic-v2'
const APP = ROOT + '/js/app.js'
const GROUND = `
App: single-page Lebanese Arabic learning app. ${APP} (~136.6k lines, append-only past run #5), data ${ROOT}/data/*.js (browser-global consts), ${ROOT}/index.html. Classic <script> tags.
FIX CONVENTION: append a NEW IIFE at END wrapping a global WINDOW-ONLY: \`if(window.__rNNNNGuard) return; window.__rNNNNGuard=true; var _orig=(typeof window.fn==='function')?window.fn:(typeof fn==='function'?fn:null); if(!_orig)return; window.fn=wrapper;\` Preserve props/toString sentinels. Data-shape bugs: mutate the data global at load. HIGHEST guard now ~__r1778; use __r1779+. NEVER append test code to the live ${APP} — test on a /tmp copy only.
THIS APP HAS HAD 9 BUG-HUNT PASSES (R1726-R1778, ~53 fixes). Do NOT re-flag fixed issues: audio wrong-word/variant collisions; prewarm/abort __none__-poison; daily-challenge; DIA/id-coach/dqr/HML drills; dup VOCAB ids; mistake-journal; achievements; showView; backup/import; getCard; accuracy %; verb/reverse-conj drills; cloze; study hotkeys; playAllConvoLines; root-browser; stats-hero; playRecording; dictation; word-modal recorder; EMF slug; _prgCoachStats; resetProgress; memory-match; markAudioBad; BRB/BUR/FIT distractors; rc/fl/ai/mh/ev + cs/tt/pr double-submit; strict-Lebanese clobber; run30 DL/SV/NAME + FRW drill shapes; dl/sv/nm/sg/ph/fc 600ms window; playPassageAudio cancellation; keysOf over-match; SLE/ZTR/HKW frozen drills; immersion label. KNOWN NON-BUGS: audio coverage gaps.
BUG = wrong user-visible behavior: crash/null-deref, wrong scoring, off-by-one/OOB, NaN in UI, state not reset, double-submit, data-integrity, date/streak miscalc, leaked timers, data loss. NOT: style, micro-perf, theoretical-no-path, probe-guarded. 0 findings is a good result.
FRUGALITY: HARD CAP 6 bugs (clearest, highest-severity). Budget ~30 tool calls; targeted greps over broad reads.
You MUST end by calling StructuredOutput. fixCode = append-only IIFE node --check accepts, placeholder guard __rNNNNGuard (>=1779).`
const FINDINGS = { type:'object', additionalProperties:false, required:['bugs'], properties:{ bugs:{ type:'array', items:{
  type:'object', additionalProperties:false, required:['title','subsystem','file','startLine','endLine','symptom','rootCause','severity','confidence','repro','fixApproach','fixCode','regressionRisk'],
  properties:{ title:{type:'string'},subsystem:{type:'string'},file:{type:'string'},startLine:{type:'integer'},endLine:{type:'integer'},symptom:{type:'string'},rootCause:{type:'string'},severity:{type:'string',enum:['high','medium','low']},confidence:{type:'string',enum:['high','medium','low']},repro:{type:'string'},fixApproach:{type:'string'},fixCode:{type:'string'},regressionRisk:{type:'string'} } } } } }
const BATCH_VERDICTS = { type:'object', additionalProperties:false, required:['verdicts'], properties:{ verdicts:{ type:'array', items:{
  type:'object', additionalProperties:false, required:['idx','isReal','reachable','fixSafe','recommend','reasoning'],
  properties:{ idx:{type:'integer'},isReal:{type:'boolean'},reachable:{type:'boolean'},fixSafe:{type:'boolean'},recommend:{type:'string',enum:['implement','revise','skip']},reasoning:{type:'string'} } } } } }
const FINDERS = [
  { key:'quizzes-drills', lens:`ALL quiz modes + ALL coach drills scoring/state. Sweep for any REMAINING (not in the fixed list): a correct answer rejected or wrong accepted, answer-index/field read wrong, double-answer unguarded, Next past array end, score/state not reset on reopen.` },
  { key:'state-persistence', lens:`STATE / SRS / localStorage / settings / multi-user / first-run. Sweep for: SRS math errors, a load path crashing on corrupt/empty storage without try/catch, a setting read as wrong type/default, user data leaking across profiles, a reset missing keys, writer/reader shape mismatch.` },
]
const VERIFY_GROUND = `${GROUND}\nYou are an adversarial verifier. For EACH bug below: READ the cited lines, default skeptical, try to REFUTE. Check (1) root cause literally true; (2) REAL call path; (3) not already fixed (grep the append zone); (4) fixCode is append-only, idempotent, probe-safe. Budget ~6 tool calls per bug. End with StructuredOutput: one verdict per idx.`
function bugBlock(b, i){ return `--- idx ${i} [sev ${b.severity}/conf ${b.confidence}]\nTITLE: ${b.title}\nFILE: ${b.file}:${b.startLine}-${b.endLine}\nSYMPTOM: ${b.symptom}\nROOT CAUSE: ${b.rootCause}\nREPRO: ${b.repro}\nFIX:\n${b.fixCode}\n` }

phase('Find')
const found = await parallel([
  ...FINDERS.map(f => () =>
    agent(`${GROUND}\n\n=== YOUR SWEEP ===\n${f.lens}\n\nReturn your <=6 clearest CONFIRMED bugs (0 is fine). Exact lines + repro + append-only fixCode (or "NONE"). MUST end by calling StructuredOutput.`,
      { label:`find:${f.key}`, phase:'Find', schema:FINDINGS }).then(r => (r&&r.bugs?r.bugs.map(b=>({...b,finder:f.key})):[]))),
  () => agent(`Read the JSON file /tmp/r10_bugs_cached.json (6 bug candidates found by earlier finder agents — ui-render/audio/data-numeric lenses). Return them EXACTLY as-is via StructuredOutput as the bugs array (map each object's fields verbatim; if a field is missing use "" or 0). Do not re-investigate.`,
      { label:'load:cached-bugs', phase:'Find', schema:FINDINGS }).then(r => (r&&r.bugs?r.bugs.map(b=>({...b,finder:b.finder||'cached'})):[]))
])
const all = found.filter(Boolean).flat()
const seen = new Set(); const dd = []
for(const b of all){ const k=`${b.file}:${Math.round((b.startLine||0)/15)}:${(b.title||'').toLowerCase().slice(0,24)}`; if(seen.has(k))continue; seen.add(k); dd.push(b) }
log(`Find: ${all.length} candidates (incl. cached), ${dd.length} deduped. Verifying in batches…`)
phase('Verify')
const VSIZE = 4
const vbatches = []
for(let i = 0; i < dd.length; i += VSIZE) vbatches.push(dd.slice(i, i + VSIZE).map((b, j) => ({b, idx: i + j})))
const verdictArrays = await parallel(vbatches.map((vb, bi) => () =>
  agent(`${VERIFY_GROUND}\n\n=== BUGS (${vb.length}) ===\n` + vb.map(x => bugBlock(x.b, x.idx)).join('\n'),
    { label:`verify-batch:${bi+1}/${vbatches.length}`, phase:'Verify', schema:BATCH_VERDICTS }).then(r => (r&&r.verdicts)||[])))
const verdicts = verdictArrays.filter(Boolean).flat()
const vmap = {}; verdicts.forEach(v => { vmap[v.idx] = v })
const confirmed = dd.map((b, i) => ({bug: b, verdict: vmap[i]})).filter(x => x.verdict && x.verdict.isReal && x.verdict.reachable && x.verdict.recommend !== 'skip')
return {
  totalFound: all.length, deduped: dd.length, judged: verdicts.length, confirmedCount: confirmed.length,
  confirmed: confirmed.map(x => ({title:x.bug.title,finder:x.bug.finder,file:x.bug.file,lines:`${x.bug.startLine}-${x.bug.endLine}`,severity:x.bug.severity,symptom:x.bug.symptom,rootCause:x.bug.rootCause,repro:x.bug.repro,fixApproach:x.bug.fixApproach,fixCode:x.bug.fixCode,regressionRisk:x.bug.regressionRisk,verdict:x.verdict})),
  rejected: dd.map((b, i) => ({b, v: vmap[i]})).filter(x => !(x.v && x.v.isReal && x.v.reachable && x.v.recommend !== 'skip')).map(x => ({title:x.b.title,recommend:x.v && x.v.recommend, reason:x.v && x.v.reasoning && x.v.reasoning.slice(0,140)})),
}
