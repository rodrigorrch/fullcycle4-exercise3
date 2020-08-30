import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Category } from './db/models/category.model';
import { CategoryController } from './category/category.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // @ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      database: process.env.TYPEORM_DATABASE,
      entities: [Category],
      synchronize: true,
   }),
   TypeOrmModule.forFeature([Category])
  ],
  controllers: [AppController, CategoryController],
  providers: [AppService],
})
export class AppModule {}
