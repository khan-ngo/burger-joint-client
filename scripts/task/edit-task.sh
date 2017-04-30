#!/bin/bash

ID =
TOKEN =

curl --include --request PATCH http://localhost:4741/tasks/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "task": {
      "name": "Brush teeh again ..."
    }
  }'
