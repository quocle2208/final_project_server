import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminUserWhereInput } from './admin-user-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAdminUserArgs {

    @Field(() => AdminUserWhereInput, {nullable:true})
    @Type(() => AdminUserWhereInput)
    where?: AdminUserWhereInput;
}
