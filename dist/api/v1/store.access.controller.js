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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var DataAccessController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAccessController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const db_helper_service_1 = require("./services/db.helper.service");
let DataAccessController = DataAccessController_1 = class DataAccessController {
    constructor(_dbService) {
        this.logger = new common_1.Logger(DataAccessController_1.name);
        this.dbService = _dbService;
    }
    async save(body) {
        return 'good';
    }
};
__decorate([
    (0, common_1.Post)('save'),
    (0, swagger_1.ApiOperation)({
        description: '',
        summary: '',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DataAccessController.prototype, "save", null);
DataAccessController = DataAccessController_1 = __decorate([
    (0, common_1.Controller)('api/v1'),
    __metadata("design:paramtypes", [db_helper_service_1.DbHelperService])
], DataAccessController);
exports.DataAccessController = DataAccessController;
//# sourceMappingURL=store.access.controller.js.map