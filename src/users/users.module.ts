import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { UsersController } from './users.controller';

@Module({
  providers: [PrismaService, UsersResolver, UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
