import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { Service } from './entities/service.entity';
import { Orders } from '../orders/entities/orders.entity';
import { OrdersService } from '../orders/orders.service';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Service, Orders, User])],
  controllers: [ServicesController],
  providers: [ServicesService, OrdersService],
  exports: [ServicesService]
})
export class ServicesModule {}
