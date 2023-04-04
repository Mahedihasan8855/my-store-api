"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const global_service_1 = require("./common/global.service");
require('dotenv').config();
const RED = '\x1b[31m\n';
const GREEN = '\x1b[32m\n';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';
async function bootstrap() {
    global_service_1.GlobalService.environmentVariable = {};
    let globalService = new global_service_1.GlobalService();
    await globalService.setGlobalVriable();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    if ('production' !== globalService.setGlobalVriable['NODE_ENV']) {
        const options = new swagger_1.DocumentBuilder()
            .setTitle(`DB Access`)
            .setDescription(`API Endpoint List`)
            .setVersion('0.0.1')
            .addTag('db access')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('api/v1', app, document);
    }
    const PORT = global_service_1.GlobalService.environmentVariable['PORT'] || 5000;
    await app.listen(PORT);
    console.log(`${BLUE} **** DB ACCESS APPLICATION START ****${RESET}`);
    common_1.Logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map