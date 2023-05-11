import { Product } from 'src/products/product.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class Seed1683812297295 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.save(
      queryRunner.manager.create<Product>(Product, [
        {
          name: 'iphone15',
          code: 'AAAAAAAAA',
          price: 900,
          quantity: 20,
          description: 'apple marque',
        },
        {
          name: 'iphone14',
          code: 'XXXXXXXX',
          price: 700,
          quantity: 10,
          description: 'apple marque',
        },
        {
          name: 'iphone14',
          code: 'XXXXXXXX',
          price: 700,
          quantity: 10,
          description: 'apple marque',
        },
        {
          name: 'iphone13',
          code: 'BBBBBBBB',
          price: 180,
          quantity: 10,
          description: 'apple marque',
        },
        {
          name: 'iphone14 max',
          code: 'YYYYYYY',
          price: 700,
          quantity: 10,
          description: 'apple marque',
        },
        {
          name: 'iphone14 max',
          code: 'XXXXXXXX',
          price: 700,
          quantity: 10,
          description: 'apple marque',
        },
        {
          name: 'Samsung S23',
          code: 'SSSSSSSSS',
          price: 750,
          quantity: 20,
          description: 'apple marque',
        },
        {
          name: 'POCO',
          code: 'PPPPPPPP',
          price: 300,
          quantity: 20,
          description: 'apple marque',
        },
      ]),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM product`);
  }
}
