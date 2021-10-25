import { PartialType } from '@nestjs/mapped-types';
import { CreateExampleDto } from './create-example.dto';
import { Column } from 'typeorm';

/**
 * Description: PATCH(UPDATE) API 요청을 위한 DTO
 */
export class UpdateExampleDto extends PartialType(CreateExampleDto) {}
