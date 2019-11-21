import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field } from "type-graphql";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;
}
