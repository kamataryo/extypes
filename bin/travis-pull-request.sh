#!/usr/bin/env bash
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
  PATCH_NAME=patch-package-upgrade-$(date '+%s')

  # install GitHub hub
  HUB_VERSION=2.2.9
  HUB_URL="https://github.com/github/hub/releases/download/v"$HUB_VERSION"/hub-linux-arm64-"$HUB_VERSION".tgz"
  curl $HUB_URL > "$HOME/hub.tgz"
  tar zxvf "$HOME/hub.tgz"

  git config user.name 'kamataryo@travis'
  git config user.email "kamataryo@users.noreply.github.com"
  git remote add origin "git@github.com:$TRAVIS_REPO_SLUG.git"
  git checkout -b $PATCH_NAME
  git add .
  git commit -m "Upgrade package"
  git push origin $PATCH_NAME
  $HOME/hub-linux-arm64-2.2.9/bin/hub pull-request -m "Upgrade package"
fi
