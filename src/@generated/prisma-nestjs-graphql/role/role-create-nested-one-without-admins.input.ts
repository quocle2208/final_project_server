import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutAdminsInput } from './role-create-without-admins.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutAdminsInput } from './role-create-or-connect-without-admins.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedOneWithoutAdminsInput {

    @Field(() => RoleCreateWithoutAdminsInput, {nullable:true})
    @Type(() => RoleCreateWithoutAdminsInput)
    create?: RoleCreateWithoutAdminsInput;

    @Field(() => RoleCreateOrConnectWithoutAdminsInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutAdminsInput)
    connectOrCreate?: RoleCreateOrConnectWithoutAdminsInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: RoleWhereUniqueInput;
}
