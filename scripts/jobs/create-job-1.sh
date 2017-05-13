#!/bin/bash

TOKEN="BAhJIiU3NmU4MGE2MWM4ZjAzNmNhNTA5NTRlNTAyM2E2NzEzYgY6BkVG--55a06eedc2d28ae2fdcd5eb7db6f0f3098de8171"


  curl --include --request POST http://localhost:4741/jobs \
    --header "Authorization: Token token=$TOKEN" \
    --header "Content-Type: application/json" \
    --data '{
      "job": {
        "task": ""
      }
    }'
