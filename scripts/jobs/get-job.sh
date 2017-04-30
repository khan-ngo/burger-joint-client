#!/bin/bash

TOKEN = BAhJIiU0ZDY0MzM3NDk3NThlYzI1NmE1OGFhMmMzMjRlMDIxNwY6BkVG--f20e148b79d35e8171381190ce6cca3211ac865c

curl --include --request GET http://localhost:4741/jobs/ \
  --header "Authorization: Token token=$TOKEN"
