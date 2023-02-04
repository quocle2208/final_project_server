import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminUserWhereUniqueInput } from './admin-user-where-unique.input';
import { Type } from 'class-transformer';
import { AdminUserUpdateWithoutRoleInput } from './admin-user-update-without-role.input';
import { AdminUserCreateWithoutRoleInput } from './admin-user-create-without-role.input';

@InputType()
export class AdminUserUpsertWithWhereUniqueWithoutRoleInput {

    @Field(() => AdminUserWhereUniqueInput, {nullable:false})
    @Type(() => AdminUserWhereUniqueInput)
    where!: AdminUserWhereUniqueInput;

    @Field(() => AdminUserUpdateWithoutRoleInput, {nullable:false})
    @Type(() => AdminUserUpdateWithoutRoleInput)
    update!: AdminUserUpdateWithoutRoleInput;

    @Field(() => AdminUserCreateWithoutRoleInput, {nullable:false})
    @Type(() => AdminUserCreateWithoutRoleInput)
    create!: AdminUserCreateWithoutRoleInput;
}
