#!/bin/bash

ID=
TOKEN=

curl --include --request DELETE http://http://localhost:4741/sign-out/$ID \
  --header "Authorization: Token token=$TOKEN"
