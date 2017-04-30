#!/bin/bash

TOKEN =

curl --include --request POST http://localhost:4741/lists \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "task": {
      "name": "Brush teeth"
    }
  }'
