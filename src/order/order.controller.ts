import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/ca')
  async getAllAmount(): Promise<number> {
    return this.orderService.getCa();
  }

  /* @Get('/recommandation')
  async getProductMostSale(): Promise<ProductMostSale[]> {
    return this.orderService.getProductMostSale();
  } */
}
