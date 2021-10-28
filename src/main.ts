import { NestFactory } from '@nestjs/core';
import { AppModule } from './application.module';
import { setupSwagger } from "../utils/setupSwagger";

async function bootstrap() {
  const server = await NestFactory.create(AppModule);
  setupSwagger(server);

  await server.listen(3000);
}

bootstrap();
