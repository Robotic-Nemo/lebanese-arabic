// Run #1694 — BUG FIX: extend init-shuffle to FTR/JRN/BNZ/MUE/SAH/ZIA/COU/MRT/FST/RWC.
// Audit found 10 coaches with all-same a-value AND no render-side shuffle (no
// _xxxLastOpts) — answer always option A or B. Mirrors R1685/R1688/R1691
// Fisher-Yates init-shuffle + a-index remap. Idempotent via __r1694Guard.
//
// FTR=15 drills (a=0 always); JRN/BNZ/MUE=10 each (a=0 always);
// SAH/ZIA/COU/MRT/FST/RWC=10 each (a=1 always). Total 105 drills.
// Excluded: HAM/ACH (R1688-fixed); WSF/RHB (have render-side _xxxLastOpts).

const R1694_BUGFIX = {
  scope: ['FTR_DRILLS','JRN_DRILLS','BNZ_DRILLS','MUE_DRILLS','SAH_DRILLS',
          'ZIA_DRILLS','COU_DRILLS','MRT_DRILLS','FST_DRILLS','RWC_DRILLS'],
  pattern: 'extends R1685/R1688/R1691 init-shuffle',
  expectedDrillsAffected: 105
};
