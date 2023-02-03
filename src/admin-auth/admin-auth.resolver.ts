import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { Admin, LoginAdminReponse } from 'src/grapql';
import { AdminAuthService } from './admin-auth.service';
import { LoginAdminInput } from './dto/login-admin.input';
import { GqlAdminAuthGuard } from './guards/gql-admin-auth.guard';

@Resolver('AdminAuth')
export class AdminAuthResolver {
  constructor(private readonly adminAuthService: AdminAuthService) {}

  @Mutation(() => LoginAdminReponse)
  @UseGuards(GqlAdminAuthGuard)
  loginAdmin(
    @Args('loginAdminInput') loginAdminInput: LoginAdminInput,
    @Context() context,
  ) {
    console.log(context.user);
    return this.adminAuthService.login(context.user);
  }
}
