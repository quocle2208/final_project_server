import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { LoginReponse, User } from 'src/grapql';
import { UserCreateInput } from '../../src/@generated/prisma-nestjs-graphql/user/user-create.input';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login-user-input';
import { GqlAuthGuard } from './gql-auth.guard';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginReponse)
  @UseGuards(GqlAuthGuard)
  login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
  ) {
    return this.authService.login(context.user);
  }
  @Mutation(() => User)
  signup(@Args('signUpUserInput') signUpUserInput: UserCreateInput) {
    return this.authService.signup(signUpUserInput);
  }
}
