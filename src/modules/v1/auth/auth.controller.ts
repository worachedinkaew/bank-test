import { Controller, Get, Post, Body, Patch, Param, Delete, Request ,UseGuards, BadRequestException} from '@nestjs/common';
import bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
// import { UsersService } from '../users/users.service';
// import { JwtService } from '@nestjs/jwt';
import {LocalAuthGuard} from './guard/local-auth.guard';
import { JwtAuthGuard } from './guard/jwt-auth.guard';

@Controller('v1/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signin(
    @Body('username') username: string,
    @Body('password') password: string
  ) {
    return this.authService.login({username, password});
  }

  /* สมัครใช้บริการ */
  @Post('register')
  async register(@Body() input: CreateUserDto) {
    try {
      const hashPassword =  await bcrypt.hash(input.password, 10)

      await this.authService.register({
        ...input,
        password: hashPassword
      });

      return this.authService.login({username: input.username, password: input.password})
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
