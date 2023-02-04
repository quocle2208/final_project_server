import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserAddressCountOrderByAggregateInput } from './user-address-count-order-by-aggregate.input';
import { UserAddressAvgOrderByAggregateInput } from './user-address-avg-order-by-aggregate.input';
import { UserAddressMaxOrderByAggregateInput } from './user-address-max-order-by-aggregate.input';
import { UserAddressMinOrderByAggregateInput } from './user-address-min-order-by-aggregate.input';
import { UserAddressSumOrderByAggregateInput } from './user-address-sum-order-by-aggregate.input';

@InputType()
export class UserAddressOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address1?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address2?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postalCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    telephone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => UserAddressCountOrderByAggregateInput, {nullable:true})
    _count?: UserAddressCountOrderByAggregateInput;

    @Field(() => UserAddressAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserAddressAvgOrderByAggregateInput;

    @Field(() => UserAddressMaxOrderByAggregateInput, {nullable:true})
    _max?: UserAddressMaxOrderByAggregateInput;

    @Field(() => UserAddressMinOrderByAggregateInput, {nullable:true})
    _min?: UserAddressMinOrderByAggregateInput;

    @Field(() => UserAddressSumOrderByAggregateInput, {nullable:true})
    _sum?: UserAddressSumOrderByAggregateInput;
}
