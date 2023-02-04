import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService, AdminResolver, AdminService],
  exports: [AdminService],
})
export class AdminModule {}
