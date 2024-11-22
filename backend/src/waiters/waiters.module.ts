import { Module } from '@nestjs/common';
import { WaitersService } from './waiters.service';
import { WaitersController } from './waiters.controller';
import { PrismaService } from 'src/middlewares/prisma-service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [WaitersController],
  providers: [WaitersService, PrismaService],
  imports: [AuthModule],
})
export class WaitersModule {}
