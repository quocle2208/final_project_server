import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserPaymentCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    paymentType!: string;

    @Field(() => String, {nullable:false})
    provider!: string;

    @Field(() => Int, {nullable:false})
    account!: number;
}
