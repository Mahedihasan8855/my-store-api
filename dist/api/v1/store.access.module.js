"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAccessModule = void 0;
const store_access_controller_1 = require("./store.access.controller");
const common_1 = require("@nestjs/common");
const db_helper_service_1 = require("./services/db.helper.service");
const db_connection_module_1 = require("../../config/db.connection.module");
const log_message_service_1 = require("./services/log-message.service");
let DataAccessModule = class DataAccessModule {
};
DataAccessModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [
            store_access_controller_1.DataAccessController
        ],
        providers: [
            db_helper_service_1.DbHelperService, db_connection_module_1.DbConnectionService, log_message_service_1.LogMessageService
        ],
    })
], DataAccessModule);
exports.DataAccessModule = DataAccessModule;
//# sourceMappingURL=store.access.module.js.map