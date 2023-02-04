import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUserPaymentsInput } from '../user/user-create-nested-one-without-user-payments.input';

@InputType()
export class UserPaymentCreateInput {

    @Field(() => String, {nullable:false})
    paymentType!: string;

    @Field(() => String, {nullable:false})
    provider!: string;

    @Field(() => Int, {nullable:false})
    account!: number;

    @Field(() => UserCreateNestedOneWithoutUserPaymentsInput, {nullable:true})
    User?: UserCreateNestedOneWithoutUserPaymentsInput;
}
