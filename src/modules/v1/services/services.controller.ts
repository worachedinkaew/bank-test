import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Request,
  UseGuards,
  BadRequestException
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { OrdersService } from '../orders/orders.service';
import { CreateServiceDto} from './dto/create-service.dto'
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

@Controller('v1/services')
export class ServicesController {
  constructor(
    private readonly servicesService: ServicesService,
    private readonly ordersService: OrdersService
  ) {}

  /* สร้างบริการ */
  @Post()
  async createService(@Body() input: CreateServiceDto) {
    return await this.servicesService.createService(input);
  }

  /* แสดงลิสต์ของบริการต่างๆ แสดงลิสต์ของบริการต่างๆ  */
  @Get()
  async findAll() {
    return await this.servicesService.findAll();
  }

  /* แสดงรายละเอียดของบริการ */
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.servicesService.findOne({_id: id});
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  /* จองบริการ */
  @UseGuards(JwtAuthGuard)
  @Post(':serviceId/booking')
  async booking(@Request() req, @Param('serviceId') serviceId: string) {
    try {
      const customerId = req.user.customerId
    return await this.ordersService.booking(serviceId, customerId);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
