#!/bin/bash
set -e
# Create a token for a user
# Usage: ./create_token.sh <username> <password>

# get port from .env or 1337
port=1337 # default port
if [ -f .env ]; then
  source .env
  port=$PORT
fi

# get username
username=$1

# Get the password from the command line
password=$2

# Create the token for strapi auth
token=$(curl -X POST http://localhost:$port/admin/login \
-H 'Content-Type: application/json' \
-d "{\"email\":\"$username\",\"password\":\"$password\"}" | jq -r '.data.token')



# generate api token
api_token=$(curl http://localhost:$port/admin/api-tokens \
  -H "Authorization: Bearer $token" \
  -H 'Content-Type: application/json' \
  -d "{\"name\":\"public-read-token-$RANDOM\",\"description\":\"generated automatically\",\"type\":\"read-only\",\"lifespan\":null,\"permissions\":null}" | jq -r '.data.accessKey' )

# print api token
echo $api_token
