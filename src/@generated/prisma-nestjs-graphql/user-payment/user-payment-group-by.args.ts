import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPaymentWhereInput } from './user-payment-where.input';
import { Type } from 'class-transformer';
import { UserPaymentOrderByWithAggregationInput } from './user-payment-order-by-with-aggregation.input';
import { UserPaymentScalarFieldEnum } from './user-payment-scalar-field.enum';
import { UserPaymentScalarWhereWithAggregatesInput } from './user-payment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserPaymentCountAggregateInput } from './user-payment-count-aggregate.input';
import { UserPaymentAvgAggregateInput } from './user-payment-avg-aggregate.input';
import { UserPaymentSumAggregateInput } from './user-payment-sum-aggregate.input';
import { UserPaymentMinAggregateInput } from './user-payment-min-aggregate.input';
import { UserPaymentMaxAggregateInput } from './user-payment-max-aggregate.input';

@ArgsType()
export class UserPaymentGroupByArgs {

    @Field(() => UserPaymentWhereInput, {nullable:true})
    @Type(() => UserPaymentWhereInput)
    where?: UserPaymentWhereInput;

    @Field(() => [UserPaymentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserPaymentOrderByWithAggregationInput>;

    @Field(() => [UserPaymentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserPaymentScalarFieldEnum>;

    @Field(() => UserPaymentScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserPaymentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserPaymentCountAggregateInput, {nullable:true})
    _count?: UserPaymentCountAggregateInput;

    @Field(() => UserPaymentAvgAggregateInput, {nullable:true})
    _avg?: UserPaymentAvgAggregateInput;

    @Field(() => UserPaymentSumAggregateInput, {nullable:true})
    _sum?: UserPaymentSumAggregateInput;

    @Field(() => UserPaymentMinAggregateInput, {nullable:true})
    _min?: UserPaymentMinAggregateInput;

    @Field(() => UserPaymentMaxAggregateInput, {nullable:true})
    _max?: UserPaymentMaxAggregateInput;
}
