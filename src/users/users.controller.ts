import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtAuthGuardApi } from 'src/auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(JwtAuthGuardApi)
  getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
