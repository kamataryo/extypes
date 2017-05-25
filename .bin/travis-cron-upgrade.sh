#!/usr/bin/env bash
set -eu

if [[ $TRAVIS_EVENT_TYPE != "cron" || $TRAVIS_BRANCH == "master" ]]; then
  echo 'Deploy perfomed only on cronjob and with master.'
  exit 0
fi

yarn upgrade

if [[ "$(git --no-pager diff)" == "" ]]; then
  echo 'nothing to deploy automatically.'
  exit 0
fi

git config user.name 'kamataryo@travis'
git config user.email "kamataryo@users.noreply.github.com"
git remote remove origin
git remote add origin git@github.com:$TRAVIS_GH_REPO_SLUG.git
git checkout master
git add .
git commit -m "Upgrade package [cron]"

npm test
npm version patch -m "Upgrade package [cron]"
