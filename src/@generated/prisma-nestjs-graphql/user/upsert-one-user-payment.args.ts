import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPaymentWhereUniqueInput } from '../user-payment/user-payment-where-unique.input';
import { Type } from 'class-transformer';
import { UserPaymentCreateInput } from '../user-payment/user-payment-create.input';
import { UserPaymentUpdateInput } from '../user-payment/user-payment-update.input';

@ArgsType()
export class UpsertOneUserPaymentArgs {

    @Field(() => UserPaymentWhereUniqueInput, {nullable:false})
    @Type(() => UserPaymentWhereUniqueInput)
    where!: UserPaymentWhereUniqueInput;

    @Field(() => UserPaymentCreateInput, {nullable:false})
    @Type(() => UserPaymentCreateInput)
    create!: UserPaymentCreateInput;

    @Field(() => UserPaymentUpdateInput, {nullable:false})
    @Type(() => UserPaymentUpdateInput)
    update!: UserPaymentUpdateInput;
}
