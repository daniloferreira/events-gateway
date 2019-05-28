import {Body, Controller, Get, Headers, Put, Request} from '@nestjs/common';
import {AppService} from './app.service';
import EventInfo from './model/EventInfo';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Put('/emit')
  emit(@Headers('user-agent') agent,
       @Headers('x-forwarded-for') forwardedForIp,
       @Request() request,
       @Body() eventInfo): string {
    const clientData = {
      'user-agent': agent,
      'x-forwarded-for': forwardedForIp,
      'remote-address': request.ip,
    };
    return JSON.stringify(this.appService.emit(Object.assign(eventInfo, clientData) as EventInfo));
  }
}
