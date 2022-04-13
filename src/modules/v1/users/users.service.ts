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

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(condition: any): Promise<User> {
    return await this.userRepository.findOne(condition);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }
}
