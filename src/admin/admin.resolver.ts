import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AdminUserCreateInput } from 'src/@generated/prisma-nestjs-graphql/admin-user/admin-user-create.input';
import { AdminService } from './admin.service';

@Resolver('Admin')
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation('createAdmin')
  create(@Args('createAdminInput') createAdminInput: AdminUserCreateInput) {
    return this.adminService.create(createAdminInput);
  }
}
