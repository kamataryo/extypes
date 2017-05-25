#!/usr/bin/env bash
set -eu

if [[ $TRAVIS_EVENT_TYPE != "cron" ]]; then
  echo 'Deploy perfomed only on cronjob.'
  exit 0
fi


yarn upgrade

if [[ $(git diff) == "" ]]; then
  exit 0
fi

git config user.name 'kamataryo@travis'
git config user.email "kamataryo@users.noreply.github.com"
git remote remove origin
git remote add origin git@github.com:$TRAVIS_GH_REPO_SLUG.git
git add .
git commit -m "Upgrade package"
git push origin master
