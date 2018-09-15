#!/usr/bin

rm -rI build/
npm run build
cd build
mkdir public
mv * public
firebase init
firebase deploy
cd ..