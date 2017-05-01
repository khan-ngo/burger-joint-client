#!/bin/bash

ID =
TOKEN =

curl --include --request PATCH http://http://localhost:4741/change-password/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "two",
      "new": "two"
    }
  }'
