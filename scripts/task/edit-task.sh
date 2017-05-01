#!/bin/bash

ID=1
TOKEN=
"BAhJIiVkYzQwYWM0NmIyZDg3YThlNTNkNjBmZjljZmFlZTRlYQY6BkVG--f4008a2fb83d4604a04ba10b39d4f18db41f3a2c"
curl --include --request PATCH http://localhost:4741/tasks/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "task": {
      "name": "Brush teeh again ..."
    }
  }'
