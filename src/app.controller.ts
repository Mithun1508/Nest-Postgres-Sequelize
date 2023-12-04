/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('example')
@ApiTags('Example')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string[] {
    console.log("something else");
    return this.appService.getHello();
  }
}
