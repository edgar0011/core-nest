import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProxyController } from './proxy/proxy.controller';
import { AppService } from './app.service';
import { ProxyService } from './proxy/proxy.service';

@Module({
  imports: [],
  controllers: [AppController, ProxyController],
  providers: [AppService, ProxyService],
})
export class AppModule {}
