import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPaymentUpdateInput } from '../user-payment/user-payment-update.input';
import { Type } from 'class-transformer';
import { UserPaymentWhereUniqueInput } from '../user-payment/user-payment-where-unique.input';

@ArgsType()
export class UpdateOneUserPaymentArgs {

    @Field(() => UserPaymentUpdateInput, {nullable:false})
    @Type(() => UserPaymentUpdateInput)
    data!: UserPaymentUpdateInput;

    @Field(() => UserPaymentWhereUniqueInput, {nullable:false})
    @Type(() => UserPaymentWhereUniqueInput)
    where!: UserPaymentWhereUniqueInput;
}
