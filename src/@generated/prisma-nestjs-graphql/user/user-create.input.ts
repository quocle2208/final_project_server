import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAddressCreateNestedManyWithoutUserInput } from '../user-address/user-address-create-nested-many-without-user.input';
import { UserPaymentCreateNestedManyWithoutUserInput } from '../user-payment/user-payment-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    telephone!: string;

    @Field(() => Date, {nullable:true})
    cretedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    modifiedAt?: Date | string;

    @Field(() => UserAddressCreateNestedManyWithoutUserInput, {nullable:true})
    userAdrses?: UserAddressCreateNestedManyWithoutUserInput;

    @Field(() => UserPaymentCreateNestedManyWithoutUserInput, {nullable:true})
    userPayments?: UserPaymentCreateNestedManyWithoutUserInput;
}
