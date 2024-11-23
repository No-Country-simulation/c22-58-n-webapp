import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  Query,
  Patch,
  ParseUUIDPipe,
} from '@nestjs/common';
import { DishesService } from './dishes.service';
import { CreateDishDto, UpdateDishDto } from './dto';
import { PaginationDto } from 'src/common/dto';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/enums/valid-roles';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Dishes')
@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @HttpCode(201)
  @Auth(ValidRoles.manager)
  @Post()
  create(@Body() createDishDto: CreateDishDto) {
    return this.dishesService.create(createDishDto);
  }

  @HttpCode(200)
  @Auth(ValidRoles.manager, ValidRoles.waiter, ValidRoles.chef, ValidRoles.user)
  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.dishesService.findAll(paginationDto);
  }

  @HttpCode(200)
  @Auth(ValidRoles.manager, ValidRoles.waiter, ValidRoles.chef, ValidRoles.user)
  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.dishesService.findOne(term);
  }

  @HttpCode(201)
  @Auth(ValidRoles.manager)
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDishDto: UpdateDishDto,
  ) {
    return this.dishesService.update(id, updateDishDto);
  }

  @HttpCode(200)
  @Auth(ValidRoles.manager)
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.dishesService.remove(id);
  }
}
