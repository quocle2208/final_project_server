import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminUserWhereInput } from './admin-user-where.input';

@InputType()
export class AdminUserListRelationFilter {

    @Field(() => AdminUserWhereInput, {nullable:true})
    every?: AdminUserWhereInput;

    @Field(() => AdminUserWhereInput, {nullable:true})
    some?: AdminUserWhereInput;

    @Field(() => AdminUserWhereInput, {nullable:true})
    none?: AdminUserWhereInput;
}
