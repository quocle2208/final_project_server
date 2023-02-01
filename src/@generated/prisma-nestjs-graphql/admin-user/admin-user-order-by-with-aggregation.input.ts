import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminUserCountOrderByAggregateInput } from './admin-user-count-order-by-aggregate.input';
import { AdminUserAvgOrderByAggregateInput } from './admin-user-avg-order-by-aggregate.input';
import { AdminUserMaxOrderByAggregateInput } from './admin-user-max-order-by-aggregate.input';
import { AdminUserMinOrderByAggregateInput } from './admin-user-min-order-by-aggregate.input';
import { AdminUserSumOrderByAggregateInput } from './admin-user-sum-order-by-aggregate.input';

@InputType()
export class AdminUserOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastLogin?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cretedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    modifiedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;

    @Field(() => AdminUserCountOrderByAggregateInput, {nullable:true})
    _count?: AdminUserCountOrderByAggregateInput;

    @Field(() => AdminUserAvgOrderByAggregateInput, {nullable:true})
    _avg?: AdminUserAvgOrderByAggregateInput;

    @Field(() => AdminUserMaxOrderByAggregateInput, {nullable:true})
    _max?: AdminUserMaxOrderByAggregateInput;

    @Field(() => AdminUserMinOrderByAggregateInput, {nullable:true})
    _min?: AdminUserMinOrderByAggregateInput;

    @Field(() => AdminUserSumOrderByAggregateInput, {nullable:true})
    _sum?: AdminUserSumOrderByAggregateInput;
}
