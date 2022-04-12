import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './modules/v1/auth/auth.module';
import { UsersModule } from './modules/v1/users/users.module';
import { OrdersModule } from './modules/v1/orders/orders.module';

const modulesImport = [AuthModule, OrdersModule, UsersModule];

@Module({
  imports: [TypeOrmModule.forRoot(), ...modulesImport],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
