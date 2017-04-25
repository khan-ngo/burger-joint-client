#!/bin/bash

# EMAIL=test@test.com PASSWORD=test sh ./scripts/sign-in.sh
# EMAIL=1@email.com PASSWORD=pw sh ./scripts/sign-in.sh

  curl --include --request POST http://localhost:4741/sign-in \
    --header "Content-Type: application/json" \
    --data '{
      "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'"
      }
    }'


echo
