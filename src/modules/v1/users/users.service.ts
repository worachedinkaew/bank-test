/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(input: CreateUserDto) {
    const checkDuplicate = await this.userRepository.findOne({where: {username: input.username}});

    if(checkDuplicate) throw new Error('Duplicate username');

    return this.userRepository.save(input);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(condition: any): Promise<User> {
    return this.userRepository.findOne(condition);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }
}
