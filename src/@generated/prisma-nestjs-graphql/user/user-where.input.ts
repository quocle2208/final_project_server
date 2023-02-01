import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserAddressListRelationFilter } from '../user-address/user-address-list-relation-filter.input';
import { UserPaymentListRelationFilter } from '../user-payment/user-payment-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    telephone?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cretedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    modifiedAt?: DateTimeNullableFilter;

    @Field(() => UserAddressListRelationFilter, {nullable:true})
    userAdrses?: UserAddressListRelationFilter;

    @Field(() => UserPaymentListRelationFilter, {nullable:true})
    userPayments?: UserPaymentListRelationFilter;
}
