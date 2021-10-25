import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ExampleController } from './example.controller';
import { ExampleRepository } from './repositories/example.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ExampleRepository])],
  controllers: [ExampleController],
  providers: [ExampleService]
})
export class ExampleModule {}
