// R1154 — BUG FIX: Unconditional recordActivity/incDailyCount/addXp for lpd/idi/emf/frw/num/qwd/slg/clr/fod/bdy
// All 10 pickOpts had recordActivity+incDailyCount only in if(correct) block; now called for every answer
