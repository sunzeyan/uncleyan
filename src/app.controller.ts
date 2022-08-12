import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('list')
  getList(): string {
    return 'list page';
  }
  @Post('list')
  listPost(): string {
    return 'post list';
  }
  @Post('list/user')
  userList(): string {
    return 'user';
  }
}
