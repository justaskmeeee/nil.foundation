#!/bin/bash

git clone --depth=1 --branch=master git@github.com:NilFoundation/blog.nil.foundation.git blog
cd blog
rm -rf .git
docker build . -t blognilfoundation
docker run -v `pwd`:/srv/jekyll blognilfoundation  jekkyl build
node import_old_post.js
