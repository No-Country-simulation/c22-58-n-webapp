import { Injectable, NotFoundException } from '@nestjs/common';
import { isUUID } from 'class-validator';
import { PrismaService } from 'src/middlewares/prisma-service';
import { UpdateUserDto } from './dto';
import { PaginationDto } from 'src/common/dto';
import { User } from 'src/auth/entities/user.entity';
import { handleDbExceptions } from 'src/common/helpers';
import { getErrorMessage } from 'src/common/messages/error_messages';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  private users: User[] = []; //TODO: Refactor handle cache

  async findAll(paginationDto: PaginationDto) {
    try {
      const { page, limit } = paginationDto;
      if (this.users.length === 0) {
        this.users = await this.prisma.user.findMany();
      }
      const totalUsers: number = this.users.length;
      const totalPages: number = Math.ceil(totalUsers / limit);
      const userssReturn: User[] = this.users.slice(
        (page - 1) * limit,
        (page - 1) * limit + limit,
      );
      return {
        data: [...userssReturn],
        meta: {
          totalUsers: totalUsers,
          totalPages: totalPages,
          page: page,
        },
      };
    } catch (error) {
      handleDbExceptions(error);
    }
  }

  async findOne(term: string): Promise<User> {
    const user: User = await this.findByTerm(term);
    if (!user) {
      const errorText = getErrorMessage('E001');
      throw new NotFoundException(errorText.replace('&', term));
    }
    return user;
  }

  async update(_id: string, updateUserDto: UpdateUserDto) {
    try {
      return await this.prisma.user.update({
        where: { id: _id },
        data: updateUserDto,
      });
    } catch (error) {
      handleDbExceptions(error);
    }
  }

  async remove(_id: string) {
    try {
      await this.prisma.user.delete({
        where: { id: _id },
      });
      return { message: `The user with id: "${_id}" was deleted` };
    } catch (error) {
      handleDbExceptions(error);
    }
  }

  private async findByTerm(term: string): Promise<User> {
    const user: User = isUUID(term)
      ? await this.prisma.user.findFirst({
          where: { id: term },
        })
      : await this.prisma.user.findFirst({
          where: {
            OR: [
              { firstName: { equals: term, mode: 'insensitive' } },
              { userName: { equals: term, mode: 'insensitive' } },
            ],
          },
        });
    return user;
  }
}
