import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutAdminsInput } from './role-create-without-admins.input';

@InputType()
export class RoleCreateOrConnectWithoutAdminsInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: RoleWhereUniqueInput;

    @Field(() => RoleCreateWithoutAdminsInput, {nullable:false})
    @Type(() => RoleCreateWithoutAdminsInput)
    create!: RoleCreateWithoutAdminsInput;
}
