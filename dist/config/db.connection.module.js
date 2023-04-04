"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DbConnectionService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConnectionModule = exports.DbConnectionService = void 0;
const common_1 = require("@nestjs/common");
const mysql_connection_dto_1 = require("../api/v1/dto/mysql.connection.dto");
const mysql = require("mysql2/promise");
require('dotenv').config();
let DbConnectionService = DbConnectionService_1 = class DbConnectionService {
    constructor() {
        this.log = new common_1.Logger(DbConnectionService_1.name);
        this.mysqlConnection = this.getConnectionProfile();
        this.pool = mysql.createPool(this.mysqlConnection);
    }
    async executeProcedure(procedureName, args = []) {
        const connection = await this.pool.getConnection();
        try {
            const [rows] = await connection.execute(`CALL ${procedureName}(${args.map(() => '?').join(',')})`, args);
            return rows;
        }
        finally {
            connection.release();
        }
    }
    async query(sql, args = []) {
        const connection = await this.pool.getConnection();
        try {
            const [rows] = await connection.execute(sql, args);
            return rows;
        }
        finally {
            connection.release();
        }
    }
    getConnectionProfile() {
        const mysqlConnection = new mysql_connection_dto_1.MySQLConnection();
        const returnConnectionProfile = mysqlConnection.getConnectionProfile();
        return returnConnectionProfile;
    }
};
DbConnectionService = DbConnectionService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], DbConnectionService);
exports.DbConnectionService = DbConnectionService;
let DbConnectionModule = class DbConnectionModule {
};
DbConnectionModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        controllers: [],
        providers: [DbConnectionService],
        exports: [DbConnectionService],
    })
], DbConnectionModule);
exports.DbConnectionModule = DbConnectionModule;
//# sourceMappingURL=db.connection.module.js.map