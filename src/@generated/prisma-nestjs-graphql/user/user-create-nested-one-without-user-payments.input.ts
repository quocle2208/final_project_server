import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserPaymentsInput } from './user-create-without-user-payments.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserPaymentsInput } from './user-create-or-connect-without-user-payments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserPaymentsInput {

    @Field(() => UserCreateWithoutUserPaymentsInput, {nullable:true})
    @Type(() => UserCreateWithoutUserPaymentsInput)
    create?: UserCreateWithoutUserPaymentsInput;

    @Field(() => UserCreateOrConnectWithoutUserPaymentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserPaymentsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserPaymentsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
