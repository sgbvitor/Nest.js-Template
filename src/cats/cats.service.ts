import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
  findOne(i: number) {
    return this.cats[i];
  }
  update(i: number, updateCatDto: UpdateCatDto): Cat {
    const updatedCat = { ...this.cats[i], ...updateCatDto };

    this.cats[i] = updatedCat;

    return updatedCat;
  }

  delete(i: number) {
    this.cats.splice(i, 1);
  }
}
