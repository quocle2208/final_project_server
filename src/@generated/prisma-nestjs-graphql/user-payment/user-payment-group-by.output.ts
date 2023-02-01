import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserPaymentCountAggregate } from './user-payment-count-aggregate.output';
import { UserPaymentAvgAggregate } from './user-payment-avg-aggregate.output';
import { UserPaymentSumAggregate } from './user-payment-sum-aggregate.output';
import { UserPaymentMinAggregate } from './user-payment-min-aggregate.output';
import { UserPaymentMaxAggregate } from './user-payment-max-aggregate.output';

@ObjectType()
export class UserPaymentGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    paymentType!: string;

    @Field(() => String, {nullable:false})
    provider!: string;

    @Field(() => Int, {nullable:false})
    account!: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => UserPaymentCountAggregate, {nullable:true})
    _count?: UserPaymentCountAggregate;

    @Field(() => UserPaymentAvgAggregate, {nullable:true})
    _avg?: UserPaymentAvgAggregate;

    @Field(() => UserPaymentSumAggregate, {nullable:true})
    _sum?: UserPaymentSumAggregate;

    @Field(() => UserPaymentMinAggregate, {nullable:true})
    _min?: UserPaymentMinAggregate;

    @Field(() => UserPaymentMaxAggregate, {nullable:true})
    _max?: UserPaymentMaxAggregate;
}
