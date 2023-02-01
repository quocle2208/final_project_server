import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserAdrsesInput } from './user-create-without-user-adrses.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserAdrsesInput } from './user-create-or-connect-without-user-adrses.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserAdrsesInput {

    @Field(() => UserCreateWithoutUserAdrsesInput, {nullable:true})
    @Type(() => UserCreateWithoutUserAdrsesInput)
    create?: UserCreateWithoutUserAdrsesInput;

    @Field(() => UserCreateOrConnectWithoutUserAdrsesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserAdrsesInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserAdrsesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
