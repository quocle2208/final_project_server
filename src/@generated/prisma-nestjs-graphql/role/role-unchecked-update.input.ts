import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AdminUserUncheckedUpdateManyWithoutRoleNestedInput } from '../admin-user/admin-user-unchecked-update-many-without-role-nested.input';

@InputType()
export class RoleUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    roleType?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    permissions?: StringFieldUpdateOperationsInput;

    @Field(() => AdminUserUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    admins?: AdminUserUncheckedUpdateManyWithoutRoleNestedInput;
}
