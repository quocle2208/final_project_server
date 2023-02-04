import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAddressWhereUniqueInput } from './user-address-where-unique.input';
import { Type } from 'class-transformer';
import { UserAddressCreateWithoutUserInput } from './user-address-create-without-user.input';

@InputType()
export class UserAddressCreateOrConnectWithoutUserInput {

    @Field(() => UserAddressWhereUniqueInput, {nullable:false})
    @Type(() => UserAddressWhereUniqueInput)
    where!: UserAddressWhereUniqueInput;

    @Field(() => UserAddressCreateWithoutUserInput, {nullable:false})
    @Type(() => UserAddressCreateWithoutUserInput)
    create!: UserAddressCreateWithoutUserInput;
}
