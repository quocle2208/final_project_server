import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPaymentWhereInput } from './user-payment-where.input';

@InputType()
export class UserPaymentListRelationFilter {

    @Field(() => UserPaymentWhereInput, {nullable:true})
    every?: UserPaymentWhereInput;

    @Field(() => UserPaymentWhereInput, {nullable:true})
    some?: UserPaymentWhereInput;

    @Field(() => UserPaymentWhereInput, {nullable:true})
    none?: UserPaymentWhereInput;
}
