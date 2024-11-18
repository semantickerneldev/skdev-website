#!/bin/bash

npm i @docusaurus/core@latest @docusaurus/preset-classic@latest @docusaurus/module-type-aliases@latest @docusaurus/types@latest

# in case needed:
#npm cache clean --force
#npm uninstall docusaurus
#npm install docusaurus
#npm cache clean --force
#rm -rf node_modules
npm audit fix

npm cache verify
npm install
npx docusaurus start

# npm run serve
