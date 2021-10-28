import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { ExampleRepository } from './repositories/example.repository';

/**
 * Creator: 정지현
 * Description: Controller로부터 전달받은 요청을 실제 처리하는 Service
 * Date: 2021-10-25
 */
@Injectable()
export class ExampleService {
  // 생성한 Repository를 의존성 주입한다.
  constructor(private readonly exampleRepository: ExampleRepository) {}

  async create(createExampleDto: CreateExampleDto) {
    try {
      return await this.exampleRepository.save(createExampleDto);
    } catch(err) {
      throw new HttpException("데이터 INSERT 실패", HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      return await this.exampleRepository.find();
    } catch(err) {
      throw new HttpException("전체 데이터 조회 실패", HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number) {
    try {
      return await this.exampleRepository.findOne(+id);
    } catch(err) {
      throw new HttpException(`${id}번 인덱스에 대한 조회 실패`, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, updateExampleDto: UpdateExampleDto) {
    try {
      const modifiedCount = await this.exampleRepository.update(+id, updateExampleDto).then(res => res.affected);
      return `${modifiedCount}건의 데이터가 변경됨.`;
    } catch(err) {
      throw new HttpException(`${id}번 인덱스에 대한 수정 요청 실패`, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) {
    try {
      const deleteCount = await this.exampleRepository.delete(+id).then(res => res.affected);
      return `${deleteCount}건의 데이터가 삭제됨.`
    } catch(err) {
      throw new HttpException(`${id}번 인덱스에 대한 삭제 요청 실패`, HttpStatus.BAD_REQUEST);
    }
  }
}
