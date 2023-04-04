import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { GlobalService } from '../../../common/global.service';


export class MySQLConnection {

    host: string;

    database: string;

    port: number;

    user: string;

    password: any;

    ssl: any;

    public getConnectionProfile(): MySQLConnection{
      const connectionProfile = GlobalService.environmentVariable['DATABASE_CONNECTION_PROFILE'];
      const connectionProfileJson = JSON.parse(connectionProfile).connection.mysql;
      var dbConfig = process.env.DB_CONFIG || 'local';
      const base64Certificate = connectionProfileJson.certificate.certificate_base64;
      let certBuff = Buffer.from(base64Certificate, 'base64');
      let dbPasswd = Buffer.from(connectionProfileJson.authentication.password, 'base64');

      const mysqlConnection: MySQLConnection = new MySQLConnection();
      mysqlConnection.database = connectionProfileJson.database;
      mysqlConnection.host = connectionProfileJson.hosts[0].hostname;
      mysqlConnection.port = connectionProfileJson.hosts[0].port;
      mysqlConnection.user = connectionProfileJson.authentication.username;
      mysqlConnection.password = String(dbPasswd);
      let certObj: any = { ca: certBuff };

      var dbConfig = process.env.DB_CONFIG || 'local';
      if (dbConfig != 'local'){
        mysqlConnection.ssl = certObj;
      }

      return mysqlConnection;
      }

}



