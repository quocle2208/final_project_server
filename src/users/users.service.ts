import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { userInfo } from 'os';
import { PrismaService } from 'prisma/prisma.service';
import { UserCreateInput } from '../../src/@generated/prisma-nestjs-graphql/user/user-create.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(createUserInput: UserCreateInput) {
    return this.prisma.user.create({
      data: createUserInput,
    });
  }

  async createUser(createUserInput: UserCreateInput) {
    return this.prisma.user.create({
      data: createUserInput,
    });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  findOne(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });
    return user;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
