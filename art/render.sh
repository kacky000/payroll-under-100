#!/bin/bash
# Render art/meme.svg to entry.png (1024x1024) with headless Chrome.
set -e
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/c/Program Files/Google/Chrome/Application/chrome.exe}"
PROFILE="$(mktemp -d)"
"$CHROME" --headless=new --disable-gpu --user-data-dir="$PROFILE" --hide-scrollbars \
  --window-size=1024,1024 --screenshot="$(cygpath -w "$PWD")\\entry.png" \
  "file:///$(cygpath -m "$PWD")/art/meme.svg"
