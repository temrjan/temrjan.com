#!/bin/bash
set -e

echo "=== Building temrjan.com ==="
cd ~/server/temrjan.com
npm run build

echo "=== Deploying to znai-cloud ==="
rsync -avz --delete dist/ znai-cloud:/var/www/temrjan/

echo "=== Done! ==="
echo "Visit: https://temrjan.com"
