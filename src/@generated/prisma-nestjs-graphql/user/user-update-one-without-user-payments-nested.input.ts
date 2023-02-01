import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserPaymentsInput } from './user-create-without-user-payments.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserPaymentsInput } from './user-create-or-connect-without-user-payments.input';
import { UserUpsertWithoutUserPaymentsInput } from './user-upsert-without-user-payments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutUserPaymentsInput } from './user-update-without-user-payments.input';

@InputType()
export class UserUpdateOneWithoutUserPaymentsNestedInput {

    @Field(() => UserCreateWithoutUserPaymentsInput, {nullable:true})
    @Type(() => UserCreateWithoutUserPaymentsInput)
    create?: UserCreateWithoutUserPaymentsInput;

    @Field(() => UserCreateOrConnectWithoutUserPaymentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserPaymentsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserPaymentsInput;

    @Field(() => UserUpsertWithoutUserPaymentsInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserPaymentsInput)
    upsert?: UserUpsertWithoutUserPaymentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutUserPaymentsInput, {nullable:true})
    @Type(() => UserUpdateWithoutUserPaymentsInput)
    update?: UserUpdateWithoutUserPaymentsInput;
}
