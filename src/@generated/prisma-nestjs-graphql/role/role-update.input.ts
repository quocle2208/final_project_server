import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AdminUserUpdateManyWithoutRoleNestedInput } from '../admin-user/admin-user-update-many-without-role-nested.input';

@InputType()
export class RoleUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    roleType?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    permissions?: StringFieldUpdateOperationsInput;

    @Field(() => AdminUserUpdateManyWithoutRoleNestedInput, {nullable:true})
    admins?: AdminUserUpdateManyWithoutRoleNestedInput;
}
