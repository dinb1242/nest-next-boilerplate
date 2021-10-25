import { IsNotEmpty } from "class-validator"

/**
 * Creator: 정지현
 * Description: REST API POST(CREATE) 요청 시 DB로 전송할 DTO 예시
 * Date: 2021-10-25
 */
export class CreateExampleDto {
    // 요청 데이터 Null 여부를 체크하는 Decorator
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    readonly content: string;
}
