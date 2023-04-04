"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LogMessageService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogMessageService = void 0;
const common_1 = require("@nestjs/common");
let LogMessageService = LogMessageService_1 = class LogMessageService {
    constructor() {
        this.logger = new common_1.Logger(LogMessageService_1.name);
    }
    async logMessage(logLevel, action, message) {
        const logMessageData = {
            logLevel: logLevel,
            action: action,
            msg: JSON.stringify(message)
        };
        switch (logLevel) {
            case 'info':
                this.logger.log(`LOG MESSAGE:
            LEVEL: ${logMessageData.logLevel}
            ACTION: ${logMessageData.action}
            MESSAGE: ${logMessageData.msg}`);
                break;
            case 'debug':
                this.logger.debug(`LOG MESSAGE:
            LEVEL: ${logMessageData.logLevel}
            ACTION: ${logMessageData.action}
            MESSAGE: ${logMessageData.msg}`);
                break;
            case 'error':
                this.logger.error(`LOG MESSAGE:
            LEVEL: ${logMessageData.logLevel}
            ACTION: ${logMessageData.action}
            MESSAGE: ${logMessageData.msg}`);
                break;
            default:
                this.logger.log(`LOG MESSAGE:
            LEVEL: ${logMessageData.logLevel}
            ACTION: ${logMessageData.action}
            MESSAGE: ${logMessageData.msg}`);
                break;
        }
        return logMessageData;
    }
};
LogMessageService = LogMessageService_1 = __decorate([
    (0, common_1.Injectable)()
], LogMessageService);
exports.LogMessageService = LogMessageService;
//# sourceMappingURL=log-message.service.js.map