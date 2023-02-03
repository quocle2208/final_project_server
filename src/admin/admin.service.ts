import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AdminUserCreateInput } from 'src/@generated/prisma-nestjs-graphql/admin-user/admin-user-create.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}
  async create(createAdminInput: AdminUserCreateInput) {
    const password = await bcrypt.hash('123456', 10);
    const newAdmin = { ...createAdminInput, password: password };
    console.log(newAdmin);
    return this.prisma.adminUser.create({
      data: newAdmin,
    });
  }

  findOne(username: string) {
    return this.prisma.adminUser.findFirst({
      where: {
        username: username,
      },
    });
  }
}
