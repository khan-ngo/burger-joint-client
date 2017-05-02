#!/bin/bash

# TOKEN="BAhJIiU0MTI4MmE1MzFjZWI3N2YyMDU4MjQ1YmE4ZDY5NDJhNwY6BkVG--873a6cdad956bff3ea9a7110810e6e536fa669ed"

curl --include --request POST http://localhost:4741/jobs \
  --header "Authorization: Token token=BAhJIiU2NzJhNzhjYTFiN2I4ZTcwODA1OTc0NDE0MTQ5Y2FhZQY6BkVG--5cc2ee99add853c72cdd7883daab421bf067318e" \
  --header "Content-Type: application/json" \
  --data '{
    "job": {
      "task": "clean room"
    }
  }'
