#!/bin/bash

git clone --depth=1 --branch=master git@github.com:NilFoundation/blog.nil.foundation.git blog
set -e
cd blog
rm -rf .git
docker build . -t blognilfoundation
docker run -v `pwd`:/srv/jekyll blognilfoundation  jekyll build
cd ..
node import_old_post.js
