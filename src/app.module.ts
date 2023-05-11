import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './products/product.entity';

import { AppDataSource } from '../data-source';
import { ProductService } from './products/product.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...AppDataSource.options,
    }),
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [AppController],
  providers: [AppService, ProductService],
})
export class AppModule {}
