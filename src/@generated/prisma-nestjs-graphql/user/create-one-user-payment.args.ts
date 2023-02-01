import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPaymentCreateInput } from '../user-payment/user-payment-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserPaymentArgs {

    @Field(() => UserPaymentCreateInput, {nullable:false})
    @Type(() => UserPaymentCreateInput)
    data!: UserPaymentCreateInput;
}
