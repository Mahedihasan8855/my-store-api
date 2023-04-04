import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { DbHelperService } from './services/db.helper.service';

@Controller('api/v1')
export class DataAccessController { 
  private dbService: DbHelperService;
  private readonly logger = new Logger(DataAccessController.name);
    constructor( _dbService: DbHelperService) {
      this.dbService = _dbService;
    }

    @Post('save')
    @ApiOperation({
      description:'',
      summary: '',
    })
    async save(@Body() body: any): Promise<any> {     
      // const res = await this.dbService.save(body.spName, body.parameter);
      return 'good';
    }


}
