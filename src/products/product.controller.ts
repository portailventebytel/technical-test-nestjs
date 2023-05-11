import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return this.productService.create(product);
  }

  @Get()
  async getAll(
    @Query('without_duplicates') _without_duplicates: string,
  ): Promise<Product[]> {
    return this.productService.findAll();
  }
}
