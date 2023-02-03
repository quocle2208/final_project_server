import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AdminService } from 'src/admin/admin.service';
import { LoginAdminInput } from './dto/login-admin.input';
import * as bcrypt from 'bcrypt';
import { Admin } from 'src/grapql';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminAuthService {
  constructor(
    private adminService: AdminService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const admin = await this.adminService.findOne(username);

    const valid = await bcrypt.compare(password, admin.password);

    if (admin && valid) {
      const { password, ...result } = admin;
      return result;
    }

    return null;
  }

  async login(admin: Admin) {
    return {
      access_token: this.jwtService.sign({
        username: admin.username,
        sub: admin.id,
      }),
      user: admin,
    };
  }
}
