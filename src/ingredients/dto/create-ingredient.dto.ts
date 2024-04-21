// ingredients/dto/create-ingredient.dto.ts

export class CreateIngredientDto {
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
