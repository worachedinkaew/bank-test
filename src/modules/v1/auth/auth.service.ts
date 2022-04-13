import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-auth.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
    ) {}

  async validateUser(username: string, password: string): Promise<any> {

    const user = await this.usersService.findOne({username})

    if(!user) return null;
    if(!await bcrypt.compare(password, user.password)){
      return null;
    }
    return user
  }

  async login(input: any) {

    const user = await this.usersService.findOne({username: input.username})

    if(!user) return null;

    const payload = { username: user.username, customerId: user._id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(input: any) {
    return await this.usersService.register(input);
  }
}
