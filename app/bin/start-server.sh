#!/usr/bin/env bash

set -euo pipefail
#waiting for the server to start
until curl -sSf http://localhost:${PORT:-4000}/api/ping > /dev/null; do
  sleep 5
done

npx craco start
