#!/bin/bash

TOKEN = BAhJIiVmYjJlZGFhNDA4ZDk3NDQ5NjM1ODdlM2MxYmZiZGM1OQY6BkVG--261d4f9db182a79a4d66e01962d358bffc1c6b36

curl --include --request POST http://localhost:4741/tasks \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "task": {
      "name": "Brush teeth"
    }
  }'
