import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserAddressOrderByRelationAggregateInput } from '../user-address/user-address-order-by-relation-aggregate.input';
import { UserPaymentOrderByRelationAggregateInput } from '../user-payment/user-payment-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

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
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    telephone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cretedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    modifiedAt?: keyof typeof SortOrder;

    @Field(() => UserAddressOrderByRelationAggregateInput, {nullable:true})
    userAdrses?: UserAddressOrderByRelationAggregateInput;

    @Field(() => UserPaymentOrderByRelationAggregateInput, {nullable:true})
    userPayments?: UserPaymentOrderByRelationAggregateInput;
}
