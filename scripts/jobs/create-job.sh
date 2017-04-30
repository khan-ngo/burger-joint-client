#!/bin/bash

TOKEN = BAhJIiVlNzFiZjAwYjU1MDFlMjJkMWE4MGU0ZmQ1MDE3YWEzZAY6BkVG--46327f59bd5da53c385ef6e904fbc86e6811570a

curl --include --request POST http://localhost:4741/jobs \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "job": {
      "task": "clean room"
    }
  }'
