import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
    ) {}

  async validateUser(username: string, password: string): Promise<any> {

    const user = await this.usersService.findOne({username})

    if(!user){
      return null;
    }

    if(!await bcrypt.compare(password, user.password)){
      return null;
    }
    // const jwt = await this.jwtService.signAsync({_id: user._id})
    return user
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
