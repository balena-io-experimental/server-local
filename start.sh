#!/bin/bash
# Start listening server first
MYPORT=9000 TARGETPORT=8000 node server.js &
# Start triggering server next
MYPORT=8000 TARGETPORT=9000 node server.js
