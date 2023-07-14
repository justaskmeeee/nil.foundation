#!/bin/bash

nohup npx strapi start > programm.log 2>&1 & echo $! > run.pid
