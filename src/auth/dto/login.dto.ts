import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  username?: string;

  @IsEmail()
  email?: string;

  @IsNotEmpty()
  password: string;
}
