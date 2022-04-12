import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Request,
  UseGuards
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { OrdersService } from '../orders/orders.service';
import { CreateServiceDto} from './dto/create-service.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('v1/services')
export class ServicesController {
  constructor(
    private readonly servicesService: ServicesService,
    private readonly ordersService: OrdersService
  ) {}

  /* สร้างบริการ */
  @Post()
  async createService(@Body() input: CreateServiceDto) {
    return this.servicesService.createService(input);
  }

  /* แสดงลิสต์ของบริการต่างๆ แสดงลิสต์ของบริการต่างๆ  */
  @Get()
  findAll() {
    return this.servicesService.findAll();
  }

  /* แสดงรายละเอียดของบริการ */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesService.findOne({_id: id});
  }

  /* จองบริการ */
  @UseGuards(JwtAuthGuard)
  @Post(':serviceId/booking')
  booking(@Request() req, @Param('serviceId') serviceId: string) {
    const customerId = req.user.customerId
    return this.ordersService.booking(serviceId, customerId);
  }
}
