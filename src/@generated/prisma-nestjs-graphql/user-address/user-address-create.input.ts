import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUserAdrsesInput } from '../user/user-create-nested-one-without-user-adrses.input';

@InputType()
export class UserAddressCreateInput {

    @Field(() => String, {nullable:false})
    address1!: string;

    @Field(() => String, {nullable:true})
    address2?: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:true})
    postalCode?: string;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => String, {nullable:false})
    telephone!: string;

    @Field(() => UserCreateNestedOneWithoutUserAdrsesInput, {nullable:true})
    User?: UserCreateNestedOneWithoutUserAdrsesInput;
}
