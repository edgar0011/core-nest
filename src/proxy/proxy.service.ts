import { Injectable } from '@nestjs/common';

@Injectable()
export class ProxyService {
  getBaseUrl(): string {
    return 'Hello from proxy, localhost:8080';
  }
}
