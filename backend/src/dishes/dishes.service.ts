import { Injectable, Logger } from '@nestjs/common';
//import { CreateDishDto } from './dto/create-dish.dto';
//import { UpdateDishDto } from './dto/update-dish.dto';
import { PrismaService } from 'src/middlewares/prisma-service';
//import { handleDbExceptions } from 'src/common/helpers';

@Injectable()
export class DishesService {
  constructor(private prisma: PrismaService) {}
  private readonly logger: Logger = new Logger('DishesService');

  // async create(createDishDto: CreateDishDto): Promise<CreateDishDto> {
  //   try {
  //     return await this.prisma.dish.create({
  //       data: createDishDto,
  //     });
  //   } catch (error) {
  //     handleDbExceptions(error);
  //   }
  // }

  findAll() {
    return `This action returns all dishes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dish`;
  }

  // update(id: number, updateDishDto: UpdateDishDto) {
  //   return `This action updates a #${id} dish`;
  // }

  remove(id: number) {
    return `This action removes a #${id} dish`;
  }
}
