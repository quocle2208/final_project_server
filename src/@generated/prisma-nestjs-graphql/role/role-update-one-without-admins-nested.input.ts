import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutAdminsInput } from './role-create-without-admins.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutAdminsInput } from './role-create-or-connect-without-admins.input';
import { RoleUpsertWithoutAdminsInput } from './role-upsert-without-admins.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithoutAdminsInput } from './role-update-without-admins.input';

@InputType()
export class RoleUpdateOneWithoutAdminsNestedInput {

    @Field(() => RoleCreateWithoutAdminsInput, {nullable:true})
    @Type(() => RoleCreateWithoutAdminsInput)
    create?: RoleCreateWithoutAdminsInput;

    @Field(() => RoleCreateOrConnectWithoutAdminsInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutAdminsInput)
    connectOrCreate?: RoleCreateOrConnectWithoutAdminsInput;

    @Field(() => RoleUpsertWithoutAdminsInput, {nullable:true})
    @Type(() => RoleUpsertWithoutAdminsInput)
    upsert?: RoleUpsertWithoutAdminsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: RoleWhereUniqueInput;

    @Field(() => RoleUpdateWithoutAdminsInput, {nullable:true})
    @Type(() => RoleUpdateWithoutAdminsInput)
    update?: RoleUpdateWithoutAdminsInput;
}
