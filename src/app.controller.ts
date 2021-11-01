import { Controller, Get, Req, Res, Next } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response, NextFunction } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(['', '/*'])
  getDefaultAppMessage(
    @Req() request: Request,
    @Res() response: Response,
    // @Next() next: NextFunction,
  ): Response {
    // console.log('request');
    // console.log(request);
    // console.log('response');
    // console.log(response);
    // console.log('next');
    // console.log(next);
    return response
      .status(200)
      .json({ message: this.appService.getDefaultAppMessage() });
    // next(this.appService.getDefaultAppMessage());
    // return this.appService.getDefaultAppMessage();
  }
}
