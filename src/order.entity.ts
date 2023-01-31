import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    csavar_id: string

    @Column("int", {default: 10})
    db: number
}