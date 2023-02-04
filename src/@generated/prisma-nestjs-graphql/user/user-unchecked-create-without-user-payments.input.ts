import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserAddressUncheckedCreateNestedManyWithoutUserInput } from '../user-address/user-address-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutUserPaymentsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => UserAddressUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userAdrses?: UserAddressUncheckedCreateNestedManyWithoutUserInput;
}
