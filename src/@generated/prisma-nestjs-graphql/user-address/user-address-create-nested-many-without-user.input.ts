import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAddressCreateWithoutUserInput } from './user-address-create-without-user.input';
import { Type } from 'class-transformer';
import { UserAddressCreateOrConnectWithoutUserInput } from './user-address-create-or-connect-without-user.input';
import { UserAddressCreateManyUserInputEnvelope } from './user-address-create-many-user-input-envelope.input';
import { UserAddressWhereUniqueInput } from './user-address-where-unique.input';

@InputType()
export class UserAddressCreateNestedManyWithoutUserInput {

    @Field(() => [UserAddressCreateWithoutUserInput], {nullable:true})
    @Type(() => UserAddressCreateWithoutUserInput)
    create?: Array<UserAddressCreateWithoutUserInput>;

    @Field(() => [UserAddressCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserAddressCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserAddressCreateOrConnectWithoutUserInput>;

    @Field(() => UserAddressCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserAddressCreateManyUserInputEnvelope)
    createMany?: UserAddressCreateManyUserInputEnvelope;

    @Field(() => [UserAddressWhereUniqueInput], {nullable:true})
    @Type(() => UserAddressWhereUniqueInput)
    connect?: Array<UserAddressWhereUniqueInput>;
}
