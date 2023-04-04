"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLConnection = void 0;
const global_service_1 = require("../../../common/global.service");
class MySQLConnection {
    getConnectionProfile() {
        const connectionProfile = global_service_1.GlobalService.environmentVariable['DATABASE_CONNECTION_PROFILE'];
        const connectionProfileJson = JSON.parse(connectionProfile).connection.mysql;
        var dbConfig = process.env.DB_CONFIG || 'local';
        const base64Certificate = connectionProfileJson.certificate.certificate_base64;
        let certBuff = Buffer.from(base64Certificate, 'base64');
        let dbPasswd = Buffer.from(connectionProfileJson.authentication.password, 'base64');
        const mysqlConnection = new MySQLConnection();
        mysqlConnection.database = connectionProfileJson.database;
        mysqlConnection.host = connectionProfileJson.hosts[0].hostname;
        mysqlConnection.port = connectionProfileJson.hosts[0].port;
        mysqlConnection.user = connectionProfileJson.authentication.username;
        mysqlConnection.password = String(dbPasswd);
        let certObj = { ca: certBuff };
        var dbConfig = process.env.DB_CONFIG || 'local';
        if (dbConfig != 'local') {
            mysqlConnection.ssl = certObj;
        }
        return mysqlConnection;
    }
}
exports.MySQLConnection = MySQLConnection;
//# sourceMappingURL=mysql.connection.dto.js.map