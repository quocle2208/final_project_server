import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPaymentWhereInput } from '../user-payment/user-payment-where.input';
import { Type } from 'class-transformer';
import { UserPaymentOrderByWithRelationInput } from '../user-payment/user-payment-order-by-with-relation.input';
import { UserPaymentWhereUniqueInput } from '../user-payment/user-payment-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateUserPaymentArgs {

    @Field(() => UserPaymentWhereInput, {nullable:true})
    @Type(() => UserPaymentWhereInput)
    where?: UserPaymentWhereInput;

    @Field(() => [UserPaymentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserPaymentOrderByWithRelationInput>;

    @Field(() => UserPaymentWhereUniqueInput, {nullable:true})
    cursor?: UserPaymentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
