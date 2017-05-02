#!/bin/bash

TOKEN=BAhJIiU0Mzc0Njg1NTQwZDZiOTI3MTU2ZTJmMmY1MjUyOTNhMQY6BkVG--a17bc5ef6a1c59a98a84e632c24940d27a24b29f

curl --include --request GET http://localhost:4741/jobs/ \
  --header "Authorization: Token token=$TOKEN"
