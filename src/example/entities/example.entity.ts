import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

/**
 * Creator: 정지현
 * Description: DB 내 example 테이블 필드를 정의하는 Entity Class
 * Date: 2021-10-25
 */
@Entity("example")
export class ExampleEntity {
    // Auto Increase를 활용한 Primary Key(Index)
    @PrimaryGeneratedColumn()
    id: number;

    // 필드 정의 -> Varchar Length: 32
    @Column({ length: 32 })
    title: string;

    @Column({ length: 100 })
    content: string;

    // POST(CREATE) API 요청 시, DB 내 ROW가 생성될 경우 생성 일시를 자동으로 반영하는 Decorator
    @CreateDateColumn()
    date: Date;

    // PATCH(UPDATE) API 요청 시, DB 내 ROW가 변경될 경우 변경 일시를 자동으로 반영하는 Decorator
    @UpdateDateColumn({ type: "timestamp", nullable: true })
    modified_date: Date;
}
