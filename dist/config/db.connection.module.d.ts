export declare class DbConnectionService {
    private readonly log;
    private readonly config;
    private pool;
    private mysqlConnection;
    constructor();
    executeProcedure(procedureName: any, args?: any[]): Promise<any>;
    query(sql: any, args?: any[]): Promise<any>;
    private getConnectionProfile;
}
export declare class DbConnectionModule {
}
