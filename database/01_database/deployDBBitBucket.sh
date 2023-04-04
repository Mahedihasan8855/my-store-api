#!/bin/bash

set -e

DATABASE_HOST=$1
DATABASE_HOST=${DATABASE_HOST}
DATABASE_USERNAME=$2
DATABASE_USERNAME=${DATABASE_USERNAME}
DATABASE_PASSWORD=$3;
DATABASE_PASSWORD=${DATABASE_PASSWORD}

DATABASE_NAME="hf_web3_db";

echo "Executing script for: ${DATABASE_HOST} (${DATABASE_USERNAME} - ${DATABASE_PASSWORD})" ;

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
db_script_execution_list="${SCRIPT_DIR}/execute-order-list-1.0.txt"

while IFS= read -r var
do
  [[ $var = '' ]] && continue
  [[ $var =~ ^#.* ]] && continue

  sp="$SCRIPT_DIR/$DATABASE_NAME/$var"
  sqlcmd -S $DATABASE_HOST -U $DATABASE_USERNAME -P $DATABASE_PASSWORD -d $DATABASE_NAME -i $sp -l 15 < /dev/null || { echo "sqlcmd failed: $sp" ; exit 1; }
  echo "$var"
done < "$db_script_execution_list"

echo 'Script Execution Complete: ' $db_script_execution_list;
