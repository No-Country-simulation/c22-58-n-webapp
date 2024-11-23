import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { handleDbExceptions } from 'src/common/helpers';
import { Category } from './entities/category.entity';
import { PrismaService } from 'src/middlewares';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}
  private categories: Category[] = []; //TODO: Refactor handle cache

  async create(
    createCategoryDto: CreateCategoryDto,
  ): Promise<CreateCategoryDto> {
    try {
      return await this.prisma.category.create({
        data: createCategoryDto,
      });
    } catch (error) {
      handleDbExceptions(error);
    }
  }

  //   findAll() {
  //     return `This action returns all categories`;
  //   }

  //   findOne(id: number) {
  //     return `This action returns a #${id} category`;
  //   }

  //   update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //     return `This action updates a #${id} category`;
  //   }

  //   remove(id: number) {
  //     return `This action removes a #${id} category`;
  //   }
}
