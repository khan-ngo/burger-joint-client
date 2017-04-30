#!/bin/bash

ID=12
TOKEN=
BAhJIiU0ZDY0MzM3NDk3NThlYzI1NmE1OGFhMmMzMjRlMDIxNwY6BkVG--f20e148b79d35e8171381190ce6cca3211ac865c


curl --include --request DELETE http://localhost:4741/jobs/$ID \
  --header "Authorization: Token token=$TOKEN"
