import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { ExampleModule } from './example/example.module';
import { TypeOrmModule } from "@nestjs/typeorm"
import { ExampleEntity } from './example/entities/example.entity';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
        conf: { useFilesystemPublicRoutes: false } as any,
      }),
    ),
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "example.com",
      "port": 3306,
      "username": "username",
      "password": "password",
      "database": "database",
      "entities": [ExampleEntity],
      "synchronize": true
    }),
    ExampleModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
