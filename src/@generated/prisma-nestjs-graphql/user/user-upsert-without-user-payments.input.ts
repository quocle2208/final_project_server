import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserPaymentsInput } from './user-update-without-user-payments.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserPaymentsInput } from './user-create-without-user-payments.input';

@InputType()
export class UserUpsertWithoutUserPaymentsInput {

    @Field(() => UserUpdateWithoutUserPaymentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserPaymentsInput)
    update!: UserUpdateWithoutUserPaymentsInput;

    @Field(() => UserCreateWithoutUserPaymentsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserPaymentsInput)
    create!: UserCreateWithoutUserPaymentsInput;
}
