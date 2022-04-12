import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  serviceId: string;

  @Column()
  customerId: string;

  @Column()
  createdAt: Date;
}
