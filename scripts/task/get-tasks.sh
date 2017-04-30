#!/bin/bash

TOKEN =

curl --include --request GET http://localhost:4741/tasks/ \
  --header "Authorization: Token token=$TOKEN"
