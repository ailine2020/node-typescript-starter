import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Level {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  number: number;
}
