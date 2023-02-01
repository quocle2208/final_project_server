import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPaymentWhereUniqueInput } from './user-payment-where-unique.input';
import { Type } from 'class-transformer';
import { UserPaymentUpdateWithoutUserInput } from './user-payment-update-without-user.input';

@InputType()
export class UserPaymentUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserPaymentWhereUniqueInput, {nullable:false})
    @Type(() => UserPaymentWhereUniqueInput)
    where!: UserPaymentWhereUniqueInput;

    @Field(() => UserPaymentUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserPaymentUpdateWithoutUserInput)
    data!: UserPaymentUpdateWithoutUserInput;
}
