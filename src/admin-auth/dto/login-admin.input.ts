import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginAdminInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
