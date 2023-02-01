import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminUserWhereUniqueInput } from './admin-user-where-unique.input';
import { Type } from 'class-transformer';
import { AdminUserCreateWithoutRoleInput } from './admin-user-create-without-role.input';

@InputType()
export class AdminUserCreateOrConnectWithoutRoleInput {

    @Field(() => AdminUserWhereUniqueInput, {nullable:false})
    @Type(() => AdminUserWhereUniqueInput)
    where!: AdminUserWhereUniqueInput;

    @Field(() => AdminUserCreateWithoutRoleInput, {nullable:false})
    @Type(() => AdminUserCreateWithoutRoleInput)
    create!: AdminUserCreateWithoutRoleInput;
}
