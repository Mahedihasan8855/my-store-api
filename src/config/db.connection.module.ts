import { Global, Injectable, Module,Logger } from '@nestjs/common';
import { MySQLConnection } from '../api/v1/dto/mysql.connection.dto';
import { GlobalService } from '../common/global.service';

const mysql = require("mysql2/promise");
require('dotenv').config();

@Injectable()
export class DbConnectionService {
  private readonly log = new Logger(DbConnectionService.name);
  private readonly config: any;
  private pool: any;
  private mysqlConnection: MySQLConnection;
  constructor() {
    this.mysqlConnection = this.getConnectionProfile();
    this.pool = mysql.createPool(this.mysqlConnection);
  }
  async executeProcedure(procedureName, args = []) {
    const connection = await this.pool.getConnection();
    try {
      const [rows] = await connection.execute(`CALL ${procedureName}(${args.map(() => '?').join(',')})`, args);
      return rows;
    } finally {
      connection.release();
    }
  }
  async query(sql, args = []) {
    const connection = await this.pool.getConnection();
    try {
      const [rows] = await connection.execute(sql, args);
      return rows;
    } finally {
      connection.release();
    }
  }
  
  private getConnectionProfile(): MySQLConnection{  

    const mysqlConnection: MySQLConnection = new MySQLConnection();
    const returnConnectionProfile = mysqlConnection.getConnectionProfile();

    return returnConnectionProfile;
  }
}

@Global()
@Module({
  controllers: [],
  providers: [DbConnectionService],
  exports: [DbConnectionService],
})
export class DbConnectionModule { }