import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn('uuid')
  _id: number;

  @Column()
  serviceId: string;

  @Column()
  customerId: string;

  @Column()
  createdAt: Date;
}
