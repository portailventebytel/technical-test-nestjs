import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async getCa(): Promise<number> {
    const orders = await this.orderRepository.find();
    return orders.reduce((c, o) => c + o.totalAmount, 0);
  }

  /* async getProductMostSale(): Promise<ProductMostSale>[] {
    const orders = await this.orderRepository.find();
    return orders.reduce((c, o) => {
        if (){

        } 
    }, {} as ProductMostSale[]);
  } */
}
export interface ProductMostSale {
  name: string;
  sales: number;
  code: string;
}
