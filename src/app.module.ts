import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from './ingredients/entities/ingredient.entity';
import { Product } from './products/entities/product.entity';
import { Table } from 'typeorm';
import { CategoriesModule } from './category/category.module';
import { Category } from './category/entities/category.entity';
import { IngredientsModule } from './ingredients/ingredients.module';
import { ProductsModule } from './products/products.module';
import { TablesModule } from './tables/tables.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'bugerfast',
    entities: [Ingredient,Product,Table,Category],
    synchronize: true
  }), CategoriesModule,IngredientsModule,ProductsModule,TablesModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
