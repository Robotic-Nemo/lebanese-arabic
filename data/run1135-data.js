// R1135 — BUG FIX: Mass-restore missing speak flags (r430–r1099 era)
// Root cause: multiple speak re-wraps without Object.keys carry-forward dropped
// hundreds of Audio/InternalsOk/chain flags accumulated since R430.
