#!/bin/bash


# ID=1 TOKEN=BAhJIiViMjg2ZWZmMGYyZjMxZGQzYmQ1MzY0OWI2NTcwMzEyMgY6BkVG--00f69b868c204f9187e0a2544b93719e69fddd7a sh ./scripts/sign-out.sh

  API="${API_ORIGIN:-http://localhost:4741}"
  URL_PATH="/sign-out/$ID"
  curl "${API}${URL_PATH}" \
    --include \
    --request DELETE \
    --header "Authorization: Token token=$TOKEN"

# data output from curl doesn't have a trailing newline
echo
