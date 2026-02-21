#!/bin/bash

function check_api {
  ENDPOINT=$1
  METHOD=${2:-GET}
  DATA=$3
  
  if [ "$METHOD" = "GET" ]; then
    RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "$ENDPOINT")
  else
    RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" -X "$METHOD" -H "Content-Type: application/json" -d "$DATA" "$ENDPOINT")
  fi
  
  echo "Method: $METHOD, Endpoint: $ENDPOINT -> Status: $RESPONSE"
}

check_api "http://localhost:3000/api/images?query=tech&limit=1"
check_api "http://localhost:3000/api/images/videos?query=tech&limit=1"
check_api "http://localhost:3000/api/ai/domains?query=tech"
check_api "http://localhost:3000/api/ai/chat" "POST" '{"message":"Hi"}'
check_api "http://localhost:3000/api/ai/blog" "POST" '{"prompt":"tech"}'
check_api "http://localhost:3000/api/ai/detail" "POST" '{"context":"tech"}'
check_api "http://localhost:3000/api/contact" "POST" '{"name":"test","email":"test@test.com","subject":"test","message":"test"}'

