import { EntityRepository, Repository } from "typeorm"
import { ExampleEntity } from "../entities/example.entity"

/**
 * Creator: 정지현
 * Description: Entity를 활용하여 Service 내에 DI(Dependency Injection)를 적용하기 위한 Repository 생성
 */
@EntityRepository(ExampleEntity)
export class ExampleRepository extends Repository<ExampleEntity> {}