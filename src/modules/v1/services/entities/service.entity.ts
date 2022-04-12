import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn('uuid')
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
