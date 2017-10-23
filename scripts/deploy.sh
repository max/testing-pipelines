#!/usr/bin/env bash
set -e

cd out
touch .nojekyll

git config --global user.name "Max Schoening" && \
git config --global user.email "max@max.wtf"

git init
git add -A
git commit -am "Deploy to GitHub Pages"
git push --force "${GIT_DEPLOY_REPO}" master:gh-pages
