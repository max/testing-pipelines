#!/bin/sh
set -e

cd out
rm -rf .git static
cp -rL ../static .
touch .nojekyll

git config --global user.name "Travis CI" && \
git config --global user.email "travis@travis-ci.org"

git init
git add .
git commit -m "Deploy to GitHub Pages"
git push --force "${GIT_DEPLOY_REPO}" gh-pages
