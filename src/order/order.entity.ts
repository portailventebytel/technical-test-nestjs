import { Product } from 'src/products/product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column()
  customerName: string;

  @Column()
  totalAmount: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updtedAt: string;

  @ManyToOne(() => Product)
  @JoinColumn()
  products: Product[];
}
