#!/bin/bash

TOKEN=

curl --include --request GET http://localhost:4741/users \
  --header "Authorization: Token token=$TOKEN"
