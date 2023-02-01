import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAddressWhereUniqueInput } from './user-address-where-unique.input';
import { Type } from 'class-transformer';
import { UserAddressUpdateWithoutUserInput } from './user-address-update-without-user.input';

@InputType()
export class UserAddressUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserAddressWhereUniqueInput, {nullable:false})
    @Type(() => UserAddressWhereUniqueInput)
    where!: UserAddressWhereUniqueInput;

    @Field(() => UserAddressUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserAddressUpdateWithoutUserInput)
    data!: UserAddressUpdateWithoutUserInput;
}
