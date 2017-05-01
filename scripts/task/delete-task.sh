#!/bin/bash

ID = 1
TOKEN = BAhJIiVlNzFiZjAwYjU1MDFlMjJkMWE4MGU0ZmQ1MDE3YWEzZAY6BkVG--46327f59bd5da53c385ef6e904fbc86e6811570a

curl --include --request DELETE http://localhost:4741/tasks/$ID \
  --header "Authorization: Token token=$TOKEN"
