#!/bin/bash

TOKEN =

curl --include --request GET http://localhost:4741/lists/ \
  --header "Authorization: Token token=$TOKEN"
