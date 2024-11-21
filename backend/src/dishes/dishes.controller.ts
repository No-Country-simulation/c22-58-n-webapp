import {
  Controller,
  //Get,
  //Post,
  //Body,
  Param,
  Delete,
  //HttpCode,
} from '@nestjs/common';
import { DishesService } from './dishes.service';
//import { CreateDishDto } from './dto';

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  // @HttpCode(201)
  // @Post()
  // create(@Body() createDishDto: CreateDishDto) {
  //   return this.dishesService.create(createDishDto);
  // }

  // @Get()
  // findAll() {
  //   return this.dishesService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.dishesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDishDto: UpdateDishDto) {
  //   return this.dishesService.update(+id, updateDishDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dishesService.remove(+id);
  }
}
