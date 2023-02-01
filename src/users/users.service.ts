import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UserCreateInput } from '../../src/@generated/prisma-nestjs-graphql/user/user-create.input';
import { UserWhereUniqueInput } from '../../src/@generated/prisma-nestjs-graphql/user/user-where-unique.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(createUserInput: UserCreateInput) {
    return this.prisma.user.create({
      data: createUserInput,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: id,
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
