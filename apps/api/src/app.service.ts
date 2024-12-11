import { LoggerService } from '@hikestack/logger';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor(private readonly loggerService: LoggerService) { }

  getHello() {
    this.loggerService.log('Hello World!');
    return 'Hello World!';
  }
}
