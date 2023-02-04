import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminUserUpdateInput } from './admin-user-update.input';
import { Type } from 'class-transformer';
import { AdminUserWhereUniqueInput } from './admin-user-where-unique.input';

@ArgsType()
export class UpdateOneAdminUserArgs {

    @Field(() => AdminUserUpdateInput, {nullable:false})
    @Type(() => AdminUserUpdateInput)
    data!: AdminUserUpdateInput;

    @Field(() => AdminUserWhereUniqueInput, {nullable:false})
    @Type(() => AdminUserWhereUniqueInput)
    where!: AdminUserWhereUniqueInput;
}
