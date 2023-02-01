import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserAdrsesInput } from './user-update-without-user-adrses.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserAdrsesInput } from './user-create-without-user-adrses.input';

@InputType()
export class UserUpsertWithoutUserAdrsesInput {

    @Field(() => UserUpdateWithoutUserAdrsesInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserAdrsesInput)
    update!: UserUpdateWithoutUserAdrsesInput;

    @Field(() => UserCreateWithoutUserAdrsesInput, {nullable:false})
    @Type(() => UserCreateWithoutUserAdrsesInput)
    create!: UserCreateWithoutUserAdrsesInput;
}
