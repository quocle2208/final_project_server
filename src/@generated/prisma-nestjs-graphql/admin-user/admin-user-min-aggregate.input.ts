import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdminUserMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    username?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    lastName?: true;

    @Field(() => Boolean, {nullable:true})
    lastLogin?: true;

    @Field(() => Boolean, {nullable:true})
    cretedAt?: true;

    @Field(() => Boolean, {nullable:true})
    modifiedAt?: true;

    @Field(() => Boolean, {nullable:true})
    roleId?: true;
}
