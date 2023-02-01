import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPaymentWhereUniqueInput } from '../user-payment/user-payment-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneUserPaymentArgs {

    @Field(() => UserPaymentWhereUniqueInput, {nullable:false})
    @Type(() => UserPaymentWhereUniqueInput)
    where!: UserPaymentWhereUniqueInput;
}
