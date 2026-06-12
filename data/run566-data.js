// R566 — BUG FIX: _renderFlrDrill missing completion state guard
// FLR coach used modulo drill access with no "all done" screen — loops forever.
// Fix via IIFE redefining _renderFlrDrill + flrPickOpt.
