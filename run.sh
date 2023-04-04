#!/bin/bash

./script/database/01_database/deploydb.sh $DATABASE_HOST $DATABASE_PORT $DATABASE_USERNAME $DATABASE_PASSWORD
echo "deploydb.sh script Execution Complete"

forever list
forever -s ./dist/main.js
forever list