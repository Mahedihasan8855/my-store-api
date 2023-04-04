"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalService = void 0;
class GlobalService {
    async setGlobalVriable() {
        let variableKeys = new Array();
        Object.keys(process.env).forEach((key) => variableKeys.push(key));
        for (let i = 0; i < variableKeys.length; i++) {
            const key = variableKeys[i];
            GlobalService.environmentVariable[key] = process.env[key];
        }
    }
}
exports.GlobalService = GlobalService;
//# sourceMappingURL=global.service.js.map