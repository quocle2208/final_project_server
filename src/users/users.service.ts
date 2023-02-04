import { Injectable } from '@nestjs/common';
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

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(username: string) {
    return this.prisma.user.findFirst({
      where: { username: username },
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
