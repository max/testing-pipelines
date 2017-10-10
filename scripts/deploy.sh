#!/usr/bin/env bash
set -e

cd out
touch .nojekyll

git config --global user.name "Deployment Bot" && \
git config --global user.email "deploy@travis-ci.org"

git init
git add -A
git commit -am "Deploy to GitHub Pages"
git push --force "${GIT_DEPLOY_REPO}" master:gh-pages
