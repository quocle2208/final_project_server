import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserPaymentCountOrderByAggregateInput } from './user-payment-count-order-by-aggregate.input';
import { UserPaymentAvgOrderByAggregateInput } from './user-payment-avg-order-by-aggregate.input';
import { UserPaymentMaxOrderByAggregateInput } from './user-payment-max-order-by-aggregate.input';
import { UserPaymentMinOrderByAggregateInput } from './user-payment-min-order-by-aggregate.input';
import { UserPaymentSumOrderByAggregateInput } from './user-payment-sum-order-by-aggregate.input';

@InputType()
export class UserPaymentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paymentType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    account?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => UserPaymentCountOrderByAggregateInput, {nullable:true})
    _count?: UserPaymentCountOrderByAggregateInput;

    @Field(() => UserPaymentAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserPaymentAvgOrderByAggregateInput;

    @Field(() => UserPaymentMaxOrderByAggregateInput, {nullable:true})
    _max?: UserPaymentMaxOrderByAggregateInput;

    @Field(() => UserPaymentMinOrderByAggregateInput, {nullable:true})
    _min?: UserPaymentMinOrderByAggregateInput;

    @Field(() => UserPaymentSumOrderByAggregateInput, {nullable:true})
    _sum?: UserPaymentSumOrderByAggregateInput;
}
