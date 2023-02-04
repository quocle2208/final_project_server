import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AdminUserUncheckedCreateNestedManyWithoutRoleInput } from '../admin-user/admin-user-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    roleType!: string;

    @Field(() => String, {nullable:false})
    permissions!: string;

    @Field(() => AdminUserUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    admins?: AdminUserUncheckedCreateNestedManyWithoutRoleInput;
}
