import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserPaymentCountAggregate } from './user-payment-count-aggregate.output';
import { UserPaymentAvgAggregate } from './user-payment-avg-aggregate.output';
import { UserPaymentSumAggregate } from './user-payment-sum-aggregate.output';
import { UserPaymentMinAggregate } from './user-payment-min-aggregate.output';
import { UserPaymentMaxAggregate } from './user-payment-max-aggregate.output';

@ObjectType()
export class AggregateUserPayment {

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
