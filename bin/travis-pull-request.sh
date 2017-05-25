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
UPGRADE_RESULT=$(git diff)

if [[ $UPGRADE_RESULT == "" ]]; then
  exit 0
else
  PATCH_NAME=patch-package-upgrade-$(date '+%s')

  # install github hub
  HUB_VERSION=2.2.9
  curl -LO "https://github.com/github/hub/releases/download/v$HUB_VERSION/hub-linux-amd64-$HUB_VERSION.tar.gz"
  tar -C "$HOME" -zxf "hub-linux-amd64-$HUB_VERSION.tar.gz"
  export PATH="$PATH:$HOME/hub-linux-amd64-$HUB_VERSION"


  git config user.name 'kamataryo@travis'
  git config user.email "kamataryo@users.noreply.github.com"
  git remote add origin "git@github.com:$TRAVIS_REPO_SLUG.git"
  git checkout -b $PATCH_NAME
  git add .
  git commit -m "Upgrade package"
  git push origin $PATCH_NAME
  hub pull-request -m "$UPGRADE_RESULT"
fi
