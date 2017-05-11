#!/bin/bash

TOKEN="BAhJIiVhMTIyOTBmNTkxNDc3NjM1OWM4ODA4NmNjMDM2M2M3ZAY6BkVG--5cc73b91c06b86205cf9bd609abe2d97ae466f03"


  curl --include --request POST http://localhost:4741/jobs \
    --header "Authorization: Token token=$TOKEN" \
    --header "Content-Type: application/json" \
    --data '{
      "job": {
        "task": ""
      }
    }'
