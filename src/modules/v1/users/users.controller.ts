import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import bcrypt from 'bcrypt';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('v1/auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // /* สมัครใช้บริการ */
  // @Post('register')
  // async register(@Body() input: CreateUserDto) {

  //   const hashPassword =  await bcrypt.hash(input.password, 10)

  //   return this.usersService.create({
  //     ...input,
  //     password: hashPassword
  //   });
  // }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
