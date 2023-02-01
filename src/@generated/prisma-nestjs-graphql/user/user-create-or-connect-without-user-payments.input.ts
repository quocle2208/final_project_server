import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserPaymentsInput } from './user-create-without-user-payments.input';

@InputType()
export class UserCreateOrConnectWithoutUserPaymentsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutUserPaymentsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserPaymentsInput)
    create!: UserCreateWithoutUserPaymentsInput;
}
