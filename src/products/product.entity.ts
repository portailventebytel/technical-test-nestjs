import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column()
  name: string;

  @Column({ unique: true })
  code: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updtedAt: string;

  /* @OneToMany(type => CartEntity, cart => cart.id)
   @JoinColumn()
   cart: CartEntity[] */
}
