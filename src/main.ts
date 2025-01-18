// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ExpressAdapter } from '@nestjs/platform-express';
// import * as express from 'express';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();


import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';

const expressApp = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  app.enableCors(); // Enable CORS if needed
  await app.init();
}
bootstrap();

export const handler = (req: any, res: any) => {
  return expressApp(req, res);
};