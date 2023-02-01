import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserAdrsesInput } from './user-create-without-user-adrses.input';

@InputType()
export class UserCreateOrConnectWithoutUserAdrsesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutUserAdrsesInput, {nullable:false})
    @Type(() => UserCreateWithoutUserAdrsesInput)
    create!: UserCreateWithoutUserAdrsesInput;
}
