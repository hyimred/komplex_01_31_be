import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Screw {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    típus: string

    @Column("int", {default: 5})
    hossz: number

    @Column("int", {default: 10})
    készlet: number

    @Column("int", {default: 0.99})
    ár: number
}