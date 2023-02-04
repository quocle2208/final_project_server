import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserAdrsesInput } from './user-create-without-user-adrses.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserAdrsesInput } from './user-create-or-connect-without-user-adrses.input';
import { UserUpsertWithoutUserAdrsesInput } from './user-upsert-without-user-adrses.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutUserAdrsesInput } from './user-update-without-user-adrses.input';

@InputType()
export class UserUpdateOneWithoutUserAdrsesNestedInput {

    @Field(() => UserCreateWithoutUserAdrsesInput, {nullable:true})
    @Type(() => UserCreateWithoutUserAdrsesInput)
    create?: UserCreateWithoutUserAdrsesInput;

    @Field(() => UserCreateOrConnectWithoutUserAdrsesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserAdrsesInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserAdrsesInput;

    @Field(() => UserUpsertWithoutUserAdrsesInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserAdrsesInput)
    upsert?: UserUpsertWithoutUserAdrsesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutUserAdrsesInput, {nullable:true})
    @Type(() => UserUpdateWithoutUserAdrsesInput)
    update?: UserUpdateWithoutUserAdrsesInput;
}
