import { PartialType } from '@nestjs/mapped-types';
import { CreateIngredientDto } from './create-ingredient.dto';

// ingredients/dto/update-ingredient.dto.ts

export class UpdateIngredientDto {
    name: string;
    description: string;
    price: number;
    stock: number;
    provider: string;
    expirationDate: Date;
    category: string;
    calories?: number;
    allergens?: string[];
    origin: string;
    imageUrl: string;
  }
  
