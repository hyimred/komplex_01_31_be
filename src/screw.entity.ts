import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Screw {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    típus: string

    @Column("double", {default: 5})
    hossz: number

    @Column("int", {default: 10})
    készlet: number

    @Column("double", {default: 0.19})
    ár: number
}