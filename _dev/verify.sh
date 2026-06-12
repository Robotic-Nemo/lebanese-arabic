#!/bin/bash
# Verify v2 app: syntax-check all JS files + run probe.
# Usage: bash _dev/verify.sh
set -e
cd "$(dirname "$0")/.."

echo "=== Syntax check ==="
for f in data/*.js js/app.js; do
  node --check "$f" && echo "  OK $f"
done

echo ""
echo "=== Probe ==="
node _dev/probe.js
