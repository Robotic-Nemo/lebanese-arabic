// R1069 — BUG FIX: DrillReset for syf/phx/arv/dkn/ftn/ski/slr/vnt/nlb/cfs/prw/blk/tnk openX
// Root cause: openX calls setXTab('vocab') but never resets _xDrillIdx/Answered/PickedIdx/Score
