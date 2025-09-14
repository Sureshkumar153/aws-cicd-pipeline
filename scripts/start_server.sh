#!/bin/bash
cd /home/ec2-user/nodeapp
node server.js > app.log 2>&1 &

