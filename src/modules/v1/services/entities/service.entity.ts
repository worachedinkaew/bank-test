import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn('uuid')
  _id: number;

  @Column()
  name: string;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: true })
  price: number;

  @Column()
  picture: string;

  @Column()
  description: string;
}
