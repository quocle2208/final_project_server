import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class RoleUpdateWithoutAdminsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    roleType?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    permissions?: StringFieldUpdateOperationsInput;
}
