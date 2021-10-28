import { INestApplication } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"

/**
 * Creator: 정지현
 * Date: 2021-10-29
 * Description: Swagger Document를 생성한다.
 */
export function setupSwagger(app: INestApplication): void {
    const options = new DocumentBuilder()
        .setTitle("Nest.js and Next.js API Document")
        .setDescription("Nest.js 및 Next.js를 활용한 Boilerplate API 도큐먼트")
        .setVersion("1.0.0")
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup("docs", app, document);
}