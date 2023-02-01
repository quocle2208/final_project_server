import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPaymentWhereUniqueInput } from './user-payment-where-unique.input';
import { Type } from 'class-transformer';
import { UserPaymentUpdateWithoutUserInput } from './user-payment-update-without-user.input';
import { UserPaymentCreateWithoutUserInput } from './user-payment-create-without-user.input';

@InputType()
export class UserPaymentUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserPaymentWhereUniqueInput, {nullable:false})
    @Type(() => UserPaymentWhereUniqueInput)
    where!: UserPaymentWhereUniqueInput;

    @Field(() => UserPaymentUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserPaymentUpdateWithoutUserInput)
    update!: UserPaymentUpdateWithoutUserInput;

    @Field(() => UserPaymentCreateWithoutUserInput, {nullable:false})
    @Type(() => UserPaymentCreateWithoutUserInput)
    create!: UserPaymentCreateWithoutUserInput;
}
