import { Injectable, Logger } from '@nestjs/common';
import { DbConnectionService } from 'src/config/db.connection.module';
import { LogMessageService } from './log-message.service';

@Injectable()
export class DbHelperService {
  private readonly dbHelperService: DbConnectionService;
  private readonly logger = new Logger(DbHelperService.name);
  private log : LogMessageService;
  constructor(
      db: DbConnectionService,
      _log: LogMessageService) {
        this.dbHelperService = db;
        this.log = _log;
      }
  
  async save(spName: string , parameter : any[]) {
    try{
    this.log.logMessage('info', 'saveData', `going to call Stored procedure: ${spName}`);
    const result = await this.dbHelperService.executeProcedure(spName, parameter);
    this.log.logMessage('info', 'saveData', `back after calling Stored procedure: ${spName}`);
    return result[0];
    }catch(error){
      this.log.logMessage('error', 'saveData', `error to call Stored procedure: ${spName} ERROR: ${error}`);
      return null;      
    }
  }
  async get(spName: string , parameter : any[] ) {
    try {
    if(!parameter){
      this.log.logMessage('info', 'getData', `going to call Stored procedure: ${spName}`);
      const result = await this.dbHelperService.executeProcedure(spName);
      this.log.logMessage('info', 'getData', `back after calling Stored procedure: ${spName}`);
      return result[0];
    }
    this.log.logMessage('info', 'getData', `going to call Stored procedure: ${spName}`);
    const result = await this.dbHelperService.executeProcedure(spName, parameter);
    this.log.logMessage('info', 'getData', `back after calling Stored procedure: ${spName}`);
    return result[0];
      
    } catch (error) {
      this.log.logMessage('error', 'getData', `error to call Stored procedure: ${spName} ERROR: ${error}`);
      return null;   
    }
  }

}
