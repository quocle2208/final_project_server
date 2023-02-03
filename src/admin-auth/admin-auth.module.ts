import { Module } from '@nestjs/common';
import { AdminAuthService } from './admin-auth.service';
import { AdminAuthResolver } from './admin-auth.resolver';
import { AdminModule } from 'src/admin/admin.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { LocalAdminStrategy } from './strategy/local-admin.strategy';
import { JwtAdminStrategy } from './strategy/jwt-auth.strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AdminModule,
    PassportModule,
    JwtModule.register({
      signOptions: { expiresIn: '1000s' },
      secret: process.env.JWT_SECRET, //process
    }),
  ],
  providers: [
    AdminAuthResolver,
    AdminAuthService,
    LocalAdminStrategy,
    JwtAdminStrategy,
  ],
})
export class AdminAuthModule {}
