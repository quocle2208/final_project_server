import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminUserCreateNestedManyWithoutRoleInput } from '../admin-user/admin-user-create-nested-many-without-role.input';

@InputType()
export class RoleCreateInput {

    @Field(() => String, {nullable:false})
    roleType!: string;

    @Field(() => String, {nullable:false})
    permissions!: string;

    @Field(() => AdminUserCreateNestedManyWithoutRoleInput, {nullable:true})
    admins?: AdminUserCreateNestedManyWithoutRoleInput;
}
