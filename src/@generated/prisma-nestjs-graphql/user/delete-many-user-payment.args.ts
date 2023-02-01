import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPaymentWhereInput } from '../user-payment/user-payment-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserPaymentArgs {

    @Field(() => UserPaymentWhereInput, {nullable:true})
    @Type(() => UserPaymentWhereInput)
    where?: UserPaymentWhereInput;
}
