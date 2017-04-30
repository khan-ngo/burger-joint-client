#!/bin/bash

curl --include --request POST http://http://localhost:4741/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "two",
      "password": "two",
      "password_confirmation": "two"
    }
  }'
