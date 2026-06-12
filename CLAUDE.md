# Lebanese Arabic v2 — Dev Guide for Claude

Always edit **this v2 path**, never `/Users/felipe/claude/lebanese-arabic/` (legacy monolith).

## Architecture

Single-page app, multi-file. `index.html` loads `<script>` tags in this order (`data/*.js` first, `js/app.js` last):

```
data/vocab.js          data/word-data.js       data/grammar-sections.js
data/grammar-exercises.js  data/audio-map.js   data/meta.js
data/conj-verbs.js     data/conversations.js   data/listen-stories.js
data/proverbs.js       data/drills.js          data/cultural.js
data/roots.js          data/contrast.js        data/sounds-extra.js
data/extra-data.js     data/run8-data.js       data/run9-data.js
data/run10-data.js     data/run11-data.js      js/app.js
```

Per-run features add a new `data/runN-data.js` + extend `js/app.js`. Don't refactor existing data files.

## Per-run workflow (6 steps)

1. **TaskCreate** 3 tasks for the run (one per substantial feature). TaskUpdate to `in_progress`.
2. **Write `data/runN-data.js`** with new const arrays/objects. `node --check` it.
3. **Wire `index.html`**: (a) add `<script src="data/runN-data.js">` before `js/app.js`; (b) add study buttons in the `<div>` after Heatmap (search for `openBodyHealth` to find the row); (c) add overlay `<div>`s before existing overlays (search `<!-- DEMONSTRATIVES OVERLAY -->` as anchor).
4. **Append funcs to `js/app.js`** with `cat >> ... << 'APPEND_EOF'`. Pattern: `openX/closeX/setXTab/renderX/xCheck/xNext`. `node --check` after.
5. **Verify** with `node _dev/probe.js` (see below). Confirms new globals/funcs + priors intact.
6. **TaskUpdate** all 3 to `completed`. Report run summary in caveman ultra style: `Run #N done. Added: …. K/100 runs.`

## Naming conventions

Each feature gets a unique 2-4 letter prefix to avoid collisions:
- `mp` was taken by pre-existing minimal pairs → run #6 used `mpx-`
- Used so far: `mpx, vtm, excl, pb, fam, cal, col, cq, bh, dem, idafa, rest, shop, wea, cnd, trv, cnt, sa, apt, sms, gst, sfd, ahw, wed, sup, tnd, vlg, pol, cfc, air, rdm, crs, med, slc, geo, idm, exp, mus, tim, dia, pet, ord, grts, clth, rel, nat, spr, cui, emg, par, flk, fbl, cof, wst, trf, nlf, pwr, mno, blg, nar, cel, alh, bnt, frc, net, flr, prv, hgl, ttl, phn, tme, evl, 7ay, eco, drv, trc, hmr, twl, skl, phr, nyt, rmn, cnx, mhl, mkt, bks, kra, lbn, bgm, ark, jbs, hst, str, nbh, wcp, dly, fnc, dij, grb, jbl, dbk, mdn, ryf, sws, pvg, bky, hrb, cft, sch, mnt, dgt, hme, veg, bhr, zwr, htl, fml, wld, stf, spg, msc, cntv, clmt, art, jwl, law, ast, nwsp, sprt, unv, elc, mig, bty, cns, bkf, grg, wyn, bsp, sdl, sat, mnh, txi, gnr, mec, thw, brb, bur, cin, dnt, eid, imm, ins, nzr, hum, chk, gdn, gms, kds, vnd, frt, dry, emb, nbq, lbp, mzz, qhw, ntf, srk, dlr, psh, wtr, nlt, sfs, trk, vil, aza, rmd, tta, gsp, tbl, olh, bld, wha, eng, fit, flt, crd, sfv, dkn, ftn, ski, bac, slr, vnt, nlb, cfs, prw, bgn, pht, blk, tnk, arv, drg, thr, tpf, arg, mnq, rxs, smc, rev, svc, frs, bkq, tet, mdc, kbt, nos, sth, hmm, saj, nrg, ngo, pst, phx, syf, wap, gld, groc, mrn, dlv, tvs, brs, suk, cok, prk, rnt, chd, crt, sbh, grp, frm, mng, dsr, cmx, hkm, hna, jbn, hkr, nzh, bsl, sfl, ktt, pkl, ftr, jus, xms, bby, brj, bza, mue, khy, frn, fst, rwc`
- **NOTE on 7ay prefix**: JS function names cannot start with digits — use `hay` prefix for functions (`openHay`, `hayPickOpt`), `_7ay` for state vars (`_7ayTab`, `_7ayDrillIdx`), and `7ay` for DOM IDs (`7ay-overlay`) since HTML ids can start with digits.
- **IMPORTANT**: The CLAUDE.md prefix list is incomplete — app.js has 200+ prefixes (var _xyzTab + let _xyzTab). Always grep `_[a-z]*Tab` in app.js to check for conflicts before using a new prefix.
- Pattern: data const = `UPPERCASE`, funcs = `openX/closeX/setXTab/renderX`, DOM ids = `prefix-overlay/prefix-content/prefix-stats/prefix-tab-bar`

