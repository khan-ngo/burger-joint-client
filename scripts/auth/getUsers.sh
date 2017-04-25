#!/bin/bash

curl --include --request GET http://localhost:4741/users
EMAIL="test@test.com"
PASSWORD="test"
# curl --include --request POST http://localhost:4741/sign-in \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

  echo
