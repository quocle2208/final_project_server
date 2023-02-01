import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminUserWhereUniqueInput } from './admin-user-where-unique.input';
import { Type } from 'class-transformer';
import { AdminUserCreateInput } from './admin-user-create.input';
import { AdminUserUpdateInput } from './admin-user-update.input';

@ArgsType()
export class UpsertOneAdminUserArgs {

    @Field(() => AdminUserWhereUniqueInput, {nullable:false})
    @Type(() => AdminUserWhereUniqueInput)
    where!: AdminUserWhereUniqueInput;

    @Field(() => AdminUserCreateInput, {nullable:false})
    @Type(() => AdminUserCreateInput)
    create!: AdminUserCreateInput;

    @Field(() => AdminUserUpdateInput, {nullable:false})
    @Type(() => AdminUserUpdateInput)
    update!: AdminUserUpdateInput;
}
