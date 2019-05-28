import { Injectable } from '@nestjs/common';
import EventInfo from './model/EventInfo';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  emit(event: EventInfo): EventInfo {
    return event;
  }
}
