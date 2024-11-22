import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  Query,
  ParseUUIDPipe,
  Patch,
} from '@nestjs/common';
import { WaitersService } from './waiters.service';
import { CreateWaiterDto, UpdateWaiterDto } from './dto';
import { PaginationDto } from 'src/common/dto';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/enums/valid-roles';

@Controller('waiters')
export class WaitersController {
  constructor(private readonly waitersService: WaitersService) {}

  @HttpCode(201)
  @Auth(ValidRoles.manager)
  @Post()
  create(@Body() createWaiterDto: CreateWaiterDto) {
    return this.waitersService.create(createWaiterDto);
  }

  @HttpCode(200)
  @Auth(ValidRoles.manager)
  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.waitersService.findAll(paginationDto);
  }

  @HttpCode(200)
  @Auth(ValidRoles.manager)
  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.waitersService.findOne(term);
  }

  @HttpCode(201)
  @Auth(ValidRoles.manager)
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateWaiterDto: UpdateWaiterDto,
  ) {
    return this.waitersService.update(id, updateWaiterDto);
  }

  @HttpCode(200)
  @Auth(ValidRoles.manager)
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.waitersService.remove(id);
  }
}
