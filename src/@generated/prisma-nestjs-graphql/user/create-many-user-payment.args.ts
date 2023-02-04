import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPaymentCreateManyInput } from '../user-payment/user-payment-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserPaymentArgs {

    @Field(() => [UserPaymentCreateManyInput], {nullable:false})
    @Type(() => UserPaymentCreateManyInput)
    data!: Array<UserPaymentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
