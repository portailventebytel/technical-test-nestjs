import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  async findOneByCode(code: string): Promise<Product> {
    return this.productRepository.findOne({ where: { code } });
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }
}
