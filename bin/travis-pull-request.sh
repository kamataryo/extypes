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

yarn global add npm-check-updates

UPGRADE_RESULT=$("$(yarn global bin)/ncu -a")

if [[ $(git diff) == "" ]]; then
  exit 0
else
  PATCH_NAME=patch-package-upgrade-$(date '+%s')

  git config user.name 'kamataryo@travis'
  git config user.email "kamataryo@users.noreply.github.com"
  git remote add origin "git@github.com:$TRAVIS_REPO_SLUG.git"
  git checkout -b $PATCH_NAME
  git add .
  git commit -m "Upgrade package\n\n$UPGRADE_RESULT"
  git push origin $PATCH_NAME
fi
