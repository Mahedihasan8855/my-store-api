import { DbHelperService } from './services/db.helper.service';
export declare class DataAccessController {
    private dbService;
    private readonly logger;
    constructor(_dbService: DbHelperService);
    save(body: any): Promise<any>;
}
