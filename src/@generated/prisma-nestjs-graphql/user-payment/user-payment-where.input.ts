import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class UserPaymentWhereInput {

    @Field(() => [UserPaymentWhereInput], {nullable:true})
    AND?: Array<UserPaymentWhereInput>;

    @Field(() => [UserPaymentWhereInput], {nullable:true})
    OR?: Array<UserPaymentWhereInput>;

    @Field(() => [UserPaymentWhereInput], {nullable:true})
    NOT?: Array<UserPaymentWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    paymentType?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    provider?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    account?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;
}
