import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutAdminsInput } from '../role/role-create-nested-one-without-admins.input';

@InputType()
export class AdminUserCreateInput {
  @Field(() => String, { nullable: false })
  username!: string;

  @Field(() => String, { nullable: false })
  firstName!: string;

  @Field(() => String, { nullable: false })
  lastName!: string;

  @Field(() => Date, { nullable: true })
  lastLogin?: Date | string;

  @Field(() => Date, { nullable: true })
  cretedAt?: Date | string;

  @Field(() => Date, { nullable: true })
  modifiedAt?: Date | string;

  @Field(() => RoleCreateNestedOneWithoutAdminsInput, { nullable: true })
  Role?: RoleCreateNestedOneWithoutAdminsInput;
}
