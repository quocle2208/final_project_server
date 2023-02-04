import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class UserPaymentScalarWhereWithAggregatesInput {

    @Field(() => [UserPaymentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserPaymentScalarWhereWithAggregatesInput>;

    @Field(() => [UserPaymentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserPaymentScalarWhereWithAggregatesInput>;

    @Field(() => [UserPaymentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserPaymentScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    paymentType?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    provider?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    account?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: IntNullableWithAggregatesFilter;
}
