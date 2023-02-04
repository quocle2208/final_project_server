import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdateOneWithoutUserAdrsesNestedInput } from '../user/user-update-one-without-user-adrses-nested.input';

@InputType()
export class UserAddressUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address1?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address2?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    city?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postalCode?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    country?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    telephone?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutUserAdrsesNestedInput, {nullable:true})
    User?: UserUpdateOneWithoutUserAdrsesNestedInput;
}
