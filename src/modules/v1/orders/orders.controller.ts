import {
  Controller,
  Get,
  Request,
  UseGuards,
  BadRequestException
} from '@nestjs/common';
import { OrdersService } from './orders.service'
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
@Controller('v1/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  /* ดูบริการที่ลูกค้าจองไว้ */
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Request() req) {
    try {
      const customerId = req.user.customerId
    return await this.ordersService.getMyOrder(customerId);
    } catch (error) {
      throw new BadRequestException('get booking failed');
    }
  }
}
