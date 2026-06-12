// R986 — BUG FIX: sfx debounce — eliminate R983 double-sfx on 12 pickOpts
// R983 wrapped lpd/idi/emf/frw/num/qwd/slg/clr/fod/bdy/dir/emo which already had sfx.
// Those fns fire sfx internally; R983 outer wrapper fired a second sfx in same tick.
// Fix: debounce sfx() — suppress identical type within 80ms of prior call.
