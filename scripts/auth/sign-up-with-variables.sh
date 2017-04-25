#!/bin/bash

// EMAIL=ava@bobs.com PASSWORD=hannah sh ./scripts/sign-up-with-variables.sh

  API="${API_ORIGIN:-http://localhost:4741}"
    URL_PATH="/sign-up"
    curl "${API}${URL_PATH}" \
      --include \
      --request POST \
      --header "Content-Type: application/json" \
      --data '{
        "credentials": {
          "email": "'"${EMAIL}"'",
          "password": "'"${PASSWORD}"'",
          "password_confirmation": "'"${PASSWORD}"'"
        }
      }'


# --header "Content-Type: application/x-www-form-urlencoded"

# data output from curl doesn't have a trailing newline
echo
