#!/bin/bash
cd ~/Software/homepage_node
git remote update
git status
git pull --rebase
rm -rf dist/

cd front-end/build
node r.js -o app.build.js
cd ..
cd ..

mkdir -p dist/back-end/controllers
cp -rf back-end/controllers/ dist/back-end/
cp back-end/server.js dist/back-end/
cp back-end/package.json dist/back-end/

cd dist/front-end
rm -rf build build.txt feeds
cd js
rm -rf collections libs models templates views controller.js router.js vent.js

cd..
cd..

cd back-end
npm install

echo "Build success! Ready to run the server."
