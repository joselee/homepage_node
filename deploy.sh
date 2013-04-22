#!/bin/bash
cd front-end/build
node r.js -o app.build.js
cd ..
cd ..
mkdir -p dist/back-end/controllers
cp -rf back-end/controllers/ dist/back-end/controllers/
cp back-end/server.js dist/back-end/
cp back-end/package.json dist/back-end/
cd dist/front-end
rm -rf build build.txt feeds
cd js
rm -rf collections libs models templates views controller.js router.js vent.js
