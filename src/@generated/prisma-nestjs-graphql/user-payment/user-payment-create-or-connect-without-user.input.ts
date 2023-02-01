import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPaymentWhereUniqueInput } from './user-payment-where-unique.input';
import { Type } from 'class-transformer';
import { UserPaymentCreateWithoutUserInput } from './user-payment-create-without-user.input';

@InputType()
export class UserPaymentCreateOrConnectWithoutUserInput {

    @Field(() => UserPaymentWhereUniqueInput, {nullable:false})
    @Type(() => UserPaymentWhereUniqueInput)
    where!: UserPaymentWhereUniqueInput;

    @Field(() => UserPaymentCreateWithoutUserInput, {nullable:false})
    @Type(() => UserPaymentCreateWithoutUserInput)
    create!: UserPaymentCreateWithoutUserInput;
}
