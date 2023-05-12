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

  async findOneByName(name: string): Promise<Product> {
    if (name) {
      return this.productRepository.findOne({ where: { name } });
    }
    return;
  }

  async findAll(without_duplicates?: string): Promise<Product[]> {
    let products = await this.productRepository.find();
    products = products.sort((a, b) => a.name?.localeCompare(b.name));

    if (without_duplicates) {
      return [...new Map(products.map((item) => [item.code, item])).values()];
    }
    return products;
  }
}
