// ingredients/entities/ingredient.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'int', default: 0 })
  stock: number;

  @Column()
  provider: string;

  @Column({ type: 'date' })
  expirationDate: Date;

  @Column()
  category: string;

  @Column({ type: 'int', nullable: true })
  calories: number;

  @Column({ type: 'simple-array', nullable: true })
  allergens: string[];

  @Column()
  origin: string;

  @Column()
  imageUrl: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
