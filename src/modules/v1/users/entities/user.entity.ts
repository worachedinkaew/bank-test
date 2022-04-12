import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  fullName: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
