#!/usr/bin/env bash
# generate token at repository initialization

[ -f ./travis_ecdsa.enc ] && exit 0

GH_REF=$1

KEY_NAME=./.travis_ecdsa
GH_TOKEN=$(cat $HOME/.ghtoken)
NPM_TOKEN=$([[ $(cat $HOME/.npmrc) =~ _authToken=(.*)$ ]] && echo ${BASH_REMATCH[1]})

# create keypair
ssh-keygen -t ecdsa -f $KEY_NAME -q -N ''

# deploy settings
add-deploy-key-to-github --repo "$GH_REF" --key "$KEY_NAME.pub" --token $GH_TOKEN
travis encrypt-file $KEY_NAME
travis encrypt $NPM_TOKEN --add deploy.api_key

# clean up
rm $KEY_NAME
rm $KEY_NAME.pub
