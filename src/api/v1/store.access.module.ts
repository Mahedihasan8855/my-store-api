import { DataAccessController } from './store.access.controller';
import { Module } from '@nestjs/common';
import { DbHelperService } from './services/db.helper.service';
import { DbConnectionService } from 'src/config/db.connection.module';
import { LogMessageService } from './services/log-message.service';

@Module({
    imports: [],
    controllers: [
        DataAccessController],
    providers: [
        DbHelperService,DbConnectionService,LogMessageService],
})
export class DataAccessModule {}
