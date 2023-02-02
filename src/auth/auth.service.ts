import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOne(username);

    const valid = await bcrypt.compare(password, user.password);

    if (user && valid) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: User) {
    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
      user: user,
    };
  }

  async signup(signupUserInput: UserCreateInput) {
    const userExisting = await this.userService.findOne(
      signupUserInput.username,
    );

    if (userExisting) {
      throw new Error('Username already exists!');
    }

    const password = await bcrypt.hash(signupUserInput.password, 10);

    return this.userService.createUser({
      ...signupUserInput,
      username: signupUserInput.username,
      password: password,
    });
  }
}
