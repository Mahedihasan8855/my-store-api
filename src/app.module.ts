import { Module } from '@nestjs/common';
import { DataAccessModule } from './api/v1/store.access.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [DataAccessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