## Common pitfalls (already hit)

- **Naming collisions**: Pre-existing const `MINIMAL_PAIRS` clashed with run #6 — renamed new one to `MIN_PAIRS_X`. Always grep app.js for your new const name first.
- **Headless Chrome hangs** on macOS — abandoned. Use Node-based probe instead.
- **`const` block scope in `new Function`**: putting probe code inside same try block where consts declared, or using single combined string. Function decls hoist fine.
- **Cosmetic `audio.pause is not a function`** trailing error from probe is harmless — fires after probe returns. Ignore.
- **`querySelector` returning null** crashed app — stub uses `_mk()` returning fake elem with `.setAttribute/.style.setProperty/.remove/.querySelector:_mk` (recursive).
- **Don't use Headless Chrome**, don't `bumpAchievementCounter` without `&&` guard (it may not exist on first call).

## Verification

Use the saved probe harness:
```bash
node /Users/felipe/claude/lebanese-arabic-v2/_dev/probe.js
```
It prints JSON with all globals + critical func presence checks. Edit the `CHECKS` block in `_dev/probe.js` to add new globals/funcs for the current run.

## Boilerplate to copy

For a new feature `FOO`:

```js
let _fooTab = 'main';
function openFoo(){
  bumpAchievementCounter && bumpAchievementCounter('foo_open');
  const ov = document.getElementById('foo-overlay'); if(!ov) return;
  ov.style.display = 'block';
  setFooTab('main');
}
function closeFoo(){ const ov=document.getElementById('foo-overlay'); if(ov) ov.style.display='none'; }
function setFooTab(t){
  _fooTab = t;
  const bar = document.getElementById('foo-tab-bar');
  if(bar){
    const tabs = [['main','📋 Main'],['drill','🎯 Drill']];
    bar.innerHTML = tabs.map(([k,l]) => `<button class="cat-filter ${_fooTab===k?'active':''}" onclick="setFooTab('${k}')">${l}</button>`).join('');
  }
  renderFoo();
}
function renderFoo(){ /* ... */ }
```

Overlay HTML template:

```html
<div id="foo-overlay" style="display:none;position:fixed;inset:0;background:var(--bg);z-index:300;overflow-y:auto;padding:20px">
  <div style="max-width:880px;margin:0 auto">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px">
      <button class="btn btn-outline" onclick="closeFoo()">✕ Close</button>
      <div style="font-weight:700">🎨 Foo Title</div>
      <div id="foo-stats" style="color:var(--muted);font-size:0.85rem"></div>
    </div>
    <div id="foo-tab-bar" style="display:flex;gap:6px;justify-content:center;margin-bottom:14px;flex-wrap:wrap"></div>
    <div id="foo-content"></div>
  </div>
</div>
```

## Where things live

- **App**: `index.html` (~1400 lines: header/CSS/study-buttons/overlays/script-tags), `js/app.js` (~11.7k lines, append-only zone after run #5), `css/styles.css`
- **Data**: `data/*.js` — all `const X = [...]` style, no exports (browser globals)
- **Audio assets**: `lebanese-audio/`
- **Dev**: `_dev/probe.js` (verify), `_test_load.html` (legacy iframe probe — abandoned)
- **Run log**: `RUNS.md`

## Lebanese transliteration cheatsheet

`7=ح` `2=ء/ق` `3=ع` `kh=خ` `S=ص` `T=ط` `D=ض` `DH=ظ`

Pronouns (8): `ana / inta / inti / howe / hiye / n7na / intu / hinnen`
Suffixes: `-i / -ak / -ek / -o / -a / -na / -kon / -(h)on`
