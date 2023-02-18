#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run generate

# navigate into the build output directory
cd docs

# if you are deploying to a custom domain
echo 'www.thestrategies.net' > CNAME

git init
git add -A
git commit -m 'deploy'

cd -
# RUN sh deploy.sh to build website for GitHub