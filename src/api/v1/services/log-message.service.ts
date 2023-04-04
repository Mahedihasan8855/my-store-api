import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LogMessageService {
  private logger: Logger = new Logger(LogMessageService.name);

  async logMessage (logLevel:string, action:any, message:any){
    
    const logMessageData: any = {
      logLevel: logLevel,
      action: action,
      msg: JSON.stringify(message)
    }
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

}
