import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class UserPaymentScalarWhereInput {

    @Field(() => [UserPaymentScalarWhereInput], {nullable:true})
    AND?: Array<UserPaymentScalarWhereInput>;

    @Field(() => [UserPaymentScalarWhereInput], {nullable:true})
    OR?: Array<UserPaymentScalarWhereInput>;

    @Field(() => [UserPaymentScalarWhereInput], {nullable:true})
    NOT?: Array<UserPaymentScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    paymentType?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    provider?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    account?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;
}
