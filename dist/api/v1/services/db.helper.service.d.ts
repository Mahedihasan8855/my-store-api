import { DbConnectionService } from 'src/config/db.connection.module';
import { LogMessageService } from './log-message.service';
export declare class DbHelperService {
    private readonly dbHelperService;
    private readonly logger;
    private log;
    constructor(db: DbConnectionService, _log: LogMessageService);
    save(spName: string, parameter: any[]): Promise<any>;
    get(spName: string, parameter: any[]): Promise<any>;
}
