#!/bin/bash

# restore the backup
tar -xzf $1
npx strapi import -f export.tar.gz.enc -k $2