import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  @Get(':i')
  async findOne(@Param('i') i: number): Promise<Cat> {
    return this.catsService.findOne(i);
  }
  @Patch(':i')
  async update(@Param('i') i: number, @Body() updateCatDto: UpdateCatDto) {
    this.catsService.update(i, updateCatDto);
  }
  @Delete(':i')
  async delete(@Param('i') i: number) {
    this.catsService.delete(i);
  }
}
