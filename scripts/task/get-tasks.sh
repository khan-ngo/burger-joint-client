#!/bin/bash

TOKEN = "BAhJIiVkYzQwYWM0NmIyZDg3YThlNTNkNjBmZjljZmFlZTRlYQY6BkVG--f4008a2fb83d4604a04ba10b39d4f18db41f3a2c"

curl --include --request GET http://localhost:4741/tasks/ \
  --header "Authorization: Token token=$TOKEN"
