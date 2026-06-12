// R584 — BUG FIX: APT/SMS/SFD drill completion state
// All three use combined render/next function pattern with modulo.
// APT + SMS: wrapped by R404 overlay guard; completion check added via new wrapper.
// SFD: no prior wrapper; completion check added directly.
