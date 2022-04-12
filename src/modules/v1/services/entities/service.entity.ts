import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  picture: string;

  @Column()
  description: string;
}
