import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPaymentUpdateManyMutationInput } from '../user-payment/user-payment-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserPaymentWhereInput } from '../user-payment/user-payment-where.input';

@ArgsType()
export class UpdateManyUserPaymentArgs {

    @Field(() => UserPaymentUpdateManyMutationInput, {nullable:false})
    @Type(() => UserPaymentUpdateManyMutationInput)
    data!: UserPaymentUpdateManyMutationInput;

    @Field(() => UserPaymentWhereInput, {nullable:true})
    @Type(() => UserPaymentWhereInput)
    where?: UserPaymentWhereInput;
}
