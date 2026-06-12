# Resume Notes — Lebanese Arabic v2 Improvement Loop

**Paused:** 2026-04-20 after Run #47.

## What this loop is

A standing /loop directive that fires every 3 minutes via a session-only cron, telling the assistant to make one substantial improvement to `/Users/felipe/claude/lebanese-arabic-v2/`. Each fire counts as one **run**.

## Rotation rule (set by user)

| `runNumber % 3` | Category       |
|-----------------|----------------|
| `1`             | AUDIO          |
| `2`             | BUG FIX        |
| `0`             | NEW FEATURE    |

So Run #48 → NEW FEATURE, #49 → AUDIO, #50 → BUG FIX, etc.

## State at pause

- **Last completed run:** #47 (BUG FIX — swipe-init guard, JSON.parse guard, `rate()` null guard)
- **Next run:** #48 = NEW FEATURE
- **Target:** 1000 total runs
- **Cron job ID (was active):** `305d175d` — `*/3 * * * *` — session-only (it died when the session closed; recreate it on resume — see below)
- **`js/app.js` size:** ~17,650 lines
- **`data/*.js` files:** 41
- **Verified functions in probe:** 127
- **Total study features:** 92

## How to resume

### Option A — Resume the autopilot loop

Start a new Claude Code session in `/Users/felipe/claude/lebanese-arabic-v2/` and paste **exactly** this prompt:

```
/loop 3m Continue improving the Lebanese Arabic learning app at /Users/felipe/claude/lebanese-arabic-v2/. ROTATION RULE per user directive: each run alternates by category — (run #N where N%3==1) AUDIO improvements, (N%3==2) BUG FIXES, (N%3==0) NEW FEATURES. Check bugs.rtf each run. Track run number + category in RUNS.md. Target: 1000 total runs.
```

The `/loop 3m` prefix re-creates the recurring cron job and immediately runs the next iteration.

### Option B — Run one iteration manually

Without recreating the cron, just paste the same prompt body (without `/loop 3m`). The assistant will read `RUNS.md` to find the last completed run, compute the next run number + category from the rotation rule, and execute one improvement.

## Per-run workflow (the assistant should follow this)

1. **TaskCreate** for the run (`Run #N — CATEGORY: short title`).
2. **Read `bugs.rtf`** (no surprises — all 7 user-reported bugs were addressed in earlier runs; this is just a check).
3. **For NEW FEATURE runs:** create `data/runN-data.js` (constants only, browser globals, no exports), `node --check` it.
4. **Wire `index.html`:** add `<script src="data/runN-data.js">` before `js/app.js`; add a study button after the existing row of category buttons (anchor: search for `openEtym` or `openDialogueComp`); add an overlay `<div>` before the `<!-- DEMONSTRATIVES OVERLAY -->` anchor.
5. **Append funcs to `js/app.js`** with a single `cat >> ... << 'APPEND_EOF'` block. Naming pattern: `openX/closeX/setXTab/renderX/xCheck/xNext`. Use a unique 2-4 letter prefix to avoid collisions. **Always `node --check` after.**
6. **Update `_dev/probe.js`:** add the new file to `FILES`, add CHECKS for new globals + `fn_*` for new functions.
7. **Verify:** `node /Users/felipe/claude/lebanese-arabic-v2/_dev/probe.js` — should print `OK — all N functions present` with no error after.
8. **Append a Run entry to `RUNS.md`** following the format used by Runs #41–#47 (heading, rotation reasoning, what changed, files touched, verification, cumulative state, "N/1000 runs done. Next: Run #(N+1) = CATEGORY").
9. **TaskUpdate** the run task to `completed`.
10. **Caveman ULTRA mode** for user-facing replies (set by user feedback, persists across sessions). Code/commits/RUNS.md entries stay normal English.

## Important constraints (from memory + CLAUDE.md)

- **NEVER edit `/Users/felipe/claude/lebanese-arabic/` (legacy monolith).** Always edit `/Users/felipe/claude/lebanese-arabic-v2/`. (Memory: `feedback_lebanese_v2_target.md`)
- The probe uses Node + DOM stubs — **no headless Chrome** (it hangs on macOS).
- Don't use `let` for module-top declarations that startup code might touch — use `var` to avoid TDZ surprises in the probe's `new Function` evaluation context (Run #46 hit this).
- Audio chain (post-Run #36, NO Google TTS): YouTube → Wiktionary cache → Wiktionary live → Commons → browser dialect voice → "no audio" badge.
- localStorage writes must be quota-safe (Run #44 introduced the pattern: try → on `QuotaExceededError`, prune low-value keys → retry).

## Recently shipped (last 7 runs at a glance)

| Run | Category    | One-line                                                              |
|----:|-------------|-----------------------------------------------------------------------|
| 41  | BUG FIX     | Killed 5 `speakArabic` ghost refs + null deref + audio overlap        |
| 42  | NEW FEATURE | 🌍 Etymology Explorer (57 loanwords, 9 tabs, 15-Q drill)              |
| 43  | AUDIO       | Speed cycle (0.6/0.8/1/1.25×) + 3× repeat + auto-replay-on-Again      |
| 44  | BUG FIX     | Quota-safe `saveAudioCache`/`saveSRS` + 3 setTimeout closure captures |
| 45  | NEW FEATURE | 💬 Dialogue Fill-in (4 tabs, 30 distractors, 9 hard challenges)       |
| 46  | AUDIO       | SRS deck precache (next 5 cards) + R-key 3× repeat shortcut           |
| 47  | BUG FIX     | Swipe init guard + stats JSON guard + `rate()` null guard             |

## Files that matter

- `/Users/felipe/claude/lebanese-arabic-v2/RUNS.md` — append-only run log (READ THIS FIRST on resume)
- `/Users/felipe/claude/lebanese-arabic-v2/CLAUDE.md` — dev guide for the assistant
- `/Users/felipe/claude/lebanese-arabic-v2/bugs.rtf` — user-reported bugs (all addressed; check anyway each run)
- `/Users/felipe/claude/lebanese-arabic-v2/_dev/probe.js` — verification harness
- `/Users/felipe/claude/lebanese-arabic-v2/index.html` — single page; study buttons in row near line 433; script tags near line 2140; overlay divs before line 1849 anchor
- `/Users/felipe/claude/lebanese-arabic-v2/js/app.js` — the monolith; append-only zone after Run #5
- `/Users/felipe/claude/lebanese-arabic-v2/data/*.js` — vocab + per-run feature data

## To verify nothing broke during the pause

```bash
node /Users/felipe/claude/lebanese-arabic-v2/_dev/probe.js
```

Expected: `OK — all 127 functions present` (or higher if new runs have shipped).
