import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  fullName: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
