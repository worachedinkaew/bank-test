import {
  Controller,
  Get
} from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('v1/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  /* ดูบริการที่ลูกค้าจองไว้ */
  @Get()
  findAll() {
    return this.ordersService.getMyOrder('68c6c737-31d5-4e37-98a2-8a4d01607aa6');
  }
}
