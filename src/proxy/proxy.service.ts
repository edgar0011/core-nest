import { Injectable } from '@nestjs/common';

@Injectable()
export class ProxyService {
  getBaseUrl(): string {
    return 'localhost:8080';
  }
}
