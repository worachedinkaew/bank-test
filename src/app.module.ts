import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthModule } from './modules/v1/auth/auth.module';
import { UsersModule } from './modules/v1/users/users.module';
import { OrdersModule } from './modules/v1/orders/orders.module';
import { ServicesModule } from './modules/v1/services/services.module';

const modulesImport = [AuthModule, OrdersModule, UsersModule, ServicesModule];

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ...modulesImport
  ]
})
export class AppModule {
  constructor(private connection: Connection) {}
}
