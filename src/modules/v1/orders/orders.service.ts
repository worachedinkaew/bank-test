import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from './entities/order.entity';
import { User } from '../users/entities/user.entity';
import { Service } from '../services/entities/service.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private ordersRepository: Repository<Orders>
  ) {}

  findAll() {
    return this.ordersRepository.find();
  }

  async getMyOrder(customerId: string) {

    let getOrder = await this.ordersRepository
      .createQueryBuilder("orders")
      .select(`*, user._id As customerId, service._id AS serviceId`)
      .innerJoin(User,"user","user._id = orders.customerId")
      .leftJoin(Service,"service","service._id = orders.serviceId")
      .where("orders.customerId = :customerId", {customerId: customerId})
      .getRawMany()

    const result = await getOrder.map((item) => {
      return {
        _id: item._id,
        service: {
          _id: item.serviceId,
          name: item.name,
          price: item.price,
          picture: item.picture,
          description: item.description
        },
        customer: {
          _id: item.customerId,
          fullName: item.fullName,
          username: item.username
        },
        createdAt: item.createdAt
      }
    })

    return result
  }

  booking(serviceId: string, customerId: string) {

    const checkDuplicate = this.ordersRepository.findOne({where: {serviceId, customerId}})

    if(checkDuplicate) throw new Error('Duplicate this service');

    return this.ordersRepository.save({ serviceId, customerId, createdAt: new Date() } );
  }
}
