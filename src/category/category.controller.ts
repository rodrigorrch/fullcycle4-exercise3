import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryResponse } from 'src/api-doc/category.response';
import { Category } from 'src/db/models/category.model';
import { CategoryDto } from 'src/dto/category.dto';
import { Repository } from 'typeorm';

@Controller('categories')
export class CategoryController {

  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>
  ){}

  @Get()
  async index(): Promise<Category[]>{
    return this.categoryRepo.find()
  }

  @ApiOkResponse({
    type: CategoryResponse
  })
  @Get(':id')
  show(@Param('id') id: string): Promise<Category>{
    return this.categoryRepo.findOneOrFail(id)
  }

  @ApiCreatedResponse({
    type: CategoryResponse
  })
  @Post()
  async store(@Body(new ValidationPipe({
    errorHttpStatusCode: 422
  })) body: CategoryDto): Promise<Category>{
    const category = this.categoryRepo.create(body);
    return this.categoryRepo.save(category);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: Category): Promise<Category>{
    await this.categoryRepo.findOneOrFail(id);
    this.categoryRepo.update([id], body);
    return this.categoryRepo.findOneOrFail(id);
  }

  @Delete(':id')
  @HttpCode(204)
  async destroy(@Param('id') id: string): Promise<void>{
    await this.categoryRepo.findOneOrFail(id);
    this.categoryRepo.delete(id);
  }
}
