import {
  Controller,
  Get,
  Request,
  UseGuards
} from '@nestjs/common';
import { OrdersService } from './orders.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@Controller('v1/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  /* ดูบริการที่ลูกค้าจองไว้ */
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req) {
    const customerId = req.user.customerId
    return this.ordersService.getMyOrder(customerId);
  }
}
