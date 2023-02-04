import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAddressWhereUniqueInput } from './user-address-where-unique.input';
import { Type } from 'class-transformer';
import { UserAddressUpdateWithoutUserInput } from './user-address-update-without-user.input';
import { UserAddressCreateWithoutUserInput } from './user-address-create-without-user.input';

@InputType()
export class UserAddressUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserAddressWhereUniqueInput, {nullable:false})
    @Type(() => UserAddressWhereUniqueInput)
    where!: UserAddressWhereUniqueInput;

    @Field(() => UserAddressUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserAddressUpdateWithoutUserInput)
    update!: UserAddressUpdateWithoutUserInput;

    @Field(() => UserAddressCreateWithoutUserInput, {nullable:false})
    @Type(() => UserAddressCreateWithoutUserInput)
    create!: UserAddressCreateWithoutUserInput;
}
