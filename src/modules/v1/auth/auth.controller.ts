import { Controller, Get, Post, Body, Patch, Param, Delete, Request ,UseGuards} from '@nestjs/common';
import bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
// import { UsersService } from '../users/users.service';
// import { JwtService } from '@nestjs/jwt';
import {LocalAuthGuard} from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('v1/auth')
export class AuthController {
  constructor(
    // private jwtService: JwtService,
    private readonly authService: AuthService
    // private readonly usersService: UsersService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signin(
    @Body('username') username: string,
    @Body('password') password: string
  ) {
    return this.authService.login({username, password});
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {

    return req.user;
  }
}
