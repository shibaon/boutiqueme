#!/bin/bash

cd next && npm run build
cd ..

tar -czf archive.tar.gz next/.next next/package.json next/package-lock.json next/public

scp archive.tar.gz boutiqueme@boutiqueme.ru:/home/boutiqueme/app

ssh boutiqueme@boutiqueme.ru "cd ~/app && tar -xzf archive.tar.gz && cd next && npm ci && pm2 restart boutiqueme-next"
