#!/bin/bash

npx strapi export -f export -k $2
# save all pred files
# check exits these files .api_token .env .keys .secret .admin_secret .salt

if [ -f .api_token ] && [ -f .env ] && [ -f .keys ] && [ -f .secret ] && [ -f .admin_secret ] && [ -f .salt ]; then
  tar -czf $1 .api_token .env .keys .secret .admin_secret .salt backup export.tar.gz.enc
else
  tar -czf $1 export.tar.gz.enc
fi



