// R1049 — BUG FIX: Fix stale r91_wiktFetchSkipsMiss + r91_commonsFetchSkipsMiss probe checks
// Root cause: R929 and R998 wrapped fetchWiktionaryAudio/fetchCommonsAudio with thin
// gen-guard wrappers. The r91 probe checks used String(fn) source inspection for keywords
// (__none__, tried, _wiktQueriesThisSession, __commons__:, _commonsQueriesThisSession)
// that are now hidden inside the wrapped inner functions — causing false BAD results.
// Behavioral tests (r91_wiktSkipsKnownMiss, r91_commonsSkipsKnownMiss, budget checks)
// already pass, confirming the R91 feature works correctly.
// Fix: update the two stale source-inspection checks to verify wrapper presence instead.
