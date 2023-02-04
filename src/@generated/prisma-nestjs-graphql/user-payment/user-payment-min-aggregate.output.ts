import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserPaymentMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    paymentType?: string;

    @Field(() => String, {nullable:true})
    provider?: string;

    @Field(() => Int, {nullable:true})
    account?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;
}
