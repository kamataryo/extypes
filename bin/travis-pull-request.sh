#!/usr/bin/env bash

if [[ $CI != "true" && $TRAVIS != "true" ]]; then
  echo 'Not available witout travis CI.'
  exit 0
fi

if [[ $TRAVIS_PULL_REQUEST != "false" ]]; then
  echo 'Not deploying from Pull Request.'
  exit 0
fi

yarn upgrade

if [[ $(git diff) == "" ]]; then
  exit 0
else
  PATCH_NAME=patch__package-upgrade-$(date '+%s')

  # install GitHub hub
  HUB_URL="https://github.com/github/hub/releases/download/v2.2.9/hub-linux-arm64-2.2.9.tgz"
  curl -L $HUB_URL > "$HOME/hub.tgz"
  tar zxvf "$HOME/hub.tgz"
  export PATH="$PATH:$HOME/hub-linux-amd64-$HUB"

  git config user.name 'kamataryo@travis'
  git config user.email "kamataryo@users.noreply.github.com"
  git checkout -b $PATCH_NAME
  git add .
  git commit -m "Upgrade package[ci skip]"
  git remote add upstream git@github.com:$TRAVIS_GH_REPO_SLUG.git
  git push upstream $PATCH_NAME
  ls $HOME/hub-linux-arm64-2.2.9/bin/hub
  ls $HOME/hub-linux-arm64-2.2.9/bin
  ls $HOME/hub-linux-arm64-2.2.9
  ls $HOME
  $HOME/hub-linux-arm64-2.2.9/bin/hub pull-request -m "Upgrade package"
fi
