export declare class MySQLConnection {
    host: string;
    database: string;
    port: number;
    user: string;
    password: any;
    ssl: any;
    getConnectionProfile(): MySQLConnection;
}
