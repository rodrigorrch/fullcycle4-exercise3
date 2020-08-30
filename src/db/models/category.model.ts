import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Category {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @CreateDateColumn({name: 'created_at'})
  created_at: Date

  @CreateDateColumn({name: 'updated_at'})
  updated_at: Date
}
