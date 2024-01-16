import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // TODO: Change origin to the frontend URL based on env config
  app.enableCors({ origin: '*' });
  await app.listen(3002);
}
bootstrap();
