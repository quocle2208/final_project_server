import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AdminAuthService } from '../admin-auth.service';

@Injectable()
export class LocalAdminStrategy extends PassportStrategy(Strategy) {
  constructor(private adminAuthService: AdminAuthService) {
    super();
  }

  async validate(username: string, password: string) {
    console.log('auth admin local strategy:' + username, password);
    const admin = await this.adminAuthService.validateUser(username, password);
    if (!admin) {
      throw new UnauthorizedException();
    }
    return admin;
  }
}
