import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminUserCreateInput } from './admin-user-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAdminUserArgs {

    @Field(() => AdminUserCreateInput, {nullable:false})
    @Type(() => AdminUserCreateInput)
    data!: AdminUserCreateInput;
}
