import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from './pipes/validation.pipe';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(5000);
}

bootstrap();
