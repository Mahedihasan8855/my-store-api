## PreRequisite
Node 14.20.0
YARN 1.22.17

## Description
This project contains the code for interacting with the app's database. It is a separate NestJS project that is responsible for writing and reading data to/from the database.
The db project in the app is responsible for interacting with the app's database. It contains a folder called commondb-api which provides a set of APIs that the other parts of the app can use to interact with the database.
The commondb-api folder is built using the NestJS framework and provides a common set of APIs that can be used by multiple parts of the app to read and write data to the database. By using a common set of APIs, the app can ensure that data is written and read consistently across all the different parts of the app that interact with the database.
Overall, the db project, along with the commondb-api folder, provide the necessary functionality for the app to interact with the database, which is a critical component of the app's overall functionality.

Before running the app, navigate to the script/database/01_database/ folder and run the deploydb.sh file. This script file works with the .env file located in the root dbcommon-api folder, which needs to have proper values for connecting to the database. 

## Config .ENV File

In order to configure your application correctly, you need to make sure that the environment variables in the .env file are set up properly. The .env file is a configuration file where you can set environment-specific variables, such as listed below:

## Config .ENV File
```bash

docker run --name mysql -p 3306:3306 -v mysql_volume:/var/lib/mysql/ -d -e "MYSQL_ROOT_PASSWORD=VeryStrongPassword_0" -e "MYSQL_USER=root" -e "MYSQL_PASSWORD=VeryStrongPassword_0" mysql

docker exec -it mysql1 mysql -uroot -p

create database hf_web3_db;
```

```bash

NODE_ENV=development
PORT=5000
DB_CONFIG=local
DATABASE_CONNECTION_PROFILE=ewogICJjb25uZWN0aW9uIjogewogICAgIm15c3FsIjogewogICAgICAiYXV0aGVudGljYXRpb24iOiB7CiAgICAgICAgIm1ldGhvZCI6ICJkaXJlY3QiLAogICAgICAgICJwYXNzd29yZCI6ICJWZXJ5U3Ryb25nUGFzc3dvcmRfMCIsCiAgICAgICAgInVzZXJuYW1lIjogInJvb3QxIgogICAgICB9LAogICAgICAiY2VydGlmaWNhdGUiOiB7CiAgICAgICAgImNlcnRpZmljYXRlX2F1dGhvcml0eSI6ICJzZWxmX3NpZ25lZCIsCiAgICAgICAgImNlcnRpZmljYXRlX2Jhc2U2NCI6ICIiLAogICAgICAgICJuYW1lIjogIjk5YzZiOTNjLWEzN2QtNDZkMS04N2I5LWRmMjdkNzEzNDg5NSIKICAgICAgfSwKICAgICAgImRhdGFiYXNlIjogImhmX3dlYjNfZGIiLAogICAgICAiaG9zdHMiOiBbCiAgICAgICAgewogICAgICAgICAgImhvc3RuYW1lIjogIjEyNy4wLjAuMSIsCiAgICAgICAgICAicG9ydCI6IDMzMDYKICAgICAgICB9CiAgICAgIF0KICAgIH0KICB9Cn0=
DATABASE_NAME=hf_web3_db

```
This configuration file or connection string appears to define a direct database connection with a self-signed certificate to a MySQL database running on the same machine at IP address 127.0.0.1, port 3306, with the database name hf_web3_db and the root user with an empty password.
Set your configuration like this and convert it basw64 to use in .env for connecying your Database
Converted JSON is like this :
```bash
DATABASE_CONNECTION_PROFILE={
  "connection": {
    "method": "direct",
    "password": "",
    "username": "root"
  },
  "certification": {
    "certified_authority": "self_signed",
    "certificate_base64": "",
    "name": "99c6b93c-a37d-46d1-87b9-df27d7134895"
  },
  "database": "hf_web3_db",
  "hosts": [
    {
      "hostname": "127.0.0.1",
      "port": 3306
    }
  ]
}

```


Make sure that you save the .env file after making any changes.



Once the .env file is properly configured, run the following command  from db/script/database/01_database directory:

## Config config.cnf File and Run ./deploydb.sh:
Config config.cnf File like this below:
```bash
[client]
user = root1
password = 
host = 127.0.0.1
```
This will take your database information from here to connect with your mysql Database

Once the . config.cnf  file is properly configured, run the following command
```bash
$ ./deploydb.sh
```
After complete this will show
```bash
 Script Execution Complete:
```
This will automatically create the necessary tables and stored procedures to properly set up your database instances. Once this is done, return to the root directory and run one of the following commands to start the app:

## Installation
Install all the node modules for the project
```bash
$ yarn install
```
## Running the app
```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
