import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServiceDto } from './dto/create-service.dto';
import { Service } from './entities/service.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)  private readonly serviceRepository: Repository<Service>
  ) {}

  createService(createServiceDto: CreateServiceDto) {
    return this.serviceRepository.save(createServiceDto);
  }

  findAll() {
    return this.serviceRepository.find();
  }

  async findOne(condition: any): Promise<Service> {
    const result = await this.serviceRepository.findOne(condition);
    if(!result) throw new Error('This Service Not Found')
    return result
  }
}
