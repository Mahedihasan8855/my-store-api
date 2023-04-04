#!/bin/bash

echo "Started ..."
date

DATABASE_HOST=$1
DATABASE_HOST=${DATABASE_HOST:-127.0.0.1}
DATABASE_PORT=$2
DATABASE_PORT=${DATABASE_PORT:-3306}
DATABASE_USERNAME=$3
DATABASE_USERNAME=${DATABASE_USERNAME:-root1}
DATABASE_PASSWORD=$4;
DATABASE_PASSWORD=${DATABASE_PASSWORD:-VeryStrongPassword_0}

database="hf_web3_db"

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

db_script_execution_list="${SCRIPT_DIR}/execute-order-list-1.0.txt"

echo $db_script_execution_list

while IFS= read -r var
do
  [[ $var = '' ]] && continue
  [[ $var =~ ^#.* ]] && continue

   sp="$SCRIPT_DIR/$var"
   # mysql --defaults-extra-file=./config.cnf --database="$database" < "$sp"
   mysql -h $DATABASE_HOST -P $DATABASE_PORT -u $DATABASE_USERNAME -p$DATABASE_PASSWORD --database="$database" < "$sp"
   echo "$var"
done < "$db_script_execution_list"

echo 'Script Execution Complete: ' $db_script_execution_list;

