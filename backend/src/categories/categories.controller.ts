import {
  Controller,
  Post,
  Body,
  HttpCode,
  Get,
  Query,
  Param,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/enums/valid-roles';
import { PaginationDto } from 'src/common/dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @HttpCode(201)
  @Auth(ValidRoles.manager)
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @HttpCode(200)
  @Auth(ValidRoles.manager, ValidRoles.waiter, ValidRoles.chef, ValidRoles.user)
  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.categoriesService.findAll(paginationDto);
  }

  @HttpCode(200)
  @Auth(ValidRoles.manager, ValidRoles.waiter, ValidRoles.chef, ValidRoles.user)
  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.categoriesService.findOne(term);
  }

  //   @Patch(':id')
  //   update(
  //     @Param('id') id: string,
  //     @Body() updateCategoryDto: UpdateCategoryDto,
  //   ) {
  //     return this.categoriesService.update(+id, updateCategoryDto);
  //   }

  //   @Delete(':id')
  //   remove(@Param('id') id: string) {
  //     return this.categoriesService.remove(+id);
  //   }
}
