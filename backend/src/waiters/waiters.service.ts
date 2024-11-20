import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateWaiterDto } from './dto';
import { getErrorDbMessage } from '../common/messages/error_messages';

@Injectable()
export class WaitersService extends PrismaClient implements OnModuleInit {
  private readonly logger: Logger = new Logger('ProductsService');

  onModuleInit(): void {
    try {
      this.$connect();
      this.logger.log('Database connected');
    } catch (error) {
      this.handleDbExceptions(error);
    }
  }

  async create(createWaiterDto: CreateWaiterDto): Promise<CreateWaiterDto> {
    try {
      return await this.waiter.create({
        data: createWaiterDto,
      });
    } catch (error) {
      this.handleDbExceptions(error);
    }
  }

  findAll() {
    return `This action returns all waiters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} waiter`;
  }

  // update(id: number, updateWaiterDto: UpdateWaiterDto) {
  //   return `This action updates a #${id} waiter`;
  // }

  remove(id: number) {
    return `This action removes a #${id} waiter`;
  }

  private handleDbExceptions(error) {
    const { code, meta } = error;
    if (code) {
      const errorMsg = getErrorDbMessage(code);
      const errorMessage = {
        type: 'Error',
        message: errorMsg,
        ...meta,
      };
      this.logger.error(JSON.stringify(errorMessage));
      throw new BadRequestException(errorMessage);
    } else {
      this.logger.error(error.message);
      throw new InternalServerErrorException(error.message);
    }
  }
}
