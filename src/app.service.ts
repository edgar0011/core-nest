import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getDefaultAppMessage(): string {
    return 'This is default app message';
  }
}
