// R1043 — BUG FIX: Re-wrap r173 answer functions to restore addXp/recordActivity/incDailyCount in toString()
// Root cause: R992 _wrapAns wrapped dpr/neg/qfc/psc/lss/asp/idm/stc answers with anonymous sfx wrapper
// that delegates via .apply() — those wrappers' toString() lacks addXp/recordActivity/incDailyCount.
// R1040 only fixed spdAnswer partially (has addXp in comment but missing recordActivity + _spdScore.correct order).
