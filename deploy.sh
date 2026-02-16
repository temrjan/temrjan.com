#!/bin/bash
set -e

echo "=== Building temrjan.com ==="
cd ~/server/temrjan.com
npm run build

echo "=== Done! ==="
echo "Caddy serves from /root/server/temrjan.com/dist/"
echo "Visit: https://temrjan.com"
