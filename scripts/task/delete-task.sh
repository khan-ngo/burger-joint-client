#!/bin/bash

ID =
TOKEN =

curl --include --request DELETE http://localhost:4741/tasks/$ID \
  --header "Authorization: Token token=$TOKEN"
