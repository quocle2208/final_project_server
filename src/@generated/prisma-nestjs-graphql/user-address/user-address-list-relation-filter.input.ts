import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAddressWhereInput } from './user-address-where.input';

@InputType()
export class UserAddressListRelationFilter {

    @Field(() => UserAddressWhereInput, {nullable:true})
    every?: UserAddressWhereInput;

    @Field(() => UserAddressWhereInput, {nullable:true})
    some?: UserAddressWhereInput;

    @Field(() => UserAddressWhereInput, {nullable:true})
    none?: UserAddressWhereInput;
}
