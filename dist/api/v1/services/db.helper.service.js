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
var DbHelperService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbHelperService = void 0;
const common_1 = require("@nestjs/common");
const db_connection_module_1 = require("../../../config/db.connection.module");
const log_message_service_1 = require("./log-message.service");
let DbHelperService = DbHelperService_1 = class DbHelperService {
    constructor(db, _log) {
        this.logger = new common_1.Logger(DbHelperService_1.name);
        this.dbHelperService = db;
        this.log = _log;
    }
    async save(spName, parameter) {
        try {
            this.log.logMessage('info', 'saveData', `going to call Stored procedure: ${spName}`);
            const result = await this.dbHelperService.executeProcedure(spName, parameter);
            this.log.logMessage('info', 'saveData', `back after calling Stored procedure: ${spName}`);
            return result[0];
        }
        catch (error) {
            this.log.logMessage('error', 'saveData', `error to call Stored procedure: ${spName} ERROR: ${error}`);
            return null;
        }
    }
    async get(spName, parameter) {
        try {
            if (!parameter) {
                this.log.logMessage('info', 'getData', `going to call Stored procedure: ${spName}`);
                const result = await this.dbHelperService.executeProcedure(spName);
                this.log.logMessage('info', 'getData', `back after calling Stored procedure: ${spName}`);
                return result[0];
            }
            this.log.logMessage('info', 'getData', `going to call Stored procedure: ${spName}`);
            const result = await this.dbHelperService.executeProcedure(spName, parameter);
            this.log.logMessage('info', 'getData', `back after calling Stored procedure: ${spName}`);
            return result[0];
        }
        catch (error) {
            this.log.logMessage('error', 'getData', `error to call Stored procedure: ${spName} ERROR: ${error}`);
            return null;
        }
    }
};
DbHelperService = DbHelperService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_connection_module_1.DbConnectionService,
        log_message_service_1.LogMessageService])
], DbHelperService);
exports.DbHelperService = DbHelperService;
//# sourceMappingURL=db.helper.service.js.map