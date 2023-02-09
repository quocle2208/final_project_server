import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UpdateUserInput } from './dto/update-user.input';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuardGQL } from 'src/auth/guards/gql-jwt-auth.guard';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUser')
  create(@Args('createUserInput') userCreateInput: UserCreateInput) {
    return this.usersService.create(userCreateInput);
  }

  @Query('users')
  findAll() {
    return this.usersService.findAll();
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.usersService.findOne(id);
  }
}
