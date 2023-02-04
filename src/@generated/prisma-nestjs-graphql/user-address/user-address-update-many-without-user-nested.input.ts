import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAddressCreateWithoutUserInput } from './user-address-create-without-user.input';
import { Type } from 'class-transformer';
import { UserAddressCreateOrConnectWithoutUserInput } from './user-address-create-or-connect-without-user.input';
import { UserAddressUpsertWithWhereUniqueWithoutUserInput } from './user-address-upsert-with-where-unique-without-user.input';
import { UserAddressCreateManyUserInputEnvelope } from './user-address-create-many-user-input-envelope.input';
import { UserAddressWhereUniqueInput } from './user-address-where-unique.input';
import { UserAddressUpdateWithWhereUniqueWithoutUserInput } from './user-address-update-with-where-unique-without-user.input';
import { UserAddressUpdateManyWithWhereWithoutUserInput } from './user-address-update-many-with-where-without-user.input';
import { UserAddressScalarWhereInput } from './user-address-scalar-where.input';

@InputType()
export class UserAddressUpdateManyWithoutUserNestedInput {

    @Field(() => [UserAddressCreateWithoutUserInput], {nullable:true})
    @Type(() => UserAddressCreateWithoutUserInput)
    create?: Array<UserAddressCreateWithoutUserInput>;

    @Field(() => [UserAddressCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserAddressCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserAddressCreateOrConnectWithoutUserInput>;

    @Field(() => [UserAddressUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserAddressUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserAddressUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserAddressCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserAddressCreateManyUserInputEnvelope)
    createMany?: UserAddressCreateManyUserInputEnvelope;

    @Field(() => [UserAddressWhereUniqueInput], {nullable:true})
    @Type(() => UserAddressWhereUniqueInput)
    set?: Array<UserAddressWhereUniqueInput>;

    @Field(() => [UserAddressWhereUniqueInput], {nullable:true})
    @Type(() => UserAddressWhereUniqueInput)
    disconnect?: Array<UserAddressWhereUniqueInput>;

    @Field(() => [UserAddressWhereUniqueInput], {nullable:true})
    @Type(() => UserAddressWhereUniqueInput)
    delete?: Array<UserAddressWhereUniqueInput>;

    @Field(() => [UserAddressWhereUniqueInput], {nullable:true})
    @Type(() => UserAddressWhereUniqueInput)
    connect?: Array<UserAddressWhereUniqueInput>;

    @Field(() => [UserAddressUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserAddressUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserAddressUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserAddressUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserAddressUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserAddressUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserAddressScalarWhereInput], {nullable:true})
    @Type(() => UserAddressScalarWhereInput)
    deleteMany?: Array<UserAddressScalarWhereInput>;
}
