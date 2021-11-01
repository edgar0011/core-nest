import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Request, Response, NextFunction } from 'express';
import * as mocks from 'node-mocks-http';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('should return "Hello World!"', () => {
      const req: Request = mocks.createRequest();
      req.res = mocks.createResponse();

      req.res.json = jest.fn(
        (json: string | Record<string, unknown>) => req.res,
      );

      const res: Response = appController.getDefaultAppMessage(req, req.res);

      expect(res.statusCode).toEqual(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'This is default app message',
      });
    });
  });
});
