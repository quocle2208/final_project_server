import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminUserWhereUniqueInput } from './admin-user-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAdminUserArgs {

    @Field(() => AdminUserWhereUniqueInput, {nullable:false})
    @Type(() => AdminUserWhereUniqueInput)
    where!: AdminUserWhereUniqueInput;
}
